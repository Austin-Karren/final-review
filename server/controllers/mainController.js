module.exports = {
   getProducts: (req, res) => {
      const db = req.app.get('db');

      db.products.get_products()
      .then(res => res.status(200).send(res))
      .catch(err => res.status(500).send(err));
   }
}