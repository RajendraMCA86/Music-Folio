import { useState, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const BookingPage = () => {

  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    occasion: "",
    date: "",
    venue: "",
    budget: "",
    message: "",
  });

  // handle input change
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle submit with emailjs
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_kwdztcw", // replace with EmailJS Service ID
        "template_ay7cb3k", // replace with EmailJS Template ID
        form.current,
        "Oy8Le4Lw2lAwLxSfk" // replace with EmailJS Public Key
      )
      .then(
        () => {
          toast.success("🎉 Your form was submitted successfully!");
          setLoading(false);
          form.current?.reset();
          setFormData({
            name: "",
            email: "",
            phone: "",
            occasion: "",
            date: "",
            venue: "",
            budget: "",
            message: "",
          });
        },
        () => {
          toast.error(" Something went wrong. Please try again. 😥");
          setLoading(false);
        }
      );
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-black flex flex-col items-center p-6 pt-16"
    >
      {/* Header Section */}
      <div className="max-w-2xl w-full text-center mb-10">
        <h1 className="text-5xl font-bold m-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="text-white">Get in touch to book your event</p>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 shadow-lg rounded-2xl p-6 md:p-8 max-w-6xl mx-auto">
        {/* Mobile Image */}
        <div className="md:hidden flex justify-center mb-2">
          <img
            src="https://wallpapers.com/images/high/arijit-singh-on-live-concert-x0d4ij6s2fuxbvg5.webp"
            alt="singer"
            className="w-24 h-24 rounded-full object-cover border-4 border-gray-900 shadow-lg"
          />
        </div>

        {/* Form Section */}
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="w-full md:w-2/3 space-y-4"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border p-3 rounded bg-gray-950 text-white"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full border p-3 rounded bg-gray-950 text-white"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Please enter a valid email address"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone"
            className="w-full border p-3 rounded bg-gray-950 text-white"
            required
            pattern="^[6-9]\d{9}$"
            title="Please enter a valid 10-digit Indian phone number"
          />
          <input
            type="text"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            placeholder="Event Type (Wedding, Concert, etc.)"
            className="w-full border p-3 rounded bg-gray-950 text-white"
            required
          />
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]} // prevent past dates
            className="border p-3 rounded w-full bg-gray-950 text-white"
          />
          {formData.date && (
            <p className="text-sm text-white">
              You picked:{" "}
              {new Date(formData.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            placeholder="Location"
            className="w-full border p-3 rounded bg-gray-950 text-white"
            required
          />
          <input
            type="text"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Budget (Approximate)"
            className="w-full border p-3 rounded bg-gray-950 text-white"
            required
            min={20000}
            step={500}
            title="Minimum budget ₹20,000 "
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Additional Details"
            className="w-full border p-3 rounded h-28 bg-gray-950 text-white"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-900 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
          <Toaster position="top-center" reverseOrder={false} />
        </form>

        {/* Desktop Image */}
        <div className="hidden md:flex w-xl h-auto object-cover">
          <img
            src="https://wallpapers.com/images/high/arijit-singh-on-live-concert-x0d4ij6s2fuxbvg5.webp"
            alt="singers portrait"
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
