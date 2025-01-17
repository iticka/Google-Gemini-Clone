import React, { useContext } from 'react';
import './sidebar.css';
import {assets} from '../../assets/assets/assets';
import { useState } from 'react';
import { Context } from '../../context/Context';


const Sidebar = () => {
const [extended, setextended] = useState(false)
const {onSent, prevPrompts, setRecentPrompt, newChat, setResultData} = useContext(Context)

const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
}
  return (
    <div className='sidebar'>
        <div className="top">
            <img className="menu_icon" src={assets.menu_icon} alt="Menu Icon" onClick={() => setextended(prev => !prev)}/>
            <div onClick={() => newChat()} className='chat_button'>
                <img src={assets.plus_icon} alt="+" />
                {extended?<p>New Chat</p>:null}
            </div>
        {extended?
           <div className="recent">

           <p className='recent_title'>Recent</p>
           {prevPrompts.map((item, index) => {
            return (
                <div onClick={()=>loadPrompt(item)} className='recent_entries'>
                <img src={assets.message_icon} alt="Message Icon" />
                <p>{item.slice(0, 18)} ...</p>
            </div>
            )
           })}
           </div>
            :null}
        </div>
        <div className="bottom">
            <div className="option_list">
                <div className="option recent_entries">
                    <img src={assets.question_icon} alt="Help Icon" />
                    {extended?<p>Help</p>:null}
                </div>
                <div className="option recent_entries">
                    <img src={assets.history_icon} alt="Activity Icon" />
                    {extended?<p>Activity</p>:null}
                </div>
                <div className="option recent_entries">
                    <img src={assets.setting_icon} alt="Setting Icon" />
                    {extended?<p>Settings</p>:null}
                </div>
            </div>
        </div>

    </div>
  )
}

export default Sidebar