import Header from '../../components/Header/Header';
import React, { useState } from 'react';
import Post from '../../components/Post';
import Posts from './posts';
import SuggestedFriends from './suggestions';

const Home = ({
    appData,
    setUsers,
    users,
    authenticatedUser,
    setIsAuthenticated,
}) => {
    const [searchValue, setSearchValue] = useState('');
    const posts = [];

    appData.forEach((user) =>
        user.posts.forEach((post) =>
            posts.push({
                ...post,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                image: user.image,
            })
        )
    );

    const onFollow = (username) => {
        let currentUserIndex = users.findIndex(
            (user) => user.username === authenticatedUser
        );
        if (currentUserIndex !== -1) {
            let updatedUserObject = {
                ...users[currentUserIndex],
                following: [...users[currentUserIndex].following, username],
            };
            let localUsers = users;
            localUsers[currentUserIndex] = updatedUserObject;
            setUsers([...localUsers]);
        }
    };

    return (
        <div>
            <Header
                setIsAuthenticated={setIsAuthenticated}
                setSearchValue={setSearchValue}
                searchValue={searchValue}
            />
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    overflow: 'auto',
                    maxHeight: '100vh',
                    gap: '35px',
                    paddingTop: '30px',
                }}
            >
                <SuggestedFriends
                    suggestions={appData}
                    followList={
                        users
                            ? users.find(
                                  (user) => user.username === authenticatedUser
                              ).following
                            : []
                    }
                    onFollow={onFollow}
                />
                <Posts
                    posts={
                        searchValue !== ''
                            ? posts.filter((post) =>
                                  post.body
                                      .toLowerCase()
                                      .includes(searchValue.toLowerCase())
                              )
                            : posts
                    }
                />
            </div>
        </div>
    );
};

export default Home;
