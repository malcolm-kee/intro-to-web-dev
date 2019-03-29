import { graphql, StaticQuery, Link } from 'gatsby';
import React from 'react';
import { LinkButton } from '../components/button';
import cssIcon from '../images/css.svg';
import githubLogo from '../images/github.svg';
import html5Icon from '../images/html5.svg';
import jsIcon from '../images/js.svg';
import './landing-page-header.scss';

const LandingPageHeaderContent = ({ repositoryUrl }) => (
  <header className="landing-page-header">
    <div>
      <div className="logo-section">
        <Link to="/css/" className="svg-logo-container">
          <img
            src={cssIcon}
            className="svg-logo"
            id="css-icon"
            alt="CSS icon"
          />
        </Link>
        <Link to="/html/" className="svg-logo-container">
          <img
            src={html5Icon}
            className="svg-logo"
            id="html5-icon"
            alt="HTML5 icon"
          />
        </Link>
        <Link
          to="/programming-basics/"
          className="svg-logo-container js-logo-container"
        >
          <img
            src={jsIcon}
            className="svg-logo"
            id="js-icon"
            alt="Javascript icon"
          />
        </Link>
      </div>
      <div className="landing-title-container">
        <h1 className="landing-title">
          Introduction to Web <br />
          <span className="animated-word">Development</span>
        </h1>
        <div className="button-toolbar">
          <LinkButton to="/introduction/" primary large>
            Start
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
