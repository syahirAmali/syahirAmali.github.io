import Link from 'next/link'
import { getBlogPosts } from '../lib/blogs'

export default function BlogPage() {
    let allBlogs = getBlogPosts()
    return (
        <section>
            <h1 className="font-medium text-2xl mb-8 tracking-tighter">
                read my blog
            </h1>
            {allBlogs
                .sort((a, b) => {
                    if (
                        new Date(a.metadata.publishedAt) >
                        new Date(b.metadata.publishedAt)
                    ) {
                        return -1
                    }
                    return 1
                })
                .map((post) => (
                    <Link
                        key={post.slug}
                        className="flex flex-col space-y-1 mb-4"
                        href={`/blog/${post.slug}`}
                    >
                        <div className="w-full flex flex-col">
                            <p className="text-lg text-amber-700	dark:text-amber-500">
                                {post.metadata.title}
                            </p>
                            <p className="text-sm italic dark:text-neutral-100">
                                {post.metadata.summary}
                            </p>
                            <p className="text-sm italic dark:text-neutral-100">
                                {post.metadata.publishedAt}
                            </p>
                        </div>
                    </Link>
                ))}
        </section>
    )
}
