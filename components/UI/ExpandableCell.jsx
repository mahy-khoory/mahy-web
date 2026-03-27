import { useState } from "react";

export default function ExpandableCell({ text, tableClasses }) {
    const [expanded, setExpanded] = useState(false);
    const isLong = text && text.length > 120;
    return (
        <td className={`${tableClasses} text-white/70 whitespace-normal leading-5 max-w-65`}>
            <div className={`${!expanded && "line-clamp-2"}`}>
                {text || "-"}
            </div>
            {isLong && (
                <button onClick={() => setExpanded((prev) => !prev)}
                    className="mt-1 text-xs text-blue-400 hover:text-blue-300 underline">
                    {expanded ? "Show less" : "Expand"}
                </button>
            )}
        </td>
    );
};