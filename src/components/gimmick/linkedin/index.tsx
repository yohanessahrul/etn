import Image from "next/image";

const LinkedInGimmick = () => {
  return (
    <div className="md:w-[500px] sm:w-full h-[325px] bg-[#e0e0e0] mx-auto rounded-2xl flex flex-col overflow-hidden shadow-md relative">
      <div className="md:w-[500px] sm:w-full h-[200px] bg-[gray] relative">
        <Image
          src="/images/hero-2.jpg"
          alt="hero"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div className="w-full h-[125px] bg-[white] relative">
        <div className="p-6 ">
          <h1 className="font-bold text-2xl mt-[20px]">Yohanes Sahrul</h1>
          <p>Frontend Developer</p>
        </div>
        <div className="absolute right-6 bottom-6 flex items-center">
          <Image
            width={35}
            height={35}
            style={{
              objectFit: "cover",
            }}
            alt="avatar"
            src="/images/eratani_logo.jpeg"
          />
          <span className="font-medium ml-2">Eratani</span>
        </div>
      </div>
      <div className="absolute w-[100px] h-[100px] bg-[white] rounded-full bottom-[90px] left-6 p-4 overflow-hidden border-4 border-[white]">
        <Image
          src="/images/yosa-avatar.jpeg"
          alt="avatar"
          fill
          priority={false}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default LinkedInGimmick;
