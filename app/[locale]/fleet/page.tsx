"use client";
import { Truck, MapPin, Shield, Clock, ArrowRight } from "lucide-react";
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
      {/* Hero Fleet 3D */}
      <section className="hero-3d py-16 sm:py-24 md:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-white/80 backdrop-blur-md border border-blue-200 rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 mb-6 sm:mb-8 shadow-2xl">
              <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              <span className="text-xs sm:text-sm font-semibold text-gray-700">Plus de 200 Véhicules Articulés</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-6 sm:mb-8">
              <span className="text-gradient">Notre Flotte</span>{" "}
              <span className="text-gray-800">de 200+ Véhicules</span>
              <br />
              <span className="text-lg sm:text-xl md:text-3xl lg:text-5xl text-gray-600 font-normal">
                Transport Pétrolier Professionnel
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-8 sm:mb-12 max-w-4xl mx-auto px-4">
              SYGIM ENERGIES SAS dispose d&apos;une flotte conséquente de plus de 200 véhicules articulés 
              toujours prête à servir et honorer ses engagements avec le meilleur service.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Flotte 3D */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
            {fleetStats.map((stat) => (
              <div key={stat.label} className="stat-3d p-4 sm:p-6">
                <div className={`icon-3d mx-auto mb-4 sm:mb-6 bg-gradient-to-br ${stat.color} w-12 h-12 sm:w-16 sm:h-16`}>
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-gradient mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium text-center">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Véhicules 3D */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
              <span className="text-gradient">Notre Flotte</span>{" "}
              <span className="text-gray-800">de Véhicules</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Des véhicules modernes et fiables pour tous vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {vehicles.map((vehicle) => (
              <div key={vehicle.type} className="card-3d group p-6 sm:p-8">
                {/* Image du véhicule en 3D */}
                <div className="mb-6 sm:mb-8">
                  <div className="h-32 sm:h-40 md:h-48 mb-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl sm:text-5xl md:text-6xl mb-2">{vehicle.fallbackEmoji}</div>
                      <div className="text-xs sm:text-sm text-gray-500">Image à venir</div>
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 group-hover:text-gradient transition-all duration-300 text-center">
                    {vehicle.type}
                  </h3>
                  <div className="text-base sm:text-lg font-semibold text-blue-600 text-center">{vehicle.capacity}</div>
                </div>

                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {vehicle.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full btn-primary flex items-center justify-center space-x-2 py-3 sm:py-4 text-sm sm:text-base">
                  <span>Réserver maintenant</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stations 3D */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-gradient">Nos Stations</span>{" "}
              <span className="text-gray-800">Service</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un réseau de stations modernes à travers Abidjan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stations.map((station) => (
              <div key={station.name} className="card-3d">
                <div className="icon-3d mb-6 bg-gradient-to-br from-green-500 to-green-600">
                  <MapPin className="w-8 h-8" />
                </div>
                
                <h4 className="text-xl font-bold text-gray-800 mb-2">{station.name}</h4>
                <p className="text-blue-600 font-semibold mb-4">{station.location}</p>
                
                <div className="space-y-2">
                  {station.services.map((service, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-600 text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
        ))}
      </div>
        </div>
      </section>

      {/* CTA Section 3D */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Prêt à Découvrir Notre Flotte ?
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
            Contactez-nous pour une démonstration personnalisée de nos véhicules et services
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href={`${base}/contact`}>
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 flex items-center space-x-3">
                <Truck className="w-6 h-6" />
                <span>Planifier une visite</span>
                <ArrowRight className="w-6 h-6" />
              </button>
            </Link>
            
            <Link href={`${base}/order`}>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Commander maintenant
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
