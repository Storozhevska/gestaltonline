import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  showBadge?: boolean;
  badgeText?: string;
}

export function VideoPlayer({
  src,
  poster,
  className = "",
  showBadge = false,
  badgeText,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
        setShowControls(false);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
        setShowControls(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        loop
        playsInline
        preload="metadata"
        poster={poster}
        onClick={togglePlay}
        onEnded={() => {
          setIsPlaying(false);
          setShowControls(true);
        }}
      >
        <source src={src} type="video/mp4" />
      </video>

      {showControls && (
        <div
          className="absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer transition-opacity"
          onClick={togglePlay}
        >
          <div className="bg-white/90 rounded-full p-6 hover:scale-110 transition-transform">
            {isPlaying ? (
              <Pause className="text-blue-600" size={48} fill="currentColor" />
            ) : (
              <Play className="text-blue-600" size={48} fill="currentColor" />
            )}
          </div>
        </div>
      )}

      {isPlaying && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          <button
            onClick={togglePlay}
            className="bg-white/90 rounded-full p-3 hover:scale-110 transition-transform shadow-lg"
          >
            <Pause className="text-blue-600" size={24} fill="currentColor" />
          </button>
          <button
            onClick={toggleMute}
            className="bg-white/90 rounded-full p-3 hover:scale-110 transition-transform shadow-lg"
          >
            {isMuted ? (
              <VolumeX className="text-blue-600" size={24} />
            ) : (
              <Volume2 className="text-blue-600" size={24} />
            )}
          </button>
        </div>
      )}

      {showBadge && badgeText && (
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold z-10">
          {badgeText}
        </div>
      )}
    </div>
  );
}