import {Link} from 'react-router-dom';

import './camera-button.styles.scss'

const CameraButton = () => {
    return (
        <Link to='/'>
            <div className="camera-button">
                Ambil Dari Kamera
            </div>
        </Link>
    )
}

export default CameraButton;