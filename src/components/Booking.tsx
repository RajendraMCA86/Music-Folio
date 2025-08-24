import { useState, useEffect } from "react";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    occasion: "",
    date: "",
    venue:"",
    budget: "",
    message: "",
  });

  const [bookings, setBookings] = useState<any[]>(() => {
    const stored = localStorage.getItem("bookings");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

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

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.phone) {
      const newBookings = [
        ...bookings,
        { ...formData, date: new Date().toLocaleString() },
      ];
      setBookings(newBookings);
      alert("Success");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        venue:"",
        occasion: "",
        budget: "",
        message: "",
      });
    } else {
      alert("server eror");
    }
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

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10  shadow-lg rounded-2xl p-6 md:p-8 max-w-6xl mx-auto">
        {/* Mobile Image near heading */}
        <div className="md:hidden flex justify-center mb-4">
          <img
            src="https://wallpapers.com/images/high/arijit-singh-on-live-concert-x0d4ij6s2fuxbvg5.webp"
            alt="singer"
            className="w-24 h-24 rounded-full object-cover border-4 border-gray-900 shadow-lg"
          />
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="w-full md:w-2/3 space-y-4">
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
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone"
            className="w-full border p-3 rounded bg-gray-950 text-white"
            required
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
            id="eventDate"
            name="eventDate"
            value={formData.date}
            onChange={handleChange}
            className="border p-3 rounded w-full bg-gray-950 text-white"
          />
          {formData.date && (
            <p className="text-sm text-gray-400">You picked: {formData.date}</p>
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
            className="mt-6 w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-900 transition"
          >
            Submit 
          </button>
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
