import soundcloud from '../soundcloud.png';

const Home = () => {
    return ( 
        <div className="frontpage">
            <div id="navbar">
                <div className="logo">
                    <img src={soundcloud} alt="logo" />
                    {/* <h1>SOUNDCLOUD</h1> */}
                </div>
                <div className="connectors">
                    <button className='si'>Sign in</button>
                    <button className='ca'>Create account</button>
                    <button className='fc'>For creators</button>
            </div>
                </div> 
            <div className="content">
             <h2>CONNECT ON SOUND CLOUD</h2>
            <p>Discover, stream, and share a constantly expanding mix of music from emerging and major artists around the world.</p>
            <button className="sign-up">Sign up for free</button>
            </div>
        </div>
  
     );
}
 
export default Home;