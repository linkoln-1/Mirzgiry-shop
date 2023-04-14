// hooks/useForm.ts
import { useState, useEffect } from 'react'

interface UseFormProps {
  initialErrors: Record<string, string>
  validate: (name: string, value: string) => string | null
}

export const useForm = ({ initialErrors, validate }: UseFormProps) => {
  const [values, setValues] = useState<Record<string, string>>({})
  const [errors, setErrors] = useState<Record<string, string | null>>(initialErrors)
  const [dirty, setDirty] = useState<Record<string, boolean>>({})
  const [formValid, setFormValid] = useState(false)

  const handleChange = (name: string, value: string) => {
    setValues((prevValues) => ({ ...prevValues, [name]: value }))
    setErrors((prevErrors) => ({ ...prevErrors, [name]: validate(name, value) }))
  }

  const handleBlur = (name: string) => {
    setDirty((prevDirty) => ({ ...prevDirty, [name]: true }))
  }

  useEffect(() => {
    const hasErrors = Object.values(errors).some((error) => error !== null)
    setFormValid(!hasErrors)
  }, [errors])

  return { values, handleChange, handleBlur, errors, dirty, formValid }
}
