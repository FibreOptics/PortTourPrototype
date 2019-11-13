import React, { Component } from "react";
import "./portfolio.scss";
import EachArt from "./each-art";

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      portfolios: [
        {
          title: "1",
          imageUrl:
            "http://designm.ag/wp-content/uploads/2012/06/CICAE03_thumb.jpg",
          id: 1
        },
        {
          title: "2",
          imageUrl:
            "http://designm.ag/wp-content/uploads/2012/06/CICAE02_thumb.jpg",
          id: 2
        },
        {
          title: "3",
          imageUrl:
            "http://designm.ag/wp-content/uploads/2012/06/CICAE07_thumb.jpg",
          id: 3
        },
        {
          title: "4",
          imageUrl:
            "http://designm.ag/wp-content/uploads/2012/06/CICAE10_thumb.jpg",
          id: 4
        },
        {
          title: "4",
          imageUrl:
            "http://designm.ag/wp-content/uploads/2012/06/CICAE10_thumb.jpg",
          id: 4
        }
      ]
    };
  }
  render() {
    return (
      <div className='portfolio'>
        {this.state.portfolios.map(({ id, title, imageUrl }) => {
          console.log(imageUrl);
          return <EachArt key={id} title={title} imgUrl={imageUrl} />;
        })}
      </div>
    );
  }
}

export default Portfolio;
