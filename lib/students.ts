import fs from 'fs'
import path from 'path'
import Papa from 'papaparse'
import { Student } from '@/types/students'

export function getStudents(): Student[] {
  const csvFilePath = path.join(process.cwd(), 'data', 'students.csv')
  const csvFile = fs.readFileSync(csvFilePath, 'utf8')
  
  const result = Papa.parse<Student>(csvFile, {
    header: true,
    skipEmptyLines: true,
    transform: (value) => value.trim()
  })

  return result.data
}

export function getGraduationYears(): string[] {
  const students = getStudents()
  const years = [...new Set(students.map(s => s.graduationYear))]
  return years.sort().reverse() // Most recent first
}