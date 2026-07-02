function Footer() {
  return (
    <footer className="bg-slate-900 text-center text-gray-400 py-8 border-t border-slate-700">
      <p>
        © {new Date().getFullYear()} Vankayalapati Balaji. All Rights Reserved.
      </p>

      <p className="mt-2 text-sm">
        Built with React, Tailwind CSS & Framer Motion
      </p>
    </footer>
  );
}

export default Footer;