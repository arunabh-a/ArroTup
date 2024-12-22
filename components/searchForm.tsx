import React from 'react'
import Form from "next/form";
import SearchFormReset from "@/app/components/searchFormReset";


const SearchForm = ({ query } : { query?: string }) => {

    return (
        <Form action='/' scroll={false} className='search-form'>
            <input name="query" type="text" defaultValue='' className='search-input' placeholder="Search" />

            <div className='flex gap-2'>
                {query && <SearchFormReset />}
                <button type='submit' className='search-btn text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="48px"
                         fill="#e8eaed">
                        <path
                            d="M796-121 533-384q-30 26-69.96 40.5Q423.08-329 378-329q-108.16 0-183.08-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.13-57.5Q572-504 572-585t-56.87-138.5Q458.25-781 377-781q-82.08 0-139.54 57.5Q180-666 180-585t57.46 138.5Q294.92-389 377-389Z"/>
                    </svg>
                </button>
            </div>
        </Form>
    )
}
export default SearchForm
