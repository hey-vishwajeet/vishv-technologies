import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = createMetadata({
  title: "Software Development & Tech Education",
  description:
    "Vishv Technologies builds software products, offers career-focused developer education, and grows a community of builders in Satara, India.",
  path: "/",
  keywords: [
    ...siteConfig.keywords,
    "software company in India",
    "web development agency",
    "Full-stack developer courses",
    "tech community",
  ],
});

const About = dynamic(() => import("@/components/sections/About").then((m) => m.About));
const Services = dynamic(() => import("@/components/sections/Services").then((m) => m.Services));
const Community = dynamic(() => import("@/components/sections/Community").then((m) => m.Community));
const WhyChooseUs = dynamic(() =>
  import("@/components/sections/WhyChooseUs").then((m) => m.WhyChooseUs),
);
const Portfolio = dynamic(() => import("@/components/sections/Portfolio").then((m) => m.Portfolio));
const TechStack = dynamic(() => import("@/components/sections/TechStack").then((m) => m.TechStack));
const FAQ = dynamic(() => import("@/components/sections/FAQ").then((m) => m.FAQ));
const ContactSection = dynamic(() =>
  import("@/components/sections/ContactSection").then((m) => m.ContactSection),
);
const Newsletter = dynamic(() => import("@/components/sections/Newsletter").then((m) => m.Newsletter));

function SectionDivider() {
  return <hr className="section-rule" aria-hidden="true" />;
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <WhyChooseUs />
      <SectionDivider />
      <Portfolio />
      <TechStack />
      <SectionDivider />
      <Community />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <ContactSection />
      <Newsletter />
    </>
  );
}
