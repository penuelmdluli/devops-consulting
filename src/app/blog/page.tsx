import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog — Sabelo Mdluli DevOps",
  description: "Insights on DevOps, CI/CD, mobile banking infrastructure, and engineering across Africa.",
}

const POSTS = [
  {
    slug: "mobile-banking-cicd-africa",
    title: "Mobile Banking CI/CD in Africa",
    excerpt:
      "How we built a single Jenkins pipeline to ship .NET MAUI mobile banking apps across 9 African markets with country-specific configs, security tooling, and automated signing.",
    date: "2026-03-10",
    tags: ["CI/CD", "Mobile", "Africa", "Jenkins"],
    readTime: "8 min read",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <nav className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto border-b border-[#222]">
        <Link href="/">
          <div className="font-black text-xl tracking-tight">Sabelo Mdluli</div>
          <div className="text-xs text-[#888] tracking-widest mt-0.5">DEVOPS ENGINEER &middot; AFRICA</div>
        </Link>
        <Link
          href="/"
          className="border border-[#FFD700] text-[#FFD700] font-bold px-5 py-2.5 rounded text-sm hover:bg-[#FFD700] hover:text-black transition-all"
        >
          &larr; Home
        </Link>
      </nav>

      <section className="px-8 pt-16 pb-20 max-w-3xl mx-auto">
        <div className="text-xs text-[#FFD700] tracking-widest mb-4">BLOG</div>
        <h1 className="text-4xl font-black mb-4">Insights &amp; Write-ups</h1>
        <p className="text-[#888] mb-12">
          Notes on DevOps engineering, CI/CD pipelines, and building infrastructure across African markets.
        </p>

        <div className="space-y-6">
          {POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="border border-[#1a1a1a] rounded-xl p-6 hover:border-[#FFD700]/30 transition-all">
                <div className="flex items-center gap-3 text-xs text-[#666] mb-3">
                  <time>{post.date}</time>
                  <span>&middot;</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-black mb-2">{post.title}</h2>
                <p className="text-sm text-[#888] leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-[#111] border border-[#222] px-2 py-1 rounded text-[#888]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
