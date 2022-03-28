import Modal from "react-modal"
import { Container } from "./styles";

interface TransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void
}

// A estilização do Modal ficou no global.ts mas eu poderia colocar também
// no prórpio componente TransactionModal

export const TransactionModal = ({ isOpen, onRequestClose }: TransactionModalProps) => {
  return (
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
      <Container>
      <h2>Cadastrar transação</h2>

      <input 
        placeholder="Título"
      />
      <input 
        type="number"
        placeholder="Valor"
      />
      <input 
        placeholder="Categoria"
      />

      <button type="submit">
        Cadastrar
      </button>

      </Container>
    </Modal>
  )
}
