"use client";
import { Building2, Handshake, Award, Globe, Star, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

// Composant pour afficher les logos des partenaires avec fallback
const PartnerLogo = ({ 
  src, 
  alt, 
  fallbackIcon, 
  className = "" 
}: { 
  src: string; 
  alt: string; 
  fallbackIcon: React.ReactNode; 
  className?: string; 
}) => {
  const [imageError, setImageError] = useState(false);
  
  if (imageError) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <div className="text-center">
          <div className="text-4xl sm:text-5xl mb-2">{fallbackIcon}</div>
          <div className="text-xs text-gray-400">{alt}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${className} relative`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        onError={() => setImageError(true)}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  );
};

export default function PartnersPage() {
  const pathname = usePathname();
  const base = useMemo(() => `/${pathname?.split("/")[1] || "fr"}`, [pathname]);

  const partners = [
    {
      name: "TotalEnergies",
      description: "Leader mondial de l'énergie multi-énergies",
      sector: "Énergie",
      country: "France",
      logo: "/images/partners/totalenergies.png",
      fallbackIcon: "🛢️",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      textColor: "text-blue-600",
      features: ["Production pétrolière", "Énergies renouvelables", "Innovation technologique"]
    },
    {
      name: "ORYX Energies",
      description: "Distributeur indépendant de produits pétroliers",
      sector: "Distribution",
      country: "Suisse",
      logo: "/images/partners/oryx.png",
      fallbackIcon: "⛽",
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100",
      textColor: "text-orange-600",
      features: ["Distribution carburants", "Logistique avancée", "Service client"]
    },
    {
      name: "STAR",
      description: "Compagnie pétrolière nationale du Mali",
      sector: "Pétrole",
      country: "Mali",
      logo: "/images/partners/star.jpeg",
      fallbackIcon: "⭐",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "from-yellow-50 to-yellow-100",
      textColor: "text-yellow-600",
      features: ["Raffinage", "Distribution nationale", "Développement local"]
    },
    {
      name: "ZEN",
      description: "Solutions énergétiques innovantes",
      sector: "Énergie",
      country: "International",
      logo: "/images/partners/zen.png",
      fallbackIcon: "⚡",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      textColor: "text-purple-600",
      features: ["Énergies vertes", "Technologie propre", "Durabilité"]
    },
    {
      name: "OLA",
      description: "Opérateur logistique africain",
      sector: "Logistique",
      country: "Afrique",
      logo: "/images/partners/ola.jpeg",
      fallbackIcon: "🚛",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
      textColor: "text-green-600",
      features: ["Transport", "Stockage", "Distribution"]
    },
    {
      name: "Diamond Cement Group",
      description: "Leader de l'industrie cimentière",
      sector: "Ciment",
      country: "International",
      logo: "/images/partners/diamondcement.png",
      fallbackIcon: "🏗️",
      color: "from-gray-500 to-gray-600",
      bgColor: "from-gray-50 to-gray-100",
      textColor: "text-gray-600",
      features: ["Production ciment", "Construction", "Infrastructure"]
    },
    {
      name: "Vivo Energy",
      description: "Partenaire stratégique pour les mines",
      sector: "Énergie",
      country: "International",
      logo: "/images/partners/vivo.png",
      fallbackIcon: "⛏️",
      color: "from-red-500 to-red-600",
      bgColor: "from-red-50 to-red-100",
      textColor: "text-red-600",
      features: ["Service mines", "Goungoto, Loulo", "Tabakoto, Nampala", "KOMANA, Yanfolila"]
    },
    {
      name: "RYMAX TDS-Endurox",
      description: "Représentant officiel - Lubrifiants de qualité supérieure",
      sector: "Lubrifiants",
      country: "International",
      logo: "/images/partners/rymax.png",
      fallbackIcon: "🛢️",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "from-indigo-50 to-indigo-100",
      textColor: "text-indigo-600",
      features: ["Représentant officiel", "Huiles moteurs", "Graisses", "Huiles hydrauliques", "Liquide refroidissement", "Huiles transmission"]
    }
  ];

  const partnershipStats = [
    { icon: <Building2 className="w-8 h-8" />, value: "8+", label: "Partenaires Stratégiques", color: "from-blue-500 to-blue-600" },
    { icon: <Handshake className="w-8 h-8" />, value: "15+", label: "Années d'Expérience", color: "from-green-500 to-green-600" },
    { icon: <Award className="w-8 h-8" />, value: "100%", label: "Satisfaction Client", color: "from-purple-500 to-purple-600" },
    { icon: <Globe className="w-8 h-8" />, value: "3", label: "Continents", color: "from-orange-500 to-orange-600" },
  ];

  return (
    <div className="pt-20 sm:pt-24">
      {/* Hero Partenaires - Design Moderne */}
      <section className="hero-modern py-16 sm:py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center space-x-2 sm:space-x-4 glass-effect rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 mb-8 sm:mb-12 shadow-modern">
              <Handshake className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              <span className="text-xs sm:text-sm font-bold text-blue-700">Nos Partenaires de Confiance</span>
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6 animate-slide-up">
              <span className="text-gradient-3d">Nos Partenaires</span>{" "}
              <span className="text-gray-800">Stratégiques</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-8 sm:mb-12 max-w-4xl mx-auto px-4">
              SYGIM ENERGIES SAS s'appuie sur un réseau de partenaires de confiance 
              pour offrir des solutions énergétiques de qualité et un service d'excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Partenariats - Design Moderne */}
      <section className="section-modern bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {partnershipStats.map((stat, index) => (
              <div key={stat.label} className="stat-modern card-3d animate-scale-in p-4 sm:p-6" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-modern mb-3 sm:mb-4 group-hover:shadow-modern-lg transition-all duration-500 mx-auto`}>
                  {stat.icon}
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient-modern mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-600 font-semibold text-center">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grille des Partenaires - Design Moderne */}
      <section className="section-modern bg-gradient-to-br from-gray-50 to-blue-50 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
              <span className="text-gradient-3d">Nos Partenaires</span>{" "}
              <span className="text-gray-800">de Référence</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Des entreprises leaders dans leurs domaines, partageant nos valeurs d'excellence et d'innovation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {partners.map((partner, index) => (
              <div key={partner.name} className="card-modern card-3d group animate-slide-up hover:scale-105 transition-all duration-300 overflow-hidden" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative">
                  {/* Logo du partenaire */}
                  <div className={`h-32 sm:h-40 mb-6 rounded-2xl bg-gradient-to-br ${partner.bgColor} flex items-center justify-center overflow-hidden relative group-hover:shadow-lg transition-all duration-300`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <PartnerLogo
                      src={partner.logo}
                      alt={`Logo ${partner.name}`}
                      fallbackIcon={partner.fallbackIcon}
                      className="h-20 w-20 sm:h-24 sm:w-24 relative"
                    />
                  </div>

                  <div className="px-6 pb-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                        {partner.name}
                      </h3>
                      <div className={`w-2 h-2 ${partner.textColor.replace('text-', 'bg-')} rounded-full animate-pulse`}></div>
                    </div>
                    
                    <p className={`${partner.textColor} font-semibold text-lg mb-2`}>
                      {partner.sector} • {partner.country}
                    </p>
                    
                    <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                      {partner.description}
                    </p>
                    
                    <div className="space-y-2">
                      {partner.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 group/item">
                          <div className={`w-1.5 h-1.5 bg-gradient-to-r ${partner.color} rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200`}></div>
                          <span className="text-sm text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Avantages Partenariat */}
      <section className="section-modern bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
              <span className="text-gradient-3d">Pourquoi</span>{" "}
              <span className="text-gray-800">Nous Choisir ?</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Les avantages d'un partenariat avec SYGIM ENERGIES SAS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="card-modern card-3d animate-scale-in p-6 sm:p-8" style={{animationDelay: '0.1s'}}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-modern mb-4 sm:mb-6 group-hover:shadow-modern-lg transition-all duration-500 mx-auto">
                <Users className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 text-center">Réseau Établi</h4>
              <p className="text-gray-600 text-sm sm:text-base text-center leading-relaxed">
                Plus de 15 ans d'expérience dans le secteur énergétique avec un réseau de confiance établi
              </p>
            </div>

            <div className="card-modern card-3d animate-scale-in p-6 sm:p-8" style={{animationDelay: '0.2s'}}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white shadow-modern mb-4 sm:mb-6 group-hover:shadow-modern-lg transition-all duration-500 mx-auto">
                <Award className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 text-center">Qualité Garantie</h4>
              <p className="text-gray-600 text-sm sm:text-base text-center leading-relaxed">
                Standards de qualité élevés et conformité aux réglementations internationales
              </p>
            </div>

            <div className="card-modern card-3d animate-scale-in p-6 sm:p-8" style={{animationDelay: '0.3s'}}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-modern mb-4 sm:mb-6 group-hover:shadow-modern-lg transition-all duration-500 mx-auto">
                <Globe className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 text-center">Vision Internationale</h4>
              <p className="text-gray-600 text-sm sm:text-base text-center leading-relaxed">
                Expansion internationale avec des partenaires de renommée mondiale
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Design Moderne */}
      <section className="section-modern gradient-blue text-white relative overflow-hidden py-12 sm:py-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8 animate-fade-in">
            Devenez Notre Partenaire
          </h2>
          <p className="text-lg sm:text-xl mb-12 sm:mb-16 opacity-90 max-w-3xl mx-auto animate-slide-up px-4">
            Rejoignez notre réseau de partenaires et développez votre activité avec SYGIM ENERGIES SAS
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 animate-fade-in">
            <Link href={`${base}/contact`} className="w-full sm:w-auto">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl transition-all duration-300 shadow-modern hover:shadow-modern-lg flex items-center justify-center space-x-3 sm:space-x-4 group w-full sm:w-auto">
                <Handshake className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Devenir Partenaire</span>
              </button>
            </Link>
            
            <Link href={`${base}/about`} className="w-full sm:w-auto">
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl transition-all duration-300 group w-full sm:w-auto flex items-center justify-center">
                <span>En savoir plus</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
