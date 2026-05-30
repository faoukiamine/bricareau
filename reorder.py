import re
import sys

with open('src/pages/FiltrationHotelsRestaurants.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Find <main> block
main_match = re.search(r'(<main>)(.*?)(</main>)', text, re.DOTALL)
if not main_match:
    print('Could not find main block')
    sys.exit(1)

main_inner = main_match.group(2)

# Define the markers in their current order (as they appear in the file)
marker_regexes = [
    r'\s*\{\/\* HERO SECTION \*\/\}',
    r'\s*\{\/\* STATEMENT BANNER.*?\*\/\}',
    r'\s*\{\/\* ENGAGEMENTS SECTION \*\/\}',
    r'\s*\{\/\* SOLUTIONS GRID \*\/\}',
    r'\s*\{\/\* ROI SECTION \*\/\}',
    r'\s*\{\/\* LA OU L\'EAU EST LE PLUS IMPORTANTE \*\/\}',
    r'\s*\{\/\* DARK QUOTE BANNER \*\/\}',
    r'\s*\{\/\* NOTRE PROCESSUS \*\/\}',
    r'\s*\{\/\* RESSOURCES CONNEXES \*\/\}',
    r'\s*\{\/\* TESTIMONIALS \*\/\}',
    r'\s*\{\/\* CTA.*?\*\/\}'
]

sections = {}
current_idx = 0

positions = []
for name, regex in [
    ('hero', marker_regexes[0]),
    ('statement', marker_regexes[1]),
    ('engagements', marker_regexes[2]),
    ('solutions', marker_regexes[3]),
    ('roi', marker_regexes[4]),
    ('applications', marker_regexes[5]),
    ('quote', marker_regexes[6]),
    ('processus', marker_regexes[7]),
    ('ressources', marker_regexes[8]),
    ('testimonials', marker_regexes[9]),
    ('cta', marker_regexes[10])
]:
    match = re.search(regex, main_inner)
    if match:
        positions.append((match.start(), name, match.group(0)))
    else:
        print(f"Missing marker: {name}")
        sys.exit(1)

positions.sort(key=lambda x: x[0])

blocks = {}
for i in range(len(positions)):
    start_pos = positions[i][0]
    name = positions[i][1]
    end_pos = positions[i+1][0] if i + 1 < len(positions) else len(main_inner)
    blocks[name] = main_inner[start_pos:end_pos]

# New order:
new_order = [
    'hero',
    'statement',
    'applications',
    'solutions',
    'roi',
    'quote',
    'testimonials',
    'engagements',
    'processus',
    'cta',
    'ressources'
]

new_main_inner = ""
for name in new_order:
    new_main_inner += blocks[name]

new_text = text[:main_match.start(2)] + new_main_inner + text[main_match.end(2):]

with open('src/pages/FiltrationHotelsRestaurants.tsx', 'w', encoding='utf-8') as f:
    f.write(new_text)

print('Successfully reordered!')
