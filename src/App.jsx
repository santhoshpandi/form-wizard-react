import './index.css'
import { choice } from './route'
import { usePage } from './contexts/Pages'
import { SnackbarProvider } from 'notistack'


function App() {

  const { page, setPage } = usePage()


  return (
    <div className='bg-[#dafffd] md:min-w-[30%] md:max-w-[40%] w-[100%] mx-auto rounded-md '>
      <SnackbarProvider />
      <section className='bg-[#124E65] mt-10 flex justify-around items-center px-2 py-4 rounded-md'>
        <span
          // onClick={() => setPage('BasicInfo')}
          className={`${page === 'BasicInfo' ? 'bg-slate-300 text-black' : ' text-white'} px-2 py-1  rounded-md `}>Basic Info</span>
        <b className='text-3xl'>&gt;</b>
        <span
          // onClick={() => setPage('Preference')}
          className={`${page === 'Preference' ? 'bg-slate-300 text-black' : ' text-white'} px-2 py-1  rounded-md `}>Preference</span>
        <b className='text-3xl'>&gt;</b>
        <span
          // onClick={() => setPage('Review')}
          className={`${page === 'Review' ? 'bg-slate-300 text-black' : ' text-white'} px-2 py-1  rounded-md `}>Review</span>
      </section>
      <div className='p-4'>
        {choice[page]}
      </div>

    </div>
  )
}

export default App
