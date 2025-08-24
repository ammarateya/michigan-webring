'use client'

interface SearchFiltersProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  selectedYear: string
  setSelectedYear: (year: string) => void
  availableYears: string[]
}

export function SearchFilters({
  searchTerm,
  setSearchTerm,
}: SearchFiltersProps) {
  return (
    <div className="mb-12 relative group max-w-md mx-auto">
      {/* Clean, minimal search input */}
      <input
        type="text"
        placeholder="Search by site/year"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 bg-transparent border-b-2 border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:border-maize dark:focus:border-maize transition-all duration-300 text-center text-lg font-light tracking-wide"
      />
      
      {/* Subtle underline animation */}
      <div className="w-0 group-focus-within:w-full h-0.5 bg-gradient-to-r from-maize to-yellow-400 mx-auto mt-1 transition-all duration-500 rounded-full"></div>
    </div>
  )
}