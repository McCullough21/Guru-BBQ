import React from "react";
import userReducer from "./reducers/userReducer";
import App from "./app";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount, shallow } from "enzyme";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

Enzyme.configure({ adapter: new Adapter() });
const store = createStore(userReducer, applyMiddleware(thunk));

describe("Logout button exists", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
  it("contains button for logout", () => {
    expect(wrapper.find("button.logout")).toHaveLength(1);
  });

  it("contains text of logout", () => {
    expect(wrapper.find("button.logout").text()).toEqual("Logout");
  });
});
