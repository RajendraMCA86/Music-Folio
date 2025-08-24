import { Play } from "lucide-react";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-black text-white overflow-x-hidden mt-12 p-2">
        {/* Hero Section */}
        <section
          id="home"
          className="relative h-screen flex items-center justify-center bg-black"
        >
          <div className="absolute inset-0 bg-black"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-6">
            {/* Left Side: Text */}
            <div className="text-center md:text-left max-w-2xl">
              <h1 className="text-6xl md:text-8xl font-bold P-8 bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent">
                ARIJIT SINGH
              </h1>
              <p className="text-xl md:text-2xl m-4 text-gray-300">
                Artist & Singer 
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center md:justify-start">
                <a
                  href="https://www.instagram.com/arijitsingh/?hl=en"
                  target="_blank"
                >
                  <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                    <Play size={20} />
                    See More
                  </button>
                </a>
              </div>
            </div>
            <div className="mt-10 md:mt-0 md:ml-10 flex flex-col items-center">
              {/* Outer Ring */}
              <div className="p-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600">
                {/* Middle Ring */}
                <div className="p-2 rounded-full bg-black">
                  {/* Inner Ring */}
                  <div className="p-2 rounded-full bg-gradient-to-r from-orange-400 to-red-500">
                    <div className="p-2 rounded-full bg-black">
                      <img
                        src="https://wallpapers.com/images/hd/arijit-singh-on-live-concert-x0d4ij6s2fuxbvg5.jpg"
                        alt="singer portrait"
                        className="w-64 h-64 object-cover rounded-full border-4 border-black"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
