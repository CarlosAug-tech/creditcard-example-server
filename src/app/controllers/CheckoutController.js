import pagarme from 'pagarme';
import Checkout from '../models/Checkout';
import Transaction from '../models/Transaction';

class CheckoutController {
  async store(req, res) {
    const {
      customer,
      address,
      card_hash,
      items,
      installments,
      amount: amountClient,
    } = req.body;

    try {
      const client = await pagarme.client.connect({
        api_key: process.env.PAGARME_API_KEY,
      });

      const fee = 1000;
      const amount = amountClient * 100 + fee;

      const pagarmeTransaction = await client.transactions.create({
        amount: parseInt(amount, 10),
        ...(card_hash && { card_hash }),
        customer: {
          name: customer.name,
          email: customer.email,
          country: 'br',
          external_id: '1',
          type: 'individual',
          documents: [
            {
              type: 'cpf',
              number: customer.cpf,
            },
            {
              type: 'rg',
              number: customer.rg,
            },
          ],
          phone_numbers: [customer.phone],
        },
        billing: {
          name: customer.name,
          address: {
            ...address,
            country: 'br',
          },
        },
        shipping: {
          name: customer.name,
          fee,
          delivery_date: '2020-08-01',
          expedited: false,
          address: {
            ...address,
            country: 'br',
          },
        },
        items: items.map((item) => ({
          id: String(item.id),
          title: item.name,
          unit_price: parseInt(item.price * 100, 10),
          quantity: item.amount,
          tangible: true,
        })),
      });

      const checkout = await Checkout.create({
        amount: parseInt(amount * 100, 10),
        fee,
        user_id: req.userId,
      });

      const transactions = await Transaction.create({
        transaction_id: pagarmeTransaction.id,
        status: pagarmeTransaction.status,
        authorization_code: pagarmeTransaction.authorization_code,
        brand: pagarmeTransaction.card.brand,
        authorized_amount: pagarmeTransaction.authorized_amount,
        tid: pagarmeTransaction.tid,
        installments,
        checkout_id: checkout.id,
      });

      return res.json(transactions);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

export default new CheckoutController();
