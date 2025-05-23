import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    mountRef.current.appendChild(renderer.domElement);

    // Create a more complex geometry
    const geometry = new THREE.IcosahedronGeometry(1, 2);
    
    // Create a custom shader material for chrome effect
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.9,
      roughness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      envMapIntensity: 1.0,
      reflectivity: 1.0,
      iridescence: 0.8,
      iridescenceIOR: 1.5,
      iridescenceThicknessRange: [100, 400],
    });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Add particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Add environment map for reflections
    const cubeTextureLoader = new THREE.CubeTextureLoader();
    const envMap = cubeTextureLoader.load([
      'https://threejs.org/examples/textures/cube/Park2/posx.jpg',
      'https://threejs.org/examples/textures/cube/Park2/negx.jpg',
      'https://threejs.org/examples/textures/cube/Park2/posy.jpg',
      'https://threejs.org/examples/textures/cube/Park2/negy.jpg',
      'https://threejs.org/examples/textures/cube/Park2/posz.jpg',
      'https://threejs.org/examples/textures/cube/Park2/negz.jpg',
    ]);
    scene.environment = envMap;
    scene.background = null;

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add multiple point lights for better reflections
    const colors = [0xff69b4, 0x00ffff, 0x4169e1]; // Pink, Cyan, Blue
    const lights = colors.map((color, index) => {
      const light = new THREE.PointLight(color, 1);
      const angle = (index / colors.length) * Math.PI * 2;
      light.position.set(
        Math.cos(angle) * 5,
        Math.sin(angle) * 5,
        5
      );
      scene.add(light);
      return light;
    });

    // Add a subtle spotlight
    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.position.set(0, 5, 0);
    spotLight.angle = Math.PI / 4;
    spotLight.penumbra = 0.1;
    spotLight.decay = 2;
    spotLight.distance = 50;
    scene.add(spotLight);

    // Position camera
    camera.position.z = 3;

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Handle scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = window.innerHeight * 0.5;
      const opacity = Math.max(0, 1 - (scrollPosition / maxScroll));
      
      renderer.domElement.style.opacity = opacity;
      
      // Scale and rotate based on scroll
      const scale = Math.max(0.5, opacity);
      cube.scale.set(scale, scale, scale);
      cube.rotation.y = scrollPosition * 0.001;
    };
    window.addEventListener('scroll', handleScroll);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;
      
      // Rotate the cube with a more complex motion
      cube.rotation.x = Math.sin(time * 0.5) * 0.2;
      cube.rotation.y += 0.005;
      cube.rotation.z = Math.cos(time * 0.5) * 0.2;

      // Animate particles
      const positions = particlesGeometry.attributes.position.array;
      for(let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(time + positions[i]) * 0.001;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      // Animate lights with more complex motion
      lights.forEach((light, index) => {
        const angle = time + (index / lights.length) * Math.PI * 2;
        light.position.x = Math.cos(angle) * 5;
        light.position.y = Math.sin(angle) * 5;
        light.intensity = 1 + Math.sin(time * 2 + index) * 0.3;
      });

      // Animate spotlight
      spotLight.position.x = Math.sin(time) * 3;
      spotLight.position.z = Math.cos(time) * 3;

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      mountRef.current?.removeChild(renderer.domElement);
      scene.remove(cube);
      scene.remove(particlesMesh);
      geometry.dispose();
      material.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      style={{ 
        width: '100%', 
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        transition: 'opacity 0.5s ease-out'
      }} 
    />
  );
};

export default ThreeScene; 