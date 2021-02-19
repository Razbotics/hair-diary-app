import React from "react";
import "./Legends.css";

export default function Legends({ typeOfDay, size = "small" }) {
  switch (typeOfDay) {
    case "hair cut":
      return <HairCut size={size} />;
    case "protein treatment":
      return <ProteinTreatment size={size} />;
    case "hair color":
      return <HairColor size={size} />;
    case "deep conditioning":
      return <DeepConditioning size={size} />;
    case "clarifying":
      return <Clarifying size={size} />;
    default:
      return null;
  }
}

function HairCut({ size }) {
  return (
    <span
      className={"legend" + " " + size}
      style={{ backgroundColor: "rgb(244, 223, 235)" }}
    >
      Cu
    </span>
  );
}

function ProteinTreatment({ size }) {
  return (
    <span
      className={"legend" + " " + size}
      style={{ background: "rgb(221, 235, 241)" }}
    >
      Pr
    </span>
  );
}

function HairColor({ size }) {
  return (
    <span
      className={"legend" + " " + size}
      style={{ background: "rgb(244, 223, 235)" }}
    >
      HC
    </span>
  );
}

function DeepConditioning({ size }) {
  return (
    <span
      className={"legend" + " " + size}
      style={{ background: "rgb(221, 227, 234)" }}
    >
      DC
    </span>
  );
}

function Clarifying({ size }) {
  return (
    <span
      className={"legend" + " " + size}
      style={{ background: "rgb(251, 228, 228)" }}
    >
      C
    </span>
  );
}
