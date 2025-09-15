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
    <div className="pt-20">
      {/* Hero Contact 3D */}
      <section className="hero-3d py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-md border border-blue-200 rounded-full px-8 py-4 mb-8 shadow-2xl">
              <MessageCircle className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-gray-700">Contact SYGIM ENERGIES SAS</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-8">
              <span className="text-gradient">Contactez</span>{" "}
              <span className="text-gray-800">SYGIM ENERGIES</span>
              <br />
              <span className="text-3xl md:text-5xl text-gray-600 font-normal">
                Service Client Bilingue
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-4xl mx-auto">
              BOUBACAR TRAORE, notre responsable RHQSE, et toute notre équipe sont à votre disposition 
              pour répondre à vos besoins en produits pétroliers et transport spécialisé.
            </p>
          </div>
        </div>
      </section>

      {/* Informations de Contact 3D */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <div key={info.title} className="stat-3d" style={{animationDelay: `${index * 0.15}s`}}>
                <div className={`icon-3d mx-auto mb-6 bg-gradient-to-br ${info.color}`}>
                  {info.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{info.title}</h4>
                <div className="text-lg font-semibold text-blue-600 mb-2">{info.value}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Méthodes de Contact 3D */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-gradient">Comment Nous</span>{" "}
              <span className="text-gray-800">Contacter ?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez la méthode qui vous convient le mieux
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={method.title} className="card-3d group text-center" style={{animationDelay: `${index * 0.2}s`}}>
                <div className={`icon-3d mx-auto mb-6 bg-gradient-to-br ${method.color}`}>
                  {method.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gradient transition-all duration-300">
                  {method.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-8">
                  {method.description}
                </p>

                <button className="btn-primary flex items-center justify-center space-x-2 mx-auto">
                  <span>{method.action}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de Contact 3D */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                <span className="text-gradient">Formulaire</span>{" "}
                <span className="text-gray-800">de Contact 3D</span>
              </h2>
              <p className="text-xl text-gray-600">
                Remplissez le formulaire ci-dessous et nous vous répondrons rapidement
              </p>
            </div>

            <div className="card-3d">
        <ContactForm />
      </div>
          </div>
        </div>
      </section>

      {/* CTA Final 3D */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Une Question ? Un Projet ?
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
            Notre équipe d&apos;experts est prête à vous accompagner dans tous vos projets énergétiques
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 flex items-center space-x-3">
              <Phone className="w-6 h-6" />
              <span>Appel Gratuit</span>
              <ArrowRight className="w-6 h-6" />
            </button>
            
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2">
              <Send className="w-6 h-6" />
              <span>Email Express</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}