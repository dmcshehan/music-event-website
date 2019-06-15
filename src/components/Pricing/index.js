import React, { Component } from "react";
import Button from "../utils/Button";
import Zoom from "react-reveal/Zoom";

class Pricing extends Component {
  state = {
    prices: [
      {
        price: 100,
        position: "Balcony",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
        linkTo: "https://www.shehan.cloud"
      },
      {
        price: 150,
        position: "Medium",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
        linkTo: "https://www.shehan.cloud"
      },
      {
        price: 250,
        position: "Star",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
        linkTo: "https://www.shehan.cloud"
      }
    ],
    delays: [500, 0, 500]
  };

  showBoxes() {
    return this.state.prices.map((price, index) => (
      <Zoom key={price.price} delay={this.state.delays[index]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>{price.title}</span>
              <span>{price.position}</span>
            </div>
            <div className="pricing_description">{price.desc}</div>
            <div className="pricing_buttons">
              <Button
                text="Book Now"
                bck="#ffa800"
                color="#FFF"
                link={price.linkTo}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));
  }

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
