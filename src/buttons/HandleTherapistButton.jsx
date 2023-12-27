import React from 'react';

const HandleTherapistButton = ({ onTherapistClick, therapistQuests }) => {
  return (
    <>
      <button onClick={onTherapistClick}>Вывести полные квесты для терапевта</button>
      {therapistQuests.map((quest) => (
        <div key={quest.id}>
          <h3>{quest.content}</h3>
          <p>{quest.description}</p>
          <img src={quest.image} alt="Картинка квеста" />
        </div>
      ))}
    </>
  );
};

export default HandleTherapistButton;
