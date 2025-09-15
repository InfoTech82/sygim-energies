"use client";
import { Building2, Target, Sparkles, Award, ArrowRight, ChevronRight, Star, Zap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function AboutPage() {
  const pathname = usePathname();
  const base = useMemo(() => `/${pathname?.split("/")[1] || "fr"}`, [pathname]);

  const milestones = [
    { year: "Fondation", title: "SYGIM ENERGIES SAS", description: "Création avec un capital de 10 Milliards FCFA", icon: <Building2 className="w-6 h-6" />, color: "from-green-500 to-green-600" },
    { year: "Expansion", title: "Flotte de 200+ Véhicules", description: "Développement d'une flotte conséquente", icon: <Zap className="w-6 h-6" />, color: "from-green-600 to-green-700" },
    { year: "Leadership", title: "Position de Leader", description: "Leader incontournable du marché", icon: <Award className="w-6 h-6" />, color: "from-green-700 to-green-800" },
    { year: "International", title: "Expansion Bamako", description: "Ouverture de stations au Mali", icon: <Star className="w-6 h-6" />, color: "from-green-400 to-green-500" },
  ];

  return (
    <div className="pt-20 sm:pt-24">
      {/* Hero About - Design Moderne */}
      <section className="hero-modern py-16 sm:py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center space-x-2 sm:space-x-4 glass-effect rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 mb-8 sm:mb-12 shadow-modern">
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
              <span className="text-xs sm:text-sm font-bold text-green-700">À Propos de SYGIM ENERGIES SAS</span>
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6 animate-slide-up">
              <span className="text-gradient-3d">Leader du</span>{" "}
              <span className="text-gray-800">Transport Pétrolier</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-8 sm:mb-12 max-w-4xl mx-auto px-4">
              SYGIM ENERGIES SAS au capital de 10 Milliards FCFA est le leader incontournable 
              dans la commercialisation de produits pétroliers et le transport spécialisé.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Design Moderne */}
      <section className="section-modern bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 max-w-7xl mx-auto">
            <div className="card-modern card-3d animate-slide-up p-6 sm:p-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center text-white shadow-modern mb-4 sm:mb-6 group-hover:shadow-modern-lg transition-all duration-500">
                <Target className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 group-hover:text-gradient-modern transition-all duration-500">Notre Mission</h3>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Commercialiser des produits pétroliers de qualité (GASOIL, SUPER, HUILE) et 
                fournir des services de transport spécialisés avec une flotte moderne de plus de 
                200 véhicules articulés, en privilégiant nos employés et l&apos;environnement.
              </p>
            </div>

            <div className="card-modern card-3d animate-slide-up p-6 sm:p-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center text-white shadow-modern mb-4 sm:mb-6 group-hover:shadow-modern-lg transition-all duration-500">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 group-hover:text-gradient-modern transition-all duration-500">Notre Vision</h3>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Maintenir notre position de LEADER incontournable dans la vente et location de 
                véhicules pétroliers, tout en étendant notre présence avec nos stations à Bamako 
                et à l&apos;international pour une vision mondiale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parcours - Design Moderne */}
      <section className="section-modern bg-gradient-to-br from-green-50 to-gray-50 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
              <span className="text-gradient-3d">Notre</span>{" "}
              <span className="text-gray-800">Parcours</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Découvrez les étapes clés qui ont fait de SYGIM ENERGIES le leader du transport pétrolier
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="stat-modern card-3d animate-scale-in p-6 sm:p-8" style={{animationDelay: `${index * 0.2}s`}}>
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${milestone.color} rounded-2xl flex items-center justify-center text-white shadow-modern mb-4 sm:mb-6 group-hover:shadow-modern-lg transition-all duration-500 mx-auto`}>
                  {milestone.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-black text-gradient-modern mb-3 sm:mb-4">{milestone.year}</div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">{milestone.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Design Moderne */}
      <section className="section-modern gradient-green text-white relative overflow-hidden py-12 sm:py-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 animate-fade-in">
            Découvrez Nos Solutions
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-12 sm:mb-16 opacity-90 max-w-4xl mx-auto animate-slide-up px-4">
            Explorez nos services et découvrez pourquoi nous sommes le leader du transport pétrolier
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 animate-fade-in">
            <Link href={`${base}/services`} className="w-full sm:w-auto">
              <button className="bg-white text-green-600 hover:bg-gray-100 px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl transition-all duration-300 shadow-modern hover:shadow-modern-lg flex items-center justify-center space-x-3 sm:space-x-4 group w-full sm:w-auto">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Nos Services</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
            
            <Link href={`${base}/contact`} className="w-full sm:w-auto">
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl transition-all duration-300 group w-full sm:w-auto flex items-center justify-center">
                <span>Nous Contacter</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}