import styles from "./App.module.scss";
import { useState, useEffect } from "react";
import data from "./data/data.json";
import getData from "./api";
import { nanoid } from "nanoid";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getData(data).then((data) => {
      setIsLoading(false);
      return setItems(Object.entries(data.rates));
    });
  }, [setItems]);

  return (
    <>
      {isLoading ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      ) : (
        <table className={styles.table}>
          <tbody>
            {items.map(([key, value]) => {
              return (
                <tr key={nanoid()}>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default App;
