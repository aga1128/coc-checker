import React from 'react';
import HeroCard from '../components/HeroCard';
import { HeroData } from '../types/coc';

type Props = {
  name: string,
  heroesData: HeroData[]
}

const HeroList = ({ name, heroesData }: Props) => {
  return (
    <>
      {name}
      {heroesData.map((data) => (
        <HeroCard key={data.name} heroData={data} />
      ))}
    </>
  )
}

export default HeroList