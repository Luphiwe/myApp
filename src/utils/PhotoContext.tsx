import React, { createContext, useState } from "react";
interface Props {
  children: any;
}
export async function getStaticProps() {
  console.log(process.env.CLIENT_KEY);
  return {
    props: {
      hello: "hello world",
    },
  };
}
export const PhotoContext = createContext<any>([]);
const PhotoContextProvider = ({ children }: Props) => {
  const [photos, setPhotos] = useState<any>([]);
  const getPhotos = async (x: string) => {
    const request = new Request(
      `https://api.unsplash.com/search/photos?query=${x}`,
      {
        headers: {
          Authorization: `Client-ID ${process.env.NEXT_PUBLIC_CLIENT_KEY}`,
        },
      }
    );
    const data = await fetch(request, {
      method: "GET",
    });
    const jsonData = await data.json();
    setPhotos(jsonData.results);
  };
  return (
    <PhotoContext.Provider value={{ photos, getPhotos }}>
      {children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
