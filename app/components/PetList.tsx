import React from 'react'
import { Troop } from '../types/coc'

type Props = {
  pet: Troop
}

const UnitList = ({ pet }: Props) => {
  return (
    <>
      {pet.name}:{pet.level}:{pet.maxLevel}
    </>
  )
}

export default UnitList