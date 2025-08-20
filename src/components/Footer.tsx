// import { Youtube, Twitter, Instagram, Facebook } from "lucide-react";

// const Footer = () => {
//   return (
//     <>
//       {/* Footer */}
//       <footer className="py-8 px-6 border-t border-gray-800">
//         <div className="flex max-w-7xl mx-auto text-center">
//           <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-4">
//             ARTIST
//           </div>
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
//               Let's Connect
//             </h2>
//             <p className="text-xl text-gray-300 mb-12">
//               For bookings, collaborations, just to say hello
//             </p>

//             <div className="grid md:grid-cols-3 gap-8 mb-12">
//               <div className="text-center">
//                 <h3 className="text-white font-semibold mb-2">Management</h3>
//                 <p className="text-gray-400">booking@alexjordan.com</p>
//               </div>
//               <div className="text-center">
//                 <h3 className="text-white font-semibold mb-2">
//                   Press Inquiries
//                 </h3>
//                 <p className="text-gray-400">press@alexjordan.com</p>
//               </div>
//               <div className="text-center">
//                 <h3 className="text-white font-semibold mb-2">General</h3>
//                 <p className="text-gray-400">hello@alexjordan.com</p>
//               </div>
//             </div>

//             <div className="flex justify-center space-x-6">
//               <a
//                 href="https://www.instagram.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Instagram className="cursor-pointer hover:scale-[1.2] transition-all duration-300" />
//               </a>
//               <a
//                 href="https://twitter.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Twitter className="cursor-pointer hover:scale-[1.2] transition-all duration-300" />
//               </a>
//               <a
//                 href="https://facebook.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Facebook className="cursor-pointer hover:scale-[1.2] transition-all duration-300" />
//               </a>
//               <a href="https://youtube.com/" target="_blank">
//               <Youtube 
//               className="w-6 h-6 cursor-pointer hover:scale-[1.2] transition-all duration-300"
//               />
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };
// export default Footer;


import { Youtube, Twitter, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-4">
            Let’s Connect
          </h2>
          <p className="text-lg text-gray-400">
            For bookings, collaborations, or just to say hello.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 text-center">
          <div>
            <h3 className="text-white font-semibold mb-2">Management</h3>
            <p className="text-gray-400">booking@alexjordan.com</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Press Inquiries</h3>
            <p className="text-gray-400">press@alexjordan.com</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">General</h3>
            <p className="text-gray-400">hello@alexjordan.com</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-10">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6 text-gray-300 hover:text-pink-500 hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter className="w-6 h-6 text-gray-300 hover:text-blue-400 hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6 text-gray-300 hover:text-blue-600 hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <Youtube className="w-6 h-6 text-gray-300 hover:text-red-500 hover:scale-110 transition-transform duration-300" />
          </a>
        </div>

        {/* Branding & Copyright */}
        <div className="text-center border-t border-gray-700 pt-6">
          <h4 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-2">
            ARTIST
          </h4>
          <p className="text-sm text-gray-500">
            © 2025 <span className="font-semibold">KVSTECHFLOW</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
