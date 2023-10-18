'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
interface Carousel {
    projectData: {
        id: number;
        featured: boolean;
        title: string;
        desc: string;
        image: string;
        tag: string[];
        link: string;
    }[]
} 

export default function Carousel(props: Carousel) { 
    const { projectData } = props;
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === projectData.length ? 0 : prevIndex + 1
      );
    };
    const handlePrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? projectData.length - 1 : prevIndex - 1
      );
    };
    const handleDotClick = (dotIndex: number) => {
      setCurrentIndex(dotIndex);
    };
    return (
        <></>
    )
}