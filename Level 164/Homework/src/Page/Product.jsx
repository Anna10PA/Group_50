function Product({ productName, price, OldPrice, info, imgs }) {
    return (
        <section>
            <div>
                <div>
                    <div className="w-[180px] h-[200px] flex items-center justify-center">
                        <img src={imgs.image01} alt="" className="object-cover"/>
                    </div>
                    <img src={imgs.image02} alt="" />
                    <img src={imgs.image03} alt="" />
                </div>
            </div>
            <div>
                <h1>{productName}</h1>
                <div>
                    <h2>{price}</h2>
                    <h2>{OldPrice}</h2>
                    <h2>{Math.floor(((OldPrice - price) / OldPrice) * 100)}%</h2>
                </div>
            </div>
        </section>
    )
}

export default Product
