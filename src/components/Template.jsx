import { useEffect, useState } from "react"
import { usePage } from "../contexts/Pages"
import { TiTick } from "react-icons/ti";


export default function Template({ title, dta }) {

  const { setData, data } = usePage()


  function handleClick(datas, setClicked, clicked) {
    setClicked(!clicked)
    if (title === 'Sports') {
      const currentFavourites = data.interests.sports.favourite;
      let updatedFavourites

      if (!clicked) updatedFavourites = new Set([...data.interests.sports.favourite, datas]);
      else updatedFavourites = currentFavourites.filter(item => item !== datas);
      
      setData({
        ...data,
        interests: {
          ...data.interests,
          sports: {
            ...data.interests.sports,
            favourite: Array.from(updatedFavourites)
          }
        }
      })
    }
    else if (title === 'Music') {
      
      const currentFavourites = data.interests.music.favourite;
      let updatedFavourites

      if (!clicked) updatedFavourites = new Set([...data.interests.music.favourite, datas]);
      else updatedFavourites = currentFavourites.filter(item => item !== datas);

      setData({
        ...data,
        interests: {
          ...data.interests,
          music: {
            ...data.interests.music,
            favourite: Array.from(updatedFavourites)
          }
        }
      })
    }
  }

  return (
    <section>
      <h2 className="text-[20px] my-2">{title}</h2>
      <ul className="grid grid-cols-3 space-x-2 space-y-1">
        {
          dta.map((datas, index) => {
            const section = title.toLowerCase();
            const isSelected = data.interests[section].favourite.includes(datas);
            const [clicked, setClicked] = useState(isSelected)           
            

            return <li onClick={() => handleClick(datas, setClicked, clicked, isSelected)}
              className="px-4 py-2 bg-[#FFCB9B] text-center cursor-pointer rounded-md relative"
              key={index}>
              {datas}

              {
                clicked &&
                <TiTick className="absolute -top-1.5 -right-1.5 bg-blue-600 rounded-full text-white" />
              }
            </li>
          })
        }
      </ul>
    </section>
  )
}