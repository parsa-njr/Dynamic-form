"use client";

import Header from "@/components/layout/header/Header";
import LandingPage from "@/components/layout/home/LandingPage";
import Tabs from "@/components/layout/Tabs";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <Header />
      </div>

      <LandingPage />

      <div>
        <Tabs />
      </div>
    </>
  );
}
