import Drawer from "@/components/drawer";
import HeadHtml from "@/components/head";
import Layout from "@/components/layouts";
import Nav from "@/components/nav";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { yupResolver } from "@hookform/resolvers/yup";
import { GetServerSideProps } from "next";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import * as Yup from "yup";
interface iTask4 {
  data: [];
}

const Task4: React.FC<iTask4> = ({ data }) => {
  const [users, setUsers] = useState(data);
  const [openDrawer, setOpenDrawer] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Names is required")
      .min(3, "Name must be at least 3 characters"),
    email: Yup.string()
      .required("Names is required")
      .email("Invalid email format"),
    gender: Yup.string().required("Gender is required"),
    status: Yup.string().required("Status is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const openDrawerHandler = () => {
    setOpenDrawer(true);
  };

  const onSubmit = async (data: any) => {
    console.log("Form Data:", data);
    try {
      const response = await fetch("https://gorest.co.in/public/v2/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 222b145119f4c3a9dd24a676c115e7115251ab36f903e2b6527d1f21287922f0`,
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const data = await response.json();

        let newUsers: any = [...users];
        newUsers.unshift(data);
        setUsers(newUsers);

        Swal.fire({
          title: "Good job!",
          text: "Success register",
          icon: "success",
          timer: 2000,
        });
        closeDrawerHandler();
      } else {
        const errorData = await response.json();
        console.log("errorData", errorData);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${errorData[0].field} ${errorData[0].message}`,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const closeDrawerHandler = () => {
    setOpenDrawer(false);
    reset();
  };

  console.log("errors", errors);

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
              <button
                className="bg-others1-700 text-neutral-100 py-2 px-4 font-bold rounded-lg flex items-center my-9"
                onClick={openDrawerHandler}
              >
                <FontAwesomeIcon className="w-[15px] mr-2" icon={faPlus} />
                Register User
              </button>

              <div className="w-full overflow-y-hidden">
                <table
                  border={1}
                  className="w-full table-auto divide-y divide-gray-200 dark:divide-neutral-700 "
                >
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-start text-md font-medium text-gray-500 uppercase">
                        Name
                      </th>
                      <th className="px-6 py-3 text-start text-md font-medium text-gray-500 uppercase">
                        Email
                      </th>
                      <th className="px-6 py-3 text-start text-md font-medium text-gray-500 uppercase">
                        Gender
                      </th>
                      <th className="px-6 py-3 text-start text-md font-medium text-gray-500 uppercase">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((item: any, i: number) => (
                      <tr
                        className="odd:bg-neutral-100 even:bg-neutral-200 hover:bg-neutral-300"
                        key={i}
                      >
                        <td className="px-6 py-3 text-start text-md font-medium text-gray-500">
                          {item.name}
                        </td>
                        <td className="px-6 py-3 text-start text-md font-medium text-gray-500">
                          {item.email}
                        </td>
                        <td className="px-6 py-3 text-start text-md font-medium text-gray-500">
                          {item.gender}
                        </td>
                        <td className="px-6 py-3 text-start text-md font-medium text-gray-500">
                          {item.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <Drawer
            openDrawer={openDrawer}
            setOpenDrawer={(value: boolean) => setOpenDrawer(value)}
          >
            <div className="py-4">
              <h2 className="text-2xl text-center mb-4">Register User</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label className=" text-gray-700">Name</label>
                  <input
                    {...register("name")}
                    className="w-full rounded-md bg-neutral-200 px-2 py-2 mb-4"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm -mt-[15px] mb-4 text-others2-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label className=" text-gray-700">Gender</label>
                  <div className="flex">
                    <div className="flex">
                      <input
                        id="male"
                        type="radio"
                        value="male"
                        {...register("gender")}
                      />
                      <label htmlFor="male" className="text-gray-700 ml-2">
                        Male
                      </label>
                    </div>
                    <div className="flex ml-4">
                      <input
                        id="female"
                        type="radio"
                        value="female"
                        {...register("gender")}
                      />
                      <label htmlFor="female" className="text-gray-700 ml-2">
                        Female
                      </label>
                    </div>
                  </div>
                  {/* asdsd */}
                  {errors.gender && (
                    <p className="text-red-500 text-sm -mt-[15px] mb-4 text-others2-500">
                      {errors.gender.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className=" text-gray-700">Email</label>
                  <input
                    {...register("email")}
                    className="w-full rounded-md bg-neutral-200 px-2 py-2 mb-4"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm -mt-[15px] mb-4 text-others2-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label className=" text-gray-700">Status</label>
                  <div className="flex">
                    <div className="flex">
                      <input
                        id="active"
                        type="radio"
                        value="active"
                        {...register("status")}
                      />
                      <label htmlFor="active" className="text-gray-700 ml-2">
                        Active
                      </label>
                    </div>
                    <div className="flex ml-4">
                      <input
                        id="inactive"
                        type="radio"
                        value="inactive"
                        {...register("status")}
                      />
                      <label htmlFor="inactive" className="text-gray-700  ml-2">
                        Inactive
                      </label>
                    </div>
                  </div>
                  {errors.status && (
                    <p className="text-red-500 text-sm -mt-[15px] mb-4 text-others2-500">
                      {errors.status.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-primary-500 text-neutral-100 px-2 py-2 mb-4"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </Drawer>
        </main>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<iTask4> = async () => {
  const res = await fetch("https://gorest.co.in/public/v2/users");
  const data = await res.json();

  console.log("data", data);

  return {
    props: {
      data: data,
    },
  };
};

export default Task4;
