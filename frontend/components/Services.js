export default function Services({ services = [] }) {
  return (
    <section id="services" className="services">
      <h2>Nos services</h2>
      {services.length === 0 ? (
        <p>Services indisponibles pour le moment.</p>
      ) : (
        <div className="cards">
          {services.map((s) => (
            <article key={s.id} className="card">
              <h3>{s.titre}</h3>
              <p>{s.description}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}