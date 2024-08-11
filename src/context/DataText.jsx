import { createContext, useState } from "react";

export const DataTextContext = createContext(null);

const DataText = ({children}) => {
    const [html, setHtml] = useState("");
    const [css, setCss] = useState("");
    const [js, setJs] = useState("");

    return (
        <DataTextContext.Provider
            value={{
                html,
                setHtml,
                css,
                setCss,
                js,
                setJs
            }}
        >
            {children}
        </DataTextContext.Provider>
    )
}

export default DataText;
