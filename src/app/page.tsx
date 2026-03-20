"use client"
import { useState } from "react"
import Link from "next/link"

const SKILLS = [
  { cat: "CI/CD & Build", items: ["Jenkins Pipelines", "GitHub Actions", "Azure DevOps", ".NET MAUI Builds", "Android/iOS Signing", "Arxan/Digital.ai"] },
  { cat: "Containers & Orchestration", items: ["Kubernetes (OKD)", "Alauda Platform", "Docker", "Skopeo", "OpenShift", "Helm Charts"] },
  { cat: "Databases & Migrations", items: ["PostgreSQL", "Liquibase", "Schema Management", "Multi-country DBs", "UAT/SIT Pipelines"] },
  { cat: "Monitoring & Security", items: ["Prometheus", "Grafana", "Security Hardening", "Secret Management", "Vulnerability Scanning"] }
]

const MARKETS = ["\u{1F1FF}\u{1F1E6} South Africa", "\u{1F1F0}\u{1F1EA} Kenya", "\u{1F1FA}\u{1F1EC} Uganda", "\u{1F1E7}\u{1F1FC} Botswana", "\u{1F1F9}\u{1F1FF} Tanzania", "\u{1F1EC}\u{1F1ED} Ghana", "\u{1F1F2}\u{1F1FA} Mauritius", "\u{1F1F2}\u{1F1FF} Mozambique", "\u{1F1FF}\u{1F1F2} Zambia"]

const CASE_STUDIES = [
  {
    title: "Mobile Banking CI/CD \u2014 9 African Markets",
    client: "Major SA Bank (ABSA Group)",
    challenge: "Single CI/CD pipeline needed to build, sign, and deploy unique .NET MAUI mobile banking apps for 9 different African countries, each with unique configurations, provisioning profiles, and Arxan security protection.",
    solution: "Designed a parameterised Jenkins pipeline architecture that handles country-specific build variants, automated Arxan blueprint injection, Apple provisioning profile management, and Firebase App Distribution for UAT testing.",
    results: ["Reduced build time by 60%", "Zero manual signing errors", "9 markets deployed from single pipeline", "Full Arxan/Digital.ai integration"],
    tech: ["Jenkins", ".NET MAUI", "Android/iOS", "Arxan", "Firebase", "Xcode"]
  },
  {
    title: "Liquibase Database Migration Pipeline",
    client: "African Banking Platform",
    challenge: "Multi-country PostgreSQL schema migrations with different database servers per country (BW, KE, UG), shared vs isolated schemas, and environment-specific (dev/sit/uat) configurations causing drift and checksum failures.",
    solution: "Built environment-aware Liquibase pipeline with country-based parameter injection, schema drift detection, and automated rollback capability. Implemented sed-based placeholder replacement with validation.",
    results: ["Zero production schema incidents", "Automated cross-country rollouts", "Environment parity achieved", "Full audit trail"],
    tech: ["Liquibase", "PostgreSQL", "Jenkins", "Bash", "Docker"]
  },
  {
    title: "Docker Image Migration to Enterprise Registry",
    client: "African Digital Banking Platform",
    challenge: "Migrate 200+ Docker images from legacy Artifactory to enterprise ABSA registry using Skopeo, with authentication, network timeouts on large images, and RFC 1123 pod naming constraints.",
    solution: "Kubernetes-based Skopeo migration pipeline with retry logic, chunked transfers, auth secret management, and progress tracking dashboard.",
    results: ["200+ images migrated", "Zero downtime", "Automated verification", "Audit log per image"],
    tech: ["Skopeo", "Kubernetes (OKD)", "Docker", "Jenkins", "Bash"]
  }
]

