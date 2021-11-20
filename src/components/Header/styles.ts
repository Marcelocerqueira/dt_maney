import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue-ligth);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: auto;

  padding: 0 1rem 16rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
