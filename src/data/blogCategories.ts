import residentialWaterSoftenerImg from "@/assets/2149186343.jpg";
import adoucisseurFosseImg from "@/assets/Cover-Image.webp";
import adoucisseurPortableImg from "@/assets/adoucisseurs portables.jpg";
import conditionneursImg from "@/assets/avantages conditionneurs sans sel.jpg";
import factureElectriciteImg from "@/assets/resistance-chauffe-eau-electrique.jpg";
import consommationEcoImg from "@/assets/leaky-faucet-with-dripping-water-drop-conservation-concept.jpg";
import electromenagersTartreImg from "@/assets/lave vaisselle entartrée avec du calcaire.jpeg";
import boireEauAdoucieImg from "@/assets/boire-eau-robinet.jpg";
import goutChloreImg from "@/assets/blog3-1.jpg";
import hivernisationImg from "@/assets/13828.jpg";
import bacSelImg from "@/assets/VRB3SAw.jpg";
import choixSelImg from "@/assets/sel-adoucisseur.avif";
import eauOsmoseeImg from "@/assets/31794.jpg";
import vraiCoutImg from "@/assets/24835.jpg";
import eauBebesImg from "@/assets/When-Can-Babies-Have-Water.jpg";
import filtreSousEvierImg from "@/assets/2150495122.jpg";
import fluorFiltrationImg from "@/assets/3162.jpg";
import plombVieillesMaisonsImg from "@/assets/plomb-canalisation-tuyau-eau.avif";
import eauVilleFiltreeImg from "@/assets/4219.jpg";
import eauPureCafeImg from "@/assets/19533.jpg";
import eauPurePatisseriesImg from "@/assets/2537.jpg";
import condoFiltrationImg from "@/assets/hero-image.jpg";
import lampeUvImg from "@/assets/UV-system.jpg";
import lampeUvBoxImg from "@/assets/Lumière UV.jpg";
import risquesUvImg from "@/assets/1414802738-3-1.jpg";
import bacteriesPuitsImg from "@/assets/puits.jpg";
import eauFerManganeseImg from "@/assets/eau-fer-manganèse.jpg";
import filtreCartoucheVsContreCourantImg from "@/assets/Double Stage Filter.jpg";
import injectionAirFerImg from "@/assets/systeme-filtration-fer.png";
import nitratesEauPuitsImg from "@/assets/water testing.jpeg";
import eauEmbouteilleeDangersImg from "@/assets/258.jpg";
import eauEmbouteilleeImpactsImg from "@/assets/2148214464.jpg"
import healthwaterImg from "@/assets/28663.jpg";
import purewaterImg from "@/assets/185091336.jpg";
import drinkpurewaterImg from "@/assets/2148354772.jpg";
import rowaterImg from "@/assets/reasons-to-drink-more-water.jpg";
import osmosewellwaterImg from "@/assets/39677.jpg";

