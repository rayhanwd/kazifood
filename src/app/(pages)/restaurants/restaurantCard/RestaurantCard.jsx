import { new_rest3 } from "@/app/images/images";
import Image from "next/image";
import Link from "next/link";

export default function RestaurantCard() {
  return (
    <Link href={`/restaurants/abc`}>
      <div className="block relative h-48 rounded overflow-hidden">
        <Image src={new_rest3} alt="card_img" />
      </div>
      <div className="mt-4">
        <h2 className="text-gray-900 title-font text-lg font-medium ">
          Siam Pagla Pizza Ghor
        </h2>
        <p className="mt-1">Free delivery</p>
        <p className="mt-1">25TK delivery fee</p>
      </div>
    </Link>
  );
}
