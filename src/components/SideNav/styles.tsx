import styled from "styled-components";

export const SSideNavWrapper = styled.div`
  width: 180px;
  background: var(--black);
  color: #fff;
  height: 100vh;
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SUnorderedList = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: left;
`;

export const SListItem = styled.li`
  margin-bottom: 10px;

  a {
    color: #fff;
    text-decoration: none;
  }
`;
