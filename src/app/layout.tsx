import './globals.css'

import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

export const metadata: Metadata = {
    title: 'Syahir Amali',
    description: 'All About Syahir',
    icons: {
        icon: ['/cat.svg'],
        apple: ['/cat.svg'],
    },
}

const cx = (...classes: any) => classes.filter(Boolean).join(' ')

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html
            lang="en"
            className={cx(
                'text-black bg-white dark:text-white dark:bg-[#111010]',
                GeistSans.variable,
                GeistMono.variable
            )}
        >
            <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
                <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
                    <NavBar />
                    {children}
                </main>
            </body>
        </html>
    )
}
