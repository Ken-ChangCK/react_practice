import { useState, useEffect } from "react";
import axios from "axios";
const useResources = props => {
  const [result, setResult] = useState([]);

  // const { resource } = props;
  // console.log(resource);
  console.log(props);

  const getData = async () => {
    const fetchResult = await axios.get(
      `https://jsonplaceholder.typicode.com/${props}`
    );
    setResult(fetchResult.data);
  };
  useEffect(() => {
    getData(result);
  }, [props]);
  console.log(result);

  return result;
};

export default useResources;
