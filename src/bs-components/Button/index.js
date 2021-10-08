import { parse, stringify } from 'scss-parser';
import createQueryWrapper from 'query-ast';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
// import styleAsString from './button.styles.scss';

import buttonString from '../../../node_modules/bootstrap/scss/_buttons.scss?raw';

// console.log(buttonString);

const StyledButton = styled('div')``;

export default ({ children, ...props }) => {
    const ast = parse(buttonString);
    const $ = createQueryWrapper(ast);
    // console.log(ast);
    console.log($('class'));
    ast.value.map((value) => {
        if (value.type === 'rule') {
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
