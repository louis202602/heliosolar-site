import type { Metadata } from "next";
import { PageHero, FeatureGrid } from "@/components/PageHero";
export const metadata: Metadata = { title: "Solutions photovoltaïques — HelioSolar", description: "Toiture, ombrière, autoconsommation, stockage et valorisation photovoltaïque." };
const items = [
 {title:"Photovoltaïque en toiture",text:"Valorisez une toiture existante avec une implantation conçue pour la production, la durabilité et l’intégration au bâtiment.",metric:"Maison à industrie"},
 {title:"Ombrières photovoltaïques",text:"Transformez les parkings en actifs énergétiques tout en améliorant le confort d’usage et la protection des véhicules.",metric:"Parking & foncier"},
 {title:"Autoconsommation",text:"Consommez directement l’énergie produite et réduisez l’exposition de votre activité à la hausse des prix de l’électricité.",metric:"Pilotage sur mesure"},
 {title:"Stockage batterie",text:"Décalez l’utilisation de l’énergie solaire, absorbez les surplus et augmentez votre taux d’autonomie énergétique.",metric:"Option évolutive"},
 {title:"Revente du surplus",text:"Arbitrez entre autoconsommation, injection et stockage selon votre profil de consommation et vos objectifs économiques.",metric:"Stratégie hybride"},
 {title:"Supervision & suivi",text:"Suivez la production, détectez les écarts et conservez une vision claire de la performance de l’installation dans le temps.",metric:"Après mise en service"},
];
export default function Page(){return <><PageHero eyebrow="Solutions" title="Une architecture solaire adaptée à votre site." description="Chaque projet HelioSolar part de vos usages réels, des contraintes du bâtiment et de l’objectif économique recherché."/><section className="py-24 sm:py-28"><div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"><FeatureGrid items={items}/></div></section></>}
