import { Check } from "lucide-react"
import Image from "next/image"

function CompaniesSectors({ image, title, texts, companiesHeading = false, items, text2, items2 }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
                <h2 className="text-4xl font-semibold t-base">{title}</h2>
                {texts && texts.map((text, i) => (
                    <p key={i} className="text-gray-600 mt-4">{text}</p>
                ))}
                <div className="mt-6">
                    {companiesHeading &&
                        <p className="text-gray-600 font-semibold mb-5">Companies</p>
                    }
                    <div className="space-y-4">
                        {items.map((item, i) => (
                            <div key={i} className="flex gap-3">
                                <div className="b-base rounded-full p-1 h-fit">
                                    <Check size={13} color="white" />
                                </div>
                                <p className="text-sm text-gray-700">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {text2 && (
                    <p className="text-gray-600 mt-6">{text2}</p>
                )}

                {items2 && (
                    <div className="space-y-4 mt-4">
                        {items2.map((item, i) => (
                            <div key={i} className="flex gap-3">
                                <div className="b-base rounded-full p-1 h-fit">
                                    <Check size={13} color="white" />
                                </div>
                                <p className="text-sm text-gray-700">{item}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="relative h-full rounded-2xl overflow-hidden">
                <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
            </div>
        </div>
    )
}

export default CompaniesSectors