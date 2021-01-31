import React from 'react';
import { Checkbox } from '@material-ui/core';

function UserRow() {
    return (
        <div>
            <label class="username">Name: </label>
            <Checkbox class = "check" />
            <Checkbox class = "check" />
            <Checkbox class = "check" />
            <Checkbox class = "check" />
        </div>
    )
}

export default UserRow