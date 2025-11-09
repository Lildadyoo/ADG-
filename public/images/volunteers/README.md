# Volunteer Images

Place volunteer profile images in this directory to display in the Volunteer Stories section on the Get Involved page.

## Image Requirements

- **Format**: JPG or PNG (JPG recommended for smaller file sizes)
- **Size**: Recommended 200x200 pixels (square, 1:1 aspect ratio) or larger
- **File Naming**: Use descriptive names matching the volunteer names:
  - `john-mukasa.jpg` - For John Mukasa (Education Volunteer)
  - `sarah-nakamya.jpg` - For Sarah Nakamya (Donor & Partner)
  - Add more files as needed for additional volunteers

## Image Guidelines

- Use professional headshot-style photos
- Images should be square (1:1 aspect ratio) for best results
- Use clear, well-lit photos with good contrast
- Ensure the face is centered and clearly visible
- Use consistent styling across all volunteer images
- Optimize images before uploading (use tools like TinyPNG or ImageOptim)
- Keep file sizes under 100KB for optimal loading speed

## Usage

The TeamMemberImage component automatically:
- Handles missing images with a graceful fallback (displays initials)
- Optimizes images using Next.js Image component
- Maintains circular shape (rounded-full)
- Provides error handling

## Current Volunteer Images

- `john-mukasa.jpg` - John Mukasa (Education Volunteer)
- `sarah-nakamya.jpg` - Sarah Nakamya (Donor & Partner)

## Example Structure

```
public/
  images/
    volunteers/
      john-mukasa.jpg
      sarah-nakamya.jpg
      [additional-volunteer].jpg
```

## Adding Volunteer Images

1. **Prepare your images**: Ensure they meet the size and format requirements
2. **Name your files**: Use lowercase names with hyphens (e.g., `firstname-lastname.jpg`)
3. **Place in directory**: Add images to `public/images/volunteers/`
4. **Update the page**: Add the image path in `app/get-involved/page.tsx` in the Volunteer Stories section
5. **Automatic display**: Images will appear automatically with fallback to initials if missing

## Image Fallback

If an image is missing or fails to load, the component will:
- Display a circular placeholder with the volunteer's initials
- Maintain the same size and layout
- Prevent layout shift or broken images
- Use the volunteer's name to generate initials automatically

## Adding More Volunteers

To add more volunteer testimonials:

1. Add a new card in the Volunteer Stories section in `app/get-involved/page.tsx`:
```tsx
<div className="card">
  <p className="text-gray-600 mb-4 italic">
    "Your testimonial text here..."
  </p>
  <div className="flex items-center gap-3">
    <TeamMemberImage
      src="/images/volunteers/your-name.jpg"
      alt="Your Name"
      name="Your Name"
      size={48}
    />
    <div>
      <div className="font-semibold text-gray-900">Your Name</div>
      <div className="text-sm text-gray-600">Your Role</div>
    </div>
  </div>
</div>
```

2. Add the corresponding image file to `public/images/volunteers/`

## Tips

- **Consistent styling**: Use similar lighting and background for all volunteer photos
- **Professional quality**: Use clear, professional headshots
- **Square format**: Crop images to square (1:1) for best display
- **File size**: Keep images under 100KB for fast loading
- **Alt text**: The component uses the volunteer's name as alt text for accessibility
- **Initials fallback**: If no image is provided, initials will be automatically generated from the name

## Privacy Considerations

- Ensure you have permission to use volunteer photos
- Consider privacy preferences when displaying volunteer images
- You can use initials-only display by not providing an image file

