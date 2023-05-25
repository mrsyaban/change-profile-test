import { createContext, useState } from 'react';

export const TitleContext = createContext({
    title : "Profil",
    setTitle : () => {},
});
  
export const TitleProvider = ({ children }) => {
    const [title, setTitle] = useState("Profil");

    const value = {
        title,
        setTitle,
    };

    return <TitleContext.Provider value={value}>{children}</TitleContext.Provider>;
};