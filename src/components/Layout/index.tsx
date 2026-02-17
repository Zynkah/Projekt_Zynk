import React from "react";
import WalletConnection from "../WalletConnection";
import GameDashboard from "../GameDashboard";
import {
  SCasionoApp,
  SAppHeader,
  SAppMain,
  SAppContainer,
  SAppAside,
} from "./styles";
import { SideNav } from "../SideNav";

const Layout: React.FC = () => {
  return (
    <SCasionoApp>
      <SAppHeader>
        <h1>Projekt Zynk</h1>
        <WalletConnection />
      </SAppHeader>

      <SAppContainer>
        <SAppAside>
          <SideNav />
        </SAppAside>
        <SAppMain>
          <GameDashboard />
        </SAppMain>
      </SAppContainer>
    </SCasionoApp>
  );
};

export default Layout;
