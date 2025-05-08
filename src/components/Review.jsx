import { enqueueSnackbar } from "notistack";
import { usePage } from "../contexts/Pages";
import Button from "./Button";


export default function Review() {

  const { able, setAble, data } = usePage()

  const handleSubmit = () => {
    enqueueSnackbar('Submitted Successfully!', { variant: 'success' })
    localStorage.setItem('submittedData', JSON.stringify(data))
    // localStorage.setItem('dta',JSON.stringify(null))
  } 

  return (
    <div>
      <h2 className="text-[20px]">Review</h2>

      <table className="w-full table-auto text-left">
        <tbody>
          <tr className="mt-4">
            <th className="pr-4 py-1 align-top">Name</th>
            <td className=" px-2 py-1 rounded-md">{data.name}</td>
          </tr>
          <tr className="mt-4">
            <th className="pr-4 py-1 align-top">Email</th>
            <td className=" px-2 py-1 rounded-md">{data.email}</td>
          </tr>

          {data.interests.sports.interest && (
            <tr className="mt-4">
              <th className="pr-4 py-1 align-top">Sports</th>
              <td className="space-x-2">
                {data.interests.sports.favourite.map((dta, index) => (
                  <span key={index} className=" px-2 py-1 rounded-md inline-block">
                    {dta}
                  </span>
                ))}
              </td>
            </tr>
          )}

          {data.interests.music.interest && (
            <tr className="mt-4">
              <th className="pr-4 py-1 align-top">Music</th>
              <td className="space-x-2">
                {data.interests.music.favourite.map((dta, index) => (
                  <span key={index} className=" px-2 py-1 rounded-md inline-block">
                    {dta}
                  </span>
                ))}
              </td>
            </tr>
          )}
        </tbody>
      </table>



      <span>
        <input
          checked={!able}
          onClick={() => setAble(!able)}
          type="checkbox" name="" id="terms" /> &nbsp;
        <label htmlFor="terms">I agree to the <b className="text-amber-800">Terms & Conditions</b></label>
      </span>
      <section className="flex justify-between px-4 pt-6">
        <Button path='Preference' />
        <button
          onClick={handleSubmit}
          className={` px-2 py-1 rounded-md 
            ${able ? 'bg-slate-200' : 'bg-green-400 cursor-pointer'} `}
          disabled={able}
        >
          Submit
        </button>
      </section>
    </div>
  )
}