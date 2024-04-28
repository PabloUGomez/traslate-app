import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGE } from './consts'
import { SwitchIcon } from './Components/icons'
import { LanguageSelector } from './Components/LanguageSelector'
import { SectionType } from './types.d'
import { TextArea } from './Components/TextArea'
import { useEffect } from 'react'
import { translate } from './services/translate'

function App () {
  const {
    fromLanguage,
    loading,
    toLanguage,
    fromText,
    result,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult,
    interchangeLanguages
  } = useStore()

  useEffect(() => {
    if (fromText === '') return
    translate({ fromLanguage, toLanguage, text: fromText })
      .then(result => {
        if (result == null) return
        setResult(result)
      })
      .catch(() => { setResult('Error') })
  }, [fromText])

  return (
    <Container fluid>
      <main>
        <h2>Translate App</h2>
        <Row>
          <Col>
            <Stack gap={2}>
              <LanguageSelector
                type={SectionType.From}
                value={fromLanguage}
                onChange={setFromLanguage}
              />
              <TextArea
                type={SectionType.From}
                value={fromText}
                onChange={setFromText}
              >
              </TextArea>
            </Stack>
          </Col>
          <Col xs='auto'>
            <Button
              variant='link'
              disabled={AUTO_LANGUAGE === fromLanguage}
              onClick={() => {
                interchangeLanguages()
              }}
            >
              <SwitchIcon />
            </Button>
          </Col>
          <Col>
            <Stack gap={2}>
              <LanguageSelector
                type={SectionType.To}
                value={toLanguage}
                onChange={setToLanguage}
              />
              <TextArea
                loading={loading}
                type={SectionType.To}
                value={result}
                onChange={setResult}
              >
              </TextArea>
            </Stack>
          </Col>
        </Row>
      </main>
    </Container>
  )
}

export default App
