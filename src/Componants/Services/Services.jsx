import React from 'react'
import FeatureCards from './FeatureCards/FeatureCards'
import PropertySellingServices from './PropertySellingServices/PropertySellingServices'
import PropertyManagementServices from './PropertyManagementServices/PropertyManagementServices'
import InvestmentAdvisory from './InvestmentAdvisory/InvestmentAdvisory'
import ServicesHero from './ServicesHero/ServicesHero'

export default function Services() {
  return (
    <div>
      <ServicesHero/>
      <FeatureCards />
      <PropertySellingServices />
      <PropertyManagementServices />
      <InvestmentAdvisory/>
    </div>
  )
}
