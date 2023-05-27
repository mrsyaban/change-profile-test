import Title from '../../components/title/title.component'
import Content from '../../components/content/content.component'

import './profile.styles.scss'
import ProfileInfo from '../../components/profile-info/profile-info.component'


const Profile = () => {
    return (
        <div className="profile">
            <Title name="Profil" backpath='/'/>
            <ProfileInfo/>
            
            <Content/><Content/><Content/>
        </div>
    )
}

export default Profile;