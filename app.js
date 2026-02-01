const express = require("express");
const os = require("os");

const app = express();
const PORT = process.env.PORT || 3000;

// Optional: custom name (set per server)
const SERVER_NAME = process.env.SERVER_NAME || "unknown-server";

app.get("/", (req, res) => {
  res.json({
    message: "Hello from Node.js Server 🚀",
    serverName: SERVER_NAME,
    hostname: os.hostname(),
    ip: getLocalIP(),
    pid: process.pid,
    time: new Date().toISOString()
  });
});

// Get local IPv4 address
function getLocalIP() {
  const nets = os.networkInterfaces();

  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === "IPv4" && !net.internal) {
        return net.address;
      }
    }
  }
  return "unknown";
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
