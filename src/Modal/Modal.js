import React, { useState } from "react";
import "./Modal.css";
import emailjs, { send } from 'emailjs-com'

export default function Modal({ orderList }) {
  const [modal, setModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6poz4kw', 'template_flvfwzd', e.target, 'prz-bKGTWfsyqLVY1')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }


  const toggleModal = () => {
    setModal(!modal);
  };



  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Sepet
      </button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="section-center">
              <div>
                {orderList.map(function (d, idx) {
                  return (<li key={idx}>{d.title} {d.price}</li>)
                })}
                <br></br>
                <form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto">
                  <div className="col-8 form-group mx-auto">
                    <input type="text" className="form-control" placeholder="Ad Soyad" name="name" />
                  </div>
                  <div className="col-8 form-group pt-2 mx-auto">
                    <input type="email" className="form-control" placeholder="Email Address" name="email" />
                  </div>
                  <div className="col-8 form-group pt-2 mx-auto">
                    <input type="text" className="form-control" placeholder="Adres" name="address" />
                  </div>
                  <div className="col-8 form-group pt-2 mx-auto">
                    <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                  </div>
                  <div className="col-8 pt-3 mx-auto">
                    <input type="submit" className="btn btn-info" value="Send Message"></input>
                  </div>
                </div>
              </form>
            </div>
              </div>
              
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}

    </>
  );
}