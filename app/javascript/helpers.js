export const filtered = (objects, keys) => {
    return Object.keys(objects)
  .filter(key => keys.includes(key))
  .reduce((obj, key) => {
    obj[key] = objects[key];
    return obj;
  }, {})
};


export const childIds = (childArray) => {
    return childArray.map((child) => child.id)
}

export const csrf = document.querySelector('[name=csrf-token]').content;
