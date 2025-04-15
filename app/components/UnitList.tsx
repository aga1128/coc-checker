import React from 'react'
import { Troop } from '../types/coc'

type Props = {
  unit: Troop
}

const UnitList = ({ unit }: Props) => {
  return (
    <>
      {unit.name}:{unit.level}:{unit.maxLevel}
    </>
  )
}

export default UnitList