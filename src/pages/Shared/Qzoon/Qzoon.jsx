import React from 'react';
import qZoon1 from '../../../assets/qZone1.png';
import qZoon2 from '../../../assets/qZone2.png';
import qZoon3 from '../../../assets/qZone3.png';

const Qzoon = () => {
    return (
        <div className='bg-light p-3 mt-3'>
            <h2>Qzoon</h2>
            <img src={qZoon1} alt="" />
            <img src={qZoon2} alt="" />
            <img src={qZoon3} alt="" />
        </div>
    );
};

export default Qzoon;