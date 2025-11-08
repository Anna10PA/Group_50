import { useEffect, useState } from "react"
import Card_01 from "./Card_01"
import Header from "./Header"

function FullPage() {
    // Task 001
    let [detail, setDetail] = useState([])

    // Task 002
    useEffect(() => {
        async function getInfos() {
            let data = await fetch('/Detail.json')
            let details = await data.json()
            console.log(details)
            setDetail(details)
        }
        getInfos()
    }, [])


    // Task 005
    return (
        <>
            <Header />
            <main className="w-full min-h-[83vh] flex items-center flex-col justify-center gap-[40px] px-[70px] mt-[50px] max-md:px-[30px]">
                <h1 className="font-[Momo_Signature] font-[700] text-[40px] text-[#102E4A] max-sm:text-[30px]">Popular Foods</h1>
                {/* Task 05 */}
                {
                    <section className="w-full h-[100%] min-h-[80vh] overflow-auto grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-center gap-[30px]">
                        {
                            detail.map((item, index) => {
                                return <Card_01 info={item} key={index} />
                            })
                        }
                    </section>
                }
            </main >
        </>
    )
}

export default FullPage
