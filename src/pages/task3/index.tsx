import HeadHtml from "@/components/head";
import Layout from "@/components/layouts";
import Nav from "@/components/nav";
import jsonData from "../../../json/mockaroo.json";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Filter from "@/components/filter";
import Swal from "sweetalert2";
import TableMockaroo from "@/components/table";
import Drawer from "@/components/drawer";

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
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const filterData = data.filter((item) => item.id !== id);
        setData(filterData);
        closeDrawerHandler();

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      <HeadHtml
        title="CRUD (using: Mackaroo)"
        description="CRUD data sample from mockaroo"
      />
      <Layout formalHeader={false} formalFooter={false}>
        <main className="w-full min-h-screen bg-neutral-200">
          <div className="lg:w-[990px] md:w-[500px] sm:w-full mx-auto ">
            <Nav task="3" />
            <div className="bg-neutral-100 shadow-md p-6">
              <h1 className="text-3xl">CRUD (using: Mockaroo)</h1>
              <div className="w-full flex justify-start mt-6">
                <button className="bg-others1-700 text-neutral-100 py-2 px-4 font-bold rounded-lg flex items-center">
                  <FontAwesomeIcon className="w-[15px] mr-2" icon={faPlus} />
                  ADD
                </button>
              </div>
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
                <TableMockaroo
                  data={data}
                  openDrawerHandler={(item) => openDrawerHandler(item)}
                />
              </div>
            </div>
          </div>
          <Drawer
            openDrawer={openDrawer}
            setOpenDrawer={(value: boolean) => setOpenDrawer(value)}
          >
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
          </Drawer>
        </main>
      </Layout>
    </>
  );
};

export default Task3;
