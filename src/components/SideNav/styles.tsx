import styled from "styled-components";

export const SSideNavWrapper = styled.div`
  width: 250px;
  background-color: #333;
  color: #fff;
  height: 100vh;
  padding: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SUnorderedList = styled.ul`
  list-style-type: none;
    padding: 0;
    `

export const SListItem = styled.li`
  margin-bottom: 10px;

  a {
    color: #fff;
    text-decoration: none;
  }
`;
