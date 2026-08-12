import { services } from "@/config/site";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { WayfindingRow } from "@/components/ui/WayfindingRow";
import { ServiceCard } from "@/components/ui/ServiceCard";

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden px-8 py-[120px] max-md:py-20"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <RevealOnScroll>
          <div className="section-eyebrow">Capabilities</div>
          <h2 id="services-heading" className="section-title max-w-[520px]">
            Full-spectrum engineering,
            <br />
            from idea to deployment
          </h2>
          <p className="section-desc">
            Six core disciplines. One team. Every layer handled with the same
            standard of craft.
          </p>
        </RevealOnScroll>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <RevealOnScroll key={service.title}>
              <ServiceCard {...service} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
      <div className="mt-20">
        <WayfindingRow nextSectionName="HOW WE WORK" nextSectionLink="/#process" supportLinkName="METHODOLOGY" />
      </div>
    </section>
  );
}
