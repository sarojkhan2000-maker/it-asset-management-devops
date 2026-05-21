const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const dataFile = path.join(__dirname, "data", "assets.json");

function readAssets() {
  return JSON.parse(fs.readFileSync(dataFile, "utf8"));
}

function writeAssets(assets) {
  fs.writeFileSync(dataFile, JSON.stringify(assets, null, 2));
}

app.get("/api/health", (req, res) => {
  res.json({ status: "Backend is running" });
});

app.get("/api/assets", (req, res) => {
  res.json(readAssets());
});

app.post("/api/assets", (req, res) => {
  const { serverName, ipAddress, ownerTeam } = req.body;

  if (!serverName || !ipAddress || !ownerTeam) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const assets = readAssets();

  const newAsset = {
    id: Date.now(),
    serverName,
    ipAddress,
    ownerTeam,
    createdAt: new Date().toISOString()
  };

  assets.push(newAsset);
  writeAssets(assets);

  res.status(201).json(newAsset);
});

app.delete("/api/assets/:id", (req, res) => {
  const id = Number(req.params.id);
  const assets = readAssets();
  const filteredAssets = assets.filter(asset => asset.id !== id);

  writeAssets(filteredAssets);
  res.json({ message: "Asset deleted" });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});