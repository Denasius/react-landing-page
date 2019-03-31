import React, { Component } from 'react'
import MyButton from '../utils/MyButton'

import Zoom from 'react-reveal/Zoom'

class Pricing extends Component {

  state = {
    prices: [100,200,300],
    position: ['Balcony', 'Medium', 'Star'],
    desc: [
      'It is a long established fact that a reader will be distracted by the readable content of a page when.',
      'looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.',
      'normal distribution of letters, as opposed to using Content here, content here, making it look like.'
    ],
    linkTo: ['javascript:void(0)', 'javascript:void(0)', 'javascript:void(0)'],
    delay: [500,0,500]
  }

  showBoxes = () => {
    return (
      this.state.prices.map((box, iteration) => {
        return (
          <Zoom delay={this.state.delay[iteration]} key={iteration}>
            <div className="pricing_item">
              <div className="pricing_inner_wrapper">
                <div className="pricing_title">
                  <span>${this.state.prices[iteration]}</span>
                  <span>{this.state.position[iteration]}</span>
                </div>
                <div className="pricing_description">
                  {this.state.desc[iteration]}
                </div>
                <div className="pricing_buttons">
                  <MyButton 
                    text="Purchase"
                    bck="#ffa800"
                    color="#ffffff"
                    link={this.state.linkTo[iteration]}
                  />
                </div>
              </div>
            </div>
          </Zoom>
        )
      })
    )
  }

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">
            {this.showBoxes()}
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;