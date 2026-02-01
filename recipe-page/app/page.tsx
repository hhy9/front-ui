import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-7">
      <div className="relative w-full h-40">
        <Image
          src="/images/image-omelette.jpeg"
          alt="recipeImage"
          className="object-cover"
          fill
        />
      </div>
      <div className="flex flex-col gap-7 p-7">
        <h1 className="text-3xl font-extrabold">Simple Omelette Receipe</h1>
        <div className="text-sm">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </div>
        <div className="bg-rose-50 p-5">
          <h2 className="text-rose-800 font-extrabold text-xl mb-5">
            Preparation time
          </h2>

          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="text-lg font-bold">Total</span>: Approximately 10
              minutes
            </li>
            <li>
              <span className="text-lg font-bold">Preparation</span>: 5 minutes
            </li>
            <li>
              <span className="text-lg font-bold">Cooking</span>: 5 minutes
            </li>
          </ul>
        </div>
        <h1 className="text-3xl font-extrabold text-amber-900">Ingredients</h1>
        <ul className="list-disc list-outside pl-5 text-lg  text-amber-950 space-y-2">
          <li className="pl-3">2-3 large eggs</li>
          <li className="pl-3">Salt, to taste</li>
          <li className="pl-3">Pepper, to taste</li>
          <li className="pl-3"> tablespoon of butter or oil</li>
          <li className="pl-3">
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </li>
        </ul>
        <div className="border border-gray-200" />
        <h1 className="text-3xl font-extrabold text-amber-900">Instrctions</h1>
        <ol className="list-decimal list-outside pl-5 text-lg  text-amber-950 space-y-2 marker:font-bold">
          <li className="pl-3">
            <span className="text-lg font-bold">Beat the eggs</span>: In a bowl,
            beat the eggs with a pinch of salt and pepper until they are well
            mixed. You can add a tablespoon of water or milk for a fluffier
            texture.
          </li>
          <li className="pl-3">
            <span className="text-lg font-bold">Heat the pan</span>: Place a
            non-stick frying pan over medium heat and add butter or oil.
          </li>
          <li className="pl-3">
            <span className="text-lg font-bold">Cook the omelette</span>: Once
            the butter is melted and bubbling, pour in the eggs. Tilt the pan to
            ensure the eggs evenly coat the surface.
          </li>
          <li className="pl-3">
            <span className="text-lg font-bold">Add fillings (optional)</span>:
            When the eggs begin to set at the edges but are still slightly runny
            in the middle, sprinkle your chosen fillings over one half of the
            omelette.
          </li>
          <li className="pl-3">
            <span className="text-lg font-bold">Fold and serve</span>: As the
            omelette continues to cook, carefully lift one edge and fold it over
            the fillings. Let it cook for another minute, then slide it onto a
            plate.
          </li>
          <li className="pl-3">
            <span className="text-lg font-bold">Enjoy</span>: Serve hot, with
            additional salt and pepper if needed.
          </li>
        </ol>
        <div className="border border-gray-200" />
        <h1 className="text-3xl font-extrabold text-amber-900">Nutrition</h1>
        <div className="text-lg  text-amber-950">
          The table below shows nutritional values per serving without the
          additional fillings.
        </div>
        <ul className="divide-y divide-gray-200">
          <li className="py-4">
            <div className="flex items-center justify-between px-10">
              <span className=" text-lg text-amber-950">Calories</span>{" "}
              <span className=" text-amber-900 text-xl font-extrabold">
                277Kcal
              </span>
            </div>
          </li>

          <li className="py-4">
            <div className="flex items-center justify-between px-10">
              <span className=" text-lg text-amber-950">Carbs</span>{" "}
              <span className=" text-amber-900 text-xl font-extrabold">0g</span>
            </div>
          </li>

          <li className="py-4">
            <div className="flex items-center justify-between px-10">
              <span className=" text-lg text-amber-950">Protein</span>{" "}
              <span className=" text-amber-900 text-xl font-extrabold">
                20g
              </span>
            </div>
          </li>

          <li className="py-4">
            <div className="flex items-center justify-between px-10">
              <span className=" text-lg text-amber-950">Fat</span>{" "}
              <span className=" text-amber-900 text-xl font-extrabold">
                22g
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
