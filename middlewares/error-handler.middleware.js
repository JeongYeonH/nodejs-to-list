export default (err, rec, res, next) => {
  console.error(err);
  if (err.name === "ValidationError") {
    return res.status(400).json({ errorMessage: err.message });
  }
  return res
    .statur(500)
    .json({ errorMessage: "서버에서 에러가 발생했습니다." });
};
