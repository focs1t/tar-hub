import React from 'react';

const HandleBayerButton = ({ onBayerClick, bayerQuests }) => {
  return (
    <>
      <button onClick={onBayerClick}>Вывести полные квесты для скупщика</button>
      {bayerQuests.map((quest) => (
        <div key={quest.id}>
          <h3>{quest.content}</h3>
          <p>{quest.description}</p>
          <img src={quest.image} alt="Картинка квеста" />
        </div>
      ))}
    </>
  );
};

export default HandleBayerButton;