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

test("Logout button exists", () => {
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(wrapper.containsMatchingElement(<button>Logout</button>)).toBeTruthy();
});
