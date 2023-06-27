import React, { useReducer, createContext } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { GiphyGifObject } from "./types/giphyApi"

interface AppState {
  searchTerm: string
  gifs: GiphyGifObject[]
  collection: Object
  offset: number
  isCollectionPage: boolean
}

const initialState: AppState = {
  searchTerm: "",
  gifs: [],
  collection: {},
  offset: 0,
  isCollectionPage: false,
}

type Action = {
  type: string
  payload: any
}

const reducer = (state = initialState, action: Action) => {
  const { type, payload } = action
  switch (type) {
    case "setSearchTerm":
      return {
        ...state,
        searchTerm: payload,
      }
    case "setGifs":
      return {
        ...state,
        gifs: payload,
      }
    case "setCollection":
      return {
        ...state,
        collection: payload,
      }
    case "setIsCollectionPage":
      return {
        ...state,
        isCollectionPage: payload,
      }
    case "setOffset":
      return {
        ...state,
        offset: payload,
      }
    default:
      return state
  }
}

export const AppContext = createContext(initialState)

export const Provider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = {
    state,
    dispatch,
  }

  // @ts-ignore
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
