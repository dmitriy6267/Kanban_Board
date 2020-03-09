import React from 'react';

import './style.css';

const Details = ({ id, showDetails }) => {
    const storageData = localStorage.getItem(`${id}`) !== null ? JSON.parse(localStorage.getItem(`${id}`)) : [];

  return (

    <div className="details">
      <span className="details__close" onClick={showDetails}/>
      <ul className="details__list">
        {storageData.map((item) => {
          return (
            <div key={item}>
              <h1 className="details__header">{item}</h1>
              <p className="details__text">
                Это был темный лес, издали казавшийся
                непроходимым. Там Пахапиль охотился, глушил рыбу,
                спал на еловых ветках. Короче – жил, пока русские
                не выгнали оккупантов. А когда немцы ушли, Пахапиль
                вернулся. Он появился в Раквере, где советский
                капитан наградил его медалью. Медаль была украшена
                четырьмя непонятными словами, фигурой и восклицательным
                знаком.
              </p>
              <p className="details__text">Task created: <b>{JSON.parse(localStorage.getItem(`${item}`))}</b></p>
            </div>)
              })}
      </ul>
    </div>


  )
};

export default Details;
