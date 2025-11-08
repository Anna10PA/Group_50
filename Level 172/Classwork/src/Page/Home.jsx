import Hero from "../Components/Hero"
import TopSell from "../Components/TopSell"
import DressStyle from "../Components/DressStyle"
import Comment from "../Components/Comment"
import Footer from "../Components/Footer"

function Home() {
    return (
        <>
            <main className="flex flex-col items-center">
                <Hero />
                <TopSell />
                <DressStyle />
                <Comment />
            </main>
            <Footer />
        </>
    )
}

export default Home
