import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

const CameraLookAt = () => {
  const { camera } = useThree();

  useEffect(() => {
    camera.lookAt(0.05, 0.64, 0); // 👉 Nhìn lên một chút
  }, [camera]);

  return null;
};

export default CameraLookAt;
