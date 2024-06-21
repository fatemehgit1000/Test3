import React, { Component } from "react";
import Food from "./Food";
import '../styles/foods.css';
import '../styles/food.css';
import f1 from '../images/f1.png';
import f2 from '../images/f2.jpg';
import f3 from '../images/f3.png';
import f4 from '../images/f4.png';

class Foods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heartColors: {
        Product_1: 'red',
        Product_2: 'red',
        Product_3: 'red',
        Product_4: 'red',
      }
    };
  }

  changeColor = (title) => {
    const { heartColors } = this.state;
    const currentColor = heartColors[title];

    this.setState(prevState => ({
      heartColors: {
        ...prevState.heartColors,
        [title]: currentColor === 'red' ? 'white' : 'red',
      }
    }));
  };

  render() {
    const { heartColors } = this.state;

    return (
      <div className="foods-container">
        <Food img={f1} title="Product_1">
          <mark className='mark'>230$</mark><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. PerFerendis accusamus autem totam ut expedita! Incidunt.
          <Heart heartColor={heartColors.Product_1} changeColor={() => this.changeColor('Product_1')} />
        </Food>

        <Food img={f2} title="Product_2">
          <mark className='mark'>410$</mark><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. PerFerendis.
          <Heart heartColor={heartColors.Product_2} changeColor={() => this.changeColor('Product_2')} />
        </Food>

        <Food img={f3} title="Product_3">
          <mark className='mark'>320$</mark><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. PerFerendis accusamus
          <Heart heartColor={heartColors.Product_3} changeColor={() => this.changeColor('Product_3')} />
        </Food>

        <Food img={f4} title="Product_4">
          <mark className='mark'>75$</mark><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. PerFerendis accusamus Lorem ipsum dolor sit amet consecteur.
          <Heart heartColor={heartColors.Product_4} changeColor={() => this.changeColor('Product_4')} />
        </Food>
      </div>
    );
  }
}

class Heart extends Component {
  render() {
    const { heartColor, changeColor } = this.props;

    return (
      <h1
        style={{ color: heartColor, transition: 'color 0.3s', textAlign: "center", cursor: 'pointer' }}
        onClick={changeColor}
      >
        &hearts;
      </h1>
    );
  }
}





export default Foods;