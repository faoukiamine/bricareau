# 📘 Bricareau — Documentation Complète du Projet

> Site web vitrine et commercial de **Bricareau**, spécialiste québécois du traitement de l'eau (filtration, adoucissement, désinfection UV, osmose inverse).

---

## 📋 Table des Matières

1. [Vue d'ensemble](#vue-densemble)
2. [Stack Technologique](#stack-technologique)
3. [Structure des Dossiers](#structure-des-dossiers)
4. [Variables d'Environnement](#variables-denvironnement)
5. [Architecture de l'Application](#architecture-de-lapplication)
6. [Routage (Routes)](#routage-routes)
7. [Composants](#composants)
8. [Pages](#pages)
9. [Data Layer](#data-layer)
10. [Base de Données (Supabase)](#base-de-données-supabase)
11. [Design System](#design-system)
12. [Déploiement (Docker)](#déploiement-docker)
13. [Scripts Utilitaires](#scripts-utilitaires)
14. [Commandes NPM](#commandes-npm)

---

## Vue d'ensemble

Bricareau est une **Single Page Application (SPA)** construite avec React + TypeScript, utilisant Vite comme bundler. Le site couvre plusieurs segments : résidentiel, commercial, industriel et hôtellerie/restauration, avec un blog éducatif, un système de consultation en ligne, un quiz de diagnostic d'eau, et des formulaires de demande de test.

---

## Stack Technologique

### Core

| Technologie       | Version  | Rôle                                      |
|-------------------|----------|-------------------------------------------|
| **React**         | ^18.3.1  | Framework UI                              |
| **TypeScript**    | ^5.8.3   | Typage statique                           |
| **Vite**          | ^5.4.19  | Bundler / Dev Server (port 8080)          |
| **React Router**  | ^6.30.1  | Navigation SPA (client-side routing)      |

### UI & Styling

| Technologie              | Version   | Rôle                                        |
|--------------------------|-----------|---------------------------------------------|
| **Tailwind CSS**         | ^3.4.17   | CSS utilitaire, thème personnalisé          |
| **tailwindcss-animate**  | ^1.0.7    | Animations Tailwind                         |
| **Radix UI**             | multiple  | Composants accessibles (Dialog, Tabs, etc.) |
| **shadcn/ui**            | —         | Bibliothèque UI built on Radix              |
| **Framer Motion**        | ^12.38.0  | Animations avancées                         |
| **Lucide React**         | ^0.462.0  | Bibliothèque d'icônes                       |
| **Embla Carousel**       | ^8.6.0    | Carrousels / Sliders                        |
| **next-themes**          | ^0.3.0    | Gestion dark/light mode                     |

### Formulaires & Validation

| Technologie           | Version  | Rôle                             |
|-----------------------|----------|----------------------------------|
| **React Hook Form**   | ^7.71.1  | Gestion des formulaires          |
| **Zod**               | ^3.25.76 | Validation des schémas           |
| **@hookform/resolvers**| ^3.10.0 | Intégration RHF + Zod            |

### Data Fetching & Backend

| Technologie            | Version  | Rôle                                     |
|------------------------|----------|------------------------------------------|
| **TanStack Query**     | ^5.83.0  | Cache & state management des requêtes    |
| **Supabase JS**        | ^2.95.3  | Client BaaS (PostgreSQL + Auth + API)    |

### Intégrations Externes

| Technologie          | Version  | Rôle                                     |
|----------------------|----------|------------------------------------------|
| **@calcom/embed-react** | ^1.5.3 | Calendrier de réservation (Cal.com)    |
| **Recharts**         | ^2.15.4  | Graphiques (ROI Calculator)              |
| **Sonner**           | ^1.7.4   | Notifications toast                      |
| **date-fns**         | ^3.6.0   | Manipulation de dates                    |
| **cmdk**             | ^1.1.1   | Command palette / search                 |

### Dev & Build Tools

| Technologie                | Version  | Rôle                              |
|----------------------------|----------|-----------------------------------|
| **@vitejs/plugin-react-swc** | ^3.11.0 | Compilation React via SWC (fast) |
| **ESLint**                 | ^9.32.0  | Linting                           |
| **PostCSS + Autoprefixer** | —        | Post-processing CSS               |
| **lovable-tagger**         | ^1.1.11  | Tag composants (dev mode only)    |
| **@tailwindcss/typography**| ^0.5.16  | Plugin prose pour le blog         |

---

## Structure des Dossiers

```
bricareau/
├── public/                         # Fichiers statiques servis directement
│   ├── assets/                     # Assets supplémentaires
│   ├── images/                     # Images publiques
│   ├── favicon.ico
│   ├── logo.png
│   ├── placeholder.svg
│   └── robots.txt
│
├── src/                            # Code source principal
│   ├── assets/                     # Assets importés dans le code (images, fonts…)
│   │
│   ├── components/                 # Composants réutilisables
│   │   ├── ui/                     # Composants shadcn/ui (Radix-based)
│   │   ├── Header.tsx              # Navigation principale (mega menu)
│   │   ├── Footer.tsx              # Pied de page complet
│   │   ├── Hero.tsx                # Section hero principale
│   │   ├── BentoExperience.tsx     # Grille bento features
│   │   ├── BlogLayout.tsx          # Layout article de blog
│   │   ├── BricareauCTA.tsx        # Call-to-action global
│   │   ├── ChatWidget.tsx          # Widget chat client
│   │   ├── ConsultationFormSection.tsx  # Formulaire consultation
│   │   ├── CookieConsent.tsx       # Bannière RGPD / cookies
│   │   ├── CustomerJourney.tsx     # Parcours client visuel
│   │   ├── EverythingYouNeed.tsx   # Section avantages
│   │   ├── ExpertAvatars.tsx       # Avatars experts
│   │   ├── ExpertTrustSection.tsx  # Section confiance experts
│   │   ├── FAQSection.tsx          # Accordéon FAQ
│   │   ├── FinalCTA.tsx            # CTA final de page
│   │   ├── GlobalBreadcrumbs.tsx   # Fil d'Ariane automatique
│   │   ├── LogoFarm.tsx            # Logos partenaires/certifications
│   │   ├── MarketExploration.tsx   # Exploration des marchés
│   │   ├── NavLink.tsx             # Lien de navigation
│   │   ├── NewEraStats.tsx         # Compteurs/statistiques
│   │   ├── ProblemHero.tsx         # Section problèmes identifiés
│   │   ├── ProblemSolutionSection.tsx  # Problème → Solution
│   │   ├── Products_Array.tsx      # Grille de produits
│   │   ├── QualityService.tsx      # Section qualité de service
│   │   ├── ROICalculator.tsx       # Calculateur ROI interactif
│   │   ├── Review.tsx              # Carte avis client
│   │   ├── ScrollToTop.tsx         # Scroll en haut à la navigation
│   │   ├── Solutions.tsx           # Présentation des solutions
│   │   ├── Territoire.tsx          # Zones géographiques servies
│   │   ├── Testimonials.tsx        # Section témoignages
│   │   ├── TestimonialsSection.tsx # Section témoignages étendue
│   │   ├── WaterDiagnosticQuiz.tsx # Quiz diagnostic eau (multi-étapes)
│   │   ├── WaterProblems.tsx       # Problèmes d'eau courants
│   │   ├── WaterTestFormSection.tsx # Formulaire demande test eau
│   │   └── water_diagnosis.tsx     # Composant diagnostic d'eau
│   │
│   ├── data/                       # Données statiques / contenu
│   │   ├── blogCategories.ts       # Catégories et articles de blog
│   │   ├── faqs.ts                 # Questions/réponses FAQ
│   │   ├── navigation.ts           # Structure menu de navigation
│   │   ├── productIndex.ts         # Index produits pour la recherche
│   │   ├── searchData.ts           # Données pour la recherche globale
│   │   └── testimonials.ts         # Témoignages clients
│   │
│   ├── hooks/                      # Hooks React personnalisés
│   │   ├── use-mobile.tsx          # Détection mobile (breakpoint)
│   │   └── use-toast.ts            # Gestion des toasts/notifications
│   │
│   ├── lib/                        # Utilitaires et clients externes
│   │   ├── supabase.ts             # Client Supabase initialisé
│   │   └── utils.ts                # Fonction `cn()` (clsx + tailwind-merge)
│   │
│   ├── pages/                      # Pages (une par route)
│   │   ├── Blog pages/             # Articles de blog individuels (36 articles)
│   │   ├── Home.tsx / Home1.tsx    # Pages d'accueil (v1 / principale)
│   │   ├── Adoucissement.tsx       # Hub adoucissement d'eau
│   │   ├── Filtration.tsx          # Hub filtration d'eau
│   │   ├── Fontaines.tsx           # Hub fontaines d'eau
│   │   ├── Entreprises.tsx         # Page segment entreprises
│   │   ├── ResidentialServices.tsx # Page segment résidentiel
│   │   ├── HotellerieRestauration.tsx # Segment hôtellerie
│   │   ├── CommercialIndustriel.tsx # Segment commercial/industriel
│   │   ├── Blog.tsx                # Listing blog principal
│   │   ├── BlogCategory.tsx        # Listing par catégorie
│   │   ├── FAQ.tsx                 # Page FAQ complète
│   │   ├── Contact.tsx             # Hub contact
│   │   ├── ContactResidentiel.tsx  # Contact résidentiel
│   │   ├── ContactEntreprises.tsx  # Contact entreprises
│   │   ├── Tests-Eau.tsx           # Demande de test d'eau
│   │   ├── Diagnostic.tsx          # Page diagnostic en ligne
│   │   ├── Search.tsx              # Recherche globale
│   │   ├── Promotions.tsx          # Offres promotionnelles
│   │   ├── Carrieres.tsx           # Offres d'emploi
│   │   ├── Sustainability.tsx      # Durabilité / RSE
│   │   ├── WhyChooseUs.tsx         # Pourquoi Bricareau
│   │   ├── OurProcess.tsx          # Notre processus
│   │   ├── Temoignages.tsx         # Témoignages clients
│   │   ├── Guides.tsx              # Guides téléchargeables
│   │   ├── Videos.tsx              # Vidéothèque
│   │   ├── Pieces.tsx              # Pièces de rechange
│   │   ├── Manuels.tsx             # Manuels d'utilisation
│   │   ├── page-consultation.tsx   # Réservation consultation
│   │   ├── page-contact.tsx         # Formulaire contact général
│   │   ├── Politique-de-Confidentialite.tsx
│   │   ├── Conditions-Generales-Utilisation.tsx
│   │   ├── Desabonnement.tsx       # Désinscription newsletter
│   │   ├── DesabonnementSucces.tsx # Confirmation désinscription
│   │   ├── NotFound.tsx            # Page 404
│   │   └── [Produits spécifiques] # ~30 pages produits détaillées
│   │
│   ├── utils/                      # Utilitaires applicatifs
│   │   └── breadcrumbLabels.ts     # Labels pour le fil d'Ariane
│   │
│   ├── App.tsx                     # Racine de l'app, configuration des routes
│   ├── App.css                     # Styles globaux App
│   ├── index.css                   # Styles globaux + variables CSS Tailwind
│   ├── main.tsx                    # Point d'entrée React (ReactDOM.render)
│   └── vite-env.d.ts               # Déclarations TypeScript pour Vite
│
├── design-system/                  # Documentation design system
├── .agent/                         # Configuration agent IA (skills, etc.)
├── .vscode/                        # Configuration VSCode
│
├── .env                            # Variables d'environnement (non versionné)
├── .gitignore
├── .dockerignore
├── Dockerfile                      # Configuration Docker multi-stage
├── components.json                 # Config shadcn/ui CLI
├── tailwind.config.ts              # Config Tailwind + thème custom
├── vite.config.ts                  # Config Vite (port 8080, alias @)
├── tsconfig.json                   # Config TypeScript racine
├── tsconfig.app.json               # Config TS pour l'application
├── tsconfig.node.json              # Config TS pour les scripts Node
├── eslint.config.js                # Config ESLint
├── postcss.config.js               # Config PostCSS
├── package.json                    # Dépendances et scripts
├── supabase_schema.sql             # Schéma SQL Supabase
├── faqs.json                       # Export JSON des FAQs
└── index.html                      # Template HTML principal (Vite)
```

---

## Variables d'Environnement

Créer un fichier `.env` à la racine (non versionné) :

```env
# Supabase — Backend as a Service
VITE_SUPABASE_URL=https://<project-id>.supabase.co
VITE_SUPABASE_ANON_KEY=<votre-clé-anon-publique>
```

> **Note :** Les variables Vite doivent obligatoirement être préfixées par `VITE_` pour être exposées au client.

---

## Architecture de l'Application

```
main.tsx
  └── App.tsx
        ├── QueryClientProvider (TanStack Query)
        ├── TooltipProvider (Radix UI)
        ├── Toaster + Sonner (notifications)
        └── BrowserRouter (React Router)
              ├── ScrollToTop (hook navigation)
              ├── CookieConsent (bannière RGPD)
              └── Routes
                    ├── / → Home1
                    ├── /blog/* → Blog + Articles
                    ├── /residentiel → ResidentialServices
                    ├── /entreprises → Entreprises
                    ├── /solutions/* → Pages produits
                    └── ... (voir section Routage)
```

---

## Routage (Routes)

### Pages Principales

| Route                     | Composant                  | Description                          |
|---------------------------|----------------------------|--------------------------------------|
| `/`                       | `Home1`                    | Page d'accueil principale            |
| `/v1`                     | `Home`                     | Version alternative accueil          |
| `/residentiel`            | `ResidentialServices`      | Services résidentiels                |
| `/entreprises`            | `Entreprises`              | Services entreprises                 |
| `/hotellerie-restauration`| `HotellerieRestauration`   | Segment hôtellerie & restauration    |
| `/commercial-industriel`  | `CommercialIndustriel`     | Segment commercial/industriel        |
| `/industriel`             | `Industriel`               | Segment industriel                   |
| `/bureau`                 | `Bureau`                   | Solutions bureau                     |
| `/solutions`              | `Solutions`                | Vue d'ensemble solutions             |

### Produits — Adoucissement

| Route                              | Description                          |
|------------------------------------|--------------------------------------|
| `/adoucissement`                   | Hub adoucissement                    |
| `/adoucisseur-eau-residentiel`     | Adoucisseur eau résidentielle        |
| `/adoucisseur-sentinelle`          | Modèle Sentinelle                    |
| `/adoucisseurs-eau-de-puits`       | Adoucisseurs eau de puits            |
| `/adoucisseurs-portables`          | Adoucisseurs portables               |
| `/conditionneurs-sans-sel`         | Conditionneurs sans sel              |
| `/adoucisseurs-eau-commerciaux`    | Adoucisseurs commerciaux             |
| `/adoucisseurs-eau-industriel`     | Adoucisseurs industriels             |

### Produits — Filtration

| Route                                       | Description                        |
|---------------------------------------------|------------------------------------|
| `/filtration`                               | Hub filtration                     |
| `/filtres-deau`                             | Filtres eau de puits               |
| `/filtres-deau-pour-toute-la-maison`        | Filtres toute la maison            |
| `/systemes-de-filtration-deau-sous-evier`   | Filtration sous évier              |
| `/systeme-de-filtration-deau-potable`       | Station eau potable                |
| `/filtre-eau-haute-efficacite`              | Filtre haute efficacité            |
| `/filtration-eau-potable`                   | Filtration eau potable             |
| `/filtration-industrielle`                  | Filtration industrielle            |
| `/filtres-eau-machine-cafe`                 | Filtres machine à café             |
| `/filtres-de-remplacement`                  | Filtres de remplacement            |

### Produits — Désinfection UV & Osmose

| Route                              | Description                          |
|------------------------------------|--------------------------------------|
| `/systemes-de-desinfection-uv`     | Désinfection UV résidentielle        |
| `/desinfection-uv-industrielle`    | Désinfection UV industrielle         |
| `/osmose-inverse-industrielle`     | Osmose inverse industrielle          |
| `/traitement-eau-de-puits`         | Traitement eau de puits              |

### Produits — Fontaines & Entreprises

| Route                              | Description                          |
|------------------------------------|--------------------------------------|
| `/fontaines`                       | Hub fontaines d'eau                  |
| `/fontaines-deau-modernes`         | Fontaines d'eau modernes             |
| `/refroidisseurs-eau-entreprises`  | Refroidisseurs d'eau                 |
| `/eau-petillante-entreprises`      | Eau pétillante                       |
| `/machines-a-glace-entreprises`    | Machines à glace                     |
| `/machines-a-cafe-entreprises`     | Machines à café                      |
| `/systemes-centralises`            | Systèmes centralisés                 |
| `/solutions-brasseries`            | Solutions brasseries                 |

### Blog

| Route                                  | Description                        |
|----------------------------------------|------------------------------------|
| `/blog`                                | Listing articles de blog           |
| `/blog/categorie/:categoryId`          | Articles par catégorie             |
| `/[slug-article]`                      | Article individuel (36 articles)   |

**Catégories de blog :**
- Adoucissement d'eau
- Filtration & osmose inverse
- Désinfection UV
- Eau de puits
- Eau en bouteille
- Conseils pratiques

### Support & Légal

| Route                              | Description                          |
|------------------------------------|--------------------------------------|
| `/contact`                         | Hub contact                          |
| `/contact-residentiel`             | Contact résidentiel                  |
| `/contact-entreprises`             | Contact entreprises                  |
| `/contact-form`                    | Formulaire contact général           |
| `/consultation`                    | Réservation consultation (Cal.com)   |
| `/tests-eau`                       | Demande test d'eau                   |
| `/diagnostic`                      | Quiz diagnostic en ligne             |
| `/faq`                             | FAQ complète                         |
| `/pieces`                          | Pièces de rechange                   |
| `/manuels`                         | Manuels d'utilisation                |
| `/guides`                          | Guides téléchargeables               |
| `/videos`                          | Vidéothèque                          |
| `/promotions`                      | Promotions en cours                  |
| `/temoignages`                     | Témoignages clients                  |
| `/search`                          | Recherche globale                    |
| `/pourquoi-choisir-bricareau`       | Pourquoi Bricareau                   |
| `/notre-processus`                 | Notre processus                      |
| `/durabilite`                      | Durabilité / RSE                     |
| `/carrieres`                       | Offres d'emploi                      |
| `/politique-de-confidentialite`    | Politique de confidentialité         |
| `/conditions-generales-utilisation`| Conditions générales d'utilisation   |
| `/desabonnement`                   | Désinscription newsletter            |
| `/desabonnement-succes`            | Confirmation désinscription          |
| `*`                                | 404 Not Found                        |

---

## Composants

### Composants Clés

#### `Header.tsx`
Navigation principale avec mega menu, support mobile, gestion des segments (résidentiel / entreprises).

#### `WaterDiagnosticQuiz.tsx`
Quiz interactif multi-étapes pour diagnostiquer les problèmes d'eau de l'utilisateur et recommander des produits. ~50KB de logique.

#### `WaterTestFormSection.tsx`
Formulaire complet de demande de test d'eau. Intégration Supabase pour soumission des données. ~43KB.

#### `ConsultationFormSection.tsx`
Formulaire de prise de rendez-vous en ligne avec intégration Cal.com. ~33KB.

#### `ROICalculator.tsx`
Calculateur interactif de retour sur investissement pour les systèmes de traitement. Utilise Recharts pour les graphiques.

#### `ChatWidget.tsx`
Widget de chat client flottant intégré dans toutes les pages.

#### `BlogLayout.tsx`
Layout réutilisable pour tous les articles de blog avec structure SEO, fil d'Ariane, et CTA.

#### `GlobalBreadcrumbs.tsx`
Fil d'Ariane automatique basé sur l'URL courante, utilisant les labels de `utils/breadcrumbLabels.ts`.

#### `CookieConsent.tsx`
Bannière de consentement cookies conforme RGPD/LPRPDE.

---

## Data Layer

### `src/data/`

| Fichier              | Contenu                                          |
|----------------------|--------------------------------------------------|
| `blogCategories.ts`  | Définition des catégories et tous les articles blog (titre, slug, contenu, méta) |
| `faqs.ts`            | Questions/réponses FAQ, organisées par catégorie |
| `navigation.ts`      | Arborescence complète du menu de navigation      |
| `productIndex.ts`    | Index des produits pour la recherche globale     |
| `searchData.ts`      | Données enrichies pour la page de recherche      |
| `testimonials.ts`    | Témoignages clients (nom, note, texte, photo)    |

### `src/utils/`

| Fichier                 | Contenu                                        |
|-------------------------|------------------------------------------------|
| `breadcrumbLabels.ts`   | Map route → label lisible pour le fil d'Ariane |

### `src/lib/`

| Fichier        | Contenu                                          |
|----------------|--------------------------------------------------|
| `supabase.ts`  | Initialisation du client Supabase                |
| `utils.ts`     | Fonction `cn()` combinant `clsx` et `tailwind-merge` |

---

## Base de Données (Supabase)

### Table : `water_test_requests`

Stocke les demandes de test d'eau soumises via le formulaire.

| Colonne            | Type        | Description                              |
|--------------------|-------------|------------------------------------------|
| `id`               | UUID (PK)   | Identifiant unique auto-généré           |
| `created_at`       | TIMESTAMPTZ | Date/heure de création                   |
| `prenom`           | TEXT        | Prénom du demandeur                      |
| `nom`              | TEXT        | Nom du demandeur                         |
| `email`            | TEXT        | Adresse email                            |
| `phone`            | TEXT        | Numéro de téléphone                      |
| `address`          | TEXT        | Adresse complète                         |
| `ville`            | TEXT        | Ville                                    |
| `province`         | TEXT        | Province (ex: Québec)                    |
| `code_postal`      | TEXT        | Code postal                              |
| `water_test_kits`  | TEXT[]      | Liste des kits de test sélectionnés      |
| `appointment_time` | TIMESTAMPTZ | Heure de rendez-vous souhaitée           |
| `status`           | TEXT        | Statut de la demande (défaut: `'new'`)   |

**Sécurité :**
- Row Level Security (RLS) activée
- Politique : `INSERT` autorisé pour les utilisateurs anonymes (formulaire public)

---

## Design System

### Thème de couleurs (Tailwind)

| Token              | Valeur HEX | Usage                          |
|--------------------|------------|--------------------------------|
| `brand-navy`       | `#18448F`  | Couleur principale Bricareau   |
| `blue-500`         | `#18448F`  | Navy Premium                   |
| `blue-600`         | `#153d81`  | Hover navy                     |
| `blue-700`         | `#11336c`  | Active/pressed                 |

Les couleurs sémantiques utilisent des variables CSS HSL définies dans `src/index.css` :
- `--primary`, `--secondary`, `--accent`, `--destructive`
- `--background`, `--foreground`, `--muted`, `--card`
- `--border`, `--input`, `--ring`

### Animations personnalisées

| Animation        | Durée    | Usage                                |
|------------------|----------|--------------------------------------|
| `accordion-down` | 0.2s     | Ouverture accordéons                 |
| `accordion-up`   | 0.2s     | Fermeture accordéons                 |
| `pulse-fast`     | 1s       | Indicateurs d'état                   |
| `color-pulse`    | 1s       | Texte animé                          |
| `scroll-y`       | 30s      | Défilement vertical automatique      |

### Composants UI (shadcn/ui)

Tous les composants de base sont dans `src/components/ui/` :
Accordion, AlertDialog, Avatar, Badge, Button, Calendar, Card, Carousel, Checkbox, Command, Dialog, DropdownMenu, Form, HoverCard, Input, Label, NavigationMenu, Popover, Progress, RadioGroup, ScrollArea, Select, Separator, Sheet, Skeleton, Slider, Switch, Table, Tabs, Textarea, Toast, Toggle, Tooltip...

---

## Déploiement (Docker)

### Build multi-stage

```dockerfile
# Stage 1: Build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build          # → génère /app/dist

# Stage 2: Production
FROM node:20-alpine AS prod
RUN npm install -g serve
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

### Commandes Docker

```bash
# Build de l'image
docker build -t bricareau .

# Lancer le conteneur
docker run -p 3000:3000 \
  -e VITE_SUPABASE_URL=... \
  -e VITE_SUPABASE_ANON_KEY=... \
  bricareau
```

> **Note :** Les variables `VITE_*` doivent être injectées **au build time** (pas au runtime) car Vite les compile statiquement dans le bundle.

---

## Scripts Utilitaires

Plusieurs scripts Node/Python ont été utilisés pour la génération et maintenance du contenu :

| Script                   | Langage | Description                                    |
|--------------------------|---------|------------------------------------------------|
| `extract-faqs.cjs`       | Node.js | Extraction des FAQs depuis une source externe  |
| `generate-faqs-ts.cjs`   | Node.js | Génération du fichier TypeScript des FAQs      |
| `fix-spaces.cjs`          | Node.js | Correction des espaces dans les fichiers TS    |
| `replace_badges.cjs`     | Node.js | Remplacement des badges dans les composants    |
| `sort-categories.cjs`    | Node.js | Tri des catégories blog                        |
| `update_line_height.cjs` | Node.js | Mise à jour du line-height CSS                 |
| `update_titles.cjs`      | Node.js | Mise à jour des titres de pages                |
| `reorder.py`             | Python  | Réorganisation des sections de pages           |
| `reorder_sections.py`    | Python  | Réorganisation sections (v1)                   |
| `reorder_sections2.py`   | Python  | Réorganisation sections (v2, ~14KB)            |
| `remove_bg.py`           | Python  | Suppression d'arrière-plans d'images           |
| `run_rembg.py`           | Python  | Wrapper pour l'outil rembg                     |

---

## Commandes NPM

```bash
# Démarrer le serveur de développement (port 8080)
npm run dev

# Construire pour la production
npm run build

# Construire en mode développement (avec source maps)
npm run build:dev

# Prévisualiser le build de production
npm run preview

# Linter le code
npm run lint
```

---

## Conventions de Code

### Alias d'import

```typescript
// ✅ Utiliser l'alias @ pour src/
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";

// ❌ Éviter les chemins relatifs profonds
import { supabase } from "../../lib/supabase";
```

### Structure d'une page type

```tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";

const MaPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <GlobalBreadcrumbs />
      <main>
        {/* Contenu de la page */}
      </main>
      <Footer />
    </div>
  );
};

export default MaPage;
```

### Soumission vers Supabase

```typescript
import { supabase } from "@/lib/supabase";

const { error } = await supabase
  .from("water_test_requests")
  .insert([{ prenom, nom, email, ... }]);
```

---

*Documentation générée le 17 juin 2026 — Projet Bricareau*
