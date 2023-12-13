'use client'
import Link from 'next/link'

export default function NavBar() {
    return (
        <>
            <div className="bg-base-100 mt-5 mb-12 justify-around">
                <div className="text-md space-x-4">
                    <Link href="/" className="font-medium">
                        home
                    </Link>

                    {/* <Link href="/work" className="font-medium">
            work
          </Link> */}

                    <a
                        href="https://github.com/syahirAmali/audits"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium"
                    >
                        audits
                    </a>

                    <Link href="/blog" className="font-medium">
                        blog
                    </Link>

                    <Link href="/guestbook" className="font-medium">
                        guestbook
                    </Link>
                </div>
            </div>
        </>
    )
}
