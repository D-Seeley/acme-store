const express = require('express')
const app = express()
const PORT = process.env.PORT || 1337

const path = require('path')
const bodyParser = require('body-parser')

const { conn, models, syncAndSeed } = require('./db')
const { Product, Order, LineItem } = models

const init = async () => {
    await syncAndSeed()
    app.listen(PORT, ()=> console.log(`Server Listening on ${PORT}`))
}


//   -----------
//   - routes
//   -----------

//MiddleWare
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())

app.get('/', (req, res, next)=> {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/api/products', (req, res, next)=> {
    Product.findAll()
        .then( products => res.send(products))
        .catch(next);
})

// app.post('/api/orders', (req, res, next)=> {
//     Order.create(req.body)
//         .then(response => console.log(response))
// })






app.get('/api/orders', async (req, res, next)=> {
    const attr = {
        status: 'CART'
    };
    try {
        let cart = await Order.findOne({ where: attr });
        if(!cart){
            cart = await Order.create(attr); 
        }
        const orders = await Order.findAll({
            include: [ LineItem ],
            order: [['createdAt', 'DESC']]
        })
        res.send(orders);
    }
    catch(ex){
        next(ex);
}
});

//update line item
app.put('/api/orders/:orderId/lineItems/:id', (req, res, next)=> {
    LineItem.findById(req.params.id)
        .then( lineItem => lineItem.update(req.body))
        .then( lineItem => res.send(lineItem))
        .catch(next);
});

//delete lineItem
app.delete('/api/orders/:orderId/lineItems/:id', (req, res, next)=> {
    LineItem.destroy({
        where: {
        orderId: req.params.orderId,
        id: req.params.id
        }
    })
        .then(()=> res.sendStatus(204))
        .catch(next);
});

//create lineItem
app.post('/api/orders/:orderId/lineItems/', (req, res, next)=> {
    console.log(req.body)
    LineItem.create({ orderId: req.params.orderId, productId: req.body.productId })
        .then( lineItem => res.send(lineItem))
        .catch(next);
});

//update order
app.put('/api/orders/:id', (req, res, next)=> {
    Order.findById(req.params.id, { include: [LineItem]})
        .then( order => order.update(req.body))
        .then( order => res.send(order))
        .catch(next);
});

//Initialize
init()