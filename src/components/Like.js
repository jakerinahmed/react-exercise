import React, {useState} from 'react'

function Like () {


    const [like, setLike] = useState(false)

    const resetLike = (e) => {
        setLike(!like)
        if (!like) {
            e.target.textContent = 'Liked'
        } else {
            e.target.textContent = 'Unliked'
        }
    }

    return (
        <div>
            <button 
            role='switch'
            aria-checked={like}
            onClick={resetLike}
            >
                Unliked
            </button>
        </div>
    )
}

export default Like
