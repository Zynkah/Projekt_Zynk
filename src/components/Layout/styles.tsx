import styled from "styled-components";

export const SCasinoApp = styled.div`
  min-height: 100vh;
  color: #fff;
`;

export const SAppHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);

  h1 {
    margin: 0;
    font-size: 2rem;
  }
`;

export const SAppContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  height: 100svh;
  gap: 10px;
  transition: gap 0.3s;
`;

export const SAppAside = styled.aside`
  width: 250px;
  min-width: 0;
  max-width: 100vw;
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: width;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SAppMain = styled.main`
  flex: 1 1 0%;
  min-width: 0;
  transition: margin 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;
