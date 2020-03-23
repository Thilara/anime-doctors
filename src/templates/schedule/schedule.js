// @flow
import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../../components/layout';
import SEO from '../../components/seo/seo';
import './schedule.scss';

export const query = graphql`
  query($slug: String!) {
    schedulesJson(slug: { eq: $slug }) {
      schedule
      questionId
      slug
    }
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
          publicURL
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        answers {
          questionId
          location
          date
        }
      }
    }
  }
`;

const getAnswers = (allVolunteersObject, questionId) => {
  const answers: [] = [];
  allVolunteersObject.forEach(element => {
    const answerObject = element.answers.find(i => i.questionId === questionId);
    if (answerObject) {
      answers.push({
        answer: answerObject.answer,
        name: element.name,
        title: element.title,
        position: element.position,
        avatar: element.avatar,
        slug: element.slug,
      });
    }
  });
  return answers;
};

const Voluntary = ({ data }) => {
  const questionObject = data.schedulesJson;
  const answers = getAnswers(
    data.allVolunteersJson.nodes,
    questionObject.questionId
  );
  return (
    <Layout>
      <SEO
        title={questionObject.schedule}
        keywords={[
          `voluntary`,
          `startups`,
          `marketing`,
          `social media expert`,
          `facebook expert`,
          `instagram expert`,
          `whatsapp expert`
        ]}
        imageURL={data.file.publicURL}
      />
      <div className="container">
        <div className="schedule-page__number has-text-centered">
          <div className="tags has-addons" style={{ display: 'inline-block' }}>
            <span className="tag is-dark">{answers.length}</span>
            <span className="tag is-primary">Total de voluntários escalados</span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="schedule-page__item-block">
          {answers.map(item => (
            <div className="box schedule-page__answer-block" key={item.slug}>
              {/* <p className="schedule-page__answer-text is-size-5">
                {item.location}
              </p> */}

              <Link to={`/voluntario/${item.slug}`} style={{ color: '#666' }}>
                <div className="media remove-margin-bottom schedule-page__profile-block">
                  <Image
                    fluid={item.avatar.childImageSharp.fluid}
                    alt={item.item}
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      marginRight: 10,
                    }}
                  />

                  <div
                    className="media-content remove-margin-bottom"
                    style={{ flexGrow: 0 }}
                  >
                    <div>
                      <p className="is-size-7 remove-margin-bottom">
                        <span style={{ color: 'rgb(55, 124, 255)' }}>
                          {' '}
                          {item.name}{' '}
                        </span>
                      </p>
                      <p className="is-size-7">{item.position}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Voluntary;
