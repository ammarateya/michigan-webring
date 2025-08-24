import { Student } from '@/types/students'
import { ExternalLink } from 'lucide-react'

interface StudentCardProps {
  student: Student
  index: number
}

export function StudentCard({ student, index }: StudentCardProps) {
  return (
    <div 
      className="group relative p-4 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
      style={{
        animationDelay: `${index * 100}ms`,
        animationFillMode: 'both'
      }}
    >
      {/* Flowing background effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
        {/* Top-left flowing corner */}
        <div className="absolute top-0 left-0 w-0 h-0 border-l-2 border-t-2 border-maize/40 dark:border-maize/50 group-hover:w-8 group-hover:h-8 transition-all duration-500 ease-out"></div>
        
        {/* Top-right flowing corner */}
        <div className="absolute top-0 right-0 w-0 h-0 border-r-2 border-t-2 border-maize/40 dark:border-maize/50 group-hover:w-8 group-hover:h-8 transition-all duration-500 ease-out delay-100"></div>
        
        {/* Bottom-left flowing corner */}
        <div className="absolute bottom-0 left-0 w-0 h-0 border-l-2 border-b-2 border-maize/40 dark:border-maize/50 group-hover:w-8 group-hover:h-8 transition-all duration-500 ease-out delay-200"></div>
        
        {/* Bottom-right flowing corner */}
        <div className="absolute bottom-0 right-0 w-0 h-0 border-r-2 border-b-2 border-maize/40 dark:border-maize/50 group-hover:w-8 group-hover:h-8 transition-all duration-500 ease-out delay-300"></div>
      </div>
      
      {/* Flowing glow effect that radiates outward */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
        <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-gradient-to-r from-maize/20 to-yellow-400/20 rounded-full blur-xl group-hover:w-32 group-hover:h-32 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out"></div>
      </div>
      
      {/* Subtle text glow on hover */}
      <div className="relative z-10 flex flex-col h-full justify-center">
        {student.website && (
          <a
            href={student.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-michigan-blue dark:hover:text-maize font-mono text-sm transition-all duration-300 group-hover:translate-x-1 break-all text-center justify-center relative"
            title={student.website}
          >
            <span className="truncate group-hover:text-michigan-blue dark:group-hover:text-maize transition-colors duration-300 relative z-10">
              {student.website.replace(/^https?:\/\//, '')}
            </span>
            <ExternalLink 
              size={14} 
              className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0 text-maize group-hover:scale-110 group-hover:rotate-12 relative z-10" 
            />
            
            {/* Flowing underline effect */}
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-maize to-yellow-400 group-hover:w-full transition-all duration-500 ease-out"></div>
          </a>
        )}
      </div>
      
      {/* Subtle floating particles effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute top-2 left-3 w-1 h-1 bg-maize/60 rounded-full animate-pulse"></div>
        <div className="absolute top-4 right-4 w-0.5 h-0.5 bg-maize/40 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-3 left-4 w-1.5 h-1.5 bg-maize/50 rounded-full animate-pulse delay-500"></div>
      </div>
    </div>
  )
}