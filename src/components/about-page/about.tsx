import Image from "next/image";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
});

const About = () => {
  return (
    <section>
      <div className="bg-secondary-900 w-full md:py-[100px] py-[45px] md:px-[95px] px-[20px] md:flex-row sm:flex-col flex-col">
        <div className="bg-secondary-200 w-full flex justify-between md:flex-row flex-col">
          <div className="bg-others1-300 md:w-[50%] w-full h-[300px]"></div>
          <div className="bg-others2-300 md:w-[50%] w-full h-[300px]"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
