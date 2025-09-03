import React, { useEffect, useState } from 'react';
import { Star, Calendar, TrendingUp } from 'lucide-react';

// Types
interface Rating {
  name: string;
  stars: number;
  text: string;
  date: string;
}

const RatingSection: React.FC = () => {
  const [ratings, setRatings] = useState<Rating[]>(() => {
    const stored = localStorage.getItem('reviews');
    return stored ? JSON.parse(stored) : [];
  });

  const [formData, setFormData] = useState({
    name: '',
    stars: 0,
    text: ''
  });

  const [hoveredStar, setHoveredStar] = useState(0);

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(ratings));
  }, [ratings]);

  const averageRating =
    ratings.length > 0
      ? (ratings.reduce((acc, r) => acc + r.stars, 0) / ratings.length).toFixed(1)
      : '0.0';

  const handleSubmit = () => {
    const { name, stars, text } = formData;
    if (!name.trim() || !text.trim() || stars === 0) return;

    const newReview: Rating = {
      name,
      stars,
      text,
      date: new Date().toISOString().split('T')[0]
    };

    const updatedReviews = [...ratings, newReview].slice(-10);
    setRatings(updatedReviews);
    setFormData({ name: '', stars: 0, text: '' });
  };

  const RatingStars: React.FC<{
    rating: number;
    interactive?: boolean;
    onRate?: (rating: number) => void;
  }> = ({ rating, interactive = false, onRate }) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={20}
            className={`cursor-${interactive ? 'pointer' : 'default'} transition ${
              star <= (interactive ? hoveredStar || rating : rating)
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-500'
            }`}
            onClick={interactive && onRate ? () => onRate(star) : undefined}
            onMouseEnter={interactive ? () => setHoveredStar(star) : undefined}
            onMouseLeave={interactive ? () => setHoveredStar(0) : undefined}
          />
        ))}
      </div>
    );
  };

  return (
    // bg-gradient-to-br from-gray-900 to-black
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <h2 className='text-5xl font-bold text-center mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent'>
        Reviews
      </h2>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Form Section */}
        <div className="bg-gray-800/40 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Star className="text-yellow-400 mr-3" /> Leave a Review
          </h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none"
            />

            <textarea
              placeholder="Your review"
              value={formData.text}
              onChange={(e) => setFormData((prev) => ({ ...prev, text: e.target.value }))}
              rows={4}
              className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none"
            />

            <div>
              <p className="mb-2">Your Rating</p>
              <RatingStars
                rating={formData.stars}
                interactive
                onRate={(stars) => setFormData((prev) => ({ ...prev, stars }))}
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={!formData.name || !formData.text || formData.stars === 0}
              className="w-full py-3 mt-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:opacity-90 disabled:opacity-50"
            >
              Submit Review
            </button>
          </div>
        </div>

        {/* Reviews Display */}
        <div className="bg-gray-800/40 p-8 rounded-2xl shadow-lg max-h-[600px] overflow-y-auto custom-scrollbar">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Calendar className="text-green-400 mr-3" /> Recent Reviews
          </h2>

          {ratings.length === 0 ? (
            <p className="text-gray-400">No reviews yet. Be the first!</p>
          ) : (
            ratings
              .slice()
              .reverse()
              .map((r, idx) => (
                <div
                  key={idx}
                  className="bg-gray-700/30 mb-4 p-4 rounded-lg hover:bg-gray-700/50 transition"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {r.name?.charAt(0)?.toUpperCase() || "?"}
                      </div>
                      <div>
                        <h4 className="font-semibold">{r.name}</h4>
                        <p className="text-sm text-gray-400">{r.date}</p>
                      </div>
                    </div>
                    <RatingStars rating={r.stars} />
                  </div>
                  <p className="text-gray-300">{r.text}</p>
                </div>
              ))
          )}
        </div>
      </div>

      {/* Average Rating Summary */}
      <div className="mt-12 max-w-2xl mx-auto text-center">
        <div className="bg-gray-800/40 rounded-xl p-6 items-center">
          <h3 className="text-lg font-semibold flex items-center justify-center mb-2">
            <TrendingUp className="text-green-400 mr-2" /> Average Rating
          </h3>
          <div className=" justify-center text-3xl font-bold text-yellow-400">{averageRating}</div>
          <RatingStars rating={Math.round(Number(averageRating))} />
          <p className="text-gray-400 text-sm mt-2">{ratings.length} review(s) total</p>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(75, 85, 99, 0.3);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.6);
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
};

export default RatingSection;
