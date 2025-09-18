"use client";
import { Truck, Users, Home, Star, Heart, Shield } from "lucide-react";

const clientTypes = [
  {
    name: "Transporteurs",
    description: "Professionnels du transport",
    icon: <Truck className="w-8 h-8" />,
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-50 to-blue-100",
    textColor: "text-blue-600"
  },
  {
    name: "Collectivités",
    description: "Administrations publiques",
    icon: <Users className="w-8 h-8" />,
    color: "from-purple-500 to-purple-600",
    bgColor: "from-purple-50 to-purple-100",
    textColor: "text-purple-600"
  },
  {
    name: "Particuliers",
    description: "Clients individuels",
    icon: <Home className="w-8 h-8" />,
    color: "from-pink-500 to-pink-600",
    bgColor: "from-pink-50 to-pink-100",
    textColor: "text-pink-600"
  }
];

const trustStats = [
  { icon: <Heart className="w-6 h-6" />, value: "100%", label: "Satisfaction", color: "from-red-500 to-red-600" },
  { icon: <Star className="w-6 h-6" />, value: "5★", label: "Qualité", color: "from-yellow-500 to-yellow-600" },
  { icon: <Shield className="w-6 h-6" />, value: "15+", label: "Années", color: "from-green-500 to-green-600" },
];

export default function TrustedClients() {
  return (
    <section className="section-modern bg-gradient-to-br from-gray-50 to-blue-50 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
            <span className="text-gradient-3d">Ils nous font</span>{" "}
            <span className="text-gray-800">confiance</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            SYGIM ENERGIES SAS est fier de compter parmi ses clients des professionnels 
            de tous secteurs d&apos;activité, témoignant de notre polyvalence et de notre fiabilité.
          </p>
        </div>

        {/* Types de clients */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 sm:mb-16">
          {clientTypes.map((client, index) => (
            <div 
              key={client.name} 
              className="card-modern card-3d group animate-scale-in hover:scale-105 transition-all duration-300 p-4 sm:p-6 text-center w-64 sm:w-72"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${client.color} rounded-2xl flex items-center justify-center text-white shadow-modern mb-4 sm:mb-6 group-hover:shadow-modern-lg transition-all duration-500 mx-auto`}>
                {client.icon}
              </div>
              <h3 className={`text-lg sm:text-xl font-bold ${client.textColor} mb-2 group-hover:text-gradient-modern transition-all duration-500`}>
                {client.name}
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                {client.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistiques de confiance */}
        <div className="max-w-4xl mx-auto">
          <div className="card-modern card-3d animate-slide-up p-6 sm:p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                Pourquoi nous font-ils confiance ?
              </h3>
              <p className="text-gray-600 text-base sm:text-lg">
                Des chiffres qui parlent d&apos;eux-mêmes
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {trustStats.map((stat) => (
                <div key={stat.label} className="text-center group">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-modern mb-3 sm:mb-4 group-hover:shadow-modern-lg transition-all duration-500 mx-auto`}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gradient-modern mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-200">
              <div className="text-center">
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                  🏆 Leader reconnu du transport pétrolier
                </h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Plus de 15 ans d&apos;expérience, une flotte de 200+ véhicules, et une satisfaction client de 100%. 
                  Tous nos clients, qu&apos;ils soient transporteurs, agriculteurs, BTP, collectivités ou particuliers, 
                  nous font confiance pour la qualité de nos services et la fiabilité de nos livraisons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
