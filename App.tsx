/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {WebView} from 'react-native-webview';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const getMoviesFromApiAsync = async () => {
    try {
      const response = await fetch('https://pylaev-i.pro/ELK.umd.js');
      const json = await response.text();
      (function () {
        this.React = React;
        this.Text = Text;

        eval(
          '(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode("._loader_33hqw_1{display:flex;width:100%;height:18px;justify-content:center;align-items:center;gap:8px;border-radius:32px;background:linear-gradient(90deg,rgba(236,239,242,1) 0%,rgba(255,255,255,1) 50%,rgba(236,239,242,1) 100%);background-position:-100px 0;animation:_background_33hqw_1 2s infinite alternate;max-width:185px}._darkMode_33hqw_20{background:linear-gradient(90deg,rgba(58,58,58,1) 0%,rgba(30,30,30,1) 50%,rgba(58,58,58,1) 100%)}@keyframes _background_33hqw_1{to{background-position:200px 0}}._phoneWrapper_1grmd_1{color:#68b1f8;font-size:14px;font-style:normal;font-weight:500;line-height:18px;letter-spacing:-.28px;display:flex;align-items:center;justify-content:center;gap:8px;cursor:pointer;font-family:Inter,sans-serif;-webkit-tap-highlight-color:transparent}@media screen and (min-width: 900px){._phoneWrapper_1grmd_1{justify-content:flex-start}}._phoneWrapperSberIdIcon_1grmd_23,._phoneWrapperSberIdIcon_1grmd_23 img{width:28px;height:14px}._phoneWrapperArrow_1grmd_33{width:16px;height:16px;margin-left:-8px}._buttonSpasibo_1klgi_23{width:160px;height:78px;border-radius:16px;background:var(--light-background);color:var(--light-primary);padding:16px;box-sizing:border-box;cursor:pointer;display:flex;align-items:center;justify-content:space-between;font-family:Inter,sans-serif}@media (min-width: 900px){._buttonSpasibo_1klgi_23{width:178px;min-width:178px}}._buttonSpasiboTextWrapper_1klgi_46{display:flex;flex-direction:column;gap:8px;width:100%}._buttonSpasiboBonus_1klgi_53{font-size:14px;font-weight:500;line-height:18px;letter-spacing:-.28px;display:flex;align-items:center;gap:8px}._buttonSpasiboSBS_1klgi_63{color:var(--light-primary);font-size:20px;font-weight:600;line-height:18px;font-family:SB Sans Display,sans-serif}._buttonSpasiboSBS_1klgi_63 img{width:16px;height:16px;margin-left:5px}._buttonSpasiboBonus_1klgi_53 img{width:16px;height:16px}._arrowIcon_1klgi_82 path{stroke:var(--light-arrow)}._buttonSpasiboConnect_1klgi_86{color:var(--light-secondary);font-size:12px;font-style:normal;font-weight:500;line-height:18px;letter-spacing:-.24px}._darkMode_1klgi_95{background:var(--dark-background);color:var(--dark-primary)}._darkMode_1klgi_95 ._buttonSpasiboConnect_1klgi_86{color:var(--dark-secondary)}._darkMode_1klgi_95 ._buttonSpasiboSBS_1klgi_63{color:var(--dark-primary)}._darkMode_1klgi_95 ._arrowIcon_1klgi_82 path{stroke:var(--dark-arrow)}:root{--light-primary: #080808;--light-secondary: rgba(8, 8, 8, .5);--light-background: #eceff2;--light-arrow: #00000052;--dark-primary: #fff;--dark-secondary: rgba(255, 255, 255, .5);--dark-background: #1f1f1f;--dark-arrow: #ffffff52}a,a:link,a:visited,a:hover{text-decoration:none}._buttonPrime_tqtgx_23{width:160px;height:78px;border-radius:16px;background:var(--light-background);color:var(--light-primary);padding:16px;font-family:Inter,sans-serif;box-sizing:border-box;cursor:pointer;display:flex;align-items:center;justify-content:space-between}@media (min-width: 900px){._buttonPrime_tqtgx_23{width:178px;min-width:178px}}._buttonPrimeTextWrapper_tqtgx_47{gap:8px;display:flex;flex-direction:column;width:100%}._buttonPrimePrime_tqtgx_54{font-family:Inter,sans-serif;font-size:14px;font-weight:500;line-height:18px;letter-spacing:-.28px;display:flex;align-items:center;gap:6px}._buttonPrimePrime_tqtgx_54 img{width:16px;height:16px}._buttonPrimeStatus_tqtgx_70{color:var(--light-secondary);font-size:12px;font-weight:500;line-height:18px;letter-spacing:-.24px;font-family:Inter,sans-serif}._zvukDesktopEditButton_tqtgx_79{display:flex;width:137px;height:40px;padding:4px 0;justify-content:center;align-items:center;gap:4px;border-radius:20px;background:var(--light-background)}._arrowIcon_tqtgx_91 svg path{stroke:var(--light-arrow)}._darkMode_tqtgx_95{background:var(--dark-background);color:var(--dark-primary)}._darkMode_tqtgx_95 ._buttonPrimeTextWrapper_tqtgx_47{color:var(--dark-primary)}._darkMode_tqtgx_95 ._buttonPrimeStatus_tqtgx_70{color:var(--dark-secondary)}._darkMode_tqtgx_95 ._arrowIcon_tqtgx_91 svg path{stroke:var(--dark-arrow)}")),document.head.appendChild(t)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();',
        );
        (function (m, b) {
          typeof exports === 'object' && typeof module < 'u'
            ? (module.exports = b())
            : typeof define === 'function' && define.amd
            ? define(b)
            : ((m = typeof globalThis < 'u' ? globalThis : m || self),
              (m.ELK = b()));
        })(this, function () {
          'use strict';
          const m = () =>
              window.matchMedia &&
              window.matchMedia('(prefers-color-scheme: dark)').matches,
            b = ({load: o, clientId: n, partnerProfileUrl: e}) => {
              const t = {
                  title: '',
                  titleIcon: '',
                  description: '',
                  click: {browserUrl: ''},
                },
                a = !0,
                c = fetch(e, {
                  method: 'post',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer
        ${n}`,
                  },
                  body: JSON.stringify({url: o}),
                });
              return c.ok
                ? {
                    isLoading: !1,
                    data: c.json(),
                  }
                : {isLoading: a, data: t};
            },
            P = {
              loader: '_loader_33hqw_1',
              background: '_background_33hqw_1',
              darkMode: '_darkMode_33hqw_20',
            },
            S = () => {
              const o = m(),
                n = document.createElement('div');
              return (
                (n.className = o
                  ? `loader ${P.loader} ${P.darkMode}`
                  : `loader
        ${P.loader}`),
                n
              );
            },
            _ = ({children: o}) => {
              const n = document.createElement('div');
              return n.appendChild(o), n;
            },
            N =
              'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuMzMzMzMgMTJMOS4xMzMxOCA4LjY0MDE4QzkuNDQyMjIgOC4yNjkzNCA5LjQ0MjIyIDcuNzMwNjYgOS4xMzMxOCA3LjM1OTgyTDYuMzMzMzMgNCIgc3Ryb2tlPSIjNjhCMUY4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K',
            W = {
              phoneWrapper: '_phoneWrapper_1grmd_1',
              phoneWrapperSberIdIcon: '_phoneWrapperSberIdIcon_1grmd_23',
              phoneWrapperArrow: '_phoneWrapperArrow_1grmd_33',
            },
            x = o => {
              b(o).then(({data: t}) => {
                const a = document.getElementById('phoneWrapper'),
                  c = document.createElement('span');
                c.className = W.phoneWrapperSberIdIcon;
                const r = document.createElement('img');
                (r.src = t == null ? void 0 : t.icon), c.appendChild(r);
                const s = document.createElement('span');
                s.innerHTML = t.value;
                const d = document.createElement('span');
                d.className = W.phoneWrapperArrow;
                const i = document.createElement('img');
                (i.src = N),
                  d.appendChild(i),
                  (a.innerHTML = ''),
                  a.appendChild(c),
                  a.appendChild(s),
                  a.appendChild(d);
              });
              const n = S(),
                e = document.createElement('div');
              return (
                (e.id = 'phoneWrapper'),
                (e.className = W.phoneWrapper),
                e.appendChild(n),
                _({children: e})
              );
            },
            C =
              'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuMzMzMzMgMTJMOS4xMzMxOCA4LjY0MDE4QzkuNDQyMjIgOC4yNjkzNCA5LjQ0MjIyIDcuNzMwNjYgOS4xMzMxOCA3LjM1OTgyTDYuMzMzMzMgNCIgc3Ryb2tlPSIjMDAwMDAwNTIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=',
            k =
              'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuMzMzMzMgMTJMOS4xMzMxOCA4LjY0MDE4QzkuNDQyMjIgOC4yNjkzNCA5LjQ0MjIyIDcuNzMwNjYgOS4xMzMxOCA3LjM1OTgyTDYuMzMzMzMgNCIgc3Ryb2tlPSIjZmZmZmZmNTIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=',
            l = {
              buttonSpasibo: '_buttonSpasibo_1klgi_23',
              buttonSpasiboTextWrapper: '_buttonSpasiboTextWrapper_1klgi_46',
              buttonSpasiboBonus: '_buttonSpasiboBonus_1klgi_53',
              buttonSpasiboSBS: '_buttonSpasiboSBS_1klgi_63',
              arrowIcon: '_arrowIcon_1klgi_82',
              buttonSpasiboConnect: '_buttonSpasiboConnect_1klgi_86',
              darkMode: '_darkMode_1klgi_95',
            },
            z = o => {
              b(o).then(({data: i}) => {
                const p = document.getElementById('buttonSpasiboBonus'),
                  u = document.getElementById('buttonSpasiboSBS');
                if ('value' in i) {
                  p.innerText = 'Баланс бонусов';
                  const h = document.createElement('img');
                  (h.src = i.currency),
                    (u.innerHTML = `${i.value}`),
                    u.appendChild(h);
                  return;
                }
                const g = document.createElement('img');
                (g.src = i.titleIcon),
                  (p.innerHTML = `${i.title}`),
                  p.appendChild(g),
                  (u.className = l.buttonSpasiboConnect),
                  (u.innerHTML = `${i.description}`);
              });
              const n = m(),
                e = document.createElement('div');
              e.className = n
                ? `${l.buttonSpasibo} ${l.darkMode}`
                : l.buttonSpasibo;
              const t = document.createElement('div');
              t.className = l.buttonSpasiboTextWrapper;
              const a = document.createElement('div');
              (a.id = 'buttonSpasiboBonus'),
                (a.className = l.buttonSpasiboBonus);
              const c = S();
              a.appendChild(c);
              const r = document.createElement('div');
              (r.id = 'buttonSpasiboSBS'), (r.className = l.buttonSpasiboSBS);
              const s = S();
              r.appendChild(s);
              const d = document.createElement('img');
              return (
                (d.src = n ? k : C),
                t.appendChild(a),
                t.appendChild(r),
                e.appendChild(t),
                e.appendChild(d),
                _({children: e})
              );
            },
            M = {
              buttonPrime: '_buttonPrime_tqtgx_23',
              buttonPrimeTextWrapper: '_buttonPrimeTextWrapper_tqtgx_47',
              buttonPrimePrime: '_buttonPrimePrime_tqtgx_54',
              buttonPrimeStatus: '_buttonPrimeStatus_tqtgx_70',
              zvukDesktopEditButton: '_zvukDesktopEditButton_tqtgx_79',
              arrowIcon: '_arrowIcon_tqtgx_91',
              darkMode: '_darkMode_tqtgx_95',
            },
            w = o => {
              b(o).then(({data: i}) => {
                const p = document.getElementById('buttonPrimePrime'),
                  u = document.getElementById('buttonPrimeStatus'),
                  g = document.createElement('img');
                (g.src = i.titleIcon),
                  (p.innerHTML = `${i.title}`),
                  p.appendChild(g),
                  (u.innerText = i.description);
              });
              const n = m(),
                e = document.createElement('div');
              (e.id = 'buttonPrime'),
                (e.className = n
                  ? `${M.buttonPrime} ${M.darkMode}`
                  : M.buttonPrime);
              const t = document.createElement('div');
              t.className = M.buttonPrimeTextWrapper;
              const a = S(),
                c = S(),
                r = document.createElement('div');
              (r.className = M.buttonPrimePrime),
                (r.id = 'buttonPrimePrime'),
                (r.className = M.buttonPrimePrime),
                r.appendChild(a);
              const s = document.createElement('div');
              (s.id = 'buttonPrimeStatus'),
                (s.className = M.buttonPrimeStatus),
                s.appendChild(c);
              const d = document.createElement('img');
              return (
                (d.src = n ? k : C),
                t.appendChild(r),
                t.appendChild(s),
                e.appendChild(t),
                e.appendChild(d),
                _({children: e})
              );
            };
          var I = (o => (
            (o.PhoneWidget = 'PhoneWidget'),
            (o.PrimeWidget = 'PrimeWidget'),
            (o.SpasiboWidget = 'SpasiboWidget'),
            o
          ))(I || {});
          const T = {
            [I.PhoneWidget]: x,
            [I.PrimeWidget]: w,
            [I.SpasiboWidget]: z,
          };

          class j {
            constructor(n) {
              const {
                clientId: e,
                partnerProfileUrl: t,
                themeColorLight: a,
                themeColorDark: c,
                json: r,
              } = n;
              if (r) {
                const {sections: s, property: d} = r;
                s == null ||
                  s.forEach(({type: i, blockId: p, load: u}) => {
                    const g = document.getElementById(p),
                      h = T[I[i]],
                      D = h({load: u, partnerProfileUrl: t, clientId: e});
                    g.appendChild(D);
                  });
              }
            }
          }

          return j;
        });
      })();

      //       alert(json);
    } catch (error) {
      console.error(error);
    }
  };

  getMoviesFromApiAsync();

  alert(window.ELK);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <View class="zvuk">
            <View class="zvukMobile">
              <View class="zvukCoverWrapper">
                {/*<img src="example/cover.png" />*/}
              </View>
              <View class="controlsWrapper">
                <View>{/*<img src="example/button1.png" />*/}</View>
                <View class="rightControls">
                  {/*<img src="example/button2.png" />*/}
                  {/*<img src="example/button3.png" />*/}
                </View>
              </View>
              <View class="zvukAvatarWrapper">
                {/*<img src="example/userImage.png" />*/}
              </View>
              <View class="zvukUserName">
                <Text>Ваня Васильчуков</Text>
              </View>

              <View id="ElkWidgetPhone" />
              <View class="zvukButtonWrapper">
                <View id="ElkWidgetSpasibo" />
                <View id="ElkWidgetPrime" />
              </View>

              <View class="zvukUserStatus">
                <Text>
                  Earth reviving after human extinction is an intriguing piece
                  of art
                </Text>
              </View>

              <View class="zvukUserMetrics">
                <View>
                  <View class="zvukUserMetricsNumber">
                    <Text>128</Text>
                  </View>
                  <View class="zvukUserMetricsText">
                    <Text>Подписчики</Text>
                  </View>
                </View>
                <View>
                  <View class="zvukUserMetricsNumber">
                    <Text>64</Text>
                  </View>
                  <View class="zvukUserMetricsText">
                    <Text>Подписки</Text>
                  </View>
                </View>
              </View>
            </View>

            <View class="zvukDesktop">
              <View class="zvukDesktopSidebar" />
              <View class="zvukDesktopMain">
                <View class="zvukDesktopControls">
                  <View class="zvukDesktopSearch" />
                  <View class="zvukDesktopMediaWrapper">
                    <View class="zvukDesktopMedia">
                      <Text>Перенести медиатеку</Text>
                    </View>
                    <View class="zvukDesktopControlsAva" />
                  </View>
                </View>

                <View class="zvukDesktopUserImage">
                  {/*<img src="example/coverDesktop.png" />*/}
                </View>

                <View class="zvukDesktopAvatar">
                  {/*<img src="example/userImage.png" />*/}
                </View>

                <View class="zvukDesktopUserInfoWrapper">
                  <View class="zvukDesktopUserInfo">
                    <View class="zvukUserNameDesktopWrapper">
                      <View class="zvukUserNameDesktop">
                        <View>
                          <Text>Ваня Васильчуков</Text>
                        </View>
                        <View id="sbid_149487961538858600" />
                      </View>
                      <View class="zvukDesktopEditButton">
                        <Text>Редактировать</Text>
                      </View>
                      <View>{/*<img src="example/button4.png" />*/}</View>
                    </View>
                    <View class="zvukUserStatusDesktop">
                      <Text>
                        Earth reviving after human extinction is an intriguing
                        piece of art
                      </Text>
                    </View>
                    <View class="zvukUserSubsscribersDesktop">
                      <Text>Подписчики: 128 • Подписки: 64</Text>
                    </View>
                  </View>
                  <View class="zvukDesktopButtonsWrapper">
                    <View id="sbid_388149487965860015" />
                    <View id="sbid_48796153885843149" />
                  </View>
                </View>

                <View class="zvukDesktopPlaylistWrapper">
                  <View class="zvukDesktopPlaylistsTitle">
                    <Text>Публичные плейлисты</Text>
                  </View>
                  <View class="zvukDesktopPlaylists">
                    <View class="zvukDesktopPlaylist">
                      <View class="zvukDesktopPlaylistImage" />
                      <View class="zvukDesktopPlaylistTitle">
                        <Text>Русский метал</Text>
                      </View>
                      <View class="zvukDesktopPlaylistDescription">
                        <Text>Главные исполнители тяжелой музыки в России</Text>
                      </View>
                    </View>
                    <View class="zvukDesktopPlaylist">
                      <View class="zvukDesktopPlaylistImage" />
                      <View class="zvukDesktopPlaylistTitle">
                        <Text>Русский метал</Text>
                      </View>
                      <View class="zvukDesktopPlaylistDescription">
                        <Text>Главные исполнители тяжелой музыки в России</Text>
                      </View>
                    </View>
                    <View class="zvukDesktopPlaylist">
                      <View class="zvukDesktopPlaylistImage" />
                      <View class="zvukDesktopPlaylistTitle">
                        <Text>Русский метал</Text>
                      </View>
                      <View class="zvukDesktopPlaylistDescription">
                        <Text>Главные исполнители тяжелой музыки в России</Text>
                      </View>
                    </View>
                    <View class="zvukDesktopPlaylist">
                      <View class="zvukDesktopPlaylistImage" />
                      <View class="zvukDesktopPlaylistTitle">
                        <Text>Русский метал</Text>
                      </View>
                      <View class="zvukDesktopPlaylistDescription">
                        <Text>Главные исполнители тяжелой музыки в России</Text>
                      </View>
                    </View>
                    <View class="zvukDesktopPlaylist">
                      <View class="zvukDesktopPlaylistImage" />
                      <View class="zvukDesktopPlaylistTitle">
                        <Text>Русский метал</Text>
                      </View>
                      <View class="zvukDesktopPlaylistDescription">
                        <Text>Главные исполнители тяжелой музыки в России</Text>
                      </View>
                    </View>
                    <View class="zvukDesktopPlaylist">
                      <View class="zvukDesktopPlaylistImage" />
                      <View class="zvukDesktopPlaylistTitle">
                        <Text>Русский метал</Text>
                      </View>
                      <View class="zvukDesktopPlaylistDescription">
                        <Text>Главные исполнители тяжелой музыки в России</Text>
                      </View>
                    </View>
                    <View class="zvukDesktopPlaylist">
                      <View class="zvukDesktopPlaylistImage" />
                      <View class="zvukDesktopPlaylistTitle">
                        <Text>Русский метал</Text>
                      </View>
                      <View class="zvukDesktopPlaylistDescription">
                        <Text>Главные исполнители тяжелой музыки в России</Text>
                      </View>
                    </View>
                    <View class="zvukDesktopPlaylist">
                      <View class="zvukDesktopPlaylistImage" />
                      <View class="zvukDesktopPlaylistTitle">
                        <Text>Русский метал</Text>
                      </View>
                      <View class="zvukDesktopPlaylistDescription">
                        <Text>Главные исполнители тяжелой музыки в России</Text>
                      </View>
                    </View>
                    <View class="zvukDesktopPlaylist">
                      <View class="zvukDesktopPlaylistImage" />
                      <View class="zvukDesktopPlaylistTitle">
                        <Text>Русский метал</Text>
                      </View>
                      <View class="zvukDesktopPlaylistDescription">
                        <Text>Главные исполнители тяжелой музыки в России</Text>
                      </View>
                    </View>
                    <View class="zvukDesktopPlaylist">
                      <View class="zvukDesktopPlaylistImage" />
                      <View class="zvukDesktopPlaylistTitle">
                        <Text>Русский метал</Text>
                      </View>
                      <View class="zvukDesktopPlaylistDescription">
                        <Text>Главные исполнители тяжелой музыки в России</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
