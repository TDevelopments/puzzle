import { Row, Col, Button } from 'reactstrap'

export default function IntroductionPage() {
  return (
    <div className="introduction padding-introduction">
      <h2>Introdución</h2>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
      <div className="d-flex">
        <Button color="primary" className="mx-auto border-button my-3">
          Siguiente
        </Button>
      </div>
    </div>
  )
}
