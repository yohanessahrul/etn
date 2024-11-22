import Link from "next/link";

interface iList1 {
  label: string;
  title: string;
  path: string;
}

const List1 = ({ label, title, path }: iList1) => {
  return (
    <li className="flex justify-between rounded-lg bg-white p-4 mb-4 bg-primary-800 hover:bg-primary-700">
      <div>
        <p className="text-xs text-[white] rounded-md bg-primary-500 table py-1 px-2 mb-2">
          {label}
        </p>
        <h2 className="text-xl text-neutral-100">{title}</h2>
      </div>
      <div className="flex h-full bg-secondary-500 my-auto rounded-lg hover:bg-secondary-300">
        <Link
          className="py-2 px-6 hover:cursor-pointer text-neutral-500"
          href={path}
        >
          See
        </Link>
      </div>
    </li>
  );
};

export default List1;
