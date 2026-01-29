import { Check } from "lucide-react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

function CheckFilters({ searchKey, label, list, count }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const searchValues =
        searchParams.get(searchKey)?.split(",") || [];

    const handleClick = (searchValue) => {
        const values = new Set(searchValues);

        values.has(searchValue)
            ? values.delete(searchValue)
            : values.add(searchValue);

        const params = new URLSearchParams(searchParams.toString());

        values.size
            ? params.set(searchKey, [...values].join(","))
            : params.delete(searchKey);

        router.replace(`${pathname}?${params.toString()}`, {
            scroll: false,
        });
    };

    return (
        <div className="mb-6">
            <p className="text-sm font-medium text-gray-700 mb-4">{label} ({count})</p>
            <div className="flex flex-wrap gap-2">
                {list.map((item, index) => (
                    <button className={`flex items-center gap-2 border text-sm px-3 py-1 rounded-lg hover:bg-[#79c4e7] hover:text-white hover:border-[#79c4e7] transition-colors duration-300
                        ${searchValues.includes(index.toString()) ? "bg-[#79c4e7] text-white border-[#79c4e7]" : "border-gray-500 text-gray-500"}`}
                        onClick={() => handleClick(index.toString())} key={item.id}>
                        {searchValues.includes(index.toString()) && <Check />}
                        <div>{item.label}</div>
                    </button>
                ))}
            </div>
        </div >
    )
}

export default CheckFilters