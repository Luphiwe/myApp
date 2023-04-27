/*Luphiwe Sikupela
25-/Apr/2023*/

import React from "react";
interface Props {
  img: any;
}
const Modal = ({ img }: Props) => {
  const { image, setImage } = img;
  return (
    <div className="modal">
      <div className="modal-header">
        <div>
          <img
            src="/assets/images/download.png"
            className="icon"
            alt="Download"
          />
        </div>
        <div>
          <img
            src="/assets/images/close.png"
            className="icon"
            alt="Download"
            onClick={() => setImage("")}
          />
        </div>
        <div>
          <img
            src="/assets/images/zoom1.png"
            className="icon"
            alt="Download"
            onClick={() => setImage("")}
          />
        </div>
      </div>
      <img src={image} />
    </div>
  );
};

export default Modal;
