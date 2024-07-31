import React from 'react'
import Head from 'next/head';
import Specialities from '../components/Specialities.jsx';

export default function specialities() {
  return (
    <div>
      <Head>
        <title>ESBA DIVE | Specialities</title>
        <link rel="icon" href="https://cdn.discordapp.com/attachments/841443299839574017/1268233056620122142/diving-mask_1f93f.png?ex=66abad93&is=66aa5c13&hm=46dee9a6891380d116200ccb3bf46ebedac3ea8a54760d2a398bc916f4501c95&" />
      </Head>
      <Specialities />
    </div>
  )
}
