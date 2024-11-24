import Footer from "./footer";
import Header from "./header";

interface iLayout {
  children: any;
  formalHeader: boolean;
  formalFooter: boolean;
}

const Layout = ({ children, formalHeader, formalFooter }: iLayout) => {
  return (
    <>
      {formalHeader && <Header />}
      {children}
      {formalFooter && <Footer />}
    </>
  );
};

export default Layout;
