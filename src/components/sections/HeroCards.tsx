"use client";

import { useEffect, useRef, useCallback } from "react";
import * as THREE from "three";

/**
 * Full-screen site background with:
 * 1. Noise shader as the base background layer
 * 2. Floating 3D rounded cards positioned on the RIGHT side
 * Mouse-reactive, teal accent palette.
 */
export function HeroCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const mouseSpeedRef = useRef(0);
  const prevMouseRef = useRef({ x: 0.5, y: 0.5 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const x = e.clientX / window.innerWidth;
    const y = 1.0 - e.clientY / window.innerHeight;
    const dx = x - prevMouseRef.current.x;
    const dy = y - prevMouseRef.current.y;
    mouseSpeedRef.current = Math.min(Math.sqrt(dx * dx + dy * dy) * 10, 1.0);
    prevMouseRef.current.x = x;
    prevMouseRef.current.y = y;
    mouseRef.current.x = x;
    mouseRef.current.y = y;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    /* ── Scene ── */
    const scene = new THREE.Scene();
    // Initial positions (will be updated in resize)
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.set(1.5, 0, 6);
    camera.lookAt(1.5, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    container.appendChild(renderer.domElement);

    /* ── Single Prismatic Graphic ── */
    const group = new THREE.Group();
    // Position top-right
    group.position.set(4, 2, -2);
    scene.add(group);

    // Abstract faceted mesh
    const geometry = new THREE.IcosahedronGeometry(2.5, 0); // low poly for facets

    const material = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.9, // glass-like
      thickness: 1.5,
      ior: 1.5,
      iridescence: 1.0,
      iridescenceIOR: 1.3,
      clearcoat: 1.0,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    
    // Add wireframe overlay for tech feel
    const wireMaterial = new THREE.LineBasicMaterial({
      color: 0x3b5bff, // --accent-blue
      transparent: true,
      opacity: 0.3,
    });
    const wireframe = new THREE.LineSegments(
      new THREE.WireframeGeometry(geometry),
      wireMaterial
    );
    mesh.add(wireframe);
    
    group.add(mesh);

    /* ── Lighting ── */
    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    const fillLight1 = new THREE.DirectionalLight(0x3b5bff, 3.0); // blue
    fillLight1.position.set(-5, -2, 2);
    scene.add(fillLight1);

    const fillLight2 = new THREE.DirectionalLight(0xff5a36, 2.0); // orange
    fillLight2.position.set(0, 5, -5);
    scene.add(fillLight2);

    /* ── Resize ── */
    function resize() {
      if (!container) return;
      const { width, height } = container.getBoundingClientRect();
      
      // Responsive positioning
      if (width < 768) {
        // Mobile view: hide or push it back
        camera.position.set(0, 0, 15);
        group.position.set(0, 3, -5);
      } else {
        // Desktop view: top right
        camera.position.set(0, 0, 8);
        group.position.set(4, 2, -2);
      }
      
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    /* ── Animate ── */
    let animationId: number;
    const clock = new THREE.Clock();
    const targetRotation = { x: 0, y: 0 };

    function animate() {
      animationId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Mouse-reactive rotation
        targetRotation.x = mouseRef.current.y * 0.25;
        targetRotation.y = mouseRef.current.x * 0.25;
        group.rotation.x += (targetRotation.x - group.rotation.x) * 0.04;
        group.rotation.y += (targetRotation.y - group.rotation.y) * 0.04;

        // Slow auto-rotation
        group.rotation.y += 0.001;

        // Float and rotate single object
        group.position.y = 2 + Math.sin(elapsed * 0.5) * 0.3;
        
        // Pulse wireframe
        wireMaterial.opacity = 0.15 + Math.sin(elapsed * 1.2) * 0.1;
      }

      renderer.render(scene, camera);
    }
    animate();

    /* ── Cleanup ── */
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      geometry.dispose();
      material.dispose();
      wireMaterial.dispose();
      wireframe.geometry.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [handleMouseMove]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-[1]"
      aria-hidden="true"
    />
  );
}
