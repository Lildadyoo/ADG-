# Team Member Images

Place team member photos in this directory.

## Image Requirements

- **Format**: JPG or PNG
- **Size**: Recommended 400x400 pixels or larger (square format)
- **File Naming**: Use lowercase with hyphens, matching the names in the code:
  - `mpeke-isima.jpg`
  - `nanteza-salima.jpg`
  - `nanduga-mastula.jpg`
  - `joweria-muwanga.jpg`
  - `gaelle.jpg`

## Adding New Team Members

1. Add the image file to this directory
2. Update the team member data in `app/about/page.tsx`
3. Add the image path to the member object: `image: "/images/team/your-image.jpg"`

## Fallback Behavior

If an image is not found or fails to load, the component will automatically display:
- A circular placeholder with the person's initials (e.g., "MI" for Mpeke Isima)

## Example Structure

```
public/
  images/
    team/
      mpeke-isima.jpg
      nanteza-salima.jpg
      nanduga-mastula.jpg
      joweria-muwanga.jpg
      gaelle.jpg
```

