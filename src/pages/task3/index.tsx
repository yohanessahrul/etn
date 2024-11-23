import HeadHtml from "@/components/head";
import Layout from "@/components/layouts";
import Nav from "@/components/nav";
import jsonData from "../../../json/mockaroo.json";
import { useState } from "react";
import Image from "next/image";

const Task3 = () => {
  const [data, setData] = useState([...jsonData]);
  const [name, setName] = useState("");
  const [car, setCar] = useState("");
  const [city, setCity] = useState("");

  const handleSearch = () => {
    console.log("name", name);
    console.log("car", car);
    console.log("city", city);
  };

  return (
    <>
      <HeadHtml
        title="CRUD (using: Mackaroo)"
        description="CRUD data sample from mockaroo"
      />
      <Layout formalHeader={false}>
        <main className="w-full min-h-screen bg-neutral-200">
          <div className="lg:w-[990px] md:w-[500px] sm:w-full mx-auto ">
            <Nav task="3" />
            <div className="bg-neutral-100 shadow-md p-6">
              <h1 className="text-3xl">CRUD (using: Mockaroo)</h1>
              <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-4 my-6 bg-secondary-500 p-4 rounded-xl">
                <div className="w-full h-10">
                  <input
                    className="w-full h-full p-2 rounded-md"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Search Name"
                  />
                </div>
                <div className="w-full h-10">
                  <input
                    className="w-full h-full p-2 rounded-md"
                    type="text"
                    value={car}
                    onChange={(e) => setCar(e.target.value)}
                    placeholder="Search Car"
                  />
                </div>
                <div className="w-full h-10">
                  <input
                    className="w-full h-full p-2 rounded-md"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Search City"
                  />
                </div>
                <div className="w-full h-10 ">
                  <button
                    className="w-full h-full bg-primary-800 rounded-md text-neutral-100"
                    onClick={handleSearch}
                  >
                    Cari
                  </button>
                </div>
              </div>
              &nbsp;
              <div className="w-full overflow-y-hidden">
                <table
                  border={1}
                  className="w-full table-auto divide-y divide-gray-200 dark:divide-neutral-700 "
                >
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-start text-md font-medium text-gray-500 uppercase">
                        Avatar
                      </th>
                      <th className="px-6 py-3 text-start text-md font-medium text-gray-500 uppercase">
                        Fullname
                      </th>
                      <th className="px-6 py-3 text-start text-md font-medium text-gray-500 uppercase">
                        Phone
                      </th>
                      <th className="px-6 py-3 text-start text-md font-medium text-gray-500 uppercase">
                        Car
                      </th>
                      <th className="px-6 py-3 text-start text-md font-medium text-gray-500 uppercase">
                        City
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, i) => (
                      <tr
                        className="odd:bg-neutral-100 even:bg-neutral-200 hover:bg-neutral-300"
                        key={i}
                      >
                        <td className="px-6 py-3 text-start text-md font-medium text-gray-500">
                          <Image
                            width={40}
                            height={40}
                            src={item.avatar}
                            alt="avatar"
                          />
                        </td>
                        <td className="px-6 py-3 text-start text-md font-medium text-gray-500">
                          {item.full_name}
                        </td>
                        <td className="px-6 py-3 text-start text-md font-medium text-gray-500">
                          {item.phone}
                        </td>
                        <td className="px-6 py-3 text-start text-md font-medium text-gray-500">
                          {item.car} ({item.year})
                        </td>
                        <td className="px-6 py-3 text-start text-md font-medium text-gray-500">
                          {item.city}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Task3;
