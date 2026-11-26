// 4-useInput
import { useState } from "react";
export default function useInput(initial = "")
{
const [value,setValue]=useState(initial)
const onChange=(event)=>setValue(event.target.value)
const reset=()=> setValue(initial)
return { value, onChange, setValue, reset }
}