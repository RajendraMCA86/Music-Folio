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
                RADHIKA CHOUHAN
              </h1>
              <p className="text-xl md:text-2xl my-4 text-gray-300">
                He is a soulful voice of modern Bollywood whose chart‑topping
                hits and timeless melodies have made him a musical icon.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center md:justify-start">
                <a
                  href="https://www.instagram.com/radhikachouhan_indore/"
                  target="_blank"
                >
                  <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                    <Play size={20} />
                    See More
                  </button>
                </a>
              </div>
            </div>
            <div className="relative mt-10 md:mt-0 md:ml-10 flex flex-col items-center">
              <svg
                width="520"
                height="420"
                viewBox="0 0 593 557"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0H10.5893V478.672H0V0Z"
                  fill="url(#paint0_linear_1213_12372)"
                ></path>
                <path
                  d="M21.1786 0H31.7679V478.672H21.1786V0Z"
                  fill="url(#paint1_linear_1213_12372)"
                ></path>
                <path
                  d="M52.9464 0V478.672H42.3571V0H52.9464Z"
                  fill="url(#paint2_linear_1213_12372)"
                ></path>
                <path
                  d="M63.5357 0H74.125V478.672H63.5357V0Z"
                  fill="url(#paint3_linear_1213_12372)"
                ></path>
                <path
                  d="M518.875 78.3281H529.464V557H518.875V78.3281Z"
                  fill="url(#paint4_linear_1213_12372)"
                ></path>
                <path
                  d="M540.054 78.3281H550.643V557H540.054V78.3281Z"
                  fill="url(#paint5_linear_1213_12372)"
                ></path>
                <path
                  d="M571.821 78.3281V557H561.232V78.3281H571.821Z"
                  fill="url(#paint6_linear_1213_12372)"
                ></path>
                <path
                  d="M582.411 78.3281H593V557H582.411V78.3281Z"
                  fill="url(#paint7_linear_1213_12372)"
                ></path>
                <path
                  d="M83.3906 0V9.94643H593V0H83.3906Z"
                  fill="url(#paint8_linear_1213_12372)"
                ></path>
                <path
                  d="M593 19.8929H83.3906V29.8393H593V19.8929Z"
                  fill="url(#paint9_linear_1213_12372)"
                ></path>
                <path
                  d="M83.3906 39.7857V49.7321H593V39.7857H83.3906Z"
                  fill="url(#paint10_linear_1213_12372)"
                ></path>
                <path
                  d="M83.3906 59.6786V69.625H593V59.6786H83.3906Z"
                  fill="url(#paint11_linear_1213_12372)"
                ></path>
                <path
                  d="M0 497.321V487.375H509.609V497.321H0Z"
                  fill="url(#paint12_linear_1213_12372)"
                ></path>
                <path
                  d="M0 507.268H509.609V517.214H0V507.268Z"
                  fill="url(#paint13_linear_1213_12372)"
                ></path>
                <path
                  d="M0 537.107V527.161H509.609V537.107H0Z"
                  fill="url(#paint14_linear_1213_12372)"
                ></path>
                <path
                  d="M0 557V547.054H509.609V557H0Z"
                  fill="url(#paint15_linear_1213_12372)"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_1213_12372"
                    x1="9.26565"
                    y1="-1.5222e-05"
                    x2="563.078"
                    y2="626.456"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F16B2E"></stop>
                    <stop
                      offset="1"
                      stop-color="#EC2179"
                      stop-opacity="0.3"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1213_12372"
                    x1="9.26565"
                    y1="-1.5222e-05"
                    x2="563.078"
                    y2="626.456"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F16B2E"></stop>
                    <stop
                      offset="1"
                      stop-color="#EC2179"
                      stop-opacity="0.3"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_1213_12372"
                    x1="9.26565"
                    y1="-1.5222e-05"
                    x2="563.078"
                    y2="626.456"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F16B2E"></stop>
                    <stop
                      offset="1"
                      stop-color="#EC2179"
                      stop-opacity="0.3"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_1213_12372"
                    x1="9.26565"
                    y1="-1.5222e-05"
                    x2="563.078"
                    y2="626.456"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F16B2E"></stop>
                    <stop
                      offset="1"
                      stop-color="#EC2179"
                      stop-opacity="0.3"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_1213_12372"
                    x1="9.26565"
                    y1="-1.5222e-05"
                    x2="563.078"
                    y2="626.456"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F16B2E"></stop>
                    <stop
                      offset="1"
                      stop-color="#EC2179"
                      stop-opacity="0.3"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_1213_12372"
                    x1="9.26565"
                    y1="-1.5222e-05"
                    x2="563.078"
                    y2="626.456"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F16B2E"></stop>
                    <stop
                      offset="1"
                      stop-color="#EC2179"
                      stop-opacity="0.3"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear_1213_12372"
                    x1="9.26565"
                    y1="-1.5222e-05"
                    x2="563.078"
                    y2="626.456"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F16B2E"></stop>
                    <stop
                      offset="1"
                      stop-color="#EC2179"
                      stop-opacity="0.3"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint7_linear_1213_12372"
                    x1="9.26565"
                    y1="-1.5222e-05"
                    x2="563.078"
                    y2="626.456"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F16B2E"></stop>
                    <stop
                      offset="1"
                      stop-color="#EC2179"
                      stop-opacity="0.3"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint8_linear_1213_12372"
                    x1="9.26565"
                    y1="-1.5222e-05"
                    x2="563.078"
                    y2="626.456"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F16B2E"></stop>
                    <stop
                      offset="1"
                      stop-color="#EC2179"
                      stop-opacity="0.3"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint9_linear_1213_12372"
                    x1="9.26565"
                    y1="-1.5222e-05"
                    x2="563.078"
                    y2="626.456"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F16B2E"></stop>
                    <stop
                      offset="1"
                      stop-color="#EC2179"
                      stop-opacity="0.3"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint10_linear_1213_12372"
                    x1="9.26565"
                    y1="-1.5222e-05"
                    x2="563.078"
                    y2="626.456"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F16B2E"></stop>
                    <stop
                      offset="1"
                      stop-color="#EC2179"
                      stop-opacity="0.3"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint11_linear_1213_12372"
                    x1="9.26565"
                    y1="-1.5222e-05"
                    x2="563.078"
                    y2="626.456"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F16B2E"></stop>
                    <stop
                      offset="1"
                      stop-color="#EC2179"
                      stop-opacity="0.3"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint12_linear_1213_12372"
                    x1="9.26565"
                    y1="-1.5222e-05"
                    x2="563.078"
                    y2="626.456"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F16B2E"></stop>
                    <stop
                      offset="1"
                      stop-color="#EC2179"
                      stop-opacity="0.3"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint13_linear_1213_12372"
                    x1="9.26565"
                    y1="-1.5222e-05"
                    x2="563.078"
                    y2="626.456"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F16B2E"></stop>
                    <stop
                      offset="1"
                      stop-color="#EC2179"
                      stop-opacity="0.3"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint14_linear_1213_12372"
                    x1="9.26565"
                    y1="-1.5222e-05"
                    x2="563.078"
                    y2="626.456"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F16B2E"></stop>
                    <stop
                      offset="1"
                      stop-color="#EC2179"
                      stop-opacity="0.3"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint15_linear_1213_12372"
                    x1="9.26565"
                    y1="-1.5222e-05"
                    x2="563.078"
                    y2="626.456"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F16B2E"></stop>
                    <stop
                      offset="1"
                      stop-color="#EC2179"
                      stop-opacity="0.3"
                    ></stop>
                  </linearGradient>
                </defs>
              </svg>
              <img
                src="https://wallpapers.com/images/hd/arijit-singh-on-live-concert-x0d4ij6s2fuxbvg5.jpg"
                alt="singers-image"
                className="absolute w-64 h-72 object-cover rounded-2xl shadow-xl top-16 right-35 "
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
