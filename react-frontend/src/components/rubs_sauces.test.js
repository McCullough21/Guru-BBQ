import React from "react";
import Enzyme from "enzyme";
import { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RubsSauces from "./rubs_sauces";

Enzyme.configure({ adapter: new Adapter() });

describe("Rubs and Sauces render links to recipes", () => {
  const wrapper = shallow(<RubsSauces />);

  describe("Rubs column displays links", () => {
    let rubList = wrapper.find("ul.rubs");
    it("has the ul list", () => {
      expect(wrapper.find("ul.rubs")).toHaveLength(1);
    });

    it("Displays the rub's type in link text", () => {
      expect(
        rubList
          .find("button")
          .first()
          .text()
      ).toEqual("Barbecue Rub");
    });
  });

  describe("Sauces column displays links", () => {
    let sauceList = wrapper.find("ul.sauces");

    it("Displays the sauces's type in link text", () => {
      expect(
        sauceList
          .find("button")
          .first()
          .text()
      ).toEqual("BBQ Sauce");
    });
  });
});
