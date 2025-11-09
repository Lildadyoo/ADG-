# Gallery Images

Place gallery images in this directory.

## Image Requirements

- **Format**: JPG or PNG (JPG recommended for smaller file sizes)
- **Size**: Recommended 1200x800 pixels or larger (3:2 or 4:3 aspect ratio)
- **File Naming**: Use descriptive names with category prefix:
  - `education-1.jpg`, `education-2.jpg`, etc. - Education category
  - `health-1.jpg`, `health-2.jpg`, etc. - Health category
  - `sustainable-1.jpg`, `sustainable-2.jpg`, etc. - Sustainable Growth category
  - `events-1.jpg`, `events-2.jpg`, etc. - Events category
  - `community-1.jpg`, `community-2.jpg`, etc. - Community category

## Image Guidelines

- Use high-quality images that showcase your programs and activities
- Ensure images are relevant to the category they're assigned to
- Optimize images before uploading (use tools like TinyPNG or ImageOptim)
- Recommended: Use images with good composition and lighting

## Current Gallery Images

The following images are expected in the gallery:

### Education Category
- `education-1.jpg` - School Program Launch
- `education-2.jpg` - Student Learning
- `education-3.jpg` - Teacher Training

### Health Category
- `health-1.jpg` - Community Health Clinic
- `health-2.jpg` - Health Workshop
- `health-3.jpg` - Health Screening

### Sustainable Growth Category
- `sustainable-1.jpg` - Agriculture Training
- `sustainable-2.jpg` - Renewable Energy Project

### Events Category
- `events-1.jpg` - Annual Community Gathering
- `events-2.jpg` - Volunteer Recognition

### Community Category
- `community-1.jpg` - Community Meeting
- `community-2.jpg` - Community Celebration

## Usage

Images are automatically displayed in:
- Gallery page with category filtering
- Image lightbox on click
- Responsive grid layout

## Adding New Gallery Images

1. Add the image file to this directory with appropriate naming (e.g., `education-4.jpg`)
2. Update the `images` array in `app/gallery/page.tsx`:
   ```typescript
   {
     id: 13,
     category: "education",
     title: "Your Image Title",
     image: "/images/gallery/education-4.jpg",
   }
   ```

## Features

- **Category Filtering**: Users can filter images by category
- **Image Lightbox**: Click on any image to view it in full size
- **Responsive Design**: Images adapt to different screen sizes
- **Error Handling**: Graceful fallback if images are missing
- **Hover Effects**: Interactive hover effects on images

## Example Structure

```
public/
  images/
    gallery/
      education-1.jpg
      education-2.jpg
      education-3.jpg
      health-1.jpg
      health-2.jpg
      health-3.jpg
      sustainable-1.jpg
      sustainable-2.jpg
      events-1.jpg
      events-2.jpg
      community-1.jpg
      community-2.jpg
```

