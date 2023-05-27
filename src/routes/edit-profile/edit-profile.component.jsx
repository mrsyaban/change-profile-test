import Title from "../../components/title/title.component";
import CameraButton from "../../components/camera-button/camera-button.component";

const EditProfile = () => {
    return (
        <div className="edit">
            <Title name="Ganti Foto Profil" backpath='/'/>
            <div className="current-photo">
            
            </div>

            <CameraButton/>

        </div>
    )
}

export default EditProfile;