import React from 'react';

interface AvatarProps {
    src?: string;
    alt?: string;
    size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt = 'avatar', size = 40 }) => {
    return (
        <img
            src={src || 'https://via.placeholder.com/40'}
            alt={alt}
            className={`rounded-full object-cover`}
            style={{ width: size, height: size }}
        />
    );
};

export default Avatar;
