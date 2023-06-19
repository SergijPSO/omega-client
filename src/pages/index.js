import Layout from "@/components/Layout/Layout";
import Footer from "@/components/Footer/Footer";
import MainContent from "@/components/MainContent/MainContent";

export async function getServerSideProps() {
  return {
    props: {},
  };
}

const Home = () => {
  return (
    <Layout>
      <MainContent />
      <Footer />
    </Layout>
  );
};

export default Home;
