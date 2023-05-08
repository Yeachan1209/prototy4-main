import { ReactNode, useEffect, useState } from "react";
import MobileHeader from "./mobilecomponent/mobileheader";
import MNavigationBar from "./mobilecomponent/mobileNavigationBar";
import Footer from "./mobilecomponent/mobilefooter";

type LayoutProps = {
  children: ReactNode;
};

const MLayout = ({ children }: LayoutProps) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  return (
    <>
      <MobileHeader />
      <MNavigationBar />
      <ul>{children}</ul>
      <Footer />

      <style jsx>{`
        ul {
          list-style: none;
        }
      `}</style>
    </>
  );
};

export default MLayout;
