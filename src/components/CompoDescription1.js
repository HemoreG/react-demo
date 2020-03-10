import React, {useState} from "react";
import {Button, Columns, Container, Heading, Section} from "react-bulma-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import MultiFirefox from "./MultiFirefox";
import {withTranslation} from "react-i18next";

function CompoDescription1({t}) {
    const [number2, setNumber2] = useState(3);

    return (
        <Container>
            <Columns>
                <Columns.Column size={6}>
                    <Section>
                        <Heading>{t('componentDescription1')}</Heading>
                        <Button.Group>
                            <Button onClick={() => setNumber2(!number2 ? 0 : number2 - 1)}>
                                <span>{t('minusFirefox')}</span>
                                <span className="icon">
                                        <FontAwesomeIcon icon="minus"/>
                                    </span>
                            </Button>
                            <Button onClick={() => setNumber2(number2 + 1)}>
                                <span>{t('plusFirefox')}</span>
                                <span className="icon">
                                        <FontAwesomeIcon icon="plus"/>
                                    </span>
                            </Button>
                        </Button.Group>
                    </Section>
                </Columns.Column>
                <Columns.Column size={6}>
                    <Section>
                        <Columns>
                            <MultiFirefox count={number2}/>
                        </Columns>
                    </Section>
                </Columns.Column>
            </Columns>
        </Container>
    );
}

export default withTranslation()(CompoDescription1)