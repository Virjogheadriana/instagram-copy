import React from 'react';
import Post from '../../../components/Post';

const Posts = ({ posts }) => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                height: '100%',
                gap: '35px',
            }}
        >
            {posts &&
                posts
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 20)
                    .map((data, index) => <Post data={data} key={index} />)}
        </div>
    );
};

export default Posts;
