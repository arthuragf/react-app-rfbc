const Card = () => {
    return (
        <div className="card" role="region" aria-labelledby="google-title">
            <img
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                className="card-img"
                alt="Google logo"
                width="92"
                height="30"
                loading="lazy"
            />
            <h2 className="card-title" id="google-title">Google</h2>
            <p className="card-txt">The most popular search engine worldwide. Fast, accurate, and powered by cutting-edge AI.</p>
            <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="visit-button"
                aria-label="Visit Google Search"
            >
                Visit Search
            </a>
        </div>
    );
};

export default Card;
