# Optimole WordPress Templates

This repository contains a React application that powers the Optimole WordPress templates plugin, providing modern, responsive UI components for Optimole's WordPress integration.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **React Router** - For client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast, modern build tool
- **Lucide Icons** - Lightweight SVG icons

## Project Structure

```
optimole-templates/
├── src/                        # React source code
│   ├── components/             # UI components
│   │   ├── common/             # Shared components (Hero, FAQ, etc.)
│   │   ├── pricing/            # Pricing page specific components
│   │   └── ...                 # Other component categories
│   ├── data/                   # Data files
│   ├── types/                  # TypeScript interfaces
│   ├── App.tsx                 # Main application component
│   └── main.tsx               # Entry point
├── public/                     # Static assets
├── dist/                       # Build output
├── templates/                  # WordPress PHP templates
├── includes/                   # WordPress PHP include files
├── wordpress-plugin/           # Plugin packaging structure
└── package.json                # Dependencies and scripts
```

## Installation

### Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/optimole-templates.git
   cd optimole-templates
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The application will be available at http://localhost:5173/ai-experiments/

### WordPress Plugin Installation

1. Build the plugin:
   ```bash
   npm run build
   ```
   
2. Package the WordPress plugin:
   ```bash
   npm run package
   ```
   This command will create a clean `wordpress-plugin/dist` directory with the latest built assets and generate `wordpress-plugin/optimole-plugin.zip`.

3. Install the generated zip file through the WordPress admin interface:
   - Navigate to Plugins → Add New → Upload Plugin
   - Select the `wordpress-plugin/optimole-plugin.zip` file
   - Activate the plugin

## WordPress Integration

The plugin uses the following integration points with WordPress:

1. **Template Files**: PHP templates in the `templates/` directory render React components in WordPress pages
2. **Enqueuing Assets**: The plugin properly registers and enqueues CSS and JavaScript
3. **Data Integration**: PHP data is passed to React using `wp_localize_script()`
4. **Gravity Forms**: The contact page includes JavaScript to properly render Gravity Forms

### Creating New Templates

1. Create a PHP template file in the `templates/` directory
2. Create corresponding React components in `src/components/`
3. Register the template in `optimole-templates.php`
4. Update the React router in `App.tsx`

## Optimole CDN Integration

The application integrates with Optimole CDN for image optimization and delivery. The HomePage component uses the following URL format for image transformation:

```javascript
// Example URL construction in HomePage.tsx
const imageUrl = `https://${cdn}.i.optimole.com/${hash}/w:${width}/h:${height}/q:${quality}/https://optimole.com/uploads/2020/07/fp.jpeg`;
```

This allows for real-time transformations including:
- Width and height adjustments
- Quality settings
- Format selection
- Smart cropping

## Maintenance Guide

### Updating Content

1. **Pricing Plans**: Update the data in `src/data/pricingData.ts`
2. **Feature Lists**: Modify the features array in `src/data/pricingData.ts`
3. **Testimonials**: Edit the testimonials array in `src/data/pricingData.ts`
4. **FAQ Items**: Update the faqItems array in `src/data/pricingData.ts`

### Adding New Components

1. Create a TypeScript interface in `src/types/pricing.ts`
2. Create the component in the appropriate directory
3. Use React.memo for components that don't need frequent re-renders
4. Use useCallback for event handlers

### Performance Considerations

- Components use React.memo to prevent unnecessary re-renders
- Event handlers use useCallback to maintain referential equality
- Code-splitting is implemented with React.lazy and Suspense
- Images should include width and height attributes to prevent layout shifts
- The Optimole CDN automatically serves optimized images in WebP or AVIF formats to supported browsers

### Security Best Practices

- All user inputs are sanitized in WordPress
- Dynamic content is properly escaped
- Authentication is handled through WordPress nonces
- Scripts and styles are properly enqueued

## Building and Deploying

### Development Build

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### WordPress Plugin Package

```bash
npm run package
```

## GitHub Pages Deployment

The project is configured for automatic deployment to GitHub Pages. When changes are pushed to the main branch, the application is built and deployed to GitHub Pages.

Access the live demo at: https://ineagu.github.io/ai-experiments/

## License

This project is licensed under the GPL v2.0 or later - see the LICENSE file for details.

## Support

For support, please contact the Optimole development team at support@optimole.com. 