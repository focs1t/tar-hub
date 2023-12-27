import React from 'react';

const PraporQuestButton = ({ onPraporClick, praporQuests }) => {
  return (
    <div>
      <button onClick={onPraporClick}>Вывести полные квесты для прапора</button>
      {praporQuests.map((quest) => (
        <div key={quest.id}>
          <h3>{quest.content}</h3>
          <p>{quest.description}</p>
          <img src={quest.image} alt="Картинка квеста" />
        </div>
      ))}
    </div>
  );
};

export default PraporQuestButton;
