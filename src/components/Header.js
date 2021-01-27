import React from "react";

import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";

const Header = () => {
  return (
    <Header className="header">
      <h1>
        <Icon icon={locationIcon} />
        Wildfire Tracker (Powered by NASA)
      </h1>
    </Header>
  );
};

export default Header;
