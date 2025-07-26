import { useGLTF } from "@react-three/drei";

export default function NgoMon({
  rotationX = 0,
  rotationY = 0,
}: {
  rotationX?: number;
  rotationY?: number;
}) {
  const { scene } = useGLTF("/blend/ngo-mon.glb");
  return <primitive object={scene} rotation={[rotationX, rotationY, 0]} />;
}
