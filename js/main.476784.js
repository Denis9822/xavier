(self.webpackChunk_zajno_static_site_template = self.webpackChunk_zajno_static_site_template || []).push([
    [179], { 7823: (e, t, a) => { "use strict";

            function r(e, t, a, r, i, s, o) { try { var n = e[s](o),
                        l = n.value } catch (e) { return void a(e) }
                n.done ? t(l) : Promise.resolve(l).then(r, i) }

            function i(e) { return function() { var t = this,
                        a = arguments; return new Promise((function(i, s) { var o = e.apply(t, a);

                        function n(e) { r(o, i, s, n, l, "next", e) }

                        function l(e) { r(o, i, s, n, l, "throw", e) }
                        n(void 0) })) } }
            Object.defineProperty(t, "__esModule", { value: !0 }); var s, o = a(655),
                n = o.__importDefault(a(6358)),
                l = o.__importDefault(a(2998)),
                u = a(9362).createLogger("[LottieComponent]"),
                c = () => Promise.resolve().then((() => o.__importStar(a(1248))));

            function d() { return (d = i((function*() { return s || (u.log("Loading library..."), (s = c()).then((() => u.log("Library has been loaded")))), s }))).apply(this, arguments) }
            class h extends l.default { constructor() { super(...arguments), this._isCompleted = !0, this._isLoaded = !1, this._playPending = !1, this._play = () => { this._anim && (this._isLoaded ? (this._isCompleted && (this._anim.goToAndStop(0), this._isCompleted = !1), this._anim.play()) : this._playPending = !0) } }
                doSetup() { var e = () => super.doSetup,
                        t = this; return i((function*() { t.useDefaultConfig({ register: !0, loop: !0, hideOnDeactivate: !0, autoplay: !0 }), t._params = { container: t.element, renderer: "svg", loop: t._config.loop, autoplay: t._config.autoplay, path: t.element.dataset.lottiePath }, t._config.hideOnDeactivate ? n.default.set(t.element, { autoAlpha: 0 }) : n.default.set(t.element, { autoAlpha: 1 }), yield e().call(t) }))() }
                get priority() { return this._priority || 3 }
                _doLoading() { var e = this; return i((function*() { if (e._lottie = yield
                            function() { return d.apply(this, arguments) }(), e._anim = e._lottie.loadAnimation(e._params), e._anim.addEventListener("complete", (() => { e._isCompleted = !0 })), e._anim.isLoaded) return e._isLoaded = !0, Promise.resolve();
                        yield new Promise((t => { e._anim.addEventListener("DOMLoaded", (() => { e._isLoaded = !0, e._playPending && (e._playPending = !1, setTimeout((() => { u.log("Play Pending", e) }), 500), e._anim.play()), t() })) })) }))() }
                _stop() { var e;
                    null === (e = this._anim) || void 0 === e || e.goToAndStop(0), this._isCompleted = !1 }
                _activate() { var e = this; return i((function*() { e._config.hideOnDeactivate && ("first" === e._config.hideOnDeactivate && e.wasActive || (yield e.showByAlpha())), e._play() }))() }
                destroy() { this._lottie.destroy() }
                _deactivate() { var e = this; return i((function*() {!0 === e._config.hideOnDeactivate && (yield e.hideByAlpha()), e._stop() }))() }
                showByAlpha() { var e = this; return i((function*() { var t;
                        n.default.killTweensOf(e.element), yield n.default.set(e.element, { autoAlpha: 1, delay: (null === (t = e.activationConfig) || void 0 === t ? void 0 : t.delay) || 0 }) }))() }
                hideByAlpha() { var e = this; return i((function*() { var t;
                        n.default.killTweensOf(e.element), yield n.default.set(e.element, { autoAlpha: 0, delay: (null === (t = e.activationConfig) || void 0 === t ? void 0 : t.delay) || 0 }) }))() } }
            t.default = h }, 7734: (e, t, a) => { "use strict";

            function r(e, t, a, r, i, s, o) { try { var n = e[s](o),
                        l = n.value } catch (e) { return void a(e) }
                n.done ? t(l) : Promise.resolve(l).then(r, i) } var i = a(655);
            a(6024), a(5650); var s = i.__importDefault(a(9700)),
                o = i.__importDefault(a(7298)),
                n = i.__importDefault(a(3312)),
                l = i.__importDefault(a(8959)),
                u = i.__importDefault(a(1252));
            class c extends s.default { constructor() { super(...arguments), this._sectionTypes = [o.default, n.default, l.default, u.default] }
                setupPageAsync() { var e, t = () => super.setupPageAsync,
                        a = this; return (e = function*() { yield t().call(a) }, function() { var t = this,
                            a = arguments; return new Promise((function(i, s) { var o = e.apply(t, a);

                            function n(e) { r(o, i, s, n, l, "next", e) }

                            function l(e) { r(o, i, s, n, l, "throw", e) }
                            n(void 0) })) })() }
                get sectionTypes() { return this._sectionTypes } }
            c.RunPage(c) }, 1252: (e, t, a) => { "use strict";

            function r(e, t, a, r, i, s, o) { try { var n = e[s](o),
                        l = n.value } catch (e) { return void a(e) }
                n.done ? t(l) : Promise.resolve(l).then(r, i) }

            function i(e) { return function() { var t = this,
                        a = arguments; return new Promise((function(i, s) { var o = e.apply(t, a);

                        function n(e) { r(o, i, s, n, l, "next", e) }

                        function l(e) { r(o, i, s, n, l, "throw", e) }
                        n(void 0) })) } }
            Object.defineProperty(t, "__esModule", { value: !0 }); var s = a(655),
                o = s.__importDefault(a(546)),
                n = s.__importStar(a(6358)),
                l = s.__importDefault(a(7016)),
                u = s.__importDefault(a(2067));
            n.default.registerPlugin(u.default);
            class c extends o.default {get list() { return this.element.querySelectorAll(".js-scroll-anim") }
                get textBlocks() { return this.element.querySelectorAll(".js-text span") }get sphere() { return this.element.querySelectorAll(".js-sphere") }
                get descIcon() { return this.element.querySelector(".js-desc-icon") }
                setupSection() { var e = this; return i((function*() { e.setupAnimItems() }))() }
                _activate() { var e = this; return i((function*() { e.wasActive || (yield e._show()) }))() }
                _setIsMobile(e) { this._isMobile = 1 === e }
                resize() { var e = this; return i((function*() { e._rem = l.default.Current.rem, e._currentBreakpoint = l.default.Current.breakpoint.id, e._setIsMobile(e._currentBreakpoint) }))() }
                scroll(e, t) { super.scroll(e, t), this._scrollAnimation(e) }
                _scrollAnimation(e) { var t = 0;
                    this.list.length !== this.element.querySelectorAll("animated").length && this.list.forEach((a => { var r = a.getBoundingClientRect().height,
                            i = a.getBoundingClientRect().top,
                            s = .666666,
                            o = .066666;
                        u.default.create("ease-main", "0.61, 0.00, 0.38, 1.00"), -1300 + e - (t += r) >= i && !a.classList.contains("animated") && (n.default.set(a, { autoAlpha: 1 }), n.TweenLite.fromTo(a.querySelectorAll(".js-desc-icon"), { autoAlpha: 0 }, { autoAlpha: 1, duration: s, ease: "ease-main" }), !this._isMobile && a.querySelectorAll(".js-text.js-text-desktop span").length && n.TweenLite.fromTo(a.querySelectorAll(".js-text.js-text-desktop span"), { autoAlpha: 0, y: 50 * this._rem }, { autoAlpha: 1, y: 0, duration: s, stagger: o, ease: "ease-main" }), this._isMobile && a.querySelectorAll(".js-text.js-text-mobile span").length && n.TweenLite.fromTo(a.querySelector(".js-text.js-text-mobile span"), { autoAlpha: 0, y: 50 * this._rem }, { autoAlpha: 1, y: 0, duration: s, ease: "ease-main" }), a.querySelector(".js-sphere") && n.TweenLite.fromTo(a.querySelector(".js-sphere"), { scale: 1.3 }, { scale: 1, duration: s, ease: "ease-main" }), a.querySelectorAll(".js-text.js-text-desc span").length && n.TweenLite.fromTo(a.querySelectorAll(".js-text.js-text-desc span"), { autoAlpha: 0, y: 50 * this._rem }, { autoAlpha: 1, y: 0, duration: s, stagger: o, ease: "ease-main" }), a.classList.add("animated")) })) }
                _deactivate() {}
                _show() { this.clearTween(), u.default.create("ease-main", "0.61, 0.00, 0.38, 1.00") }
                clearTween() { n.default.killTweensOf([]) }
                setupAnimItems() { n.default.set(this.textBlocks, { autoAlpha: 0 }), n.default.set(this.sphere, { scale: 1.3 }), n.default.set(this.descIcon, { autoAlpha: 0 }) } }
            t.default = c }, 7298: (e, t, a) => { "use strict";

            function r(e, t, a, r, i, s, o) { try { var n = e[s](o),
                        l = n.value } catch (e) { return void a(e) }
                n.done ? t(l) : Promise.resolve(l).then(r, i) }

            function i(e) { return function() { var t = this,
                        a = arguments; return new Promise((function(i, s) { var o = e.apply(t, a);

                        function n(e) { r(o, i, s, n, l, "next", e) }

                        function l(e) { r(o, i, s, n, l, "throw", e) }
                        n(void 0) })) } }
            Object.defineProperty(t, "__esModule", { value: !0 }); var s = a(655),
                o = s.__importDefault(a(546)),
                n = s.__importStar(a(6358)),
                l = s.__importDefault(a(7016)),
                u = s.__importDefault(a(2067)),
                c = s.__importDefault(a(7823)),
                d = s.__importDefault(a(9692));
            n.default.registerPlugin(u.default);
            class h extends o.default { constructor() { super(...arguments), this._prevId = 0 }
                get heroTitle() { return this.element.querySelector(".js-title") }
                get heroTitles() { return this.heroTitle.querySelectorAll("span") }
                get heroVid() { return this.element.querySelector(".js-hero-vid") }
                get btnMain() { return this.element.querySelector(".js-btn-main") }
                get btnMainText() { return this.btnMain.querySelector("span") }
                get btnMore() { return this.element.querySelector(".js-btn-more") }
                get btnMoreText() { return this.btnMore.querySelector("span") }
                get arrowsArr() { return this.element.querySelectorAll(".bodymovin__arrows") }
                get arrows() { return this.element.querySelector(".bodymovin__arrows.active") }
                get video() { return this.element.querySelector(".video-js") }
                setupSection() { var e = this; return i((function*() { e._video = yield new d.default({ el: e.video }).setup(), e.setupAnimItems() }))() }
                _arrowsResolution(e) { var t = this; return i((function*() { t.arrowsArr.forEach((e => e.classList.remove("active"))), t.element.querySelector("[data-breakpoint='" + e + "']").classList.add("active"), t._prevId !== e && t._setupArrows(), t._prevId = e }))() }
                _setupArrows() { var e = this; return i((function*() { e._arrows && e._arrows.destroy(), e._arrows = yield new c.default({ el: e.arrows, autoplay: !0 }).setup(), e._arrows.activate() }))() }
                _activate() { var e = this; return i((function*() { e._video.activate(), e.wasActive || (yield e._show()) }))() }
                resize() { var e = this; return i((function*() { e._rem = l.default.Current.rem, e._breakpointId = l.default.Current.breakpoint.id, e._arrowsResolution(e._breakpointId) }))() }
                _deactivate() {}
                _show() { this.clearTween(); var e = n.default.timeline({ immediateRender: !1, ease: n.Power1.easeInOut, force3D: !1, onComplete: () => { this.btnMain.classList.add("on-hover"), this.btnMore.classList.add("on-hover") } }),
                        t = .666666,
                        a = .033333,
                        r = .916666; return u.default.create("ease-main", "0.61, 0.00, 0.38, 1.00"), e.fromTo(this.heroVid, { autoAlpha: 0 }, { autoAlpha: 1, duration: r, ease: "ease-main" }, 0).fromTo(this.heroVid, { scale: 1.15 }, { scale: 1, duration: r, ease: "ease-main" }, 0).fromTo(this.heroTitles, { autoAlpha: 0, y: 50 * this._rem }, { autoAlpha: 1, y: 0, duration: t, stagger: a, ease: "ease-main" }, .066666).fromTo(this.arrows, { autoAlpha: 0, y: 70 * this._rem }, { autoAlpha: 1, y: 0, duration: t, ease: "ease-main" }, a).fromTo(this.btnMoreText, { autoAlpha: 0, y: 50 * this._rem }, { autoAlpha: 1, y: 0, duration: t, ease: "ease-main" }, .1).fromTo(this.btnMainText, { autoAlpha: 0, y: 50 * this._rem }, { autoAlpha: 1, y: 0, duration: t, ease: "ease-main" }, .016666).fromTo(this.btnMain, { borderWidth: 0 }, { borderWidth: 1, duration: .566666, ease: "ease-main" }, .05) }
                clearTween() { n.default.killTweensOf([this.btnMain]) }
                setupAnimItems() { n.default.set(this.heroVid, { autoAlpha: 0 }), n.default.set(this.heroTitles, { autoAlpha: 0 }), n.default.set(this.arrows, { autoAlpha: 0 }), n.default.set(this.btnMoreText, { autoAlpha: 0 }), n.default.set(this.btnMainText, { autoAlpha: 0 }), n.default.set(this.btnMain, { borderWidth: 0 }) } }
            t.default = h }, 8959: (e, t, a) => { "use strict";

            function r(e, t, a, r, i, s, o) { try { var n = e[s](o),
                        l = n.value } catch (e) { return void a(e) }
                n.done ? t(l) : Promise.resolve(l).then(r, i) }

            function i(e) { return function() { var t = this,
                        a = arguments; return new Promise((function(i, s) { var o = e.apply(t, a);

                        function n(e) { r(o, i, s, n, l, "next", e) }

                        function l(e) { r(o, i, s, n, l, "throw", e) }
                        n(void 0) })) } }
            Object.defineProperty(t, "__esModule", { value: !0 }); var s = a(655),
                o = s.__importDefault(a(546)),
                n = s.__importStar(a(6358)),
                l = s.__importDefault(a(7016)),
                u = s.__importDefault(a(2067));
            n.default.registerPlugin(u.default);
            class c extends o.default {get platformDescBlock() { return this.element.querySelector(".js-desc-block") }
                get platformDesc() { return this.element.querySelector(".js-desc") }get platformAllDescs() { return this.platformDesc.querySelectorAll("span") }
                get platformDescIcon() { return this.platformDescBlock.querySelector(".js-desc-logo") }get list() { return this.element.querySelectorAll(".js-scroll-anim") }
                get arrowsWrapper() { return this.element.querySelectorAll(".js-splines-anim") }get textBlocks() { return this.element.querySelectorAll(".js-text") }
                setupSection() { var e = this; return i((function*() { e.setupAnimItems() }))() }
                _activate() { var e = this; return i((function*() { e.wasActive || (yield e._show()) }))() }
                resize() { var e = this; return i((function*() { e._rem = l.default.Current.rem }))() }
                scroll(e, t) { super.scroll(e, t), this._scrollAnimation(e) }
                _scrollAnimation(e) { var t = 0; if (this.list.length !== this.element.querySelectorAll("animated").length) { var a = .666666;
                        u.default.create("ease-main", "0.61, 0.00, 0.38, 1.00"), this.list.forEach((r => { var i = r.getBoundingClientRect().height,
                                s = r.getBoundingClientRect().top; - 250 + e - (t += i) >= s && !r.classList.contains("animated") && (n.default.set(r, { autoAlpha: 1 }), n.TweenLite.fromTo(r.querySelectorAll(".js-text"), { autoAlpha: 0, y: 50 * this._rem }, { autoAlpha: 1, y: 0, duration: a, stagger: .066666, ease: "ease-main" }), r.classList.add("animated")), -600 + e - t >= s && !r.classList.contains("flash") && (n.TweenLite.fromTo(r.querySelectorAll(".rgb"), { autoAlpha: 0 }, { autoAlpha: 1, duration: .9 }), n.TweenLite.fromTo(r.querySelectorAll(".js-text"), { color: "#73717E" }, { color: "#ffffff", duration: .9 }), r.classList.add("flash")) })), 3 === l.default.Current.breakpoint.id && this.arrowsWrapper.forEach((r => { var i = r.getBoundingClientRect().height,
                                s = r.getBoundingClientRect().top; - 250 + e - (t += i) >= s && !r.classList.contains("animated-once") && (n.TweenLite.fromTo(r.querySelector(".js-spline-top"), { y: 0 * this._rem }, { y: -40, duration: a, ease: "ease-main" }), n.TweenLite.fromTo(r.querySelector(".js-logo"), { scale: 1, rotation: 0 }, { scale: .7, rotation: 45, duration: a, ease: "ease-main" }), n.TweenLite.fromTo(r.querySelector(".js-spline-bottom"), { y: 0 * this._rem }, { y: 40, duration: a, ease: "ease-main" }), r.classList.add("animated-once")), -670 + e - t >= s && !r.classList.contains("animated-twice") && (n.TweenLite.fromTo(r.querySelector(".js-spline-top"), { y: -40 * this._rem }, { y: 0, duration: a, ease: "ease-main" }), n.TweenLite.fromTo(r.querySelector(".js-logo"), { scale: .7, rotation: 45 }, { scale: 1, rotation: 0, duration: a, ease: "ease-main" }), n.TweenLite.fromTo(r.querySelector(".js-spline-bottom"), { y: 40 * this._rem }, { y: 0, duration: a, ease: "ease-main" }), r.classList.add("animated-twice")) })) } }
                _deactivate() {}
                _show() { this.clearTween(); var e = .666666,
                        t = .066666; return u.default.create("ease-main", "0.61, 0.00, 0.38, 1.00"), n.default.timeline({ immediateRender: !1, ease: n.Power1.easeInOut, force3D: !1 }).fromTo(this.platformDescIcon, { autoAlpha: 0 }, { autoAlpha: 1, duration: e, ease: "ease-main" }).fromTo(this.platformAllDescs, { autoAlpha: 0, y: 50 * this._rem }, { autoAlpha: 1, y: 0, duration: e, stagger: t, ease: "ease-main" }, t) }
                clearTween() { n.default.killTweensOf([]) }
                setupAnimItems() { n.default.set(this.platformAllDescs, { autoAlpha: 0 }), n.default.set(this.platformDescIcon, { autoAlpha: 0 }), n.default.set(this.textBlocks, { autoAlpha: 0 }) } }
            t.default = c }, 3312: (e, t, a) => { "use strict";

            function r(e, t, a, r, i, s, o) { try { var n = e[s](o),
                        l = n.value } catch (e) { return void a(e) }
                n.done ? t(l) : Promise.resolve(l).then(r, i) }

            function i(e) { return function() { var t = this,
                        a = arguments; return new Promise((function(i, s) { var o = e.apply(t, a);

                        function n(e) { r(o, i, s, n, l, "next", e) }

                        function l(e) { r(o, i, s, n, l, "throw", e) }
                        n(void 0) })) } }
            Object.defineProperty(t, "__esModule", { value: !0 }); var s = a(655),
                o = s.__importDefault(a(546)),
                n = s.__importStar(a(6358)),
                l = s.__importDefault(a(7823)),
                u = s.__importDefault(a(7016)),
                c = s.__importDefault(a(2067));
            n.default.registerPlugin(c.default);
            class d extends o.default {get specialtyTitles() { return this.element.querySelectorAll(".js-specialty-title") }
                get specialtyTexts() { return this.element.querySelectorAll(".js-specialty-text") }get specialtyLinks() { return this.element.querySelectorAll(".js-specialty-link") }
                get specialtyCards() { return this.element.querySelectorAll(".js-specialty-card") }get orbitWrapper1() { return this.element.querySelector(".bodymovin__orbit-1") }
                get orbitWrapper2() { return this.element.querySelector(".bodymovin__orbit-2") }
                setupSection() { var e = this; return i((function*() { e._visualOrbit1 = yield new l.default({ el: e.orbitWrapper1, autoplay: !1 }).setup(), e._visualOrbit2 = yield new l.default({ el: e.orbitWrapper2, autoplay: !1 }).setup(), e._addEvent(), e.setupAnimItems() }))() }
                _activate() { var e = this; return i((function*() { e.wasActive || (yield e._show()) }))() }
                resize() { var e = this; return i((function*() { e._rem = u.default.Current.rem }))() }
                _deactivate() {}
                _addEvent() { var e = this;
                    this.specialtyCards.forEach((t => { t.addEventListener("mouseover", function() { var a = i((function*(a) { a.stopPropagation(), "left" === t.dataset.card && (e._visualOrbit1.activate(), yield e._showEllipse(t)), "right" === t.dataset.card && (e._visualOrbit2.activate(), yield e._showEllipse(t)) })); return function(e) { return a.apply(this, arguments) } }()) })), this.specialtyCards.forEach((t => { t.addEventListener("mouseleave", function() { var a = i((function*(a) { a.stopPropagation(), "left" === t.dataset.card && (yield e._hideEllipse(t), e._visualOrbit1.deactivate()), "right" === t.dataset.card && (yield e._hideEllipse(t), e._visualOrbit2.deactivate()) })); return function(e) { return a.apply(this, arguments) } }()) })) }
                _showEllipse(e) { return n.TweenMax.fromTo(e.querySelector(".bodymovin__orbit"), { scale: .8, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: .666666, ease: "0.61, 0.00, 0.38, 1.00" }) }
                _hideEllipse(e) { return n.TweenMax.fromTo(e.querySelector(".bodymovin__orbit"), { scale: 1, autoAlpha: 1 }, { scale: .8, autoAlpha: 0, duration: .666666, ease: "0.61, 0.00, 0.38, 1.00" }) }
                _show() { this.clearTween(); var e = .666666,
                        t = .066666; return c.default.create("ease-main", "0.61, 0.00, 0.38, 1.00"), n.default.timeline({ immediateRender: !1, ease: n.Power1.easeInOut, force3D: !1, onComplete: () => { this.element.querySelectorAll("a").forEach((e => e.classList.add("on-hover"))) } }).fromTo(this.specialtyTitles, { autoAlpha: 0, y: 50 * this._rem }, { autoAlpha: 1, y: 0, stagger: t, duration: e, ease: "ease-main" }, 0).fromTo(this.specialtyTexts, { autoAlpha: 0, y: 70 * this._rem }, { autoAlpha: 1, y: 0, stagger: t, duration: e, ease: "ease-main" }, .133333).fromTo(this.specialtyLinks, { autoAlpha: 0, y: 50 * this._rem }, { autoAlpha: 1, y: 0, stagger: t, duration: e, ease: "ease-main" }, .199999) }
                clearTween() { n.default.killTweensOf([]) }
                setupAnimItems() { n.default.set(this.specialtyTitles, { autoAlpha: 0 }), n.default.set(this.specialtyTexts, { autoAlpha: 0 }), n.default.set(this.specialtyLinks, { autoAlpha: 0 }) } }
            t.default = d }, 5650: (e, t, a) => { "use strict";
            a.r(t) } },
    e => { "use strict";
        e.O(0, [678, 248, 24, 558, 501, 30, 429], (() => (7734, e(e.s = 7734)))), e.O() }
]);