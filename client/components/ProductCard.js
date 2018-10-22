import React from 'react'

const ProductCard = (props) => {
    const { product, quantity, orderIncrease, orderDecrease } = props
    return (
        <div className={'card'}>
            <div className={'card-body'}>
                <h3>{product.name}</h3>
                <hr />
                <p>{`${quantity} ordered`}</p>
                <div className={'card-buttons'}>
                    <button onClick={()=> orderIncrease(product.id)}>+</button>
                    <button onClick={()=> orderDecrease(product.id)}>-</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard