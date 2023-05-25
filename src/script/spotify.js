//all spotify related logic is here. NOT A COMPONENT
export const DISCOVER_WEEKLY_LIST = "37i9dQZEVXcCLfEdTZi06O";

// ...... #accessToken=myKey.....
//window.location.hash. will return substring address that start #
export function getTokenFromUrl() {
  return window.location.hash
    .substring(1) //get the substring starting from 1
    .split("&") //create an array from the string separated by &
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {}); //will go through in each array item returning a singlevalue
}
