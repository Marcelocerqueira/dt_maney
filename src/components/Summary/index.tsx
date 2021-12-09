import React, { useContext } from "react";
import inconeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionContext";

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const totalDeposits = transactions.reduce((acc, transaction) => {
    if (transaction.type === "deposit") {
      return acc + transaction.amount;
    }
    return acc;
  }, 0);

  return (
    <Container>
      <div>
        <header>
          <p>Entrada</p>
          <img src={inconeImg} alt="entrada" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saida</p>
          <img src={outcomeImg} alt="Saida" />
        </header>
        <strong>-R$500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}
