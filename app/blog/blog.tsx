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

export type BlogListing = {
    post_id: string,
    live_version_id: string,
    archive_version_ids: string[],
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
    return <div className="flex flex-row gap-1">
      {tags.map((tag) => {
        return <div key={tag} className="badge badge-primary p-3">
          <a href={`/blog?tags=${tag}`}>{tag}</a>
        </div>
      })}
    </div>
  }
}

function timestamps_display(arg0 : number, arg1 : number) {
  let tT = new Date(Date.now());
  tT.setDate(tT.getDate()-3);
  let tUL = new Date(arg0*1000);
  let tUD = new Date(arg1*1000);
  const uploaded = <p><i>Uploaded {new Date(arg0*1000).toLocaleDateString("en-us")}</i></p>
  const updated = <p><i>Updated {new Date(arg1*1000).toLocaleDateString("en-us")}</i></p>
  return (
    <div className="indicator">
      {(tUL>tT || tUD > tT)?<span className="indicator-item badge badge-accent">!</span>:''}
      <div className="flex flex-col pr-3">
        {uploaded}
        {tUD>tUL?updated:''}
      </div>
    </div>
  )
}


function listings_cards(arg0 : any, idx : number) {
    const listing = arg0 as BlogListing
    const href = `/blog/post/${listing.post_id}/latest`
    return (
        <div key={listing.post_id} className={`card w-100% bg-base-200 border-4 border-primary drop-shadow-2xl`}>
            <div className="card-body">
                <>
                <h3 className={`card-title`}>{listing.title}</h3>
                {tags_badges(listing.tags)}
                <p>{listing.description}</p>
                {timestamps_display(listing.upload_timestamp, listing.update_timestamp)}
                <div className="card-actions justify-end">
                <a className="btn btn-primary" href={href}>Read</a>
                </div>
                </>
            </div>
        </div>
    )
}

function ph() {
  return (
    <div className="flex justify-center content-center rounded-md"><h3>Fetching listings...</h3></div>
  )
}

export default function Blog(
    {listings, hasFilters}:
    {listings: Promise<BlogListing[]>, hasFilters: boolean}
) {

  let [content, setContent] = useState<JSX.Element>(ph());
  listings.then((ls) => {
    setContent(<ResponsiveGrid>{ls.map(listings_cards)}</ResponsiveGrid>)
  });
  return (
    <div className="flex flex-col gap-y-10 min-h-screen">
        <h1 className={`text-center`}>Blog</h1>
        <p className={`text-center`}>I write blog posts about projects, my pets, tech news, and anything else that comes to mind. If you want to know more about me as a consultant, engineer, etc., this is the place! Working on the blog backend is an ongoing project for me--you'll see this page change quite a bit over time as I add and change features.</p>
        <a className={`btn btn-primary ${hasFilters?'':'hidden'}`} href='/blog'>Clear Filters</a>
        {content}
    </div>
  )
}
