import { ReactNode, useEffect, useState } from "react";
import Navigationbar from "./PCcomponent/NavigationBar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  return (
    <>
      <Navigationbar />
      <ul>{children}</ul>

      <style jsx>{`
        ul {
          list-style: none;
        }
      `}</style>
    </>
  );
};

export default Layout;
