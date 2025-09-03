import Navbar from "./components/Nav";
import Home from "./components/Home";
import AboutSection from "./components/About";
import Footer from "./components/Footer";
import GallerySection from "./components/Gallery";
import Bookingpage from "./components/Booking";
import RatingSection from "./components/Ratings";
import VideoPlayer from "./components/VideoPlayer";
import TopBanner  from "./components/TopBanner";


function App() {
  return (
    <>
    <div className="min-h-screen w-full overflow-x-hidden bg-black">
      <TopBanner/>
      <Navbar/>
      <Home/>
      <AboutSection/>
      <GallerySection/>
      <VideoPlayer/>
      <RatingSection />
      <Bookingpage/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
