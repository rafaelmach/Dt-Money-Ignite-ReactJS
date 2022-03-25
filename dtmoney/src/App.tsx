import { Dashboard } from "./components/Dashboard/Dashboard"
import { Header } from "./components/Header/Header"
import { GlobalStyle } from "./styles/global"

export const App = () => {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  )
}
