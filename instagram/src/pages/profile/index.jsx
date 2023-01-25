import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import './index.css';
import Post from '../../components/Post';

const Profile = ({ user, setIsAuthenticated }) => {
    const [image, setImage] = useState();

    const posts = [
        {
            id: 31,
            title: 'It was just a burger.',
            body: "It was just a burger. Why couldn't she understand that? She knew he'd completely changed his life around her eating habits, so why couldn't she give him a break this one time? She wasn't even supposed to have found out. Yes, he had promised her and yes, he had broken that promise, but still in his mind, all it had been was just a burger.",
            userId: 36,
            tags: ['classic', 'fiction', 'magical'],
            reactions: 12,
            username: user.username,
            firstName: 'Oleta',
            lastName: 'Abbott',
            image: 'https://robohash.org/cupiditatererumquos.png',
        },
        {
            id: 29,
            title: 'The chair sat in the corner where it had been',
            body: 'The chair sat in the corner where it had been for over 25 years. The only difference was there was someone actually sitting in it. How long had it been since someone had done that? Ten years or more he imagined. Yet there was no denying the presence in the chair now.',
            userId: 38,
            tags: ['mystery', 'american'],
            reactions: 6,
            username: user.username,
            firstName: 'Alison',
            lastName: 'Reichert',
            image: 'https://robohash.org/laboriosamfacilisrem.png',
        },
    ];

    useEffect(() => {
        const getImage = async () => {
            fetch('https://picsum.photos/100/100').then(async (response) => {
                const imageBlob = await response.blob();
                const imageObjectURL = URL.createObjectURL(imageBlob);
                setImage(imageObjectURL);
            });
        };

        getImage();
    }, []);

    return (
        <div>
            <Header setIsAuthenticated={setIsAuthenticated} />
            <div className="user-data-container">
                <img src={image} style={{ borderRadius: '50%' }} />
                <span className="user-data">{`${user.username}`}</span>
                <p className="user-data">{`Following ${user.following.length} users`}</p>
            </div>
            <div
                style={{
                    marginTop: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    gap: '35px',
                    overflow: 'auto',
                }}
            >
                {posts.map((post) => (
                    <Post data={post} />
                ))}
            </div>
        </div>
    );
};

export default Profile;
