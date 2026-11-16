# Bricareau — thème WordPress

Thème bloc WordPress qui reprend tout le site React (`../src`) : toutes les routes de `src/App.tsx`.

Ce que `wp bricareau seed` crée :

| Contenu | Où le gérer dans l'admin | Source de l'import |
|---------|--------------------------|--------------------|
| 42 pages | Pages | `themes/bricareau/inc/seed/pages/*.php` |
| 36 articles et 8 catégories (`/blog/categorie/…`) | Articles | `data/articles.json` |
| 160 questions de FAQ | FAQ | `data/faqs.json` |
| 69 témoignages | Témoignages | `data/testimonials.json` |
| 9 formulaires, dont l'infolettre | Fluent Forms | `inc/seed/forms.php` |
| Menus de l'en-tête et du pied de page | Apparence > Menus | `inc/navigation.php` |
| Titres et descriptions SEO | Boîte Yoast SEO de chaque page et article ; modèles dans Yoast SEO > Réglages | Champs `seo_title` / `seo_description` des pages |
| Images et fichiers | Médias | `../src/assets` ou `seed-assets/` du zip |

Les tableaux de contaminants (`data/contaminants.json`) et les règles du diagnostic (`src/blocks/water-quiz/view.js`)
restent dans le thème : ils ne se modifient pas dans l'admin.

`bin/extract-content.mjs` régénère `data/` (articles, textes légaux, FAQ, contaminants, pièces) à partir du site React.
Il ne sert plus une fois React retiré : le contenu se gère ensuite dans l'admin.

## Démarrer en local

Prérequis : Docker, Node 18+. Le conteneur utilise WordPress 7.1 (`docker-compose.yml`), comme une installation neuve.

```sh
cd wordpress/themes/bricareau
npm install
npm run build            # ou `npm start` pour recompiler en continu

cd ../..                 # -> wordpress/
docker compose up -d     # http://localhost:8888

# Première installation
docker compose run --rm wpcli wp core install --url=http://localhost:8888 --title=Bricareau \
  --admin_user=admin --admin_password=admin --admin_email=admin@example.com --skip-email
docker compose run --rm wpcli wp language core install fr_CA --activate
docker compose run --rm wpcli wp theme activate bricareau
docker compose run --rm wpcli wp plugin install fluentform wordpress-seo --activate
docker compose run --rm wpcli wp language plugin install wordpress-seo fr_CA
docker compose run --rm wpcli wp bricareau seed
```

Admin local : http://localhost:8888/wp-admin, identifiants de test `admin` / `admin` (local uniquement).

