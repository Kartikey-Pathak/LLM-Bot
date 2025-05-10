function Info() {
    return (
        <div className=" h-[100%] w-[100%] flex justify-center items-center">
            <div className=' h-[30%] shadow-2xl flex justify-center overflow-hidden overflow-y-auto items-center shadow-black rounded-4xl w-[30%] bg-white/11 backdrop-blur-3xl gap-5 absolute z-50'>
                <div className=' h-[95%] w-[95%]'>
                    <h1 className='m-2'> - This app loads an entire large language model (LLM) directly in your browser.
                        Initial loading and setup might take some time depending on your internet and device speed.

                        For faster and smoother use, we recommend downloading and running it locally on your own system.

                        Follow the steps in the {<a href='https://github.com/Kartikey-Pathak/LLM-Bot/blob/main/README.md' className=' text-blue-600 underline cursor-pointer'>Readme.md</a>} to set it up locally.
                        Just clone the repo, run npm install, and then npm run dev.

                        Once loaded, everything runs completely in your browser — no servers involved!
                        Why the delay?
                        The model is several hundred MBs and needs to be downloaded completely before use.

                        It then goes through a loading and initialization phase (you'll see progress updates in the console).

                        * NOTE : - Not Recommeded To Use Straight From The Vercel.
                    </h1>
                </div>
            </div>
        </div>
    )
}
export default Info;