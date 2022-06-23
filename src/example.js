import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import React, { useState } from "react";
import emailjs, { send } from 'emailjs-com'

export default function OrderModal({ orderList }) {
    const [show, setShow] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6poz4kw', 'template_flvfwzd', e.target, 'prz-bKGTWfsyqLVY1')
            .then((result) => {
                console.log(result.text);
                alert("Siparisiniz basariyla tarafimiza ulasti.");
            }, (error) => {
                console.log(error.text);
                alert(error.text + "HATA !!!!")
            });
        e.target.reset();
    }
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const listtoString = (list) => {
        let isimler = '';
        list.map((item) => isimler = isimler + item.title + ' ' + item.price + '₺\n')
        console.log(isimler);
        return isimler;
    }
    const summary = (list) => {
        let checkout = 0;
        list.map((item) => checkout = checkout + item.price)
        console.log(checkout);
        return checkout;
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Sepetim
            </Button>

            <Modal show={show} onHide={handleClose} size="lg"
                aria-labelledby="contained-modal-title-"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Siparisiniz
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {orderList.map(function (d, idx) {
                        return (<li key={idx}>{d.title} {d.price}₺</li>)
                    })}
                    <form onSubmit={sendEmail}>
                        <div className="row pt-5 mx-auto">
                            <div className="col-8 form-group mx-auto">
                                <input type="text" className="form-control" placeholder="Ad Soyad" name="name" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="email" className="form-control" placeholder="Email" name="email" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <textarea type="email" hidden className="form-control" defaultValue={listtoString(orderList)} name="items" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="text" className="form-control" placeholder="Address" name="address" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Mesajınız" name="message"></textarea>
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                            <textarea type="email" disabled className="form-control" defaultValue={summary(orderList)} name="items" />
                            </div>
                            <div className="col-8 pt-3 mx-auto">
                                <Button type="submit" value="Send Message">Siparis Ver!</Button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>

            </Modal>
        </>
    );
}
