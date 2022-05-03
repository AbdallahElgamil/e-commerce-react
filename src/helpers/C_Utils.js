export const doSomethingWithInput = (theInput) => {

  return theInput;
};

//takes a usestate hooke seter function with event data 
//usge 
//import {setter} from './utils.js'
//<Input  onChange={setter(setName)}  />
export const getviewPortWidth = () => {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return w;
}

export const setter = set => e => {
  // const { target } = e;
  // const { value } = target;
  // set(value);
  set(e.target.value)
};

