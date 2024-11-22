import HeadHtml from "@/components/head";
import Layout from "@/components/layouts";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <HeadHtml title="Eratani - Homepage" description="Ini adalah homepage" />
      <Layout formalHeader={false}>
        <main className="w-full min-h-screen bg-[red] p-6">
          <h1 className="text-3xl text-center">
            Technical Assesment - Frontend Developer
          </h1>
          <ul className="w-[500px] my-6 mx-auto">
            <li className="flex justify-between rounded-lg bg-white p-4 mb-4 bg-col-identity-2">
              <div>
                <p className="text-sm">Case 1</p>
                <h2 className="text-xl">Create a page based on figma design</h2>
              </div>
              <div className="flex h-full bg-col-identity-1 my-auto py-2 px-6 rounded-lg">
                <Link href="/case1">See</Link>
              </div>
            </li>
            <li className="flex justify-between rounded-lg bg-white p-4 mb-4 bg-col-identity-2">
              <div>
                <p className="text-sm">Case 2</p>
                <h2 className="text-xl">Algorithm search function</h2>
              </div>
              <div className="flex h-full bg-col-identity-1 my-auto py-2 px-6 rounded-lg">
                <Link href="/case2">See</Link>
              </div>
            </li>
            <li className="flex justify-between rounded-lg bg-white p-4 mb-4 bg-col-identity-2">
              <div>
                <p className="text-sm">Case 3</p>
                <h2 className="text-xl">CRUD table using data from Mockaroo</h2>
              </div>
              <div className="flex h-full bg-col-identity-1 my-auto py-2 px-6 rounded-lg">
                <Link href="/case3">See</Link>
              </div>
            </li>
            <li className="flex justify-between rounded-lg bg-white p-4 mb-4 bg-col-identity-2">
              <div>
                <p className="text-sm">Case 4</p>
                <h2 className="text-xl">Create table using gorest API</h2>
                {/* <span className="text-xs border-2 p-2 rounded-md border-col-identity-1 table mt-2">
                  GET
                </span> */}
              </div>
              <div className="flex h-full bg-col-identity-1 my-auto py-2 px-6 rounded-lg">
                <Link href="/case4">See</Link>
              </div>
            </li>
            <li className="flex justify-between rounded-lg bg-white p-4 mb-4 bg-col-identity-2">
              <div>
                <p className="text-sm">Case 5</p>
                <h2 className="text-xl">
                  Create registration user using gorest API
                </h2>
                {/* <span className="text-xs border-2 p-2 rounded-md border-col-identity-1 table mt-2">
                  POST
                </span> */}
              </div>
              <div className="flex h-full bg-col-identity-1 my-auto py-2 px-6 rounded-lg">
                <Link href="/case5">See</Link>
              </div>
            </li>
          </ul>
        </main>
      </Layout>
    </>
  );
};

export default Home;
