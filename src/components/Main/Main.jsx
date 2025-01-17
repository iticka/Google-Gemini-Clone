import React, { useContext } from 'react'
import DOMPurify from 'dompurify';
import './Main.css'
import {assets} from '../../assets/assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

    const {onSent, recentPrompt, showResult, loading, result, resultData, setInput, input, setRecentPrompt} = useContext(Context)

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && input.trim()) {
          onSent(); 
        }
      };

    const handleCardClick = (prompt) => {
        setInput(prompt) 
        onSent(prompt) 
    }
    

  return (
    <div className='main'>
        <div className='nav'>
        <p>Gemini</p>
        <img src={assets.user_icon} alt="User Icon" />
        </div>
        <div className="main_container">

            {!showResult
            ?<>
            <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className='cards'>
                <div className="card" onClick={() => handleCardClick('Suggest beautiful places to see on an upcoming road trip')}>
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt="compass icon" />
                </div>
                <div className="card" onClick={() => handleCardClick('Briefly summarize this concept: urban planning')}>
                    <p>Briefly summarize this concept: urban planning</p>
                    <img src={assets.bulb_icon} alt="bulb icon" />
                </div>
                <div className="card" onClick={() => handleCardClick('Brainstorm team bonding activities for our work retreat')}>
                    <p>Brainstorm team bonding activities for our work retreat</p>
                    <img src={assets.message_icon} alt="messafe icon" />
                </div>
                <div className="card" onClick={() => handleCardClick('Improve the readability of the following code')}>
                    <p>Improve the readability of the following code</p>
                    <img src={assets.code_icon} alt="code icon" />
                </div>
            </div>
            </>: <div className='result'>
                    <div className="result_title">
                        <img src={assets.user_icon} alt="User Icon" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result_data">
                        <img src={assets.gemini_icon} alt="Gemini Icon" />
                        {loading
                        ?<div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                        </div> :
                        <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(resultData)}}></p> 
                        }
                    </div>
                 </div>}

            
            <div className="main_bottom">
                <div className="search_box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Enter a prompt here' onKeyDown={handleKeyDown}/>
                    <div>
                        <img src={assets.gallery_icon} alt="Gallery Icon" />
                        <img src={assets.mic_icon} alt="Mic Icon" />
                        {input?<img onClick={() =>onSent()} src={assets.send_icon} alt="Send Icon" />: null}
                    </div>
                </div>
                <p className='bottom_info'>
                    Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps 
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main