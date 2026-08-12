import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { WhyUs } from "@/components/why-us";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <WhyUs />
      </main>
      <SiteFooter />
    </div>
  );
}
