// 5-useTextArea
import { useState } from "react";
export default function useTextArea(initial = "")
{
const [value,setValue]=useState(initial)
const onChange=(event)=>setValue(event.target.value)
const reset=()=> setValue(initial)
return { value, onChange, setValue, reset }
}