import Hero from "@/components/layout/Hero";
import MeetOurTeam from "@/components/layout/MeetOurTeam";
import PartnersWeTrust from "@/components/layout/PartnersWeTrust";
import ReadyToStayCool from "@/components/layout/ReadyToStayCool";
import WhatOurClientsSay from "@/components/layout/WhatOurClientsSay";
import { WhatWeDo } from "@/components/layout/WhatWeDo";
import Image from "next/image";

export default function Home() {
  return (
 <div>
  <Hero/>
  <WhatWeDo/>
  <MeetOurTeam/>
  <WhatOurClientsSay/>
  <PartnersWeTrust/>
  <ReadyToStayCool/>
 </div>
  );
}
