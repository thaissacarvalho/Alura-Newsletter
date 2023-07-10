import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

export default function ToggleTheme() {

    const systemPreference = window.matchMedia('(preferes-color-scheme: dark)').matches;
    const pageClasses =  document.documentElement.classList;

    useEffect(() => {
        systemPreference && pageClasses.add('dark');
    })
    const toggle = () => {
       pageClasses.toggle('dark');
    }
  return (
    <div className="hidden sm:block">
        <MoonIcon className="h-8 text-gray-100 block dark:hidden cursor-pointer" onClick={toggle}/> 
        <SunIcon className="h-8 text-gray-100 hidden dark:block cursor-pointer" onClick={toggle}/>
    </div>
  )
}