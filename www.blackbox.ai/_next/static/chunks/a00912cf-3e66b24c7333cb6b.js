(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [742],
  {
    77087: function (module, __unused_webpack_exports, __webpack_require__) {
      var Buffer = __webpack_require__(67850).Buffer,
        process = __webpack_require__(99720);
      /**
       * @licstart The following is the entire license notice for the
       * JavaScript code in this page
       *
       * Copyright 2023 Mozilla Foundation
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *     http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       *
       * @licend The above is the entire license notice for the
       * JavaScript code in this page
       */ !(function (o, l) {
        module.exports = l();
      })(globalThis, () =>
        (() => {
          "use strict";
          var __webpack_modules__ = [
              ,
              (o, l) => {
                Object.defineProperty(l, "__esModule", { value: !0 }),
                  (l.VerbosityLevel =
                    l.Util =
                    l.UnknownErrorException =
                    l.UnexpectedResponseException =
                    l.UNSUPPORTED_FEATURES =
                    l.TextRenderingMode =
                    l.RenderingIntentFlag =
                    l.PermissionFlag =
                    l.PasswordResponses =
                    l.PasswordException =
                    l.PageActionEventType =
                    l.OPS =
                    l.MissingPDFException =
                    l.LINE_FACTOR =
                    l.LINE_DESCENT_FACTOR =
                    l.InvalidPDFException =
                    l.ImageKind =
                    l.IDENTITY_MATRIX =
                    l.FormatError =
                    l.FeatureTest =
                    l.FONT_IDENTITY_MATRIX =
                    l.DocumentActionEventType =
                    l.CMapCompressionType =
                    l.BaseException =
                    l.BASELINE_FACTOR =
                    l.AnnotationType =
                    l.AnnotationStateModelType =
                    l.AnnotationReviewState =
                    l.AnnotationReplyType =
                    l.AnnotationMode =
                    l.AnnotationMarkedState =
                    l.AnnotationFlag =
                    l.AnnotationFieldFlag =
                    l.AnnotationEditorType =
                    l.AnnotationEditorPrefix =
                    l.AnnotationEditorParamsType =
                    l.AnnotationBorderStyleType =
                    l.AnnotationActionEventType =
                    l.AbortException =
                      void 0),
                  (l.assert = assert),
                  (l.bytesToString = bytesToString),
                  (l.createPromiseCapability = createPromiseCapability),
                  (l.createValidAbsoluteUrl = createValidAbsoluteUrl),
                  (l.getModificationDate = getModificationDate),
                  (l.getVerbosityLevel = getVerbosityLevel),
                  (l.info = info),
                  (l.isArrayBuffer = isArrayBuffer),
                  (l.isArrayEqual = isArrayEqual),
                  (l.objectFromMap = objectFromMap),
                  (l.objectSize = objectSize),
                  (l.setVerbosityLevel = setVerbosityLevel),
                  (l.shadow = shadow),
                  (l.string32 = string32),
                  (l.stringToBytes = stringToBytes),
                  (l.stringToPDFString = stringToPDFString),
                  (l.stringToUTF8String = stringToUTF8String),
                  (l.unreachable = unreachable),
                  (l.utf8StringToString = utf8StringToString),
                  (l.warn = warn);
                let _ = [1, 0, 0, 1, 0, 0];
                l.IDENTITY_MATRIX = _;
                let S = [0.001, 0, 0, 0.001, 0, 0];
                l.FONT_IDENTITY_MATRIX = S;
                let E = 1.35;
                l.LINE_FACTOR = E;
                let P = 0.35;
                l.LINE_DESCENT_FACTOR = P;
                let T = P / E;
                l.BASELINE_FACTOR = T;
                let M = {
                  ANY: 1,
                  DISPLAY: 2,
                  PRINT: 4,
                  SAVE: 8,
                  ANNOTATIONS_FORMS: 16,
                  ANNOTATIONS_STORAGE: 32,
                  ANNOTATIONS_DISABLE: 64,
                  OPLIST: 256,
                };
                l.RenderingIntentFlag = M;
                let F = {
                  DISABLE: 0,
                  ENABLE: 1,
                  ENABLE_FORMS: 2,
                  ENABLE_STORAGE: 3,
                };
                l.AnnotationMode = F;
                let D = "pdfjs_internal_editor_";
                l.AnnotationEditorPrefix = D;
                let I = { DISABLE: -1, NONE: 0, FREETEXT: 3, INK: 15 };
                l.AnnotationEditorType = I;
                let O = {
                  FREETEXT_SIZE: 1,
                  FREETEXT_COLOR: 2,
                  FREETEXT_OPACITY: 3,
                  INK_COLOR: 11,
                  INK_THICKNESS: 12,
                  INK_OPACITY: 13,
                };
                l.AnnotationEditorParamsType = O;
                let L = {
                  PRINT: 4,
                  MODIFY_CONTENTS: 8,
                  COPY: 16,
                  MODIFY_ANNOTATIONS: 32,
                  FILL_INTERACTIVE_FORMS: 256,
                  COPY_FOR_ACCESSIBILITY: 512,
                  ASSEMBLE: 1024,
                  PRINT_HIGH_QUALITY: 2048,
                };
                l.PermissionFlag = L;
                let N = {
                  FILL: 0,
                  STROKE: 1,
                  FILL_STROKE: 2,
                  INVISIBLE: 3,
                  FILL_ADD_TO_PATH: 4,
                  STROKE_ADD_TO_PATH: 5,
                  FILL_STROKE_ADD_TO_PATH: 6,
                  ADD_TO_PATH: 7,
                  FILL_STROKE_MASK: 3,
                  ADD_TO_PATH_FLAG: 4,
                };
                l.TextRenderingMode = N;
                let U = { GRAYSCALE_1BPP: 1, RGB_24BPP: 2, RGBA_32BPP: 3 };
                l.ImageKind = U;
                let W = {
                  TEXT: 1,
                  LINK: 2,
                  FREETEXT: 3,
                  LINE: 4,
                  SQUARE: 5,
                  CIRCLE: 6,
                  POLYGON: 7,
                  POLYLINE: 8,
                  HIGHLIGHT: 9,
                  UNDERLINE: 10,
                  SQUIGGLY: 11,
                  STRIKEOUT: 12,
                  STAMP: 13,
                  CARET: 14,
                  INK: 15,
                  POPUP: 16,
                  FILEATTACHMENT: 17,
                  SOUND: 18,
                  MOVIE: 19,
                  WIDGET: 20,
                  SCREEN: 21,
                  PRINTERMARK: 22,
                  TRAPNET: 23,
                  WATERMARK: 24,
                  THREED: 25,
                  REDACT: 26,
                };
                l.AnnotationType = W;
                let H = { MARKED: "Marked", REVIEW: "Review" };
                l.AnnotationStateModelType = H;
                let V = { MARKED: "Marked", UNMARKED: "Unmarked" };
                l.AnnotationMarkedState = V;
                let z = {
                  ACCEPTED: "Accepted",
                  REJECTED: "Rejected",
                  CANCELLED: "Cancelled",
                  COMPLETED: "Completed",
                  NONE: "None",
                };
                l.AnnotationReviewState = z;
                let $ = { GROUP: "Group", REPLY: "R" };
                l.AnnotationReplyType = $;
                let K = {
                  INVISIBLE: 1,
                  HIDDEN: 2,
                  PRINT: 4,
                  NOZOOM: 8,
                  NOROTATE: 16,
                  NOVIEW: 32,
                  READONLY: 64,
                  LOCKED: 128,
                  TOGGLENOVIEW: 256,
                  LOCKEDCONTENTS: 512,
                };
                l.AnnotationFlag = K;
                let Y = {
                  READONLY: 1,
                  REQUIRED: 2,
                  NOEXPORT: 4,
                  MULTILINE: 4096,
                  PASSWORD: 8192,
                  NOTOGGLETOOFF: 16384,
                  RADIO: 32768,
                  PUSHBUTTON: 65536,
                  COMBO: 131072,
                  EDIT: 262144,
                  SORT: 524288,
                  FILESELECT: 1048576,
                  MULTISELECT: 2097152,
                  DONOTSPELLCHECK: 4194304,
                  DONOTSCROLL: 8388608,
                  COMB: 16777216,
                  RICHTEXT: 33554432,
                  RADIOSINUNISON: 33554432,
                  COMMITONSELCHANGE: 67108864,
                };
                l.AnnotationFieldFlag = Y;
                let J = {
                  SOLID: 1,
                  DASHED: 2,
                  BEVELED: 3,
                  INSET: 4,
                  UNDERLINE: 5,
                };
                l.AnnotationBorderStyleType = J;
                let Q = {
                  E: "Mouse Enter",
                  X: "Mouse Exit",
                  D: "Mouse Down",
                  U: "Mouse Up",
                  Fo: "Focus",
                  Bl: "Blur",
                  PO: "PageOpen",
                  PC: "PageClose",
                  PV: "PageVisible",
                  PI: "PageInvisible",
                  K: "Keystroke",
                  F: "Format",
                  V: "Validate",
                  C: "Calculate",
                };
                l.AnnotationActionEventType = Q;
                let Z = {
                  WC: "WillClose",
                  WS: "WillSave",
                  DS: "DidSave",
                  WP: "WillPrint",
                  DP: "DidPrint",
                };
                l.DocumentActionEventType = Z;
                let tt = { O: "PageOpen", C: "PageClose" };
                l.PageActionEventType = tt;
                let te = { ERRORS: 0, WARNINGS: 1, INFOS: 5 };
                l.VerbosityLevel = te;
                let ti = { NONE: 0, BINARY: 1 };
                l.CMapCompressionType = ti;
                let tr = {
                  dependency: 1,
                  setLineWidth: 2,
                  setLineCap: 3,
                  setLineJoin: 4,
                  setMiterLimit: 5,
                  setDash: 6,
                  setRenderingIntent: 7,
                  setFlatness: 8,
                  setGState: 9,
                  save: 10,
                  restore: 11,
                  transform: 12,
                  moveTo: 13,
                  lineTo: 14,
                  curveTo: 15,
                  curveTo2: 16,
                  curveTo3: 17,
                  closePath: 18,
                  rectangle: 19,
                  stroke: 20,
                  closeStroke: 21,
                  fill: 22,
                  eoFill: 23,
                  fillStroke: 24,
                  eoFillStroke: 25,
                  closeFillStroke: 26,
                  closeEOFillStroke: 27,
                  endPath: 28,
                  clip: 29,
                  eoClip: 30,
                  beginText: 31,
                  endText: 32,
                  setCharSpacing: 33,
                  setWordSpacing: 34,
                  setHScale: 35,
                  setLeading: 36,
                  setFont: 37,
                  setTextRenderingMode: 38,
                  setTextRise: 39,
                  moveText: 40,
                  setLeadingMoveText: 41,
                  setTextMatrix: 42,
                  nextLine: 43,
                  showText: 44,
                  showSpacedText: 45,
                  nextLineShowText: 46,
                  nextLineSetSpacingShowText: 47,
                  setCharWidth: 48,
                  setCharWidthAndBounds: 49,
                  setStrokeColorSpace: 50,
                  setFillColorSpace: 51,
                  setStrokeColor: 52,
                  setStrokeColorN: 53,
                  setFillColor: 54,
                  setFillColorN: 55,
                  setStrokeGray: 56,
                  setFillGray: 57,
                  setStrokeRGBColor: 58,
                  setFillRGBColor: 59,
                  setStrokeCMYKColor: 60,
                  setFillCMYKColor: 61,
                  shadingFill: 62,
                  beginInlineImage: 63,
                  beginImageData: 64,
                  endInlineImage: 65,
                  paintXObject: 66,
                  markPoint: 67,
                  markPointProps: 68,
                  beginMarkedContent: 69,
                  beginMarkedContentProps: 70,
                  endMarkedContent: 71,
                  beginCompat: 72,
                  endCompat: 73,
                  paintFormXObjectBegin: 74,
                  paintFormXObjectEnd: 75,
                  beginGroup: 76,
                  endGroup: 77,
                  beginAnnotation: 80,
                  endAnnotation: 81,
                  paintImageMaskXObject: 83,
                  paintImageMaskXObjectGroup: 84,
                  paintImageXObject: 85,
                  paintInlineImageXObject: 86,
                  paintInlineImageXObjectGroup: 87,
                  paintImageXObjectRepeat: 88,
                  paintImageMaskXObjectRepeat: 89,
                  paintSolidColorImageMask: 90,
                  constructPath: 91,
                };
                l.OPS = tr;
                let ta = {
                  forms: "forms",
                  javaScript: "javaScript",
                  signatures: "signatures",
                  smask: "smask",
                  shadingPattern: "shadingPattern",
                  errorTilingPattern: "errorTilingPattern",
                  errorExtGState: "errorExtGState",
                  errorXObject: "errorXObject",
                  errorFontLoadType3: "errorFontLoadType3",
                  errorFontState: "errorFontState",
                  errorFontMissing: "errorFontMissing",
                  errorFontTranslate: "errorFontTranslate",
                  errorColorSpace: "errorColorSpace",
                  errorOperatorList: "errorOperatorList",
                  errorFontToUnicode: "errorFontToUnicode",
                  errorFontLoadNative: "errorFontLoadNative",
                  errorFontBuildPath: "errorFontBuildPath",
                  errorFontGetPath: "errorFontGetPath",
                  errorMarkedContent: "errorMarkedContent",
                  errorContentSubStream: "errorContentSubStream",
                };
                l.UNSUPPORTED_FEATURES = ta;
                let ts = { NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2 };
                l.PasswordResponses = ts;
                let tn = te.WARNINGS;
                function setVerbosityLevel(o) {
                  Number.isInteger(o) && (tn = o);
                }
                function getVerbosityLevel() {
                  return tn;
                }
                function info(o) {
                  tn >= te.INFOS && console.log(`Info: ${o}`);
                }
                function warn(o) {
                  tn >= te.WARNINGS && console.log(`Warning: ${o}`);
                }
                function unreachable(o) {
                  throw Error(o);
                }
                function assert(o, l) {
                  o || unreachable(l);
                }
                function _isValidProtocol(o) {
                  if (!o) return !1;
                  switch (o.protocol) {
                    case "http:":
                    case "https:":
                    case "ftp:":
                    case "mailto:":
                    case "tel:":
                      return !0;
                    default:
                      return !1;
                  }
                }
                function createValidAbsoluteUrl(o, l = null, _ = null) {
                  if (!o) return null;
                  try {
                    if (_ && "string" == typeof o) {
                      if (_.addDefaultProtocol && o.startsWith("www.")) {
                        let l = o.match(/\./g);
                        l && l.length >= 2 && (o = `http://${o}`);
                      }
                      if (_.tryConvertEncoding)
                        try {
                          o = stringToUTF8String(o);
                        } catch (o) {}
                    }
                    let S = l ? new URL(o, l) : new URL(o);
                    if (_isValidProtocol(S)) return S;
                  } catch (o) {}
                  return null;
                }
                function shadow(o, l, _, S = !1) {
                  return (
                    Object.defineProperty(o, l, {
                      value: _,
                      enumerable: !S,
                      configurable: !0,
                      writable: !1,
                    }),
                    _
                  );
                }
                let to = (function () {
                  function BaseException(o, l) {
                    this.constructor === BaseException &&
                      unreachable("Cannot initialize BaseException."),
                      (this.message = o),
                      (this.name = l);
                  }
                  return (
                    (BaseException.prototype = Error()),
                    (BaseException.constructor = BaseException),
                    BaseException
                  );
                })();
                l.BaseException = to;
                let PasswordException = class PasswordException extends to {
                  constructor(o, l) {
                    super(o, "PasswordException"), (this.code = l);
                  }
                };
                l.PasswordException = PasswordException;
                let UnknownErrorException = class UnknownErrorException extends to {
                  constructor(o, l) {
                    super(o, "UnknownErrorException"), (this.details = l);
                  }
                };
                l.UnknownErrorException = UnknownErrorException;
                let InvalidPDFException = class InvalidPDFException extends to {
                  constructor(o) {
                    super(o, "InvalidPDFException");
                  }
                };
                l.InvalidPDFException = InvalidPDFException;
                let MissingPDFException = class MissingPDFException extends to {
                  constructor(o) {
                    super(o, "MissingPDFException");
                  }
                };
                l.MissingPDFException = MissingPDFException;
                let UnexpectedResponseException = class UnexpectedResponseException extends to {
                  constructor(o, l) {
                    super(o, "UnexpectedResponseException"), (this.status = l);
                  }
                };
                l.UnexpectedResponseException = UnexpectedResponseException;
                let FormatError = class FormatError extends to {
                  constructor(o) {
                    super(o, "FormatError");
                  }
                };
                l.FormatError = FormatError;
                let AbortException = class AbortException extends to {
                  constructor(o) {
                    super(o, "AbortException");
                  }
                };
                function bytesToString(o) {
                  ("object" != typeof o || null === o || void 0 === o.length) &&
                    unreachable("Invalid argument for bytesToString");
                  let l = o.length,
                    _ = 8192;
                  if (l < _) return String.fromCharCode.apply(null, o);
                  let S = [];
                  for (let E = 0; E < l; E += _) {
                    let P = Math.min(E + _, l),
                      T = o.subarray(E, P);
                    S.push(String.fromCharCode.apply(null, T));
                  }
                  return S.join("");
                }
                function stringToBytes(o) {
                  "string" != typeof o &&
                    unreachable("Invalid argument for stringToBytes");
                  let l = o.length,
                    _ = new Uint8Array(l);
                  for (let S = 0; S < l; ++S) _[S] = 255 & o.charCodeAt(S);
                  return _;
                }
                function string32(o) {
                  return String.fromCharCode(
                    (o >> 24) & 255,
                    (o >> 16) & 255,
                    (o >> 8) & 255,
                    255 & o
                  );
                }
                function objectSize(o) {
                  return Object.keys(o).length;
                }
                function objectFromMap(o) {
                  let l = Object.create(null);
                  for (let [_, S] of o) l[_] = S;
                  return l;
                }
                function isLittleEndian() {
                  let o = new Uint8Array(4);
                  o[0] = 1;
                  let l = new Uint32Array(o.buffer, 0, 1);
                  return 1 === l[0];
                }
                function isEvalSupported() {
                  try {
                    return Function(""), !0;
                  } catch (o) {
                    return !1;
                  }
                }
                l.AbortException = AbortException;
                let FeatureTest = class FeatureTest {
                  static get isLittleEndian() {
                    return shadow(this, "isLittleEndian", isLittleEndian());
                  }
                  static get isEvalSupported() {
                    return shadow(this, "isEvalSupported", isEvalSupported());
                  }
                  static get isOffscreenCanvasSupported() {
                    return shadow(
                      this,
                      "isOffscreenCanvasSupported",
                      "undefined" != typeof OffscreenCanvas
                    );
                  }
                  static get platform() {
                    return "undefined" == typeof navigator
                      ? shadow(this, "platform", { isWin: !1, isMac: !1 })
                      : shadow(this, "platform", {
                          isWin: navigator.platform.includes("Win"),
                          isMac: navigator.platform.includes("Mac"),
                        });
                  }
                };
                l.FeatureTest = FeatureTest;
                let tl = [...Array(256).keys()].map((o) =>
                  o.toString(16).padStart(2, "0")
                );
                let Util = class Util {
                  static makeHexColor(o, l, _) {
                    return `#${tl[o]}${tl[l]}${tl[_]}`;
                  }
                  static scaleMinMax(o, l) {
                    let _;
                    o[0]
                      ? (o[0] < 0 && ((_ = l[0]), (l[0] = l[1]), (l[1] = _)),
                        (l[0] *= o[0]),
                        (l[1] *= o[0]),
                        o[3] < 0 && ((_ = l[2]), (l[2] = l[3]), (l[3] = _)),
                        (l[2] *= o[3]),
                        (l[3] *= o[3]))
                      : ((_ = l[0]),
                        (l[0] = l[2]),
                        (l[2] = _),
                        (_ = l[1]),
                        (l[1] = l[3]),
                        (l[3] = _),
                        o[1] < 0 && ((_ = l[2]), (l[2] = l[3]), (l[3] = _)),
                        (l[2] *= o[1]),
                        (l[3] *= o[1]),
                        o[2] < 0 && ((_ = l[0]), (l[0] = l[1]), (l[1] = _)),
                        (l[0] *= o[2]),
                        (l[1] *= o[2])),
                      (l[0] += o[4]),
                      (l[1] += o[4]),
                      (l[2] += o[5]),
                      (l[3] += o[5]);
                  }
                  static transform(o, l) {
                    return [
                      o[0] * l[0] + o[2] * l[1],
                      o[1] * l[0] + o[3] * l[1],
                      o[0] * l[2] + o[2] * l[3],
                      o[1] * l[2] + o[3] * l[3],
                      o[0] * l[4] + o[2] * l[5] + o[4],
                      o[1] * l[4] + o[3] * l[5] + o[5],
                    ];
                  }
                  static applyTransform(o, l) {
                    let _ = o[0] * l[0] + o[1] * l[2] + l[4],
                      S = o[0] * l[1] + o[1] * l[3] + l[5];
                    return [_, S];
                  }
                  static applyInverseTransform(o, l) {
                    let _ = l[0] * l[3] - l[1] * l[2],
                      S =
                        (o[0] * l[3] -
                          o[1] * l[2] +
                          l[2] * l[5] -
                          l[4] * l[3]) /
                        _,
                      E =
                        (-o[0] * l[1] +
                          o[1] * l[0] +
                          l[4] * l[1] -
                          l[5] * l[0]) /
                        _;
                    return [S, E];
                  }
                  static getAxialAlignedBoundingBox(o, l) {
                    let _ = Util.applyTransform(o, l),
                      S = Util.applyTransform(o.slice(2, 4), l),
                      E = Util.applyTransform([o[0], o[3]], l),
                      P = Util.applyTransform([o[2], o[1]], l);
                    return [
                      Math.min(_[0], S[0], E[0], P[0]),
                      Math.min(_[1], S[1], E[1], P[1]),
                      Math.max(_[0], S[0], E[0], P[0]),
                      Math.max(_[1], S[1], E[1], P[1]),
                    ];
                  }
                  static inverseTransform(o) {
                    let l = o[0] * o[3] - o[1] * o[2];
                    return [
                      o[3] / l,
                      -o[1] / l,
                      -o[2] / l,
                      o[0] / l,
                      (o[2] * o[5] - o[4] * o[3]) / l,
                      (o[4] * o[1] - o[5] * o[0]) / l,
                    ];
                  }
                  static singularValueDecompose2dScale(o) {
                    let l = [o[0], o[2], o[1], o[3]],
                      _ = o[0] * l[0] + o[1] * l[2],
                      S = o[0] * l[1] + o[1] * l[3],
                      E = o[2] * l[0] + o[3] * l[2],
                      P = o[2] * l[1] + o[3] * l[3],
                      T = (_ + P) / 2,
                      M = Math.sqrt((_ + P) ** 2 - 4 * (_ * P - E * S)) / 2,
                      F = T + M || 1,
                      D = T - M || 1;
                    return [Math.sqrt(F), Math.sqrt(D)];
                  }
                  static normalizeRect(o) {
                    let l = o.slice(0);
                    return (
                      o[0] > o[2] && ((l[0] = o[2]), (l[2] = o[0])),
                      o[1] > o[3] && ((l[1] = o[3]), (l[3] = o[1])),
                      l
                    );
                  }
                  static intersect(o, l) {
                    let _ = Math.max(
                        Math.min(o[0], o[2]),
                        Math.min(l[0], l[2])
                      ),
                      S = Math.min(Math.max(o[0], o[2]), Math.max(l[0], l[2]));
                    if (_ > S) return null;
                    let E = Math.max(
                        Math.min(o[1], o[3]),
                        Math.min(l[1], l[3])
                      ),
                      P = Math.min(Math.max(o[1], o[3]), Math.max(l[1], l[3]));
                    return E > P ? null : [_, E, S, P];
                  }
                  static bezierBoundingBox(o, l, _, S, E, P, T, M) {
                    let F, D, I, O, L, N, U, W;
                    let H = [],
                      V = [[], []];
                    for (let V = 0; V < 2; ++V) {
                      if (
                        (0 === V
                          ? ((D = 6 * o - 12 * _ + 6 * E),
                            (F = -3 * o + 9 * _ - 9 * E + 3 * T),
                            (I = 3 * _ - 3 * o))
                          : ((D = 6 * l - 12 * S + 6 * P),
                            (F = -3 * l + 9 * S - 9 * P + 3 * M),
                            (I = 3 * S - 3 * l)),
                        1e-12 > Math.abs(F))
                      ) {
                        if (1e-12 > Math.abs(D)) continue;
                        0 < (O = -I / D) && O < 1 && H.push(O);
                        continue;
                      }
                      (W = Math.sqrt((U = D * D - 4 * I * F))),
                        !(U < 0) &&
                          (0 < (L = (-D + W) / (2 * F)) && L < 1 && H.push(L),
                          0 < (N = (-D - W) / (2 * F)) && N < 1 && H.push(N));
                    }
                    let z = H.length,
                      $,
                      K = z;
                    for (; z--; )
                      ($ = 1 - (O = H[z])),
                        (V[0][z] =
                          $ * $ * $ * o +
                          3 * $ * $ * O * _ +
                          3 * $ * O * O * E +
                          O * O * O * T),
                        (V[1][z] =
                          $ * $ * $ * l +
                          3 * $ * $ * O * S +
                          3 * $ * O * O * P +
                          O * O * O * M);
                    return (
                      (V[0][K] = o),
                      (V[1][K] = l),
                      (V[0][K + 1] = T),
                      (V[1][K + 1] = M),
                      (V[0].length = V[1].length = K + 2),
                      [
                        Math.min(...V[0]),
                        Math.min(...V[1]),
                        Math.max(...V[0]),
                        Math.max(...V[1]),
                      ]
                    );
                  }
                };
                l.Util = Util;
                let th = [
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225, 8230, 8212, 8211,
                  402, 8260, 8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216,
                  8217, 8218, 8482, 64257, 64258, 321, 338, 352, 376, 381, 305,
                  322, 339, 353, 382, 0, 8364,
                ];
                function stringToPDFString(o) {
                  if (o[0] >= "\xef") {
                    let l;
                    if (
                      ("\xfe" === o[0] && "\xff" === o[1]
                        ? (l = "utf-16be")
                        : "\xff" === o[0] && "\xfe" === o[1]
                        ? (l = "utf-16le")
                        : "\xef" === o[0] &&
                          "\xbb" === o[1] &&
                          "\xbf" === o[2] &&
                          (l = "utf-8"),
                      l)
                    )
                      try {
                        let _ = new TextDecoder(l, { fatal: !0 }),
                          S = stringToBytes(o);
                        return _.decode(S);
                      } catch (o) {
                        warn(`stringToPDFString: "${o}".`);
                      }
                  }
                  let l = [];
                  for (let _ = 0, S = o.length; _ < S; _++) {
                    let S = th[o.charCodeAt(_)];
                    l.push(S ? String.fromCharCode(S) : o.charAt(_));
                  }
                  return l.join("");
                }
                function stringToUTF8String(o) {
                  return decodeURIComponent(escape(o));
                }
                function utf8StringToString(o) {
                  return unescape(encodeURIComponent(o));
                }
                function isArrayBuffer(o) {
                  return (
                    "object" == typeof o &&
                    null !== o &&
                    void 0 !== o.byteLength
                  );
                }
                function isArrayEqual(o, l) {
                  if (o.length !== l.length) return !1;
                  for (let _ = 0, S = o.length; _ < S; _++)
                    if (o[_] !== l[_]) return !1;
                  return !0;
                }
                function getModificationDate(o = new Date()) {
                  let l = [
                    o.getUTCFullYear().toString(),
                    (o.getUTCMonth() + 1).toString().padStart(2, "0"),
                    o.getUTCDate().toString().padStart(2, "0"),
                    o.getUTCHours().toString().padStart(2, "0"),
                    o.getUTCMinutes().toString().padStart(2, "0"),
                    o.getUTCSeconds().toString().padStart(2, "0"),
                  ];
                  return l.join("");
                }
                function createPromiseCapability() {
                  let o = Object.create(null),
                    l = !1;
                  return (
                    Object.defineProperty(o, "settled", { get: () => l }),
                    (o.promise = new Promise(function (_, S) {
                      (o.resolve = function (o) {
                        (l = !0), _(o);
                      }),
                        (o.reject = function (o) {
                          (l = !0), S(o);
                        });
                    })),
                    o
                  );
                }
              },
              (__unused_webpack_module, exports, __w_pdfjs_require__) => {
                let createPDFNetworkStream;
                Object.defineProperty(exports, "__esModule", { value: !0 }),
                  (exports.build =
                    exports.RenderTask =
                    exports.PDFWorkerUtil =
                    exports.PDFWorker =
                    exports.PDFPageProxy =
                    exports.PDFDocumentProxy =
                    exports.PDFDocumentLoadingTask =
                    exports.PDFDataRangeTransport =
                    exports.LoopbackPort =
                    exports.DefaultStandardFontDataFactory =
                    exports.DefaultCanvasFactory =
                    exports.DefaultCMapReaderFactory =
                      void 0),
                  (exports.getDocument = getDocument),
                  (exports.version = void 0);
                var _util = __w_pdfjs_require__(1),
                  _annotation_storage = __w_pdfjs_require__(3),
                  _display_utils = __w_pdfjs_require__(6),
                  _font_loader = __w_pdfjs_require__(9),
                  _canvas = __w_pdfjs_require__(11),
                  _worker_options = __w_pdfjs_require__(14),
                  _is_node = __w_pdfjs_require__(10),
                  _message_handler = __w_pdfjs_require__(15),
                  _metadata = __w_pdfjs_require__(16),
                  _optional_content_config = __w_pdfjs_require__(17),
                  _transport_stream = __w_pdfjs_require__(18),
                  _xfa_text = __w_pdfjs_require__(19);
                let DEFAULT_RANGE_CHUNK_SIZE = 65536,
                  RENDERING_CANCELLED_TIMEOUT = 100,
                  DefaultCanvasFactory = _display_utils.DOMCanvasFactory;
                exports.DefaultCanvasFactory = DefaultCanvasFactory;
                let DefaultCMapReaderFactory =
                  _display_utils.DOMCMapReaderFactory;
                exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory;
                let DefaultStandardFontDataFactory =
                  _display_utils.DOMStandardFontDataFactory;
                if (
                  ((exports.DefaultStandardFontDataFactory =
                    DefaultStandardFontDataFactory),
                  _is_node.isNodeJS)
                ) {
                  let {
                    NodeCanvasFactory,
                    NodeCMapReaderFactory,
                    NodeStandardFontDataFactory,
                  } = __w_pdfjs_require__(20);
                  (exports.DefaultCanvasFactory = DefaultCanvasFactory =
                    NodeCanvasFactory),
                    (exports.DefaultCMapReaderFactory =
                      DefaultCMapReaderFactory =
                        NodeCMapReaderFactory),
                    (exports.DefaultStandardFontDataFactory =
                      DefaultStandardFontDataFactory =
                        NodeStandardFontDataFactory);
                }
                if (_is_node.isNodeJS) {
                  let { PDFNodeStream } = __w_pdfjs_require__(21);
                  createPDFNetworkStream = (o) => new PDFNodeStream(o);
                } else {
                  let { PDFNetworkStream } = __w_pdfjs_require__(24),
                    { PDFFetchStream } = __w_pdfjs_require__(25);
                  createPDFNetworkStream = (o) =>
                    (0, _display_utils.isValidFetchUrl)(o.url)
                      ? new PDFFetchStream(o)
                      : new PDFNetworkStream(o);
                }
                function getDocument(o) {
                  if ("string" == typeof o || o instanceof URL) o = { url: o };
                  else if ((0, _util.isArrayBuffer)(o)) o = { data: o };
                  else if (o instanceof PDFDataRangeTransport)
                    (0, _display_utils.deprecated)(
                      "`PDFDataRangeTransport`-instance, please use a parameter object with `range`-property instead."
                    ),
                      (o = { range: o });
                  else if ("object" != typeof o)
                    throw Error(
                      "Invalid parameter in getDocument, need either string, URL, TypedArray, or parameter object."
                    );
                  if (!o.url && !o.data && !o.range)
                    throw Error(
                      "Invalid parameter object: need either .data, .range or .url"
                    );
                  let l = new PDFDocumentLoadingTask(),
                    _ = o.url ? getUrlProp(o.url) : null,
                    S = o.data ? getDataProp(o.data) : null,
                    E = o.httpHeaders || null,
                    P = !0 === o.withCredentials,
                    T = o.password ?? null,
                    M =
                      o.range instanceof PDFDataRangeTransport ? o.range : null,
                    F =
                      Number.isInteger(o.rangeChunkSize) && o.rangeChunkSize > 0
                        ? o.rangeChunkSize
                        : DEFAULT_RANGE_CHUNK_SIZE,
                    D = o.worker instanceof PDFWorker ? o.worker : null,
                    I = o.verbosity,
                    O =
                      "string" != typeof o.docBaseUrl ||
                      (0, _display_utils.isDataScheme)(o.docBaseUrl)
                        ? null
                        : o.docBaseUrl,
                    L = "string" == typeof o.cMapUrl ? o.cMapUrl : null,
                    N = !1 !== o.cMapPacked,
                    U = o.CMapReaderFactory || DefaultCMapReaderFactory,
                    W =
                      "string" == typeof o.standardFontDataUrl
                        ? o.standardFontDataUrl
                        : null,
                    H =
                      o.StandardFontDataFactory ||
                      DefaultStandardFontDataFactory,
                    V = !0 !== o.stopAtErrors,
                    z =
                      Number.isInteger(o.maxImageSize) && o.maxImageSize > -1
                        ? o.maxImageSize
                        : -1,
                    $ = !1 !== o.isEvalSupported,
                    K =
                      "boolean" == typeof o.isOffscreenCanvasSupported
                        ? o.isOffscreenCanvasSupported
                        : !_is_node.isNodeJS,
                    Y =
                      "boolean" == typeof o.disableFontFace
                        ? o.disableFontFace
                        : _is_node.isNodeJS,
                    J = !0 === o.fontExtraProperties,
                    Q = !0 === o.enableXfa,
                    Z = o.ownerDocument || globalThis.document,
                    tt = !0 === o.disableRange,
                    te = !0 === o.disableStream,
                    ti = !0 === o.disableAutoFetch,
                    tr = !0 === o.pdfBug,
                    ta = M ? M.length : o.length ?? NaN,
                    ts =
                      "boolean" == typeof o.useSystemFonts
                        ? o.useSystemFonts
                        : !_is_node.isNodeJS && !Y,
                    tn =
                      "boolean" == typeof o.useWorkerFetch
                        ? o.useWorkerFetch
                        : U === _display_utils.DOMCMapReaderFactory &&
                          H === _display_utils.DOMStandardFontDataFactory &&
                          (0, _display_utils.isValidFetchUrl)(
                            L,
                            document.baseURI
                          ) &&
                          (0, _display_utils.isValidFetchUrl)(
                            W,
                            document.baseURI
                          ),
                    to = null;
                  (0, _util.setVerbosityLevel)(I);
                  let tl = tn
                    ? null
                    : {
                        cMapReaderFactory: new U({
                          baseUrl: L,
                          isCompressed: N,
                        }),
                        standardFontDataFactory: new H({ baseUrl: W }),
                      };
                  if (!D) {
                    let o = {
                      verbosity: I,
                      port: _worker_options.GlobalWorkerOptions.workerPort,
                    };
                    (D = o.port ? PDFWorker.fromPort(o) : new PDFWorker(o)),
                      (l._worker = D);
                  }
                  let th = l.docId,
                    td = {
                      docId: th,
                      apiVersion: "3.4.120",
                      data: S,
                      password: T,
                      disableAutoFetch: ti,
                      rangeChunkSize: F,
                      length: ta,
                      docBaseUrl: O,
                      enableXfa: Q,
                      evaluatorOptions: {
                        maxImageSize: z,
                        disableFontFace: Y,
                        ignoreErrors: V,
                        isEvalSupported: $,
                        isOffscreenCanvasSupported: K,
                        fontExtraProperties: J,
                        useSystemFonts: ts,
                        cMapUrl: tn ? L : null,
                        standardFontDataUrl: tn ? W : null,
                      },
                    },
                    tc = {
                      ignoreErrors: V,
                      isEvalSupported: $,
                      disableFontFace: Y,
                      fontExtraProperties: J,
                      enableXfa: Q,
                      ownerDocument: Z,
                      disableAutoFetch: ti,
                      pdfBug: tr,
                      styleElement: to,
                    };
                  return (
                    D.promise
                      .then(function () {
                        if (l.destroyed) throw Error("Loading aborted");
                        let o = _fetchDocument(D, td),
                          T = new Promise(function (o) {
                            let l;
                            M
                              ? (l =
                                  new _transport_stream.PDFDataTransportStream(
                                    {
                                      length: ta,
                                      initialData: M.initialData,
                                      progressiveDone: M.progressiveDone,
                                      contentDispositionFilename:
                                        M.contentDispositionFilename,
                                      disableRange: tt,
                                      disableStream: te,
                                    },
                                    M
                                  ))
                              : S ||
                                (l = createPDFNetworkStream({
                                  url: _,
                                  length: ta,
                                  httpHeaders: E,
                                  withCredentials: P,
                                  rangeChunkSize: F,
                                  disableRange: tt,
                                  disableStream: te,
                                })),
                              o(l);
                          });
                        return Promise.all([o, T]).then(function ([o, _]) {
                          if (l.destroyed) throw Error("Loading aborted");
                          let S = new _message_handler.MessageHandler(
                              th,
                              o,
                              D.port
                            ),
                            E = new WorkerTransport(S, l, _, tc, tl);
                          (l._transport = E), S.send("Ready", null);
                        });
                      })
                      .catch(l._capability.reject),
                    l
                  );
                }
                async function _fetchDocument(o, l) {
                  if (o.destroyed) throw Error("Worker was destroyed");
                  let _ = await o.messageHandler.sendWithPromise(
                    "GetDocRequest",
                    l,
                    l.data ? [l.data.buffer] : null
                  );
                  if (o.destroyed) throw Error("Worker was destroyed");
                  return _;
                }
                function getUrlProp(o) {
                  if (o instanceof URL) return o.href;
                  try {
                    return new URL(o, window.location).href;
                  } catch (l) {
                    if (_is_node.isNodeJS && "string" == typeof o) return o;
                  }
                  throw Error(
                    "Invalid PDF url data: either string or URL-object is expected in the url property."
                  );
                }
                function getDataProp(o) {
                  if (
                    _is_node.isNodeJS &&
                    void 0 !== Buffer &&
                    o instanceof Buffer
                  )
                    return (
                      (0, _display_utils.deprecated)(
                        "Please provide binary data as `Uint8Array`, rather than `Buffer`."
                      ),
                      new Uint8Array(o)
                    );
                  if (
                    o instanceof Uint8Array &&
                    o.byteLength === o.buffer.byteLength
                  )
                    return o;
                  if ("string" == typeof o) return (0, _util.stringToBytes)(o);
                  if (
                    ("object" == typeof o && !isNaN(o?.length)) ||
                    (0, _util.isArrayBuffer)(o)
                  )
                    return new Uint8Array(o);
                  throw Error(
                    "Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property."
                  );
                }
                let PDFDocumentLoadingTask = class PDFDocumentLoadingTask {
                  static #t = 0;
                  #e = null;
                  constructor() {
                    (this._capability = (0, _util.createPromiseCapability)()),
                      (this._transport = null),
                      (this._worker = null),
                      (this.docId = `d${PDFDocumentLoadingTask.#t++}`),
                      (this.destroyed = !1),
                      (this.onPassword = null),
                      (this.onProgress = null);
                  }
                  get onUnsupportedFeature() {
                    return this.#e;
                  }
                  set onUnsupportedFeature(o) {
                    (0, _display_utils.deprecated)(
                      "The PDFDocumentLoadingTask onUnsupportedFeature property will be removed in the future."
                    ),
                      (this.#e = o);
                  }
                  get promise() {
                    return this._capability.promise;
                  }
                  async destroy() {
                    (this.destroyed = !0),
                      await this._transport?.destroy(),
                      (this._transport = null),
                      this._worker &&
                        (this._worker.destroy(), (this._worker = null));
                  }
                };
                exports.PDFDocumentLoadingTask = PDFDocumentLoadingTask;
                let PDFDataRangeTransport = class PDFDataRangeTransport {
                  constructor(o, l, _ = !1, S = null) {
                    (this.length = o),
                      (this.initialData = l),
                      (this.progressiveDone = _),
                      (this.contentDispositionFilename = S),
                      (this._rangeListeners = []),
                      (this._progressListeners = []),
                      (this._progressiveReadListeners = []),
                      (this._progressiveDoneListeners = []),
                      (this._readyCapability = (0,
                      _util.createPromiseCapability)());
                  }
                  addRangeListener(o) {
                    this._rangeListeners.push(o);
                  }
                  addProgressListener(o) {
                    this._progressListeners.push(o);
                  }
                  addProgressiveReadListener(o) {
                    this._progressiveReadListeners.push(o);
                  }
                  addProgressiveDoneListener(o) {
                    this._progressiveDoneListeners.push(o);
                  }
                  onDataRange(o, l) {
                    for (let _ of this._rangeListeners) _(o, l);
                  }
                  onDataProgress(o, l) {
                    this._readyCapability.promise.then(() => {
                      for (let _ of this._progressListeners) _(o, l);
                    });
                  }
                  onDataProgressiveRead(o) {
                    this._readyCapability.promise.then(() => {
                      for (let l of this._progressiveReadListeners) l(o);
                    });
                  }
                  onDataProgressiveDone() {
                    this._readyCapability.promise.then(() => {
                      for (let o of this._progressiveDoneListeners) o();
                    });
                  }
                  transportReady() {
                    this._readyCapability.resolve();
                  }
                  requestDataRange(o, l) {
                    (0, _util.unreachable)(
                      "Abstract method PDFDataRangeTransport.requestDataRange"
                    );
                  }
                  abort() {}
                };
                exports.PDFDataRangeTransport = PDFDataRangeTransport;
                let PDFDocumentProxy = class PDFDocumentProxy {
                  constructor(o, l) {
                    (this._pdfInfo = o), (this._transport = l);
                  }
                  get annotationStorage() {
                    return this._transport.annotationStorage;
                  }
                  get numPages() {
                    return this._pdfInfo.numPages;
                  }
                  get fingerprints() {
                    return this._pdfInfo.fingerprints;
                  }
                  get isPureXfa() {
                    return (0, _util.shadow)(
                      this,
                      "isPureXfa",
                      !!this._transport._htmlForXfa
                    );
                  }
                  get allXfaHtml() {
                    return this._transport._htmlForXfa;
                  }
                  getPage(o) {
                    return this._transport.getPage(o);
                  }
                  getPageIndex(o) {
                    return this._transport.getPageIndex(o);
                  }
                  getDestinations() {
                    return this._transport.getDestinations();
                  }
                  getDestination(o) {
                    return this._transport.getDestination(o);
                  }
                  getPageLabels() {
                    return this._transport.getPageLabels();
                  }
                  getPageLayout() {
                    return this._transport.getPageLayout();
                  }
                  getPageMode() {
                    return this._transport.getPageMode();
                  }
                  getViewerPreferences() {
                    return this._transport.getViewerPreferences();
                  }
                  getOpenAction() {
                    return this._transport.getOpenAction();
                  }
                  getAttachments() {
                    return this._transport.getAttachments();
                  }
                  getJavaScript() {
                    return this._transport.getJavaScript();
                  }
                  getJSActions() {
                    return this._transport.getDocJSActions();
                  }
                  getOutline() {
                    return this._transport.getOutline();
                  }
                  getOptionalContentConfig() {
                    return this._transport.getOptionalContentConfig();
                  }
                  getPermissions() {
                    return this._transport.getPermissions();
                  }
                  getMetadata() {
                    return this._transport.getMetadata();
                  }
                  getMarkInfo() {
                    return this._transport.getMarkInfo();
                  }
                  getData() {
                    return this._transport.getData();
                  }
                  saveDocument() {
                    return this._transport.saveDocument();
                  }
                  getDownloadInfo() {
                    return this._transport.downloadInfoCapability.promise;
                  }
                  cleanup(o = !1) {
                    return this._transport.startCleanup(o || this.isPureXfa);
                  }
                  destroy() {
                    return this.loadingTask.destroy();
                  }
                  get loadingParams() {
                    return this._transport.loadingParams;
                  }
                  get loadingTask() {
                    return this._transport.loadingTask;
                  }
                  getFieldObjects() {
                    return this._transport.getFieldObjects();
                  }
                  hasJSActions() {
                    return this._transport.hasJSActions();
                  }
                  getCalculationOrderIds() {
                    return this._transport.getCalculationOrderIds();
                  }
                };
                exports.PDFDocumentProxy = PDFDocumentProxy;
                let PDFPageProxy = class PDFPageProxy {
                  constructor(o, l, _, S, E = !1) {
                    (this._pageIndex = o),
                      (this._pageInfo = l),
                      (this._ownerDocument = S),
                      (this._transport = _),
                      (this._stats = E ? new _display_utils.StatTimer() : null),
                      (this._pdfBug = E),
                      (this.commonObjs = _.commonObjs),
                      (this.objs = new PDFObjects()),
                      (this.cleanupAfterRender = !1),
                      (this.pendingCleanup = !1),
                      (this._intentStates = new Map()),
                      (this.destroyed = !1);
                  }
                  get pageNumber() {
                    return this._pageIndex + 1;
                  }
                  get rotate() {
                    return this._pageInfo.rotate;
                  }
                  get ref() {
                    return this._pageInfo.ref;
                  }
                  get userUnit() {
                    return this._pageInfo.userUnit;
                  }
                  get view() {
                    return this._pageInfo.view;
                  }
                  getViewport({
                    scale: o,
                    rotation: l = this.rotate,
                    offsetX: _ = 0,
                    offsetY: S = 0,
                    dontFlip: E = !1,
                  } = {}) {
                    return new _display_utils.PageViewport({
                      viewBox: this.view,
                      scale: o,
                      rotation: l,
                      offsetX: _,
                      offsetY: S,
                      dontFlip: E,
                    });
                  }
                  getAnnotations({ intent: o = "display" } = {}) {
                    let l = this._transport.getRenderingIntent(o);
                    return this._transport.getAnnotations(
                      this._pageIndex,
                      l.renderingIntent
                    );
                  }
                  getJSActions() {
                    return this._transport.getPageJSActions(this._pageIndex);
                  }
                  get isPureXfa() {
                    return (0, _util.shadow)(
                      this,
                      "isPureXfa",
                      !!this._transport._htmlForXfa
                    );
                  }
                  async getXfa() {
                    return (
                      this._transport._htmlForXfa?.children[this._pageIndex] ||
                      null
                    );
                  }
                  render({
                    canvasContext: o,
                    viewport: l,
                    intent: _ = "display",
                    annotationMode: S = _util.AnnotationMode.ENABLE,
                    transform: E = null,
                    canvasFactory: P = null,
                    background: T = null,
                    optionalContentConfigPromise: M = null,
                    annotationCanvasMap: F = null,
                    pageColors: D = null,
                    printAnnotationStorage: I = null,
                  }) {
                    this._stats?.time("Overall");
                    let O = this._transport.getRenderingIntent(_, S, I);
                    (this.pendingCleanup = !1),
                      M || (M = this._transport.getOptionalContentConfig());
                    let L = this._intentStates.get(O.cacheKey);
                    L ||
                      ((L = Object.create(null)),
                      this._intentStates.set(O.cacheKey, L)),
                      L.streamReaderCancelTimeout &&
                        (clearTimeout(L.streamReaderCancelTimeout),
                        (L.streamReaderCancelTimeout = null));
                    let N =
                        P ||
                        new DefaultCanvasFactory({
                          ownerDocument: this._ownerDocument,
                        }),
                      U = !!(
                        O.renderingIntent & _util.RenderingIntentFlag.PRINT
                      );
                    L.displayReadyCapability ||
                      ((L.displayReadyCapability = (0,
                      _util.createPromiseCapability)()),
                      (L.operatorList = {
                        fnArray: [],
                        argsArray: [],
                        lastChunk: !1,
                        separateAnnots: null,
                      }),
                      this._stats?.time("Page Request"),
                      this._pumpOperatorList(O));
                    let complete = (o) => {
                        L.renderTasks.delete(W),
                          (this.cleanupAfterRender || U) &&
                            (this.pendingCleanup = !0),
                          this._tryCleanup(),
                          o
                            ? (W.capability.reject(o),
                              this._abortOperatorList({
                                intentState: L,
                                reason: o instanceof Error ? o : Error(o),
                              }))
                            : W.capability.resolve(),
                          this._stats?.timeEnd("Rendering"),
                          this._stats?.timeEnd("Overall");
                      },
                      W = new InternalRenderTask({
                        callback: complete,
                        params: {
                          canvasContext: o,
                          viewport: l,
                          transform: E,
                          background: T,
                        },
                        objs: this.objs,
                        commonObjs: this.commonObjs,
                        annotationCanvasMap: F,
                        operatorList: L.operatorList,
                        pageIndex: this._pageIndex,
                        canvasFactory: N,
                        useRequestAnimationFrame: !U,
                        pdfBug: this._pdfBug,
                        pageColors: D,
                      });
                    (L.renderTasks ||= new Set()).add(W);
                    let H = W.task;
                    return (
                      Promise.all([L.displayReadyCapability.promise, M])
                        .then(([o, l]) => {
                          if (this.pendingCleanup) {
                            complete();
                            return;
                          }
                          this._stats?.time("Rendering"),
                            W.initializeGraphics({
                              transparency: o,
                              optionalContentConfig: l,
                            }),
                            W.operatorListChanged();
                        })
                        .catch(complete),
                      H
                    );
                  }
                  getOperatorList({
                    intent: o = "display",
                    annotationMode: l = _util.AnnotationMode.ENABLE,
                    printAnnotationStorage: _ = null,
                  } = {}) {
                    let S;
                    function operatorListChanged() {
                      P.operatorList.lastChunk &&
                        (P.opListReadCapability.resolve(P.operatorList),
                        P.renderTasks.delete(S));
                    }
                    let E = this._transport.getRenderingIntent(o, l, _, !0),
                      P = this._intentStates.get(E.cacheKey);
                    return (
                      P ||
                        ((P = Object.create(null)),
                        this._intentStates.set(E.cacheKey, P)),
                      P.opListReadCapability ||
                        (((S = Object.create(null)).operatorListChanged =
                          operatorListChanged),
                        (P.opListReadCapability = (0,
                        _util.createPromiseCapability)()),
                        (P.renderTasks ||= new Set()).add(S),
                        (P.operatorList = {
                          fnArray: [],
                          argsArray: [],
                          lastChunk: !1,
                          separateAnnots: null,
                        }),
                        this._stats?.time("Page Request"),
                        this._pumpOperatorList(E)),
                      P.opListReadCapability.promise
                    );
                  }
                  streamTextContent({
                    disableCombineTextItems: o = !1,
                    includeMarkedContent: l = !1,
                  } = {}) {
                    let _ = 100;
                    return this._transport.messageHandler.sendWithStream(
                      "GetTextContent",
                      {
                        pageIndex: this._pageIndex,
                        combineTextItems: !0 !== o,
                        includeMarkedContent: !0 === l,
                      },
                      { highWaterMark: _, size: (o) => o.items.length }
                    );
                  }
                  getTextContent(o = {}) {
                    if (this._transport._htmlForXfa)
                      return this.getXfa().then((o) =>
                        _xfa_text.XfaText.textContent(o)
                      );
                    let l = this.streamTextContent(o);
                    return new Promise(function (o, _) {
                      function pump() {
                        S.read().then(function ({ value: l, done: _ }) {
                          if (_) {
                            o(E);
                            return;
                          }
                          Object.assign(E.styles, l.styles),
                            E.items.push(...l.items),
                            pump();
                        }, _);
                      }
                      let S = l.getReader(),
                        E = { items: [], styles: Object.create(null) };
                      pump();
                    });
                  }
                  getStructTree() {
                    return this._transport.getStructTree(this._pageIndex);
                  }
                  _destroy() {
                    this.destroyed = !0;
                    let o = [];
                    for (let l of this._intentStates.values())
                      if (
                        (this._abortOperatorList({
                          intentState: l,
                          reason: Error("Page was destroyed."),
                          force: !0,
                        }),
                        !l.opListReadCapability)
                      )
                        for (let _ of l.renderTasks)
                          o.push(_.completed), _.cancel();
                    return (
                      this.objs.clear(),
                      (this.pendingCleanup = !1),
                      Promise.all(o)
                    );
                  }
                  cleanup(o = !1) {
                    return (this.pendingCleanup = !0), this._tryCleanup(o);
                  }
                  _tryCleanup(o = !1) {
                    if (!this.pendingCleanup) return !1;
                    for (let {
                      renderTasks: o,
                      operatorList: l,
                    } of this._intentStates.values())
                      if (o.size > 0 || !l.lastChunk) return !1;
                    return (
                      this._intentStates.clear(),
                      this.objs.clear(),
                      o &&
                        this._stats &&
                        (this._stats = new _display_utils.StatTimer()),
                      (this.pendingCleanup = !1),
                      !0
                    );
                  }
                  _startRenderPage(o, l) {
                    let _ = this._intentStates.get(l);
                    _ &&
                      (this._stats?.timeEnd("Page Request"),
                      _.displayReadyCapability?.resolve(o));
                  }
                  _renderPageChunk(o, l) {
                    for (let _ = 0, S = o.length; _ < S; _++)
                      l.operatorList.fnArray.push(o.fnArray[_]),
                        l.operatorList.argsArray.push(o.argsArray[_]);
                    for (let _ of ((l.operatorList.lastChunk = o.lastChunk),
                    (l.operatorList.separateAnnots = o.separateAnnots),
                    l.renderTasks))
                      _.operatorListChanged();
                    o.lastChunk && this._tryCleanup();
                  }
                  _pumpOperatorList({
                    renderingIntent: o,
                    cacheKey: l,
                    annotationStorageMap: _,
                  }) {
                    let S = this._transport.messageHandler.sendWithStream(
                        "GetOperatorList",
                        {
                          pageIndex: this._pageIndex,
                          intent: o,
                          cacheKey: l,
                          annotationStorage: _,
                        }
                      ),
                      E = S.getReader(),
                      P = this._intentStates.get(l);
                    P.streamReader = E;
                    let pump = () => {
                      E.read().then(
                        ({ value: o, done: l }) => {
                          if (l) {
                            P.streamReader = null;
                            return;
                          }
                          this._transport.destroyed ||
                            (this._renderPageChunk(o, P), pump());
                        },
                        (o) => {
                          if (
                            ((P.streamReader = null),
                            !this._transport.destroyed)
                          ) {
                            if (P.operatorList) {
                              for (let o of ((P.operatorList.lastChunk = !0),
                              P.renderTasks))
                                o.operatorListChanged();
                              this._tryCleanup();
                            }
                            if (P.displayReadyCapability)
                              P.displayReadyCapability.reject(o);
                            else if (P.opListReadCapability)
                              P.opListReadCapability.reject(o);
                            else throw o;
                          }
                        }
                      );
                    };
                    pump();
                  }
                  _abortOperatorList({
                    intentState: o,
                    reason: l,
                    force: _ = !1,
                  }) {
                    if (o.streamReader) {
                      if (
                        (o.streamReaderCancelTimeout &&
                          (clearTimeout(o.streamReaderCancelTimeout),
                          (o.streamReaderCancelTimeout = null)),
                        !_)
                      ) {
                        if (o.renderTasks.size > 0) return;
                        if (
                          l instanceof
                          _display_utils.RenderingCancelledException
                        ) {
                          let _ = RENDERING_CANCELLED_TIMEOUT;
                          l.extraDelay > 0 &&
                            l.extraDelay < 1e3 &&
                            (_ += l.extraDelay),
                            (o.streamReaderCancelTimeout = setTimeout(() => {
                              (o.streamReaderCancelTimeout = null),
                                this._abortOperatorList({
                                  intentState: o,
                                  reason: l,
                                  force: !0,
                                });
                            }, _));
                          return;
                        }
                      }
                      if (
                        (o.streamReader
                          .cancel(new _util.AbortException(l.message))
                          .catch(() => {}),
                        (o.streamReader = null),
                        !this._transport.destroyed)
                      ) {
                        for (let [l, _] of this._intentStates)
                          if (_ === o) {
                            this._intentStates.delete(l);
                            break;
                          }
                        this.cleanup();
                      }
                    }
                  }
                  get stats() {
                    return this._stats;
                  }
                };
                exports.PDFPageProxy = PDFPageProxy;
                let LoopbackPort = class LoopbackPort {
                  #i = new Set();
                  #r = Promise.resolve();
                  postMessage(o, l) {
                    let _ = { data: structuredClone(o, l) };
                    this.#r.then(() => {
                      for (let o of this.#i) o.call(this, _);
                    });
                  }
                  addEventListener(o, l) {
                    this.#i.add(l);
                  }
                  removeEventListener(o, l) {
                    this.#i.delete(l);
                  }
                  terminate() {
                    this.#i.clear();
                  }
                };
                exports.LoopbackPort = LoopbackPort;
                let PDFWorkerUtil = {
                  isWorkerDisabled: !1,
                  fallbackWorkerSrc: null,
                  fakeWorkerId: 0,
                };
                if (
                  ((exports.PDFWorkerUtil = PDFWorkerUtil), _is_node.isNodeJS)
                )
                  (PDFWorkerUtil.isWorkerDisabled = !0),
                    (PDFWorkerUtil.fallbackWorkerSrc = "./pdf.worker.js");
                else if ("object" == typeof document) {
                  let pdfjsFilePath = document?.currentScript?.src;
                  pdfjsFilePath &&
                    (PDFWorkerUtil.fallbackWorkerSrc = pdfjsFilePath.replace(
                      /(\.(?:min\.)?js)(\?.*)?$/i,
                      ".worker$1$2"
                    ));
                }
                (PDFWorkerUtil.isSameOrigin = function (o, l) {
                  let _;
                  try {
                    if (!(_ = new URL(o)).origin || "null" === _.origin)
                      return !1;
                  } catch (o) {
                    return !1;
                  }
                  let S = new URL(l, _);
                  return _.origin === S.origin;
                }),
                  (PDFWorkerUtil.createCDNWrapper = function (o) {
                    let l = `importScripts("${o}");`;
                    return URL.createObjectURL(new Blob([l]));
                  });
                let PDFWorker = class PDFWorker {
                  static #a = new WeakMap();
                  constructor({
                    name: o = null,
                    port: l = null,
                    verbosity: _ = (0, _util.getVerbosityLevel)(),
                  } = {}) {
                    if (l && PDFWorker.#a.has(l))
                      throw Error(
                        "Cannot use more than one PDFWorker per port."
                      );
                    if (
                      ((this.name = o),
                      (this.destroyed = !1),
                      (this.verbosity = _),
                      (this._readyCapability = (0,
                      _util.createPromiseCapability)()),
                      (this._port = null),
                      (this._webWorker = null),
                      (this._messageHandler = null),
                      l)
                    ) {
                      PDFWorker.#a.set(l, this), this._initializeFromPort(l);
                      return;
                    }
                    this._initialize();
                  }
                  get promise() {
                    return this._readyCapability.promise;
                  }
                  get port() {
                    return this._port;
                  }
                  get messageHandler() {
                    return this._messageHandler;
                  }
                  _initializeFromPort(o) {
                    (this._port = o),
                      (this._messageHandler =
                        new _message_handler.MessageHandler(
                          "main",
                          "worker",
                          o
                        )),
                      this._messageHandler.on("ready", function () {}),
                      this._readyCapability.resolve(),
                      this._messageHandler.send("configure", {
                        verbosity: this.verbosity,
                      });
                  }
                  _initialize() {
                    if (
                      !PDFWorkerUtil.isWorkerDisabled &&
                      !PDFWorker._mainThreadWorkerMessageHandler
                    ) {
                      let { workerSrc: o } = PDFWorker;
                      try {
                        PDFWorkerUtil.isSameOrigin(window.location.href, o) ||
                          (o = PDFWorkerUtil.createCDNWrapper(
                            new URL(o, window.location).href
                          ));
                        let l = new Worker(o),
                          _ = new _message_handler.MessageHandler(
                            "main",
                            "worker",
                            l
                          ),
                          terminateEarly = () => {
                            l.removeEventListener("error", onWorkerError),
                              _.destroy(),
                              l.terminate(),
                              this.destroyed
                                ? this._readyCapability.reject(
                                    Error("Worker was destroyed")
                                  )
                                : this._setupFakeWorker();
                          },
                          onWorkerError = () => {
                            this._webWorker || terminateEarly();
                          };
                        l.addEventListener("error", onWorkerError),
                          _.on("test", (o) => {
                            if (
                              (l.removeEventListener("error", onWorkerError),
                              this.destroyed)
                            ) {
                              terminateEarly();
                              return;
                            }
                            o
                              ? ((this._messageHandler = _),
                                (this._port = l),
                                (this._webWorker = l),
                                this._readyCapability.resolve(),
                                _.send("configure", {
                                  verbosity: this.verbosity,
                                }))
                              : (this._setupFakeWorker(),
                                _.destroy(),
                                l.terminate());
                          }),
                          _.on("ready", (o) => {
                            if (
                              (l.removeEventListener("error", onWorkerError),
                              this.destroyed)
                            ) {
                              terminateEarly();
                              return;
                            }
                            try {
                              sendTest();
                            } catch (o) {
                              this._setupFakeWorker();
                            }
                          });
                        let sendTest = () => {
                          let o = new Uint8Array();
                          _.send("test", o, [o.buffer]);
                        };
                        sendTest();
                        return;
                      } catch (o) {
                        (0, _util.info)("The worker has been disabled.");
                      }
                    }
                    this._setupFakeWorker();
                  }
                  _setupFakeWorker() {
                    PDFWorkerUtil.isWorkerDisabled ||
                      ((0, _util.warn)("Setting up fake worker."),
                      (PDFWorkerUtil.isWorkerDisabled = !0)),
                      PDFWorker._setupFakeWorkerGlobal
                        .then((o) => {
                          if (this.destroyed) {
                            this._readyCapability.reject(
                              Error("Worker was destroyed")
                            );
                            return;
                          }
                          let l = new LoopbackPort();
                          this._port = l;
                          let _ = `fake${PDFWorkerUtil.fakeWorkerId++}`,
                            S = new _message_handler.MessageHandler(
                              _ + "_worker",
                              _,
                              l
                            );
                          o.setup(S, l);
                          let E = new _message_handler.MessageHandler(
                            _,
                            _ + "_worker",
                            l
                          );
                          (this._messageHandler = E),
                            this._readyCapability.resolve(),
                            E.send("configure", { verbosity: this.verbosity });
                        })
                        .catch((o) => {
                          this._readyCapability.reject(
                            Error(
                              `Setting up fake worker failed: "${o.message}".`
                            )
                          );
                        });
                  }
                  destroy() {
                    (this.destroyed = !0),
                      this._webWorker &&
                        (this._webWorker.terminate(), (this._webWorker = null)),
                      PDFWorker.#a.delete(this._port),
                      (this._port = null),
                      this._messageHandler &&
                        (this._messageHandler.destroy(),
                        (this._messageHandler = null));
                  }
                  static fromPort(o) {
                    if (!o?.port)
                      throw Error(
                        "PDFWorker.fromPort - invalid method signature."
                      );
                    return this.#a.has(o.port)
                      ? this.#a.get(o.port)
                      : new PDFWorker(o);
                  }
                  static get workerSrc() {
                    if (_worker_options.GlobalWorkerOptions.workerSrc)
                      return _worker_options.GlobalWorkerOptions.workerSrc;
                    if (null !== PDFWorkerUtil.fallbackWorkerSrc)
                      return (
                        _is_node.isNodeJS ||
                          (0, _display_utils.deprecated)(
                            'No "GlobalWorkerOptions.workerSrc" specified.'
                          ),
                        PDFWorkerUtil.fallbackWorkerSrc
                      );
                    throw Error(
                      'No "GlobalWorkerOptions.workerSrc" specified.'
                    );
                  }
                  static get _mainThreadWorkerMessageHandler() {
                    try {
                      return (
                        globalThis.pdfjsWorker?.WorkerMessageHandler || null
                      );
                    } catch (o) {
                      return null;
                    }
                  }
                  static get _setupFakeWorkerGlobal() {
                    let loader = async () => {
                      let mainWorkerMessageHandler =
                        this._mainThreadWorkerMessageHandler;
                      if (mainWorkerMessageHandler)
                        return mainWorkerMessageHandler;
                      if (_is_node.isNodeJS) {
                        let worker = eval("require")(this.workerSrc);
                        return worker.WorkerMessageHandler;
                      }
                      return (
                        await (0, _display_utils.loadScript)(this.workerSrc),
                        window.pdfjsWorker.WorkerMessageHandler
                      );
                    };
                    return (0, _util.shadow)(
                      this,
                      "_setupFakeWorkerGlobal",
                      loader()
                    );
                  }
                };
                exports.PDFWorker = PDFWorker;
                let WorkerTransport = class WorkerTransport {
                  #s = new Map();
                  #n = new Map();
                  #o = new Map();
                  constructor(o, l, _, S, E) {
                    (this.messageHandler = o),
                      (this.loadingTask = l),
                      (this.commonObjs = new PDFObjects()),
                      (this.fontLoader = new _font_loader.FontLoader({
                        onUnsupportedFeature:
                          this._onUnsupportedFeature.bind(this),
                        ownerDocument: S.ownerDocument,
                        styleElement: S.styleElement,
                      })),
                      (this._params = S),
                      (this.cMapReaderFactory = E?.cMapReaderFactory),
                      (this.standardFontDataFactory =
                        E?.standardFontDataFactory),
                      (this.destroyed = !1),
                      (this.destroyCapability = null),
                      (this._passwordCapability = null),
                      (this._networkStream = _),
                      (this._fullReader = null),
                      (this._lastProgress = null),
                      (this.downloadInfoCapability = (0,
                      _util.createPromiseCapability)()),
                      this.setupMessageHandler();
                  }
                  #l(o, l = null) {
                    let _ = this.#s.get(o);
                    if (_) return _;
                    let S = this.messageHandler.sendWithPromise(o, l);
                    return this.#s.set(o, S), S;
                  }
                  get annotationStorage() {
                    return (0, _util.shadow)(
                      this,
                      "annotationStorage",
                      new _annotation_storage.AnnotationStorage()
                    );
                  }
                  getRenderingIntent(
                    o,
                    l = _util.AnnotationMode.ENABLE,
                    _ = null,
                    S = !1
                  ) {
                    let E = _util.RenderingIntentFlag.DISPLAY,
                      P = null;
                    switch (o) {
                      case "any":
                        E = _util.RenderingIntentFlag.ANY;
                        break;
                      case "display":
                        break;
                      case "print":
                        E = _util.RenderingIntentFlag.PRINT;
                        break;
                      default:
                        (0, _util.warn)(
                          `getRenderingIntent - invalid intent: ${o}`
                        );
                    }
                    switch (l) {
                      case _util.AnnotationMode.DISABLE:
                        E += _util.RenderingIntentFlag.ANNOTATIONS_DISABLE;
                        break;
                      case _util.AnnotationMode.ENABLE:
                        break;
                      case _util.AnnotationMode.ENABLE_FORMS:
                        E += _util.RenderingIntentFlag.ANNOTATIONS_FORMS;
                        break;
                      case _util.AnnotationMode.ENABLE_STORAGE:
                        E += _util.RenderingIntentFlag.ANNOTATIONS_STORAGE;
                        let T =
                          E & _util.RenderingIntentFlag.PRINT &&
                          _ instanceof
                            _annotation_storage.PrintAnnotationStorage
                            ? _
                            : this.annotationStorage;
                        P = T.serializable;
                        break;
                      default:
                        (0, _util.warn)(
                          `getRenderingIntent - invalid annotationMode: ${l}`
                        );
                    }
                    return (
                      S && (E += _util.RenderingIntentFlag.OPLIST),
                      {
                        renderingIntent: E,
                        cacheKey: `${E}_${_annotation_storage.AnnotationStorage.getHash(
                          P
                        )}`,
                        annotationStorageMap: P,
                      }
                    );
                  }
                  destroy() {
                    if (this.destroyCapability)
                      return this.destroyCapability.promise;
                    (this.destroyed = !0),
                      (this.destroyCapability = (0,
                      _util.createPromiseCapability)()),
                      this._passwordCapability &&
                        this._passwordCapability.reject(
                          Error(
                            "Worker was destroyed during onPassword callback"
                          )
                        );
                    let o = [];
                    for (let l of this.#n.values()) o.push(l._destroy());
                    this.#n.clear(),
                      this.#o.clear(),
                      this.hasOwnProperty("annotationStorage") &&
                        this.annotationStorage.resetModified();
                    let l = this.messageHandler.sendWithPromise(
                      "Terminate",
                      null
                    );
                    return (
                      o.push(l),
                      Promise.all(o).then(() => {
                        this.commonObjs.clear(),
                          this.fontLoader.clear(),
                          this.#s.clear(),
                          this._networkStream &&
                            this._networkStream.cancelAllRequests(
                              new _util.AbortException("Worker was terminated.")
                            ),
                          this.messageHandler &&
                            (this.messageHandler.destroy(),
                            (this.messageHandler = null)),
                          this.destroyCapability.resolve();
                      }, this.destroyCapability.reject),
                      this.destroyCapability.promise
                    );
                  }
                  setupMessageHandler() {
                    let { messageHandler: o, loadingTask: l } = this;
                    o.on("GetReader", (o, l) => {
                      (0, _util.assert)(
                        this._networkStream,
                        "GetReader - no `IPDFStream` instance available."
                      ),
                        (this._fullReader =
                          this._networkStream.getFullReader()),
                        (this._fullReader.onProgress = (o) => {
                          this._lastProgress = {
                            loaded: o.loaded,
                            total: o.total,
                          };
                        }),
                        (l.onPull = () => {
                          this._fullReader
                            .read()
                            .then(function ({ value: o, done: _ }) {
                              if (_) {
                                l.close();
                                return;
                              }
                              (0, _util.assert)(
                                o instanceof ArrayBuffer,
                                "GetReader - expected an ArrayBuffer."
                              ),
                                l.enqueue(new Uint8Array(o), 1, [o]);
                            })
                            .catch((o) => {
                              l.error(o);
                            });
                        }),
                        (l.onCancel = (o) => {
                          this._fullReader.cancel(o),
                            l.ready.catch((o) => {
                              if (!this.destroyed) throw o;
                            });
                        });
                    }),
                      o.on("ReaderHeadersReady", (o) => {
                        let _ = (0, _util.createPromiseCapability)(),
                          S = this._fullReader;
                        return (
                          S.headersReady.then(() => {
                            (S.isStreamingSupported && S.isRangeSupported) ||
                              (this._lastProgress &&
                                l.onProgress?.(this._lastProgress),
                              (S.onProgress = (o) => {
                                l.onProgress?.({
                                  loaded: o.loaded,
                                  total: o.total,
                                });
                              })),
                              _.resolve({
                                isStreamingSupported: S.isStreamingSupported,
                                isRangeSupported: S.isRangeSupported,
                                contentLength: S.contentLength,
                              });
                          }, _.reject),
                          _.promise
                        );
                      }),
                      o.on("GetRangeReader", (o, l) => {
                        (0, _util.assert)(
                          this._networkStream,
                          "GetRangeReader - no `IPDFStream` instance available."
                        );
                        let _ = this._networkStream.getRangeReader(
                          o.begin,
                          o.end
                        );
                        if (!_) {
                          l.close();
                          return;
                        }
                        (l.onPull = () => {
                          _.read()
                            .then(function ({ value: o, done: _ }) {
                              if (_) {
                                l.close();
                                return;
                              }
                              (0, _util.assert)(
                                o instanceof ArrayBuffer,
                                "GetRangeReader - expected an ArrayBuffer."
                              ),
                                l.enqueue(new Uint8Array(o), 1, [o]);
                            })
                            .catch((o) => {
                              l.error(o);
                            });
                        }),
                          (l.onCancel = (o) => {
                            _.cancel(o),
                              l.ready.catch((o) => {
                                if (!this.destroyed) throw o;
                              });
                          });
                      }),
                      o.on("GetDoc", ({ pdfInfo: o }) => {
                        (this._numPages = o.numPages),
                          (this._htmlForXfa = o.htmlForXfa),
                          delete o.htmlForXfa,
                          l._capability.resolve(new PDFDocumentProxy(o, this));
                      }),
                      o.on("DocException", function (o) {
                        let _;
                        switch (o.name) {
                          case "PasswordException":
                            _ = new _util.PasswordException(o.message, o.code);
                            break;
                          case "InvalidPDFException":
                            _ = new _util.InvalidPDFException(o.message);
                            break;
                          case "MissingPDFException":
                            _ = new _util.MissingPDFException(o.message);
                            break;
                          case "UnexpectedResponseException":
                            _ = new _util.UnexpectedResponseException(
                              o.message,
                              o.status
                            );
                            break;
                          case "UnknownErrorException":
                            _ = new _util.UnknownErrorException(
                              o.message,
                              o.details
                            );
                            break;
                          default:
                            (0,
                            _util.unreachable)("DocException - expected a valid Error.");
                        }
                        l._capability.reject(_);
                      }),
                      o.on("PasswordRequest", (o) => {
                        if (
                          ((this._passwordCapability = (0,
                          _util.createPromiseCapability)()),
                          l.onPassword)
                        ) {
                          let updatePassword = (o) => {
                            o instanceof Error
                              ? this._passwordCapability.reject(o)
                              : this._passwordCapability.resolve({
                                  password: o,
                                });
                          };
                          try {
                            l.onPassword(updatePassword, o.code);
                          } catch (o) {
                            this._passwordCapability.reject(o);
                          }
                        } else
                          this._passwordCapability.reject(
                            new _util.PasswordException(o.message, o.code)
                          );
                        return this._passwordCapability.promise;
                      }),
                      o.on("DataLoaded", (o) => {
                        l.onProgress?.({ loaded: o.length, total: o.length }),
                          this.downloadInfoCapability.resolve(o);
                      }),
                      o.on("StartRenderPage", (o) => {
                        if (this.destroyed) return;
                        let l = this.#n.get(o.pageIndex);
                        l._startRenderPage(o.transparency, o.cacheKey);
                      }),
                      o.on("commonobj", ([l, _, S]) => {
                        if (!(this.destroyed || this.commonObjs.has(l)))
                          switch (_) {
                            case "Font":
                              let E = this._params;
                              if ("error" in S) {
                                let o = S.error;
                                (0, _util.warn)(
                                  `Error during font loading: ${o}`
                                ),
                                  this.commonObjs.resolve(l, o);
                                break;
                              }
                              let P = null;
                              E.pdfBug &&
                                globalThis.FontInspector?.enabled &&
                                (P = {
                                  registerFont(o, l) {
                                    globalThis.FontInspector.fontAdded(o, l);
                                  },
                                });
                              let T = new _font_loader.FontFaceObject(S, {
                                isEvalSupported: E.isEvalSupported,
                                disableFontFace: E.disableFontFace,
                                ignoreErrors: E.ignoreErrors,
                                onUnsupportedFeature:
                                  this._onUnsupportedFeature.bind(this),
                                fontRegistry: P,
                              });
                              this.fontLoader
                                .bind(T)
                                .catch((_) =>
                                  o.sendWithPromise("FontFallback", { id: l })
                                )
                                .finally(() => {
                                  !E.fontExtraProperties &&
                                    T.data &&
                                    (T.data = null),
                                    this.commonObjs.resolve(l, T);
                                });
                              break;
                            case "FontPath":
                            case "Image":
                              this.commonObjs.resolve(l, S);
                              break;
                            default:
                              throw Error(
                                `Got unknown common object type ${_}`
                              );
                          }
                      }),
                      o.on("obj", ([o, l, _, S]) => {
                        if (this.destroyed) return;
                        let E = this.#n.get(l);
                        if (!E.objs.has(o))
                          switch (_) {
                            case "Image":
                              E.objs.resolve(o, S);
                              let P = 8e6;
                              if (S) {
                                let o;
                                if (S.bitmap) {
                                  let { width: l, height: _ } = S;
                                  o = l * _ * 4;
                                } else o = S.data?.length || 0;
                                o > P && (E.cleanupAfterRender = !0);
                              }
                              break;
                            case "Pattern":
                              E.objs.resolve(o, S);
                              break;
                            default:
                              throw Error(`Got unknown object type ${_}`);
                          }
                      }),
                      o.on("DocProgress", (o) => {
                        this.destroyed ||
                          l.onProgress?.({ loaded: o.loaded, total: o.total });
                      }),
                      o.on(
                        "UnsupportedFeature",
                        this._onUnsupportedFeature.bind(this)
                      ),
                      o.on("FetchBuiltInCMap", (o) =>
                        this.destroyed
                          ? Promise.reject(Error("Worker was destroyed."))
                          : this.cMapReaderFactory
                          ? this.cMapReaderFactory.fetch(o)
                          : Promise.reject(
                              Error(
                                "CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."
                              )
                            )
                      ),
                      o.on("FetchStandardFontData", (o) =>
                        this.destroyed
                          ? Promise.reject(Error("Worker was destroyed."))
                          : this.standardFontDataFactory
                          ? this.standardFontDataFactory.fetch(o)
                          : Promise.reject(
                              Error(
                                "StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter."
                              )
                            )
                      );
                  }
                  _onUnsupportedFeature({ featureId: o }) {
                    this.destroyed ||
                      this.loadingTask.onUnsupportedFeature?.(o);
                  }
                  getData() {
                    return this.messageHandler.sendWithPromise("GetData", null);
                  }
                  saveDocument() {
                    return (
                      this.annotationStorage.size <= 0 &&
                        (0, _util.warn)(
                          "saveDocument called while `annotationStorage` is empty, please use the getData-method instead."
                        ),
                      this.messageHandler
                        .sendWithPromise("SaveDocument", {
                          isPureXfa: !!this._htmlForXfa,
                          numPages: this._numPages,
                          annotationStorage:
                            this.annotationStorage.serializable,
                          filename: this._fullReader?.filename ?? null,
                        })
                        .finally(() => {
                          this.annotationStorage.resetModified();
                        })
                    );
                  }
                  getPage(o) {
                    if (!Number.isInteger(o) || o <= 0 || o > this._numPages)
                      return Promise.reject(Error("Invalid page request."));
                    let l = o - 1,
                      _ = this.#o.get(l);
                    if (_) return _;
                    let S = this.messageHandler
                      .sendWithPromise("GetPage", { pageIndex: l })
                      .then((o) => {
                        if (this.destroyed) throw Error("Transport destroyed");
                        let _ = new PDFPageProxy(
                          l,
                          o,
                          this,
                          this._params.ownerDocument,
                          this._params.pdfBug
                        );
                        return this.#n.set(l, _), _;
                      });
                    return this.#o.set(l, S), S;
                  }
                  getPageIndex(o) {
                    return "object" != typeof o ||
                      null === o ||
                      !Number.isInteger(o.num) ||
                      o.num < 0 ||
                      !Number.isInteger(o.gen) ||
                      o.gen < 0
                      ? Promise.reject(Error("Invalid pageIndex request."))
                      : this.messageHandler.sendWithPromise("GetPageIndex", {
                          num: o.num,
                          gen: o.gen,
                        });
                  }
                  getAnnotations(o, l) {
                    return this.messageHandler.sendWithPromise(
                      "GetAnnotations",
                      { pageIndex: o, intent: l }
                    );
                  }
                  getFieldObjects() {
                    return this.#l("GetFieldObjects");
                  }
                  hasJSActions() {
                    return this.#l("HasJSActions");
                  }
                  getCalculationOrderIds() {
                    return this.messageHandler.sendWithPromise(
                      "GetCalculationOrderIds",
                      null
                    );
                  }
                  getDestinations() {
                    return this.messageHandler.sendWithPromise(
                      "GetDestinations",
                      null
                    );
                  }
                  getDestination(o) {
                    return "string" != typeof o
                      ? Promise.reject(Error("Invalid destination request."))
                      : this.messageHandler.sendWithPromise("GetDestination", {
                          id: o,
                        });
                  }
                  getPageLabels() {
                    return this.messageHandler.sendWithPromise(
                      "GetPageLabels",
                      null
                    );
                  }
                  getPageLayout() {
                    return this.messageHandler.sendWithPromise(
                      "GetPageLayout",
                      null
                    );
                  }
                  getPageMode() {
                    return this.messageHandler.sendWithPromise(
                      "GetPageMode",
                      null
                    );
                  }
                  getViewerPreferences() {
                    return this.messageHandler.sendWithPromise(
                      "GetViewerPreferences",
                      null
                    );
                  }
                  getOpenAction() {
                    return this.messageHandler.sendWithPromise(
                      "GetOpenAction",
                      null
                    );
                  }
                  getAttachments() {
                    return this.messageHandler.sendWithPromise(
                      "GetAttachments",
                      null
                    );
                  }
                  getJavaScript() {
                    return this.messageHandler.sendWithPromise(
                      "GetJavaScript",
                      null
                    );
                  }
                  getDocJSActions() {
                    return this.messageHandler.sendWithPromise(
                      "GetDocJSActions",
                      null
                    );
                  }
                  getPageJSActions(o) {
                    return this.messageHandler.sendWithPromise(
                      "GetPageJSActions",
                      { pageIndex: o }
                    );
                  }
                  getStructTree(o) {
                    return this.messageHandler.sendWithPromise(
                      "GetStructTree",
                      { pageIndex: o }
                    );
                  }
                  getOutline() {
                    return this.messageHandler.sendWithPromise(
                      "GetOutline",
                      null
                    );
                  }
                  getOptionalContentConfig() {
                    return this.messageHandler
                      .sendWithPromise("GetOptionalContentConfig", null)
                      .then(
                        (o) =>
                          new _optional_content_config.OptionalContentConfig(o)
                      );
                  }
                  getPermissions() {
                    return this.messageHandler.sendWithPromise(
                      "GetPermissions",
                      null
                    );
                  }
                  getMetadata() {
                    let o = "GetMetadata",
                      l = this.#s.get(o);
                    if (l) return l;
                    let _ = this.messageHandler
                      .sendWithPromise(o, null)
                      .then((o) => ({
                        info: o[0],
                        metadata: o[1] ? new _metadata.Metadata(o[1]) : null,
                        contentDispositionFilename:
                          this._fullReader?.filename ?? null,
                        contentLength: this._fullReader?.contentLength ?? null,
                      }));
                    return this.#s.set(o, _), _;
                  }
                  getMarkInfo() {
                    return this.messageHandler.sendWithPromise(
                      "GetMarkInfo",
                      null
                    );
                  }
                  async startCleanup(o = !1) {
                    if (!this.destroyed) {
                      for (let o of (await this.messageHandler.sendWithPromise(
                        "Cleanup",
                        null
                      ),
                      this.#n.values())) {
                        let l = o.cleanup();
                        if (!l)
                          throw Error(
                            `startCleanup: Page ${o.pageNumber} is currently rendering.`
                          );
                      }
                      this.commonObjs.clear(),
                        o || this.fontLoader.clear(),
                        this.#s.clear();
                    }
                  }
                  get loadingParams() {
                    let { disableAutoFetch: o, enableXfa: l } = this._params;
                    return (0, _util.shadow)(this, "loadingParams", {
                      disableAutoFetch: o,
                      enableXfa: l,
                    });
                  }
                };
                let PDFObjects = class PDFObjects {
                  #h = Object.create(null);
                  #d(o) {
                    let l = this.#h[o];
                    return (
                      l ||
                      (this.#h[o] = {
                        capability: (0, _util.createPromiseCapability)(),
                        data: null,
                      })
                    );
                  }
                  get(o, l = null) {
                    if (l) {
                      let _ = this.#d(o);
                      return _.capability.promise.then(() => l(_.data)), null;
                    }
                    let _ = this.#h[o];
                    if (!_?.capability.settled)
                      throw Error(
                        `Requesting object that isn't resolved yet ${o}.`
                      );
                    return _.data;
                  }
                  has(o) {
                    let l = this.#h[o];
                    return l?.capability.settled || !1;
                  }
                  resolve(o, l = null) {
                    let _ = this.#d(o);
                    (_.data = l), _.capability.resolve();
                  }
                  clear() {
                    for (let o in this.#h) {
                      let { data: l } = this.#h[o];
                      l?.bitmap?.close();
                    }
                    this.#h = Object.create(null);
                  }
                };
                let RenderTask = class RenderTask {
                  #c = null;
                  constructor(o) {
                    (this.#c = o), (this.onContinue = null);
                  }
                  get promise() {
                    return this.#c.capability.promise;
                  }
                  cancel(o = 0) {
                    this.#c.cancel(null, o);
                  }
                  get separateAnnots() {
                    let { separateAnnots: o } = this.#c.operatorList;
                    if (!o) return !1;
                    let { annotationCanvasMap: l } = this.#c;
                    return o.form || (o.canvas && l?.size > 0);
                  }
                };
                exports.RenderTask = RenderTask;
                let InternalRenderTask = class InternalRenderTask {
                  static #u = new WeakSet();
                  constructor({
                    callback: o,
                    params: l,
                    objs: _,
                    commonObjs: S,
                    annotationCanvasMap: E,
                    operatorList: P,
                    pageIndex: T,
                    canvasFactory: M,
                    useRequestAnimationFrame: F = !1,
                    pdfBug: D = !1,
                    pageColors: I = null,
                  }) {
                    (this.callback = o),
                      (this.params = l),
                      (this.objs = _),
                      (this.commonObjs = S),
                      (this.annotationCanvasMap = E),
                      (this.operatorListIdx = null),
                      (this.operatorList = P),
                      (this._pageIndex = T),
                      (this.canvasFactory = M),
                      (this._pdfBug = D),
                      (this.pageColors = I),
                      (this.running = !1),
                      (this.graphicsReadyCallback = null),
                      (this.graphicsReady = !1),
                      (this._useRequestAnimationFrame =
                        !0 === F && "undefined" != typeof window),
                      (this.cancelled = !1),
                      (this.capability = (0, _util.createPromiseCapability)()),
                      (this.task = new RenderTask(this)),
                      (this._cancelBound = this.cancel.bind(this)),
                      (this._continueBound = this._continue.bind(this)),
                      (this._scheduleNextBound = this._scheduleNext.bind(this)),
                      (this._nextBound = this._next.bind(this)),
                      (this._canvas = l.canvasContext.canvas);
                  }
                  get completed() {
                    return this.capability.promise.catch(function () {});
                  }
                  initializeGraphics({
                    transparency: o = !1,
                    optionalContentConfig: l,
                  }) {
                    if (this.cancelled) return;
                    if (this._canvas) {
                      if (InternalRenderTask.#u.has(this._canvas))
                        throw Error(
                          "Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed."
                        );
                      InternalRenderTask.#u.add(this._canvas);
                    }
                    this._pdfBug &&
                      globalThis.StepperManager?.enabled &&
                      ((this.stepper = globalThis.StepperManager.create(
                        this._pageIndex
                      )),
                      this.stepper.init(this.operatorList),
                      (this.stepper.nextBreakPoint =
                        this.stepper.getNextBreakPoint()));
                    let {
                      canvasContext: _,
                      viewport: S,
                      transform: E,
                      background: P,
                    } = this.params;
                    (this.gfx = new _canvas.CanvasGraphics(
                      _,
                      this.commonObjs,
                      this.objs,
                      this.canvasFactory,
                      { optionalContentConfig: l },
                      this.annotationCanvasMap,
                      this.pageColors
                    )),
                      this.gfx.beginDrawing({
                        transform: E,
                        viewport: S,
                        transparency: o,
                        background: P,
                      }),
                      (this.operatorListIdx = 0),
                      (this.graphicsReady = !0),
                      this.graphicsReadyCallback?.();
                  }
                  cancel(o = null, l = 0) {
                    (this.running = !1),
                      (this.cancelled = !0),
                      this.gfx?.endDrawing(),
                      this._canvas &&
                        InternalRenderTask.#u.delete(this._canvas),
                      this.callback(
                        o ||
                          new _display_utils.RenderingCancelledException(
                            `Rendering cancelled, page ${this._pageIndex + 1}`,
                            "canvas",
                            l
                          )
                      );
                  }
                  operatorListChanged() {
                    if (!this.graphicsReady) {
                      this.graphicsReadyCallback ||
                        (this.graphicsReadyCallback = this._continueBound);
                      return;
                    }
                    this.stepper?.updateOperatorList(this.operatorList),
                      this.running || this._continue();
                  }
                  _continue() {
                    (this.running = !0),
                      this.cancelled ||
                        (this.task.onContinue
                          ? this.task.onContinue(this._scheduleNextBound)
                          : this._scheduleNext());
                  }
                  _scheduleNext() {
                    this._useRequestAnimationFrame
                      ? window.requestAnimationFrame(() => {
                          this._nextBound().catch(this._cancelBound);
                        })
                      : Promise.resolve()
                          .then(this._nextBound)
                          .catch(this._cancelBound);
                  }
                  async _next() {
                    !this.cancelled &&
                      ((this.operatorListIdx = this.gfx.executeOperatorList(
                        this.operatorList,
                        this.operatorListIdx,
                        this._continueBound,
                        this.stepper
                      )),
                      this.operatorListIdx ===
                        this.operatorList.argsArray.length &&
                        ((this.running = !1),
                        this.operatorList.lastChunk &&
                          (this.gfx.endDrawing(),
                          this._canvas &&
                            InternalRenderTask.#u.delete(this._canvas),
                          this.callback())));
                  }
                };
                let version = "3.4.120";
                exports.version = version;
                let build = "af6414988";
                exports.build = build;
              },
              (o, l, _) => {
                Object.defineProperty(l, "__esModule", { value: !0 }),
                  (l.PrintAnnotationStorage = l.AnnotationStorage = void 0);
                var S = _(1),
                  E = _(4),
                  P = _(8);
                let AnnotationStorage = class AnnotationStorage {
                  #p = !1;
                  #g = new Map();
                  constructor() {
                    (this.onSetModified = null),
                      (this.onResetModified = null),
                      (this.onAnnotationEditor = null);
                  }
                  getValue(o, l) {
                    let _ = this.#g.get(o);
                    return void 0 === _ ? l : Object.assign(l, _);
                  }
                  getRawValue(o) {
                    return this.#g.get(o);
                  }
                  remove(o) {
                    if (
                      (this.#g.delete(o),
                      0 === this.#g.size && this.resetModified(),
                      "function" == typeof this.onAnnotationEditor)
                    ) {
                      for (let o of this.#g.values())
                        if (o instanceof E.AnnotationEditor) return;
                      this.onAnnotationEditor(null);
                    }
                  }
                  setValue(o, l) {
                    let _ = this.#g.get(o),
                      S = !1;
                    if (void 0 !== _)
                      for (let [o, E] of Object.entries(l))
                        _[o] !== E && ((S = !0), (_[o] = E));
                    else (S = !0), this.#g.set(o, l);
                    S && this.#m(),
                      l instanceof E.AnnotationEditor &&
                        "function" == typeof this.onAnnotationEditor &&
                        this.onAnnotationEditor(l.constructor._type);
                  }
                  has(o) {
                    return this.#g.has(o);
                  }
                  getAll() {
                    return this.#g.size > 0
                      ? (0, S.objectFromMap)(this.#g)
                      : null;
                  }
                  setAll(o) {
                    for (let [l, _] of Object.entries(o)) this.setValue(l, _);
                  }
                  get size() {
                    return this.#g.size;
                  }
                  #m() {
                    this.#p ||
                      ((this.#p = !0),
                      "function" == typeof this.onSetModified &&
                        this.onSetModified());
                  }
                  resetModified() {
                    this.#p &&
                      ((this.#p = !1),
                      "function" == typeof this.onResetModified &&
                        this.onResetModified());
                  }
                  get print() {
                    return new PrintAnnotationStorage(this);
                  }
                  get serializable() {
                    if (0 === this.#g.size) return null;
                    let o = new Map();
                    for (let [l, _] of this.#g) {
                      let S =
                        _ instanceof E.AnnotationEditor ? _.serialize() : _;
                      S && o.set(l, S);
                    }
                    return o;
                  }
                  static getHash(o) {
                    if (!o) return "";
                    let l = new P.MurmurHash3_64();
                    for (let [_, S] of o) l.update(`${_}:${JSON.stringify(S)}`);
                    return l.hexdigest();
                  }
                };
                l.AnnotationStorage = AnnotationStorage;
                let PrintAnnotationStorage = class PrintAnnotationStorage extends AnnotationStorage {
                  #f = null;
                  constructor(o) {
                    super(), (this.#f = structuredClone(o.serializable));
                  }
                  get print() {
                    (0, S.unreachable)(
                      "Should not call PrintAnnotationStorage.print"
                    );
                  }
                  get serializable() {
                    return this.#f;
                  }
                };
                l.PrintAnnotationStorage = PrintAnnotationStorage;
              },
              (o, l, _) => {
                Object.defineProperty(l, "__esModule", { value: !0 }),
                  (l.AnnotationEditor = void 0);
                var S = _(5),
                  E = _(1);
                let AnnotationEditor = class AnnotationEditor {
                  #A = this.focusin.bind(this);
                  #b = this.focusout.bind(this);
                  #y = !1;
                  #v = !1;
                  #_ = !1;
                  _uiManager = null;
                  #S = AnnotationEditor._zIndex++;
                  static _colorManager = new S.ColorManager();
                  static _zIndex = 1;
                  constructor(o) {
                    this.constructor === AnnotationEditor &&
                      (0, E.unreachable)("Cannot initialize AnnotationEditor."),
                      (this.parent = o.parent),
                      (this.id = o.id),
                      (this.width = this.height = null),
                      (this.pageIndex = o.parent.pageIndex),
                      (this.name = o.name),
                      (this.div = null),
                      (this._uiManager = o.uiManager);
                    let {
                      rotation: l,
                      rawDims: {
                        pageWidth: _,
                        pageHeight: S,
                        pageX: P,
                        pageY: T,
                      },
                    } = this.parent.viewport;
                    (this.rotation = l),
                      (this.pageDimensions = [_, S]),
                      (this.pageTranslation = [P, T]);
                    let [M, F] = this.parentDimensions;
                    (this.x = o.x / M),
                      (this.y = o.y / F),
                      (this.isAttachedToDOM = !1);
                  }
                  static get _defaultLineColor() {
                    return (0, E.shadow)(
                      this,
                      "_defaultLineColor",
                      this._colorManager.getHexCode("CanvasText")
                    );
                  }
                  addCommands(o) {
                    this._uiManager.addCommands(o);
                  }
                  get currentLayer() {
                    return this._uiManager.currentLayer;
                  }
                  setInBackground() {
                    this.div.style.zIndex = 0;
                  }
                  setInForeground() {
                    this.div.style.zIndex = this.#S;
                  }
                  setParent(o) {
                    null !== o &&
                      ((this.pageIndex = o.pageIndex),
                      (this.pageDimensions = o.pageDimensions)),
                      (this.parent = o);
                  }
                  focusin(o) {
                    this.#y ? (this.#y = !1) : this.parent.setSelected(this);
                  }
                  focusout(o) {
                    if (!this.isAttachedToDOM) return;
                    let l = o.relatedTarget;
                    !l?.closest(`#${this.id}`) &&
                      (o.preventDefault(),
                      this.parent?.isMultipleSelection ||
                        this.commitOrRemove());
                  }
                  commitOrRemove() {
                    this.isEmpty() ? this.remove() : this.commit();
                  }
                  commit() {
                    this.addToAnnotationStorage();
                  }
                  addToAnnotationStorage() {
                    this._uiManager.addToAnnotationStorage(this);
                  }
                  dragstart(o) {
                    let l = this.parent.div.getBoundingClientRect();
                    (this.startX = o.clientX - l.x),
                      (this.startY = o.clientY - l.y),
                      o.dataTransfer.setData("text/plain", this.id),
                      (o.dataTransfer.effectAllowed = "move");
                  }
                  setAt(o, l, _, S) {
                    let [E, P] = this.parentDimensions;
                    ([_, S] = this.screenToPageTranslation(_, S)),
                      (this.x = (o + _) / E),
                      (this.y = (l + S) / P),
                      (this.div.style.left = `${100 * this.x}%`),
                      (this.div.style.top = `${100 * this.y}%`);
                  }
                  translate(o, l) {
                    let [_, S] = this.parentDimensions;
                    ([o, l] = this.screenToPageTranslation(o, l)),
                      (this.x += o / _),
                      (this.y += l / S),
                      (this.div.style.left = `${100 * this.x}%`),
                      (this.div.style.top = `${100 * this.y}%`);
                  }
                  screenToPageTranslation(o, l) {
                    switch (this.parentRotation) {
                      case 90:
                        return [l, -o];
                      case 180:
                        return [-o, -l];
                      case 270:
                        return [-l, o];
                      default:
                        return [o, l];
                    }
                  }
                  get parentScale() {
                    return this._uiManager.viewParameters.realScale;
                  }
                  get parentRotation() {
                    return this._uiManager.viewParameters.rotation;
                  }
                  get parentDimensions() {
                    let { realScale: o } = this._uiManager.viewParameters,
                      [l, _] = this.pageDimensions;
                    return [l * o, _ * o];
                  }
                  setDims(o, l) {
                    let [_, S] = this.parentDimensions;
                    (this.div.style.width = `${(100 * o) / _}%`),
                      (this.div.style.height = `${(100 * l) / S}%`);
                  }
                  fixDims() {
                    let { style: o } = this.div,
                      { height: l, width: _ } = o,
                      S = _.endsWith("%"),
                      E = l.endsWith("%");
                    if (S && E) return;
                    let [P, T] = this.parentDimensions;
                    S || (o.width = `${(100 * parseFloat(_)) / P}%`),
                      E || (o.height = `${(100 * parseFloat(l)) / T}%`);
                  }
                  getInitialTranslation() {
                    return [0, 0];
                  }
                  render() {
                    (this.div = document.createElement("div")),
                      this.div.setAttribute(
                        "data-editor-rotation",
                        (360 - this.rotation) % 360
                      ),
                      (this.div.className = this.name),
                      this.div.setAttribute("id", this.id),
                      this.div.setAttribute("tabIndex", 0),
                      this.setInForeground(),
                      this.div.addEventListener("focusin", this.#A),
                      this.div.addEventListener("focusout", this.#b);
                    let [o, l] = this.getInitialTranslation();
                    return (
                      this.translate(o, l),
                      (0, S.bindEvents)(this, this.div, [
                        "dragstart",
                        "pointerdown",
                      ]),
                      this.div
                    );
                  }
                  pointerdown(o) {
                    let { isMac: l } = E.FeatureTest.platform;
                    if (0 !== o.button || (o.ctrlKey && l)) {
                      o.preventDefault();
                      return;
                    }
                    (o.ctrlKey && !l) || o.shiftKey || (o.metaKey && l)
                      ? this.parent.toggleSelected(this)
                      : this.parent.setSelected(this),
                      (this.#y = !0);
                  }
                  getRect(o, l) {
                    let _ = this.parentScale,
                      [S, E] = this.pageDimensions,
                      [P, T] = this.pageTranslation,
                      M = o / _,
                      F = l / _,
                      D = this.x * S,
                      I = this.y * E,
                      O = this.width * S,
                      L = this.height * E;
                    switch (this.rotation) {
                      case 0:
                        return [
                          D + M + P,
                          E - I - F - L + T,
                          D + M + O + P,
                          E - I - F + T,
                        ];
                      case 90:
                        return [
                          D + F + P,
                          E - I + M + T,
                          D + F + L + P,
                          E - I + M + O + T,
                        ];
                      case 180:
                        return [
                          D - M - O + P,
                          E - I + F + T,
                          D - M + P,
                          E - I + F + L + T,
                        ];
                      case 270:
                        return [
                          D - F - L + P,
                          E - I - M - O + T,
                          D - F + P,
                          E - I - M + T,
                        ];
                      default:
                        throw Error("Invalid rotation");
                    }
                  }
                  getRectInCurrentCoords(o, l) {
                    let [_, S, E, P] = o,
                      T = E - _,
                      M = P - S;
                    switch (this.rotation) {
                      case 0:
                        return [_, l - P, T, M];
                      case 90:
                        return [_, l - S, M, T];
                      case 180:
                        return [E, l - S, T, M];
                      case 270:
                        return [E, l - P, M, T];
                      default:
                        throw Error("Invalid rotation");
                    }
                  }
                  onceAdded() {}
                  isEmpty() {
                    return !1;
                  }
                  enableEditMode() {
                    this.#_ = !0;
                  }
                  disableEditMode() {
                    this.#_ = !1;
                  }
                  isInEditMode() {
                    return this.#_;
                  }
                  shouldGetKeyboardEvents() {
                    return !1;
                  }
                  needsToBeRebuilt() {
                    return this.div && !this.isAttachedToDOM;
                  }
                  rebuild() {
                    this.div?.addEventListener("focusin", this.#A);
                  }
                  serialize() {
                    (0, E.unreachable)("An editor must be serializable");
                  }
                  static deserialize(o, l, _) {
                    let S = new this.prototype.constructor({
                      parent: l,
                      id: l.getNextId(),
                      uiManager: _,
                    });
                    S.rotation = o.rotation;
                    let [E, P] = S.pageDimensions,
                      [T, M, F, D] = S.getRectInCurrentCoords(o.rect, P);
                    return (
                      (S.x = T / E),
                      (S.y = M / P),
                      (S.width = F / E),
                      (S.height = D / P),
                      S
                    );
                  }
                  remove() {
                    this.div.removeEventListener("focusin", this.#A),
                      this.div.removeEventListener("focusout", this.#b),
                      this.isEmpty() || this.commit(),
                      this.parent.remove(this);
                  }
                  select() {
                    this.div?.classList.add("selectedEditor");
                  }
                  unselect() {
                    this.div?.classList.remove("selectedEditor");
                  }
                  updateParams(o, l) {}
                  disableEditing() {}
                  enableEditing() {}
                  get propertiesToUpdate() {
                    return {};
                  }
                  get contentDiv() {
                    return this.div;
                  }
                  get isEditing() {
                    return this.#v;
                  }
                  set isEditing(o) {
                    (this.#v = o),
                      o
                        ? (this.parent.setSelected(this),
                          this.parent.setActiveEditor(this))
                        : this.parent.setActiveEditor(null);
                  }
                };
                l.AnnotationEditor = AnnotationEditor;
              },
              (o, l, _) => {
                Object.defineProperty(l, "__esModule", { value: !0 }),
                  (l.KeyboardManager =
                    l.CommandManager =
                    l.ColorManager =
                    l.AnnotationEditorUIManager =
                      void 0),
                  (l.bindEvents = bindEvents),
                  (l.opacityToHex = opacityToHex);
                var S = _(1),
                  E = _(6);
                function bindEvents(o, l, _) {
                  for (let S of _) l.addEventListener(S, o[S].bind(o));
                }
                function opacityToHex(o) {
                  return Math.round(Math.min(255, Math.max(1, 255 * o)))
                    .toString(16)
                    .padStart(2, "0");
                }
                let IdManager = class IdManager {
                  #E = 0;
                  getId() {
                    return `${S.AnnotationEditorPrefix}${this.#E++}`;
                  }
                };
                let CommandManager = class CommandManager {
                  #C = [];
                  #x = !1;
                  #P;
                  #T = -1;
                  constructor(o = 128) {
                    this.#P = o;
                  }
                  add({
                    cmd: o,
                    undo: l,
                    mustExec: _,
                    type: S = NaN,
                    overwriteIfSameType: E = !1,
                    keepUndo: P = !1,
                  }) {
                    if ((_ && o(), this.#x)) return;
                    let T = { cmd: o, undo: l, type: S };
                    if (-1 === this.#T) {
                      this.#C.length > 0 && (this.#C.length = 0),
                        (this.#T = 0),
                        this.#C.push(T);
                      return;
                    }
                    if (E && this.#C[this.#T].type === S) {
                      P && (T.undo = this.#C[this.#T].undo),
                        (this.#C[this.#T] = T);
                      return;
                    }
                    let M = this.#T + 1;
                    M === this.#P
                      ? this.#C.splice(0, 1)
                      : ((this.#T = M),
                        M < this.#C.length && this.#C.splice(M)),
                      this.#C.push(T);
                  }
                  undo() {
                    -1 !== this.#T &&
                      ((this.#x = !0),
                      this.#C[this.#T].undo(),
                      (this.#x = !1),
                      (this.#T -= 1));
                  }
                  redo() {
                    this.#T < this.#C.length - 1 &&
                      ((this.#T += 1),
                      (this.#x = !0),
                      this.#C[this.#T].cmd(),
                      (this.#x = !1));
                  }
                  hasSomethingToUndo() {
                    return -1 !== this.#T;
                  }
                  hasSomethingToRedo() {
                    return this.#T < this.#C.length - 1;
                  }
                  destroy() {
                    this.#C = null;
                  }
                };
                l.CommandManager = CommandManager;
                let KeyboardManager = class KeyboardManager {
                  constructor(o) {
                    (this.buffer = []),
                      (this.callbacks = new Map()),
                      (this.allKeys = new Set());
                    let { isMac: l } = S.FeatureTest.platform;
                    for (let [_, S] of o)
                      for (let o of _) {
                        let _ = o.startsWith("mac+");
                        l && _
                          ? (this.callbacks.set(o.slice(4), S),
                            this.allKeys.add(o.split("+").at(-1)))
                          : l ||
                            _ ||
                            (this.callbacks.set(o, S),
                            this.allKeys.add(o.split("+").at(-1)));
                      }
                  }
                  #k(o) {
                    o.altKey && this.buffer.push("alt"),
                      o.ctrlKey && this.buffer.push("ctrl"),
                      o.metaKey && this.buffer.push("meta"),
                      o.shiftKey && this.buffer.push("shift"),
                      this.buffer.push(o.key);
                    let l = this.buffer.join("+");
                    return (this.buffer.length = 0), l;
                  }
                  exec(o, l) {
                    if (!this.allKeys.has(l.key)) return;
                    let _ = this.callbacks.get(this.#k(l));
                    _ && (_.bind(o)(), l.stopPropagation(), l.preventDefault());
                  }
                };
                l.KeyboardManager = KeyboardManager;
                let ColorManager = class ColorManager {
                  static _colorsMapping = new Map([
                    ["CanvasText", [0, 0, 0]],
                    ["Canvas", [255, 255, 255]],
                  ]);
                  get _colors() {
                    let o = new Map([
                      ["CanvasText", null],
                      ["Canvas", null],
                    ]);
                    return (
                      (0, E.getColorValues)(o),
                      (0, S.shadow)(this, "_colors", o)
                    );
                  }
                  convert(o) {
                    let l = (0, E.getRGB)(o);
                    if (!window.matchMedia("(forced-colors: active)").matches)
                      return l;
                    for (let [o, _] of this._colors)
                      if (_.every((o, _) => o === l[_]))
                        return ColorManager._colorsMapping.get(o);
                    return l;
                  }
                  getHexCode(o) {
                    let l = this._colors.get(o);
                    return l ? S.Util.makeHexColor(...l) : o;
                  }
                };
                l.ColorManager = ColorManager;
                let AnnotationEditorUIManager = class AnnotationEditorUIManager {
                  #R = null;
                  #M = new Map();
                  #F = new Map();
                  #w = null;
                  #D = new CommandManager();
                  #I = 0;
                  #O = null;
                  #L = new Set();
                  #N = null;
                  #U = new IdManager();
                  #j = !1;
                  #B = S.AnnotationEditorType.NONE;
                  #q = new Set();
                  #W = this.copy.bind(this);
                  #G = this.cut.bind(this);
                  #H = this.paste.bind(this);
                  #V = this.keydown.bind(this);
                  #z = this.onEditingAction.bind(this);
                  #$ = this.onPageChanging.bind(this);
                  #X = this.onScaleChanging.bind(this);
                  #K = this.onRotationChanging.bind(this);
                  #Y = {
                    isEditing: !1,
                    isEmpty: !0,
                    hasSomethingToUndo: !1,
                    hasSomethingToRedo: !1,
                    hasSelectedEditor: !1,
                  };
                  #J = null;
                  static _keyboardManager = new KeyboardManager([
                    [
                      ["ctrl+a", "mac+meta+a"],
                      AnnotationEditorUIManager.prototype.selectAll,
                    ],
                    [
                      ["ctrl+z", "mac+meta+z"],
                      AnnotationEditorUIManager.prototype.undo,
                    ],
                    [
                      ["ctrl+y", "ctrl+shift+Z", "mac+meta+shift+Z"],
                      AnnotationEditorUIManager.prototype.redo,
                    ],
                    [
                      [
                        "Backspace",
                        "alt+Backspace",
                        "ctrl+Backspace",
                        "shift+Backspace",
                        "mac+Backspace",
                        "mac+alt+Backspace",
                        "mac+ctrl+Backspace",
                        "Delete",
                        "ctrl+Delete",
                        "shift+Delete",
                      ],
                      AnnotationEditorUIManager.prototype.delete,
                    ],
                    [
                      ["Escape", "mac+Escape"],
                      AnnotationEditorUIManager.prototype.unselectAll,
                    ],
                  ]);
                  constructor(o, l, _) {
                    (this.#J = o),
                      (this.#N = l),
                      this.#N._on("editingaction", this.#z),
                      this.#N._on("pagechanging", this.#$),
                      this.#N._on("scalechanging", this.#X),
                      this.#N._on("rotationchanging", this.#K),
                      (this.#w = _),
                      (this.viewParameters = {
                        realScale: E.PixelsPerInch.PDF_TO_CSS_UNITS,
                        rotation: 0,
                      });
                  }
                  destroy() {
                    for (let o of (this.#Q(),
                    this.#N._off("editingaction", this.#z),
                    this.#N._off("pagechanging", this.#$),
                    this.#N._off("scalechanging", this.#X),
                    this.#N._off("rotationchanging", this.#K),
                    this.#F.values()))
                      o.destroy();
                    this.#F.clear(),
                      this.#M.clear(),
                      this.#L.clear(),
                      (this.#R = null),
                      this.#q.clear(),
                      this.#D.destroy();
                  }
                  onPageChanging({ pageNumber: o }) {
                    this.#I = o - 1;
                  }
                  focusMainContainer() {
                    this.#J.focus();
                  }
                  addShouldRescale(o) {
                    this.#L.add(o);
                  }
                  removeShouldRescale(o) {
                    this.#L.delete(o);
                  }
                  onScaleChanging({ scale: o }) {
                    for (let l of (this.commitOrRemove(),
                    (this.viewParameters.realScale =
                      o * E.PixelsPerInch.PDF_TO_CSS_UNITS),
                    this.#L))
                      l.onScaleChanging();
                  }
                  onRotationChanging({ pagesRotation: o }) {
                    this.commitOrRemove(), (this.viewParameters.rotation = o);
                  }
                  addToAnnotationStorage(o) {
                    o.isEmpty() ||
                      !this.#w ||
                      this.#w.has(o.id) ||
                      this.#w.setValue(o.id, o);
                  }
                  #Z() {
                    this.#J.addEventListener("keydown", this.#V);
                  }
                  #Q() {
                    this.#J.removeEventListener("keydown", this.#V);
                  }
                  #tt() {
                    document.addEventListener("copy", this.#W),
                      document.addEventListener("cut", this.#G),
                      document.addEventListener("paste", this.#H);
                  }
                  #te() {
                    document.removeEventListener("copy", this.#W),
                      document.removeEventListener("cut", this.#G),
                      document.removeEventListener("paste", this.#H);
                  }
                  copy(o) {
                    if (
                      (o.preventDefault(),
                      this.#R && this.#R.commitOrRemove(),
                      !this.hasSelection)
                    )
                      return;
                    let l = [];
                    for (let o of this.#q) o.isEmpty() || l.push(o.serialize());
                    0 !== l.length &&
                      o.clipboardData.setData(
                        "application/pdfjs",
                        JSON.stringify(l)
                      );
                  }
                  cut(o) {
                    this.copy(o), this.delete();
                  }
                  paste(o) {
                    o.preventDefault();
                    let l = o.clipboardData.getData("application/pdfjs");
                    if (!l) return;
                    try {
                      l = JSON.parse(l);
                    } catch (o) {
                      (0, S.warn)(`paste: "${o.message}".`);
                      return;
                    }
                    if (!Array.isArray(l)) return;
                    this.unselectAll();
                    let _ = this.#F.get(this.#I);
                    try {
                      let o = [];
                      for (let S of l) {
                        let l = _.deserialize(S);
                        if (!l) return;
                        o.push(l);
                      }
                      let cmd = () => {
                          for (let l of o) this.#ti(l);
                          this.#tr(o);
                        },
                        undo = () => {
                          for (let l of o) l.remove();
                        };
                      this.addCommands({ cmd, undo, mustExec: !0 });
                    } catch (o) {
                      (0, S.warn)(`paste: "${o.message}".`);
                    }
                  }
                  keydown(o) {
                    this.getActive()?.shouldGetKeyboardEvents() ||
                      AnnotationEditorUIManager._keyboardManager.exec(this, o);
                  }
                  onEditingAction(o) {
                    ["undo", "redo", "delete", "selectAll"].includes(o.name) &&
                      this[o.name]();
                  }
                  #ta(o) {
                    let l = Object.entries(o).some(
                      ([o, l]) => this.#Y[o] !== l
                    );
                    l &&
                      this.#N.dispatch("annotationeditorstateschanged", {
                        source: this,
                        details: Object.assign(this.#Y, o),
                      });
                  }
                  #ts(o) {
                    this.#N.dispatch("annotationeditorparamschanged", {
                      source: this,
                      details: o,
                    });
                  }
                  setEditingState(o) {
                    o
                      ? (this.#Z(),
                        this.#tt(),
                        this.#ta({
                          isEditing: this.#B !== S.AnnotationEditorType.NONE,
                          isEmpty: this.#tn(),
                          hasSomethingToUndo: this.#D.hasSomethingToUndo(),
                          hasSomethingToRedo: this.#D.hasSomethingToRedo(),
                          hasSelectedEditor: !1,
                        }))
                      : (this.#Q(), this.#te(), this.#ta({ isEditing: !1 }));
                  }
                  registerEditorTypes(o) {
                    if (!this.#O)
                      for (let l of ((this.#O = o), this.#O))
                        this.#ts(l.defaultPropertiesToUpdate);
                  }
                  getId() {
                    return this.#U.getId();
                  }
                  get currentLayer() {
                    return this.#F.get(this.#I);
                  }
                  get currentPageIndex() {
                    return this.#I;
                  }
                  addLayer(o) {
                    this.#F.set(o.pageIndex, o),
                      this.#j ? o.enable() : o.disable();
                  }
                  removeLayer(o) {
                    this.#F.delete(o.pageIndex);
                  }
                  updateMode(o) {
                    if (((this.#B = o), o === S.AnnotationEditorType.NONE))
                      this.setEditingState(!1), this.#to();
                    else
                      for (let l of (this.setEditingState(!0),
                      this.#tl(),
                      this.#F.values()))
                        l.updateMode(o);
                  }
                  updateToolbar(o) {
                    o !== this.#B &&
                      this.#N.dispatch("switchannotationeditormode", {
                        source: this,
                        mode: o,
                      });
                  }
                  updateParams(o, l) {
                    if (this.#O) {
                      for (let _ of this.#q) _.updateParams(o, l);
                      for (let _ of this.#O) _.updateDefaultParams(o, l);
                    }
                  }
                  #tl() {
                    if (!this.#j)
                      for (let o of ((this.#j = !0), this.#F.values()))
                        o.enable();
                  }
                  #to() {
                    if ((this.unselectAll(), this.#j))
                      for (let o of ((this.#j = !1), this.#F.values()))
                        o.disable();
                  }
                  getEditors(o) {
                    let l = [];
                    for (let _ of this.#M.values())
                      _.pageIndex === o && l.push(_);
                    return l;
                  }
                  getEditor(o) {
                    return this.#M.get(o);
                  }
                  addEditor(o) {
                    this.#M.set(o.id, o);
                  }
                  removeEditor(o) {
                    this.#M.delete(o.id),
                      this.unselect(o),
                      this.#w?.remove(o.id);
                  }
                  #ti(o) {
                    let l = this.#F.get(o.pageIndex);
                    l ? l.addOrRebuild(o) : this.addEditor(o);
                  }
                  setActiveEditor(o) {
                    this.#R !== o &&
                      ((this.#R = o), o && this.#ts(o.propertiesToUpdate));
                  }
                  toggleSelected(o) {
                    if (this.#q.has(o)) {
                      this.#q.delete(o),
                        o.unselect(),
                        this.#ta({ hasSelectedEditor: this.hasSelection });
                      return;
                    }
                    this.#q.add(o),
                      o.select(),
                      this.#ts(o.propertiesToUpdate),
                      this.#ta({ hasSelectedEditor: !0 });
                  }
                  setSelected(o) {
                    for (let l of this.#q) l !== o && l.unselect();
                    this.#q.clear(),
                      this.#q.add(o),
                      o.select(),
                      this.#ts(o.propertiesToUpdate),
                      this.#ta({ hasSelectedEditor: !0 });
                  }
                  isSelected(o) {
                    return this.#q.has(o);
                  }
                  unselect(o) {
                    o.unselect(),
                      this.#q.delete(o),
                      this.#ta({ hasSelectedEditor: this.hasSelection });
                  }
                  get hasSelection() {
                    return 0 !== this.#q.size;
                  }
                  undo() {
                    this.#D.undo(),
                      this.#ta({
                        hasSomethingToUndo: this.#D.hasSomethingToUndo(),
                        hasSomethingToRedo: !0,
                        isEmpty: this.#tn(),
                      });
                  }
                  redo() {
                    this.#D.redo(),
                      this.#ta({
                        hasSomethingToUndo: !0,
                        hasSomethingToRedo: this.#D.hasSomethingToRedo(),
                        isEmpty: this.#tn(),
                      });
                  }
                  addCommands(o) {
                    this.#D.add(o),
                      this.#ta({
                        hasSomethingToUndo: !0,
                        hasSomethingToRedo: !1,
                        isEmpty: this.#tn(),
                      });
                  }
                  #tn() {
                    if (0 === this.#M.size) return !0;
                    if (1 === this.#M.size)
                      for (let o of this.#M.values()) return o.isEmpty();
                    return !1;
                  }
                  delete() {
                    if ((this.commitOrRemove(), !this.hasSelection)) return;
                    let o = [...this.#q],
                      cmd = () => {
                        for (let l of o) l.remove();
                      },
                      undo = () => {
                        for (let l of o) this.#ti(l);
                      };
                    this.addCommands({ cmd, undo, mustExec: !0 });
                  }
                  commitOrRemove() {
                    this.#R?.commitOrRemove();
                  }
                  #tr(o) {
                    for (let l of (this.#q.clear(), o))
                      l.isEmpty() || (this.#q.add(l), l.select());
                    this.#ta({ hasSelectedEditor: !0 });
                  }
                  selectAll() {
                    for (let o of this.#q) o.commit();
                    this.#tr(this.#M.values());
                  }
                  unselectAll() {
                    if (this.#R) {
                      this.#R.commitOrRemove();
                      return;
                    }
                    if (0 !== this.#q.size) {
                      for (let o of this.#q) o.unselect();
                      this.#q.clear(), this.#ta({ hasSelectedEditor: !1 });
                    }
                  }
                  isActive(o) {
                    return this.#R === o;
                  }
                  getActive() {
                    return this.#R;
                  }
                  getMode() {
                    return this.#B;
                  }
                };
                l.AnnotationEditorUIManager = AnnotationEditorUIManager;
              },
              (o, l, _) => {
                let S;
                Object.defineProperty(l, "__esModule", { value: !0 }),
                  (l.StatTimer =
                    l.RenderingCancelledException =
                    l.PixelsPerInch =
                    l.PageViewport =
                    l.PDFDateString =
                    l.DOMStandardFontDataFactory =
                    l.DOMSVGFactory =
                    l.DOMCanvasFactory =
                    l.DOMCMapReaderFactory =
                    l.AnnotationPrefix =
                      void 0),
                  (l.deprecated = deprecated),
                  (l.getColorValues = getColorValues),
                  (l.getCurrentTransform = getCurrentTransform),
                  (l.getCurrentTransformInverse = getCurrentTransformInverse),
                  (l.getFilenameFromUrl = getFilenameFromUrl),
                  (l.getPdfFilenameFromUrl = getPdfFilenameFromUrl),
                  (l.getRGB = getRGB),
                  (l.getXfaPageViewport = getXfaPageViewport),
                  (l.isDataScheme = isDataScheme),
                  (l.isPdfFile = isPdfFile),
                  (l.isValidFetchUrl = isValidFetchUrl),
                  (l.loadScript = loadScript),
                  (l.setLayerDimensions = setLayerDimensions);
                var E = _(7),
                  P = _(1);
                let T = "http://www.w3.org/2000/svg",
                  M = "pdfjs_internal_id_";
                l.AnnotationPrefix = M;
                let PixelsPerInch = class PixelsPerInch {
                  static CSS = 96;
                  static PDF = 72;
                  static PDF_TO_CSS_UNITS = this.CSS / this.PDF;
                };
                l.PixelsPerInch = PixelsPerInch;
                let DOMCanvasFactory = class DOMCanvasFactory extends E.BaseCanvasFactory {
                  constructor({ ownerDocument: o = globalThis.document } = {}) {
                    super(), (this._document = o);
                  }
                  _createCanvas(o, l) {
                    let _ = this._document.createElement("canvas");
                    return (_.width = o), (_.height = l), _;
                  }
                };
                async function fetchData(o, l = !1) {
                  if (isValidFetchUrl(o, document.baseURI)) {
                    let _ = await fetch(o);
                    if (!_.ok) throw Error(_.statusText);
                    return l
                      ? new Uint8Array(await _.arrayBuffer())
                      : (0, P.stringToBytes)(await _.text());
                  }
                  return new Promise((_, S) => {
                    let E = new XMLHttpRequest();
                    E.open("GET", o, !0),
                      l && (E.responseType = "arraybuffer"),
                      (E.onreadystatechange = () => {
                        if (E.readyState === XMLHttpRequest.DONE) {
                          if (200 === E.status || 0 === E.status) {
                            let o;
                            if (
                              (l && E.response
                                ? (o = new Uint8Array(E.response))
                                : !l &&
                                  E.responseText &&
                                  (o = (0, P.stringToBytes)(E.responseText)),
                              o)
                            ) {
                              _(o);
                              return;
                            }
                          }
                          S(Error(E.statusText));
                        }
                      }),
                      E.send(null);
                  });
                }
                l.DOMCanvasFactory = DOMCanvasFactory;
                let DOMCMapReaderFactory = class DOMCMapReaderFactory extends E.BaseCMapReaderFactory {
                  _fetchData(o, l) {
                    return fetchData(o, this.isCompressed).then((o) => ({
                      cMapData: o,
                      compressionType: l,
                    }));
                  }
                };
                l.DOMCMapReaderFactory = DOMCMapReaderFactory;
                let DOMStandardFontDataFactory = class DOMStandardFontDataFactory extends E.BaseStandardFontDataFactory {
                  _fetchData(o) {
                    return fetchData(o, !0);
                  }
                };
                l.DOMStandardFontDataFactory = DOMStandardFontDataFactory;
                let DOMSVGFactory = class DOMSVGFactory extends E.BaseSVGFactory {
                  _createSVG(o) {
                    return document.createElementNS(T, o);
                  }
                };
                l.DOMSVGFactory = DOMSVGFactory;
                let PageViewport = class PageViewport {
                  constructor({
                    viewBox: o,
                    scale: l,
                    rotation: _,
                    offsetX: S = 0,
                    offsetY: E = 0,
                    dontFlip: P = !1,
                  }) {
                    let T, M, F, D, I, O, L, N;
                    (this.viewBox = o),
                      (this.scale = l),
                      (this.rotation = _),
                      (this.offsetX = S),
                      (this.offsetY = E);
                    let U = (o[2] + o[0]) / 2,
                      W = (o[3] + o[1]) / 2;
                    switch (((_ %= 360) < 0 && (_ += 360), _)) {
                      case 180:
                        (T = -1), (M = 0), (F = 0), (D = 1);
                        break;
                      case 90:
                        (T = 0), (M = 1), (F = 1), (D = 0);
                        break;
                      case 270:
                        (T = 0), (M = -1), (F = -1), (D = 0);
                        break;
                      case 0:
                        (T = 1), (M = 0), (F = 0), (D = -1);
                        break;
                      default:
                        throw Error(
                          "PageViewport: Invalid rotation, must be a multiple of 90 degrees."
                        );
                    }
                    P && ((F = -F), (D = -D)),
                      0 === T
                        ? ((I = Math.abs(W - o[1]) * l + S),
                          (O = Math.abs(U - o[0]) * l + E),
                          (L = (o[3] - o[1]) * l),
                          (N = (o[2] - o[0]) * l))
                        : ((I = Math.abs(U - o[0]) * l + S),
                          (O = Math.abs(W - o[1]) * l + E),
                          (L = (o[2] - o[0]) * l),
                          (N = (o[3] - o[1]) * l)),
                      (this.transform = [
                        T * l,
                        M * l,
                        F * l,
                        D * l,
                        I - T * l * U - F * l * W,
                        O - M * l * U - D * l * W,
                      ]),
                      (this.width = L),
                      (this.height = N);
                  }
                  get rawDims() {
                    let { viewBox: o } = this;
                    return (0, P.shadow)(this, "rawDims", {
                      pageWidth: o[2] - o[0],
                      pageHeight: o[3] - o[1],
                      pageX: o[0],
                      pageY: o[1],
                    });
                  }
                  clone({
                    scale: o = this.scale,
                    rotation: l = this.rotation,
                    offsetX: _ = this.offsetX,
                    offsetY: S = this.offsetY,
                    dontFlip: E = !1,
                  } = {}) {
                    return new PageViewport({
                      viewBox: this.viewBox.slice(),
                      scale: o,
                      rotation: l,
                      offsetX: _,
                      offsetY: S,
                      dontFlip: E,
                    });
                  }
                  convertToViewportPoint(o, l) {
                    return P.Util.applyTransform([o, l], this.transform);
                  }
                  convertToViewportRectangle(o) {
                    let l = P.Util.applyTransform([o[0], o[1]], this.transform),
                      _ = P.Util.applyTransform([o[2], o[3]], this.transform);
                    return [l[0], l[1], _[0], _[1]];
                  }
                  convertToPdfPoint(o, l) {
                    return P.Util.applyInverseTransform([o, l], this.transform);
                  }
                };
                l.PageViewport = PageViewport;
                let RenderingCancelledException = class RenderingCancelledException extends P.BaseException {
                  constructor(o, l, _ = 0) {
                    super(o, "RenderingCancelledException"),
                      (this.type = l),
                      (this.extraDelay = _);
                  }
                };
                function isDataScheme(o) {
                  let l = o.length,
                    _ = 0;
                  for (; _ < l && "" === o[_].trim(); ) _++;
                  return "data:" === o.substring(_, _ + 5).toLowerCase();
                }
                function isPdfFile(o) {
                  return "string" == typeof o && /\.pdf$/i.test(o);
                }
                function getFilenameFromUrl(o, l = !1) {
                  return (
                    l || ([o] = o.split(/[#?]/, 1)),
                    o.substring(o.lastIndexOf("/") + 1)
                  );
                }
                function getPdfFilenameFromUrl(o, l = "document.pdf") {
                  if ("string" != typeof o) return l;
                  if (isDataScheme(o))
                    return (
                      (0, P.warn)(
                        'getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'
                      ),
                      l
                    );
                  let _ = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/,
                    S = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i,
                    E = _.exec(o),
                    T = S.exec(E[1]) || S.exec(E[2]) || S.exec(E[3]);
                  if (T && (T = T[0]).includes("%"))
                    try {
                      T = S.exec(decodeURIComponent(T))[0];
                    } catch (o) {}
                  return T || l;
                }
                l.RenderingCancelledException = RenderingCancelledException;
                let StatTimer = class StatTimer {
                  started = Object.create(null);
                  times = [];
                  time(o) {
                    o in this.started &&
                      (0, P.warn)(`Timer is already running for ${o}`),
                      (this.started[o] = Date.now());
                  }
                  timeEnd(o) {
                    o in this.started ||
                      (0, P.warn)(`Timer has not been started for ${o}`),
                      this.times.push({
                        name: o,
                        start: this.started[o],
                        end: Date.now(),
                      }),
                      delete this.started[o];
                  }
                  toString() {
                    let o = [],
                      l = 0;
                    for (let { name: o } of this.times)
                      l = Math.max(o.length, l);
                    for (let { name: _, start: S, end: E } of this.times)
                      o.push(`${_.padEnd(l)} ${E - S}ms
`);
                    return o.join("");
                  }
                };
                function isValidFetchUrl(o, l) {
                  try {
                    let { protocol: _ } = l ? new URL(o, l) : new URL(o);
                    return "http:" === _ || "https:" === _;
                  } catch (o) {
                    return !1;
                  }
                }
                function loadScript(o, l = !1) {
                  return new Promise((_, S) => {
                    let E = document.createElement("script");
                    (E.src = o),
                      (E.onload = function (o) {
                        l && E.remove(), _(o);
                      }),
                      (E.onerror = function () {
                        S(Error(`Cannot load script at: ${E.src}`));
                      }),
                      (document.head || document.documentElement).append(E);
                  });
                }
                function deprecated(o) {
                  console.log("Deprecated API usage: " + o);
                }
                l.StatTimer = StatTimer;
                let PDFDateString = class PDFDateString {
                  static toDateObject(o) {
                    if (!o || "string" != typeof o) return null;
                    S ||
                      (S = RegExp(
                        "^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"
                      ));
                    let l = S.exec(o);
                    if (!l) return null;
                    let _ = parseInt(l[1], 10),
                      E = parseInt(l[2], 10);
                    E = E >= 1 && E <= 12 ? E - 1 : 0;
                    let P = parseInt(l[3], 10);
                    P = P >= 1 && P <= 31 ? P : 1;
                    let T = parseInt(l[4], 10);
                    T = T >= 0 && T <= 23 ? T : 0;
                    let M = parseInt(l[5], 10);
                    M = M >= 0 && M <= 59 ? M : 0;
                    let F = parseInt(l[6], 10);
                    F = F >= 0 && F <= 59 ? F : 0;
                    let D = l[7] || "Z",
                      I = parseInt(l[8], 10);
                    I = I >= 0 && I <= 23 ? I : 0;
                    let O = parseInt(l[9], 10) || 0;
                    return (
                      (O = O >= 0 && O <= 59 ? O : 0),
                      "-" === D
                        ? ((T += I), (M += O))
                        : "+" === D && ((T -= I), (M -= O)),
                      new Date(Date.UTC(_, E, P, T, M, F))
                    );
                  }
                };
                function getXfaPageViewport(
                  o,
                  { scale: l = 1, rotation: _ = 0 }
                ) {
                  let { width: S, height: E } = o.attributes.style,
                    P = [0, 0, parseInt(S), parseInt(E)];
                  return new PageViewport({
                    viewBox: P,
                    scale: l,
                    rotation: _,
                  });
                }
                function getRGB(o) {
                  if (o.startsWith("#")) {
                    let l = parseInt(o.slice(1), 16);
                    return [(16711680 & l) >> 16, (65280 & l) >> 8, 255 & l];
                  }
                  return o.startsWith("rgb(")
                    ? o
                        .slice(4, -1)
                        .split(",")
                        .map((o) => parseInt(o))
                    : o.startsWith("rgba(")
                    ? o
                        .slice(5, -1)
                        .split(",")
                        .map((o) => parseInt(o))
                        .slice(0, 3)
                    : ((0, P.warn)(`Not a valid color format: "${o}"`),
                      [0, 0, 0]);
                }
                function getColorValues(o) {
                  let l = document.createElement("span");
                  for (let _ of ((l.style.visibility = "hidden"),
                  document.body.append(l),
                  o.keys())) {
                    l.style.color = _;
                    let S = window.getComputedStyle(l).color;
                    o.set(_, getRGB(S));
                  }
                  l.remove();
                }
                function getCurrentTransform(o) {
                  let { a: l, b: _, c: S, d: E, e: P, f: T } = o.getTransform();
                  return [l, _, S, E, P, T];
                }
                function getCurrentTransformInverse(o) {
                  let {
                    a: l,
                    b: _,
                    c: S,
                    d: E,
                    e: P,
                    f: T,
                  } = o.getTransform().invertSelf();
                  return [l, _, S, E, P, T];
                }
                function setLayerDimensions(o, l, _ = !1, S = !0) {
                  if (l instanceof PageViewport) {
                    let { pageWidth: S, pageHeight: E } = l.rawDims,
                      { style: P } = o,
                      T = `calc(var(--scale-factor) * ${S}px)`,
                      M = `calc(var(--scale-factor) * ${E}px)`;
                    _ && l.rotation % 180 != 0
                      ? ((P.width = M), (P.height = T))
                      : ((P.width = T), (P.height = M));
                  }
                  S && o.setAttribute("data-main-rotation", l.rotation);
                }
                l.PDFDateString = PDFDateString;
              },
              (o, l, _) => {
                Object.defineProperty(l, "__esModule", { value: !0 }),
                  (l.BaseStandardFontDataFactory =
                    l.BaseSVGFactory =
                    l.BaseCanvasFactory =
                    l.BaseCMapReaderFactory =
                      void 0);
                var S = _(1);
                let BaseCanvasFactory = class BaseCanvasFactory {
                  constructor() {
                    this.constructor === BaseCanvasFactory &&
                      (0, S.unreachable)(
                        "Cannot initialize BaseCanvasFactory."
                      );
                  }
                  create(o, l) {
                    if (o <= 0 || l <= 0) throw Error("Invalid canvas size");
                    let _ = this._createCanvas(o, l);
                    return { canvas: _, context: _.getContext("2d") };
                  }
                  reset(o, l, _) {
                    if (!o.canvas) throw Error("Canvas is not specified");
                    if (l <= 0 || _ <= 0) throw Error("Invalid canvas size");
                    (o.canvas.width = l), (o.canvas.height = _);
                  }
                  destroy(o) {
                    if (!o.canvas) throw Error("Canvas is not specified");
                    (o.canvas.width = 0),
                      (o.canvas.height = 0),
                      (o.canvas = null),
                      (o.context = null);
                  }
                  _createCanvas(o, l) {
                    (0, S.unreachable)(
                      "Abstract method `_createCanvas` called."
                    );
                  }
                };
                l.BaseCanvasFactory = BaseCanvasFactory;
                let BaseCMapReaderFactory = class BaseCMapReaderFactory {
                  constructor({ baseUrl: o = null, isCompressed: l = !0 }) {
                    this.constructor === BaseCMapReaderFactory &&
                      (0, S.unreachable)(
                        "Cannot initialize BaseCMapReaderFactory."
                      ),
                      (this.baseUrl = o),
                      (this.isCompressed = l);
                  }
                  async fetch({ name: o }) {
                    if (!this.baseUrl)
                      throw Error(
                        'The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.'
                      );
                    if (!o) throw Error("CMap name must be specified.");
                    let l =
                        this.baseUrl + o + (this.isCompressed ? ".bcmap" : ""),
                      _ = this.isCompressed
                        ? S.CMapCompressionType.BINARY
                        : S.CMapCompressionType.NONE;
                    return this._fetchData(l, _).catch((o) => {
                      throw Error(
                        `Unable to load ${
                          this.isCompressed ? "binary " : ""
                        }CMap at: ${l}`
                      );
                    });
                  }
                  _fetchData(o, l) {
                    (0, S.unreachable)("Abstract method `_fetchData` called.");
                  }
                };
                l.BaseCMapReaderFactory = BaseCMapReaderFactory;
                let BaseStandardFontDataFactory = class BaseStandardFontDataFactory {
                  constructor({ baseUrl: o = null }) {
                    this.constructor === BaseStandardFontDataFactory &&
                      (0, S.unreachable)(
                        "Cannot initialize BaseStandardFontDataFactory."
                      ),
                      (this.baseUrl = o);
                  }
                  async fetch({ filename: o }) {
                    if (!this.baseUrl)
                      throw Error(
                        'The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.'
                      );
                    if (!o) throw Error("Font filename must be specified.");
                    let l = `${this.baseUrl}${o}`;
                    return this._fetchData(l).catch((o) => {
                      throw Error(`Unable to load font data at: ${l}`);
                    });
                  }
                  _fetchData(o) {
                    (0, S.unreachable)("Abstract method `_fetchData` called.");
                  }
                };
                l.BaseStandardFontDataFactory = BaseStandardFontDataFactory;
                let BaseSVGFactory = class BaseSVGFactory {
                  constructor() {
                    this.constructor === BaseSVGFactory &&
                      (0, S.unreachable)("Cannot initialize BaseSVGFactory.");
                  }
                  create(o, l, _ = !1) {
                    if (o <= 0 || l <= 0) throw Error("Invalid SVG dimensions");
                    let S = this._createSVG("svg:svg");
                    return (
                      S.setAttribute("version", "1.1"),
                      _ ||
                        (S.setAttribute("width", `${o}px`),
                        S.setAttribute("height", `${l}px`)),
                      S.setAttribute("preserveAspectRatio", "none"),
                      S.setAttribute("viewBox", `0 0 ${o} ${l}`),
                      S
                    );
                  }
                  createElement(o) {
                    if ("string" != typeof o)
                      throw Error("Invalid SVG element type");
                    return this._createSVG(o);
                  }
                  _createSVG(o) {
                    (0, S.unreachable)("Abstract method `_createSVG` called.");
                  }
                };
                l.BaseSVGFactory = BaseSVGFactory;
              },
              (o, l, _) => {
                Object.defineProperty(l, "__esModule", { value: !0 }),
                  (l.MurmurHash3_64 = void 0);
                var S = _(1);
                let E = 3285377520,
                  P = 4294901760,
                  T = 65535;
                let MurmurHash3_64 = class MurmurHash3_64 {
                  constructor(o) {
                    (this.h1 = o ? 4294967295 & o : E),
                      (this.h2 = o ? 4294967295 & o : E);
                  }
                  update(o) {
                    let l, _;
                    if ("string" == typeof o) {
                      (l = new Uint8Array(2 * o.length)), (_ = 0);
                      for (let S = 0, E = o.length; S < E; S++) {
                        let E = o.charCodeAt(S);
                        E <= 255
                          ? (l[_++] = E)
                          : ((l[_++] = E >>> 8), (l[_++] = 255 & E));
                      }
                    } else if ((0, S.isArrayBuffer)(o))
                      _ = (l = o.slice()).byteLength;
                    else
                      throw Error(
                        "Wrong data format in MurmurHash3_64_update. Input must be a string or array."
                      );
                    let E = _ >> 2,
                      M = _ - 4 * E,
                      F = new Uint32Array(l.buffer, 0, E),
                      D = 0,
                      I = 0,
                      O = this.h1,
                      L = this.h2,
                      N = 3432918353,
                      U = 461845907,
                      W = N & T,
                      H = U & T;
                    for (let o = 0; o < E; o++)
                      1 & o
                        ? ((O ^= D =
                            (((D =
                              ((D = (((D = F[o]) * N) & P) | ((D * W) & T)) <<
                                15) |
                              (D >>> 17)) *
                              U) &
                              P) |
                            ((D * H) & T)),
                          (O = 5 * (O = (O << 13) | (O >>> 19)) + 3864292196))
                        : ((L ^= I =
                            (((I =
                              ((I = (((I = F[o]) * N) & P) | ((I * W) & T)) <<
                                15) |
                              (I >>> 17)) *
                              U) &
                              P) |
                            ((I * H) & T)),
                          (L = 5 * (L = (L << 13) | (L >>> 19)) + 3864292196));
                    switch (((D = 0), M)) {
                      case 3:
                        D ^= l[4 * E + 2] << 16;
                      case 2:
                        D ^= l[4 * E + 1] << 8;
                      case 1:
                        (D ^= l[4 * E]),
                          (D =
                            (((D =
                              ((D = ((D * N) & P) | ((D * W) & T)) << 15) |
                              (D >>> 17)) *
                              U) &
                              P) |
                            ((D * H) & T)),
                          1 & E ? (O ^= D) : (L ^= D);
                    }
                    (this.h1 = O), (this.h2 = L);
                  }
                  hexdigest() {
                    let o = this.h1,
                      l = this.h2;
                    return (
                      (o ^= l >>> 1),
                      (o = ((3981806797 * o) & P) | ((36045 * o) & T)),
                      (l =
                        ((4283543511 * l) & P) |
                        (((((l << 16) | (o >>> 16)) * 2950163797) & P) >>> 16)),
                      (o ^= l >>> 1),
                      (o = ((444984403 * o) & P) | ((60499 * o) & T)),
                      (l =
                        ((3301882366 * l) & P) |
                        (((((l << 16) | (o >>> 16)) * 3120437893) & P) >>> 16)),
                      ((o ^= l >>> 1) >>> 0).toString(16).padStart(8, "0") +
                        (l >>> 0).toString(16).padStart(8, "0")
                    );
                  }
                };
                l.MurmurHash3_64 = MurmurHash3_64;
              },
              (o, l, _) => {
                Object.defineProperty(l, "__esModule", { value: !0 }),
                  (l.FontLoader = l.FontFaceObject = void 0);
                var S = _(1),
                  E = _(10);
                let FontLoader = class FontLoader {
                  constructor({
                    onUnsupportedFeature: o,
                    ownerDocument: l = globalThis.document,
                    styleElement: _ = null,
                  }) {
                    (this._onUnsupportedFeature = o),
                      (this._document = l),
                      (this.nativeFontFaces = []),
                      (this.styleElement = null),
                      (this.loadingRequests = []),
                      (this.loadTestFontId = 0);
                  }
                  addNativeFontFace(o) {
                    this.nativeFontFaces.push(o), this._document.fonts.add(o);
                  }
                  insertRule(o) {
                    this.styleElement ||
                      ((this.styleElement =
                        this._document.createElement("style")),
                      this._document.documentElement
                        .getElementsByTagName("head")[0]
                        .append(this.styleElement));
                    let l = this.styleElement.sheet;
                    l.insertRule(o, l.cssRules.length);
                  }
                  clear() {
                    for (let o of this.nativeFontFaces)
                      this._document.fonts.delete(o);
                    (this.nativeFontFaces.length = 0),
                      this.styleElement &&
                        (this.styleElement.remove(),
                        (this.styleElement = null));
                  }
                  async bind(o) {
                    if (o.attached || o.missingFile) return;
                    if (((o.attached = !0), this.isFontLoadingAPISupported)) {
                      let l = o.createNativeFontFace();
                      if (l) {
                        this.addNativeFontFace(l);
                        try {
                          await l.loaded;
                        } catch (_) {
                          throw (
                            (this._onUnsupportedFeature({
                              featureId:
                                S.UNSUPPORTED_FEATURES.errorFontLoadNative,
                            }),
                            (0, S.warn)(
                              `Failed to load font '${l.family}': '${_}'.`
                            ),
                            (o.disableFontFace = !0),
                            _)
                          );
                        }
                      }
                      return;
                    }
                    let l = o.createFontFaceRule();
                    if (l) {
                      if ((this.insertRule(l), this.isSyncFontLoadingSupported))
                        return;
                      await new Promise((l) => {
                        let _ = this._queueLoadingCallback(l);
                        this._prepareFontLoadEvent(o, _);
                      });
                    }
                  }
                  get isFontLoadingAPISupported() {
                    let o = !!this._document?.fonts;
                    return (0, S.shadow)(this, "isFontLoadingAPISupported", o);
                  }
                  get isSyncFontLoadingSupported() {
                    let o = !1;
                    return (
                      E.isNodeJS
                        ? (o = !0)
                        : "undefined" != typeof navigator &&
                          /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(
                            navigator.userAgent
                          ) &&
                          (o = !0),
                      (0, S.shadow)(this, "isSyncFontLoadingSupported", o)
                    );
                  }
                  _queueLoadingCallback(o) {
                    function completeRequest() {
                      for (
                        (0, S.assert)(
                          !_.done,
                          "completeRequest() cannot be called twice."
                        ),
                          _.done = !0;
                        l.length > 0 && l[0].done;

                      ) {
                        let o = l.shift();
                        setTimeout(o.callback, 0);
                      }
                    }
                    let { loadingRequests: l } = this,
                      _ = { done: !1, complete: completeRequest, callback: o };
                    return l.push(_), _;
                  }
                  get _loadTestFont() {
                    let o = atob(
                      "T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=="
                    );
                    return (0, S.shadow)(this, "_loadTestFont", o);
                  }
                  _prepareFontLoadEvent(o, l) {
                    let _, E;
                    function int32(o, l) {
                      return (
                        (o.charCodeAt(l) << 24) |
                        (o.charCodeAt(l + 1) << 16) |
                        (o.charCodeAt(l + 2) << 8) |
                        (255 & o.charCodeAt(l + 3))
                      );
                    }
                    function spliceString(o, l, _, S) {
                      let E = o.substring(0, l),
                        P = o.substring(l + _);
                      return E + S + P;
                    }
                    let P = this._document.createElement("canvas");
                    (P.width = 1), (P.height = 1);
                    let T = P.getContext("2d"),
                      M = 0;
                    function isFontReady(o, l) {
                      if (++M > 30) {
                        (0, S.warn)("Load test font never loaded."), l();
                        return;
                      }
                      (T.font = "30px " + o), T.fillText(".", 0, 20);
                      let _ = T.getImageData(0, 0, 1, 1);
                      if (_.data[3] > 0) {
                        l();
                        return;
                      }
                      setTimeout(isFontReady.bind(null, o, l));
                    }
                    let F = `lt${Date.now()}${this.loadTestFontId++}`,
                      D = this._loadTestFont,
                      I = 976;
                    D = spliceString(D, I, F.length, F);
                    let O = 16,
                      L = 1482184792,
                      N = int32(D, O);
                    for (_ = 0, E = F.length - 3; _ < E; _ += 4)
                      N = (N - L + int32(F, _)) | 0;
                    _ < F.length && (N = (N - L + int32(F + "XXX", _)) | 0),
                      (D = spliceString(D, O, 4, (0, S.string32)(N)));
                    let U = `url(data:font/opentype;base64,${btoa(D)});`,
                      W = `@font-face {font-family:"${F}";src:${U}}`;
                    this.insertRule(W);
                    let H = this._document.createElement("div");
                    for (let l of ((H.style.visibility = "hidden"),
                    (H.style.width = H.style.height = "10px"),
                    (H.style.position = "absolute"),
                    (H.style.top = H.style.left = "0px"),
                    [o.loadedName, F])) {
                      let o = this._document.createElement("span");
                      (o.textContent = "Hi"),
                        (o.style.fontFamily = l),
                        H.append(o);
                    }
                    this._document.body.append(H),
                      isFontReady(F, () => {
                        H.remove(), l.complete();
                      });
                  }
                };
                l.FontLoader = FontLoader;
                let FontFaceObject = class FontFaceObject {
                  constructor(
                    o,
                    {
                      isEvalSupported: l = !0,
                      disableFontFace: _ = !1,
                      ignoreErrors: S = !1,
                      onUnsupportedFeature: E,
                      fontRegistry: P = null,
                    }
                  ) {
                    for (let l in ((this.compiledGlyphs = Object.create(null)),
                    o))
                      this[l] = o[l];
                    (this.isEvalSupported = !1 !== l),
                      (this.disableFontFace = !0 === _),
                      (this.ignoreErrors = !0 === S),
                      (this._onUnsupportedFeature = E),
                      (this.fontRegistry = P);
                  }
                  createNativeFontFace() {
                    let o;
                    if (!this.data || this.disableFontFace) return null;
                    if (this.cssFontInfo) {
                      let l = { weight: this.cssFontInfo.fontWeight };
                      this.cssFontInfo.italicAngle &&
                        (l.style = `oblique ${this.cssFontInfo.italicAngle}deg`),
                        (o = new FontFace(
                          this.cssFontInfo.fontFamily,
                          this.data,
                          l
                        ));
                    } else o = new FontFace(this.loadedName, this.data, {});
                    return this.fontRegistry?.registerFont(this), o;
                  }
                  createFontFaceRule() {
                    let o;
                    if (!this.data || this.disableFontFace) return null;
                    let l = (0, S.bytesToString)(this.data),
                      _ = `url(data:${this.mimetype};base64,${btoa(l)});`;
                    if (this.cssFontInfo) {
                      let l = `font-weight: ${this.cssFontInfo.fontWeight};`;
                      this.cssFontInfo.italicAngle &&
                        (l += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`),
                        (o = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${l}src:${_}}`);
                    } else
                      o = `@font-face {font-family:"${this.loadedName}";src:${_}}`;
                    return this.fontRegistry?.registerFont(this, _), o;
                  }
                  getPathGenerator(o, l) {
                    let _;
                    if (void 0 !== this.compiledGlyphs[l])
                      return this.compiledGlyphs[l];
                    try {
                      _ = o.get(this.loadedName + "_path_" + l);
                    } catch (o) {
                      if (!this.ignoreErrors) throw o;
                      return (
                        this._onUnsupportedFeature({
                          featureId: S.UNSUPPORTED_FEATURES.errorFontGetPath,
                        }),
                        (0, S.warn)(
                          `getPathGenerator - ignoring character: "${o}".`
                        ),
                        (this.compiledGlyphs[l] = function (o, l) {})
                      );
                    }
                    if (this.isEvalSupported && S.FeatureTest.isEvalSupported) {
                      let o = [];
                      for (let l of _) {
                        let _ = void 0 !== l.args ? l.args.join(",") : "";
                        o.push("c.", l.cmd, "(", _, ");\n");
                      }
                      return (this.compiledGlyphs[l] = Function(
                        "c",
                        "size",
                        o.join("")
                      ));
                    }
                    return (this.compiledGlyphs[l] = function (o, l) {
                      for (let S of _)
                        "scale" === S.cmd && (S.args = [l, -l]),
                          o[S.cmd].apply(o, S.args);
                    });
                  }
                };
                l.FontFaceObject = FontFaceObject;
              },
              (o, l) => {
                Object.defineProperty(l, "__esModule", { value: !0 }),
                  (l.isNodeJS = void 0);
                let _ =
                  "object" == typeof process &&
                  process + "" == "[object process]" &&
                  !process.versions.nw &&
                  !(
                    process.versions.electron &&
                    process.type &&
                    "browser" !== process.type
                  );
                l.isNodeJS = _;
              },
              (o, l, _) => {
                Object.defineProperty(l, "__esModule", { value: !0 }),
                  (l.CanvasGraphics = void 0);
                var S = _(1),
                  E = _(6),
                  P = _(12),
                  T = _(13);
                let M = 16,
                  F = 100,
                  D = 4096,
                  I = 15,
                  O = 10,
                  L = 1e3,
                  N = 16;
                function mirrorContextOperations(o, l) {
                  if (o._removeMirroring)
                    throw Error("Context is already forwarding operations.");
                  (o.__originalSave = o.save),
                    (o.__originalRestore = o.restore),
                    (o.__originalRotate = o.rotate),
                    (o.__originalScale = o.scale),
                    (o.__originalTranslate = o.translate),
                    (o.__originalTransform = o.transform),
                    (o.__originalSetTransform = o.setTransform),
                    (o.__originalResetTransform = o.resetTransform),
                    (o.__originalClip = o.clip),
                    (o.__originalMoveTo = o.moveTo),
                    (o.__originalLineTo = o.lineTo),
                    (o.__originalBezierCurveTo = o.bezierCurveTo),
                    (o.__originalRect = o.rect),
                    (o.__originalClosePath = o.closePath),
                    (o.__originalBeginPath = o.beginPath),
                    (o._removeMirroring = () => {
                      (o.save = o.__originalSave),
                        (o.restore = o.__originalRestore),
                        (o.rotate = o.__originalRotate),
                        (o.scale = o.__originalScale),
                        (o.translate = o.__originalTranslate),
                        (o.transform = o.__originalTransform),
                        (o.setTransform = o.__originalSetTransform),
                        (o.resetTransform = o.__originalResetTransform),
                        (o.clip = o.__originalClip),
                        (o.moveTo = o.__originalMoveTo),
                        (o.lineTo = o.__originalLineTo),
                        (o.bezierCurveTo = o.__originalBezierCurveTo),
                        (o.rect = o.__originalRect),
                        (o.closePath = o.__originalClosePath),
                        (o.beginPath = o.__originalBeginPath),
                        delete o._removeMirroring;
                    }),
                    (o.save = function () {
                      l.save(), this.__originalSave();
                    }),
                    (o.restore = function () {
                      l.restore(), this.__originalRestore();
                    }),
                    (o.translate = function (o, _) {
                      l.translate(o, _), this.__originalTranslate(o, _);
                    }),
                    (o.scale = function (o, _) {
                      l.scale(o, _), this.__originalScale(o, _);
                    }),
                    (o.transform = function (o, _, S, E, P, T) {
                      l.transform(o, _, S, E, P, T),
                        this.__originalTransform(o, _, S, E, P, T);
                    }),
                    (o.setTransform = function (o, _, S, E, P, T) {
                      l.setTransform(o, _, S, E, P, T),
                        this.__originalSetTransform(o, _, S, E, P, T);
                    }),
                    (o.resetTransform = function () {
                      l.resetTransform(), this.__originalResetTransform();
                    }),
                    (o.rotate = function (o) {
                      l.rotate(o), this.__originalRotate(o);
                    }),
                    (o.clip = function (o) {
                      l.clip(o), this.__originalClip(o);
                    }),
                    (o.moveTo = function (o, _) {
                      l.moveTo(o, _), this.__originalMoveTo(o, _);
                    }),
                    (o.lineTo = function (o, _) {
                      l.lineTo(o, _), this.__originalLineTo(o, _);
                    }),
                    (o.bezierCurveTo = function (o, _, S, E, P, T) {
                      l.bezierCurveTo(o, _, S, E, P, T),
                        this.__originalBezierCurveTo(o, _, S, E, P, T);
                    }),
                    (o.rect = function (o, _, S, E) {
                      l.rect(o, _, S, E), this.__originalRect(o, _, S, E);
                    }),
                    (o.closePath = function () {
                      l.closePath(), this.__originalClosePath();
                    }),
                    (o.beginPath = function () {
                      l.beginPath(), this.__originalBeginPath();
                    });
                }
                let CachedCanvases = class CachedCanvases {
                  constructor(o) {
                    (this.canvasFactory = o),
                      (this.cache = Object.create(null));
                  }
                  getCanvas(o, l, _) {
                    let S;
                    return (
                      void 0 !== this.cache[o]
                        ? ((S = this.cache[o]),
                          this.canvasFactory.reset(S, l, _))
                        : ((S = this.canvasFactory.create(l, _)),
                          (this.cache[o] = S)),
                      S
                    );
                  }
                  delete(o) {
                    delete this.cache[o];
                  }
                  clear() {
                    for (let o in this.cache) {
                      let l = this.cache[o];
                      this.canvasFactory.destroy(l), delete this.cache[o];
                    }
                  }
                };
                function drawImageAtIntegerCoords(
                  o,
                  l,
                  _,
                  S,
                  P,
                  T,
                  M,
                  F,
                  D,
                  I
                ) {
                  let [O, L, N, U, W, H] = (0, E.getCurrentTransform)(o);
                  if (0 === L && 0 === N) {
                    let E = M * O + W,
                      V = Math.round(E),
                      z = F * U + H,
                      $ = Math.round(z),
                      K = (M + D) * O + W,
                      Y = Math.abs(Math.round(K) - V) || 1,
                      J = (F + I) * U + H,
                      Q = Math.abs(Math.round(J) - $) || 1;
                    return (
                      o.setTransform(Math.sign(O), 0, 0, Math.sign(U), V, $),
                      o.drawImage(l, _, S, P, T, 0, 0, Y, Q),
                      o.setTransform(O, L, N, U, W, H),
                      [Y, Q]
                    );
                  }
                  if (0 === O && 0 === U) {
                    let E = F * N + W,
                      V = Math.round(E),
                      z = M * L + H,
                      $ = Math.round(z),
                      K = (F + I) * N + W,
                      Y = Math.abs(Math.round(K) - V) || 1,
                      J = (M + D) * L + H,
                      Q = Math.abs(Math.round(J) - $) || 1;
                    return (
                      o.setTransform(0, Math.sign(L), Math.sign(N), 0, V, $),
                      o.drawImage(l, _, S, P, T, 0, 0, Q, Y),
                      o.setTransform(O, L, N, U, W, H),
                      [Q, Y]
                    );
                  }
                  o.drawImage(l, _, S, P, T, M, F, D, I);
                  let V = Math.hypot(O, L),
                    z = Math.hypot(N, U);
                  return [V * D, z * I];
                }
                function compileType3Glyph(o) {
                  let l, _, S;
                  let { width: E, height: P } = o;
                  if (E > L || P > L) return null;
                  let T = 1e3,
                    M = new Uint8Array([
                      0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0,
                    ]),
                    F = E + 1,
                    D = new Uint8Array(F * (P + 1)),
                    I = (E + 7) & -8,
                    O = new Uint8Array(I * P),
                    N = 0;
                  for (let l of o.data) {
                    let o = 128;
                    for (; o > 0; ) (O[N++] = l & o ? 0 : 255), (o >>= 1);
                  }
                  let U = 0;
                  for (0 !== O[(N = 0)] && ((D[0] = 1), ++U), _ = 1; _ < E; _++)
                    O[N] !== O[N + 1] && ((D[_] = O[N] ? 2 : 1), ++U), N++;
                  for (0 !== O[N] && ((D[_] = 2), ++U), l = 1; l < P; l++) {
                    (N = l * I),
                      (S = l * F),
                      O[N - I] !== O[N] && ((D[S] = O[N] ? 1 : 8), ++U);
                    let o = (O[N] ? 4 : 0) + (O[N - I] ? 8 : 0);
                    for (_ = 1; _ < E; _++)
                      M[
                        (o =
                          (o >> 2) +
                          (O[N + 1] ? 4 : 0) +
                          (O[N - I + 1] ? 8 : 0))
                      ] && ((D[S + _] = M[o]), ++U),
                        N++;
                    if (
                      (O[N - I] !== O[N] && ((D[S + _] = O[N] ? 2 : 4), ++U),
                      U > T)
                    )
                      return null;
                  }
                  for (
                    N = I * (P - 1),
                      S = l * F,
                      0 !== O[N] && ((D[S] = 8), ++U),
                      _ = 1;
                    _ < E;
                    _++
                  )
                    O[N] !== O[N + 1] && ((D[S + _] = O[N] ? 4 : 8), ++U), N++;
                  if ((0 !== O[N] && ((D[S + _] = 4), ++U), U > T)) return null;
                  let W = new Int32Array([0, F, -1, 0, -F, 0, 0, 0, 1]),
                    H = new Path2D();
                  for (l = 0; U && l <= P; l++) {
                    let o = l * F,
                      _ = o + E;
                    for (; o < _ && !D[o]; ) o++;
                    if (o === _) continue;
                    H.moveTo(o % F, l);
                    let S = o,
                      P = D[o];
                    do {
                      let l = W[P];
                      do o += l;
                      while (!D[o]);
                      let _ = D[o];
                      5 !== _ && 10 !== _
                        ? ((P = _), (D[o] = 0))
                        : ((P = _ & ((51 * P) >> 4)),
                          (D[o] &= (P >> 2) | (P << 2))),
                        H.lineTo(o % F, (o / F) | 0),
                        !D[o] && --U;
                    } while (S !== o);
                    --l;
                  }
                  (O = null), (D = null);
                  let drawOutline = function (o) {
                    o.save(),
                      o.scale(1 / E, -1 / P),
                      o.translate(0, -P),
                      o.fill(H),
                      o.beginPath(),
                      o.restore();
                  };
                  return drawOutline;
                }
                let CanvasExtraState = class CanvasExtraState {
                  constructor(o, l) {
                    (this.alphaIsShape = !1),
                      (this.fontSize = 0),
                      (this.fontSizeScale = 1),
                      (this.textMatrix = S.IDENTITY_MATRIX),
                      (this.textMatrixScale = 1),
                      (this.fontMatrix = S.FONT_IDENTITY_MATRIX),
                      (this.leading = 0),
                      (this.x = 0),
                      (this.y = 0),
                      (this.lineX = 0),
                      (this.lineY = 0),
                      (this.charSpacing = 0),
                      (this.wordSpacing = 0),
                      (this.textHScale = 1),
                      (this.textRenderingMode = S.TextRenderingMode.FILL),
                      (this.textRise = 0),
                      (this.fillColor = "#000000"),
                      (this.strokeColor = "#000000"),
                      (this.patternFill = !1),
                      (this.fillAlpha = 1),
                      (this.strokeAlpha = 1),
                      (this.lineWidth = 1),
                      (this.activeSMask = null),
                      (this.transferMaps = null),
                      this.startNewPathAndClipBox([0, 0, o, l]);
                  }
                  clone() {
                    let o = Object.create(this);
                    return (o.clipBox = this.clipBox.slice()), o;
                  }
                  setCurrentPoint(o, l) {
                    (this.x = o), (this.y = l);
                  }
                  updatePathMinMax(o, l, _) {
                    ([l, _] = S.Util.applyTransform([l, _], o)),
                      (this.minX = Math.min(this.minX, l)),
                      (this.minY = Math.min(this.minY, _)),
                      (this.maxX = Math.max(this.maxX, l)),
                      (this.maxY = Math.max(this.maxY, _));
                  }
                  updateRectMinMax(o, l) {
                    let _ = S.Util.applyTransform(l, o),
                      E = S.Util.applyTransform(l.slice(2), o);
                    (this.minX = Math.min(this.minX, _[0], E[0])),
                      (this.minY = Math.min(this.minY, _[1], E[1])),
                      (this.maxX = Math.max(this.maxX, _[0], E[0])),
                      (this.maxY = Math.max(this.maxY, _[1], E[1]));
                  }
                  updateScalingPathMinMax(o, l) {
                    S.Util.scaleMinMax(o, l),
                      (this.minX = Math.min(this.minX, l[0])),
                      (this.maxX = Math.max(this.maxX, l[1])),
                      (this.minY = Math.min(this.minY, l[2])),
                      (this.maxY = Math.max(this.maxY, l[3]));
                  }
                  updateCurvePathMinMax(o, l, _, E, P, T, M, F, D, I) {
                    let O = S.Util.bezierBoundingBox(l, _, E, P, T, M, F, D);
                    if (I) {
                      (I[0] = Math.min(I[0], O[0], O[2])),
                        (I[1] = Math.max(I[1], O[0], O[2])),
                        (I[2] = Math.min(I[2], O[1], O[3])),
                        (I[3] = Math.max(I[3], O[1], O[3]));
                      return;
                    }
                    this.updateRectMinMax(o, O);
                  }
                  getPathBoundingBox(o = P.PathType.FILL, l = null) {
                    let _ = [this.minX, this.minY, this.maxX, this.maxY];
                    if (o === P.PathType.STROKE) {
                      l ||
                        (0, S.unreachable)(
                          "Stroke bounding box must include transform."
                        );
                      let o = S.Util.singularValueDecompose2dScale(l),
                        E = (o[0] * this.lineWidth) / 2,
                        P = (o[1] * this.lineWidth) / 2;
                      (_[0] -= E), (_[1] -= P), (_[2] += E), (_[3] += P);
                    }
                    return _;
                  }
                  updateClipFromPath() {
                    let o = S.Util.intersect(
                      this.clipBox,
                      this.getPathBoundingBox()
                    );
                    this.startNewPathAndClipBox(o || [0, 0, 0, 0]);
                  }
                  isEmptyClip() {
                    return this.minX === 1 / 0;
                  }
                  startNewPathAndClipBox(o) {
                    (this.clipBox = o),
                      (this.minX = 1 / 0),
                      (this.minY = 1 / 0),
                      (this.maxX = 0),
                      (this.maxY = 0);
                  }
                  getClippedPathBoundingBox(o = P.PathType.FILL, l = null) {
                    return S.Util.intersect(
                      this.clipBox,
                      this.getPathBoundingBox(o, l)
                    );
                  }
                };
                function putBinaryImageData(o, l, _ = null) {
                  let E, P, T, M, F, D, I, O;
                  if (
                    "undefined" != typeof ImageData &&
                    l instanceof ImageData
                  ) {
                    o.putImageData(l, 0, 0);
                    return;
                  }
                  let L = l.height,
                    U = l.width,
                    W = L % N,
                    H = (L - W) / N,
                    V = 0 === W ? H : H + 1,
                    z = o.createImageData(U, N),
                    $ = 0,
                    K,
                    Y = l.data,
                    J = z.data;
                  if (_)
                    switch (_.length) {
                      case 1:
                        (F = _[0]), (D = _[0]), (I = _[0]), (O = _[0]);
                        break;
                      case 4:
                        (F = _[0]), (D = _[1]), (I = _[2]), (O = _[3]);
                    }
                  if (l.kind === S.ImageKind.GRAYSCALE_1BPP) {
                    let l = Y.byteLength,
                      _ = new Uint32Array(J.buffer, 0, J.byteLength >> 2),
                      M = _.length,
                      F = (U + 7) >> 3,
                      D = 4294967295,
                      I = S.FeatureTest.isLittleEndian ? 4278190080 : 255;
                    for (
                      O && 255 === O[0] && 0 === O[255] && ([D, I] = [I, D]),
                        E = 0;
                      E < V;
                      E++
                    ) {
                      for (P = 0, T = E < H ? N : W, K = 0; P < T; P++) {
                        let o = l - $,
                          S = 0,
                          E = o > F ? U : 8 * o - 7,
                          P = -8 & E,
                          T = 0,
                          M = 0;
                        for (; S < P; S += 8)
                          (M = Y[$++]),
                            (_[K++] = 128 & M ? D : I),
                            (_[K++] = 64 & M ? D : I),
                            (_[K++] = 32 & M ? D : I),
                            (_[K++] = 16 & M ? D : I),
                            (_[K++] = 8 & M ? D : I),
                            (_[K++] = 4 & M ? D : I),
                            (_[K++] = 2 & M ? D : I),
                            (_[K++] = 1 & M ? D : I);
                        for (; S < E; S++)
                          0 === T && ((M = Y[$++]), (T = 128)),
                            (_[K++] = M & T ? D : I),
                            (T >>= 1);
                      }
                      for (; K < M; ) _[K++] = 0;
                      o.putImageData(z, 0, E * N);
                    }
                  } else if (l.kind === S.ImageKind.RGBA_32BPP) {
                    let l = !!(F || D || I);
                    for (E = 0, P = 0, M = U * N * 4; E < H; E++) {
                      if ((J.set(Y.subarray($, $ + M)), ($ += M), l))
                        for (let o = 0; o < M; o += 4)
                          F && (J[o + 0] = F[J[o + 0]]),
                            D && (J[o + 1] = D[J[o + 1]]),
                            I && (J[o + 2] = I[J[o + 2]]);
                      o.putImageData(z, 0, P), (P += N);
                    }
                    if (E < V) {
                      if (((M = U * W * 4), J.set(Y.subarray($, $ + M)), l))
                        for (let o = 0; o < M; o += 4)
                          F && (J[o + 0] = F[J[o + 0]]),
                            D && (J[o + 1] = D[J[o + 1]]),
                            I && (J[o + 2] = I[J[o + 2]]);
                      o.putImageData(z, 0, P);
                    }
                  } else if (l.kind === S.ImageKind.RGB_24BPP) {
                    let l = !!(F || D || I);
                    for (E = 0, M = U * (T = N); E < V; E++) {
                      for (E >= H && (M = U * (T = W)), K = 0, P = M; P--; )
                        (J[K++] = Y[$++]),
                          (J[K++] = Y[$++]),
                          (J[K++] = Y[$++]),
                          (J[K++] = 255);
                      if (l)
                        for (let o = 0; o < K; o += 4)
                          F && (J[o + 0] = F[J[o + 0]]),
                            D && (J[o + 1] = D[J[o + 1]]),
                            I && (J[o + 2] = I[J[o + 2]]);
                      o.putImageData(z, 0, E * N);
                    }
                  } else throw Error(`bad image kind: ${l.kind}`);
                }
                function putBinaryImageMask(o, l) {
                  if (l.bitmap) {
                    o.drawImage(l.bitmap, 0, 0);
                    return;
                  }
                  let _ = l.height,
                    S = l.width,
                    E = _ % N,
                    P = (_ - E) / N,
                    M = 0 === E ? P : P + 1,
                    F = o.createImageData(S, N),
                    D = 0,
                    I = l.data,
                    O = F.data;
                  for (let l = 0; l < M; l++) {
                    let _ = l < P ? N : E;
                    ({ srcPos: D } = (0, T.applyMaskImageData)({
                      src: I,
                      srcPos: D,
                      dest: O,
                      width: S,
                      height: _,
                    })),
                      o.putImageData(F, 0, l * N);
                  }
                }
                function copyCtxState(o, l) {
                  let _ = [
                    "strokeStyle",
                    "fillStyle",
                    "fillRule",
                    "globalAlpha",
                    "lineWidth",
                    "lineCap",
                    "lineJoin",
                    "miterLimit",
                    "globalCompositeOperation",
                    "font",
                  ];
                  for (let S of _) void 0 !== o[S] && (l[S] = o[S]);
                  void 0 !== o.setLineDash &&
                    (l.setLineDash(o.getLineDash()),
                    (l.lineDashOffset = o.lineDashOffset));
                }
                function resetCtxToDefault(o, l) {
                  (o.strokeStyle = o.fillStyle = l || "#000000"),
                    (o.fillRule = "nonzero"),
                    (o.globalAlpha = 1),
                    (o.lineWidth = 1),
                    (o.lineCap = "butt"),
                    (o.lineJoin = "miter"),
                    (o.miterLimit = 10),
                    (o.globalCompositeOperation = "source-over"),
                    (o.font = "10px sans-serif"),
                    void 0 !== o.setLineDash &&
                      (o.setLineDash([]), (o.lineDashOffset = 0));
                }
                function composeSMaskBackdrop(o, l, _, S) {
                  let E = o.length;
                  for (let P = 3; P < E; P += 4) {
                    let E = o[P];
                    if (0 === E) (o[P - 3] = l), (o[P - 2] = _), (o[P - 1] = S);
                    else if (E < 255) {
                      let T = 255 - E;
                      (o[P - 3] = (o[P - 3] * E + l * T) >> 8),
                        (o[P - 2] = (o[P - 2] * E + _ * T) >> 8),
                        (o[P - 1] = (o[P - 1] * E + S * T) >> 8);
                    }
                  }
                }
                function composeSMaskAlpha(o, l, _) {
                  let S = o.length,
                    E = 1 / 255;
                  for (let P = 3; P < S; P += 4) {
                    let S = _ ? _[o[P]] : o[P];
                    l[P] = (l[P] * S * E) | 0;
                  }
                }
                function composeSMaskLuminosity(o, l, _) {
                  let S = o.length;
                  for (let E = 3; E < S; E += 4) {
                    let S = 77 * o[E - 3] + 152 * o[E - 2] + 28 * o[E - 1];
                    l[E] = _ ? (l[E] * _[S >> 8]) >> 8 : (l[E] * S) >> 16;
                  }
                }
                function genericComposeSMask(o, l, _, S, E, P, T, M, F, D, I) {
                  let O;
                  let L = !!P,
                    N = L ? P[0] : 0,
                    U = L ? P[1] : 0,
                    W = L ? P[2] : 0;
                  O =
                    "Luminosity" === E
                      ? composeSMaskLuminosity
                      : composeSMaskAlpha;
                  let H = 1048576,
                    V = Math.min(S, Math.ceil(H / _));
                  for (let E = 0; E < S; E += V) {
                    let P = Math.min(V, S - E),
                      H = o.getImageData(M - D, E + (F - I), _, P),
                      z = l.getImageData(M, E + F, _, P);
                    L && composeSMaskBackdrop(H.data, N, U, W),
                      O(H.data, z.data, T),
                      l.putImageData(z, M, E + F);
                  }
                }
                function composeSMask(o, l, _, S) {
                  let E = S[0],
                    P = S[1],
                    T = S[2] - E,
                    M = S[3] - P;
                  0 !== T &&
                    0 !== M &&
                    (genericComposeSMask(
                      l.context,
                      _,
                      T,
                      M,
                      l.subtype,
                      l.backdrop,
                      l.transferMap,
                      E,
                      P,
                      l.offsetX,
                      l.offsetY
                    ),
                    o.save(),
                    (o.globalAlpha = 1),
                    (o.globalCompositeOperation = "source-over"),
                    o.setTransform(1, 0, 0, 1, 0, 0),
                    o.drawImage(_.canvas, 0, 0),
                    o.restore());
                }
                function getImageSmoothingEnabled(o, l) {
                  let _ = S.Util.singularValueDecompose2dScale(o);
                  (_[0] = Math.fround(_[0])), (_[1] = Math.fround(_[1]));
                  let P = Math.fround(
                    (globalThis.devicePixelRatio || 1) *
                      E.PixelsPerInch.PDF_TO_CSS_UNITS
                  );
                  return void 0 !== l ? l : _[0] <= P || _[1] <= P;
                }
                let U = ["butt", "round", "square"],
                  W = ["miter", "round", "bevel"],
                  H = {},
                  V = {};
                let CanvasGraphics = class CanvasGraphics {
                  constructor(
                    o,
                    l,
                    _,
                    S,
                    { optionalContentConfig: E, markedContentStack: P = null },
                    T,
                    M
                  ) {
                    (this.ctx = o),
                      (this.current = new CanvasExtraState(
                        this.ctx.canvas.width,
                        this.ctx.canvas.height
                      )),
                      (this.stateStack = []),
                      (this.pendingClip = null),
                      (this.pendingEOFill = !1),
                      (this.res = null),
                      (this.xobjs = null),
                      (this.commonObjs = l),
                      (this.objs = _),
                      (this.canvasFactory = S),
                      (this.groupStack = []),
                      (this.processingType3 = null),
                      (this.baseTransform = null),
                      (this.baseTransformStack = []),
                      (this.groupLevel = 0),
                      (this.smaskStack = []),
                      (this.smaskCounter = 0),
                      (this.tempSMask = null),
                      (this.suspendedCtx = null),
                      (this.contentVisible = !0),
                      (this.markedContentStack = P || []),
                      (this.optionalContentConfig = E),
                      (this.cachedCanvases = new CachedCanvases(
                        this.canvasFactory
                      )),
                      (this.cachedPatterns = new Map()),
                      (this.annotationCanvasMap = T),
                      (this.viewportScale = 1),
                      (this.outputScaleX = 1),
                      (this.outputScaleY = 1),
                      (this.backgroundColor = M?.background || null),
                      (this.foregroundColor = M?.foreground || null),
                      (this._cachedScaleForStroking = null),
                      (this._cachedGetSinglePixelWidth = null),
                      (this._cachedBitmapsMap = new Map());
                  }
                  getObject(o, l = null) {
                    return "string" == typeof o
                      ? o.startsWith("g_")
                        ? this.commonObjs.get(o)
                        : this.objs.get(o)
                      : l;
                  }
                  beginDrawing({
                    transform: o,
                    viewport: l,
                    transparency: _ = !1,
                    background: S = null,
                  }) {
                    let P = this.ctx.canvas.width,
                      T = this.ctx.canvas.height,
                      M = S || "#ffffff";
                    if (
                      (this.ctx.save(),
                      this.foregroundColor && this.backgroundColor)
                    ) {
                      this.ctx.fillStyle = this.foregroundColor;
                      let o = (this.foregroundColor = this.ctx.fillStyle);
                      this.ctx.fillStyle = this.backgroundColor;
                      let l = (this.backgroundColor = this.ctx.fillStyle),
                        _ = !0,
                        S = M;
                      if (
                        ((this.ctx.fillStyle = M),
                        (_ =
                          "string" == typeof (S = this.ctx.fillStyle) &&
                          /^#[0-9A-Fa-f]{6}$/.test(S)),
                        ("#000000" !== o || "#ffffff" !== l) && o !== l && _)
                      ) {
                        let [_, P, T] = (0, E.getRGB)(S),
                          newComp = (o) =>
                            (o /= 255) <= 0.03928
                              ? o / 12.92
                              : ((o + 0.055) / 1.055) ** 2.4,
                          M = Math.round(
                            0.2126 * newComp(_) +
                              0.7152 * newComp(P) +
                              0.0722 * newComp(T)
                          );
                        this.selectColor = (_, S, E) => {
                          let P =
                            0.2126 * newComp(_) +
                            0.7152 * newComp(S) +
                            0.0722 * newComp(E);
                          return Math.round(P) === M ? l : o;
                        };
                      } else this.foregroundColor = this.backgroundColor = null;
                    }
                    if (
                      ((this.ctx.fillStyle = this.backgroundColor || M),
                      this.ctx.fillRect(0, 0, P, T),
                      this.ctx.restore(),
                      _)
                    ) {
                      let o = this.cachedCanvases.getCanvas(
                        "transparent",
                        P,
                        T
                      );
                      (this.compositeCtx = this.ctx),
                        (this.transparentCanvas = o.canvas),
                        (this.ctx = o.context),
                        this.ctx.save(),
                        this.ctx.transform(
                          ...(0, E.getCurrentTransform)(this.compositeCtx)
                        );
                    }
                    this.ctx.save(),
                      resetCtxToDefault(this.ctx, this.foregroundColor),
                      o &&
                        (this.ctx.transform(...o),
                        (this.outputScaleX = o[0]),
                        (this.outputScaleY = o[0])),
                      this.ctx.transform(...l.transform),
                      (this.viewportScale = l.scale),
                      (this.baseTransform = (0, E.getCurrentTransform)(
                        this.ctx
                      ));
                  }
                  executeOperatorList(o, l, _, E) {
                    let P;
                    let T = o.argsArray,
                      M = o.fnArray,
                      F = l || 0,
                      D = T.length;
                    if (D === F) return F;
                    let L = D - F > O && "function" == typeof _,
                      N = L ? Date.now() + I : 0,
                      U = 0,
                      W = this.commonObjs,
                      H = this.objs;
                    for (;;) {
                      if (void 0 !== E && F === E.nextBreakPoint)
                        return E.breakIt(F, _), F;
                      if ((P = M[F]) !== S.OPS.dependency)
                        this[P].apply(this, T[F]);
                      else
                        for (let o of T[F]) {
                          let l = o.startsWith("g_") ? W : H;
                          if (!l.has(o)) return l.get(o, _), F;
                        }
                      if (++F === D) return F;
                      if (L && ++U > O) {
                        if (Date.now() > N) return _(), F;
                        U = 0;
                      }
                    }
                  }
                  #th() {
                    for (; this.stateStack.length || this.inSMaskMode; )
                      this.restore();
                    this.ctx.restore(),
                      this.transparentCanvas &&
                        ((this.ctx = this.compositeCtx),
                        this.ctx.save(),
                        this.ctx.setTransform(1, 0, 0, 1, 0, 0),
                        this.ctx.drawImage(this.transparentCanvas, 0, 0),
                        this.ctx.restore(),
                        (this.transparentCanvas = null));
                  }
                  endDrawing() {
                    for (let o of (this.#th(),
                    this.cachedCanvases.clear(),
                    this.cachedPatterns.clear(),
                    this._cachedBitmapsMap.values())) {
                      for (let l of o.values())
                        "undefined" != typeof HTMLCanvasElement &&
                          l instanceof HTMLCanvasElement &&
                          (l.width = l.height = 0);
                      o.clear();
                    }
                    this._cachedBitmapsMap.clear();
                  }
                  _scaleImage(o, l) {
                    let _, S;
                    let E = o.width,
                      P = o.height,
                      T = Math.max(Math.hypot(l[0], l[1]), 1),
                      M = Math.max(Math.hypot(l[2], l[3]), 1),
                      F = E,
                      D = P,
                      I = "prescale1";
                    for (; (T > 2 && F > 1) || (M > 2 && D > 1); ) {
                      let l = F,
                        E = D;
                      T > 2 && F > 1 && ((l = Math.ceil(F / 2)), (T /= F / l)),
                        M > 2 &&
                          D > 1 &&
                          ((E = Math.ceil(D / 2)), (M /= D / E)),
                        (S = (_ = this.cachedCanvases.getCanvas(I, l, E))
                          .context).clearRect(0, 0, l, E),
                        S.drawImage(o, 0, 0, F, D, 0, 0, l, E),
                        (o = _.canvas),
                        (F = l),
                        (D = E),
                        (I = "prescale1" === I ? "prescale2" : "prescale1");
                    }
                    return { img: o, paintWidth: F, paintHeight: D };
                  }
                  _createMaskCanvas(o) {
                    let l, _, T, M;
                    let F = this.ctx,
                      { width: D, height: I } = o,
                      O = this.current.fillColor,
                      L = this.current.patternFill,
                      N = (0, E.getCurrentTransform)(F);
                    if ((o.bitmap || o.data) && o.count > 1) {
                      let S = o.bitmap || o.data.buffer;
                      (_ = JSON.stringify(L ? N : [N.slice(0, 4), O])),
                        (l = this._cachedBitmapsMap.get(S)) ||
                          ((l = new Map()), this._cachedBitmapsMap.set(S, l));
                      let E = l.get(_);
                      if (E && !L) {
                        let o = Math.round(Math.min(N[0], N[2]) + N[4]),
                          l = Math.round(Math.min(N[1], N[3]) + N[5]);
                        return { canvas: E, offsetX: o, offsetY: l };
                      }
                      T = E;
                    }
                    T ||
                      putBinaryImageMask(
                        (M = this.cachedCanvases.getCanvas("maskCanvas", D, I))
                          .context,
                        o
                      );
                    let U = S.Util.transform(N, [1 / D, 0, 0, -1 / I, 0, 0]);
                    U = S.Util.transform(U, [1, 0, 0, 1, 0, -I]);
                    let W = S.Util.applyTransform([0, 0], U),
                      H = S.Util.applyTransform([D, I], U),
                      V = S.Util.normalizeRect([W[0], W[1], H[0], H[1]]),
                      z = Math.round(V[2] - V[0]) || 1,
                      $ = Math.round(V[3] - V[1]) || 1,
                      K = this.cachedCanvases.getCanvas("fillCanvas", z, $),
                      Y = K.context,
                      J = Math.min(W[0], H[0]),
                      Q = Math.min(W[1], H[1]);
                    Y.translate(-J, -Q),
                      Y.transform(...U),
                      !T &&
                        ((T = (T = this._scaleImage(
                          M.canvas,
                          (0, E.getCurrentTransformInverse)(Y)
                        )).img),
                        l && L && l.set(_, T)),
                      (Y.imageSmoothingEnabled = getImageSmoothingEnabled(
                        (0, E.getCurrentTransform)(Y),
                        o.interpolate
                      )),
                      drawImageAtIntegerCoords(
                        Y,
                        T,
                        0,
                        0,
                        T.width,
                        T.height,
                        0,
                        0,
                        D,
                        I
                      ),
                      (Y.globalCompositeOperation = "source-in");
                    let Z = S.Util.transform(
                      (0, E.getCurrentTransformInverse)(Y),
                      [1, 0, 0, 1, -J, -Q]
                    );
                    return (
                      (Y.fillStyle = L
                        ? O.getPattern(F, this, Z, P.PathType.FILL)
                        : O),
                      Y.fillRect(0, 0, D, I),
                      l &&
                        !L &&
                        (this.cachedCanvases.delete("fillCanvas"),
                        l.set(_, K.canvas)),
                      {
                        canvas: K.canvas,
                        offsetX: Math.round(J),
                        offsetY: Math.round(Q),
                      }
                    );
                  }
                  setLineWidth(o) {
                    o !== this.current.lineWidth &&
                      (this._cachedScaleForStroking = null),
                      (this.current.lineWidth = o),
                      (this.ctx.lineWidth = o);
                  }
                  setLineCap(o) {
                    this.ctx.lineCap = U[o];
                  }
                  setLineJoin(o) {
                    this.ctx.lineJoin = W[o];
                  }
                  setMiterLimit(o) {
                    this.ctx.miterLimit = o;
                  }
                  setDash(o, l) {
                    let _ = this.ctx;
                    void 0 !== _.setLineDash &&
                      (_.setLineDash(o), (_.lineDashOffset = l));
                  }
                  setRenderingIntent(o) {}
                  setFlatness(o) {}
                  setGState(o) {
                    for (let [l, _] of o)
                      switch (l) {
                        case "LW":
                          this.setLineWidth(_);
                          break;
                        case "LC":
                          this.setLineCap(_);
                          break;
                        case "LJ":
                          this.setLineJoin(_);
                          break;
                        case "ML":
                          this.setMiterLimit(_);
                          break;
                        case "D":
                          this.setDash(_[0], _[1]);
                          break;
                        case "RI":
                          this.setRenderingIntent(_);
                          break;
                        case "FL":
                          this.setFlatness(_);
                          break;
                        case "Font":
                          this.setFont(_[0], _[1]);
                          break;
                        case "CA":
                          this.current.strokeAlpha = _;
                          break;
                        case "ca":
                          (this.current.fillAlpha = _),
                            (this.ctx.globalAlpha = _);
                          break;
                        case "BM":
                          this.ctx.globalCompositeOperation = _;
                          break;
                        case "SMask":
                          (this.current.activeSMask = _
                            ? this.tempSMask
                            : null),
                            (this.tempSMask = null),
                            this.checkSMaskState();
                          break;
                        case "TR":
                          this.current.transferMaps = _;
                      }
                  }
                  get inSMaskMode() {
                    return !!this.suspendedCtx;
                  }
                  checkSMaskState() {
                    let o = this.inSMaskMode;
                    this.current.activeSMask && !o
                      ? this.beginSMaskMode()
                      : !this.current.activeSMask && o && this.endSMaskMode();
                  }
                  beginSMaskMode() {
                    if (this.inSMaskMode)
                      throw Error(
                        "beginSMaskMode called while already in smask mode"
                      );
                    let o = this.ctx.canvas.width,
                      l = this.ctx.canvas.height,
                      _ = "smaskGroupAt" + this.groupLevel,
                      S = this.cachedCanvases.getCanvas(_, o, l);
                    (this.suspendedCtx = this.ctx), (this.ctx = S.context);
                    let P = this.ctx;
                    P.setTransform(
                      ...(0, E.getCurrentTransform)(this.suspendedCtx)
                    ),
                      copyCtxState(this.suspendedCtx, P),
                      mirrorContextOperations(P, this.suspendedCtx),
                      this.setGState([
                        ["BM", "source-over"],
                        ["ca", 1],
                        ["CA", 1],
                      ]);
                  }
                  endSMaskMode() {
                    if (!this.inSMaskMode)
                      throw Error(
                        "endSMaskMode called while not in smask mode"
                      );
                    this.ctx._removeMirroring(),
                      copyCtxState(this.ctx, this.suspendedCtx),
                      (this.ctx = this.suspendedCtx),
                      (this.suspendedCtx = null);
                  }
                  compose(o) {
                    if (!this.current.activeSMask) return;
                    o
                      ? ((o[0] = Math.floor(o[0])),
                        (o[1] = Math.floor(o[1])),
                        (o[2] = Math.ceil(o[2])),
                        (o[3] = Math.ceil(o[3])))
                      : (o = [
                          0,
                          0,
                          this.ctx.canvas.width,
                          this.ctx.canvas.height,
                        ]);
                    let l = this.current.activeSMask,
                      _ = this.suspendedCtx;
                    composeSMask(_, l, this.ctx, o),
                      this.ctx.save(),
                      this.ctx.setTransform(1, 0, 0, 1, 0, 0),
                      this.ctx.clearRect(
                        0,
                        0,
                        this.ctx.canvas.width,
                        this.ctx.canvas.height
                      ),
                      this.ctx.restore();
                  }
                  save() {
                    this.inSMaskMode
                      ? (copyCtxState(this.ctx, this.suspendedCtx),
                        this.suspendedCtx.save())
                      : this.ctx.save();
                    let o = this.current;
                    this.stateStack.push(o), (this.current = o.clone());
                  }
                  restore() {
                    0 === this.stateStack.length &&
                      this.inSMaskMode &&
                      this.endSMaskMode(),
                      0 !== this.stateStack.length &&
                        ((this.current = this.stateStack.pop()),
                        this.inSMaskMode
                          ? (this.suspendedCtx.restore(),
                            copyCtxState(this.suspendedCtx, this.ctx))
                          : this.ctx.restore(),
                        this.checkSMaskState(),
                        (this.pendingClip = null),
                        (this._cachedScaleForStroking = null),
                        (this._cachedGetSinglePixelWidth = null));
                  }
                  transform(o, l, _, S, E, P) {
                    this.ctx.transform(o, l, _, S, E, P),
                      (this._cachedScaleForStroking = null),
                      (this._cachedGetSinglePixelWidth = null);
                  }
                  constructPath(o, l, _) {
                    let P, T;
                    let M = this.ctx,
                      F = this.current,
                      D = F.x,
                      I = F.y,
                      O = (0, E.getCurrentTransform)(M),
                      L =
                        (0 === O[0] && 0 === O[3]) ||
                        (0 === O[1] && 0 === O[2]),
                      N = L ? _.slice(0) : null;
                    for (let _ = 0, E = 0, U = o.length; _ < U; _++)
                      switch (0 | o[_]) {
                        case S.OPS.rectangle:
                          (D = l[E++]), (I = l[E++]);
                          let U = l[E++],
                            W = l[E++],
                            H = D + U,
                            V = I + W;
                          M.moveTo(D, I),
                            0 === U || 0 === W
                              ? M.lineTo(H, V)
                              : (M.lineTo(H, I),
                                M.lineTo(H, V),
                                M.lineTo(D, V)),
                            L || F.updateRectMinMax(O, [D, I, H, V]),
                            M.closePath();
                          break;
                        case S.OPS.moveTo:
                          (D = l[E++]),
                            (I = l[E++]),
                            M.moveTo(D, I),
                            L || F.updatePathMinMax(O, D, I);
                          break;
                        case S.OPS.lineTo:
                          (D = l[E++]),
                            (I = l[E++]),
                            M.lineTo(D, I),
                            L || F.updatePathMinMax(O, D, I);
                          break;
                        case S.OPS.curveTo:
                          (P = D),
                            (T = I),
                            (D = l[E + 4]),
                            (I = l[E + 5]),
                            M.bezierCurveTo(
                              l[E],
                              l[E + 1],
                              l[E + 2],
                              l[E + 3],
                              D,
                              I
                            ),
                            F.updateCurvePathMinMax(
                              O,
                              P,
                              T,
                              l[E],
                              l[E + 1],
                              l[E + 2],
                              l[E + 3],
                              D,
                              I,
                              N
                            ),
                            (E += 6);
                          break;
                        case S.OPS.curveTo2:
                          (P = D),
                            (T = I),
                            M.bezierCurveTo(
                              D,
                              I,
                              l[E],
                              l[E + 1],
                              l[E + 2],
                              l[E + 3]
                            ),
                            F.updateCurvePathMinMax(
                              O,
                              P,
                              T,
                              D,
                              I,
                              l[E],
                              l[E + 1],
                              l[E + 2],
                              l[E + 3],
                              N
                            ),
                            (D = l[E + 2]),
                            (I = l[E + 3]),
                            (E += 4);
                          break;
                        case S.OPS.curveTo3:
                          (P = D),
                            (T = I),
                            (D = l[E + 2]),
                            (I = l[E + 3]),
                            M.bezierCurveTo(l[E], l[E + 1], D, I, D, I),
                            F.updateCurvePathMinMax(
                              O,
                              P,
                              T,
                              l[E],
                              l[E + 1],
                              D,
                              I,
                              D,
                              I,
                              N
                            ),
                            (E += 4);
                          break;
                        case S.OPS.closePath:
                          M.closePath();
                      }
                    L && F.updateScalingPathMinMax(O, N),
                      F.setCurrentPoint(D, I);
                  }
                  closePath() {
                    this.ctx.closePath();
                  }
                  stroke(o = !0) {
                    let l = this.ctx,
                      _ = this.current.strokeColor;
                    (l.globalAlpha = this.current.strokeAlpha),
                      this.contentVisible &&
                        ("object" == typeof _ && _?.getPattern
                          ? (l.save(),
                            (l.strokeStyle = _.getPattern(
                              l,
                              this,
                              (0, E.getCurrentTransformInverse)(l),
                              P.PathType.STROKE
                            )),
                            this.rescaleAndStroke(!1),
                            l.restore())
                          : this.rescaleAndStroke(!0)),
                      o &&
                        this.consumePath(
                          this.current.getClippedPathBoundingBox()
                        ),
                      (l.globalAlpha = this.current.fillAlpha);
                  }
                  closeStroke() {
                    this.closePath(), this.stroke();
                  }
                  fill(o = !0) {
                    let l = this.ctx,
                      _ = this.current.fillColor,
                      S = this.current.patternFill,
                      T = !1;
                    S &&
                      (l.save(),
                      (l.fillStyle = _.getPattern(
                        l,
                        this,
                        (0, E.getCurrentTransformInverse)(l),
                        P.PathType.FILL
                      )),
                      (T = !0));
                    let M = this.current.getClippedPathBoundingBox();
                    this.contentVisible &&
                      null !== M &&
                      (this.pendingEOFill
                        ? (l.fill("evenodd"), (this.pendingEOFill = !1))
                        : l.fill()),
                      T && l.restore(),
                      o && this.consumePath(M);
                  }
                  eoFill() {
                    (this.pendingEOFill = !0), this.fill();
                  }
                  fillStroke() {
                    this.fill(!1), this.stroke(!1), this.consumePath();
                  }
                  eoFillStroke() {
                    (this.pendingEOFill = !0), this.fillStroke();
                  }
                  closeFillStroke() {
                    this.closePath(), this.fillStroke();
                  }
                  closeEOFillStroke() {
                    (this.pendingEOFill = !0),
                      this.closePath(),
                      this.fillStroke();
                  }
                  endPath() {
                    this.consumePath();
                  }
                  clip() {
                    this.pendingClip = H;
                  }
                  eoClip() {
                    this.pendingClip = V;
                  }
                  beginText() {
                    (this.current.textMatrix = S.IDENTITY_MATRIX),
                      (this.current.textMatrixScale = 1),
                      (this.current.x = this.current.lineX = 0),
                      (this.current.y = this.current.lineY = 0);
                  }
                  endText() {
                    let o = this.pendingTextPaths,
                      l = this.ctx;
                    if (void 0 === o) {
                      l.beginPath();
                      return;
                    }
                    for (let _ of (l.save(), l.beginPath(), o))
                      l.setTransform(..._.transform),
                        l.translate(_.x, _.y),
                        _.addToPath(l, _.fontSize);
                    l.restore(),
                      l.clip(),
                      l.beginPath(),
                      delete this.pendingTextPaths;
                  }
                  setCharSpacing(o) {
                    this.current.charSpacing = o;
                  }
                  setWordSpacing(o) {
                    this.current.wordSpacing = o;
                  }
                  setHScale(o) {
                    this.current.textHScale = o / 100;
                  }
                  setLeading(o) {
                    this.current.leading = -o;
                  }
                  setFont(o, l) {
                    let _ = this.commonObjs.get(o),
                      E = this.current;
                    if (!_) throw Error(`Can't find font for ${o}`);
                    if (
                      ((E.fontMatrix = _.fontMatrix || S.FONT_IDENTITY_MATRIX),
                      (0 === E.fontMatrix[0] || 0 === E.fontMatrix[3]) &&
                        (0, S.warn)("Invalid font matrix for font " + o),
                      l < 0
                        ? ((l = -l), (E.fontDirection = -1))
                        : (E.fontDirection = 1),
                      (this.current.font = _),
                      (this.current.fontSize = l),
                      _.isType3Font)
                    )
                      return;
                    let P = _.loadedName || "sans-serif",
                      T = "normal";
                    _.black ? (T = "900") : _.bold && (T = "bold");
                    let D = _.italic ? "italic" : "normal",
                      I = `"${P}", ${_.fallbackName}`,
                      O = l;
                    l < M ? (O = M) : l > F && (O = F),
                      (this.current.fontSizeScale = l / O),
                      (this.ctx.font = `${D} ${T} ${O}px ${I}`);
                  }
                  setTextRenderingMode(o) {
                    this.current.textRenderingMode = o;
                  }
                  setTextRise(o) {
                    this.current.textRise = o;
                  }
                  moveText(o, l) {
                    (this.current.x = this.current.lineX += o),
                      (this.current.y = this.current.lineY += l);
                  }
                  setLeadingMoveText(o, l) {
                    this.setLeading(-l), this.moveText(o, l);
                  }
                  setTextMatrix(o, l, _, S, E, P) {
                    (this.current.textMatrix = [o, l, _, S, E, P]),
                      (this.current.textMatrixScale = Math.hypot(o, l)),
                      (this.current.x = this.current.lineX = 0),
                      (this.current.y = this.current.lineY = 0);
                  }
                  nextLine() {
                    this.moveText(0, this.current.leading);
                  }
                  paintChar(o, l, _, P) {
                    let T;
                    let M = this.ctx,
                      F = this.current,
                      D = F.font,
                      I = F.textRenderingMode,
                      O = F.fontSize / F.fontSizeScale,
                      L = I & S.TextRenderingMode.FILL_STROKE_MASK,
                      N = !!(I & S.TextRenderingMode.ADD_TO_PATH_FLAG),
                      U = F.patternFill && !D.missingFile;
                    if (
                      ((D.disableFontFace || N || U) &&
                        (T = D.getPathGenerator(this.commonObjs, o)),
                      D.disableFontFace || U
                        ? (M.save(),
                          M.translate(l, _),
                          M.beginPath(),
                          T(M, O),
                          P && M.setTransform(...P),
                          (L === S.TextRenderingMode.FILL ||
                            L === S.TextRenderingMode.FILL_STROKE) &&
                            M.fill(),
                          (L === S.TextRenderingMode.STROKE ||
                            L === S.TextRenderingMode.FILL_STROKE) &&
                            M.stroke(),
                          M.restore())
                        : ((L === S.TextRenderingMode.FILL ||
                            L === S.TextRenderingMode.FILL_STROKE) &&
                            M.fillText(o, l, _),
                          (L === S.TextRenderingMode.STROKE ||
                            L === S.TextRenderingMode.FILL_STROKE) &&
                            M.strokeText(o, l, _)),
                      N)
                    ) {
                      let o =
                        this.pendingTextPaths || (this.pendingTextPaths = []);
                      o.push({
                        transform: (0, E.getCurrentTransform)(M),
                        x: l,
                        y: _,
                        fontSize: O,
                        addToPath: T,
                      });
                    }
                  }
                  get isFontSubpixelAAEnabled() {
                    let { context: o } = this.cachedCanvases.getCanvas(
                      "isFontSubpixelAAEnabled",
                      10,
                      10
                    );
                    o.scale(1.5, 1), o.fillText("I", 0, 10);
                    let l = o.getImageData(0, 0, 10, 10).data,
                      _ = !1;
                    for (let o = 3; o < l.length; o += 4)
                      if (l[o] > 0 && l[o] < 255) {
                        _ = !0;
                        break;
                      }
                    return (0, S.shadow)(this, "isFontSubpixelAAEnabled", _);
                  }
                  showText(o) {
                    let l;
                    let _ = this.current,
                      T = _.font;
                    if (T.isType3Font) return this.showType3Text(o);
                    let M = _.fontSize;
                    if (0 === M) return;
                    let F = this.ctx,
                      D = _.fontSizeScale,
                      I = _.charSpacing,
                      O = _.wordSpacing,
                      L = _.fontDirection,
                      N = _.textHScale * L,
                      U = o.length,
                      W = T.vertical,
                      H = W ? 1 : -1,
                      V = T.defaultVMetrics,
                      z = M * _.fontMatrix[0],
                      $ =
                        _.textRenderingMode === S.TextRenderingMode.FILL &&
                        !T.disableFontFace &&
                        !_.patternFill;
                    if (
                      (F.save(),
                      F.transform(..._.textMatrix),
                      F.translate(_.x, _.y + _.textRise),
                      L > 0 ? F.scale(N, -1) : F.scale(N, 1),
                      _.patternFill)
                    ) {
                      F.save();
                      let o = _.fillColor.getPattern(
                        F,
                        this,
                        (0, E.getCurrentTransformInverse)(F),
                        P.PathType.FILL
                      );
                      (l = (0, E.getCurrentTransform)(F)),
                        F.restore(),
                        (F.fillStyle = o);
                    }
                    let K = _.lineWidth,
                      Y = _.textMatrixScale;
                    if (0 === Y || 0 === K) {
                      let o =
                        _.textRenderingMode &
                        S.TextRenderingMode.FILL_STROKE_MASK;
                      (o === S.TextRenderingMode.STROKE ||
                        o === S.TextRenderingMode.FILL_STROKE) &&
                        (K = this.getSinglePixelWidth());
                    } else K /= Y;
                    if (
                      (1 !== D && (F.scale(D, D), (K /= D)),
                      (F.lineWidth = K),
                      T.isInvalidPDFjsFont)
                    ) {
                      let l = [],
                        S = 0;
                      for (let _ of o) l.push(_.unicode), (S += _.width);
                      F.fillText(l.join(""), 0, 0),
                        (_.x += S * z * N),
                        F.restore(),
                        this.compose();
                      return;
                    }
                    let J = 0,
                      Q;
                    for (Q = 0; Q < U; ++Q) {
                      let _, S, E;
                      let P = o[Q];
                      if ("number" == typeof P) {
                        J += (H * P * M) / 1e3;
                        continue;
                      }
                      let N = !1,
                        U = (P.isSpace ? O : 0) + I,
                        K = P.fontChar,
                        Y = P.accent,
                        Z = P.width;
                      if (W) {
                        let o = P.vmetric || V,
                          l = -(P.vmetric ? o[1] : 0.5 * Z) * z,
                          E = o[2] * z;
                        (Z = o ? -o[0] : Z), (_ = l / D), (S = (J + E) / D);
                      } else (_ = J / D), (S = 0);
                      if (T.remeasure && Z > 0) {
                        let o = ((1e3 * F.measureText(K).width) / M) * D;
                        if (Z < o && this.isFontSubpixelAAEnabled) {
                          let l = Z / o;
                          (N = !0), F.save(), F.scale(l, 1), (_ /= l);
                        } else Z !== o && (_ += (((Z - o) / 2e3) * M) / D);
                      }
                      if (
                        this.contentVisible &&
                        (P.isInFont || T.missingFile)
                      ) {
                        if ($ && !Y) F.fillText(K, _, S);
                        else if ((this.paintChar(K, _, S, l), Y)) {
                          let o = _ + (M * Y.offset.x) / D,
                            E = S - (M * Y.offset.y) / D;
                          this.paintChar(Y.fontChar, o, E, l);
                        }
                      }
                      (J += E = W ? Z * z - U * L : Z * z + U * L),
                        N && F.restore();
                    }
                    W ? (_.y -= J) : (_.x += J * N),
                      F.restore(),
                      this.compose();
                  }
                  showType3Text(o) {
                    let l, _, E, P;
                    let T = this.ctx,
                      M = this.current,
                      F = M.font,
                      D = M.fontSize,
                      I = M.fontDirection,
                      O = F.vertical ? 1 : -1,
                      L = M.charSpacing,
                      N = M.wordSpacing,
                      U = M.textHScale * I,
                      W = M.fontMatrix || S.FONT_IDENTITY_MATRIX,
                      H = o.length,
                      V = M.textRenderingMode === S.TextRenderingMode.INVISIBLE;
                    if (!V && 0 !== D) {
                      for (
                        this._cachedScaleForStroking = null,
                          this._cachedGetSinglePixelWidth = null,
                          T.save(),
                          T.transform(...M.textMatrix),
                          T.translate(M.x, M.y),
                          T.scale(U, I),
                          l = 0;
                        l < H;
                        ++l
                      ) {
                        if ("number" == typeof (_ = o[l])) {
                          (P = (O * _ * D) / 1e3),
                            this.ctx.translate(P, 0),
                            (M.x += P * U);
                          continue;
                        }
                        let I = (_.isSpace ? N : 0) + L,
                          H = F.charProcOperatorList[_.operatorListId];
                        if (!H) {
                          (0, S.warn)(
                            `Type3 character "${_.operatorListId}" is not available.`
                          );
                          continue;
                        }
                        this.contentVisible &&
                          ((this.processingType3 = _),
                          this.save(),
                          T.scale(D, D),
                          T.transform(...W),
                          this.executeOperatorList(H),
                          this.restore());
                        let V = S.Util.applyTransform([_.width, 0], W);
                        (E = V[0] * D + I), T.translate(E, 0), (M.x += E * U);
                      }
                      T.restore(), (this.processingType3 = null);
                    }
                  }
                  setCharWidth(o, l) {}
                  setCharWidthAndBounds(o, l, _, S, E, P) {
                    this.ctx.rect(_, S, E - _, P - S),
                      this.ctx.clip(),
                      this.endPath();
                  }
                  getColorN_Pattern(o) {
                    let l;
                    if ("TilingPattern" === o[0]) {
                      let _ = o[1],
                        S =
                          this.baseTransform ||
                          (0, E.getCurrentTransform)(this.ctx),
                        T = {
                          createCanvasGraphics: (o) =>
                            new CanvasGraphics(
                              o,
                              this.commonObjs,
                              this.objs,
                              this.canvasFactory,
                              {
                                optionalContentConfig:
                                  this.optionalContentConfig,
                                markedContentStack: this.markedContentStack,
                              }
                            ),
                        };
                      l = new P.TilingPattern(o, _, this.ctx, T, S);
                    } else l = this._getPattern(o[1], o[2]);
                    return l;
                  }
                  setStrokeColorN() {
                    this.current.strokeColor =
                      this.getColorN_Pattern(arguments);
                  }
                  setFillColorN() {
                    (this.current.fillColor =
                      this.getColorN_Pattern(arguments)),
                      (this.current.patternFill = !0);
                  }
                  setStrokeRGBColor(o, l, _) {
                    let E =
                      this.selectColor?.(o, l, _) ||
                      S.Util.makeHexColor(o, l, _);
                    (this.ctx.strokeStyle = E), (this.current.strokeColor = E);
                  }
                  setFillRGBColor(o, l, _) {
                    let E =
                      this.selectColor?.(o, l, _) ||
                      S.Util.makeHexColor(o, l, _);
                    (this.ctx.fillStyle = E),
                      (this.current.fillColor = E),
                      (this.current.patternFill = !1);
                  }
                  _getPattern(o, l = null) {
                    let _;
                    return (
                      this.cachedPatterns.has(o)
                        ? (_ = this.cachedPatterns.get(o))
                        : ((_ = (0, P.getShadingPattern)(this.objs.get(o))),
                          this.cachedPatterns.set(o, _)),
                      l && (_.matrix = l),
                      _
                    );
                  }
                  shadingFill(o) {
                    if (!this.contentVisible) return;
                    let l = this.ctx;
                    this.save();
                    let _ = this._getPattern(o);
                    l.fillStyle = _.getPattern(
                      l,
                      this,
                      (0, E.getCurrentTransformInverse)(l),
                      P.PathType.SHADING
                    );
                    let T = (0, E.getCurrentTransformInverse)(l);
                    if (T) {
                      let o = l.canvas,
                        _ = o.width,
                        E = o.height,
                        P = S.Util.applyTransform([0, 0], T),
                        M = S.Util.applyTransform([0, E], T),
                        F = S.Util.applyTransform([_, 0], T),
                        D = S.Util.applyTransform([_, E], T),
                        I = Math.min(P[0], M[0], F[0], D[0]),
                        O = Math.min(P[1], M[1], F[1], D[1]),
                        L = Math.max(P[0], M[0], F[0], D[0]),
                        N = Math.max(P[1], M[1], F[1], D[1]);
                      this.ctx.fillRect(I, O, L - I, N - O);
                    } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
                    this.compose(this.current.getClippedPathBoundingBox()),
                      this.restore();
                  }
                  beginInlineImage() {
                    (0, S.unreachable)("Should not call beginInlineImage");
                  }
                  beginImageData() {
                    (0, S.unreachable)("Should not call beginImageData");
                  }
                  paintFormXObjectBegin(o, l) {
                    if (
                      this.contentVisible &&
                      (this.save(),
                      this.baseTransformStack.push(this.baseTransform),
                      Array.isArray(o) &&
                        6 === o.length &&
                        this.transform(...o),
                      (this.baseTransform = (0, E.getCurrentTransform)(
                        this.ctx
                      )),
                      l)
                    ) {
                      let o = l[2] - l[0],
                        _ = l[3] - l[1];
                      this.ctx.rect(l[0], l[1], o, _),
                        this.current.updateRectMinMax(
                          (0, E.getCurrentTransform)(this.ctx),
                          l
                        ),
                        this.clip(),
                        this.endPath();
                    }
                  }
                  paintFormXObjectEnd() {
                    this.contentVisible &&
                      (this.restore(),
                      (this.baseTransform = this.baseTransformStack.pop()));
                  }
                  beginGroup(o) {
                    if (!this.contentVisible) return;
                    this.save(),
                      this.inSMaskMode &&
                        (this.endSMaskMode(),
                        (this.current.activeSMask = null));
                    let l = this.ctx;
                    o.isolated ||
                      (0, S.info)("TODO: Support non-isolated groups."),
                      o.knockout &&
                        (0, S.warn)("Knockout groups not supported.");
                    let _ = (0, E.getCurrentTransform)(l);
                    if ((o.matrix && l.transform(...o.matrix), !o.bbox))
                      throw Error("Bounding box is required.");
                    let P = S.Util.getAxialAlignedBoundingBox(
                        o.bbox,
                        (0, E.getCurrentTransform)(l)
                      ),
                      T = [0, 0, l.canvas.width, l.canvas.height];
                    P = S.Util.intersect(P, T) || [0, 0, 0, 0];
                    let M = Math.floor(P[0]),
                      F = Math.floor(P[1]),
                      I = Math.max(Math.ceil(P[2]) - M, 1),
                      O = Math.max(Math.ceil(P[3]) - F, 1),
                      L = 1,
                      N = 1;
                    I > D && ((L = I / D), (I = D)),
                      O > D && ((N = O / D), (O = D)),
                      this.current.startNewPathAndClipBox([0, 0, I, O]);
                    let U = "groupAt" + this.groupLevel;
                    o.smask && (U += "_smask_" + (this.smaskCounter++ % 2));
                    let W = this.cachedCanvases.getCanvas(U, I, O),
                      H = W.context;
                    H.scale(1 / L, 1 / N),
                      H.translate(-M, -F),
                      H.transform(..._),
                      o.smask
                        ? this.smaskStack.push({
                            canvas: W.canvas,
                            context: H,
                            offsetX: M,
                            offsetY: F,
                            scaleX: L,
                            scaleY: N,
                            subtype: o.smask.subtype,
                            backdrop: o.smask.backdrop,
                            transferMap: o.smask.transferMap || null,
                            startTransformInverse: null,
                          })
                        : (l.setTransform(1, 0, 0, 1, 0, 0),
                          l.translate(M, F),
                          l.scale(L, N),
                          l.save()),
                      copyCtxState(l, H),
                      (this.ctx = H),
                      this.setGState([
                        ["BM", "source-over"],
                        ["ca", 1],
                        ["CA", 1],
                      ]),
                      this.groupStack.push(l),
                      this.groupLevel++;
                  }
                  endGroup(o) {
                    if (!this.contentVisible) return;
                    this.groupLevel--;
                    let l = this.ctx,
                      _ = this.groupStack.pop();
                    if (
                      ((this.ctx = _),
                      (this.ctx.imageSmoothingEnabled = !1),
                      o.smask)
                    )
                      (this.tempSMask = this.smaskStack.pop()), this.restore();
                    else {
                      this.ctx.restore();
                      let o = (0, E.getCurrentTransform)(this.ctx);
                      this.restore(),
                        this.ctx.save(),
                        this.ctx.setTransform(...o);
                      let _ = S.Util.getAxialAlignedBoundingBox(
                        [0, 0, l.canvas.width, l.canvas.height],
                        o
                      );
                      this.ctx.drawImage(l.canvas, 0, 0),
                        this.ctx.restore(),
                        this.compose(_);
                    }
                  }
                  beginAnnotation(o, l, _, P, T) {
                    if (
                      (this.#th(),
                      resetCtxToDefault(this.ctx, this.foregroundColor),
                      this.ctx.save(),
                      this.save(),
                      this.baseTransform &&
                        this.ctx.setTransform(...this.baseTransform),
                      Array.isArray(l) && 4 === l.length)
                    ) {
                      let P = l[2] - l[0],
                        M = l[3] - l[1];
                      if (T && this.annotationCanvasMap) {
                        (_ = _.slice()),
                          (_[4] -= l[0]),
                          (_[5] -= l[1]),
                          ((l = l.slice())[0] = l[1] = 0),
                          (l[2] = P),
                          (l[3] = M);
                        let [T, F] = S.Util.singularValueDecompose2dScale(
                            (0, E.getCurrentTransform)(this.ctx)
                          ),
                          { viewportScale: D } = this,
                          I = Math.ceil(P * this.outputScaleX * D),
                          O = Math.ceil(M * this.outputScaleY * D);
                        this.annotationCanvas = this.canvasFactory.create(I, O);
                        let { canvas: L, context: N } = this.annotationCanvas;
                        this.annotationCanvasMap.set(o, L),
                          (this.annotationCanvas.savedCtx = this.ctx),
                          (this.ctx = N),
                          this.ctx.setTransform(T, 0, 0, -F, 0, M * F),
                          resetCtxToDefault(this.ctx, this.foregroundColor);
                      } else
                        resetCtxToDefault(this.ctx, this.foregroundColor),
                          this.ctx.rect(l[0], l[1], P, M),
                          this.ctx.clip(),
                          this.endPath();
                    }
                    (this.current = new CanvasExtraState(
                      this.ctx.canvas.width,
                      this.ctx.canvas.height
                    )),
                      this.transform(..._),
                      this.transform(...P);
                  }
                  endAnnotation() {
                    this.annotationCanvas &&
                      ((this.ctx = this.annotationCanvas.savedCtx),
                      delete this.annotationCanvas.savedCtx,
                      delete this.annotationCanvas);
                  }
                  paintImageMaskXObject(o) {
                    if (!this.contentVisible) return;
                    let l = o.count;
                    (o = this.getObject(o.data, o)).count = l;
                    let _ = this.ctx,
                      S = this.processingType3;
                    if (
                      S &&
                      (void 0 === S.compiled &&
                        (S.compiled = compileType3Glyph(o)),
                      S.compiled)
                    ) {
                      S.compiled(_);
                      return;
                    }
                    let E = this._createMaskCanvas(o),
                      P = E.canvas;
                    _.save(),
                      _.setTransform(1, 0, 0, 1, 0, 0),
                      _.drawImage(P, E.offsetX, E.offsetY),
                      _.restore(),
                      this.compose();
                  }
                  paintImageMaskXObjectRepeat(o, l, _ = 0, P = 0, T, M) {
                    if (!this.contentVisible) return;
                    o = this.getObject(o.data, o);
                    let F = this.ctx;
                    F.save();
                    let D = (0, E.getCurrentTransform)(F);
                    F.transform(l, _, P, T, 0, 0);
                    let I = this._createMaskCanvas(o);
                    F.setTransform(
                      1,
                      0,
                      0,
                      1,
                      I.offsetX - D[4],
                      I.offsetY - D[5]
                    );
                    for (let o = 0, E = M.length; o < E; o += 2) {
                      let E = S.Util.transform(D, [l, _, P, T, M[o], M[o + 1]]),
                        [O, L] = S.Util.applyTransform([0, 0], E);
                      F.drawImage(I.canvas, O, L);
                    }
                    F.restore(), this.compose();
                  }
                  paintImageMaskXObjectGroup(o) {
                    if (!this.contentVisible) return;
                    let l = this.ctx,
                      _ = this.current.fillColor,
                      S = this.current.patternFill;
                    for (let T of o) {
                      let { data: o, width: M, height: F, transform: D } = T,
                        I = this.cachedCanvases.getCanvas("maskCanvas", M, F),
                        O = I.context;
                      O.save();
                      let L = this.getObject(o, T);
                      putBinaryImageMask(O, L),
                        (O.globalCompositeOperation = "source-in"),
                        (O.fillStyle = S
                          ? _.getPattern(
                              O,
                              this,
                              (0, E.getCurrentTransformInverse)(l),
                              P.PathType.FILL
                            )
                          : _),
                        O.fillRect(0, 0, M, F),
                        O.restore(),
                        l.save(),
                        l.transform(...D),
                        l.scale(1, -1),
                        drawImageAtIntegerCoords(
                          l,
                          I.canvas,
                          0,
                          0,
                          M,
                          F,
                          0,
                          -1,
                          1,
                          1
                        ),
                        l.restore();
                    }
                    this.compose();
                  }
                  paintImageXObject(o) {
                    if (!this.contentVisible) return;
                    let l = this.getObject(o);
                    if (!l) {
                      (0, S.warn)("Dependent image isn't ready yet");
                      return;
                    }
                    this.paintInlineImageXObject(l);
                  }
                  paintImageXObjectRepeat(o, l, _, E) {
                    if (!this.contentVisible) return;
                    let P = this.getObject(o);
                    if (!P) {
                      (0, S.warn)("Dependent image isn't ready yet");
                      return;
                    }
                    let T = P.width,
                      M = P.height,
                      F = [];
                    for (let o = 0, S = E.length; o < S; o += 2)
                      F.push({
                        transform: [l, 0, 0, _, E[o], E[o + 1]],
                        x: 0,
                        y: 0,
                        w: T,
                        h: M,
                      });
                    this.paintInlineImageXObjectGroup(P, F);
                  }
                  paintInlineImageXObject(o) {
                    let l;
                    if (!this.contentVisible) return;
                    let _ = o.width,
                      S = o.height,
                      P = this.ctx;
                    if (
                      (this.save(),
                      P.scale(1 / _, -1 / S),
                      ("function" == typeof HTMLElement &&
                        o instanceof HTMLElement) ||
                        !o.data)
                    )
                      l = o;
                    else {
                      let E = this.cachedCanvases.getCanvas(
                          "inlineImage",
                          _,
                          S
                        ),
                        P = E.context;
                      putBinaryImageData(P, o, this.current.transferMaps),
                        (l = E.canvas);
                    }
                    let T = this._scaleImage(
                      l,
                      (0, E.getCurrentTransformInverse)(P)
                    );
                    (P.imageSmoothingEnabled = getImageSmoothingEnabled(
                      (0, E.getCurrentTransform)(P),
                      o.interpolate
                    )),
                      drawImageAtIntegerCoords(
                        P,
                        T.img,
                        0,
                        0,
                        T.paintWidth,
                        T.paintHeight,
                        0,
                        -S,
                        _,
                        S
                      ),
                      this.compose(),
                      this.restore();
                  }
                  paintInlineImageXObjectGroup(o, l) {
                    if (!this.contentVisible) return;
                    let _ = this.ctx,
                      S = o.width,
                      E = o.height,
                      P = this.cachedCanvases.getCanvas("inlineImage", S, E),
                      T = P.context;
                    for (let S of (putBinaryImageData(
                      T,
                      o,
                      this.current.transferMaps
                    ),
                    l))
                      _.save(),
                        _.transform(...S.transform),
                        _.scale(1, -1),
                        drawImageAtIntegerCoords(
                          _,
                          P.canvas,
                          S.x,
                          S.y,
                          S.w,
                          S.h,
                          0,
                          -1,
                          1,
                          1
                        ),
                        _.restore();
                    this.compose();
                  }
                  paintSolidColorImageMask() {
                    this.contentVisible &&
                      (this.ctx.fillRect(0, 0, 1, 1), this.compose());
                  }
                  markPoint(o) {}
                  markPointProps(o, l) {}
                  beginMarkedContent(o) {
                    this.markedContentStack.push({ visible: !0 });
                  }
                  beginMarkedContentProps(o, l) {
                    "OC" === o
                      ? this.markedContentStack.push({
                          visible: this.optionalContentConfig.isVisible(l),
                        })
                      : this.markedContentStack.push({ visible: !0 }),
                      (this.contentVisible = this.isContentVisible());
                  }
                  endMarkedContent() {
                    this.markedContentStack.pop(),
                      (this.contentVisible = this.isContentVisible());
                  }
                  beginCompat() {}
                  endCompat() {}
                  consumePath(o) {
                    let l = this.current.isEmptyClip();
                    this.pendingClip && this.current.updateClipFromPath(),
                      this.pendingClip || this.compose(o);
                    let _ = this.ctx;
                    this.pendingClip &&
                      (l ||
                        (this.pendingClip === V ? _.clip("evenodd") : _.clip()),
                      (this.pendingClip = null)),
                      this.current.startNewPathAndClipBox(this.current.clipBox),
                      _.beginPath();
                  }
                  getSinglePixelWidth() {
                    if (!this._cachedGetSinglePixelWidth) {
                      let o = (0, E.getCurrentTransform)(this.ctx);
                      if (0 === o[1] && 0 === o[2])
                        this._cachedGetSinglePixelWidth =
                          1 / Math.min(Math.abs(o[0]), Math.abs(o[3]));
                      else {
                        let l = Math.abs(o[0] * o[3] - o[2] * o[1]),
                          _ = Math.hypot(o[0], o[2]),
                          S = Math.hypot(o[1], o[3]);
                        this._cachedGetSinglePixelWidth = Math.max(_, S) / l;
                      }
                    }
                    return this._cachedGetSinglePixelWidth;
                  }
                  getScaleForStroking() {
                    if (!this._cachedScaleForStroking) {
                      let o, l;
                      let { lineWidth: _ } = this.current,
                        S = (0, E.getCurrentTransform)(this.ctx);
                      if (0 === S[1] && 0 === S[2]) {
                        let E = Math.abs(S[0]),
                          P = Math.abs(S[3]);
                        if (0 === _) (o = 1 / E), (l = 1 / P);
                        else {
                          let S = E * _,
                            T = P * _;
                          (o = S < 1 ? 1 / S : 1), (l = T < 1 ? 1 / T : 1);
                        }
                      } else {
                        let E = Math.abs(S[0] * S[3] - S[2] * S[1]),
                          P = Math.hypot(S[0], S[1]),
                          T = Math.hypot(S[2], S[3]);
                        if (0 === _) (o = T / E), (l = P / E);
                        else {
                          let S = _ * E;
                          (o = T > S ? T / S : 1), (l = P > S ? P / S : 1);
                        }
                      }
                      this._cachedScaleForStroking = [o, l];
                    }
                    return this._cachedScaleForStroking;
                  }
                  rescaleAndStroke(o) {
                    let l, _, S;
                    let { ctx: P } = this,
                      { lineWidth: T } = this.current,
                      [M, F] = this.getScaleForStroking();
                    if (((P.lineWidth = T || 1), 1 === M && 1 === F)) {
                      P.stroke();
                      return;
                    }
                    o &&
                      ((l = (0, E.getCurrentTransform)(P)),
                      (_ = P.getLineDash().slice()),
                      (S = P.lineDashOffset)),
                      P.scale(M, F);
                    let D = Math.max(M, F);
                    P.setLineDash(P.getLineDash().map((o) => o / D)),
                      (P.lineDashOffset /= D),
                      P.stroke(),
                      o &&
                        (P.setTransform(...l),
                        P.setLineDash(_),
                        (P.lineDashOffset = S));
                  }
                  isContentVisible() {
                    for (
                      let o = this.markedContentStack.length - 1;
                      o >= 0;
                      o--
                    )
                      if (!this.markedContentStack[o].visible) return !1;
                    return !0;
                  }
                };
                for (let o in ((l.CanvasGraphics = CanvasGraphics), S.OPS))
                  void 0 !== CanvasGraphics.prototype[o] &&
                    (CanvasGraphics.prototype[S.OPS[o]] =
                      CanvasGraphics.prototype[o]);
              },
              (o, l, _) => {
                Object.defineProperty(l, "__esModule", { value: !0 }),
                  (l.TilingPattern = l.PathType = void 0),
                  (l.getShadingPattern = getShadingPattern);
                var S = _(1),
                  E = _(6);
                let P = { FILL: "Fill", STROKE: "Stroke", SHADING: "Shading" };
                function applyBoundingBox(o, l) {
                  if (!l) return;
                  let _ = l[2] - l[0],
                    S = l[3] - l[1],
                    E = new Path2D();
                  E.rect(l[0], l[1], _, S), o.clip(E);
                }
                l.PathType = P;
                let BaseShadingPattern = class BaseShadingPattern {
                  constructor() {
                    this.constructor === BaseShadingPattern &&
                      (0, S.unreachable)(
                        "Cannot initialize BaseShadingPattern."
                      );
                  }
                  getPattern() {
                    (0, S.unreachable)("Abstract method `getPattern` called.");
                  }
                };
                let RadialAxialShadingPattern = class RadialAxialShadingPattern extends BaseShadingPattern {
                  constructor(o) {
                    super(),
                      (this._type = o[1]),
                      (this._bbox = o[2]),
                      (this._colorStops = o[3]),
                      (this._p0 = o[4]),
                      (this._p1 = o[5]),
                      (this._r0 = o[6]),
                      (this._r1 = o[7]),
                      (this.matrix = null);
                  }
                  _createGradient(o) {
                    let l;
                    for (let _ of ("axial" === this._type
                      ? (l = o.createLinearGradient(
                          this._p0[0],
                          this._p0[1],
                          this._p1[0],
                          this._p1[1]
                        ))
                      : "radial" === this._type &&
                        (l = o.createRadialGradient(
                          this._p0[0],
                          this._p0[1],
                          this._r0,
                          this._p1[0],
                          this._p1[1],
                          this._r1
                        )),
                    this._colorStops))
                      l.addColorStop(_[0], _[1]);
                    return l;
                  }
                  getPattern(o, l, _, T) {
                    let M;
                    if (T === P.STROKE || T === P.FILL) {
                      let P = l.current.getClippedPathBoundingBox(
                          T,
                          (0, E.getCurrentTransform)(o)
                        ) || [0, 0, 0, 0],
                        F = Math.ceil(P[2] - P[0]) || 1,
                        D = Math.ceil(P[3] - P[1]) || 1,
                        I = l.cachedCanvases.getCanvas("pattern", F, D, !0),
                        O = I.context;
                      O.clearRect(0, 0, O.canvas.width, O.canvas.height),
                        O.beginPath(),
                        O.rect(0, 0, O.canvas.width, O.canvas.height),
                        O.translate(-P[0], -P[1]),
                        (_ = S.Util.transform(_, [1, 0, 0, 1, P[0], P[1]])),
                        O.transform(...l.baseTransform),
                        this.matrix && O.transform(...this.matrix),
                        applyBoundingBox(O, this._bbox),
                        (O.fillStyle = this._createGradient(O)),
                        O.fill(),
                        (M = o.createPattern(I.canvas, "no-repeat"));
                      let L = new DOMMatrix(_);
                      M.setTransform(L);
                    } else
                      applyBoundingBox(o, this._bbox),
                        (M = this._createGradient(o));
                    return M;
                  }
                };
                function drawTriangle(o, l, _, S, E, P, T, M) {
                  let F, D, I, O, L, N, U, W, H;
                  let V = l.coords,
                    z = l.colors,
                    $ = o.data,
                    K = 4 * o.width;
                  V[_ + 1] > V[S + 1] &&
                    ((F = _), (_ = S), (S = F), (F = P), (P = T), (T = F)),
                    V[S + 1] > V[E + 1] &&
                      ((F = S), (S = E), (E = F), (F = T), (T = M), (M = F)),
                    V[_ + 1] > V[S + 1] &&
                      ((F = _), (_ = S), (S = F), (F = P), (P = T), (T = F));
                  let Y = (V[_] + l.offsetX) * l.scaleX,
                    J = (V[_ + 1] + l.offsetY) * l.scaleY,
                    Q = (V[S] + l.offsetX) * l.scaleX,
                    Z = (V[S + 1] + l.offsetY) * l.scaleY,
                    tt = (V[E] + l.offsetX) * l.scaleX,
                    te = (V[E + 1] + l.offsetY) * l.scaleY;
                  if (J >= te) return;
                  let ti = z[P],
                    tr = z[P + 1],
                    ta = z[P + 2],
                    ts = z[T],
                    tn = z[T + 1],
                    to = z[T + 2],
                    tl = z[M],
                    th = z[M + 1],
                    td = z[M + 2],
                    tc = Math.round(J),
                    tu = Math.round(te);
                  for (let o = tc; o <= tu; o++) {
                    let l;
                    if (o < Z) {
                      let l;
                      (D = Y - (Y - Q) * (l = o < J ? 0 : (J - o) / (J - Z))),
                        (I = ti - (ti - ts) * l),
                        (O = tr - (tr - tn) * l),
                        (L = ta - (ta - to) * l);
                    } else {
                      let l;
                      (D =
                        Q -
                        (Q - tt) *
                          (l = o > te ? 1 : Z === te ? 0 : (Z - o) / (Z - te))),
                        (I = ts - (ts - tl) * l),
                        (O = tn - (tn - th) * l),
                        (L = to - (to - td) * l);
                    }
                    (N =
                      Y -
                      (Y - tt) *
                        (l = o < J ? 0 : o > te ? 1 : (J - o) / (J - te))),
                      (U = ti - (ti - tl) * l),
                      (W = tr - (tr - th) * l),
                      (H = ta - (ta - td) * l);
                    let _ = Math.round(Math.min(D, N)),
                      S = Math.round(Math.max(D, N)),
                      E = K * o + 4 * _;
                    for (let o = _; o <= S; o++)
                      (l = (D - o) / (D - N)) < 0 ? (l = 0) : l > 1 && (l = 1),
                        ($[E++] = (I - (I - U) * l) | 0),
                        ($[E++] = (O - (O - W) * l) | 0),
                        ($[E++] = (L - (L - H) * l) | 0),
                        ($[E++] = 255);
                  }
                }
                function drawFigure(o, l, _) {
                  let S, E;
                  let P = l.coords,
                    T = l.colors;
                  switch (l.type) {
                    case "lattice":
                      let M = l.verticesPerRow,
                        F = Math.floor(P.length / M) - 1,
                        D = M - 1;
                      for (S = 0; S < F; S++) {
                        let l = S * M;
                        for (let S = 0; S < D; S++, l++)
                          drawTriangle(
                            o,
                            _,
                            P[l],
                            P[l + 1],
                            P[l + M],
                            T[l],
                            T[l + 1],
                            T[l + M]
                          ),
                            drawTriangle(
                              o,
                              _,
                              P[l + M + 1],
                              P[l + 1],
                              P[l + M],
                              T[l + M + 1],
                              T[l + 1],
                              T[l + M]
                            );
                      }
                      break;
                    case "triangles":
                      for (S = 0, E = P.length; S < E; S += 3)
                        drawTriangle(
                          o,
                          _,
                          P[S],
                          P[S + 1],
                          P[S + 2],
                          T[S],
                          T[S + 1],
                          T[S + 2]
                        );
                      break;
                    default:
                      throw Error("illegal figure");
                  }
                }
                let MeshShadingPattern = class MeshShadingPattern extends BaseShadingPattern {
                  constructor(o) {
                    super(),
                      (this._coords = o[2]),
                      (this._colors = o[3]),
                      (this._figures = o[4]),
                      (this._bounds = o[5]),
                      (this._bbox = o[7]),
                      (this._background = o[8]),
                      (this.matrix = null);
                  }
                  _createMeshCanvas(o, l, _) {
                    let S = 1.1,
                      E = 3e3,
                      P = 2,
                      T = Math.floor(this._bounds[0]),
                      M = Math.floor(this._bounds[1]),
                      F = Math.ceil(this._bounds[2]) - T,
                      D = Math.ceil(this._bounds[3]) - M,
                      I = Math.min(Math.ceil(Math.abs(F * o[0] * S)), E),
                      O = Math.min(Math.ceil(Math.abs(D * o[1] * S)), E),
                      L = F / I,
                      N = D / O,
                      U = {
                        coords: this._coords,
                        colors: this._colors,
                        offsetX: -T,
                        offsetY: -M,
                        scaleX: 1 / L,
                        scaleY: 1 / N,
                      },
                      W = I + 2 * P,
                      H = O + 2 * P,
                      V = _.getCanvas("mesh", W, H, !1),
                      z = V.context,
                      $ = z.createImageData(I, O);
                    if (l) {
                      let o = $.data;
                      for (let _ = 0, S = o.length; _ < S; _ += 4)
                        (o[_] = l[0]),
                          (o[_ + 1] = l[1]),
                          (o[_ + 2] = l[2]),
                          (o[_ + 3] = 255);
                    }
                    for (let o of this._figures) drawFigure($, o, U);
                    z.putImageData($, P, P);
                    let K = V.canvas;
                    return {
                      canvas: K,
                      offsetX: T - P * L,
                      offsetY: M - P * N,
                      scaleX: L,
                      scaleY: N,
                    };
                  }
                  getPattern(o, l, _, T) {
                    let M;
                    if ((applyBoundingBox(o, this._bbox), T === P.SHADING))
                      M = S.Util.singularValueDecompose2dScale(
                        (0, E.getCurrentTransform)(o)
                      );
                    else if (
                      ((M = S.Util.singularValueDecompose2dScale(
                        l.baseTransform
                      )),
                      this.matrix)
                    ) {
                      let o = S.Util.singularValueDecompose2dScale(this.matrix);
                      M = [M[0] * o[0], M[1] * o[1]];
                    }
                    let F = this._createMeshCanvas(
                      M,
                      T === P.SHADING ? null : this._background,
                      l.cachedCanvases
                    );
                    return (
                      T !== P.SHADING &&
                        (o.setTransform(...l.baseTransform),
                        this.matrix && o.transform(...this.matrix)),
                      o.translate(F.offsetX, F.offsetY),
                      o.scale(F.scaleX, F.scaleY),
                      o.createPattern(F.canvas, "no-repeat")
                    );
                  }
                };
                let DummyShadingPattern = class DummyShadingPattern extends BaseShadingPattern {
                  getPattern() {
                    return "hotpink";
                  }
                };
                function getShadingPattern(o) {
                  switch (o[0]) {
                    case "RadialAxial":
                      return new RadialAxialShadingPattern(o);
                    case "Mesh":
                      return new MeshShadingPattern(o);
                    case "Dummy":
                      return new DummyShadingPattern();
                  }
                  throw Error(`Unknown IR type: ${o[0]}`);
                }
                let T = { COLORED: 1, UNCOLORED: 2 };
                let TilingPattern = class TilingPattern {
                  static get MAX_PATTERN_SIZE() {
                    return (0, S.shadow)(this, "MAX_PATTERN_SIZE", 3e3);
                  }
                  constructor(o, l, _, S, E) {
                    (this.operatorList = o[2]),
                      (this.matrix = o[3] || [1, 0, 0, 1, 0, 0]),
                      (this.bbox = o[4]),
                      (this.xstep = o[5]),
                      (this.ystep = o[6]),
                      (this.paintType = o[7]),
                      (this.tilingType = o[8]),
                      (this.color = l),
                      (this.ctx = _),
                      (this.canvasGraphicsFactory = S),
                      (this.baseTransform = E);
                  }
                  createPatternCanvas(o) {
                    let l = this.operatorList,
                      _ = this.bbox,
                      P = this.xstep,
                      T = this.ystep,
                      M = this.paintType,
                      F = this.tilingType,
                      D = this.color,
                      I = this.canvasGraphicsFactory;
                    (0, S.info)("TilingType: " + F);
                    let O = _[0],
                      L = _[1],
                      N = _[2],
                      U = _[3],
                      W = S.Util.singularValueDecompose2dScale(this.matrix),
                      H = S.Util.singularValueDecompose2dScale(
                        this.baseTransform
                      ),
                      V = [W[0] * H[0], W[1] * H[1]],
                      z = this.getSizeAndScale(P, this.ctx.canvas.width, V[0]),
                      $ = this.getSizeAndScale(T, this.ctx.canvas.height, V[1]),
                      K = o.cachedCanvases.getCanvas(
                        "pattern",
                        z.size,
                        $.size,
                        !0
                      ),
                      Y = K.context,
                      J = I.createCanvasGraphics(Y);
                    (J.groupLevel = o.groupLevel),
                      this.setFillAndStrokeStyleToContext(J, M, D);
                    let Q = O,
                      Z = L,
                      tt = N,
                      te = U;
                    return (
                      O < 0 && ((Q = 0), (tt += Math.abs(O))),
                      L < 0 && ((Z = 0), (te += Math.abs(L))),
                      Y.translate(-(z.scale * Q), -($.scale * Z)),
                      J.transform(z.scale, 0, 0, $.scale, 0, 0),
                      Y.save(),
                      this.clipBbox(J, Q, Z, tt, te),
                      (J.baseTransform = (0, E.getCurrentTransform)(J.ctx)),
                      J.executeOperatorList(l),
                      J.endDrawing(),
                      {
                        canvas: K.canvas,
                        scaleX: z.scale,
                        scaleY: $.scale,
                        offsetX: Q,
                        offsetY: Z,
                      }
                    );
                  }
                  getSizeAndScale(o, l, _) {
                    o = Math.abs(o);
                    let S = Math.max(TilingPattern.MAX_PATTERN_SIZE, l),
                      E = Math.ceil(o * _);
                    return (
                      E >= S ? (E = S) : (_ = E / o), { scale: _, size: E }
                    );
                  }
                  clipBbox(o, l, _, S, P) {
                    let T = S - l,
                      M = P - _;
                    o.ctx.rect(l, _, T, M),
                      o.current.updateRectMinMax(
                        (0, E.getCurrentTransform)(o.ctx),
                        [l, _, S, P]
                      ),
                      o.clip(),
                      o.endPath();
                  }
                  setFillAndStrokeStyleToContext(o, l, _) {
                    let E = o.ctx,
                      P = o.current;
                    switch (l) {
                      case T.COLORED:
                        let M = this.ctx;
                        (E.fillStyle = M.fillStyle),
                          (E.strokeStyle = M.strokeStyle),
                          (P.fillColor = M.fillStyle),
                          (P.strokeColor = M.strokeStyle);
                        break;
                      case T.UNCOLORED:
                        let F = S.Util.makeHexColor(_[0], _[1], _[2]);
                        (E.fillStyle = F),
                          (E.strokeStyle = F),
                          (P.fillColor = F),
                          (P.strokeColor = F);
                        break;
                      default:
                        throw new S.FormatError(`Unsupported paint type: ${l}`);
                    }
                  }
                  getPattern(o, l, _, E) {
                    let T = _;
                    E !== P.SHADING &&
                      ((T = S.Util.transform(T, l.baseTransform)),
                      this.matrix && (T = S.Util.transform(T, this.matrix)));
                    let M = this.createPatternCanvas(l),
                      F = new DOMMatrix(T);
                    F = (F = F.translate(M.offsetX, M.offsetY)).scale(
                      1 / M.scaleX,
                      1 / M.scaleY
                    );
                    let D = o.createPattern(M.canvas, "repeat");
                    return D.setTransform(F), D;
                  }
                };
                l.TilingPattern = TilingPattern;
              },
              (o, l, _) => {
                Object.defineProperty(l, "__esModule", { value: !0 }),
                  (l.applyMaskImageData = applyMaskImageData);
                var S = _(1);
                function applyMaskImageData({
                  src: o,
                  srcPos: l = 0,
                  dest: _,
                  destPos: E = 0,
                  width: P,
                  height: T,
                  inverseDecode: M = !1,
                }) {
                  let F = S.FeatureTest.isLittleEndian ? 4278190080 : 255,
                    [D, I] = M ? [0, F] : [F, 0],
                    O = P >> 3,
                    L = 7 & P,
                    N = o.length;
                  _ = new Uint32Array(_.buffer);
                  for (let S = 0; S < T; S++) {
                    for (let S = l + O; l < S; l++) {
                      let S = l < N ? o[l] : 255;
                      (_[E++] = 128 & S ? I : D),
                        (_[E++] = 64 & S ? I : D),
                        (_[E++] = 32 & S ? I : D),
                        (_[E++] = 16 & S ? I : D),
                        (_[E++] = 8 & S ? I : D),
                        (_[E++] = 4 & S ? I : D),
                        (_[E++] = 2 & S ? I : D),
                        (_[E++] = 1 & S ? I : D);
                    }
                    if (0 === L) continue;
                    let S = l < N ? o[l++] : 255;
                    for (let o = 0; o < L; o++)
                      _[E++] = S & (1 << (7 - o)) ? I : D;
                  }
                  return { srcPos: l, destPos: E };
                }
              },
              (o, l) => {
                Object.defineProperty(l, "__esModule", { value: !0 }),
                  (l.GlobalWorkerOptions = void 0);
                let _ = Object.create(null);
                (l.GlobalWorkerOptions = _),
                  (_.workerPort = null),
                  (_.workerSrc = "");
              },
              (o, l, _) => {
                Object.defineProperty(l, "__esModule", { value: !0 }),
                  (l.MessageHandler = void 0);
                var S = _(1);
                let E = { DATA: 1, ERROR: 2 },
                  P = {
                    CANCEL: 1,
                    CANCEL_COMPLETE: 2,
                    CLOSE: 3,
                    ENQUEUE: 4,
                    ERROR: 5,
                    PULL: 6,
                    PULL_COMPLETE: 7,
                    START_COMPLETE: 8,
                  };
                function wrapReason(o) {
                  switch (
                    (o instanceof Error ||
                      ("object" == typeof o && null !== o) ||
                      (0, S.unreachable)(
                        'wrapReason: Expected "reason" to be a (possibly cloned) Error.'
                      ),
                    o.name)
                  ) {
                    case "AbortException":
                      return new S.AbortException(o.message);
                    case "MissingPDFException":
                      return new S.MissingPDFException(o.message);
                    case "PasswordException":
                      return new S.PasswordException(o.message, o.code);
                    case "UnexpectedResponseException":
                      return new S.UnexpectedResponseException(
                        o.message,
                        o.status
                      );
                    case "UnknownErrorException":
                      return new S.UnknownErrorException(o.message, o.details);
                    default:
                      return new S.UnknownErrorException(
                        o.message,
                        o.toString()
                      );
                  }
                }
                let MessageHandler = class MessageHandler {
                  constructor(o, l, _) {
                    (this.sourceName = o),
                      (this.targetName = l),
                      (this.comObj = _),
                      (this.callbackId = 1),
                      (this.streamId = 1),
                      (this.streamSinks = Object.create(null)),
                      (this.streamControllers = Object.create(null)),
                      (this.callbackCapabilities = Object.create(null)),
                      (this.actionHandler = Object.create(null)),
                      (this._onComObjOnMessage = (o) => {
                        let l = o.data;
                        if (l.targetName !== this.sourceName) return;
                        if (l.stream) {
                          this._processStreamMessage(l);
                          return;
                        }
                        if (l.callback) {
                          let o = l.callbackId,
                            _ = this.callbackCapabilities[o];
                          if (!_) throw Error(`Cannot resolve callback ${o}`);
                          if (
                            (delete this.callbackCapabilities[o],
                            l.callback === E.DATA)
                          )
                            _.resolve(l.data);
                          else if (l.callback === E.ERROR)
                            _.reject(wrapReason(l.reason));
                          else throw Error("Unexpected callback case");
                          return;
                        }
                        let S = this.actionHandler[l.action];
                        if (!S)
                          throw Error(
                            `Unknown action from worker: ${l.action}`
                          );
                        if (l.callbackId) {
                          let o = this.sourceName,
                            P = l.sourceName;
                          new Promise(function (o) {
                            o(S(l.data));
                          }).then(
                            function (S) {
                              _.postMessage({
                                sourceName: o,
                                targetName: P,
                                callback: E.DATA,
                                callbackId: l.callbackId,
                                data: S,
                              });
                            },
                            function (S) {
                              _.postMessage({
                                sourceName: o,
                                targetName: P,
                                callback: E.ERROR,
                                callbackId: l.callbackId,
                                reason: wrapReason(S),
                              });
                            }
                          );
                          return;
                        }
                        if (l.streamId) {
                          this._createStreamSink(l);
                          return;
                        }
                        S(l.data);
                      }),
                      _.addEventListener("message", this._onComObjOnMessage);
                  }
                  on(o, l) {
                    let _ = this.actionHandler;
                    if (_[o])
                      throw Error(
                        `There is already an actionName called "${o}"`
                      );
                    _[o] = l;
                  }
                  send(o, l, _) {
                    this.comObj.postMessage(
                      {
                        sourceName: this.sourceName,
                        targetName: this.targetName,
                        action: o,
                        data: l,
                      },
                      _
                    );
                  }
                  sendWithPromise(o, l, _) {
                    let E = this.callbackId++,
                      P = (0, S.createPromiseCapability)();
                    this.callbackCapabilities[E] = P;
                    try {
                      this.comObj.postMessage(
                        {
                          sourceName: this.sourceName,
                          targetName: this.targetName,
                          action: o,
                          callbackId: E,
                          data: l,
                        },
                        _
                      );
                    } catch (o) {
                      P.reject(o);
                    }
                    return P.promise;
                  }
                  sendWithStream(o, l, _, E) {
                    let T = this.streamId++,
                      M = this.sourceName,
                      F = this.targetName,
                      D = this.comObj;
                    return new ReadableStream(
                      {
                        start: (_) => {
                          let P = (0, S.createPromiseCapability)();
                          return (
                            (this.streamControllers[T] = {
                              controller: _,
                              startCall: P,
                              pullCall: null,
                              cancelCall: null,
                              isClosed: !1,
                            }),
                            D.postMessage(
                              {
                                sourceName: M,
                                targetName: F,
                                action: o,
                                streamId: T,
                                data: l,
                                desiredSize: _.desiredSize,
                              },
                              E
                            ),
                            P.promise
                          );
                        },
                        pull: (o) => {
                          let l = (0, S.createPromiseCapability)();
                          return (
                            (this.streamControllers[T].pullCall = l),
                            D.postMessage({
                              sourceName: M,
                              targetName: F,
                              stream: P.PULL,
                              streamId: T,
                              desiredSize: o.desiredSize,
                            }),
                            l.promise
                          );
                        },
                        cancel: (o) => {
                          (0, S.assert)(
                            o instanceof Error,
                            "cancel must have a valid reason"
                          );
                          let l = (0, S.createPromiseCapability)();
                          return (
                            (this.streamControllers[T].cancelCall = l),
                            (this.streamControllers[T].isClosed = !0),
                            D.postMessage({
                              sourceName: M,
                              targetName: F,
                              stream: P.CANCEL,
                              streamId: T,
                              reason: wrapReason(o),
                            }),
                            l.promise
                          );
                        },
                      },
                      _
                    );
                  }
                  _createStreamSink(o) {
                    let l = o.streamId,
                      _ = this.sourceName,
                      E = o.sourceName,
                      T = this.comObj,
                      M = this,
                      F = this.actionHandler[o.action],
                      D = {
                        enqueue(o, M = 1, F) {
                          if (this.isCancelled) return;
                          let D = this.desiredSize;
                          (this.desiredSize -= M),
                            D > 0 &&
                              this.desiredSize <= 0 &&
                              ((this.sinkCapability = (0,
                              S.createPromiseCapability)()),
                              (this.ready = this.sinkCapability.promise)),
                            T.postMessage(
                              {
                                sourceName: _,
                                targetName: E,
                                stream: P.ENQUEUE,
                                streamId: l,
                                chunk: o,
                              },
                              F
                            );
                        },
                        close() {
                          this.isCancelled ||
                            ((this.isCancelled = !0),
                            T.postMessage({
                              sourceName: _,
                              targetName: E,
                              stream: P.CLOSE,
                              streamId: l,
                            }),
                            delete M.streamSinks[l]);
                        },
                        error(o) {
                          (0, S.assert)(
                            o instanceof Error,
                            "error must have a valid reason"
                          ),
                            this.isCancelled ||
                              ((this.isCancelled = !0),
                              T.postMessage({
                                sourceName: _,
                                targetName: E,
                                stream: P.ERROR,
                                streamId: l,
                                reason: wrapReason(o),
                              }));
                        },
                        sinkCapability: (0, S.createPromiseCapability)(),
                        onPull: null,
                        onCancel: null,
                        isCancelled: !1,
                        desiredSize: o.desiredSize,
                        ready: null,
                      };
                    D.sinkCapability.resolve(),
                      (D.ready = D.sinkCapability.promise),
                      (this.streamSinks[l] = D),
                      new Promise(function (l) {
                        l(F(o.data, D));
                      }).then(
                        function () {
                          T.postMessage({
                            sourceName: _,
                            targetName: E,
                            stream: P.START_COMPLETE,
                            streamId: l,
                            success: !0,
                          });
                        },
                        function (o) {
                          T.postMessage({
                            sourceName: _,
                            targetName: E,
                            stream: P.START_COMPLETE,
                            streamId: l,
                            reason: wrapReason(o),
                          });
                        }
                      );
                  }
                  _processStreamMessage(o) {
                    let l = o.streamId,
                      _ = this.sourceName,
                      E = o.sourceName,
                      T = this.comObj,
                      M = this.streamControllers[l],
                      F = this.streamSinks[l];
                    switch (o.stream) {
                      case P.START_COMPLETE:
                        o.success
                          ? M.startCall.resolve()
                          : M.startCall.reject(wrapReason(o.reason));
                        break;
                      case P.PULL_COMPLETE:
                        o.success
                          ? M.pullCall.resolve()
                          : M.pullCall.reject(wrapReason(o.reason));
                        break;
                      case P.PULL:
                        if (!F) {
                          T.postMessage({
                            sourceName: _,
                            targetName: E,
                            stream: P.PULL_COMPLETE,
                            streamId: l,
                            success: !0,
                          });
                          break;
                        }
                        F.desiredSize <= 0 &&
                          o.desiredSize > 0 &&
                          F.sinkCapability.resolve(),
                          (F.desiredSize = o.desiredSize),
                          new Promise(function (o) {
                            o(F.onPull && F.onPull());
                          }).then(
                            function () {
                              T.postMessage({
                                sourceName: _,
                                targetName: E,
                                stream: P.PULL_COMPLETE,
                                streamId: l,
                                success: !0,
                              });
                            },
                            function (o) {
                              T.postMessage({
                                sourceName: _,
                                targetName: E,
                                stream: P.PULL_COMPLETE,
                                streamId: l,
                                reason: wrapReason(o),
                              });
                            }
                          );
                        break;
                      case P.ENQUEUE:
                        if (
                          ((0, S.assert)(
                            M,
                            "enqueue should have stream controller"
                          ),
                          M.isClosed)
                        )
                          break;
                        M.controller.enqueue(o.chunk);
                        break;
                      case P.CLOSE:
                        if (
                          ((0, S.assert)(
                            M,
                            "close should have stream controller"
                          ),
                          M.isClosed)
                        )
                          break;
                        (M.isClosed = !0),
                          M.controller.close(),
                          this._deleteStreamController(M, l);
                        break;
                      case P.ERROR:
                        (0, S.assert)(M, "error should have stream controller"),
                          M.controller.error(wrapReason(o.reason)),
                          this._deleteStreamController(M, l);
                        break;
                      case P.CANCEL_COMPLETE:
                        o.success
                          ? M.cancelCall.resolve()
                          : M.cancelCall.reject(wrapReason(o.reason)),
                          this._deleteStreamController(M, l);
                        break;
                      case P.CANCEL:
                        if (!F) break;
                        new Promise(function (l) {
                          l(F.onCancel && F.onCancel(wrapReason(o.reason)));
                        }).then(
                          function () {
                            T.postMessage({
                              sourceName: _,
                              targetName: E,
                              stream: P.CANCEL_COMPLETE,
                              streamId: l,
                              success: !0,
                            });
                          },
                          function (o) {
                            T.postMessage({
                              sourceName: _,
                              targetName: E,
                              stream: P.CANCEL_COMPLETE,
                              streamId: l,
                              reason: wrapReason(o),
                            });
                          }
                        ),
                          F.sinkCapability.reject(wrapReason(o.reason)),
                          (F.isCancelled = !0),
                          delete this.streamSinks[l];
                        break;
                      default:
                        throw Error("Unexpected stream case");
                    }
                  }
                  async _deleteStreamController(o, l) {
                    await Promise.allSettled([
                      o.startCall && o.startCall.promise,
                      o.pullCall && o.pullCall.promise,
                      o.cancelCall && o.cancelCall.promise,
                    ]),
                      delete this.streamControllers[l];
                  }
                  destroy() {
                    this.comObj.removeEventListener(
                      "message",
                      this._onComObjOnMessage
                    );
                  }
                };
                l.MessageHandler = MessageHandler;
              },
              (o, l, _) => {
                Object.defineProperty(l, "__esModule", { value: !0 }),
                  (l.Metadata = void 0);
                var S = _(1);
                let Metadata = class Metadata {
                  #td;
                  #tc;
                  constructor({ parsedData: o, rawData: l }) {
                    (this.#td = o), (this.#tc = l);
                  }
                  getRaw() {
                    return this.#tc;
                  }
                  get(o) {
                    return this.#td.get(o) ?? null;
                  }
                  getAll() {
                    return (0, S.objectFromMap)(this.#td);
                  }
                  has(o) {
                    return this.#td.has(o);
                  }
                };
                l.Metadata = Metadata;
              },
              (o, l, _) => {
                Object.defineProperty(l, "__esModule", { value: !0 }),
                  (l.OptionalContentConfig = void 0);
                var S = _(1),
                  E = _(8);
                let P = Symbol("INTERNAL");
                let OptionalContentGroup = class OptionalContentGroup {
                  #tu = !0;
                  constructor(o, l) {
                    (this.name = o), (this.intent = l);
                  }
                  get visible() {
                    return this.#tu;
                  }
                  _setVisible(o, l) {
                    o !== P &&
                      (0, S.unreachable)(
                        "Internal method `_setVisible` called."
                      ),
                      (this.#tu = l);
                  }
                };
                let OptionalContentConfig = class OptionalContentConfig {
                  #tp = null;
                  #tg = new Map();
                  #tm = null;
                  #tf = null;
                  constructor(o) {
                    if (((this.name = null), (this.creator = null), null === o))
                      return;
                    for (let l of ((this.name = o.name),
                    (this.creator = o.creator),
                    (this.#tf = o.order),
                    o.groups))
                      this.#tg.set(
                        l.id,
                        new OptionalContentGroup(l.name, l.intent)
                      );
                    if ("OFF" === o.baseState)
                      for (let o of this.#tg.values()) o._setVisible(P, !1);
                    for (let l of o.on) this.#tg.get(l)._setVisible(P, !0);
                    for (let l of o.off) this.#tg.get(l)._setVisible(P, !1);
                    this.#tm = this.getHash();
                  }
                  #tA(o) {
                    let l = o.length;
                    if (l < 2) return !0;
                    let _ = o[0];
                    for (let E = 1; E < l; E++) {
                      let l;
                      let P = o[E];
                      if (Array.isArray(P)) l = this.#tA(P);
                      else {
                        if (!this.#tg.has(P))
                          return (
                            (0, S.warn)(
                              `Optional content group not found: ${P}`
                            ),
                            !0
                          );
                        l = this.#tg.get(P).visible;
                      }
                      switch (_) {
                        case "And":
                          if (!l) return !1;
                          break;
                        case "Or":
                          if (l) return !0;
                          break;
                        case "Not":
                          return !l;
                        default:
                          return !0;
                      }
                    }
                    return "And" === _;
                  }
                  isVisible(o) {
                    if (0 === this.#tg.size) return !0;
                    if (!o)
                      return (
                        (0, S.warn)("Optional content group not defined."), !0
                      );
                    if ("OCG" === o.type)
                      return this.#tg.has(o.id)
                        ? this.#tg.get(o.id).visible
                        : ((0, S.warn)(
                            `Optional content group not found: ${o.id}`
                          ),
                          !0);
                    if ("OCMD" === o.type) {
                      if (o.expression) return this.#tA(o.expression);
                      if (o.policy && "AnyOn" !== o.policy) {
                        if ("AllOn" === o.policy) {
                          for (let l of o.ids) {
                            if (!this.#tg.has(l)) {
                              (0, S.warn)(
                                `Optional content group not found: ${l}`
                              );
                              break;
                            }
                            if (!this.#tg.get(l).visible) return !1;
                          }
                          return !0;
                        }
                        if ("AnyOff" === o.policy) {
                          for (let l of o.ids) {
                            if (!this.#tg.has(l))
                              return (
                                (0, S.warn)(
                                  `Optional content group not found: ${l}`
                                ),
                                !0
                              );
                            if (!this.#tg.get(l).visible) return !0;
                          }
                          return !1;
                        }
                        if ("AllOff" === o.policy) {
                          for (let l of o.ids) {
                            if (!this.#tg.has(l)) {
                              (0, S.warn)(
                                `Optional content group not found: ${l}`
                              );
                              break;
                            }
                            if (this.#tg.get(l).visible) return !1;
                          }
                          return !0;
                        }
                      } else {
                        for (let l of o.ids) {
                          if (!this.#tg.has(l))
                            return (
                              (0, S.warn)(
                                `Optional content group not found: ${l}`
                              ),
                              !0
                            );
                          if (this.#tg.get(l).visible) return !0;
                        }
                        return !1;
                      }
                      return (
                        (0, S.warn)(
                          `Unknown optional content policy ${o.policy}.`
                        ),
                        !0
                      );
                    }
                    return (0, S.warn)(`Unknown group type ${o.type}.`), !0;
                  }
                  setVisibility(o, l = !0) {
                    if (!this.#tg.has(o)) {
                      (0, S.warn)(`Optional content group not found: ${o}`);
                      return;
                    }
                    this.#tg.get(o)._setVisible(P, !!l), (this.#tp = null);
                  }
                  get hasInitialVisibility() {
                    return this.getHash() === this.#tm;
                  }
                  getOrder() {
                    return this.#tg.size
                      ? this.#tf
                        ? this.#tf.slice()
                        : [...this.#tg.keys()]
                      : null;
                  }
                  getGroups() {
                    return this.#tg.size > 0
                      ? (0, S.objectFromMap)(this.#tg)
                      : null;
                  }
                  getGroup(o) {
                    return this.#tg.get(o) || null;
                  }
                  getHash() {
                    if (null !== this.#tp) return this.#tp;
                    let o = new E.MurmurHash3_64();
                    for (let [l, _] of this.#tg) o.update(`${l}:${_.visible}`);
                    return (this.#tp = o.hexdigest());
                  }
                };
                l.OptionalContentConfig = OptionalContentConfig;
              },
              (o, l, _) => {
                Object.defineProperty(l, "__esModule", { value: !0 }),
                  (l.PDFDataTransportStream = void 0);
                var S = _(1),
                  E = _(6);
                let PDFDataTransportStream = class PDFDataTransportStream {
                  constructor(
                    {
                      length: o,
                      initialData: l,
                      progressiveDone: _ = !1,
                      contentDispositionFilename: E = null,
                      disableRange: P = !1,
                      disableStream: T = !1,
                    },
                    M
                  ) {
                    if (
                      ((0, S.assert)(
                        M,
                        'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.'
                      ),
                      (this._queuedChunks = []),
                      (this._progressiveDone = _),
                      (this._contentDispositionFilename = E),
                      l?.length > 0)
                    ) {
                      let o =
                        l instanceof Uint8Array &&
                        l.byteLength === l.buffer.byteLength
                          ? l.buffer
                          : new Uint8Array(l).buffer;
                      this._queuedChunks.push(o);
                    }
                    (this._pdfDataRangeTransport = M),
                      (this._isStreamingSupported = !T),
                      (this._isRangeSupported = !P),
                      (this._contentLength = o),
                      (this._fullRequestReader = null),
                      (this._rangeReaders = []),
                      this._pdfDataRangeTransport.addRangeListener((o, l) => {
                        this._onReceiveData({ begin: o, chunk: l });
                      }),
                      this._pdfDataRangeTransport.addProgressListener(
                        (o, l) => {
                          this._onProgress({ loaded: o, total: l });
                        }
                      ),
                      this._pdfDataRangeTransport.addProgressiveReadListener(
                        (o) => {
                          this._onReceiveData({ chunk: o });
                        }
                      ),
                      this._pdfDataRangeTransport.addProgressiveDoneListener(
                        () => {
                          this._onProgressiveDone();
                        }
                      ),
                      this._pdfDataRangeTransport.transportReady();
                  }
                  _onReceiveData({ begin: o, chunk: l }) {
                    let _ =
                      l instanceof Uint8Array &&
                      l.byteLength === l.buffer.byteLength
                        ? l.buffer
                        : new Uint8Array(l).buffer;
                    if (void 0 === o)
                      this._fullRequestReader
                        ? this._fullRequestReader._enqueue(_)
                        : this._queuedChunks.push(_);
                    else {
                      let l = this._rangeReaders.some(function (l) {
                        return l._begin === o && (l._enqueue(_), !0);
                      });
                      (0, S.assert)(
                        l,
                        "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found."
                      );
                    }
                  }
                  get _progressiveDataLength() {
                    return this._fullRequestReader?._loaded ?? 0;
                  }
                  _onProgress(o) {
                    void 0 === o.total
                      ? this._rangeReaders[0]?.onProgress?.({
                          loaded: o.loaded,
                        })
                      : this._fullRequestReader?.onProgress?.({
                          loaded: o.loaded,
                          total: o.total,
                        });
                  }
                  _onProgressiveDone() {
                    this._fullRequestReader?.progressiveDone(),
                      (this._progressiveDone = !0);
                  }
                  _removeRangeReader(o) {
                    let l = this._rangeReaders.indexOf(o);
                    l >= 0 && this._rangeReaders.splice(l, 1);
                  }
                  getFullReader() {
                    (0, S.assert)(
                      !this._fullRequestReader,
                      "PDFDataTransportStream.getFullReader can only be called once."
                    );
                    let o = this._queuedChunks;
                    return (
                      (this._queuedChunks = null),
                      new PDFDataTransportStreamReader(
                        this,
                        o,
                        this._progressiveDone,
                        this._contentDispositionFilename
                      )
                    );
                  }
                  getRangeReader(o, l) {
                    if (l <= this._progressiveDataLength) return null;
                    let _ = new PDFDataTransportStreamRangeReader(this, o, l);
                    return (
                      this._pdfDataRangeTransport.requestDataRange(o, l),
                      this._rangeReaders.push(_),
                      _
                    );
                  }
                  cancelAllRequests(o) {
                    for (let l of (this._fullRequestReader?.cancel(o),
                    this._rangeReaders.slice(0)))
                      l.cancel(o);
                    this._pdfDataRangeTransport.abort();
                  }
                };
                l.PDFDataTransportStream = PDFDataTransportStream;
                let PDFDataTransportStreamReader = class PDFDataTransportStreamReader {
                  constructor(o, l, _ = !1, S = null) {
                    for (let P of ((this._stream = o),
                    (this._done = _ || !1),
                    (this._filename = (0, E.isPdfFile)(S) ? S : null),
                    (this._queuedChunks = l || []),
                    (this._loaded = 0),
                    this._queuedChunks))
                      this._loaded += P.byteLength;
                    (this._requests = []),
                      (this._headersReady = Promise.resolve()),
                      (o._fullRequestReader = this),
                      (this.onProgress = null);
                  }
                  _enqueue(o) {
                    if (!this._done) {
                      if (this._requests.length > 0) {
                        let l = this._requests.shift();
                        l.resolve({ value: o, done: !1 });
                      } else this._queuedChunks.push(o);
                      this._loaded += o.byteLength;
                    }
                  }
                  get headersReady() {
                    return this._headersReady;
                  }
                  get filename() {
                    return this._filename;
                  }
                  get isRangeSupported() {
                    return this._stream._isRangeSupported;
                  }
                  get isStreamingSupported() {
                    return this._stream._isStreamingSupported;
                  }
                  get contentLength() {
                    return this._stream._contentLength;
                  }
                  async read() {
                    if (this._queuedChunks.length > 0) {
                      let o = this._queuedChunks.shift();
                      return { value: o, done: !1 };
                    }
                    if (this._done) return { value: void 0, done: !0 };
                    let o = (0, S.createPromiseCapability)();
                    return this._requests.push(o), o.promise;
                  }
                  cancel(o) {
                    for (let o of ((this._done = !0), this._requests))
                      o.resolve({ value: void 0, done: !0 });
                    this._requests.length = 0;
                  }
                  progressiveDone() {
                    this._done || (this._done = !0);
                  }
                };
                let PDFDataTransportStreamRangeReader = class PDFDataTransportStreamRangeReader {
                  constructor(o, l, _) {
                    (this._stream = o),
                      (this._begin = l),
                      (this._end = _),
                      (this._queuedChunk = null),
                      (this._requests = []),
                      (this._done = !1),
                      (this.onProgress = null);
                  }
                  _enqueue(o) {
                    if (!this._done) {
                      if (0 === this._requests.length) this._queuedChunk = o;
                      else {
                        let l = this._requests.shift();
                        for (let _ of (l.resolve({ value: o, done: !1 }),
                        this._requests))
                          _.resolve({ value: void 0, done: !0 });
                        this._requests.length = 0;
                      }
                      (this._done = !0), this._stream._removeRangeReader(this);
                    }
                  }
                  get isStreamingSupported() {
                    return !1;
                  }
                  async read() {
                    if (this._queuedChunk) {
                      let o = this._queuedChunk;
                      return (this._queuedChunk = null), { value: o, done: !1 };
                    }
                    if (this._done) return { value: void 0, done: !0 };
                    let o = (0, S.createPromiseCapability)();
                    return this._requests.push(o), o.promise;
                  }
                  cancel(o) {
                    for (let o of ((this._done = !0), this._requests))
                      o.resolve({ value: void 0, done: !0 });
                    (this._requests.length = 0),
                      this._stream._removeRangeReader(this);
                  }
                };
              },
              (o, l) => {
                Object.defineProperty(l, "__esModule", { value: !0 }),
                  (l.XfaText = void 0);
                let XfaText = class XfaText {
                  static textContent(o) {
                    let l = [],
                      _ = { items: l, styles: Object.create(null) };
                    function walk(o) {
                      if (!o) return;
                      let _ = null,
                        S = o.name;
                      if ("#text" === S) _ = o.value;
                      else {
                        if (!XfaText.shouldBuildText(S)) return;
                        o?.attributes?.textContent
                          ? (_ = o.attributes.textContent)
                          : o.value && (_ = o.value);
                      }
                      if ((null !== _ && l.push({ str: _ }), o.children))
                        for (let l of o.children) walk(l);
                    }
                    return walk(o), _;
                  }
                  static shouldBuildText(o) {
                    return !(
                      "textarea" === o ||
                      "input" === o ||
                      "option" === o ||
                      "select" === o
                    );
                  }
                };
                l.XfaText = XfaText;
              },
              (o, l, _) => {
                Object.defineProperty(l, "__esModule", { value: !0 }),
                  (l.NodeStandardFontDataFactory =
                    l.NodeCanvasFactory =
                    l.NodeCMapReaderFactory =
                      void 0);
                var S = _(7);
                let fetchData = function (o) {
                  return new Promise((l, _) => {
                    let S = __webpack_require__(25210);
                    S.readFile(o, (o, S) => {
                      if (o || !S) {
                        _(Error(o));
                        return;
                      }
                      l(new Uint8Array(S));
                    });
                  });
                };
                let NodeCanvasFactory = class NodeCanvasFactory extends S.BaseCanvasFactory {
                  _createCanvas(o, l) {
                    let _ = __webpack_require__(37600);
                    return _.createCanvas(o, l);
                  }
                };
                l.NodeCanvasFactory = NodeCanvasFactory;
                let NodeCMapReaderFactory = class NodeCMapReaderFactory extends S.BaseCMapReaderFactory {
                  _fetchData(o, l) {
                    return fetchData(o).then((o) => ({
                      cMapData: o,
                      compressionType: l,
                    }));
                  }
                };
                l.NodeCMapReaderFactory = NodeCMapReaderFactory;
                let NodeStandardFontDataFactory = class NodeStandardFontDataFactory extends S.BaseStandardFontDataFactory {
                  _fetchData(o) {
                    return fetchData(o);
                  }
                };
                l.NodeStandardFontDataFactory = NodeStandardFontDataFactory;
              },
              (o, l, _) => {
                Object.defineProperty(l, "__esModule", { value: !0 }),
                  (l.PDFNodeStream = void 0);
                var S = _(1),
                  E = _(22);
                let P = __webpack_require__(25210),
                  T = __webpack_require__(21473),
                  M = __webpack_require__(97235),
                  F = __webpack_require__(44463),
                  D = /^file:\/\/\/[a-zA-Z]:\//;
                function parseUrl(o) {
                  let l = F.parse(o);
                  return "file:" === l.protocol || l.host
                    ? l
                    : /^[a-z]:[/\\]/i.test(o)
                    ? F.parse(`file:///${o}`)
                    : (l.host || (l.protocol = "file:"), l);
                }
                let PDFNodeStream = class PDFNodeStream {
                  constructor(o) {
                    (this.source = o),
                      (this.url = parseUrl(o.url)),
                      (this.isHttp =
                        "http:" === this.url.protocol ||
                        "https:" === this.url.protocol),
                      (this.isFsUrl = "file:" === this.url.protocol),
                      (this.httpHeaders = (this.isHttp && o.httpHeaders) || {}),
                      (this._fullRequestReader = null),
                      (this._rangeRequestReaders = []);
                  }
                  get _progressiveDataLength() {
                    return this._fullRequestReader?._loaded ?? 0;
                  }
                  getFullReader() {
                    return (
                      (0, S.assert)(
                        !this._fullRequestReader,
                        "PDFNodeStream.getFullReader can only be called once."
                      ),
                      (this._fullRequestReader = this.isFsUrl
                        ? new PDFNodeStreamFsFullReader(this)
                        : new PDFNodeStreamFullReader(this)),
                      this._fullRequestReader
                    );
                  }
                  getRangeReader(o, l) {
                    if (l <= this._progressiveDataLength) return null;
                    let _ = this.isFsUrl
                      ? new PDFNodeStreamFsRangeReader(this, o, l)
                      : new PDFNodeStreamRangeReader(this, o, l);
                    return this._rangeRequestReaders.push(_), _;
                  }
                  cancelAllRequests(o) {
                    for (let l of (this._fullRequestReader?.cancel(o),
                    this._rangeRequestReaders.slice(0)))
                      l.cancel(o);
                  }
                };
                l.PDFNodeStream = PDFNodeStream;
                let BaseFullReader = class BaseFullReader {
                  constructor(o) {
                    (this._url = o.url),
                      (this._done = !1),
                      (this._storedError = null),
                      (this.onProgress = null);
                    let l = o.source;
                    (this._contentLength = l.length),
                      (this._loaded = 0),
                      (this._filename = null),
                      (this._disableRange = l.disableRange || !1),
                      (this._rangeChunkSize = l.rangeChunkSize),
                      this._rangeChunkSize ||
                        this._disableRange ||
                        (this._disableRange = !0),
                      (this._isStreamingSupported = !l.disableStream),
                      (this._isRangeSupported = !l.disableRange),
                      (this._readableStream = null),
                      (this._readCapability = (0, S.createPromiseCapability)()),
                      (this._headersCapability = (0,
                      S.createPromiseCapability)());
                  }
                  get headersReady() {
                    return this._headersCapability.promise;
                  }
                  get filename() {
                    return this._filename;
                  }
                  get contentLength() {
                    return this._contentLength;
                  }
                  get isRangeSupported() {
                    return this._isRangeSupported;
                  }
                  get isStreamingSupported() {
                    return this._isStreamingSupported;
                  }
                  async read() {
                    if ((await this._readCapability.promise, this._done))
                      return { value: void 0, done: !0 };
                    if (this._storedError) throw this._storedError;
                    let o = this._readableStream.read();
                    if (null === o)
                      return (
                        (this._readCapability = (0,
                        S.createPromiseCapability)()),
                        this.read()
                      );
                    (this._loaded += o.length),
                      this.onProgress?.({
                        loaded: this._loaded,
                        total: this._contentLength,
                      });
                    let l = new Uint8Array(o).buffer;
                    return { value: l, done: !1 };
                  }
                  cancel(o) {
                    if (!this._readableStream) {
                      this._error(o);
                      return;
                    }
                    this._readableStream.destroy(o);
                  }
                  _error(o) {
                    (this._storedError = o), this._readCapability.resolve();
                  }
                  _setReadableStream(o) {
                    (this._readableStream = o),
                      o.on("readable", () => {
                        this._readCapability.resolve();
                      }),
                      o.on("end", () => {
                        o.destroy(),
                          (this._done = !0),
                          this._readCapability.resolve();
                      }),
                      o.on("error", (o) => {
                        this._error(o);
                      }),
                      !this._isStreamingSupported &&
                        this._isRangeSupported &&
                        this._error(
                          new S.AbortException("streaming is disabled")
                        ),
                      this._storedError &&
                        this._readableStream.destroy(this._storedError);
                  }
                };
                let BaseRangeReader = class BaseRangeReader {
                  constructor(o) {
                    (this._url = o.url),
                      (this._done = !1),
                      (this._storedError = null),
                      (this.onProgress = null),
                      (this._loaded = 0),
                      (this._readableStream = null),
                      (this._readCapability = (0, S.createPromiseCapability)());
                    let l = o.source;
                    this._isStreamingSupported = !l.disableStream;
                  }
                  get isStreamingSupported() {
                    return this._isStreamingSupported;
                  }
                  async read() {
                    if ((await this._readCapability.promise, this._done))
                      return { value: void 0, done: !0 };
                    if (this._storedError) throw this._storedError;
                    let o = this._readableStream.read();
                    if (null === o)
                      return (
                        (this._readCapability = (0,
                        S.createPromiseCapability)()),
                        this.read()
                      );
                    (this._loaded += o.length),
                      this.onProgress?.({ loaded: this._loaded });
                    let l = new Uint8Array(o).buffer;
                    return { value: l, done: !1 };
                  }
                  cancel(o) {
                    if (!this._readableStream) {
                      this._error(o);
                      return;
                    }
                    this._readableStream.destroy(o);
                  }
                  _error(o) {
                    (this._storedError = o), this._readCapability.resolve();
                  }
                  _setReadableStream(o) {
                    (this._readableStream = o),
                      o.on("readable", () => {
                        this._readCapability.resolve();
                      }),
                      o.on("end", () => {
                        o.destroy(),
                          (this._done = !0),
                          this._readCapability.resolve();
                      }),
                      o.on("error", (o) => {
                        this._error(o);
                      }),
                      this._storedError &&
                        this._readableStream.destroy(this._storedError);
                  }
                };
                function createRequestOptions(o, l) {
                  return {
                    protocol: o.protocol,
                    auth: o.auth,
                    host: o.hostname,
                    port: o.port,
                    path: o.path,
                    method: "GET",
                    headers: l,
                  };
                }
                let PDFNodeStreamFullReader = class PDFNodeStreamFullReader extends BaseFullReader {
                  constructor(o) {
                    super(o);
                    let handleResponse = (l) => {
                      if (404 === l.statusCode) {
                        let o = new S.MissingPDFException(
                          `Missing PDF "${this._url}".`
                        );
                        (this._storedError = o),
                          this._headersCapability.reject(o);
                        return;
                      }
                      this._headersCapability.resolve(),
                        this._setReadableStream(l);
                      let getResponseHeader = (o) =>
                          this._readableStream.headers[o.toLowerCase()],
                        { allowRangeRequests: _, suggestedLength: P } = (0,
                        E.validateRangeRequestCapabilities)({
                          getResponseHeader,
                          isHttp: o.isHttp,
                          rangeChunkSize: this._rangeChunkSize,
                          disableRange: this._disableRange,
                        });
                      (this._isRangeSupported = _),
                        (this._contentLength = P || this._contentLength),
                        (this._filename = (0, E.extractFilenameFromHeader)(
                          getResponseHeader
                        ));
                    };
                    (this._request = null),
                      "http:" === this._url.protocol
                        ? (this._request = T.request(
                            createRequestOptions(this._url, o.httpHeaders),
                            handleResponse
                          ))
                        : (this._request = M.request(
                            createRequestOptions(this._url, o.httpHeaders),
                            handleResponse
                          )),
                      this._request.on("error", (o) => {
                        (this._storedError = o),
                          this._headersCapability.reject(o);
                      }),
                      this._request.end();
                  }
                };
                let PDFNodeStreamRangeReader = class PDFNodeStreamRangeReader extends BaseRangeReader {
                  constructor(o, l, _) {
                    for (let l in (super(o),
                    (this._httpHeaders = {}),
                    o.httpHeaders)) {
                      let _ = o.httpHeaders[l];
                      void 0 !== _ && (this._httpHeaders[l] = _);
                    }
                    this._httpHeaders.Range = `bytes=${l}-${_ - 1}`;
                    let handleResponse = (o) => {
                      if (404 === o.statusCode) {
                        let o = new S.MissingPDFException(
                          `Missing PDF "${this._url}".`
                        );
                        this._storedError = o;
                        return;
                      }
                      this._setReadableStream(o);
                    };
                    (this._request = null),
                      "http:" === this._url.protocol
                        ? (this._request = T.request(
                            createRequestOptions(this._url, this._httpHeaders),
                            handleResponse
                          ))
                        : (this._request = M.request(
                            createRequestOptions(this._url, this._httpHeaders),
                            handleResponse
                          )),
                      this._request.on("error", (o) => {
                        this._storedError = o;
                      }),
                      this._request.end();
                  }
                };
                let PDFNodeStreamFsFullReader = class PDFNodeStreamFsFullReader extends BaseFullReader {
                  constructor(o) {
                    super(o);
                    let l = decodeURIComponent(this._url.path);
                    D.test(this._url.href) && (l = l.replace(/^\//, "")),
                      P.lstat(l, (o, _) => {
                        if (o) {
                          "ENOENT" === o.code &&
                            (o = new S.MissingPDFException(
                              `Missing PDF "${l}".`
                            )),
                            (this._storedError = o),
                            this._headersCapability.reject(o);
                          return;
                        }
                        (this._contentLength = _.size),
                          this._setReadableStream(P.createReadStream(l)),
                          this._headersCapability.resolve();
                      });
                  }
                };
                let PDFNodeStreamFsRangeReader = class PDFNodeStreamFsRangeReader extends BaseRangeReader {
                  constructor(o, l, _) {
                    super(o);
                    let S = decodeURIComponent(this._url.path);
                    D.test(this._url.href) && (S = S.replace(/^\//, "")),
                      this._setReadableStream(
                        P.createReadStream(S, { start: l, end: _ - 1 })
                      );
                  }
                };
              },
              (o, l, _) => {
                Object.defineProperty(l, "__esModule", { value: !0 }),
                  (l.createResponseStatusError = createResponseStatusError),
                  (l.extractFilenameFromHeader = extractFilenameFromHeader),
                  (l.validateRangeRequestCapabilities =
                    validateRangeRequestCapabilities),
                  (l.validateResponseStatus = validateResponseStatus);
                var S = _(1),
                  E = _(23),
                  P = _(6);
                function validateRangeRequestCapabilities({
                  getResponseHeader: o,
                  isHttp: l,
                  rangeChunkSize: _,
                  disableRange: S,
                }) {
                  let E = { allowRangeRequests: !1, suggestedLength: void 0 },
                    P = parseInt(o("Content-Length"), 10);
                  if (
                    !Number.isInteger(P) ||
                    ((E.suggestedLength = P),
                    P <= 2 * _ || S || !l || "bytes" !== o("Accept-Ranges"))
                  )
                    return E;
                  let T = o("Content-Encoding") || "identity";
                  return "identity" !== T || (E.allowRangeRequests = !0), E;
                }
                function extractFilenameFromHeader(o) {
                  let l = o("Content-Disposition");
                  if (l) {
                    let o = (0, E.getFilenameFromContentDispositionHeader)(l);
                    if (o.includes("%"))
                      try {
                        o = decodeURIComponent(o);
                      } catch (o) {}
                    if ((0, P.isPdfFile)(o)) return o;
                  }
                  return null;
                }
                function createResponseStatusError(o, l) {
                  return 404 === o || (0 === o && l.startsWith("file:"))
                    ? new S.MissingPDFException('Missing PDF "' + l + '".')
                    : new S.UnexpectedResponseException(
                        `Unexpected server response (${o}) while retrieving PDF "${l}".`,
                        o
                      );
                }
                function validateResponseStatus(o) {
                  return 200 === o || 206 === o;
                }
              },
              (o, l, _) => {
                Object.defineProperty(l, "__esModule", { value: !0 }),
                  (l.getFilenameFromContentDispositionHeader =
                    getFilenameFromContentDispositionHeader);
                var S = _(1);
                function getFilenameFromContentDispositionHeader(o) {
                  let l = !0,
                    _ = toParamRegExp("filename\\*", "i").exec(o);
                  if (_) {
                    let o = rfc2616unquote((_ = _[1]));
                    return fixupEncoding(
                      (o = rfc2047decode(
                        (o = rfc5987decode((o = unescape(o))))
                      ))
                    );
                  }
                  if ((_ = rfc2231getparam(o))) {
                    let o = rfc2047decode(_);
                    return fixupEncoding(o);
                  }
                  if ((_ = toParamRegExp("filename", "i").exec(o))) {
                    let o = rfc2616unquote((_ = _[1]));
                    return fixupEncoding((o = rfc2047decode(o)));
                  }
                  function toParamRegExp(o, l) {
                    return RegExp(
                      "(?:^|;)\\s*" +
                        o +
                        '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)',
                      l
                    );
                  }
                  function textdecode(o, _) {
                    if (o) {
                      if (!/^[\x00-\xFF]+$/.test(_)) return _;
                      try {
                        let E = new TextDecoder(o, { fatal: !0 }),
                          P = (0, S.stringToBytes)(_);
                        (_ = E.decode(P)), (l = !1);
                      } catch (o) {}
                    }
                    return _;
                  }
                  function fixupEncoding(o) {
                    return (
                      l &&
                        /[\x80-\xff]/.test(o) &&
                        ((o = textdecode("utf-8", o)),
                        l && (o = textdecode("iso-8859-1", o))),
                      o
                    );
                  }
                  function rfc2231getparam(o) {
                    let l;
                    let _ = [],
                      S = toParamRegExp(
                        "filename\\*((?!0\\d)\\d+)(\\*?)",
                        "ig"
                      );
                    for (; null !== (l = S.exec(o)); ) {
                      let [, o, S, E] = l;
                      if ((o = parseInt(o, 10)) in _) {
                        if (0 === o) break;
                        continue;
                      }
                      _[o] = [S, E];
                    }
                    let E = [];
                    for (let o = 0; o < _.length && o in _; ++o) {
                      let [l, S] = _[o];
                      (S = rfc2616unquote(S)),
                        l &&
                          ((S = unescape(S)),
                          0 === o && (S = rfc5987decode(S))),
                        E.push(S);
                    }
                    return E.join("");
                  }
                  function rfc2616unquote(o) {
                    if (o.startsWith('"')) {
                      let l = o.slice(1).split('\\"');
                      for (let o = 0; o < l.length; ++o) {
                        let _ = l[o].indexOf('"');
                        -1 !== _ &&
                          ((l[o] = l[o].slice(0, _)), (l.length = o + 1)),
                          (l[o] = l[o].replace(/\\(.)/g, "$1"));
                      }
                      o = l.join('"');
                    }
                    return o;
                  }
                  function rfc5987decode(o) {
                    let l = o.indexOf("'");
                    if (-1 === l) return o;
                    let _ = o.slice(0, l),
                      S = o.slice(l + 1),
                      E = S.replace(/^[^']*'/, "");
                    return textdecode(_, E);
                  }
                  function rfc2047decode(o) {
                    return !o.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(o)
                      ? o
                      : o.replace(
                          /=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g,
                          function (o, l, _, S) {
                            if ("q" === _ || "Q" === _)
                              return textdecode(
                                l,
                                (S = (S = S.replace(/_/g, " ")).replace(
                                  /=([0-9a-fA-F]{2})/g,
                                  function (o, l) {
                                    return String.fromCharCode(parseInt(l, 16));
                                  }
                                ))
                              );
                            try {
                              S = atob(S);
                            } catch (o) {}
                            return textdecode(l, S);
                          }
                        );
                  }
                  return "";
                }
              },
              (o, l, _) => {
                Object.defineProperty(l, "__esModule", { value: !0 }),
                  (l.PDFNetworkStream = void 0);
                var S = _(1),
                  E = _(22);
                let P = 200,
                  T = 206;
                function getArrayBuffer(o) {
                  let l = o.response;
                  return "string" != typeof l
                    ? l
                    : (0, S.stringToBytes)(l).buffer;
                }
                let NetworkManager = class NetworkManager {
                  constructor(o, l = {}) {
                    (this.url = o),
                      (this.isHttp = /^https?:/i.test(o)),
                      (this.httpHeaders =
                        (this.isHttp && l.httpHeaders) || Object.create(null)),
                      (this.withCredentials = l.withCredentials || !1),
                      (this.getXhr =
                        l.getXhr ||
                        function () {
                          return new XMLHttpRequest();
                        }),
                      (this.currXhrId = 0),
                      (this.pendingRequests = Object.create(null));
                  }
                  requestRange(o, l, _) {
                    let S = { begin: o, end: l };
                    for (let o in _) S[o] = _[o];
                    return this.request(S);
                  }
                  requestFull(o) {
                    return this.request(o);
                  }
                  request(o) {
                    let l = this.getXhr(),
                      _ = this.currXhrId++,
                      S = (this.pendingRequests[_] = { xhr: l });
                    for (let o in (l.open("GET", this.url),
                    (l.withCredentials = this.withCredentials),
                    this.httpHeaders)) {
                      let _ = this.httpHeaders[o];
                      void 0 !== _ && l.setRequestHeader(o, _);
                    }
                    return (
                      this.isHttp && "begin" in o && "end" in o
                        ? (l.setRequestHeader(
                            "Range",
                            `bytes=${o.begin}-${o.end - 1}`
                          ),
                          (S.expectedStatus = T))
                        : (S.expectedStatus = P),
                      (l.responseType = "arraybuffer"),
                      o.onError &&
                        (l.onerror = function (_) {
                          o.onError(l.status);
                        }),
                      (l.onreadystatechange = this.onStateChange.bind(this, _)),
                      (l.onprogress = this.onProgress.bind(this, _)),
                      (S.onHeadersReceived = o.onHeadersReceived),
                      (S.onDone = o.onDone),
                      (S.onError = o.onError),
                      (S.onProgress = o.onProgress),
                      l.send(null),
                      _
                    );
                  }
                  onProgress(o, l) {
                    let _ = this.pendingRequests[o];
                    _ && _.onProgress?.(l);
                  }
                  onStateChange(o, l) {
                    let _ = this.pendingRequests[o];
                    if (!_) return;
                    let S = _.xhr;
                    if (
                      (S.readyState >= 2 &&
                        _.onHeadersReceived &&
                        (_.onHeadersReceived(), delete _.onHeadersReceived),
                      4 !== S.readyState || !(o in this.pendingRequests))
                    )
                      return;
                    if (
                      (delete this.pendingRequests[o],
                      0 === S.status && this.isHttp)
                    ) {
                      _.onError?.(S.status);
                      return;
                    }
                    let E = S.status || P,
                      M = E === P && _.expectedStatus === T;
                    if (!M && E !== _.expectedStatus) {
                      _.onError?.(S.status);
                      return;
                    }
                    let F = getArrayBuffer(S);
                    if (E === T) {
                      let o = S.getResponseHeader("Content-Range"),
                        l = /bytes (\d+)-(\d+)\/(\d+)/.exec(o);
                      _.onDone({ begin: parseInt(l[1], 10), chunk: F });
                    } else
                      F
                        ? _.onDone({ begin: 0, chunk: F })
                        : _.onError?.(S.status);
                  }
                  getRequestXhr(o) {
                    return this.pendingRequests[o].xhr;
                  }
                  isPendingRequest(o) {
                    return o in this.pendingRequests;
                  }
                  abortRequest(o) {
                    let l = this.pendingRequests[o].xhr;
                    delete this.pendingRequests[o], l.abort();
                  }
                };
                let PDFNetworkStream = class PDFNetworkStream {
                  constructor(o) {
                    (this._source = o),
                      (this._manager = new NetworkManager(o.url, {
                        httpHeaders: o.httpHeaders,
                        withCredentials: o.withCredentials,
                      })),
                      (this._rangeChunkSize = o.rangeChunkSize),
                      (this._fullRequestReader = null),
                      (this._rangeRequestReaders = []);
                  }
                  _onRangeRequestReaderClosed(o) {
                    let l = this._rangeRequestReaders.indexOf(o);
                    l >= 0 && this._rangeRequestReaders.splice(l, 1);
                  }
                  getFullReader() {
                    return (
                      (0, S.assert)(
                        !this._fullRequestReader,
                        "PDFNetworkStream.getFullReader can only be called once."
                      ),
                      (this._fullRequestReader =
                        new PDFNetworkStreamFullRequestReader(
                          this._manager,
                          this._source
                        )),
                      this._fullRequestReader
                    );
                  }
                  getRangeReader(o, l) {
                    let _ = new PDFNetworkStreamRangeRequestReader(
                      this._manager,
                      o,
                      l
                    );
                    return (
                      (_.onClosed =
                        this._onRangeRequestReaderClosed.bind(this)),
                      this._rangeRequestReaders.push(_),
                      _
                    );
                  }
                  cancelAllRequests(o) {
                    for (let l of (this._fullRequestReader?.cancel(o),
                    this._rangeRequestReaders.slice(0)))
                      l.cancel(o);
                  }
                };
                l.PDFNetworkStream = PDFNetworkStream;
                let PDFNetworkStreamFullRequestReader = class PDFNetworkStreamFullRequestReader {
                  constructor(o, l) {
                    this._manager = o;
                    let _ = {
                      onHeadersReceived: this._onHeadersReceived.bind(this),
                      onDone: this._onDone.bind(this),
                      onError: this._onError.bind(this),
                      onProgress: this._onProgress.bind(this),
                    };
                    (this._url = l.url),
                      (this._fullRequestId = o.requestFull(_)),
                      (this._headersReceivedCapability = (0,
                      S.createPromiseCapability)()),
                      (this._disableRange = l.disableRange || !1),
                      (this._contentLength = l.length),
                      (this._rangeChunkSize = l.rangeChunkSize),
                      this._rangeChunkSize ||
                        this._disableRange ||
                        (this._disableRange = !0),
                      (this._isStreamingSupported = !1),
                      (this._isRangeSupported = !1),
                      (this._cachedChunks = []),
                      (this._requests = []),
                      (this._done = !1),
                      (this._storedError = void 0),
                      (this._filename = null),
                      (this.onProgress = null);
                  }
                  _onHeadersReceived() {
                    let o = this._fullRequestId,
                      l = this._manager.getRequestXhr(o),
                      getResponseHeader = (o) => l.getResponseHeader(o),
                      { allowRangeRequests: _, suggestedLength: S } = (0,
                      E.validateRangeRequestCapabilities)({
                        getResponseHeader,
                        isHttp: this._manager.isHttp,
                        rangeChunkSize: this._rangeChunkSize,
                        disableRange: this._disableRange,
                      });
                    _ && (this._isRangeSupported = !0),
                      (this._contentLength = S || this._contentLength),
                      (this._filename = (0, E.extractFilenameFromHeader)(
                        getResponseHeader
                      )),
                      this._isRangeSupported && this._manager.abortRequest(o),
                      this._headersReceivedCapability.resolve();
                  }
                  _onDone(o) {
                    if (o) {
                      if (this._requests.length > 0) {
                        let l = this._requests.shift();
                        l.resolve({ value: o.chunk, done: !1 });
                      } else this._cachedChunks.push(o.chunk);
                    }
                    if (((this._done = !0), !(this._cachedChunks.length > 0))) {
                      for (let o of this._requests)
                        o.resolve({ value: void 0, done: !0 });
                      this._requests.length = 0;
                    }
                  }
                  _onError(o) {
                    for (let l of ((this._storedError = (0,
                    E.createResponseStatusError)(o, this._url)),
                    this._headersReceivedCapability.reject(this._storedError),
                    this._requests))
                      l.reject(this._storedError);
                    (this._requests.length = 0),
                      (this._cachedChunks.length = 0);
                  }
                  _onProgress(o) {
                    this.onProgress?.({
                      loaded: o.loaded,
                      total: o.lengthComputable ? o.total : this._contentLength,
                    });
                  }
                  get filename() {
                    return this._filename;
                  }
                  get isRangeSupported() {
                    return this._isRangeSupported;
                  }
                  get isStreamingSupported() {
                    return this._isStreamingSupported;
                  }
                  get contentLength() {
                    return this._contentLength;
                  }
                  get headersReady() {
                    return this._headersReceivedCapability.promise;
                  }
                  async read() {
                    if (this._storedError) throw this._storedError;
                    if (this._cachedChunks.length > 0) {
                      let o = this._cachedChunks.shift();
                      return { value: o, done: !1 };
                    }
                    if (this._done) return { value: void 0, done: !0 };
                    let o = (0, S.createPromiseCapability)();
                    return this._requests.push(o), o.promise;
                  }
                  cancel(o) {
                    for (let l of ((this._done = !0),
                    this._headersReceivedCapability.reject(o),
                    this._requests))
                      l.resolve({ value: void 0, done: !0 });
                    (this._requests.length = 0),
                      this._manager.isPendingRequest(this._fullRequestId) &&
                        this._manager.abortRequest(this._fullRequestId),
                      (this._fullRequestReader = null);
                  }
                };
                let PDFNetworkStreamRangeRequestReader = class PDFNetworkStreamRangeRequestReader {
                  constructor(o, l, _) {
                    this._manager = o;
                    let S = {
                      onDone: this._onDone.bind(this),
                      onError: this._onError.bind(this),
                      onProgress: this._onProgress.bind(this),
                    };
                    (this._url = o.url),
                      (this._requestId = o.requestRange(l, _, S)),
                      (this._requests = []),
                      (this._queuedChunk = null),
                      (this._done = !1),
                      (this._storedError = void 0),
                      (this.onProgress = null),
                      (this.onClosed = null);
                  }
                  _close() {
                    this.onClosed?.(this);
                  }
                  _onDone(o) {
                    let l = o.chunk;
                    if (this._requests.length > 0) {
                      let o = this._requests.shift();
                      o.resolve({ value: l, done: !1 });
                    } else this._queuedChunk = l;
                    for (let o of ((this._done = !0), this._requests))
                      o.resolve({ value: void 0, done: !0 });
                    (this._requests.length = 0), this._close();
                  }
                  _onError(o) {
                    for (let l of ((this._storedError = (0,
                    E.createResponseStatusError)(o, this._url)),
                    this._requests))
                      l.reject(this._storedError);
                    (this._requests.length = 0), (this._queuedChunk = null);
                  }
                  _onProgress(o) {
                    this.isStreamingSupported ||
                      this.onProgress?.({ loaded: o.loaded });
                  }
                  get isStreamingSupported() {
                    return !1;
                  }
                  async read() {
                    if (this._storedError) throw this._storedError;
                    if (null !== this._queuedChunk) {
                      let o = this._queuedChunk;
                      return (this._queuedChunk = null), { value: o, done: !1 };
                    }
                    if (this._done) return { value: void 0, done: !0 };
                    let o = (0, S.createPromiseCapability)();
                    return this._requests.push(o), o.promise;
                  }
                  cancel(o) {
                    for (let o of ((this._done = !0), this._requests))
                      o.resolve({ value: void 0, done: !0 });
                    (this._requests.length = 0),
                      this._manager.isPendingRequest(this._requestId) &&
                        this._manager.abortRequest(this._requestId),
                      this._close();
                  }
                };
              },
              (o, l, _) => {
                Object.defineProperty(l, "__esModule", { value: !0 }),
                  (l.PDFFetchStream = void 0);
                var S = _(1),
                  E = _(22);
                function createFetchOptions(o, l, _) {
                  return {
                    method: "GET",
                    headers: o,
                    signal: _.signal,
                    mode: "cors",
                    credentials: l ? "include" : "same-origin",
                    redirect: "follow",
                  };
                }
                function createHeaders(o) {
                  let l = new Headers();
                  for (let _ in o) {
                    let S = o[_];
                    void 0 !== S && l.append(_, S);
                  }
                  return l;
                }
                function getArrayBuffer(o) {
                  return o instanceof Uint8Array
                    ? o.buffer
                    : o instanceof ArrayBuffer
                    ? o
                    : ((0, S.warn)(
                        `getArrayBuffer - unexpected data format: ${o}`
                      ),
                      new Uint8Array(o).buffer);
                }
                let PDFFetchStream = class PDFFetchStream {
                  constructor(o) {
                    (this.source = o),
                      (this.isHttp = /^https?:/i.test(o.url)),
                      (this.httpHeaders = (this.isHttp && o.httpHeaders) || {}),
                      (this._fullRequestReader = null),
                      (this._rangeRequestReaders = []);
                  }
                  get _progressiveDataLength() {
                    return this._fullRequestReader?._loaded ?? 0;
                  }
                  getFullReader() {
                    return (
                      (0, S.assert)(
                        !this._fullRequestReader,
                        "PDFFetchStream.getFullReader can only be called once."
                      ),
                      (this._fullRequestReader = new PDFFetchStreamReader(
                        this
                      )),
                      this._fullRequestReader
                    );
                  }
                  getRangeReader(o, l) {
                    if (l <= this._progressiveDataLength) return null;
                    let _ = new PDFFetchStreamRangeReader(this, o, l);
                    return this._rangeRequestReaders.push(_), _;
                  }
                  cancelAllRequests(o) {
                    for (let l of (this._fullRequestReader?.cancel(o),
                    this._rangeRequestReaders.slice(0)))
                      l.cancel(o);
                  }
                };
                l.PDFFetchStream = PDFFetchStream;
                let PDFFetchStreamReader = class PDFFetchStreamReader {
                  constructor(o) {
                    (this._stream = o),
                      (this._reader = null),
                      (this._loaded = 0),
                      (this._filename = null);
                    let l = o.source;
                    (this._withCredentials = l.withCredentials || !1),
                      (this._contentLength = l.length),
                      (this._headersCapability = (0,
                      S.createPromiseCapability)()),
                      (this._disableRange = l.disableRange || !1),
                      (this._rangeChunkSize = l.rangeChunkSize),
                      this._rangeChunkSize ||
                        this._disableRange ||
                        (this._disableRange = !0),
                      (this._abortController = new AbortController()),
                      (this._isStreamingSupported = !l.disableStream),
                      (this._isRangeSupported = !l.disableRange),
                      (this._headers = createHeaders(this._stream.httpHeaders));
                    let _ = l.url;
                    fetch(
                      _,
                      createFetchOptions(
                        this._headers,
                        this._withCredentials,
                        this._abortController
                      )
                    )
                      .then((o) => {
                        if (!(0, E.validateResponseStatus)(o.status))
                          throw (0, E.createResponseStatusError)(o.status, _);
                        (this._reader = o.body.getReader()),
                          this._headersCapability.resolve();
                        let getResponseHeader = (l) => o.headers.get(l),
                          { allowRangeRequests: l, suggestedLength: P } = (0,
                          E.validateRangeRequestCapabilities)({
                            getResponseHeader,
                            isHttp: this._stream.isHttp,
                            rangeChunkSize: this._rangeChunkSize,
                            disableRange: this._disableRange,
                          });
                        (this._isRangeSupported = l),
                          (this._contentLength = P || this._contentLength),
                          (this._filename = (0, E.extractFilenameFromHeader)(
                            getResponseHeader
                          )),
                          !this._isStreamingSupported &&
                            this._isRangeSupported &&
                            this.cancel(
                              new S.AbortException("Streaming is disabled.")
                            );
                      })
                      .catch(this._headersCapability.reject),
                      (this.onProgress = null);
                  }
                  get headersReady() {
                    return this._headersCapability.promise;
                  }
                  get filename() {
                    return this._filename;
                  }
                  get contentLength() {
                    return this._contentLength;
                  }
                  get isRangeSupported() {
                    return this._isRangeSupported;
                  }
                  get isStreamingSupported() {
                    return this._isStreamingSupported;
                  }
                  async read() {
                    await this._headersCapability.promise;
                    let { value: o, done: l } = await this._reader.read();
                    return l
                      ? { value: o, done: l }
                      : ((this._loaded += o.byteLength),
                        this.onProgress?.({
                          loaded: this._loaded,
                          total: this._contentLength,
                        }),
                        { value: getArrayBuffer(o), done: !1 });
                  }
                  cancel(o) {
                    this._reader?.cancel(o), this._abortController.abort();
                  }
                };
                let PDFFetchStreamRangeReader = class PDFFetchStreamRangeReader {
                  constructor(o, l, _) {
                    (this._stream = o),
                      (this._reader = null),
                      (this._loaded = 0);
                    let P = o.source;
                    (this._withCredentials = P.withCredentials || !1),
                      (this._readCapability = (0, S.createPromiseCapability)()),
                      (this._isStreamingSupported = !P.disableStream),
                      (this._abortController = new AbortController()),
                      (this._headers = createHeaders(this._stream.httpHeaders)),
                      this._headers.append("Range", `bytes=${l}-${_ - 1}`);
                    let T = P.url;
                    fetch(
                      T,
                      createFetchOptions(
                        this._headers,
                        this._withCredentials,
                        this._abortController
                      )
                    )
                      .then((o) => {
                        if (!(0, E.validateResponseStatus)(o.status))
                          throw (0, E.createResponseStatusError)(o.status, T);
                        this._readCapability.resolve(),
                          (this._reader = o.body.getReader());
                      })
                      .catch(this._readCapability.reject),
                      (this.onProgress = null);
                  }
                  get isStreamingSupported() {
                    return this._isStreamingSupported;
                  }
                  async read() {
                    await this._readCapability.promise;
                    let { value: o, done: l } = await this._reader.read();
                    return l
                      ? { value: o, done: l }
                      : ((this._loaded += o.byteLength),
                        this.onProgress?.({ loaded: this._loaded }),
                        { value: getArrayBuffer(o), done: !1 });
                  }
                  cancel(o) {
                    this._reader?.cancel(o), this._abortController.abort();
                  }
                };
              },
              (o, l, _) => {
                Object.defineProperty(l, "__esModule", { value: !0 }),
                  (l.TextLayerRenderTask = void 0),
                  (l.renderTextLayer = renderTextLayer),
                  (l.updateTextLayer = updateTextLayer);
                var S = _(1),
                  E = _(6);
                let P = 1e5,
                  T = 30,
                  M = 0.8,
                  F = new Map();
                function getCtx(o, l) {
                  let _;
                  if (l && S.FeatureTest.isOffscreenCanvasSupported)
                    _ = new OffscreenCanvas(o, o).getContext("2d", {
                      alpha: !1,
                    });
                  else {
                    let l = document.createElement("canvas");
                    (l.width = l.height = o),
                      (_ = l.getContext("2d", { alpha: !1 }));
                  }
                  return _;
                }
                function getAscent(o, l) {
                  let _ = F.get(o);
                  if (_) return _;
                  let S = getCtx(T, l);
                  S.font = `${T}px ${o}`;
                  let E = S.measureText(""),
                    P = E.fontBoundingBoxAscent,
                    D = Math.abs(E.fontBoundingBoxDescent);
                  if (P) {
                    let l = P / (P + D);
                    return (
                      F.set(o, l), (S.canvas.width = S.canvas.height = 0), l
                    );
                  }
                  (S.strokeStyle = "red"),
                    S.clearRect(0, 0, T, T),
                    S.strokeText("g", 0, 0);
                  let I = S.getImageData(0, 0, T, T).data;
                  D = 0;
                  for (let o = I.length - 1 - 3; o >= 0; o -= 4)
                    if (I[o] > 0) {
                      D = Math.ceil(o / 4 / T);
                      break;
                    }
                  S.clearRect(0, 0, T, T),
                    S.strokeText("A", 0, T),
                    (I = S.getImageData(0, 0, T, T).data),
                    (P = 0);
                  for (let o = 0, l = I.length; o < l; o += 4)
                    if (I[o] > 0) {
                      P = T - Math.floor(o / 4 / T);
                      break;
                    }
                  if (((S.canvas.width = S.canvas.height = 0), P)) {
                    let l = P / (P + D);
                    return F.set(o, l), l;
                  }
                  return F.set(o, M), M;
                }
                function appendText(o, l, _) {
                  let E, P;
                  let T = document.createElement("span"),
                    M = {
                      angle: 0,
                      canvasWidth: 0,
                      hasText: "" !== l.str,
                      hasEOL: l.hasEOL,
                      fontSize: 0,
                    };
                  o._textDivs.push(T);
                  let F = S.Util.transform(o._transform, l.transform),
                    D = Math.atan2(F[1], F[0]),
                    I = _[l.fontName];
                  I.vertical && (D += Math.PI / 2);
                  let O = Math.hypot(F[2], F[3]),
                    L =
                      O *
                      getAscent(I.fontFamily, o._isOffscreenCanvasSupported);
                  0 === D
                    ? ((E = F[4]), (P = F[5] - L))
                    : ((E = F[4] + L * Math.sin(D)),
                      (P = F[5] - L * Math.cos(D)));
                  let N = "calc(var(--scale-factor)*",
                    U = T.style;
                  o._container === o._rootContainer
                    ? ((U.left = `${((100 * E) / o._pageWidth).toFixed(2)}%`),
                      (U.top = `${((100 * P) / o._pageHeight).toFixed(2)}%`))
                    : ((U.left = `${N}${E.toFixed(2)}px)`),
                      (U.top = `${N}${P.toFixed(2)}px)`)),
                    (U.fontSize = `${N}${O.toFixed(2)}px)`),
                    (U.fontFamily = I.fontFamily),
                    (M.fontSize = O),
                    T.setAttribute("role", "presentation"),
                    (T.textContent = l.str),
                    (T.dir = l.dir),
                    o._fontInspectorEnabled &&
                      (T.dataset.fontName = l.fontName),
                    0 !== D && (M.angle = D * (180 / Math.PI));
                  let W = !1;
                  if (l.str.length > 1) W = !0;
                  else if (" " !== l.str && l.transform[0] !== l.transform[3]) {
                    let o = Math.abs(l.transform[0]),
                      _ = Math.abs(l.transform[3]);
                    o !== _ &&
                      Math.max(o, _) / Math.min(o, _) > 1.5 &&
                      (W = !0);
                  }
                  W && (M.canvasWidth = I.vertical ? l.height : l.width),
                    o._textDivProperties.set(T, M),
                    o._isReadableStream && o._layoutText(T);
                }
                function layout(o) {
                  let {
                      div: l,
                      scale: _,
                      properties: S,
                      ctx: E,
                      prevFontSize: P,
                      prevFontFamily: T,
                    } = o,
                    { style: M } = l,
                    F = "";
                  if (0 !== S.canvasWidth && S.hasText) {
                    let { fontFamily: D } = M,
                      { canvasWidth: I, fontSize: O } = S;
                    (P !== O || T !== D) &&
                      ((E.font = `${O * _}px ${D}`),
                      (o.prevFontSize = O),
                      (o.prevFontFamily = D));
                    let { width: L } = E.measureText(l.textContent);
                    L > 0 && (F = `scaleX(${(I * _) / L})`);
                  }
                  0 !== S.angle && (F = `rotate(${S.angle}deg) ${F}`),
                    F.length > 0 && (M.transform = F);
                }
                function render(o) {
                  if (o._canceled) return;
                  let l = o._textDivs,
                    _ = o._capability,
                    S = l.length;
                  if (S > P) {
                    _.resolve();
                    return;
                  }
                  if (!o._isReadableStream) for (let _ of l) o._layoutText(_);
                  _.resolve();
                }
                let TextLayerRenderTask = class TextLayerRenderTask {
                  constructor({
                    textContentSource: o,
                    container: l,
                    viewport: _,
                    textDivs: P,
                    textDivProperties: T,
                    textContentItemsStr: M,
                    isOffscreenCanvasSupported: F,
                  }) {
                    (this._textContentSource = o),
                      (this._isReadableStream = o instanceof ReadableStream),
                      (this._container = this._rootContainer = l),
                      (this._textDivs = P || []),
                      (this._textContentItemsStr = M || []),
                      (this._isOffscreenCanvasSupported = F),
                      (this._fontInspectorEnabled =
                        !!globalThis.FontInspector?.enabled),
                      (this._reader = null),
                      (this._textDivProperties = T || new WeakMap()),
                      (this._canceled = !1),
                      (this._capability = (0, S.createPromiseCapability)()),
                      (this._layoutTextParams = {
                        prevFontSize: null,
                        prevFontFamily: null,
                        div: null,
                        scale: _.scale * (globalThis.devicePixelRatio || 1),
                        properties: null,
                        ctx: getCtx(0, F),
                      });
                    let {
                      pageWidth: D,
                      pageHeight: I,
                      pageX: O,
                      pageY: L,
                    } = _.rawDims;
                    (this._transform = [1, 0, 0, -1, -O, L + I]),
                      (this._pageWidth = D),
                      (this._pageHeight = I),
                      (0, E.setLayerDimensions)(l, _),
                      this._capability.promise
                        .finally(() => {
                          this._layoutTextParams = null;
                        })
                        .catch(() => {});
                  }
                  get promise() {
                    return this._capability.promise;
                  }
                  cancel() {
                    (this._canceled = !0),
                      this._reader &&
                        (this._reader
                          .cancel(
                            new S.AbortException("TextLayer task cancelled.")
                          )
                          .catch(() => {}),
                        (this._reader = null)),
                      this._capability.reject(
                        new S.AbortException("TextLayer task cancelled.")
                      );
                  }
                  _processItems(o, l) {
                    for (let _ of o) {
                      if (void 0 === _.str) {
                        if (
                          "beginMarkedContentProps" === _.type ||
                          "beginMarkedContent" === _.type
                        ) {
                          let o = this._container;
                          (this._container = document.createElement("span")),
                            this._container.classList.add("markedContent"),
                            null !== _.id &&
                              this._container.setAttribute("id", `${_.id}`),
                            o.append(this._container);
                        } else
                          "endMarkedContent" === _.type &&
                            (this._container = this._container.parentNode);
                        continue;
                      }
                      this._textContentItemsStr.push(_.str),
                        appendText(this, _, l);
                    }
                  }
                  _layoutText(o) {
                    let l = (this._layoutTextParams.properties =
                      this._textDivProperties.get(o));
                    if (
                      ((this._layoutTextParams.div = o),
                      layout(this._layoutTextParams),
                      l.hasText && this._container.append(o),
                      l.hasEOL)
                    ) {
                      let o = document.createElement("br");
                      o.setAttribute("role", "presentation"),
                        this._container.append(o);
                    }
                  }
                  _render() {
                    let o = (0, S.createPromiseCapability)(),
                      l = Object.create(null);
                    if (this._isReadableStream) {
                      let pump = () => {
                        this._reader.read().then(({ value: _, done: S }) => {
                          if (S) {
                            o.resolve();
                            return;
                          }
                          Object.assign(l, _.styles),
                            this._processItems(_.items, l),
                            pump();
                        }, o.reject);
                      };
                      (this._reader = this._textContentSource.getReader()),
                        pump();
                    } else if (this._textContentSource) {
                      let { items: l, styles: _ } = this._textContentSource;
                      this._processItems(l, _), o.resolve();
                    } else
                      throw Error(
                        'No "textContentSource" parameter specified.'
                      );
                    o.promise.then(() => {
                      (l = null), render(this);
                    }, this._capability.reject);
                  }
                };
                function renderTextLayer(o) {
                  !o.textContentSource &&
                    (o.textContent || o.textContentStream) &&
                    ((0, E.deprecated)(
                      "The TextLayerRender `textContent`/`textContentStream` parameters will be removed in the future, please use `textContentSource` instead."
                    ),
                    (o.textContentSource =
                      o.textContent || o.textContentStream));
                  let l = new TextLayerRenderTask(o);
                  return l._render(), l;
                }
                function updateTextLayer({
                  container: o,
                  viewport: l,
                  textDivs: _,
                  textDivProperties: S,
                  isOffscreenCanvasSupported: P,
                  mustRotate: T = !0,
                  mustRescale: M = !0,
                }) {
                  if (
                    (T &&
                      (0, E.setLayerDimensions)(o, { rotation: l.rotation }),
                    M)
                  ) {
                    let o = getCtx(0, P),
                      E = l.scale * (globalThis.devicePixelRatio || 1),
                      T = {
                        prevFontSize: null,
                        prevFontFamily: null,
                        div: null,
                        scale: E,
                        properties: null,
                        ctx: o,
                      };
                    for (let o of _)
                      (T.properties = S.get(o)), (T.div = o), layout(T);
                  }
                }
                l.TextLayerRenderTask = TextLayerRenderTask;
              },
              (o, l, _) => {
                Object.defineProperty(l, "__esModule", { value: !0 }),
                  (l.AnnotationEditorLayer = void 0);
                var S = _(1),
                  E = _(5),
                  P = _(28),
                  T = _(29),
                  M = _(6);
                let AnnotationEditorLayer = class AnnotationEditorLayer {
                  #tb;
                  #ty = !1;
                  #tv = this.pointerup.bind(this);
                  #t_ = this.pointerdown.bind(this);
                  #tS = new Map();
                  #tE = !1;
                  #tC = !1;
                  #tx;
                  static _initialized = !1;
                  constructor(o) {
                    AnnotationEditorLayer._initialized ||
                      ((AnnotationEditorLayer._initialized = !0),
                      P.FreeTextEditor.initialize(o.l10n),
                      T.InkEditor.initialize(o.l10n)),
                      o.uiManager.registerEditorTypes([
                        P.FreeTextEditor,
                        T.InkEditor,
                      ]),
                      (this.#tx = o.uiManager),
                      (this.pageIndex = o.pageIndex),
                      (this.div = o.div),
                      (this.#tb = o.accessibilityManager),
                      this.#tx.addLayer(this);
                  }
                  get isEmpty() {
                    return 0 === this.#tS.size;
                  }
                  updateToolbar(o) {
                    this.#tx.updateToolbar(o);
                  }
                  updateMode(o = this.#tx.getMode()) {
                    this.#tP(),
                      o === S.AnnotationEditorType.INK
                        ? (this.addInkEditorIfNeeded(!1), this.disableClick())
                        : this.enableClick(),
                      this.#tx.unselectAll(),
                      o !== S.AnnotationEditorType.NONE &&
                        (this.div.classList.toggle(
                          "freeTextEditing",
                          o === S.AnnotationEditorType.FREETEXT
                        ),
                        this.div.classList.toggle(
                          "inkEditing",
                          o === S.AnnotationEditorType.INK
                        ),
                        (this.div.hidden = !1));
                  }
                  addInkEditorIfNeeded(o) {
                    if (!o && this.#tx.getMode() !== S.AnnotationEditorType.INK)
                      return;
                    if (!o) {
                      for (let o of this.#tS.values())
                        if (o.isEmpty()) {
                          o.setInBackground();
                          return;
                        }
                    }
                    let l = this.#tT({ offsetX: 0, offsetY: 0 });
                    l.setInBackground();
                  }
                  setEditingState(o) {
                    this.#tx.setEditingState(o);
                  }
                  addCommands(o) {
                    this.#tx.addCommands(o);
                  }
                  enable() {
                    for (let o of ((this.div.style.pointerEvents = "auto"),
                    this.#tS.values()))
                      o.enableEditing();
                  }
                  disable() {
                    for (let o of ((this.div.style.pointerEvents = "none"),
                    this.#tS.values()))
                      o.disableEditing();
                    this.#tP(), this.isEmpty && (this.div.hidden = !0);
                  }
                  setActiveEditor(o) {
                    let l = this.#tx.getActive();
                    l !== o && this.#tx.setActiveEditor(o);
                  }
                  enableClick() {
                    this.div.addEventListener("pointerdown", this.#t_),
                      this.div.addEventListener("pointerup", this.#tv);
                  }
                  disableClick() {
                    this.div.removeEventListener("pointerdown", this.#t_),
                      this.div.removeEventListener("pointerup", this.#tv);
                  }
                  attach(o) {
                    this.#tS.set(o.id, o);
                  }
                  detach(o) {
                    this.#tS.delete(o.id),
                      this.#tb?.removePointerInTextLayer(o.contentDiv);
                  }
                  remove(o) {
                    this.#tx.removeEditor(o),
                      this.detach(o),
                      (o.div.style.display = "none"),
                      setTimeout(() => {
                        (o.div.style.display = ""),
                          o.div.remove(),
                          (o.isAttachedToDOM = !1),
                          document.activeElement === document.body &&
                            this.#tx.focusMainContainer();
                      }, 0),
                      this.#tC || this.addInkEditorIfNeeded(!1);
                  }
                  #tk(o) {
                    o.parent !== this &&
                      (this.attach(o),
                      o.parent?.detach(o),
                      o.setParent(this),
                      o.div &&
                        o.isAttachedToDOM &&
                        (o.div.remove(), this.div.append(o.div)));
                  }
                  add(o) {
                    if (
                      (this.#tk(o),
                      this.#tx.addEditor(o),
                      this.attach(o),
                      !o.isAttachedToDOM)
                    ) {
                      let l = o.render();
                      this.div.append(l), (o.isAttachedToDOM = !0);
                    }
                    this.moveEditorInDOM(o),
                      o.onceAdded(),
                      this.#tx.addToAnnotationStorage(o);
                  }
                  moveEditorInDOM(o) {
                    this.#tb?.moveElementInDOM(
                      this.div,
                      o.div,
                      o.contentDiv,
                      !0
                    );
                  }
                  addOrRebuild(o) {
                    o.needsToBeRebuilt() ? o.rebuild() : this.add(o);
                  }
                  addANewEditor(o) {
                    let cmd = () => {
                        this.addOrRebuild(o);
                      },
                      undo = () => {
                        o.remove();
                      };
                    this.addCommands({ cmd, undo, mustExec: !0 });
                  }
                  addUndoableEditor(o) {
                    let cmd = () => {
                        this.addOrRebuild(o);
                      },
                      undo = () => {
                        o.remove();
                      };
                    this.addCommands({ cmd, undo, mustExec: !1 });
                  }
                  getNextId() {
                    return this.#tx.getId();
                  }
                  #tR(o) {
                    switch (this.#tx.getMode()) {
                      case S.AnnotationEditorType.FREETEXT:
                        return new P.FreeTextEditor(o);
                      case S.AnnotationEditorType.INK:
                        return new T.InkEditor(o);
                    }
                    return null;
                  }
                  deserialize(o) {
                    switch (o.annotationType) {
                      case S.AnnotationEditorType.FREETEXT:
                        return P.FreeTextEditor.deserialize(o, this, this.#tx);
                      case S.AnnotationEditorType.INK:
                        return T.InkEditor.deserialize(o, this, this.#tx);
                    }
                    return null;
                  }
                  #tT(o) {
                    let l = this.getNextId(),
                      _ = this.#tR({
                        parent: this,
                        id: l,
                        x: o.offsetX,
                        y: o.offsetY,
                        uiManager: this.#tx,
                      });
                    return _ && this.add(_), _;
                  }
                  setSelected(o) {
                    this.#tx.setSelected(o);
                  }
                  toggleSelected(o) {
                    this.#tx.toggleSelected(o);
                  }
                  isSelected(o) {
                    return this.#tx.isSelected(o);
                  }
                  unselect(o) {
                    this.#tx.unselect(o);
                  }
                  pointerup(o) {
                    let { isMac: l } = S.FeatureTest.platform;
                    if (
                      0 === o.button &&
                      (!o.ctrlKey || !l) &&
                      o.target === this.div &&
                      this.#tE
                    ) {
                      if (((this.#tE = !1), !this.#ty)) {
                        this.#ty = !0;
                        return;
                      }
                      this.#tT(o);
                    }
                  }
                  pointerdown(o) {
                    let { isMac: l } = S.FeatureTest.platform;
                    if (
                      0 !== o.button ||
                      (o.ctrlKey && l) ||
                      o.target !== this.div
                    )
                      return;
                    this.#tE = !0;
                    let _ = this.#tx.getActive();
                    this.#ty = !_ || _.isEmpty();
                  }
                  drop(o) {
                    let l = o.dataTransfer.getData("text/plain"),
                      _ = this.#tx.getEditor(l);
                    if (!_) return;
                    o.preventDefault(),
                      (o.dataTransfer.dropEffect = "move"),
                      this.#tk(_);
                    let S = this.div.getBoundingClientRect(),
                      E = o.clientX - S.x,
                      P = o.clientY - S.y;
                    _.translate(E - _.startX, P - _.startY),
                      this.moveEditorInDOM(_),
                      _.div.focus();
                  }
                  dragover(o) {
                    o.preventDefault();
                  }
                  destroy() {
                    for (let o of (this.#tx.getActive()?.parent === this &&
                      this.#tx.setActiveEditor(null),
                    this.#tS.values()))
                      this.#tb?.removePointerInTextLayer(o.contentDiv),
                        o.setParent(null),
                        (o.isAttachedToDOM = !1),
                        o.div.remove();
                    (this.div = null),
                      this.#tS.clear(),
                      this.#tx.removeLayer(this);
                  }
                  #tP() {
                    for (let o of ((this.#tC = !0), this.#tS.values()))
                      o.isEmpty() && o.remove();
                    this.#tC = !1;
                  }
                  render({ viewport: o }) {
                    for (let l of ((this.viewport = o),
                    (0, M.setLayerDimensions)(this.div, o),
                    (0, E.bindEvents)(this, this.div, ["dragover", "drop"]),
                    this.#tx.getEditors(this.pageIndex)))
                      this.add(l);
                    this.updateMode();
                  }
                  update({ viewport: o }) {
                    this.#tx.commitOrRemove(),
                      (this.viewport = o),
                      (0, M.setLayerDimensions)(this.div, {
                        rotation: o.rotation,
                      }),
                      this.updateMode();
                  }
                  get pageDimensions() {
                    let { pageWidth: o, pageHeight: l } = this.viewport.rawDims;
                    return [o, l];
                  }
                };
                l.AnnotationEditorLayer = AnnotationEditorLayer;
              },
              (o, l, _) => {
                Object.defineProperty(l, "__esModule", { value: !0 }),
                  (l.FreeTextEditor = void 0);
                var S = _(1),
                  E = _(5),
                  P = _(4);
                let FreeTextEditor = class FreeTextEditor extends P.AnnotationEditor {
                  #tM = this.editorDivBlur.bind(this);
                  #tF = this.editorDivFocus.bind(this);
                  #tw = this.editorDivInput.bind(this);
                  #tD = this.editorDivKeydown.bind(this);
                  #tI;
                  #tO = "";
                  #tL = `${this.id}-editor`;
                  #tN = !1;
                  #tU;
                  static _freeTextDefaultContent = "";
                  static _l10nPromise;
                  static _internalPadding = 0;
                  static _defaultColor = null;
                  static _defaultFontSize = 10;
                  static _keyboardManager = new E.KeyboardManager([
                    [
                      ["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"],
                      FreeTextEditor.prototype.commitOrRemove,
                    ],
                  ]);
                  static _type = "freetext";
                  constructor(o) {
                    super({ ...o, name: "freeTextEditor" }),
                      (this.#tI =
                        o.color ||
                        FreeTextEditor._defaultColor ||
                        P.AnnotationEditor._defaultLineColor),
                      (this.#tU =
                        o.fontSize || FreeTextEditor._defaultFontSize);
                  }
                  static initialize(o) {
                    this._l10nPromise = new Map(
                      [
                        "free_text2_default_content",
                        "editor_free_text2_aria_label",
                      ].map((l) => [l, o.get(l)])
                    );
                    let l = getComputedStyle(document.documentElement);
                    this._internalPadding = parseFloat(
                      l.getPropertyValue("--freetext-padding")
                    );
                  }
                  static updateDefaultParams(o, l) {
                    switch (o) {
                      case S.AnnotationEditorParamsType.FREETEXT_SIZE:
                        FreeTextEditor._defaultFontSize = l;
                        break;
                      case S.AnnotationEditorParamsType.FREETEXT_COLOR:
                        FreeTextEditor._defaultColor = l;
                    }
                  }
                  updateParams(o, l) {
                    switch (o) {
                      case S.AnnotationEditorParamsType.FREETEXT_SIZE:
                        this.#tj(l);
                        break;
                      case S.AnnotationEditorParamsType.FREETEXT_COLOR:
                        this.#tB(l);
                    }
                  }
                  static get defaultPropertiesToUpdate() {
                    return [
                      [
                        S.AnnotationEditorParamsType.FREETEXT_SIZE,
                        FreeTextEditor._defaultFontSize,
                      ],
                      [
                        S.AnnotationEditorParamsType.FREETEXT_COLOR,
                        FreeTextEditor._defaultColor ||
                          P.AnnotationEditor._defaultLineColor,
                      ],
                    ];
                  }
                  get propertiesToUpdate() {
                    return [
                      [S.AnnotationEditorParamsType.FREETEXT_SIZE, this.#tU],
                      [S.AnnotationEditorParamsType.FREETEXT_COLOR, this.#tI],
                    ];
                  }
                  #tj(o) {
                    let setFontsize = (o) => {
                        (this.editorDiv.style.fontSize = `calc(${o}px * var(--scale-factor))`),
                          this.translate(0, -(o - this.#tU) * this.parentScale),
                          (this.#tU = o),
                          this.#tq();
                      },
                      l = this.#tU;
                    this.addCommands({
                      cmd: () => {
                        setFontsize(o);
                      },
                      undo: () => {
                        setFontsize(l);
                      },
                      mustExec: !0,
                      type: S.AnnotationEditorParamsType.FREETEXT_SIZE,
                      overwriteIfSameType: !0,
                      keepUndo: !0,
                    });
                  }
                  #tB(o) {
                    let l = this.#tI;
                    this.addCommands({
                      cmd: () => {
                        this.#tI = this.editorDiv.style.color = o;
                      },
                      undo: () => {
                        this.#tI = this.editorDiv.style.color = l;
                      },
                      mustExec: !0,
                      type: S.AnnotationEditorParamsType.FREETEXT_COLOR,
                      overwriteIfSameType: !0,
                      keepUndo: !0,
                    });
                  }
                  getInitialTranslation() {
                    let o = this.parentScale;
                    return [
                      -FreeTextEditor._internalPadding * o,
                      -(FreeTextEditor._internalPadding + this.#tU) * o,
                    ];
                  }
                  rebuild() {
                    super.rebuild(),
                      null !== this.div &&
                        (this.isAttachedToDOM || this.parent.add(this));
                  }
                  enableEditMode() {
                    this.isInEditMode() ||
                      (this.parent.setEditingState(!1),
                      this.parent.updateToolbar(
                        S.AnnotationEditorType.FREETEXT
                      ),
                      super.enableEditMode(),
                      this.overlayDiv.classList.remove("enabled"),
                      (this.editorDiv.contentEditable = !0),
                      (this.div.draggable = !1),
                      this.div.removeAttribute("aria-activedescendant"),
                      this.editorDiv.addEventListener("keydown", this.#tD),
                      this.editorDiv.addEventListener("focus", this.#tF),
                      this.editorDiv.addEventListener("blur", this.#tM),
                      this.editorDiv.addEventListener("input", this.#tw));
                  }
                  disableEditMode() {
                    this.isInEditMode() &&
                      (this.parent.setEditingState(!0),
                      super.disableEditMode(),
                      this.overlayDiv.classList.add("enabled"),
                      (this.editorDiv.contentEditable = !1),
                      this.div.setAttribute("aria-activedescendant", this.#tL),
                      (this.div.draggable = !0),
                      this.editorDiv.removeEventListener("keydown", this.#tD),
                      this.editorDiv.removeEventListener("focus", this.#tF),
                      this.editorDiv.removeEventListener("blur", this.#tM),
                      this.editorDiv.removeEventListener("input", this.#tw),
                      this.div.focus({ preventScroll: !0 }),
                      (this.isEditing = !1),
                      this.parent.div.classList.add("freeTextEditing"));
                  }
                  focusin(o) {
                    super.focusin(o),
                      o.target !== this.editorDiv && this.editorDiv.focus();
                  }
                  onceAdded() {
                    this.width ||
                      (this.enableEditMode(), this.editorDiv.focus());
                  }
                  isEmpty() {
                    return (
                      !this.editorDiv || "" === this.editorDiv.innerText.trim()
                    );
                  }
                  remove() {
                    (this.isEditing = !1),
                      this.parent.setEditingState(!0),
                      this.parent.div.classList.add("freeTextEditing"),
                      super.remove();
                  }
                  #tW() {
                    let o = this.editorDiv.getElementsByTagName("div");
                    if (0 === o.length) return this.editorDiv.innerText;
                    let l = [];
                    for (let _ of o)
                      l.push(_.innerText.replace(/\r\n?|\n/, ""));
                    return l.join("\n");
                  }
                  #tq() {
                    let o;
                    let [l, _] = this.parentDimensions;
                    if (this.isAttachedToDOM)
                      o = this.div.getBoundingClientRect();
                    else {
                      let { currentLayer: l, div: _ } = this,
                        S = _.style.display;
                      (_.style.display = "hidden"),
                        l.div.append(this.div),
                        (o = _.getBoundingClientRect()),
                        _.remove(),
                        (_.style.display = S);
                    }
                    (this.width = o.width / l), (this.height = o.height / _);
                  }
                  commit() {
                    this.isInEditMode() &&
                      (super.commit(),
                      this.#tN ||
                        ((this.#tN = !0), this.parent.addUndoableEditor(this)),
                      this.disableEditMode(),
                      (this.#tO = this.#tW().trimEnd()),
                      this.#tq());
                  }
                  shouldGetKeyboardEvents() {
                    return this.isInEditMode();
                  }
                  dblclick(o) {
                    this.enableEditMode(), this.editorDiv.focus();
                  }
                  keydown(o) {
                    o.target === this.div &&
                      "Enter" === o.key &&
                      (this.enableEditMode(), this.editorDiv.focus());
                  }
                  editorDivKeydown(o) {
                    FreeTextEditor._keyboardManager.exec(this, o);
                  }
                  editorDivFocus(o) {
                    this.isEditing = !0;
                  }
                  editorDivBlur(o) {
                    this.isEditing = !1;
                  }
                  editorDivInput(o) {
                    this.parent.div.classList.toggle(
                      "freeTextEditing",
                      this.isEmpty()
                    );
                  }
                  disableEditing() {
                    this.editorDiv.setAttribute("role", "comment"),
                      this.editorDiv.removeAttribute("aria-multiline");
                  }
                  enableEditing() {
                    this.editorDiv.setAttribute("role", "textbox"),
                      this.editorDiv.setAttribute("aria-multiline", !0);
                  }
                  render() {
                    let o, l;
                    if (this.div) return this.div;
                    this.width && ((o = this.x), (l = this.y)),
                      super.render(),
                      (this.editorDiv = document.createElement("div")),
                      (this.editorDiv.className = "internal"),
                      this.editorDiv.setAttribute("id", this.#tL),
                      this.enableEditing(),
                      FreeTextEditor._l10nPromise
                        .get("editor_free_text2_aria_label")
                        .then((o) =>
                          this.editorDiv?.setAttribute("aria-label", o)
                        ),
                      FreeTextEditor._l10nPromise
                        .get("free_text2_default_content")
                        .then((o) =>
                          this.editorDiv?.setAttribute("default-content", o)
                        ),
                      (this.editorDiv.contentEditable = !0);
                    let { style: _ } = this.editorDiv;
                    if (
                      ((_.fontSize = `calc(${
                        this.#tU
                      }px * var(--scale-factor))`),
                      (_.color = this.#tI),
                      this.div.append(this.editorDiv),
                      (this.overlayDiv = document.createElement("div")),
                      this.overlayDiv.classList.add("overlay", "enabled"),
                      this.div.append(this.overlayDiv),
                      (0, E.bindEvents)(this, this.div, [
                        "dblclick",
                        "keydown",
                      ]),
                      this.width)
                    ) {
                      let [_, S] = this.parentDimensions;
                      for (let E of (this.setAt(
                        o * _,
                        l * S,
                        this.width * _,
                        this.height * S
                      ),
                      this.#tO.split("\n"))) {
                        let o = document.createElement("div");
                        o.append(
                          E
                            ? document.createTextNode(E)
                            : document.createElement("br")
                        ),
                          this.editorDiv.append(o);
                      }
                      (this.div.draggable = !0),
                        (this.editorDiv.contentEditable = !1);
                    } else
                      (this.div.draggable = !1),
                        (this.editorDiv.contentEditable = !0);
                    return this.div;
                  }
                  get contentDiv() {
                    return this.editorDiv;
                  }
                  static deserialize(o, l, _) {
                    let E = super.deserialize(o, l, _);
                    return (
                      (E.#tU = o.fontSize),
                      (E.#tI = S.Util.makeHexColor(...o.color)),
                      (E.#tO = o.value),
                      E
                    );
                  }
                  serialize() {
                    if (this.isEmpty()) return null;
                    let o = FreeTextEditor._internalPadding * this.parentScale,
                      l = this.getRect(o, o),
                      _ = P.AnnotationEditor._colorManager.convert(
                        this.isAttachedToDOM
                          ? getComputedStyle(this.editorDiv).color
                          : this.#tI
                      );
                    return {
                      annotationType: S.AnnotationEditorType.FREETEXT,
                      color: _,
                      fontSize: this.#tU,
                      value: this.#tO,
                      pageIndex: this.pageIndex,
                      rect: l,
                      rotation: this.rotation,
                    };
                  }
                };
                l.FreeTextEditor = FreeTextEditor;
              },
              (o, l, _) => {
                Object.defineProperty(l, "__esModule", { value: !0 }),
                  (l.InkEditor = void 0),
                  Object.defineProperty(l, "fitCurve", {
                    enumerable: !0,
                    get: function () {
                      return P.fitCurve;
                    },
                  });
                var S = _(1),
                  E = _(4),
                  P = _(30),
                  T = _(5);
                let M = 16,
                  F = 100;
                let InkEditor = class InkEditor extends E.AnnotationEditor {
                  #tG = 0;
                  #tH = 0;
                  #tV = 0;
                  #tz = this.canvasPointermove.bind(this);
                  #t$ = this.canvasPointerleave.bind(this);
                  #tX = this.canvasPointerup.bind(this);
                  #tK = this.canvasPointerdown.bind(this);
                  #tY = !1;
                  #tJ = !1;
                  #tQ = null;
                  #tZ = null;
                  #t0 = 0;
                  #t1 = 0;
                  #t2 = null;
                  static _defaultColor = null;
                  static _defaultOpacity = 1;
                  static _defaultThickness = 1;
                  static _l10nPromise;
                  static _type = "ink";
                  constructor(o) {
                    super({ ...o, name: "inkEditor" }),
                      (this.color = o.color || null),
                      (this.thickness = o.thickness || null),
                      (this.opacity = o.opacity || null),
                      (this.paths = []),
                      (this.bezierPath2D = []),
                      (this.currentPath = []),
                      (this.scaleFactor = 1),
                      (this.translationX = this.translationY = 0),
                      (this.x = 0),
                      (this.y = 0);
                  }
                  static initialize(o) {
                    this._l10nPromise = new Map(
                      [
                        "editor_ink_canvas_aria_label",
                        "editor_ink2_aria_label",
                      ].map((l) => [l, o.get(l)])
                    );
                  }
                  static updateDefaultParams(o, l) {
                    switch (o) {
                      case S.AnnotationEditorParamsType.INK_THICKNESS:
                        InkEditor._defaultThickness = l;
                        break;
                      case S.AnnotationEditorParamsType.INK_COLOR:
                        InkEditor._defaultColor = l;
                        break;
                      case S.AnnotationEditorParamsType.INK_OPACITY:
                        InkEditor._defaultOpacity = l / 100;
                    }
                  }
                  updateParams(o, l) {
                    switch (o) {
                      case S.AnnotationEditorParamsType.INK_THICKNESS:
                        this.#t3(l);
                        break;
                      case S.AnnotationEditorParamsType.INK_COLOR:
                        this.#tB(l);
                        break;
                      case S.AnnotationEditorParamsType.INK_OPACITY:
                        this.#t5(l);
                    }
                  }
                  static get defaultPropertiesToUpdate() {
                    return [
                      [
                        S.AnnotationEditorParamsType.INK_THICKNESS,
                        InkEditor._defaultThickness,
                      ],
                      [
                        S.AnnotationEditorParamsType.INK_COLOR,
                        InkEditor._defaultColor ||
                          E.AnnotationEditor._defaultLineColor,
                      ],
                      [
                        S.AnnotationEditorParamsType.INK_OPACITY,
                        Math.round(100 * InkEditor._defaultOpacity),
                      ],
                    ];
                  }
                  get propertiesToUpdate() {
                    return [
                      [
                        S.AnnotationEditorParamsType.INK_THICKNESS,
                        this.thickness || InkEditor._defaultThickness,
                      ],
                      [
                        S.AnnotationEditorParamsType.INK_COLOR,
                        this.color ||
                          InkEditor._defaultColor ||
                          E.AnnotationEditor._defaultLineColor,
                      ],
                      [
                        S.AnnotationEditorParamsType.INK_OPACITY,
                        Math.round(
                          100 * (this.opacity ?? InkEditor._defaultOpacity)
                        ),
                      ],
                    ];
                  }
                  #t3(o) {
                    let l = this.thickness;
                    this.addCommands({
                      cmd: () => {
                        (this.thickness = o), this.#t4();
                      },
                      undo: () => {
                        (this.thickness = l), this.#t4();
                      },
                      mustExec: !0,
                      type: S.AnnotationEditorParamsType.INK_THICKNESS,
                      overwriteIfSameType: !0,
                      keepUndo: !0,
                    });
                  }
                  #tB(o) {
                    let l = this.color;
                    this.addCommands({
                      cmd: () => {
                        (this.color = o), this.#t8();
                      },
                      undo: () => {
                        (this.color = l), this.#t8();
                      },
                      mustExec: !0,
                      type: S.AnnotationEditorParamsType.INK_COLOR,
                      overwriteIfSameType: !0,
                      keepUndo: !0,
                    });
                  }
                  #t5(o) {
                    o /= 100;
                    let l = this.opacity;
                    this.addCommands({
                      cmd: () => {
                        (this.opacity = o), this.#t8();
                      },
                      undo: () => {
                        (this.opacity = l), this.#t8();
                      },
                      mustExec: !0,
                      type: S.AnnotationEditorParamsType.INK_OPACITY,
                      overwriteIfSameType: !0,
                      keepUndo: !0,
                    });
                  }
                  rebuild() {
                    super.rebuild(),
                      null !== this.div &&
                        (this.canvas || (this.#t6(), this.#t7()),
                        this.isAttachedToDOM ||
                          (this.parent.add(this), this.#t9()),
                        this.#t4());
                  }
                  remove() {
                    null !== this.canvas &&
                      (this.isEmpty() || this.commit(),
                      (this.canvas.width = this.canvas.height = 0),
                      this.canvas.remove(),
                      (this.canvas = null),
                      this.#tZ.disconnect(),
                      (this.#tZ = null),
                      super.remove());
                  }
                  setParent(o) {
                    !this.parent && o
                      ? this._uiManager.removeShouldRescale(this)
                      : this.parent &&
                        null === o &&
                        this._uiManager.addShouldRescale(this),
                      super.setParent(o);
                  }
                  onScaleChanging() {
                    let [o, l] = this.parentDimensions,
                      _ = this.width * o,
                      S = this.height * l;
                    this.setDimensions(_, S);
                  }
                  enableEditMode() {
                    this.#tY ||
                      null === this.canvas ||
                      (super.enableEditMode(),
                      (this.div.draggable = !1),
                      this.canvas.addEventListener("pointerdown", this.#tK),
                      this.canvas.addEventListener("pointerup", this.#tX));
                  }
                  disableEditMode() {
                    this.isInEditMode() &&
                      null !== this.canvas &&
                      (super.disableEditMode(),
                      (this.div.draggable = !this.isEmpty()),
                      this.div.classList.remove("editing"),
                      this.canvas.removeEventListener("pointerdown", this.#tK),
                      this.canvas.removeEventListener("pointerup", this.#tX));
                  }
                  onceAdded() {
                    this.div.draggable = !this.isEmpty();
                  }
                  isEmpty() {
                    return (
                      0 === this.paths.length ||
                      (1 === this.paths.length && 0 === this.paths[0].length)
                    );
                  }
                  #et() {
                    let {
                      parentRotation: o,
                      parentDimensions: [l, _],
                    } = this;
                    switch (o) {
                      case 90:
                        return [0, _, _, l];
                      case 180:
                        return [l, _, l, _];
                      case 270:
                        return [l, 0, _, l];
                      default:
                        return [0, 0, l, _];
                    }
                  }
                  #ee() {
                    let {
                      ctx: o,
                      color: l,
                      opacity: _,
                      thickness: S,
                      parentScale: E,
                      scaleFactor: P,
                    } = this;
                    (o.lineWidth = (S * E) / P),
                      (o.lineCap = "round"),
                      (o.lineJoin = "round"),
                      (o.miterLimit = 10),
                      (o.strokeStyle = `${l}${(0, T.opacityToHex)(_)}`);
                  }
                  #ei(o, l) {
                    (this.isEditing = !0),
                      this.#tJ ||
                        ((this.#tJ = !0),
                        this.#t9(),
                        (this.thickness ||= InkEditor._defaultThickness),
                        (this.color ||=
                          InkEditor._defaultColor ||
                          E.AnnotationEditor._defaultLineColor),
                        (this.opacity ??= InkEditor._defaultOpacity)),
                      this.currentPath.push([o, l]),
                      (this.#tQ = null),
                      this.#ee(),
                      this.ctx.beginPath(),
                      this.ctx.moveTo(o, l),
                      (this.#t2 = () => {
                        this.#t2 &&
                          (this.#tQ &&
                            (this.isEmpty()
                              ? (this.ctx.setTransform(1, 0, 0, 1, 0, 0),
                                this.ctx.clearRect(
                                  0,
                                  0,
                                  this.canvas.width,
                                  this.canvas.height
                                ))
                              : this.#t8(),
                            this.ctx.lineTo(...this.#tQ),
                            (this.#tQ = null),
                            this.ctx.stroke()),
                          window.requestAnimationFrame(this.#t2));
                      }),
                      window.requestAnimationFrame(this.#t2);
                  }
                  #er(o, l) {
                    let [_, S] = this.currentPath.at(-1);
                    (o !== _ || l !== S) &&
                      (this.currentPath.push([o, l]), (this.#tQ = [o, l]));
                  }
                  #ea(o, l) {
                    let _;
                    this.ctx.closePath(),
                      (this.#t2 = null),
                      (o = Math.min(Math.max(o, 0), this.canvas.width)),
                      (l = Math.min(Math.max(l, 0), this.canvas.height));
                    let [S, E] = this.currentPath.at(-1);
                    if (
                      ((o !== S || l !== E) && this.currentPath.push([o, l]),
                      1 !== this.currentPath.length)
                    )
                      _ = (0, P.fitCurve)(this.currentPath, 30, null);
                    else {
                      let S = [o, l];
                      _ = [[S, S.slice(), S.slice(), S]];
                    }
                    let T = InkEditor.#es(_);
                    this.currentPath.length = 0;
                    let cmd = () => {
                        this.paths.push(_),
                          this.bezierPath2D.push(T),
                          this.rebuild();
                      },
                      undo = () => {
                        this.paths.pop(),
                          this.bezierPath2D.pop(),
                          0 === this.paths.length
                            ? this.remove()
                            : (this.canvas || (this.#t6(), this.#t7()),
                              this.#t4());
                      };
                    this.addCommands({ cmd, undo, mustExec: !0 });
                  }
                  #t8() {
                    if (this.isEmpty()) {
                      this.#en();
                      return;
                    }
                    this.#ee();
                    let { canvas: o, ctx: l } = this;
                    for (let _ of (l.setTransform(1, 0, 0, 1, 0, 0),
                    l.clearRect(0, 0, o.width, o.height),
                    this.#en(),
                    this.bezierPath2D))
                      l.stroke(_);
                  }
                  commit() {
                    this.#tY ||
                      (super.commit(),
                      (this.isEditing = !1),
                      this.disableEditMode(),
                      this.setInForeground(),
                      (this.#tY = !0),
                      this.div.classList.add("disabled"),
                      this.#t4(!0),
                      this.parent.addInkEditorIfNeeded(!0),
                      this.parent.moveEditorInDOM(this),
                      this.div.focus({ preventScroll: !0 }));
                  }
                  focusin(o) {
                    super.focusin(o), this.enableEditMode();
                  }
                  canvasPointerdown(o) {
                    0 === o.button &&
                      this.isInEditMode() &&
                      !this.#tY &&
                      (this.setInForeground(),
                      "mouse" !== o.type && this.div.focus(),
                      o.stopPropagation(),
                      this.canvas.addEventListener("pointerleave", this.#t$),
                      this.canvas.addEventListener("pointermove", this.#tz),
                      this.#ei(o.offsetX, o.offsetY));
                  }
                  canvasPointermove(o) {
                    o.stopPropagation(), this.#er(o.offsetX, o.offsetY);
                  }
                  canvasPointerup(o) {
                    0 === o.button &&
                      this.isInEditMode() &&
                      0 !== this.currentPath.length &&
                      (o.stopPropagation(),
                      this.#eo(o),
                      this.setInBackground());
                  }
                  canvasPointerleave(o) {
                    this.#eo(o), this.setInBackground();
                  }
                  #eo(o) {
                    this.#ea(o.offsetX, o.offsetY),
                      this.canvas.removeEventListener("pointerleave", this.#t$),
                      this.canvas.removeEventListener("pointermove", this.#tz),
                      this.addToAnnotationStorage();
                  }
                  #t6() {
                    (this.canvas = document.createElement("canvas")),
                      (this.canvas.width = this.canvas.height = 0),
                      (this.canvas.className = "inkEditorCanvas"),
                      InkEditor._l10nPromise
                        .get("editor_ink_canvas_aria_label")
                        .then((o) =>
                          this.canvas?.setAttribute("aria-label", o)
                        ),
                      this.div.append(this.canvas),
                      (this.ctx = this.canvas.getContext("2d"));
                  }
                  #t7() {
                    let o = null;
                    (this.#tZ = new ResizeObserver((l) => {
                      let _ = l[0].contentRect;
                      _.width &&
                        _.height &&
                        (null !== o && clearTimeout(o),
                        (o = setTimeout(() => {
                          this.fixDims(), (o = null);
                        }, F)),
                        this.setDimensions(_.width, _.height));
                    })),
                      this.#tZ.observe(this.div);
                  }
                  render() {
                    let o, l;
                    if (this.div) return this.div;
                    this.width && ((o = this.x), (l = this.y)),
                      super.render(),
                      InkEditor._l10nPromise
                        .get("editor_ink2_aria_label")
                        .then((o) => this.div?.setAttribute("aria-label", o));
                    let [_, S, E, P] = this.#et();
                    if (
                      (this.setAt(_, S, 0, 0),
                      this.setDims(E, P),
                      this.#t6(),
                      this.width)
                    ) {
                      let [_, S] = this.parentDimensions;
                      this.setAt(o * _, l * S, this.width * _, this.height * S),
                        (this.#tJ = !0),
                        this.#t9(),
                        this.setDims(this.width * _, this.height * S),
                        this.#t8(),
                        this.#el(),
                        this.div.classList.add("disabled");
                    } else
                      this.div.classList.add("editing"), this.enableEditMode();
                    return this.#t7(), this.div;
                  }
                  #t9() {
                    if (!this.#tJ) return;
                    let [o, l] = this.parentDimensions;
                    (this.canvas.width = Math.ceil(this.width * o)),
                      (this.canvas.height = Math.ceil(this.height * l)),
                      this.#en();
                  }
                  setDimensions(o, l) {
                    let _ = Math.round(o),
                      S = Math.round(l);
                    if (this.#t0 === _ && this.#t1 === S) return;
                    (this.#t0 = _),
                      (this.#t1 = S),
                      (this.canvas.style.visibility = "hidden"),
                      this.#tG &&
                        Math.abs(this.#tG - o / l) > 0.01 &&
                        ((l = Math.ceil(o / this.#tG)), this.setDims(o, l));
                    let [E, P] = this.parentDimensions;
                    (this.width = o / E),
                      (this.height = l / P),
                      this.#tY && this.#eh(o, l),
                      this.#t9(),
                      this.#t8(),
                      (this.canvas.style.visibility = "visible");
                  }
                  #eh(o, l) {
                    let _ = this.#ed(),
                      S = (o - _) / this.#tV,
                      E = (l - _) / this.#tH;
                    this.scaleFactor = Math.min(S, E);
                  }
                  #en() {
                    let o = this.#ed() / 2;
                    this.ctx.setTransform(
                      this.scaleFactor,
                      0,
                      0,
                      this.scaleFactor,
                      this.translationX * this.scaleFactor + o,
                      this.translationY * this.scaleFactor + o
                    );
                  }
                  static #es(o) {
                    let l = new Path2D();
                    for (let _ = 0, S = o.length; _ < S; _++) {
                      let [S, E, P, T] = o[_];
                      0 === _ && l.moveTo(...S),
                        l.bezierCurveTo(E[0], E[1], P[0], P[1], T[0], T[1]);
                    }
                    return l;
                  }
                  #ec(o, l, _, S) {
                    let E, P;
                    let T = 4,
                      M = [],
                      F = this.thickness / 2;
                    for (let D of this.paths) {
                      (E = []), (P = []);
                      for (let M = 0, I = D.length; M < I; M++) {
                        let [I, O, L, N] = D[M],
                          U = o * (I[0] + l) + F,
                          W = S - o * (I[1] + _) - F,
                          H = o * (O[0] + l) + F,
                          V = S - o * (O[1] + _) - F,
                          z = o * (L[0] + l) + F,
                          $ = S - o * (L[1] + _) - F,
                          K = o * (N[0] + l) + F,
                          Y = S - o * (N[1] + _) - F;
                        0 === M && (E.push(U, W), P.push(U, W)),
                          E.push(H, V, z, $, K, Y),
                          this.#eu(U, W, H, V, z, $, K, Y, T, P);
                      }
                      M.push({ bezier: E, points: P });
                    }
                    return M;
                  }
                  #eu(o, l, _, S, E, P, T, M, F, D) {
                    if (this.#ep(o, l, _, S, E, P, T, M)) {
                      D.push(T, M);
                      return;
                    }
                    for (let I = 1; I < F - 1; I++) {
                      let O = I / F,
                        L = 1 - O,
                        N = O * o + L * _,
                        U = O * l + L * S,
                        W = O * _ + L * E,
                        H = O * S + L * P,
                        V = O * E + L * T,
                        z = O * P + L * M;
                      (N = O * N + L * W),
                        (U = O * U + L * H),
                        (W = O * W + L * V),
                        (H = O * H + L * z),
                        (N = O * N + L * W),
                        (U = O * U + L * H),
                        D.push(N, U);
                    }
                    D.push(T, M);
                  }
                  #ep(o, l, _, S, E, P, T, M) {
                    let F = 10,
                      D = (3 * _ - 2 * o - T) ** 2,
                      I = (3 * S - 2 * l - M) ** 2,
                      O = (3 * E - o - 2 * T) ** 2,
                      L = (3 * P - l - 2 * M) ** 2;
                    return Math.max(D, O) + Math.max(I, L) <= F;
                  }
                  #eg() {
                    let o = 1 / 0,
                      l = -1 / 0,
                      _ = 1 / 0,
                      E = -1 / 0;
                    for (let P of this.paths)
                      for (let [T, M, F, D] of P) {
                        let P = S.Util.bezierBoundingBox(
                          ...T,
                          ...M,
                          ...F,
                          ...D
                        );
                        (o = Math.min(o, P[0])),
                          (_ = Math.min(_, P[1])),
                          (l = Math.max(l, P[2])),
                          (E = Math.max(E, P[3]));
                      }
                    return [o, _, l, E];
                  }
                  #ed() {
                    return this.#tY
                      ? Math.ceil(this.thickness * this.parentScale)
                      : 0;
                  }
                  #t4(o = !1) {
                    if (this.isEmpty()) return;
                    if (!this.#tY) {
                      this.#t8();
                      return;
                    }
                    let l = this.#eg(),
                      _ = this.#ed();
                    (this.#tV = Math.max(M, l[2] - l[0])),
                      (this.#tH = Math.max(M, l[3] - l[1]));
                    let S = Math.ceil(_ + this.#tV * this.scaleFactor),
                      E = Math.ceil(_ + this.#tH * this.scaleFactor),
                      [P, T] = this.parentDimensions;
                    (this.width = S / P),
                      (this.height = E / T),
                      (this.#tG = S / E),
                      this.#el();
                    let F = this.translationX,
                      D = this.translationY;
                    (this.translationX = -l[0]),
                      (this.translationY = -l[1]),
                      this.#t9(),
                      this.#t8(),
                      (this.#t0 = S),
                      (this.#t1 = E),
                      this.setDims(S, E);
                    let I = o ? _ / this.scaleFactor / 2 : 0;
                    this.translate(
                      F - this.translationX - I,
                      D - this.translationY - I
                    );
                  }
                  #el() {
                    let { style: o } = this.div;
                    this.#tG >= 1
                      ? ((o.minHeight = `${M}px`),
                        (o.minWidth = `${Math.round(this.#tG * M)}px`))
                      : ((o.minWidth = `${M}px`),
                        (o.minHeight = `${Math.round(M / this.#tG)}px`));
                  }
                  static deserialize(o, l, _) {
                    let E = super.deserialize(o, l, _);
                    (E.thickness = o.thickness),
                      (E.color = S.Util.makeHexColor(...o.color)),
                      (E.opacity = o.opacity);
                    let [P, T] = E.pageDimensions,
                      F = E.width * P,
                      D = E.height * T,
                      I = E.parentScale,
                      O = o.thickness / 2;
                    for (let { bezier: l } of ((E.#tG = F / D),
                    (E.#tY = !0),
                    (E.#t0 = Math.round(F)),
                    (E.#t1 = Math.round(D)),
                    o.paths)) {
                      let o = [];
                      E.paths.push(o);
                      let _ = I * (l[0] - O),
                        S = I * (D - l[1] - O);
                      for (let E = 2, P = l.length; E < P; E += 6) {
                        let P = I * (l[E] - O),
                          T = I * (D - l[E + 1] - O),
                          M = I * (l[E + 2] - O),
                          F = I * (D - l[E + 3] - O),
                          L = I * (l[E + 4] - O),
                          N = I * (D - l[E + 5] - O);
                        o.push([
                          [_, S],
                          [P, T],
                          [M, F],
                          [L, N],
                        ]),
                          (_ = L),
                          (S = N);
                      }
                      let P = this.#es(o);
                      E.bezierPath2D.push(P);
                    }
                    let L = E.#eg();
                    return (
                      (E.#tV = Math.max(M, L[2] - L[0])),
                      (E.#tH = Math.max(M, L[3] - L[1])),
                      E.#eh(F, D),
                      E
                    );
                  }
                  serialize() {
                    if (this.isEmpty()) return null;
                    let o = this.getRect(0, 0),
                      l = this.rotation % 180 == 0 ? o[3] - o[1] : o[2] - o[0],
                      _ = E.AnnotationEditor._colorManager.convert(
                        this.ctx.strokeStyle
                      );
                    return {
                      annotationType: S.AnnotationEditorType.INK,
                      color: _,
                      thickness: this.thickness,
                      opacity: this.opacity,
                      paths: this.#ec(
                        this.scaleFactor / this.parentScale,
                        this.translationX,
                        this.translationY,
                        l
                      ),
                      pageIndex: this.pageIndex,
                      rect: o,
                      rotation: this.rotation,
                    };
                  }
                };
                l.InkEditor = InkEditor;
              },
              (o, l, _) => {
                Object.defineProperty(l, "__esModule", { value: !0 }),
                  (l.fitCurve = void 0);
                let S = _(31);
                l.fitCurve = S;
              },
              (o) => {
                function fitCurve(o, l, _) {
                  if (!Array.isArray(o))
                    throw TypeError("First argument should be an array");
                  if (
                    (o.forEach((l) => {
                      if (
                        !Array.isArray(l) ||
                        l.some((o) => "number" != typeof o) ||
                        l.length !== o[0].length
                      )
                        throw Error(
                          "Each point should be an array of numbers. Each point should have the same amount of numbers."
                        );
                    }),
                    (o = o.filter(
                      (l, _) => 0 === _ || !l.every((l, S) => l === o[_ - 1][S])
                    )).length < 2)
                  )
                    return [];
                  let S = o.length,
                    E = createTangent(o[1], o[0]),
                    P = createTangent(o[S - 2], o[S - 1]);
                  return fitCubic(o, E, P, l, _);
                }
                function fitCubic(o, l, _, S, E) {
                  var P, T, M, F, D, I, O, L, N, U, W, H, V;
                  let z = 20;
                  if (2 === o.length)
                    return (
                      (H = maths.vectorLen(maths.subtract(o[0], o[1])) / 3),
                      [
                        (P = [
                          o[0],
                          maths.addArrays(o[0], maths.mulItems(l, H)),
                          maths.addArrays(o[1], maths.mulItems(_, H)),
                          o[1],
                        ]),
                      ]
                    );
                  if (
                    ((T = chordLengthParameterize(o)),
                    ([P, F, I] = generateAndReport(o, T, T, l, _, E)),
                    0 === F || F < S)
                  )
                    return [P];
                  if (F < S * S)
                    for (V = 0, M = T, D = F, O = I; V < z; V++) {
                      if (
                        ((M = reparameterize(P, o, M)),
                        ([P, F, I] = generateAndReport(o, T, M, l, _, E)),
                        F < S)
                      )
                        return [P];
                      if (I === O) {
                        let o = F / D;
                        if (o > 0.9999 && o < 1.0001) break;
                      }
                      (D = F), (O = I);
                    }
                  return (
                    (W = []),
                    (L = maths.subtract(o[I - 1], o[I + 1])).every(
                      (o) => 0 === o
                    ) &&
                      ((L = maths.subtract(o[I - 1], o[I])),
                      ([L[0], L[1]] = [-L[1], L[0]])),
                    (N = maths.normalize(L)),
                    (U = maths.mulItems(N, -1)),
                    (W = (W = W.concat(
                      fitCubic(o.slice(0, I + 1), l, N, S, E)
                    )).concat(fitCubic(o.slice(I), U, _, S, E)))
                  );
                }
                function generateAndReport(o, l, _, S, E, P) {
                  var T, M, F;
                  return (
                    (T = generateBezier(o, _, S, E, P)),
                    ([M, F] = computeMaxError(o, T, l)),
                    P &&
                      P({
                        bez: T,
                        points: o,
                        params: l,
                        maxErr: M,
                        maxPoint: F,
                      }),
                    [T, M, F]
                  );
                }
                function generateBezier(o, l, _, S) {
                  var E,
                    P,
                    T,
                    M,
                    F,
                    D,
                    I,
                    O,
                    L,
                    N,
                    U,
                    W,
                    H,
                    V,
                    z,
                    $,
                    K,
                    Y = o[0],
                    J = o[o.length - 1];
                  for (
                    H = 0,
                      E = [Y, null, null, J],
                      P = maths.zeros_Xx2x2(l.length),
                      V = l.length;
                    H < V;
                    H++
                  )
                    (K = 1 - ($ = l[H])),
                      ((T = P[H])[0] = maths.mulItems(_, 3 * $ * (K * K))),
                      (T[1] = maths.mulItems(S, 3 * K * ($ * $)));
                  for (
                    H = 0,
                      M = [
                        [0, 0],
                        [0, 0],
                      ],
                      F = [0, 0],
                      V = o.length;
                    H < V;
                    H++
                  )
                    ($ = l[H]),
                      (T = P[H]),
                      (M[0][0] += maths.dot(T[0], T[0])),
                      (M[0][1] += maths.dot(T[0], T[1])),
                      (M[1][0] += maths.dot(T[0], T[1])),
                      (M[1][1] += maths.dot(T[1], T[1])),
                      (z = maths.subtract(o[H], bezier.q([Y, Y, J, J], $))),
                      (F[0] += maths.dot(T[0], z)),
                      (F[1] += maths.dot(T[1], z));
                  return (
                    (D = M[0][0] * M[1][1] - M[1][0] * M[0][1]),
                    (I = M[0][0] * F[1] - M[1][0] * F[0]),
                    (O = F[0] * M[1][1] - F[1] * M[0][1]),
                    (L = 0 === D ? 0 : O / D),
                    (N = 0 === D ? 0 : I / D),
                    L <
                      (U =
                        1e-6 * (W = maths.vectorLen(maths.subtract(Y, J)))) ||
                    N < U
                      ? ((E[1] = maths.addArrays(Y, maths.mulItems(_, W / 3))),
                        (E[2] = maths.addArrays(J, maths.mulItems(S, W / 3))))
                      : ((E[1] = maths.addArrays(Y, maths.mulItems(_, L))),
                        (E[2] = maths.addArrays(J, maths.mulItems(S, N)))),
                    E
                  );
                }
                function reparameterize(o, l, _) {
                  return _.map((_, S) => newtonRaphsonRootFind(o, l[S], _));
                }
                function newtonRaphsonRootFind(o, l, _) {
                  var S = maths.subtract(bezier.q(o, _), l),
                    E = bezier.qprime(o, _),
                    P = maths.mulMatrix(S, E),
                    T =
                      maths.sum(maths.squareItems(E)) +
                      2 * maths.mulMatrix(S, bezier.qprimeprime(o, _));
                  return 0 === T ? _ : _ - P / T;
                }
                function chordLengthParameterize(o) {
                  var l,
                    _,
                    S,
                    E = [];
                  return (
                    o.forEach((o, P) => {
                      (l = P ? _ + maths.vectorLen(maths.subtract(o, S)) : 0),
                        E.push(l),
                        (_ = l),
                        (S = o);
                    }),
                    (E = E.map((o) => o / _))
                  );
                }
                function computeMaxError(o, l, _) {
                  var S, E, P, T, M, F, D, I;
                  (E = 0), (P = Math.floor(o.length / 2));
                  let O = mapTtoRelativeDistances(l, 10);
                  for (M = 0, F = o.length; M < F; M++)
                    (D = o[M]),
                      (I = find_t(l, _[M], O, 10)),
                      (S =
                        (T = maths.subtract(bezier.q(l, I), D))[0] * T[0] +
                        T[1] * T[1]) > E && ((E = S), (P = M));
                  return [E, P];
                }
                var mapTtoRelativeDistances = function (o, l) {
                  for (var _, S = [0], E = o[0], P = 0, T = 1; T <= l; T++)
                    (_ = bezier.q(o, T / l)),
                      S.push((P += maths.vectorLen(maths.subtract(_, E)))),
                      (E = _);
                  return S.map((o) => o / P);
                };
                function find_t(o, l, _, S) {
                  if (l < 0) return 0;
                  if (l > 1) return 1;
                  for (var E, P, T, M, F = 1; F <= S; F++)
                    if (l <= _[F]) {
                      (T = (F - 1) / S),
                        (P = F / S),
                        (M = ((l - (E = _[F - 1])) / (_[F] - E)) * (P - T) + T);
                      break;
                    }
                  return M;
                }
                function createTangent(o, l) {
                  return maths.normalize(maths.subtract(o, l));
                }
                let maths = class maths {
                  static zeros_Xx2x2(o) {
                    for (var l = []; o--; ) l.push([0, 0]);
                    return l;
                  }
                  static mulItems(o, l) {
                    return o.map((o) => o * l);
                  }
                  static mulMatrix(o, l) {
                    return o.reduce((o, _, S) => o + _ * l[S], 0);
                  }
                  static subtract(o, l) {
                    return o.map((o, _) => o - l[_]);
                  }
                  static addArrays(o, l) {
                    return o.map((o, _) => o + l[_]);
                  }
                  static addItems(o, l) {
                    return o.map((o) => o + l);
                  }
                  static sum(o) {
                    return o.reduce((o, l) => o + l);
                  }
                  static dot(o, l) {
                    return maths.mulMatrix(o, l);
                  }
                  static vectorLen(o) {
                    return Math.hypot(...o);
                  }
                  static divItems(o, l) {
                    return o.map((o) => o / l);
                  }
                  static squareItems(o) {
                    return o.map((o) => o * o);
                  }
                  static normalize(o) {
                    return this.divItems(o, this.vectorLen(o));
                  }
                };
                let bezier = class bezier {
                  static q(o, l) {
                    var _ = 1 - l,
                      S = maths.mulItems(o[0], _ * _ * _),
                      E = maths.mulItems(o[1], 3 * _ * _ * l),
                      P = maths.mulItems(o[2], 3 * _ * l * l),
                      T = maths.mulItems(o[3], l * l * l);
                    return maths.addArrays(
                      maths.addArrays(S, E),
                      maths.addArrays(P, T)
                    );
                  }
                  static qprime(o, l) {
                    var _ = 1 - l,
                      S = maths.mulItems(maths.subtract(o[1], o[0]), 3 * _ * _),
                      E = maths.mulItems(maths.subtract(o[2], o[1]), 6 * _ * l),
                      P = maths.mulItems(maths.subtract(o[3], o[2]), 3 * l * l);
                    return maths.addArrays(maths.addArrays(S, E), P);
                  }
                  static qprimeprime(o, l) {
                    return maths.addArrays(
                      maths.mulItems(
                        maths.addArrays(
                          maths.subtract(o[2], maths.mulItems(o[1], 2)),
                          o[0]
                        ),
                        6 * (1 - l)
                      ),
                      maths.mulItems(
                        maths.addArrays(
                          maths.subtract(o[3], maths.mulItems(o[2], 2)),
                          o[1]
                        ),
                        6 * l
                      )
                    );
                  }
                };
                (o.exports = fitCurve),
                  (o.exports.fitCubic = fitCubic),
                  (o.exports.createTangent = createTangent);
              },
              (o, l, _) => {
                Object.defineProperty(l, "__esModule", { value: !0 }),
                  (l.AnnotationLayer = void 0);
                var S = _(1),
                  E = _(6),
                  P = _(3),
                  T = _(33),
                  M = _(34);
                let F = 1e3,
                  D = 9,
                  I = new WeakSet();
                function getRectDims(o) {
                  return { width: o[2] - o[0], height: o[3] - o[1] };
                }
                let AnnotationElementFactory = class AnnotationElementFactory {
                  static create(o) {
                    let l = o.data.annotationType;
                    switch (l) {
                      case S.AnnotationType.LINK:
                        return new LinkAnnotationElement(o);
                      case S.AnnotationType.TEXT:
                        return new TextAnnotationElement(o);
                      case S.AnnotationType.WIDGET:
                        let _ = o.data.fieldType;
                        switch (_) {
                          case "Tx":
                            return new TextWidgetAnnotationElement(o);
                          case "Btn":
                            if (o.data.radioButton)
                              return new RadioButtonWidgetAnnotationElement(o);
                            if (o.data.checkBox)
                              return new CheckboxWidgetAnnotationElement(o);
                            return new PushButtonWidgetAnnotationElement(o);
                          case "Ch":
                            return new ChoiceWidgetAnnotationElement(o);
                        }
                        return new WidgetAnnotationElement(o);
                      case S.AnnotationType.POPUP:
                        return new PopupAnnotationElement(o);
                      case S.AnnotationType.FREETEXT:
                        return new FreeTextAnnotationElement(o);
                      case S.AnnotationType.LINE:
                        return new LineAnnotationElement(o);
                      case S.AnnotationType.SQUARE:
                        return new SquareAnnotationElement(o);
                      case S.AnnotationType.CIRCLE:
                        return new CircleAnnotationElement(o);
                      case S.AnnotationType.POLYLINE:
                        return new PolylineAnnotationElement(o);
                      case S.AnnotationType.CARET:
                        return new CaretAnnotationElement(o);
                      case S.AnnotationType.INK:
                        return new InkAnnotationElement(o);
                      case S.AnnotationType.POLYGON:
                        return new PolygonAnnotationElement(o);
                      case S.AnnotationType.HIGHLIGHT:
                        return new HighlightAnnotationElement(o);
                      case S.AnnotationType.UNDERLINE:
                        return new UnderlineAnnotationElement(o);
                      case S.AnnotationType.SQUIGGLY:
                        return new SquigglyAnnotationElement(o);
                      case S.AnnotationType.STRIKEOUT:
                        return new StrikeOutAnnotationElement(o);
                      case S.AnnotationType.STAMP:
                        return new StampAnnotationElement(o);
                      case S.AnnotationType.FILEATTACHMENT:
                        return new FileAttachmentAnnotationElement(o);
                      default:
                        return new AnnotationElement(o);
                    }
                  }
                };
                let AnnotationElement = class AnnotationElement {
                  constructor(
                    o,
                    {
                      isRenderable: l = !1,
                      ignoreBorder: _ = !1,
                      createQuadrilaterals: S = !1,
                    } = {}
                  ) {
                    (this.isRenderable = l),
                      (this.data = o.data),
                      (this.layer = o.layer),
                      (this.page = o.page),
                      (this.viewport = o.viewport),
                      (this.linkService = o.linkService),
                      (this.downloadManager = o.downloadManager),
                      (this.imageResourcesPath = o.imageResourcesPath),
                      (this.renderForms = o.renderForms),
                      (this.svgFactory = o.svgFactory),
                      (this.annotationStorage = o.annotationStorage),
                      (this.enableScripting = o.enableScripting),
                      (this.hasJSActions = o.hasJSActions),
                      (this._fieldObjects = o.fieldObjects),
                      l && (this.container = this._createContainer(_)),
                      S &&
                        (this.quadrilaterals = this._createQuadrilaterals(_));
                  }
                  _createContainer(o = !1) {
                    let { data: l, page: _, viewport: E } = this,
                      P = document.createElement("section");
                    P.setAttribute("data-annotation-id", l.id);
                    let {
                        pageWidth: T,
                        pageHeight: M,
                        pageX: F,
                        pageY: D,
                      } = E.rawDims,
                      { width: I, height: O } = getRectDims(l.rect),
                      L = S.Util.normalizeRect([
                        l.rect[0],
                        _.view[3] - l.rect[1] + _.view[1],
                        l.rect[2],
                        _.view[3] - l.rect[3] + _.view[1],
                      ]);
                    if (!o && l.borderStyle.width > 0) {
                      P.style.borderWidth = `${l.borderStyle.width}px`;
                      let o = l.borderStyle.horizontalCornerRadius,
                        _ = l.borderStyle.verticalCornerRadius;
                      if (o > 0 || _ > 0) {
                        let l = `calc(${o}px * var(--scale-factor)) / calc(${_}px * var(--scale-factor))`;
                        P.style.borderRadius = l;
                      } else if (
                        this instanceof RadioButtonWidgetAnnotationElement
                      ) {
                        let o = `calc(${I}px * var(--scale-factor)) / calc(${O}px * var(--scale-factor))`;
                        P.style.borderRadius = o;
                      }
                      switch (l.borderStyle.style) {
                        case S.AnnotationBorderStyleType.SOLID:
                          P.style.borderStyle = "solid";
                          break;
                        case S.AnnotationBorderStyleType.DASHED:
                          P.style.borderStyle = "dashed";
                          break;
                        case S.AnnotationBorderStyleType.BEVELED:
                          (0, S.warn)("Unimplemented border style: beveled");
                          break;
                        case S.AnnotationBorderStyleType.INSET:
                          (0, S.warn)("Unimplemented border style: inset");
                          break;
                        case S.AnnotationBorderStyleType.UNDERLINE:
                          P.style.borderBottomStyle = "solid";
                      }
                      let E = l.borderColor || null;
                      E
                        ? (P.style.borderColor = S.Util.makeHexColor(
                            0 | E[0],
                            0 | E[1],
                            0 | E[2]
                          ))
                        : (P.style.borderWidth = 0);
                    }
                    (P.style.left = `${(100 * (L[0] - F)) / T}%`),
                      (P.style.top = `${(100 * (L[1] - D)) / M}%`);
                    let { rotation: N } = l;
                    return (
                      l.hasOwnCanvas || 0 === N
                        ? ((P.style.width = `${(100 * I) / T}%`),
                          (P.style.height = `${(100 * O) / M}%`))
                        : this.setRotation(N, P),
                      P
                    );
                  }
                  setRotation(o, l = this.container) {
                    let _, S;
                    let { pageWidth: E, pageHeight: P } = this.viewport.rawDims,
                      { width: T, height: M } = getRectDims(this.data.rect);
                    o % 180 == 0
                      ? ((_ = (100 * T) / E), (S = (100 * M) / P))
                      : ((_ = (100 * M) / E), (S = (100 * T) / P)),
                      (l.style.width = `${_}%`),
                      (l.style.height = `${S}%`),
                      l.setAttribute("data-main-rotation", (360 - o) % 360);
                  }
                  get _commonActions() {
                    let setColor = (o, l, _) => {
                      let S = _.detail[o];
                      _.target.style[l] = T.ColorConverters[`${S[0]}_HTML`](
                        S.slice(1)
                      );
                    };
                    return (0, S.shadow)(this, "_commonActions", {
                      display: (o) => {
                        let l = o.detail.display % 2 == 1;
                        (this.container.style.visibility = l
                          ? "hidden"
                          : "visible"),
                          this.annotationStorage.setValue(this.data.id, {
                            hidden: l,
                            print:
                              0 === o.detail.display || 3 === o.detail.display,
                          });
                      },
                      print: (o) => {
                        this.annotationStorage.setValue(this.data.id, {
                          print: o.detail.print,
                        });
                      },
                      hidden: (o) => {
                        (this.container.style.visibility = o.detail.hidden
                          ? "hidden"
                          : "visible"),
                          this.annotationStorage.setValue(this.data.id, {
                            hidden: o.detail.hidden,
                          });
                      },
                      focus: (o) => {
                        setTimeout(
                          () => o.target.focus({ preventScroll: !1 }),
                          0
                        );
                      },
                      userName: (o) => {
                        o.target.title = o.detail.userName;
                      },
                      readonly: (o) => {
                        o.detail.readonly
                          ? o.target.setAttribute("readonly", "")
                          : o.target.removeAttribute("readonly");
                      },
                      required: (o) => {
                        this._setRequired(o.target, o.detail.required);
                      },
                      bgColor: (o) => {
                        setColor("bgColor", "backgroundColor", o);
                      },
                      fillColor: (o) => {
                        setColor("fillColor", "backgroundColor", o);
                      },
                      fgColor: (o) => {
                        setColor("fgColor", "color", o);
                      },
                      textColor: (o) => {
                        setColor("textColor", "color", o);
                      },
                      borderColor: (o) => {
                        setColor("borderColor", "borderColor", o);
                      },
                      strokeColor: (o) => {
                        setColor("strokeColor", "borderColor", o);
                      },
                      rotation: (o) => {
                        let l = o.detail.rotation;
                        this.setRotation(l),
                          this.annotationStorage.setValue(this.data.id, {
                            rotation: l,
                          });
                      },
                    });
                  }
                  _dispatchEventFromSandbox(o, l) {
                    let _ = this._commonActions;
                    for (let S of Object.keys(l.detail)) {
                      let E = o[S] || _[S];
                      E?.(l);
                    }
                  }
                  _setDefaultPropertiesFromJS(o) {
                    if (!this.enableScripting) return;
                    let l = this.annotationStorage.getRawValue(this.data.id);
                    if (!l) return;
                    let _ = this._commonActions;
                    for (let [S, E] of Object.entries(l)) {
                      let P = _[S];
                      if (P) {
                        let _ = { detail: { [S]: E }, target: o };
                        P(_), delete l[S];
                      }
                    }
                  }
                  _createQuadrilaterals(o = !1) {
                    if (!this.data.quadPoints) return null;
                    let l = [],
                      _ = this.data.rect;
                    for (let _ of this.data.quadPoints)
                      (this.data.rect = [_[2].x, _[2].y, _[1].x, _[1].y]),
                        l.push(this._createContainer(o));
                    return (this.data.rect = _), l;
                  }
                  _createPopup(o, l) {
                    let _ = this.container;
                    this.quadrilaterals &&
                      ((o = o || this.quadrilaterals),
                      (_ = this.quadrilaterals[0])),
                      o ||
                        (((o = document.createElement("div")).className =
                          "popupTriggerArea"),
                        _.append(o));
                    let S = new PopupElement({
                        container: _,
                        trigger: o,
                        color: l.color,
                        titleObj: l.titleObj,
                        modificationDate: l.modificationDate,
                        contentsObj: l.contentsObj,
                        richText: l.richText,
                        hideWrapper: !0,
                      }),
                      E = S.render();
                    (E.style.left = "100%"), _.append(E);
                  }
                  _renderQuadrilaterals(o) {
                    for (let l of this.quadrilaterals) l.className = o;
                    return this.quadrilaterals;
                  }
                  render() {
                    (0, S.unreachable)(
                      "Abstract method `AnnotationElement.render` called"
                    );
                  }
                  _getElementsByName(o, l = null) {
                    let _ = [];
                    if (this._fieldObjects) {
                      let E = this._fieldObjects[o];
                      if (E)
                        for (let { page: o, id: P, exportValues: T } of E) {
                          if (-1 === o || P === l) continue;
                          let E = "string" == typeof T ? T : null,
                            M = document.querySelector(
                              `[data-element-id="${P}"]`
                            );
                          if (M && !I.has(M)) {
                            (0, S.warn)(
                              `_getElementsByName - element not allowed: ${P}`
                            );
                            continue;
                          }
                          _.push({ id: P, exportValue: E, domElement: M });
                        }
                      return _;
                    }
                    for (let S of document.getElementsByName(o)) {
                      let { exportValue: o } = S,
                        E = S.getAttribute("data-element-id");
                      E !== l &&
                        I.has(S) &&
                        _.push({ id: E, exportValue: o, domElement: S });
                    }
                    return _;
                  }
                };
                let LinkAnnotationElement = class LinkAnnotationElement extends AnnotationElement {
                  constructor(o, l = null) {
                    super(o, {
                      isRenderable: !0,
                      ignoreBorder: !!l?.ignoreBorder,
                      createQuadrilaterals: !0,
                    }),
                      (this.isTooltipOnly = o.data.isTooltipOnly);
                  }
                  render() {
                    let { data: o, linkService: l } = this,
                      _ = document.createElement("a");
                    _.setAttribute("data-element-id", o.id);
                    let S = !1;
                    return (o.url
                      ? (l.addLinkAttributes(_, o.url, o.newWindow), (S = !0))
                      : o.action
                      ? (this._bindNamedAction(_, o.action), (S = !0))
                      : o.attachment
                      ? (this._bindAttachment(_, o.attachment), (S = !0))
                      : o.setOCGState
                      ? (this.#em(_, o.setOCGState), (S = !0))
                      : o.dest
                      ? (this._bindLink(_, o.dest), (S = !0))
                      : (o.actions &&
                          (o.actions.Action ||
                            o.actions["Mouse Up"] ||
                            o.actions["Mouse Down"]) &&
                          this.enableScripting &&
                          this.hasJSActions &&
                          (this._bindJSAction(_, o), (S = !0)),
                        o.resetForm
                          ? (this._bindResetFormAction(_, o.resetForm),
                            (S = !0))
                          : this.isTooltipOnly &&
                            !S &&
                            (this._bindLink(_, ""), (S = !0))),
                    this.quadrilaterals)
                      ? this._renderQuadrilaterals("linkAnnotation").map(
                          (o, l) => {
                            let S = 0 === l ? _ : _.cloneNode();
                            return o.append(S), o;
                          }
                        )
                      : ((this.container.className = "linkAnnotation"),
                        S && this.container.append(_),
                        this.container);
                  }
                  #ef() {
                    this.container.setAttribute("data-internal-link", "");
                  }
                  _bindLink(o, l) {
                    (o.href = this.linkService.getDestinationHash(l)),
                      (o.onclick = () => (
                        l && this.linkService.goToDestination(l), !1
                      )),
                      (l || "" === l) && this.#ef();
                  }
                  _bindNamedAction(o, l) {
                    (o.href = this.linkService.getAnchorUrl("")),
                      (o.onclick = () => (
                        this.linkService.executeNamedAction(l), !1
                      )),
                      this.#ef();
                  }
                  _bindAttachment(o, l) {
                    (o.href = this.linkService.getAnchorUrl("")),
                      (o.onclick = () => (
                        this.downloadManager?.openOrDownloadData(
                          this.container,
                          l.content,
                          l.filename
                        ),
                        !1
                      )),
                      this.#ef();
                  }
                  #em(o, l) {
                    (o.href = this.linkService.getAnchorUrl("")),
                      (o.onclick = () => (
                        this.linkService.executeSetOCGState(l), !1
                      )),
                      this.#ef();
                  }
                  _bindJSAction(o, l) {
                    o.href = this.linkService.getAnchorUrl("");
                    let _ = new Map([
                      ["Action", "onclick"],
                      ["Mouse Up", "onmouseup"],
                      ["Mouse Down", "onmousedown"],
                    ]);
                    for (let S of Object.keys(l.actions)) {
                      let E = _.get(S);
                      E &&
                        (o[E] = () => (
                          this.linkService.eventBus?.dispatch(
                            "dispatcheventinsandbox",
                            { source: this, detail: { id: l.id, name: S } }
                          ),
                          !1
                        ));
                    }
                    o.onclick || (o.onclick = () => !1), this.#ef();
                  }
                  _bindResetFormAction(o, l) {
                    let _ = o.onclick;
                    if (
                      (_ || (o.href = this.linkService.getAnchorUrl("")),
                      this.#ef(),
                      !this._fieldObjects)
                    ) {
                      (0, S.warn)(
                        '_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'
                      ),
                        _ || (o.onclick = () => !1);
                      return;
                    }
                    o.onclick = () => {
                      _?.();
                      let { fields: o, refs: E, include: P } = l,
                        T = [];
                      if (0 !== o.length || 0 !== E.length) {
                        let l = new Set(E);
                        for (let _ of o) {
                          let o = this._fieldObjects[_] || [];
                          for (let { id: _ } of o) l.add(_);
                        }
                        for (let o of Object.values(this._fieldObjects))
                          for (let _ of o) l.has(_.id) === P && T.push(_);
                      } else
                        for (let o of Object.values(this._fieldObjects))
                          T.push(...o);
                      let M = this.annotationStorage,
                        F = [];
                      for (let o of T) {
                        let { id: l } = o;
                        switch ((F.push(l), o.type)) {
                          case "text": {
                            let _ = o.defaultValue || "";
                            M.setValue(l, { value: _ });
                            break;
                          }
                          case "checkbox":
                          case "radiobutton": {
                            let _ = o.defaultValue === o.exportValues;
                            M.setValue(l, { value: _ });
                            break;
                          }
                          case "combobox":
                          case "listbox": {
                            let _ = o.defaultValue || "";
                            M.setValue(l, { value: _ });
                            break;
                          }
                          default:
                            continue;
                        }
                        let _ = document.querySelector(
                          `[data-element-id="${l}"]`
                        );
                        if (_) {
                          if (!I.has(_)) {
                            (0, S.warn)(
                              `_bindResetFormAction - element not allowed: ${l}`
                            );
                            continue;
                          }
                          _.dispatchEvent(new Event("resetform"));
                        }
                      }
                      return (
                        this.enableScripting &&
                          this.linkService.eventBus?.dispatch(
                            "dispatcheventinsandbox",
                            {
                              source: this,
                              detail: { id: "app", ids: F, name: "ResetForm" },
                            }
                          ),
                        !1
                      );
                    };
                  }
                };
                let TextAnnotationElement = class TextAnnotationElement extends AnnotationElement {
                  constructor(o) {
                    let l = !!(
                      o.data.hasPopup ||
                      o.data.titleObj?.str ||
                      o.data.contentsObj?.str ||
                      o.data.richText?.str
                    );
                    super(o, { isRenderable: l });
                  }
                  render() {
                    this.container.className = "textAnnotation";
                    let o = document.createElement("img");
                    return (
                      (o.src =
                        this.imageResourcesPath +
                        "annotation-" +
                        this.data.name.toLowerCase() +
                        ".svg"),
                      (o.alt = "[{{type}} Annotation]"),
                      (o.dataset.l10nId = "text_annotation_type"),
                      (o.dataset.l10nArgs = JSON.stringify({
                        type: this.data.name,
                      })),
                      this.data.hasPopup || this._createPopup(o, this.data),
                      this.container.append(o),
                      this.container
                    );
                  }
                };
                let WidgetAnnotationElement = class WidgetAnnotationElement extends AnnotationElement {
                  render() {
                    return (
                      this.data.alternativeText &&
                        (this.container.title = this.data.alternativeText),
                      this.container
                    );
                  }
                  _getKeyModifier(o) {
                    let { isWin: l, isMac: _ } = S.FeatureTest.platform;
                    return (l && o.ctrlKey) || (_ && o.metaKey);
                  }
                  _setEventListener(o, l, _, S) {
                    l.includes("mouse")
                      ? o.addEventListener(l, (o) => {
                          this.linkService.eventBus?.dispatch(
                            "dispatcheventinsandbox",
                            {
                              source: this,
                              detail: {
                                id: this.data.id,
                                name: _,
                                value: S(o),
                                shift: o.shiftKey,
                                modifier: this._getKeyModifier(o),
                              },
                            }
                          );
                        })
                      : o.addEventListener(l, (o) => {
                          this.linkService.eventBus?.dispatch(
                            "dispatcheventinsandbox",
                            {
                              source: this,
                              detail: {
                                id: this.data.id,
                                name: _,
                                value: S(o),
                              },
                            }
                          );
                        });
                  }
                  _setEventListeners(o, l, _) {
                    for (let [S, E] of l)
                      ("Action" === E || this.data.actions?.[E]) &&
                        this._setEventListener(o, S, E, _);
                  }
                  _setBackgroundColor(o) {
                    let l = this.data.backgroundColor || null;
                    o.style.backgroundColor =
                      null === l
                        ? "transparent"
                        : S.Util.makeHexColor(l[0], l[1], l[2]);
                  }
                  _setTextStyle(o) {
                    let l;
                    let _ = ["left", "center", "right"],
                      { fontColor: E } = this.data.defaultAppearanceData,
                      P = this.data.defaultAppearanceData.fontSize || D,
                      T = o.style,
                      M = 2,
                      roundToOneDecimal = (o) => Math.round(10 * o) / 10;
                    if (this.data.multiLine) {
                      let o = Math.abs(
                          this.data.rect[3] - this.data.rect[1] - M
                        ),
                        _ = Math.round(o / (S.LINE_FACTOR * P)) || 1,
                        E = o / _;
                      l = Math.min(P, roundToOneDecimal(E / S.LINE_FACTOR));
                    } else {
                      let o = Math.abs(
                        this.data.rect[3] - this.data.rect[1] - M
                      );
                      l = Math.min(P, roundToOneDecimal(o / S.LINE_FACTOR));
                    }
                    (T.fontSize = `calc(${l}px * var(--scale-factor))`),
                      (T.color = S.Util.makeHexColor(E[0], E[1], E[2])),
                      null !== this.data.textAlignment &&
                        (T.textAlign = _[this.data.textAlignment]);
                  }
                  _setRequired(o, l) {
                    l
                      ? o.setAttribute("required", !0)
                      : o.removeAttribute("required"),
                      o.setAttribute("aria-required", l);
                  }
                };
                let TextWidgetAnnotationElement = class TextWidgetAnnotationElement extends WidgetAnnotationElement {
                  constructor(o) {
                    let l =
                      o.renderForms ||
                      (!o.data.hasAppearance && !!o.data.fieldValue);
                    super(o, { isRenderable: l });
                  }
                  setPropertyOnSiblings(o, l, _, S) {
                    let E = this.annotationStorage;
                    for (let P of this._getElementsByName(o.name, o.id))
                      P.domElement && (P.domElement[l] = _),
                        E.setValue(P.id, { [S]: _ });
                  }
                  render() {
                    let o = this.annotationStorage,
                      l = this.data.id;
                    this.container.className = "textWidgetAnnotation";
                    let _ = null;
                    if (this.renderForms) {
                      let S = o.getValue(l, { value: this.data.fieldValue }),
                        E = S.formattedValue || S.value || "",
                        P = o.getValue(l, {
                          charLimit: this.data.maxLen,
                        }).charLimit;
                      P && E.length > P && (E = E.slice(0, P));
                      let T = {
                        userValue: E,
                        formattedValue: null,
                        lastCommittedValue: null,
                        commitKey: 1,
                      };
                      this.data.multiLine
                        ? (((_ =
                            document.createElement("textarea")).textContent =
                            E),
                          this.data.doNotScroll &&
                            (_.style.overflowY = "hidden"))
                        : (((_ = document.createElement("input")).type =
                            "text"),
                          _.setAttribute("value", E),
                          this.data.doNotScroll &&
                            (_.style.overflowX = "hidden")),
                        I.add(_),
                        _.setAttribute("data-element-id", l),
                        (_.disabled = this.data.readOnly),
                        (_.name = this.data.fieldName),
                        (_.tabIndex = F),
                        this._setRequired(_, this.data.required),
                        P && (_.maxLength = P),
                        _.addEventListener("input", (S) => {
                          o.setValue(l, { value: S.target.value }),
                            this.setPropertyOnSiblings(
                              _,
                              "value",
                              S.target.value,
                              "value"
                            );
                        }),
                        _.addEventListener("resetform", (o) => {
                          let l = this.data.defaultFieldValue ?? "";
                          (_.value = T.userValue = l),
                            (T.formattedValue = null);
                        });
                      let blurListener = (o) => {
                        let { formattedValue: l } = T;
                        null != l && (o.target.value = l),
                          (o.target.scrollLeft = 0);
                      };
                      if (this.enableScripting && this.hasJSActions) {
                        _.addEventListener("focus", (o) => {
                          let { target: l } = o;
                          T.userValue && (l.value = T.userValue),
                            (T.lastCommittedValue = l.value),
                            (T.commitKey = 1);
                        }),
                          _.addEventListener("updatefromsandbox", (_) => {
                            let S = {
                              value(_) {
                                (T.userValue = _.detail.value ?? ""),
                                  o.setValue(l, {
                                    value: T.userValue.toString(),
                                  }),
                                  (_.target.value = T.userValue);
                              },
                              formattedValue(_) {
                                let { formattedValue: S } = _.detail;
                                (T.formattedValue = S),
                                  null != S &&
                                    _.target !== document.activeElement &&
                                    (_.target.value = S),
                                  o.setValue(l, { formattedValue: S });
                              },
                              selRange(o) {
                                o.target.setSelectionRange(
                                  ...o.detail.selRange
                                );
                              },
                              charLimit: (_) => {
                                let { charLimit: S } = _.detail,
                                  { target: E } = _;
                                if (0 === S) {
                                  E.removeAttribute("maxLength");
                                  return;
                                }
                                E.setAttribute("maxLength", S);
                                let P = T.userValue;
                                P &&
                                  !(P.length <= S) &&
                                  ((P = P.slice(0, S)),
                                  (E.value = T.userValue = P),
                                  o.setValue(l, { value: P }),
                                  this.linkService.eventBus?.dispatch(
                                    "dispatcheventinsandbox",
                                    {
                                      source: this,
                                      detail: {
                                        id: l,
                                        name: "Keystroke",
                                        value: P,
                                        willCommit: !0,
                                        commitKey: 1,
                                        selStart: E.selectionStart,
                                        selEnd: E.selectionEnd,
                                      },
                                    }
                                  ));
                              },
                            };
                            this._dispatchEventFromSandbox(S, _);
                          }),
                          _.addEventListener("keydown", (o) => {
                            T.commitKey = 1;
                            let _ = -1;
                            if (
                              ("Escape" === o.key
                                ? (_ = 0)
                                : "Enter" !== o.key || this.data.multiLine
                                ? "Tab" === o.key && (T.commitKey = 3)
                                : (_ = 2),
                              -1 === _)
                            )
                              return;
                            let { value: S } = o.target;
                            T.lastCommittedValue !== S &&
                              ((T.lastCommittedValue = S),
                              (T.userValue = S),
                              this.linkService.eventBus?.dispatch(
                                "dispatcheventinsandbox",
                                {
                                  source: this,
                                  detail: {
                                    id: l,
                                    name: "Keystroke",
                                    value: S,
                                    willCommit: !0,
                                    commitKey: _,
                                    selStart: o.target.selectionStart,
                                    selEnd: o.target.selectionEnd,
                                  },
                                }
                              ));
                          });
                        let S = blurListener;
                        (blurListener = null),
                          _.addEventListener("blur", (o) => {
                            if (!o.relatedTarget) return;
                            let { value: _ } = o.target;
                            (T.userValue = _),
                              T.lastCommittedValue !== _ &&
                                this.linkService.eventBus?.dispatch(
                                  "dispatcheventinsandbox",
                                  {
                                    source: this,
                                    detail: {
                                      id: l,
                                      name: "Keystroke",
                                      value: _,
                                      willCommit: !0,
                                      commitKey: T.commitKey,
                                      selStart: o.target.selectionStart,
                                      selEnd: o.target.selectionEnd,
                                    },
                                  }
                                ),
                              S(o);
                          }),
                          this.data.actions?.Keystroke &&
                            _.addEventListener("beforeinput", (o) => {
                              T.lastCommittedValue = null;
                              let { data: _, target: S } = o,
                                {
                                  value: E,
                                  selectionStart: P,
                                  selectionEnd: M,
                                } = S,
                                F = P,
                                D = M;
                              switch (o.inputType) {
                                case "deleteWordBackward": {
                                  let o = E.substring(0, P).match(/\w*[^\w]*$/);
                                  o && (F -= o[0].length);
                                  break;
                                }
                                case "deleteWordForward": {
                                  let o = E.substring(P).match(/^[^\w]*\w*/);
                                  o && (D += o[0].length);
                                  break;
                                }
                                case "deleteContentBackward":
                                  P === M && (F -= 1);
                                  break;
                                case "deleteContentForward":
                                  P === M && (D += 1);
                              }
                              o.preventDefault(),
                                this.linkService.eventBus?.dispatch(
                                  "dispatcheventinsandbox",
                                  {
                                    source: this,
                                    detail: {
                                      id: l,
                                      name: "Keystroke",
                                      value: E,
                                      change: _ || "",
                                      willCommit: !1,
                                      selStart: F,
                                      selEnd: D,
                                    },
                                  }
                                );
                            }),
                          this._setEventListeners(
                            _,
                            [
                              ["focus", "Focus"],
                              ["blur", "Blur"],
                              ["mousedown", "Mouse Down"],
                              ["mouseenter", "Mouse Enter"],
                              ["mouseleave", "Mouse Exit"],
                              ["mouseup", "Mouse Up"],
                            ],
                            (o) => o.target.value
                          );
                      }
                      if (
                        (blurListener &&
                          _.addEventListener("blur", blurListener),
                        this.data.comb)
                      ) {
                        let o = this.data.rect[2] - this.data.rect[0],
                          l = o / P;
                        _.classList.add("comb"),
                          (_.style.letterSpacing = `calc(${l}px * var(--scale-factor) - 1ch)`);
                      }
                    } else
                      ((_ = document.createElement("div")).textContent =
                        this.data.fieldValue),
                        (_.style.verticalAlign = "middle"),
                        (_.style.display = "table-cell");
                    return (
                      this._setTextStyle(_),
                      this._setBackgroundColor(_),
                      this._setDefaultPropertiesFromJS(_),
                      this.container.append(_),
                      this.container
                    );
                  }
                };
                let CheckboxWidgetAnnotationElement = class CheckboxWidgetAnnotationElement extends WidgetAnnotationElement {
                  constructor(o) {
                    super(o, { isRenderable: o.renderForms });
                  }
                  render() {
                    let o = this.annotationStorage,
                      l = this.data,
                      _ = l.id,
                      S = o.getValue(_, {
                        value: l.exportValue === l.fieldValue,
                      }).value;
                    "string" == typeof S &&
                      ((S = "Off" !== S), o.setValue(_, { value: S })),
                      (this.container.className =
                        "buttonWidgetAnnotation checkBox");
                    let E = document.createElement("input");
                    return (
                      I.add(E),
                      E.setAttribute("data-element-id", _),
                      (E.disabled = l.readOnly),
                      this._setRequired(E, this.data.required),
                      (E.type = "checkbox"),
                      (E.name = l.fieldName),
                      S && E.setAttribute("checked", !0),
                      E.setAttribute("exportValue", l.exportValue),
                      (E.tabIndex = F),
                      E.addEventListener("change", (S) => {
                        let { name: E, checked: P } = S.target;
                        for (let S of this._getElementsByName(E, _)) {
                          let _ = P && S.exportValue === l.exportValue;
                          S.domElement && (S.domElement.checked = _),
                            o.setValue(S.id, { value: _ });
                        }
                        o.setValue(_, { value: P });
                      }),
                      E.addEventListener("resetform", (o) => {
                        let _ = l.defaultFieldValue || "Off";
                        o.target.checked = _ === l.exportValue;
                      }),
                      this.enableScripting &&
                        this.hasJSActions &&
                        (E.addEventListener("updatefromsandbox", (l) => {
                          let S = {
                            value(l) {
                              (l.target.checked = "Off" !== l.detail.value),
                                o.setValue(_, { value: l.target.checked });
                            },
                          };
                          this._dispatchEventFromSandbox(S, l);
                        }),
                        this._setEventListeners(
                          E,
                          [
                            ["change", "Validate"],
                            ["change", "Action"],
                            ["focus", "Focus"],
                            ["blur", "Blur"],
                            ["mousedown", "Mouse Down"],
                            ["mouseenter", "Mouse Enter"],
                            ["mouseleave", "Mouse Exit"],
                            ["mouseup", "Mouse Up"],
                          ],
                          (o) => o.target.checked
                        )),
                      this._setBackgroundColor(E),
                      this._setDefaultPropertiesFromJS(E),
                      this.container.append(E),
                      this.container
                    );
                  }
                };
                let RadioButtonWidgetAnnotationElement = class RadioButtonWidgetAnnotationElement extends WidgetAnnotationElement {
                  constructor(o) {
                    super(o, { isRenderable: o.renderForms });
                  }
                  render() {
                    this.container.className =
                      "buttonWidgetAnnotation radioButton";
                    let o = this.annotationStorage,
                      l = this.data,
                      _ = l.id,
                      S = o.getValue(_, {
                        value: l.fieldValue === l.buttonValue,
                      }).value;
                    "string" == typeof S &&
                      ((S = S !== l.buttonValue), o.setValue(_, { value: S }));
                    let E = document.createElement("input");
                    if (
                      (I.add(E),
                      E.setAttribute("data-element-id", _),
                      (E.disabled = l.readOnly),
                      this._setRequired(E, this.data.required),
                      (E.type = "radio"),
                      (E.name = l.fieldName),
                      S && E.setAttribute("checked", !0),
                      (E.tabIndex = F),
                      E.addEventListener("change", (l) => {
                        let { name: S, checked: E } = l.target;
                        for (let l of this._getElementsByName(S, _))
                          o.setValue(l.id, { value: !1 });
                        o.setValue(_, { value: E });
                      }),
                      E.addEventListener("resetform", (o) => {
                        let _ = l.defaultFieldValue;
                        o.target.checked = null != _ && _ === l.buttonValue;
                      }),
                      this.enableScripting && this.hasJSActions)
                    ) {
                      let S = l.buttonValue;
                      E.addEventListener("updatefromsandbox", (l) => {
                        let E = {
                          value: (l) => {
                            let E = S === l.detail.value;
                            for (let S of this._getElementsByName(
                              l.target.name
                            )) {
                              let l = E && S.id === _;
                              S.domElement && (S.domElement.checked = l),
                                o.setValue(S.id, { value: l });
                            }
                          },
                        };
                        this._dispatchEventFromSandbox(E, l);
                      }),
                        this._setEventListeners(
                          E,
                          [
                            ["change", "Validate"],
                            ["change", "Action"],
                            ["focus", "Focus"],
                            ["blur", "Blur"],
                            ["mousedown", "Mouse Down"],
                            ["mouseenter", "Mouse Enter"],
                            ["mouseleave", "Mouse Exit"],
                            ["mouseup", "Mouse Up"],
                          ],
                          (o) => o.target.checked
                        );
                    }
                    return (
                      this._setBackgroundColor(E),
                      this._setDefaultPropertiesFromJS(E),
                      this.container.append(E),
                      this.container
                    );
                  }
                };
                let PushButtonWidgetAnnotationElement = class PushButtonWidgetAnnotationElement extends LinkAnnotationElement {
                  constructor(o) {
                    super(o, { ignoreBorder: o.data.hasAppearance });
                  }
                  render() {
                    let o = super.render();
                    (o.className = "buttonWidgetAnnotation pushButton"),
                      this.data.alternativeText &&
                        (o.title = this.data.alternativeText);
                    let l = o.lastChild;
                    return (
                      this.enableScripting &&
                        this.hasJSActions &&
                        l &&
                        (this._setDefaultPropertiesFromJS(l),
                        l.addEventListener("updatefromsandbox", (o) => {
                          this._dispatchEventFromSandbox({}, o);
                        })),
                      o
                    );
                  }
                };
                let ChoiceWidgetAnnotationElement = class ChoiceWidgetAnnotationElement extends WidgetAnnotationElement {
                  constructor(o) {
                    super(o, { isRenderable: o.renderForms });
                  }
                  render() {
                    this.container.className = "choiceWidgetAnnotation";
                    let o = this.annotationStorage,
                      l = this.data.id,
                      _ = o.getValue(l, { value: this.data.fieldValue }),
                      S = document.createElement("select");
                    I.add(S),
                      S.setAttribute("data-element-id", l),
                      (S.disabled = this.data.readOnly),
                      this._setRequired(S, this.data.required),
                      (S.name = this.data.fieldName),
                      (S.tabIndex = F);
                    let E = this.data.combo && this.data.options.length > 0;
                    for (let o of (!this.data.combo &&
                      ((S.size = this.data.options.length),
                      this.data.multiSelect && (S.multiple = !0)),
                    S.addEventListener("resetform", (o) => {
                      let l = this.data.defaultFieldValue;
                      for (let o of S.options) o.selected = o.value === l;
                    }),
                    this.data.options)) {
                      let l = document.createElement("option");
                      (l.textContent = o.displayValue),
                        (l.value = o.exportValue),
                        _.value.includes(o.exportValue) &&
                          (l.setAttribute("selected", !0), (E = !1)),
                        S.append(l);
                    }
                    let P = null;
                    if (E) {
                      let o = document.createElement("option");
                      (o.value = " "),
                        o.setAttribute("hidden", !0),
                        o.setAttribute("selected", !0),
                        S.prepend(o),
                        (P = () => {
                          o.remove(),
                            S.removeEventListener("input", P),
                            (P = null);
                        }),
                        S.addEventListener("input", P);
                    }
                    let getValue = (o) => {
                        let l = o ? "value" : "textContent",
                          { options: _, multiple: E } = S;
                        return E
                          ? Array.prototype.filter
                              .call(_, (o) => o.selected)
                              .map((o) => o[l])
                          : -1 === _.selectedIndex
                          ? null
                          : _[_.selectedIndex][l];
                      },
                      T = getValue(!1),
                      getItems = (o) => {
                        let l = o.target.options;
                        return Array.prototype.map.call(l, (o) => ({
                          displayValue: o.textContent,
                          exportValue: o.value,
                        }));
                      };
                    return (
                      this.enableScripting && this.hasJSActions
                        ? (S.addEventListener("updatefromsandbox", (_) => {
                            let E = {
                              value(_) {
                                P?.();
                                let E = _.detail.value,
                                  M = new Set(Array.isArray(E) ? E : [E]);
                                for (let o of S.options)
                                  o.selected = M.has(o.value);
                                o.setValue(l, { value: getValue(!0) }),
                                  (T = getValue(!1));
                              },
                              multipleSelection(o) {
                                S.multiple = !0;
                              },
                              remove(_) {
                                let E = S.options,
                                  P = _.detail.remove;
                                if (
                                  ((E[P].selected = !1),
                                  S.remove(P),
                                  E.length > 0)
                                ) {
                                  let o = Array.prototype.findIndex.call(
                                    E,
                                    (o) => o.selected
                                  );
                                  -1 === o && (E[0].selected = !0);
                                }
                                o.setValue(l, {
                                  value: getValue(!0),
                                  items: getItems(_),
                                }),
                                  (T = getValue(!1));
                              },
                              clear(_) {
                                for (; 0 !== S.length; ) S.remove(0);
                                o.setValue(l, { value: null, items: [] }),
                                  (T = getValue(!1));
                              },
                              insert(_) {
                                let {
                                    index: E,
                                    displayValue: P,
                                    exportValue: M,
                                  } = _.detail.insert,
                                  F = S.children[E],
                                  D = document.createElement("option");
                                (D.textContent = P),
                                  (D.value = M),
                                  F ? F.before(D) : S.append(D),
                                  o.setValue(l, {
                                    value: getValue(!0),
                                    items: getItems(_),
                                  }),
                                  (T = getValue(!1));
                              },
                              items(_) {
                                let { items: E } = _.detail;
                                for (; 0 !== S.length; ) S.remove(0);
                                for (let o of E) {
                                  let { displayValue: l, exportValue: _ } = o,
                                    E = document.createElement("option");
                                  (E.textContent = l),
                                    (E.value = _),
                                    S.append(E);
                                }
                                S.options.length > 0 &&
                                  (S.options[0].selected = !0),
                                  o.setValue(l, {
                                    value: getValue(!0),
                                    items: getItems(_),
                                  }),
                                  (T = getValue(!1));
                              },
                              indices(_) {
                                let S = new Set(_.detail.indices);
                                for (let o of _.target.options)
                                  o.selected = S.has(o.index);
                                o.setValue(l, { value: getValue(!0) }),
                                  (T = getValue(!1));
                              },
                              editable(o) {
                                o.target.disabled = !o.detail.editable;
                              },
                            };
                            this._dispatchEventFromSandbox(E, _);
                          }),
                          S.addEventListener("input", (_) => {
                            let S = getValue(!0);
                            o.setValue(l, { value: S }),
                              _.preventDefault(),
                              this.linkService.eventBus?.dispatch(
                                "dispatcheventinsandbox",
                                {
                                  source: this,
                                  detail: {
                                    id: l,
                                    name: "Keystroke",
                                    value: T,
                                    changeEx: S,
                                    willCommit: !1,
                                    commitKey: 1,
                                    keyDown: !1,
                                  },
                                }
                              );
                          }),
                          this._setEventListeners(
                            S,
                            [
                              ["focus", "Focus"],
                              ["blur", "Blur"],
                              ["mousedown", "Mouse Down"],
                              ["mouseenter", "Mouse Enter"],
                              ["mouseleave", "Mouse Exit"],
                              ["mouseup", "Mouse Up"],
                              ["input", "Action"],
                              ["input", "Validate"],
                            ],
                            (o) => o.target.value
                          ))
                        : S.addEventListener("input", function (_) {
                            o.setValue(l, { value: getValue(!0) });
                          }),
                      this.data.combo && this._setTextStyle(S),
                      this._setBackgroundColor(S),
                      this._setDefaultPropertiesFromJS(S),
                      this.container.append(S),
                      this.container
                    );
                  }
                };
                let PopupAnnotationElement = class PopupAnnotationElement extends AnnotationElement {
                  static IGNORE_TYPES = new Set([
                    "Line",
                    "Square",
                    "Circle",
                    "PolyLine",
                    "Polygon",
                    "Ink",
                  ]);
                  constructor(o) {
                    let { data: l } = o,
                      _ =
                        !PopupAnnotationElement.IGNORE_TYPES.has(
                          l.parentType
                        ) &&
                        !!(
                          l.titleObj?.str ||
                          l.contentsObj?.str ||
                          l.richText?.str
                        );
                    super(o, { isRenderable: _ });
                  }
                  render() {
                    this.container.className = "popupAnnotation";
                    let o = this.layer.querySelectorAll(
                      `[data-annotation-id="${this.data.parentId}"]`
                    );
                    if (0 === o.length) return this.container;
                    let l = new PopupElement({
                        container: this.container,
                        trigger: Array.from(o),
                        color: this.data.color,
                        titleObj: this.data.titleObj,
                        modificationDate: this.data.modificationDate,
                        contentsObj: this.data.contentsObj,
                        richText: this.data.richText,
                      }),
                      _ = this.page,
                      E = S.Util.normalizeRect([
                        this.data.parentRect[0],
                        _.view[3] - this.data.parentRect[1] + _.view[1],
                        this.data.parentRect[2],
                        _.view[3] - this.data.parentRect[3] + _.view[1],
                      ]),
                      P =
                        E[0] +
                        this.data.parentRect[2] -
                        this.data.parentRect[0],
                      T = E[1],
                      {
                        pageWidth: M,
                        pageHeight: F,
                        pageX: D,
                        pageY: I,
                      } = this.viewport.rawDims;
                    return (
                      (this.container.style.left = `${(100 * (P - D)) / M}%`),
                      (this.container.style.top = `${(100 * (T - I)) / F}%`),
                      this.container.append(l.render()),
                      this.container
                    );
                  }
                };
                let PopupElement = class PopupElement {
                  constructor(o) {
                    (this.container = o.container),
                      (this.trigger = o.trigger),
                      (this.color = o.color),
                      (this.titleObj = o.titleObj),
                      (this.modificationDate = o.modificationDate),
                      (this.contentsObj = o.contentsObj),
                      (this.richText = o.richText),
                      (this.hideWrapper = o.hideWrapper || !1),
                      (this.pinned = !1);
                  }
                  render() {
                    let o = 0.7,
                      l = document.createElement("div");
                    (l.className = "popupWrapper"),
                      (this.hideElement = this.hideWrapper
                        ? l
                        : this.container),
                      (this.hideElement.hidden = !0);
                    let _ = document.createElement("div");
                    _.className = "popup";
                    let P = this.color;
                    if (P) {
                      let l = o * (255 - P[0]) + P[0],
                        E = o * (255 - P[1]) + P[1],
                        T = o * (255 - P[2]) + P[2];
                      _.style.backgroundColor = S.Util.makeHexColor(
                        0 | l,
                        0 | E,
                        0 | T
                      );
                    }
                    let T = document.createElement("h1");
                    (T.dir = this.titleObj.dir),
                      (T.textContent = this.titleObj.str),
                      _.append(T);
                    let F = E.PDFDateString.toDateObject(this.modificationDate);
                    if (F) {
                      let o = document.createElement("span");
                      (o.className = "popupDate"),
                        (o.textContent = "{{date}}, {{time}}"),
                        (o.dataset.l10nId = "annotation_date_string"),
                        (o.dataset.l10nArgs = JSON.stringify({
                          date: F.toLocaleDateString(),
                          time: F.toLocaleTimeString(),
                        })),
                        _.append(o);
                    }
                    if (
                      this.richText?.str &&
                      (!this.contentsObj?.str ||
                        this.contentsObj.str === this.richText.str)
                    )
                      M.XfaLayer.render({
                        xfaHtml: this.richText.html,
                        intent: "richText",
                        div: _,
                      }),
                        (_.lastChild.className = "richText popupContent");
                    else {
                      let o = this._formatContents(this.contentsObj);
                      _.append(o);
                    }
                    for (let o of (Array.isArray(this.trigger) ||
                      (this.trigger = [this.trigger]),
                    this.trigger))
                      o.addEventListener("click", this._toggle.bind(this)),
                        o.addEventListener(
                          "mouseover",
                          this._show.bind(this, !1)
                        ),
                        o.addEventListener(
                          "mouseout",
                          this._hide.bind(this, !1)
                        );
                    return (
                      _.addEventListener("click", this._hide.bind(this, !0)),
                      l.append(_),
                      l
                    );
                  }
                  _formatContents({ str: o, dir: l }) {
                    let _ = document.createElement("p");
                    (_.className = "popupContent"), (_.dir = l);
                    let S = o.split(/(?:\r\n?|\n)/);
                    for (let o = 0, l = S.length; o < l; ++o) {
                      let E = S[o];
                      _.append(document.createTextNode(E)),
                        o < l - 1 && _.append(document.createElement("br"));
                    }
                    return _;
                  }
                  _toggle() {
                    this.pinned ? this._hide(!0) : this._show(!0);
                  }
                  _show(o = !1) {
                    o && (this.pinned = !0),
                      this.hideElement.hidden &&
                        ((this.hideElement.hidden = !1),
                        (this.container.style.zIndex =
                          parseInt(this.container.style.zIndex) + 1e3));
                  }
                  _hide(o = !0) {
                    o && (this.pinned = !1),
                      this.hideElement.hidden ||
                        this.pinned ||
                        ((this.hideElement.hidden = !0),
                        (this.container.style.zIndex =
                          parseInt(this.container.style.zIndex) - 1e3));
                  }
                };
                let FreeTextAnnotationElement = class FreeTextAnnotationElement extends AnnotationElement {
                  constructor(o) {
                    let l = !!(
                      o.data.hasPopup ||
                      o.data.titleObj?.str ||
                      o.data.contentsObj?.str ||
                      o.data.richText?.str
                    );
                    super(o, { isRenderable: l, ignoreBorder: !0 }),
                      (this.textContent = o.data.textContent);
                  }
                  render() {
                    if (
                      ((this.container.className = "freeTextAnnotation"),
                      this.textContent)
                    ) {
                      let o = document.createElement("div");
                      for (let l of ((o.className = "annotationTextContent"),
                      o.setAttribute("role", "comment"),
                      this.textContent)) {
                        let _ = document.createElement("span");
                        (_.textContent = l), o.append(_);
                      }
                      this.container.append(o);
                    }
                    return (
                      this.data.hasPopup || this._createPopup(null, this.data),
                      this.container
                    );
                  }
                };
                let LineAnnotationElement = class LineAnnotationElement extends AnnotationElement {
                  constructor(o) {
                    let l = !!(
                      o.data.hasPopup ||
                      o.data.titleObj?.str ||
                      o.data.contentsObj?.str ||
                      o.data.richText?.str
                    );
                    super(o, { isRenderable: l, ignoreBorder: !0 });
                  }
                  render() {
                    this.container.className = "lineAnnotation";
                    let o = this.data,
                      { width: l, height: _ } = getRectDims(o.rect),
                      S = this.svgFactory.create(l, _, !0),
                      E = this.svgFactory.createElement("svg:line");
                    return (
                      E.setAttribute("x1", o.rect[2] - o.lineCoordinates[0]),
                      E.setAttribute("y1", o.rect[3] - o.lineCoordinates[1]),
                      E.setAttribute("x2", o.rect[2] - o.lineCoordinates[2]),
                      E.setAttribute("y2", o.rect[3] - o.lineCoordinates[3]),
                      E.setAttribute("stroke-width", o.borderStyle.width || 1),
                      E.setAttribute("stroke", "transparent"),
                      E.setAttribute("fill", "transparent"),
                      S.append(E),
                      this.container.append(S),
                      this._createPopup(E, o),
                      this.container
                    );
                  }
                };
                let SquareAnnotationElement = class SquareAnnotationElement extends AnnotationElement {
                  constructor(o) {
                    let l = !!(
                      o.data.hasPopup ||
                      o.data.titleObj?.str ||
                      o.data.contentsObj?.str ||
                      o.data.richText?.str
                    );
                    super(o, { isRenderable: l, ignoreBorder: !0 });
                  }
                  render() {
                    this.container.className = "squareAnnotation";
                    let o = this.data,
                      { width: l, height: _ } = getRectDims(o.rect),
                      S = this.svgFactory.create(l, _, !0),
                      E = o.borderStyle.width,
                      P = this.svgFactory.createElement("svg:rect");
                    return (
                      P.setAttribute("x", E / 2),
                      P.setAttribute("y", E / 2),
                      P.setAttribute("width", l - E),
                      P.setAttribute("height", _ - E),
                      P.setAttribute("stroke-width", E || 1),
                      P.setAttribute("stroke", "transparent"),
                      P.setAttribute("fill", "transparent"),
                      S.append(P),
                      this.container.append(S),
                      this._createPopup(P, o),
                      this.container
                    );
                  }
                };
                let CircleAnnotationElement = class CircleAnnotationElement extends AnnotationElement {
                  constructor(o) {
                    let l = !!(
                      o.data.hasPopup ||
                      o.data.titleObj?.str ||
                      o.data.contentsObj?.str ||
                      o.data.richText?.str
                    );
                    super(o, { isRenderable: l, ignoreBorder: !0 });
                  }
                  render() {
                    this.container.className = "circleAnnotation";
                    let o = this.data,
                      { width: l, height: _ } = getRectDims(o.rect),
                      S = this.svgFactory.create(l, _, !0),
                      E = o.borderStyle.width,
                      P = this.svgFactory.createElement("svg:ellipse");
                    return (
                      P.setAttribute("cx", l / 2),
                      P.setAttribute("cy", _ / 2),
                      P.setAttribute("rx", l / 2 - E / 2),
                      P.setAttribute("ry", _ / 2 - E / 2),
                      P.setAttribute("stroke-width", E || 1),
                      P.setAttribute("stroke", "transparent"),
                      P.setAttribute("fill", "transparent"),
                      S.append(P),
                      this.container.append(S),
                      this._createPopup(P, o),
                      this.container
                    );
                  }
                };
                let PolylineAnnotationElement = class PolylineAnnotationElement extends AnnotationElement {
                  constructor(o) {
                    let l = !!(
                      o.data.hasPopup ||
                      o.data.titleObj?.str ||
                      o.data.contentsObj?.str ||
                      o.data.richText?.str
                    );
                    super(o, { isRenderable: l, ignoreBorder: !0 }),
                      (this.containerClassName = "polylineAnnotation"),
                      (this.svgElementName = "svg:polyline");
                  }
                  render() {
                    this.container.className = this.containerClassName;
                    let o = this.data,
                      { width: l, height: _ } = getRectDims(o.rect),
                      S = this.svgFactory.create(l, _, !0),
                      E = [];
                    for (let l of o.vertices) {
                      let _ = l.x - o.rect[0],
                        S = o.rect[3] - l.y;
                      E.push(_ + "," + S);
                    }
                    E = E.join(" ");
                    let P = this.svgFactory.createElement(this.svgElementName);
                    return (
                      P.setAttribute("points", E),
                      P.setAttribute("stroke-width", o.borderStyle.width || 1),
                      P.setAttribute("stroke", "transparent"),
                      P.setAttribute("fill", "transparent"),
                      S.append(P),
                      this.container.append(S),
                      this._createPopup(P, o),
                      this.container
                    );
                  }
                };
                let PolygonAnnotationElement = class PolygonAnnotationElement extends PolylineAnnotationElement {
                  constructor(o) {
                    super(o),
                      (this.containerClassName = "polygonAnnotation"),
                      (this.svgElementName = "svg:polygon");
                  }
                };
                let CaretAnnotationElement = class CaretAnnotationElement extends AnnotationElement {
                  constructor(o) {
                    let l = !!(
                      o.data.hasPopup ||
                      o.data.titleObj?.str ||
                      o.data.contentsObj?.str ||
                      o.data.richText?.str
                    );
                    super(o, { isRenderable: l, ignoreBorder: !0 });
                  }
                  render() {
                    return (
                      (this.container.className = "caretAnnotation"),
                      this.data.hasPopup || this._createPopup(null, this.data),
                      this.container
                    );
                  }
                };
                let InkAnnotationElement = class InkAnnotationElement extends AnnotationElement {
                  constructor(o) {
                    let l = !!(
                      o.data.hasPopup ||
                      o.data.titleObj?.str ||
                      o.data.contentsObj?.str ||
                      o.data.richText?.str
                    );
                    super(o, { isRenderable: l, ignoreBorder: !0 }),
                      (this.containerClassName = "inkAnnotation"),
                      (this.svgElementName = "svg:polyline");
                  }
                  render() {
                    this.container.className = this.containerClassName;
                    let o = this.data,
                      { width: l, height: _ } = getRectDims(o.rect),
                      S = this.svgFactory.create(l, _, !0);
                    for (let l of o.inkLists) {
                      let _ = [];
                      for (let S of l) {
                        let l = S.x - o.rect[0],
                          E = o.rect[3] - S.y;
                        _.push(`${l},${E}`);
                      }
                      _ = _.join(" ");
                      let E = this.svgFactory.createElement(
                        this.svgElementName
                      );
                      E.setAttribute("points", _),
                        E.setAttribute(
                          "stroke-width",
                          o.borderStyle.width || 1
                        ),
                        E.setAttribute("stroke", "transparent"),
                        E.setAttribute("fill", "transparent"),
                        this._createPopup(E, o),
                        S.append(E);
                    }
                    return this.container.append(S), this.container;
                  }
                };
                let HighlightAnnotationElement = class HighlightAnnotationElement extends AnnotationElement {
                  constructor(o) {
                    let l = !!(
                      o.data.hasPopup ||
                      o.data.titleObj?.str ||
                      o.data.contentsObj?.str ||
                      o.data.richText?.str
                    );
                    super(o, {
                      isRenderable: l,
                      ignoreBorder: !0,
                      createQuadrilaterals: !0,
                    });
                  }
                  render() {
                    return (this.data.hasPopup ||
                      this._createPopup(null, this.data),
                    this.quadrilaterals)
                      ? this._renderQuadrilaterals("highlightAnnotation")
                      : ((this.container.className = "highlightAnnotation"),
                        this.container);
                  }
                };
                let UnderlineAnnotationElement = class UnderlineAnnotationElement extends AnnotationElement {
                  constructor(o) {
                    let l = !!(
                      o.data.hasPopup ||
                      o.data.titleObj?.str ||
                      o.data.contentsObj?.str ||
                      o.data.richText?.str
                    );
                    super(o, {
                      isRenderable: l,
                      ignoreBorder: !0,
                      createQuadrilaterals: !0,
                    });
                  }
                  render() {
                    return (this.data.hasPopup ||
                      this._createPopup(null, this.data),
                    this.quadrilaterals)
                      ? this._renderQuadrilaterals("underlineAnnotation")
                      : ((this.container.className = "underlineAnnotation"),
                        this.container);
                  }
                };
                let SquigglyAnnotationElement = class SquigglyAnnotationElement extends AnnotationElement {
                  constructor(o) {
                    let l = !!(
                      o.data.hasPopup ||
                      o.data.titleObj?.str ||
                      o.data.contentsObj?.str ||
                      o.data.richText?.str
                    );
                    super(o, {
                      isRenderable: l,
                      ignoreBorder: !0,
                      createQuadrilaterals: !0,
                    });
                  }
                  render() {
                    return (this.data.hasPopup ||
                      this._createPopup(null, this.data),
                    this.quadrilaterals)
                      ? this._renderQuadrilaterals("squigglyAnnotation")
                      : ((this.container.className = "squigglyAnnotation"),
                        this.container);
                  }
                };
                let StrikeOutAnnotationElement = class StrikeOutAnnotationElement extends AnnotationElement {
                  constructor(o) {
                    let l = !!(
                      o.data.hasPopup ||
                      o.data.titleObj?.str ||
                      o.data.contentsObj?.str ||
                      o.data.richText?.str
                    );
                    super(o, {
                      isRenderable: l,
                      ignoreBorder: !0,
                      createQuadrilaterals: !0,
                    });
                  }
                  render() {
                    return (this.data.hasPopup ||
                      this._createPopup(null, this.data),
                    this.quadrilaterals)
                      ? this._renderQuadrilaterals("strikeoutAnnotation")
                      : ((this.container.className = "strikeoutAnnotation"),
                        this.container);
                  }
                };
                let StampAnnotationElement = class StampAnnotationElement extends AnnotationElement {
                  constructor(o) {
                    let l = !!(
                      o.data.hasPopup ||
                      o.data.titleObj?.str ||
                      o.data.contentsObj?.str ||
                      o.data.richText?.str
                    );
                    super(o, { isRenderable: l, ignoreBorder: !0 });
                  }
                  render() {
                    return (
                      (this.container.className = "stampAnnotation"),
                      this.data.hasPopup || this._createPopup(null, this.data),
                      this.container
                    );
                  }
                };
                let FileAttachmentAnnotationElement = class FileAttachmentAnnotationElement extends AnnotationElement {
                  constructor(o) {
                    super(o, { isRenderable: !0 });
                    let { filename: l, content: _ } = this.data.file;
                    (this.filename = (0, E.getFilenameFromUrl)(l, !0)),
                      (this.content = _),
                      this.linkService.eventBus?.dispatch(
                        "fileattachmentannotation",
                        { source: this, filename: l, content: _ }
                      );
                  }
                  render() {
                    let o;
                    return (
                      (this.container.className = "fileAttachmentAnnotation"),
                      this.data.hasAppearance
                        ? (o = document.createElement("div"))
                        : ((o = document.createElement("img")).src = `${
                            this.imageResourcesPath
                          }annotation-${
                            /paperclip/i.test(this.data.name)
                              ? "paperclip"
                              : "pushpin"
                          }.svg`),
                      (o.className = "popupTriggerArea"),
                      o.addEventListener("dblclick", this._download.bind(this)),
                      !this.data.hasPopup &&
                        (this.data.titleObj?.str ||
                          this.data.contentsObj?.str ||
                          this.data.richText) &&
                        this._createPopup(o, this.data),
                      this.container.append(o),
                      this.container
                    );
                  }
                  _download() {
                    this.downloadManager?.openOrDownloadData(
                      this.container,
                      this.content,
                      this.filename
                    );
                  }
                };
                let AnnotationLayer = class AnnotationLayer {
                  static #eA(o, l, _, S) {
                    let P = o.firstChild || o;
                    (P.id = `${E.AnnotationPrefix}${l}`),
                      _.append(o),
                      S?.moveElementInDOM(_, o, P, !1);
                  }
                  static render(o) {
                    let {
                      annotations: l,
                      div: _,
                      viewport: T,
                      accessibilityManager: M,
                    } = o;
                    (0, E.setLayerDimensions)(_, T);
                    let F = {
                        data: null,
                        layer: _,
                        page: o.page,
                        viewport: T,
                        linkService: o.linkService,
                        downloadManager: o.downloadManager,
                        imageResourcesPath: o.imageResourcesPath || "",
                        renderForms: !1 !== o.renderForms,
                        svgFactory: new E.DOMSVGFactory(),
                        annotationStorage:
                          o.annotationStorage || new P.AnnotationStorage(),
                        enableScripting: !0 === o.enableScripting,
                        hasJSActions: o.hasJSActions,
                        fieldObjects: o.fieldObjects,
                      },
                      D = 0;
                    for (let o of l) {
                      if (o.annotationType !== S.AnnotationType.POPUP) {
                        let { width: l, height: _ } = getRectDims(o.rect);
                        if (l <= 0 || _ <= 0) continue;
                      }
                      F.data = o;
                      let l = AnnotationElementFactory.create(F);
                      if (!l.isRenderable) continue;
                      let E = l.render();
                      if (
                        (o.hidden && (E.style.visibility = "hidden"),
                        Array.isArray(E))
                      )
                        for (let l of E)
                          (l.style.zIndex = D++),
                            AnnotationLayer.#eA(l, o.id, _, M);
                      else
                        (E.style.zIndex = D++),
                          l instanceof PopupAnnotationElement
                            ? _.prepend(E)
                            : AnnotationLayer.#eA(E, o.id, _, M);
                    }
                    this.#eb(_, o.annotationCanvasMap);
                  }
                  static update(o) {
                    let { annotationCanvasMap: l, div: _, viewport: S } = o;
                    (0, E.setLayerDimensions)(_, { rotation: S.rotation }),
                      this.#eb(_, l),
                      (_.hidden = !1);
                  }
                  static #eb(o, l) {
                    if (l) {
                      for (let [_, S] of l) {
                        let l = o.querySelector(`[data-annotation-id="${_}"]`);
                        if (!l) continue;
                        let { firstChild: E } = l;
                        E
                          ? "CANVAS" === E.nodeName
                            ? E.replaceWith(S)
                            : E.before(S)
                          : l.append(S);
                      }
                      l.clear();
                    }
                  }
                };
                l.AnnotationLayer = AnnotationLayer;
              },
              (o, l) => {
                function makeColorComp(o) {
                  return Math.floor(255 * Math.max(0, Math.min(1, o)))
                    .toString(16)
                    .padStart(2, "0");
                }
                Object.defineProperty(l, "__esModule", { value: !0 }),
                  (l.ColorConverters = void 0);
                let ColorConverters = class ColorConverters {
                  static CMYK_G([o, l, _, S]) {
                    return [
                      "G",
                      1 - Math.min(1, 0.3 * o + 0.59 * _ + 0.11 * l + S),
                    ];
                  }
                  static G_CMYK([o]) {
                    return ["CMYK", 0, 0, 0, 1 - o];
                  }
                  static G_RGB([o]) {
                    return ["RGB", o, o, o];
                  }
                  static G_HTML([o]) {
                    let l = makeColorComp(o);
                    return `#${l}${l}${l}`;
                  }
                  static RGB_G([o, l, _]) {
                    return ["G", 0.3 * o + 0.59 * l + 0.11 * _];
                  }
                  static RGB_HTML([o, l, _]) {
                    let S = makeColorComp(o),
                      E = makeColorComp(l),
                      P = makeColorComp(_);
                    return `#${S}${E}${P}`;
                  }
                  static T_HTML() {
                    return "#00000000";
                  }
                  static CMYK_RGB([o, l, _, S]) {
                    return [
                      "RGB",
                      1 - Math.min(1, o + S),
                      1 - Math.min(1, _ + S),
                      1 - Math.min(1, l + S),
                    ];
                  }
                  static CMYK_HTML(o) {
                    let l = this.CMYK_RGB(o).slice(1);
                    return this.RGB_HTML(l);
                  }
                  static RGB_CMYK([o, l, _]) {
                    let S = 1 - o,
                      E = 1 - l,
                      P = 1 - _,
                      T = Math.min(S, E, P);
                    return ["CMYK", S, E, P, T];
                  }
                };
                l.ColorConverters = ColorConverters;
              },
              (o, l, _) => {
                Object.defineProperty(l, "__esModule", { value: !0 }),
                  (l.XfaLayer = void 0);
                var S = _(19);
                let XfaLayer = class XfaLayer {
                  static setupStorage(o, l, _, S, E) {
                    let P = S.getValue(l, { value: null });
                    switch (_.name) {
                      case "textarea":
                        if (
                          (null !== P.value && (o.textContent = P.value),
                          "print" === E)
                        )
                          break;
                        o.addEventListener("input", (o) => {
                          S.setValue(l, { value: o.target.value });
                        });
                        break;
                      case "input":
                        if (
                          "radio" === _.attributes.type ||
                          "checkbox" === _.attributes.type
                        ) {
                          if (
                            (P.value === _.attributes.xfaOn
                              ? o.setAttribute("checked", !0)
                              : P.value === _.attributes.xfaOff &&
                                o.removeAttribute("checked"),
                            "print" === E)
                          )
                            break;
                          o.addEventListener("change", (o) => {
                            S.setValue(l, {
                              value: o.target.checked
                                ? o.target.getAttribute("xfaOn")
                                : o.target.getAttribute("xfaOff"),
                            });
                          });
                        } else {
                          if (
                            (null !== P.value &&
                              o.setAttribute("value", P.value),
                            "print" === E)
                          )
                            break;
                          o.addEventListener("input", (o) => {
                            S.setValue(l, { value: o.target.value });
                          });
                        }
                        break;
                      case "select":
                        if (null !== P.value)
                          for (let o of _.children)
                            o.attributes.value === P.value &&
                              (o.attributes.selected = !0);
                        o.addEventListener("input", (o) => {
                          let _ = o.target.options,
                            E =
                              -1 === _.selectedIndex
                                ? ""
                                : _[_.selectedIndex].value;
                          S.setValue(l, { value: E });
                        });
                    }
                  }
                  static setAttributes({
                    html: o,
                    element: l,
                    storage: _ = null,
                    intent: S,
                    linkService: E,
                  }) {
                    let { attributes: P } = l,
                      T = o instanceof HTMLAnchorElement;
                    for (let [l, _] of ("radio" === P.type &&
                      (P.name = `${P.name}-${S}`),
                    Object.entries(P)))
                      if (null != _)
                        switch (l) {
                          case "class":
                            _.length && o.setAttribute(l, _.join(" "));
                            break;
                          case "dataId":
                            break;
                          case "id":
                            o.setAttribute("data-element-id", _);
                            break;
                          case "style":
                            Object.assign(o.style, _);
                            break;
                          case "textContent":
                            o.textContent = _;
                            break;
                          default:
                            (T && ("href" === l || "newWindow" === l)) ||
                              o.setAttribute(l, _);
                        }
                    T && E.addLinkAttributes(o, P.href, P.newWindow),
                      _ && P.dataId && this.setupStorage(o, P.dataId, l, _);
                  }
                  static render(o) {
                    let l = o.annotationStorage,
                      _ = o.linkService,
                      E = o.xfaHtml,
                      P = o.intent || "display",
                      T = document.createElement(E.name);
                    E.attributes &&
                      this.setAttributes({
                        html: T,
                        element: E,
                        intent: P,
                        linkService: _,
                      });
                    let M = [[E, -1, T]],
                      F = o.div;
                    if ((F.append(T), o.viewport)) {
                      let l = `matrix(${o.viewport.transform.join(",")})`;
                      F.style.transform = l;
                    }
                    "richText" !== P &&
                      F.setAttribute("class", "xfaLayer xfaFont");
                    let D = [];
                    for (; M.length > 0; ) {
                      let o;
                      let [E, T, F] = M.at(-1);
                      if (T + 1 === E.children.length) {
                        M.pop();
                        continue;
                      }
                      let I = E.children[++M.at(-1)[1]];
                      if (null === I) continue;
                      let { name: O } = I;
                      if ("#text" === O) {
                        let o = document.createTextNode(I.value);
                        D.push(o), F.append(o);
                        continue;
                      }
                      if (
                        ((o = I?.attributes?.xmlns
                          ? document.createElementNS(I.attributes.xmlns, O)
                          : document.createElement(O)),
                        F.append(o),
                        I.attributes &&
                          this.setAttributes({
                            html: o,
                            element: I,
                            storage: l,
                            intent: P,
                            linkService: _,
                          }),
                        I.children && I.children.length > 0)
                      )
                        M.push([I, -1, o]);
                      else if (I.value) {
                        let l = document.createTextNode(I.value);
                        S.XfaText.shouldBuildText(O) && D.push(l), o.append(l);
                      }
                    }
                    for (let o of F.querySelectorAll(
                      ".xfaNonInteractive input, .xfaNonInteractive textarea"
                    ))
                      o.setAttribute("readOnly", !0);
                    return { textDivs: D };
                  }
                  static update(o) {
                    let l = `matrix(${o.viewport.transform.join(",")})`;
                    (o.div.style.transform = l), (o.div.hidden = !1);
                  }
                };
                l.XfaLayer = XfaLayer;
              },
              (o, l, _) => {
                Object.defineProperty(l, "__esModule", { value: !0 }),
                  (l.SVGGraphics = void 0);
                var S = _(6),
                  E = _(1),
                  P = _(10);
                let T = class {
                  constructor() {
                    (0, E.unreachable)("Not implemented: SVGGraphics");
                  }
                };
                l.SVGGraphics = T;
                {
                  let o = {
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fillColor: "#000000",
                    },
                    _ = "http://www.w3.org/XML/1998/namespace",
                    M = "http://www.w3.org/1999/xlink",
                    F = ["butt", "round", "square"],
                    D = ["miter", "round", "bevel"],
                    createObjectURL = function (o, l = "", _ = !1) {
                      if (
                        URL.createObjectURL &&
                        "undefined" != typeof Blob &&
                        !_
                      )
                        return URL.createObjectURL(new Blob([o], { type: l }));
                      let S =
                          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                        E = `data:${l};base64,`;
                      for (let l = 0, _ = o.length; l < _; l += 3) {
                        let P = 255 & o[l],
                          T = 255 & o[l + 1],
                          M = 255 & o[l + 2],
                          F = P >> 2,
                          D = ((3 & P) << 4) | (T >> 4),
                          I = l + 1 < _ ? ((15 & T) << 2) | (M >> 6) : 64,
                          O = l + 2 < _ ? 63 & M : 64;
                        E += S[F] + S[D] + S[I] + S[O];
                      }
                      return E;
                    },
                    I = (function () {
                      let o = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]),
                        l = 12,
                        _ = new Int32Array(256);
                      for (let o = 0; o < 256; o++) {
                        let l = o;
                        for (let o = 0; o < 8; o++)
                          l =
                            1 & l
                              ? 3988292384 ^ ((l >> 1) & 2147483647)
                              : (l >> 1) & 2147483647;
                        _[o] = l;
                      }
                      function crc32(o, l, S) {
                        let E = -1;
                        for (let P = l; P < S; P++) {
                          let l = (E ^ o[P]) & 255,
                            S = _[l];
                          E = (E >>> 8) ^ S;
                        }
                        return -1 ^ E;
                      }
                      function writePngChunk(o, l, _, S) {
                        let E = S,
                          P = l.length;
                        (_[E] = (P >> 24) & 255),
                          (_[E + 1] = (P >> 16) & 255),
                          (_[E + 2] = (P >> 8) & 255),
                          (_[E + 3] = 255 & P),
                          (_[(E += 4)] = 255 & o.charCodeAt(0)),
                          (_[E + 1] = 255 & o.charCodeAt(1)),
                          (_[E + 2] = 255 & o.charCodeAt(2)),
                          (_[E + 3] = 255 & o.charCodeAt(3)),
                          (E += 4),
                          _.set(l, E),
                          (E += l.length);
                        let T = crc32(_, S + 4, E);
                        (_[E] = (T >> 24) & 255),
                          (_[E + 1] = (T >> 16) & 255),
                          (_[E + 2] = (T >> 8) & 255),
                          (_[E + 3] = 255 & T);
                      }
                      function adler32(o, l, _) {
                        let S = 1,
                          E = 0;
                        for (let P = l; P < _; ++P)
                          E = (E + (S = (S + (255 & o[P])) % 65521)) % 65521;
                        return (E << 16) | S;
                      }
                      function deflateSync(o) {
                        if (!P.isNodeJS) return deflateSyncUncompressed(o);
                        try {
                          let l;
                          l =
                            parseInt(process.versions.node) >= 8
                              ? o
                              : Buffer.from(o);
                          let _ = __webpack_require__(82605).deflateSync(l, {
                            level: 9,
                          });
                          return _ instanceof Uint8Array
                            ? _
                            : new Uint8Array(_);
                        } catch (o) {
                          (0, E.warn)(
                            "Not compressing PNG because zlib.deflateSync is unavailable: " +
                              o
                          );
                        }
                        return deflateSyncUncompressed(o);
                      }
                      function deflateSyncUncompressed(o) {
                        let l = o.length,
                          _ = 65535,
                          S = Math.ceil(l / _),
                          E = new Uint8Array(2 + l + 5 * S + 4),
                          P = 0;
                        (E[P++] = 120), (E[P++] = 156);
                        let T = 0;
                        for (; l > _; )
                          (E[P++] = 0),
                            (E[P++] = 255),
                            (E[P++] = 255),
                            (E[P++] = 0),
                            (E[P++] = 0),
                            E.set(o.subarray(T, T + _), P),
                            (P += _),
                            (T += _),
                            (l -= _);
                        (E[P++] = 1),
                          (E[P++] = 255 & l),
                          (E[P++] = (l >> 8) & 255),
                          (E[P++] = 255 & ~l),
                          (E[P++] = ((65535 & ~l) >> 8) & 255),
                          E.set(o.subarray(T), P),
                          (P += o.length - T);
                        let M = adler32(o, 0, o.length);
                        return (
                          (E[P++] = (M >> 24) & 255),
                          (E[P++] = (M >> 16) & 255),
                          (E[P++] = (M >> 8) & 255),
                          (E[P++] = 255 & M),
                          E
                        );
                      }
                      function encode(_, S, P, T) {
                        let M, F, D;
                        let I = _.width,
                          O = _.height,
                          L = _.data;
                        switch (S) {
                          case E.ImageKind.GRAYSCALE_1BPP:
                            (F = 0), (M = 1), (D = (I + 7) >> 3);
                            break;
                          case E.ImageKind.RGB_24BPP:
                            (F = 2), (M = 8), (D = 3 * I);
                            break;
                          case E.ImageKind.RGBA_32BPP:
                            (F = 6), (M = 8), (D = 4 * I);
                            break;
                          default:
                            throw Error("invalid format");
                        }
                        let N = new Uint8Array((1 + D) * O),
                          U = 0,
                          W = 0;
                        for (let o = 0; o < O; ++o)
                          (N[U++] = 0),
                            N.set(L.subarray(W, W + D), U),
                            (W += D),
                            (U += D);
                        if (S === E.ImageKind.GRAYSCALE_1BPP && T) {
                          U = 0;
                          for (let o = 0; o < O; o++) {
                            U++;
                            for (let o = 0; o < D; o++) N[U++] ^= 255;
                          }
                        }
                        let H = new Uint8Array([
                            (I >> 24) & 255,
                            (I >> 16) & 255,
                            (I >> 8) & 255,
                            255 & I,
                            (O >> 24) & 255,
                            (O >> 16) & 255,
                            (O >> 8) & 255,
                            255 & O,
                            M,
                            F,
                            0,
                            0,
                            0,
                          ]),
                          V = deflateSync(N),
                          z = o.length + 3 * l + H.length + V.length,
                          $ = new Uint8Array(z),
                          K = 0;
                        return (
                          $.set(o, K),
                          writePngChunk("IHDR", H, $, (K += o.length)),
                          writePngChunk("IDATA", V, $, (K += l + H.length)),
                          (K += l + V.length),
                          writePngChunk("IEND", new Uint8Array(0), $, K),
                          createObjectURL($, "image/png", P)
                        );
                      }
                      return function (o, l, _) {
                        let S =
                          void 0 === o.kind
                            ? E.ImageKind.GRAYSCALE_1BPP
                            : o.kind;
                        return encode(o, S, l, _);
                      };
                    })();
                  let SVGExtraState = class SVGExtraState {
                    constructor() {
                      (this.fontSizeScale = 1),
                        (this.fontWeight = o.fontWeight),
                        (this.fontSize = 0),
                        (this.textMatrix = E.IDENTITY_MATRIX),
                        (this.fontMatrix = E.FONT_IDENTITY_MATRIX),
                        (this.leading = 0),
                        (this.textRenderingMode = E.TextRenderingMode.FILL),
                        (this.textMatrixScale = 1),
                        (this.x = 0),
                        (this.y = 0),
                        (this.lineX = 0),
                        (this.lineY = 0),
                        (this.charSpacing = 0),
                        (this.wordSpacing = 0),
                        (this.textHScale = 1),
                        (this.textRise = 0),
                        (this.fillColor = o.fillColor),
                        (this.strokeColor = "#000000"),
                        (this.fillAlpha = 1),
                        (this.strokeAlpha = 1),
                        (this.lineWidth = 1),
                        (this.lineJoin = ""),
                        (this.lineCap = ""),
                        (this.miterLimit = 0),
                        (this.dashArray = []),
                        (this.dashPhase = 0),
                        (this.dependencies = []),
                        (this.activeClipUrl = null),
                        (this.clipGroup = null),
                        (this.maskId = "");
                    }
                    clone() {
                      return Object.create(this);
                    }
                    setCurrentPoint(o, l) {
                      (this.x = o), (this.y = l);
                    }
                  };
                  function opListToTree(o) {
                    let l = [],
                      _ = [];
                    for (let S of o) {
                      if ("save" === S.fn) {
                        l.push({ fnId: 92, fn: "group", items: [] }),
                          _.push(l),
                          (l = l.at(-1).items);
                        continue;
                      }
                      "restore" === S.fn ? (l = _.pop()) : l.push(S);
                    }
                    return l;
                  }
                  function pf(o) {
                    if (Number.isInteger(o)) return o.toString();
                    let l = o.toFixed(10),
                      _ = l.length - 1;
                    if ("0" !== l[_]) return l;
                    do _--;
                    while ("0" === l[_]);
                    return l.substring(0, "." === l[_] ? _ : _ + 1);
                  }
                  function pm(o) {
                    if (0 === o[4] && 0 === o[5]) {
                      if (0 === o[1] && 0 === o[2])
                        return 1 === o[0] && 1 === o[3]
                          ? ""
                          : `scale(${pf(o[0])} ${pf(o[3])})`;
                      if (o[0] === o[3] && o[1] === -o[2]) {
                        let l = (180 * Math.acos(o[0])) / Math.PI;
                        return `rotate(${pf(l)})`;
                      }
                    } else if (
                      1 === o[0] &&
                      0 === o[1] &&
                      0 === o[2] &&
                      1 === o[3]
                    )
                      return `translate(${pf(o[4])} ${pf(o[5])})`;
                    return `matrix(${pf(o[0])} ${pf(o[1])} ${pf(o[2])} ${pf(
                      o[3]
                    )} ${pf(o[4])} ${pf(o[5])})`;
                  }
                  let O = 0,
                    L = 0,
                    N = 0;
                  l.SVGGraphics = T = class {
                    constructor(o, l, _ = !1) {
                      for (let P in ((0, S.deprecated)(
                        "The SVG back-end is no longer maintained and *may* be removed in the future."
                      ),
                      (this.svgFactory = new S.DOMSVGFactory()),
                      (this.current = new SVGExtraState()),
                      (this.transformMatrix = E.IDENTITY_MATRIX),
                      (this.transformStack = []),
                      (this.extraStack = []),
                      (this.commonObjs = o),
                      (this.objs = l),
                      (this.pendingClip = null),
                      (this.pendingEOFill = !1),
                      (this.embedFonts = !1),
                      (this.embeddedFonts = Object.create(null)),
                      (this.cssStyle = null),
                      (this.forceDataSchema = !!_),
                      (this._operatorIdMapping = []),
                      E.OPS))
                        this._operatorIdMapping[E.OPS[P]] = P;
                    }
                    getObject(o, l = null) {
                      return "string" == typeof o
                        ? o.startsWith("g_")
                          ? this.commonObjs.get(o)
                          : this.objs.get(o)
                        : l;
                    }
                    save() {
                      this.transformStack.push(this.transformMatrix);
                      let o = this.current;
                      this.extraStack.push(o), (this.current = o.clone());
                    }
                    restore() {
                      (this.transformMatrix = this.transformStack.pop()),
                        (this.current = this.extraStack.pop()),
                        (this.pendingClip = null),
                        (this.tgrp = null);
                    }
                    group(o) {
                      this.save(), this.executeOpTree(o), this.restore();
                    }
                    loadDependencies(o) {
                      let l = o.fnArray,
                        _ = o.argsArray;
                      for (let o = 0, S = l.length; o < S; o++)
                        if (l[o] === E.OPS.dependency)
                          for (let l of _[o]) {
                            let o = l.startsWith("g_")
                                ? this.commonObjs
                                : this.objs,
                              _ = new Promise((_) => {
                                o.get(l, _);
                              });
                            this.current.dependencies.push(_);
                          }
                      return Promise.all(this.current.dependencies);
                    }
                    transform(o, l, _, S, P, T) {
                      let M = [o, l, _, S, P, T];
                      (this.transformMatrix = E.Util.transform(
                        this.transformMatrix,
                        M
                      )),
                        (this.tgrp = null);
                    }
                    getSVG(o, l) {
                      this.viewport = l;
                      let _ = this._initialize(l);
                      return this.loadDependencies(o).then(
                        () => (
                          (this.transformMatrix = E.IDENTITY_MATRIX),
                          this.executeOpTree(this.convertOpList(o)),
                          _
                        )
                      );
                    }
                    convertOpList(o) {
                      let l = this._operatorIdMapping,
                        _ = o.argsArray,
                        S = o.fnArray,
                        E = [];
                      for (let o = 0, P = S.length; o < P; o++) {
                        let P = S[o];
                        E.push({ fnId: P, fn: l[P], args: _[o] });
                      }
                      return opListToTree(E);
                    }
                    executeOpTree(o) {
                      for (let l of o) {
                        let o = l.fn,
                          _ = l.fnId,
                          S = l.args;
                        switch (0 | _) {
                          case E.OPS.beginText:
                            this.beginText();
                            break;
                          case E.OPS.dependency:
                            break;
                          case E.OPS.setLeading:
                            this.setLeading(S);
                            break;
                          case E.OPS.setLeadingMoveText:
                            this.setLeadingMoveText(S[0], S[1]);
                            break;
                          case E.OPS.setFont:
                            this.setFont(S);
                            break;
                          case E.OPS.showText:
                          case E.OPS.showSpacedText:
                            this.showText(S[0]);
                            break;
                          case E.OPS.endText:
                            this.endText();
                            break;
                          case E.OPS.moveText:
                            this.moveText(S[0], S[1]);
                            break;
                          case E.OPS.setCharSpacing:
                            this.setCharSpacing(S[0]);
                            break;
                          case E.OPS.setWordSpacing:
                            this.setWordSpacing(S[0]);
                            break;
                          case E.OPS.setHScale:
                            this.setHScale(S[0]);
                            break;
                          case E.OPS.setTextMatrix:
                            this.setTextMatrix(
                              S[0],
                              S[1],
                              S[2],
                              S[3],
                              S[4],
                              S[5]
                            );
                            break;
                          case E.OPS.setTextRise:
                            this.setTextRise(S[0]);
                            break;
                          case E.OPS.setTextRenderingMode:
                            this.setTextRenderingMode(S[0]);
                            break;
                          case E.OPS.setLineWidth:
                            this.setLineWidth(S[0]);
                            break;
                          case E.OPS.setLineJoin:
                            this.setLineJoin(S[0]);
                            break;
                          case E.OPS.setLineCap:
                            this.setLineCap(S[0]);
                            break;
                          case E.OPS.setMiterLimit:
                            this.setMiterLimit(S[0]);
                            break;
                          case E.OPS.setFillRGBColor:
                            this.setFillRGBColor(S[0], S[1], S[2]);
                            break;
                          case E.OPS.setStrokeRGBColor:
                            this.setStrokeRGBColor(S[0], S[1], S[2]);
                            break;
                          case E.OPS.setStrokeColorN:
                            this.setStrokeColorN(S);
                            break;
                          case E.OPS.setFillColorN:
                            this.setFillColorN(S);
                            break;
                          case E.OPS.shadingFill:
                            this.shadingFill(S[0]);
                            break;
                          case E.OPS.setDash:
                            this.setDash(S[0], S[1]);
                            break;
                          case E.OPS.setRenderingIntent:
                            this.setRenderingIntent(S[0]);
                            break;
                          case E.OPS.setFlatness:
                            this.setFlatness(S[0]);
                            break;
                          case E.OPS.setGState:
                            this.setGState(S[0]);
                            break;
                          case E.OPS.fill:
                            this.fill();
                            break;
                          case E.OPS.eoFill:
                            this.eoFill();
                            break;
                          case E.OPS.stroke:
                            this.stroke();
                            break;
                          case E.OPS.fillStroke:
                            this.fillStroke();
                            break;
                          case E.OPS.eoFillStroke:
                            this.eoFillStroke();
                            break;
                          case E.OPS.clip:
                            this.clip("nonzero");
                            break;
                          case E.OPS.eoClip:
                            this.clip("evenodd");
                            break;
                          case E.OPS.paintSolidColorImageMask:
                            this.paintSolidColorImageMask();
                            break;
                          case E.OPS.paintImageXObject:
                            this.paintImageXObject(S[0]);
                            break;
                          case E.OPS.paintInlineImageXObject:
                            this.paintInlineImageXObject(S[0]);
                            break;
                          case E.OPS.paintImageMaskXObject:
                            this.paintImageMaskXObject(S[0]);
                            break;
                          case E.OPS.paintFormXObjectBegin:
                            this.paintFormXObjectBegin(S[0], S[1]);
                            break;
                          case E.OPS.paintFormXObjectEnd:
                            this.paintFormXObjectEnd();
                            break;
                          case E.OPS.closePath:
                            this.closePath();
                            break;
                          case E.OPS.closeStroke:
                            this.closeStroke();
                            break;
                          case E.OPS.closeFillStroke:
                            this.closeFillStroke();
                            break;
                          case E.OPS.closeEOFillStroke:
                            this.closeEOFillStroke();
                            break;
                          case E.OPS.nextLine:
                            this.nextLine();
                            break;
                          case E.OPS.transform:
                            this.transform(S[0], S[1], S[2], S[3], S[4], S[5]);
                            break;
                          case E.OPS.constructPath:
                            this.constructPath(S[0], S[1]);
                            break;
                          case E.OPS.endPath:
                            this.endPath();
                            break;
                          case 92:
                            this.group(l.items);
                            break;
                          default:
                            (0, E.warn)(`Unimplemented operator ${o}`);
                        }
                      }
                    }
                    setWordSpacing(o) {
                      this.current.wordSpacing = o;
                    }
                    setCharSpacing(o) {
                      this.current.charSpacing = o;
                    }
                    nextLine() {
                      this.moveText(0, this.current.leading);
                    }
                    setTextMatrix(o, l, _, S, E, P) {
                      let T = this.current;
                      (T.textMatrix = T.lineMatrix = [o, l, _, S, E, P]),
                        (T.textMatrixScale = Math.hypot(o, l)),
                        (T.x = T.lineX = 0),
                        (T.y = T.lineY = 0),
                        (T.xcoords = []),
                        (T.ycoords = []),
                        (T.tspan = this.svgFactory.createElement("svg:tspan")),
                        T.tspan.setAttributeNS(
                          null,
                          "font-family",
                          T.fontFamily
                        ),
                        T.tspan.setAttributeNS(
                          null,
                          "font-size",
                          `${pf(T.fontSize)}px`
                        ),
                        T.tspan.setAttributeNS(null, "y", pf(-T.y)),
                        (T.txtElement =
                          this.svgFactory.createElement("svg:text")),
                        T.txtElement.append(T.tspan);
                    }
                    beginText() {
                      let o = this.current;
                      (o.x = o.lineX = 0),
                        (o.y = o.lineY = 0),
                        (o.textMatrix = E.IDENTITY_MATRIX),
                        (o.lineMatrix = E.IDENTITY_MATRIX),
                        (o.textMatrixScale = 1),
                        (o.tspan = this.svgFactory.createElement("svg:tspan")),
                        (o.txtElement =
                          this.svgFactory.createElement("svg:text")),
                        (o.txtgrp = this.svgFactory.createElement("svg:g")),
                        (o.xcoords = []),
                        (o.ycoords = []);
                    }
                    moveText(o, l) {
                      let _ = this.current;
                      (_.x = _.lineX += o),
                        (_.y = _.lineY += l),
                        (_.xcoords = []),
                        (_.ycoords = []),
                        (_.tspan = this.svgFactory.createElement("svg:tspan")),
                        _.tspan.setAttributeNS(
                          null,
                          "font-family",
                          _.fontFamily
                        ),
                        _.tspan.setAttributeNS(
                          null,
                          "font-size",
                          `${pf(_.fontSize)}px`
                        ),
                        _.tspan.setAttributeNS(null, "y", pf(-_.y));
                    }
                    showText(l) {
                      let S = this.current,
                        P = S.font,
                        T = S.fontSize;
                      if (0 === T) return;
                      let M = S.fontSizeScale,
                        F = S.charSpacing,
                        D = S.wordSpacing,
                        I = S.fontDirection,
                        O = S.textHScale * I,
                        L = P.vertical,
                        N = L ? 1 : -1,
                        U = P.defaultVMetrics,
                        W = T * S.fontMatrix[0],
                        H = 0;
                      for (let o of l) {
                        let l, _, E;
                        if (null === o) {
                          H += I * D;
                          continue;
                        }
                        if ("number" == typeof o) {
                          H += (N * o * T) / 1e3;
                          continue;
                        }
                        let O = (o.isSpace ? D : 0) + F,
                          V = o.fontChar,
                          z = o.width;
                        if (L) {
                          let S;
                          let E = o.vmetric || U;
                          S = -(S = o.vmetric ? E[1] : 0.5 * z) * W;
                          let P = E[2] * W;
                          (z = E ? -E[0] : z), (l = S / M), (_ = (H + P) / M);
                        } else (l = H / M), (_ = 0);
                        (o.isInFont || P.missingFile) &&
                          (S.xcoords.push(S.x + l),
                          L && S.ycoords.push(-S.y + _),
                          (S.tspan.textContent += V)),
                          (H += E = L ? z * W - O * I : z * W + O * I);
                      }
                      S.tspan.setAttributeNS(
                        null,
                        "x",
                        S.xcoords.map(pf).join(" ")
                      ),
                        L
                          ? S.tspan.setAttributeNS(
                              null,
                              "y",
                              S.ycoords.map(pf).join(" ")
                            )
                          : S.tspan.setAttributeNS(null, "y", pf(-S.y)),
                        L ? (S.y -= H) : (S.x += H * O),
                        S.tspan.setAttributeNS(
                          null,
                          "font-family",
                          S.fontFamily
                        ),
                        S.tspan.setAttributeNS(
                          null,
                          "font-size",
                          `${pf(S.fontSize)}px`
                        ),
                        S.fontStyle !== o.fontStyle &&
                          S.tspan.setAttributeNS(
                            null,
                            "font-style",
                            S.fontStyle
                          ),
                        S.fontWeight !== o.fontWeight &&
                          S.tspan.setAttributeNS(
                            null,
                            "font-weight",
                            S.fontWeight
                          );
                      let V =
                        S.textRenderingMode &
                        E.TextRenderingMode.FILL_STROKE_MASK;
                      if (
                        (V === E.TextRenderingMode.FILL ||
                        V === E.TextRenderingMode.FILL_STROKE
                          ? (S.fillColor !== o.fillColor &&
                              S.tspan.setAttributeNS(null, "fill", S.fillColor),
                            S.fillAlpha < 1 &&
                              S.tspan.setAttributeNS(
                                null,
                                "fill-opacity",
                                S.fillAlpha
                              ))
                          : S.textRenderingMode ===
                            E.TextRenderingMode.ADD_TO_PATH
                          ? S.tspan.setAttributeNS(null, "fill", "transparent")
                          : S.tspan.setAttributeNS(null, "fill", "none"),
                        V === E.TextRenderingMode.STROKE ||
                          V === E.TextRenderingMode.FILL_STROKE)
                      ) {
                        let o = 1 / (S.textMatrixScale || 1);
                        this._setStrokeAttributes(S.tspan, o);
                      }
                      let z = S.textMatrix;
                      0 !== S.textRise &&
                        ((z = z.slice()), (z[5] += S.textRise)),
                        S.txtElement.setAttributeNS(
                          null,
                          "transform",
                          `${pm(z)} scale(${pf(O)}, -1)`
                        ),
                        S.txtElement.setAttributeNS(_, "xml:space", "preserve"),
                        S.txtElement.append(S.tspan),
                        S.txtgrp.append(S.txtElement),
                        this._ensureTransformGroup().append(S.txtElement);
                    }
                    setLeadingMoveText(o, l) {
                      this.setLeading(-l), this.moveText(o, l);
                    }
                    addFontStyle(o) {
                      if (!o.data)
                        throw Error(
                          'addFontStyle: No font data available, ensure that the "fontExtraProperties" API parameter is set.'
                        );
                      this.cssStyle ||
                        ((this.cssStyle =
                          this.svgFactory.createElement("svg:style")),
                        this.cssStyle.setAttributeNS(null, "type", "text/css"),
                        this.defs.append(this.cssStyle));
                      let l = createObjectURL(
                        o.data,
                        o.mimetype,
                        this.forceDataSchema
                      );
                      this.cssStyle.textContent += `@font-face { font-family: "${o.loadedName}"; src: url(${l}); }
`;
                    }
                    setFont(o) {
                      let l = this.current,
                        _ = this.commonObjs.get(o[0]),
                        S = o[1];
                      (l.font = _),
                        !this.embedFonts ||
                          _.missingFile ||
                          this.embeddedFonts[_.loadedName] ||
                          (this.addFontStyle(_),
                          (this.embeddedFonts[_.loadedName] = _)),
                        (l.fontMatrix = _.fontMatrix || E.FONT_IDENTITY_MATRIX);
                      let P = "normal";
                      _.black ? (P = "900") : _.bold && (P = "bold");
                      let T = _.italic ? "italic" : "normal";
                      S < 0
                        ? ((S = -S), (l.fontDirection = -1))
                        : (l.fontDirection = 1),
                        (l.fontSize = S),
                        (l.fontFamily = _.loadedName),
                        (l.fontWeight = P),
                        (l.fontStyle = T),
                        (l.tspan = this.svgFactory.createElement("svg:tspan")),
                        l.tspan.setAttributeNS(null, "y", pf(-l.y)),
                        (l.xcoords = []),
                        (l.ycoords = []);
                    }
                    endText() {
                      let o = this.current;
                      o.textRenderingMode &
                        E.TextRenderingMode.ADD_TO_PATH_FLAG &&
                        o.txtElement?.hasChildNodes() &&
                        ((o.element = o.txtElement),
                        this.clip("nonzero"),
                        this.endPath());
                    }
                    setLineWidth(o) {
                      o > 0 && (this.current.lineWidth = o);
                    }
                    setLineCap(o) {
                      this.current.lineCap = F[o];
                    }
                    setLineJoin(o) {
                      this.current.lineJoin = D[o];
                    }
                    setMiterLimit(o) {
                      this.current.miterLimit = o;
                    }
                    setStrokeAlpha(o) {
                      this.current.strokeAlpha = o;
                    }
                    setStrokeRGBColor(o, l, _) {
                      this.current.strokeColor = E.Util.makeHexColor(o, l, _);
                    }
                    setFillAlpha(o) {
                      this.current.fillAlpha = o;
                    }
                    setFillRGBColor(o, l, _) {
                      (this.current.fillColor = E.Util.makeHexColor(o, l, _)),
                        (this.current.tspan =
                          this.svgFactory.createElement("svg:tspan")),
                        (this.current.xcoords = []),
                        (this.current.ycoords = []);
                    }
                    setStrokeColorN(o) {
                      this.current.strokeColor = this._makeColorN_Pattern(o);
                    }
                    setFillColorN(o) {
                      this.current.fillColor = this._makeColorN_Pattern(o);
                    }
                    shadingFill(o) {
                      let l = this.viewport.width,
                        _ = this.viewport.height,
                        S = E.Util.inverseTransform(this.transformMatrix),
                        P = E.Util.applyTransform([0, 0], S),
                        T = E.Util.applyTransform([0, _], S),
                        M = E.Util.applyTransform([l, 0], S),
                        F = E.Util.applyTransform([l, _], S),
                        D = Math.min(P[0], T[0], M[0], F[0]),
                        I = Math.min(P[1], T[1], M[1], F[1]),
                        O = Math.max(P[0], T[0], M[0], F[0]),
                        L = Math.max(P[1], T[1], M[1], F[1]),
                        N = this.svgFactory.createElement("svg:rect");
                      N.setAttributeNS(null, "x", D),
                        N.setAttributeNS(null, "y", I),
                        N.setAttributeNS(null, "width", O - D),
                        N.setAttributeNS(null, "height", L - I),
                        N.setAttributeNS(
                          null,
                          "fill",
                          this._makeShadingPattern(o)
                        ),
                        this.current.fillAlpha < 1 &&
                          N.setAttributeNS(
                            null,
                            "fill-opacity",
                            this.current.fillAlpha
                          ),
                        this._ensureTransformGroup().append(N);
                    }
                    _makeColorN_Pattern(o) {
                      return "TilingPattern" === o[0]
                        ? this._makeTilingPattern(o)
                        : this._makeShadingPattern(o);
                    }
                    _makeTilingPattern(o) {
                      let l = o[1],
                        _ = o[2],
                        S = o[3] || E.IDENTITY_MATRIX,
                        [P, T, M, F] = o[4],
                        D = o[5],
                        I = o[6],
                        O = o[7],
                        L = `shading${N++}`,
                        [U, W, H, V] = E.Util.normalizeRect([
                          ...E.Util.applyTransform([P, T], S),
                          ...E.Util.applyTransform([M, F], S),
                        ]),
                        [z, $] = E.Util.singularValueDecompose2dScale(S),
                        K = D * z,
                        Y = I * $,
                        J = this.svgFactory.createElement("svg:pattern");
                      J.setAttributeNS(null, "id", L),
                        J.setAttributeNS(
                          null,
                          "patternUnits",
                          "userSpaceOnUse"
                        ),
                        J.setAttributeNS(null, "width", K),
                        J.setAttributeNS(null, "height", Y),
                        J.setAttributeNS(null, "x", `${U}`),
                        J.setAttributeNS(null, "y", `${W}`);
                      let Q = this.svg,
                        Z = this.transformMatrix,
                        tt = this.current.fillColor,
                        te = this.current.strokeColor,
                        ti = this.svgFactory.create(H - U, V - W);
                      if (
                        ((this.svg = ti), (this.transformMatrix = S), 2 === O)
                      ) {
                        let o = E.Util.makeHexColor(...l);
                        (this.current.fillColor = o),
                          (this.current.strokeColor = o);
                      }
                      return (
                        this.executeOpTree(this.convertOpList(_)),
                        (this.svg = Q),
                        (this.transformMatrix = Z),
                        (this.current.fillColor = tt),
                        (this.current.strokeColor = te),
                        J.append(ti.childNodes[0]),
                        this.defs.append(J),
                        `url(#${L})`
                      );
                    }
                    _makeShadingPattern(o) {
                      switch (
                        ("string" == typeof o && (o = this.objs.get(o)), o[0])
                      ) {
                        case "RadialAxial":
                          let l;
                          let _ = `shading${N++}`,
                            S = o[3];
                          switch (o[1]) {
                            case "axial":
                              let P = o[4],
                                T = o[5];
                              (l =
                                this.svgFactory.createElement(
                                  "svg:linearGradient"
                                )).setAttributeNS(null, "id", _),
                                l.setAttributeNS(
                                  null,
                                  "gradientUnits",
                                  "userSpaceOnUse"
                                ),
                                l.setAttributeNS(null, "x1", P[0]),
                                l.setAttributeNS(null, "y1", P[1]),
                                l.setAttributeNS(null, "x2", T[0]),
                                l.setAttributeNS(null, "y2", T[1]);
                              break;
                            case "radial":
                              let M = o[4],
                                F = o[5],
                                D = o[6],
                                I = o[7];
                              (l =
                                this.svgFactory.createElement(
                                  "svg:radialGradient"
                                )).setAttributeNS(null, "id", _),
                                l.setAttributeNS(
                                  null,
                                  "gradientUnits",
                                  "userSpaceOnUse"
                                ),
                                l.setAttributeNS(null, "cx", F[0]),
                                l.setAttributeNS(null, "cy", F[1]),
                                l.setAttributeNS(null, "r", I),
                                l.setAttributeNS(null, "fx", M[0]),
                                l.setAttributeNS(null, "fy", M[1]),
                                l.setAttributeNS(null, "fr", D);
                              break;
                            default:
                              throw Error(`Unknown RadialAxial type: ${o[1]}`);
                          }
                          for (let o of S) {
                            let _ = this.svgFactory.createElement("svg:stop");
                            _.setAttributeNS(null, "offset", o[0]),
                              _.setAttributeNS(null, "stop-color", o[1]),
                              l.append(_);
                          }
                          return this.defs.append(l), `url(#${_})`;
                        case "Mesh":
                          return (
                            (0, E.warn)("Unimplemented pattern Mesh"), null
                          );
                        case "Dummy":
                          return "hotpink";
                        default:
                          throw Error(`Unknown IR type: ${o[0]}`);
                      }
                    }
                    setDash(o, l) {
                      (this.current.dashArray = o),
                        (this.current.dashPhase = l);
                    }
                    constructPath(o, l) {
                      let _ = this.current,
                        S = _.x,
                        P = _.y,
                        T = [],
                        M = 0;
                      for (let _ of o)
                        switch (0 | _) {
                          case E.OPS.rectangle:
                            (S = l[M++]), (P = l[M++]);
                            let o = l[M++],
                              F = l[M++],
                              D = S + o,
                              I = P + F;
                            T.push(
                              "M",
                              pf(S),
                              pf(P),
                              "L",
                              pf(D),
                              pf(P),
                              "L",
                              pf(D),
                              pf(I),
                              "L",
                              pf(S),
                              pf(I),
                              "Z"
                            );
                            break;
                          case E.OPS.moveTo:
                            (S = l[M++]),
                              (P = l[M++]),
                              T.push("M", pf(S), pf(P));
                            break;
                          case E.OPS.lineTo:
                            (S = l[M++]),
                              (P = l[M++]),
                              T.push("L", pf(S), pf(P));
                            break;
                          case E.OPS.curveTo:
                            (S = l[M + 4]),
                              (P = l[M + 5]),
                              T.push(
                                "C",
                                pf(l[M]),
                                pf(l[M + 1]),
                                pf(l[M + 2]),
                                pf(l[M + 3]),
                                pf(S),
                                pf(P)
                              ),
                              (M += 6);
                            break;
                          case E.OPS.curveTo2:
                            T.push(
                              "C",
                              pf(S),
                              pf(P),
                              pf(l[M]),
                              pf(l[M + 1]),
                              pf(l[M + 2]),
                              pf(l[M + 3])
                            ),
                              (S = l[M + 2]),
                              (P = l[M + 3]),
                              (M += 4);
                            break;
                          case E.OPS.curveTo3:
                            (S = l[M + 2]),
                              (P = l[M + 3]),
                              T.push(
                                "C",
                                pf(l[M]),
                                pf(l[M + 1]),
                                pf(S),
                                pf(P),
                                pf(S),
                                pf(P)
                              ),
                              (M += 4);
                            break;
                          case E.OPS.closePath:
                            T.push("Z");
                        }
                      (T = T.join(" ")),
                        _.path &&
                        o.length > 0 &&
                        o[0] !== E.OPS.rectangle &&
                        o[0] !== E.OPS.moveTo
                          ? (T = _.path.getAttributeNS(null, "d") + T)
                          : ((_.path =
                              this.svgFactory.createElement("svg:path")),
                            this._ensureTransformGroup().append(_.path)),
                        _.path.setAttributeNS(null, "d", T),
                        _.path.setAttributeNS(null, "fill", "none"),
                        (_.element = _.path),
                        _.setCurrentPoint(S, P);
                    }
                    endPath() {
                      let o = this.current;
                      if (((o.path = null), !this.pendingClip)) return;
                      if (!o.element) {
                        this.pendingClip = null;
                        return;
                      }
                      let l = `clippath${O++}`,
                        _ = this.svgFactory.createElement("svg:clipPath");
                      _.setAttributeNS(null, "id", l),
                        _.setAttributeNS(
                          null,
                          "transform",
                          pm(this.transformMatrix)
                        );
                      let S = o.element.cloneNode(!0);
                      if (
                        ("evenodd" === this.pendingClip
                          ? S.setAttributeNS(null, "clip-rule", "evenodd")
                          : S.setAttributeNS(null, "clip-rule", "nonzero"),
                        (this.pendingClip = null),
                        _.append(S),
                        this.defs.append(_),
                        o.activeClipUrl)
                      ) {
                        for (let l of ((o.clipGroup = null), this.extraStack))
                          l.clipGroup = null;
                        _.setAttributeNS(null, "clip-path", o.activeClipUrl);
                      }
                      (o.activeClipUrl = `url(#${l})`), (this.tgrp = null);
                    }
                    clip(o) {
                      this.pendingClip = o;
                    }
                    closePath() {
                      let o = this.current;
                      if (o.path) {
                        let l = `${o.path.getAttributeNS(null, "d")}Z`;
                        o.path.setAttributeNS(null, "d", l);
                      }
                    }
                    setLeading(o) {
                      this.current.leading = -o;
                    }
                    setTextRise(o) {
                      this.current.textRise = o;
                    }
                    setTextRenderingMode(o) {
                      this.current.textRenderingMode = o;
                    }
                    setHScale(o) {
                      this.current.textHScale = o / 100;
                    }
                    setRenderingIntent(o) {}
                    setFlatness(o) {}
                    setGState(o) {
                      for (let [l, _] of o)
                        switch (l) {
                          case "LW":
                            this.setLineWidth(_);
                            break;
                          case "LC":
                            this.setLineCap(_);
                            break;
                          case "LJ":
                            this.setLineJoin(_);
                            break;
                          case "ML":
                            this.setMiterLimit(_);
                            break;
                          case "D":
                            this.setDash(_[0], _[1]);
                            break;
                          case "RI":
                            this.setRenderingIntent(_);
                            break;
                          case "FL":
                            this.setFlatness(_);
                            break;
                          case "Font":
                            this.setFont(_);
                            break;
                          case "CA":
                            this.setStrokeAlpha(_);
                            break;
                          case "ca":
                            this.setFillAlpha(_);
                            break;
                          default:
                            (0, E.warn)(
                              `Unimplemented graphic state operator ${l}`
                            );
                        }
                    }
                    fill() {
                      let o = this.current;
                      o.element &&
                        (o.element.setAttributeNS(null, "fill", o.fillColor),
                        o.element.setAttributeNS(
                          null,
                          "fill-opacity",
                          o.fillAlpha
                        ),
                        this.endPath());
                    }
                    stroke() {
                      let o = this.current;
                      o.element &&
                        (this._setStrokeAttributes(o.element),
                        o.element.setAttributeNS(null, "fill", "none"),
                        this.endPath());
                    }
                    _setStrokeAttributes(o, l = 1) {
                      let _ = this.current,
                        S = _.dashArray;
                      1 !== l &&
                        S.length > 0 &&
                        (S = S.map(function (o) {
                          return l * o;
                        })),
                        o.setAttributeNS(null, "stroke", _.strokeColor),
                        o.setAttributeNS(null, "stroke-opacity", _.strokeAlpha),
                        o.setAttributeNS(
                          null,
                          "stroke-miterlimit",
                          pf(_.miterLimit)
                        ),
                        o.setAttributeNS(null, "stroke-linecap", _.lineCap),
                        o.setAttributeNS(null, "stroke-linejoin", _.lineJoin),
                        o.setAttributeNS(
                          null,
                          "stroke-width",
                          pf(l * _.lineWidth) + "px"
                        ),
                        o.setAttributeNS(
                          null,
                          "stroke-dasharray",
                          S.map(pf).join(" ")
                        ),
                        o.setAttributeNS(
                          null,
                          "stroke-dashoffset",
                          pf(l * _.dashPhase) + "px"
                        );
                    }
                    eoFill() {
                      this.current.element?.setAttributeNS(
                        null,
                        "fill-rule",
                        "evenodd"
                      ),
                        this.fill();
                    }
                    fillStroke() {
                      this.stroke(), this.fill();
                    }
                    eoFillStroke() {
                      this.current.element?.setAttributeNS(
                        null,
                        "fill-rule",
                        "evenodd"
                      ),
                        this.fillStroke();
                    }
                    closeStroke() {
                      this.closePath(), this.stroke();
                    }
                    closeFillStroke() {
                      this.closePath(), this.fillStroke();
                    }
                    closeEOFillStroke() {
                      this.closePath(), this.eoFillStroke();
                    }
                    paintSolidColorImageMask() {
                      let o = this.svgFactory.createElement("svg:rect");
                      o.setAttributeNS(null, "x", "0"),
                        o.setAttributeNS(null, "y", "0"),
                        o.setAttributeNS(null, "width", "1px"),
                        o.setAttributeNS(null, "height", "1px"),
                        o.setAttributeNS(null, "fill", this.current.fillColor),
                        this._ensureTransformGroup().append(o);
                    }
                    paintImageXObject(o) {
                      let l = this.getObject(o);
                      if (!l) {
                        (0, E.warn)(
                          `Dependent image with object ID ${o} is not ready yet`
                        );
                        return;
                      }
                      this.paintInlineImageXObject(l);
                    }
                    paintInlineImageXObject(o, l) {
                      let _ = o.width,
                        S = o.height,
                        E = I(o, this.forceDataSchema, !!l),
                        P = this.svgFactory.createElement("svg:rect");
                      P.setAttributeNS(null, "x", "0"),
                        P.setAttributeNS(null, "y", "0"),
                        P.setAttributeNS(null, "width", pf(_)),
                        P.setAttributeNS(null, "height", pf(S)),
                        (this.current.element = P),
                        this.clip("nonzero");
                      let T = this.svgFactory.createElement("svg:image");
                      T.setAttributeNS(M, "xlink:href", E),
                        T.setAttributeNS(null, "x", "0"),
                        T.setAttributeNS(null, "y", pf(-S)),
                        T.setAttributeNS(null, "width", pf(_) + "px"),
                        T.setAttributeNS(null, "height", pf(S) + "px"),
                        T.setAttributeNS(
                          null,
                          "transform",
                          `scale(${pf(1 / _)} ${pf(-1 / S)})`
                        ),
                        l
                          ? l.append(T)
                          : this._ensureTransformGroup().append(T);
                    }
                    paintImageMaskXObject(o) {
                      let l = this.getObject(o.data, o);
                      if (l.bitmap) {
                        (0, E.warn)(
                          "paintImageMaskXObject: ImageBitmap support is not implemented, ensure that the `isOffscreenCanvasSupported` API parameter is disabled."
                        );
                        return;
                      }
                      let _ = this.current,
                        S = l.width,
                        P = l.height,
                        T = _.fillColor;
                      _.maskId = `mask${L++}`;
                      let M = this.svgFactory.createElement("svg:mask");
                      M.setAttributeNS(null, "id", _.maskId);
                      let F = this.svgFactory.createElement("svg:rect");
                      F.setAttributeNS(null, "x", "0"),
                        F.setAttributeNS(null, "y", "0"),
                        F.setAttributeNS(null, "width", pf(S)),
                        F.setAttributeNS(null, "height", pf(P)),
                        F.setAttributeNS(null, "fill", T),
                        F.setAttributeNS(null, "mask", `url(#${_.maskId})`),
                        this.defs.append(M),
                        this._ensureTransformGroup().append(F),
                        this.paintInlineImageXObject(l, M);
                    }
                    paintFormXObjectBegin(o, l) {
                      if (
                        (Array.isArray(o) &&
                          6 === o.length &&
                          this.transform(o[0], o[1], o[2], o[3], o[4], o[5]),
                        l)
                      ) {
                        let o = l[2] - l[0],
                          _ = l[3] - l[1],
                          S = this.svgFactory.createElement("svg:rect");
                        S.setAttributeNS(null, "x", l[0]),
                          S.setAttributeNS(null, "y", l[1]),
                          S.setAttributeNS(null, "width", pf(o)),
                          S.setAttributeNS(null, "height", pf(_)),
                          (this.current.element = S),
                          this.clip("nonzero"),
                          this.endPath();
                      }
                    }
                    paintFormXObjectEnd() {}
                    _initialize(o) {
                      let l = this.svgFactory.create(o.width, o.height),
                        _ = this.svgFactory.createElement("svg:defs");
                      l.append(_), (this.defs = _);
                      let S = this.svgFactory.createElement("svg:g");
                      return (
                        S.setAttributeNS(null, "transform", pm(o.transform)),
                        l.append(S),
                        (this.svg = S),
                        l
                      );
                    }
                    _ensureClipGroup() {
                      if (!this.current.clipGroup) {
                        let o = this.svgFactory.createElement("svg:g");
                        o.setAttributeNS(
                          null,
                          "clip-path",
                          this.current.activeClipUrl
                        ),
                          this.svg.append(o),
                          (this.current.clipGroup = o);
                      }
                      return this.current.clipGroup;
                    }
                    _ensureTransformGroup() {
                      return (
                        this.tgrp ||
                          ((this.tgrp = this.svgFactory.createElement("svg:g")),
                          this.tgrp.setAttributeNS(
                            null,
                            "transform",
                            pm(this.transformMatrix)
                          ),
                          this.current.activeClipUrl
                            ? this._ensureClipGroup().append(this.tgrp)
                            : this.svg.append(this.tgrp)),
                        this.tgrp
                      );
                    }
                  };
                }
              },
            ],
            __webpack_module_cache__ = {};
          function __w_pdfjs_require__(o) {
            var l = __webpack_module_cache__[o];
            if (void 0 !== l) return l.exports;
            var _ = (__webpack_module_cache__[o] = { exports: {} });
            return (
              __webpack_modules__[o](_, _.exports, __w_pdfjs_require__),
              _.exports
            );
          }
          var __nested_webpack_exports__ = {};
          return (
            (() => {
              var o = __nested_webpack_exports__;
              Object.defineProperty(o, "__esModule", { value: !0 }),
                Object.defineProperty(o, "AbortException", {
                  enumerable: !0,
                  get: function () {
                    return l.AbortException;
                  },
                }),
                Object.defineProperty(o, "AnnotationEditorLayer", {
                  enumerable: !0,
                  get: function () {
                    return P.AnnotationEditorLayer;
                  },
                }),
                Object.defineProperty(o, "AnnotationEditorParamsType", {
                  enumerable: !0,
                  get: function () {
                    return l.AnnotationEditorParamsType;
                  },
                }),
                Object.defineProperty(o, "AnnotationEditorType", {
                  enumerable: !0,
                  get: function () {
                    return l.AnnotationEditorType;
                  },
                }),
                Object.defineProperty(o, "AnnotationEditorUIManager", {
                  enumerable: !0,
                  get: function () {
                    return T.AnnotationEditorUIManager;
                  },
                }),
                Object.defineProperty(o, "AnnotationLayer", {
                  enumerable: !0,
                  get: function () {
                    return M.AnnotationLayer;
                  },
                }),
                Object.defineProperty(o, "AnnotationMode", {
                  enumerable: !0,
                  get: function () {
                    return l.AnnotationMode;
                  },
                }),
                Object.defineProperty(o, "CMapCompressionType", {
                  enumerable: !0,
                  get: function () {
                    return l.CMapCompressionType;
                  },
                }),
                Object.defineProperty(o, "FeatureTest", {
                  enumerable: !0,
                  get: function () {
                    return l.FeatureTest;
                  },
                }),
                Object.defineProperty(o, "GlobalWorkerOptions", {
                  enumerable: !0,
                  get: function () {
                    return F.GlobalWorkerOptions;
                  },
                }),
                Object.defineProperty(o, "InvalidPDFException", {
                  enumerable: !0,
                  get: function () {
                    return l.InvalidPDFException;
                  },
                }),
                Object.defineProperty(o, "MissingPDFException", {
                  enumerable: !0,
                  get: function () {
                    return l.MissingPDFException;
                  },
                }),
                Object.defineProperty(o, "OPS", {
                  enumerable: !0,
                  get: function () {
                    return l.OPS;
                  },
                }),
                Object.defineProperty(o, "PDFDataRangeTransport", {
                  enumerable: !0,
                  get: function () {
                    return _.PDFDataRangeTransport;
                  },
                }),
                Object.defineProperty(o, "PDFDateString", {
                  enumerable: !0,
                  get: function () {
                    return S.PDFDateString;
                  },
                }),
                Object.defineProperty(o, "PDFWorker", {
                  enumerable: !0,
                  get: function () {
                    return _.PDFWorker;
                  },
                }),
                Object.defineProperty(o, "PasswordResponses", {
                  enumerable: !0,
                  get: function () {
                    return l.PasswordResponses;
                  },
                }),
                Object.defineProperty(o, "PermissionFlag", {
                  enumerable: !0,
                  get: function () {
                    return l.PermissionFlag;
                  },
                }),
                Object.defineProperty(o, "PixelsPerInch", {
                  enumerable: !0,
                  get: function () {
                    return S.PixelsPerInch;
                  },
                }),
                Object.defineProperty(o, "RenderingCancelledException", {
                  enumerable: !0,
                  get: function () {
                    return S.RenderingCancelledException;
                  },
                }),
                Object.defineProperty(o, "SVGGraphics", {
                  enumerable: !0,
                  get: function () {
                    return D.SVGGraphics;
                  },
                }),
                Object.defineProperty(o, "UNSUPPORTED_FEATURES", {
                  enumerable: !0,
                  get: function () {
                    return l.UNSUPPORTED_FEATURES;
                  },
                }),
                Object.defineProperty(o, "UnexpectedResponseException", {
                  enumerable: !0,
                  get: function () {
                    return l.UnexpectedResponseException;
                  },
                }),
                Object.defineProperty(o, "Util", {
                  enumerable: !0,
                  get: function () {
                    return l.Util;
                  },
                }),
                Object.defineProperty(o, "VerbosityLevel", {
                  enumerable: !0,
                  get: function () {
                    return l.VerbosityLevel;
                  },
                }),
                Object.defineProperty(o, "XfaLayer", {
                  enumerable: !0,
                  get: function () {
                    return I.XfaLayer;
                  },
                }),
                Object.defineProperty(o, "build", {
                  enumerable: !0,
                  get: function () {
                    return _.build;
                  },
                }),
                Object.defineProperty(o, "createPromiseCapability", {
                  enumerable: !0,
                  get: function () {
                    return l.createPromiseCapability;
                  },
                }),
                Object.defineProperty(o, "createValidAbsoluteUrl", {
                  enumerable: !0,
                  get: function () {
                    return l.createValidAbsoluteUrl;
                  },
                }),
                Object.defineProperty(o, "getDocument", {
                  enumerable: !0,
                  get: function () {
                    return _.getDocument;
                  },
                }),
                Object.defineProperty(o, "getFilenameFromUrl", {
                  enumerable: !0,
                  get: function () {
                    return S.getFilenameFromUrl;
                  },
                }),
                Object.defineProperty(o, "getPdfFilenameFromUrl", {
                  enumerable: !0,
                  get: function () {
                    return S.getPdfFilenameFromUrl;
                  },
                }),
                Object.defineProperty(o, "getXfaPageViewport", {
                  enumerable: !0,
                  get: function () {
                    return S.getXfaPageViewport;
                  },
                }),
                Object.defineProperty(o, "isDataScheme", {
                  enumerable: !0,
                  get: function () {
                    return S.isDataScheme;
                  },
                }),
                Object.defineProperty(o, "isPdfFile", {
                  enumerable: !0,
                  get: function () {
                    return S.isPdfFile;
                  },
                }),
                Object.defineProperty(o, "loadScript", {
                  enumerable: !0,
                  get: function () {
                    return S.loadScript;
                  },
                }),
                Object.defineProperty(o, "renderTextLayer", {
                  enumerable: !0,
                  get: function () {
                    return E.renderTextLayer;
                  },
                }),
                Object.defineProperty(o, "setLayerDimensions", {
                  enumerable: !0,
                  get: function () {
                    return S.setLayerDimensions;
                  },
                }),
                Object.defineProperty(o, "shadow", {
                  enumerable: !0,
                  get: function () {
                    return l.shadow;
                  },
                }),
                Object.defineProperty(o, "updateTextLayer", {
                  enumerable: !0,
                  get: function () {
                    return E.updateTextLayer;
                  },
                }),
                Object.defineProperty(o, "version", {
                  enumerable: !0,
                  get: function () {
                    return _.version;
                  },
                });
              var l = __w_pdfjs_require__(1),
                _ = __w_pdfjs_require__(2),
                S = __w_pdfjs_require__(6),
                E = __w_pdfjs_require__(26),
                P = __w_pdfjs_require__(27),
                T = __w_pdfjs_require__(5),
                M = __w_pdfjs_require__(32),
                F = __w_pdfjs_require__(14),
                D = __w_pdfjs_require__(35),
                I = __w_pdfjs_require__(34);
            })(),
            __nested_webpack_exports__
          );
        })()
      );
    },
  },
]);
