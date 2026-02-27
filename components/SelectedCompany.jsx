import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function SelectedCompany({ currentPage }) {
    const [selectedCompany, setSelectedCompany] = useState({ id: "", name: "", image: "" });

    useEffect(() => {
        const cookie = Cookies.get("mahy_company");
        setSelectedCompany(JSON.parse(cookie));
    }, []);

    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm max-w-md mb-4">
            <p className="text-sm text-gray-500 uppercase tracking-wide">
                Selected Company
            </p>
            <p className="mt-2 text-xl font-semibold text-gray-900">
                {selectedCompany.name}
            </p>
            <Link
                href={`/portal/company-select?redirect=/contact-us/${currentPage}`}
                className="inline-block mt-3 text-sm font-medium text-white bg-black px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
                Change Selected Company
            </Link>
        </div>
    );
}

export default SelectedCompany