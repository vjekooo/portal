import React from 'react'
import { Script } from 'gatsby'

export const GoogleAnalytics = ({ trackingId = 'G-YXZ62M5JFV' }) => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
        strategy="post-hydrate"
      />
      <Script id="google-analytics" strategy="post-hydrate">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${trackingId}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  )
}
