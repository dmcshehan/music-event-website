import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Button from "../utils/Button";

class Discount extends Component {
  state = {
    discount: 30,
    counter: 0
  };

  countTheDiscount() {
    let contDiscount = setInterval(() => {
      if (this.state.counter === this.state.discount) {
        clearInterval(contDiscount);
      } else {
        this.setState({
          ...this.state,
          counter: this.state.counter + 1
        });
      }
    }, 50);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.countTheDiscount()}>
            <div className="discount_porcentage">
              <span>{this.state.counter}%</span>
              <span>Off</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 20th June</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisici elit, sed
                eiusmod tempor incidunt ut labore et dolore magna aliqua. Magna
                pars studiorum, prodita quaerimus. Quae vero auctorem tractata
                ab fiducia dicuntur. Cum sociis natoque penatibus et magnis dis
                parturient. Quo usque tandem abutere, Catilina, patientia
                nostra?
              </p>
              <Button
                text="purchase Tickets"
                bck="#ffa800"
                color="#FFF"
                link="www.google.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
