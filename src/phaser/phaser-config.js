import Phaser from "phaser";
import GesturesPlugin from './plugins/gestures-plugin';

export const phaserConfig = scenes => ({
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.RESIZE,
  },
  autoCenter: 1,
  parent: "content",
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight,
  scene: scenes,
  plugins: {
    scene: [{
      key: 'rexGestures',
      plugin: GesturesPlugin,
      mapping: 'rexGestures'
    }]
  }
});
