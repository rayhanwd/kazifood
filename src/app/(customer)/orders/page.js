import { new_rest3 } from "@/app/images/images";
import Image from "next/image";

export default function Customer() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="">
          <div className="p-4 lg:w-full md:w-full">
            <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
              <div className=" sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center">
                <Image src={new_rest3} width={250} height={250} alt="images" />
              </div>
              <div className="flex-grow pr-12 flex flex-col  justify-between ">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <p className="leading-relaxed text-base text-red-500 text-lg ">
                  2X
                </p>
              </div>
              {/*=================Price and Button============= */}
              <div className="flex flex-col  justify-between ">
                <p className=" text-red-500 border-0 text-center  text-lg  ">
                  250 <span>Tk</span>
                </p>
                <button className="text-white bg-red-500 border-0 py-2 px-2  focus:outline-none hover:bg-red-600 rounded text-lg">
                  select items
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
