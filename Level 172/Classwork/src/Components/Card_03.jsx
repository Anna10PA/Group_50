function Card_03({ item }) {
    console.log('abc', item)
    let array = []
    if (item) {
        for (let i = 0; i < Math.floor(item.rating); i++) {
            array.push(i)
        }
    }
    return (
        <div className="border rounded-[5px] border-[rgba(0,0,0,0.1)]">
            <div>
                {item ?
                    array.map((_, index) => {
                        return <i className="fa-solid fa-star text-[#ffc633]" key={index}></i>
                    }) : null}
                {item.rating ?
                    item.rating % 1 !== 0 ?
                        <i className="fa-solid fa-star-half text-[#ffc633]"></i>
                        : null
                    : null}
            </div>
            <div>
                <h1>
                    {item.name}
                </h1>
                <p>
                    {item.desc}
                    </p>
            </div>
        </div>
    )
}

export default Card_03
