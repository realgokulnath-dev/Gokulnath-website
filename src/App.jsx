import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/pages/HomePage'
import DetailPage from './components/pages/DetailPage'
import AIAssistant from './components/ai-assistant/AIAssistant'
import CustomCursor from './components/common/CustomCursor'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/work/:slug" element={<DetailPage kind="project" />} />
        <Route path="/publication/:slug" element={<DetailPage kind="article" />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <AIAssistant />
      <CustomCursor />
    </BrowserRouter>
  )
}

export default App
