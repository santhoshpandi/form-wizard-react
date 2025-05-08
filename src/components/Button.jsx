import { usePage } from "../contexts/Pages"


export default function Button({path}) {
  
  const {setPage} = usePage()
  return (
    <button
      onClick={()=>setPage(path)}
      className="bg-green-400 px-2 py-1 cursor-pointer">
      Back
    </button>
  )
}