let porkButt = {
  img: "",
  type: "Pork Butt",
  cooking:
    "Apply generous amount of dry rub to pork butt and let sit for 15 minutes.  Set smoker to 260°-275°.  Smoke meat until internal temp reaches 160°-170°.  Wrap with two layers of aluminum foil, place back on smoker.  Maintain smoker temperature until meat reaches internal temp of 197°.  Remove from smoker and let sit for at least one hour before pulling apart."
};
let ribs = {
  img: "",
  type: "St. dLouis-Style Ribs",
  cooking:
    "Cover outside of rack with dry rub and let sit until the meat starts sweating.  Set smoker to 250°-275°.  Smoke meat for 3 hours or until meat reaches an internal temp of 160°-170°.  Wrap each rack in aluminum foil, place back on smoker and maintain temperature.  When ribs reach an internal temp of 205° remove and let rest for 30 minutes."
};

let offSet = {
  type: "Offset Smoker",
  description:
    "Also know as a stick burner.  Offset smokers have a main smoking chamber with the firebox set off to the side.",
  img:
    "http://mobileimages.lowes.com/product/converted/099143/099143020310.jpg?size=pdhi"
};

let drumSmoker = {
  type: "Pit Barrel",
  description:
    "All in one chamber for cooking and heating element. Charcoal and smoking wood goes in a bucket at the bottom of the barrel.",
  img:
    "https://images.homedepot-static.com/productImages/ec78831b-55b8-43f9-90c6-be62f7433eac/svn/pit-barrel-cooker-charcoal-smokers-212-77_1000.jpg"
};

let bbqRubs = [
  {
    type: "Barbecue Rub",
    ingredients: [
      "1 cup Kosher Salt",
      "1 cup Black Pepper",
      "1/2 cup Paprika",
      "1/2 cup Sugar",
      "1/2 cup Granulated Onion",
      "1/2 cup Granulated Garlic",
      "1/4 cup Cayenne Pepper",
      "1 tablespoon Cummin"
    ]
  },
  {
    type: "Korean Rub",
    ingredients: [
      "1 tablespoon toasted sesame seeds",
      "1 tablespoon brown sugar",
      "1 teaspoon soy sauce powder",
      "1 teaspoon onion powder",
      "1/2 teaspoon granulated garlic",
      "1/2 teaspoon coarse salt",
      "1/4 teaspoon powdered ginger",
      "1/4 teaspoon gochugaru Korean chili powder",
      "1/4 teaspoon white pepper"
    ]
  }
];

let bbqSauces = [
  {
    type: "BBQ Sauce",
    ingredients: [
      "1 cup Brown Sugar",
      "1 cup Ketchup",
      "1/4 cup Cider Vinegar",
      "1/4 cup water",
      "1 tablespoon Worcestershire Sauce",
      "1/2 tablespoon Paprika",
      "1/2 tablespoon Salt",
      "1/2 tablespoon Black Pepper"
    ]
  },
  {
    type: "Carolina Mustard BBQ Sauce",
    ingredients: [
      "3/4 cup yellow mustard",
      "1/4 cup honey",
      "1/4 cup brown sugar",
      "1/3 cup apple cider vinegar",
      "1 tablespoon ketchup",
      "2 teaspoons Worcestershire sauce",
      "1 teaspoon garlic powder",
      "1 teaspoon onion powder",
      "1/2 teaspoon salt",
      "1/2 teaspoon ground black pepper",
      "1/4 teaspoon chipotle chili powder",
      "1/2 teaspoon hot sauce"
    ]
  }
];

module.exports = {
  porkButt,
  ribs,
  offSet,
  drumSmoker,
  bbqRubs,
  bbqSauces
};
