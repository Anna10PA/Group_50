import { useState, useEffect } from "react"
import Card_02 from "./Card_02"

function Comment() {
    let [width, setWidth] = useState(window.innerWidth)
    let [cardCount, setCardCount] = useState(Math.floor(window.innerWidth / 380))
    let [groupedComments, setGroupedComments] = useState([])
    let [curentDiv, setCurentDiv] = useState(1)

    let CommentList = [
        {
            Rate: 5,
            Username: "Sarah M.",
            Comment: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
        },
        {
            Rate: 5,
            Username: "Alex K.",
            Comment: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`,
        },
        {
            Rate: 5,
            Username: "James L.",
            Comment: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
        },
        {
            Rate: 5,
            Username: "Lili L.",
            Comment: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
        },
        {
            Rate: 5,
            Username: "Lana L.",
            Comment: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
        },
    ]

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth)
        })
    }, [])

    useEffect(() => {
        let count = Math.max(1, Math.floor(width / 380))
        setCardCount(count)
    }, [width])

    useEffect(() => {
        let groups = []
        for (let i = 0; i < CommentList.length; i += cardCount) {
            groups.push(CommentList.slice(i, i + cardCount))
        }
        setGroupedComments(groups)
    }, [cardCount, width])

    console.log(cardCount)


    return (
        <section className="py-[50px] flex flex-col items-start gap-[60px] w-full overflow-hidden">
            <div className="flex items-center w-full justify-between px-[70px] max-md:px-[20px] gap-[30px]">
                <h1 className="text-[45px] font-[800] max-md:text-[30px] max-sm:text-[25px] leading-[50px] max-sm:leading-[30px]">
                    OUR HAPPY CUSTOMERS
                </h1>
                <div className="flex items-center gap-[20px] text-[25px] pr-[0px]">
                    <i className="fa-solid fa-arrow-left cursor-pointer"
                        onClick={() =>
                            setCurentDiv(curentDiv === 1 ? groupedComments.length : curentDiv - 1)
                        }
                    />
                    <i className="fa-solid fa-arrow-right cursor-pointer"
                        onClick={() =>
                            setCurentDiv(curentDiv === groupedComments.length ? 1 : curentDiv + 1)
                        }
                    />
                </div>
            </div>


            <div className="flex overflow-hidden w-full px-[70px] max-md:px-[20px]">
                <div className="flex "
                    style={{
                        transform: `translateX(-${(curentDiv - 1) * 100}%)`,
                        transition: 'transform 0.5s ease',
                    }}>
                    {groupedComments.map((group, a) => (
                        <div key={a} className="flex gap-[20px] w-full flex-shrink-0">
                            {group.map((item, b) => {
                                return <Card_02 key={b} Rate={item.Rate} Name={item.Username} Comment={item.Comment} />
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Comment
