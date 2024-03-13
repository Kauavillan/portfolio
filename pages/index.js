import NavBar from "../components/NavBar";
import Content from "../components/Content";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Footer from "@/components/Footer";
export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <NavBar />
      <Content />
      <Footer />
    </>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["translation"])),
    },
  };
}
