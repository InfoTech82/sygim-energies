"use client";
import { usePathname } from "next/navigation";
import { useMemo, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Truck, Building, Shield, Star, Sparkles, ChevronRight } from "lucide-react";

export default function Hero() {
  const pathname = usePathname();
  const base = useMemo(() => `/${pathname?.split("/")[1] || "fr"}`, [pathname]);
  const [floatingElements, setFloatingElements] = useState<Array<{id: number, x: number, y: number, size: number, delay: number}>>([]);

  const stats = [
    { icon: <Truck className="w-8 h-8" />, value: "200+", label: "Véhicules Articulés", color: "from-green-500 to-green-600" },
    { icon: <Building className="w-8 h-8" />, value: "10M", label: "Capital FCFA", color: "from-green-600 to-green-700" },
    { icon: <Shield className="w-8 h-8" />, value: "Leader", label: "Du Marché", color: "from-green-700 to-green-800" },
    { icon: <Star className="w-8 h-8" />, value: "24/7", label: "Service Client", color: "from-green-400 to-green-500" },
  ];

  useEffect(() => {
    const elements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 5
    }));
    setFloatingElements(elements);
  }, []);

  return (
    <section className="hero-modern min-h-screen flex items-center justify-center pt-20 sm:pt-24 relative overflow-hidden">
      {/* Background Elements - Design Moderne */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-4 sm:right-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-8 sm:left-20 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Floating Elements */}
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute w-1 sm:w-2 h-1 sm:h-2 bg-green-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Logo Principal - Plus visible */}
          <div className="mb-8 sm:mb-12 md:mb-16 animate-fade-in">
            <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 mx-auto mb-4 sm:mb-6 rounded-2xl overflow-hidden shadow-modern-lg">
              <Image
                src="/images/logo.jpg"
                alt="SYGIM ENERGIES Logo"
                fill
                className="object-contain p-2 sm:p-4"
              />
            </div>
          </div>

          {/* Badge SYGIM ENERGIES - Design Moderne */}
          <div className="inline-flex items-center space-x-2 sm:space-x-4 glass-effect rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 mb-8 sm:mb-12 shadow-modern animate-fade-in">
            <div className="relative w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden">
              <Image
                src="/images/logo.jpg"
                alt="SYGIM ENERGIES Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xs sm:text-sm font-bold text-green-700">SYGIM ENERGIES SAS • Capital 10 Milliards FCFA</span>
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
          </div>

          {/* Titre Principal - Design Moderne */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 sm:mb-8 animate-slide-up">
            <div className="text-gradient-3d mb-2 sm:mb-3">SYGIM</div>
            <div className="text-gray-800 mb-2 sm:mb-4">ENERGIES SAS</div>
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600 font-light">
              Leader du Transport Pétrolier
            </div>
          </h1>

          {/* Description - Design Moderne */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 animate-fade-in px-4">
            Commercialisation de produits pétroliers (GASOIL, SUPER, HUILE) et transport spécialisé 
            avec une flotte de plus de 200 véhicules articulés. Votre partenaire de confiance.
          </p>

          {/* Boutons CTA - Design Moderne */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 animate-slide-up px-4">
            <Link href={`${base}/order`} className="w-full sm:w-auto">
              <button className="btn-modern flex items-center justify-center space-x-3 group w-full sm:w-auto px-6 py-3 sm:py-4 text-sm sm:text-base">
                <div className="relative w-4 h-4 sm:w-5 sm:h-5">
                  <Image
                    src="/images/logo.jpg"
                    alt="SYGIM"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-bold">Commander maintenant</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
            
            <Link href={`${base}/services`} className="w-full sm:w-auto">
              <button className="btn-outline-modern flex items-center justify-center space-x-3 group w-full sm:w-auto px-6 py-3 sm:py-4 text-sm sm:text-base">
                <span className="font-semibold">Découvrir nos services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>

          {/* Statistiques Modernes - Design Moderne */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 animate-fade-in px-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className="stat-modern card-3d p-4 sm:p-6" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-modern mb-3 sm:mb-4 group-hover:shadow-modern-lg transition-all duration-500 mx-auto`}>
                  {stat.icon}
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient-modern mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-600 font-semibold text-center">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator - Design Moderne */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-green-600 rounded-full flex justify-center">
              <div className="w-1 h-2 sm:h-3 bg-green-600 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
