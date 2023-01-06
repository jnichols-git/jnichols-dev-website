'use client';

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../home.module.css'
import Link from 'next/link';

import { CardGridContent } from '../components';

import {useState} from 'react'

type BlogListing = {
    post_id: string,
    live_version_id: string,
    upload_timestamp: number,
    update_timestamp: number,
    title: string,
    description: string,
    tags: string[],
}

function tags_badges(arg0 : any) {
  const tags = arg0 as string[] || null
  if(tags == null || tags.length == 0) {
    return <br/>
  } else {
    return tags.map((tag) => {
      return <div key={tag} className="badge badge-secondary">{tag}</div>
    })
  }
}

function listings_cards(arg0 : any) {
    const listing = arg0 as BlogListing
    const href = `/blog/post/${listing.post_id}/${listing.live_version_id}`
    return (
        <div key={listing.post_id} className="card w-80 bg-base-200 border-4 border-primary shadow-xl">
            <div className="card-body">
              <>
                <h2 className="card-title">
                  <>{listing.title}</>
                </h2>
                {tags_badges(listing.tags)}
                <p>
                  {listing.description}
                </p>
                <p><i>Uploaded {new Date(listing.upload_timestamp*1000).toLocaleDateString("en-us")}</i></p>
                <div className="card-actions justify-end">
                <a className="btn btn-primary" href={href}>Read</a>
                </div>
              </>
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
        <div className="container w-10/12 flex flex-col justify-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold text-center">Blog</h1>
            <p className="py-6 text-center">I write blog posts about projects, my pets, tech news, and anything else that comes to mind. If you want to know more about me as a consultant, engineer, etc., this is the place! Working on the blog backend is an ongoing project for me--you'll see this page change quite a bit over time as I add and change features.</p>
          </div>
            {CardGridContent({
                contents: listings,
                conv: listings_cards,
            })}
        </div>
    </>
  )
}
