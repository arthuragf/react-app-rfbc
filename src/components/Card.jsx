import PropTypes from 'prop-types';

const Card = ({ title, img_src, description, url }) => {
    return (
        <div className="card" role="region" aria-labelledby="card-title">
            <img
                src={img_src}
                alt={`${title} logo`}
                className="card-img"
                width="92"
                height="30"
                loading="lazy"
            />
            <h2 className="card-title" id="card-title">{title}</h2>
            <p className="card-txt">{description}</p>
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-button"
                aria-label={`Visit ${title} Search`}
            >
                Visit Search
            </a>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    img_src: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default Card;
