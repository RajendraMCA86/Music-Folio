import React from "react";
import Speeddial from "./Speeddial";
import { Youtube, Instagram, Facebook, Twitter } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <>
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
    </>
  );
};
export default AboutSection;
