'use client';

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../home.module.css'
import Link from 'next/link';

import { CardGridContent } from '../components';

import {useState} from 'react'
import ResponsiveGrid from '../components/layout/grid';

import { classHeader, classText } from '../style/text';

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
    return <div className="flex flex-row">
      {tags.map((tag) => {
        return <div key={tag} className="badge badge-secondary">{tag}</div>
      })}
    </div>
  }
}

function timestamps_display(arg0 : number, arg1 : number) {
  const uploaded = <p><i>Uploaded {new Date(arg0*1000).toLocaleDateString("en-us")}</i></p>
  const updated = <p><i>Updated {new Date(arg1*1000).toLocaleDateString("en-us")}</i></p>
  if(arg1 < arg0) {
    return (
      <div>{uploaded}</div>
    )
  } else {
    return (
      <div>{uploaded}{updated}</div>
    )
  }
}


function listings_cards(arg0 : any) {
    const listing = arg0 as BlogListing
    const href = `/blog/post/${listing.post_id}/${listing.live_version_id}`
    return (
        <div key={listing.post_id} className="card w-100% bg-base-200 border-4 border-primary shadow-xl">
            <div className="card-body">
              <>
                <h3 className={`card-title`}>
                  <>{listing.title}</>
                </h3>
                {tags_badges(listing.tags)}
                <p>
                  {listing.description}
                </p>
                {timestamps_display(listing.upload_timestamp, listing.update_timestamp)}
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
  let cards = listings.map(listings_cards);
  return (
    <>
        <h1 className={`text-center`}>Blog</h1>
        <p className={`text-center`}>I write blog posts about projects, my pets, tech news, and anything else that comes to mind. If you want to know more about me as a consultant, engineer, etc., this is the place! Working on the blog backend is an ongoing project for me--you'll see this page change quite a bit over time as I add and change features.</p>
        <ResponsiveGrid>
          {cards}
        </ResponsiveGrid>
    </>
  )
}
