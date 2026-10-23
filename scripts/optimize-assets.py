from pathlib import Path
from PIL import Image, ImageOps

source = Path(r"S:\Collins Njagi Portfolio\My Photos")
output = Path("public/images")
output.mkdir(parents=True, exist_ok=True)

images = {
    "Me Main.jpg": "me-main.webp",
    "Moi University class of 2026.jpeg": "moi-class.webp",
    "WhatsApp Image 2026-10-22 at 2.16.45 PM.jpeg": "portrait-glasses.webp",
    "WhatsApp Image 2026-10-22 at 2.16.46 PM.jpeg": "portrait-casual.webp",
    "WhatsApp Image 2026-10-22 at 2.18.45 PM.jpeg": "portrait-blue.webp",
    "WhatsApp Image 2026-10-22 at 2.19.12 PM.jpeg": "portrait-smile.webp",
}

for source_name, output_name in images.items():
    image = ImageOps.exif_transpose(Image.open(source / source_name)).convert("RGB")
    image.thumbnail((1800, 1800), Image.Resampling.LANCZOS)
    image.save(output / output_name, "WEBP", quality=83, method=6)
    print(f"{source_name} -> {output_name}: {image.width}x{image.height}")
