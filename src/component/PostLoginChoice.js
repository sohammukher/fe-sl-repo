import React from 'react'
import MenuType from './MenuType'

const PostLoginChoice = () => {

    const type = [
        {name:"Kids",
        image:"https://images.inc.com/uploaded_files/image/1920x1080/getty_118389834_231136.jpg"},

        {name:"Adults",
        image:"https://media.thegospelcoalition.org/wp-content/uploads/2023/03/06163341/serving-youth-young-adult-1920x1080.jpg"},
    ]
    
  return (
    <div>
        <div className='p-2 mt-20   text-4xl text-center'>Choose your age group </div>


        <div className=' flex m-20  justify-center'>
            {type.map((curr,index)=><MenuType key={index} props={curr}/>)}
        </div>



        


    </div>
  )
}

export default PostLoginChoice