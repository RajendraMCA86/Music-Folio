import Navbar from "./components/Nav";
import Home from "./components/Home";
import AboutSection from "./components/About";
import Footer from "./components/Footer";
import GallerySection from "./components/Gallery";
import Bookingpage from "./components/Booking";
import RatingSection from "./components/Ratings";


function App() {
  return (
    <>
    <div className="min-h-screen w-full overflow-x-hidden bg-black">
      <Navbar/>
      <Home/>
      <AboutSection/>
      <GallerySection/>
      <RatingSection />
      <Bookingpage/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
