function apiKey(req, res, next) {
  const api_key = "1234567";
  //   console.log(req.query.api_key);
  const userApiKey = req.query.api_key;
  if (userApiKey && userApiKey === api_key) {
    next(); //to make the request proceed
  } else {
    res.json({ message: "Not allowed" });
  }
}

module.exports = apiKey;
