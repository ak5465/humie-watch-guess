import { useEffect, useRef, useState } from 'react';
import YouTube from 'react-youtube';

export default function YouTubeClipPlayer({
  scene,
  className = '',
  autoPlay = false,
  onEnded,
  hideSpoilers = true,
  featured = false,
}) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const playerRef = useRef(null);
  const endTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (endTimerRef.current) {
        clearInterval(endTimerRef.current);
      }
    };
  }, []);

  const clearEndTimer = () => {
    if (endTimerRef.current) {
      clearInterval(endTimerRef.current);
      endTimerRef.current = null;
    }
  };

  const scheduleEndCheck = (player) => {
    clearEndTimer();
    endTimerRef.current = setInterval(() => {
      const currentTime = player.getCurrentTime?.();
      if (typeof currentTime === 'number' && currentTime >= scene.endSeconds) {
        player.pauseVideo?.();
        clearEndTimer();
        onEnded?.();
      }
    }, 250);
  };

  const handleReady = (event) => {
    playerRef.current = event.target;
    event.target.seekTo(scene.startSeconds, true);
    event.target.playVideo();
    scheduleEndCheck(event.target);
  };

  const handleStateChange = (event) => {
    if (event.data === YouTube.PlayerState.PLAYING) {
      scheduleEndCheck(event.target);
    }

    if (event.data === YouTube.PlayerState.PAUSED || event.data === YouTube.PlayerState.ENDED) {
      clearEndTimer();
    }

    if (event.data === YouTube.PlayerState.ENDED) {
      onEnded?.();
    }
  };

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const useTitleMask = hideSpoilers && !featured;

  if (!isPlaying) {
    return (
      <button
        type="button"
        className={`video-thumb-play ${className}`.trim()}
        onClick={handlePlayClick}
        aria-label="Play clip"
      >
        <img src={scene.thumbnail} alt="" className="video-thumb-play__image" />
        <span className="video-thumb-play__overlay">
          <span className="video-thumb-play__icon">▶</span>
        </span>
        {!hideSpoilers && (
          <span className="video-thumb-play__title">{scene.title}</span>
        )}
      </button>
    );
  }

  return (
    <div className={`video-player ${useTitleMask ? 'video-player--masked' : ''} ${featured ? 'video-player--featured' : ''} ${className}`.trim()}>
      {useTitleMask && <div className="video-player__title-mask" aria-hidden="true" />}
      <YouTube
        videoId={scene.youtubeId}
        className="video-player__iframe-wrap"
        title="Video clip"
        opts={{
          width: '100%',
          height: '100%',
          playerVars: {
            start: scene.startSeconds,
            end: scene.endSeconds,
            autoplay: 1,
            playsinline: 1,
            modestbranding: 1,
            rel: 0,
            controls: featured ? 1 : (hideSpoilers ? 0 : 1),
            iv_load_policy: 3,
            fs: 0,
          },
        }}
        onReady={handleReady}
        onStateChange={handleStateChange}
      />
    </div>
  );
}
