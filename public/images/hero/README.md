# Hero Background Images

Place hero section background images in this directory.

## Image Requirements

- **Format**: JPG or PNG (JPG recommended for smaller file sizes)
- **Size**: Recommended 1920x1080 pixels (16:9 aspect ratio) or larger
- **File Naming**: Use descriptive names:
  - `home-hero.jpg` - For the Home page
  - `about-hero.jpg` - For the About page
  - `gallery-hero.jpg` - For the Gallery page
  - `programs-hero.jpg` - For the Programs page
  - `get-involved-hero.jpg` - For the Get Involved page
  - `donate-hero.jpg` - For the Donate page
  - `news-hero.jpg` - For the News page
  - `contact-hero.jpg` - For the Contact page

## Image Guidelines

- Use high-quality images that represent your organization
- Ensure images are not too busy - text will be overlaid on top
- Recommended: Use images with darker areas where text will appear, or ensure the overlay is sufficient
- Optimize images before uploading (use tools like TinyPNG or ImageOptim)

## Current Hero Images

- `home-hero.jpg` - For the Home page
- `about-hero.jpg` - For the About page
- `gallery-hero.jpg` - For the Gallery page
- `programs-hero.jpg` - For the Programs page
- `get-involved-hero.jpg` - For the Get Involved page
- `donate-hero.jpg` - For the Donate page
- `news-hero.jpg` - For the News page
- `contact-hero.jpg` - For the Contact page

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
      home-hero.jpg
      about-hero.jpg
      gallery-hero.jpg
      programs-hero.jpg
      get-involved-hero.jpg
      donate-hero.jpg
      news-hero.jpg
      contact-hero.jpg
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

