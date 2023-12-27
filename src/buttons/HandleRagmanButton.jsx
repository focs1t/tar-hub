import React from 'react';

const HandleRagmanButton = ({ onRagmanClick, ragmanQuests }) => {
  return (
    <>
      <button onClick={onRagmanClick}>Вывести полные квесты для механик</button>
      {ragmanQuests.map((quest) => (
        <div key={quest.id}>
          <h3>{quest.content}</h3>
          <p>{quest.description}</p>
          <img src={quest.image} alt="Картинка квеста" />
        </div>
      ))}
    </>
  );
};

export default HandleRagmanButton;
