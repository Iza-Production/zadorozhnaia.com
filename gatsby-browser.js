/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

require('./src/styles/styles.css')


exports.shouldUpdateScroll = ({
    routerProps: { location },
    getSavedScrollPosition
  }) => {
  
    if (location.hash) {
      return false;
    }
  
    return true;
};