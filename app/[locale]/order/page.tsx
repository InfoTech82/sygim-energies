"use client";
import { ShoppingCart, Fuel, Truck, Car, CreditCard, Clock, CheckCircle, Sparkles, ArrowRight, Phone, Gauge } from "lucide-react";
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
    <div className="pt-20">
      {/* Hero Order 3D */}
      <section className="hero-3d py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-md border border-blue-200 rounded-full px-8 py-4 mb-8 shadow-2xl">
              <ShoppingCart className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-gray-700">Commande Énergétique 3D</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-8">
              <span className="text-gradient">Commandez</span>{" "}
              <span className="text-gray-800">en 3D</span>
              <br />
              <span className="text-3xl md:text-5xl text-gray-600 font-normal">
                Solutions Énergétiques Instantanées
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-4xl mx-auto">
              Passez votre commande avec notre système révolutionnaire de commande 3D. 
              Livraison rapide, qualité garantie, service client exceptionnel.
            </p>
          </div>
        </div>
      </section>

      {/* Types de Commandes 3D */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-gradient">Nos Services</span>{" "}
              <span className="text-gray-800">de Commande</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {orderTypes.map((order, index) => (
              <div key={order.title} className="card-3d group" style={{animationDelay: `${index * 0.2}s`}}>
                <div className={`icon-3d mb-8 bg-gradient-to-br ${order.color}`}>
                  {order.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gradient transition-all duration-300">
                  {order.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {order.description}
                </p>

                <div className="text-2xl font-bold text-blue-600 mb-6">{order.price}</div>

                <div className="space-y-3 mb-8">
                  {order.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full btn-primary flex items-center justify-center space-x-2">
                  <span>Commander maintenant</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus de Commande 3D */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-gradient">Processus de</span>{" "}
              <span className="text-gray-800">Commande 3D</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un processus simplifié en 4 étapes pour une expérience optimale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {orderSteps.map((step, index) => (
              <div key={step.step} className="stat-3d" style={{animationDelay: `${index * 0.15}s`}}>
                <div className="icon-3d mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600">
                  {step.icon}
                </div>
                <div className="text-3xl font-black text-gradient mb-2">Étape {step.step}</div>
                <h4 className="text-lg font-bold text-gray-800 mb-3">{step.title}</h4>
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
              Besoin d'une Commande Urgente ?
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