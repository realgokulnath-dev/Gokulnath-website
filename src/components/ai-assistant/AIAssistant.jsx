import { useState } from 'react'
import AssistantButton from './AssistantButton'
import AssistantWindow from './AssistantWindow'
import { assistantQuestions } from '../../data/assistantQuestions'

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
    setSelected(null)
  }

  const handleSelect = (item) => {
    setSelected(item)
  }

  const handleBack = () => {
    setSelected(null)
  }

  return (
    <>
      <AssistantWindow
        isOpen={isOpen}
        onClose={handleClose}
        questions={assistantQuestions}
        selected={selected}
        onSelect={handleSelect}
        onBack={handleBack}
      />

      <div className="assistant-floating-shell">
        <AssistantButton onClick={isOpen ? handleClose : handleOpen} isOpen={isOpen} />
      </div>
    </>
  )
}
