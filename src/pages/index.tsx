import LinkedInGimmick from "@/components/gimmick/linkedin";
import HeadHtml from "@/components/head";
import Layout from "@/components/layouts";
import List1 from "@/components/list";
import { useState } from "react";

const Home = () => {
  const [tasks, setTasks] = useState([
    {
      label: "Task 1",
      title: "Create a page based on figma design",
      path: "/task1",
    },
    {
      label: "Task 2",
      title: "Algorithm search function",
      path: "/task2",
    },
    {
      label: "Task 3",
      title: "CRUD table using data from Mockaroo",
      path: "/task3",
    },
    {
      label: "Task 4",
      title: "Create table using gorest API",
      path: "/task4",
    },
    {
      label: "Task 5",
      title: "Create registration user using gorest API",
      path: "/task5",
    },
  ]);
  return (
    <>
      <HeadHtml title="Eratani - Homepage" description="Ini adalah homepage" />
      <Layout formalHeader={false}>
        <main className="w-full min-h-screen p-6 bg-[#f6f6f6]">
          <LinkedInGimmick />
          <ul className="md:w-[500px] sm:w-full my-6 mx-auto">
            {tasks.map((item, i) => (
              <List1
                key={i}
                label={item.label}
                title={item.title}
                path={item.path}
              />
            ))}
          </ul>
        </main>
      </Layout>
    </>
  );
};

export default Home;
