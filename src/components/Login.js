import React,{useState} from 'react'
import axios from 'axios';

const Login = () => {
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const [error, setError] = useState('');

    const handleSubmit=async (e)=>{
        e.preventDefault(); 

        const auth={'Project-ID':'a2f2dbd5-c8c6-45b5-a50f-3baf4aadd6ff','User-Name':userName, 'User-Secret':password}
    
        try{
           await axios.get('https://api.chatengine.io/chats',{headers:auth});
            localStorage.setItem('userName','userName');
            localStorage.setItem('password','password');
            
            window.location.reload();
        }catch(error){
            setError('Incorrect credentials.')
        }
    
    }
  return (
    <div className='wrapper'>
        <div className='form'>
            <h1 className='title'>Chat Application</h1>
              <form onSubmit={handleSubmit}>
                  <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="input" placeholder="Username" required />
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                  <div align="center">
                      <button type="submit" className="button">
                          <span>Start chatting</span>
                      </button>
                  </div>
                  <h2 className='error'>{error}</h2>
              </form>
              
        </div>
    </div>
  )
}

export default Login