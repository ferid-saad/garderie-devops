export default function Navbar({ nom = "Ma Garderie" }) {
  return (
    <header className="navbar">
      <div className="logo">
        <span className="logo-icon">🧸</span>
        <span className="logo-name">{nom}</span>
      </div>
      <nav>
        <a href="#accueil">Accueil</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}