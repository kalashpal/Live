import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description,imageUrl,newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" >
          <div className="card-body">
            <img src={!imageUrl?"https://images.hindustantimes.com/tech/img/2023/08/04/1600x900/felix-fischer-1m0BBZpeSUs-unsplash_1689268741940_1691123984549.jpg":imageUrl} className="card-img-top" alt="..." />
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
