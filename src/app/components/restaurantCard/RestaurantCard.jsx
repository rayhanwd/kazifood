import Link from "next/link";

export default function RestaurantCard() {
  return (
    <Link href={`/restaurants/abc`}>
      <div className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src="https://dummyimage.com/420x260"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-gray-900 title-font text-lg font-medium">
          Siam Pagla Pizza Ghor
        </h2>
        <p className="mt-1">Free delivery</p>
        <p className="mt-1">25TK delivery fee</p>
      </div>
    </Link>
  );
}
