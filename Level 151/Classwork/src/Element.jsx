import React from 'react'

function Element({ Task, Title }) {
    return (
        <li>
            <span>{Task}</span>
            <span>{Title}</span>
            <div>
                <button>Edit</button>
                <button>Delete</button>
                <input type="checkbox" />
            </div>
        </li>
    )
}

export default Element
