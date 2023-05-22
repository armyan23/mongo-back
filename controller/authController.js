async function signUp(req, res) {
  console.log(req.body);
  res.send({
    message: "Successfully registered",
  });
}

module.exports = {
  signUp,
};
