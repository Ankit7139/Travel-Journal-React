import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="cards">
        <img
          src={props.item.imageUrl}
          className="card--image"
          alt="travel image"
        ></img>
        <div className="card--details">
          <div className="card--location">
            <img
              src="../Images/location.png"
              className="card--location--image"
              alt="location pin"
            ></img>
            <span className="card--location--name">{props.item.location}</span>
            <span className="card--location--link">
              <a href={props.item.googleMapsUrl}>View on Google Maps</a>
            </span>
          </div>
          <div className="card--title">{props.item.title}</div>
          <div className="card--duration">
            {props.item.startDate} - {props.item.endDate}
          </div>
          <div className="card--description">{props.item.description}</div>
        </div>
      </div>
      <div className="card--line"></div>
    </>
  );
}
