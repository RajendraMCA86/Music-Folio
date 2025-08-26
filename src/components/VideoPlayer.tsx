import { useState } from "react";

const videos = [
  {
    id: 1,
    title: "Live Concert",
    url: "https://www.youtube.com/embed/FiENDQapd4g?si=gEIui7PlKUyyQ7yF",
    thumbnail: "https://img.youtube.com/vi/FiENDQapd4g/0.jpg",
  },
  {
    id: 2,
    title: "Guitar Solo",
    url: "https://www.youtube.com/embed/OBgOwAf-oVI?si=k72c4b9zkuwVk5x9",
    thumbnail: "https://img.youtube.com/vi/OBgOwAf-oVI/0.jpg",
  },
  {
    id: 3,
    title: "Arijit Singh Live",
    url: "https://youtube.com/embed/3lDJZr6kbsg?si=xX_NmtsnxBe3nzC0",
    thumbnail: "https://img.youtube.com/vi/3lDJZr6kbsg/0.jpg",
  },
  {
    id: 4,
    title: "Arijit Singh Live",
    url: "https://youtube.com/embed/oUEtVkSZAws?si=UmCYL2c-VpbLXCwE",
    thumbnail: "https://img.youtube.com/vi/oUEtVkSZAws/0.jpg",
  },
  {
    id: 5,
    title: "Arijit Singh Live",
    url: "https://youtube.com/embed/M1JzVnCJVyM?si=6k5DiHjsMvGFUiyZ",
    thumbnail: "https://img.youtube.com/vi/M1JzVnCJVyM/0.jpg",
  },
  {
    id: 6,
    title: "Arijit Singh Live",
    url: "https://youtube.com/embed/k36JsF6QY_c?si=NqCKrJ-1Ouw3uMWC",
    thumbnail: "https://img.youtube.com/vi/k36JsF6QY_c/0.jpg",
  },
];

const VideoPlayer = () => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <div className=" bg-gray-950">
      <h2 className="text-5xl text-center font-bold  p-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
        Videos & Album</h2>
    <div className="flex flex-col md:flex-row min-h-scree text-white p-6 gap-6">
      {/* Video Player */}
      <div className="flex-1 flex items-center justify-center bg-black rounded-2xl shadow-xl relative relative w-full max-w-5xl border border-zinc-700 mb-2 aspect-video shadow-lg shadow-blue-950">
        <iframe
          src={selectedVideo.url}
          title={selectedVideo.title}
          className="w-full h-[400px] md:h-[500px] rounded-2xl"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Glow effect behind video */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl -z-10"></div>
      </div>

      {/* Video List (Scrollable) */}
      <div className="w-full md:w-1/3 bg-gray-800 rounded-xl p-4 overflow-y-auto max-h-[500px]">
        <h2 className="text-xl font-bold mb-4">More Videos</h2>
        <div className="space-y-4">
          {videos.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className={`cursor-pointer flex items-center gap-3 p-2 rounded-lg transition ${
                selectedVideo.id === video.id
                  ? "bg-blue-600"
                  : "hover:bg-gray-700"
              }`}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-24 h-16 object-cover rounded-md"
              />
              <p className="text-sm">{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default VideoPlayer;
