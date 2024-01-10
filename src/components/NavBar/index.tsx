'use client'
import Link from 'next/link'

export default function NavBar() {
    return (
        <>
            <div className="bg-base-100 mt-5 mb-12 justify-around">
                <div className="text-md space-x-4">
                    <Link
                        href="/"
                        className="font-medium hover:dark:text-amber-500 hover:text-amber-700"
                    >
                        home
                    </Link>

                    {/* <Link href="/work" className="font-medium">
            work
          </Link> */}

                    <a
                        href="https://github.com/syahirAmali/audits"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium hover:dark:text-amber-500 hover:text-amber-700"
                    >
                        audits
                    </a>

                    <Link
                        href="/blog"
                        className="font-medium hover:dark:text-amber-500 hover:text-amber-700"
                    >
                        blog
                    </Link>

                    <Link
                        href="/guestbook"
                        className="font-medium hover:dark:text-amber-500 hover:text-amber-700"
                    >
                        guestbook
                    </Link>
                </div>
            </div>
        </>
    )
}
