import Image from "next/image";
import Right from "../icons/right";

export default function Hero() {
  return (
    <section className="hero grid mt-4">
      <div className="py-12 col-span-2 md:col-span-1">
        <h1 className="text-4xl font-semibold">
          Everything<br />
          is better<br />
          with a&nbsp; <span className="text-primary">Calorie control</span>
        </h1>

        <p className="my-4 text-gray-500 text-sm">
          Healthy Food is the missing piece that makes every day complete with simple yet delicious food.
        </p>
        
        <div className="flex gap-4 text-sm">
          <button className="bg-primary uppercase flex-items-center gap-2 text-white px-4 py-2 rounded-full text-sm">
            Order Now
            <Right/>
          </button>
          
          <button className="flex items-center gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <Right />
          </button>
        </div>
      </div>

      <div className="w-full md:w-2/3 h-full relative">
        <Image
          src={'/assets/diet5.jpeg'}
          layout={'fill'}
          objectFit={'cover'}
          alt={"Low Calorie"}
        />
      </div>
    </section>
  );
}
