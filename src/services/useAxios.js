import axios from "axios";
import { useEffect, useState } from "react";

//Custom hook to fetch data from json.
const useAxios = (uri) => {
  const [data, setData] = useState([]);
  const [updated, isUpdate] = useState(false);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        throw new Error(err);
      })
      .finally(() => {
        isUpdate(true);
      });
  }, [uri]);

  return [data, updated];
};

export default useAxios;
