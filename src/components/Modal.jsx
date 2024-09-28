const Modal = ({ toggleModal, setModal, modal, name, img, bio, title }) => {
  return (
    <>
      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <div className="modal-banner-center">
                <div className="modal-img-container">
                  <img src={img} alt={name} />
                </div>
                <div className="modal-header-container">
                  <h1>{name}</h1>
                  <h2>{title}</h2>
                </div>
              </div>
              <p>{bio}</p>
              <button className="close-modal" onClick={toggleModal}>
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
