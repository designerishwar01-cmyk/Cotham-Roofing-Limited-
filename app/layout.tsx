import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: { default: 'Cotham Roofing Limited | Roofing in Bristol', template: '%s | Cotham Roofing Limited' },
  description: 'Roof repairs, replacements and roofline work for homes across Bristol and surrounding areas. Explore the Cotham Roofing Limited website demo.',
  metadataBase: new URL('https://reading-roofline.designerishwar01.chatgpt.site'),
  robots: { index: false, follow: false },
  icons: { icon: '/favicon.svg' },
  openGraph: { title: 'Cotham Roofing Limited', description: 'Built to handle British weather. Roofing across Bristol and surrounding areas.', type: 'website', locale: 'en_GB' },
};
export default function RootLayout({children}: Readonly<{children:React.ReactNode}>) {
  return <html lang="en-GB"><head><link rel="preload" href="/fonts/display.woff" as="font" type="font/woff" crossOrigin="anonymous"/><link rel="preload" href="/fonts/body.woff" as="font" type="font/woff" crossOrigin="anonymous"/></head><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"RoofingContractor",name:"Cotham Roofing Limited",telephone:"+447392809776",areaServed:{"@type":"City",name:"Bristol"}})}}/>{children}</body></html>;
}
