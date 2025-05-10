import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import * as webllm from "@mlc-ai/web-llm";
import { CreateMLCEngine } from "@mlc-ai/web-llm";

function App() {
  const [msg, setmsg] = useState([
    {
      role: "system",
      content: "Hi Sir How Can I help You With."
    }
  ])
  const [engine, setengine] = useState(null);
  const [input, setinput] = useState("");
  const [loading, isloading] = useState(false);
  const [LLMload,setLLMload]=useState(false)

  const [logos,setlogos]=useState(false);

  useEffect(() => {
    const loadModel = async () => {
      const selectedModel = "RedPajama-INCITE-Chat-3B-v1-q4f32_1-MLC";
        setLLMload(true);
      try {
        const engine = await webllm.CreateMLCEngine(selectedModel, {
          initProgressCallback: ({ progress }) => {
            console.log(`Model loading progress: ${progress}%`);
          },
        });
        setLLMload(false);
        setengine(engine);
      } catch (err) {
        console.error("Failed to create engine:", err);
      }
    };

    loadModel();
  }, []);

  async function sendLLM() {
    const temp = [...msg]

    temp.push({
      role: "user",
      content: input
    })
    setmsg(temp);
    setinput("")
    isloading(true);
    const reply = await engine.chat.completions.create({
      messages: temp,
    });
    console.log("Reply", reply);
    const text = reply.choices[0].message.content;
    isloading(false);
    setmsg([...temp, {
      role: "assistant",
      content: text
    }])
  }

  return (
    <div className=' h-screen w-full'>

      <div className='h-full w-full relative flex justify-center items-center'> {/*The Conversation Area*/}
  
        <div className=' bg-white size-10 rounded-full absolute z-30 right-5 top-5 border-none' onClick={()=>{setlogos(!logos)}}><img src="/logo.png" className=' rounded-full bg-cover border-none cursor-pointer hover:shadow-[0_0_10px_#1F51FF] transition shadow-[0_0_25px_#1F51FF]' alt="" /></div>
        
        {
          logos==true?
        <div  className=' h-[30%] shadow-2xl flex justify-center items-center shadow-black rounded-4xl w-[30%] bg-white/11 backdrop-blur-3xl gap-5 absolute z-30'>
         <a href=""><i className="fa-brands fa-github text-5xl cursor-pointer hover:text-white transition text-black"></i></a>
         <a href="https://www.npmjs.com/package/@mlc-ai/web-llm"><i className="fa-solid fa-hexagon-nodes text-5xl text-black cursor-pointer hover:text-white transition"></i></a>
         <a href="https://www.linkedin.com/in/kartikey-pathakb580297/"><i class="fa-brands fa-linkedin text-5xl cursor-pointer hover:text-white transition text-black"></i></a>
         <a href="https://x.com/Kartikey7070"><i class="fa-brands fa-x-twitter text-5xl cursor-pointer hover:text-white transition text-black"></i></a>
        </div>
        :null
        }

        <div className='messages h-[70%] w-[90%] mt-1 overflow-y-auto scroll-auto absolute top-1 md:w-[85%]'>  {/* The Whole Message Area */}

          {
            LLMload==false?
            msg.map((msgs, index) => {
              return (
                <div className={`chat ${(msgs.role == "user") ? "chat-end" : "chat-start"}`} key={index}>
                  <div className=' chat-bubble'><h1>{msgs.content}</h1></div>
                </div>
              )
            }):null
          }

          {
            (loading == true) ?
              <div className=' flex justify-start mt-2'><span className="loading loading-dots loading-lg"></span></div>
              :
              null
          }
          {
            LLMload==true?
            <div className=' absolute z-30 h-full w-full flex justify-center items-center backdrop-blur-3xl'><span className="loading loading-ring loading-xl text-blue-500"></span></div>
            :
            null
          }

        </div>




        <div className='absolute bottom-5 gap-1 flex justify-center items-center w-full'>
          <input type="text" onChange={(e) => { setinput(e.target.value) }} onKeyDown={(e) => { if (e.key === "Enter") { sendLLM() } }} value={input} className=' outline-none h-12 w-[80%] md:h-12 md:w-[30rem] rounded-2xl p-2 placeholder:p-2 bg-gray-800' id='txt' placeholder='Message' />
          <label htmlFor="txt"><button onClick={() => { sendLLM() }} className=' px-10 bg-gray-950 h-12 w-20 rounded-2xl cursor-pointer hover:bg-gray-700 transition flex justify-center items-center'><h1>Send</h1></button></label>
        </div>
      </div>

    </div>
  )
}

export default App
