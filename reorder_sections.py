import re
with open('src/pages/FontainesDeauModernes.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

section_6_start = content.find('{/* SECTION 6: MODERN SLIDER SHOWCASE')
new_section_start = content.find('{/* ========================================================================= */}\n                {/* NOUVELLE SECTION - LES 3 NIVEAUX DE PURETE ABSOLUE */}')
premium_cta_start = content.find('{/* 11. PREMIUM CTA SECTION */}')
testimonials_start = content.find('{/* SECTION 10: TESTIMONIALS SECTION */}')
footer_start = content.find('            </main>')

if -1 in (section_6_start, new_section_start, premium_cta_start, testimonials_start, footer_start):
    print('Could not find all sections')
    exit(1)

before_6 = content[:section_6_start]
sec_6 = content[section_6_start:new_section_start]
new_sec = content[new_section_start:premium_cta_start]
cta = content[premium_cta_start:testimonials_start]
testimonials = content[testimonials_start:footer_start]
after_testimonials = content[footer_start:]

new_content = before_6 + new_sec + sec_6 + testimonials + cta + after_testimonials

with open('src/pages/FontainesDeauModernes.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Reordered sections successfully.')
