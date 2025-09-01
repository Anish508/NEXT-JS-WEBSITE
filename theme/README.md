# Bodhify.tech - Professional Business Website

A modern, professional business website built with Next.js 14, featuring smooth GSAP animations, 3D interactive elements with Three.js, and comprehensive functionality including authentication, contact forms, and dynamic services.

## 🚀 Features

### Core Functionality

- **Modern UI/UX**: Professional design with Tailwind CSS and custom animations
- **GSAP Animations**: Smooth scroll animations and interactive elements
- **3D Elements**: Interactive 3D components using Three.js and React Three Fiber
- **Responsive Design**: Mobile-first approach with perfect responsiveness
- **SEO Optimized**: Built-in SEO with next-seo and optimized metadata

### Pages & Navigation

- **Home**: Hero section with animated intro, services overview, CTA buttons
- **About**: Company mission, values, team section with GSAP fade-in animations
- **Services**: Dynamic services with individual pages using Next.js dynamic routing
- **Contact**: Form with validation, MongoDB storage, and email notifications
- **Authentication**: Login & Signup with MongoDB integration

### Technical Features

- **Dynamic Services**: Services managed in `data/services.js` for easy updates
- **Database Integration**: MongoDB with Mongoose for data persistence
- **Email Notifications**: Contact form emails via Resend/Nodemailer
- **Authentication**: Secure user authentication with JWT tokens
- **Form Validation**: Comprehensive form validation with Zod and React Hook Form
- **Performance**: Optimized images, lazy loading, and performance best practices

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: GSAP with ScrollTrigger
- **3D Graphics**: Three.js with React Three Fiber and Drei
- **Database**: MongoDB with Mongoose
- **Authentication**: Custom JWT-based auth system
- **Email**: Resend for email notifications
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd theme
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```env
   # Database
   MONGODB_URI=mongodb://localhost:27017/bodhify-tech
   # or for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bodhify-tech

   # JWT Secret
   JWT_SECRET=your-super-secret-jwt-key-here

   # Email Service (Resend)
   RESEND_API_KEY=re_your_resend_api_key_here

   # NextAuth
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-nextauth-secret-here

   # App Configuration
   NODE_ENV=development
   ```

4. **Set up MongoDB**

   - Install MongoDB locally or use MongoDB Atlas
   - Update the `MONGODB_URI` in your `.env.local` file

5. **Set up email service**

   - Sign up for Resend at [resend.com](https://resend.com)
   - Get your API key and add it to `.env.local`

6. **Run the development server**

   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗂️ Project Structure

```
theme/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── api/               # API routes
│   │   │   ├── auth/          # Authentication endpoints
│   │   │   └── contact/       # Contact form endpoint
│   │   ├── contact/           # Contact page
│   │   ├── login/             # Login page
│   │   ├── services/          # Services pages
│   │   │   └── [id]/          # Dynamic service pages
│   │   ├── signup/            # Signup page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable components
│   │   ├── layout/            # Layout components
│   │   ├── sections/          # Page sections
│   │   └── ui/                # UI components
│   ├── data/                  # Data files
│   │   └── services.js        # Services configuration
│   ├── lib/                   # Utility libraries
│   │   ├── mongodb.js         # Database connection
│   │   ├── email.js           # Email utilities
│   │   └── utils.js           # General utilities
│   └── models/                # Database models
│       ├── Contact.js         # Contact model
│       └── User.js            # User model
├── public/                    # Static assets
├── package.json               # Dependencies
├── next.config.ts             # Next.js configuration
├── tailwind.config.js         # Tailwind configuration
└── tsconfig.json              # TypeScript configuration
```

## 🎨 Customization

### Adding New Services

1. Open `src/data/services.js`
2. Add your service to the `services` array
3. The service will automatically appear on the services page and get its own dynamic route

### Styling

- Global styles: `src/app/globals.css`
- Component styles: Use Tailwind CSS classes
- Custom animations: Add to the CSS file or use GSAP

### Content Updates

- Home page: Edit `src/app/page.tsx`
- About page: Edit `src/app/about/page.tsx`
- Services: Edit `src/data/services.js`
- Contact info: Edit `src/components/layout/Footer.jsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

```env
MONGODB_URI=your-production-mongodb-uri
JWT_SECRET=your-production-jwt-secret
RESEND_API_KEY=your-production-resend-key
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=your-production-nextauth-secret
NODE_ENV=production
```

## 📱 Features Overview

### Home Page

- Animated hero section with 3D elements
- Services overview with hover effects
- Call-to-action sections
- Smooth scroll animations

### About Page

- Company mission and values
- Team section with animations
- Interactive elements

### Services

- Dynamic service pages
- Individual service details
- Pricing and feature lists
- Related services suggestions

### Contact

- Form validation
- Database storage
- Email notifications
- Business information

### Authentication

- Secure login/signup
- JWT token management
- Password hashing
- User management

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Component-based architecture

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support, email admin@bodhify.tech or create an issue in the repository.

---

Built with ❤️ by the Bodhify.tech team
