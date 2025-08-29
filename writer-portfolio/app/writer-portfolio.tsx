
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Feather, BookOpen, PenSquare, FileText, Linkedin, Twitter, Globe, Languages, Calendar, Quote, BadgeCheck, Phone, MapPin } from "lucide-react";
// Note: shadcn/ui components are replaced with simple local components for portability
const Button = ({ children, onClick, variant, asChild, className, type }) => (
  <button type={type} onClick={onClick} className={`px-4 py-2 rounded-lg border ${variant==='outline'?'border-gray-300':'bg-gray-900 text-white'} ${className||''}`}>
    {children}
  </button>
);
const Card = ({ children, className }) => <div className={`bg-white shadow rounded-lg p-4 ${className||''}`}>{children}</div>;
const CardHeader = ({ children }) => <div className="mb-2">{children}</div>;
const CardTitle = ({ children, className }) => <h3 className={`${className||''} font-semibold`}>{children}</h3>;
const CardContent = ({ children, className }) => <div className={`${className||''}`}>{children}</div>;
const Input = (props) => <input className="border p-2 rounded w-full" {...props} />;
const Textarea = (props) => <textarea className="border p-2 rounded w-full" {...props} />;

const Section = ({ id, title, kicker, children }) => (
  <section id={id} className="py-20 scroll-mt-24">
    <div className="max-w-6xl mx-auto px-6">
      <div className="mb-10">
        {kicker && <p className="uppercase tracking-widest text-sm text-muted-foreground mb-2">{kicker}</p>}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

const Tag = ({ children }) => (
  <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">{children}</span>
);

const ProjectCard = ({ title, blurb, tags, link }) => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle className="text-xl flex items-center gap-2"><FileText className="w-5 h-5" /> {title}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <p className="text-gray-600 leading-relaxed">{blurb}</p>
      <div className="flex flex-wrap gap-2">{tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
      {link && (
        <Button asChild className="mt-2">
          <a href={link} target="_blank" rel="noreferrer">Read sample</a>
        </Button>
      )}
    </CardContent>
  </Card>
);

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function WriterPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-white">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Feather className="w-5 h-5" />
            <span className="font-semibold">Deborah George</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            {["Home","About","Portfolio","Services","Testimonials","Contact"].map((label) => (
              <button key={label} onClick={() => scrollToId(label.toLowerCase())} className="hover:opacity-80">{label}</button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={() => scrollToId("contact")} className="rounded-2xl">
              Let’s work <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </nav>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="uppercase tracking-widest text-sm text-gray-500 mb-3">Writer • Storyteller • Content Strategist</p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Words that win hearts—and business.
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-prose">
              I craft clear, compelling narratives for brands and publications. From long-form features to conversion-focused web copy, my writing blends voice, strategy, and research.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button onClick={() => scrollToId("portfolio")}>
                View Portfolio <BookOpen className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" onClick={() => scrollToId("services")}>Services</Button>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-gray-600">
              <BadgeCheck className="w-4 h-4" /> 7+ years professional writing
              <Languages className="w-4 h-4 ml-4" /> EN (native), basic ES
              <Calendar className="w-4 h-4 ml-4" /> Based in India • Remote friendly
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-100 to-white grid place-items-center mb-6">
                  <Feather className="w-16 h-16" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <PenSquare className="w-5 h-5" />
                    <p className="text-sm">Specialties: Tech, Health, Lifestyle, B2B SaaS</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5" />
                    <p className="text-sm">Published in: Medium, Substack, client blogs</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5" />
                    <p className="text-sm">Formats: Features, Case Studies, Web Copy, Email</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Section id="about" title="About" kicker="Get to know me">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 space-y-4">
            <p className="text-gray-600 leading-relaxed">
              I'm Deborah George, a writer who blends meticulous research with a conversational voice. My north star is clarity: making complex ideas simple without dumbing them down. I partner with startups, agencies, and editors to shape words that move readers to feel—and act.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Beyond the screen, I’m fueled by good coffee, marginalia in paperbacks, and long walks that untangle tricky paragraphs.
            </p>
            <div className="flex flex-wrap gap-2">
              {["AP Style","SEO","Interviewing","Content Strategy","Brand Voice","Editing","UX Writing"].map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Quick facts</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2 text-gray-600">
              <p>• 100+ articles and case studies delivered</p>
              <p>• Worked with 30+ brands across 5 countries</p>
              <p>• Turnaround: 48–72 hrs for short-form, 7–10 days for long-form</p>
              <p>• Tools: Notion, Google Docs, Figma, Grammarly</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="portfolio" title="Selected Work" kicker="Portfolio">
        <div className="grid md:grid-cols-3 gap-6">
          <ProjectCard
            title="Feature: The Calm Company Playbook"
            blurb="A 2,400-word editorial exploring sustainable growth and team culture for bootstrapped founders."
            tags={["Feature","Business","Editorial"]}
            link="#"
          />
          <ProjectCard
            title="Case Study: From Leads to Loyalty"
            blurb="How a D2C brand lifted LTV by 36% with lifecycle emails. Structured interviews + data-led narrative."
            tags={["Case Study","Email","D2C"]}
            link="#"
          />
          <ProjectCard
            title="SEO Article: Zero-Trust 101"
            blurb="Explained a complex security model with simple metaphors and diagrams. Ranked top-5 for primary keyword."
            tags={["SEO","Tech","Explainer"]}
            link="#"
          />
          <ProjectCard
            title="Web Copy: Health Clinic Rebrand"
            blurb="Voice-of-customer research to reframe services around outcomes. Result: +28% form submissions."
            tags={["Copywriting","Health","CRO"]}
            link="#"
          />
          <ProjectCard
            title="Newsletter: The Sunday Edit"
            blurb="A weekly curation on creativity and craft. 38% avg open rate across 10k+ subscribers."
            tags={["Newsletter","Curation","Editorial"]}
            link="#"
          />
          <ProjectCard
            title="Thought Leadership: AI and Attention"
            blurb="Balanced, researched POV on AI writing tools and the future of editorial quality."
            tags={["Thought Leadership","AI","Opinion"]}
            link="#"
          />
        </div>
      </Section>

      <Section id="services" title="How I can help" kicker="Services">
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            icon: PenSquare,
            title: "Long‑form Articles",
            desc: "1,500–3,000+ words. Interviews, research, and narrative structure that earns attention.",
            bullets: ["Topic discovery","Expert interviews","SEO metadata"],
          }, {
            icon: FileText,
            title: "Case Studies",
            desc: "Customer stories that quantify outcomes and establish authority.",
            bullets: ["Customer outreach","Story arc","Design handoff"],
          }, {
            icon: BookOpen,
            title: "Web & Email Copy",
            desc: "Clear, on‑brand copy for sites and lifecycle campaigns that convert.",
            bullets: ["Voice of customer","Wireframe-ready","A/B ideas"],
          }].map((s, i) => (
            <Card key={i} className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <s.icon className="w-5 h-5" /> {s.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 space-y-4">
                <p>{s.desc}</p>
                <ul className="list-disc pl-5 space-y-1">
                  {s.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Button onClick={() => scrollToId("contact")} variant="outline" className="rounded-2xl">
            Request a quote
          </Button>
        </div>
      </Section>

      <Section id="testimonials" title="Kind words" kicker="Testimonials">
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            quote: "Deborah captured our voice perfectly and turned complex research into engaging copy.",
            name: "Priya S.", role: "Head of Marketing, SaaS"
          },{
            quote: "Fast, thoughtful, and on‑brief. Our case studies finally tell the real story.",
            name: "Alex M.", role: "Founder, D2C"
          },{
            quote: "Editorial rigor with a friendly process. A joy to collaborate with.",
            name: "Rahul K.", role: "Managing Editor"
          }].map((t, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <Quote className="w-6 h-6 mb-4" />
                <p className="leading-relaxed">“{t.quote}”</p>
                <p className="mt-4 text-sm text-gray-600">— {t.name}, {t.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Let’s build something great" kicker="Contact">
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2"><Mail className="w-5 h-5" /> Start a project</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = new FormData(e.currentTarget);
                  const subject = encodeURIComponent(`Project inquiry: ${data.get("project") || "Writing"}`);
                  const body = encodeURIComponent([
                    `Name: ${data.get("name")}`,
                    `Email: ${data.get("email")}`,
                    `Project: ${data.get("project")}`,
                    `Budget: ${data.get("budget")}`,
                    `Timeline: ${data.get("timeline")}`,
                    "---",
                    `${data.get("message")}`,
                  ].join("\\n"));
                  window.location.href = `mailto:hello@deborahgeorge.writes?subject=${subject}&body=${body}`;
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <Input name="name" placeholder="Your name" required />
                  <Input name="email" type="email" placeholder="Email" required />
                </div>
                <Input name="project" placeholder="What do you need written?" />
                <div className="grid grid-cols-3 gap-4">
                  <Input name="budget" placeholder="Budget (USD)" />
                  <Input name="timeline" placeholder="Timeline" />
                  <Input name="website" placeholder="Your website (optional)" />
                </div>
                <Textarea name="message" placeholder="Tell me about your goals, audience, and any examples you like." rows={5} />
                <Button type="submit" className="rounded-2xl">Send inquiry</Button>
              </form>
              <p className="mt-4 text-sm text-gray-600">
                Prefer email? Write to <a href="mailto:hello@deborahgeorge.writes" className="underline">hello@deborahgeorge.writes</a>
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Availability & FAQs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-gray-600">
              <p><strong>Availability:</strong> Booking new projects for <em>September–October 2025</em>.</p>
              <p><strong>Rates:</strong> Flat project fees with clear milestones. Hourly available for editing/consulting.</p>
              <p><strong>Process:</strong> Discovery → Outline → Draft → Revisions → Final delivery. Always on time.</p>
              <div className="flex items-center gap-3 pt-2">
                <Phone className="w-4 h-4" /> <span>+91 • provided upon request</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" /> <span>India • Remote worldwide</span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-4 h-4" /> <a href="#" className="underline">LinkedIn</a>
              </div>
              <div className="flex items-center gap-3">
                <Twitter className="w-4 h-4" /> <a href="#" className="underline">Twitter</a>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Feather className="w-4 h-4" /> <span>© {new Date().getFullYear()} Deborah George</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#about" onClick={(e)=>{e.preventDefault(); scrollToId('about');}} className="hover:opacity-80">About</a>
            <a href="#portfolio" onClick={(e)=>{e.preventDefault(); scrollToId('portfolio');}} className="hover:opacity-80">Portfolio</a>
            <a href="#services" onClick={(e)=>{e.preventDefault(); scrollToId('services');}} className="hover:opacity-80">Services</a>
            <a href="#contact" onClick={(e)=>{e.preventDefault(); scrollToId('contact');}} className="hover:opacity-80">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
