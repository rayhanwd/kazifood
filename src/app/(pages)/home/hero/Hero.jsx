import { hero_image } from "@/app/images/images";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col">
        <div className="lg:flex-grow md:w-1/2 md:pr-16 flex flex-col md:items-start md:text-left lg:mt-16 mb-6 md:mb-0">
          <div className="relative w-full mb-5">
            <input
              type="text"
              placeholder="Enter your location here"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-transparent focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
            Find restaurant
          </button>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2">
          {/* <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          /> */}
          <Image src={hero_image} alt="hero_imge" />
        </div>
      </div>
    </section>
  );
}
