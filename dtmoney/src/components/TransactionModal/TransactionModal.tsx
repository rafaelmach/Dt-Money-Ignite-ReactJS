import { FormEvent, useState } from "react"
import { useTransactions } from "../../hooks/useTransactions"
import { api } from "../../services/api"
import Modal from "react-modal"
import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"

import { Container, TransactionTypeContainer, RadioBox } from "./styles"

interface TransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

// A estilização do Modal ficou no global.ts mas eu poderia colocar também
// no prórpio componente TransactionModal

export const TransactionModal = ({
  isOpen,
  onRequestClose,
}: TransactionModalProps) => {
  //  Preciso armazenar qual botão a pessoa clicou ...
  //  Sempre que eu preciso armazenar uma informação, através de
  //  um input do usuário, de um clique ou algo parecido ...
  //  -- Sempre vou utilizar ESTADO

  const { createTransaction } = useTransactions()

  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState("")
  const [type, setType] = useState("deposit")

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault()

    await createTransaction({
      title,
      amount,
      category,
      type,
    })

    setTitle("")
    setAmount(0)
    setCategory("")
    setType("deposit")
    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar o Modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            // className={type === "deposit" ? "active" : ""}
            // Acima, código para saber se o botão foi clicado
            onClick={() => {
              setType("deposit")
            }}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {
              setType("withdraw")
            }}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
