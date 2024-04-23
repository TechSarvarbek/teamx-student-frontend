import React from 'react'

export default function About() {
  return (
    <div>
        <h1 className='text-center mt-3 text-3xl font-bold text-purple-900'>S.M.A.R.T. bu qanday kurs?</h1>

        <div className="text-center aspect-h-9 p-5 lg:pr-[13%] lg:pl-[13%] lg:pt-5">
            <div className="h-[40vh] lg:h-[60vh]">
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/mx8kHmuANng"
                    title="S.M.A.R.T. - shaxsiy rivojlanish kursi haqida."
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    </div>
  )
}
