interface StatsProps {
  totalCount: number
  filteredCount: number
}

export function Stats({ totalCount, filteredCount }: StatsProps) {
  return (
    <div className="flex justify-center gap-8 mb-8">
      <div className="text-center">
        <div className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
          {totalCount}
        </div>
        <div className="text-sm text-neutral-600 dark:text-neutral-400">
          Total Students
        </div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
          {filteredCount}
        </div>
        <div className="text-sm text-neutral-600 dark:text-neutral-400">
          Showing
        </div>
      </div>
    </div>
  )
}