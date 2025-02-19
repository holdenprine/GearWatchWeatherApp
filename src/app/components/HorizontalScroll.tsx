"use client";
import { useRef } from "react";

// strict typing required for handling props
type HorizontalScrollProps = {
    children: React.ReactNode;
    className?: string;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({children, className = ''}) => {

    // strict typing for handling values, should be concretely number for mouse position and populate some value for useRef
    const scrollRef = useRef<HTMLDivElement>(null);
    let isDown = false;
    let startX: number;
    let scrollLeft: number;
    
    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        if(!scrollRef.current) return;
        isDown = true;
        startX = event.pageX - scrollRef.current.offsetLeft;
        scrollLeft = scrollRef.current.scrollLeft;
        scrollRef.current.style.cursor = 'grabbing';

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    }    
        const handleMouseMove = (event: MouseEvent) => {
            if (!isDown || !scrollRef.current) return;
            event.preventDefault();
            const x = event.pageX - scrollRef.current.offsetLeft;
            const walk = (x - startX) * 1.5; // Adjust scroll speed
            scrollRef.current.scrollLeft = scrollLeft - walk;
        
        }
        
        const handleMouseUp = () => {
            if(!scrollRef.current) return;
            isDown = false;
            scrollRef.current.style.cursor = 'grab';
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }
    

  return (
    <div className={`${className} overflow-x-scroll cursor-grab select-none`} ref={scrollRef} onMouseDown={handleMouseDown}>
        {children}
        </div>
  )
}

export default HorizontalScroll