'use client';

import Script from 'next/script';

const GoogleAnalytics = () => {
    const GA_MEASUREMENT_ID = 'G-K6R56SJ0DY'; // Replace with your Google Analytics Measurement ID

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_MEASUREMENT_ID}');
                `}
            </Script>
        </>
    );
};

export default GoogleAnalytics;
