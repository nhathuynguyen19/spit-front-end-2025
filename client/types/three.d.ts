// types/three.d.ts
declare module 'three/examples/jsm/loaders/GLTFLoader' {
    import { Loader } from 'three'
    import { LoadingManager } from 'three'
    import { Group } from 'three'
    import { BufferGeometry } from 'three'
    import { Material } from 'three'
    import { Object3D } from 'three'
    import { AnimationClip } from 'three'

    export interface GLTF {
        animations: AnimationClip[]
        scene: Group
        scenes: Group[]
        cameras: any[]
        asset: any
    }

    export class GLTFLoader extends Loader {
        constructor(manager?: LoadingManager)
        parse(data: ArrayBuffer | string, path: string, onLoad: (gltf: GLTF) => void, onError?: (event: any) => void): void
        load(url: string, onLoad: (gltf: GLTF) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: any) => void): void
    }
}

declare module 'three/examples/jsm/loaders/DRACOLoader' {
    import { Loader } from 'three'

    export class DRACOLoader extends Loader {
        constructor()
        setDecoderPath(path: string): DRACOLoader
        setDecoderConfig(config: object): DRACOLoader
        preload(): DRACOLoader
        dispose(): void
    }
}
