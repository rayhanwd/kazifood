import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-68 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link href={'/'} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="mx-2 text-2xl font-bold text-purple-500">Kazi</span>
          <span className="text-2xl font-bold text-purple-600">Food</span>
          </Link>
          <p className="mt-2 text-sm text-gray-500">
            Kazifood is an online food and grocery delivery platform owned by
            Berlin-based Delivery Hero.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10">
          <div className="md:w-1/2 w-full px-4">
            <nav className="list-none mb-10">
              <li className="text-center md:text-left">
                <Link href={'/discount-offer'} className="text-gray-600 hover:text-gray-800">
                  Discount and offer
                </Link>
              </li>
              <li className="text-center md:text-left">
                <Link href={'/contact-us'} className="text-gray-600 hover:text-gray-800">
                  Ask a question
                </Link>
              </li>
              <li className="text-center md:text-left">
                <Link href={'/signup'} className="text-gray-600 hover:text-gray-800">
                  Sign up to order
                </Link>
              </li>
              <li className="text-center md:text-left">
                <Link href={'/restaurant/create-new'} className="text-gray-600 hover:text-gray-800">
                  Add your restaurant
                </Link>
              </li>
            </nav>
          </div>
          <div className="md:w-1/2 w-full px-4 md:pl-4">
            <nav className="list-none mb-10">
              <li className="text-center md:text-left">
                <a className="text-gray-600 hover:text-gray-800">
                  restaurant near me
                </a>
              </li>
              <li className="text-center md:text-left">
                <Link href={'/cities'} className="text-gray-600 hover:text-gray-800">
                  Visit all citites
                </Link>
              </li>
              <li className="text-center md:text-left">
                <Link href={'/faq'} className="text-gray-600 hover:text-gray-800">
                  Frequently ask question
                </Link>
              </li>
              <li className="text-center md:text-left">
                <Link href='/about-us' className="text-gray-600 hover:text-gray-800">
                  About kazifood
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2023 Kazifood —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @kazifood
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
