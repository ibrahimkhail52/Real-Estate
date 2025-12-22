import React from 'react'
import PropertySearch from './PropertySearch/PropertySearch'
import PropertiesForm from './Properties Form/PropertiesForm'

export default function Properties() {
  return (
    <div>
      <section id="properties-page">
        <PropertySearch />
      </section>
      <section id="categories">
        <PropertiesForm />
      </section>
    </div>
  );
}


