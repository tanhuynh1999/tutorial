import React from 'react';
import Button from '@atlaskit/button';
import styled, {css} from 'styled-components';
import EditorDoneIcon from '@atlaskit/icon/glyph/editor/done';

const ButtonStyle = styled(Button)`
    margin-top: 5px;
    text-align: left;

    &, &:hover{
        ${(p) => 
            p.isCompleted && 
            css`
            text-decoration: line-through;
        `}
    }


    &:hover{
        .susccess-icon {
            display: inline-block;
        }
    }
    

    .susccess-icon {
        display: none;

        &:hover{
            background-color: #ccc;
            border-radius: 50%;
        }
    }
`;


export default function Todo({ todo, onCheckBtnClick}) {
    return (
        <div>
            <ButtonStyle
            isCompleted={todo.isCompleted}
            shouldFitContainer
            iconAfter={
                !todo.isCompleted && (
                    <span 
                        className="susccess-icon"
                        onClick={() => onCheckBtnClick(todo.id)}>
                            <EditorDoneIcon primaryColor="green"/>
                    </span>
                )
            }>{todo.name}</ButtonStyle>
        </div>
    );
}