export const categories = [
    {
        title: "Adoucissement de l'eau",
        id: "adoucissement",
        products: [
            {
                title: "Adoucisseur sans sel vs avec sel : La vérité technique",
                desc: "Comparaison complète entre les deux technologies pour faire le bon choix selon votre eau.",
                image: conditionneursImg,
                href: "/adoucisseur-sans-sel-vs-avec-sel-verite-technique",
                readTime: "6 min"
            },
            {
                title: "Comment régler la dureté de votre adoucisseur d'eau ?",
                desc: "Guide complet pour calibrer votre adoucisseur : analyse, programmation et signes d'un mauvais réglage.",
                image: residentialWaterSoftenerImg,
                href: "/comment-regler-durete-adoucisseur-eau",
                readTime: "5 min"
            },
            {
                title: "Adoucisseur d'eau portable pour VR : confort et protection en voyage",
                desc: "Confort et protection en voyage : comment un adoucisseur portable protège votre VR et améliore votre quotidien.",
                image: adoucisseurPortableImg,
                href: "/adoucisseur-deau-portable-pour-vr",
                readTime: "4 min"
            },
            {
                title: "Comment un adoucisseur réduit votre facture d'électricité ?",
                desc: "Découvrir comment l'élimination du calcaire optimise vos appareils et réduit votre consommation d'énergie de manière mesurable.",
                image: factureElectriciteImg,
                href: "/comment-un-adoucisseur-reduit-votre-facture-delectricite",
                readTime: "6 min"
            },
            {
                title: "Consommation d'eau : Un adoucisseur est-il écologique ?",
                desc: "Découvrir comment un adoucisseur bien réglé contribue à une gestion durable de l'eau et de l'énergie dans votre foyer.",
                image: consommationEcoImg,
                href: "/consommation-deau-un-adoucisseur-est-il-ecologique",
                readTime: "5 min"
            },
            {
                title: "Eau dure : Les effets cachés sur vos électroménagers",
                desc: "Découvrir comment l'eau dure et le calcaire endommagent silencieusement vos électroménagers, augmentent vos factures et comment y remédier avec un adoucisseur.",
                image: electromenagersTartreImg,
                href: "/eau-dure-les-effets-caches-sur-vos-electromenagers",
                readTime: "7 min"
            },
            {
                title: "Est-ce sécuritaire de boire de l'eau adoucie ?",
                desc: "Découvrir l'impact du sodium, la sécurité du procédé et les recommandations pour remplacer le calcaire en toute tranquillité.",
                image: boireEauAdoucieImg,
                href: "/est-ce-securitaire-de-boire-de-leau-adoucie",
                readTime: "5 min"
            },
            {
                title: "Pourquoi l'eau de votre bac à sel est-elle sale ?",
                desc: "Découvrir pourquoi l'eau du bac à sel de votre adoucisseur peut devenir sale, trouble ou colorée, et apprenez comment régler efficacement ce problème.",
                image: bacSelImg,
                href: "/pourquoi-leau-de-votre-bac-a-sel-est-elle-sale",
                readTime: "4 min"
            },
            {
                title: "Quel sel choisir pour votre adoucisseur : Pastilles ou cristaux ?",
                desc: "Découvrir comment choisir le meilleur sel pour votre adoucisseur d'eau au Québec. Pastilles ou cristaux ? Avantages et inconvénients pour un système performant.",
                image: choixSelImg,
                href: "/quel-sel-choisir-pour-votre-adoucisseur-pastilles-ou-cristaux",
                readTime: "5 min"
            }
        ]
    },
    {
        title: "Analyse et qualité de l’eau",
        id: "analyse-qualite-eau",
        products: [
            {
                title: "Fer ferreux vs Fer ferrique : Quelle différence pour le filtre ?",
                desc: "Découvrir la différence entre le fer ferreux (invisible) et le fer ferrique (particules) dans l'eau de puits, et apprenez comment choisir le bon système de filtration.",
                image: eauFerManganeseImg,
                href: "/fer-ferreux-vs-fer-ferrique-quelle-difference-pour-le-filtre",
                readTime: "6 min"
            },
            {
                title: "Comment savoir si votre lampe UV fonctionne encore ?",
                desc: "Découvrir les signes pour savoir si votre lampe UV de traitement d'eau fonctionne encore et quand il est nécessaire de la remplacer pour assurer une désinfection efficace.",
                image: lampeUvBoxImg,
                href: "/comment-savoir-si-votre-lampe-uv-fonctionne-encore",
                readTime: "4 min"
            },
            {
                title: "Les risques de ne pas changer sa lampe UV après 12 mois",
                desc: "Découvrir pourquoi le remplacement annuel de votre lampe UV est essentiel pour garantir une désinfection efficace et protéger votre santé.",
                image: risquesUvImg,
                href: "/les-risques-de-ne-pas-changer-sa-lampe-uv-apres-12-mois",
                readTime: "5 min"
            },
            {
                title: "Quelle fréquence d’entretien pour un système UV domestique ?",
                desc: "Découvrir la fréquence d'entretien idéale pour votre système UV domestique : remplacement de lampe, nettoyage du quartz et entretien des préfiltres.",
                image: lampeUvImg,
                href: "/quelle-frequence-dentretien-pour-un-systeme-uv-domestique",
                readTime: "5 min"
            }
        ]
    },
    {
        title: "Désinfection UV",
        id: "desinfection-uv",
        products: [
            {
                title: "Comment savoir si votre lampe UV fonctionne encore ?",
                desc: "Découvrir les signes pour savoir si votre lampe UV de traitement d'eau fonctionne encore et quand il est nécessaire de la remplacer pour assurer une désinfection efficace.",
                image: lampeUvBoxImg,
                href: "/comment-savoir-si-votre-lampe-uv-fonctionne-encore",
                readTime: "4 min"
            },
            {
                title: "Les risques de ne pas changer sa lampe UV après 12 mois",
                desc: "Découvrir pourquoi le remplacement annuel de votre lampe UV est essentiel pour garantir une désinfection efficace et protéger votre santé.",
                image: risquesUvImg,
                href: "/les-risques-de-ne-pas-changer-sa-lampe-uv-apres-12-mois",
                readTime: "5 min"
            },
            {
                title: "Quelle fréquence d’entretien pour un système UV domestique ?",
                desc: "Découvrir la fréquence d'entretien idéale pour votre système UV domestique : remplacement de lampe, nettoyage du quartz et entretien des préfiltres.",
                image: lampeUvImg,
                href: "/quelle-frequence-dentretien-pour-un-systeme-uv-domestique",
                readTime: "5 min"
            },
            {
                title: "Bactéries dans le puits : Les étapes de désinfection choc",
                desc: "Découvrir les étapes cruciales d'une désinfection choc efficace pour retrouver une eau potable et sécuritaire.",
                image: bacteriesPuitsImg,
                href: "/bacteries-dans-le-puits-les-etapes-de-desinfection-choc",
                readTime: "7 min"
            }
        ]
    },
    {
        title: "Eau de Puits",
        id: "eau-de-puits",
        products: [
            {
                title: "Adoucisseur d'eau et fosse septique : compatible ou non ?",
                desc: "Mythes et réalités sur la compatibilité entre un adoucisseur d'eau et une fosse septique au Québec.",
                image: adoucisseurFosseImg,
                href: "/adoucisseur-deau-et-fosse-septique-mythes-et-realites",
                readTime: "5 min"
            },
            {
                title: "Goût de chlore : Pourquoi la ville en ajoute autant ?",
                desc: "Découvrir pourquoi l'eau de la ville sent parfois le chlore, son rôle essentiel pour la désinfection et les solutions simples pour obtenir une eau au goût parfait.",
                image: goutChloreImg,
                href: "/gout-de-chlore-pourquoi-la-ville-en-ajoute-autant",
                readTime: "4 min"
            },
            {
                title: "Hivernisation : Comment protéger vos filtres du gel",
                desc: "Découvrir les étapes essentielles de l'hivernisation pour protéger vos systèmes de filtration et adoucisseurs d'eau du gel pendant l'hiver québécois.",
                image: hivernisationImg,
                href: "/hivernisation-comment-proteger-vos-filtres-du-gel",
                readTime: "6 min"
            },
            {
                title: "Comment savoir si votre lampe UV fonctionne encore ?",
                desc: "Découvrir les signes pour savoir si votre lampe UV de traitement d'eau fonctionne encore et quand il est nécessaire de la remplacer pour assurer une désinfection efficace.",
                image: lampeUvBoxImg,
                href: "/comment-savoir-si-votre-lampe-uv-fonctionne-encore",
                readTime: "4 min"
            },
            {
                title: "Les risques de ne pas changer sa lampe UV après 12 mois",
                desc: "Découvrir pourquoi le remplacement annuel de votre lampe UV est essentiel pour garantir une désinfection efficace et protéger votre santé.",
                image: risquesUvImg,
                href: "/les-risques-de-ne-pas-changer-sa-lampe-uv-apres-12-mois",
                readTime: "5 min"
            },
            {
                title: "Quelle fréquence d’entretien pour un système UV domestique ?",
                desc: "Découvrir la fréquence d'entretien idéale pour votre système UV domestique : remplacement de lampe, nettoyage du quartz et entretien des préfiltres.",
                image: lampeUvImg,
                href: "/quelle-frequence-dentretien-pour-un-systeme-uv-domestique",
                readTime: "5 min"
            },
            {
                title: "Bactéries dans le puits : Les étapes de désinfection choc",
                desc: "Découvrir les étapes cruciales d'une désinfection choc efficace pour retrouver une eau potable et sécuritaire.",
                image: bacteriesPuitsImg,
                href: "/bacteries-dans-le-puits-les-etapes-de-desinfection-choc",
                readTime: "7 min"
            },
            {
                title: "Injection d'air : Comment filtrer le fer sans produits chimiques",
                desc: "Découvrir comment la filtration par injection d'air offre une solution écologique et sans produit chimique pour éliminer le fer et le manganèse de l'eau de puits.",
                image: injectionAirFerImg,
                href: "/injection-dair-comment-filtrer-le-fer-sans-produits-chimiques",
                readTime: "6 min"
            },
            {
                title: "Les nitrates dans l'eau de puits : Dangers et solutions",
                desc: "Découvrir les dangers liés aux nitrates dans l'eau de puits et les solutions efficaces pour protéger la santé de votre famille.",
                image: nitratesEauPuitsImg,
                href: "/les-nitrates-dans-leau-de-puits-dangers-et-solutions",
                readTime: "5 min"
            },
            {
                title: "Eau du puits au Québec : quand installer un système d’osmose inverse ?",
                desc: "Découvrir quand et pourquoi installer un système d'osmose inverse pour garantir la qualité et la sécurité de l'eau de votre puits au Québec.",
                image: osmosewellwaterImg,
                href: "/eau-du-puits-au-quebec-quand-installer-un-systeme-dosmose-inverse",
                readTime: "6 min"
            }
        ]
    },
    {
        title: "Écologie et durabilité",
        id: "ecologie-et-durabilite",
        products: [
            {
                title: "Eau embouteillée : les dangers méconnus pour votre santé au quotidien",
                desc: "Découvrir les véritables enjeux liés à la consommation d'eau embouteillée, des résidus plastiques à l'impact environnemental, et optez pour une pureté à domicile.",
                image: eauEmbouteilleeDangersImg,
                href: "/eau-embouteillee-les-dangers-meconnus-pour-votre-sante-au-quotidien",
                readTime: "7 min"
            },
            {
                title: "Aquarium : Pourquoi l'eau osmosée est vitale pour vos poissons",
                desc: "Découvrir pourquoi l'eau osmosée est le choix parfait pour offrir à vos poissons d'aquarium un environnement pur, stable et sain.",
                image: eauOsmoseeImg,
                href: "/aquarium-pourquoi-leau-osmosee-est-vitale-pour-vos-poissons",
                readTime: "5 min"
            },
            {
                title: "Le vrai coût de l'eau embouteillée : Calculez vos économies",
                desc: "Découvrir pourquoi abandonner l'eau embouteillée au profit d'un système de traitement d'eau domestique est un choix pratique, économique et écologique pour votre famille.",
                image: vraiCoutImg,
                href: "/le-vrai-cout-de-leau-embouteillee-calculez-vos-economies",
                readTime: "6 min"
            },
            {
                title: "Eau et bébés : Faut-il faire bouillir l'eau filtrée ?",
                desc: "Découvrir pourquoi il est recommandé de faire bouillir l'eau filtrée avant de la donner à un nourrisson et comment assurer une sécurité optimale avec votre système de traitement d'eau.",
                image: eauBebesImg,
                href: "/eau-et-bebes-faut-il-faire-bouillir-leau-filtree",
                readTime: "5 min"
            },
            {
                title: "Eau embouteillée : quels impacts sur la santé et la planète ?",
                desc: "Découvrir les véritables répercussions de l'eau embouteillée sur l'environnement et votre santé, et pourquoi le traitement d'eau résidentiel est la solution de l'avenir.",
                image: eauEmbouteilleeImpactsImg,
                href: "/eau-embouteillee-quels-impacts-sur-la-sante-et-la-planete",
                readTime: "6 min"
            }
        ]
    },
    {
        title: "Filtration d'eau",
        id: "filtration-eau",
        products: [
            {
                title: "Filtre sous évier, l'alternative simple aux pichets filtrants",
                desc: "Découvrir pourquoi le filtre sous évier s’impose de plus en plus comme une solution pratique, écologique et performante pour améliorer la qualité de l’eau à la maison.",
                image: filtreSousEvierImg,
                href: "/filtre-sous-evier-lalternative-simple-aux-pichets-filtrants",
                readTime: "4 min"
            },
            {
                title: "Le fluor dans l'eau : Faut-il le filtrer ?",
                desc: "Découvrir si le fluor présent dans l'eau de votre robinet ou puits nécessite d'être filtré et quelles sont les meilleures options de filtration.",
                image: fluorFiltrationImg,
                href: "/le-fluor-dans-leau-faut-il-le-filtrer",
                readTime: "5 min"
            },
            {
                title: "Le plomb dans les vieilles maisons : Comment se protéger?",
                desc: "Découvrir comment identifier la présence de plomb dans l'eau de votre maison ancienne et quelles sont les solutions de filtration et de prévention recommandées.",
                image: plombVieillesMaisonsImg,
                href: "/le-plomb-dans-les-vieilles-maisons-comment-se-proteger",
                readTime: "6 min"
            },
            {
                title: "Pourquoi même l'eau de ville a besoin d'être filtrée?",
                desc: "Découvrir pourquoi l'eau de ville, bien que potable, nécessite souvent une filtration pour éliminer le chlore, les métaux lourds et améliorer son goût.",
                image: eauVilleFiltreeImg,
                href: "/pourquoi-meme-leau-de-ville-a-besoin-detre-filtree",
                readTime: "5 min"
            },
            {
                title: "Pourquoi une eau pure change le goût du café?",
                desc: "Découvrir comment la pureté et l'équilibre de l'eau révèlent les arômes de votre café et protègent votre machine pour une expérience gustative optimale.",
                image: eauPureCafeImg,
                href: "/pourquoi-une-eau-pure-change-le-gout-du-cafe",
                readTime: "4 min"
            },
            {
                title: "Pourquoi l'eau pure améliore vos pâtisseries",
                desc: "Découvrir comment l'eau pure et filtrée transforme vos recettes de pâtisserie, améliore la levée des pâtes et révèle les arômes délicats.",
                image: eauPurePatisseriesImg,
                href: "/pourquoi-leau-pure-ameliore-vos-patisseries",
                readTime: "4 min"
            },
            {
                title: "Vivre en condo : Les solutions de filtration compactes",
                desc: "Découvrir comment les solutions de filtration compactes offrent une eau saine et pure en condo sans nécessiter de travaux de plomberie majeurs.",
                image: condoFiltrationImg,
                href: "/vivre-en-condo-les-solutions-de-filtration-compactes",
                readTime: "5 min"
            },
            {
                title: "Filtre à cartouche vs Filtre à lavage à contre-courant",
                desc: "Découvrir les différences entre un filtre à cartouche et un filtre à lavage à contre-courant pour choisir la meilleure protection pour votre foyer et votre eau.",
                image: filtreCartoucheVsContreCourantImg,
                href: "/filtre-a-cartouche-vs-filtre-a-lavage-a-contre-courant",
                readTime: "6 min"
            }
        ]
    },
    {
        title: "Osmose Inverse",
        id: "osmose-inverse",
        products: [
            {
                title: "Aquarium : Pourquoi l'eau osmosée est vitale pour vos poissons",
                desc: "Découvrir pourquoi l'eau osmosée est le choix parfait pour offrir à vos poissons d'aquarium un environnement pur, stable et sain.",
                image: eauOsmoseeImg,
                href: "/aquarium-pourquoi-leau-osmosee-est-vitale-pour-vos-poissons",
                readTime: "5 min"
            },
            {
                title: "Le vrai coût de l'eau embouteillée : Calculez vos économies",
                desc: "Découvrir pourquoi abandonner l'eau embouteillée au profit d'un système de traitement d'eau domestique est un choix pratique, économique et écologique pour votre famille.",
                image: vraiCoutImg,
                href: "/le-vrai-cout-de-leau-embouteillee-calculez-vos-economies",
                readTime: "6 min"
            },
            {
                title: "Eau et bébés : Faut-il faire bouillir l'eau filtrée ?",
                desc: "Découvrir pourquoi il est recommandé de faire bouillir l'eau filtrée avant de la donner à un nourrisson et comment assurer une sécurité optimale avec votre système de traitement d'eau.",
                image: eauBebesImg,
                href: "/eau-et-bebes-faut-il-faire-bouillir-leau-filtree",
                readTime: "5 min"
            },
            {
                title: "Osmose inverse et santé : quelle qualité d’eau obtenez-vous ?",
                desc: "Découvrir comment un système d'osmose inverse transforme la qualité de votre eau et les nombreux bénéfices qu'il offre pour la santé de votre famille.",
                image: purewaterImg,
                href: "/osmose-inverse-et-sante-quelle-qualite-deau-obtenez-vous",
                readTime: "6 min"
            },
            {
                title: "Comment l’osmose inverse protège votre famille des contaminants invisibles",
                desc: "Découvrir comment un système d'osmose inverse purifie votre eau et protège efficacement votre famille des métaux lourds, microplastiques et autres contaminants invisibles.",
                image: drinkpurewaterImg,
                href: "/comment-losmose-inverse-protege-votre-famille-des-contaminants-invisibles",
                readTime: "6 min"
            },
            {
                title: "Eau du puits au Québec : quand installer un système d’osmose inverse ?",
                desc: "Découvrir quand et pourquoi installer un système d'osmose inverse pour garantir la qualité et la sécurité de l'eau de votre puits au Québec.",
                image: osmosewellwaterImg,
                href: "/eau-du-puits-au-quebec-quand-installer-un-systeme-dosmose-inverse",
                readTime: "6 min"
            },
            {
                title: "Osmose inverse : la technologie derrière une eau 100 % pure",
                desc: "Découvrir comment la filtration moléculaire par osmose inverse vous garantit une eau ultra pure, saine et exempte de contaminants.",
                image: rowaterImg,
                href: "/osmose-inverse-la-technologie-derriere-une-eau-100-pure",
                readTime: "5 min"
            }
        ]
    },
    {
        title: "Santé et bien‑être",
        id: "sante-et-bien-etre",
        products: [
            {
                title: "Aquarium : Pourquoi l'eau osmosée est vitale pour vos poissons",
                desc: "Découvrir pourquoi l'eau osmosée est le choix parfait pour offrir à vos poissons d'aquarium un environnement pur, stable et sain.",
                image: eauOsmoseeImg,
                href: "/aquarium-pourquoi-leau-osmosee-est-vitale-pour-vos-poissons",
                readTime: "5 min"
            },
            {
                title: "Le vrai coût de l'eau embouteillée : Calculez vos économies",
                desc: "Découvrir pourquoi abandonner l'eau embouteillée au profit d'un système de traitement d'eau domestique est un choix pratique, économique et écologique pour votre famille.",
                image: vraiCoutImg,
                href: "/le-vrai-cout-de-leau-embouteillee-calculez-vos-economies",
                readTime: "6 min"
            },
            {
                title: "Eau et bébés : Faut-il faire bouillir l'eau filtrée ?",
                desc: "Découvrir pourquoi il est recommandé de faire bouillir l'eau filtrée avant de la donner à un nourrisson et comment assurer une sécurité optimale avec votre système de traitement d'eau.",
                image: eauBebesImg,
                href: "/eau-et-bebes-faut-il-faire-bouillir-leau-filtree",
                readTime: "5 min"
            },
            {
                title: "Osmose inverse et santé : quelle qualité d’eau obtenez-vous ?",
                desc: "Découvrir comment un système d'osmose inverse transforme la qualité de votre eau et les nombreux bénéfices qu'il offre pour la santé de votre famille.",
                image: healthwaterImg,
                href: "/osmose-inverse-et-sante-quelle-qualite-deau-obtenez-vous",
                readTime: "6 min"
            },
            {
                title: "Comment l’osmose inverse protège votre famille des contaminants invisibles",
                desc: "Découvrir comment un système d'osmose inverse purifie votre eau et protège efficacement votre famille des métaux lourds, microplastiques et autres contaminants invisibles.",
                image: drinkpurewaterImg,
                href: "/comment-losmose-inverse-protege-votre-famille-des-contaminants-invisibles",
                readTime: "6 min"
            },
            {
                title: "Osmose inverse : la technologie derrière une eau 100 % pure",
                desc: "Découvrir comment la filtration moléculaire par osmose inverse vous garantit une eau ultra pure, saine et exempte de contaminants.",
                image: purewaterImg,
                href: "/osmose-inverse-la-technologie-derriere-une-eau-100-pure",
                readTime: "5 min"
            },
            {
                title: "Eau embouteillée : les dangers méconnus pour votre santé au quotidien",
                desc: "Découvrir les véritables enjeux liés à la consommation d'eau embouteillée, des résidus plastiques à l'impact environnemental, et optez pour une pureté à domicile.",
                image: eauEmbouteilleeDangersImg,
                href: "/eau-embouteillee-les-dangers-meconnus-pour-votre-sante-au-quotidien",
                readTime: "7 min"
            },
            {
                title: "Eau embouteillée : quels impacts sur la santé et la planète ?",
                desc: "Découvrir les véritables répercussions de l'eau embouteillée sur l'environnement et votre santé, et pourquoi le traitement d'eau résidentiel est la solution de l'avenir.",
                image: eauEmbouteilleeImpactsImg,
                href: "/eau-embouteillee-quels-impacts-sur-la-sante-et-la-planete",
                readTime: "6 min"
            }
        ]
    }
];
