"use client";
import { useState, useEffect } from "react";
import { MessageCircle, X, Phone, Mail, Clock } from "lucide-react";

interface WhatsAppChatProps {
  phoneNumber?: string;
  message?: string;
  position?: "bottom-right" | "bottom-left";
}

export default function WhatsAppChat({
  phoneNumber = "+22344906692",
  message = "Bonjour ! Je souhaite obtenir des informations sur vos services.",
  position = "bottom-right"
}: WhatsAppChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Afficher le chat après 3 secondes
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const quickMessages = [
    "Prix du gasoil premium",
    "Transport pétrolier",
    "Location de véhicules",
    "Devis personnalisé",
    "Urgence livraison"
  ];

  if (!isVisible) return null;

  return (
    <>
      {/* Chat Widget */}
      <div className={`fixed ${position === 'bottom-right' ? 'bottom-6 right-6' : 'bottom-6 left-6'} z-50`}>
        {/* Chat Window */}
        {isOpen && (
          <div className="mb-4 bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 max-w-[calc(100vw-2rem)] animate-slide-up">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">SYGIM ENERGIES</h3>
                    <p className="text-xs text-green-100">En ligne maintenant</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="mb-4">
                <div className="bg-gray-100 rounded-lg p-3 mb-3">
                  <p className="text-sm text-gray-700">
                    👋 Bonjour ! Je suis là pour vous aider avec vos besoins en carburants et transport.
                  </p>
                </div>
                
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-600 mb-3">Choisissez une option rapide :</p>
                  <div className="grid grid-cols-1 gap-2">
                    {quickMessages.map((msg, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          const encodedMsg = encodeURIComponent(msg);
                          const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodedMsg}`;
                          window.open(whatsappUrl, '_blank');
                        }}
                        className="text-left text-xs bg-gray-50 hover:bg-green-50 hover:text-green-700 p-2 rounded-lg transition-colors border border-gray-200"
                      >
                        {msg}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="border-t pt-3">
                <div className="flex items-center space-x-2 text-xs text-gray-600 mb-2">
                  <Phone className="w-3 h-3" />
                  <span>+223 44 90 66 92</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-gray-600 mb-3">
                  <Mail className="w-3 h-3" />
                  <span>boubatraore@sygim.net</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-gray-600">
                  <Clock className="w-3 h-3" />
                  <span>Disponible 24/7</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 p-3 rounded-b-2xl">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ouvrir WhatsApp</span>
              </button>
            </div>
          </div>
        )}

        {/* Chat Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group animate-bounce"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
          )}
        </button>
      </div>

      {/* Styles CSS pour les animations */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            transform: translate3d(0, -8px, 0);
          }
          70% {
            transform: translate3d(0, -4px, 0);
          }
          90% {
            transform: translate3d(0, -2px, 0);
          }
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </>
  );
}
