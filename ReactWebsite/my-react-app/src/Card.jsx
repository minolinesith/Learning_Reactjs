import profilePic from './assets/me.jpg'

function Card() {
    return (
        <div className="card">
            <img className="card-img" src={profilePic} alt="profile picture" width="240px" height="300px"></img>
            <h2 className="card-title">Minoli</h2>
            <p className="card-title">I am a final year undergraduate at IIT.
                <br></br>I have worked as an Associate Technical Consultant.</p>
        </div>
    );
}

export default Card