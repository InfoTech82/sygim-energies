"use client";
import { ShoppingCart, Fuel, Truck, Car, CreditCard, CheckCircle, ArrowRight, Phone, Gauge, Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function OrderPage() {
  const pathname = usePathname();
  const base = useMemo(() => `/${pathname?.split("/")[1] || "fr"}`, [pathname]);

  const orderTypes = [
    {
      title: "Commande de Carburant 3D",
      description: "Livraison rapide de carburant premium avec suivi en temps réel",
      icon: <Fuel className="w-12 h-12" />,
      color: "from-blue-500 to-cyan-500",
      price: "À partir de 500L",
      features: ["Livraison 24/7", "Qualité garantie", "Prix compétitifs", "Suivi GPS 3D"]
    },
    {
      title: "Transport Pétrolier Express",
      description: "Service de transport sécurisé avec technologie de pointe",
      icon: <Truck className="w-12 h-12" />,
      color: "from-green-500 to-emerald-500",
      price: "Devis personnalisé",
      features: ["Sécurité maximale", "Assurance complète", "Équipe experte", "Tracking 3D"]
    },
    {
      title: "Location de Véhicules Premium",
      description: "Véhicules haut de gamme pour tous vos déplacements",
      icon: <Car className="w-12 h-12" />,
      color: "from-purple-500 to-violet-500",
      price: "À partir de 25,000 FCFA/jour",
      features: ["Véhicules récents", "Maintenance incluse", "Assurance", "Support 24/7"]
    },
  ];

  const orderSteps = [
    { step: "1", title: "Sélection 3D", description: "Choisissez votre service avec notre interface 3D", icon: <ShoppingCart className="w-6 h-6" /> },
    { step: "2", title: "Configuration", description: "Personnalisez votre commande selon vos besoins", icon: <Gauge className="w-6 h-6" /> },
    { step: "3", title: "Validation", description: "Confirmez et validez votre commande", icon: <CheckCircle className="w-6 h-6" /> },
    { step: "4", title: "Livraison", description: "Suivi en temps réel de votre livraison", icon: <Truck className="w-6 h-6" /> },
  ];

  return (
    <div className="pt-20 sm:pt-24">
      {/* Hero Order - Design Moderne */}
      <section className="hero-modern py-16 sm:py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center space-x-2 sm:space-x-4 glass-effect rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 mb-8 sm:mb-12 shadow-modern">
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
              <span className="text-xs sm:text-sm font-bold text-green-700">Commande Énergétique Moderne</span>
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6 animate-slide-up">
              <span className="text-gradient-3d">Commandez</span>{" "}
              <span className="text-gray-800">Facilement</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-8 sm:mb-12 max-w-4xl mx-auto px-4">
              Passez votre commande avec notre système moderne et intuitif. 
              Livraison rapide, qualité garantie, service client exceptionnel.
            </p>
          </div>
        </div>
      </section>

      {/* Types de Commandes - Design Moderne */}
      <section className="section-modern bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
              <span className="text-gradient-3d">Nos Services</span>{" "}
              <span className="text-gray-800">de Commande</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {orderTypes.map((order, index) => (
              <div key={order.title} className="card-modern card-3d group animate-slide-up p-6 sm:p-8" style={{animationDelay: `${index * 0.2}s`}}>
                <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white shadow-modern mb-4 sm:mb-6 group-hover:shadow-modern-lg transition-all duration-500 mx-auto`}>
                  {order.icon}
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-gradient-modern transition-all duration-300 text-center">
                  {order.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base text-center">
                  {order.description}
                </p>

                <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-600 mb-4 sm:mb-6 text-center">{order.price}</div>

                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {order.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full btn-modern flex items-center justify-center space-x-2 py-3 sm:py-4 text-sm sm:text-base">
                  <span>Commander maintenant</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus de Commande 3D */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
              <span className="text-gradient">Processus de</span>{" "}
              <span className="text-gray-800">Commande 3D</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Un processus simplifié en 4 étapes pour une expérience optimale
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {orderSteps.map((step, index) => (
              <div key={step.step} className="stat-3d p-4 sm:p-6" style={{animationDelay: `${index * 0.15}s`}}>
                <div className="icon-3d mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 sm:w-16 sm:h-16">
                  {step.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-black text-gradient mb-1 sm:mb-2">Étape {step.step}</div>
                <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3">{step.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Rapide 3D */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Besoin d&apos;une Commande Urgente ?
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Notre équipe est disponible 24/7 pour répondre à vos besoins énergétiques
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <Phone className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Commande Téléphonique</h3>
                <p className="text-lg opacity-90 mb-6">Appelez-nous directement pour une commande express</p>
                <div className="text-2xl font-bold">+223 77 17 60 60</div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <CreditCard className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Commande en Ligne</h3>
                <p className="text-lg opacity-90 mb-6">Utilisez notre formulaire de contact 3D</p>
                <Link href={`${base}/contact`}>
                  <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-bold transition-all duration-300">
                    Formulaire 3D
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}