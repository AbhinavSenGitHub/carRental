import axios from "axios";
import React, { useState } from "react";
import {Link} from "react-router-dom";
// import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Host = () => {
  // const [images, setImages] = useState([]);

  // const handleImageChange = (event) => {
  //       // setImages(event.target.files[0])
  //   const files = event.target.files;
    
  //   const imageArray = [];

  //   // Loop through the selected files and add them to the imageArray
  //   for (let i = 0; i < files.length; i++) {
  //     const file = files[i];
  //     const reader = new FileReader();

  //     reader.onloadend = () => {
  //       // The 'result' property contains the data URL for the image
  //       imageArray.push(reader.result);

  //       // If all images have been read, update the state with the new imageArray
  //       if (imageArray.length === files.length) {
  //           setImages((prevImages) => [...prevImages, ...imageArray]);
  //       }
  //     };

  //     // Read the image as a data URL
  //     reader.readAsDataURL(file);
  //   }
  // };
  const [image, setImage] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [fuelType, setFuelType] = useState('');    // const [fuelType, setFuelType] = useState('');
  const [registrationYear, setRegistrationYear] = useState('');
  const [transmissionType, setTransmissionType] = useState('');
  const [seats, setSeats] = useState('');
  const [fastag, setFastag] = useState('');
  const [kmDriven, setKmDriven] = useState('');
  const [cityName, setCity] = useState('');
  const [feedback, setFeedback] = useState('');
  const [price, setPrice] = useState('');

const onSubmit = async (e) => {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("vehicle", vehicle);
  formData.append("company", company);
  formData.append("name", name);
  formData.append("fuelType", fuelType);
  formData.append("registrationYear", registrationYear);
  formData.append("transmissionType", transmissionType);
  formData.append("seats", seats);
  formData.append("fastag", fastag);
  formData.append("kmDriven", kmDriven);
  formData.append("cityName", cityName);
  formData.append("feedback", feedback);
  formData.append("price", price);

    await axios.post('http://localhost:1234/api/host', formData, { headers: {'Content-Type': 'multipart/form-data'}})
  
  }
  
//onChange={handleImageChange}
  return (
    <div className="host-main">
    <div className="host-sub-main">
    <h1 className="heading">Add your car details here</h1>
    <p className="heading-p">Unlock Your Car's Earning Potential: Rent It Out Today!</p>
    <form action="" method="post" enctype="multipart/form-data">
    <input
          onChange={e => setImage(e.target.files[0])} 
          type="file" 
          accept="image/*"
        />
      {/* <input className="img-add-option" type="file" name="image" multiple onChange={handleImageChange}/>     
     {images.length > 0 && (
        <Carousel>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Image ${index}`} style={{ maxWidth: "400px", margin: "5px" }} />
            </div>
          ))}
        </Carousel>
      )}  */}

      <div className="input-fields">
      <div>
        <h3>Vachile Type</h3>
        {/* <input type="text" value={carNumber} onChange={handleCarNumberChange} /> */}
        <select name="vehicle" onChange={(e) => { setVehicle(e.target.value) }}>
        <option value="">-</option>
          <option value="4 wheeler">4 wheeler</option>
          <option value="2 wheeler">2 wheeler</option>
        </select>
      </div>

      <div>
        <h3>Company</h3>
        <input name="company" type="text" onChange={(e) => { setCompany(e.target.value)}}/>
      </div>

      <div>
        <h3>Vachile name</h3>
        <input name="name" type="text" onChange={(e) => { setName(e.target.value)}}/>
      </div>

      <div>
        <h3>Fuel Type</h3>
        <select name="fuleType" onChange={(e) => { setFuelType(e.target.value) }}>
          <option value="">-- Select Fuel Type --</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>

      <div>
        <h3>Year of Car Registration</h3>
        <input name="registrationYear" type="number" onChange={(e) => { setRegistrationYear(e.target.value) }}/>
        
      </div>

      <div>
        <h3>Transmission Type</h3>
        <select name="transmissionType" onChange={(e) => { setTransmissionType(e.target.value) }}>
        <option value="Automatic">-</option>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>
      </div>

      <div>
        <h3>Seats</h3>
        <input name="seats" type="text" onChange={(e) => { setSeats(e.target.value)}}/>
      </div>

      <div>
        <h3>FASTag Available</h3>
        <select name="fastag" onChange={(e) => { setFastag(e.target.value) }}>
        <option value="">-</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div>
        <h3>Car KM Driven</h3>
        <input name="kmDriven" type="text" onChange={(e) => { setKmDriven(e.target.value) }}/>
      </div>

      <div>
        <h3>Location / city name</h3>
        <input name="cityName" type="text" onChange={(e) => { setCity(e.target.value) }}/>
      </div>

      <div>
      <h3>Personal Feedback</h3>
      <input name="feedback" type="text" onChange={(e) => {setFeedback(e.target.value)}}/>
      </div>

      <div>
        <h3>Price /hr</h3>
        <input name="price" type="text" onChange={(e) => { setPrice(e.target.value)}}/>
      </div>

      <button className="btn-host-submit" type="submit" onClick={onSubmit} value="Submit"><Link to="/carPost">Submit </Link></button>
      </div>
      
      </form>
      </div>
    </div>
  );
};

export default Host;

// const onSubmit = async (e) => {
  
//   try{
//     await axios.post('http://localhost:1234/api/host',{
//       vehicle: vehicle, 
//       company: company,
//       name: name,
//       fuleType: fuelType,
//       registrationYear: registrationYear, 
//       transmissionType: transmissionType, 
//       seats: seats,
//       fastag: fastag,
//       kmDriven: kmDriven, 
//       cityName: cityName,
//       feedback: feedback,
//       price: price
//     })
//   }catch (e) {
//     console.log(e);
//   }
//   }