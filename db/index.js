const conn = require('./conn')
const { models } = require('./models')

const seed = () => {
  Promise.all([
    models.Product.create({ name: 'Shoes' }),
    models.Product.create({ name: 'Pants' }),
    models.Product.create({ name: 'Shirts' }),
    models.Product.create({ name: 'Jackets' })
  ])
  .then(()=> console.log('Products Seeded'))
}

const syncAndSeed = async () => {
  await conn.sync({ force: true })
  await seed()

}

module.exports = {
  conn, models, syncAndSeed
}