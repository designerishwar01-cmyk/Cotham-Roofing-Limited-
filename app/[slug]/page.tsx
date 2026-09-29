import { notFound } from 'next/navigation';
import { ServicePage, WorkPage, AboutPage, ContactPage, LegalPage } from '@/components/roofline';
import { services } from '@/lib/roofline-data';
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const service=services.find(s=>s.slug===slug);
 return {title:service?`${service.name} in Bristol`:({'our-work':'Our work',about:'About us',contact:'Contact & free quote',privacy:'Privacy',legal:'Legal information'}[slug]||'Not found'),description:service?.description||'Cotham Roofing Limited — roofing across Bristol and surrounding areas.'};
}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;
 if(services.some(s=>s.slug===slug))return <ServicePage slug={slug}/>;
 if(slug==='our-work')return <WorkPage/>;
 if(slug==='about')return <AboutPage/>;
 if(slug==='contact')return <ContactPage/>;
 if(slug==='privacy'||slug==='legal')return <LegalPage privacy={slug==='privacy'}/>;
 notFound();
}
