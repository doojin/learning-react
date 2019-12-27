import React from 'react'
import ArticlePlaceholder from './ArticlePlaceholder'

const defaultPlaceholdersCount = 3

export default function ArticlesLoad () {
  const placeholders = []

  for (let i = 0; i < defaultPlaceholdersCount; i++) {
    placeholders.push(<ArticlePlaceholder key={ i }/>)
  }

  return (
    <div>
      { placeholders }
    </div>
  )
}
