function Logo() {
    return (
        <div className="h-[100%] w-[100%] flex justify-center items-center">
            <div className=' h-[30%] shadow-2xl flex justify-center items-center shadow-black rounded-4xl w-[30%] bg-white/11 backdrop-blur-3xl gap-5 absolute z-50'>
                <a href=""><i className="fa-brands fa-github text-5xl cursor-pointer hover:text-white transition text-black"></i></a>
                <a href="https://www.npmjs.com/package/@mlc-ai/web-llm"><i className="fa-solid fa-hexagon-nodes text-5xl text-black cursor-pointer hover:text-white transition"></i></a>
                <a href="https://www.linkedin.com/in/kartikey-pathakb580297/"><i class="fa-brands fa-linkedin text-5xl cursor-pointer hover:text-white transition text-black"></i></a>
                <a href="https://x.com/Kartikey7070"><i class="fa-brands fa-x-twitter text-5xl cursor-pointer hover:text-white transition text-black"></i></a>
            </div>
        </div>
    )
}
export default Logo;