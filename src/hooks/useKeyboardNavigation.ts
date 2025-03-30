// hooks/useKeyboardNavigation.ts
import { useEffect } from 'react'

export const useKeyboardNavigation = (shortcuts: Array<{ key: string, action: () => void }>) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      shortcuts.forEach(({ key, action }) => {
        if (e.key === key) {
          e.preventDefault()
          action()
        }
      })
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [shortcuts])
}