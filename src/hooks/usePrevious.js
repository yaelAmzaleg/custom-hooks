// 6-usePrevious
import { useEffect, useRef, useState } from "react";
export default function usePrevious(value)
{
const prevRef=useRef()
useEffect(()=>{
prevRef.current=value
},[value])
return prevRef.current
}