const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/api/garderie", (req, res) => {
  res.json({
    nom: "Ma Garderie",
    description: "Un espace chaleureux et sécurisé pour l'épanouissement de vos enfants.",
    adresse: "Tozeur, Tunisie",
    telephone: "+216 97 460 346",
    horaires: "Lundi - Vendredi, 7h30 - 18h00",
  });
});

app.get("/api/services", (req, res) => {
  res.json([
    { id: 1, titre: "Accueil journalier", description: "Garde des enfants de 3 mois à 5 ans." },
    { id: 2, titre: "Repas équilibrés", description: "Repas et goûters préparés chaque jour." },
    { id: 3, titre: "Éveil et jeux", description: "Activités éducatives adaptées à chaque âge." },
    { id: 4, titre: "Sieste surveillée", description: "Espace calme pour le repos des petits." },
  ]);
});

app.get("/api/activites", (req, res) => {
  res.json([
    { id: 1, nom: "Peinture", horaire: "09:00" },
    { id: 2, nom: "Chansons et comptines", horaire: "10:30" },
    { id: 3, nom: "Jeux d'extérieur", horaire: "15:30" },
  ]);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend démarré sur le port ${PORT}`);
});