'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)

    // Scene & Camera
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.z = 3

    // Particles
    const count = 1800
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    const palette = [
      new THREE.Color('#c8430a'), // accent orange-red
      new THREE.Color('#f4a34b'), // warm amber
      new THREE.Color('#e8a923'), // gold
      new THREE.Color('#faf9f6'), // surface white
    ]

    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 12
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6

      const col = palette[Math.floor(Math.random() * palette.length)]
      colors[i * 3 + 0] = col.r
      colors[i * 3 + 1] = col.g
      colors[i * 3 + 2] = col.b
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: 0.018,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    // Mouse parallax
    const mouse = { x: 0, y: 0 }
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 0.4
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 0.4
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    // Animation loop
    let animId: number
    const clock = new THREE.Clock()

    function animate() {
      animId = requestAnimationFrame(animate)
      const elapsed = clock.getElapsedTime()

      particles.rotation.y = elapsed * 0.04
      particles.rotation.x = elapsed * 0.02

      // Smooth camera parallax following mouse
      camera.position.x += (mouse.x - camera.position.x) * 0.05
      camera.position.y += (mouse.y - camera.position.y) * 0.05
      camera.lookAt(scene.position)

      // Scroll-based drift
      const scrollY = window.scrollY || 0
      particles.position.y = -scrollY * 0.001

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    />
  )
}
