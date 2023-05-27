import {ReactComponent as CameraIcon} from '../../assets/camera-icon.svg';

import './profile-info.styles.scss';

const ProfileInfo = () => {
    return (
        <div className="profile-photo">
            <CameraIcon className='camera-icon'/>
        </div>
    );
}

export default ProfileInfo;