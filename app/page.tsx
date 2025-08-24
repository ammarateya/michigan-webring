import { getStudents, getGraduationYears } from '@/lib/students'
import { WebRing } from '@/components/WebRing'

export default function HomePage() {
  const students = getStudents()
  const availableYears = getGraduationYears()

  return <WebRing students={students} availableYears={availableYears} />
}