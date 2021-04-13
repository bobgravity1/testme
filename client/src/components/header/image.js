import React, {useRef} from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'

const Image = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
    allFile(filter: {base: {regex: "/(dark.svg)/"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid{
                ...GatsbyImageSharpFluid
            }

          }
        }
      }
    }
  }

  `);

  const {allFile: {edges:images}}=data

const ref=useRef()

  return (
    <div>
    <button>click me</button>
    <h1>view</h1>
    <div>
    {images.map((img, key)=>(
      <Img className='navbar-logo' ref={ref} key={key} fluid={img.node.childImageSharp.fluid}/>
    ))}
    </div>
    </div>
  )
}

export default Image
