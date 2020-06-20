import React from 'react';
import DynamicComponent from '../../src/components/common/atoms/DynamicTag/DynamicComponent';
/* THIS COMPONENT HAS BEEN DEPRECATED AND WILL BE REMOVED ON FUTURE RELEASE */
const HeadingStyle = props => <DynamicComponent {...props} />;
const BodyStyle = props => <DynamicComponent {...props} />;
export { HeadingStyle, BodyStyle };
