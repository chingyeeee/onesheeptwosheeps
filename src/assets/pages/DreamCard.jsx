import { useState, lazy } from "react";
import Rules from "../components/Rules";

const DreamCard = () => {
  const [showRules, setShowRules] = useState(true);

  return <>{showRules ? <Rules /> : ""}</>;
};

export default DreamCard;
