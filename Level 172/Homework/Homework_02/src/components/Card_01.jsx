import { createContext, useContext } from "react"

export let SendInfo = createContext({
    favListName: [],
    func: () => {
    }
})

function Card_01({ info }) {
    let { favListName, func } = useContext(SendInfo)

    let curent = false
    for (let favorite of favListName) {
        if (favorite.Name === info.Name) {
            curent = true
            break
        }
    }

    return (
        <div className='w-[100%] rounded-[5px] border-[1px] border-gray-300 h-[340px] relative bg-white overflow-hidden flex flex-col items-start gap-[20px] justify-start'>
            <i className={`${curent ? 'fa-solid fa-heart text-[#a00] scale-[1.1] hover:text-[#e00]' : "fa-regular fa-heart hover:text-gray-600"} text-[23px] absolute top-[15px] left-[20px] z-[1] cursor-pointer active:scale-[0.8] duration-100 `} onClick={
                () => {
                    func(info)
                    console.log(info)
                }
            }></i>

            <div className="h-[200px] overflow-hidden w-full flex items-center justify-center duration-200 hover:scale-[1.05] scale-[1.02] ">
                <img src={info.Image}
                    className="w-full object-cover h-full" alt="" />
            </div>

            <div className="px-[20px] font-[Momo_Trust_Display] py-[10px] w-full">
                <h1 className="font-[900] tracking-[0.5px] text-[20px] text-[#102E4A]">{info.Name}</h1>
                <div className="flex items-center justify-between font-[400] text-[16px] leading-[40px]">
                    <h1 className="flex items-center gap-[15px] text-[#102E4A]">${info.OldPrice}<span className="text-gray-400 text-[14px]">${info.Price}</span></h1>
                    <h1 className="bg-green-300 text-green-600 px-[10px] py-[2px] w-[max-content] h-[max-content] rounded-[5px]">{info.OldPrice ? `- ${Math.round(((info.OldPrice - info.Price) / info.OldPrice) * 100)}%` : null}</h1>
                </div>
            </div>

        </div>
    )
}

export default Card_01
