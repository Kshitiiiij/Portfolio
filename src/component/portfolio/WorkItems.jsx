import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <a href={item.link}>
        <img src={item.image} alt="Item 1 image" className="work__img" />
        <h3 className="work__title">{item.title}</h3>
        <p className="work__desc">{item.desc}</p>
        <span  className="work__button">
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </span>
      </a>
    </div>
  );
};

export default WorkItems;
