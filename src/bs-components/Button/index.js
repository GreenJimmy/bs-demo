// eslint-disable-next-line no-unused-vars
import { parse, stringify } from 'scss-parser';
import createQueryWrapper from 'query-ast';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
// import styleAsString from './button.styles.scss';

// eslint-disable-next-line import/no-unresolved
import buttonString from '../../../node_modules/bootstrap/scss/_buttons.scss?raw';

// console.log(buttonString);

const StyledButton = styled('div')``;

// eslint-disable-next-line react/prop-types
export default ({ children, ...props }) => {
    const ast = parse(buttonString);
    const $ = createQueryWrapper(ast);
    // console.log(ast);
    console.log($('class'));
    ast.value.map((value) => {
        if (value.type === 'rule') {
            // eslint-disable-next-line array-callback-return
            value.value.map((subvalue) => {
                if (subvalue.type === 'selector') {
                    console.log(subvalue);
                }
            });
        }
        return null;
    });
    return (
        <StyledButton>
            <Button {...props}>{children}</Button>
        </StyledButton>
    );
};
