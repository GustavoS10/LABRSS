import React from 'react'
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    ListGroup,
    ListGroupItem,
    CardLink,
    Container,
    CardGroup,
    CardImg,
    CardSubtitle,
} from 'reactstrap'
import './Members.css'

const Members = () => {
  return (
    <div>
        <Container fluid id='CMembers'>
            <h1>Conheça um pouco sobre a equipe! <a name="equipe"></a></h1>
            <CardGroup>
                <Card>
                    <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h4">
                            Nome
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h5"
                        >
                            Projeto
                        </CardSubtitle>
                        <CardText>
                            Descrição do que fez no projeto
                        </CardText>
                        <ListGroup flush>
                            <ListGroupItem>
                            Profissao/estudo
                            </ListGroupItem>
                            <ListGroupItem>
                            Profissao/estudo
                            </ListGroupItem>
                        </ListGroup>
                        <CardBody id='cb'>
                            <CardLink href="#">
                            Portfolio
                            </CardLink>
                        </CardBody>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h4">
                            Nome
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h5"
                        >
                            Projeto
                        </CardSubtitle>
                        <CardText>
                            Descrição do que fez no projeto
                        </CardText>
                        <ListGroup flush>
                            <ListGroupItem>
                            Profissao/estudo
                            </ListGroupItem>
                            <ListGroupItem>
                            Profissao/estudo
                            </ListGroupItem>
                        </ListGroup>
                        <CardBody id='cb'>
                            <CardLink href="#">
                            Portfolio
                            </CardLink>
                        </CardBody>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h4">
                            Nome
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h5"
                        >
                            Projeto
                        </CardSubtitle>
                        <CardText>
                            Descrição do que fez no projeto
                        </CardText>
                        <ListGroup flush>
                            <ListGroupItem>
                            Profissao/estudo
                            </ListGroupItem>
                            <ListGroupItem>
                            Profissao/estudo
                            </ListGroupItem>
                        </ListGroup>
                        <CardBody id='cb'>
                            <CardLink href="#">
                            Portfolio
                            </CardLink>
                        </CardBody>
                    </CardBody>
                </Card>
            </CardGroup>
        </Container>
    </div>
  )
}

export default Members