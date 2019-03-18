import { graphql } from 'gatsby';
import { joinClassName } from 'join-string';
import React from 'react';
import { Helmet } from 'react-helmet';
import { LinkButton } from '../components/button';
import prevIcon from '../images/arrow-left.svg';
import nextIcon from '../images/arrow-right.svg';

const InstructionNav = ({ pageContext, top }) => (
  <nav
    className={joinClassName(
      'instruction-template-nav',
      top && 'instruction-template-nav--top'
    )}
  >
    {pageContext.previous ? (
      <LinkButton
        to={pageContext.previous.frontmatter.path}
        aria-label="previous section"
        title="previous section"
      >
        <img src={prevIcon} height={32} alt="" />
      </LinkButton>
    ) : (
      <span />
    )}
    {pageContext.next ? (
      <LinkButton
        to={pageContext.next.frontmatter.path}
        aria-label="next section"
        title="next section"
      >
        <img src={nextIcon} height={32} alt="" />
      </LinkButton>
    ) : (
      <span />
    )}
  </nav>
);

const InstructionTemplate = ({ data, pageContext }) => (
  <div className="main-container">
    <Helmet>
      <title>{data.markdownRemark.frontmatter.title}</title>
      {data.markdownRemark.frontmatter.description && (
        <meta
          name="description"
          content={data.markdownRemark.frontmatter.description}
        />
      )}
    </Helmet>
    <div className="instruction-template">
      <InstructionNav pageContext={pageContext} top />
      <main>
        <article
          className="instruction-article"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </main>
      <InstructionNav pageContext={pageContext} />
    </div>
  </div>
);

export default InstructionTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`;
