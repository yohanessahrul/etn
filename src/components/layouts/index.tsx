import Header from "./header";

interface iLayout {
  children: any;
  formalHeader: boolean;
}

const Layout = ({ children, formalHeader }: iLayout) => {
  return (
    <>
      {formalHeader && <Header />}
      {children}
    </>
  );
};

export default Layout;
