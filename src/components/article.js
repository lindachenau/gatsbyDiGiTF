import React from 'react'
import {Link} from 'gatsby'
import styles from  './article.module.scss'

export default (props) => (

   <Link to={props.to}>
      <article className={styles.articleBox} key={props.id}>
         <div className={styles.left}>
            <img src={'https://source.unsplash.com/150x150/?' + props.keyword} alt={props.title} />
         </div>
         <div className={`${styles.right} mdb-color-text`}>
            <h3 className='h3-responsive'>
               {props.title}
            </h3>
            <h4 className={`h4-responsive ${styles.subTitle}`}>
               {props.subTitle}
            </h4>
            <div>
               {props.excerpt}
            </div>
         </div>
      </article>
   </Link>

)
