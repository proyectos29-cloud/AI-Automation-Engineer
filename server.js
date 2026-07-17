// server.js
require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const { generateListicle } = require('./generator');

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Configuración de middlewares con límite de 50MB
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.set('view engine', 'ejs');
app.use(express.static('public'));

const DB_PATH = path.join(__dirname, 'data', 'db.json');

// ==========================================
// 🔥 TEST DE ARRANQUE INMUTABLE PARA WINDOWS
// ==========================================
console.log("\n[Autodiagnóstico] Iniciando pruebas de escritura...");

const testDirs = [
  path.join(__dirname, 'data'),
  path.join(__dirname, 'public'),
  path.join(__dirname, 'public', 'listicles')
];

testDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    try {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`[Autodiagnóstico] Carpeta creada con éxito: ${dir}`);
    } catch (err) {
      console.error(`[Autodiagnóstico ❌] Error fatal al crear carpeta ${dir}: ${err.message}`);
    }
  } else {
    console.log(`[Autodiagnóstico] Carpeta ya existente: ${dir}`);
  }
});

const testFilePath = path.join(__dirname, 'public', 'listicles', 'test-escritura.txt');
try {
  fs.writeFileSync(testFilePath, 'OK', 'utf8');
  console.log(`[Autodiagnóstico ✅] Permisos de escritura validados con éxito.`);
  fs.unlinkSync(testFilePath);
} catch (err) {
  console.error(`\n❌ [BLOQUEO DETECTADO] Windows no permite escribir archivos en la ruta: ${err.message}`);
}
// ==========================================

// Helper para leer/escribir base de datos simulada
function getListicles() {
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify([]));
  }
  
  const fileContent = fs.readFileSync(DB_PATH, 'utf8').trim();
  
  if (!fileContent) {
    fs.writeFileSync(DB_PATH, JSON.stringify([]));
    return [];
  }
  
  try {
    return JSON.parse(fileContent);
  } catch (e) {
    console.error("Error al parsear db.json, reseteando archivo...", e);
    fs.writeFileSync(DB_PATH, JSON.stringify([]));
    return [];
  }
}

function saveListicles(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

// Ruta: API para obtener el estado de los listicles (Polling)
app.get('/api/status', (req, res) => {
  try {
    const listicles = getListicles();
    const statusList = listicles.map(item => ({ id: item.id, status: item.status }));
    res.json(statusList);
  } catch (err) {
    res.status(500).json({ error: "Error al leer estados" });
  }
});

// Ruta: Dashboard
app.get('/', (req, res) => {
  const listicles = getListicles();
  res.render('dashboard', { listicles });
});

// Ruta: Vista Crear
app.get('/create', (req, res) => {
  res.render('create');
});

// Ruta: Acción de Generar
app.post('/create', async (req, res) => {
  const { product_url, research_json_string } = req.body;
  const id = Date.now().toString();
  
  let listicles = getListicles();
  const newEntry = {
    id,
    product_url,
    status: 'pending',
    filename: `listicle-${id}.html`,
    created_at: new Date().toLocaleString()
  };
  
  listicles.push(newEntry);
  saveListicles(listicles);

  res.redirect('/');

  // Proceso asíncrono
  try {
    const researchData = JSON.parse(research_json_string);
    const generatedHtml = await generateListicle(researchData, product_url);
    
    const outputDir = path.join(__dirname, 'public', 'listicles');
    const filePath = path.join(outputDir, `listicle-${id}.html`);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(filePath, generatedHtml, 'utf8');
    console.log(`[Sistema] ¡Archivo guardado con éxito!`);

    listicles = getListicles();
    const entry = listicles.find(l => l.id === id);
    if (entry) {
      entry.status = 'completed';
      saveListicles(listicles);
    }
  } catch (error) {
    console.error("Error en la orquestación de la generation:", error);
    listicles = getListicles();
    const entry = listicles.find(l => l.id === id);
    if (entry) {
      entry.status = 'failed';
      saveListicles(listicles);
    }
  }
});

// Ruta: Eliminar un listicle específico (Archivo físico + registro en db.json)
app.post('/delete/:id', (req, res) => {
  try {
    const { id } = req.params;
    let listicles = getListicles();
    
    // 1. Buscamos el registro para identificar el nombre del archivo HTML
    const itemToDelete = listicles.find(item => item.id === id);
    
    if (itemToDelete) {
      const filePath = path.join(__dirname, 'public', 'listicles', itemToDelete.filename);
      
      // 2. Si el archivo existe físicamente, se elimina del disco
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`[Sistema] Archivo físico eliminado con éxito: ${itemToDelete.filename}`);
      }
    }
    
    // 3. Filtramos y actualizamos db.json sacando el registro
    const cleanList = listicles.filter(item => item.id !== id);
    saveListicles(cleanList);
    
    console.log(`[Sistema] Registro con ID ${id} eliminado correctamente del panel.`);
    res.redirect('/');
  } catch (error) {
    console.error("Error al procesar la eliminación completa:", error);
    res.status(500).send("Error interno al intentar eliminar el listicle");
  }
});

// Ruta: Eliminar de db.json todos los registros con estado "failed"
app.post('/clean-failed', (req, res) => {
  try {
    let listicles = getListicles();
    const cleanList = listicles.filter(item => item.status !== 'failed');
    saveListicles(cleanList);
    console.log("[Sistema] Se han eliminado con éxito los registros fallidos.");
    res.redirect('/');
  } catch (error) {
    console.error("Error al limpiar los registros fallidos:", error);
    res.status(500).send("Error interno al limpiar la base de datos");
  }
});

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}\n`));