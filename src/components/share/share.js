import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './share.scss';



function Share({ title, pageURL}) {

    const { site } = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                siteUrl
              }
            }
          }
        `
      );

      const SocialShare = ({icon, url}) => {
        return <a target="_blank" rel="noopener noreferrer" href={url}
        onClick={() => {
            window.open(url, '', 'width=550,height=435');
            return false;
            }}>
            <i className={icon}></i>
        </a>
      }

  return (
    <div className="share">
        <div className="help-text">
            Share this on
        </div>
        <ul>
            <li>
                <SocialShare
                    icon="fab fa-facebook-f"
                    url={`https://facebook.com/sharer.php?u=${site.siteMetadata.siteUrl}${pageURL}`}
                />
            </li>

            <li>
                <SocialShare
                    icon="fab fa-instagram"
                    url={`https://instagram.com/sharer.php?u=${site.siteMetadata.siteUrl}${pageURL}`}
                />
            </li>
        </ul>
    </div>
  );
}

export default Share;
