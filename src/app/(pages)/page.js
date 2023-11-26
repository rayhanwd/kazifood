import OfferNow from "./home/offerNow/OfferNow";
import Hero from "./home/hero/Hero";
import NewArrival from "./home/newArrival/NewArrival";
import OurStory from "./home/ourStory/OurStory";

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
