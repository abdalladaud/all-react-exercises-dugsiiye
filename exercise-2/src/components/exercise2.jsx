//Exercise#2 : Components Challenge
const Header = () => {
    return <h1>Dugsiiye Blogs</h1>
}


const Post = () => {
    return (
        <>
            <h4>Full Stack Ai Engineer</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium repellat reprehenderit labore architecto voluptas, corporis necessitatibus nemo ea? Molestias praesentium quia minima error dolorum autem magnam accusamus molestiae aperiam soluta?</p>
        </>
    )
}
//Footer
const Footer = () => {
    return <h6>&copy; 2026 Dugsiiye. All rights reserved.</h6>
}

const Blogs = () => {
    return (
        <>
            <Header />
            <Post />
            <Footer />
        </>
    )
    
    
}

export default Blogs;