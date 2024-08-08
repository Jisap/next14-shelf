"use client"


import { Navbar } from "./components/Navbar";
import { CTASection } from "./components/CTASection";
import { Features } from "./components/Features";




export default function Home() {
  return (
   <div className="poppins">
      <Navbar />
      <CTASection />
      <Features />
   </div>
  );
}
