const express = require("express");
const app = express();
const PORT = 3000;
app.get("/users/:id/profile", (req, res) => {
  const userId = req.params.id;
  const tab =req.query.tab ||"info";
  const lang = req.query.lang ||"en";
  res.status(200).json({
    userId: userId,
    selectedTab: tab,
    language: lang
  });
});
app.listen(PORT, () => {
  console.log(`Serveris running on port ${PORT}`);
});