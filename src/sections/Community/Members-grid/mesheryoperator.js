import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import MembersGrid from "./index";

const MesheryOperator = props => {
  const data = useStaticQuery(
    graphql`query MesheryOperator {
  allMdx(
    sort: {fields: [frontmatter___name], order: ASC}
    filter: {fields: {collection: {eq: "members"}}, frontmatter: {published: {eq: true}, badges: {eq: "meshery-operator"}}}
  ) {
    nodes {
      id
      frontmatter {
        name
        github
        twitter
        status
        meshmate
        linkedin
        location
        badges
        bio
        image_path {
          childImageSharp {
            gatsbyImageData(width: 200, layout: CONSTRAINED)
          }
          extension
          publicURL
        }
      }
      fields {
        slug
      }
    }
  }
}
`
  );

  return <MembersGrid data={data} {...props} />;
};

export default MesheryOperator;