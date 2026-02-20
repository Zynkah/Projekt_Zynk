import styled from "styled-components";

export const SPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 100%;
  box-sizing: border-box;
  text-align: left;
  overflow-y: auto;
  scrollbar-width: none;
  padding-bottom: 6rem;

  &::-webkit-scrollbar {
    display: none;
  }

  h2 {
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  ul {
    text-align: left;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 1rem;
  }

  th,
  td {
    border: 1px solid var(--blue);
    padding: 0.5rem;
    text-align: left;
  }

  th {
    background-color: var(--blue);
  }

  .code-example {
    display: flex;
    justify-content: center;
  }
`;

export const SRecommendedUsage = styled.div`
  //   padding-bottom: 2rem;

  pre {
    background-color: #1a1a1a;
    padding: 1rem;
    border-radius: 6px;
    overflow-x: auto;
    text-wrap: wrap;
  }

  .two-space-indent {
    margin-left: 2ch;
  }

  .four-space-indent {
    margin-left: 4ch;
  }

  .six-space-indent {
    margin-left: 6ch;
  }

  .eight-space-indent {
    margin-left: 8ch;
  }
`;

export const SRedText = styled.span`
  color: var(--red);
`;

export const SOrangeText = styled.span`
  color: var(--peach);
`;

export const SBlueText = styled.span`
  color: var(--light-blue);
`;

export const SPurpleText = styled.span`
  color: var(--purple);
`;
