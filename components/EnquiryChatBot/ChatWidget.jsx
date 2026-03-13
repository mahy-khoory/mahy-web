"use client";

import { useEffect, useRef, useState } from "react";

import ChatLayout from "./ChatLayout";
import ChatMessages from "./ChatMessages";
import ChatOptionButtons from "./ChatOptionButtons";
import CountryDropdown from "./CountryDropdown";
import ChatInput from "./ChatInput";
import ChatLocationPicker from "./ChatLocationPicker";
import { COUNTRY_LIST } from "@/utils/countries";
import LottieButton from "./LottieButton";
import IdlePrompt from "./IdlePrompt";
import MahyraAvatar from "./MahyraAvatar";
import { useCart } from "@/components/Providers/CartProvider";

export default function ChatWidget({ data, locale }) {
  const { flow, layout } = data;
  const [messages, setMessages] = useState([
    { from: "bot", text: flow.q1_business.text },
  ]);
  const [current, setCurrent] = useState("q1_business");
  const [history, setHistory] = useState(["q1_business"]);
  const [answers, setAnswers] = useState({});
  const [isTyping, setIsTyping] = useState(false);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const { isOpen: isCartOpen } = useCart();

  const IDLE_DELAY = 12000;

  const idleTimer = useRef(null);
  const [showIdlePrompt, setShowIdlePrompt] = useState(false);
  const idleChimeRef = useRef(null);
  const idleChimePlayed = useRef(false);

  function startIdleCountdown() {
    if (idleTimer.current) clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => {
      if (!isWidgetOpen) setShowIdlePrompt(true);
    }, IDLE_DELAY);
  }

  function handleIdleTease() {
    setShowIdlePrompt(false);
    if (!isWidgetOpen) startIdleCountdown();
  }

  useEffect(() => {
    if (isWidgetOpen) {
      setShowIdlePrompt(false);
      if (idleTimer.current) clearTimeout(idleTimer.current);
      return;
    }

    startIdleCountdown();

    return () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, [isWidgetOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    idleChimeRef.current = new Audio("/audio/idle-pop.wav");
    idleChimeRef.current.volume = 0.4;

    return () => {
      idleChimeRef.current?.pause();
      idleChimeRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!showIdlePrompt || idleChimePlayed.current) return;
    if (!idleChimeRef.current) return;

    const playSound = async () => {
      try {
        idleChimeRef.current.currentTime = 0;
        await idleChimeRef.current.play();
      } catch (error) {
        console.warn("Idle prompt sound blocked", error);
      } finally {
        idleChimePlayed.current = true;
      }
    };

    playSound();
  }, [showIdlePrompt]);

  const messagesRef = useRef(null);

  function addBot(text) {
    setMessages((prev) => [...prev, { from: "bot", text }]);
    setTimeout(() => messagesRef.current?.scrollToBottom?.(), 50);
  }

  function addUser(text) {
    setMessages((prev) => [...prev, { from: "user", text }]);
    setTimeout(() => messagesRef.current?.scrollToBottom?.(), 50);
  }

  function saveAnswer(field, value, displayValue) {
    if (!field) return;

    const questionText = flow[current]?.text || "";
    const storedValue =
      typeof displayValue !== "undefined" ? displayValue : value;

    setAnswers((prev) => ({
      ...prev,
      [field]: value,
      _qmap: [
        ...(prev._qmap || []),
        { question: questionText, answer: storedValue },
      ],
    }));
  }

  async function submitToCRM(payload) {
    // console.log(payload);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}api/crm/lead/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const data = await res.json();

      // console.log("CRM Response:", data);

      if (!res.ok) {
        throw new Error(data.message || "Lead submission failed");
      }

      return data;
    } catch (err) {
      console.error("CRM submission error:", err);
    }
  }

  function handleOptionSelect(optionLabel) {
    const question = flow[current];
    if (!question) return;

    addUser(optionLabel);

    const cleanValue = optionLabel.replace(/^[^\w]+/, "").trim();
    saveAnswer(question.field, cleanValue);

    const nextKey = question.options?.find(
      (o) => o.label === optionLabel,
    )?.next;

    progress(nextKey);
  }

  // function handleTextSubmit(text) {
  //   const question = flow[current];
  //   if (!question) return;

  //   addUser(text);
  //   saveAnswer(question.field, text);

  //   if (question.submit) {
  //     finalizeSubmission();
  //     return;
  //   }

  //   progress(question.next);
  // }

  function handleTextSubmit(text) {
    const question = flow[current];
    if (!question) return;

    addUser(text);

    const updatedAnswers = {
      ...answers,
      [question.field]: text,
      _qmap: [
        ...(answers._qmap || []),
        {
          question: question.text,
          answer: text,
        },
      ],
    };

    setAnswers(updatedAnswers);

    if (question.submit) {
      finalizeSubmission(updatedAnswers);
      return;
    }

    progress(question.next);
  }

  function handleCountrySelect(country) {
    const question = flow[current];
    if (!question) return;

    addUser(country);
    saveAnswer(question.field, country);
    progress(question.next);
  }

  async function finalizeSubmission(finalAnswers = answers) {
    setIsTyping(true);
    addBot(layout.submit1);

    setTimeout(async () => {
      await submitToCRM({ answers, conversation: messages });
      setIsTyping(false);
      addBot(layout.submit2);
      setCurrent("done");
      setHistory((prev) => [...prev, "done"]);
    }, 900);
  }

  function progress(nextKey) {
    if (!nextKey || !flow[nextKey]) {
      setCurrent("done");
      setHistory((prev) =>
        prev[prev.length - 1] === "done" ? prev : [...prev, "done"],
      );
      return;
    }

    setIsTyping(true);

    setTimeout(async () => {
      const nextQuestion = flow[nextKey];
      addBot(nextQuestion.text);

      if (nextQuestion.submit && nextQuestion.type === "info") {
        await submitToCRM({ answers: finalAnswers, conversation: messages });
        setIsTyping(false);
        setCurrent("done");
        setHistory((prev) => [...prev, "done"]);
        return;
      }

      setIsTyping(false);
      setCurrent(nextKey);
      setHistory((prev) => [...prev, nextKey]);
    }, 650);
  }

  const question = flow[current];
  const options =
    question?.type === "options" ? question.options.map((o) => o.label) : null;

  const isTextStage =
    question && ["text", "email", "phone"].includes(question.type);

  const isCountryStage = question?.type === "country";
  const isLocationStage = question?.type === "location";
  const canInteract = current !== "done" && !isTyping;
  const prompt = current !== "done" ? question?.text : null;
  const canChangeSelection =
    history.length > 1 && current !== "done" && !isTyping;

  function getPlaceholder() {
    if (!question) return layout.type;
    if (question.type === "email") return "name@company.com";
    if (question.type === "phone") return "+971 55 123 4567";
    return layout.type;
  }

  function handleLocationSelect({ lat, lng }) {
    if (!question || question.type !== "location") return;

    const formatted = `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
    const confirmationText = layout.locationConfirm
      ? `${layout.locationConfirm} (${formatted})`
      : `Shared my location (${formatted})`;

    addUser(confirmationText);
    saveAnswer(question.field, { lat, lng }, formatted);
    progress(question.next);
  }

  function handleChangeSelection() {
    setHistory((prevHistory) => {
      if (prevHistory.length <= 1) return prevHistory;
      const previousKey = prevHistory[prevHistory.length - 2];
      const trimmedHistory = prevHistory.slice(0, -1);

      setCurrent(previousKey);
      setIsTyping(false);

      setMessages((prevMessages) => {
        const updated = [...prevMessages];
        if (updated.length && updated[updated.length - 1]?.from === "bot") {
          updated.pop();
        }
        if (updated.length && updated[updated.length - 1]?.from === "user") {
          updated.pop();
        }
        return updated;
      });

      setAnswers((prevAnswers) => {
        const updated = { ...prevAnswers };
        if (Array.isArray(updated._qmap)) {
          updated._qmap = updated._qmap.slice(0, -1);
        }
        const fieldKey = flow[previousKey]?.field;
        if (fieldKey) {
          delete updated[fieldKey];
        }
        return updated;
      });

      return trimmedHistory;
    });
  }

  return (
    <>
      {/* {!isWidgetOpen && (
        <button
          type="button"
          onClick={() => setIsWidgetOpen(true)}
          className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white shadow-[0_20px_45px_rgba(15,23,42,0.35)] transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
          <span className="sr-only">Open concierge assistant</span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full border border-white/15 transition duration-200 group-hover:border-white/30"
          />
          <span
            aria-hidden="true"
            className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(255,255,255,0.85)]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="relative h-5 w-5"
          >
            <path d="M21 12a9 9 0 0 1-10 9 9.6 9.6 0 0 1-4-.9L3 21l.9-4a9.6 9.6 0 0 1-.9-4 9 9 0 1 1 18 0Z" />
            <path d="M8 10h8" />
            <path d="M8 14h5" />
          </svg>
        </button>
      )} */}

      {!isWidgetOpen && !isCartOpen && (
        <div
          className={`fixed bottom-4 ${locale === "ar" ? "left-4 sm:left-6" : "right-4 sm:right-6"}  sm:bottom-6  z-9999 flex flex-col items-end gap-3 pointer-events-none`}
        >
          <div
            className="relative w-full max-w-65 sm:max-w-70 pointer-events-auto"
            style={{ width: "min(80vw, 280px)" }}
          >
            <MahyraAvatar visible={showIdlePrompt} locale={locale} />
            <IdlePrompt
              locale={locale}
              data={data.idle}
              visible={showIdlePrompt}
              onOpen={() => {
                handleIdleTease();
                setIsWidgetOpen(true);
              }}
            />
          </div>
          <div className="pointer-events-auto">
            <LottieButton
              locale={locale}
              onInteract={handleIdleTease}
              onClick={() => {
                handleIdleTease();
                setIsWidgetOpen(true);
              }}
            />
          </div>
        </div>
      )}

      {isWidgetOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsWidgetOpen(false)}
          />

          <div
            className={`fixed bottom-6 ${locale === "ar" ? "left-6" : "right-6"}  z-50 w-[calc(100vw-3rem)] max-w-105 sm:w-full`}
          >
            <ChatLayout
              onClose={() => setIsWidgetOpen(false)}
              className="h-[80vh] max-h-[640px]"
              data={layout}
            >
              {" "}
              <ChatMessages
                ref={messagesRef}
                messages={messages}
                isTyping={isTyping}
                data={layout}
                locale={locale}
              />
              <footer className="space-y-4 border-t border-slate-100 bg-slate-50/95 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                {prompt && (
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-slate-600">
                      {prompt}
                    </p>
                    {canChangeSelection && (
                      <button
                        type="button"
                        onClick={handleChangeSelection}
                        className="text-xs font-semibold uppercase tracking-widest text-slate-500 transition hover:text-slate-900"
                      >
                        {layout.change}
                      </button>
                    )}
                  </div>
                )}

                {canInteract && options && (
                  <ChatOptionButtons
                    options={options}
                    onSelect={handleOptionSelect}
                    locale={locale}
                  />
                )}

                {canInteract && isCountryStage && (
                  <CountryDropdown
                    countries={COUNTRY_LIST}
                    onSubmit={handleCountrySelect}
                  />
                )}
                {canInteract && isLocationStage && (
                  <ChatLocationPicker
                    onSelect={handleLocationSelect}
                    strings={{
                      prompt: layout.locationPrompt,
                      hint: layout.locationHint,
                      useCurrent: layout.locationUseCurrent,
                      fetching: layout.locationFetching,
                      share: layout.locationShare,
                      approx: layout.locationApprox,
                      fallback: layout.locationFallback,
                      success: layout.locationSuccess,
                    }}
                  />
                )}
                {canInteract && isTextStage && (
                  <ChatInput
                    placeholder={getPlaceholder()}
                    onSubmit={handleTextSubmit}
                    type={question.type}
                    data={layout}
                  />
                )}

                {!canInteract && current === "done" && (
                  <div className="text-center text-xs text-slate-500">
                    <button
                      onClick={() => {
                        setMessages([
                          { from: "bot", text: flow.q1_business.text },
                        ]);
                        setAnswers({});
                        setCurrent("q1_business");
                        setHistory(["q1_business"]);
                        setIsTyping(false);
                      }}
                      className="mt-2 rounded-full border border-slate-200 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-blue-600"
                    >
                      {layout.start}
                    </button>
                  </div>
                )}
              </footer>
            </ChatLayout>
          </div>
        </>
      )}
    </>
  );
}
