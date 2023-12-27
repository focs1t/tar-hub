import React from 'react';

const HandlePeaceskeeperButton = ({ onPeaceskeeperClick, peaceskeeperQuests }) => {
  return (
    <>
      <button onClick={onPeaceskeeperClick}>Вывести полные квесты для миротвореца</button>
      {peaceskeeperQuests.map((quest) => (
        <div key={quest.id}>
          <h3>{quest.content}</h3>
          <p>{quest.description}</p>
          <img src={quest.image} alt="Картинка квеста" />
        </div>
      ))}
    </>
  );
};

export default HandlePeaceskeeperButton;
