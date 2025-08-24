import { Student } from '@/types/student'
import { ExternalLink } from 'lucide-react'

interface StudentCardProps {
  student: Student
}

export function StudentCard({ student }: StudentCardProps) {
  return (
    <div className="group relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-neutral-200/50 dark:hover:shadow-neutral-900/50 hover:-translate-y-1">
      <div className="flex flex-col h-full">
        <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-4">
          {student.name}
        </h3>
        
        <div className="mt-auto">
          <a
            href={student.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 font-mono text-sm transition-colors duration-200 group-hover:translate-x-1 break-all"
            title={student.website}
          >
            <span className="truncate">{student.website.replace(/^https?:\/\//, '')}</span>
            <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0" />
          </a>
        </div>
      </div>
    </div>
  )
}