import { useState, useEffect } from "react";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.phone) {
      const newBookings = [...bookings, { ...formData, date: new Date().toLocaleString() }];
      setBookings(newBookings);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        budget: "",
        message: "",
      });
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center p-6">
      {/* Header Section */}
      <div className="max-w-2xl w-full text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Book Now</h1>
        <p className="text-white ">Get in touch to book your event</p>
      </div>

      {/* Form Section */}
      <div className="items-start bg-gray-950 shadow-lg rounded-2xl p-8 max-w-2xl w-full">
        <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>

        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border p-3 rounded"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full border p-3 rounded"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone"
            className="w-full border p-3 rounded"
          />
          <input
            type="text"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            placeholder="Event Type (Wedding, Concert, etc.)"
            className="w-full border p-3 rounded"
          />
          <input
            type="text"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Budget (Approximate)"
            className="w-full border p-3 rounded"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Additional Details"
            className="w-full border p-3 rounded h-28"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Submit Booking Request
        </button>
      </div>

      {/* Saved Data Section */}
      {/* <div className="max-w-2xl w-full mt-10">
        <h2 className="text-xl font-bold mb-4">Submitted Bookings</h2>
        {bookings.length === 0 ? (
          <p className="text-white">No bookings yet</p>
        ) : (
          <div className="space-y-4">
            {bookings.map((b, index) => (
              <div key={index} className="p-4 border rounded-lg bg-black shadow-sm">
                <p><strong>Name:</strong> {b.name}</p>
                <p><strong>Email:</strong> {b.email}</p>
                <p><strong>Phone:</strong> {b.phone}</p>
                <p><strong>Event:</strong> {b.eventType}</p>
                <p><strong>Budget:</strong> {b.budget}</p>
                <p><strong>Message:</strong> {b.message}</p>
                <p className="text-gray-500 text-sm"><em>Submitted on {b.date}</em></p>
              </div>
            ))}
          </div>
        )}
      </div> */}
    </div>
  );
};

export default BookingPage;
