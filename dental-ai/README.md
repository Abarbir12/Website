# doe - Dental Intelligence Platform

A sophisticated, modern landing page for doe - an AI-powered intelligence platform that transforms dental organizations through autonomous purchasing, instant insights, and seamless integrations.

## 🚀 Tech Stack

- **Framework**: Next.js 15.3.3 (App Router) with Turbopack
- **Styling**: Tailwind CSS with custom glassmorphism effects
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Language**: TypeScript
- **Theme**: Dark/Light mode support

## ✨ Features

### Core Features
- **Modern Design**: Premium glassmorphism effects with hyper-realistic glass reflections
- **Mobile-First**: Fully optimized for iPhone and mobile devices
- **Responsive**: Adaptive layouts for all screen sizes
- **Performance**: Instant theme switching, optimized animations
- **Accessibility**: WCAG compliant with proper contrast ratios

### UI Components
- **Hero Section**: Dynamic metrics carousel with appropriate icons
- **Role Selector**: Interactive role-based content with live AI conversations
- **Integrations**: Visual flow diagram showing system connections
- **Contact Form**: Multi-field form with DSO-specific questions

### Mobile Optimizations
- Viewport meta tags for proper scaling
- Safe area insets for iPhone X+
- Touch-friendly button sizes (44px minimum)
- Horizontal scrolling for role selector
- No-zoom inputs (16px font size)
- Optimized spacing and typography

## 🎨 Design System

### Colors
- **Primary Blue**: #385399
- **Secondary Blue**: #29B6F6
- **Healthcare Green**: #93E9BE
- **Gradient Text**: Animated blue-to-purple gradients

### Effects
- Glass morphism with 17px blur
- Hyper-realistic glass reflections
- Premium button shadows and gradients
- Smooth scroll animations
- Floating motion effects

## 🏃‍♂️ Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
dental-ai/
├── src/
│   ├── app/
│   │   ├── globals.css        # Global styles, animations, utilities
│   │   ├── layout.tsx         # Root layout with theme support
│   │   └── page.tsx           # Homepage with all sections
│   ├── components/
│   │   ├── ui/               # shadcn/ui components
│   │   │   ├── theme-toggle.tsx
│   │   │   └── ...
│   │   ├── navbar.tsx        # Responsive navigation
│   │   ├── hero.tsx          # Hero with dynamic metrics
│   │   ├── role-selector.tsx # Interactive role tabs
│   │   ├── integrations.tsx  # Integration flow diagram
│   │   ├── final-cta.tsx     # Contact form
│   │   └── glass.tsx         # Glassmorphism utilities
│   └── lib/
│       └── utils.ts          # Utility functions
├── public/
│   ├── doe-logo.svg          # Company logo
│   ├── ycombinator-ar21.svg  # YC badge
│   └── ...
└── types/                    # TypeScript definitions
```

## 🛠️ Recent Updates

### Mobile Optimization (Latest)
- Comprehensive iPhone optimization
- Responsive breakpoints for all components
- Touch-friendly interactions
- Horizontal scrolling for better mobile UX

### UI Improvements
- Fixed glassmorphism opacity in light mode
- Dynamic icons matching metrics (up/down trends)
- Black dividers in light mode for better contrast
- Premium CTA button styling
- Instant theme switching without delays

### New Features
- DSO information fields in contact form
- Live AI conversation animations
- Seamless integration visualization
- Role-based content with smooth transitions

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: > 1024px (lg)
- **Wide**: > 1280px (xl)

## 🚀 Deployment

This project is optimized for Vercel deployment:

```bash
npm run build
npm run start
```

### Environment Variables
No environment variables required for basic deployment.

## 🔧 Development

### Code Style
- Component-based architecture
- TypeScript for type safety
- Tailwind for styling
- Framer Motion for animations

### Performance
- Optimized images and assets
- Lazy loading for components
- Efficient re-renders with React
- CSS animations where possible

## 📝 License

This project is private and proprietary to doe Intelligence Platform.

---

Built with ❤️ by the doe team