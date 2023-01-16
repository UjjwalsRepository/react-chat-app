import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import Login from './components/Login';

import './App.css';

const App=()=>{
   //if(!localStorage.getItem('userName')) return <Login/>
    return(
        <ChatEngine
        height="100vh"
        projectID="7f528c4b-9067-408f-9073-11f87bd338e8"
        userName="User2"
        userSecret="123456" 
        // userName={localStorage.getItem('userName')}
        // userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        />
    );
}
export default App;