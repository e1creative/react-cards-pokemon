import React from "react";

import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

import {useAxios} from './hooks'

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function PlayingCardList() {
  const baseUrl = "https://deckofcardsapi.com/api/deck/new/draw/"
  // JMT: pass our baseUrl to useAxios
  const [cards, addCard] = useAxios(baseUrl);
  // const [cards, setCards] = useState([]);
  // const addCard = async () => {
  //   const response = await axios.get(
  //     "https://deckofcardsapi.com/api/deck/new/draw/"
  //   );
  //   setCards(cards => [...cards, { ...response.data, id: uuid() }]);
  // };
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

PlayingCardList.defaultProps = {};

export default PlayingCardList;

// ERROR FOUND: component was name CardTable.  changed all to be PlayingCardList