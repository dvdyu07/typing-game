import GameBar from "../components/ui/GameBar";
import Header from "../components/ui/Header";
import MainText from "../components/ui/MainText";
import Data from "../components/ui/Data";
import Footer from "../components/ui/Footer"
import Head from 'next/head'
import "./dashboard.css"

const Dashboard = () => {
  return (
      <div className="dashboard">
      <Head>
        <title>TypED</title>
      </Head>
      <Header />
      <GameBar />
      <MainText />
      <Data />
      <Footer />
      </div>
  );
};

export default Dashboard;
