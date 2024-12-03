import { createContext } from "react";

export const GlobalContext = createContext(null);


export default function GlobalState({children}){

    const [formData, setFormData]= useState({
      type:'expense',
      amount: 0,
      description : ''
    })

    const [value,setValue] = useState('expense')
    const [totalExpense, setTotalExpense] = useState(0);
    const [totalIncome, setTotalIncome]= useState(0)
    const [allTransaction, setAllTransactions] =useState([])

    function handleFormSubmit(currentFormData){
       if(!currentFormData.description || !currentFormData.amount) return;
       setAllTransactions([...allTransaction],{...currentFormData,id: Date.now()})
    }

  return <GlobalContext.Provider 
  value={ {
    formData, setFormData,
    totalExpense, setTotalExpense,
    totalIncome,setTotalIncome,
    value,setValue,
    allTransaction, setAllTransactions,
    handleFormSubmit
  }}
  >{children}</GlobalContext.Provider>
}