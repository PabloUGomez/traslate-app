import { Form } from 'react-bootstrap'
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../consts'
import { SectionType, type FromLanguage, type Language } from '../types.d'

type LanguageSelectorProps =
| { type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void }
| { type: SectionType.To, value: Language, onChange: (language: Language) => void }

export const LanguageSelector = ({ onChange, type, value }: LanguageSelectorProps) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }

  return (
    <Form.Select aria-label='Seleciona un idioma' onChange={handleOnChange} value={value}>
      {type === SectionType.From && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key} value={key}>
          {literal}
        </option>
      ))}
    </Form.Select>
  )
}
