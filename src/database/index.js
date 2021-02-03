import Sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';
import Product from '../app/models/Product';
import Stock from '../app/models/Stock';
import Checkout from '../app/models/Checkout';
import Transaction from '../app/models/Transaction';

import databaseConfig from '../config/database';

const models = [User, File, Product, Stock, Checkout, Transaction];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
