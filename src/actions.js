import { CHANGE_SEARCH_FIELD } from "./actionconstants";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});
