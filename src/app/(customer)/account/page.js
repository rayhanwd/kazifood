export default function Customer() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 md:px-48 py-16 mx-auto">
          <div className="lg:w-2/3 w-full px-8 sm:px-0">
            <h2 className="pb-5 font-medium">Profile info</h2>
            <div className="relative flex-grow w-full pb-5">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Full Name
              </label>
              <input
                type="text"
                name="full-name"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative flex-grow w-full pb-5">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Address
              </label>
              <input
                type="text"
                name="full-name"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative flex-grow w-full pb-5">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Mobile number
              </label>
              <input
                type="text"
                name="full-name"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
              Save
            </button>
          </div>
          {/* Email */}
          <div className="lg:w-2/3 w-full px-8 sm:px-0 mt-10">
            <div className="relative flex-grow w-full pb-5">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="text"
                name="full-name"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
              Save
            </button>
          </div>
          {/* password */}
          <div className="lg:w-2/3 w-full px-8 sm:px-0 mt-10">
            <div className="relative flex-grow w-full pb-5">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                type="text"
                name="full-name"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative flex-grow w-full pb-5">
              <label
                htmlFor="Confirmpassword"
                className="leading-7 text-sm text-gray-600"
              >
                Confirm password
              </label>
              <input
                type="password"
                name="Confirmpassword"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
              Save
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
