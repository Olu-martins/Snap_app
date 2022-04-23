import React from 'react'
import Newsone from './NewsTrends/Newsone'
import './NewsTrend.css'
import Collaborate from './NewsTrends/Collaborate'
import IndustryTraining from './NewsTrends/Industrytraining'

const NewsTrend = () => {
  return (
    <>
    <div className='whatsnew'>
      <h4>What's New</h4>
    </div>
    <div className='newstrends'>
        <Newsone />
        <Collaborate />
        <IndustryTraining />
    </div>
    </>
  )
}

export default NewsTrend