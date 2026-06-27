"use client";

import { useState, useRef } from "react";
import { AnimatePresence as FramerAnimatePresence, motion as FramerMotion } from "framer-motion";
import { Play, X, Volume2, VolumeX } from "lucide-react";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";

const frames = [
  {
    title: "Culinary Theatre",
    subtitle: "Flaky Parota Prep",
    video: "/videos/parota_reel.mp4",
    gridClass: "md:col-span-1 md:row-span-2 aspect-[9/16] md:aspect-auto"
  },
  {
    title: "Colombo Elegance",
    subtitle: "Heritage Sanctuary",
    video: "/videos/colombo_vibe.mov",
    gridClass: "md:col-span-1 md:row-span-1 aspect-square md:aspect-auto"
  },
  {
    title: "Kandy Vibe",
    subtitle: "Mountain Retreat",
    video: "/videos/kandy_vibe.mov",
    gridClass: "md:col-span-1 md:row-span-1 aspect-square md:aspect-auto"
  },
  {
    title: "Kerala Houseboat",
    subtitle: "Backwater Dining",
    video: "/videos/experience.mov",
    gridClass: "md:col-span-1 md:row-span-2 aspect-[9/16] md:aspect-auto"
  },
];

export default function HomeGallery() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>("");
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleMouseEnter = (idx: number) => {
    const video = videoRefs.current[idx];
    if (video) {
      video.play().catch(() => {});
    }
  };

  const handleMouseLeave = (idx: number) => {
    const video = videoRefs.current[idx];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  const openLightbox = (videoUrl: string, title: string) => {
    setActiveVideo(videoUrl);
    setActiveTitle(title);
  };

  const closeLightbox = () => {
    setActiveVideo(null);
  };

  return (
    <SectionShell variant="void" id="gallery">
      <SectionHeader 
        label="Cinematic Frames" 
        title="Journey in Motion"
        subtitle="Hover to play the culinary theatre, click to step inside."
        align="center"
        lightMode
      />

      {/* Asymmetric Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-5 md:h-[750px] max-w-6xl mx-auto">
        {frames.map((frame, idx) => (
          <div 
            key={idx} 
            className={`relative rounded-[3rem] p-3 md:p-4 overflow-hidden glass-card group cursor-zoom-in ${frame.gridClass}`}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
            onClick={() => openLightbox(frame.video, frame.subtitle)}
          >
            <video 
              ref={(el) => { videoRefs.current[idx] = el; }}
              src={frame.video} 
              muted
              loop
              playsInline
              className="w-full h-full object-cover rounded-[2.5rem] transition-all duration-[1200ms] group-hover:scale-105 will-change-transform"
            />
            
            {/* Play hover prompt */}
            <div className="absolute inset-0 bg-surface-container-lowest/30 opacity-100 group-hover:opacity-0 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
              <div className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-brand-golden bg-surface-container-low/50">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30 pointer-events-none rounded-[3rem]" />
            
            <div className="absolute bottom-10 left-10 right-10 z-10 transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
              <span className="font-label-sm text-[12px] bg-saffron-gold text-on-surface px-3 py-1.5 rounded-full block mb-2 w-fit font-bold">
                {frame.title}
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface tracking-wide">
                {frame.subtitle}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Video Lightbox */}
      <FramerAnimatePresence>
        {activeVideo && (
          <FramerMotion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[99999] bg-surface-container-lowest flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 p-3 bg-surface-container-low border border-outline-variant/30 rounded-full text-on-surface hover:bg-saffron-gold hover:text-on-surface transition-all z-50 shadow-2xl"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Media controls wrapper */}
            <FramerMotion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 260 }}
              className="relative w-full max-w-5xl aspect-video rounded-[3rem] overflow-hidden shadow-2xl border border-outline-variant/30 bg-surface-container-lowest p-4 glass-card"
              onClick={(e) => e.stopPropagation()}
            >
              <video 
                src={activeVideo} 
                autoPlay
                controls
                muted={isMuted}
                loop
                playsInline
                className="w-full h-full object-cover rounded-[2.5rem]"
              />

              {/* Title & Mute toggle overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center z-20 pointer-events-auto bg-surface-container-lowest p-4 rounded-sm border border-outline-variant/30">
                <div>
                  <span className="text-[8px] tracking-[0.2em] text-brand-golden font-bold block mb-0.5">Indian Kitchen Reel</span>
                  <h4 className="font-headline-md text-headline-md text-on-surface tracking-wide">{activeTitle}</h4>
                </div>
                
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 border border-outline-variant/30 hover:border-saffron-gold rounded-full text-brand-golden hover:text-on-surface transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>
            </FramerMotion.div>
          </FramerMotion.div>
        )}
      </FramerAnimatePresence>
    </SectionShell>
  );
}
