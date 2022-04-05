import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "./services/api"

interface TransactionType {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

// interface TransactionInput {
//   title: string
//   amount: number
//   type: string
//   category: string
// }

// Tipagem com Omit ... O TransactionInput vai herdar todos os campos do interface - TransactionType, menos
// menos os campos que eu informar após a vírgula ... nesse exemplo id e createdAt.
type TransactionInput = Omit<TransactionType, "id" | "createdAt">

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
  transactions: TransactionType[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
)

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<TransactionType[]>([])

  // console.log("TRANSACTIONS", transactions)

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions))
  }, [])

  const createTransaction = async (transactionInput: TransactionInput) => {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    })

    const { transaction } = response.data
    // Dessa forma também dá certo ... const transaction = response.data.transaction

    setTransactions([
      ...transactions,
      transaction,
      // Ou também daria certo ...transactions, response.data.transaction
      // sem precisar criar a variável transaction
    ])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}
