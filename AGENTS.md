🎯 1. But du Projet
Concevoir un portfolio de haute précision technique servant de vitrine de compétences en architecture web. L'objectif est de transformer une simple présentation de projets en une démonstration d'expertise logicielle, en privilégiant la performance brute, la clarté systémique et l'efficacité utilisateur.

🏗️ 2. Architecture Technique
Le projet repose sur le framework Astro, choisi pour son approche "Zéro JavaScript par défaut" et son architecture d'îles (Islands).

Structure Modulaire : Séparation stricte entre les composants de présentation (UI), les composants de données (Content Collections) et les layouts globaux.

Content Collections : Utilisation systématique de schémas (Zod) pour typer les métadonnées des projets, garantissant une intégrité totale des données.

Islands Architecture : L'interactivité côté client doit être l'exception, pas la règle. Chaque composant interactif doit être isolé et chargé de manière différée (lazy-loading).

🧩 3. Principes de Développement (Core Values)
🧱 SOLID
Single Responsibility (SRP) : Un composant = une fonction. Si un composant Astro gère à la fois le fetching de données et le style complexe, il doit être scindé.

Open/Closed : Les composants UI doivent être ouverts à l'extension (via les props/slots) mais fermés à la modification interne.

Interface Segregation : Ne pas passer de props inutiles aux composants. Utiliser des contrats de types clairs (TypeScript).

♻️ DRY (Don't Repeat Yourself)
Toute logique répétée (formatage de date, calculs de durée) doit être extraite dans un dossier src/utils.

Les motifs de design récurrents (grilles, boutons, conteneurs) doivent devenir des composants atomiques.

📐 KISS (Keep It Simple, Stupid)
Privilégier les solutions natives (CSS pur, HTML sémantique) avant de sortir l'artillerie JavaScript.

La complexité inutile est une dette technique. Si une fonctionnalité peut être réalisée sans bibliothèque externe, elle doit l'être.

🚀 4. Piliers de Qualité
⚡ Performance
Score Lighthouse 100/100 requis sur tous les écrans.

Optimisation agressive des images (formats .webp/.avif via Astro Image).

Minification et compression des assets au build.

♿ Accessibilité (A11y)
Conformité aux normes WCAG 2.1 (niveau AA minimum).

Navigation au clavier intégrale (focus visibles, gestion du tabindex).

Sémantique HTML5 stricte (utilisation correcte des balises main, section, article, header, nav).

Support complet pour les lecteurs d'écran (aria-labels, alt-texts).

🔒 Sécurité
Sanitisation : Protection contre les injections XSS, même sur un site statique (vérification des entrées MDX).

Headers : Implémentation de Content Security Policy (CSP) et protection des headers HTTP.

Zéro Secrets : Aucune clé d'API ou information sensible dans le dépôt Git (utilisation stricte de .env).

📈 5. Maintenance & Scalabilité
Documentation Inline : Chaque composant complexe doit être documenté via JSDoc.

Scalabilité : L'architecture doit permettre l'ajout de 50 projets sans dégradation des performances ni confusion dans la structure des dossiers.

Typescript : Typage strict requis pour éviter les erreurs d'exécution.
