'use client';

import React from "react";
import { motion } from "framer-motion";

type WatermarkProps = {
    text?: string;
    opacity?: number;
};

export const Watermark: React.FC<WatermarkProps> = ({
    text = "TechmaCorporation",
    opacity = 0.02,
}) => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: opacity }}
                transition={{ duration: 1.5, delay: 2 }}
                className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] origin-center"
                style={{
                    fontSize: 'clamp(6rem, 18vw, 12rem)',
                    fontWeight: 900,
                    color: '#16a34a',
                    whiteSpace: 'nowrap',
                    userSelect: 'none',
                    fontFamily: 'var(--font-geist-sans)',
                    letterSpacing: '0.1em',
                }}
            >
                {text}
            </motion.div>
        </div>
    );
};

export default Watermark;

