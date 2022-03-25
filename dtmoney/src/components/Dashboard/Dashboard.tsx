import { Summary } from "../Summary/Summary"
import { TransactionsTable } from "../TransactionsTable/TransactionsTable"
import { Container } from "./styles"


export const Dashboard = () => {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
      </Container>
  )
}
