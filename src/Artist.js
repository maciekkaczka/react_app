import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Artist.css';

function Artist() {
  const url = window.location.href.split('/');
  const author = url.pop();
  const uri = `http://localhost:8080/get/${author}`;
  const deleteUri = "http://localhost:8080/deletePainting";

  const [paintings, setPaintings] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageToDelete, setImageToDelete] = useState(null);

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

  const openDeleteModal = (imageSrc) => {
    setImageToDelete(imageSrc);
    const deleteModal = new Modal(document.getElementById('deleteImageModal'));
    deleteModal.show();
  };

  const closeDeleteModal = () => {
    setImageToDelete(null);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleImageClick = (imageSrc) => {
    openModal(imageSrc);
  };

  const handleDeleteClick = (imageSrc) => {
    openDeleteModal(imageSrc);
  };

  async function deletePhotoFunction() {
    try {
      const response = await fetch(deleteUri, {
        method: "POST",
        body: JSON.stringify({
          "name": imageToDelete
        }),
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      })
      if (!response.ok) {
        alert("Something went wrong");
      }
      else {
        alert("Deleted")
      }
      closeDeleteModal();
      window.location.reload(false);
    } catch (error) {
      // an error occured
    }

  }

  return (
    <>
      {paintings && paintings.length > 0 && (
        <div class="container mt-5">
          <h1 class="text-center mb-4">{paintings[0].artist.name}</h1>
          <div class="row">
            {paintings.map((painting) => (
              <div class="col-md-4" key={painting.id}>
                <div class="card painting-card">
                  <img
                    src={painting.photo}
                    class="card-img-top"
                    style={{ cursor: 'pointer' }}
                    alt={painting.name}
                    onClick={() => handleImageClick(painting.photo)}
                  />
                  <div class="position-absolute top-0 end-0 m-2">
                    <button type="button" class="btn-close btn-close-white" aria-label="Close" onClick={() => handleDeleteClick(painting.name)}></button>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">{painting.name}</h5>
                    <p class="card-text mb-1">Place displayed: {painting.place}</p>
                    <p class="card-text mb-1">Year created: {painting.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div class="modal" id="imageModal" tabIndex="-1">
            <div class="modal-dialog modal-dialog-centered modal-xl">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                </div>
                <div class="modal-body text-center">
                  <img src={selectedImage} alt="Selected Painting" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal" id="deleteImageModal" tabIndex="-1">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Delete Photo</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeDeleteModal}></button>
                </div>
                <div className="modal-body">
                  <p>Are you sure you want to delete this photo?</p>
                  <button type="button" className="btn btn-danger" onClick={deletePhotoFunction}>Delete</button>
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