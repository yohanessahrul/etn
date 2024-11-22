import HeadHtml from "@/components/head";
import Layout from "@/components/layouts";
import Nav from "@/components/nav";

const Task5 = () => {
  return (
    <>
      <HeadHtml
        title="[POST] - Users"
        description="Buat sebuah tampilan untuk register user (name,email,gender,status) API gorest"
      />
      <Layout formalHeader={false}>
        <main className="w-full min-h-screen bg-neutral-200">
          <div className="lg:w-[990px] md:w-[500px] sm:w-full mx-auto">
            <Nav task="5" />
            <div className="bg-neutral-100 shadow-md p-6">
              <h1 className="text-3xl">[POST] - Users</h1>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Task5;
