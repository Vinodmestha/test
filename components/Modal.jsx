import React from 'react'

export default function Modal({ title, children }) {
    return (
        <div class="w-full relative">
            <button type="button" class="modal-button  py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700" data-pd-overlay="#subscribe-form-modal" data-modal-target="subscribe-form-modal" data-modal-toggle="subscribe-form-modal"> Subscribe modal </button>
            <div id="subscribe-form-modal" class="pd-overlay  hidden w-full h-full fixed top-0 left-0 z-[100] overflow-x-hidden overflow-y-auto">
                <div class=" opacity-0  ease-out  sm:max-w-lg sm:w-full m-5 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
                    <div class="flex flex-col bg-white rounded-2xl py-4 px-5">
                        <div class="flex justify-between items-center pb-4 border-b border-gray-200">
                            <h4 class="text-sm text-gray-900 font-medium">{title}</h4>
                            <button class="block cursor-pointer close-modal-button" data-pd-overlay="#subscribe-form-modal" data-modal-target="subscribe-form-modal">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.75732 7.75739L16.2426 16.2427M16.2426 7.75739L7.75732 16.2427" stroke="black" stroke-width="1.6" stroke-linecap="round" />
                                </svg>
                            </button>
                        </div>
                        <div class="overflow-y-auto py-4 min-h-[130px]">
                            {children}
                        </div>
                        <div class="flex items-center justify-end pt-4 border-t border-gray-200 space-x-4">
                            <button type="button" class="py-2.5 px-5 text-xs bg-indigo-50 text-indigo-500 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-100 close-modal-button" data-pd-overlay="#subscribe-form-modal" data-modal-target="subscribe-form-modal">Cancel</button>
                            <button type="button" class="py-2.5 px-5 text-xs  bg-indigo-500 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700 close-modal-button" data-pd-overlay="#subscribe-form-modal" data-modal-target="subscribe-form-modal">Okay, got it</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
