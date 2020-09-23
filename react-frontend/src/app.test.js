import React from "react";
import userReducer from "./reducers/userReducer";
import App from "./app";
import { mount, shallow } from "jest";

test("Logout button exists", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.toInclude("button"));
});
