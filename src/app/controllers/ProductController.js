import Product from '../models/Product';
import Stock from '../models/Stock';
import File from '../models/File';

class ProductController {
  async show(req, res) {
    const { id } = req.params;

    const product = await Product.findOne({
      where: { id },
      include: [
        {
          model: File,
          as: 'image',
          attributes: ['id', 'path', 'url'],
        },
        {
          model: Stock,
          as: 'stock',
          attributes: ['product_id', 'amount'],
        },
      ],
    });

    return res.json(product);
  }

  async index(req, res) {
    const products = await Product.findAll({
      include: [
        {
          model: File,
          as: 'image',
          attributes: ['id', 'path', 'url'],
        },
        {
          model: Stock,
          as: 'stock',
          attributes: ['product_id', 'amount'],
        },
      ],
    });

    return res.json(products);
  }

  async store(req, res) {
    const { name, price, description, image_id, amount } = req.body;

    const product = await Product.create({
      name,
      description,
      price,
      image_id,
    });

    if (product) {
      if (amount > 0) {
        await Stock.create({
          product_id: product.id,
          amount,
        });
      } else {
        return res.status(400).json({ error: 'Amount value not permitted' });
      }
    }

    return res.json(product);
  }
}

export default new ProductController();
