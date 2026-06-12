import { useState, useCallback } from 'react'

export const useToast = () => {
  const [toast, setToast] = useState(null)

  const showToast = useCallback((title, message, duration = 3500) => {
    const id = Date.now()
    setToast({ id, title, message })
    setTimeout(() => {
      setToast(prev => prev?.id === id ? null : prev)
    }, duration)
  }, [])

  const removeToast = useCallback(() => {
    setToast(null)
  }, [])

  return { toast, showToast, removeToast }
}