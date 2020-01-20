import React from "react";

import useResources from "./useResources";

const ResourceList = props => {
  console.log(props);

  console.log(props.resource);

  const result = useResources(props.resource1);
  console.log(result);

  return (
    <ul>
      {result.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
