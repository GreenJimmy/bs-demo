import { Avatar, Badge, Button, Check, Dropdown, Lozenge } from '../ui-components';

import {
    avatarData,
    badgeData,
    buttonData,
    checkData,
    radioData,
    dropdownData,
    lozengeData,
} from './data';

import './styles.scss';

const ViewComponentsData = [
    { title: 'Avatar', component: (props) => <Avatar {...props} />, data: avatarData },
    { title: 'Badge', component: (props) => <Badge {...props} />, data: badgeData },
    { title: 'Button', component: (props) => <Button {...props} />, data: buttonData },
    { title: 'Check', component: (props) => <Check {...props} />, data: checkData },
    { title: 'Radio', component: (props) => <Check {...props} />, data: radioData },
    { title: 'Dropdown', component: (props) => <Dropdown {...props} />, data: dropdownData },
    { title: 'Lozenge', component: (props) => <Lozenge {...props} />, data: lozengeData },
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
        </div>
    );
};

export default ViewComponents;
