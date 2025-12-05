import { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    animation?: 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' | 'scale';
}

export function AnimatedSection({
    children,
    className = '',
    delay = 0,
    animation = 'fade-up'
}: AnimatedSectionProps) {
    const { ref, isVisible } = useScrollAnimation({
        threshold: 0.1,
        triggerOnce: true,
    });

    const getAnimationClass = () => {
        const baseClasses = 'transition-all duration-1000 ease-out';

        if (!isVisible) {
            switch (animation) {
                case 'fade-up':
                    return `${baseClasses} opacity-0 translate-y-12`;
                case 'fade-in':
                    return `${baseClasses} opacity-0`;
                case 'fade-left':
                    return `${baseClasses} opacity-0 -translate-x-12`;
                case 'fade-right':
                    return `${baseClasses} opacity-0 translate-x-12`;
                case 'scale':
                    return `${baseClasses} opacity-0 scale-95`;
                default:
                    return `${baseClasses} opacity-0 translate-y-12`;
            }
        }

        return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
    };

    return (
        <div
            ref={ref}
            className={`${getAnimationClass()} ${className}`}
            style={{
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}
