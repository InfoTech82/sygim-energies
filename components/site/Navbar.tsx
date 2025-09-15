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
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        {/* Logo SYGIM ENERGIES - Design Moderne */}
        <Link href={`${base}`} className="flex items-center space-x-4 group">
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-modern group-hover:shadow-modern-lg transition-all duration-500 bg-white border-2 border-green-200 group-hover:border-green-300 card-3d">
            <Image
              src="/images/logo.jpg"
              alt="SYGIM ENERGIES Logo"
              fill
              className="object-contain p-2"
              priority
            />
          </div>
          {/* <div className="hidden md:block">
            <div className="text-2xl font-black text-gradient-3d">SYGIM ENERGIES</div>
            <div className="text-xs text-green-600 font-semibold tracking-wider uppercase">SAS • Capital 10M FCFA</div>
            <div className="text-xs text-gray-500 font-medium">Leader du Transport Pétrolier</div>
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
        <div className="flex items-center space-x-4">
          <Link href={`${base}/order`}>
            <button className="btn-modern flex items-center space-x-3 group">
              <div className="relative w-6 h-6">
                <Image
                  src="/images/logo.jpg"
                  alt="SYGIM"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold">{cta('orderNow')}</span>
              <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
            </button>
          </Link>
          
          <LanguageSwitcher />

          {/* Menu mobile - Style Moderne */}
          <button
            className="lg:hidden p-3 rounded-2xl hover:bg-green-50 transition-all duration-300 group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu className={`w-6 h-6 text-gray-700 group-hover:text-green-600 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
              <X className={`w-6 h-6 text-gray-700 group-hover:text-green-600 transition-all duration-300 absolute top-0 left-0 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Menu mobile - Design Moderne */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-green-100 shadow-modern-lg animate-fade-in">
          <nav className="container mx-auto px-6 py-8 space-y-2">
            {navItems.map((item, index) => (
              <Link 
                key={item.href}
                href={`${base}${item.href === "/" ? "" : item.href}`}
                className="flex items-center space-x-4 px-6 py-4 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-2xl transition-all duration-300 font-semibold group card-modern"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="text-lg">{item.label}</span>
              </Link>
            ))}
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
      className="flex items-center space-x-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors duration-200 border border-gray-200"
    >
      <span className="text-lg">{current === "fr" ? "🇫🇷" : "🇺🇸"}</span>
      <span className="text-sm font-semibold text-gray-700">{current.toUpperCase()}</span>
    </Link>
  );
}
