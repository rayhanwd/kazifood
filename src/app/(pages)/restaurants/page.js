import RestaurantCard from "./restaurantCard/RestaurantCard";

export default function page() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <div key={item} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <RestaurantCard />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
