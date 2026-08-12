import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ContactForm } from "@/components/forms/ContactForm";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-8 py-[120px] max-md:py-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left: Text and info */}
          <RevealOnScroll>
            <div className="section-eyebrow">Contact</div>
            <h2 id="contact-heading" className="section-title">
              Let&apos;s build something
              <br />
              extraordinary
            </h2>
            <p className="mt-4 mb-10 text-[16px] leading-relaxed text-[var(--text-secondary)] max-w-[400px]">
              Ready to start your next project? Drop us a message with the
              details, and our team will get back to you within 24 hours to
              schedule a discovery call.
            </p>

            <div className="flex flex-col gap-4 text-[16px] text-[var(--text-secondary)]">
              <div className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                vishvtechnologies.info@gmail.com
              </div>
              <div className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                Satara, Maharashtra, India
              </div>
            </div>
          </RevealOnScroll>

          {/* Right: Contact Form */}
          <RevealOnScroll>
            <div>
              <ContactForm />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
