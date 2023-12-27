import React from 'react';

const HandleFenceButton = ({ onFenceClick, fenceQuests }) => {
  return (
    <>
      <button onClick={onFenceClick}>Вывести полные квесты для лыжника</button>
      {fenceQuests.map((quest) => (
        <div key={quest.id}>
          <h3>{quest.content}</h3>
          <p>{quest.description}</p>
          <img src={quest.image} alt="Картинка квеста" />
        </div>
      ))}
    </>
  );
};

export default HandleFenceButton;
