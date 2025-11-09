# Hero Background Images

Place hero section background images in this directory.

## Image Requirements

- **Format**: JPG or PNG (JPG recommended for smaller file sizes)
- **Size**: Recommended 1920x1080 pixels (16:9 aspect ratio) or larger
- **File Naming**: Use descriptive names:
  - `about-hero.jpg` - For the About page
  - `home-hero.jpg` - For the Home page
  - `programs-hero.jpg` - For the Programs page
  - etc.

## Image Guidelines

- Use high-quality images that represent your organization
- Ensure images are not too busy - text will be overlaid on top
- Recommended: Use images with darker areas where text will appear, or ensure the overlay is sufficient
- Optimize images before uploading (use tools like TinyPNG or ImageOptim)

## Current Hero Images

- `home-hero.jpg` - For the Home page
- `about-hero.jpg` - For the About page
- `gallery-hero.jpg` - For the Gallery page

## Usage

The HeroSection component automatically adds:
- A dark overlay (40% opacity) for text readability
- Responsive background sizing
- Center positioning

## Example Structure

```
public/
  images/
    hero/
      about-hero.jpg
      home-hero.jpg
      gallery-hero.jpg
      programs-hero.jpg (optional)
      contact-hero.jpg (optional)
```

## Adding Hero Images to Pages

Update your page to use the HeroSection component:

```tsx
import HeroSection from "@/components/HeroSection";

<HeroSection
  title="Your Title"
  subtitle="Your subtitle text"
  backgroundImage="/images/hero/your-image.jpg"
  overlay={true}
/>
```

