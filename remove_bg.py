from rembg import remove
from PIL import Image
import os

input_path = 'public/김은경 이미지.png'
output_path = 'public/instructor_profile_white.png'

# Check if input exists
if not os.path.exists(input_path):
    print(f"Error: Input file {input_path} not found.")
    exit(1)

print(f"Processing {input_path}...")
try:
    with open(input_path, 'rb') as i:
        with open(output_path, 'wb') as o:
            input_image = i.read()
            output_image = remove(input_image)
            o.write(output_image)
    print(f"Saved to {output_path}")
except Exception as e:
    print(f"Error processing image: {e}")
    exit(1)
