"use client";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  
  const currentLocale = useMemo(() => {
    return pathname?.split("/")[1] || "fr";
  }, [pathname]);

  const switchLanguage = (locale: string) => {
    const segments = pathname?.split("/") || [];
    segments[1] = locale;
    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-4 h-4 text-gray-600" />
      <div className="flex bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => switchLanguage("fr")}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 ${
            currentLocale === "fr"
              ? "bg-green-600 text-white shadow-sm"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
          }`}
        >
          FR
        </button>
        <button
          onClick={() => switchLanguage("en")}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 ${
            currentLocale === "en"
              ? "bg-green-600 text-white shadow-sm"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
}
