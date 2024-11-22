import LinkedInGimmick from "@/components/gimmick/linkedin";
import HeadHtml from "@/components/head";
import Layout from "@/components/layouts";
import List1 from "@/components/list";
import { useState } from "react";

const Home = () => {
  const [tasks, setTasks] = useState([
    {
      label: "Task 1",
      title: "Create a page (Figma)",
      path: "/task1",
    },
    {
      label: "Task 2",
      title: "Search Algorithm",
      path: "/task2",
    },
    {
      label: "Task 3",
      title: "CRUD (using: Mockaroo)",
      path: "/task3",
    },
    {
      label: "Task 4",
      title: "[GET] - Users",
      path: "/task4",
    },
    {
      label: "Task 5",
      title: "[POST] - Users",
      path: "/task5",
    },
  ]);

  return (
    <>
      <HeadHtml title="Eratani - Homepage" description="Ini adalah homepage" />
      <Layout formalHeader={false}>
        <main className="w-full min-h-screen p-6 bg-neutral-200">
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
