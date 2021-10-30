import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Tag, X } from "react-feather";


function Tag1() {
  const [tags, setTags] = useState(["React", "Angular"]);

  return (
    <div className="App">
      <div className="Form">
        <h1>Tags</h1>
        <div className="TagForm">
          <Tag className="InputIcon" size="16" />
          <input
            type="text"
            placeholder="Add a tag..."
            onKeyPress={event => {
              if (event.key === "Enter") {
                setTags([...tags, event.target.value]);
                event.target.value = "";
              }
            }}
            autofocus
          />
        </div>
        <ul className="TagList">
          {tags.map(tag => (
            <li className="Tag">
              {tag}
              <X
                className="TagIcon"
                size="16"
                onClick={() => {
                  setTags([...tags.filter(word => word !== tag)]);
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Tag1;
