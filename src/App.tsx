import React, { useState, useEffect, useCallback } from "react";
import {
  Play,
  Calendar,
  MapPin,
  Star,
  Menu,
  X,
  ChevronRight,
  Instagram,
  Twitter,
  Youtube,
  User,
  TrendingUp,
  Facebook,
} from "lucide-react";
import Speeddial from "./components/Speeddial";

// Types for rating system
interface Rating {
  id: string;
  name: string;
  rating: number;
  review: string;
  date: string;
}

interface RatingStats {
  average: number;
  total: number;
  distribution: { [key: number]: number };
}

// Sample initial ratings data
const initialRatings: Rating[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    rating: 5,
    review:
      "Absolutely mesmerizing performance! Alex's artistic vision is truly extraordinary and left me speechless.",
    date: "2024-01-15",
  },
  {
    id: "2",
    name: "Mike Chen",
    rating: 5,
    review:
      "Raw emotion meets technical perfection. This is the kind of artistry that defines a generation.",
    date: "2024-01-12",
  },
  {
    id: "3",
    name: "Emma Wilson",
    rating: 5,
    review:
      "A transcendent experience that blurs the line between performance and pure magic. Unforgettable!",
    date: "2024-01-10",
  },
  {
    id: "4",
    name: "David Rodriguez",
    rating: 4,
    review:
      "Incredible stage presence and innovative choreography. The energy was infectious throughout the entire venue.",
    date: "2024-01-08",
  },
  {
    id: "5",
    name: "Lisa Thompson",
    rating: 5,
    review:
      "Pure artistry in motion. Every moment was crafted with precision and delivered with passion.",
    date: "2024-01-05",
  },
  {
    id: "6",
    name: "Carlos Martinez",
    rating: 4,
    review:
      "Outstanding performance with remarkable attention to detail. The lighting and choreography were perfectly synchronized.",
    date: "2024-01-03",
  },
];

const ArtistPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Rating system state
  const [ratings, setRatings] = useState<Rating[]>([]);
  const [ratingsLoading, setRatingsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    rating: 0,
    review: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load ratings on component mount
  useEffect(() => {
    const loadRatings = async () => {
      try {
        // In a real app, this would fetch from public/ratings.json
        const initialData = initialRatings;

        // Check localStorage for additional ratings
        const storedRatings = localStorage.getItem("userRatings");
        let userRatings: Rating[] = [];

        if (storedRatings) {
          userRatings = JSON.parse(storedRatings);
        }

        // Combine and ensure we don't exceed 10 ratings
        const allRatings = [...initialData, ...userRatings];
        const limitedRatings = allRatings.slice(-10);

        setRatings(limitedRatings);
        setRatingsLoading(false);
      } catch (error) {
        console.error("Error loading ratings:", error);
        setRatingsLoading(false);
      }
    };

    loadRatings();
  }, []);

  // Calculate rating statistics
  const calculateStats = useCallback((ratings: Rating[]): RatingStats => {
    if (ratings.length === 0) {
      return { average: 0, total: 0, distribution: {} };
    }

    const total = ratings.length;
    const sum = ratings.reduce((acc, rating) => acc + rating.rating, 0);
    const average = sum / total;

    const distribution = ratings.reduce((acc, rating) => {
      acc[rating.rating] = (acc[rating.rating] || 0) + 1;
      return acc;
    }, {} as { [key: number]: number });

    return { average, total, distribution };
  }, []);

  const ratingStats = calculateStats(ratings);

  // Handle rating form submission
  const handleRatingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.review || formData.rating === 0) return;

    setIsSubmitting(true);

    const newRating: Rating = {
      id: Date.now().toString(),
      name: formData.name,
      rating: formData.rating,
      review: formData.review,
      date: new Date().toISOString().split("T")[0],
    };

    try {
      // Add new rating to the list
      const updatedRatings = [...ratings, newRating];

      // Keep only the most recent 10 ratings
      const limitedRatings = updatedRatings.slice(-10);

      // Separate initial ratings from user ratings for localStorage
      const userRatings = limitedRatings.filter(
        (rating) => !initialRatings.some((initial) => initial.id === rating.id)
      );

      // Store user ratings in localStorage
      localStorage.setItem("userRatings", JSON.stringify(userRatings));

      // Update state
      setRatings(limitedRatings);

      // Reset form
      setFormData({ name: "", rating: 0, review: "" });
    } catch (error) {
      console.error("Error saving rating:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Rating star component
  const RatingStars: React.FC<{
    rating: number;
    interactive?: boolean;
    size?: number;
    onRate?: (rating: number) => void;
  }> = ({ rating, interactive = false, size = 20, onRate }) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={size}
            className={`cursor-${
              interactive ? "pointer" : "default"
            } transition-colors duration-200 ${
              star <= (interactive ? hoveredStar || rating : rating)
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-600"
            }`}
            onClick={interactive && onRate ? () => onRate(star) : undefined}
            onMouseEnter={interactive ? () => setHoveredStar(star) : undefined}
            onMouseLeave={interactive ? () => setHoveredStar(0) : undefined}
          />
        ))}
      </div>
    );
  };

  // Marquee component for scrolling reviews
  const ReviewMarquee: React.FC = () => {
    const recentReviews = ratings.slice(-5).reverse();

    return (
      <div className="bg-gradient-to-r from-red-900/10 to-orange-900/10 py-6 overflow-hidden border-y border-red-800/20">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...recentReviews, ...recentReviews].map((rating, index) => (
            <div
              key={`${rating.id}-${index}`}
              className="flex items-center mx-8 flex-shrink-0"
            >
              <div className="flex items-center space-x-3 bg-gray-800/50 rounded-full px-6 py-3 border border-red-500/20">
                <RatingStars rating={rating.rating} size={16} />
                <span className="text-sm font-medium text-gray-200 max-w-xs truncate">
                  "{rating.review}"
                </span>
                <span className="text-xs text-red-400">- {rating.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const performances = [
    {
      date: "Dec 15, 2024",
      venue: "Madison Square Garden",
      location: "New York, NY",
      status: "Sold Out",
    },
    {
      date: "Dec 22, 2024",
      venue: "Hollywood Bowl",
      location: "Los Angeles, CA",
      status: "Available",
    },
    {
      date: "Jan 5, 2025",
      venue: "Red Rocks Amphitheatre",
      location: "Morrison, CO",
      status: "Few Left",
    },
  ];

  const galleries = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      title: "Live Performance",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop",
      title: "Studio Session",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      title: "Behind Scenes",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop",
      title: "Concert Hall",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              ARTIST
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "About",
                "Performances",
                "Gallery",
                "Reviews",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-red-400 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md">
            <div className="px-6 py-4 space-y-4">
              {[
                "Home",
                "About",
                "Performances",
                "Gallery",
                "Reviews",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block hover:text-red-400 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black"></div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent">
            ARTIST THE SINGER
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Multi-disciplinary Artist & Performer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/arijitsingh/?hl=en"
              target="_blank"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <Play size={20} />
                See More
              </button>
            </a>
            {/* <a href="#reviews">
            <button className="px-8 py-4 border-2 border-white/20 rounded-full hover:border-red-400 hover:text-red-400 transition-all duration-300 transform hover:scale-105">
              Reviews
            </button></a> */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                My Story
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Born from the intersection of classical training and modern
                innovation, my artistic journey spans over a decade of pushing
                creative boundaries. Each performance is a unique narrative that
                connects deeply with audiences worldwide.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                From intimate studio sessions to grand concert halls, I believe
                in the transformative power of authentic artistic expression. My
                work explores themes of human connection, resilience, and the
                beauty found in life's complexities.
              </p>
              <Speeddial
                actionButtons={[
                  {
                    action: () =>
                      window.open(
                        "https://www.instagram.com/oriyonmusicbyarijitsingh/",
                        "_blank"
                      ),
                    icon: <Instagram />,
                    key: "instagram",
                    label: "Instagram",
                  },
                  {
                    action: () =>
                      window.open(
                        "https://www.facebook.com/OriyonMusicByArijitSingh",
                        "_blank"
                      ),
                    icon: <Facebook />,
                    key: "facebook",
                    label: "Facebook",
                  },
                  {
                    action: () =>
                      window.open(
                        "https://x.com/OriyonmusicbyAS?s=09",
                        "_blank"
                      ),
                    icon: <Twitter />,
                    key: "x",
                    label: "X",
                  },
                  {
                    action: () =>
                      window.open(
                        "https://www.youtube.com/@hiddenpearlsmusicalacademy1192",
                        "_blank"
                      ),
                    icon: <Youtube />,
                    key: "youtube",
                    label: "Youtube",
                  },
                ]}
                direction="right"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=800&fit=crop"
                alt="Artist portrait"
                className="relative rounded-2xl w-full h-96 object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-16 bg-gradient-to-r from-red-900/10 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "250+", label: "Performances" },
              { number: "50+", label: "Cities" },
              { number: "1M+", label: "Audience Reached" },
              { number: "15+", label: "Awards" },
            ].map((stat, index) => (
              <div
                key={index}
                className="group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-red-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            Visual Journey
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleries.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Performances */}
      <section id="performances" className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            Upcoming Shows
          </h2>
          <div className="space-y-6">
            {performances.map((show, index) => (
              <div
                key={index}
                className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 hover:bg-gray-900/60 transition-all duration-300 border border-gray-800/50"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-red-400">
                      <Calendar size={20} />
                      <span className="font-semibold">{show.date}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {show.venue}
                      </h3>
                      <div className="flex items-center gap-1 text-gray-400">
                        <MapPin size={16} />
                        <span>{show.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        show.status === "Sold Out"
                          ? "bg-red-600 text-white"
                          : show.status === "Few Left"
                          ? "bg-orange-600 text-white"
                          : "bg-green-600 text-white"
                      }`}
                    >
                      {show.status}
                    </span>
                    <button className="px-6 py-2 border border-red-400 text-red-400 rounded-lg hover:bg-red-400 hover:text-white transition-all duration-300">
                      Get Tickets
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scrolling Reviews Marquee */}
      {ratings.length > 0 && <ReviewMarquee />}

      {/* Dynamic Reviews Section */}
      <section
        id="reviews"
        className="py-20 px-6 bg-gradient-to-br from-gray-900/50 to-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-4">
              Audience Reviews
            </h2>
            <p className="text-xl text-gray-300">
              Real feedback from our incredible audience
            </p>
          </div>

          {ratingsLoading ? (
            <div className="flex items-center justify-center p-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
            </div>
          ) : (
            <>
              {/* Rating Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {/* Average Rating */}
                <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 text-center border border-red-500/10">
                  <div className="flex items-center justify-center mb-4">
                    <TrendingUp className="text-red-400 mr-3" size={28} />
                    <h3 className="text-xl font-semibold">Average Rating</h3>
                  </div>
                  <div className="text-4xl font-bold text-yellow-400 mb-4">
                    {ratingStats.average.toFixed(1)}
                  </div>
                  <RatingStars
                    rating={Math.round(ratingStats.average)}
                    size={28}
                  />
                  <p className="text-gray-400 mt-3">
                    Based on {ratingStats.total} reviews
                  </p>
                </div>

                {/* Rating Distribution */}
                <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-red-500/10">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <Star className="text-yellow-400 mr-3" size={24} />
                    Rating Breakdown
                  </h3>
                  <div className="space-y-3">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center space-x-3">
                        <span className="text-sm w-6">{rating}</span>
                        <Star
                          size={16}
                          className="text-yellow-400 fill-yellow-400"
                        />
                        <div className="flex-1 bg-gray-700 rounded-full h-3">
                          <div
                            className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-3 rounded-full transition-all duration-700"
                            style={{
                              width: `${
                                ratingStats.total > 0
                                  ? ((ratingStats.distribution[rating] || 0) /
                                      ratingStats.total) *
                                    100
                                  : 0
                              }%`,
                            }}
                          />
                        </div>
                        <span className="text-sm w-8 text-right text-gray-300">
                          {ratingStats.distribution[rating] || 0}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Total Reviews */}
                <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 text-center border border-red-500/10">
                  <div className="flex items-center justify-center mb-4">
                    <User className="text-red-400 mr-3" size={28} />
                    <h3 className="text-xl font-semibold">Total Reviews</h3>
                  </div>
                  <div className="text-4xl font-bold text-red-400 mb-4">
                    {ratingStats.total}
                  </div>
                  <p className="text-gray-400 mb-4">Max 10 reviews stored</p>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-red-500 to-red-600 h-3 rounded-full transition-all duration-700"
                      style={{ width: `${(ratingStats.total / 10) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Rating Form */}
                <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-red-500/10">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Star className="text-yellow-400 mr-3" size={28} />
                    Share Your Experience
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-red-400 transition-colors text-white placeholder-gray-400"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-3 text-gray-300">
                        Rating
                      </label>
                      <RatingStars
                        rating={formData.rating}
                        interactive
                        size={36}
                        onRate={(rating) =>
                          setFormData((prev) => ({ ...prev, rating }))
                        }
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">
                        Your Review
                      </label>
                      <textarea
                        value={formData.review}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            review: e.target.value,
                          }))
                        }
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-red-400 transition-colors resize-none text-white placeholder-gray-400"
                        placeholder="Share your thoughts about the performance..."
                        required
                      />
                    </div>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleRatingSubmit(e as any);
                      }}
                      disabled={
                        isSubmitting ||
                        !formData.name ||
                        !formData.review ||
                        formData.rating === 0
                      }
                      className="w-full py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] text-white"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Review"}
                    </button>
                  </div>
                </div>

                {/* Recent Reviews Display */}
                <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-red-500/10">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Calendar className="text-red-400 mr-3" size={28} />
                    Recent Reviews
                  </h3>

                  <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
                    {ratings
                      .slice()
                      .reverse()
                      .map((rating) => (
                        <div
                          key={rating.id}
                          className="bg-gray-700/30 rounded-xl p-6 hover:bg-gray-700/50 transition-colors border border-gray-600/30"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                                {rating.name.charAt(0).toUpperCase()}
                              </div>
                              <div>
                                <h4 className="font-semibold text-white">
                                  {rating.name}
                                </h4>
                                <p className="text-sm text-gray-400">
                                  {rating.date}
                                </p>
                              </div>
                            </div>
                            <RatingStars rating={rating.rating} size={18} />
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            {rating.review}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Original Reviews Section - Now Static Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            Press & Media
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "An absolutely mesmerizing performance that left the entire audience speechless. Alex's artistic vision is truly extraordinary.",
                author: "Sarah Johnson",
                title: "Music Critic, Rolling Stone",
              },
              {
                text: "Raw emotion meets technical perfection. This is the kind of artistry that defines a generation.",
                author: "Michael Chen",
                title: "The New York Times",
              },
              {
                text: "A transcendent experience that blurs the line between performance and pure magic. Unforgettable.",
                author: "Emma Rodriguez",
                title: "Entertainment Weekly",
              },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-red-400 text-red-400"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{review.text}"
                </p>
                <div>
                  <div className="font-semibold text-white">
                    {review.author}
                  </div>
                  <div className="text-gray-400 text-sm">{review.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-r from-red-900/20 to-black"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            For bookings, collaborations, or just to say hello
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-white font-semibold mb-2">Management</h3>
              <p className="text-gray-400">booking@alexjordan.com</p>
            </div>
            <div className="text-center">
              <h3 className="text-white font-semibold mb-2">Press Inquiries</h3>
              <p className="text-gray-400">press@alexjordan.com</p>
            </div>
            <div className="text-center">
              <h3 className="text-white font-semibold mb-2">General</h3>
              <p className="text-gray-400">hello@alexjordan.com</p>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: Twitter, label: "Twitter" },
              { icon: Youtube, label: "YouTube" },
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className="p-3 border border-gray-700 rounded-full hover:border-red-400 hover:text-red-400 transition-all duration-300 transform hover:scale-110"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-4">
            ARTIST
          </div>
          <p className="text-gray-400">
            © 2025 DEVELOPED BY KVSTECHFLOW. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Custom Styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(75, 85, 99, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(239, 68, 68, 0.6);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(239, 68, 68, 0.8);
        }
      `}</style>
    </div>
  );
};

export default ArtistPortfolio;
