"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { Zap, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Star, Sparkles, Handshake } from "lucide-react";

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
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Logo et description - Design Moderne */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-modern bg-white border-2 border-green-400 card-3d">
                <Image
                  src="/images/logo.jpg"
                  alt="SYGIM ENERGIES Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
        <div>
                <div className="text-2xl font-black text-gradient-3d">SYGIM ENERGIES SAS</div>
                <div className="text-sm text-green-300 font-semibold tracking-wider uppercase">Capital 10 Milliards FCFA</div>
                <div className="text-xs text-gray-400 font-medium">Leader du Transport Pétrolier</div>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-8 max-w-lg">
              Leader dans la commercialisation de produits pétroliers et le transport spécialisé 
              avec plus de 200 véhicules articulés. Service bilingue international.
            </p>

            {/* Contact - Design Moderne */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">BOUBACAR TRAORE - RHQSE</div>
                  <div className="text-gray-300 text-sm">Responsable RHQSE</div>
                  <div className="text-gray-300 text-sm">+223 44 90 66 92</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
        </div>
        <div>
                  <div className="text-white font-semibold">boubatraore@sygim.net</div>
                  <div className="text-gray-300 text-sm">Email professionnel</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
        </div>
        <div>
                  <div className="text-white font-semibold">Bamako, Mali</div>
                  <div className="text-gray-300 text-sm">Siège social</div>
                </div>
              </div>
            </div>
          </div>

          {/* Liens rapides - Design Moderne */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-gradient-3d">Navigation</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={`${base}${link.href === "/" ? "" : link.href}`}
                  className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-all duration-300 group p-2 rounded-xl hover:bg-white/10"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </div>
                  <span className="font-medium">{link.label}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Services - Design Moderne */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-gradient-3d">Nos Produits</h4>
            <div className="space-y-4">
              {services.map((service) => (
                <div key={service} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-300 font-medium group-hover:text-green-400 transition-colors duration-300">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section - Design Moderne */}
        <div className="border-t border-gray-600 mt-20 pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-8 mb-8 md:mb-0">
              <span className="text-gray-400 font-semibold">Suivez-nous :</span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-12 h-12 bg-gray-700 ${social.color} rounded-2xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 shadow-modern hover:shadow-modern-lg transform hover:-translate-y-1`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <div className="text-gray-400 text-center md:text-right">
              <p className="text-lg font-semibold">&copy; 2025 SYGIM ENERGIES SAS. Tous droits réservés.</p>
              <p className="mt-2 text-sm">Leader du Transport Pétrolier • Service Bilingue International</p>
            </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
