import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [path, setPath] = useState("");
  const [text, setText] = useState("START SLIDESHOW");
  useEffect(() => {
    if (path === "") {
      setPath(`slideshow/0`);
    } else {
      setPath("");
    }
  }, []);
  useEffect(() => {
    if (path === "") {
      setText("STOP SLIDESHOW");
    } else {
      setText("START SLIDESHOW");
    }
  });

  const [showModal, setShowModal] = useState(false);
  return (
    <AppContext.Provider
      value={{
        path,
        setPath,
        text,
        setText,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const UseItGlobally = () => {
  return useContext(AppContext);
};

export default AppProvider;
