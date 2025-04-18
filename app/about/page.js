// pages/about/index.jsx
import OurJourneyThroughTime from "@/components/layout/OurJourneyThroughTime";
import OurStoryBegins from "../../components/layout/OurStoryBegins";
import WhoWeAre from "@/components/layout/WhoWeAre";
import OurMissionAndValues from "@/components/layout/OurMissionAndValues";
import MeetOurTeam from "@/components/layout/MeetOurTeam2";


export default function AboutUsPage() {
  return (
    <div className="w-full bg-black">
      <OurStoryBegins />
    <OurJourneyThroughTime/>
    <WhoWeAre/>
    <OurMissionAndValues/>
<MeetOurTeam/>
    </div>
  );
}
