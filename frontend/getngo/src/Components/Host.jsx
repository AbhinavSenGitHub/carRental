import axios from "axios";
import React, { useState } from "react";
import {Link} from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Host = () => {
  const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const files = event.target.files;
    
    const imageArray = [];

    // Loop through the selected files and add them to the imageArray
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onloadend = () => {
        // The 'result' property contains the data URL for the image
        imageArray.push(reader.result);

        // If all images have been read, update the state with the new imageArray
        if (imageArray.length === files.length) {
            setImages((prevImages) => [...prevImages, ...imageArray]);
        }
      };

      // Read the image as a data URL
      reader.readAsDataURL(file);
    }
  };

  const [vehicle, setVehicle] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [registrationYear, setRegistrationYear] = useState('');
  const [transmissionType, setTransmissionType] = useState('');
  const [kmDriven, setKmDriven] = useState('');
  const [cityName, setCity] = useState('');

const onSubmit = async (e) => {
  e.preventDefault()
  // const formData = new FormData();
  try {
    await axios.post('http://localhost:1234/api/host',{
      images: images,
      vehicle: vehicle, 
      fuleType: fuelType,
      registrationYear: registrationYear, 
      transmissionType: transmissionType, 
      kmDriven: kmDriven, 
      cityName: cityName
    })
  }
  catch (e) {
    console.log(e);
  }
}
//onChange={handleImageChange}
  return (
    <div className="host-main">
    <div className="host-sub-main">
    <h1 className="heading">Add your car details here</h1>
    <p className="heading-p">Unlock Your Car's Earning Potential: Rent It Out Today!</p>
    <form action="" method="post" enctype="multipart/form-data">
      <input className="img-add-option" type="file" name="image" multiple onChange={handleImageChange}/>     
      {images.length > 0 && (
        <Carousel>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Image ${index}`} style={{ maxWidth: "400px", margin: "5px" }} />
            </div>
          ))}
        </Carousel>
      )}

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
        <h3>Car KM Driven</h3>
        <input name="kmDriven" type="text" onChange={(e) => { setKmDriven(e.target.value) }}/>
      </div>
      <div>
        <h3>City Name</h3>
        <input name="cityName" type="text" onChange={(e) => { setCity(e.target.value) }}/>
      </div>
      <button className="btn-host-submit" type="submit" onClick={onSubmit} value="Submit"><Link to="/carPost">Submit </Link></button>
      </div>
      
      </form>
      </div>
    </div>
  );
};

export default Host;



{/* <div>
            <label>Contact number</label>
            <input type="number" placeholder="Contact no."/>
            
            <label>Vehicle Details</label>
            <select id="vehicleType" value={selectedVehicle} onChange={handleVehicleChange}>
        <option value="">-- Select Vehicle Type --</option>
        <option value="twoWheeler">Two-Wheeler</option>
        <option value="fourWheeler">Four-Wheeler</option>
      </select>
            <input type="text" placeholder="Car number"/>
            <input type="text" placeholder="Car KM driven"/>
            <input type="text" placeholder="City name"/>
            <input type="text" placeholder="Fule Type"/>
            <checkbox

      </div> */}