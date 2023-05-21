import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCars from './ToyCars';
import RemoteCar from './RemoteCar';
import Vehicles from './Vehicles';
import Swal from 'sweetalert2';

const ShopCategory = () => {
  const [cars, setCars] = useState([]);
  const [remoteCars, setRemoteCars] = useState([]);
  const [vehicles, setVehicles] = useState([]);
 

  useEffect(() => {
    fetch('cars.json')
      .then(res => res.json())
      .then(data => {
        setCars(data);
      })
  }, [])
  
  useEffect(() => {
    fetch('remotePlay.json')
      .then(res => res.json())
      .then(data => {
        setRemoteCars(data);
      })
  }, [])
  
  useEffect(() => {
    fetch('vehicles.json')
      .then(res => res.json())
      .then(data => {
        setVehicles(data);
      })
  }, [])
  
  const handleTapDetails = (_id) => {
    // console.log('btn click');
    Swal.fire({
      title: "Success!",
      text: "You have to log in first to view details",
      icon: "success",
      confirmButtonText: "Ok",
    });
  }

  return (
    <div className="my-12">
      <Tabs>
        <TabList>
          <Tab> Category 1</Tab>
          <Tab> Category 2</Tab>
          <Tab> Category 3</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl text-center mt-5">Die-cast Toy Cars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
            {cars.map((car) => (
              <ToyCars
                key={car._id}
                car={car}
                handleTapDetails={handleTapDetails}
              ></ToyCars>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl text-center mt-5">
            Remote Control (RC) Cars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
            {remoteCars.map((rc) => (
              <RemoteCar
                key={rc._id}
                rc={rc}
                handleTapDetails={handleTapDetails}
              ></RemoteCar>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl text-center mt-5">Play Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
            {vehicles.map((vc) => (
              <Vehicles
                key={vc._id}
                vc={vc}
                handleTapDetails={handleTapDetails}
              ></Vehicles>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopCategory;