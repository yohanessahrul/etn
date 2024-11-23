import HeadHtml from "@/components/head";
import Layout from "@/components/layouts";
import Nav from "@/components/nav";
import jsonData from "../../../json/mockaroo.json";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faEllipsisVertical,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

const Task3 = () => {
  const [data, setData] = useState([...jsonData]);
  const [name, setName] = useState("");
  const [car, setCar] = useState("");
  const [city, setCity] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    if (openDrawer) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [openDrawer]);

  const handleSearch = () => {
    const filterName = [...jsonData].filter((item) => {
      if (item.full_name.toLowerCase().includes(name.toLowerCase())) {
        return item;
      }
    });

    const filterCar = [...filterName].filter((item) => {
      if (item.car.toLowerCase().includes(car.toLowerCase())) {
        return item;
      }
    });

    const filterCity = [...filterCar].filter((item) => {
      if (item.city.toLowerCase().includes(city.toLowerCase())) {
        return item;
      }
    });

    setData(filterCity);
  };

  const openDrawerHandler = (customer: any) => {
    console.log("customer", customer);
    setOpenDrawer(true);
    setCustomer(customer);
  };

  const closeDrawerHandler = () => {
    setOpenDrawer(true);
    setCustomer(null);
  };

  const changeCustomerDataHandler = () => {};

  return (
    <>
      <HeadHtml
        title="CRUD (using: Mackaroo)"
        description="CRUD data sample from mockaroo"
      />
      <Layout formalHeader={false}>
        <main className="w-full min-h-screen bg-neutral-200 relative">
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
                      <th className="px-6 py-3 text-start text-md font-medium text-gray-500 uppercase">
                        <FontAwesomeIcon className="w-6" icon={faGear} />
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
                        <td className="px-6 py-3 text-start text-md font-medium text-gray-500 relative flex justify-center items-center">
                          <FontAwesomeIcon
                            stroke="1px"
                            icon={faEllipsisVertical}
                            className="hover:cursor-pointer h-6 text-center text-neutral-700 w-8 mt-2"
                            onClick={() => openDrawerHandler(item)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Drawer */}
          <div
            className={`fixed inset-y-0 right-0 bg-white shadow-lg transform z-10 ${
              openDrawer ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300`}
          >
            <div className="md:w-[600px] sm:w-full min-h-full p-4 bg-neutral-100">
              <button
                className="px-4 py-3 bg-neutral-500 text-neutral-100 rounded-full"
                onClick={() => setOpenDrawer(!openDrawer)}
              >
                <FontAwesomeIcon
                  className="text-neutral-100 w-4"
                  icon={faClose}
                />
              </button>
              <div className="border-b-2 py-4">
                <p>{JSON.stringify(customer)}</p>
              </div>
            </div>
          </div>

          {/* Overlay */}
          {openDrawer && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 bg-neutral-900 z-0"
              onClick={() => setOpenDrawer(false)}
            ></div>
          )}
        </main>
      </Layout>
    </>
  );
};

export default Task3;
