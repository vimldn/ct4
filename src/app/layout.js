import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata = {
  title: 'Cosmetic Treatments London | Compare Top Providers | Free Quotes',
  description: 'Compare aesthetic treatment providers across London. Get free quotes for Botox, dermal fillers, lip fillers, chemical peels, and more from verified practitioners.',
  keywords: 'cosmetic treatments London, Botox London, dermal fillers London, lip fillers London, aesthetics London, anti-wrinkle London, skin treatments London',
  metadataBase: new URL('https://www.cosmetictreatment.co.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Cosmetic Treatments London | Compare Top Providers | Free Quotes',
    description: 'Compare aesthetic treatment providers across London. Get free quotes for Botox, dermal fillers, lip fillers, chemical peels, and more from verified practitioners.',
    url: 'https://www.cosmetictreatment.co.uk',
    siteName: 'Cosmetic Treatment UK',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cosmetic Treatments London | Compare Top Providers | Free Quotes',
    description: 'Compare aesthetic treatment providers across London. Get free quotes for Botox, dermal fillers, lip fillers, chemical peels, and more from verified practitioners.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Organization Schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Cosmetic Treatment UK',
  url: 'https://www.cosmetictreatment.co.uk',
  logo: 'https://www.cosmetictreatment.co.uk/logo.png',
  description: 'Compare and find the best cosmetic treatment providers across London. Get free quotes from verified aesthetic practitioners.',
  areaServed: {
    '@type': 'City',
    name: 'London',
    '@id': 'https://www.wikidata.org/wiki/Q84'
  },
  sameAs: []
};

// WebSite Schema with SearchAction
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Cosmetic Treatment UK',
  url: 'https://www.cosmetictreatment.co.uk',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.cosmetictreatment.co.uk/treatments?search={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0G8KENQHGH"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0G8KENQHGH');
        `}
      </Script>
      
      <body className="font-sans bg-gray-50 text-gray-900 antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
