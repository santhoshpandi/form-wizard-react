import { useState } from "react";
import Button from "./Button";
import { usePage } from "../contexts/Pages";
import Template from "./Template";
import { enqueueSnackbar } from "notistack";

export default function Preference() {

  const sports = ['Cricket', 'FootBall', 'VolleyBall', 'BasketBall']
  const music = ['Piano', 'Flute', 'Triumphet']
  const { data, setPage } = usePage()

  function submitData(e) {
    const { sports, music } = data.interests
    if (sports.interest && sports.favourite.length === 0) {
      enqueueSnackbar('Click atleast one sports',{variant:'warning'})
    }
    else if (music.interest && music.favourite.length === 0) {
      enqueueSnackbar('Click atleast one music',{variant:'warning'})
    }
    else {
      setPage("Review")
    }
  }

  return (
    <div>
      Preference
      {
        data.interests.sports.interest &&
        <Template title='Sports' dta={sports} />
      }
      {
        data.interests.music.interest &&
        <Template title='Music' dta={music} />
      }

      <section className="flex justify-between px-4 pt-6">
        <Button path='BasicInfo' />
        <button
          onClick={(e) => submitData(e)}
          className="bg-green-400 px-2 py-1 cursor-pointer">
          Next
        </button>
      </section>
    </div>
  )
}