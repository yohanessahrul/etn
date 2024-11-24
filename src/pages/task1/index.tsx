import About from "@/components/about-page/about";
import Banner from "@/components/about-page/banner";
import Misi from "@/components/about-page/misi";
import Team from "@/components/about-page/team";
import Visi from "@/components/about-page/visi";
import HeadHtml from "@/components/head";
import Layout from "@/components/layouts";

const Task1 = () => {
  return (
    <>
      <HeadHtml
        title="Create a page (Figma)"
        description="Pilih satu page design dari figma dan buat menggunakan framework react"
      />
      <Layout formalHeader={true} formalFooter={true}>
        <main>
          <Banner />
          <About />
          <Visi />
          <Misi />
          <Team />
        </main>
      </Layout>
    </>
  );
};

export default Task1;
