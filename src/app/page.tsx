"use client"
import { useState } from "react"

const SKILLS = [
  { name: "Jenkins CI/CD", level: 98 }, { name: "Kubernetes / OpenShift", level: 95 },
  { name: ".NET MAUI (Android/iOS)", level: 92 }, { name: "Docker / Skopeo", level: 95 },
  { name: "PostgreSQL / Liquibase", level: 90 }, { name: "Azure DevOps", level: 88 },
  { name: "Arxan / Digital.ai Security", level: 85 }, { name: "Python / Bash Automation", level: 87 }
]

const EXPERIENCE = [
  {
    role: "Senior DevOps Engineer", company: "ABSA Bank (via Roamus)", period: "2021 — Present",
    color: "#FFD700", icon: "🏦",
    highlights: [
      "Managing CI/CD pipelines for mobile banking apps across 9 African markets (KE, UG, BW, TZ, GH, MU, MZ, ZM, SC)",
      "Jenkins + OpenShift/OKD + Alauda Container Platform orchestration",
      "Android AAB/APK + iOS IPA builds with Arxan/Digital.ai protection",
      "PostgreSQL migrations via Liquibase across dev/SIT/UAT environments",
      "Docker image migration pipeline using Skopeo on Kubernetes",
      "Managed 8 self-hosted macOS build agents"
    ]
  },
  {
    role: "Mobile Developer (Xamarin)", company: "Boxfusion", period: "2018 — 2021",
    color: "#00E5FF", icon: "📱",
    highlights: [
      "Built Xamarin.Forms mobile apps for enterprise clients",
      "Transitioned into DevOps/infrastructure as product complexity grew",
      "Azure DevOps pipelines, app store deployments, Firebase distribution"
    ]
  }
]

const SERVICES = [
  { icon: "🔄", title: "CI/CD Pipeline Audit & Optimization", price: "From $500", desc: "Full audit of your Jenkins/Azure DevOps/GitHub Actions pipelines. Identify bottlenecks, security gaps, and optimization opportunities." },
  { icon: "📱", title: "Mobile Banking DevOps Setup", price: "From $2,000", desc: "End-to-end CI/CD for .NET MAUI or Xamarin apps. Android + iOS builds, signing, security protection, distribution." },
  { icon: "🐳", title: "Kubernetes / OpenShift Deployment", price: "From $1,500", desc: "Container orchestration setup, namespace management, deployment configs, monitoring, and scaling strategies." },
  { icon: "🗄️", title: "Database Migration Pipeline", price: "From $800", desc: "Liquibase setup for PostgreSQL schema management across environments. Checksum handling, rollback strategies, multi-country DB management." },
  { icon: "🛡️", title: "Mobile App Security Integration", price: "From $1,200", desc: "Arxan/Digital.ai protection integration into your CI/CD pipeline. Blueprint configuration, iOS EnsureIT setup." },
  { icon: "📋", title: "Monthly DevOps Retainer", price: "$2,000–$5,000/mo", desc: "Dedicated DevOps support. Pipeline maintenance, incident response, new feature deployments, on-call support." }
]

const CASE_STUDIES = [
  {
    title: "9-Country Mobile Banking Pipeline", client: "Pan-African Bank (ABSA)", color: "#FFD700",
    challenge: "Manage separate CI/CD pipelines for Android and iOS builds across 9 African country variants, each with unique app signing, Arxan security configs, and Firebase distribution.",
    solution: "Unified Jenkins pipeline with country-variant parameterization. Automated provisioning profile management, parallel builds across 8 macOS agents, Arxan blueprint automation.",
    result: "Reduced build time by 60%. Zero missed releases across 9 markets. 99.8% pipeline uptime over 3 years."
  },
  {
    title: "PostgreSQL Multi-Country Schema Management", client: "Pan-African Bank (ABSA)", color: "#00E5FF",
    challenge: "Liquibase migrations failing across BW/KE/UG country schemas due to checksum mismatches and schema drift between environments.",
    solution: "Custom sed-based placeholder replacement pipeline, per-environment lockfile management, automated schema drift detection and alerting.",
    result: "Zero failed UAT deployments over 6 months. Schema consistency across 6 database servers."
  }
]

