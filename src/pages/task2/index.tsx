import HeadHtml from "@/components/head";
import Layout from "@/components/layouts";
import Nav from "@/components/nav";
import { useState } from "react";

const Task2 = () => {
  const data = [
    "Danawi Liam",
    "Tarjaya",
    "Daruna",
    "Warsoni",
    "John Wick",
    "Hadi PS",
    "Derian Lekso",
  ];

  const [searchResult, setSearchResult] = useState<string[]>([]);

  const searchHandler = (searchKey: string) => {
    const result = [...data].filter((item) => {
      if (item.toLowerCase().includes(searchKey)) {
        return item;
      }
    });
    setSearchResult(result);
  };

  return (
    <>
      <HeadHtml
        title="Search Algorithm"
        description="Buatlah fungsi logic algorithm search dari sebuah array"
      />
      <Layout formalHeader={false}>
        <main className="w-full min-h-screen bg-neutral-200">
          <div className="lg:w-[990px] md:w-[500px] sm:w-full mx-auto">
            <Nav task="2" />
            <div className="bg-neutral-100 shadow-md p-6">
              <h1 className="text-3xl">Search Algorithm</h1>
              <div className="bg-neutral-300 p-0 flex flex-col mt-4 rounded-lg overflow-hidden">
                <div className="w-full bg-neutral-200 p-6 flex items-start">
                  <div className="w-full ">
                    <input
                      className="w-full px-2 py-2 rounded-md shadow-md"
                      onKeyUp={(e: any) => {
                        if (e.key === "Enter" && e.target.value) {
                          searchHandler(e.target.value);
                        }
                      }}
                      placeholder="Enter name.."
                    />
                    {searchResult.length < 1 && (
                      <span className="text-xs pt-0 text-neutral-400 font-medium pl-2">
                        Enter after typing !
                      </span>
                    )}
                    &nbsp;
                    <p>{searchResult.join(", ")}</p>
                  </div>
                </div>
                <div className="w-full bg-neutral-500 p-4 text-neutral-100 text-sm overflow-x-auto">
                  <pre>
                    {`
const data = [
  "Danawi Liam",
  "Tarjaya",
  "Daruna",
  "Warsoni",
  "John Wick",
  "Hadi PS",
  "Derian Lekso"
];

function search (searchKey) {
  const searchResult = [...data].filter((item) => {
    if (item.toLowerCase().includes(searchKey)) {
      return item;
    }
  });
  return searchResult;
}

search('ar'); // ['Tarjaya', 'Daruna', 'Warsoni']
                    `}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Task2;