const SERVICES = [
  { name: "DevOps Audit", price: "$500", time: "1 week", desc: "Full audit of your CI/CD pipelines, infrastructure, security posture, and delivery speed. Detailed report + roadmap." },
  { name: "Pipeline Setup", price: "$2,000\u2013$5,000", time: "2\u20134 weeks", desc: "Custom CI/CD pipeline for your team. Jenkins, GitHub Actions, or Azure DevOps. Mobile or backend." },
  { name: "Monthly Retainer", price: "$2,000\u2013$4,000/mo", time: "Ongoing", desc: "Dedicated DevOps support. Pipeline maintenance, incidents, new environments, team upskilling." },
  { name: "Mobile DevOps", price: "$3,000\u2013$8,000", time: "4\u20138 weeks", desc: "Full mobile banking build pipeline: .NET MAUI/Xamarin, iOS/Android signing, security protection, multi-market." }
]

const CERTIFICATIONS = [
  {
    name: "Liquibase Certified",
    issuer: "Liquibase",
    icon: "\u{1F4CA}",
    desc: "Database change management and schema migration automation",
  },
  {
    name: "DevOps Foundations",
    issuer: "LinkedIn Learning / Industry",
    icon: "\u{1F504}",
    desc: "Core DevOps principles, culture, practices, and tooling",
  },
  {
    name: "Ansible Certified",
    issuer: "Red Hat / Ansible",
    icon: "\u{2699}\u{FE0F}",
    desc: "Infrastructure automation, configuration management, and orchestration",
  },
]

const GITHUB_PROJECTS = [
  {
    name: "jenkins-mobile-pipeline",
    desc: "Parameterised Jenkins pipeline for multi-market .NET MAUI mobile banking builds with Arxan security integration.",
    tech: ["Jenkins", "Groovy", ".NET MAUI"],
    url: "https://github.com/mdlulipenuel/jenkins-mobile-pipeline",
  },
  {
    name: "liquibase-multi-country",
    desc: "Environment-aware Liquibase migration framework for multi-country PostgreSQL databases with drift detection.",
    tech: ["Liquibase", "PostgreSQL", "Bash"],
    url: "https://github.com/mdlulipenuel/liquibase-multi-country",
  },
  {
    name: "skopeo-image-migrator",
    desc: "Kubernetes-based Docker image migration tool using Skopeo with retry logic and progress tracking.",
    tech: ["Skopeo", "Kubernetes", "Docker"],
    url: "https://github.com/mdlulipenuel/skopeo-image-migrator",
  },
]

const TESTIMONIALS = [
  {
    name: "Thabo M.",
    role: "Engineering Lead, Fintech Startup",
    text: "Sabelo transformed our deployment process from a 2-day manual ordeal into a 20-minute automated pipeline. His deep understanding of mobile banking CI/CD across African markets is unmatched.",
  },
  {
    name: "Aisha K.",
    role: "CTO, Digital Banking Platform",
    text: "We brought Sabelo in to fix our Liquibase migrations across 5 countries. He delivered a robust, environment-aware pipeline that eliminated schema drift entirely. Highly recommended.",
  },
  {
    name: "David O.",
    role: "VP of Engineering, Pan-African Bank",
    text: "Working with Sabelo on our Kubernetes migration was seamless. He has a rare combination of deep technical skill and practical African market experience that makes him invaluable.",
  },
]

const CAL_USERNAME = process.env.NEXT_PUBLIC_CAL_USERNAME || "sabelo-mdluli"

