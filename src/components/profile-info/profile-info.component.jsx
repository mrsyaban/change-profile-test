import {ReactComponent as CameraIcon} from '../../assets/camera-icon.svg';

import './profile-info.styles.scss';

const editProfilePhoto = () => {}

const ProfileInfo = () => {
    return (
        <div className='profile-info'>
            <div className="profile-photo" onClick={editProfilePhoto}>
                <CameraIcon/>
            </div>
            <div className="profile-desc">
                <div className="profile-name">John Doe</div>
                <div className="profile-class">Kelas 10 IPA 8</div>
            </div>
        </div>
    );
}

export default ProfileInfo;