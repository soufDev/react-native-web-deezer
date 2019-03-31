import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components';

export const StyledTextInput = styled(TextInput)`
    padding: 10px;
    border: 1px solid gray;
    font-size: 16px;
    background-color: white;
    &:focus {
        border: 3px solid gray;
        border-radius: 5px;
    }
`

export const SearchInput = ({ value, onChange, onSubmit }) => {
    return (
        <StyledTextInput
            onChangeText={onChange}
            value={value}
            onSubmitEditing={onSubmit}
            placeholder="Search By Name"
        />
    )
  }