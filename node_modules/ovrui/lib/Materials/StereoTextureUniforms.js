/**
 * Copyright (c) 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Dynamic uniforms for rendering stereo texture.
 *
 * Callback function onUpdateCallback will be called in every render loop before
 * setting the value of the uniform to WebGL. To enable stereo texture, you
 * should set viewID=1 for the right eye camera. If you set two stereoOffsetRepeats
 * to the material, the right eye camera will use the second stereoOffsetRepeat
 */
var StereoTextureUniforms = function StereoTextureUniforms() {
  _classCallCheck(this, StereoTextureUniforms);

  /** The right eye camera will use stereoOffsetRepeats[1] if it's defined. */
  this.stereoOffsetRepeat = {
    dynamic: true,
    type: 'f',
    value: null,
    onUpdateCallback: function onUpdateCallback(object, camera) {
      // if it's right eye camera and has second offsetRepeats, use the second offsetRepeats
      if (camera.viewID === 1 && object.material.stereoOffsetRepeats[1]) {
        this.value = object.material.stereoOffsetRepeats[1];
      } else {
        this.value = object.material.stereoOffsetRepeats[0];
      }
    }
  };
};

exports.default = StereoTextureUniforms;