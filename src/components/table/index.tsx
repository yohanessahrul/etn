import { faEllipsisVertical, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

interface iTableMackaroo {
  data: any;
  openDrawerHandler: (item: any) => void;
}

const TableMockaroo = ({ data, openDrawerHandler }: iTableMackaroo) => {
  return (
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
        {data.map((item: any, i: number) => (
          <tr
            className="odd:bg-neutral-100 even:bg-neutral-200 hover:bg-neutral-300"
            key={i}
          >
            <td className="px-6 py-3 text-start text-md font-medium text-gray-500">
              <Image width={40} height={40} src={item.avatar} alt="avatar" />
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
  );
};

export default TableMockaroo;
