import { Component } from "react";
import "./index.css";
const images = {
  heads: "https://assets.ccbp.in/frontend/react-js/heads-img.png",
  tails: "https://assets.ccbp.in/frontend/react-js/tails-img.png",
};

class CoinTossGame extends Component {
  state = {
    headScore: 0,
    tailScore: 0,
    coinImage: images.heads,
  };
  onToss = () => {
    const randomToss = Math.floor(Math.random() * 2);
    if (randomToss === 0) {
      this.setState((prev) => {
        return {
          coinImage: images.heads,
          headScore: prev.headScore + 1,
        };
      });
    } else {
      this.setState((prev) => {
        return { coinImage: images.tails, tailScore: prev.tailScore + 1 };
      });
    }
  };
  render() {
    const { headScore, tailScore, coinImage } = this.state;
    const totalScore = headScore + tailScore;
    return (
      <div className="container">
        <div className="game-card">
          <h1 className="game-title">Coin Toss Game</h1>
          <p className="game-sub-title">Head (or) Tails</p>
          <img src={coinImage} alt="head" className="img" />
          <button type="button" className="toss-btn" onClick={this.onToss}>
            Coin Toss
          </button>
          <div className="game-score-card">
            <span>Total : {totalScore}</span>
            <span>Head : {headScore}</span>
            <span>Toss : {tailScore}</span>
          </div>
        </div>
      </div>
    );
  }
}
export default CoinTossGame;
