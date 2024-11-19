# Student AI Waitlist

A modern waitlist landing page for Student AI - an AI-powered learning platform that helps students excel in their academic journey. Built with Vite, React, TypeScript, and shadcn/ui components.



## 🚀 Features

- **Modern Tech Stack**: Built with Vite, React, TypeScript, and shadcn/ui
- **Responsive Design**: Fully responsive layout that works on all devices
- **Supabase Integration**: Backend powered by Supabase for reliable data storage
- **Form Validation**: Built-in validation for email and required fields
- **Error Handling**: Comprehensive error handling with user feedback
- **Confirmation Page**: Beautiful success page with animation
- **Social Integration**: Connected social media links in the footer

## 🛠️ Technologies Used

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.com/)
- [React Router](https://reactrouter.com/)
- [Lucide Icons](https://lucide.dev/)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/student-ai-waitlist.git
cd student-ai-waitlist
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm run dev
```

## 🗄️ Supabase Setup

Create a table named `waitlist` in your Supabase database with the following schema:

```sql
create table waitlist (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  full_name text not null,
  email text not null,
  university text not null
);

-- Enable Row Level Security (RLS)
alter table waitlist enable row level security;

-- Create policy to allow inserts
create policy "Enable inserts for all users" on waitlist for insert with check (true);
```

## 📱 Features Showcase

The application showcases upcoming AI tools including:
- AI Chatbot for instant academic assistance
- AI Search for intelligent research
- AI Audio Notes for voice-to-text conversion
- Advanced AI Editor for writing improvement
- AI Time Manager for study optimization

## 🎯 Components

- **WaitlistForm**: Main landing page with form
- **ConfirmationPage**: Success page after form submission
- **FeatureCard**: Reusable component for displaying AI tools
- **Header**: Navigation and branding
- **Footer**: Social links and copyright

## 📄 Environment Variables

Required environment variables:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🚀 Deployment

1. Build the application:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting provider of choice (Vercel, Netlify, etc.)

## 🧪 Running Tests

```bash
npm run test
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Your Name - [@nexeosAI](https://twitter.com/nexeosAI)  


## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Supabase](https://supabase.com/) for the backend infrastructure
- [Lucide](https://lucide.dev/) for the beautiful icons

---

Made with ❤️ by [NEXEOS AI](https://github.com/nexeosAI
