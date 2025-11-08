# News Article Images

Place news article images in this directory.

## Image Requirements

- **Format**: JPG or PNG (JPG recommended for smaller file sizes)
- **Size**: Recommended 1200x800 pixels (3:2 aspect ratio) or larger
- **File Naming**: Use consistent naming convention:
  - `news-1.jpg` - For article ID 1
  - `news-2.jpg` - For article ID 2
  - `news-3.jpg` - For article ID 3
  - etc.

## Image Guidelines

- Use high-quality images that relate to the news article content
- Ensure images are relevant and tell the story
- Optimize images before uploading (use tools like TinyPNG or ImageOptim)
- Recommended: Use images with good contrast and composition

## Current News Articles

The following images are expected:
- `news-1.jpg` - Community Health Initiative Launch
- `news-2.jpg` - Education Program Reaches 5,000 Students
- `news-3.jpg` - Sustainable Growth Project Expansion
- `news-4.jpg` - Annual Community Gathering Success
- `news-5.jpg` - New Partnership with Local NGOs
- `news-6.jpg` - Volunteer Recognition Ceremony

## Usage

Images are automatically displayed in:
- News listing page (featured article and grid)
- Home page (latest news section)
- Individual article pages
- Related articles section

## Fallback Behavior

If an image is not found or fails to load, the component will automatically display a placeholder with a gray background.

## Example Structure

```
public/
  images/
    news/
      news-1.jpg
      news-2.jpg
      news-3.jpg
      news-4.jpg
      news-5.jpg
      news-6.jpg
```

## Adding New News Articles

1. Add the image file to this directory (e.g., `news-7.jpg`)
2. Update the news article data in `app/news/page.tsx` with the image path: `image: "/images/news/news-7.jpg"`
3. Add the same image path to the article data in `app/news/[id]/page.tsx` if you're adding individual article pages

