import React from 'react'
import { Troop } from '../types/coc'

type Props = {
  troop: Troop
}

const TroopComponent = ({ troop }: Props) => {
  return (
    <>
      {troop.name}:{troop.level}
    </>
  )
}

export default TroopComponent