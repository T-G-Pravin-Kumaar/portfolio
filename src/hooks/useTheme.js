import { useEffect, useState } from 'react'

export default function useTheme() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains('light') ? 'light' : 'dark'
  )

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.add('light')
    } else {
      root.classList.remove('light')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return { theme, toggleTheme }
}
