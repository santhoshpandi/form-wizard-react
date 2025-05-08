import Button from "./Button";
import { choice } from "../route";
import { usePage } from "../contexts/Pages";
import { enqueueSnackbar } from "notistack";

export default function BasicInfo() {
  const { data, setData, setPage } = usePage()

  const handleData = (e) => {
    const { name, value, type, checked } = e.target

    if (type === 'checkbox') {
      setData({
        ...data,
        interests: {
          ...data.interests,
          [name]: {
            ...data.interests[name],
            interest: checked
          }
        }
      });
    }
    else {
      setData(
        {
          ...data,
          [name]: value
        }
      )
    }
  }

  const submitData = (e) => {
    e.preventDefault()
    if (data.name && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ) {
      setPage('Preference')
    }
    else {
      enqueueSnackbar('Fill the Necessary Details',{variant:'error'})
    }
  }

  return (
    <div>
      <h2 className="text-xl">Basic Info:</h2>

      <form action="">
        <div className="mt-0.5 flex flex-col">
          <label htmlFor="name">Name <span className="text-red-600">*</span></label>
          <input onChange={handleData}
            className="border mt-1 px-2 py-0.5"
            type="text" name="name" id="name" value={data.name} required />
        </div>
        <div className="mt-0.5 flex flex-col">
          <label htmlFor="email">Email <span className="text-red-600">*</span></label>
          <input onChange={handleData}
            className="border mt-1 px-2 py-0.5"
            type="email" name="email" id="email" value={data.email} required />
        </div>

        <div>
          <div className="mt-0.5 flex">
            <input className="border mt-1"
              onChange={handleData}
              checked={data.interests.sports.interest}
              type="checkbox" name="sports" id="sports" /> &nbsp;
            <label htmlFor="sports">Interested in Sports</label>
          </div>
          <div className="mt-0.5 flex">
            <input className="border mt-1"
              onChange={handleData}
              checked={data.interests.music.interest}
              type="checkbox" name="music" id="music" /> &nbsp;
            <label htmlFor="music">Interested in Music</label>
          </div>
        </div>


        <section className="flex justify-end px-4 pt-6">
          <button
            onClick={(e) => submitData(e)}
            className="bg-green-400 px-2 py-1 cursor-pointer">
            Next
          </button>
        </section>
      </form>
    </div>
  )
}