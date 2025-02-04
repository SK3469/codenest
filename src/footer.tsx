"use client";

export const Footer = () => {
  return (
    <footer className=" text-black py-6">
      <div className="container mx-auto text-center space-y-4">
        
        {/* Brand Name */}
        <h2 className="text-2xl font-bold">CodeNest</h2>
        <p className="text-sm text-gray-400">
          by <a href="https://codewithsunil.com" className="underline">codewithsunil.com</a>
        </p>

        {/* Social Media & Platforms */}
        <div className="flex flex-wrap justify-center gap-4 text-gray-400 text-sm">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            Twitter
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            LinkedIn
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            Instagram
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            YouTube
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            GitHub
          </a>
          <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            Stack Overflow
          </a>
          <a href="https://codepen.io" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            CodePen
          </a>
          <a href="https://replit.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            Replit
          </a>
        </div>

        {/* Copyright Notice */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} CodeNest. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
