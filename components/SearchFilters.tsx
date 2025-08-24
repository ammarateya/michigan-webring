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
  selectedYear,
  setSelectedYear,
  availableYears
}: SearchFiltersProps) {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search by name or year (e.g., 'John' or '2025')..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-600 focus:border-transparent transition-all duration-200"
      />
    </div>
  )
}