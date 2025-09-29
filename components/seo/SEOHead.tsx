"use client";
import Head from "next/head";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  locale?: string;
}

export default function SEOHead({
  title = "SYGIM ENERGIES SAS - Leader du Secteur Pétrolier au Mali",
  description = "SYGIM ENERGIES SAS : Vente de carburants (GASOIL Premium, SUPER Sans Plomb), transport pétrolier, location de véhicules au Mali. Service professionnel 24/7 avec Boubacar Traoré RHQSE.",
  keywords = "carburant Mali, gasoil premium, super sans plomb, transport pétrolier, location véhicules, SYGIM ENERGIES, Boubacar Traoré, Bamako, énergie Mali",
  image = "/images/og-image.jpg",
  url = "https://sygim-energies.com",
  type = "website",
  locale = "fr_FR"
}: SEOHeadProps) {
  const fullTitle = title.includes("SYGIM ENERGIES") ? title : `${title} | SYGIM ENERGIES SAS`;
  
  return (
    <Head>
      {/* Meta Tags de Base */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="SYGIM ENERGIES SAS" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="fr" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="SYGIM ENERGIES SAS" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Schema.org - Organisation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SYGIM ENERGIES SAS",
            "alternateName": "SYGIM ENERGIES",
            "url": "https://sygim-energies.com",
            "logo": "https://sygim-energies.com/images/logo.png",
            "description": "Leader du secteur pétrolier au Mali, spécialisé dans la vente de carburants et le transport pétrolier",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Bamako",
              "addressLocality": "Bamako",
              "addressCountry": "Mali"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+223-44-90-66-92",
              "contactType": "customer service",
              "areaServed": "Mali",
              "availableLanguage": ["French", "English"]
            },
            "founder": {
              "@type": "Person",
              "name": "BOUBACAR TRAORE"
            },
            "employee": {
              "@type": "Person",
              "name": "BOUBACAR TRAORE",
              "jobTitle": "Responsable RHQSE"
            },
            "sameAs": [
              "https://www.facebook.com/sygimenergies",
              "https://www.linkedin.com/company/sygim-energies"
            ]
          })
        }}
      />
      
      {/* Schema.org - Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Vente de Carburants et Transport Pétrolier",
            "provider": {
              "@type": "Organization",
              "name": "SYGIM ENERGIES SAS"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Mali"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Produits Pétroliers",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "GASOIL Premium"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "SUPER Sans Plomb"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Transport Pétrolier"
                  }
                }
              ]
            }
          })
        }}
      />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect pour performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  );
}
