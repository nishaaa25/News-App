import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, url, img, source, author, publishedAt } = this.props;
    let d = new Date(publishedAt);
    d = d.toLocaleDateString();
    return (
      <div
        className="card p-2 mb-5"
        style={{ width: "24rem", height: "520px" }}>
        <span style={{right:"0px"}}className="position-absolute top-0 translate-middle badge rounded-pill bg-warning">{source}</span>
        <img
          src={img}
          style={{ height: "180px" }}
          className="card-img-top"
          alt="..."
        />
        <div
          className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-body-secondary">Last updated by {!author?"Unknown":author} on {d}</small></p>
        </div>

        <a href={url} className="btn btn-sm btn-primary">
          Read more
        </a>
      </div>
    );
  }
}

export default NewsItem;
