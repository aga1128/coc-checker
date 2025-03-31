import React from 'react';
import { HeroData } from '../types/coc';

type Props = {
  heroData: HeroData
}

const HeroCard = ({ heroData }: Props) => {
  return (
    <div>{heroData.name}:{heroData.maxLevel}</div>
  )
}

export default HeroCard