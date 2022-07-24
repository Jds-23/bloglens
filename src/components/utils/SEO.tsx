import Head from 'next/head'
import React, { FC } from 'react'
import { DESCRIPTION, TITLE } from 'src/constants'

interface Props {
  title?: string
  description?: string
}

const SEO: FC<Props> = ({ title = TITLE, description = DESCRIPTION }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5"
      />

      <link rel="preconnect" href="https://ik.imagekit.io" />
      <link rel="dns-prefetch" href="https://ik.imagekit.io" />
      {/* <link rel="preconnect" href="https://assets.lenster.xyz" /> */}
      {/* <link rel="dns-prefetch" href="https://assets.lenster.xyz" /> */}
      <link rel="preconnect" href="https://ipfs.infura.io" />
      <link rel="dns-prefetch" href="https://ipfs.infura.io" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
  )
}

export default SEO
