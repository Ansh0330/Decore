"use client"
import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center bg-parchment text-ash text-3xl px-4 py-2 rounded-lg">Loading 3D scene...</div>
});

export default function SplineComponent() {
  return (
    <main className='h-full w-full'>
      <Spline
        scene="https://prod.spline.design/x-g0TzUTIyGn-V3S/scene.splinecode"
      />
    </main>
  );
}