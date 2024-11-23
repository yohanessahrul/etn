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
import Filter from "@/components/filter";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

interface iCustomer {
  id: number;
  avatar: string;
  full_name: string;
  city: string;
  car: string;
  phone: string;
  year: number;
}

const Task3 = () => {
  const [data, setData] = useState([...jsonData]);
  const [name, setName] = useState("");
  const [car, setCar] = useState("");
  const [city, setCity] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [customer, setCustomer] = useState<iCustomer>({
    id: 0,
    avatar: "",
    full_name: "",
    city: "",
    car: "",
    phone: "",
    year: 0,
  });

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

  const openDrawerHandler = (customer: iCustomer) => {
    setOpenDrawer(true);
    setCustomer(customer);
  };

  const closeDrawerHandler = () => {
    setOpenDrawer(false);
    setCustomer({
      id: 0,
      avatar: "",
      full_name: "",
      city: "",
      car: "",
      phone: "",
      year: 0,
    });
  };

  const changeCustomerDataHandler = () => {
    let index = data.findIndex((item) => item.id === customer.id);
    data[index].full_name = customer.full_name;
    data[index].car = customer.car;
    data[index].city = customer.city;
    data[index].phone = customer.phone;

    setData(data);
    closeDrawerHandler();
    Swal.fire({
      title: "Good job!",
      text: "You updated the data",
      icon: "success",
    });
  };

  const deleteCustomerDataHandler = (id: number) => {
    const filterData = data.filter((item) => item.id !== id);
    setData(filterData);
    closeDrawerHandler();
    Swal.fire({
      title: "Good job!",
      text: "You deleted the data",
      icon: "success",
    });
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
              <Filter
                name={name}
                setName={(value) => setName(value)}
                car={car}
                setCar={(value) => setCar(value)}
                city={city}
                setCity={(value) => setCity(value)}
                searchHandler={() => handleSearch()}
              />
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
            <div className="w-[350px] sm:w-full min-h-full p-4 bg-neutral-100">
              <button
                className="px-4 py-3 bg-neutral-500 text-neutral-100 rounded-full"
                onClick={() => setOpenDrawer(!openDrawer)}
              >
                <FontAwesomeIcon
                  className="text-neutral-100 w-4"
                  icon={faClose}
                />
              </button>
              <div className="border-b-2 border-neutral-200 py-4">
                <div className="flex w-[120px] h-[120px] bg-neutral-200 rounded-full mb-4 m-auto relative mb-9">
                  <Image
                    width={120}
                    height={120}
                    style={{ objectFit: "contain" }}
                    src={customer.avatar}
                    alt="avatar"
                  />
                </div>
                <input
                  className="w-full rounded-md bg-neutral-200 px-2 py-2 mb-4"
                  type="text"
                  value={customer?.full_name}
                  required
                  onChange={(e) => {
                    setCustomer({ ...customer, full_name: e.target.value });
                  }}
                />
                <input
                  className="w-full rounded-md bg-neutral-200 px-2 py-2 mb-4"
                  type="text"
                  value={customer?.phone}
                  required
                  onChange={(e) => {
                    setCustomer({ ...customer, phone: e.target.value });
                  }}
                />
                <input
                  className="w-full rounded-md bg-neutral-200 px-2 py-2 mb-4"
                  type="text"
                  value={customer?.car}
                  required
                  onChange={(e) => {
                    setCustomer({ ...customer, car: e.target.value });
                  }}
                />
                <input
                  className="w-full rounded-md bg-neutral-200 px-2 py-2 mb-4"
                  type="text"
                  value={customer?.city}
                  required
                  onChange={(e) => {
                    setCustomer({ ...customer, city: e.target.value });
                  }}
                />
                <button
                  className="w-full rounded-md bg-primary-600 text-neutral-100 px-2 py-2 mb-4"
                  onClick={changeCustomerDataHandler}
                >
                  UPDATE
                </button>
                <button
                  className="w-full rounded-md bg-others2-500 text-neutral-100 px-2 py-2 mb-4"
                  onClick={() => deleteCustomerDataHandler(customer.id)}
                >
                  DELETE
                </button>
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
