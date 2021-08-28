import React from 'react'
import {Link} from 'gatsby'
import { articleBox, alignLeft, alignRight, subTitle } from  './article.module.scss'

export default (props) => (

   <Link to={props.to}>
      <article className={articleBox} key={props.id}>
         <div className={alignLeft}>
            <img src={'https://source.unsplash.com/150x150/?' + props.keyword} alt={props.title} />
         </div>
         <div className={`${alignRight} mdb-color-text`}>
            <h3 className='h3-responsive'>
               {props.title}
            </h3>
            <h4 className={`h4-responsive ${subTitle}`}>
               {props.subTitle}
            </h4>
            <div>
               {props.excerpt}
            </div>
         </div>
      </article>
   </Link>

)
