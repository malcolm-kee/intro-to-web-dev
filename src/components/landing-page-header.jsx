import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { LinkButton } from '../components/button';
import ArrowRightIcon from '../images/arrow-right.icon.svg';
import cssIcon from '../images/css.svg';
import githubLogo from '../images/github.svg';
import html5Icon from '../images/html5.svg';
import jsIcon from '../images/js.svg';

const LandingPageHeaderContent = ({ repositoryUrl }) => (
  <header className="landing-page-header">
    <div className="logo-section">
      <div className="svg-logo-container">
        <img
          src={html5Icon}
          className="svg-logo"
          id="html5-icon"
          alt="HTML5 icon"
        />
      </div>
      <div className="svg-logo-container">
        <img src={cssIcon} className="svg-logo" id="css-icon" alt="CSS icon" />
      </div>
      <div className="svg-logo-container">
        <img
          src={jsIcon}
          className="svg-logo"
          id="js-icon"
          alt="Javascript icon"
        />
      </div>
    </div>
    <div className="landing-title-container">
      <h1 className="landing-title">Introduction to Web Development</h1>
      <div className="button-toolbar">
        <LinkButton to="/introduction/" primary large>
          Start <ArrowRightIcon width={32} height={32} />
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
          <img
            className="github-logo"
            src={githubLogo}
            alt="GitHub Logo"
            width={32}
            height={32}
          />
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
