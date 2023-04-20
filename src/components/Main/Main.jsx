import React from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import "./Main.scss";
import team from "../../data/team";

const Main = () => {
  const EmployeeCardJSX = team.map((member) => {
    return <EmployeeCard name={member.name} role={member.role} />;
  });

  return <div className="main">{EmployeeCardJSX}</div>;
};

export default Main;
