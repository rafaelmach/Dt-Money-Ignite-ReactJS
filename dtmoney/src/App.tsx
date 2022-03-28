import { Dashboard } from "./components/Dashboard/Dashboard"
import { Header } from "./components/Header/Header"
import Modal from "react-modal"
import { GlobalStyle } from "./styles/global"
import { useState } from "react"
import { TransactionModal } from "./components/TransactionModal/TransactionModal"

Modal.setAppElement("#root")

export const App = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  // Sempre que uma função inicia com a palavra handle ... 
  // É uma função que o usuário clica em alguma coisa / executa alguma coisa
  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true)
  }

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false)
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <TransactionModal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal} />
     
      <GlobalStyle />
    </>
  )
}
