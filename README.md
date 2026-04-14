# Ali Mubarak's Portfolio

A modern, responsive portfolio website showcasing my work as a software engineer. Built with Next.js, TypeScript, Tailwind CSS, and Prisma, featuring smooth animations, accessibility, and a contact form with database integration.

## 🚀 Features

- **Responsive Design**: Optimized for all devices with mobile-first approach
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation
- **Contact Form**: Integrated with Prisma and PostgreSQL for message storage
- **SEO Optimized**: Meta tags, Open Graph, and Twitter cards
- **Performance**: Fast loading with Next.js optimizations
- **Dark Theme**: Modern dark color scheme with gold accents

## 🛠️ Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: PostgreSQL with Prisma ORM
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Validation**: Zod
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── api/contact/          # Contact form API endpoint
│   ├── components/           # Reusable UI components
│   │   ├── About.tsx        # About section
│   │   ├── Contact.tsx      # Contact form
│   │   ├── Educations.tsx   # Education section
│   │   ├── Experience.tsx   # Work experience
│   │   ├── Footer.tsx       # Site footer
│   │   ├── Hero.tsx         # Hero section with animations
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Projects.tsx     # Projects showcase
│   │   ├── Skills.tsx       # Skills section
│   │   └── SkipLink.tsx     # Accessibility skip link
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── lib/
│   ├── animations.ts        # Animation variants
│   └── prisma.ts            # Prisma client setup
├── prisma/
│   └── schema.prisma        # Database schema
├── public/                  # Static assets
└── store/
    └── contactStore.ts      # Zustand store for contact form
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up the database**

   Create a PostgreSQL database and update your connection string in `.env.local`:

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/portfolio"
   ```

4. **Run Prisma migrations**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Personal Information

Update the following files with your information:

- `app/layout.tsx` - Metadata, title, description
- `app/components/Hero.tsx` - Name, greeting
- `app/components/About.tsx` - Bio, values
- `app/components/Experience.tsx` - Work experience
- `app/components/Projects.tsx` - Projects data
- `app/components/Skills.tsx` - Skills list
- `app/components/Educations.tsx` - Education history

### Styling

- Colors are defined in `app/globals.css` using CSS custom properties
- Tailwind CSS classes are used throughout components
- Animations are configured in `lib/animations.ts`

## 🔧 Database Schema

The application uses a simple schema to store contact form submissions:

```prisma
model ContactMessage {
  id        Int      @id @default(autoincrement())
  name      String
  email     String
  subject   String
  message   String
  createdAt DateTime @default(now())
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your `DATABASE_URL` environment variable
4. Deploy!

### Other Platforms

The app can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

This is a personal portfolio project, but feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

Ali Mubarak - [LinkedIn](https://linkedin.com/in/ali32) - alirazamehar732@gmail.com

Project Link: [https://github.com/alirazamehar732-hub/portfolio](https://github.com/alirazamehar732-hub/portfolio)
