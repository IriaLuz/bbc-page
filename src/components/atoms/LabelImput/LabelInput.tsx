import React from "react";

export const LabelInput = () => (
  <div className="field">
    <label htmlFor="test" className="label">
      Name
    </label>
    <div className="control">
      <input id="test" className="input" type="text" placeholder="Text input" />
    </div>
  </div>
);
