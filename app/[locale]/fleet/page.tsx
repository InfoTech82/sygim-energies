"use client";
import { Truck, MapPin, Shield, Clock, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

// Composant pour afficher les images des stations avec fallback
const StationImage = ({ 
  src, 
  alt, 
  fallbackEmoji, 
  className = "" 
}: { 
  src: string; 
  alt: string; 
  fallbackEmoji: string; 
  className?: string; 
}) => {
  const [imageError, setImageError] = useState(false);
  
  if (imageError) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <div className="text-center">
          <div className="text-5xl sm:text-6xl lg:text-7xl mb-3">{fallbackEmoji}</div>
          <div className="text-sm sm:text-base text-gray-600 font-medium">{alt}</div>
          <div className="text-xs text-gray-400 mt-1">Image à venir</div>
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
        className="object-cover rounded-2xl"
        onError={() => setImageError(true)}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  );
};

export default function FleetPage() {
  const pathname = usePathname();
  const base = useMemo(() => `/${pathname?.split("/")[1] || "fr"}`, [pathname]);

  const fleetStats = [
    { icon: <Truck className="w-8 h-8" />, value: "200+", label: "Véhicules Articulés", color: "from-blue-500 to-blue-600" },
    { icon: <MapPin className="w-8 h-8" />, value: "Bamako+", label: "Stations Internationales", color: "from-green-500 to-green-600" },
    { icon: <Shield className="w-8 h-8" />, value: "Leader", label: "Du Marché", color: "from-purple-500 to-purple-600" },
    { icon: <Clock className="w-8 h-8" />, value: "10M", label: "Capital FCFA", color: "from-orange-500 to-orange-600" },
  ];

  const vehicles = [
    {
      type: "Camions Citernes",
      capacity: "45,000L",
      features: ["GPS Tracking", "Sécurité renforcée", "Maintenance préventive"],
      image: "/images/fleet/camion1.jpg", // Placez votre image ici
      fallbackEmoji: "🚛"
    },
    // {
    //   type: "Véhicules Légers",
    //   capacity: "5 places",
    //   features: ["Confort premium", "Économie de carburant", "Assurance incluse"],
    //   image: "/images/fleet/vehicule-leger.jpg", // Placez votre image ici
    //   fallbackEmoji: "🚗"
    // },
    // {
    //   type: "Utilitaires",
    //   capacity: "3,5T",
    //   features: ["Polyvalence", "Robustesse", "Facilité d&apos;utilisation"],
    //   image: "/images/fleet/utilitaire.jpg", // Placez votre image ici
    //   fallbackEmoji: "🚐"
    // },
    // {
    //   type: "Véhicules Spécialisés",
    //   capacity: "Sur mesure",
    //   features: ["Équipements spéciaux", "Formation incluse", "Support technique"],
    //   image: "/images/fleet/vehicule-specialise.jpg",
    //   fallbackEmoji: "🏗️"
    // },
  ];

  const stations = [
    { name: "Stations Régionales", location: "Mali", services: ["Vente gros/détail", "GASOIL Premium", "SUPER"] },
    { name: "Stations Bamako", location: "Mali", services: ["Expansion internationale", "Produits pétroliers", "Service local"] },
    { name: "Réseau Mondial", location: "Vision Internationale", services: ["Développement global", "Partenariats", "Croissance"] },
  ];

  return (
    <div className="pt-20 sm:pt-24">
      {/* Hero Fleet - Design Moderne */}
      <section className="hero-modern py-16 sm:py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center space-x-2 sm:space-x-4 glass-effect rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 mb-8 sm:mb-12 shadow-modern">
              <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
              <span className="text-xs sm:text-sm font-bold text-green-700">Notre Flotte de 200+ Véhicules Articulés</span>
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6 animate-slide-up">
              <span className="text-gradient-3d">Notre Flotte</span>{" "}
              <span className="text-gray-800">de 200+ Véhicules</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-8 sm:mb-12 max-w-4xl mx-auto px-4">
              SYGIM ENERGIES SAS dispose d&apos;une flotte conséquente de plus de 200 véhicules articulés 
              toujours prête à servir et honorer ses engagements avec le meilleur service.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Flotte - Design Moderne */}
      <section className="section-modern bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {fleetStats.map((stat, index) => (
              <div key={stat.label} className="stat-modern card-3d animate-scale-in p-4 sm:p-6" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white shadow-modern mb-3 sm:mb-4 group-hover:shadow-modern-lg transition-all duration-500 mx-auto`}>
                  {stat.icon}
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient-modern mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-600 font-semibold text-center">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Véhicules - Design Moderne */}
      <section className="section-modern bg-gradient-to-br from-green-50 to-gray-50 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
              <span className="text-gradient-3d">Notre Flotte</span>{" "}
              <span className="text-gray-800">de Véhicules</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Des véhicules modernes et fiables pour tous vos besoins
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 max-w-6xl mx-auto">
            {vehicles.map((vehicle, index) => (
              <div key={vehicle.type} className="card-modern card-3d group animate-slide-up p-6 sm:p-8 w-80 sm:w-96" style={{animationDelay: `${index * 0.1}s`}}>
                {/* Image du véhicule */}
                <div className="mb-6 sm:mb-8">
                  <div className="h-32 sm:h-40 md:h-48 mb-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100 overflow-hidden relative">
                    <StationImage
                      src={vehicle.image}
                      alt={vehicle.type}
                      fallbackEmoji={vehicle.fallbackEmoji}
                      className="h-full w-full"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 group-hover:text-gradient-modern transition-all duration-300 text-center">
                    {vehicle.type}
                  </h3>
                  <div className="text-base sm:text-lg font-semibold text-green-600 text-center">{vehicle.capacity}</div>
                </div>

                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {vehicle.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full btn-modern flex items-center justify-center space-x-2 py-3 sm:py-4 text-sm sm:text-base">
                  <span>En savoir plus</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stations - Design Moderne */}
      <section className="section-modern bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
              <span className="text-gradient-3d">Nos Stations</span>{" "}
              <span className="text-gray-800">Service</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Un réseau de stations modernes à travers le Mali et les régions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {stations.map((station, index) => (
              <div key={station.name} className="card-modern card-3d animate-scale-in p-6 sm:p-8" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white shadow-modern mb-4 sm:mb-6 group-hover:shadow-modern-lg transition-all duration-500 mx-auto">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 text-center">{station.name}</h4>
                <p className="text-green-600 font-semibold mb-4 text-center">{station.location}</p>
                
                <div className="space-y-2">
                  {station.services.map((service, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm sm:text-base">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie des Stations - Design Moderne */}
      <section className="section-modern bg-gradient-to-br from-green-50 to-gray-50 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
              <span className="text-gradient-3d">Galerie</span>{" "}
              <span className="text-gray-800">de nos Stations</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Découvrez nos stations modernes et nos installations de pointe
            </p>
          </div>

          {/* Grille d'images des stations - Design amélioré */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Station 1 - Bamako-Boulkasoumbougou */}
            <div className="card-modern card-3d group animate-slide-up hover:scale-105 transition-all duration-300 overflow-hidden" style={{animationDelay: '0.1s'}}>
              <div className="relative">
                <div className="h-52 sm:h-60 lg:h-64 mb-6 rounded-2xl bg-gradient-to-br from-green-100 via-green-50 to-emerald-100 overflow-hidden relative group-hover:shadow-lg transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <StationImage
                    src="/images/fleet/station1.JPG"
                    alt="Station Bamako - SYGIM ENERGIES"
                    fallbackEmoji="🏪"
                    className="h-full w-full"
                  />
                </div>
                <div className="px-6 pb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">Station Boulkasoumbougou</h3>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <p className="text-green-600 font-semibold text-lg mb-4">Mali - Boulkasoumbougou</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm sm:text-base text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">Vente GASOIL Super</span>
                </div>
                    <div className="flex items-center space-x-3 group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm sm:text-base text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">Vente ESSENCE</span>
              </div>
                    <div className="flex items-center space-x-3 group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm sm:text-base text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">Service 24/7</span>
                </div>
                </div>
                </div>
              </div>
            </div>

            {/* Station 2 - DIO */}
            <div className="card-modern card-3d group animate-slide-up hover:scale-105 transition-all duration-300 overflow-hidden" style={{animationDelay: '0.2s'}}>
              <div className="relative">
                <div className="h-52 sm:h-60 lg:h-64 mb-6 rounded-2xl bg-gradient-to-br from-blue-100 via-blue-50 to-cyan-100 overflow-hidden relative group-hover:shadow-lg transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <StationImage
                    src="/images/fleet/station2.JPG"
                    alt="Station Abidjan - SYGIM ENERGIES"
                    fallbackEmoji="⛽"
                    className="h-full w-full"
                  />
                </div>
                <div className="px-6 pb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Station DIO</h3>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                  <p className="text-blue-600 font-semibold text-lg mb-4">Mali - DIO</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm sm:text-base text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">Vente GASOIL Super</span>
                </div>
                    <div className="flex items-center space-x-3 group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm sm:text-base text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">Vente ESSENCE</span>
              </div>
                    <div className="flex items-center space-x-3 group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm sm:text-base text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">Service 24/7</span>
                </div>
                </div>
                </div>
              </div>
            </div>

            {/* Station 3 - Station Sotuba */}
            <div className="card-modern card-3d group animate-slide-up hover:scale-105 transition-all duration-300 overflow-hidden" style={{animationDelay: '0.3s'}}>
              <div className="relative">
                <div className="h-52 sm:h-60 lg:h-64 mb-6 rounded-2xl bg-gradient-to-br from-orange-100 via-orange-50 to-amber-100 overflow-hidden relative group-hover:shadow-lg transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <StationImage
                    src="/images/fleet/station3.JPG"
                    alt="Station Sotuba - SYGIM ENERGIES"
                    fallbackEmoji="🚛"
                    className="h-full w-full"
                  />
                </div>
                <div className="px-6 pb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">Station Sotuba</h3>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  </div>
                  <p className="text-orange-600 font-semibold text-lg mb-4">Mali - Sotuba</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm sm:text-base text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">Vente GASOIL Super</span>
                </div>
                    <div className="flex items-center space-x-3 group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm sm:text-base text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">Vente ESSENCE</span>
              </div>
                    <div className="flex items-center space-x-3 group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm sm:text-base text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">Service 24/7</span>
                </div>
                </div>
                </div>
              </div>
            </div>

            {/* Station 4 - Mahinamine (Kéniéba) */}
            <div className="card-modern card-3d group animate-slide-up hover:scale-105 transition-all duration-300 overflow-hidden" style={{animationDelay: '0.4s'}}>
              <div className="relative">
                <div className="h-52 sm:h-60 lg:h-64 mb-6 rounded-2xl bg-gradient-to-br from-purple-100 via-purple-50 to-violet-100 overflow-hidden relative group-hover:shadow-lg transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <StationImage
                    src="/images/fleet/station4.JPG"
                    alt="Mahinamine (Kéniéba) - SYGIM ENERGIES"
                    fallbackEmoji="🏭"
                    className="h-full w-full"
                  />
                </div>
                <div className="px-6 pb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">Mahinamine (Kéniéba)</h3>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  </div>
                  <p className="text-purple-600 font-semibold text-lg mb-4">Mali - Mahinamine (Kéniéba)</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm sm:text-base text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">Vente GASOIL Super</span>
                </div>
                    <div className="flex items-center space-x-3 group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm sm:text-base text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">Vente ESSENCE</span>
              </div>
                    <div className="flex items-center space-x-3 group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm sm:text-base text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">Service 24/7</span>
                </div>
                </div>
                </div>
              </div>
            </div>

            {/* Station 5 - Diboli */}
            <div className="card-modern card-3d group animate-slide-up hover:scale-105 transition-all duration-300 overflow-hidden" style={{animationDelay: '0.5s'}}>
              <div className="relative">
                <div className="h-52 sm:h-60 lg:h-64 mb-6 rounded-2xl bg-gradient-to-br from-emerald-100 via-emerald-50 to-teal-100 overflow-hidden relative group-hover:shadow-lg transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <StationImage
                    src="/images/fleet/station5.JPG"
                    alt="Station Diboli - SYGIM ENERGIES"
                    fallbackEmoji="🌾"
                    className="h-full w-full"
                  />
                </div>
                <div className="px-6 pb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">Station Diboli</h3>
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  </div>
                  <p className="text-emerald-600 font-semibold text-lg mb-4">Mali - Diboli</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm sm:text-base text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">Vente GASOIL Super</span>
                </div>
                    <div className="flex items-center space-x-3 group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm sm:text-base text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">Vente ESSENCE</span>
              </div>
                    <div className="flex items-center space-x-3 group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm sm:text-base text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">Service 24/7</span>
                </div>
                </div>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions pour les images */}
          {/* <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-200">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center">
              📸 Instructions pour ajouter les images
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">📁 Structure des dossiers :</h4>
                <div className="bg-gray-100 p-3 rounded-lg text-sm font-mono">
                  public/images/stations/<br/>
                  ├── station-bamako.jpg<br/>
                  ├── station-abidjan.jpg<br/>
                  ├── station-mobile.jpg<br/>
                  ├── centre-distribution.jpg<br/>
                  ├── station-rurale.jpg<br/>
                  └── station-internationale.jpg
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">📏 Recommandations :</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Format : JPG ou PNG</li>
                  <li>• Taille : 800x600px minimum</li>
                  <li>• Poids :  500KB par image</li>
                  <li>• Qualité : Haute résolution</li>
                  <li>• Orientation : Paysage</li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* CTA - Design Moderne */}
      <section className="section-modern gradient-green text-white relative overflow-hidden py-12 sm:py-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8 animate-fade-in">
            Prêt à Découvrir Notre Flotte ?
          </h2>
          <p className="text-lg sm:text-xl mb-12 sm:mb-16 opacity-90 max-w-3xl mx-auto animate-slide-up px-4">
            Contactez-nous pour une démonstration personnalisée de nos véhicules et services
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 animate-fade-in">
            <Link href={`${base}/contact`} className="w-full sm:w-auto">
              <button className="bg-white text-green-600 hover:bg-gray-100 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl transition-all duration-300 shadow-modern hover:shadow-modern-lg flex items-center justify-center space-x-3 sm:space-x-4 group w-full sm:w-auto">
                <Truck className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Planifier une visite</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
            
            <Link href={`${base}/order`} className="w-full sm:w-auto">
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl transition-all duration-300 group w-full sm:w-auto flex items-center justify-center">
                <span>Commander maintenant</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

