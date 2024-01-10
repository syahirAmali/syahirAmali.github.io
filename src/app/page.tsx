'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
    const [isOpen, setIsOpen] = useState(false)
    const [isRnDOpen, setIsRnDOpen] = useState(false)
    const [isTechStackOpen, setIsTechStackOpen] = useState(false)

    return (
        <main>
            <div className="flex items-center">
                <span className="font-medium text-2xl">
                    hi there, I&apos;m syahir.
                </span>
                <span className="text-[2rem]">👋</span>
            </div>
            <div className="flex items-center pb-8">
                <span className="font-medium text-md italic text-amber-700	dark:text-amber-500">
                    {' '}
                    A full-stack blockchain developer & noob security
                    researcher.{' '}
                </span>
            </div>
            <div className="flex items-center pb-16">
                <span className="font-medium text-2xl">
                    {' '}
                    I build and break things, and try to share everything I
                    learn along the way.{' '}
                </span>
            </div>

            <div className="pb-8">
                <div className="pb-4">
                    <span className="font-medium text-md italic text-amber-700	dark:text-amber-500">
                        Some details on Syahir
                    </span>
                </div>
                <div className="space-y-6">
                    <div className="font-medium text-md text-slate-600 dark:text-white">
                        With a background in computer security and forensics,
                        Syahir became a full-stack blockchain developer, whom
                        never would have thought he would fall in love with
                        programming and spending his days solving problems.
                    </div>
                    <div className="font-medium text-md text-slate-600 dark:text-white">
                        Syahir traditionally began his career working as a web
                        developer before making a move to web3 and blockchain
                        development in early 2021.
                    </div>
                    <div className="font-medium text-md text-slate-600 dark:text-white">
                        He has spent the last few years working with and
                        focusing on Solidity, whilst also working with other
                        frameworks and languages such as React, NextJS, NodeJS,
                        and Rust.
                    </div>
                </div>
            </div>

            <div className="pb-8">
                <div className="pb-4">
                    <span className="font-medium text-md italic text-amber-700 dark:text-amber-500">
                        Research Items and Areas of Interest
                    </span>
                </div>
                <div className="space-y-4">
                    <div className="font-medium text-md text-slate-600 dark:text-white">
                        📝 Ethereum
                    </div>
                    <div className="font-medium text-md text-slate-600 dark:text-white">
                        📝 Smart Contract Security
                    </div>
                    <div className="font-medium text-md text-slate-600 dark:text-white">
                        📝 Account Abstraction
                    </div>
                    <div className="font-medium text-md text-slate-600 dark:text-white">
                        📝 Blockchain Monitoring, Network Indexing
                    </div>
                    <div className="font-medium text-md text-slate-600 dark:text-white">
                        📝 System Architecture
                    </div>
                </div>
            </div>

            <div className="pb-16">
                {/* <div
                    className="bg-white dark:bg-slate-600 shadow-lg rounded-lg p-4"
                    onClick={() => setIsTechStackOpen(!isTechStackOpen)}
                >
                    <button className="w-full font-medium text-md">
                        {isTechStackOpen ? (
                            <div className="w-full flex justify-between">
                                <div>Hide</div>
                                <div>⬆️</div>
                            </div>
                        ) : (
                            <div className="w-full flex justify-between">
                                <div>Show Current Tech Stack</div>
                                <div>⬇️</div>
                            </div>
                        )}
                    </button>
                    {isTechStackOpen && (
                        <div className="mt-4 space-y-4">
                            <div className="font-medium text-md text-slate-600 dark:text-white">
                                💻 Solidity, Foundry
                            </div>
                            <div className="font-medium text-md text-slate-600 dark:text-white">
                                💻 Rust
                            </div>
                            <div className="font-medium text-md text-slate-600 dark:text-white">
                                💻 React, NextJS
                            </div>
                        </div>
                    )}
                </div> */}
                <div className="pb-4">
                    <span className="font-medium text-md italic text-amber-700 dark:text-amber-500">
                        Research Items and Areas of Interest
                    </span>
                </div>
                <div className="space-y-4">
                    <div className="font-medium text-md text-slate-600 dark:text-white">
                        💻 Solidity, Foundry
                    </div>
                    <div className="font-medium text-md text-slate-600 dark:text-white">
                        💻 Rust
                    </div>
                    <div className="font-medium text-md text-slate-600 dark:text-white">
                        💻 React, NextJS
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <Image
                    src="/sunCat.jpg"
                    alt="Cat in the sun"
                    width={300}
                    height={300}
                    className="max-w-full h-auto"
                />
            </div>
            <div className="flex justify-center items-center">
                <span className="font-medium text-md italic text-slate-600">
                    Obligatory picture of my cat.
                </span>
            </div>
        </main>
    )
}
