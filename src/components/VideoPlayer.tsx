// import { useState } from "react";

// const videos = [
//   {
//     id: 1,
//     title: "Live Concert",
//     url: "https://www.w3schools.com/html/mov_bbb.mp4",
//     thumbnail: "https://img.youtube.com/vi/aqz-KE-bpKQ/0.jpg",
//   },
//   {
//     id: 2,
//     title: "Music Video",
//     url: "https://youtu.be/cUmUOb7j3dc?si=Pc9Y9fq9_8o_oF7N",
//     thumbnail: "https://img.youtube.com/vi/tgbNymZ7vqY/0.jpg",
//   },
//   {
//     id: 3,
//     title: "Interview",
//     url: "https://youtu.be/Hi_gyY-mMQo?si=pE0CbAp4SHStUeJx.mp4",
//     thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
//   },
//   {
//     id: 4,
//     title: "Interview",
//     url: "https://www.w3schools.com/html/mov_bbb.mp4",
//     thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
//   },
//   {
//     id: 5,
//     title: "Interview",
//     url: "https://www.w3schools.com/html/mov_bbb.mp4",
//     thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
//   },
// ];

// export default function VideoPlayer() {
//   const [currentVideo, setCurrentVideo] = useState(videos[0]);

//   return (
//     <div className="flex flex-col md:flex-row-reverse gap-8 max-w-7xl mx-auto p-6">
//       {/* Video List */}
//       <div className="w-full md:w-1/3 space-y-4 overflow-y-auto max-h-[500px] pr-2">
//         {videos.map((video) => (
//           <div
//             key={video.id}
//             className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer border transition
//         ${
//           currentVideo.id === video.id
//             ? "border-blue-500 bg-gray-900"
//             : "border-gray-700 hover:bg-gray-800"
//         }`}
//             onClick={() => setCurrentVideo(video)}
//           >
//             <img
//               src={video.thumbnail}
//               alt={video.title}
//               className="w-24 h-16 object-cover rounded"
//             />
//             <p className="text-white text-sm font-medium">{video.title}</p>
//           </div>
//         ))}
//       </div>

//       {/* Video Player */}
//       <div className="w-full md:w-2/3 flex flex-col items-center relative">
//         {/* Glow Background */}
//         <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
//           <div className="w-[90%] h-[90%] rounded-full bg-gradient-to-tr from-blue-600/30 via-purple-600/20 to-pink-600/30 blur-3xl"></div>
//         </div>

//         <video
//           key={currentVideo.id}
//           controls
//           autoPlay
//           className="relative z-10 w-full h-[300px] md:h-[600px] rounded-xl shadow-2xl"
//         >
//           <source src={currentVideo.url} type="video/mp4" />
//           Your browser does not support HTML video.
//         </video>

//         <h2 className="mt-4 text-lg font-semibold text-white relative z-10">
//           {currentVideo.title}
//         </h2>
//       </div>
//     </div>
//   );
// }

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
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-white p-6 gap-6">
      <h2 className="text-5xl font-bold  p-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
        
      </h2>
      {/* Video Player */}
      <div className="flex-1 flex items-center justify-center bg-black rounded-2xl shadow-2xl relative relative w-full max-w-6xl border border-zinc-700 mb-2 aspect-video shadow-2xl shadow-purple-900">
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
  );
};

export default VideoPlayer;
