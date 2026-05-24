import sys
from rembg import remove
from PIL import Image

def process_image(input_path, output_path):
    input_img = Image.open(input_path)
    output_img = remove(input_img)
    output_img.save(output_path)

input_files = [
    ('c:/Users/Hp/Desktop/bricareau/src/assets/distributeur-1.png', 'c:/Users/Hp/Desktop/bricareau/src/assets/distributeur-1-nobg.png'),
    ('c:/Users/Hp/Desktop/bricareau/src/assets/distributeur-2.png', 'c:/Users/Hp/Desktop/bricareau/src/assets/distributeur-2-nobg.png'),
    ('c:/Users/Hp/Desktop/bricareau/src/assets/distributeur-3.png', 'c:/Users/Hp/Desktop/bricareau/src/assets/distributeur-3-nobg.png'),
    ('c:/Users/Hp/Desktop/bricareau/src/assets/distributeur-4.png', 'c:/Users/Hp/Desktop/bricareau/src/assets/distributeur-4-nobg.png'),
    ('c:/Users/Hp/Desktop/bricareau/src/assets/nouveau-distributeur-comptoir.png', 'c:/Users/Hp/Desktop/bricareau/src/assets/nouveau-distributeur-comptoir-nobg.png')
]

for in_f, out_f in input_files:
    print('Processing', in_f)
    try:
        process_image(in_f, out_f)
        print('Saved to', out_f)
    except Exception as e:
        print('Error:', e)
