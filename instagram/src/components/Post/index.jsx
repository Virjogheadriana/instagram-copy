import React, { useEffect, useState } from 'react';
import './index.css';
import { Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Avatar, { avatarClasses } from '@mui/material/Avatar';

const Post = ({ data }) => {
    const [image, setImage] = useState();
    const [showMore, setShowMore] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        const getImage = async () => {
            fetch('https://picsum.photos/450/500').then(async (response) => {
                const imageBlob = await response.blob();
                const imageObjectURL = URL.createObjectURL(imageBlob);
                setImage(imageObjectURL);
            });
        };

        getImage();
    }, []);

    return (
        <div className="post-container">
            <div className="post-avatar">
                <Avatar
                    sx={{ width: 25, height: 25, fontSize: 16 }}
                    alt={data.username}
                >
                    {data.username.slice(0, 1).toUpperCase()}
                </Avatar>
                <span>{data.username}</span>
            </div>
            <img className="post-image" src={image} alt={data.title} />
            <div className="post-reactions">
                {isLiked ? (
                    <FavoriteIcon
                        onClick={() => setIsLiked(false)}
                        sx={{
                            cursor: 'pointer',
                            marginTop: '5px',
                            color: 'red',
                        }}
                    />
                ) : (
                    <FavoriteBorderIcon
                        onClick={() => setIsLiked(true)}
                        sx={{
                            cursor: 'pointer',
                            marginTop: '5px',
                        }}
                    />
                )}
                <span className="post-reactions-text">
                    {'Liked by ' +
                        data.reactions +
                        (isLiked ? 1 : 0) +
                        ' users'}
                </span>
            </div>

            <div className="post-title">
                <span>{data.username}</span>
                <span>{data.title}</span>
                <span
                    className="post-button"
                    onClick={() => setShowMore(!showMore)}
                >
                    {showMore ? 'Less' : 'More'}
                </span>
            </div>
            {showMore && <span className="post-body">{data.body}</span>}

            <div className="post-tags">
                {data.tags.map((tag) => (
                    <span>{'#' + tag}</span>
                ))}
            </div>
        </div>
    );
};

export default Post;
