"use client"
import { useState } from "react"

const SKILLS = [
  { cat: "CI/CD & Build", items: ["Jenkins Pipelines", "GitHub Actions", "Azure DevOps", ".NET MAUI Builds", "Android/iOS Signing", "Arxan/Digital.ai"] },
  { cat: "Containers & Orchestration", items: ["Kubernetes (OKD)", "Alauda Platform", "Docker", "Skopeo", "OpenShift", "Helm Charts"] },
  { cat: "Databases & Migrations", items: ["PostgreSQL", "Liquibase", "Schema Management", "Multi-country DBs", "UAT/SIT Pipelines"] },
  { cat: "Monitoring & Security", items: ["Prometheus", "Grafana", "Security Hardening", "Secret Management", "Vulnerability Scanning"] }
]

const MARKETS = ["🇿🇦 South Africa", "🇰🇪 Kenya", "🇺🇬 Uganda", "🇧🇼 Botswana", "🇹🇿 Tanzania", "🇬🇭 Ghana", "🇲🇺 Mauritius", "🇲🇿 Mozambique", "🇿🇲 Zambia"]

const CASE_STUDIES = [
  {
    title: "Mobile Banking CI/CD — 9 African Markets",
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
  { name: "Pipeline Setup", price: "$2,000–$5,000", time: "2–4 weeks", desc: "Custom CI/CD pipeline for your team. Jenkins, GitHub Actions, or Azure DevOps. Mobile or backend." },
  { name: "Monthly Retainer", price: "$2,000–$4,000/mo", time: "Ongoing", desc: "Dedicated DevOps support. Pipeline maintenance, incidents, new environments, team upskilling." },
  { name: "Mobile DevOps", price: "$3,000–$8,000", time: "4–8 weeks", desc: "Full mobile banking build pipeline: .NET MAUI/Xamarin, iOS/Android signing, security protection, multi-market." }
]

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
          <div className="text-xs text-[#888] tracking-widest mt-0.5">DEVOPS ENGINEER · AFRICA</div>
        </div>
        <div className="hidden md:flex gap-8 text-sm text-[#888]">
          {["Services", "Case Studies", "Skills", "Contact"].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="hover:text-white transition-colors">{l}</a>
          ))}
        </div>
        <a href="#contact" className="border border-[#FFD700] text-[#FFD700] font-bold px-5 py-2.5 rounded text-sm hover:bg-[#FFD700] hover:text-black transition-all">
          Hire Me →
        </a>
      </nav>

      {/* HERO */}
      <section className="px-8 pt-24 pb-20 max-w-5xl mx-auto">
        <div className="text-xs text-[#FFD700] tracking-widest mb-4">AVAILABLE FOR CONTRACTS · REMOTE + AFRICA</div>
        <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 tracking-tight">
          Africa's Mobile<br />Banking<br />
          <span className="text-[#FFD700]">DevOps Specialist</span>
        </h1>
        <p className="text-lg text-[#888] max-w-2xl mb-8 leading-relaxed">
          6+ years deploying mobile banking infrastructure across 9 African markets. I build the CI/CD pipelines, Kubernetes platforms, and database systems that power financial services for millions of Africans.
        </p>
        <div className="flex flex-wrap gap-4 mb-16">
          <a href="#contact" className="bg-[#FFD700] text-black font-black px-6 py-3 rounded hover:bg-yellow-300 transition-colors">
            Book a Call →
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
              {c.title.split("—")[0].trim()}
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
                  <ul className="space-y-2">{c.results.map((r,i) => <li key={i} className="text-sm text-[#ccc] flex items-start gap-2"><span className="text-[#FFD700]">✓</span>{r}</li>)}</ul>
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

      {/* CONTACT */}
      <section id="contact" className="px-8 py-20 max-w-2xl mx-auto">
        <div className="text-xs text-[#FFD700] tracking-widest mb-4">CONTACT</div>
        <h2 className="text-3xl font-black mb-8">Let's Work Together</h2>
        {sent ? (
          <div className="border border-[#FFD700]/40 rounded-2xl p-10 text-center">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-black text-[#FFD700]">Message Received!</h3>
            <p className="text-[#888] mt-2">I'll respond within 24 hours via email or WhatsApp.</p>
          </div>
        ) : (
          <form onSubmit={handleContact} className="space-y-4">
            {[
              { name: "name", label: "YOUR NAME", placeholder: "John Smith", type: "text" },
              { name: "email", label: "EMAIL", placeholder: "john@company.com", type: "email" },
              { name: "company", label: "COMPANY / PROJECT", placeholder: "Fintech Startup Kenya", type: "text" },
              { name: "budget", label: "BUDGET RANGE", placeholder: "e.g. $2,000–$5,000/month", type: "text" },
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
              Send Message →
            </button>
          </form>
        )}
      </section>

      <footer className="border-t border-[#111] px-8 py-8 max-w-5xl mx-auto flex items-center justify-between text-sm text-[#555]">
        <div>© 2026 Sabelo Mdluli · Pretoria, South Africa</div>
        <div className="flex gap-6">
          <a href="https://linkedin.com/in/sabelo-mdluli" className="hover:text-[#FFD700] transition-colors">LinkedIn</a>
          <a href="https://github.com/mdlulipenuel" className="hover:text-[#FFD700] transition-colors">GitHub</a>
        </div>
      </footer>
    </div>
  )
}
