export default function OfferNow() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
          Order Now for Culinary Bliss!
        </h2>
        <div className="md:w-3/5 md:pl-6">
          <p className="leading-relaxed text-base">
            Hungry for an unforgettable dining experience? Dive into a world of
            culinary delights with our seamless food delivery service. Order now
            and tantalize your taste buds with the finest cuisines delivered
            straight to your doorstep.
          </p>
          <div className="flex md:mt-4 mt-6">
            <button className="inline-flex text-white bg-purple-500 border-0 py-1 px-4 focus:outline-none hover:bg-purple-600 rounded">
              Button
            </button>
            <a className="text-purple-500 inline-flex items-center ml-4">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
