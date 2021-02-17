export const filtered = (objects, keys) => { 
  if(objects){
  return Object.keys(objects)
  .filter(key => keys.includes(key))
  .reduce((obj, key) => {
    obj[key] = objects[key];
    return obj;
  }, {})}
  else{
    return {}
  }
};

export const csrf = document.querySelector('[name=csrf-token]').content;
