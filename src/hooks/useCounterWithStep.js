//3-useCounterWithStep
import { useState } from "react";
export default function useCounterWithStep(initialValue = 0,step=1)
{
const [value,setValue]=useState(initialValue)
const inc=()=>setValue(prev=> prev+step)
const dec=()=> setValue(prev=> prev-step)
const reset=()=> setValue(initialValue)
return { value, inc, dec, reset }
}



