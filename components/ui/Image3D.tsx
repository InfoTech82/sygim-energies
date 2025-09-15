"use client";
import Image from "next/image";
import { useState } from "react";

interface Image3DProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  style3d?: "card" | "float" | "hover" | "gallery";
}

export default function Image3D({ 
  src, 
  alt, 
  width = 400, 
  height = 300, 
  className = "", 
  priority = false,
  style3d = "card"
}: Image3DProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const getStyle3DClasses = () => {
    switch (style3d) {
      case "card":
        return "card-3d overflow-hidden p-0 hover:scale-105";
      case "float":
        return "float-3d rounded-2xl shadow-2xl hover:shadow-3xl";
      case "hover":
        return "rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300";
      case "gallery":
        return "stat-3d overflow-hidden p-0 hover:scale-110";
      default:
        return "rounded-lg shadow-lg";
    }
  };

  return (
    <div className={`relative ${getStyle3DClasses()} ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={`w-full h-full object-cover transition-all duration-500 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        onLoad={() => setIsLoaded(true)}
      />
      
      {/* Overlay 3D au hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-300"></div>
      
      {/* Effet de brillance */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent hover:via-white/20 transition-all duration-700 transform -skew-x-12 -translate-x-full hover:translate-x-full"></div>
    </div>
  );
}