`wp bricareau seed` importe tout le contenu du tableau ci-dessus. Les images sont lues dans `../src/assets`
(monté par docker-compose) ou, depuis le zip, dans `seed-assets/`. Relancer la commande ne duplique rien.
`--force` reconstruit ce qui existe déjà (écrase les modifications faites dans l'admin) ;
`--only=durabilite,carrieres` limite l'import à certaines pages (noms des fichiers de `inc/seed/pages/`),
`--only=articles` aux articles, `--only=menus` aux menus, `--only=forms` aux formulaires et `--only=seo` à la
copie dans Yoast. Avec `--only`, `--force` ne reconstruit que les parties nommées : par exemple
`wp bricareau seed --only=menus --force` recrée les quatre menus sans toucher aux formulaires ni au SEO.

Formulaires : créés dans Fluent Forms par `inc/seed/forms.php`, puis modifiables dans son éditeur ;
les réponses sont dans le menu Fluent Forms. La version gratuite ne gère pas les formulaires à étapes
(réservés à Pro) : le test d'eau tient donc sur une page, en trois sections.

Infolettre du pied de page : formulaire Fluent Forms « Infolettre ». Les inscriptions sont dans
Fluent Forms > Entrées (export CSV), sans courriel à chaque inscription.

## Recevoir les demandes par courriel

Réglages > Demandes du site : l'adresse saisie (plusieurs possibles, séparées par une virgule) reçoit
les demandes de tous les formulaires, avec le client en « Répondre à ». Le bouton « Envoyer un courriel
de test » vérifie l'envoi. Chaque formulaire envoie aussi une confirmation au client (l'infolettre
n'envoie que celle-ci). Ces courriels se modifient par formulaire dans Fluent Forms > Settings > Email
Notifications. Sur un site déjà importé, `wp bricareau seed --only=forms` ajoute les confirmations
manquantes sans toucher au reste des formulaires.
Le thème leur donne à tous la même mise en page (`inc/emails.php`) : logo, libellé vert et titre en
en-tête, coordonnées en pied de page bleu ; le message de chaque notification s'insère entre les deux,
et `{all_data}` s'affiche en tableau libellé / valeur.
Les coordonnées du pied de page des courriels (téléphone, courriel, site, adresse, mention de copyright)
se modifient dans Réglages > Demandes du site ; un champ vide est retiré du courriel. Le titre est le nom du formulaire, ou « Nous avons
bien reçu votre demande » pour les accusés de réception.

En production, installer une extension SMTP (ou le service d'envoi de l'hébergeur) : sans elle, les
courriels partent souvent en indésirables ou pas du tout. Les demandes restent de toute façon dans
Fluent Forms > Entrées. Rien ne passe par Supabase.

## Installer sur un WordPress neuf

```sh
bin/package.sh    # crée dist/bricareau-theme.zip (thème compilé + images de l'import)
```

`dist/` contient aussi, pour une installation à la main, `bricareau-theme-only.zip` (thème sans images),
`bricareau-assets-used.zip` (images utilisées par les pages) et `bricareau-assets-all.zip` (tout `src/assets`).
Ces fichiers ne sont pas versionnés : les recréer après une modification du thème.

Puis sur le serveur, avec WP-CLI (procédure testée sur un WordPress 7.1 vierge) :

```sh
wp language core install fr_CA --activate
wp option update timezone_string America/Toronto
wp plugin install fluentform wordpress-seo --activate
wp language plugin install wordpress-seo fr_CA
wp theme install bricareau-theme.zip --activate
wp bricareau seed
wp rewrite flush --hard
rm -rf wp-content/themes/bricareau/seed-assets   # les images sont maintenant dans la médiathèque
cp wp-content/themes/bricareau/assets/favicon.ico .   # /favicon.ico, même si le serveur ne le passe pas à WordPress
```

Yoast SEO demande WordPress 7.0 ou plus récent. Sur un site déjà importé sans Yoast, l'installer puis lancer
`wp bricareau seo-yoast` copie les titres et descriptions dans Yoast (sans écraser ceux déjà modifiés).

Régler ensuite le titre du site, Réglages > Demandes du site et l'extension SMTP. Le zip dépasse souvent
la limite d'envoi de l'admin : le copier par SFTP. `--force` écrase les modifications faites dans l'admin :
ne pas l'utiliser sur un site en production.

## Version anglaise (Polylang)

Le français reste la langue par défaut, à la racine du site ; l'anglais est sous `/en/` (accueil : `/en/`).
Extension : Polylang (gratuite). Un sélecteur FR | EN s'affiche dans l'en-tête et le menu mobile ; il mène à la
même page dans l'autre langue, ou à l'accueil anglais si la page n'est pas encore traduite.

- **Pages** : chaque page anglaise est une page WordPress liée à sa page française (Pages > colonne des langues).
  Définitions : `inc/seed/pages-en/<nom>.php`, même format que `pages/`, avec `translation_of` (slug français).
  Les liens peuvent garder les chemins français : sur une page anglaise, `bricareau_url()` les envoie vers la
  page anglaise correspondante quand elle existe.
- **Textes du thème** (en-tête, pied de page, 404, recherche, courriels…) : écrits en français dans le code,
  traduits dans `languages/en_CA.l10n.php`.
- **Menus** : tant qu'aucun menu anglais n'est assigné (Apparence > Menus, emplacements « English »), les menus
  par défaut traduits s'affichent.
- **Formulaires** : une copie anglaise de chaque formulaire (`<nom>-en`), créée depuis `inc/seed/forms-en.php`.
  Les demandes arrivent à la même adresse ; les courriels des formulaires anglais sont en anglais.
- **Articles du blogue** : une version anglaise de chaque article (`data/en/articles.json`, avec `translation_of`
  = slug français), dans des catégories anglaises liées aux catégories françaises (`/en/blog/categorie/…`).
- **FAQ** : une version par langue (questions anglaises dans `data/en/faqs.json`, liées aux questions françaises).
  Guide des contaminants et catalogue de pièces : `data/en/contaminants.json` et `data/en/parts.json`.
- **Partagés** : témoignages (affichés dans leur langue d'origine).

```sh
wp plugin install polylang --activate
wp bricareau seed --only=forms,en        # langues, formulaires anglais, pages et articles anglais
wp bricareau seed --only=en/accueil --force   # reconstruire une page anglaise
wp bricareau seed --only=en/articles          # articles anglais (--force pour les reconstruire)
```

Sans WP-CLI (hébergeur sans SSH) : Outils > Articles anglais > « Importer les articles anglais » fait la même chose
que `--only=en/articles` (les articles déjà présents sont gardés) et remplit les champs Yoast vides.

## Pages par ville (`/traitement-eau/<ville>/`)

Une seule page WordPress, « Traitement d'eau à {ville} » (slug `traitement-eau`, importée par
`wp bricareau seed --only=traitement-eau`), sert de modèle à toutes les villes : `{ville}` dans ses blocs,
son titre et sa description Yoast devient le nom de la ville. Les villes qui ont une page sont listées dans
`inc/cities.php` (`bricareau_cities()`) ; une autre ville donne une 404, et `/traitement-eau/Saint-Jérôme/`
redirige vers `/traitement-eau/saint-jerome/`. Yoast liste les villes dans `villes-sitemap.xml`.

En anglais, sa traduction Polylang « Water treatment in {ville} » (slug `water-treatment`,
`wp bricareau seed --only=en/traitement-eau`) donne `/en/water-treatment/<ville>/`. Le sélecteur FR / EN et
les liens hreflang mènent à la même ville dans l'autre langue ; le sitemap des villes liste les deux langues.

`/traitement-eau/` seul redirige (302, sans cache) vers la ville du visiteur, trouvée par le serveur à partir
de son adresse IP : en-tête de ville de Cloudflare (« Add visitor location headers ») ou du module GeoIP s'il
existe, sinon ipinfo.io (réponse gardée une semaine par IP). Hors Québec ou ville non listée : Montréal
(`BRICAREAU_DEFAULT_CITY`). Pour dépasser le petit quota anonyme d'ipinfo.io, ajouter un jeton gratuit dans
`wp-config.php` : `define( 'BRICAREAU_IPINFO_TOKEN', '…' );`.

## Performance et cache

Le thème allège déjà chaque page (`inc/performance.php`) : pas de script emoji, jQuery chargé en bas de page
sans jQuery Migrate (il ne sert qu'à Fluent Forms), logo en WebP, et les nouvelles images téléversées sont
converties en WebP. Les pages en cache restent compatibles avec les formulaires : Fluent Forms demande son
jeton anti-spam au chargement de la page.

À faire une fois sur le serveur, pour convertir en WebP les images déjà dans la médiathèque (les fichiers
JPEG/PNG existants sont conservés) :

```sh
wp media regenerate --yes --skip-delete
```

Cache navigateur des fichiers statiques : ajouter en haut du `.htaccess` du site (cPanel > Gestionnaire de
fichiers, `public_html/.htaccess`, fichiers cachés affichés). CSS et JS changent d'adresse (`?ver=`) à chaque
mise à jour, ils peuvent donc être gardés un an ; les images, un mois.

```apache
# BEGIN Bricareau cache
<IfModule mod_headers.c>
	<FilesMatch "\.(css|js)$">
		Header set Cache-Control "public, max-age=31536000, immutable"
	</FilesMatch>
	<FilesMatch "\.(webp|avif|jpe?g|png|gif|svg|ico|woff2?)$">
		Header set Cache-Control "public, max-age=2592000"
	</FilesMatch>
</IfModule>
# END Bricareau cache
```

Cache des pages : sur l'hébergement actuel (Bluehost derrière Cloudflare), les pages HTML sont déjà mises en
cache par l'hébergeur et par Cloudflare. Réglages conseillés :

- Cloudflare > Caching > Configuration > Browser Cache TTL : « Respect Existing Headers », pour que les durées
  ci-dessus s'appliquent.
- Garder le cache des pages de l'hébergeur actif. Après une modification de contenu, le vider (lien « Caching »
  de la barre d'admin) puis purger Cloudflare (Caching > Configuration > Purge Everything) si l'ancienne
  version reste visible.
- Ne jamais mettre en cache `/wp-admin/`, `/wp-login.php`, `/wp-json/` ni les visiteurs connectés (cookie
  `wordpress_logged_in_*`) dans une règle Cloudflare « Cache Everything ».

## Ce que les éditeurs peuvent modifier

- **Pages** : chaque section est un bloc de la catégorie « Bricareau ». Les textes, images, boutons
  et listes (diapositives, cartes, rangées, postes…) se modifient dans la barre latérale ; les
  sections peuvent être ajoutées, retirées ou réordonnées, et réutilisées sur n'importe quelle page.
  Syntaxe des champs texte : chaque ligne d'un titre = une ligne, `*mot*` = accent (vert),
  `**mot**` = gras, `_mot_` = italique fin, ligne vide = nouveau paragraphe. Une section peut recevoir une ancre
  (Avancé › Ancre HTML) pour les boutons du type `#notre-vision`.
  Pour masquer une section sans la supprimer : menu ⋮ du bloc › Cacher (Ctrl+Maj+H). « Omettre du contenu
  publié » la retire du site, ou cocher Ordinateur / Tablette / Mobile pour la masquer seulement sur ces
  écrans. Un bloc masqué reste listé dans la Vue en liste, où on peut l'afficher de nouveau.
- **Articles** : articles WordPress classés par catégorie (`/blog/categorie/…`). Le sommaire de chaque article
  se construit à partir des intertitres (H2) ; le temps de lecture est calculé s'il n'est pas renseigné.
- **FAQ** (menu d'admin) : une question par élément, classée par catégorie ; l'ordre suit le champ « Ordre ».
- **Témoignages** (menu d'admin) : nom, texte, note ; l'ordre suit le champ « Ordre ».
- **Menus** (Apparence > Menus) : « Menu principal (en-tête) », « Pied de page : colonnes »,
  « Pied de page : liens du bas » et « Réseaux sociaux ». Dans l'en-tête, un onglet dont les éléments ont
  des sous-éléments s'affiche en cartes avec image ; un élément coché « Encadré promo » devient l'encadré
  de droite (sa description sert de texte). La description d'un lien s'affiche sous son titre.
- **Mention de copyright** (bas du pied de page) : Apparence > Éditeur > Compositions > Parties de modèle >
  Pied de page, sélectionner le bloc « Pied de page Bricareau », champ « Mention de copyright ».
  `{annee}` y est remplacé par l'année en cours.
- **SEO** : boîte Yoast SEO de chaque page et article ; modèles des catégories, de la recherche et de la
  page 404 dans Yoast SEO > Réglages.
- **Demandes** : adresse de réception dans Réglages > Demandes du site, réponses dans Fluent Forms > Entrées.
- **Rendez-vous** (menu d'admin, et widget « Prochains rendez-vous » du tableau de bord) : calendrier mois / semaine / jour
  des dates et heures choisies dans « Demande de consultation » et « Planifier un test d'eau ».
  Un clic ouvre le détail et le lien vers la demande ; deux rendez-vous au même créneau sont encadrés en
  rouge. Lecture seule : les demandes se gèrent dans Fluent Forms > Entrées (une demande mise à la
  corbeille ou en indésirable disparaît du calendrier).

## Blocs disponibles

Accueil : Bannière diaporama, Bandeau clients, Section image + texte, Grille d'avantages,
Témoignages, Territoire desservi.
Pages : Bannière de page, Déclaration (vision, mission…), Rangées image + texte alternées,
Ligne du temps, Grille de cartes, Appel à l'action sur image, Introduction texte + image,
Mosaïque de liens, Appel à l'action image 50/50, Carrousel d'avis, Offres d'emploi.
Produits : Cartes problèmes / symptômes, Grille de produits, Tableau comparatif, Parcours en étapes,
Bannière photo, Avant / Après, Pile de cartes, Section sombre + encart, Forfaits / trousses,
Questions fréquentes, Appel à l'action bleu, Ressources, Simulateur d'économies, Galerie mosaïque,
Photo + chiffre clé, Formulaire, Accordéon avec image, Études de cas, Catalogue de pièces,
Bandeau d'appel à l'action. Le Carrousel d'avis et le bloc Témoignages de l'accueil peuvent afficher la liste automatique ou des avis choisis par recherche.
Contenu : Liste des articles, Foire aux questions complète, Guide des contaminants, Diagnostic de l'eau,
Titre de page centré. Les modèles `single`, `category`, `search` et `404` utilisent les blocs
Article de blog, Articles d'une catégorie, Résultats de recherche et Page introuvable.

## Structure du thème

```
themes/bricareau/
  theme.json, templates/, parts/   thème bloc (gabarits, en-tête/pied de page)
  functions.php, inc/              PHP : helpers, icônes, menus, SEO, blog, FAQ, témoignages, demandes, commande seed
  inc/seed/                        pages (pages/*.php) et formulaires (forms.php) créés par l'import
  data/                            contenu importé : articles, FAQ, textes légaux, contaminants, pièces, témoignages
  src/blocks/<bloc>/               block.json + index.js (éditeur) + render.php (rendu) + view.js (interactivité)
  src/shared/controls.js           contrôles d'édition communs (listes, images, icônes)
  src/css/main.css                 Tailwind (même config que le site React)
  build/                           généré par `npm run build` (non versionné)
```

Hors du thème : `bin/extract-content.mjs` (extraction du contenu React vers `data/`), `bin/package.sh`
(zip d'installation) et `docker-compose.yml` (WordPress local sur le port 8888).

Tous les blocs sont rendus côté serveur (`render.php`) : le HTML est complet pour le SEO, et l'éditeur
affiche le même rendu via ServerSideRender. Le JavaScript front (`view.js`) est en JS natif, sans React.

## Limites actuelles

- Les créneaux déjà réservés ne sont plus bloqués (le site React les lisait dans Supabase) : deux clients
  peuvent demander la même heure, et Bricareau confirme le rendez-vous.
- Le désabonnement n'est plus automatique : la demande arrive par courriel et il faut retirer l'adresse de la
  liste à la main. L'infolettre elle-même n'est pas envoyée par le site : les inscriptions s'exportent de Fluent Forms.
- La recherche couvre les pages et les articles, pas les questions de la FAQ (la page FAQ a sa propre recherche).
- Les études de cas et plusieurs dates de promotions sont repris tels quels du site React : à vérifier avant la mise en ligne.
- Après toute modification de classes Tailwind dans le PHP/JS, relancer `npm run build`.

## Google Tag Manager

Réglages > Suivi (GTM) : coller l'ID du conteneur (`GTM-XXXXXXX`), ou définir `define( 'BRICAREAU_GTM_ID', 'GTM-XXXXXXX' );` dans `wp-config.php`. Le code est ajouté dans `<head>` et après `<body>` (`inc/tracking.php`), jamais dans l'admin ni pour les administrateurs connectés (case à cocher).

Mode de consentement Google v2 (Loi 25) : tout est refusé par défaut, puis accordé quand le visiteur clique « Accepter tout » dans le bandeau de témoins. Le choix est conservé 12 mois (`cookieConsent` + `cookieConsentAt` dans le localStorage), puis le bandeau s'affiche de nouveau. Le lien « Gérer mes témoins » du pied de page rouvre le bandeau pour changer ou retirer son consentement ; un refus supprime les témoins Google (`_ga`, `_gid`, `_gcl`…). Le bandeau pousse l'événement `cookie_consent_update` et la variable `cookie_consent` (`accepted` / `declined`) dans le `dataLayer` ; `site_language` (`fr` / `en`) est aussi disponible.

Formulaires : chaque envoi réussi d'un formulaire Fluent Forms pousse l'événement `form_submit` avec `form_id`, `form_name` (ex. `consultation`, `contact-en`), `form_type` (`lead`, `quiz`, `newsletter`, `unsubscribe`), `form_language` et `page_path`. Aucune donnée personnelle n'est envoyée.

Boutons : `cta_click` (boutons du thème marqués `data-cta`, boutons de l'en-tête et tout lien vers une page de conversion : consultation, demande de service, contact, diagnostic), `phone_click` (liens `tel:`) et `email_click` (liens `mailto:`), avec `link_text`, `link_url`, `cta_location` (bloc d'origine, ex. `site-header`, `page-hero`, `hero-slider`) et `page_path`.

## WhatsApp

Réglages > Demandes du site > WhatsApp : numéro au format international (ex. `+1 514 555 0000`) et case « Afficher le bouton ». Le bouton rond (bas droite, toutes les pages, `inc/whatsapp.php`) ouvre `wa.me` avec un message prérempli qui nomme la page, en français ou en anglais ; une bulle « Écrivez-nous sur WhatsApp » s'affiche sur ordinateur (fermable pour la session). Aucun script tiers ni témoin. Les clics poussent l'événement `whatsapp_click` (`cta_location` = `whatsapp-button`).

## Clavardage Tawk.to

Réglages > Demandes du site > Clavardage (Tawk.to) : ID de la propriété et ID du widget, tirés du code d'intégration (`https://embed.tawk.to/ID-PROPRIÉTÉ/ID-WIDGET`), plus un widget anglais optionnel pour `/en/` (`inc/tawk.php`). Le script Tawk (tiers, avec témoins) se charge 3 s après la page seulement si le visiteur a accepté les témoins ; sinon un bouton léger (même place que la bulle Tawk) le charge au clic et ouvre le clavardage. Sur ordinateur, une étiquette « Clavarder en direct » s'affiche à gauche de la bulle (fermable pour la session). Quand Tawk est actif, le bouton WhatsApp monte au-dessus. Événements `chat_opened` et `chat_started` dans le `dataLayer`.
