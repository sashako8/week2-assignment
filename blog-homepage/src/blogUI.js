import React from 'react';
import './blogUI.css';
import missedArticles from './missed-articles.json';
import yourArticles from './your-articles.json';
import Article from './Article.js';

class BlogUI extends React.Component {
    constructor(props) {
        super(props);
    }

    createCards = (articles) => articles.map(article => <Article article={article} />);

    // createCards2 = missedArticles.map(article =>
    //         <div>
    //         <img class="image" src={article.image} />
    //         <h1>{(article.title)}</h1>
    //             <p>{(article.description)}</p>
    //             <img src={article.author.image} />
    //             <p>{(article.author.name)}</p>
    //             <p>{(article.postedDate)}</p>
    //             <p>{(article.minutesToRead)} min read</p>
    //         </div>
    //     )

    render() {
        return (
            <div>
                <h1>For you</h1>
                <hr></hr>
                <br></br>
                <div class="yourArticles">
                {this.createCards(yourArticles)};
                </div>
                <h1>In case you missed it</h1>
                <hr></hr>
                <br></br>
                <div class="missedArticles">
                {this.createCards(missedArticles)};
                </div>
            </div>
        )
    }
}

export default BlogUI;