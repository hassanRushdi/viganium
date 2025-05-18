const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Explicitly handle contact route
  server.get("/contact", (req, res) => {
    return app.render(req, res, "/contact", req.query);
  });

  // Example custom route
  server.get("/projects/:page", (req, res) => {
    const page = `/projects/${req.params.page}`;
    return app.render(req, res, page, req.params);
  });

  // Default route handler
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
