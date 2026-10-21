import { render, screen } from "@testing-library/react";
import Home from "../app/page";

const garderie = {
  nom: "Ma Garderie",
  description: "Un espace chaleureux et sécurisé.",
  adresse: "Tozeur, Tunisie",
  telephone: "+216 97 460 346",
  horaires: "Lundi - Vendredi, 7h30 - 18h00",
};

const services = [
  { id: 1, titre: "Accueil journalier", description: "Garde des enfants." },
];

beforeEach(() => {
  global.fetch = jest.fn((url) =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve(url.endsWith("/api/garderie") ? garderie : services),
    })
  );
});

test("affiche le titre « Ma Garderie »", async () => {
  render(await Home());

  expect(
    screen.getByRole("heading", { level: 1, name: /Ma Garderie/ })
  ).toBeInTheDocument();
});