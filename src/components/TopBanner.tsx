import { Phone, Instagram, Facebook, Twitter } from "lucide-react";

export default function TopBanner() {
  return (
    <div className="fixed top-0 left-0 w-full bg-gray-900 text-gray-200 text-lg z-50 ">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between px-4 py-2 gap-2 sm:gap-0">
        
        {/* Contact Info */}
        <div className="flex items-center gap-4">   
          <a href="tel:+1234567890" className="flex items-center hover:text-blue-400 transition">
            <Phone size={16} />
            <span>+91 777 999 890</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a href="https://instagram.com" target="_blank" className="hover:text-pink-500 transition">
            <Instagram size={18} />
          </a>
          <a href="https://facebook.com" target="_blank" className="hover:text-blue-500 transition">
            <Facebook size={18} />
          </a>
          <a href="https://twitter.com" target="_blank" className="hover:text-sky-400 transition">
            <Twitter size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
