import residentialWaterSoftenerImg from "@/assets/residential-water-softener.png";
import adoucisseurFosseImg from "@/assets/Adoucisseurs d'eau.webp";
import adoucisseurPortableImg from "@/assets/adoucisseurs portables.jpg";
import conditionneursImg from "@/assets/avantages conditionneurs sans sel.jpg";
import factureElectriciteImg from "@/assets/resistance-chauffe-eau-electrique.jpg";
import consommationEcoImg from "@/assets/leaky-faucet-with-dripping-water-drop-conservation-concept.jpg";
import electromenagersTartreImg from "@/assets/lave vaisselle entartrée avec du calcaire.jpeg";
import boireEauAdoucieImg from "@/assets/boire-eau-robinet.jpg";
import goutChloreImg from "@/assets/eau trouble turbide.avif";
import hivernisationImg from "@/assets/problem_hero_bg.jpg";
import bacSelImg from "@/assets/Adoucisseurs d'eau.webp";
import choixSelImg from "@/assets/cover-enlever-tartre-de-lave-vaisselle.jpg";
import eauOsmoseeImg from "@/assets/Solutions d'eau potable.webp";
import vraiCoutImg from "@/assets/boire-eau-robinet.jpg";
import eauBebesImg from "@/assets/Solutions d'eau potable.webp";

export const categories = [
    {
        title: "Adoucissement de l'eau",
        id: "adoucissement",
        products: [
            {
                title: "Adoucisseur avec sel ou sans sel ?",
                desc: "Comparaison complète entre les deux technologies pour faire le bon choix selon votre eau.",
                image: conditionneursImg,
                href: "/adoucisseur-sans-sel-vs-avec-sel-verite-technique"
            },
            {
                title: "Comment régler la dureté de votre adoucisseur ?",
                desc: "Guide complet pour calibrer votre adoucisseur : analyse, programmation et signes d'un mauvais réglage.",
                image: residentialWaterSoftenerImg,
                href: "/comment-regler-durete-adoucisseur-eau"
            },
            {
                title: "Adoucisseur d'eau portable pour VR",
                desc: "Confort et protection en voyage : comment un adoucisseur portable protège votre VR et améliore votre quotidien.",
                image: adoucisseurPortableImg,
                href: "/adoucisseur-deau-portable-pour-vr"
            },
            {
                title: "Comment un adoucisseur réduit votre facture d'électricité ?",
                desc: "Découvrez comment l'élimination du calcaire optimise vos appareils et réduit votre consommation d'énergie de manière mesurable.",
                image: factureElectriciteImg,
                href: "/comment-un-adoucisseur-reduit-votre-facture-delectricite"
            },
            {
                title: "Consommation d'eau : Un adoucisseur est-il écologique ?",
                desc: "Découvrez comment un adoucisseur bien réglé contribue à une gestion durable de l'eau et de l'énergie dans votre foyer.",
                image: consommationEcoImg,
                href: "/consommation-deau-un-adoucisseur-est-il-ecologique"
            },
            {
                title: "Eau dure : Les effets cachés sur vos électroménagers",
                desc: "Découvrez comment l'eau dure et le calcaire endommagent silencieusement vos électroménagers, augmentent vos factures et comment y remédier avec un adoucisseur.",
                image: electromenagersTartreImg,
                href: "/eau-dure-les-effets-caches-sur-vos-electromenagers"
            },
            {
                title: "Est-ce sécuritaire de boire de l'eau adoucie ?",
                desc: "Découvrez l'impact du sodium, la sécurité du procédé et les recommandations pour remplacer le calcaire en toute tranquillité.",
                image: boireEauAdoucieImg,
                href: "/est-ce-securitaire-de-boire-de-leau-adoucie"
            },
            {
                title: "Pourquoi l'eau de votre bac à sel est-elle sale ?",
                desc: "Découvrez pourquoi l'eau du bac à sel de votre adoucisseur peut devenir sale, trouble ou colorée, et apprenez comment régler efficacement ce problème.",
                image: bacSelImg,
                href: "/pourquoi-leau-de-votre-bac-a-sel-est-elle-sale"
            },
            {
                title: "Quel sel choisir pour votre adoucisseur : Pastilles ou cristaux ?",
                desc: "Découvrez comment choisir le meilleur sel pour votre adoucisseur d'eau au Québec. Pastilles ou cristaux ? Avantages et inconvénients pour un système performant.",
                image: choixSelImg,
                href: "/quel-sel-choisir-pour-votre-adoucisseur-pastilles-ou-cristaux"
            }
        ]
    },
    {
        title: "Eau de Puits & Problèmes Spécialisés",
        id: "eau-de-puits",
        products: [
            {
                title: "Adoucisseur d'eau et fosse septique",
                desc: "Mythes et réalités sur la compatibilité entre un adoucisseur d'eau et une fosse septique au Québec.",
                image: adoucisseurFosseImg,
                href: "/adoucisseur-deau-et-fosse-septique-mythes-et-realites"
            },
            {
                title: "Goût de chlore : Pourquoi la ville en ajoute autant ?",
                desc: "Découvrez pourquoi l'eau de la ville sent parfois le chlore, son rôle essentiel pour la désinfection et les solutions simples pour obtenir une eau au goût parfait.",
                image: goutChloreImg,
                href: "/gout-de-chlore-pourquoi-la-ville-en-ajoute-autant"
            },
            {
                title: "Hivernisation : Comment protéger vos filtres du gel",
                desc: "Découvrez les étapes essentielles de l'hivernisation pour protéger vos systèmes de filtration et adoucisseurs d'eau du gel pendant l'hiver québécois.",
                image: hivernisationImg,
                href: "/hivernisation-comment-proteger-vos-filtres-du-gel"
            }
        ]
    },
    {
        title: "Osmose Inverse & Eau Potable",
        id: "osmose-inverse",
        products: [
            {
                title: "Aquarium : Pourquoi l'eau osmosée est vitale pour vos poissons",
                desc: "Découvrez pourquoi l'eau osmosée est le choix parfait pour offrir à vos poissons d'aquarium un environnement pur, stable et sain.",
                image: eauOsmoseeImg,
                href: "/aquarium-pourquoi-leau-osmosee-est-vitale-pour-vos-poissons"
            },
            {
                title: "Le vrai coût de l'eau embouteillée : Calculez vos économies",
                desc: "Découvrez pourquoi abandonner l'eau embouteillée au profit d'un système de traitement d'eau domestique est un choix pratique, économique et écologique pour votre famille.",
                image: vraiCoutImg,
                href: "/le-vrai-cout-de-leau-embouteillee-calculez-vos-economies"
            },
            {
                title: "Eau et bébés : Faut-il faire bouillir l'eau filtrée ?",
                desc: "Découvrez pourquoi il est recommandé de faire bouillir l'eau filtrée avant de la donner à un nourrisson et comment assurer une sécurité optimale avec votre système de traitement d'eau.",
                image: eauBebesImg,
                href: "/eau-et-bebes-faut-il-faire-bouillir-leau-filtree"
            }
        ]
    }
];
