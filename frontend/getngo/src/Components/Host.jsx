import React, { useState } from "react";
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

  const [carNumber, setCarNumber] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [registrationYear, setRegistrationYear] = useState('');
  const [transmissionType, setTransmissionType] = useState('Automatic');
  const [kmDriven, setKmDriven] = useState('');

  const handleCarNumberChange = (event) => {
    setCarNumber(event.target.value);
  };

  const handleFuelTypeChange = (event) => {
    setFuelType(event.target.value);
  };

  const handleRegistrationYearChange = (event) => {
    setRegistrationYear(event.target.value);
  };

  const handleTransmissionTypeChange = (event) => {
    setTransmissionType(event.target.value);
  };

  const handleKmDrivenChange = (event) => {
    setKmDriven(event.target.value);
  };

  const handleCityName = (event) => {
    setKmDriven(event.target.value);
  };


  return (
    <div className="host-main">
    <div className="host-sub-main">
    <h1 className="heading">Add your car details here</h1>
    <p className="heading-p">Unlock Your Car's Earning Potential: Rent It Out Today!</p>
    <form action="" method="post">
      <input className="img-add-option" type="file" multiple onChange={handleImageChange}/>
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
        <h3>Car Number</h3>
        <input type="text" value={carNumber} onChange={handleCarNumberChange} />
      </div>

      <div>
        <h3>Fuel Type</h3>
        <select value={fuelType} onChange={handleFuelTypeChange}>
          <option value="">-- Select Fuel Type --</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>

      <div>
        <h3>Year of Car Registration</h3>
        <input type="number" value={registrationYear} onChange={handleRegistrationYearChange} />
      </div>

      <div>
        <h3>Transmission Type</h3>
        <select value={transmissionType} onChange={handleTransmissionTypeChange}>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>
      </div>

      <div>
        <h3>Car KM Driven</h3>
        <input type="number" value={kmDriven} onChange={handleKmDrivenChange} />
      </div>
      <div>
        <h3>City Name</h3>
        <input type="text" value={kmDriven} onChange={handleCityName} />
      </div>
      <button className="btn-host-submit" type="submit">Submit</button>
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