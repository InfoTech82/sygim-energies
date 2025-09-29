"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Users, Award, User } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  description: string;
  icon?: React.ReactNode;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "BOUBACAR TRAORE",
    position: "Responsable RHQSE",
    image: "/images/team/boubacar-traore.jpg",
    description: "Pilote de l'excellence opérationnelle chez SYGIM ENERGIES, Boubacar garantit la conformité, la sécurité et la qualité environnementale de tous nos services. Son expertise de 15+ ans assure des standards internationaux dans le secteur de l'énergie.",
    icon: <Award className="w-6 h-6" />
  },
  {
    id: 2,
    name: "FATIM KEITA",
    position: "Secrétaire Générale",
    image: "/images/team/fatim-keita.jpg",
    description: "Cœur administratif de SYGIM ENERGIES, Fatim orchestre avec précision la coordination interne et l'interface client. Son professionnalisme et sa rigueur assurent une expérience client exceptionnelle à chaque interaction.",
    icon: <User className="w-6 h-6" />
  },
  {
    id: 3,
    name: "Équipe Commerciale",
    position: "Conseillers Énergie & Vendeurs",
    image: "/images/team/equipe.jpg",
    description: "Force commerciale dynamique de SYGIM ENERGIES, notre équipe de conseillers experts vous accompagne dans vos projets énergétiques. Leur connaissance approfondie du marché et leur approche personnalisée font la différence.",
    icon: <Users className="w-6 h-6" />
  },
];

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(currentIndex === 0 ? teamMembers.length - 1 : currentIndex - 1);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(currentIndex === teamMembers.length - 1 ? 0 : currentIndex + 1);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [currentIndex, isTransitioning]);

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [goToNext]);

  const currentMember = teamMembers[currentIndex];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-emerald-600/10 via-transparent to-cyan-600/10"></div>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-full blur-lg opacity-75 animate-pulse"></div>
            <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-full shadow-2xl">
              <Users className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
            Notre Équipe d&apos;Experts
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            Des professionnels passionnés qui transforment l&apos;avenir énergétique du Mali avec 
            <span className="text-yellow-400 font-bold"> SYGIM ENERGIES</span>
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Main Card */}
              <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
            
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-emerald-500/20 to-cyan-500/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-transparent z-5"></div>
                  
                  <Image
                    src={currentMember.image}
                    alt={currentMember.name}
                    fill
                    className={`object-cover transition-all duration-700 ${
                      isTransitioning ? 'opacity-0 scale-110 blur-sm' : 'opacity-100 scale-100 blur-0'
                    }`}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  
                  {/* Floating Elements */}
                  <div className="absolute top-6 right-6 z-20">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
                      {currentMember.icon}
                </div>
              </div>

                  {/* Overlay with member info */}
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl text-white shadow-lg">
                          {currentMember.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                  {currentMember.name}
                </h3>
                          <p className="text-emerald-200 font-semibold">
                  {currentMember.position}
                </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-10 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-white/5 to-white/10">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-4xl font-bold text-white mb-4">
                        {currentMember.name}
                      </h3>
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="p-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-xl border border-emerald-400/30">
                          {currentMember.icon}
                        </div>
                        <p className="text-2xl text-emerald-200 font-semibold">
                          {currentMember.position}
                </p>
              </div>
            </div>

                    <p className="text-emerald-100 leading-relaxed text-lg">
                      {currentMember.description}
                    </p>

                    {/* Enhanced Stats */}
                    <div className="grid grid-cols-3 gap-6 pt-6">
                      <div className="text-center p-4 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
                        <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
                        <div className="text-sm text-emerald-200">Années d&apos;expertise</div>
                      </div>
                      <div className="text-center p-4 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
                        <div className="text-3xl font-bold text-emerald-400 mb-2">100%</div>
                        <div className="text-sm text-emerald-200">Conformité RHQSE</div>
                      </div>
                      <div className="text-center p-4 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                        <div className="text-sm text-emerald-200">Support client</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Navigation Arrows */}
              <button
                onClick={goToPrevious}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/20 backdrop-blur-xl rounded-full shadow-2xl flex items-center justify-center text-white hover:text-emerald-300 hover:bg-white/30 transition-all duration-300 group border border-white/30"
              >
              <ChevronLeft className="w-7 h-7 group-hover:scale-110 transition-transform" />
              </button>

            <button
              onClick={goToNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/20 backdrop-blur-xl rounded-full shadow-2xl flex items-center justify-center text-white hover:text-emerald-300 hover:bg-white/30 transition-all duration-300 group border border-white/30"
            >
              <ChevronRight className="w-7 h-7 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Enhanced Dots Navigation */}
          <div className="flex justify-center mt-12 space-x-4">
            {teamMembers.map((member, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                className={`group relative transition-all duration-500 ${
                  index === currentIndex 
                    ? 'w-16 h-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full shadow-lg' 
                    : 'w-4 h-4 bg-white/30 rounded-full hover:bg-white/50 hover:scale-125'
                }`}
              >
                {index === currentIndex && (
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 rounded-full animate-pulse"></div>
                )}
              </button>
                ))}
              </div>

          {/* Enhanced Team Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                onClick={() => goToSlide(index)}
                className={`cursor-pointer group transition-all duration-500 ${
                  index === currentIndex ? 'opacity-100 scale-105' : 'opacity-70 hover:opacity-90'
                }`}
              >
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border border-white/20">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-white/30">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-white text-base truncate">
                        {member.name}
                      </h4>
                      <p className="text-emerald-200 text-sm truncate">
                        {member.position}
                      </p>
                    </div>
                    <div className={`p-2 rounded-lg ${
                      index === currentIndex ? 'bg-gradient-to-r from-emerald-500/30 to-cyan-500/30' : 'bg-white/10'
                    }`}>
                      {member.icon}
            </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
