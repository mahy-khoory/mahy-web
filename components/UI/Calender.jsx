import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";

function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
    return (
        <DayPicker
            showOutsideDays={showOutsideDays}
            captionLayout="dropdown"
            fromYear={1950}
            toYear={new Date().getFullYear() + 5}
            className={cn("p-4 bg-white rounded-xl shadow-lg", className)}
            classNames={{
                months: "flex flex-col",
                month: "space-y-4",
                caption: "flex justify-between items-center mb-2",
                caption_label: "hidden",
                dropdowns: "flex gap-2",
                dropdown:
                    "h-8 rounded-md border border-gray-300 bg-gray-50 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#79c4e7]",
                nav: "flex items-center gap-1 justify-between mb-3",
                nav_button:
                    "h-8 w-8 rounded-md hover:bg-gray-100 flex items-center justify-center transition",
                table: "w-full border-collapse",
                head_row: "flex",
                head_cell:
                    "w-9 text-xs font-medium text-gray-500 text-center",
                row: "flex w-full mt-2",
                cell: "w-9 h-9 text-center relative",
                day:
                    "h-9 w-9 text-center rounded-md text-sm hover:bg-gray-100 transition",
                day_selected:
                    "bg-[#79c4e7] text-white hover:bg-[#5fb3db]",
                day_today:
                    "border border-[#79c4e7] text-[#79c4e7] font-semibold",
                day_outside: "text-gray-300",
                day_disabled: "text-gray-300 opacity-50",
                ...classNames,
            }}
            components={{
                IconLeft: () => <ChevronLeft className="h-4 w-4" />,
                IconRight: () => <ChevronRight className="h-4 w-4" />,
            }}
            {...props}
        />
    );
}
Calendar.displayName = "Calendar";

export { Calendar };
