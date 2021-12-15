import { createContext, useContext, useState } from "react";
import { useQuery } from "react-query";
import { getImageURL } from "../config/api/imageURL_API";

export const ImageURLContext = createContext();

export const ImageURLProvider = ({ children }) => {
  const { data, isLoading, error } = useQuery("image", getImageURL);
  const [imageURL, setImageURL] = useState("");

  return (
    <ImageURLContext.Provider value={data?.images.base_url + "original" || ""}>
      {children}
    </ImageURLContext.Provider>
  );
};

export const useImageURL = () => {
  return useContext(ImageURLContext);
};
