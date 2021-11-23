import { Avatar, Badge, Button } from '../ui-components';

import { avatarData, badgeData, buttonData } from './data';

import './styles.scss';

const ViewComponentsData = [
    { title: 'Avatar', component: (props) => <Avatar {...props} />, data: avatarData },
    { title: 'Badge', component: (props) => <Badge {...props} />, data: badgeData },
    { title: 'Button', component: (props) => <Button {...props} />, data: buttonData },
];

const ViewComponents = () => {
    return (
        <div className="wrapper">
            {ViewComponentsData.map(({ title, component, data }) => {
                return (
                    <>
                        <div className="header">{title}</div>
                        <div className="component-block">
                            {data.map((props) => {
                                return component(props);
                            })}
                        </div>
                    </>
                );
            })}
            {/* <div className="header">Avatar</div> */}
            {/* <div className="component-block"> */}
            {/*    {avatarData.map((props, i) => { */}
            {/*        // eslint-disable-next-line react/no-array-index-key */}
            {/*        return <Avatar {...props} key={i} />; */}
            {/*    })} */}
            {/* </div> */}
        </div>
    );
};

export default ViewComponents;
