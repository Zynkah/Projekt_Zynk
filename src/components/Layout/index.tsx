import React from "react";
import WalletConnection from "../WalletConnection";
import {
  SCasinoApp,
  SAppHeader,
  SAppMain,
  SAppContainer,
  SAppAside,
} from "./styles";
import { SideNav } from "../SideNav";
import { PublicRoutes } from "../../Router";

const Layout: React.FC = () => {
  return (
    <SCasinoApp>
      <SAppHeader>
        <h1>Projekt Zynk</h1>
        <WalletConnection />
      </SAppHeader>

      <SAppContainer>
        <SAppAside>
          <SideNav />
        </SAppAside>
        <SAppMain>
          <PublicRoutes />
        </SAppMain>
      </SAppContainer>
    </SCasinoApp>
  );
};

export default Layout;
