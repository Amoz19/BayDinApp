
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import QuestionPage from './components/QuestionsPage'
import PickRandomNumber from './components/PickRandomNumber'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuestionPage />} />
          <Route path="/randomNumber" element={<PickRandomNumber />} />
        </Routes>
      </BrowserRouter >

    </>

  )
}

export default App
