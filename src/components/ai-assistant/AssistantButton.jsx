export default function AssistantButton({ onClick, isOpen }) {
  return (
    <button
      type="button"
      className={`assistant-fab ${isOpen ? 'is-open' : ''}`}
      onClick={onClick}
      aria-label={isOpen ? 'Close Gokul\'s AI Assistant' : 'Open Gokul\'s AI Assistant'}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M8 10.5c0-2.5 1.8-4.5 4-4.5s4 2 4 4.5v1.5c0 2.5-1.8 4.5-4 4.5s-4-2-4-4.5v-1.5Zm2.1 3.8h3.8M10 8h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M7 18.5C5 17.1 4 15.1 4 12.8A6.8 6.8 0 0 1 10.8 6h2.4A6.8 6.8 0 0 1 20 12.8c0 2.3-1 4.3-3 5.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </button>
  )
}
