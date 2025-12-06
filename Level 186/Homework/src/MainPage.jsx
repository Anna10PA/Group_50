import { useContext, useMemo } from 'react'
import { Items } from './App'
import Card from './Card'
import Filter from './Filter'

function MainPage() {
    let { info, filteredItems } = useContext(Items)

    let random10Items = useMemo(() => {
        if (!info || info.length === 0) return []
        let curent = filteredItems.length > 0 ? filteredItems : info
        return curent
    }, [info, filteredItems])



    console.log('this is ', info)

    return (
        <main className='min-h-[88vh] bg-gray-900 px-[50px] py-[30px] flex items-start max-md:flex-col-reverse max-md:gap-10 max-sm:px-[15px] relative max-md:items-center'>
            <section className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[30px] w-full max-md:h-full'>
                {
                    info && info.length > 0 ?
                        random10Items.map((element, index) => (
                            <Card
                                image={element.image_url}
                                name={element.name}
                                price={element.price}
                                description={element.description}
                                id={element.id}
                                key={index} />
                        )) : <h1 className='text-white'>Loading . . .</h1>
                }
            </section>
            <Filter />
        </main>
    )
}

export default MainPage
