import { Container } from "./styles"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"

export const Summary = () => {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Ícone de Entradas" />
        </header>
        <strong>R$ 1000</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Ícone de Entradas" />
        </header>
        <strong>- R$ 507</strong>
      </div>
      <div className="total-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Ícone de Entradas" />
        </header>
        <strong>R$ 493</strong>
      </div>
    </Container>
  )
}
