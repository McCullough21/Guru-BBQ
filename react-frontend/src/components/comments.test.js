import React from "react";
import { mount, shallow } from "enzyme";
import Comments from "./comments";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

const setUp = (props = {}) => {
  const wrapper = shallow(<Comments comment={props} />);
  return wrapper;
};

describe("Comment component renders and increments likes", () => {
  const props = {
    content: "first comment",
    created_at: "2020-08-25T14:00:13.188Z",
    id: 70,
    meatType: "ribs",
    updated_at: "2020-08-25T14:00:13.188Z",
    user_id: 32,
    user_username: "rig"
  };
  let component = setUp(props);

  it("should render a comment with username", () => {
    expect(component.find("h3").text()).toEqual("rig");
  });

  it("contain like button", () => {
    let button = component.find("button");
    console.log(button.debug());
    expect(button.text()).toEqual("Likes: 0");
  });
  it("increments likes value on click event", () => {
    let button = component.find("button");
    button.simulate("click");
    const newButtonAmount = component.find("button");
    console.log(newButtonAmount.debug());
    expect(newButtonAmount.text()).toEqual("Likes: 1");
  });
});
