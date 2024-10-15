import React from "react";
import { GitHubUser } from "../../types/GitHubUser";

const Item = ({item} : {item: GitHubUser}) => {
  return (
    <div className="card">
      <a href={item?.url} target="_blank" rel="noreferrer">
        <img src={item?.avatar_url} style={{ width: "100px" }} alt="alt" />
      </a>
      <p className="card-text">{item?.login}</p>
    </div>
  );
};

export default Item;
