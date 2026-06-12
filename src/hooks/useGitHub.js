import { useState, useEffect } from 'react'

export const useGitHub = (username) => {
  const [userData, setUserData] = useState(null)
  const [repos, setRepos] = useState([])
  const [totalStars, setTotalStars] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        setLoading(true)
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
        ])
        
        const user = await userRes.json()
        const reposData = await reposRes.json()
        
        setUserData(user)
        setRepos(reposData)
        
        const stars = reposData.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0)
        setTotalStars(stars)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    
    fetchGitHub()
  }, [username])

  const langColors = {
    JavaScript: '#F7DF1E',
    PHP: '#4F5D95',
    Python: '#3776AB',
    TypeScript: '#3178C6',
    HTML: '#E34F26',
    CSS: '#1572B6',
    default: '#666'
  }

  return { userData, repos, totalStars, loading, error, langColors }
}