import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import getLastUpdated from 'utils/getLastUpdated'

import { CardContent, TopNavBar, UserProfile, UserInfo, UserImage, Name, LastUpdated, Description, Image, Footer, SaveImage } from './Card.Style'

function Card({ photo }) {
    const [lastUpdated, setLastUpdated] = useState('')

    useEffect(() => {
        setLastUpdated(getLastUpdated(photo.created_at))
    }, [])

    return (
        <CardContent>
            <TopNavBar>
                <UserProfile>
                    <UserImage
                        src={photo.user.profile_image.medium}
                        alt="user image"
                    />

                    <UserInfo>
                        <Link to={`/users/${photo.user.username}`}>
                            <Name>{photo.user.name}</Name>
                        </Link>
                        <LastUpdated>{lastUpdated}</LastUpdated>
                    </UserInfo>
                </UserProfile>

                {/* <ModalClose role="button" onClick={handleModalClose}>
                    x
          </ModalClose> */}
            </TopNavBar>
            <Description>{photo.description}</Description>
            <Image src={photo.urls.regular} alt={photo.alt_description} />
            <Footer>
                {/* <SaveImage onClick={() => handleSave(photo)}>
                    {isSaved ? ` remove save` : `save`}
                </SaveImage> */}
            </Footer>
        </CardContent>
    )
}

export default Card