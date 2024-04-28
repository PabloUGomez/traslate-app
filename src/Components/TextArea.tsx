import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'

interface TextAreaProps {
  type: SectionType
  value: string
  loading?: boolean
  onChange: (value: string) => void
}

const getPlaceholder = ({
  type,
  loading
}: {
  type: SectionType
  loading?: boolean
}) => {
  if (type === SectionType.From) return 'Escribe algo...'
  if (loading === true) return 'Cargando...'
  return 'Traducción'
}

export const TextArea = ({ type, value, loading, onChange }: TextAreaProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <Form.Control
      as='textarea'
      placeholder={getPlaceholder({ type, loading })}
      autoFocus={type === SectionType.From}
      disabled={type === SectionType.To}
      value={value}
      onChange={handleChange}
    />
  )
}
