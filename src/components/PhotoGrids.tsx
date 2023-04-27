/*Luphiwe Sikupela
25-/Apr/2023*/

import { PhotoContext } from "@/utils/PhotoContext";
import { url } from "inspector";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import Modal from "./Modal";
interface Props {
  name: string;
}
const PhotoGrids = ({ name }: Props) => {
  const rout = useRouter();
  const [image, setImage] = useState<string>("");
  const { photos, getPhotos } = useContext(PhotoContext);
  // console.log(photos);
  useEffect(() => {
    console.log(rout.query.name);
    getPhotos(rout.query.name);
  }, [rout]);
  return (
    <div className="grid">
      {image !== "" && <Modal img={{image,setImage}} />}
      {/* <button className="me"></button> */}
      {photos.map((photo: { urls: { regular: string } }) => (
        <div className="card">
          <img
            src={photo.urls.regular}
            className="img"
            onClick={() => setImage(photo.urls.regular)}
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrids;
