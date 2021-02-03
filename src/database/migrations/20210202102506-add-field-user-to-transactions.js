module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('checkouts', 'user_id', {
      type: Sequelize.INTEGER,
      references: { model: 'users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('checkouts', 'user_id');
  },
};
