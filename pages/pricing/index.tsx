import { MainLayout } from "../../components/Layouts/MainLayout";

import React, { ReactNode } from 'react'

export default function Pricing(){
  return (
    <h1>Pricing</h1>
  )
}
 
Pricing.getLayout = function getLayout( page: ReactNode ) {
    return(
        <MainLayout 
        descriptionContent={"hola"}
        title={"Pricing"}
        >
          { page }
        </MainLayout>
    )
}

