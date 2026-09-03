import QuestionList from './QuestionList'
import AnswerView from './AnswerView'

export default function AssistantWindow({ isOpen, onClose, questions, selected, onSelect, onBack }) {
  if (!isOpen) return null

  return (
    <div className="assistant-window" role="dialog" aria-modal="false" aria-label="Gokul's AI Assistant">
      <div className="assistant-header">
        <div className="assistant-header-title">Gokul&apos;s AI Assistant</div>
        <button type="button" className="assistant-close" onClick={onClose} aria-label="Close assistant">
          ×
        </button>
      </div>

      <div className="assistant-body">
        <div className="assistant-intro">
          Hello! What would you like to know about Gokul?
        </div>

        {!selected ? (
          <QuestionList questions={questions} onSelect={onSelect} />
        ) : (
          <AnswerView selected={selected} onBack={onBack} />
        )}
      </div>
    </div>
  )
}
