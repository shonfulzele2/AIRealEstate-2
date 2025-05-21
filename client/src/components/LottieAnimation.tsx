import { useMemo, useRef, useEffect, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { cn } from "@/lib/utils";

interface LottieAnimationProps {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onComplete?: () => void;
  onHoverPlay?: boolean;
  speed?: number;
  hasVisiblitySensor?: boolean;
}

export const LottieAnimation = ({
  animationData,
  loop = true,
  autoplay = true,
  className,
  style,
  onComplete,
  onHoverPlay = false,
  speed = 1,
  hasVisiblitySensor = false,
}: LottieAnimationProps) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(!hasVisiblitySensor);
  const [isHovering, setIsHovering] = useState(false);
  
  const memorizedAnimationData = useMemo(() => animationData, [animationData]);
  
  useEffect(() => {
    if (lottieRef.current) {
      if (onHoverPlay) {
        if (isHovering) {
          lottieRef.current.play();
        } else {
          lottieRef.current.pause();
        }
      }
    }
  }, [isHovering, onHoverPlay]);
  
  useEffect(() => {
    if (!hasVisiblitySensor) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasVisiblitySensor, isVisible]);
  
  useEffect(() => {
    if (lottieRef.current && isVisible) {
      lottieRef.current.setSpeed(speed);
    }
  }, [speed, isVisible]);

  return (
    <div 
      ref={containerRef}
      className={cn("lottie-container", className)}
      style={style}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isVisible && (
        <Lottie
          lottieRef={lottieRef}
          animationData={memorizedAnimationData}
          loop={loop}
          autoplay={!onHoverPlay && autoplay}
          onComplete={onComplete}
          className="w-full h-full"
        />
      )}
    </div>
  );
};