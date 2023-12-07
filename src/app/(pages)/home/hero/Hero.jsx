

export default function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto px-5 py-24 ">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Delightful Delivers , Bringing Culinary Delights to Your Doorstep!
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Savor the flavors of your favorite cuisines without stepping out.
            Experience convenience and taste fused into one seamless journey
            with our food delivery service.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="relative w-72 mb-5 md:mb-0 mr-5">
            <input
              type="text"
              placeholder="Enter your location here"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="text-white w-auto bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
            Find restaurant
          </button>
        </div>
      </div>
    </section>
  );
}
