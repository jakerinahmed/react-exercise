import React, { useState } from 'react'

function Like () {

    const initialUnliked = 'Unliked'
    const [like, setLike] = useState(initialUnliked)

    function giveLike () {
        setLike('Liked')
    }

    function removeLike () {
        setLike('Unliked')
    }

    function resetLike (e) {
        if (e.target.textContent === "Unliked") {
            e.target.textContent = 'Liked'
        } else {
            e.target.textContent = 'Unliked'
        }
    }

    return (
        <div>
            <button onClick={resetLike}>
                Unliked
            </button>
        </div>
    )
}

export default Like
