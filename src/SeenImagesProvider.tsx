import React, {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
} from "react";

interface ImageContextProps {
  seenUrls: Set<string>;
  addSeenUrl: (url: string) => void;
}

const ShownImagesContext = createContext<ImageContextProps | undefined>(
  undefined
);

export const useShownImages = () => {
  const context = useContext(ShownImagesContext);
  if (!context) {
    throw new Error("useImageContext must be used within an ImageProvider");
  }
  return context;
};

export default ({ children }: PropsWithChildren<{}>) => {
  const [seenUrls, setSeenUrls] = useState<Set<string>>(new Set());

  const addSeenUrl = (url: string) => {
    setSeenUrls((prevSeenUrls) => {
      const newSeenUrls = new Set(prevSeenUrls);
      newSeenUrls.add(url);
      return newSeenUrls;
    });
  };

  return (
    <ShownImagesContext.Provider value={{ seenUrls, addSeenUrl }}>
      {children}
    </ShownImagesContext.Provider>
  );
};
