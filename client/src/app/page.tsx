'use client'

import dynamic from 'next/dynamic'

const NgoMonModel = dynamic(() => import('@/components/ngo-mon'), {
    ssr: false,
    loading: () => <p>Loading 3D...</p>,
})

export default function Home() {
  return (
      <main className="w-full h-screen">
          <NgoMonModel />
      </main>
  )
}
