"use client";
import { usePathname } from "next/navigation";
import { useMemo, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Truck, Building, Shield, Star, Sparkles, ChevronRight } from "lucide-react";

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
    <section className="hero-modern min-h-screen flex items-center justify-center pt-24 relative overflow-hidden">
      {/* Background Elements - Design Moderne */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Floating Elements */}
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute w-2 h-2 bg-green-400 rounded-full opacity-30 animate-pulse"
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

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Logo Principal - Plus visible */}
          <div className="mb-16 animate-fade-in">
            <div className="relative w-64 h-64 mx-auto mb-6 rounded-2xl overflow-hidden shadow-modern-lg">
              <Image
                src="/images/logo.jpg"
                alt="SYGIM ENERGIES Logo"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>

          {/* Badge SYGIM ENERGIES - Design Moderne */}
          <div className="inline-flex items-center space-x-4 glass-effect rounded-full px-8 py-4 mb-12 shadow-modern animate-fade-in">
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image
                src="/images/logo.jpg"
                alt="SYGIM ENERGIES Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm font-bold text-green-700">SYGIM ENERGIES SAS • Capital 10 Milliards FCFA</span>
            <Sparkles className="w-4 h-4 text-green-500" />
          </div>

          {/* Titre Principal - Design Moderne */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 animate-slide-up">
            <div className="text-gradient-3d mb-3">SYGIM</div>
            <div className="text-gray-800 mb-4">ENERGIES SAS</div>
            <div className="text-2xl md:text-3xl lg:text-4xl text-gray-600 font-light">
              Leader du Transport Pétrolier
            </div>
          </h1>

          {/* Description - Design Moderne */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in">
            Commercialisation de produits pétroliers (GASOIL, SUPER, HUILE) et transport spécialisé 
            avec une flotte de plus de 200 véhicules articulés. Votre partenaire de confiance.
          </p>

          {/* Boutons CTA - Design Moderne */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-slide-up">
            <Link href={`${base}/order`}>
              <button className="btn-modern flex items-center space-x-3 group">
                <div className="relative w-5 h-5">
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
            
            <Link href={`${base}/services`}>
              <button className="btn-outline-modern flex items-center space-x-3 group">
                <span className="font-semibold">Découvrir nos services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>

          {/* Statistiques Modernes - Design Moderne */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
            {stats.map((stat, index) => (
              <div key={stat.label} className="stat-modern card-3d" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-modern mb-4 group-hover:shadow-modern-lg transition-all duration-500`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gradient-modern mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator - Design Moderne */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-green-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-green-600 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
