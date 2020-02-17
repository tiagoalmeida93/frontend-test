import React from "react";
import history from "../../services/history";

// import { Container } from './styles';

export default function HeaderDetail(props) {
  return (
    <section className="headerDetail">
      <form className="headerDetailForm">
        <button type="submit" onClick={history.push("/")}>
          Back
        </button>
      </form>
      <div className="headerDetailInfo">
        <h1>Details</h1>
      </div>
    </section>
  );
}
