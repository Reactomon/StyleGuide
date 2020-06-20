import React from 'react';
import { PropTypes } from 'prop-types';
import withStyles from '../../../../theme/withStyles';
import styles from '../Anchor.style';

/**
 * @param {object} props : Props for Anchor
 * @desc This is an anchor component. The prop anchorVariation determines the color of the anchor.
 * The values supported for anchorVariation are : primary, secondary, tertiary.
 * The prop fontSizeVariation determines the font size of the anchor.
 * The value supported for fontSizeVariation are : small, medium, large.
 * The values of these are picked up from the theme.
 * An additional prop noLink is added to support simple anchor or next's Link conditionally.
 */

const Anchor = ({
  children,
  to,
  className,
  handleLinkClick,
  title,
  target,
  url,
  text,
  dataLocator,
  ...other
}) => {
  const targetVal = target || '_self';
  let AnchorComponent = null;
  if (children) {
    AnchorComponent = (
      <a
        href={to}
        className={className}
        onClick={handleLinkClick}
        title={title}
        target={targetVal}
        data-locator={dataLocator}
        {...other}
      >
        {children}
      </a>
    )
  }
  return AnchorComponent;
};

Anchor.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  handleLinkClick: PropTypes.func,
  title: PropTypes.string,
  target: PropTypes.string,
  url: PropTypes.string,
  text: PropTypes.string,
  dataLocator: PropTypes.string,
  IsSlugPathAdded: PropTypes.bool,
};

Anchor.defaultProps = {
  handleLinkClick: () => {},
  title: '',
  target: '',
  url: '',
  text: '',
  dataLocator: '',
  IsSlugPathAdded: false,
};

export default withStyles(Anchor, styles);
export { Anchor as AnchorVanilla };
