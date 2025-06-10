import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { RoleSelector } from "@/components/role-selector";
import { NetworkVisualization } from "@/components/network-visualization";
import { FinalCTA } from "@/components/final-cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <RoleSelector />
        <NetworkVisualization />
        {/* We can add more sections here as we build them */}
        <FinalCTA />
      </main>
    </>
  );
}
