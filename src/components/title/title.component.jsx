import {ReactComponent as BackIcon} from '../../assets/back-icon.svg';

import './title.styles.scss';

const Title = () => {
    return (
        <div className="title">
            <BackIcon className='back-icon'/>
            Profil
        </div>
    );
}

export default Title;