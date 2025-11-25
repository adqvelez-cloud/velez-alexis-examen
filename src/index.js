const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(process.cwd(), 'public')));

function sumar(a, b) {
  return a + b;
}
module.exports = { sumar };

app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

// Solo iniciar el servidor si este archivo se ejecuta directamente
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
}
