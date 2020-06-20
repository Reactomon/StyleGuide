import React from 'react';
import PropTypes from 'prop-types';
import ButtonCTA from '../../ButtonCTA';
import withStyles from '../../../../theme/withStyles';
import styles from '../Button.style';

/**
 * @param {object} props : Props for button
 * @desc This is a button component. The two variations of buttons are:
 * 1. fixed-width: Takes the width of the column which it occupies.
 * It has the fixed padding as per the zeplin.

 * 2. variable-width: Takes the width of the text that is inside the button.
 * It has fixed padding as per the zeplin. This variation needs to be mentioned in buttonVariation property.
 * TODO - Not able to add these property here due to linting,
 * need to find a way of doing it. Might be resolved with flow types.

 * Additional button Prop:
 * fullWidth: Additional property to mention 100% width of the button.
 * disabled: to have disabled state of the button
 */
const Button = ({
  children,
  className,
  ariaLabel,
  disabled,
  fullWidth,
  dataLocator,
  type,
  customStyle,
  buttonVariation,
  cta,
  uniqueKey,
  noCurve,
  active,
  ...otherProps
}) => {
  if (!cta) {
    /* Using this label in CSS to fake the width of hover style category-link-button.
       It allows to stop flickering of the button on hover.
    */
    let categoryLinkLabel = '';
    if (buttonVariation === 'category-links-dark') {
      categoryLinkLabel = children;
    }
    return (
      <button
        disabled={disabled}
        aria-label={ariaLabel}
        className={className}
        type={type}
        fullWidth={fullWidth}
        data-locator={dataLocator}
        data-category-link-label={categoryLinkLabel}
        {...otherProps}
      >
        {children}
      </button>
    );
  }
  return (
    <ButtonCTA
      uniqueKey={uniqueKey}
      className={className}
      dataLocator={dataLocator}
      ariaLabel={ariaLabel}
      type={type}
      fullWidth={fullWidth}
      disabled={disabled}
      noCurve={noCurve}
      ctaInfo={{
        ctaVariation: buttonVariation,
        link: {
          ...cta,
        },
      }}
    />
  );
};

Button.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  disabled: PropTypes.string,
  fullWidth: PropTypes.string,
  dataLocator: PropTypes.string.isRequired,
  type: PropTypes.string,
  customStyle: PropTypes.string,
  buttonVariation: PropTypes.string.isRequired,
  cta: PropTypes.shape({
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    target: PropTypes.string,
  }),
  uniqueKey: PropTypes.string,
  noCurve: PropTypes.bool,
  active: PropTypes.bool,
};

Button.defaultProps = {
  disabled: '',
  fullWidth: true,
  type: 'button',
  customStyle: '',
  uniqueKey: '',
  noCurve: false,
  cta: null,
  active: false,
};

export default withStyles(Button, styles);
export { Button as ButtonVanilla };
