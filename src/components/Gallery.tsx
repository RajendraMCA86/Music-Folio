const GallerySection= () => {

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

return(
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
);
};
export default GallerySection;
