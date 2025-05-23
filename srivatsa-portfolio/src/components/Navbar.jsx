import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 backdrop-blur-md bg-black/30 border-b border-white/10 shadow-md">
      <Link to="/" className="text-lg md:text-xl font-semibold text-white">Srivatsa.dev</Link>
      <div className="space-x-6 text-sm md:text-base font-medium">
        <Link to="/about" className="text-white hover:text-teal-400 transition">About</Link>
        <Link to="/projects" className="text-white hover:text-teal-400 transition">Projects</Link>
        <Link to="/certifications" className="text-white hover:text-teal-400 transition">Certifications</Link>
        <Link to="/contact" className="text-white hover:text-teal-400 transition">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
