import FoodCard from "@/app/components/foodCard/FoodCard";
import { new_rest1 } from "@/app/images/images";
import Image from "next/image";

export default function page() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-5/6 mx-auto">
          <div className="rounded-lg w-full h-64 overflow-hidden">
            <Image
              src={new_rest1}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              alt="restaurant"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/4 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  Phoebe Caulfield
                </h2>
                <div className="w-12 h-1 bg-purple-500 rounded mt-2 mb-4"></div>
                <p className="text-base">
                  Raclette knausgaard hella meggs normcore williamsburg enamel
                  pin sartorial venmo tbh hot chicken gentrify portland.
                </p>
              </div>
            </div>
            <div className="sm:w-3/4 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <div className="flex flex-wrap -m-4">
                {[1, 2, 3, , 4, 5, 6].map((imten) => (
                  <div key={imten} className="lg:w-1/3 md:w-1/2 p-4 w-full">
                    <FoodCard />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
