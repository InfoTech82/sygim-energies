"use client";
import { Fuel, Truck, Car, Zap, Shield, Clock, CheckCircle, ArrowRight, Sparkles, ChevronRight, Star } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function ServicesPage() {
  const pathname = usePathname();
  const base = useMemo(() => `/${pathname?.split("/")[1] || "fr"}`, [pathname]);

const services = [
  {
      title: "Commercialisation Produits Pétroliers",
      description: "Vente en gros et détail de GASOIL, SUPER, HUILE et autres produits pétroliers de qualité premium.",
      icon: <Fuel className="w-12 h-12" />,
      color: "from-green-500 to-green-600",
      features: ["GASOIL premium", "SUPER sans plomb", "Huiles moteur", "Livraison en gros/détail"]
    },
    {
      title: "Transport de Produits Pétroliers",
      description: "Service de transport spécialisé avec une flotte de plus de 200 véhicules articulés modernes.",
      icon: <Truck className="w-12 h-12" />,
      color: "from-green-600 to-green-700",
      features: ["200+ véhicules articulés", "Équipe dynamique", "Sécurité maximale", "Respect des délais"]
    },
    {
      title: "Location de Véhicules Pétroliers",
      description: "Location de véhicules spécialisés pour le transport de produits pétroliers avec maintenance incluse.",
      icon: <Car className="w-12 h-12" />,
      color: "from-green-700 to-green-800",
      features: ["Flotte moderne", "Maintenance préventive", "Formation conducteurs", "Support technique 24/7"]
    },
  ];

  const advantages = [
    { icon: <Zap className="w-8 h-8" />, title: "Équipe Dynamique", description: "Personnel expérimenté et réactif pour un service optimal", color: "from-green-500 to-green-600" },
    { icon: <Shield className="w-8 h-8" />, title: "Flotte Conséquente", description: "Plus de 200 véhicules articulés toujours prêts à servir", color: "from-green-600 to-green-700" },
    { icon: <Clock className="w-8 h-8" />, title: "Respect des Délais", description: "Honorer nos engagements à temps avec ponctualité", color: "from-green-700 to-green-800" },
    { icon: <CheckCircle className="w-8 h-8" />, title: "Meilleure Qualité", description: "Produits de qualité supérieure et service excellent", color: "from-green-400 to-green-500" },
  ];

  return (
    <div className="pt-20 sm:pt-24">
      {/* Hero Services - Design Moderne */}
      <section className="hero-modern py-16 sm:py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 sm:space-x-4 glass-effect rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 mb-8 sm:mb-12 shadow-modern">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
              <span className="text-sm font-bold text-green-700">Leader du Transport Pétrolier</span>
              <Star className="w-4 h-4 text-green-500" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6 animate-slide-up">
              <span className="text-gradient-3d">Nos</span>{" "}
              <span className="text-gray-800">Services</span>
              <br />
              <span className="text-2xl md:text-3xl text-gray-600 font-light">
                Produits Pétroliers & Transport
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-4xl mx-auto animate-fade-in">
              SYGIM ENERGIES SAS vous propose une gamme complète de produits pétroliers et de services 
              de transport avec une flotte de plus de 200 véhicules articulés.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - Design Moderne */}
      <section className="section-modern bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div key={service.title} className="card-modern card-3d group animate-scale-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white shadow-modern mb-6 group-hover:shadow-modern-lg transition-all duration-500`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gradient-modern transition-all duration-500">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
                      <span className="text-gray-600 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href={`${base}/contact`}>
                  <button className="w-full btn-modern flex items-center justify-center space-x-3 group">
                    <span className="font-bold">En savoir plus</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages - Design Moderne */}
      <section className="section-modern bg-gradient-to-br from-green-50 to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-gradient-3d">Pourquoi Choisir</span>{" "}
              <span className="text-gray-800">SYGIM ENERGIES ?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez les avantages qui font de nous le leader du transport pétrolier
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={advantage.title} className="stat-modern card-3d animate-scale-in" style={{animationDelay: `${index * 0.15}s`}}>
                <div className={`w-16 h-16 bg-gradient-to-br ${advantage.color} rounded-2xl flex items-center justify-center text-white shadow-modern mb-6 group-hover:shadow-modern-lg transition-all duration-500`}>
                  {advantage.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gradient-modern transition-all duration-500">{advantage.title}</h4>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final - Design Moderne */}
      <section className="section-modern gradient-green text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8 animate-fade-in">
            Commencez Votre Transformation Énergétique
          </h2>
          <p className="text-2xl mb-16 opacity-90 max-w-4xl mx-auto animate-slide-up">
            Rejoignez les entreprises qui ont choisi l&apos;excellence avec nos solutions modernes
          </p>
          
          <Link href={`${base}/order`}>
            <button className="bg-white text-green-600 hover:bg-gray-100 px-12 py-6 rounded-2xl font-bold text-2xl transition-all duration-300 shadow-modern hover:shadow-modern-lg transform hover:-translate-y-2 flex items-center space-x-4 mx-auto group">
              <Zap className="w-8 h-8" />
              <span>Commander maintenant</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </section>
      </div>
  );
}
