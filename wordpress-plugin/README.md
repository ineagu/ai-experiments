# Optimole Templates WordPress Plugin

This WordPress plugin integrates Optimole React components as custom page templates, providing modern, responsive UI for Optimole's service and features.

## Installation

1. Upload the `optimole-plugin.zip` file through the WordPress admin interface:
   - Navigate to Plugins → Add New → Upload Plugin
   - Select the `optimole-plugin.zip` file
   - Click "Install Now" and then "Activate"
2. Alternatively, extract the plugin to the `/wp-content/plugins/` directory and activate through the WordPress admin

## Features

- Adds page templates for all Optimole services:
  - Homepage with real-time image optimization demonstration
  - Pricing plans with interactive tier selection
  - About page showcasing Optimole's history and team
  - WordPress plugin integration page
  - Digital Asset Management (DAM) page
  - Image compression comparison tool
  - Contact page
- Optimole CDN integration with real-time image transformations
- Responsive design compatible with most WordPress themes

## Usage

### Page Templates

1. Create a new page or edit an existing one
2. In the Page Attributes meta box, select one of the following templates:
   - Optimole Home
   - Optimole Pricing
   - Optimole About
   - Optimole WordPress Plugin
   - Optimole DAM
   - Optimole Compare
   - Optimole Contact
3. Publish or update the page

### Shortcodes

You can also use shortcodes to embed components anywhere:

- `[optimole_home]` - Displays the main homepage with interactive demos
- `[optimole_pricing]` - Displays the pricing page with tier selection
- `[optimole_wordpress]` - Displays WordPress plugin integration information
- `[optimole_dam]` - Displays Digital Asset Management features
- `[optimole_compare]` - Displays the image compression comparison tool
- `[optimole_about]` - Displays the about page
- `[optimole_contact]` - Displays the contact form

## Development

To modify the plugin or develop new features:

1. Clone the repository
2. Run `npm install` to install dependencies
3. Use `npm run dev` to start the development server
4. Use `npm run build` followed by `npm run package` to create a new release

The packaging script ensures all components in the WordPress plugin use their latest versions.