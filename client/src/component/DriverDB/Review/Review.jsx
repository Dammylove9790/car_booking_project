import React from 'react'
import { reviews } from '../../../content/review'
import './Review.scss'

function Review() {
  return (
    <div className='review__con box-shadow'>
        <p className="title p-text">Review</p>
        {
            reviews.map((review, index) => {
                return (
                    <div className='review__box flex' key={index} >
                       <div className="box p-text col-1"><img src={review.image} alt={review.name} /> <div className="dot"></div></div>
                       <div className="col-2">
                        <div className="box p-text col-rating flex"><p className='p-text small-title'>{review.name}</p><p className='p-text'>{review.rating}</p></div>
                        <p className="box p-text col-3">{review.comment}</p>
                       </div>
                       
                    </div>
                )
            })
        }
    </div>
  )
}

export default Review