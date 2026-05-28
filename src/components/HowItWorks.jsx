import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    })

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    })
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20 opacity-0">
          <div className="flex items-center gap-2 cursor-pointer font-black text-3xl tracking-wider text-white border-2 border-white p-6 rounded-2xl">
            <span className="bg-white text-black px-3 py-1 rounded text-xl font-black及">60</span>
            FPS CANVAS
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            GPU Acceleration.
            <br /> Zero Interface Lag.
          </h2>

          <p className="hiw-subtitle">
            Engineered to deliver heavy 3D scene loads smoothly in standard browser tabs.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img 
                src={frameImg}
                alt="frame context background"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video 
                className="pointer-events-none" 
                playsInline 
                preload="none" 
                muted 
                autoPlay 
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">Interactive Application Preview</p>
        </div>

        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn opacity-0 translate-y-10">
              Web graphics calculations are processed {' '}
              <span className="text-white">
                directly via WebGL architecture hardware paths
              </span>.
              This bypasses standard web rendering engines to eliminate visual micro-stuttering entirely.
            </p>

            <p className="hiw-text g_fadeIn opacity-0 translate-y-10 mt-5">
              Your users experience {' '}
              <span className="text-white">
                instantaneous touch controls and navigation fluidly
              </span>, allowing them to explore complex structures with responsive visual feedback.
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn opacity-0 translate-y-10">
            <p className="hiw-text text-gray-400">New Performance Tier</p>
            <p className="hiw-bigtext">60 FPS Stable</p>
            <p className="hiw-text text-gray-400">Optimized Render Latency</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks;
