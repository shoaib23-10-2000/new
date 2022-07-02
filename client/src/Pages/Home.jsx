import { Navbar, Welcome, Footer, Services, Transactions } from "../components";
import Explore from "../Pages/Explore";

const Home = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Explore />
    <Footer />
  </div>
);

export default Home;

