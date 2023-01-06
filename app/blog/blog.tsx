'use client';

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../home.module.css'
import Link from 'next/link';

import { CardGridContent } from '../components';

import {useState} from 'react'

const inter = Inter({ subsets: ['latin'] })


type BlogListing = {
    post_id: string,
    live_version_id: string,
    upload_timestamp: number,
    title: string,
    description: string,
    tags: string[],
}

function cardifyBlogListing(arg0 : any) {
    const listing = arg0 as BlogListing
    const href = `/blog/post/${listing.post_id}/${listing.live_version_id}`
    return (
        <div key={listing.post_id} className="card w-80 bg-primary shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{listing.title}</h2>
                <p>{listing.description}</p>
                <p><i>Uploaded {new Date(listing.upload_timestamp*1000).toLocaleDateString("en-us")}</i></p>
                <div className="card-actions justify-end">
                <a className="btn btn-primary" href={href}>Read</a>
                </div>
            </div>
        </div>
    )
}

export default function Blog(
    {listings}:
    {listings: any[]}
) {
  return (
    <>
        <div className="container w-10/12">
            {CardGridContent({
                contents: listings,
                conv: cardifyBlogListing
            })}
        </div>
    </>
  )
}
