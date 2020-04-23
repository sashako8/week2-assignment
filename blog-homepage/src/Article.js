import React from 'react';
import PropTypes from 'prop-types';
import AuthorInfo from './AuthorInfo.js';
import Card, { CardText } from 'react-bootstrap/Card';

class Article extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        articleObj: PropTypes.shape({
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            hasAudioAvailable: PropTypes.bool.isRequired,
            memberPreview: PropTypes.bool.isRequired
            })
    }

    authorInfo = (articles) => articles.map(article => <AuthorInfo article={article} />)

    render() {
        const { article } = this.props;
        return (
        <a href={article.link}> 
        <Card class="card" >
            <Card.Img class="image" src={article.image} />
            {article.hasAudioAvailable ? <Card.Text>Audio Available</Card.Text> : null}
            {article.memberPreview ? <Card.Text>Member Preview</Card.Text> : null}
            <Card.Title class="title">{(article.title)}</Card.Title> 
            <Card.Text class="description">{(article.description)}</Card.Text>
            <AuthorInfo article={article} />
        </Card>
    </a>
        )
    }
}

export default Article;