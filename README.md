# Bricareau — site web

Site de Bricareau Water Specialist, entreprise québécoise de traitement de l'eau (résidentiel, bureaux,
hôtellerie et restauration, industriel), avec un blog. Tout le contenu est en français.

Le dépôt contient deux versions du même site :

| Version | Dossier | État |
|---------|---------|------|
| Site React (Vite, TypeScript, Tailwind, shadcn/ui) | `src/`, `public/` | En ligne aujourd'hui (Vercel), modifiable dans Lovable |
| Thème WordPress avec tout le contenu | `wordpress/` | Prêt à installer, pas encore en ligne |

Le thème WordPress reprend toutes les routes du site React, avec les mêmes adresses. Une fois en ligne,
le contenu se gère dans l'admin WordPress plutôt que dans le code.

## Site React

Prérequis : Node.js et npm.

```sh
npm i              # installer les dépendances (package-lock.json fait foi)
npm run dev        # serveur de développement : http://localhost:8080
npm run build      # build de production dans dist/
npm run lint       # eslint
npx tsc -p tsconfig.app.json --noEmit   # vérification des types (le build ne la fait pas)
```

Les variables `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY` (fichier `.env`) sont intégrées au moment
du build : elles doivent être définies avant `npm run build`. Les formulaires et l'infolettre du site
React enregistrent dans Supabase.

Déploiement : la production est construite sur Vercel. Un `Dockerfile` sert aussi le build sur le port 3000.
Les modifications faites dans [Lovable](https://lovable.dev/projects/ce7f9aac-8b88-4587-8dcc-4d544df6f56b)
sont enregistrées directement dans ce dépôt.

Repères :

- Routes : déclarées une par une dans `src/App.tsx` (les tableaux de routes de `DOCUMENTATION.md` ne sont
  plus à jour).
- Pages : `src/pages/`, articles du blog dans `src/pages/Blog pages/`.
- Contenu en données : `src/data/` (catégories du blog, FAQ, témoignages, menus, recherche).
- Images : `src/assets/`. Les noms de fichiers sont sensibles à la casse sur Vercel.
- Les scripts `*.cjs` et `*.py` à la racine sont des outils ponctuels déjà utilisés, hors du build.

## Thème WordPress

Tout est décrit dans [`wordpress/README.md`](wordpress/README.md) : installation locale (Docker),
installation sur un WordPress neuf, ce que l'import crée et ce que l'équipe peut modifier dans l'admin.

En bref :

- 42 pages, 36 articles, 160 questions de FAQ, 69 témoignages, les menus et les formulaires sont créés
  par `wp bricareau seed`.
- Les formulaires (Fluent Forms) envoient les demandes par courriel à l'adresse choisie dans
  Réglages > Demandes du site. Rien ne passe par Supabase.
- Les titres et descriptions SEO sont gérés par Yoast SEO (WordPress 7.0 ou plus récent).
- `wordpress/bin/package.sh` produit `wordpress/dist/bricareau-theme.zip` (thème + images de l'import).

Le contenu WordPress a été extrait du code React actuel. Une modification faite ensuite dans React ou
Lovable n'arrive pas dans WordPress : la refaire dans l'admin, ou relancer
`node wordpress/bin/extract-content.mjs` puis l'import pour les articles et les textes légaux.

## Documentation

- `wordpress/README.md` : thème WordPress.
- `DOCUMENTATION.md` : référence détaillée du site React (routes non à jour).
- `CLAUDE.md` : notes techniques pour les assistants de code.
- `design-system/*/MASTER.md`, `design_system_hotels.md` : notes de design.
