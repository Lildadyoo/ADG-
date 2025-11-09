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

### Stories in Motion Section
- `stories-education.jpg` - Education Program Impact (for Stories in Motion section)
- `stories-health.jpg` - Community Health Initiative (for Stories in Motion section)

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

## Adding Images to Stories in Motion Section

1. Add the image file to this directory (e.g., `stories-education.jpg`, `stories-health.jpg`)
2. Update the `stories` array in `app/gallery/page.tsx`:
   ```typescript
   {
     id: "story-3",
     title: "Your Story Title",
     description: "Your story description",
     image: "/images/gallery/stories-your-story.jpg",
     videoUrl: null, // Or add YouTube/Vimeo URL: "https://www.youtube.com/watch?v=..."
   }
   ```

### Adding Video Links

To add a video link to a story:
1. Get the YouTube or Vimeo video URL
2. Update the `videoUrl` field in the story object:
   ```typescript
   videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
   ```
3. When clicked, the video will open in a new tab
4. If no video URL is provided, clicking the image will open it in the lightbox

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
      stories-education.jpg
      stories-health.jpg
```

