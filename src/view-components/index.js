import {
    Avatar,
} from '../ui-components';

import { avatarData } from './data';

import './styles.scss';

const ViewComponents = () => {
    return (
        <div className="wrapper">
            <div className="header">Avatar</div>
            <div className="component-block">
                {avatarData.map((props, i) => {
                    // eslint-disable-next-line react/no-array-index-key
                    return <Avatar {...props} key={i} />;
                })}
            </div>
        </div>
    );
};

export default ViewComponents;
