
export function Button({ children, spinner, type, className = "bg-green-600 dark:bg-green-600 hover:bg-green-500 text-white px-4 py-3 rounded-xl mt-4 inline-block focus:ring-4 focus:ring-yellow-200 outline-none transition-all duration-150 ease-in-out" }) {
  return (
    <button
      type={type}
      className={className + (spinner ? " flex items-center" : "")}
    >
      {spinner && (
        <div className="flex gap-2 items-center">
          <svg className="animate-spin -ml-1 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {children}ing
        </div>
      )}
      {!spinner && children}
    </button>
  )
}