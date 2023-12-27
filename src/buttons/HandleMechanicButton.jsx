import React from 'react';

const HandleMechanicButton = ({ onMechanicClick, mechanicQuests }) => {
  return (
    <>
      <button onClick={onMechanicClick}>Вывести полные квесты для механик</button>
      {mechanicQuests.map((quest) => (
        <div key={quest.id}>
          <h3>{quest.content}</h3>
          <p>{quest.description}</p>
          <img src={quest.image} alt="Картинка квеста" />
        </div>
      ))}
    </>
  );
};

export default HandleMechanicButton;
