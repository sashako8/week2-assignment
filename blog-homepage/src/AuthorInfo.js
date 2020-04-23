import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const bookmark = <FontAwesomeIcon icon={faBookmark} />

class AuthorInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        articleObj: PropTypes.shape({
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            postedDate: PropTypes.string.isRequired,
            minutesToRead: PropTypes.string.isRequired
            })
    }
    
    render() {
        const { article } = this.props;

        return (
            <div>
                <img class="author-image" src={article.author.image} />
                <p class="author-name">{(article.author.name)}</p>
                <p class="date">{moment(article.postedDate).format("MMM D")} {(article.minutesToRead)} min read {bookmark}</p>
            </div>
        )
    }
}

export default AuthorInfo;