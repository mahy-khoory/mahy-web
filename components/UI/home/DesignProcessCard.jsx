import Image from "next/image"

function DesignProcessCard({ process, locale }) {
    return (
        <div className={`lg:relative ${locale === "ar" ? process.rightShift : process.leftShift} flex flex-col justify-center gap-10 px-5`}>
            <div className="flex">
                <div className="relative -top-4 w-18 h-18 bg-white border border-gray-50 shadow-lg rounded-full flex-none z-10">
                    <Image
                        src={process.icon}
                        alt={process.title}
                        fill
                        className="p-5"
                    />
                </div>
                <div className="w-14 h-1 border-b mt-3 relative -left-1"></div>
                <div className="ml-3">
                    <span className="font-semibold text-lg">{process.title}</span>
                    <p className="text-gray-600 font-medium text-sm mt-1">
                        {process.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DesignProcessCard