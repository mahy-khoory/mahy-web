import Image from "next/image";

const BusinessStepCard = ({ id, title, description, icon }) => {
    return (
        <div className="relative group step-card-container" dir="ltr">
            <div className="relative lg:absolute inset-0 h-50 lg:h-68 z-20 flex items-center justify-between pointer-events-none mr-6 lg:mr-0">
                <div dir="ltr" className="">
                    <span className="font-semibold">{title}</span>
                    <p className="mt-2 text-sm font-medium">{description}</p>
                </div>
                <div className="number relative -right-1 lg:-right-3 text-4xl font-bold">0{id}</div>
            </div>
            <div className="step-card absolute top-0 right-9 lg:relative lg:right-0 rotate-45 w-50 h-50 lg:w-auto lg:h-64">
                <div className="card-content relative z-10 bg-white w-full h-full">
                    <div className="step-card-icon h-24 w-24 bg-gray-100 rounded-bl-full">
                        <div className="relative left-6 -rotate-45">
                            <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12 2L2 22h20L12 2z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="bottom absolute h-full w-4 -rotate-2 -right-2 top-0"></div>
            </div>
        </div >
    );
};

export default BusinessStepCard;