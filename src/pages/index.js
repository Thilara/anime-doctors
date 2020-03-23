import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo/seo';
import VoluntaryGrid from '../components/voluntary-grid/voluntary-grid';

export default ({ data }) => {
  const volunteers = data.allVolunteersJson.nodes;

  return (
    <Layout>
      <SEO
        title="Voluntários"
        keywords={[`volunteers`, `entrepreneurs`, `startups`]}
        imageURL={data.file.publicURL}
      />
      <section className="hero">
          <div className="container has-text-centered">
            <h1
              className="is-size-3"
              style={{
                marginBottom: '.2rem',
                color: '#4a4a4a',
                fontWeight: 400,
              }}
            >
            </h1>
            <h2
              className="is-size-4"
              style={{
                marginBottom: '.2rem',
                color: '#4a4a4a',
                fontWeight: 400,
              }}
            >
              Voluntários do Anime Doctors
            </h2>
          </div>
      </section>
      <div style={{ margin: '1rem' }}>
        <VoluntaryGrid items={volunteers} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "images/logo.png" }) {
      publicURL
    }
    allVolunteersJson(sort: { fields: timestamp, order: DESC }) {
      nodes {
        slug
        name
        title
        position
        avatar {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
