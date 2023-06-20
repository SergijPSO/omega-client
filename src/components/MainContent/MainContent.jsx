import React from "react";
import Section from "../Section/Section";
import HeaderMobile from "@/components/HeaderMobile/HeaderMobile.jsx";
import Header from "@/components/Header/Header";
import useScreenWidth from "../../hooks/useScreenWidth";
import Jumbotron from "@/components/Jumbotron/Jumbotron";
import Posts from "@/components/Posts/Posts";

const MainContent = () => {
  const screenWidth = useScreenWidth();

  return (
    <>
      <Section modifier={"--preview"}>
        {screenWidth <= 1024 ? <HeaderMobile /> : <Header />}
        <Jumbotron />
      </Section>

      <Section modifier={"--posts"}>
        <Posts />
      </Section>
    </>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default MainContent;
