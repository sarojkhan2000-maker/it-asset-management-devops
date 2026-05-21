const API_URL = "http://localhost:3000/api/assets";
let assets = [];

async function loadAssets() {
  const response = await fetch(API_URL);
  assets = await response.json();
  displayAssets(assets);
}

function displayAssets(assetList) {
  const table = document.getElementById("assetTable");
  table.innerHTML = "";

  assetList.forEach(asset => {
    table.innerHTML += `
      <tr>
        <td>${asset.serverName}</td>
        <td>${asset.ipAddress}</td>
        <td>${asset.ownerTeam}</td>
        <td><button onclick="deleteAsset(${asset.id})">Delete</button></td>
      </tr>
    `;
  });
}

async function addAsset() {
  const serverName = document.getElementById("serverName").value;
  const ipAddress = document.getElementById("ipAddress").value;
  const ownerTeam = document.getElementById("ownerTeam").value;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ serverName, ipAddress, ownerTeam })
  });

  document.getElementById("serverName").value = "";
  document.getElementById("ipAddress").value = "";
  document.getElementById("ownerTeam").value = "";

  loadAssets();
}

async function deleteAsset(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  loadAssets();
}

function searchAssets() {
  const text = document.getElementById("searchBox").value.toLowerCase();

  const filtered = assets.filter(asset =>
    asset.serverName.toLowerCase().includes(text) ||
    asset.ipAddress.toLowerCase().includes(text) ||
    asset.ownerTeam.toLowerCase().includes(text)
  );

  displayAssets(filtered);
}

loadAssets();