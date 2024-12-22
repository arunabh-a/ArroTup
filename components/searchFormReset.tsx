'use client';

import React from 'react'
import Link from "next/link";

const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement;
        if(form) form.reset();
    }
    return (
        <button className='reset' onClick={reset}>
            <Link href="/" className='search-btn text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px"
                     fill="#e8eaed">
                    <path
                        d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z"/>
                </svg>
            </Link>
        </button>
    )
}
export default SearchFormReset
