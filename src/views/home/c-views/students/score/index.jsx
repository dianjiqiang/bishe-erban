import React, { memo } from 'react'
import { useLocation } from 'react-router-dom'
import { ScoreStyle } from './style'

const Score = memo(() => {
  const location = useLocation()
  return (
    <ScoreStyle>
      <h2>提交成功: 您的得分为: {location.search.slice(1, location.search.length).split('=')[1]}</h2>
    </ScoreStyle>
  )
})

export default Score
