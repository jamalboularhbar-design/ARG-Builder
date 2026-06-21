import { useAuth } from '@/_core/hooks/useAuth';
import { Link } from 'wouter';
import {
  Search, Layers, History, FolderOpen, Download, Bookmark,
  CheckCircle2, ArrowRight, MessageSquare, BellRing,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { totalDocuments, categoryCounts } from '@/lib/documentCatalog';

const LOGO_IMG = '/manus-storage/logo-icon_7cc98e89.png';
const HERO_IMG = '/manus-storage/hero-dashboard_9f31bf62.png';

const FUNCTION_COUNT = Object.keys(categoryCounts).length;

const STATS = [
  { n: String(totalDocuments), label: 'structured operating documents, each one decision-ready' },
  { n: String(FUNCTION_COUNT), label: 'business functions covered, from pricing to security compliance' },
  { n: '0', label: 'documents you have to write before your company has an operating manual' },
];

const NEXUS_OS = [
  { icon: MessageSquare, title: 'Ask once', desc: 'One inbox. One prompt. The playbook fires across Slack, Notion, Gmail.' },
  { icon: CheckCircle2, title: 'Approvals', desc: 'Human-in-the-loop where judgement matters. Quiet automation everywhere else.' },
  { icon: BellRing, title: 'Heartbeat', desc: 'Recurring loops run on their own. You see the result, not the run.' },
];

const AUDIENCES = [
  { title: 'Solo founders', desc: 'Run with the structure of a 50-person company. Reference, decide, execute.' },
  { title: 'Small teams (2–20)', desc: 'One shared source of truth. Onboard people into documented process, not tribal memory.' },
  { title: 'Fractional COOs, consultants & agencies', desc: 'Deliver structured operational documentation to clients without writing it from zero.' },
];

const FEATURES = [
  { icon: Search, title: 'Full-text search', desc: `Find the exact framework in seconds, across all ${totalDocuments} documents.` },
  { icon: Layers, title: 'Structured categories', desc: `${FUNCTION_COUNT} functions, consistently organized. No orphan docs, no duplicates.` },
  { icon: History, title: 'Versioning & freshness', desc: 'Documents carry version history and review status. You know what’s current.' },
  { icon: FolderOpen, title: 'Collections & reading paths', desc: 'Sequence documents into onboarding tracks, launch checklists, or client deliverables.' },
  { icon: Download, title: 'Export', desc: 'PDF, DOCX, and zip export. Your reference travels with you.' },
  { icon: Bookmark, title: 'Annotations & bookmarks', desc: 'Mark what applies to your company. The reference adapts to you.' },
];

const STEPS = [
  { title: 'Join', desc: 'One plan, full library access. No onboarding calls, no configuration.' },
  { title: 'Search or browse', desc: 'Start from your most urgent function: pricing, hiring, launch, compliance.' },
  { title: 'Apply', desc: 'Every document ends in templates and decision tables. Take the structure, fill in your company.' },
];

const FAQS = [
  { q: 'Is this just a template pack?', a: 'No. Templates are dead files. This is a maintained platform: versioned documents, consistent architecture, search, collections, and updates as the library grows. The difference is the same as between a map PDF and a navigation system.' },
  { q: 'Who writes the documents?', a: 'The library is built and maintained by the founder with AI-assisted research and drafting, structured under a single editorial architecture. Every document carries its preparation credit and review status.' },
  { q: 'What if a document I need is missing?', a: 'Founding Members request documents directly. The library grows where its members operate.' },
  { q: 'Can I use these for client work?', a: 'Yes — consultants and fractional operators use the reference to structure client deliverables. White-label arrangements: ask.' },
];

export default function LandingPage() {
  const { user } = useAuth({ redirectOnUnauthenticated: false });
  const sortedCategories = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]);

  return (
    <div className="min-h-screen bg-[#0B1120] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1120]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={LOGO_IMG} alt="ARG-Builder" className="w-8 h-8 rounded-lg" />
            <span className="text-xl font-bold tracking-tight">ARG-Builder</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#nexus-os" className="hover:text-white transition-colors">Nexus OS</a>
            <a href="#library" className="hover:text-white transition-colors">Library</a>
            <a href="#founder" className="hover:text-white transition-colors">Founder</a>
            <a href="#cohort" className="hover:text-white transition-colors">Cohort</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            {user ? (
              <Link href="/">
                <Button size="sm" className="bg-teal-500 hover:bg-teal-400 text-black font-semibold">
                  Go to App <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            ) : (
              <a href="#cohort">
                <Button size="sm" className="bg-teal-500 hover:bg-teal-400 text-black font-semibold">
                  Apply
                </Button>
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            <span className="text-sm font-medium text-teal-300">Founding cohort — 10 seats — opens June 2026</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
            The playbook<span className="text-gray-500"> &amp; </span>the runtime that runs it.<br />
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
              Already written. Already executing.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            ARG-Builder is two things in one workspace. <strong className="text-white font-medium">Playbooks</strong> — {totalDocuments} structured operating
            documents covering all {FUNCTION_COUNT} functions of a running company.
            <strong className="text-white font-medium"> Nexus OS</strong> — the runtime that executes them across Slack, Notion and
            Gmail. Two of my own businesses already run on it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#cohort">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-400 text-black font-semibold px-8 py-6 text-lg">
                Apply for the founding cohort <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
          <p className="mt-5 text-sm text-gray-600 font-mono">{totalDocuments} documents · {FUNCTION_COUNT} functions · 10 founding seats</p>
          <div className="relative mt-16 mx-auto max-w-5xl">
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 via-cyan-500/10 to-teal-500/20 rounded-2xl blur-3xl" />
            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={HERO_IMG} alt="ARG-Builder platform" className="w-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Nexus OS — the runtime that distinguishes us from a wiki */}
      <section id="nexus-os" className="py-24 px-4 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium mb-6">
            Nexus OS — the runtime
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">A wiki tells you what to do. Nexus OS does it.</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Notion gives you a blank page. ChatGPT gives you advice. ARG-Builder gives you the playbook and
            the runtime that fires it — across the tools you already use. Three primitives, working quietly underneath.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {NEXUS_OS.map((p) => (
              <div key={p.title} className="p-8 rounded-xl bg-white/[0.03] border border-white/5 hover:border-teal-500/30 transition-colors text-left">
                <div className="w-11 h-11 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5">
                  <p.icon className="w-5 h-5 text-teal-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-gray-400">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-gray-500">Founding-cohort members get Nexus OS early access. Not a separate purchase.</p>
        </div>
      </section>

      {/* Founder — the unattackable asset */}
      <section id="founder" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium mb-6">
            Who is building this
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 leading-tight">
            Twenty-five years curating experiences that can't be templated.<br />
            <span className="text-gray-400 font-normal text-2xl sm:text-3xl">Now encoded into the systems that run them.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-start">
            <div className="rounded-xl bg-white/[0.03] border border-white/5 aspect-[4/5] flex items-center justify-center text-gray-600 text-sm">
              {/* Replace with portrait at /manus-storage/founder-portrait.jpg */}
              Founder portrait
            </div>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                <strong className="text-white font-medium">Marrakech, 1995.</strong> Diploma in Computing & Management at a moment when most of Morocco hadn't met a computer. Online by 1998 — one of the earliest. The reflex of the early-web operator never went anywhere.
              </p>
              <p>
                <strong className="text-white font-medium">The next 25 years.</strong> VIP tour guide, photographer, luxury travel curator, creative director. On set with Asterix, with Alexander, watching how a 200-person production runs without anyone shouting. Languages, history, art, the texture of how craft is actually made.
              </p>
              <p>
                <strong className="text-white font-medium">Now.</strong> I run two businesses — <a href="https://riadandroutes.com" className="text-teal-400 hover:text-teal-300">Riad&Routes</a> (luxury Moroccan travel) and ArtKech (creative studio). I run them through Nexus OS, on the playbooks you see here. The dormant tech background isn't dormant anymore.
              </p>
              <p className="italic text-gray-500 border-l-2 border-teal-500/30 pl-4">
                I'm not selling software. I'm selling the playbook and the runtime. Together, that's capacity — the invisible layer where work gets done.
              </p>
              <p className="text-sm text-gray-600">— Jamal Boularhbar, Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section id="why" className="py-24 px-4 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium mb-6">
            Why this exists
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            You're running a company without an operations manual.<br />
            <span className="text-teal-400">Nobody has time to write one.</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Solo founders and small teams run on memory and improvisation. The knowledge exists — in courses
            you bought, threads you bookmarked, advice you half-remember — but none of it is structured,
            current, or findable at the moment of decision. Consultants charge five figures to document what
            you need. Template packs give you forty Word files and silence. ARG-Builder is the third option:
            a complete, interconnected operating reference, maintained as software.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="p-6 rounded-xl bg-white/[0.03] border border-white/5 text-left">
                <div className="text-4xl font-bold text-teal-400 mb-2">{s.n}</div>
                <p className="text-sm text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Built for operators, not enterprises</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            ARG-Builder isn't a wiki you have to fill or an enterprise tool you have to configure. It deploys
            complete. Each document follows the same architecture — frameworks, decision tables, templates,
            metrics. Learn the structure once, navigate everything.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AUDIENCES.map((a) => (
              <div key={a.title} className="p-8 rounded-xl bg-white/[0.03] border border-white/5 hover:border-teal-500/30 transition-colors text-left">
                <h3 className="text-lg font-semibold mb-2">{a.title}</h3>
                <p className="text-sm text-gray-400">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Library */}
      <section id="library" className="py-24 px-4 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">All {FUNCTION_COUNT} functions. One architecture.</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-10">
            Every document ends in templates and decision tables — take the structure, fill in your company.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {sortedCategories.map(([name, count]) => (
              <Link key={name} href={`/category/${encodeURIComponent(name)}`}>
                <span className="inline-block px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-sm text-gray-400 hover:border-teal-500/40 transition-colors cursor-pointer">
                  <span className="text-teal-400 font-semibold mr-1.5">{count}</span>{name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Platform */}
      <section id="platform" className="py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">A reference platform, not a folder of files</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="p-8 rounded-xl bg-white/[0.03] border border-white/5 hover:border-teal-500/30 transition-colors text-left">
                <div className="w-11 h-11 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5">
                  <f.icon className="w-5 h-5 text-teal-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Working in minutes, not months</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STEPS.map((s, i) => (
              <div key={s.title} className="relative p-8 rounded-xl bg-white/[0.03] border border-white/5 text-left">
                <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-md bg-[#0B1120] border border-teal-500/30 text-teal-400 text-xs font-mono font-semibold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-lg font-semibold mb-2 mt-1">{s.title}</h3>
                <p className="text-sm text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cohort — apply, do not self-serve */}
      <section id="cohort" className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium mb-6">
            Founding cohort — 10 seats, then closed
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">10 operators. One season together.</h2>
          <p className="text-lg text-gray-400 mb-12 leading-relaxed">
            Founding members co-design one Autopilot for the highest-leverage operational loop in their business,
            get the full Playbooks library, get Nexus OS early access, and get a standing weekly line to me while
            the system matures. Six-month commitment. Capped at ten. When the cohort closes, the founding tier closes with it.
          </p>
          <div className="p-8 rounded-2xl bg-gradient-to-b from-teal-500/10 to-white/[0.02] border border-teal-500/30 text-left">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Commitment</p>
                <p className="text-lg text-white font-medium">6 months</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Seats</p>
                <p className="text-lg text-white font-medium">10 (then closed)</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Window</p>
                <p className="text-lg text-white font-medium">June 2026 — NY / SF</p>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                'Full Playbooks library + every future update',
                'Nexus OS early access — your loop is the first one we build',
                'Weekly direct line to the founder (real, not delegated)',
                'Naming credit as a founding cohort member at public launch',
                'In exchange: case-study rights, monthly written feedback, a quote at launch',
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />{f}
                </li>
              ))}
            </ul>
            <a href="mailto:hello@argbuilder.io?subject=Founding%20cohort%20application&body=Business%3A%0AWebsite%3A%0AThe%20one%20operational%20loop%20I%27d%20hand%20to%20an%20Autopilot%20first%3A%0A">
              <Button
                size="lg"
                className="w-full bg-teal-500 hover:bg-teal-400 text-black font-semibold py-6 text-base"
              >
                Apply for the cohort <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <p className="text-xs text-gray-600 mt-4 text-center">Applications reviewed within 48 hours. No checkout, no seat math — a conversation.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-4 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Fair questions</h2>
          <div className="space-y-4">
            {FAQS.map((f) => (
              <details key={f.q} className="rounded-xl bg-white/[0.03] border border-white/10 overflow-hidden group">
                <summary className="cursor-pointer px-6 py-5 font-semibold text-[15px] list-none flex justify-between items-center">
                  {f.q}<span className="text-teal-400 text-xl font-normal group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="px-6 pb-5 text-sm text-gray-400 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.08),transparent_70%)]" />
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="text-3xl sm:text-5xl font-bold mb-5">The playbook and the runtime.</h2>
          <p className="text-lg text-gray-400 mb-10">
            Two of my own businesses already run on it. Ten operators can join the first cohort.
            After that, the founding tier closes.
          </p>
          <a href="#cohort">
            <Button
              size="lg"
              className="bg-teal-500 hover:bg-teal-400 text-black font-semibold px-8 py-6 text-lg"
            >
              Apply for the founding cohort <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
          <p className="mt-6 text-sm text-gray-600 font-mono">{totalDocuments} documents · {FUNCTION_COUNT} functions · 10 seats</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={LOGO_IMG} alt="ARG-Builder" className="w-7 h-7 rounded-lg" />
            <span className="text-sm text-gray-500">ARG-Builder — Playbooks &amp; Nexus OS. Autonomous Capacity, not software.</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-gray-600">
            <span>&copy; {new Date().getFullYear()} ARG-Builder</span>
            <span>·</span>
            <span>hello@argbuilder.io</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
