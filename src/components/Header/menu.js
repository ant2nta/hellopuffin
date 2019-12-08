__d(
    function(g, r, i, a, m, e, d) {
      "use strict";
      function t(t, s) {
        return {
          text: r(d[1])(909),
          link: r(d[2]).buildLoginLink(t, { source: "desktop_nav" }),
          onClick: s
        };
      }
      function s(t) {
        return {
          text: r(d[1])(1086),
          link: r(d[3]).EMAIL_SIGNUP_PATH,
          onClick: t
        };
      }
      function o(o, n, l) {
        const c = t(l, o),
          h = s(n);
        return a(d[4]).createElement(
          "span",
          { className: "r9-Os" },
          a(d[4]).createElement(
            i(d[5]),
            { className: "tdiEy", href: c.link, onClick: c.onClick },
            a(d[4]).createElement(r(d[6]).Button, null, c.text)
          ),
          a(d[4]).createElement(
            i(d[5]),
            { className: "tdiEy", href: h.link, onClick: h.onClick },
            h.text
          )
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]);
      const n = 250,
        l = i(d[7])["desktop-collapsed-nav-height"].value;
      var c = r(d[28]).withRouter(
        r(d[29]).connect(
          t => {
            var s;
            return {
              shouldShowLoggedOutHalfSheet: !!(null === t || void 0 === t
                ? void 0
                : null === (s = t.upsell) || void 0 === s
                ? void 0
                : s.shouldShowLoggedOutHalfSheet)
            };
          },
          function(t) {
            return {
              onDisplayLoggedOutHalfSheet() {
                t(r(d[27]).displayLoggedOutHalfSheet());
              }
            };
          }
        )(
          class extends a(d[4]).Component {
            constructor(t) {
              super(t),
                (this.$DesktopNav1 = !1),
                (this.$DesktopNav2 = () => {
                  this.props.location.pathname !== r(d[3]).ACTIVITY_FEED_PATH
                    ? this.setState({
                        showActivityModal: !this.state.showActivityModal
                      })
                    : window.location.reload();
                }),
                (this.$DesktopNav3 = () => {
                  this.setState({ showActivityModal: !1 });
                }),
                (this.$DesktopNav4 = t => {
                  "/" === window.location.pathname && window.scrollTo(0, 0);
                }),
                (this.$DesktopNav5 = () => {
                  if ("fixed" === r(d[8]).getPositionStyle())
                    return void (this.$DesktopNav1 = !0);
                  if (this.$DesktopNav1) return void (this.$DesktopNav1 = !1);
                  const t = window.pageYOffset < l;
                  t && this.state.navCollapsed
                    ? this.setState({ navCollapsed: !1 })
                    : t ||
                      this.state.navCollapsed ||
                      this.setState({ navCollapsed: !0 });
                }),
                (this.$DesktopNav6 = () => {
                  const { onHeightChange: t } = this.props;
                  if (!t) return;
                  const s = this.$DesktopNav7;
                  if (s) {
                    const o = s.getBoundingClientRect().height;
                    o !== this.props.navHeight && t(o);
                  }
                }),
                (this.$DesktopNav9 = t => {
                  switch (this.props.analyticsContext) {
                    case i(d[9]).resetPassword:
                      r(d[10]).logLoginEvent({
                        event_name: "account_recovery_page_login_clicked"
                      });
                      break;
                    default:
                      r(d[10]).logLoginEvent({
                        event_name: "desktop_nav_login_clicked"
                      });
                  }
                }),
                (this.$DesktopNav10 = t => {
                  switch (this.props.analyticsContext) {
                    case i(d[9]).resetPassword:
                      r(d[10]).logLoginEvent({
                        event_name: "account_recovery_page_signup_clicked"
                      });
                      break;
                    default:
                      r(d[10]).logLoginEvent({
                        event_name: "desktop_nav_signup_clicked"
                      });
                  }
                }),
                (this.$DesktopNav11 = () => {
                  const {
                    analyticsContext: t,
                    isLoginModalOpen: s,
                    shouldShowLoggedOutHalfSheet: o,
                    viewer: n
                  } = this.props;
                  return (
                    !0 === o && r(d[11]).hasNewLoggedOutCTA(n, t) && !0 !== s
                  );
                }),
                (this.state = { navCollapsed: !1, showActivityModal: !1 }),
                r(d[12]).preloadModule();
            }
            componentDidMount() {
              const {
                onDisplayLoggedOutHalfSheet: t,
                showCookieBanner: s
              } = this.props;
              (this.$DesktopNav8 = i(d[13]).add(
                window,
                "scroll",
                i(d[14])(this.$DesktopNav5, n, this)
              )),
                s && this.$DesktopNav6(),
                t && t();
            }
            componentWillUnmount() {
              this.$DesktopNav8 && this.$DesktopNav8.remove();
            }
            render() {
              const {
                  analyticsContext: t,
                  className: s,
                  hideActivity: n,
                  hideExplore: l,
                  hideProfile: c,
                  hideSearchBar: h,
                  hideSignUpAndLogInText: p,
                  onHeightChange: v,
                  showCookieBanner: u,
                  viewer: k
                } = this.props,
                { navCollapsed: N } = this.state,
                C = !0 === l && n;
              return a(d[4]).createElement(
                "div",
                {
                  className: `_lz6s ${N ? "aUCRo" : ""}`,
                  ref: t => (this.$DesktopNav7 = t),
                  style: { height: u ? "auto" : null }
                },
                a(d[4]).createElement(r(d[15]).ViewpointClipRegion, {
                  height: 52,
                  id: "desktopNav",
                  top: 0
                }),
                u &&
                  v &&
                  a(d[4]).createElement(i(d[16]), {
                    event: "resize",
                    handler: this.$DesktopNav6,
                    target: window
                  }),
                u && a(d[4]).createElement(i(d[17]), null),
                a(d[4]).createElement(
                  "div",
                  { className: i(d[18])(`MWDvN ${N ? "buoMu" : ""}`, s) },
                  a(d[4]).createElement(
                    "div",
                    { className: "oJZym" },
                    a(d[4]).createElement(i(d[19]), {
                      condensed: N,
                      onClick: this.$DesktopNav4
                    })
                  ),
                  !0 !== h &&
                    a(d[4]).createElement(i(d[20]), {
                      analyticsContext: t,
                      className: "LWmhU",
                      navCollapsed: this.state.navCollapsed,
                      searchContext: r(d[21]).SEARCH_CONTEXT.BLENDED,
                      useHistory: !1
                    }),
                  a(d[4]).createElement(
                    "div",
                    { className: "ctQZg" },
                    k
                      ? a(d[4]).createElement(
                          "div",
                          { className: "_47KiJ" },
                          r(d[22]).hasDirect({ silent: !0 }) &&
                            a(d[4]).createElement(i(d[23]), null),
                          !0 !== l &&
                            a(d[4]).createElement(
                              "div",
                              { className: "XrOey" },
                              a(d[4]).createElement(i(d[24]), null)
                            ),
                          !0 !== n &&
                            a(d[4]).createElement(
                              "div",
                              { className: "XrOey" },
                              a(d[4]).createElement(i(d[25]), {
                                modalOpen: this.state.showActivityModal,
                                navCollapsed: this.state.navCollapsed,
                                onClick: this.$DesktopNav2
                              }),
                              this.state.showActivityModal
                                ? a(d[4]).createElement(
                                    "div",
                                    null,
                                    a(d[4]).createElement(i(d[12]), {
                                      navCollapsed: this.state.navCollapsed,
                                      onClose: this.$DesktopNav3
                                    })
                                  )
                                : null
                            ),
                          !0 !== c &&
                            a(d[4]).createElement(
                              "div",
                              { className: "XrOey" },
                              !0 === C
                                ? a(d[4]).createElement(
                                    "a",
                                    {
                                      className: "em0zJ",
                                      href: r(d[2]).buildUserLink(k.username)
                                    },
                                    k.username
                                  )
                                : a(d[4]).createElement(i(d[26]), { viewer: k })
                            )
                        )
                      : a(d[4]).createElement(
                          "div",
                          { className: "ZcHy5" },
                          this.$DesktopNav11() &&
                            a(d[4]).createElement(i(d[11]), {
                              analyticsContext: t
                            }),
                          !0 !== p &&
                            o(
                              this.$DesktopNav9,
                              this.$DesktopNav10,
                              this.props.history.location.pathname
                            )
                        )
                  )
                )
              );
            }
          }
        )
      );
      e.default = c;
    },
    11599876,
    [
      15007806,
      9568260,
      9568280,
      9568262,
      3,
      9568265,
      9568327,
      9633794,
      12648453,
      9568272,
      9568292,
      15007753,
      15007807,
      9830426,
      11993145,
      9830419,
      9764894,
      15007758,
      9568279,
      15007808,
      11993104,
      11862033,
      9830578,
      12713989,
      15007809,
      15007810,
      15007811,
      12255363,
      6,
      5
    ]
  );
  __d(function() {}, 15007806, []);
  