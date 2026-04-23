export default function FamilyW1NSWebsite() {
  const services = [
    {
      title: "Support Coordination",
      points: [
        "Implementation of NDIS plans",
        "Connection with suitable providers",
        "Service coordination and problem-solving",
        "Advocacy and ongoing monitoring"
      ]
    },
    {
      title: "Specialist Support Coordination",
      points: [
        "Support for complex situations",
        "Housing, crisis and service escalation pathways",
        "Multi-provider coordination",
        "High-risk and high-needs case navigation"
      ]
    },
    {
      title: "Psychosocial Recovery Coaching",
      points: [
        "Recovery-focused planning",
        "Capacity building and goal support",
        "Connection to community and clinical supports",
        "Practical coordination around mental health needs"
      ]
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Referral Received",
      text: "We review the referral promptly and make contact to understand the participant’s needs, priorities and urgency."
    },
    {
      step: "02",
      title: "Initial Consultation",
      text: "We listen carefully, identify goals and risks, and map out the most appropriate next steps."
    },
    {
      step: "03",
      title: "Service Setup",
      text: "We connect participants with suitable providers and put practical supports in place quickly."
    },
    {
      step: "04",
      title: "Ongoing Coordination",
      text: "We continue to monitor services, solve problems, advocate strongly and help participants move forward."
    }
  ];

  const areas = ["Campbelltown", "Liverpool", "Glenfield", "Casula", "Bankstown", "South West Sydney", "Greater Sydney"];

  const faqs = [
    {
      q: "What does a Support Coordinator do?",
      a: "A Support Coordinator helps participants understand and implement their NDIS plan, connect with providers, solve service issues, and build capacity to manage supports with more confidence."
    },
    {
      q: "How quickly can services start?",
      a: "That depends on the participant’s circumstances, but FamilyW1NS aims to respond quickly to referrals and commence onboarding as soon as practical."
    },
    {
      q: "Can you help with complex situations?",
      a: "Yes. FamilyW1NS supports participants with more complex needs, including multi-provider coordination, service breakdowns, high-risk issues, and escalations where required."
    },
    {
      q: "Who can make a referral?",
      a: "Referrals can come from participants, families, Local Area Coordinators, plan managers, allied health professionals, and other service providers."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-xl font-bold tracking-tight">FamilyW1NS Pty Ltd</div>
            <div className="text-sm text-slate-500">NDIS Support Coordination & Recovery Coaching</div>
          </div>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#services" className="hover:text-slate-600">Services</a>
            <a href="#how" className="hover:text-slate-600">How We Work</a>
            <a href="#areas" className="hover:text-slate-600">Service Areas</a>
            <a href="#referrals" className="hover:text-slate-600">Referrals</a>
            <a href="#contact" className="hover:text-slate-600">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-medium text-amber-700 shadow-sm">
                Supporting participants across South West Sydney and surrounding areas
              </div>
              <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                NDIS Support Coordination that is practical, responsive and outcome-focused.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                FamilyW1NS helps participants and families navigate the NDIS with clear guidance, strong advocacy, and hands-on coordination that keeps services moving.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#referrals" className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800">
                  Refer a Participant
                </a>
                <a href="#contact" className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-400">
                  Book a Free Consultation
                </a>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white bg-white/80 p-4 shadow-sm">
                  <div className="text-2xl font-bold">10+ yrs</div>
                  <div className="text-sm text-slate-600">Sector experience</div>
                </div>
                <div className="rounded-2xl border border-white bg-white/80 p-4 shadow-sm">
                  <div className="text-2xl font-bold">Fast</div>
                  <div className="text-sm text-slate-600">Referral response</div>
                </div>
                <div className="rounded-2xl border border-white bg-white/80 p-4 shadow-sm">
                  <div className="text-2xl font-bold">Hands-on</div>
                  <div className="text-sm text-slate-600">Advocacy and support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-amber-100 bg-white p-6 shadow-2xl">
                <div className="rounded-[1.5rem] bg-slate-900 p-8 text-white">
                  <div className="text-sm uppercase tracking-[0.2em] text-amber-300">Why FamilyW1NS</div>
                  <h2 className="mt-3 text-2xl font-bold">Support that does more than just tick boxes.</h2>
                  <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-200">
                    <li>• Responsive communication with participants, families and professionals</li>
                    <li>• Practical support with implementation, provider coordination and follow-through</li>
                    <li>• Strong understanding of NDIS systems, escalation pathways and service navigation</li>
                    <li>• Focus on building trust, stability and real outcomes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">About FamilyW1NS</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">A provider families and professionals can rely on.</h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                FamilyW1NS Pty Ltd provides NDIS Support Coordination, Specialist Support Coordination and Psychosocial Recovery Coaching with a strong focus on responsiveness, practical problem-solving and participant-centred outcomes.
              </p>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                We understand that families need more than paperwork. They need someone who listens, follows through, and helps navigate barriers when services are delayed, complex or difficult to coordinate.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                <div className="text-sm font-semibold text-slate-500">Business</div>
                <div className="mt-2 text-xl font-bold">FamilyW1NS Pty Ltd</div>
              </div>
              <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                <div className="text-sm font-semibold text-slate-500">Services</div>
                <div className="mt-2 text-xl font-bold">Support Coordination, Specialist Support Coordination, Recovery Coaching</div>
              </div>
              <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                <div className="text-sm font-semibold text-slate-500">Approach</div>
                <div className="mt-2 text-xl font-bold">Practical, warm, professional and outcome-focused</div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Services</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Clear services. Real support. No fluff.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                We work with participants, families and professionals to build support systems that are practical, sustainable and tailored to the participant’s goals and needs.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <ul className="mt-6 space-y-3 text-slate-600">
                    {service.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">How We Work</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">A simple process that keeps things moving.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {steps.map((item) => (
              <div key={item.step} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="text-sm font-bold tracking-[0.2em] text-amber-700">STEP {item.step}</div>
                <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="areas" className="bg-gradient-to-r from-slate-900 to-slate-800 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Service Areas</div>
                <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Local support across South West Sydney and beyond.</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                  FamilyW1NS supports participants in key Sydney regions and can discuss suitability for surrounding areas depending on support needs and service requirements.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {areas.map((area) => (
                  <div key={area} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-center font-medium shadow-sm backdrop-blur">
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 p-8 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">What Makes Us Different</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">More than coordination. Real follow-through.</h2>
              <ul className="mt-6 space-y-4 text-slate-600">
                <li>• Warm, professional communication with participants, families and stakeholders</li>
                <li>• Prompt referral response and practical onboarding support</li>
                <li>• Strong understanding of complex service systems and escalation pathways</li>
                <li>• Genuine focus on participant outcomes, stability and continuity of care</li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-slate-200 p-8 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Professional Standards</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">Built on professionalism and trust.</h2>
              <ul className="mt-6 space-y-4 text-slate-600">
                <li>• Participant-centred and strengths-based approach</li>
                <li>• Privacy-conscious and respectful service delivery</li>
                <li>• Clear documentation, communication and coordination processes</li>
                <li>• Alignment with professional standards expected within the NDIS environment</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="referrals" className="bg-amber-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Referrals</div>
                <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Refer a participant with confidence.</h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  We welcome referrals from participants, families, Local Area Coordinators, plan managers, allied health professionals and providers.
                </p>
                <p className="mt-4 leading-7 text-slate-600">
                  Use the form to start a referral enquiry, or contact FamilyW1NS directly to discuss immediate capacity and service suitability.
                </p>
              </div>
              <form className="rounded-[2rem] border border-amber-100 bg-white p-8 shadow-lg">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">Your Name</label>
                    <input className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500" placeholder="Full name" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">Contact Number</label>
                    <input className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500" placeholder="Phone number" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
                    <input className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500" placeholder="Email address" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">Referral Type</label>
                    <select className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500">
                      <option>Support Coordination</option>
                      <option>Specialist Support Coordination</option>
                      <option>Psychosocial Recovery Coaching</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                </div>
                <div className="mt-5">
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Participant Needs / Enquiry</label>
                  <textarea rows={5} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500" placeholder="Briefly tell us what support is needed"></textarea>
                </div>
                <button type="button" className="mt-6 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800">
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Frequently Asked Questions</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Helpful answers for participants and referrers.</h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <summary className="cursor-pointer list-none text-lg font-semibold">{faq.q}</summary>
                <p className="mt-4 leading-7 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Contact</div>
                <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Ready to speak with FamilyW1NS?</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                  Whether you are a participant, family member, LAC, plan manager or provider, we welcome your enquiry and are happy to discuss how we may be able to assist.
                </p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur">
                <div className="space-y-4 text-slate-200">
                  <div>
                    <div className="text-sm font-semibold text-amber-300">Email</div>
                    <div className="mt-1 text-lg">akamara.familyw1ns@gmail.com</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-amber-300">Phone</div>
                    <div className="mt-1 text-lg">Add your business phone number</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-amber-300">Business Name</div>
                    <div className="mt-1 text-lg">FamilyW1NS Pty Ltd</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-amber-300">Service Regions</div>
                    <div className="mt-1 text-lg">Campbelltown, Liverpool, Glenfield, Casula, Bankstown and surrounding areas</div>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="#referrals" className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5">
                    Start a Referral
                  </a>
                  <a href="mailto:akamara.familyw1ns@gmail.com" className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 FamilyW1NS Pty Ltd. All rights reserved.</div>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-slate-700">Privacy Policy</a>
            <a href="#" className="hover:text-slate-700">Terms of Use</a>
            <a href="#contact" className="hover:text-slate-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
