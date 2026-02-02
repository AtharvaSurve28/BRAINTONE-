import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';

const VideoInView = ({ src, sx, ...props }) => {
    const videoRef = useRef(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            {
                threshold: 0.1, // Play if at least 10% is visible
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
        if (!videoRef.current) return;

        if (isIntersecting) {
            videoRef.current.play().catch((error) => {
                // Autoplay might be blocked if not muted, but we usually pass muted: true
                console.warn("Video play failed:", error);
            });
        } else {
            videoRef.current.pause();
        }
    }, [isIntersecting]);

    return (
        <Box
            component="video"
            ref={videoRef}
            src={src}
            {...props}
            sx={{
                ...sx,
                transition: 'opacity 0.5s ease-in-out',
            }}
        />
    );
};

export default VideoInView;
