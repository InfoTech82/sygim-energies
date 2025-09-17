"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "BOUBACAR TRAORE",
    position: "Responsable RHQSE",
    image: "/images/team/boubacar-traore.jpg",
    description: "Expert en Qualité, Sécurité et Environnement avec plus de 15 ans d'expérience."
  },
  {
    id: 2,
    name: "Équipe Technique",
    position: "Mécaniciens & Techniciens",
    image: "/images/team/equipe-technique.jpg",
    description: "Équipe expérimentée pour l'entretien et la maintenance de notre flotte."
  },
  {
    id: 3,
    name: "Équipe Commerciale",
    position: "Conseillers & Vendeurs",
    image: "/images/team/equipe-commerciale.jpg",
    description: "Professionnels dédiés à la satisfaction client et au développement commercial."
  },
  {
    id: 4,
    name: "Équipe Logistique",
    position: "Chauffeurs & Transporteurs",
    image: "/images/team/equipe-logistique.jpg",
    description: "Conducteurs professionnels formés au transport de produits pétroliers."
  }
];

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? teamMembers.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === teamMembers.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentMember = teamMembers[currentIndex];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Notre Équipe</h2>
          <p className="text-gray-600">Les professionnels qui font la force de SYGIM ENERGIES</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Image */}
              <div className="relative">
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden bg-gray-200">
                  <Image
                    src={currentMember.image}
                    alt={currentMember.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {currentMember.name}
                </h3>
                <p className="text-blue-600 font-semibold text-lg mb-4">
                  {currentMember.position}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {currentMember.description}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={goToPrevious}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Précédent</span>
              </button>

              <div className="flex space-x-2">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span>Suivant</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
