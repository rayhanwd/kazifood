import { new_rest } from "@/app/images/images";
import Image from "next/image";

export default function FoodCard() {
  return (
    <>
      <a className="block relative h-48 rounded overflow-hidden">
        <Image src={new_rest} alt="card" />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          CATEGORY
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          The Catalyzer
        </h2>
        <p className="mt-1">$16.00</p>
      </div>
    </>
  );
}
