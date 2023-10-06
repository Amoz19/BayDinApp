
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import QuestionPage from './components/QuestionsPage'
import PickRandomNumber from './components/PickRandomNumber'
import ResultPage from './components/ResultPage'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuestionPage />} />
          <Route path="/randomNumber" element={<PickRandomNumber />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </BrowserRouter >

    </>

  )
}

export default App
