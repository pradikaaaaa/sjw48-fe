"use client"

import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const TalentBio = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-4 px-2 w-full">
                <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:bg-transparent dark:shadow-none border border-slate-200">
                    <p className="text-sm text-gray-600 dark:text-white">Job</p>
                    <p className="text-base font-medium text-navy-700 dark:text-white">
                        MC / Komika
                    </p>
                </div>

                <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:bg-transparent dark:shadow-none border border-slate-200">
                    <p className="text-sm text-gray-600 dark:text-white">Oshimen</p>
                    <p className="text-base font-medium text-navy-700 dark:text-white">
                       Greesella Adhalia
                    </p>
                </div>

                <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:bg-transparent dark:shadow-none border border-slate-200">
                    <p className="text-sm text-gray-600 dark:text-white">Jumlah Kedatangan Teater</p>
                    <p className="text-base font-medium text-navy-700 dark:text-white">
                       103
                    </p>
                </div>

                <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:bg-transparent dark:shadow-none border border-slate-200">
                    <p className="text-sm text-gray-600 dark:text-white">Sosial Media</p>
                    {/* <p className="text-base font-medium text-navy-700 dark:text-black">
                    </p> */}
                    <div className="grid grid-cols-6 gap-1 font-medium dark:text-white">
                        <a href="">
                            <FaInstagram />
                        </a>
                        <a>
                            <FaXTwitter />
                        </a>
                        <a>
                            <FaTiktok />
                        </a>
                    </div>
                </div>
               
            </div>
        </>
    )
}

export default TalentBio;