"use client";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, ArrowRight } from "lucide-react";
import ContactForm from "@/components/site/ContactForm";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Contact Principal",
      value: "BOUBACAR TRAORE",
      description: "RHQSE - Responsable Qualité Sécurité Environnement",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Principal",
      value: "boubatraore@sygim.net",
      description: "Contact direct pour tous vos besoins",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Siège Social",
      value: "Abidjan, Côte d&apos;Ivoire",
      description: "Centre de distribution et stations",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Service Bilingue",
      value: "Français / English",
      description: "Support client international 24/7",
      color: "from-orange-500 to-orange-600"
    },
  ];

  const contactMethods = [
    {
      title: "Contact Immédiat",
      description: "Pour les urgences et commandes express",
      icon: <Phone className="w-10 h-10" />,
      action: "Appeler maintenant",
      color: "from-red-500 to-red-600"
    },
    {
      title: "Formulaire 3D",
      description: "Pour les demandes détaillées et devis",
      icon: <MessageCircle className="w-10 h-10" />,
      action: "Remplir le formulaire",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Visite Guidée",
      description: "Découvrez nos installations en personne",
      icon: <MapPin className="w-10 h-10" />,
      action: "Planifier une visite",
      color: "from-green-500 to-green-600"
    },
  ];

  return (
    <div className="pt-20 sm:pt-24">
      {/* Hero Contact - Design Moderne */}
      <section className="hero-modern py-16 sm:py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center space-x-2 sm:space-x-4 glass-effect rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 mb-8 sm:mb-12 shadow-modern">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
              <span className="text-xs sm:text-sm font-bold text-green-700">Contact SYGIM ENERGIES SAS</span>
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6 animate-slide-up">
              <span className="text-gradient-3d">Contactez</span>{" "}
              <span className="text-gray-800">Nos Experts</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-8 sm:mb-12 max-w-4xl mx-auto px-4">
              BOUBACAR TRAORE, notre responsable RHQSE, et toute notre équipe sont à votre disposition 
              pour répondre à vos besoins en produits pétroliers et transport spécialisé.
            </p>
          </div>
        </div>
      </section>

      {/* Informations de Contact - Design Moderne */}
      <section className="section-modern bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {contactInfo.map((info, index) => (
              <div key={info.title} className="stat-modern card-3d animate-scale-in p-6 sm:p-8" style={{animationDelay: `${index * 0.15}s`}}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white shadow-modern mb-4 sm:mb-6 group-hover:shadow-modern-lg transition-all duration-500 mx-auto">
                  {info.icon}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-2 text-center">{info.title}</h4>
                <div className="text-base sm:text-lg font-semibold text-green-600 mb-2 text-center">{info.value}</div>
                <p className="text-gray-600 text-sm leading-relaxed text-center">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Méthodes de Contact - Design Moderne */}
      <section className="section-modern bg-gradient-to-br from-green-50 to-gray-50 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
              <span className="text-gradient-3d">Comment Nous</span>{" "}
              <span className="text-gray-800">Contacter ?</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Choisissez la méthode qui vous convient le mieux
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {contactMethods.map((method, index) => (
              <div key={method.title} className="card-modern card-3d group text-center animate-slide-up p-6 sm:p-8" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white shadow-modern mb-4 sm:mb-6 group-hover:shadow-modern-lg transition-all duration-500 mx-auto">
                  {method.icon}
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-gradient-modern transition-all duration-300">
                  {method.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                  {method.description}
                </p>

                <button className="btn-modern flex items-center justify-center space-x-2 mx-auto py-3 sm:py-4 text-sm sm:text-base">
                  <span>{method.action}</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de Contact - Design Moderne */}
      <section className="section-modern bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
                <span className="text-gradient-3d">Formulaire</span>{" "}
                <span className="text-gray-800">de Contact</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 px-4">
                Remplissez le formulaire ci-dessous et nous vous répondrons rapidement
              </p>
            </div>

            <div className="card-modern p-6 sm:p-8">
        <ContactForm />
      </div>
          </div>
        </div>
      </section>

      {/* CTA Final - Design Moderne */}
      <section className="section-modern gradient-green text-white relative overflow-hidden py-12 sm:py-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8 animate-fade-in">
            Une Question ? Un Projet ?
          </h2>
          <p className="text-lg sm:text-xl mb-12 sm:mb-16 opacity-90 max-w-3xl mx-auto animate-slide-up px-4">
            Notre équipe d&apos;experts est prête à vous accompagner dans tous vos projets énergétiques
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 animate-fade-in">
            <button className="bg-white text-green-600 hover:bg-gray-100 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl transition-all duration-300 shadow-modern hover:shadow-modern-lg flex items-center justify-center space-x-3 sm:space-x-4 group w-full sm:w-auto">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Appel Gratuit</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl transition-all duration-300 group w-full sm:w-auto flex items-center justify-center">
              <Send className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Email Express</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}