// manually add token, so we are always logged in during development, in production
// all item default value should be null
export const initialState = {
  user: null,
  playlist: [],
  spotify: null,
  discover_weekly: null,
  playing: false,
  item: null,
  top_artists: null,
  token: null,

  //uncoment below for productions
  // token:
  //   "BQDBpNY6w_425v-RrpjNCbM8YThrKXb_xbOUhdnizysBPCRNV2lMj4j2k1G5zOaTpdmHzBaPc-uX6nGop0Yx7wGgjqpAkOlUcWowp6wgGVPvcAuZ4t1yFNriqDOltQCdEqf4rhpvhbKpjRwiZMoQcJ9LpX9i8OzWdwRXpRKMc-PUNYLF6hZ5MUhHMNYhJy-k_pOqrZFCLurUxn9u",
};

//in any component, if they call dispatch (it is actually reducer exported default)
//and can execute any action.type handled here, and this will return latest state
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "SET_PLAYLIST":
      return { ...state, playlist: action.playlist };
    case "SET_DISCOVER_WEEKLY":
      return { ...state, discover_weekly: action.discover_weekly };
    case "SET_PLAYING":
      return { ...state, playing: action.playing };
    case "SET_ITEM":
      return { ...state, item: action.item };
    case "SET_TOP_ARTISTS":
      return { ...state, top_artists: action.top_artists };

    //somehow failed to passed in spotify object through props, but it works from here?
    case "SET_SPOTIFY":
      return { ...state, spotify: action.spotify };

    default:
      return state;
  }
};

export default reducer;
