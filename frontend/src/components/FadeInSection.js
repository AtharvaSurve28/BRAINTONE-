import React, { useState, useEffect, useRef } from 'react';

const FadeInSection = (props) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    // Once it's visible, we don't need to observe it anymore
                    observer.unobserve(domRef.current);
                }
            });
        }, {
            threshold: 0.15, // Trigger when 15% of the element is visible
            rootMargin: '50px' // Start animation 50px before element enters viewport
        });

        const currentRef = domRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
            style={{
                ...props.style,
                width: props.fullWidth ? '100%' : 'auto'
            }}
        >
            {props.children}
        </div>
    );
};

export default FadeInSection;
