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

{
  /* <Image
  fill
  style={{ objectFit: "cover" }}
  src="/images/tentang-thumbnail.png"
  alt="About"
/>; */
}
{
  /* <p
    className={`md:text-[25px] sm:text-[18px] text-[12px] md:leading-[40px] sm:leading-[30px] leading-[16px] text-justify text-neutral-500 ${lato.className}`}
  >
    Eratani adalah perusahaan Agri-tech yang didirikan oleh anak
    bangsa. Berangkat dari mimpi dan semangat yang besar, Eratani
    memiliki misi untuk menyejahterakan petani nusantara dengan
    mempermudah jalannya proses pertanian dari hulu sampai hilir.
    Melalui digitalisasi proses hulu (pendanaan petani, pengelolaan
    rantai pasokan) hingga proses hilir (distribusi & penyaluran hasil
    panen), Eratani berfokus membangun ekosistem pertanian yang kuat
    dan berusaha memberikan kemudahan akses kepada petani dengan
    teknologi untuk meningkatkan produktivitas dan kesejahteraan
    ekosistem pertanian.
  </p> */
}
