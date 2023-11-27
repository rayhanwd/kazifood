import Image from "next/image";
import StoryCard from "./StoryCard";
import data from "./data.json";
import { story } from "@/app/images/images";

export default function OurStory() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Our story
        </h2>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 w-full lg:text-left text-center">
          <div className="flex flex-wrap">
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
              <Image src={story}  alt="banner_imge2" />
            </div>
            <div className="flex flex-col flex-wrap my-10 md:my-4 lg:w-1/2 lg:pl-12 lg:text-left text-center">
              {data.map(({ id, title, content }) => (
                <StoryCard key={id} title={title} content={content} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
