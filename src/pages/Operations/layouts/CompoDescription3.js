import React, {useState} from "react";
import {Button, Columns, Container, Heading, Section} from "react-bulma-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {withTranslation} from "react-i18next";
import ColorCat from "../../../components/Operations/ColorCat";

function CompoDescription3({t}) {
    const [color, setColor] = useState(0);
    const colors = ['white', 'gold', 'lemonchiffon', 'lightgreen', 'lightcyan', 'lightblue', 'thistle', 'pink', 'snow', 'gainsboro', 'brown'];


    return (
        <Container>
            <Columns>
                <Columns.Column size={6}>
                    <Section>
                        <Heading>{t('componentDescription4')}</Heading>
                        <Button.Group>
                            <Button onClick={() => setColor(!color ? colors.length - 1 : color - 1)}>
                                    <span className="icon">
                                        <FontAwesomeIcon icon="chevron-left"/>
                                    </span>
                                <span>{t('previous')}</span>
                            </Button>
                            <Button onClick={() => setColor(color < colors.length - 1 ? color + 1 : 0)}>
                                <span>{t('next')}</span>
                                <span className="icon">
                                        <FontAwesomeIcon icon="chevron-right"/>
                                    </span>
                            </Button>
                        </Button.Group>
                    </Section>
                </Columns.Column>
                <Columns.Column size={6}>
                    <Section>
                        <Columns>
                            <ColorCat color={colors[color]}/>
                        </Columns>
                    </Section>
                </Columns.Column>
            </Columns>
        </Container>
    );
}

export default withTranslation()(CompoDescription3)