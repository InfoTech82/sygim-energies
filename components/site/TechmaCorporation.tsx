'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Theme = "light" | "dark";

type Logos = {
    light: string;
    dark: string;
};

type TechmaCorporationProps = {
    theme?: Theme;
    logos?: Logos;
    name?: string;
    services?: string[];
    email?: string;
    phone?: string;
    href?: string;
    style?: React.CSSProperties;
    linkProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
    imageSize?: { width?: number; height?: number; quality?: number };
};

// default configuration that can be reused or extended externally
export const defaultTechmaCorporationConfig = {
    theme: "dark" as Theme,
    logos: {
        light: "/s1.png",
        dark: "/s1.png",
    } as Logos,
    name: "TechmaCorporation",
    services: ["Site web & développement", "Applications Web, Mobile & Desktop, Logos / Affiches / Divers"],
    email: "informatiquetechno03@gmail.com",
    phone: "+223 82 72 14 69",
    href:
        "mailto:informatiquetechno03@gmail.com?subject=Contact%20depuis%20SYGIM%20ENERGIES",
    imageSize: { width: 70, height: 70, quality: 80 },
};

export const TechmaCorporation: React.FC<TechmaCorporationProps> = (props) => {
    // merge props with default config so everything is overridable
    const {
        theme,
        logos,
        name,
        services,
        email,
        phone,
        href,
        style,
        linkProps,
        imageSize,
    } = { ...defaultTechmaCorporationConfig, ...props, logos: { ...defaultTechmaCorporationConfig.logos, ...(props.logos || {}) } };

    const selectedLogo = logos[theme as Theme] || logos.light;
    const isDark = theme === "dark";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
            style={style}
        >
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
            >
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ouvrir le site ${name} dans un nouvel onglet`}
                    title={`${name} — développement web`}
                    className={`
                        group relative inline-flex items-center gap-4
                        px-6 py-4 rounded-xl
                        ${isDark 
                            ? 'bg-white/10 backdrop-blur-sm border border-white/20 text-white' 
                            : 'bg-white/90 border border-slate-200 text-gray-900'
                        }
                        transition-all duration-300
                        hover:border-green-400/50 hover:shadow-lg hover:shadow-green-500/20
                    `}
                    {...linkProps}
                >
                {/* Effet de glow au hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                
                {/* Logo avec animation */}
                <motion.div
                    className="relative flex-shrink-0"
                    whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                >
                    <div className={`
                        rounded-xl p-2
                        ${isDark ? 'bg-gray-800/50' : 'bg-slate-100'}
                        ring-2 ring-offset-2
                        ${isDark ? 'ring-green-500/30 ring-offset-gray-900' : 'ring-slate-300 ring-offset-white'}
                        group-hover:ring-green-500/50 transition-all duration-300
                    `}>
                        <Image
                            src={selectedLogo}
                            alt={`Logo ${name}`}
                            width={imageSize.width}
                            height={imageSize.height}
                            quality={imageSize.quality}
                            loading="lazy"
                            className="drop-shadow-md"
                        />
                    </div>
                </motion.div>

                {/* Informations */}
                <div className="flex flex-col gap-1 min-w-0">
                    <motion.span
                        className={`
                            font-bold text-base
                            ${isDark ? 'text-white' : 'text-gray-900'}
                            group-hover:text-green-400 transition-colors duration-300
                        `}
                    >
                        {name}
                    </motion.span>
                    
                    {services && services.length > 0 && (
                        <div className="flex flex-col gap-0.5">
                            {services.map((s, i) => (
                                <motion.small
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.3 }}
                                    className={`
                                        text-xs leading-tight
                                        ${isDark ? 'text-gray-400' : 'text-gray-600'}
                                        group-hover:text-gray-300 transition-colors duration-300
                                    `}
                                >
                                    {s}
                                </motion.small>
                            ))}
                        </div>
                    )}
                    
                    <motion.small
                        className={`
                            text-xs font-medium mt-1
                            ${isDark ? 'text-green-400' : 'text-green-600'}
                            group-hover:underline transition-all duration-300
                        `}
                        whileHover={{ x: 2 }}
                    >
                        {email}
                    </motion.small>
                    
                    {phone && (
                        <motion.a
                            href={`tel:${phone.replace(/\s/g, '')}`}
                            className={`
                                text-xs font-medium mt-1
                                ${isDark ? 'text-green-400' : 'text-green-600'}
                                hover:underline transition-all duration-300
                            `}
                            whileHover={{ x: 2 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {phone}
                        </motion.a>
                    )}
                </div>

                {/* Icône de flèche au hover */}
                <motion.svg
                    className={`
                        w-5 h-5 flex-shrink-0
                        ${isDark ? 'text-gray-400' : 'text-gray-500'}
                        group-hover:text-green-400
                        transition-colors duration-300
                    `}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
            </a>
            </motion.div>
        </motion.div>
    );
};

export default TechmaCorporation;

