const getAllProductsStatic = async (req, res) => {
  throw new Error("testing package");
  res.status(200).json({ msg: "Products testing route" });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "Products  route" });
};

module.exports = { getAllProducts, getAllProductsStatic };
