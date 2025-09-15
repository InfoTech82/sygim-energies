"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X, Zap, ChevronDown } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const base = useMemo(() => `/${pathname?.split("/")[1] || "fr"}`, [pathname]);
  const t = useTranslations('navbar');
  const cta = useTranslations('cta');
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: t('home'), icon: <Zap className="w-4 h-4" /> },
    { href: "/about", label: t('about'), icon: <Zap className="w-4 h-4" /> },
    { href: "/services", label: t('services'), icon: <Zap className="w-4 h-4" /> },
    { href: "/fleet", label: t('fleet'), icon: <Zap className="w-4 h-4" /> },
    { href: "/order", label: t('order'), icon: <Zap className="w-4 h-4" /> },
    { href: "/contact", label: t('contact'), icon: <Zap className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-50 w-full navbar-modern">
      <div className="container mx-auto flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6">
        {/* Logo SYGIM ENERGIES - Design Moderne */}
        <Link href={`${base}`} className="flex items-center space-x-2 sm:space-x-4 group">
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shadow-modern group-hover:shadow-modern-lg transition-all duration-500 bg-white border-2 border-green-200 group-hover:border-green-300 card-3d">
            <Image
              src="/images/logo.jpg"
              alt="SYGIM ENERGIES Logo"
              fill
              className="object-contain p-1 sm:p-2"
              priority
            />
          </div>
          {/* <div className="hidden sm:block">
            <div className="text-lg sm:text-xl font-black text-gradient-3d">SYGIM ENERGIES</div>
            <div className="text-xs text-green-600 font-semibold tracking-wider uppercase">SAS • Capital 10M FCFA</div>
          </div> */}
        </Link>

        {/* Navigation Desktop - Style Moderne */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              href={`${base}${item.href === "/" ? "" : item.href}`}
              className="relative px-4 py-2 text-gray-700 hover:text-green-600 font-semibold transition-all duration-300 group rounded-xl hover:bg-green-50"
            >
              <div className="flex items-center space-x-2">
                {item.icon}
                <span>{item.label}</span>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-green-600 to-green-700 group-hover:w-4/5 transition-all duration-300 rounded-full"></div>
            </Link>
          ))}
        </nav>

        {/* Actions - Design Moderne */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Link href={`${base}/order`} className="hidden sm:block">
            <button className="btn-modern flex items-center space-x-2 sm:space-x-3 group px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">
              <div className="relative w-4 h-4 sm:w-6 sm:h-6">
                <Image
                  src="/images/logo.jpg"
                  alt="SYGIM"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold hidden sm:inline">{cta('orderNow')}</span>
              <span className="font-bold sm:hidden">Commander</span>
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 group-hover:rotate-180 transition-transform duration-300" />
            </button>
          </Link>
          
          <LanguageSwitcher />

          {/* Menu mobile - Style Moderne */}
          <button
            className="lg:hidden p-2 sm:p-3 rounded-2xl hover:bg-green-50 transition-all duration-300 group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-5 h-5 sm:w-6 sm:h-6">
              <Menu className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-green-600 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
              <X className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-green-600 transition-all duration-300 absolute top-0 left-0 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Menu mobile - Design Moderne */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-green-100 shadow-modern-lg animate-fade-in">
          <nav className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-2">
            {navItems.map((item, index) => (
              <Link 
                key={item.href}
                href={`${base}${item.href === "/" ? "" : item.href}`}
                className="flex items-center space-x-3 sm:space-x-4 px-4 sm:px-6 py-3 sm:py-4 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-2xl transition-all duration-300 font-semibold group card-modern"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="text-base sm:text-lg">{item.label}</span>
              </Link>
            ))}
            
            {/* Bouton Commander dans le menu mobile */}
            <div className="pt-4 border-t border-green-100">
              <Link href={`${base}/order`} className="block" onClick={() => setIsOpen(false)}>
                <button className="btn-modern flex items-center justify-center space-x-3 group w-full px-6 py-4 text-base">
                  <div className="relative w-5 h-5">
                    <Image
                      src="/images/logo.jpg"
                      alt="SYGIM"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-bold">Commander maintenant</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function LanguageSwitcher() {
  const pathname = usePathname();
  const parts = (pathname || "/fr").split("/");
  const current = parts[1] || "fr";
  const rest = parts.slice(2).join("/");
  const other = current === "fr" ? "en" : "fr";
  const href = `/${other}${rest ? "/" + rest : ""}`;

  return (
    <Link 
      href={href} 
      className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors duration-200 border border-gray-200"
    >
      <span className="text-base sm:text-lg">{current === "fr" ? "🇫🇷" : "🇺🇸"}</span>
      <span className="text-xs sm:text-sm font-semibold text-gray-700 hidden sm:inline">{current.toUpperCase()}</span>
    </Link>
  );
}
