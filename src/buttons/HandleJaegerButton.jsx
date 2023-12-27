import React from 'react';

const HandleJaegerButton = ({ onJaegerClick, jaegerQuests }) => {
  return (
    <>
      <button onClick={onJaegerClick}>Вывести полные квесты для егеря</button>
      {jaegerQuests.map((quest) => (
        <div key={quest.id}>
          <h3>{quest.content}</h3>
          <p>{quest.description}</p>
          <img src={quest.image} alt="Картинка квеста" />
        </div>
      ))}
    </>
  );
};

export default HandleJaegerButton;