(self.webpackChunk_zajno_static_site_template = self.webpackChunk_zajno_static_site_template || []).push([
    [501], { 7016: (e, t, r) => { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.BreakpointType = void 0; var a, i = r(655).__importDefault(r(988));! function(e) { e.Desktop = "Desktop", e.Tablet = "Tablet", e.Mobile = "Mobile" }(a = t.BreakpointType || (t.BreakpointType = {})); var o = { Desktop: { id: 3, name: a.Desktop, width: 1440, height: 800, mediaQuery: "(min-width: 1025px)" }, Tablet: { id: 2, name: "Tablet", width: 768, height: 1024, mediaQuery: "(min-width: 481px) and (max-width: 1024px)" }, Mobile: { id: 1, name: "Mobile", width: 320, height: 1024, mediaQuery: "(max-width: 480px)" } };
            i.default.registerBreakpoint(o.Desktop), i.default.registerBreakpoint(o.Tablet), i.default.registerBreakpoint(o.Mobile), t.default = {get All() { return o }, get Current() { return i.default.Current }, isActive() { for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r]; return t.includes(this.Current.breakpoint.id) } } }, 9692: (e, t, r) => { "use strict";

            function a(e, t, r, a, i, o, l) { try { var s = e[o](l),
                        n = s.value } catch (e) { return void r(e) }
                s.done ? t(n) : Promise.resolve(n).then(a, i) }

            function i(e) { return function() { var t = this,
                        r = arguments; return new Promise((function(i, o) { var l = e.apply(t, r);

                        function s(e) { a(l, i, o, s, n, "next", e) }

                        function n(e) { a(l, i, o, s, n, "throw", e) }
                        s(void 0) })) } }
            Object.defineProperty(t, "__esModule", { value: !0 }); var o = r(655),
                l = o.__importDefault(r(9362)),
                s = r(494),
                n = o.__importDefault(r(2998)),
                d = o.__importDefault(r(6398)),
                c = "lazy";

            function h(e, t) { var r = 0;
                e.srcSet || (e.srcSet = function(e) { var t = {},
                        r = Number.MAX_VALUE,
                        a = null; return Object.keys(e.dataset).forEach((i => { if (/^src/.test(i)) { var o = +i.substr(3) || 0,
                                l = e.dataset[i];
                            t[o] = l, o < r && (a = l, r = o) } })), t[0] || (t[0] = a || "#"), l.default.log("getObjectDataSrc", t), t }(e)); var a = e.srcSet; return Object.keys(a).forEach((e => { var a = +e;
                    a >= r && t >= a && (r = a) })), a[r] }
            class u extends n.default { constructor(e) { null == e.register && (e.register = !0), super(e) }
                get video() { return this.element }
                doSetup() { var e = () => super.doSetup,
                        t = this; return i((function*() { t._state = 0, t._requestedState = 0, t._placeHolder = t.element.parentElement.querySelector(".video-placeholder"), t._hasPlaceholder = null != t._placeHolder && t.element.classList.contains("has-placeholder-mobile"), t._hasPlaceholder || (t._usePlaceholder = !1), t._hasMixBlend = t.element.classList.contains("has-mix-blend"), t._placeHoldersLoaded = !1, t._sources = Array.from(t.element.querySelectorAll("source")), t._logId = t.element.id, yield e().call(t) }))() }
                _checkIsSourceChanged(e) { void 0 === e && (e = !1); var t = !1;
                    this.log("_checkIsSourceChanged", this.element, this._sources); for (var r = 0; r < this._sources.length; ++r) { var a = this._sources[r],
                            i = h(a, this._widthVieport); if (this.log("Changing source " + a.src + " to " + i), a.targetSrc !== i) { if (!e) return !0;
                            a.targetSrc = i, a.src = i, t = !0 } } return t }
                _enableVideo() { var e = this; return i((function*() { e._placeHolder && (e._placeHolder.hidden = !0, e.video.hidden = !1); var t = e._checkIsSourceChanged(!0); if (e.log("[VIDEO] Switching to Video, isChanged =", t), t) { e.video.classList.add(c); var r = new Promise((t => { var r = () => { e._state <= 1 && (e.video.removeEventListener("canplay", r), e._switchToState(2), t()) };
                                e.video.addEventListener("canplay", r), e.log("[VIDEO] Loading..."), e.video.load() }));
                            yield r }
                        e.isActive && (yield e._switchToState(4)) }))() }
                _enablePlaceholders() { var e = this; return i((function*() { e._placeHolder.hidden = !1, e.video.hidden = !0, yield e._switchToState(3), e._placeHoldersLoaded || (e.log("Switching to Placeholders"), e._placeHolder.classList.add(c), new d.default({ el: e._placeHolder, register: !0 }), e._placeHoldersLoaded = !0) }))() }
                _switchToState(e) { var t = this; return i((function*() { if (e < 1) throw new Error("Invalid state"); if (e > 2 && t._state < 2) return t._requestedState = e, void t.log("ignoring state =", e, " when current state =", t._state); if (e !== t._state)
                            if (t._changingState) t._requestedState = e;
                            else { switch (t._changingState = !0, e) {
                                    case 4:
                                        yield t.video.play(); break;
                                    case 3:
                                        t.video.pause(), t.log("paused"); break;
                                    case 1:
                                        t.log("LOAD ALLOWED"); break;
                                    case 2:
                                        t.log("LOADED"); break;
                                    default:
                                        throw new Error("Unhandled targetState: " + e) }
                                t._changingState = !1, t._state = e; var r = t._requestedState;
                                t._requestedState = null, r && r !== t._state && t._switchToState(r) } }))() }
                _load() { var e = this; return i((function*() { null != e._usePlaceholder ? e._usePlaceholder ? yield e._enablePlaceholders() : yield e._enableVideo() : e.log("Skipping load beacuse don't know about placeholder. Try to call resize first!") }))() }
                _doLoading() { var e = this; return i((function*() { yield e._switchToState(1), yield e._load() }))() }
                scroll(e, t) {}
                resize(e, t) { var r = e <= 1024,
                        a = !!(this._hasPlaceholder && r || this._hasMixBlend && !s.SUPPORT_MIX_BLEND); if (this._widthVieport = e, this._usePlaceholder === a) return !1 === this._usePlaceholder && this._state > 1 && this._checkIsSourceChanged() ? void this._doLoading() : void 0;
                    this._usePlaceholder = a, this._state >= 1 && this._load() }
                _activate() { this.register(), this._switchToState(4) }
                _deactivate() { this._switchToState(3) }
                log() { if (this._logId) { for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        l.default.log("[VIDEO = " + this._logId + "]", ...t) } } }
            t.default = u }, 494: (e, t) => { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.SUPPORT_MIX_BLEND = t.MOBILE_DEVICE_SCREEN_WIDTH = void 0, t.MOBILE_DEVICE_SCREEN_WIDTH = 690, t.SUPPORT_MIX_BLEND = !!("mix-blend-mode" in document.documentElement.style) } }
]);