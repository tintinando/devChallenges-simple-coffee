import { FC, useState } from 'react'

import heroImg from '../assets/bg-cafe.jpg'
import BucleVector from './BucleVector'
import Button from './Button'
import CardContainer from './CardContainer'

const Collection: FC = () => {
  const [allProducts, setAllProducts] = useState(false)

  return (
    <>
      <div className='w-full h-screen fixed bg-usr-bg-primary -z-50'>
        <img
          className='w-full'
          src={heroImg}
          alt='cafe with a woman sitting on her back'
        />
      </div>
      <div>
        <div className='font-dm-sans flex flex-col items-center justify-center min-h-screen'>
          <div className='usr-main overflow-hidden flex flex-col items-center bg-usr-bg-secondary xl:w-[1100px] lg:w-[710px] w-[390px] rounded-xl p-8 mb-8'>
            <div className='z-0 pt-[3rem] relative flex flex-col w-[324px] lg:w-[487px] items-center'>
            {/* ⬆️ transparent div for text column */}
            <div className='-z-10 absolute top-0 -right-4'><BucleVector /></div>
            <h2 className='text-usr-text-primary text-[2rem] font-semibold'>Our Collection</h2>
            <p className='text-usr-text-secondary font-semibold text-[16px] text-center'>
              Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
            </p>
            </div>
            <div className='flex flex-row m-6 gap-5'>
              <Button
                variant={allProducts ? undefined : 'secondary'}
                onClick={()=>setAllProducts(true)}>All Products
              </Button>
              <Button
                variant={allProducts ? 'secondary' : undefined}
                onClick={()=>setAllProducts(false)}>Available Now
              </Button>
            </div>
          <CardContainer allProducts={allProducts}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Collection
