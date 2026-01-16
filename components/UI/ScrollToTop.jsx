import { useRouter } from "next/navigation";

function ScrollToTop({ href, children, className, ariaLabel, onClick }) {
    const router = useRouter();
    const scrollToTop = () => {
        if (onClick) onClick();

        if (window.scrollY === 0) {
            router.push(href);
            return;
        }

        const onScrollEnd = () => {
            if (window.scrollY <= 0) {
                window.removeEventListener("scroll", onScrollEnd);
                router.push(href);
            }
        };

        window.addEventListener("scroll", onScrollEnd, { passive: true });
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button className={className} onClick={scrollToTop} aria-label={ariaLabel}>
            {children}
        </button>
    )
}

export default ScrollToTop