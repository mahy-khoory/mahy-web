"use client"

import React, { Fragment } from 'react'
import { HiSearch } from 'react-icons/hi'
import CheckFilters from './CheckFilters'
import ResetButton from './ResetButton'
import { usePathname, useRouter } from 'next/navigation'

function Filters({ filters, search }) {

    const [searchValue, setSearchValue] = React.useState(search || "");
    const router = useRouter();
    const pathname = usePathname();
    const onSubmit = (e) => {
        e.preventDefault();
        router.replace(`${pathname}?search=${searchValue}#list`);
        setSearchValue("");
        setShowFilters(false);
    }

    const [showFilters, setShowFilters] = React.useState(false);

    const handleShowFilters = () => {
        if (!showFilters) document.body.style.overflow = 'hidden lg:auto';
        else document.body.style.overflow = 'auto';
        setShowFilters(!showFilters);
    }

    return (
        <Fragment>
            <button
                onClick={handleShowFilters}
                className={`
                    fixed bottom-3 left-3 ${showFilters ? "z-50" : "z-20"} 
                    rounded-3xl border-base px-6 py-2 t-base lg:hidden`}>
                {showFilters ? "Close" : "Filters"}
            </button>

            <div className={`
                ${showFilters ? "h-screen pt-20 opacity-100 px-5" : "opacity-0 pointer-events-none lg:pointer-events-auto lg:opacity-100"}
                overflow-y-scroll fixed z-40 transition-opacity duration-500 inset-0 col-span-2 pt-7 px-5 pb-12 lg:pb-7 bg-white rounded-3xl border border-[#E7E3DA] lg:sticky lg:top-20 h-fit mb-10 lg:mb-0`}>
                {/* <div className="relative mb-7 group">
                    <form onSubmit={onSubmit}>
                        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} name='search' className="border border-gray-300 f-base rounded-xl py-2 px-4 w-full text-sm pr-8 relative z-10" placeholder="" />
                        <div className='absolute inset-0 flex justify-end items-center right-2'>
                            <HiSearch className='t-base' />
                        </div>
                    </form>
                </div> */}

                {filters.map((filter, index) => (
                    <CheckFilters key={index} searchKey={filter.key} label={filter.title} list={filter.options} count={filter.count} />
                ))}
                <ResetButton />
            </div>
        </Fragment>
    )
}

export default Filters