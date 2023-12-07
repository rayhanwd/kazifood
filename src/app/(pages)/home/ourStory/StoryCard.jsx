export default function StoryCard({ title, content }) {
  return (
    <div className="flex-grow">
      <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
        {title}
      </h2>
      <p className="leading-relaxed text-base">
        {content.slice(0, 150) + "..."}
      </p>
      <a className="mt-3 text-red-500 inline-flex items-center">
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
  );
}
