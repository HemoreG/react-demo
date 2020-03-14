import React from 'react';
import {Button, Columns, List} from 'react-bulma-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function AppList(props) {
    return (
        <ul>
            {
                props.items.map((item, index) =>
                    <List.Item key={index}>
                        <Columns>
                            <Columns.Column size={10}>
                                {item}
                            </Columns.Column>
                            <Columns.Column size={2}>
                                <Button size={"small"} onClick={() => props.removeItem(index)}>
                                    <FontAwesomeIcon size="xs" icon="trash"/>
                                </Button>
                            </Columns.Column>
                        </Columns>
                    </List.Item>
                )
            }
        </ul>
    );
}

export default AppList;