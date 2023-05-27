import { Link } from 'react-router-dom';
import {ReactComponent as CameraIcon} from '../../assets/camera-icon.svg';

import './profile-info.styles.scss';


const ProfileInfo = () => {
    return (
        <div className='profile-info'>
            <Link className="profile-photo" to='/edit-profile'>
                <CameraIcon/>
            </Link>
            <div className="profile-desc">
                <div className="profile-name">John Doe</div>
                <div className="profile-class">Kelas 10 IPA 8</div>
            </div>
        </div>
    );
}

export default ProfileInfo;