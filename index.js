const ELEMENT_TYPES = {
  ID: "ID",
  NAME: "NAME",
  CLASS: "CLASS",
  TAG: "TAG",
};

const ad_element_identifies = [
  {
    type: ELEMENT_TYPES.CLASS,
    value: "ats-trvd-wrapper",
  },
  {
    type: ELEMENT_TYPES.ID,
    value: "adContainerDiv",
  },
  {
    type: ELEMENT_TYPES.ID,
    value: "transparentCover",
  },
  {
    type: ELEMENT_TYPES.CLASS,
    value: "inner--ads",
  },
];

const remove_elements = (element_identifies) => {
  element_identifies.forEach((id) => {
    let elements;
    switch (id.type) {
      case ELEMENT_TYPES.ID: {
        elements = document.getElementById(id.value);
        break;
      }
      case ELEMENT_TYPES.CLASS: {
        elements = document.getElementsByClassName(id.value);
        break;
      }
      default:
        return;
    }
    if (!elements || elements.length < 1) {
      return;
    }
    console.log("REMOVED ELEMENTS: ", elements);
    if (elements instanceof HTMLCollection) {
      for (const element of elements) {
        element.remove();
      }
    } else if (elements instanceof HTMLElement) {
      elements.remove();
    }
  });
};

setInterval(remove_elements.bind(null, ad_element_identifies), 500);
