//npm install express
//npm install cors
//npm init -y
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/temperatura", (req, res) => {
  res.json({ valor: "10 °C", timestamp: new Date().toISOString() });
});
app.get("/velocidad", (req, res) => {
  res.json({ nombre: "Sebastian", apellido: "Woo Ramirez" });
});
app.get("/utl", (req, res) => {
  res.json({ escuela: "UTLD", nivel: "Universidad" });
});
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
