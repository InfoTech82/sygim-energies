"use client";
import { Award, Heart, Shield, Zap } from "lucide-react";

const values = [
  { 
    title: "Excellence", 
    description: "Nous visons l'excellence dans chaque aspect de nos services, de la qualité de nos produits à la satisfaction client.",
    icon: <Award className="w-8 h-8" />,
    color: "from-blue-500 to-blue-600"
  },
  { 
    title: "Confiance", 
    description: "Bâtir des relations durables basées sur la transparence, l'intégrité et la fiabilité de nos services.",
    icon: <Heart className="w-8 h-8" />,
    color: "from-green-500 to-green-600"
  },
  { 
    title: "Respect", 
    description: "Respect de nos employés, de nos clients, de l'environnement et des communautés où nous opérons.",
    icon: <Shield className="w-8 h-8" />,
    color: "from-purple-500 to-purple-600"
  },
  { 
    title: "Responsabilité", 
    description: "Engagement envers la santé, la sécurité et la protection de l'environnement dans toutes nos activités.",
    icon: <Zap className="w-8 h-8" />,
    color: "from-orange-500 to-orange-600"
  },
];

export default function Values() {
  return (
    <section className="section-premium bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* En-tête */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-white border border-green-200 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 shadow-lg">
            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600" />
            <span className="text-xs sm:text-sm font-semibold text-green-700">Nos Valeurs Fondamentales</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 px-4">
            <span className="text-gradient-premium">Nos Valeurs</span>{" "}
            <span className="text-gray-900">Fondamentales</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            L&apos;Excellence, la Confiance, le Respect et la Responsabilité guident SYGIM ENERGIES 
            dans ses activités et définissent notre identité d&apos;entreprise
          </p>
        </div>

        {/* Grille de valeurs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 animate-slide-up">
          {values.map((value) => (
            <div key={value.title} className="card-premium group">
              {/* Icône */}
              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${value.color} rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg mb-4 sm:mb-5 md:mb-6 group-hover:shadow-xl transition-all duration-300 mx-auto sm:mx-0`}>
                {value.icon}
              </div>

              {/* Contenu */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-gradient-premium transition-all duration-300 text-center sm:text-left">
                {value.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center sm:text-left">
                {value.description}
              </p>
            </div>
        ))}
      </div>

        {/* CTA final */}
        <div className="text-center mt-10 sm:mt-12 md:mt-16 animate-fade-in px-4">
          <div className="inline-block">
            <div className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-white border border-green-200 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <span className="text-gradient-premium font-bold text-xs sm:text-sm md:text-base">Excellence • Confiance • Respect • Responsabilité</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}