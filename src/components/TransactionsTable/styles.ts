import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1rem;

  table {
    width: 100%;
    border-radius: 0 0.5rem;

    th {
      color: var(--text-body);
      font-size: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 10.5rem;
    }
    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--sape);
      color: var(--text-body);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-titel);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
