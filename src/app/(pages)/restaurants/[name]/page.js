import FoodCard from "@/app/components/foodCard/FoodCard";
import { new_rest1 } from "@/app/images/images";
import Image from "next/image";

export default function page() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="w-full mx-auto">
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
          <div className="w-full flex sm:pr-8 sm:py-8">
            <div className="inline-flex items-center justify-center">
              <Image
                src={"/cs8ya-logo.webp"}
                className="rounded"
                width={156}
                height={156}
                alt="restaurant"
              />
            </div>
            <div className="ml-5">
              <h2 className="font-blod text-2xl title-font mt-4 text-gray-900">
                Bangali Food House
              </h2>
              <p className="text-base">
                A customer fave! You can count on them for amazing food and
                excellent service.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-3/4 sm:mt-0 mr-5 text-center sm:text-left">
              <div className="flex flex-wrap -m-4">
                {[1, 2, 3, , 4, 5, 6].map((imten) => (
                  <div key={imten} className="lg:w-1/3 md:w-1/2 p-4 w-full">
                    <FoodCard />
                  </div>
                ))}
              </div>
            </div>
            <div className="sm:w-1/4">
              <div className="relative">
                <div className="overflow-hidden">
                    <div className="pointer-events-none flex max-w-full">
                      <div className="pointer-events-auto w-screen max-w-md">
                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                            <div className="flex items-start justify-between">
                              <h2 className="text-lg font-medium text-gray-900">
                                Order items
                              </h2>
                            </div>
                            <div className="mt-8">
                              <div className="flow-root">
                                <ul className="-my-6 divide-y divide-gray-200">
                                  <li className="flex py-6">
                                    <div className="flex-shrink-0 overflow-hidden">
                                      <Image
                                        src={new_rest1}
                                        width={96}
                                        height={96}
                                        alt="d"
                                        className="rounded-md border border-gray-200"
                                      />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                          <h3>
                                            <a href="#">Burger single</a>
                                          </h3>
                                        </div>
                                      </div>
                                      <div className="text-sm">
                                        <p className="text-gray-500">item 1</p>
                                        <p className="">TK 90.00</p>
                                        <div className="flex">
                                          <button
                                            type="button"
                                            className="font-medium text-purple-600 hover:text-purple-500"
                                          >
                                            Remove
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <p>Subtotal</p>
                              <p>TK 262.00</p>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500">
                              Shipping and taxes calculated at checkout.
                            </p>
                            <div className="mt-6">
                              <button
                                className="flex items-center justify-center rounded-md border border-transparent bg-purple-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-purple-700"
                              >
                                Complete Payment
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
