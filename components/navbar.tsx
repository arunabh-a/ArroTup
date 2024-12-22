import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {auth, signIn, signOut} from "@/auth";

const Navbar = async () => {
    const session = await auth();

    return (
        <div className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <div className="flex items-center">
                    <Link href="/public">
                        <Image src="/Arrotup.png" alt="logo" width={100} height={100}/>

                    </Link>
                    <p className="sub-heading !text-black !text-2xl font-semibold">Arro<strong className='text-primary font-work-sans font-semibold '>Tup</strong></p>
                </div>
                <div className="flex gap-4 text-black   mx-8">
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span className="sub-heading !text-black-200">Create</span>
                            </Link>

                            <button onClick={async () => {
                                'use server';
                                await signOut({redirectTo: "/"});
                            }}>
                                <span className="sub-heading !text-red-600">Logout</span>
                            </button>

                            <Link href={`/profile/${session?.id}`}>
                                <span className="sub-heading !text-black">{session?.user?.name}</span>
                            </Link>
                        </>
                    ) : (
                        <button onClick={async () => {
                            'use server';
                            await signIn('github')
                        }}>
                            <span className='sub-heading !text-black'>LOGIN</span>
                        </button>
                    )}
                </div>
            </nav>
        </div>
    )
}
export default Navbar
