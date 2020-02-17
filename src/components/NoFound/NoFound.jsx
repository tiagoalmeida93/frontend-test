import React from "react";
import noFound from "../../utils/images/noFound.png";

// import { Container } from './styles';

export default function NoFound() {
  return (
    <div className="notFound">
      <img src={noFound} alt="Not Found" />
    </div>
  );
}
