# Techily Fly Portfolio Website

A modern, premium portfolio website for AbdurRahman Ibn Ghufran, founder of Techily Fly, specializing in educational video editing services.

## 🚀 Features

### ✨ Interactive Elements

-   **Animated Hero Section** with floating elements and particle effects
-   **Dynamic Counters** for statistics and achievements
-   **Smooth Scrolling** navigation with active link highlighting
-   **Video Portfolio** with playable previews
-   **Testimonials Carousel** with auto-play functionality
-   **Interactive Service Cards** with hover effects
-   **Contact Forms** with validation and submission

### 🎨 Design Features

-   **Modern UI/UX** with purple brand theme
-   **Fully Responsive** design for all devices
-   **Micro-animations** and smooth transitions
-   **Gradient backgrounds** and glassmorphism effects
-   **Professional Typography** with Poppins and Inter fonts
-   **Accessible Design** with WCAG compliance

### 📱 Responsive Features

-   **Mobile-First** approach
-   **Hamburger Menu** for mobile navigation
-   **Touch-Friendly** interactions
-   **Optimized Images** for fast loading
-   **Back to Top Button** appears after 25% scroll

## 🛠️ Technologies Used

-   **HTML5** Semantic markup
-   **CSS3** Modern features with CSS Variables
-   **Vanilla JavaScript** (no jQuery required)
-   **Font Awesome** Icons
-   **Google Fonts** Typography
-   **Intersection Observer** API for scroll animations

## 📁 Project Structure

```
techily-fly-portfolio/
├── index.html          # Main HTML file
├── styles.css          # Complete CSS styles
├── script.js           # Interactive JavaScript
├── README.md           # This file
├── todo.md            # Development checklist
└── assets/            # Static assets (if needed)
```

## 🚀 Getting Started

### Prerequisites

-   Modern web browser (Chrome, Firefox, Safari, Edge)
-   Local web server (optional but recommended)

### Installation

1.  **Clone or Download** the files:
    
    ```bash
    # If using git
    git clone <repository-url>
    cd techily-fly-portfolio
    ```
    
2.  **Start Local Server** (recommended):
    
    ```bash
    # Using Python 3
    python -m http.server 8000
    
    # Using Node.js (if you have http-server installed)
    npx http-server
    
    # Using Live Server in VS Code
    # Install Live Server extension and right-click index.html -> "Open with Live Server"
    ```
    
3.  **Open in Browser**:
    -   Navigate to `http://localhost:8000` (or your server port)
    -   Or directly open `index.html` in your browser

## 🔧 Customization

### Brand Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #8A2BE2;    /* Purple brand color */
    --secondary-color: #000000;   /* Black text color */
    --white-color: #FFFFFF;      /* White background */
    /* ... other colors */
}
```

### Contact Information

Update contact details in `index.html`:

```html
<!-- WhatsApp/Mobile Number -->
<a href="https://wa.me/918825164657">+91 88251 64657</a>

<!-- Email -->
<a href="mailto:ibnghufran.com@gmail.com">ibnghufran.com@gmail.com</a>
```

### Portfolio Items

Replace placeholder images and video URLs in the portfolio section:

```html
<div class="portfolio-item">
    <div class="portfolio-video">
        <div class="video-thumbnail">
            <img src="your-image.jpg" alt="Project">
            <!-- Add your video URLs in script.js -->
        </div>
    </div>
</div>
```

### Social Links

Update social media links in the footer:

```html
<a href="https://www.youtube.com/@techilyfly" target="_blank">
    <i class="fab fa-youtube"></i>
</a>
```

## 📱 GitHub Deployment

1.  **Create Repository** on GitHub
2.  **Upload Files** to the repository
3.  **Enable GitHub Pages**:
    -   Go to Settings → Pages
    -   Select source: "Deploy from a branch"
    -   Choose branch: `main` and folder: `/root`
    -   Save and wait for deployment
4.  **Access** your site at `https://username.github.io/repository-name`

## 🎯 Performance Optimization

### Built-in Optimizations

-   **Lazy Loading** for images
-   **Throttled Scroll Events** for better performance
-   **CSS Transforms** instead of position animations
-   **Optimized Animations** using requestAnimationFrame
-   **Minimal Dependencies** (no heavy frameworks)

### Additional Recommendations

1.  **Image Optimization**:
    -   Use WebP format where supported
    -   Compress images before upload
    -   Add proper alt tags for accessibility
2.  **SEO Optimization**:
    -   Update meta tags for your specific content
    -   Add structured data for rich snippets
    -   Submit sitemap to search engines
3.  **Analytics**:
    -   Add Google Analytics or similar tracking
    -   Track form submissions and user interactions

## 🔧 Browser Compatibility

-   ✅ Chrome 60+
-   ✅ Firefox 55+
-   ✅ Safari 12+
-   ✅ Edge 79+
-   ✅ Mobile Safari (iOS 12+)
-   ✅ Chrome Mobile (Android 8+)

## ♿ Accessibility Features

-   **Semantic HTML5** structure
-   **ARIA Labels** on interactive elements
-   **Keyboard Navigation** support
-   **Focus Indicators** for better usability
-   **Screen Reader** friendly
-   **High Contrast** color combinations
-   **Responsive Text** scaling

## 🎨 Design System

### Colors

-   **Primary**: Purple (#8A2BE2)
-   **Secondary**: Black (#000000)
-   **Background**: White (#FFFFFF)
-   **Text**: Dark Gray (#333333)

### Typography

-   **Headings**: Poppins (bold, 800)
-   **Body**: Inter (400, 500, 600)
-   **UI Elements**: Inter (medium)

### Spacing

-   **Container**: 1200px max-width
-   **Gutters**: 20px (mobile), 40px (desktop)
-   **Sections**: 6rem vertical padding

## 📞 Support

For questions or support:

-   **WhatsApp**: +91 88251 64657
-   **Email**: [ibnghufran.com@gmail.com](mailto:ibnghufran.com@gmail.com)
-   **Academy**: [https://creator.tagmango.app/techilyfly](https://creator.tagmango.app/techilyfly)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

* * *

**Techily Fly by AbdurRahman Ibn Ghufran** _Smart visuals for meaningful education_