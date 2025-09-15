"use client";
import { Truck, MapPin, Shield, Clock, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

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
      capacity: "20,000L",
      features: ["GPS Tracking", "Sécurité renforcée", "Maintenance préventive"],
      image: "/images/fleet/camion-citerne.jpg", // Placez votre image ici
      fallbackEmoji: "🚛"
    },
    {
      type: "Véhicules Légers",
      capacity: "5 places",
      features: ["Confort premium", "Économie de carburant", "Assurance incluse"],
      image: "/images/fleet/vehicule-leger.jpg", // Placez votre image ici
      fallbackEmoji: "🚗"
    },
    {
      type: "Utilitaires",
      capacity: "3,5T",
      features: ["Polyvalence", "Robustesse", "Facilité d&apos;utilisation"],
      image: "/images/fleet/utilitaire.jpg", // Placez votre image ici
      fallbackEmoji: "🚐"
    },
    {
      type: "Véhicules Spécialisés",
      capacity: "Sur mesure",
      features: ["Équipements spéciaux", "Formation incluse", "Support technique"],
      image: "/images/fleet/vehicule-specialise.jpg", // Placez votre image ici
      fallbackEmoji: "🏗️"
    },
  ];

  const stations = [
    { name: "Stations Côte d&apos;Ivoire", location: "Abidjan & Intérieur", services: ["Vente gros/détail", "GASOIL Premium", "SUPER"] },
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {vehicles.map((vehicle, index) => (
              <div key={vehicle.type} className="card-modern card-3d group animate-slide-up p-6 sm:p-8" style={{animationDelay: `${index * 0.1}s`}}>
                {/* Image du véhicule */}
                <div className="mb-6 sm:mb-8">
                  <div className="h-32 sm:h-40 md:h-48 mb-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl sm:text-5xl md:text-6xl mb-2">{vehicle.fallbackEmoji}</div>
                      <div className="text-xs sm:text-sm text-gray-500">Image à venir</div>
                    </div>
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
              Un réseau de stations modernes à travers Abidjan
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
