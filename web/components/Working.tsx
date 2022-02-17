import React from 'react'
import WorkingCard from './WorkingCard'

export default function Working() {
  return (
    <div className="flex flex-col items-center justify-center p-7 py-28  text-center lg:h-screen lg:py-0 xl:p-0">
      <div className="z-10 text-5xl font-bold">How does it work?</div>
      <div className="mt-20 grid grid-cols-1 gap-10 md:h-80 md:grid-cols-2">
        <WorkingCard
          id={1}
          title="Installation"
          message="You can install our extension through respective IDE's extension marketplace"
        />
        <WorkingCard
          id={2}
          title="Usage"
          message="Once installed, reload the IDE and you can start using snippets as demonstrated above!"
        />
      </div>
    </div>
  )
}
