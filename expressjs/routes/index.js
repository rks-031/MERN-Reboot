const apiKey = require("../middlewares/apiKey");

const router = require("express").Router();

const apiKeyMiddleware = require("../middlewares/apiKey.js");

//router level middleware

// router.use(apiKeyMiddleware);

router.get("/", (req, res) => {
  res.render("index", {
    title: "My home page",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "my about page",
  });
});

router.get("/download", (req, res) => {
  res.download(path.resolve(__dirname) + "/about.html");
});

router.get("/api/products", apiKeyMiddleware, (req, res) => {
  res.json([
    {
      id: "123",
      name: "Chrome",
    },
    {
      id: "124",
      name: "Firefox",
    },
  ]);
});

module.exports = router;
