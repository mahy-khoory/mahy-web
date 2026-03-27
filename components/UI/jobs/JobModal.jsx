"use client"

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Slide, ToastContainer, toast } from 'react-toastify';

export default function JobModal({ formLabels, toastText }) {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        toast(toastText);
        closeModal();
    }

    return (
        <>
            <div className='flex justify-center'>
                <button type="button" onClick={openModal}
                    className="rounded-lg text-sm b-base b-base-hover px-6 py-3 font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                    {formLabels.cta}
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-xl font-semibold text-gray-900"
                                    >
                                        {formLabels.title}
                                    </Dialog.Title>

                                    <form onSubmit={handleSubmit} className="mt-4 space-y-4" encType="multipart/form-data">
                                        {/* Name */}
                                        <div className='pt-3'>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                {formLabels.label1}
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                                            />
                                        </div>
                                        {/* Email */}
                                        <div className='pt-2'>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                {formLabels.label2}

                                            </label>
                                            <input
                                                type="email"
                                                required
                                                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                                            />
                                        </div>
                                        {/* Resume */}
                                        <div className='pt-2'>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                {formLabels.label3}
                                            </label>
                                            <input
                                                type="file"
                                                accept="application/pdf"
                                                required
                                                className="mt-1 w-full text-sm text-gray-600 file:mr-4 file:rounded-md file:border-0 file:bg-teal-50 file:px-4 file:py-2 file:text-sm file:font-medium file:text-[#2c3f6e] hover:file:bg-[#8cc9e6] hover:file:text-white"
                                            />
                                        </div>
                                        {/* Actions */}
                                        <div className="mt-6 flex justify-end gap-3">
                                            <button
                                                type="button"
                                                onClick={closeModal}
                                                className="rounded-md border px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                {formLabels.button1}
                                            </button>

                                            <button
                                                type="submit"
                                                className="rounded-md b-base b-base-hover px-4 py-2 text-sm font-medium text-white"
                                            >
                                                {formLabels.button2}
                                            </button>
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            <ToastContainer
                transition={Slide}
                hideProgressBar
                autoClose={3000}
                position="top-right"
                toastStyle={{
                    transition: "all 0.5s ease-in-out",
                }}
            />
        </>
    )
}
