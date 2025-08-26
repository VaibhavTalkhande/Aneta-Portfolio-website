"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiMail, FiPhone, FiInstagram, FiLinkedin, FiFacebook, FiTwitter } from "react-icons/fi";
import bg from "@/public/bg.jpg";
import nlp from "@/public/nlp.jpg";
import coaching from "@/public/coaching.jpg";
import personality from "@/public/personality.avif";
import empowerment from "@/public/empowerment.jpg";
import resources from "@/public/resources.jpg";
import Image from "next/image";
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80, damping: 14 } },
};

export default function AnetaPortfolio(){
  // OLD SITE CONTACT (update when you have the exact URLs)
  const socials = [
    { name: "LinkedIn", href: "https://www.linkedin.com/", icon: FiLinkedin },
    { name: "Instagram", href: "https://www.instagram.com/", icon: FiInstagram },
    { name: "Facebook", href: "https://www.facebook.com/100063698374820/", icon: FiFacebook },
    { name: "Twitter", href: "https://x.com/", icon: FiTwitter },
  ];

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#hero" className="font-semibold tracking-tight text-lg">Flying High Coaching</a>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-neutral-600">About</a>
            <a href="#journey" className="hover:text-neutral-600">Your Journey</a>
            <a href="#approach" className="hover:text-neutral-600">Approach</a>
            <a href="#testimonials" className="hover:text-neutral-600">Testimonials</a>
            <a href="#resources" className="hover:text-neutral-600">Free Guide</a>
            <a href="#contact" className="hover:text-neutral-600">Contact</a>
            <a
              href="https://calendly.com/your-calendly-username/free-consultation"
              className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800"
            >
              Book Free Consultation <FiArrowRight />
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="relative isolate overflow-hidden">
        <img
          src={bg.src}
          alt="Soaring sunrise over peaks"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/50" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-28 sm:py-36 text-white">
          <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
            <motion.h1 variants={item} className="text-4xl sm:text-6xl font-extrabold leading-tight">
              Break Free. Rise Higher. Reclaim Your True Self.
            </motion.h1>
            <motion.p variants={item} className="text-lg sm:text-2xl max-w-3xl">
              Trauma-informed empowerment coaching for women and LGBTQ+ professionals ready to heal, grow, and thrive.
            </motion.p>
            <motion.div variants={item} className="flex flex-wrap items-center gap-4">
              <a
                href="https://calendly.com/your-calendly-username/free-consultation"
                className="inline-flex items-center gap-2 rounded-xl bg-white/95 px-5 py-3 text-neutral-900 hover:bg-white"
              >
                Book Your Free Consultation <FiArrowRight />
              </a>
              <a href="#resources" className="inline-flex items-center gap-2 rounded-xl border border-white/70 px-5 py-3 hover:bg-white/10">
                Download Free Guide <FiDownload />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Meet Your Coach</h2>
            <p className="mt-4 text-neutral-700">
              I’m <strong>Aneta Sanders</strong> — a certified Empowerment and Leadership Coach, Master NLP Practitioner, and People & OD Leader with over 18 years of experience guiding transformation in individuals, teams, and organisations.
            </p>
            <p className="mt-4 text-neutral-700">
              My passion lies in helping highly sensitive women and LGBTQ+ individuals recover from toxic relationships, rebuild self-worth, and step into their authentic power. I bring together the science of psychology, the strategies of leadership coaching, and the empathy of lived experience to create a safe, empowering space for your healing and growth.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-3 py-1">Empowerment & Leadership</span>
              <span className="inline-flex items-center rounded-full bg-indigo-100 text-indigo-800 px-3 py-1">Master NLP</span>
              <span className="inline-flex items-center rounded-full bg-rose-100 text-rose-800 px-3 py-1">Trauma‑informed</span>
              <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-800 px-3 py-1">DISC Practitioner</span>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/10">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop"
                alt="Coach portrait"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* YOUR JOURNEY */}
      <section id="journey" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Your Journey — How I Help</h2>
            <p className="mt-4 text-neutral-700">
              Working together means creating breakthroughs where you once felt stuck. My coaching helps you:
            </p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Heal from emotional wounds caused by toxic relationships or workplace trauma",
              "Gain clarity and confidence to move forward with purpose",
              "Build unshakable self‑worth & healthy boundaries",
              "Foster authentic, nourishing relationships",
              "Step fully into your authentic power — both personally and professionally",
              "Reinvent your life on your terms",
            ].map((text) => (
              <motion.div key={text} variants={item} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
                <p className="text-neutral-800">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Coaching Approaches — What to Expect</h2>
            <p className="mt-4 text-neutral-700">Personalised, trauma‑informed, and results‑driven coaching designed to shift you from survival mode to freedom, confidence, and peace.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[
              {
                title: "1:1 Coaching Sessions",
                desc: "Safe, non‑judgmental, deeply transformational conversations.",
                img: coaching.src,
              },
              {
                title: "NLP & Mindset Reprogramming",
                desc: "Release old patterns and create empowering beliefs.",
                img: nlp.src,
              },
              {
                title: "DISC & Personality Profiling",
                desc: "Understand your strengths and transform relationships.",
                img: personality.src
              },
              {
                title: "Tailored Empowerment Plans",
                desc: "Practical tools and strategies for your unique journey.",
                img: empowerment.src,
              },
            ].map((card) => (
              <div key={card.title} className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
                <img src={card.img} alt="" className="h-56 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="mt-2 text-neutral-700">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Testimonials & Transformations</h2>
            <p className="mt-4 text-neutral-700">Real stories from clients who reclaimed their power.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <blockquote className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
              <p className="text-neutral-800">“I came to Aneta feeling broken and exhausted. Today, I feel free, confident, and excited about life again. She gave me the tools I needed to finally let go of my past.”</p>
              <footer className="mt-4 text-sm text-neutral-600">— Sarah, UK</footer>
            </blockquote>
            <blockquote className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
              <p className="text-neutral-800">“Aneta’s coaching gave me clarity and courage to step into a leadership role I never thought I deserved. It was life‑changing.”</p>
              <footer className="mt-4 text-sm text-neutral-600">— Alex, London</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* FREE RESOURCE */}
      <section id="resources" className="bg-gradient-to-br from-rose-50 to-rose-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Free Resource — 7 Steps to Reclaim Your Power</h2>
              <p className="mt-4 text-neutral-700">A simple, empowering checklist to help you begin rebuilding confidence and clarity.</p>
              <a
                href="/aneta-7-steps-checklist.pdf"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 text-white hover:bg-neutral-800"
              >
                Download Your Free Guide <FiDownload />
              </a>
            </div>
            <div className="relative">
              <img
                src={resources.src}
                alt="Notebook and coffee"
                className="rounded-3xl shadow-2xl ring-1 ring-black/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let’s Connect — Book Your Call</h2>
              <p className="mt-4 text-neutral-700">You don’t have to do this alone. If you’re ready to rise above your past and step into your true power, let’s talk.</p>
              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                <a
                  href="https://calendly.com/your-calendly-username/free-consultation"
                  className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 text-white hover:bg-neutral-800"
                >
                  Book Your Free Consultation <FiArrowRight />
                </a>
                <a href="mailto:aneta@flyinghighcoaching.co.uk" className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-5 py-3 hover:bg-neutral-50">
                  <FiMail /> aneta@flyinghighcoaching.co.uk
                </a>
                <a href="tel:+447737487973" className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-5 py-3 hover:bg-neutral-50">
                  <FiPhone /> +44 7737 487 973
                </a>
              </div>
            </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 bg-neutral-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Flying High Coaching Ltd. All rights reserved.</p>
            <ul className="flex items-center gap-4">
              {socials.map((s) => (
                <li key={s.name}>
                  <a href={s.href} className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-3 py-2 text-sm hover:bg-white">
                    {React.createElement(s.icon, { className: "h-4 w-4" })}
                    <span className="hidden sm:inline">{s.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-xs text-neutral-500">Registered in England & Wales. Company No. 11956784.</p>
        </div>
      </footer>
    </main>
  );
}
