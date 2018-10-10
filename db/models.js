const conn = require('./conn')

const Product = conn.define('product', {
    name: {
      type: conn.Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true
      }
    },
  });
  
  const Order = conn.define('order', {
    id: {
      type: conn.Sequelize.UUID,
      defaultValue: conn.Sequelize.UUIDV4,
      primaryKey: true
    },
    status: {
      type: conn.Sequelize.ENUM('CART', 'ORDER'),
      allowNull: false,
      defaultValue: 'CART'
    }
  });
  
  const LineItem = conn.define('lineItem', {
    quantity: {
      type: conn.Sequelize.INTEGER,
      defaultValue: 1
    },
  });

  Order.hasMany(LineItem)
  LineItem.belongsTo(Order)

  Product.hasMany(LineItem)
  LineItem.belongsTo(Product)
  

  module.exports = {
      models: {
        Product, 
        Order, 
        LineItem
      }
  }
  