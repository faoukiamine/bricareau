from rembg import remove

def remove_bg(input_path, output_path):
    with open(input_path, 'rb') as i:
        with open(output_path, 'wb') as o:
            input_data = i.read()
            output_data = remove(input_data)
            o.write(output_data)

images = [
    ('src/assets/A12.jpg', 'src/assets/A12_no_bg.png'),
    ('src/assets/A8.jpg', 'src/assets/A8_no_bg.png'),
    ('src/assets/A9.jpg', 'src/assets/A9_no_bg.png'),
    ('src/assets/A13.jpg', 'src/assets/A13_no_bg.png'),
    ('src/assets/A7.webp', 'src/assets/A7_no_bg.png'),
]

for inp, out in images:
    print(f"Processing {inp}...")
    remove_bg(inp, out)
print("Done")
