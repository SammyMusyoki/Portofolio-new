import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button';
import { X, Search } from "lucide-react";
import { usePathname, useSearchParams } from 'next/navigation';

type SearchModalType = {
    isOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SearchParams {
    term: string
}

const SearchModal = ({ isOpenModal }:SearchModalType) => {

    const searchParams = useSearchParams()
    const pathname = usePathname()

    // const handleSearch = ({ term }: SearchParams) => {
    //     const params = new URLSearchParams(searchParams)

    //     if (term) {
    //         params.set("query", term)
    //     } else {
    //         params.delete('query')
    //     }
    // }
  return (
    <div className='min-h-56 h-full'>
      <div className="flex gap-2">
        <div className="w-full flex flex-1 relative">
          <Input 
          placeholder='Search here...'
          className='outline-none '
          />
            <Button
            variant="default"
            className="absolute right-0"
            >
            <Search size={16} />
            </Button>
        </div>
        <Button
          onClick={() => isOpenModal(false)}
          variant="outline"
          className="flex right-1"
        >
          <X size={16} />
        </Button>
      </div>
      <div className='grid h-full place-content-center'>
        <p className=''>No search results.</p>
      </div>
    </div>
  );
}

export default SearchModal
