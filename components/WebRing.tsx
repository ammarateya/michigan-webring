'use client'

import { useState, useMemo, useEffect } from 'react'
import Image from 'next/image'
import { Student } from '@/types/students'
import { StudentCard } from './StudentCard'
import { SearchFilters } from './SearchFilters'
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
    // First sort students alphabetically by website URL
    const sortedStudents = [...students].sort((a, b) => 
      (a.website || '').localeCompare(b.website || '')
    )
    
    // Then filter the sorted students
    return sortedStudents.filter(student => {
      const matchesSearch = !searchTerm || 
        (student.website && student.website.toLowerCase().includes(searchTerm.toLowerCase())) ||
        student.graduationYear.includes(searchTerm)
      
      return matchesSearch
    })
  }, [students, searchTerm])

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-black transition-colors duration-300 relative overflow-hidden">
      {/* Background geometric patterns */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-maize transform rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-michigan-blue transform -rotate-12 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 border-2 border-maize transform rotate-90 animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 border-2 border-michigan-blue transform -rotate-45 animate-pulse delay-1500"></div>
      </div>
      
      <ThemeToggle />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header with enhanced animations */}
        <header className="text-center mb-16">
          <div className="flex items-center justify-center mb-8 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-maize to-yellow-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 scale-150 group-hover:scale-100"></div>
              <Image
                src={isDark ? "/images/michigan-logo-white.svg" : "/images/michigan-logo-black.svg"}
                alt=""
                width={120}
                height={120}
                className="drop-shadow-lg opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-110 relative z-10"
              />
            </div>
          </div>
          
          {/* Much smaller, more refined title */}
          <h1 className="text-lg md:text-xl font-light tracking-wider text-neutral-500 dark:text-neutral-300 mb-3 uppercase">
            <span className="text-michigan-blue dark:text-white">Michigan</span>
            <span className="text-maize mx-4">•</span>
            <span className="text-neutral-400 dark:text-neutral-400">Webring</span>
          </h1>
          <div className="w-12 h-px bg-gradient-to-r from-maize/60 to-yellow-400/60 mx-auto rounded-full"></div>
        </header>

        {/* Search and Filters */}
        <SearchFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          availableYears={availableYears}
        />

        {/* Staggered Student Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredStudents.map((student, index) => (
            <div 
              key={`${student.name}-${index}`}
              className={`transform transition-all duration-500 hover:scale-105 ${
                index % 2 === 0 ? 'hover:-translate-y-2' : 'hover:translate-y-2'
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              <StudentCard student={student} index={index} />
            </div>
          ))}
        </div>

        {filteredStudents.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-neutral-500 dark:text-neutral-400">No students found matching your criteria.</p>
          </div>
        )}

        {/* Enhanced Add Your Site Button */}
        <div className="text-center mb-16">
          <a
            href="https://github.com/AlexCSalinas/michigan-webring"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:shadow-neutral-800/30 dark:hover:shadow-white/30"
          >
            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
            </svg>
            <span>Add your site via GitHub</span>
          </a>
        </div>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-neutral-500 dark:text-neutral-400">
            Inspired by <a href="https://se-webring.xyz" className="text-neutral-700 dark:text-neutral-300 hover:text-michigan-blue dark:hover:text-maize transition-colors duration-200">se-webring.xyz</a> and 
            the <a href="https://github.com/MichaelFromOrg/ubc-webring" className="text-neutral-700 dark:text-neutral-300 hover:text-maize transition-colors duration-200">UBC Web Ring</a>
          </p>
        </footer>
      </div>
    </div>
  )
}