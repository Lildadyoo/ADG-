# Get Involved Images

Place images for the Get Involved page in this directory.

## Image Requirements

- **Format**: JPG or PNG (JPG recommended for smaller file sizes)
- **Size**: Recommended 800x600 pixels (4:3 aspect ratio) or larger
- **File Naming**: Use descriptive names matching the involvement options:
  - `volunteer.jpg` - For Volunteer section
  - `donate.jpg` - For Donor/Donate section

## Image Guidelines

- Use high-quality images that represent each involvement option
- **Volunteer image**: Should show volunteers in action (e.g., working with communities, teaching, helping)
- **Donate image**: Should show the impact of donations (e.g., happy beneficiaries, program activities, community development)
- Ensure images are visually appealing and relevant to the content
- Optimize images before uploading (use tools like TinyPNG or ImageOptim)
- Keep file sizes under 300KB for optimal loading speed

## Usage

The InvolvementImage component automatically:
- Handles missing images with a graceful fallback
- Optimizes images using Next.js Image component
- Provides loading states
- Maintains responsive sizing
- Displays images at the top of each card

## Current Images

- `volunteer.jpg` - Volunteer section (required)
- `donate.jpg` - Donate/Donor section (required)

## Example Structure

```
public/
  images/
    get-involved/
      volunteer.jpg
      donate.jpg
```

## Adding Images

1. **Prepare your images**: Ensure they meet the size and format requirements
2. **Name your files**: Use the exact filenames listed above (case-sensitive)
3. **Place in directory**: Add images to `public/images/get-involved/`
4. **Automatic display**: Images will appear automatically at the top of the Volunteer and Donate cards

## Image Fallback

If an image is missing or fails to load, the component will:
- Display a placeholder with "Image not available" message
- Maintain the same layout and spacing
- Prevent layout shift or broken images
- The card will still display all content below the image area

## Image Suggestions

### Volunteer Image
- Volunteers working with community members
- Teaching or training sessions
- Field work activities
- Community outreach events
- Smiling volunteers and beneficiaries together

### Donate Image
- Programs in action funded by donations
- Happy beneficiaries benefiting from donations
- Community development projects
- Educational or health programs supported by donations
- Impact visualization (before/after, progress)

## Tips

- **Consistent styling**: Use similar lighting and composition for both images
- **Relevant content**: Choose images that clearly represent each involvement option
- **File size**: Keep images under 300KB for optimal loading speed
- **Alt text**: The component uses the section title as alt text for accessibility
- **Aspect ratio**: Maintain consistent aspect ratio (4:3) for uniform card heights

