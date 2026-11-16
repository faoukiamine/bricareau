#!/usr/bin/env bash
# Builds dist/bricareau-theme.zip: the compiled theme plus the images its seed needs,
# ready for a fresh WordPress install (see README.md).
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
theme="$root/themes/bricareau"
assets="$root/../src/assets"
stage="$(mktemp -d)"
trap 'rm -rf "$stage"' EXIT

(cd "$theme" && npm run build >/dev/null)

mkdir -p "$stage/bricareau/seed-assets" "$root/dist"
(cd "$theme" && tar --exclude=node_modules --exclude=./src --exclude='package*.json' --exclude='tailwind*' --exclude='postcss*' --exclude=seed-assets -cf - .) | tar -xf - -C "$stage/bricareau"

# Every asset named in a page definition or in seed.php ($img(), $avatars()).
sources="$(cat "$theme"/inc/seed/pages/*.php "$theme"/inc/seed.php "$theme"/data/articles.json "$theme"/data/parts.json | sed "s/\\\\'/'/g")"
(cd "$assets" && find . -type f -printf '%P\n') | while IFS= read -r file; do
	if grep -qF -- "$file" <<<"$sources"; then
		mkdir -p "$stage/bricareau/seed-assets/$(dirname "$file")"
		cp "$assets/$file" "$stage/bricareau/seed-assets/$file"
	fi
done

rm -f "$root/dist/bricareau-theme.zip"
(cd "$stage" && zip -qr "$root/dist/bricareau-theme.zip" bricareau)
du -h "$root/dist/bricareau-theme.zip"
