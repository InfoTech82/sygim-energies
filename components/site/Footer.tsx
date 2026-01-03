"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { Zap, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Star, Sparkles, Handshake, Code2, Heart } from "lucide-react";
import TechmaCorporation from "./TechmaCorporation";

export default function Footer() {
  const pathname = usePathname();
  const base = useMemo(() => `/${pathname?.split("/")[1] || "fr"}`, [pathname]);
  const t = useTranslations('navbar');

  const quickLinks = [
    { href: "/", label: t('home'), icon: <Zap className="w-4 h-4" /> },
    { href: "/about", label: t('about'), icon: <Star className="w-4 h-4" /> },
    { href: "/services", label: t('services'), icon: <Sparkles className="w-4 h-4" /> },
    { href: "/fleet", label: t('fleet'), icon: <Zap className="w-4 h-4" /> },
    { href: "/partners", label: t('partners'), icon: <Handshake className="w-4 h-4" /> },
    { href: "/order", label: t('order'), icon: <ArrowRight className="w-4 h-4" /> },
    { href: "/contact", label: t('contact'), icon: <Phone className="w-4 h-4" /> },
  ];

  const services = [
    "GASOIL Premium",
    "SUPER Sans Plomb",
    "Huiles Moteur RYMAX (Rep. Officiel)", 
    "Graisses & Lubrifiants",
    "Transport Pétrolier",
    "Location Véhicules",
    "Service Bilingue 24/7"
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", name: "Facebook", color: "hover:bg-blue-600" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter", color: "hover:bg-sky-500" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", name: "LinkedIn", color: "hover:bg-blue-700" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", name: "Instagram", color: "hover:bg-pink-600" },
  ];

  return (
    <footer className="footer-modern text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
          {/* Logo et description - Design Moderne */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shadow-modern bg-white border-2 border-green-400 card-3d flex-shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="SYGIM ENERGIES Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-gradient-3d">SYGIM ENERGIES SAS</div>
                <div className="text-xs sm:text-sm text-green-300 font-semibold tracking-wider uppercase">Capital 10 Millions FCFA</div>
                <div className="text-xs text-gray-400 font-medium">Leader du Transport Pétrolier</div>
              </div>
            </div>
            
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 sm:mb-8 max-w-lg">
              Leader dans la commercialisation de produits pétroliers et le transport spécialisé 
              avec plus de 200 véhicules articulés. Service bilingue international.
            </p>

            {/* Contact - Design Moderne */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-white font-semibold text-sm sm:text-base break-words">BOUBACAR TRAORE - RHQSE</div>
                  <div className="text-gray-300 text-xs sm:text-sm">Responsable RHQSE</div>
                  <div className="text-gray-300 text-xs sm:text-sm break-all">+223 44 90 66 92</div>
                </div>
              </div>
              
              <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-white font-semibold text-xs sm:text-base break-all">boubatraore@sygim.net</div>
                  <div className="text-white font-semibold text-xs sm:text-base break-all">tidianisylla4@yahoo.com</div>
                  <div className="text-gray-300 text-xs sm:text-sm">Emails professionnels</div>
                </div>
              </div>
              
              <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-white font-semibold text-sm sm:text-base">Bamako, Mali</div>
                  <div className="text-gray-300 text-xs sm:text-sm">Siège social</div>
                </div>
              </div>
            </div>
          </div>

          {/* Liens rapides - Design Moderne */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gradient-3d">Navigation</h4>
            <nav className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={`${base}${link.href === "/" ? "" : link.href}`}
                  className="flex items-center space-x-2 sm:space-x-3 text-gray-300 hover:text-green-400 transition-all duration-300 group p-2 rounded-xl hover:bg-white/10"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {link.icon}
                  </div>
                  <span className="font-medium text-sm sm:text-base">{link.label}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Services - Design Moderne */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gradient-3d">Nos Produits</h4>
            <div className="space-y-2 sm:space-y-4">
              {services.map((service) => (
                <div key={service} className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full group-hover:scale-125 transition-transform duration-300 flex-shrink-0"></div>
                  <span className="text-gray-300 font-medium text-xs sm:text-sm group-hover:text-green-400 transition-colors duration-300 break-words">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section - Design Moderne */}
        <div className="border-t border-gray-600 mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 md:pt-12">
          {/* Section Développeur - Design Amélioré */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-green-600/20 to-green-500/20 rounded-full border border-green-500/30 mb-3 sm:mb-4">
                <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400" />
                <span className="text-xs sm:text-sm text-gray-300 font-semibold uppercase tracking-wider">
                  Site développé par
                </span>
              </div>
              <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> by TechmaCorporation
              </p>
            </div>
            <div className="flex justify-center px-4">
              <TechmaCorporation theme="dark" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-8">
              <span className="text-gray-400 font-semibold text-sm sm:text-base">Suivez-nous :</span>
              <div className="flex items-center space-x-3 sm:space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 ${social.color} rounded-xl sm:rounded-2xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 shadow-modern hover:shadow-modern-lg transform hover:-translate-y-1`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="text-gray-400 text-center md:text-right">
              <p className="text-sm sm:text-base md:text-lg font-semibold">&copy; 2025 SYGIM ENERGIES SAS. Tous droits réservés.</p>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm">Leader du Transport Pétrolier • Service Bilingue International</p>
            </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
