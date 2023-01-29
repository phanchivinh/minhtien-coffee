import React from 'react'

import { Link } from 'react-router-dom'
import publicArchive from '../../../../assets/data/publicArchive'
import './News.css'

const News = () => {
  return (
    <section className='news'>
        <h3 className='section-heading'>Tin tức</h3>
        <div className='news__wrapper'>

            {publicArchive.map((archive, index) => (
              <article className='news__post'>
                  <Link to={archive.path} className='news__post-image'>
                      <img src={archive.thumnail} alt='news-thumnail' />
                  </Link>
                  <div className='news__post-description'>
                      <h5>
                        <Link to={archive.path}>{archive.title}</Link>
                      </h5>
                      <span>{archive.time}</span>
                  </div>
              </article>
            ))}
        </div>
    </section>
  )
}

export default News