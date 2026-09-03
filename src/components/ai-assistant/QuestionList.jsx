export default function QuestionList({ questions, onSelect }) {
  return (
    <div className="assistant-question-list" role="list">
      {questions.map((item, index) => (
        <button
          key={`${item.question}-${index}`}
          type="button"
          className="assistant-question-item"
          onClick={() => onSelect(item)}
        >
          {item.question}
        </button>
      ))}
    </div>
  )
}
