'use client'

import { useState, useMemo, useEffect } from 'react'
import Image from 'next/image'
import { Student } from '@/types/student'
import { StudentCard } from './StudentCard'
import { SearchFilters } from './SearchFilters'
import { Stats } from './Stats'
import { ThemeToggle } from './ThemeToggle'

interface WebRingProps {
  students: Student[]
  availableYears: string[]
}

export function WebRing({ students, availableYears }: WebRingProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const [isDark, setIsDark] = useState(false)

  // Check theme on mount and when it changes
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    
    checkTheme()
    
    // Listen for theme changes
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    
    return () => observer.disconnect()
  }, [])

  const filteredStudents = useMemo(() => {
    // First sort students alphabetically by name
    const sortedStudents = [...students].sort((a, b) => 
      a.name.localeCompare(b.name)
    )
    
    // Then filter the sorted students
    return sortedStudents.filter(student => {
      const matchesSearch = !searchTerm || 
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.graduationYear.includes(searchTerm)
      
      return matchesSearch
    })
  }, [students, searchTerm])

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      <ThemeToggle />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Image
              src={isDark ? "/images/michigan-logo-white.svg" : "/images/michigan-logo-black.svg"}
              alt="University of Michigan"
              width={64}
              height={64}
              className="drop-shadow-sm"
            />
            <h1 className="text-3xl md:text-5xl font-semibold text-neutral-900 dark:text-neutral-100">
              Michigan Web Ring
            </h1>
          </div>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            A collection of personal websites from University of Michigan Computer Science students and alumni.
          </p>
        </header>

        {/* Search and Filters */}
        <SearchFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          availableYears={availableYears}
        />

        {/* Student Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
          {filteredStudents.map((student, index) => (
            <StudentCard key={`${student.name}-${index}`} student={student} />
          ))}
        </div>

        {filteredStudents.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-neutral-500 dark:text-neutral-400">No students found matching your criteria.</p>
          </div>
        )}

        {/* Add Your Site Button */}
        <div className="text-center mb-16">
          <a
            href="https://github.com/yourusername/michigan-webring"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 font-medium rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
            </svg>
            <span>Add your site via GitHub</span>
          </a>
        </div>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-neutral-200 dark:border-neutral-700">
          <p className="text-neutral-500 dark:text-neutral-400">
            Inspired by <a href="https://se-webring.xyz" className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">se-webring.xyz</a> and 
            the <a href="https://github.com/MichaelFromOrg/ubc-webring" className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">UBC Web Ring</a>
          </p>
        </footer>
      </div>
    </div>
  )
}