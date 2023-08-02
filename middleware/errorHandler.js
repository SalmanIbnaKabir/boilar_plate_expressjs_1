const errorHandler = (err, req, res, next) => {
  res.status(400).send({
    error: err.message,
    codeName: err.codeName,
    code: err.code,
    from: "Global Error handler returned",
  });
};

module.exports = errorHandler;
