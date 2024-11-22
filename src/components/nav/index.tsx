import Link from "next/link";

const Nav = ({ task }: { task: string }) => {
  return (
    <div className="w-full flex justify-between bg-primary-800 p-2">
      <div className="flex items-center">
        <Link
          href="/"
          className="text-md bg-secondary-400 py-1 px-2 rounded-md font-bold"
        >
          Back
        </Link>
      </div>
      <div className="text-right">
        <p className="text-md font-medium inline-table py-1 px-2 rounded-md text-neutral-100">
          Task {task}
        </p>
      </div>
    </div>
  );
};

export default Nav;
