
import { Link } from 'react-router-dom';
import {ReactComponent as BackIcon} from '../../assets/back-icon.svg';

import './title.styles.scss';

const Title = (props) => {
    return (
        <div className="title">
            <Link to={props.backpath}>
                <BackIcon className='back-icon'/>
            </Link>
            {props.name}
        </div>
    );
}

export default Title;