export default function Portfolio() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", company: "", message: "", budget: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleContact = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(contactForm) })
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#050510] grid-bg">
      {/* NAV */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-6xl mx-auto border-b border-[#1a1a1a]">
        <div className="font-mono text-sm text-[#00E5FF]">sabelo@devops-africa:~$</div>
        <div className="hidden md:flex gap-8 text-sm text-gray-400 font-mono">
          <a href="#about" className="hover:text-white">about</a>
          <a href="#services" className="hover:text-white">services</a>
          <a href="#work" className="hover:text-white">work</a>
          <a href="#contact" className="hover:text-white">contact</a>
        </div>
        <a href="#contact" className="bg-[#00E5FF] text-black text-sm font-black px-4 py-2 rounded-lg hover:bg-cyan-300">
          Hire Me →
        </a>
      </nav>

      {/* HERO */}
      <section id="about" className="px-6 py-24 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#00E5FF11] border border-[#00E5FF33] text-[#00E5FF] text-xs px-4 py-2 rounded-full mb-6 font-mono">
            ▶ AVAILABLE FOR CONTRACTS · REMOTE + ON-SITE · AFRICA + GLOBAL
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-none mb-6 tracking-tight">
            Africa's<br/>
            <span className="text-[#00E5FF] text-glow-cyan">DevOps</span><br/>
            Specialist
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
            Senior DevOps Engineer with <strong className="text-white">6+ years</strong> managing mobile banking infrastructure across <strong className="text-[#00E5FF]">9 African markets</strong>. Jenkins, Kubernetes, OpenShift, .NET MAUI, PostgreSQL/Liquibase.
          </p>
          <div className="flex flex-wrap gap-3 mb-12">
            {["Jenkins","Kubernetes","OpenShift","Docker","PostgreSQL","Liquibase",".NET MAUI","Azure DevOps","Arxan"].map(tech => (
              <span key={tech} className="bg-[#00E5FF0d] border border-[#00E5FF33] text-[#00E5FF] text-xs px-3 py-1.5 rounded-full font-mono">{tech}</span>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[["6+","Years DevOps"],["9","African Markets"],["8","Build Agents Managed"],["99.8%","Pipeline Uptime"]].map(([v,l],i) => (
              <div key={i} className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl p-4">
                <div className="text-2xl font-black text-[#00E5FF]">{v}</div>
                <div className="text-xs text-gray-500 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="text-xs text-[#00E5FF] tracking-widest mb-8">SKILLS & EXPERTISE</div>
        <div className="grid md:grid-cols-2 gap-4">
          {SKILLS.map((skill, i) => (
            <div key={i} className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl p-5">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-bold">{skill.name}</span>
                <span className="text-xs text-[#00E5FF] font-mono">{skill.level}%</span>
              </div>
              <div className="bg-[#1a1a1a] rounded-full h-1.5">
                <div className="bg-[#00E5FF] h-1.5 rounded-full transition-all" style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-16 max-w-6xl mx-auto">
        <div className="text-xs text-[#00E5FF] tracking-widest mb-3">SERVICES</div>
        <h2 className="text-4xl font-black mb-12">What I Can Do For You</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <div key={i} className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl p-6 hover:border-[#00E5FF33] transition-colors">
              <div className="text-3xl mb-3">{s.icon}</div>
              <div className="font-bold mb-2">{s.title}</div>
              <div className="text-[#00E5FF] text-sm font-bold mb-3">{s.price}</div>
              <div className="text-sm text-gray-400 leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="work" className="px-6 py-16 max-w-6xl mx-auto">
        <div className="text-xs text-[#00E5FF] tracking-widest mb-3">CASE STUDIES</div>
        <h2 className="text-4xl font-black mb-12">Real Work, Real Results</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((cs, i) => (
            <div key={i} className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl p-8">
              <div className="text-xs mb-4" style={{ color: cs.color }}>{cs.client.toUpperCase()}</div>
              <h3 className="text-xl font-black mb-6">{cs.title}</h3>
              {[
                { label: "CHALLENGE", text: cs.challenge, color: "#FF444422" },
                { label: "SOLUTION", text: cs.solution, color: "#00E5FF11" },
                { label: "RESULT", text: cs.result, color: "#00FF8822" }
              ].map(block => (
                <div key={block.label} className="mb-4 p-4 rounded-lg" style={{ background: block.color }}>
                  <div className="text-xs text-gray-500 tracking-widest mb-2">{block.label}</div>
                  <p className="text-sm text-gray-300 leading-relaxed">{block.text}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="text-xs text-[#00E5FF] tracking-widest mb-3">EXPERIENCE</div>
        <h2 className="text-4xl font-black mb-12">Career History</h2>
        <div className="space-y-6">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl p-8">
              <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{exp.icon}</span>
                    <h3 className="text-xl font-black">{exp.role}</h3>
                  </div>
                  <div style={{ color: exp.color }} className="text-sm font-bold">{exp.company}</div>
                </div>
                <span className="bg-[#1a1a1a] text-gray-400 text-xs px-3 py-1.5 rounded-full font-mono">{exp.period}</span>
              </div>
              <ul className="space-y-2">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                    <span style={{ color: exp.color }}>→</span> {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-16 max-w-3xl mx-auto">
        <div className="text-xs text-[#00E5FF] tracking-widest mb-3">CONTACT</div>
        <h2 className="text-4xl font-black mb-4">Let's Work Together</h2>
        <p className="text-gray-400 mb-10">Available for contracts across Africa and globally. Remote-first.</p>
        {submitted ? (
          <div className="bg-[#001a08] border border-[#00FF8833] rounded-2xl p-12 text-center">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-black">Message Received!</h3>
            <p className="text-gray-400 mt-2">I'll respond within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleContact} className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl p-8 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {[{ k:"name",l:"YOUR NAME",p:"Your name" },{ k:"email",l:"EMAIL",p:"you@company.com" },{ k:"company",l:"COMPANY",p:"Company name" },{ k:"budget",l:"BUDGET RANGE",p:"e.g. $2,000–$5,000/mo" }].map(f => (
                <div key={f.k}>
                  <label className="text-xs text-gray-500 tracking-widest block mb-2">{f.l}</label>
                  <input value={(contactForm as any)[f.k]} onChange={e => setContactForm(p => ({...p,[f.k]:e.target.value}))}
                    className="w-full bg-[#141414] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00E5FF44]"
                    placeholder={f.p} />
                </div>
              ))}
            </div>
            <div>
              <label className="text-xs text-gray-500 tracking-widest block mb-2">WHAT DO YOU NEED?</label>
              <textarea value={contactForm.message} onChange={e => setContactForm(p => ({...p,message:e.target.value}))}
                className="w-full bg-[#141414] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00E5FF44] h-32 resize-none"
                placeholder="Describe your DevOps challenge or project..." />
            </div>
            <button type="submit" className="w-full bg-[#00E5FF] text-black font-black py-4 rounded-xl hover:bg-cyan-300 transition-colors">
              Send Message →
            </button>
          </form>
        )}
      </section>

      <footer className="border-t border-[#1a1a1a] px-6 py-8 text-center text-sm text-gray-600">
        <p className="font-mono text-[#00E5FF] mb-2">sabelo@devops-africa.co.za</p>
        <p>© 2026 Sabelo Mdluli · DevOps · Africa</p>
      </footer>
    </div>
  )
}
