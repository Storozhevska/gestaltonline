import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface SmallVideoPlayerProps {
  src: string;
  poster?: string;
}

export function SmallVideoPlayer({ src, poster }: SmallVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const startVideo = () => {
    setVideoLoaded(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }, 50);
  };

  const togglePlay = () => {
    if (!videoLoaded) {
      startVideo();
      return;
    }

    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full h-full">
      {!videoLoaded && poster && (
        <img
          src={poster}
          loading="lazy"
          className="w-full h-full object-cover"
          onClick={startVideo}
        />
      )}

      {videoLoaded && (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          playsInline
          preload="none"
          poster={poster}
          onClick={togglePlay}
          onEnded={() => setIsPlaying(false)}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      {!isPlaying && (
        <div
          className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer"
          onClick={togglePlay}
        >
          <div className="bg-white/90 rounded-full p-3 hover:scale-110 transition-transform">
            <Play className="text-blue-600" size={24} fill="currentColor" />
          </div>
        </div>
      )}

      {isPlaying && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent">
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            <button
              onClick={togglePlay}
              className="bg-white/90 rounded-full p-2 hover:scale-110 transition-transform shadow-lg"
            >
              <Pause className="text-blue-600" size={16} fill="currentColor" />
            </button>
            <button
              onClick={toggleMute}
              className="bg-white/90 rounded-full p-2 hover:scale-110 transition-transform shadow-lg"
            >
              {isMuted ? (
                <VolumeX className="text-blue-600" size={16} />
              ) : (
                <Volume2 className="text-blue-600" size={16} />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}