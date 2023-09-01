"use client"
import { motion } from 'framer-motion';
interface Square {
    color: string;
    width: number;
    height: number;
    animated: boolean;
}

export default function Square(props:Square) {
    const {animated, color, width, height} = props;
    
    // const strokeTransition = {
    //     delay: 4,
    //     duration: 5,
    //     ease: [0.6, 0.01, -0.05, 0.95]
    // };
    const squareTransition = {
        delay: 1,
        duration: 2,
        ease: "easeInOut",
    }
    const squareVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: squareTransition,
        }
    }

    
    return (
        <motion.svg className="svg-rect-container" height={height} width={width}
            viewBox={`0 0 ${width} ${height}`}
            initial="hidden"
            animate="visible"
            variants={!animated ? undefined : squareVariant}
        >
            {/* <motion.circle
                cx="150" 
                cy="150" 
                r="150" 
                fill="none" 
                stroke={strokeColor} 
                stroke-width="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={!animated ? undefined : strokeTransition}
                >
            
            </motion.circle> */}
            <motion.rect
                width={width}
                height={height}
                fill={color}
            >

            </motion.rect>

        </motion.svg>
    )
}