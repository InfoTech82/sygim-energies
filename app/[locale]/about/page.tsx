"use client";
import { Building2, Target, Sparkles, Award, ArrowRight, ChevronRight, Star, Zap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { useTranslations } from "next-intl";
import TeamCarousel from "@/components/site/TeamCarousel";

export default function AboutPage() {
  const pathname = usePathname();
  const base = useMemo(() => `/${pathname?.split("/")[1] || "fr"}`, [pathname]);
  const t = useTranslations('about');
  const company = useTranslations('company');

  const milestones = [
    { year: t('milestones.foundation.year'), title: company('name'), description: t('milestones.foundation.description'), icon: <Building2 className="w-6 h-6" />, color: "from-green-500 to-green-600" },
    { year: t('milestones.expansion.year'), title: t('milestones.expansion.title'), description: t('milestones.expansion.description'), icon: <Zap className="w-6 h-6" />, color: "from-green-600 to-green-700" },
    { year: t('milestones.leadership.year'), title: t('milestones.leadership.title'), description: t('milestones.leadership.description'), icon: <Award className="w-6 h-6" />, color: "from-green-700 to-green-800" },
    { year: t('milestones.international.year'), title: t('milestones.international.title'), description: t('milestones.international.description'), icon: <Star className="w-6 h-6" />, color: "from-green-400 to-green-500" },
  ];

  return (
    <div className="pt-20 sm:pt-24">
      {/* Hero About - Design Moderne */}
      <section className="hero-modern py-16 sm:py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center space-x-2 sm:space-x-4 glass-effect rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 mb-8 sm:mb-12 shadow-modern">
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
              <span className="text-xs sm:text-sm font-bold text-green-700">{t('title')}</span>
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6 animate-slide-up">
              <span className="text-gradient-3d">{t('subtitle')}</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-8 sm:mb-12 max-w-4xl mx-auto px-4">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Design Moderne */}
      <section className="section-modern bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 max-w-7xl mx-auto">
            <div className="card-modern card-3d animate-slide-up p-6 sm:p-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center text-white shadow-modern mb-4 sm:mb-6 group-hover:shadow-modern-lg transition-all duration-500">
                <Target className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 group-hover:text-gradient-modern transition-all duration-500">{t('mission.title')}</h3>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                {t('mission.description')}
              </p>
            </div>

            <div className="card-modern card-3d animate-slide-up p-6 sm:p-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center text-white shadow-modern mb-4 sm:mb-6 group-hover:shadow-modern-lg transition-all duration-500">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 group-hover:text-gradient-modern transition-all duration-500">{t('vision.title')}</h3>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                {t('vision.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Miniers & Garage - Design Moderne */}
      <section className="section-modern bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
              <span className="text-gradient-3d">{t('clients.title')}</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              {t('clients.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 max-w-7xl mx-auto">
            {/* Mines Servies */}
            <div className="card-modern card-3d animate-slide-up p-6 sm:p-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-2xl flex items-center justify-center text-white shadow-modern mb-4 sm:mb-6 group-hover:shadow-modern-lg transition-all duration-500">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 group-hover:text-gradient-modern transition-all duration-500">{t('clients.mines.title')}</h3>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-6">
                {t('clients.mines.description')}
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center space-x-2 p-3 bg-yellow-50 rounded-xl">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-gray-700">{t('clients.mines.goungoto')}</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-yellow-50 rounded-xl">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-gray-700">{t('clients.mines.loulo')}</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-yellow-50 rounded-xl">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-gray-700">{t('clients.mines.tabakoto')}</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-yellow-50 rounded-xl">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-gray-700">{t('clients.mines.nampala')}</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-yellow-50 rounded-xl">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-gray-700">{t('clients.mines.komana')}</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-yellow-50 rounded-xl">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-gray-700">{t('clients.mines.yanfolila')}</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4 italic">
                Région de Sikasso • Service fiable et professionnel
              </p>
            </div>

            {/* Garage Moderne */}
            <div className="card-modern card-3d animate-slide-up p-6 sm:p-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white shadow-modern mb-4 sm:mb-6 group-hover:shadow-modern-lg transition-all duration-500">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 group-hover:text-gradient-modern transition-all duration-500">{t('clients.garages.title')}</h3>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-6">
                {t('clients.garages.description')}
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-gray-700">{t('clients.garages.service')}</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-gray-700">{t('clients.garages.quality')}</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-gray-700">{t('clients.garages.delivery')}</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-gray-700">{t('clients.garages.support')}</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4 italic">
                Garantie de fiabilité et de performance pour tous nos véhicules
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients de Confiance - Design Moderne */}
      <section className="section-modern bg-gradient-to-br from-blue-50 to-indigo-50 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
              <span className="text-gradient-3d">{t('clients.trustedClients.title')}</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              {t('clients.trustedClients.subtitle')}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-6xl mx-auto">
            <div className="card-modern card-3d animate-scale-in p-4 sm:p-6 text-center group hover:scale-105 transition-all duration-300 w-48 sm:w-56" style={{animationDelay: '0.1s'}}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-modern mb-3 sm:mb-4 group-hover:shadow-modern-lg transition-all duration-500 mx-auto">
                <Building2 className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-blue-600 mb-1 group-hover:text-gradient-modern transition-all duration-500">{t('clients.types.transporters')}</h3>
              <p className="text-xs text-gray-600">Professionnels du transport</p>
            </div>

            <div className="card-modern card-3d animate-scale-in p-4 sm:p-6 text-center group hover:scale-105 transition-all duration-300 w-48 sm:w-56" style={{animationDelay: '0.4s'}}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-modern mb-3 sm:mb-4 group-hover:shadow-modern-lg transition-all duration-500 mx-auto">
                <Star className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-purple-600 mb-1 group-hover:text-gradient-modern transition-all duration-500">{t('clients.types.communities')}</h3>
              <p className="text-xs text-gray-600">Administrations publiques</p>
            </div>

            <div className="card-modern card-3d animate-scale-in p-4 sm:p-6 text-center group hover:scale-105 transition-all duration-300 w-48 sm:w-56" style={{animationDelay: '0.5s'}}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center text-white shadow-modern mb-3 sm:mb-4 group-hover:shadow-modern-lg transition-all duration-500 mx-auto">
                <Building2 className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-pink-600 mb-1 group-hover:text-gradient-modern transition-all duration-500">{t('clients.types.individuals')}</h3>
              <p className="text-xs text-gray-600">Clients individuels</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="card-modern card-3d animate-fade-in p-6 sm:p-8 max-w-4xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                🏆 Une confiance méritée
              </h3>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Cette diversité de clients - <strong>Transporteurs, Agriculteurs, BTP, Collectivités, Particuliers</strong> - 
                témoigne de notre capacité à répondre aux besoins spécifiques de chaque secteur d&apos;activité. 
                SYGIM ENERGIES SAS s&apos;adapte et excelle dans tous les domaines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Équipe - Carrousel Moderne */}
      <TeamCarousel />

      {/* Parcours - Design Moderne */}
      <section className="section-modern bg-gradient-to-br from-green-50 to-gray-50 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
              <span className="text-gradient-3d">{t('milestones.title')}</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              {t('milestones.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="stat-modern card-3d animate-scale-in p-6 sm:p-8" style={{animationDelay: `${index * 0.2}s`}}>
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${milestone.color} rounded-2xl flex items-center justify-center text-white shadow-modern mb-4 sm:mb-6 group-hover:shadow-modern-lg transition-all duration-500 mx-auto`}>
                  {milestone.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-black text-gradient-modern mb-3 sm:mb-4">{milestone.year}</div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">{milestone.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Design Moderne */}
      <section className="section-modern gradient-green text-white relative overflow-hidden py-12 sm:py-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 animate-fade-in">
            Découvrez Nos Solutions
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-12 sm:mb-16 opacity-90 max-w-4xl mx-auto animate-slide-up px-4">
            Explorez nos services et découvrez pourquoi nous sommes le leader du transport pétrolier
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 animate-fade-in">
            <Link href={`${base}/services`} className="w-full sm:w-auto">
              <button className="bg-white text-green-600 hover:bg-gray-100 px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl transition-all duration-300 shadow-modern hover:shadow-modern-lg flex items-center justify-center space-x-3 sm:space-x-4 group w-full sm:w-auto">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Nos Services</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
            
            <Link href={`${base}/contact`} className="w-full sm:w-auto">
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl transition-all duration-300 group w-full sm:w-auto flex items-center justify-center">
                <span>Nous Contacter</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}