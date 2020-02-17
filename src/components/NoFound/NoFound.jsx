import React from "react";
import noFound from "../../utils/images/noFound.png";

export default function NoFound() {
  return (
    <div className="notFound">
      <img src={noFound} alt="Not Found" />
    </div>
  );
}
