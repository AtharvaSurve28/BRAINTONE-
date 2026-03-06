import React, { useEffect, useRef, useState } from 'react';
import { Box, IconButton, Slider, Stack, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import Replay5Icon from '@mui/icons-material/Replay5';
import Forward5Icon from '@mui/icons-material/Forward5';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

/**
 * VideoInView Component - Performance & UX Refined
 * 
 * Performance:
 * 1. Load-on-Demand: Payload starts only when scrolled near.
 * 2. Click-to-Play: Saves battery and bandwidth.
 * 
 * UX Refinements:
 * 1. 8s Auto-Stop: Automatically resets after 8s.
 * 2. Click-to-Toggle: Toggle play/stop by clicking anywhere on the video.
 * 3. First-Frame Preview: Shows the video content once loaded (no black screen).
 * 4. Aesthetic Design: Glassmorphism play button with thin circle.
 */
const VideoInView = ({
    src,
    poster,
    muted = true,
    loop = true,
    playsInline = true,
    playOnClick = false,
    showControlsOnHover = false,
    autoStopDelay = null,
    sx = {},
    ...props
}) => {
    const videoRef = useRef(null);
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [showControls, setShowControls] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    // Load the src on intersection so browser can show the first frame
                    setHasLoaded(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '200px', // Load slightly earlier for smoother preview
            }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, []);

    useEffect(() => {
        if (!videoRef.current || !hasLoaded) return;

        if (isIntersecting && !playOnClick) {
            handlePlay();
        }
    }, [isIntersecting, hasLoaded, playOnClick]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const updateTime = () => setCurrentTime(video.currentTime);
        const updateDuration = () => setDuration(video.duration);

        video.addEventListener('timeupdate', updateTime);
        video.addEventListener('loadedmetadata', updateDuration);

        return () => {
            video.removeEventListener('timeupdate', updateTime);
            video.removeEventListener('loadedmetadata', updateDuration);
        };
    }, [hasLoaded]);

    // Auto-stop timer
    useEffect(() => {
        let timer;
        if (isPlaying && autoStopDelay) {
            timer = setTimeout(() => {
                handleStop();
            }, autoStopDelay);
        }
        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [isPlaying, autoStopDelay]);

    const handlePlay = () => {
        setIsPlaying(true);
        if (videoRef.current) {
            videoRef.current.play().catch(console.error);
        }
    };

    const handleStop = () => {
        setIsPlaying(false);
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    const handleSeek = (event, newValue) => {
        if (videoRef.current) {
            videoRef.current.currentTime = newValue;
            setCurrentTime(newValue);
        }
    };

    const handleBack5 = (e) => {
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 5);
        }
    };

    const handleForward5 = (e) => {
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.currentTime = Math.min(duration, videoRef.current.currentTime + 5);
        }
    };

    const toggleFullscreen = (e) => {
        e.stopPropagation();
        if (!containerRef.current) return;

        if (!document.fullscreenElement) {
            containerRef.current.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const clickTimeout = useRef(null);

    const handleClick = (e) => {
        if (clickTimeout.current) {
            clearTimeout(clickTimeout.current);
            clickTimeout.current = null;
            toggleFullscreen(e);
        } else {
            clickTimeout.current = setTimeout(() => {
                handleToggle(e);
                clickTimeout.current = null;
            }, 300); // 300ms window for double-click
        }
    };

    const handleToggle = (e) => {
        if (!playOnClick) return;
        if (isPlaying) {
            handleStop();
        } else {
            handlePlay();
        }
    };

    return (
        <Box
            ref={containerRef}
            sx={{
                position: 'relative',
                width: '100%',
                height: isFullscreen ? '100vh' : '100%',
                bgcolor: '#000',
                cursor: playOnClick ? 'pointer' : 'default',
                borderRadius: isFullscreen ? 0 : 2,
                overflow: 'hidden'
            }}
            onClick={handleClick}
            onMouseEnter={() => showControlsOnHover && setShowControls(true)}
            onMouseLeave={() => showControlsOnHover && setShowControls(false)}
        >
            <Box
                component="video"
                ref={videoRef}
                src={hasLoaded ? src : undefined}
                poster={poster}
                {...props}
                preload={hasLoaded ? "metadata" : "none"}
                sx={{
                    ...sx,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    pointerEvents: 'none', // All clicks go to the container Box for toggle
                }}
            />

            {/* UI Overlays */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 2,
                    backgroundColor: showControls || !isPlaying ? 'rgba(0,0,0,0.3)' : 'transparent',
                    transition: 'background-color 0.3s ease',
                    opacity: showControls || !isPlaying ? 1 : 0,
                    pointerEvents: 'none' // Allow clicks to pass through to the main container
                }}
            >
                {/* Big Play/Pause Button in Center */}
                {(!isPlaying || showControls) && (
                    <Box
                        sx={{
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            border: '1px solid rgba(255,255,255,0.4)',
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            transition: 'all 0.3s ease',
                            mb: 2,
                            pointerEvents: 'auto'
                        }}
                    >
                        {isPlaying ? (
                            <PauseIcon sx={{ fontSize: 40, color: 'white' }} />
                        ) : (
                            <PlayArrowIcon sx={{ fontSize: 40, color: 'white' }} />
                        )}
                    </Box>
                )}

                {/* Bottom Control Bar */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        p: 2,
                        background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                        transform: showControls ? 'translateY(0)' : 'translateY(100%)',
                        transition: 'transform 0.3s ease',
                        pointerEvents: 'auto',
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <Stack direction="row" spacing={2} alignItems="center">
                        <IconButton onClick={handleBack5} sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                            <Replay5Icon />
                        </IconButton>

                        <Typography sx={{ color: 'white', fontSize: '0.8rem', minWidth: 40 }}>
                            {formatTime(currentTime)}
                        </Typography>

                        <Slider
                            size="small"
                            value={currentTime}
                            max={duration || 100}
                            onChange={handleSeek}
                            sx={{
                                color: '#e74c3c',
                                '& .MuiSlider-thumb': {
                                    width: 12,
                                    height: 12,
                                    transition: '0.3s ease-in-out',
                                    '&:before': { boxShadow: 'none' },
                                    '&:hover, &.Mui-focusVisible': {
                                        boxShadow: '0 0 0 8px rgba(231, 76, 60, 0.16)',
                                    },
                                },
                            }}
                        />

                        <Typography sx={{ color: 'white', fontSize: '0.8rem', minWidth: 40 }}>
                            {formatTime(duration)}
                        </Typography>

                        <IconButton onClick={handleForward5} sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                            <Forward5Icon />
                        </IconButton>

                        <IconButton onClick={toggleFullscreen} sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                            {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
                        </IconButton>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default VideoInView;
