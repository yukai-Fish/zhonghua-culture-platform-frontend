import { useEffect, useRef, useState } from 'react';
import { cultureAssets } from '../../data/assets';

interface LongmenVideoDemoProps {
  openSignal?: number;
}

export function LongmenVideoDemo({ openSignal = 0 }: LongmenVideoDemoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const previousSignal = useRef(openSignal);
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    void videoRef.current?.play();
  };

  const toggleVideo = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (video.paused) {
      void video.play();
      return;
    }

    video.pause();
  };

  useEffect(() => {
    if (openSignal !== previousSignal.current) {
      previousSignal.current = openSignal;
      playVideo();
    }
  }, [openSignal]);

  return (
    <section className="experience-module longmen-exhibit">
      <h3 className="longmen-video-title">龙门月照，石佛含光</h3>
      <div className={`longmen-player ${isPlaying ? 'is-playing' : ''}`}>
        <video
          ref={videoRef}
          src={cultureAssets.longmenVideo}
          poster={cultureAssets.longmenCover}
          controls
          playsInline
          preload="metadata"
          onClick={(event) => event.stopPropagation()}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        />
        {!isPlaying && (
          <img
            className="longmen-player-poster"
            src={cultureAssets.longmenCover}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />
        )}
      </div>
    </section>
  );
}
