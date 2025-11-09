# Program Images

Place program images in this directory to display on the Programs page.

## Image Requirements

- **Format**: JPG or PNG (JPG recommended for smaller file sizes)
- **Size**: Recommended 1200x800 pixels (3:2 aspect ratio) or larger
- **File Naming**: Use descriptive names matching the program IDs:
  - `education.jpg` - For Education Programs
  - `health.jpg` - For Health Initiatives
  - `sustainable-growth.jpg` - For Sustainable Growth programs

## Image Guidelines

- Use high-quality images that represent each program
- Images should show the program in action (e.g., students learning, health clinics, community projects)
- Ensure images are visually appealing and relevant to the program content
- Optimize images before uploading (use tools like TinyPNG or ImageOptim)
- Maintain consistent aspect ratio across all program images

## Usage

The ProgramImage component automatically:
- Handles missing images with a graceful fallback
- Optimizes images using Next.js Image component
- Provides loading states
- Maintains responsive sizing

## Current Program Images

- `education.jpg` - Education Programs
- `health.jpg` - Health Initiatives
- `sustainable-growth.jpg` - Sustainable Growth programs

## Example Structure

```
public/
  images/
    programs/
      education.jpg
      health.jpg
      sustainable-growth.jpg
```

## Adding Program Images

1. **Prepare your images**: Ensure they meet the size and format requirements
2. **Name your files**: Use the exact filenames listed above (case-sensitive)
3. **Place in directory**: Add images to `public/images/programs/`
4. **Automatic display**: Images will appear automatically on the Programs page

## Image Fallback

If an image is missing or fails to load, the component will:
- Display a placeholder with "Image not available" message
- Maintain the same layout and spacing
- Prevent layout shift or broken images

## Tips

- **Consistent styling**: Use similar lighting and composition for all program images
- **Relevant content**: Choose images that clearly represent each program
- **File size**: Keep images under 500KB for optimal loading speed
- **Alt text**: The component uses the program title as alt text for accessibility

