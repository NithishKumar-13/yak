import React from 'react'
import avatar1 from '../../img/avatar-1.png'
import avatar2 from '../../img/avatar-2.png'
import avatar3 from '../../img/avatar-3.png'
import avatar4 from '../../img/avatar-4.png'
import avatar5 from '../../img/avatar-5.png'
import avatar6 from '../../img/avatar-6.png'
import avatar7 from '../../img/avatar-7.png'
import avatar8 from '../../img/avatar-8.png'
import avatar9 from '../../img/avatar-9.png'
import avatar10 from '../../img/avatar-10.png'
import avatar11 from '../../img/avatar-11.png'
import avatar12 from '../../img/avatar-12.png'
import avatar13 from '../../img/avatar-13.png'
import avatar14 from '../../img/avatar-14.png'
import avatar15 from '../../img/avatar-15.png'
import avatar16 from '../../img/avatar-16.png'
import avatar17 from '../../img/avatar-17.png'
import avatar18 from '../../img/avatar-18.png'
import avatar19 from '../../img/avatar-19.png'
import avatar20 from '../../img/avatar-20.png'
import avatar21 from '../../img/avatar-21.png'
import avatar22 from '../../img/avatar-22.png'
import avatar23 from '../../img/avatar-23.png'
import avatar24 from '../../img/avatar-24.png'
import avatar25 from '../../img/avatar-25.png'

const Avatar = ({ className }) => {

    return(
        <div className={className}>
       <div className="palettes palettes--1">
                    <img className='avatar' src={avatar1} alt='avatar 1' />
                    <img className='avatar' src={avatar2} alt='avatar 2' />
                    <img className='avatar' src={avatar3} alt='avatar 3' />
                    <img className='avatar' src={avatar4} alt='avatar 4' />
                    <img className='avatar' src={avatar5} alt='avatar 5' />
                </div>
                <div className="palettes palettes--2">
                    <img src={avatar6} alt="avatar 6" className="avatar" />
                    <img src={avatar7} alt="avatar 7" className="avatar" />
                    <img src={avatar8} alt="avatar 8" className="avatar" />
                    <img src={avatar9} alt="avatar 9" className="avatar" />
                    <img src={avatar10} alt="avatar 10" className="avatar" />
                </div>
                <div className="palettes palettes--3">
                    <img src={avatar11} alt="avatar 11" className="avatar" />
                    <img src={avatar12} alt="avatar 12" className="avatar" />
                    <img src={avatar13} alt="avatar 13" className="avatar" />
                    <img src={avatar14} alt="avatar 14" className="avatar" />
                    <img src={avatar15} alt="avatar 15" className="avatar" />
                </div>
                <div className="palettes palettes--4">
                    <img src={avatar16} alt='avatar 16' className="avatar" />
                    <img src={avatar17} alt='avatar 17' className="avatar" />
                    <img src={avatar18} alt='avatar 18' className="avatar" />
                    <img src={avatar19} alt='avatar 19' className="avatar" />
                    <img src={avatar20} alt='avatar 20' className="avatar" />
                </div>
                <div className="palettes palettes--5">
                    <img src={avatar21} alt='avatar 21' className="avatar" />
                    <img src={avatar22} alt='avatar 22' className="avatar" />
                    <img src={avatar23} alt='avatar 23' className="avatar" />
                    <img src={avatar24} alt='avatar 24' className="avatar" />
                    <img src={avatar25} alt='avatar 25' className="avatar" />
                </div>
            </div>
    )
}

export default Avatar