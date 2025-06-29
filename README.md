# MD Umaiz.N - Portfolio Website

A modern, responsive personal portfolio website for MD Umaiz.N, a Full Stack Web Developer. Built with React.js and featuring a clean, minimal design with dark/light mode toggle.

## 🚀 Features

- **Modern Design**: Clean, minimal interface with smooth animations
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Fast loading times and smooth interactions
- **Interactive Elements**: Hover effects, animations, and smooth transitions

## 📱 Pages

1. **Home**: Hero section with introduction and quick overview
2. **About**: Journey timeline and detailed skills section
3. **Projects**: Project showcase with filtering by category
4. **Contact**: Contact form with social media links
5. **Resume**: Downloadable resume with detailed experience

## 🛠️ Tech Stack

### Frontend
- **React.js** - Main framework
- **CSS3** - Styling with CSS variables for theming
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Icon library
- **React Router** - Client-side routing

### Technologies Mentioned
- **Node.js** - Backend runtime
- **Express.js** - Web framework
- **EJS** - Template engine
- **Python** - Programming language
- **JavaScript** - Programming language
- **jQuery** - JavaScript library
- **PostgreSQL** - Database
- **Bootstrap** - CSS framework
- **Ant Design** - UI component library
- **Render** - Deployment platform
- **Git & GitHub** - Version control

## 🎨 Design Features

- **CSS Variables**: Dynamic theming system
- **Gradient Backgrounds**: Modern gradient effects
- **Card-based Layout**: Clean card components
- **Smooth Animations**: Framer Motion powered animations
- **Custom Scrollbar**: Styled scrollbar for better UX
- **Mobile-First**: Responsive design approach

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd md-umaiz-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component
│   └── Navbar.css
├── pages/
│   ├── Home.js            # Home page
│   ├── Home.css
│   ├── About.js           # About page
│   ├── About.css
│   ├── Projects.js        # Projects page
│   ├── Projects.css
│   ├── Contact.js         # Contact page
│   ├── Contact.css
│   ├── Resume.js          # Resume page
│   └── Resume.css
├── App.js                 # Main app component
├── App.css               # App styles
├── index.js              # Entry point
└── index.css             # Global styles
```

## 🎯 Key Components

### Navigation
- Fixed navbar with smooth scrolling
- Mobile-responsive hamburger menu
- Theme toggle functionality
- Active page highlighting

### Home Page
- Hero section with animated content
- Introduction with statistics
- Skills overview with interactive tags
- Social media links

### About Page
- Professional journey timeline
- Skills with progress bars
- Personal values section
- Animated content reveals

### Projects Page
- Project filtering by category
- Featured projects section
- Project cards with hover effects
- GitHub and demo links

### Contact Page
- Functional contact form
- Contact information display
- Social media integration
- Form validation and feedback

### Resume Page
- Downloadable resume functionality
- Experience timeline
- Education section
- Skills categorization

## 🌙 Theme System

The website uses CSS variables for dynamic theming:

```css
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --text-primary: #1a1a1a;
  --accent-color: #007bff;
  /* ... more variables */
}

[data-theme="dark"] {
  --bg-primary: #0a0a0a;
  --bg-secondary: #1a1a1a;
  --text-primary: #ffffff;
  --accent-color: #4dabf7;
  /* ... dark theme variables */
}
```

## 📱 Responsive Design

- **Mobile**: Optimized for phones (320px+)
- **Tablet**: Responsive layout for tablets (768px+)
- **Desktop**: Full-featured desktop experience (1024px+)

## 🚀 Performance Features

- **Lazy Loading**: Components load as needed
- **Optimized Images**: Placeholder images for faster loading
- **Smooth Animations**: Hardware-accelerated animations
- **Minimal Dependencies**: Lightweight package selection

## 🔧 Customization

### Colors
Update the CSS variables in `src/index.css` to customize the color scheme.

### Content
Modify the content in each page component to personalize the portfolio.

### Styling
Adjust the CSS files to match your preferred design aesthetic.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

**MD Umaiz.N**
- Full Stack Web Developer
- Specialized in React.js, Node.js, and modern web technologies
- Passionate about creating exceptional user experiences

---

Built with ❤️ using React.js 