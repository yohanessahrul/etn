import HeadHtml from "@/components/head";
import Layout from "@/components/layouts";

const Task1 = () => {
  return (
    <>
      <HeadHtml
        title="Create a page (Figma)"
        description="Pilih satu page design dari figma dan buat menggunakan framework react"
      />
      <Layout formalHeader={true}>
        <main>
          <h1>Slicing Figma !</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            accusantium exercitationem nobis culpa, nam nostrum repellendus
            aliquam totam, pariatur a cum at ducimus? Nostrum suscipit qui,
            laborum expedita molestiae reiciendis!
          </p>
        </main>
      </Layout>
    </>
  );
};

export default Task1;
