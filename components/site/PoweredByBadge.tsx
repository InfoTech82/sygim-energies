'use client';

import React from "react";
import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";

type PoweredByBadgeProps = {
    name?: string;
    href?: string;
    email?: string;
};

export const PoweredByBadge: React.FC<PoweredByBadgeProps> = ({
    name = "TechmaCorporation",
    href = "mailto:informatiquetechno03@gmail.com?subject=Contact%20depuis%20SYGIM%20ENERGIES",
    email = "informatiquetechno03@gmail.com",
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40"
        >
            <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-green-600/90 to-green-500/90 backdrop-blur-sm rounded-full shadow-lg border border-green-400/30 hover:border-green-300/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {/* Effet de glow au hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/0 via-green-500/20 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
                
                <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white relative z-10" />
                <span className="text-[10px] sm:text-xs font-semibold text-white relative z-10 whitespace-nowrap">
                    Powered by <span className="font-bold">{name}</span>
                </span>
                <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/80 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300 relative z-10 hidden sm:block" />
            </motion.a>
        </motion.div>
    );
};

export default PoweredByBadge;

