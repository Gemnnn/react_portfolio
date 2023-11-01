import myPhoto1 from '../images/photo1.jpg';

function Main() {
    return(
        <body>
        <div class='main'>
            <div class='headline'>
                <h1>Junior Developer</h1>
                <h1>& Coffee Enthusiast.</h1>
            </div>
            <div className='mainbody'>
                <div class="body1">
                    <img src={myPhoto1} alt="My Image" />
                </div>
                <div class="body2">
                    <h3>"Committed Developer with a Vision for Leadership and Continuous Growth"</h3>
                    <p>
                        I'm a dedicated Junior developer with an unwavering commitment to realizing my goal of becoming a creative leader in the field. I believe hard work and a passion for innovation are the cornerstones of success. I am ready to put my efforts into my new journey that showcases my relentless pursuit of excellence, not just in development but also in exploring the boundless possibilities that an open-minded approach to technology and creativity can offer.
                    </p>
                </div>
            </div>
        </div>
        </body>
    )
}

export default Main;