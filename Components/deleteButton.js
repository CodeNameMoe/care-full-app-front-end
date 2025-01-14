import React from 'react'
import {CloseIcon} from '@chakra-ui/icons'
import {IconButton} from '@chakra-ui/react'

const DeleteButton = ({onDelete}) => {
    return (
        <div className="rightleft">
            <IconButton icon={<CloseIcon color="roots.0"/>} size='xs' isRound='true' className="deleteButton" zIndex="1" onClick={onDelete}/>
        </div>
    )
}

export default DeleteButton