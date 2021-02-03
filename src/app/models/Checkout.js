import Sequelize, { Model } from 'sequelize';

class Checkout extends Model {
  static init(sequelize) {
    super.init(
      {
        amount: Sequelize.INTEGER,
        fee: Sequelize.INTEGER,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.hasOne(models.Transaction, { foreignKey: 'id', as: 'transactions' });
    this.belongsTo(models.User, { foreignKey: 'user_id' });
  }
}

export default Checkout;
