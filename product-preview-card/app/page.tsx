import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#f3eae3] px-10 pt-20 min-h-screen md:flex md:justify-center md:items-center">
    <div className=" bg-white pb-7 rounded-2xl md:flex md:rounded-l-lg md:max-w-150 md:h-fit md:pb-0">
      <div className="h-88 w-full relative md:h-113 md:flex-1 md:basis-0 md:px-7">
        <Image
          src="/images/image-product-mobile.jpg"
          alt="product-image"
          fill
          className="rounded-t-2xl object-cover md:rounded-none md:rounded-l-2xl"
        />
      </div>
      
      <div className="flex flex-col gap-7 pt-7 px-7 md:flex-1 md:basis-0 md:gap-5">
        <div className="font-semibold text-[#9693a4]">P E R F U M E</div>
        <h1 className="font-extrabold text-3xl">Gabrielle Essence Eau De Parfum</h1>
        <div className="font-semibold text-[#9693a4]">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </div>
        <div className="flex gap-5 items-center">
          <p className="font-extrabold text-3xl text-[#3d8168]">$149.99</p>
          <p className="line-through text-[#9693a4] text-lg">$169.99</p>
        </div>
        <button className="bg-[#3d8168] py-5 rounded-xl flex items-center justify-center gap-4 text-white font-bold md:h-10">
          <div>
          <Image src="/images/icon-cart.svg" alt="cart img" width={18} height={18} />
          </div>
          <div>Add to Cart</div>
        </button>
      </div>
    </div>
    </div>
  );
}
