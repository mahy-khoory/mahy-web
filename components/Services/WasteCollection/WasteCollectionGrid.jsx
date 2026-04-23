import { Mail } from "lucide-react";
import Image from "next/image";
import { FaQuestion } from "react-icons/fa6";

function WasteCollectionGrid({
  heading = "Faq Edge",
  text1,
  text2,
  text3,
  items = [],
  icon,


  image, 
  images = [], 
}) {
  const finalImages =
    images.length > 0
      ? images
      : image
      ? [image]
      : [
       
          "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776627437/digital-document-online-electronic-signature-document-management-paperless-office-e-signing-signing-business-contract-concept-metaverse.jpg_zvimmr.jpg",
         "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776627437/digital-document-online-electronic-signature-document-management-paperless-office-e-signing-signing-business-contract-concept-metaverse.jpg_zvimmr.jpg",
         "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776627437/digital-document-online-electronic-signature-document-management-paperless-office-e-signing-signing-business-contract-concept-metaverse.jpg_zvimmr.jpg",
        ];

  if (items.length === 0) {
    items = [
      {
        query: "What is your return policy?",
        reply:
          "Successful people do what unsuccessful people are not willing to do.",
      },
      {
        query: "Need Help?",
        reply:
          "Successful people do what unsuccessful people are not willing to do.",
      },
    ];
  }

  return (
    <section className="bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2">

        {finalImages.length === 1 ? (
          <div className="relative h-90 md:h-full bg-black">
            <Image
              src={finalImages[0]}
              alt="Waste Collection"
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="flex flex-col gap-3 h-[350px] md:h-full bg-black">
            {finalImages.map((img, index) => (
              <div key={index} className="relative flex-1 overflow-hidden">
                <Image
                  src={img}
                  alt={`Waste ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}

        <div className="py-8 md:py-20 px-5 max-w-lg mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mt-2">
            {heading}
          </h2>

          <p className="text-sm text-gray-600 mt-6">{text1}</p>

          <div className="relative mt-5">
            {text2 && (
              <p className="text-sm text-gray-600 mb-6">{text2}</p>
            )}

            <div className="relative space-y-6 text-sm">
              {items.map((item, i) => (
                <div key={i} className="relative z-10">
                  <div className="flex gap-3 items-center">
                    <div className="p-2 bg-slate-600 text-white aspect-square">
                      {icon ? icon : <FaQuestion size={25} />}
                    </div>
                    <h3>{item.query}</h3>
                  </div>

                  {item.reply && (
                    <div className="flex gap-3 items-center mt-4">
                      <div className="p-2 bg-[#2c3f6e] text-white aspect-square">
                        <Mail size={25} />
                      </div>
                      <p className="text-gray-700">{item.reply}</p>
                    </div>
                  )}
                </div>
              ))}

              <div className="absolute top-0 bottom-0 left-5 w-px bg-gray-400" />
            </div>
          </div>

          {text3 && (
            <p className="text-sm text-gray-600 mt-6">{text3}</p>
          )}

          {/* <PrimaryButton className={"mt-5 md:mt-10"} /> */}
        </div>
      </div>
    </section>
  );
}

export default WasteCollectionGrid;