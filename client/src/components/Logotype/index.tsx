import React from "react";
import cn from "classnames";

import { AiOutlineCrown } from "react-icons/ai";
import { ILogotypeProps } from "@app/components/Logotype/ILogotypeProps";
import "./_logotype.scss";

const Logotype: React.FC<ILogotypeProps> = ({ className, collapsed }) => (
  <div className={cn("logotype", className)}>
    <AiOutlineCrown className="logotype__icon" />
    {!collapsed && (
      <div className="logotype__info">
        <h3>Krona</h3>
        <small>Web system app</small>
      </div>
    )}
  </div>
);

export default Logotype;
