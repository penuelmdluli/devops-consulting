import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

interface BlogPost {
  title: string
  date: string
  readTime: string
  tags: string[]
  content: string
}

const POSTS: Record<string, BlogPost> = {
  "mobile-banking-cicd-africa": {
    title: "Mobile Banking CI/CD in Africa",
    date: "2026-03-10",
    readTime: "8 min read",
    tags: ["CI/CD", "Mobile", "Africa", "Jenkins"],
    content: `
## The Challenge

Shipping a mobile banking app is hard. Shipping the same app across 9 African countries — each with unique regulatory requirements, app store configurations, provisioning profiles, and security tooling — is a different beast entirely.

When I joined this project, the team was manually building each country variant. A single release cycle took days of engineer time, and signing errors were a weekly occurrence.

## The Architecture

We designed a parameterised Jenkins pipeline that treats each country as a configuration profile rather than a separate build. The core pipeline stages:

1. **Parameter Injection** — Country code drives everything: bundle IDs, API endpoints, feature flags, Firebase projects, and Arxan blueprints.
2. **Build** — .NET MAUI compiles the shared codebase with country-specific resources and config files.
3. **Security** — Arxan/Digital.ai protection is applied post-build using country-specific blueprints. This was one of the trickiest parts — each blueprint has unique guard configurations.
4. **Signing** — iOS provisioning profiles and Android keystores are pulled from secure storage per country. We automated Xcode profile installation and keychain management on the Mac build agents.
5. **Distribution** — UAT builds go to Firebase App Distribution. Production builds go to App Store Connect and Google Play via Fastlane.

## Key Decisions

**Why Jenkins over GitHub Actions?** The bank's infrastructure team required on-premise build agents for security compliance. Jenkins gave us full control over the Mac mini fleet used for iOS builds.

**Shared vs. separate pipelines?** We considered a mono-pipeline per country but rejected it — the maintenance burden would scale linearly. A single parameterised pipeline means bug fixes and improvements apply everywhere.

**Arxan integration** was the hardest piece. The protection tool modifies the compiled binary, so it must run after the .NET MAUI build but before signing. We built a wrapper script that handles blueprint selection, retry logic for flaky Arxan processes, and verification of protected binaries.

## Results

- **60% faster builds** — from 45 minutes to 18 minutes per country variant
- **Zero manual signing errors** — fully automated profile and keystore management
- **9 markets from one pipeline** — South Africa, Kenya, Uganda, Botswana, Tanzania, Ghana, Mauritius, Mozambique, Zambia
- **Same-day hotfixes** — what used to take 2 days now ships in hours

## Lessons Learned

1. **Treat countries as config, not code.** The more you can parameterise, the less you duplicate.
2. **Invest in signing automation early.** Manual iOS provisioning profiles are a ticking time bomb.
3. **Security tooling needs its own pipeline stage.** Don't bolt it on — design around it.
4. **Build agents are infrastructure too.** Mac minis need monitoring, updates, and capacity planning just like servers.

If you're building multi-market mobile apps in Africa and struggling with CI/CD complexity, I'd love to chat. Reach out via the contact form or book a consultation.
    `,
  },
}

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = POSTS[params.slug]
  if (!post) return { title: "Post Not Found" }
  return {
    title: `${post.title} — Sabelo Mdluli DevOps`,
    description: post.content.slice(0, 160).replace(/[#\n]/g, "").trim(),
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = POSTS[params.slug]
  if (!post) notFound()

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <nav className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto border-b border-[#222]">
        <Link href="/">
          <div className="font-black text-xl tracking-tight">Sabelo Mdluli</div>
          <div className="text-xs text-[#888] tracking-widest mt-0.5">DEVOPS ENGINEER &middot; AFRICA</div>
        </Link>
        <Link
          href="/blog"
          className="border border-[#FFD700] text-[#FFD700] font-bold px-5 py-2.5 rounded text-sm hover:bg-[#FFD700] hover:text-black transition-all"
        >
          &larr; All Posts
        </Link>
      </nav>

      <article className="px-8 pt-16 pb-20 max-w-3xl mx-auto">
        <div className="flex items-center gap-3 text-xs text-[#666] mb-4">
          <time>{post.date}</time>
          <span>&middot;</span>
          <span>{post.readTime}</span>
        </div>
        <h1 className="text-4xl font-black mb-6">{post.title}</h1>
        <div className="flex flex-wrap gap-2 mb-10">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs bg-[#111] border border-[#222] px-2 py-1 rounded text-[#888]">
              {tag}
            </span>
          ))}
        </div>

        <div className="prose-custom space-y-4">
          {post.content
            .trim()
            .split("\n")
            .map((line, i) => {
              const trimmed = line.trim()
              if (!trimmed) return null
              if (trimmed.startsWith("## "))
                return (
                  <h2 key={i} className="text-2xl font-black mt-10 mb-4 text-[#f5f5f5]">
                    {trimmed.replace("## ", "")}
                  </h2>
                )
              if (trimmed.startsWith("**") && trimmed.endsWith("**"))
                return (
                  <p key={i} className="text-[#ccc] font-bold">
                    {trimmed.replace(/\*\*/g, "")}
                  </p>
                )
              if (trimmed.match(/^\d+\.\s\*\*/)) {
                const parts = trimmed.match(/^(\d+\.)\s\*\*(.+?)\*\*\s*[—-]?\s*(.*)/)
                if (parts) {
                  return (
                    <div key={i} className="flex gap-3 text-[#999] text-sm leading-relaxed pl-4">
                      <span className="text-[#FFD700] font-bold">{parts[1]}</span>
                      <span>
                        <strong className="text-[#ccc]">{parts[2]}</strong>
                        {parts[3] ? ` — ${parts[3]}` : ""}
                      </span>
                    </div>
                  )
                }
              }
              if (trimmed.startsWith("- **") || trimmed.startsWith("- ")) {
                return (
                  <div key={i} className="flex items-start gap-2 text-sm text-[#999] leading-relaxed pl-4">
                    <span className="text-[#FFD700]">&#x2022;</span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: trimmed
                          .replace(/^-\s*/, "")
                          .replace(/\*\*(.+?)\*\*/g, '<strong class="text-[#ccc]">$1</strong>'),
                      }}
                    />
                  </div>
                )
              }
              return (
                <p
                  key={i}
                  className="text-[#999] leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: trimmed.replace(/\*\*(.+?)\*\*/g, '<strong class="text-[#ccc]">$1</strong>'),
                  }}
                />
              )
            })}
        </div>

        <div className="mt-16 border-t border-[#222] pt-8">
          <Link
            href="/#contact"
            className="inline-block bg-[#FFD700] text-black font-black px-6 py-3 rounded hover:bg-yellow-300 transition-colors"
          >
            Get in Touch &rarr;
          </Link>
        </div>
      </article>
    </div>
  )
}
