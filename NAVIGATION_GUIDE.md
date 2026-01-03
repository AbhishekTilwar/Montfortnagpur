# Enhanced Navigation & Social Media Widget Usage Guide

## Overview
The Montfort School website now features an enhanced navigation bar with social media widgets and smooth animations, matching the design shown in your reference image.

## Components

### 1. Enhanced Navbar (`src/components/Navbar.js`)
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Smooth Animations**: Staggered entrance animations and hover effects
- **Dropdown Menus**: Animated dropdowns for "About Us" and "Academics"
- **Social Media Integration**: Built-in social media icons in the navigation
- **Scroll Effects**: Changes appearance when scrolling

### 2. Social Media Widget (`src/components/SocialMediaWidget.js`)
- **Flexible Positioning**: Can be placed on left, right, or bottom corners
- **Vertical/Horizontal Layout**: Adaptable to different screen orientations
- **Animated Icons**: Hover effects with scale and rotation animations
- **Branding Section**: Includes "ACES Powered By Multimedia" branding
- **Accessibility**: Proper ARIA labels and semantic markup

### 3. Page Template (`src/components/PageTemplate.js`)
- **Reusable Layout**: Standard template for all pages
- **Consistent Navigation**: Ensures uniform navigation across pages
- **Responsive Design**: Mobile-friendly layout
- **SEO Optimized**: Proper heading hierarchy and structure

## Usage Examples

### Basic Usage in Landing Page
```jsx
import React from 'react';
import Navbar from './components/Navbar';
import SocialMediaWidget from './components/SocialMediaWidget';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      {/* Your page content */}
      <SocialMediaWidget position="right" vertical={true} />
    </div>
  );
};
```

### Using Page Template for Other Pages
```jsx
import React from 'react';
import PageTemplate from './components/PageTemplate';

const AboutPage = () => {
  return (
    <PageTemplate title="About Us">
      <div>
        <h2>Our History</h2>
        <p>Content about Montfort School...</p>
      </div>
    </PageTemplate>
  );
};
```

### Social Media Widget Options
```jsx
// Right side, vertical layout (default)
<SocialMediaWidget position="right" vertical={true} />

// Left side, vertical layout
<SocialMediaWidget position="left" vertical={true} />

// Bottom right, horizontal layout
<SocialMediaWidget position="bottom-right" vertical={false} />

// With hover labels
<SocialMediaWidget position="right" vertical={true} showLabel={true} />
```

## Features

### Navigation Bar Features
- **Animated Logo**: Fade-in animation on load
- **Staggered Menu Items**: Sequential animation for navigation links
- **Interactive Dropdowns**: Smooth open/close animations with scale effects
- **Hover States**: Scale and color transitions on all interactive elements
- **Mobile Menu**: Slide-in mobile menu with social media integration
- **Scroll Detection**: Changes background transparency and text color on scroll

### Social Media Widget Features
- **6 Social Platforms**: WhatsApp, Facebook, YouTube, Instagram, Twitter, Fees
- **Spring Animations**: Natural-feeling hover effects using spring physics
- **Gradient Effects**: Instagram icon with gradient background
- **Branding Animation**: Animated "ACES" logo with gradient text
- **Responsive Positioning**: Adapts to different screen sizes
- **Accessibility**: Screen reader friendly with proper labels

### Animation Details
- **Entrance Animations**: Staggered fade-in from top/sides
- **Hover Effects**: Scale (1.1x) and rotation (5deg) on hover
- **Tap Effects**: Scale down (0.9x) on click/tap
- **Dropdown Animations**: Scale and slide effects with smooth transitions
- **Mobile Animations**: Slide-in from right for mobile menu

## Customization

### Colors
The theme uses Montfort School colors:
- **Primary**: Navy Blue (#1a2e5a)
- **Secondary**: Gold/Sand (#c5a059)
- **Accent**: Clean White/Soft Gray

### Social Links
Update social media URLs in `Navbar.js` and `SocialMediaWidget.js`:
```javascript
const socialLinks = [
  { icon: MessageCircle, href: 'https://wa.me/YOUR_NUMBER', label: 'WhatsApp', color: 'bg-green-500 hover:bg-green-600' },
  { icon: Facebook, href: 'https://facebook.com/YOUR_PAGE', label: 'Facebook', color: 'bg-blue-600 hover:bg-blue-700' },
  // ... other social links
];
```

### Navigation Links
Update navigation structure in `Navbar.js`:
```javascript
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', hasDropdown: true },
  // ... other navigation items
];
```

## Browser Compatibility
- **Modern Browsers**: Full support for all animations and features
- **Mobile Devices**: Optimized for touch interactions
- **Reduced Motion**: Respects user's motion preferences
- **Accessibility**: WCAG compliant with proper ARIA labels

## Performance
- **Lazy Loading**: Images load when needed
- **Optimized Animations**: Hardware-accelerated CSS transforms
- **Bundle Size**: Minimal impact on page load time
- **Smooth Scrolling**: Optimized scroll performance

This enhanced navigation system provides a professional, modern user experience that matches your reference design while maintaining excellent performance and accessibility.
