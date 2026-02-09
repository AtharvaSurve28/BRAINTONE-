import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';

/**
 * VideoInView Component
 * 
 * Performance Optimized:
 * 1. Loads 0 bytes initially (no src set until in view).
 * 2. IntersectionObserver sets the src and triggers play.
 * 3. Pauses/Unloads if necessary (optional).
 */
const VideoInView = ({ src: finalSrc, sx, ...props }) => {
    const videoRef = useRef(null);
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If it enters view, we set isIntersecting to true
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    setHasLoaded(true); // Once it enters, we mark it as loaded so it stays loaded
                    observer.unobserve(entry.target); // Stop observing after it's loaded to save resources
                }
            },
            {
                threshold: 0.1, // Trigger if at least 10% is visible
                rootMargin: '100px', // Start loading 100px before it enters the viewport
            }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!videoRef.current || !hasLoaded) return;

        // IntersectionObserver has marked it to load
        if (isIntersecting) {
            videoRef.current.play().catch((error) => {
                console.warn("Video play failed:", error);
            });
        }
    }, [isIntersecting, hasLoaded]);

    return (
        <Box
            component="video"
            ref={videoRef}
            // Only set the src once it's been triggered by the IntersectionObserver
            src={hasLoaded ? finalSrc : undefined}
            {...props}
            sx={{
                ...sx,
                transition: 'opacity 0.6s ease-in-out',
                opacity: hasLoaded ? 1 : 0, // Fade in when loaded
            }}
        />
    );
};

export default VideoInView;
