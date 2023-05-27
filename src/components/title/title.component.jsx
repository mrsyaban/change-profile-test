import { Outlet } from 'react-router-dom';
import {ReactComponent as BackIcon} from '../../assets/back-icon.svg';

import './title.styles.scss';

const Title = (props) => {
    return (
        <div className="title">
            <BackIcon className='back-icon'/>
            {props.name}
            <Outlet/>
        </div>
    );
}

export default Title;