import Title from '../../components/title/title.component'
import Content from '../../components/content/content.component'

import './profile.styles.scss'

const Profile = () => {
    return (
        <div className="profile">
            <Title className='title'/>
            <Content className='content'/>
            <Content className='content'/>
            <Content className='content'/>
        </div>
    )
}

export default Profile;