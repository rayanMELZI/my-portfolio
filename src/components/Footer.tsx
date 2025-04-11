import React from "react";

function Footer() {
  return (
    <footer className="py-8 bg-zinc-900 text-zinc-400 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>© {new Date().getFullYear()} Rayane MELZI. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
