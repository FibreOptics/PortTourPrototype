import React, { Component } from "react";
import "./css/portfolio.scss";
import EachArt from "./each-art";

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      portfolios: [
        {
          title: "Paoay Church",
          imageUrl:
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f00f95b1-b9c6-4b5f-aaa7-6efe4ad165ed/d4h2e13-2ebd5b64-47ca-4de4-aff4-173bc1624cf9.jpg/v1/fill/w_1280,h_768,q_75,strp/paoay_church_by_darkcloud013_d4h2e13-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvZjAwZjk1YjEtYjljNi00YjVmLWFhYTctNmVmZTRhZDE2NWVkXC9kNGgyZTEzLTJlYmQ1YjY0LTQ3Y2EtNGRlNC1hZmY0LTE3M2JjMTYyNGNmOS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.-ebw23mHoYsl_hmqlhLWiPKmNYy7eJsgNnYqRtlW7N8",
          id: 1
        },
        {
          title: "Life Tree",
          imageUrl:
            "http://designm.ag/wp-content/uploads/2012/06/CICAE02_thumb.jpg",
          id: 2
        },
        {
          title: "Amber Citadel",
          imageUrl:
            "http://designm.ag/wp-content/uploads/2012/06/CICAE31_thumb.jpg",
          id: 3
        },
        {
          title: "Black Balloon",
          imageUrl:
            "http://designm.ag/wp-content/uploads/2012/06/CICAE10_thumb.jpg",
          id: 4
        },
        {
          title: "Facing Mortality",
          imageUrl:
            "http://designm.ag/wp-content/uploads/2012/06/CICAE08_thumb.jpg",
          id: 4
        }
      ]
    };
  }
  render() {
    return (
      <div className="portfolio">
        {this.state.portfolios.map(({ id, title, imageUrl }) => {
          console.log(imageUrl);
          return <EachArt key={id} title={title} imgUrl={imageUrl} />;
        })}
      </div>
    );
  }
}

export default Portfolio;
