export default function AnswerView({ selected, onBack }) {
  return (
    <div className="assistant-answer-view">
      <div className="assistant-bubble assistant-bubble-user">
        <span>Question:</span>
        <p>{selected.question}</p>
      </div>

      <div className="assistant-bubble assistant-bubble-ai">
        <span>AI Assistant:</span>
        <p>{selected.answer}</p>
      </div>

      <button type="button" className="assistant-back-button" onClick={onBack}>
        Back to questions
      </button>
    </div>
  )
}
