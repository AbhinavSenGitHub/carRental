import React from 'react'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const CarPost = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch('http://localhost:1234/demo', {
            method: 'GET',
        })
        const data = await response.json();
        setUsers(data);
    }

    useEffect(() => {
        getUsers();
    }, [])

    // {users.map(user => <li key={user._id}>{user.username},{user.number}</li>)}
    // for(let i = 0; i < users.host.length-1; i++){
    //     console.log(users);
    // }
    return (
    <div className="carPost">
        <div className="main-component">
            {users.map(user => <div className="container" key={user._id}>
                <div className="img-component">
                    <img src="" alt="car Img" />
                </div>

                <div className="component-carDetails">{user.host.map((obj, index) => (
                    <div className="detail-container" key={index}>
                        <p className="cnr">{obj.company} {obj.name} {obj.registrationYear}</p>
                        <p className="tfs">{obj.transmissionType} {obj.fuleType} {obj.seats} seats</p>

                        <p className="tag">FASTag:- {obj.fastag}</p>
                        
                        <div className="location">
                            <h4>₹ {obj.price} /hr</h4>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {obj.cityName}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>)}
        </div>
        </div>
    )
}

export default CarPost





















// import React from 'react'
// import { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

// const CarPost = () => {

//     const [users, setUsers] = useState([]);

//     const getUsers = async () => {
//         const response = await fetch('http://localhost:1234/demo', {
//             method: 'GET',
//         })
//         const data = await response.json();
//         setUsers(data);
//     }

//     useEffect(() => {
//         getUsers();
//     }, [])

//     // {users.map(user => <li key={user._id}>{user.username},{user.number}</li>)}
//     // for(let i = 0; i < users.host.length-1; i++){
//     //     console.log(users);
//     // }
//     return (
//         <div className="main-component">
//             {users.map(user => <div className="container" key={user._id}>
//             <div className="content">
//                 <div className="img-component">
//                     <image src="" alt="car Img" />
//                 </div>

//                 <div className="component-carDetails">{user.host.map((obj, index) => (
//                     <div className="detail-container" key={index}>
//                         <p className="cnr">{obj.company} {obj.name} {obj.registrationYear}</p>
//                         <p className="tfs">{obj.transmissionType} {obj.fuleType} {obj.seats} seats</p>

//                         <p className="tag">FASTag:- {obj.fastag}</p>
                        
//                         <div className="location">
//                             <h4>₹ {obj.price} /hr</h4>
//                             <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {obj.cityName}</p>
//                         </div>
//                     </div>
//                 ))}
//                 </div>
//                 </div>
//             </div>)}
//         </div>
//     )
// }

// export default CarPost



