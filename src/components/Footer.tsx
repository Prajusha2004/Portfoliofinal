import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-slate-900 border-t border-slate-800 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-slate-400 flex items-center justify-center gap-2">
          Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Prajusha Dhar
        </p>
        <p className="text-slate-500 text-sm mt-2">
          {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
