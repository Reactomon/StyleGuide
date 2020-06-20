import React from 'react';
import BodyCopy from '../components/atoms/bodyCopy';
import ButtonCTA from './atoms/ButtonCTA';
import { StyledFirstDiv } from './First.style';
import withStyles from '../theme/withStyles';

const FirstComponent = ({
    className,
    ...props
}) => (
        <div className={className}>
            <StyledFirstDiv>
                Hello
        </StyledFirstDiv>
            <BodyCopy
                className={className}
                fontSize="fs10"
                component="button"
                color="pri"
                fontFamily="secondary"
                fontWeight="extrabold"
            >
                <span data-locator={"span-first"}>
                    First Body Copy
                </span>
            </BodyCopy>
            <ButtonCTA
                uniqueKey={"cta"}
                dataLocator={`cta0`}
                {...props}
                fontWeight="extrabold"
                fontSize="fs13"
                ctaVariation="buttonVariation"
                text="hello"
                fontFamily="secondary"
                textAlign="center"
            />
        </div>
    );

export default withStyles(FirstComponent);
