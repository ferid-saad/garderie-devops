import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";

export const dynamic = "force-dynamic";

const API_URL = process.env.BACKEND_URL || "http://localhost:5000";

async function getData(path) {
  try {
    const res = await fetch(`${API_URL}${path}`, { cache: "no-store" });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export default async function Home() {
  const [garderie, services] = await Promise.all([
    getData("/api/garderie"),
    getData("/api/services"),
  ]);

  return (
    <>
      <Navbar nom={garderie?.nom} />
      <main>
        <Hero
          nom={garderie?.nom}
          description={
            garderie?.description ?? "Informations momentanément indisponibles."
          }
          horaires={garderie?.horaires}
        />
        <Services services={services ?? []} />
      </main>
      <footer id="contact" className="footer">
        {garderie
          ? `${garderie.adresse} · ${garderie.telephone}`
          : "Contact indisponible"}
      </footer>
    </>
  );
}