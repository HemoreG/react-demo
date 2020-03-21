import React from 'react';
import {Card, Content, Heading, Image, Media} from 'react-bulma-components';

function CustomCard({infos}) {

    const customCard = {
        marginBottom: '1.5rem',
    };

    return (
        <Card style={customCard}>
            <Card.Content>
                <Media>
                    <Media.Item renderAs="figure" position="left">
                        <Image size={64} alt={infos.name} src={infos.img}/>
                    </Media.Item>
                    <Media.Item>
                        <Heading size={4}>{infos.name}</Heading>
                        <Heading subtitle size={6}>
                            <a href={infos.link}
                               target="_blank"
                               rel="noopener noreferrer">{infos.at}</a>
                        </Heading>
                    </Media.Item>
                </Media>
                {infos.description ?
                    (
                        <Content>
                            {infos.description}
                        </Content>
                    ) : null}
            </Card.Content>
        </Card>
    );
}


export default CustomCard;
