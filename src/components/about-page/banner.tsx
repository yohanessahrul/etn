import Image from "next/image";

const Banner = () => {
  return (
    <section>
      <div className="w-full h-[353px] bg-neutral-200 shadow-md relative hidden sm:block">
        <Image
          fill
          style={{ objectFit: "cover" }}
          className="md:block lg:block sm:bg-none"
          src="/images/banner.png"
          alt="Desktop Banner"
        />
      </div>
      <div className="w-full h-[617px] bg-neutral-200 shadow-md relative block sm:hidden">
        <Image
          fill
          style={{ objectFit: "cover" }}
          className="sm:block"
          src="/images/banner-mobile.png"
          alt="Mobile Banner"
        />
      </div>
    </section>
  );
};

export default Banner;
