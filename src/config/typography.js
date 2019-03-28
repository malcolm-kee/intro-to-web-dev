import Typograph from 'typography';

const typography = new Typograph({
  baseLineHeight: 1.75,
  headerFontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans serif'
  ],
  headerColor: 'var(--textTitle)',
  bodyFontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Roboto',
    'Segoe UI',
    'Georgia',
    'serif'
  ],
  overrideStyles: ({ rhythm }) => ({
    a: {
      color: 'var(--textLink)'
    },
    h1: {
      marginTop: rhythm(1 / 2),
      marginBottom: rhythm(3 / 2),
      fontSize: rhythm(2)
    },
    '@media only screen and (max-width:700px)': {
      h1: {
        fontSize: rhythm(1.5),
        marginTop: rhythm(1 / 3),
        marginBottom: rhythm(2 / 3)
      }
    },
    blockquote: {
      color: 'inherit',
      fontStyle: 'italic',
      fontSize: rhythm(4 / 5),
      marginLeft: 0,
      marginRight: 0,
      paddingLeft: rhythm(1 / 2),
      paddingRight: rhythm(2 / 3),
      paddingTop: rhythm(1 / 2),
      paddingBottom: rhythm(1 / 2),
      borderLeftColor: 'inherit',
      borderLeftWidth: rhythm(1 / 3),
      borderLeftStyle: 'solid',
      opacity: '0.8'
    }
  })
});

export default typography;
