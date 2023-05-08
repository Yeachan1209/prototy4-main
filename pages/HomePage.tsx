import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import Layout from "../component/Layout";
import Section from "../component/PCcomponent/Section";
import Msection from "../component/mobilecomponent/mobileSection";
import MLayout from "../component/MobileLayout";

function HomePage() {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const isMobile = windowWidth < 768;

  return (
    <Box>
      {isMobile ? (
        <Box>
          <MLayout>
            <li>
              <Msection id="1" imageSrc="/dkanrjsk.jpg" />
            </li>
            <li>
              <Msection id="2" imageSrc="/dkanrjsk.jpg" />
            </li>
            <li>
              <Msection id="3" imageSrc="/dkanrjsk.jpg" />
            </li>
            <li>
              <Msection id="4" imageSrc="/dkanrjsk.jpg" />
            </li>
            <li>
              <Msection id="5" imageSrc="/dkanrjsk.jpg" />
            </li>
            <li>
              <Msection id="6" imageSrc="/dkanrjsk.jpg" />
            </li>
            <li>
              <Msection id="7" imageSrc="/dkanrjsk.jpg" />
            </li>
          </MLayout>
        </Box>
      ) : (
        <Box maxWidth="1150px" mx="auto">
          <Layout>
            <div>
              <li>
                <Section id="1" imageSrc="/dkanrjsk.jpg" />
              </li>
              <li>
                <Section id="2" imageSrc="/dkanrjsk.jpg" />
              </li>
              <li>
                <Section id="3" imageSrc="/dkanrjsk.jpg" />
              </li>
              <li>
                <Section id="4" imageSrc="/dkanrjsk.jpg" />
              </li>
              <li>
                <Section id="5" imageSrc="/dkanrjsk.jpg" />
              </li>
              <li>
                <Section id="6" imageSrc="/dkanrjsk.jpg" />
              </li>
              <li>
                <Section id="7" imageSrc="/dkanrjsk.jpg" />
              </li>
            </div>
          </Layout>
        </Box>
      )}
      <style jsx>{`
        div > li {
          margin-bottom: -100px;
          list-style: none;
        }
      `}</style>
    </Box>
  );
}

export default function App() {
  return <HomePage />;
}
