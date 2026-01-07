"use client"

import { ArrowRight } from "lucide-react";
import { useState } from "react";

function CorporateGovernance() {
    const items = [
        {
            heading: "ZTE CORPORATION Notification Letter with Reply Form for Non-Registered Holder",
            title: "Shareholder Communication",
            text: "Official notification issued to non-registered holders outlining meeting details, response procedures, and participation requirements."
        },
        {
            heading: "ZTE CORPORATION Notification Letter with Reply Form for Registered Shareholder",
            title: "Registered Shareholder Notice",
            text: "Formal notice sent to registered shareholders providing instructions for confirmation, voting, and meeting attendance."
        },
        {
            heading: "ZTE CORPORATION PROXY FORM FOR THE FIRST EXTRAORDINARY GENERAL MEETING OF 2025 OF ZTE CORPORATION TO BE HELD ON THURSDAY, 24 APRIL 2025",
            title: "Proxy Authorization",
            text: "Proxy form enabling shareholders to appoint representatives to vote on their behalf at the extraordinary general meeting."
        },
        {
            heading: "ZTE CORPORATION Circular of the First Extraordinary General Meeting of 2025",
            title: "Meeting Circular",
            text: "Comprehensive circular detailing resolutions, agenda items, and governance matters for shareholder consideration."
        },
        {
            heading: "ZTE CORPORATION SUPPLEMENTARY NOTICE OF THE 2024 ANNUAL GENERAL MEETING",
            title: "Supplementary Notice",
            text: "Additional notice providing updates, clarifications, and revised arrangements for the annual general meeting."
        },
        {
            heading: "ZTE CORPORATION PROXY FORM FOR THE 2024 ANNUAL GENERAL MEETING OF ZTE CORPORATION TO BE HELD ON FRIDAY, 28 MARCH 2025 (REVISED)",
            title: "Revised Proxy Form",
            text: "Updated proxy document reflecting amended details for shareholder representation and voting at the annual general meeting."
        },
    ];

    return (
        <section className="bg-gray-50 py-7 md:py-10">
            <div className="max-w-7xl mx-auto px-5 space-y-6">
                {items.map((item, i) => (
                    <Card key={i} item={item} />
                ))}
            </div>
        </section>
    )
};

const Card = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-white rounded-2xl shadow-sm py-1">
            <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center gap-8 w-full py-5 px-10">
                <p className="text-sm md:text-xl text-start">{item.heading}</p>
                <div className={`border border-gray-500 rounded-full p-3 ${isOpen && "rotate-90"} transition-transform duration-300`}>
                    <ArrowRight size={20} />
                </div>
            </button>
            {isOpen && (
                <div className="border-t border-gray-300 pt-6 pb-5 px-10">
                    <h2 className="md:text-lg font-semibold">{item.title}</h2>
                    <p className="text-sm md: text-md mt-2 md:mt-3 text-gray-600">{item.text}</p>
                </div>
            )}
        </div>
    )
}

export default CorporateGovernance