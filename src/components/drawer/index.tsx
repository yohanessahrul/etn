import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface iDrawer {
  children: any;
  openDrawer: boolean;
  setOpenDrawer: () => void;
}

const Drawer = ({ children, openDrawer, setOpenDrawer }: any) => {
  return (
    <>
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
            <FontAwesomeIcon className="text-neutral-100 w-4" icon={faClose} />
          </button>
          {children}
        </div>
      </div>
      {/* Overlay */}
      {openDrawer && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 bg-neutral-900 z-0"
          onClick={() => setOpenDrawer(false)}
        ></div>
      )}
    </>
  );
};

export default Drawer;
