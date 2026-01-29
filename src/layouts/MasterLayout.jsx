import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Footer from "../components/Footer";

export default function MasterLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}
