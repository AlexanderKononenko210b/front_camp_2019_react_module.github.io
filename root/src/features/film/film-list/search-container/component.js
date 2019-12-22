import React from "react";
import propTypes from "prop-types";

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { ButtonComponent } from "../../shared/components";

import style from "../../../../assets/style"

const SearchComponent = (props) => {
    const { searchOnClickHandle,  searchOnChangeHandle } = props;
    return (
        <div style = { style.search }>
            <InputGroup className="mb-3">
                <FormControl
                    style = { style.searchInput }
                    placeholder = "Type search value"
                    onChange = { searchOnChangeHandle }>
                </FormControl>
                <InputGroup.Append>
                    <ButtonComponent 
                        style = { style.searchButton }
                        content = "Search"
                        onClickHandle = { searchOnClickHandle } >                    
                    </ButtonComponent>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}

SearchComponent.propTypes = {
    searchOnClickHandle: propTypes.func.isRequired,
    searchOnChangeHandle: propTypes.func.isRequired
}

export default SearchComponent;