import React, { useState, useEffect } from 'react';
import { Avatar } from '@mui/material';

const SuggestedFriends = ({ suggestions, onFollow, followList }) => {
    const [shuffledFriends, setShuffledFriends] = useState([]);

    useEffect(() => {
        setShuffledFriends(
            suggestions
                .sort(() => 0.5 - Math.random())
                .filter((user) => !followList.includes(user.username))
        );
    }, [suggestions, followList]);

    return (
        <div style={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
            {shuffledFriends.slice(0, 3).map((user) => (
                <div style={{ display: 'flex', gap: '10px', margin: '10px 0' }}>
                    <Avatar
                        sx={{ border: '1px solid rgb(170, 170, 170)' }}
                        alt={user.username}
                        src={user.image}
                    />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '14px', fontWeight: 'bold' }}>
                            {user.username}
                        </span>
                        {followList.includes(user.username) ? (
                            <span
                                style={{
                                    color: 'grey',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    cursor: 'pointer',
                                }}
                            >
                                Following
                            </span>
                        ) : (
                            <span
                                style={{
                                    color: 'grey',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    cursor: 'pointer',
                                }}
                                onClick={() => onFollow(user.username)}
                            >
                                Follow
                            </span>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SuggestedFriends;
