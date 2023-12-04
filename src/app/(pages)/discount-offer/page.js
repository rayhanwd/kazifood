import React from "react";

export default function page() {
  return (
    <>
      <section className="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
        <div className="container relative flex px-6 py-16 mx-auto">
          <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
            <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"></span>
            <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:">
              Be on
              <span className="text-5xl sm:text-7xl">Time</span>
            </h1>
            <p className="text-sm text-gray-700 sm:text-base dark:">
              Dimension of reality that makes change possible and
              understandable. An indefinite and homogeneous environment in which
              natural events and human existence take place.
            </p>
            <div className="flex mt-8">
              <a
                href="#"
                className="px-4 py-2 mr-4  uppercase bg-purple-500 border-2 border-transparent rounded-lg text-md hover:bg-purple-400"
              >
                Get started
              </a>
              <a
                href="#"
                className="px-4 py-2 text-purple-500 uppercase bg-transparent border-2 border-purple-500 rounded-lg dark: hover:bg-purple-500 hover: text-md"
              >
                Read more
              </a>
            </div>
          </div>
          <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
            <img
              src="/offer/offer.avif"
              className="max-w-xs m-auto md:max-w-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-8 bg-gradient dark:bg-gray-800 md:py-16">
        <div className="box-content max-w-5xl px-5 mx-auto">
          <div className="flex flex-col items-center -mx-5 md:flex-row">
            <div className="w-full px-5 mb-5 text-center md:mb-0 md:text-left">
              <h6 className="text-xs font-semibold text-purple-800 uppercase md:text-base dark:text-gray-100">
                Opening tickets
              </h6>
              <h3 className="text-2xl font-bold  font-heading md:text-4xl">
                Saturday 17
              </h3>
              <h3 className="text-lg font-bold leading-tight  font-heading md:text-xl">
                10:00 AM
              </h3>
              <div className="w-full mt-4 md:w-44">
                <button
                  type="button"
                  className="py-2 px-4  bg-white hover:bg-gray-100 focus:ring-purple-500 focus:ring-offset-purple-200 text-purple-500  w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Early bird
                </button>
              </div>
            </div>
            <div className="w-full px-5 md:w-auto">
              <div className="flex justify-center text-center ">
                <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
                  <div className="text-2xl font-semibold md:text-3xl">
                    <span>0</span>
                    <span>1</span>
                  </div>
                  <div className="mt-3 text-xs uppercase opacity-75">Day</div>
                </div>
                <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
                  <div className="text-2xl font-semibold md:text-3xl">
                    <span>1</span>
                    <span>8</span>
                  </div>
                  <div className="mt-3 text-xs uppercase opacity-75 ">Hour</div>
                </div>
                <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
                  <div className="text-2xl font-semibold md:text-3xl">
                    <span>5</span>
                    <span>0</span>
                  </div>
                  <div className="mt-3 text-xs uppercase opacity-75 ">Min</div>
                </div>
                <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
                  <div className="text-2xl font-semibold md:text-3xl">
                    <span>1</span>
                    <span>9</span>
                  </div>
                  <div className="mt-3 text-xs uppercase opacity-75 ">
                    Second
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
