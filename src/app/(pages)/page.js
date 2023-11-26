import OfferNow from "../components/offerNow/OfferNow";
import Hero from "../components/hero/Hero";
import NewArrival from "../components/newArrival/NewArrival";
import OurStory from "../components/ourStory/OurStory";

export default function Home() {
  return (
    <>
      <Hero />
      <NewArrival />
      <OurStory />
      <OfferNow />
    </>
  );
}
