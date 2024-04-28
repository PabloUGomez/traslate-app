import { AUTO_LANGUAGE } from '../consts'
import {
  type State,
  type Action,
  type Language,
  type FromLanguage
} from '../types.d'
import { useReducer } from 'react'

const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

const reducer = (state: State, action: Action) => {
  const { type } = action

  switch (type) {
    case 'SET_FROM_LANGUAGE':
      return { ...state, fromLanguage: action.payload }
    case 'SET_TO_LANGUAGE':
      return { ...state, toLanguage: action.payload }
    case 'SET_FROM_TEXT':
      return { ...state, loading: true, fromText: action.payload, result: '' }
    case 'SET_RESULT':
      return { ...state, loading: false, result: action.payload }
    case 'INTERCHANGE_LANGUAGES':
      if (state.fromLanguage === AUTO_LANGUAGE) return state
      return {
        ...state,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage
      }
    default:
      return state
  }
}

export function useStore () {
  const [{ fromLanguage, toLanguage, fromText, result, loading }, dispatch] =
    useReducer(reducer, initialState)

  const setFromLanguage = (payload: FromLanguage) => {
    dispatch({ type: 'SET_FROM_LANGUAGE', payload })
  }

  const setToLanguage = (payload: Language) => {
    dispatch({ type: 'SET_TO_LANGUAGE', payload })
  }

  const setFromText = (payload: string) => {
    dispatch({ type: 'SET_FROM_TEXT', payload })
  }

  const setResult = (payload: string) => {
    dispatch({ type: 'SET_RESULT', payload })
  }

  const interchangeLanguages = () => {
    dispatch({ type: 'INTERCHANGE_LANGUAGES' })
  }

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    dispatch,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult,
    interchangeLanguages
  }
}
