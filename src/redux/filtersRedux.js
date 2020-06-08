/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const DURATION_FROM = createActionName('DURATION_FROM');
export const DURATION_TO = createActionName('DURATION_TO');
export const ADD_TAGS = createActionName('ADD_TAGS');
export const REMOVE_TAGS = createActionName('REMOVE_TAGS');
// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const durationFrom = payload => ({ payload, type: DURATION_FROM });
export const durationTo = payload => ({ payload, type: DURATION_TO });
export const addTags = payload => ({ payload, type: ADD_TAGS });
export const removeTags = payload => ({ payload, type: REMOVE_TAGS });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };    
    case DURATION_FROM:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          from: action.payload,
        },
      };
    case DURATION_TO:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          to: action.payload,
        },
      };
    case ADD_TAGS:
      return {
        ...statePart,
        tags: [...statePart.tags, action.payload],
      };
    case REMOVE_TAGS:
      return {
        ...statePart,
        tags: [...statePart.tags.filter((tag) => tag !== action.payload)],
      };      
    default:
      return statePart;
  }
}
