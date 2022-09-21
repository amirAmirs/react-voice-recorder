import { ReactElement } from 'react'
import { IIcon } from '../../utils/base-models'

function ResumeVoiceIcon({
    color = 'white',
    height = 16,
    width = 16
}: IIcon): ReactElement {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 350.713 490.01"
            fill={color}
        >
            <path
                d="M345.7,385h8.609c55.371,0,100.7-45.324,100.7-100.7V135.69c0-55.371-45.324-100.7-100.7-100.7H345.7c-55.371,0-100.7,45.324-100.7,100.7V284.3C245,339.671,290.324,385,345.7,385Zm-65.7-249.3A65.767,65.767,0,0,1,345.7,70h8.609A65.767,65.767,0,0,1,420,135.7V284.31a65.767,65.767,0,0,1-65.7,65.7H345.7a65.767,65.767,0,0,1-65.7-65.7ZM472.505,490h-87.5V451.852c70-14.664,140.35-82.32,140.35-171.85a17.623,17.623,0,0,0-35.246,0c0,82.426-57.609,140-140.04,140s-140.04-57.574-140.04-140a17.506,17.506,0,0,0-17.5-17.5c-9.66,0-17.887,7.84-17.887,17.5,0,89.531,70.352,157.22,140.35,171.85V490h-87.5a17.5,17.5,0,0,0,0,35h245a17.5,17.5,0,1,0,0-35Z"
                transform="translate(-174.642 -34.99)"
            />
        </svg>
    )
}

export default ResumeVoiceIcon