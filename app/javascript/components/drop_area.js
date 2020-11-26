import { useDrop } from "react-dnd";
import { NativeTypes } from "react-dnd-html5-backend";
import React from "react";
import Input from "@material-ui/core/Input";
import { parseFile } from "../utils/file_parser";
export default function DropArea(props) {
  const [collectedProps, drop] = useDrop({
    accept: [NativeTypes.FILE],
    drop: (item, monitor) => {
      console.log(item);
    },
  });
  return (
    <Input
      onChange={(e) => {
        _.map(e.target.files, (files) => {
          parseFile(files);
        });
      }}
      inputComponent={(props) => {
        console.log(props);
        return (
          <label>
            <input
              style={{ display: "none" }}
              {..._.omit(props, "inputRef")}
              ref={props.inputRef}
            />
            <div ref={drop}>Drop Area</div>
          </label>
        );
      }}
      type="file"
    />
  );
}
