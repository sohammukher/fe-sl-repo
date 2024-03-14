import React from 'react';

const MenuType = (props) => {
    const { name, image } = props.props;

    return (
        <div className='p-6 justify-center bg-amber-300 bg-opacity-70 rounded-lg m-3 w-76'>
            <div className="text-center mb-4 text-4xl ">{name}</div>
            <img src={image} alt="error loading...." className='w-full h-auto rounded-lg' />
        </div>
    );
}

export default MenuType;
