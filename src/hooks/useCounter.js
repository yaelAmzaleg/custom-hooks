//2-useCounter
import { useState } from "react";
export default function useCounter(initialValue = 0)
{
const [value,setValue]=useState(initialValue)
const inc=()=>setValue(prev=> prev+1)
const dec=()=> setValue(prev=> prev-1)
const reset=()=> setValue(initialValue)
return { value, inc, dec, reset }
}
