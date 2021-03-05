import Nav from "./Nav";
import Meta from "./Meta";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <Header />
      {children}
    </>
  );
};

export default Layout;
