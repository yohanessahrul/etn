import HeadHtml from "@/components/head";
import Layout from "@/components/layouts";
import Nav from "@/components/nav";

const Task4 = () => {
  return (
    <>
      <HeadHtml
        title="[GET] - Users"
        description="Akses API gorest dan tampilkan daftar users"
      />
      <Layout formalHeader={false}>
        <main className="w-full min-h-screen bg-neutral-200">
          <div className="lg:w-[990px] md:w-[500px] sm:w-full mx-auto">
            <Nav task="4" />
            <div className="bg-neutral-100 shadow-md p-6">
              <h1 className="text-3xl">[GET] - Users</h1>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Task4;
