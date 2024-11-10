import React from 'react';
import { CheckCircle, Twitter, Facebook, Linkedin } from 'lucide-react';

export default function SuccessView() {
  const shareText = encodeURIComponent("I just joined the waitlist for StudentlyAI - the future of student productivity! 🚀");
  const shareUrl = encodeURIComponent("https://studentlyai.com");

  return (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <CheckCircle className="h-16 w-16 text-green-500 animate-bounce" />
      </div>
      
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-gray-900">You're in!</h2>
        <p className="text-lg text-gray-600">
          Thank you for joining our waitlist. We'll notify you as soon as StudentlyAI launches!
        </p>
      </div>

      <div className="pt-6">
        <p className="text-sm text-gray-600 mb-3">Share with your friends:</p>
        <div className="flex justify-center space-x-4">
          <a
            href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}