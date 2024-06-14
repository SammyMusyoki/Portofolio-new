// import React from 'react'
// import { Button } from '../ui/button'
// import { Search } from "lucide-react";


// interface SearchBarBtnProps {
//     onClick?: () => void
//     kbd?: string
// }

// const ACTION_KEY_DEFAULT = "CTRL"

// const SearchBarBtn = ({ onClick, kbd = ACTION_KEY_DEFAULT }: SearchBarBtnProps) => {
//   return (
//     <Button
//       variant="ghost"
//       className="mx-4 flex size-[34px] cursor-text items-center justify-center rounded-md border px-2 py-4 text-sm hover:border-violet-600 hover:bg-gray-100 dark:hover:border-violet-600 dark:hover:bg-gray-800 [@media(min-width:900px)]:w-[unset]"
//     >
//       <span className="my-2 block  w-4 [@media(min-width:900px)]:mr-2">
//         <Search size={16} />
//       </span>
//       <span className="mr-8 text-xs hidden [@media(min-width:980px)]:block">
//         Search...
//       </span>
//       <kbd
//         className={`hidden  whitespace-nowrap rounded px-1 align-middle font-medium leading-4 tracking-wide [font-size:10px] [@media(min-width:900px)]:inline-block ${"border border-slate-400/70 text-slate-500 dark:border-slate-600 dark:text-slate-400"}`}
//       >
//         {kbd}
//       </kbd>
//       <kbd
//         className={`ml-1 hidden whitespace-nowrap rounded px-1 align-middle font-medium leading-4 tracking-wide [font-size:10px] [@media(min-width:900px)]:inline-block ${"border border-slate-400/70 text-slate-500 dark:border-slate-600 dark:text-slate-400"}`}
//       >
//         K
//       </kbd>
//     </Button>
//   );
// }

// export default SearchBarBtn
