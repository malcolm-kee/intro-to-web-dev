import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { LinkButton } from '../components/button';
import { MaterialIcons } from '../components/material-icons';
import githubLogo from '../images/github-small.png';
import html5Icon from '../images/html5.svg';
import cssIcon from '../images/css.svg';
import jsIcon from '../images/js.svg';

const LandingPageHeaderContent = ({ repositoryUrl }) => (
  <header className="landing-page-header">
    <div className="logo-section">
      <img
        src={html5Icon}
        className="svg-logo"
        id="html5-icon"
        alt="HTML5 icon"
      />
      <img src={cssIcon} className="svg-logo" id="css-icon" alt="CSS icon" />
      <img
        src={jsIcon}
        className="svg-logo"
        id="js-icon"
        alt="Javascript icon"
      />
    </div>
    <div className="landing-title-container">
      <h1 className="landing-title">Introduction to Web Development</h1>
      <div className="button-toolbar">
        <LinkButton to="/introduction/" primary large>
          Start <MaterialIcons name="arrow_forward" />
        </LinkButton>
        <a
          href={repositoryUrl}
          aria-label="GitHub repo of this site"
          title="GitHub repo of this site"
          className="button button--large button--white"
          target="_BLANK"
          rel="noopener noreferrer"
          style={{ color: 'black' }}
        >
          <img className="github-logo" src={githubLogo} alt="GitHub Logo" />
          <span className="hide-small">Source</span>
        </a>
      </div>
    </div>
  </header>
);

export const LandingPageHeader = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            repositoryUrl
          }
        }
      }
    `}
    render={data => (
      <LandingPageHeaderContent
        repositoryUrl={data.site.siteMetadata.repositoryUrl}
      />
    )}
  />
);
