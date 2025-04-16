import React from 'react';
import UnitList from '../components/UnitList';
import PetList from '../components/PetList';
import { Troop } from '../types/coc'
import { PET_LIST } from '../constants/coc';


type Props = {
  troops: Troop[] | null;
}

const TroopList = ({ troops }: Props) => {

const filterCondition = (name: string): boolean => {
  return PET_LIST.includes(name)
}

const units = troops?.filter((obj: Troop) => {
  return !filterCondition(obj.name) && obj.village === "home"
})
const pets = troops?.filter((obj: Troop) => {
  return filterCondition(obj.name) && obj.village === "home"
})

// const filterCondition = troops?.filter((obj: Troop) => {
//   return findFilterCondition(obj.name);
// })
// console.log(troops);
// console.log(filterCondition);
  
  return (
    <>
      <div>Troops</div>
      <p>units</p>
      {units?.map((unit) => (
        <UnitList key={unit.name} unit={unit} />
      ))}
      <p>pets</p>
      {pets?.map((pet) => (
        <PetList key={pet.name} pet={pet} />
      ))}
    </>
  )
}

export default TroopList