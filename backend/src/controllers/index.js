const getHome = (req, res) => {
  res.send("Welcome to the FBC Beasley website!");
};

const getAbout = (req, res) => {
  res.send("About FBC Beasley: We are a community-focused organization.");
};

module.exports = {
  getHome,
  getAbout,
};