export default function Hero({ nom = "Ma Garderie", description, horaires }) {
  return (
    <section id="accueil" className="hero">
      <div className="hero-text">
        <h1>Bienvenue à {nom}</h1>
        <p>{description}</p>
        {horaires && <p className="horaires">🕗 {horaires}</p>}
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="hero-img" src="/hero.svg" alt="Enfants qui jouent" />
    </section>
  );
}