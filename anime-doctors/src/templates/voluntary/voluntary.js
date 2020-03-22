import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../../components/layout';
import SEO from '../../components/seo/seo';
import './voluntary.scss';
import Share from '../../components/share/share';

export const query = graphql`
  query($slug: String!) {
    volunteersJson(slug: { eq: $slug }) {
      slug
      name
      title
      position
      avatar {
        publicURL
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      answers {
        questionId
        answer
      }
      links {
        displayText
        url
      }
    }
    allSchedulesJson {
      nodes {
        questionId
        schedule
        slug
      }
    }
  }
`;

const Voluntary = ({ data }) => {
  const voluntary = data.volunteersJson;
  const schedules = data.allSchedulesJson.nodes;
  return (
    <Layout>
      <SEO
        title={`${voluntary.name} | Expert Volunteers by Smooper`}
        keywords={[
          `voluntary`,
          voluntary.name,
          `startups`,
          `marketing`,
          `social media expert`,
          `facebook expert`,
          `twitter expert`,
        ]}
        imageURL={voluntary.avatar.publicURL}
      />
      <section>
        <div className="container">
          <div className="voluntary-page__item-block has-text-centered">
            <div><p className="is-size-3">{voluntary.title}</p></div>
          </div>
          <div className="voluntary-page__item-block voluntary-page__user-intro">
            <Image
              fluid={voluntary.avatar.childImageSharp.fluid}
              alt={voluntary.title}
              style={{ width: 72, height: 72, borderRadius: '50%' }}
            />
            <p className="is-size-4 remove-margin-bottom">{voluntary.name}</p>
            <p className="is-size-6">{voluntary.position}</p>
            <div className="buttons are-small">
              {voluntary.links.map((item, i) => (
                <a
                  href={item.url}
                  key={i}
                  className="button is-primary is-outlined"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.displayText}
                </a>
              ))}
            </div>
            <Share
              title={`${voluntary.name} at Expert Volunteers by Smooper`}
              pageURL={`/voluntary/${voluntary.slug}`}
            />
          </div>
        </div>
      </section>

      <div className="container" style={{ marginTop: '3rem' }}>
        <div className="voluntary-page__item-block">
          {voluntary.answers.map(item => {
            const scheduleObject =
              (schedules || []).find(q => q.questionId === item.questionId) ||
              {};

            return (
              <div
                className={`box has-left-border border-left-${item.questionId % 16}`}
                key={item.questionId}
                style={{ marginBottom: '2rem' }}
              >
                <p
                  className="is-size-5 voluntary-page__question"
                  style={{ color: 'black' }}
                >
                  {scheduleObject.schedule}
                </p>

                <p className="voluntary-page__answer">
                  <i>{voluntary.name}</i> - <span dangerouslySetInnerHTML={{__html: item.answer}}></span>
                </p>

                <div className="voluntary-page__action">
                  <Link to={`/schedule/${scheduleObject.slug}`}>
                    <span className="button is-small is-primary is-outlined">
                      View More Answers
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Voluntary;
