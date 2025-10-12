import BlogCatd from './BlogCard'

function Blog() {
    return (
        <main className='bg-[url(/hero_bg.png)] bg-no-repeat bg-center bg-cover min-h-[100vh] grid items-center grid-cols-[repeat(auto-fit,minmax(300px,1fr))] text-white px-[60px] gap-[60px] pt-[130px]'>

            <BlogCatd img='https://i.pinimg.com/736x/f4/35/85/f4358576ef07465c85f7038eb2e61582.jpg' text='“Absolutely love this bakery! Everything tastes so fresh and homemade. Their croissants are buttery and the cakes are just perfect — not too sweet, just right. The staff is always welcoming.”' name='T . Z' />

            <BlogCatd img='https://i.pinimg.com/736x/01/97/06/019706f1ad3339da3656cbebbf2c9424.jpg' text='“Best pastries I’ve ever had! The chocolate mousse cake is to die for. You can really taste the quality ingredients. Highly recommend this place to anyone with a sweet tooth!”' name='E . K' />

            <BlogCatd img='https://i.pinimg.com/736x/0f/78/25/0f7825e98d3ad7e88f13c3fb73e7266b.jpg' text='“A charming little bakery with delightful treats and cozy atmosphere. The desserts are beautifully made and full of flavor. You can tell the bakers put their heart into every piece.”' name='M . Z' />

            <BlogCatd img='https://i.pinimg.com/736x/02/dc/e9/02dce9270888c19e2203fe412a378103.jpg' text='“I keep coming back here every weekend! Their coffee pairs perfectly with the cakes, and everything looks straight out of a pastry magazine. Truly a gem! BEST PLACE.”' name='A . P' />
        </main>
    )
}

export default Blog
