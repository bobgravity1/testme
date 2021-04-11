import React, {useRef} from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'





const Image = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
    allFile(filter: {base: {regex: "/(damianteam)/"}}) {
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
console.log(data)

const ref=useRef()
console.log(ref.current)
  return (
    <div>
    <button>click me</button>
    <h1>view</h1>
    <div>
    {data.allFile.edges.map((img, key)=>(
      <Img className='img-main' ref={ref} key={key} fluid={img.node.childImageSharp.fluid}
      />
    ))}
    </div>
    </div>
  )
}

export default Image