export default function DevOpsConsulting() {
  const [activeCase, setActiveCase] = useState(0)
  const [contact, setContact] = useState({ name: "", email: "", company: "", budget: "", message: "" })
  const [sent, setSent] = useState(false)

  const handleContact = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(contact) })
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">

      {/* NAV */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto border-b border-[#222]">
        <div>
          <div className="font-black text-xl tracking-tight">Sabelo Mdluli</div>
          <div className="text-xs text-[#888] tracking-widest mt-0.5">DEVOPS ENGINEER &middot; AFRICA</div>
        </div>
        <div className="hidden md:flex gap-8 text-sm text-[#888]">
          {["Services", "Case Studies", "Skills", "Blog", "Contact"].map(l => (
            <a key={l} href={l === "Blog" ? "/blog" : `#${l.toLowerCase().replace(" ", "-")}`} className="hover:text-white transition-colors">{l}</a>
          ))}
        </div>
        <a href="#contact" className="border border-[#FFD700] text-[#FFD700] font-bold px-5 py-2.5 rounded text-sm hover:bg-[#FFD700] hover:text-black transition-all">
          Hire Me &rarr;
        </a>
      </nav>

      {/* HERO */}
      <section className="px-8 pt-24 pb-20 max-w-5xl mx-auto">
        <div className="text-xs text-[#FFD700] tracking-widest mb-4">AVAILABLE FOR CONTRACTS &middot; REMOTE + AFRICA</div>
        <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 tracking-tight">
          Africa&apos;s Mobile<br />Banking<br />
          <span className="text-[#FFD700]">DevOps Specialist</span>
        </h1>
        <p className="text-lg text-[#888] max-w-2xl mb-8 leading-relaxed">
          6+ years deploying mobile banking infrastructure across 9 African markets. I build the CI/CD pipelines, Kubernetes platforms, and database systems that power financial services for millions of Africans.
        </p>
        <div className="flex flex-wrap gap-4 mb-16">
          <a href={`https://cal.com/${CAL_USERNAME}`} target="_blank" rel="noopener noreferrer" className="bg-[#FFD700] text-black font-black px-6 py-3 rounded hover:bg-yellow-300 transition-colors">
            Book a Consultation &rarr;
          </a>
          <a href="#case-studies" className="border border-[#333] text-[#888] px-6 py-3 rounded hover:border-[#666] transition-colors">
            View Case Studies
          </a>
        </div>
        <div className="flex flex-wrap gap-3">
          {MARKETS.map((m, i) => (
            <span key={i} className="text-sm border border-[#222] px-3 py-1.5 rounded text-[#888]">{m}</span>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="px-8 py-20 max-w-5xl mx-auto">
        <div className="text-xs text-[#FFD700] tracking-widest mb-4">CERTIFICATIONS</div>
        <h2 className="text-3xl font-black mb-10">Credentials &amp; Certifications</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((cert, i) => (
            <div key={i} className="border border-[#1a1a1a] rounded-xl p-6 hover:border-[#FFD700]/30 transition-all">
              <div className="text-3xl mb-4">{cert.icon}</div>
              <h3 className="font-black text-lg mb-1">{cert.name}</h3>
              <div className="text-xs text-[#FFD700] tracking-widest mb-3">{cert.issuer.toUpperCase()}</div>
              <p className="text-sm text-[#888] leading-relaxed">{cert.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-8 py-20 max-w-5xl mx-auto">
        <div className="text-xs text-[#FFD700] tracking-widest mb-4">TECHNICAL SKILLS</div>
        <h2 className="text-3xl font-black mb-10">What I Work With</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {SKILLS.map((group, i) => (
            <div key={i} className="border border-[#1a1a1a] rounded-xl p-6">
              <div className="text-xs text-[#FFD700] tracking-widest mb-4">{group.cat.toUpperCase()}</div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, j) => (
                  <span key={j} className="bg-[#111] border border-[#222] text-sm px-3 py-1.5 rounded text-[#ccc]">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="case-studies" className="px-8 py-20 max-w-5xl mx-auto">
        <div className="text-xs text-[#FFD700] tracking-widest mb-4">CASE STUDIES</div>
        <h2 className="text-3xl font-black mb-10">Real Projects. Real Results.</h2>
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {CASE_STUDIES.map((c, i) => (
            <button key={i} onClick={() => setActiveCase(i)}
              className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm transition-all ${activeCase === i ? "bg-[#FFD700] text-black font-bold" : "border border-[#333] text-[#888] hover:border-[#555]"}`}>
              {c.title.split("\u2014")[0].trim()}
            </button>
          ))}
        </div>
        {(() => {
          const c = CASE_STUDIES[activeCase]
          return (
            <div className="border border-[#1a1a1a] rounded-2xl p-8">
              <div className="text-xs text-[#888] mb-2">{c.client}</div>
              <h3 className="text-xl font-black mb-6">{c.title}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div><div className="text-xs text-[#FFD700] tracking-widest mb-3">CHALLENGE</div><p className="text-sm text-[#999] leading-relaxed">{c.challenge}</p></div>
                <div><div className="text-xs text-[#FFD700] tracking-widest mb-3">SOLUTION</div><p className="text-sm text-[#999] leading-relaxed">{c.solution}</p></div>
                <div>
                  <div className="text-xs text-[#FFD700] tracking-widest mb-3">RESULTS</div>
                  <ul className="space-y-2">{c.results.map((r,i) => <li key={i} className="text-sm text-[#ccc] flex items-start gap-2"><span className="text-[#FFD700]">{"\u2713"}</span>{r}</li>)}</ul>
                  <div className="mt-4 flex flex-wrap gap-2">{c.tech.map((t,i) => <span key={i} className="text-xs bg-[#111] border border-[#222] px-2 py-1 rounded text-[#888]">{t}</span>)}</div>
                </div>
              </div>
            </div>
          )
        })()}
      </section>

      {/* SERVICES */}
      <section id="services" className="px-8 py-20 max-w-5xl mx-auto">
        <div className="text-xs text-[#FFD700] tracking-widest mb-4">SERVICES</div>
        <h2 className="text-3xl font-black mb-10">How I Can Help</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {SERVICES.map((s, i) => (
            <div key={i} className="border border-[#1a1a1a] rounded-xl p-6 hover:border-[#FFD700]/30 transition-all">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-black text-lg">{s.name}</h3>
                <div className="text-right">
                  <div className="text-[#FFD700] font-bold text-sm">{s.price}</div>
                  <div className="text-xs text-[#666]">{s.time}</div>
                </div>
              </div>
              <p className="text-sm text-[#888] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GITHUB PROJECTS */}
      <section id="github" className="px-8 py-20 max-w-5xl mx-auto">
        <div className="text-xs text-[#FFD700] tracking-widest mb-4">OPEN SOURCE</div>
        <h2 className="text-3xl font-black mb-10">GitHub Projects</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {GITHUB_PROJECTS.map((repo, i) => (
            <a key={i} href={repo.url} target="_blank" rel="noopener noreferrer"
              className="border border-[#1a1a1a] rounded-xl p-6 hover:border-[#FFD700]/30 transition-all block">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-[#888]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                <span className="font-bold text-sm text-[#ccc]">{repo.name}</span>
              </div>
              <p className="text-sm text-[#888] leading-relaxed mb-4">{repo.desc}</p>
              <div className="flex flex-wrap gap-2">
                {repo.tech.map((t, j) => (
                  <span key={j} className="text-xs bg-[#111] border border-[#222] px-2 py-1 rounded text-[#888]">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="https://github.com/mdlulipenuel" target="_blank" rel="noopener noreferrer"
            className="text-sm text-[#888] hover:text-[#FFD700] transition-colors">
            View all repositories on GitHub &rarr;
          </a>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="px-8 py-20 max-w-5xl mx-auto">
        <div className="text-xs text-[#FFD700] tracking-widest mb-4">TESTIMONIALS</div>
        <h2 className="text-3xl font-black mb-10">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="border border-[#1a1a1a] rounded-xl p-6">
              <div className="text-[#FFD700] text-2xl mb-4">&ldquo;</div>
              <p className="text-sm text-[#999] leading-relaxed mb-6">{t.text}</p>
              <div>
                <div className="font-bold text-[#ccc] text-sm">{t.name}</div>
                <div className="text-xs text-[#666]">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOOK A CONSULTATION */}
      <section id="book" className="px-8 py-20 max-w-3xl mx-auto text-center">
        <div className="border border-[#FFD700]/20 rounded-2xl p-10">
          <div className="text-xs text-[#FFD700] tracking-widest mb-4">BOOK A CALL</div>
          <h2 className="text-3xl font-black mb-4">Ready to Streamline Your DevOps?</h2>
          <p className="text-[#888] mb-8 max-w-lg mx-auto">
            Schedule a free 30-minute consultation to discuss your infrastructure challenges and how I can help.
          </p>
          <a
            href={`https://cal.com/${CAL_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FFD700] text-black font-black px-8 py-4 rounded-xl text-lg hover:bg-yellow-300 transition-colors"
          >
            Book a Consultation &rarr;
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-8 py-20 max-w-2xl mx-auto">
        <div className="text-xs text-[#FFD700] tracking-widest mb-4">CONTACT</div>
        <h2 className="text-3xl font-black mb-8">Let&apos;s Work Together</h2>
        {sent ? (
          <div className="border border-[#FFD700]/40 rounded-2xl p-10 text-center">
            <div className="text-4xl mb-4">{"\u2705"}</div>
            <h3 className="text-xl font-black text-[#FFD700]">Message Received!</h3>
            <p className="text-[#888] mt-2">I&apos;ll respond within 24 hours via email or WhatsApp.</p>
          </div>
        ) : (
          <form onSubmit={handleContact} className="space-y-4">
            {[
              { name: "name", label: "YOUR NAME", placeholder: "John Smith", type: "text" },
              { name: "email", label: "EMAIL", placeholder: "john@company.com", type: "email" },
              { name: "company", label: "COMPANY / PROJECT", placeholder: "Fintech Startup Kenya", type: "text" },
              { name: "budget", label: "BUDGET RANGE", placeholder: "e.g. $2,000\u2013$5,000/month", type: "text" },
            ].map(field => (
              <div key={field.name}>
                <label className="text-xs text-[#666] tracking-widest block mb-2">{field.label}</label>
                <input type={field.type} placeholder={field.placeholder} required
                  value={contact[field.name as keyof typeof contact]}
                  onChange={e => setContact(p => ({ ...p, [field.name]: e.target.value }))}
                  className="w-full bg-[#111] border border-[#222] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFD700]/40 transition-colors placeholder-[#444]" />
              </div>
            ))}
            <div>
              <label className="text-xs text-[#666] tracking-widest block mb-2">WHAT DO YOU NEED?</label>
              <textarea placeholder="Describe your project or challenge..." rows={4} required
                value={contact.message}
                onChange={e => setContact(p => ({ ...p, message: e.target.value }))}
                className="w-full bg-[#111] border border-[#222] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFD700]/40 transition-colors placeholder-[#444] resize-none" />
            </div>
            <button type="submit" className="w-full bg-[#FFD700] text-black font-black py-4 rounded-xl text-lg hover:bg-yellow-300 transition-colors">
              Send Message &rarr;
            </button>
          </form>
        )}
      </section>

      <footer className="border-t border-[#111] px-8 py-8 max-w-5xl mx-auto flex items-center justify-between text-sm text-[#555]">
        <div>&copy; 2026 Sabelo Mdluli &middot; Pretoria, South Africa</div>
        <div className="flex gap-6">
          <Link href="/blog" className="hover:text-[#FFD700] transition-colors">Blog</Link>
          <a href="https://linkedin.com/in/sabelo-mdluli" className="hover:text-[#FFD700] transition-colors">LinkedIn</a>
          <a href="https://github.com/mdlulipenuel" className="hover:text-[#FFD700] transition-colors">GitHub</a>
        </div>
      </footer>
    </div>
  )
}
