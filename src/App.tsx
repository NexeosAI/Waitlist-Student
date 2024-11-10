import React from 'react';
import { WaitlistForm } from './components/WaitlistForm';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Toaster position="top-center" />
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            StudentlyAI
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join the waitlist for the next generation of student success
          </p>
          <div className="flex justify-center">
            <WaitlistForm />
          </div>
        </div>

        <footer className="mt-16 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://twitter.com/StudentlyAI" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500">
              <Twitter size={24} />
            </a>
            <a href="https://www.facebook.com/studentlyAI" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500">
              <Facebook size={24} />
            </a>
            <a href="https://www.linkedin.com/company/studentlyai" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500">
              <Linkedin size={24} />
            </a>
          </div>
          <p className="text-gray-600">© 2024 StudentlyAI. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
