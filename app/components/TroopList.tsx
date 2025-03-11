import React from 'react'
import { Troop } from '../types/coc'
import TroopComponent from '../components/Troop';

type Props = {
  troops: Troop[] | null;
}

const TroopList = ({ troops }: Props) => {
  return (
    <>
      <div>Troops</div>
      {troops?.filter((obj: Troop) => obj.village === "home").map((troop) => (
        <TroopComponent key={troop.name} troop={troop} />
      ))}
    </>
  )
}

export default TroopList