import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecastDay">Thursday</div>
            <div className="icon">
              <WeatherIcon code="01d" size={36} />
            </div>
            <div className="WeatherForecastTemperatures">
              <span className="WeatherForecastTemperaturesMax">19</span>
              <span className="WeatherForecastTemperaturesMin">10</span>
            </div>
          </div>
        </div>
      </div>
    );
}