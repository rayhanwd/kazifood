import { new_rest } from "@/app/images/images";
import Image from "next/image";

export default function FoodCard() {
  return (
    <>
      <a className="block relative rounded overflow-hidden">
        <Image src={new_rest} alt="card" />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          Dinner
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          The Catalyzer
        </h2>
        <div className="flex mt-1 justify-between items-center">
          <p className="mt-1">TK 160.00</p>
          <button className=" bg-red-500 border-0 py-1 px-3 hover:bg-red-600 rounded text-base text-white">Add to cart</button>
        </div>
      </div>
    </>
  );
}
