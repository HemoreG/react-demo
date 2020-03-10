import React, {useState} from "react";
import {Button, Columns, Container, Heading, Section} from "react-bulma-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {withTranslation} from "react-i18next";
import Compo from "./Compo";

function CompoDescription2({t}) {
    const [number, setNumber] = useState(5);

    return (
        <Container>
            <Columns>
                <Columns.Column size={6}>
                    <Section>
                        <Heading>{t('componentDescription3')}</Heading>
                        <Button.Group>
                            <Button onClick={() => setNumber(!number ? 0 : number - 1)}>
                                <span>{t('minus')}</span>
                                <span className="icon">
                                        <FontAwesomeIcon icon="minus"/>
                                    </span>
                            </Button>
                            <Button onClick={() => setNumber(number + 1)}>
                                <span>{t('plus')}</span>
                                <span className="icon">
                                        <FontAwesomeIcon icon="plus"/>
                                    </span>
                            </Button>
                        </Button.Group>
                    </Section>
                </Columns.Column>
                <Columns.Column size={6}>
                    <Section>
                        <Compo count={number}/>
                    </Section>
                </Columns.Column>
            </Columns>
        </Container>
    );
}

export default withTranslation()(CompoDescription2)