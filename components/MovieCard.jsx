import React from 'react'
import Link from 'next/link'

const MovieCard = ({ img, title, id }) => (
    <div>
        <Link href="/movie/[id]" as={`movie/${id}`} >
            <a>
                <img src={img} alt={title} />

                <p>{title}</p>
            </a>
        </Link>
    </div>
);

export default MovieCard;