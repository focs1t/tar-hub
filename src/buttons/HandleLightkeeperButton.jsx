import React from 'react';

const HandleLightkeeperButton = ({ onLightkeeperClick, lightkeeperQuests }) => {
  return (
    <>
      <button onClick={onLightkeeperClick}>Вывести полные квесты для смотрителя</button>
      {lightkeeperQuests.map((quest) => (
        <div key={quest.id}>
          <h3>{quest.content}</h3>
          <p>{quest.description}</p>
          <img src={quest.image} alt="Картинка квеста" />
        </div>
      ))}
    </>
  );
};

export default HandleLightkeeperButton;
