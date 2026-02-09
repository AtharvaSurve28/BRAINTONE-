import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

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
const VideoInView = ({ src: finalSrc, sx, playOnClick = false, ...props }) => {
    const videoRef = useRef(null);
    const stopTimerRef = useRef(null);
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

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

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
            if (stopTimerRef.current) {
                clearTimeout(stopTimerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!videoRef.current || !hasLoaded) return;

        if (isIntersecting && !playOnClick) {
            handlePlay();
        }
    }, [isIntersecting, hasLoaded, playOnClick]);

    const handlePlay = () => {
        setIsPlaying(true);
        if (videoRef.current) {
            videoRef.current.play().catch(console.error);

            // Set 8s Auto-Stop
            if (stopTimerRef.current) clearTimeout(stopTimerRef.current);
            stopTimerRef.current = setTimeout(() => {
                handleStop();
            }, 8000);
        }
    };

    const handleStop = () => {
        setIsPlaying(false);
        if (stopTimerRef.current) clearTimeout(stopTimerRef.current);

        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; // Reset to beginning for next play
        }
    };

    const handleToggle = (e) => {
        if (!playOnClick) return;
        e.stopPropagation();
        if (isPlaying) {
            handleStop();
        } else {
            handlePlay();
        }
    };

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                bgcolor: '#000',
                cursor: playOnClick ? 'pointer' : 'default',
                borderRadius: 2,
                overflow: 'hidden'
            }}
            onClick={handleToggle}
        >
            <Box
                component="video"
                ref={videoRef}
                src={hasLoaded ? finalSrc : undefined}
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

            {/* Play Button Overlay - Aesthetic matching user request */}
            {playOnClick && !isPlaying && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 2,
                        backgroundColor: 'rgba(0,0,0,0.1)',
                    }}
                >
                    <Box
                        sx={{
                            width: 100,
                            height: 100,
                            borderRadius: '50%',
                            border: '1px solid rgba(255,255,255,0.4)',
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.1)',
                                border: '1px solid rgba(255,255,255,0.8)',
                                backgroundColor: 'rgba(255,255,255,0.15)',
                            }
                        }}
                    >
                        <PlayArrowIcon sx={{ fontSize: 50, color: 'white' }} />
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default VideoInView;
