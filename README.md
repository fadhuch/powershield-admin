# Power Shield Services

A professional website for Power Shield Services - your trusted partner for comprehensive protection and security solutions.

## About

Power Shield Services specializes in providing top-tier security and protection services including:
- Security systems and monitoring
- Access control solutions  
- 24/7 surveillance
- Personal and executive protection
- Cyber security services
- Security consultation and assessment

## Website Features

- **Home Page**: Professional hero section showcasing Power Shield Services
- **Services Gallery**: Visual showcase of security and protection services
- **Contact**: Professional contact form and business information
- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI**: Professional, security-focused design

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd powershield-admin
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   └── Layout.jsx      # Navigation and footer
├── pages/
│   ├── Home.jsx        # Home page
│   ├── Contact.jsx     # Contact page
│   └── Gallery.jsx     # Gallery page
├── Router.jsx          # App routing
└── main.jsx           # App entry point
```

## Customization

You can easily customize:
- **Content**: Edit the JSX files in the `pages/` folder
- **Styling**: Modify the CSS files next to each component
- **Images**: Replace placeholder images in Gallery.jsx with your own
- **Contact Info**: Update contact details in Contact.jsx

## Deployment

Build the project for production:

```bash
npm run build
```

The build files will be in the `dist/` folder, ready for deployment to any static hosting service.
