import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Artist.css';

function Artist() {
  const url = window.location.href.split('/');
  const author = url.pop();
  const uri = `http://localhost:8080/get/${author}`;

  const [paintings, setPaintings] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(uri);
      const result = await response.json();
      setPaintings(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    const modal = new Modal(document.getElementById('imageModal'));
    modal.show();
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleImageClick = (imageSrc) => {
    openModal(imageSrc);
  };

  return (
    <>
      {paintings && paintings.length > 0 && (
        <div className="container mt-5">
          <h1 className="text-center mb-4">{paintings[0].artist.name}</h1>
          <div className="row">
            {paintings.map((painting) => (
              <div className="col-md-4" key={painting.id}>
                <div className="card painting-card">
                  <img
                    src={painting.photo}
                    className="card-img-top"
                    style={{ cursor: 'pointer' }}
                    alt={painting.name}
                    onClick={() => handleImageClick(painting.photo)}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{painting.name}</h5>
                    <p className="card-text mb-1">Place displayed: {painting.place}</p>
                    <p className="card-text mb-1">Year created: {painting.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="modal" id="imageModal" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                </div>
                <div className="modal-body text-center">
                  <img src={selectedImage} alt="Selected Painting" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Artist;