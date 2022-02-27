var themeName = "SoftX Theme"
var themeDesc = "A soft and comfy feel for Discord"
/* Author: Gibbu#1211 */
injecttheme("CTH", `
* {
  --hue: 0deg;
  --saturation: 0%;
  --lightness: 10%;
  --transition: .15s ease;
  --chat-glow-intensity: var(--glow-intensity);
  --channel-glow-intensity: var(--glow-intensity);
  --members-glow-intensity: var(--glow-intensity);
  --input-glow-intensity: var(--glow-intensity);
  --server-glow-intensity: var(--glow-intensity);
  --talking-bar: rgb(var(--accent));
  --talking-glow: rgb(var(--accent));
  --blur: 10px;
  --TB-height: calc(var(--toolbar-height) - 1px);
  --TB-width: 40px;
  --TB-header-padding: 155px;
  --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.06);
  --shadow-lg: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04);
  --border: hsl(var(--hue) var(--saturation) calc(var(--lightness) / 2) / .6);
  --bg-primary: hsl(var(--hue) var(--saturation) var(--lightness) / calc(var(--opacity) + .05));
  --bg-secondary: hsl(var(--hue) var(--saturation) var(--lightness) / calc(var(--opacity) + .1));
  --bg-tertiary: hsl(var(--hue) var(--saturation) var(--lightness) / calc(var(--opacity) + .15));
  --chat-bubble-bg: rgba(255, 255, 255, 0.03);
  --chat-bubble-bg-self: rgb(var(--accent), 0.15);
  --chat-bubble-padding: 10px 14px;
  --chat-bubble-display: inline-block;
  --user-area: calc(var(--server-size) + 175px);
  --toolbar-height: 74px;
  --server-spacing: 16px;
  --guild-scrollbar: none;
  --unread-colour: 255 255 255;
  --server-unread-colour: var(--unread-colour);
  --server-hover-colour: 255 255 255;
  --backdrop-background: var(--bg-primary);
  --backdrop-blur: 10px;
  --channel-height: 40px;
  --member-height: 54px;
  --dm-height: 56px;
  --scrollbar-background: rgb(255 255 255 / .05);
  --scrollbar-background-hover: rgb(255 255 255 / .1);
  --scrollbar-background-active: rgb(255 255 255 / .15);
  --input-background: rgb(18 18 18 / .7);
  --input-border: rgb(255 255 255 / .05);
  --discord-red: 359 calc(var(--saturation-factor, 1) * 82.6%) 59.4%;
  --discord-green: 139 calc(var(--saturation-factor, 1) * 47.3%) 43.9%;
  --settings-sidebar-width: 300px;
  --settings-content-width: 900px;
  --settings-max-height: 800px;
  --settings-max-width: calc(var(--settings-sidebar-width) + var(--settings-content-width));
  --text-link: rgb(var(--accent));
  --channels-default: #aaa;
  --background-modifier-hover: rgb(255 255 255 / .05);
  --background-modifier-active: rgb(255 255 255 / .08);
  --brand-experiment: rgb(var(--accent), .35);
  --brand-experiment-560: rgb(var(--accent), .55);
  --brand-experiment-600: rgb(var(--accent), .4);
}

html, span:not([class*=spinner-]):not([class*=spinnerItem]) {
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
}

body,
#app-mount,
.app-2CXKsg {
  background: transparent;
}

.bg-1QIAus {
  background-image: var(--background-image);
  background-color: transparent;
  background-attachment: var(--background-attachment, fixed);
  background-size: var(--background-size, cover);
  background-position: var(--background-position, center);
  filter: blur(var(--background-blur, 0px)) hue-rotate(var(--background-hue, 0deg));
}

.content-1jQy2l::before {
  content: none;
}

html.theme-light .app-2CXKsg::after {
  content: "SoftX is not build for Lightmode.\aPlease switch to Dark mode in your Discord Appearance Settings.";
  line-height: 1.5;
  white-space: pre-wrap;
  border-top: 1px solid var(--border);
  background: var(--bg-secondary);
  z-index: 1;
  padding: 16px;
  color: #fff;
}
html.theme-light .container-YkUktl {
  bottom: 81px !important;
}

.full-motion [class*=animator] {
  transform: none !important;
  transition: none !important;
}

.layer-86YKbF.baseLayer-W6S8cY {
  transform: scale(1) !important;
  opacity: 1 !important;
}

[aria-label=USER_SETTINGS] .info-1sUqUG > span:first-child::before {
  display: block;
  content: "SoftX v" var(--softx-version);
}

#app-mount .container-ZMc96U {
  background: var(--bg-primary);
  height: var(--toolbar-height);
  padding-left: 24px;
  border-bottom: 1px solid var(--border);
}
#app-mount .container-ZMc96U path[d="M5.43309 21C5.35842 21 5.30189 20.9325 5.31494 20.859L5.99991 17H2.14274C2.06819 17 2.01168 16.9327 2.02453 16.8593L2.33253 15.0993C2.34258 15.0419 2.39244 15 2.45074 15H6.34991L7.40991 9H3.55274C3.47819 9 3.42168 8.93274 3.43453 8.85931L3.74253 7.09931C3.75258 7.04189 3.80244 7 3.86074 7H7.75991L8.45234 3.09903C8.46251 3.04174 8.51231 3 8.57049 3H10.3267C10.4014 3 10.4579 3.06746 10.4449 3.14097L9.75991 7H15.7599L16.4523 3.09903C16.4625 3.04174 16.5123 3 16.5705 3H18.3267C18.4014 3 18.4579 3.06746 18.4449 3.14097L17.7599 7H21.6171C21.6916 7 21.7481 7.06725 21.7353 7.14069L21.4273 8.90069C21.4172 8.95811 21.3674 9 21.3091 9H17.4099L17.0495 11.04H15.05L15.4104 9H9.41035L8.35035 15H10.5599V17H7.99991L7.30749 20.901C7.29732 20.9583 7.24752 21 7.18934 21H5.43309Z"] {
  d: path("M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z");
  fill: transparent;
  stroke: var(--interactive-normal);
  stroke-width: 2px;
}
#app-mount .container-ZMc96U path[d="M5.43309 21C5.35842 21 5.30189 20.9325 5.31494 20.859L5.99991 17H2.14274C2.06819 17 2.01168 16.9327 2.02453 16.8593L2.33253 15.0993C2.34258 15.0419 2.39244 15 2.45074 15H6.34991L7.40991 9H3.55274C3.47819 9 3.42168 8.93274 3.43453 8.85931L3.74253 7.09931C3.75258 7.04189 3.80244 7 3.86074 7H7.75991L8.45234 3.09903C8.46251 3.04174 8.51231 3 8.57049 3H10.3267C10.4014 3 10.4579 3.06746 10.4449 3.14097L9.75991 7H15.7599L16.4523 3.09903C16.4625 3.04174 16.5123 3 16.5705 3H18.3267C18.4014 3 18.4579 3.06746 18.4449 3.14097L17.7599 7H21.6171C21.6916 7 21.7481 7.06725 21.7353 7.14069L21.4273 8.90069C21.4172 8.95811 21.3674 9 21.3091 9H17.4099L17.0495 11.04H15.05L15.4104 9H9.41035L8.35035 15H10.5599V17H7.99991L7.30749 20.901C7.29732 20.9583 7.24752 21 7.18934 21H5.43309Z"] + path {
  display: none;
}
#app-mount .container-ZMc96U path[d="M18 9V14C18 15.657 19.344 17 21 17V18H3V17C4.656 17 6 15.657 6 14V9C6 5.686 8.686 3 12 3C15.314 3 18 5.686 18 9ZM11.9999 21C10.5239 21 9.24793 20.19 8.55493 19H15.4449C14.7519 20.19 13.4759 21 11.9999 21Z"] {
  fill: transparent;
  stroke: var(--interactive-normal);
  stroke-width: 2px;
  d: path("M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9");
}
#app-mount .container-ZMc96U path[d="M22 12L12.101 2.10101L10.686 3.51401L12.101 4.92901L7.15096 9.87801V9.88001L5.73596 8.46501L4.32196 9.88001L8.56496 14.122L2.90796 19.778L4.32196 21.192L9.97896 15.536L14.222 19.778L15.636 18.364L14.222 16.95L19.171 12H19.172L20.586 13.414L22 12Z"] {
  d: path("M4.456.734a1.75 1.75 0 012.826.504l.613 1.327a3.081 3.081 0 002.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 11-1.061 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.081 3.081 0 00-1.707-2.084l-1.327-.613a1.75 1.75 0 01-.504-2.826L4.456.734zM5.92 1.866a.25.25 0 00-.404-.072L1.794 5.516a.25.25 0 00.072.404l1.328.613A4.582 4.582 0 015.73 9.63l.584 2.454a.25.25 0 00.42.12l5.47-5.47a.25.25 0 00-.12-.42L9.63 5.73a4.581 4.581 0 01-3.098-2.537L5.92 1.866z");
  transform: translate(-6px, 6px) scale(-1.3522, 1.3522);
  transform-origin: center;
}
#app-mount .container-ZMc96U path[d="M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"] {
  fill: transparent;
  stroke: var(--interactive-normal);
  stroke-width: 2px;
  d: path("M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z");
}
#app-mount .container-ZMc96U path[d="M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"] ~ path {
  display: none;
}
#app-mount .container-ZMc96U path[d="M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z"] {
  fill: transparent;
  stroke: var(--interactive-normal);
  stroke-width: 2px;
  d: path("M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4");
}
#app-mount .toolbar-3_r2xA {
  margin-left: 24px;
}
#app-mount .toolbar-3_r2xA .iconWrapper-2awDjA {
  order: 1;
  margin: 0 24px 0 0;
}
#app-mount .toolbar-3_r2xA .iconWrapper-2awDjA .iconBadge-3Mmg92 {
  border-radius: 50%;
  box-shadow: 0 0 calc(var(--glow-intensity) * 10px) calc(var(--glow-intensity) * 1px) hsl(var(--discord-red));
}
#app-mount .toolbar-3_r2xA .iconWrapper-2awDjA.selected-29KTGM {
  filter: drop-shadow(0 0 calc(var(--glow-intensity) * 8px) rgb(var(--accent), 0.35)) drop-shadow(0 0 calc(var(--glow-intensity) * 2px) rgb(var(--accent), 0.35));
}
#app-mount .toolbar-3_r2xA .iconWrapper-2awDjA.selected-29KTGM svg path {
  stroke: rgb(var(--accent));
}
#app-mount .toolbar-3_r2xA a[href="https://support.discord.com"] {
  display: none;
}
#app-mount .toolbar-3_r2xA > :last-child {
  margin-right: 24px;
}
#app-mount .children-3xh0VB {
  height: 100%;
}
#app-mount .children-3xh0VB .iconWrapper-2awDjA {
  grid-area: icon;
  margin-left: 0;
}
#app-mount .children-3xh0VB .title-17SveM {
  margin-right: 24px;
}
#app-mount .children-3xh0VB .topic-11NuQZ {
  grid-area: bottom;
}
#app-mount .children-3xh0VB .status-12NUUC {
  margin-right: 0;
}
#app-mount .children-3xh0VB .status-12NUUC::after {
  content: attr(aria-label);
  margin-left: 8px;
  font-size: 13px;
  color: var(--text-normal);
}
#app-mount .children-3xh0VB .status-12NUUC svg {
  width: 16px;
  height: 16px;
}
#app-mount .children-3xh0VB .divider-q3P9HC {
  display: none;
}
#app-mount .children-3xh0VB::after {
  content: none;
}
#app-mount .tabBar-ra-EuL {
  height: 100%;
}
#app-mount .tabBar-ra-EuL .item-3mHhwr {
  border-radius: 0;
  background: transparent !important;
  overflow: visible;
  margin: 0;
  color: var(--interactive-normal) !important;
}
#app-mount .tabBar-ra-EuL .item-3mHhwr:hover {
  background: var(--background-modifier-hover) !important;
  color: var(--interactive-hover) !important;
}
#app-mount .tabBar-ra-EuL .item-3mHhwr.selected-g-kMVV, #app-mount .tabBar-ra-EuL .item-3mHhwr[aria-selected=true] {
  background: var(--background-modifier-active) !important;
  color: var(--interactive-active) !important;
}
#app-mount .tabBar-ra-EuL .item-3mHhwr.selected-g-kMVV::before, #app-mount .tabBar-ra-EuL .item-3mHhwr[aria-selected=true]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: #fff;
  box-shadow: 0 0 calc(var(--glow-intensity) * 10px) calc(var(--glow-intensity) * 2px) rgba(255, 255, 255, 0.2);
}
#app-mount .threadSidebarOpen-1LSXvU .container-ZMc96U {
  border-right: 1px solid var(--border);
}

.members-3WRCEx,
.peopleList-2VBrVI,
.sidebarRegionScroller-FXiQOh,
.contentRegionScroller-2_GT_N,
.customScroller-m1-jZn,
.list-1AJFv_,
[class*=scrollerBase-],
.container-2McqkF {
  overflow: hidden overlay !important;
}
.members-3WRCEx::-webkit-scrollbar,
.peopleList-2VBrVI::-webkit-scrollbar,
.sidebarRegionScroller-FXiQOh::-webkit-scrollbar,
.contentRegionScroller-2_GT_N::-webkit-scrollbar,
.customScroller-m1-jZn::-webkit-scrollbar,
.list-1AJFv_::-webkit-scrollbar,
[class*=scrollerBase-]::-webkit-scrollbar,
.container-2McqkF::-webkit-scrollbar {
  width: 8px;
  display: none;
  background: transparent !important;
}
.members-3WRCEx::-webkit-scrollbar-track,
.peopleList-2VBrVI::-webkit-scrollbar-track,
.sidebarRegionScroller-FXiQOh::-webkit-scrollbar-track,
.contentRegionScroller-2_GT_N::-webkit-scrollbar-track,
.customScroller-m1-jZn::-webkit-scrollbar-track,
.list-1AJFv_::-webkit-scrollbar-track,
[class*=scrollerBase-]::-webkit-scrollbar-track,
.container-2McqkF::-webkit-scrollbar-track {
  margin: 0;
}
.members-3WRCEx::-webkit-scrollbar-track-piece,
.peopleList-2VBrVI::-webkit-scrollbar-track-piece,
.sidebarRegionScroller-FXiQOh::-webkit-scrollbar-track-piece,
.contentRegionScroller-2_GT_N::-webkit-scrollbar-track-piece,
.customScroller-m1-jZn::-webkit-scrollbar-track-piece,
.list-1AJFv_::-webkit-scrollbar-track-piece,
[class*=scrollerBase-]::-webkit-scrollbar-track-piece,
.container-2McqkF::-webkit-scrollbar-track-piece {
  background: transparent;
  border-color: transparent;
}
.members-3WRCEx::-webkit-scrollbar-thumb,
.peopleList-2VBrVI::-webkit-scrollbar-thumb,
.sidebarRegionScroller-FXiQOh::-webkit-scrollbar-thumb,
.contentRegionScroller-2_GT_N::-webkit-scrollbar-thumb,
.customScroller-m1-jZn::-webkit-scrollbar-thumb,
.list-1AJFv_::-webkit-scrollbar-thumb,
[class*=scrollerBase-]::-webkit-scrollbar-thumb,
.container-2McqkF::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-background);
  border-radius: 0;
  border-radius: var(--border-radius);
  border: none;
}
.members-3WRCEx::-webkit-scrollbar-thumb:hover,
.peopleList-2VBrVI::-webkit-scrollbar-thumb:hover,
.sidebarRegionScroller-FXiQOh::-webkit-scrollbar-thumb:hover,
.contentRegionScroller-2_GT_N::-webkit-scrollbar-thumb:hover,
.customScroller-m1-jZn::-webkit-scrollbar-thumb:hover,
.list-1AJFv_::-webkit-scrollbar-thumb:hover,
[class*=scrollerBase-]::-webkit-scrollbar-thumb:hover,
.container-2McqkF::-webkit-scrollbar-thumb:hover {
  background-color: var(--scrollbar-background-hover);
}
.members-3WRCEx::-webkit-scrollbar-thumb:active,
.peopleList-2VBrVI::-webkit-scrollbar-thumb:active,
.sidebarRegionScroller-FXiQOh::-webkit-scrollbar-thumb:active,
.contentRegionScroller-2_GT_N::-webkit-scrollbar-thumb:active,
.customScroller-m1-jZn::-webkit-scrollbar-thumb:active,
.list-1AJFv_::-webkit-scrollbar-thumb:active,
[class*=scrollerBase-]::-webkit-scrollbar-thumb:active,
.container-2McqkF::-webkit-scrollbar-thumb:active {
  background-color: var(--scrollbar-background-active);
}
.members-3WRCEx::-webkit-scrollbar-button, .members-3WRCEx::-webkit-scrollbar-corner,
.peopleList-2VBrVI::-webkit-scrollbar-button,
.peopleList-2VBrVI::-webkit-scrollbar-corner,
.sidebarRegionScroller-FXiQOh::-webkit-scrollbar-button,
.sidebarRegionScroller-FXiQOh::-webkit-scrollbar-corner,
.contentRegionScroller-2_GT_N::-webkit-scrollbar-button,
.contentRegionScroller-2_GT_N::-webkit-scrollbar-corner,
.customScroller-m1-jZn::-webkit-scrollbar-button,
.customScroller-m1-jZn::-webkit-scrollbar-corner,
.list-1AJFv_::-webkit-scrollbar-button,
.list-1AJFv_::-webkit-scrollbar-corner,
[class*=scrollerBase-]::-webkit-scrollbar-button,
[class*=scrollerBase-]::-webkit-scrollbar-corner,
.container-2McqkF::-webkit-scrollbar-button,
.container-2McqkF::-webkit-scrollbar-corner {
  display: none !important;
}
.members-3WRCEx:hover::-webkit-scrollbar,
.peopleList-2VBrVI:hover::-webkit-scrollbar,
.sidebarRegionScroller-FXiQOh:hover::-webkit-scrollbar,
.contentRegionScroller-2_GT_N:hover::-webkit-scrollbar,
.customScroller-m1-jZn:hover::-webkit-scrollbar,
.list-1AJFv_:hover::-webkit-scrollbar,
[class*=scrollerBase-]:hover::-webkit-scrollbar,
.container-2McqkF:hover::-webkit-scrollbar {
  display: block;
}

#app-mount .tooltipPrimary-3qLMbS {
  background: var(--bg-primary);
  border: 1px solid var(--border);
  -webkit-backdrop-filter: blur(2px);
          backdrop-filter: blur(2px);
  box-shadow: none;
}

.platform-osx .typeMacOS-3V4xXE {
  width: var(--guilds-width);
  background: var(--bg-primary);
  border-right: 1px solid var(--border);
}
.platform-osx .macButtons-eIdy0e {
  width: 100%;
  padding: 10px 18px;
}
.platform-osx #app-mount .guilds-2JjMmN .scroller-3X7KbA {
  padding-top: 6px;
}

#app-mount .notice-2HEN-u {
  border-radius: 0;
}
#app-mount .closeButton-30b1gR {
  left: 0;
  height: 100%;
}

#app-mount .sizeSmall-2cSMqn {
  height: 36px;
}
#app-mount .button-1EGGcP.lookFilled-1Gx00P.colorBrand-3pXr91 {
  background: rgba(255, 255, 255, 0.1);
}

#app-mount .sliderContainer-2nidiS {
  padding: 0;
}
#app-mount .bar-1Bhnl9 {
  background: rgba(255, 255, 255, 0.25);
}
#app-mount .barFill-2Bh7CX {
  background: rgb(var(--accent));
}

#app-mount .input-2g-os5:not(.multiInput-1VARjC):not(.multiInputField-1zyopx),
#app-mount .input-2g-os5.multiInput-1VARjC {
  padding: 10px 16px;
  height: auto;
  border: 2px solid transparent;
  background: var(--input-background);
  border-radius: 6px;
  transition: var(--transition);
  transition-property: border-color, box-shadow;
  color: var(--text-normal);
}
#app-mount .input-2g-os5:not(.multiInput-1VARjC):not(.multiInputField-1zyopx):hover,
#app-mount .input-2g-os5.multiInput-1VARjC:hover {
  border-color: var(--input-border);
}
#app-mount .input-2g-os5:not(.multiInput-1VARjC):not(.multiInputField-1zyopx):focus-within,
#app-mount .input-2g-os5.multiInput-1VARjC:focus-within {
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--input-glow-intensity) * 12px) calc(var(--input-glow-intensity) * 2px) rgb(var(--accent), 0.25);
}
#app-mount .multiInputLast-35zVz0::before {
  content: none;
}
#app-mount .inputWrapper-BB4B- .inputPrefix-1HHwWv {
  top: 14px;
  left: 12px;
  pointer-events: none;
}
#app-mount .inputWrapper-BB4B- .inputPrefix-1HHwWv + .input-2g-os5:not(.multiInput-1VARjC):not(.multiInputField-1zyopx) {
  padding-left: 38px;
}

#app-mount [role=radiogroup][aria-orientation=vertical] {
  border: 1px solid var(--border);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.02);
}
#app-mount .itemFilled-1cPbtg {
  background: transparent;
  margin-bottom: 0;
}
#app-mount .itemFilled-1cPbtg .icon-1ykL9s {
  display: none;
}
#app-mount .itemFilled-1cPbtg:first-child {
  border-radius: 6px 6px 0 0;
}
#app-mount .itemFilled-1cPbtg:first-child .radioBar-3w9XY-::before {
  border-top-left-radius: 6px;
}
#app-mount .itemFilled-1cPbtg:last-child {
  border-radius: 0 0 6px 6px;
}
#app-mount .itemFilled-1cPbtg:last-child .radioBar-3w9XY-::before {
  border-bottom-left-radius: 6px;
}
#app-mount .itemFilled-1cPbtg:not(:last-child) {
  border-bottom: 1px solid var(--border);
}
#app-mount .itemFilled-1cPbtg[aria-checked=true] .radioBar-3w9XY- [class*=size] {
  color: var(--radio-bar-colour);
  text-shadow: 0 0 calc(var(--glow-intensity) * 10px) var(--radio-bar-colour);
}
#app-mount .itemFilled-1cPbtg[aria-checked=true] .radioBar-3w9XY- path {
  color: var(--interactive-active);
}
#app-mount .itemFilled-1cPbtg[aria-checked=true] .radioBar-3w9XY- circle {
  color: var(--radio-bar-colour);
}
#app-mount .itemFilled-1cPbtg[aria-checked=true] .radioBar-3w9XY-::before {
  opacity: 1;
}
#app-mount .radioBar-3w9XY- {
  --radio-bar-colour: var(--radio-bar-accent-color, rgb(var(--accent)));
  background: transparent;
  border-radius: 0;
  padding: 10px 10px 10px 16px !important;
  border: none !important;
  position: relative;
  grid-gap: 16px;
}
#app-mount .radioBar-3w9XY-::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 3px;
  background: var(--radio-bar-colour);
  opacity: 0;
  box-shadow: 0 0 calc(var(--glow-intensity) * 12px) var(--radio-bar-colour);
}

#app-mount .select-1Ia3hD {
  border: 2px solid transparent;
  background: var(--input-background);
  transition: var(--transition);
  transition-property: border-color, box-shadow;
}
#app-mount .select-1Ia3hD:hover {
  border-color: var(--input-border);
}
#app-mount .select-1Ia3hD.open-1FRZsK {
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--input-glow-intensity) * 12px) calc(var(--input-glow-intensity) * 2px) rgb(var(--accent), 0.25);
}
#app-mount .popout-1KHNAq {
  border: 1px solid var(--border);
  border-radius: 0 0 6px 6px;
  background: var(--bg-primary);
  -webkit-backdrop-filter: blur(var(--blur));
          backdrop-filter: blur(var(--blur));
}
#app-mount .option-2eIyOn {
  position: relative;
  padding: 12px 18px;
}
#app-mount .option-2eIyOn .selectedIcon-19TbzU {
  color: rgb(var(--accent));
  filter: drop-shadow(0 0 calc(var(--glow-intensity) * 5px) rgb(var(--accent), 0.35));
}
#app-mount .option-2eIyOn:hover, #app-mount .option-2eIyOn:focus, #app-mount .option-2eIyOn.focused-ODgjnC {
  background: var(--background-modifier-hover);
}
#app-mount .option-2eIyOn[aria-selected=true] {
  background: rgb(var(--accent), 0.1);
  color: rgb(var(--accent));
  text-shadow: 0 0 calc(var(--glow-intensity) * 10px) rgb(var(--accent));
}
#app-mount .option-2eIyOn[aria-selected=true]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
  background: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--glow-intensity) * 10px) rgb(var(--accent));
}
#app-mount .deviceOption-MlVM0P {
  overflow: visible;
}

#app-mount .container-2nx-BQ {
  background: transparent !important;
  width: 46px;
  height: 22px;
}
#app-mount .container-2nx-BQ svg {
  display: none;
}
#app-mount .container-2nx-BQ input {
  display: inline-flex;
  align-items: center;
  opacity: 1;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  width: 46px;
  height: 22px;
  border-radius: 20px;
  margin: 0;
  padding: 0 6px;
  cursor: var(--cursor);
  background: rgba(255, 255, 255, 0.2);
  transition: background 0.15s ease, border-color 0.15s ease;
}
#app-mount .container-2nx-BQ input::before {
  content: "";
  width: 14px;
  height: 14px;
  border-radius: 7px;
  display: block;
  background: #fff;
  transition: background 0.15s ease, transform 0.15s ease, width 0.15s ease, height 0.15s ease;
}
#app-mount .container-2nx-BQ input:hover:not(:checked) {
  background: rgba(255, 255, 255, 0.15) !important;
}
#app-mount .container-2nx-BQ input:hover::before {
  width: 16px;
  height: 16px;
}
#app-mount .container-2nx-BQ input:active::before {
  width: 18px;
}
#app-mount .container-2nx-BQ input:checked {
  background: rgb(var(--accent));
  border-color: rgb(var(--accent));
}
#app-mount .container-2nx-BQ input:checked::before {
  background: #000;
  transform: translateX(22px);
}
#app-mount .container-2nx-BQ input:checked:hover {
  box-shadow: inset 0 0 0 100vmax rgba(0, 0, 0, 0.12);
  border-color: rgba(0, 0, 0, 0.12);
}
#app-mount .container-2nx-BQ input:checked:active::before {
  transform: translateX(18px);
}

#app-mount .checkbox-f1HnKB {
  border-radius: 6px;
}
#app-mount .checkbox-f1HnKB path[fill^="hsl(139"] {
  fill: rgb(var(--accent));
}
#app-mount .checkbox-f1HnKB path[fill^="hsl(235"] {
  fill: #fff;
}
#app-mount .checkbox-f1HnKB[style*="var(--control-brand-foreground)"] {
  background: rgb(var(--accent), 0.4) !important;
  border-color: transparent !important;
}

#app-mount .guilds-2JjMmN {
  width: var(--guilds-width);
  border-right: 1px solid var(--border);
  background: var(--bg-primary);
}
#app-mount .guilds-2JjMmN .scroller-3X7KbA {
  background: transparent;
  padding: 18px 0;
  -webkit-mask: radial-gradient(circle at top, black, black 95%, transparent) !important;
          mask: radial-gradient(circle at top, black, black 95%, transparent) !important;
}
#app-mount .guilds-2JjMmN .scroller-3X7KbA:hover::-webkit-scrollbar {
  display: var(--guild-scrollbar);
}
#app-mount .guilds-2JjMmN.hidden-10MsGQ {
  display: none;
}
#app-mount .guildSeparator-2ULOMe {
  height: 1px;
  background: var(--border);
  width: var(--server-size);
}

#app-mount .scroller-3X7KbA > div[style]:not([class]) {
  margin-bottom: var(--server-spacing);
}
#app-mount .listItem-3SmSlK {
  width: 100%;
  margin-bottom: var(--server-spacing);
}
#app-mount .blobContainer-ikKyFs,
#app-mount .listItemWrapper-3d87LP {
  transition: var(--transition);
  transition-property: transform;
}
#app-mount .blobContainer-ikKyFs:active,
#app-mount .listItemWrapper-3d87LP:active {
  transform: scale(0.9);
}
#app-mount .wrapper-28eC3z {
  width: var(--server-size);
  height: var(--server-size);
}
#app-mount .svg-2zuE5p {
  width: var(--server-size);
  height: var(--server-size);
}
#app-mount .svg-2zuE5p foreignObject {
  border-radius: var(--server-roundness, 50%);
  -webkit-mask: none !important;
          mask: none !important;
}
#app-mount .childWrapper-1j_1ub,
#app-mount .circleIconButton-1VxDrg {
  background: rgba(255, 255, 255, 0.1);
}
#app-mount .wrapper-3kah-n.selected-1Drb7Z,
#app-mount .circleIconButton-1VxDrg:hover {
  background: rgba(255, 255, 255, 0.15);
}
#app-mount .circleIconButton-1VxDrg.selected-2r1Hvo path {
  fill: rgb(var(--accent));
}
#app-mount .wrapper-z5ab_q {
  width: 100%;
  height: 100%;
  overflow: visible;
}
#app-mount [class*=pill] {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: calc(var(--server-size) + 8px);
  height: calc(var(--server-size) + 8px);
  overflow: visible;
  margin-left: -2px;
}
#app-mount [class*=pill] .item-2LIpTv {
  height: 100% !important;
  width: 100%;
  margin: 0;
  border-radius: var(--server-roundness, 50%);
  background: transparent;
  border: 2px solid transparent;
  box-shadow: none;
  transform: none !important;
  transition: var(--transition);
  transition-property: box-shadow;
}
#app-mount [class*=pill] span[style*="height: 0"] {
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--server-unread-colour)/0.25);
  border-color: rgb(var(--server-unread-colour));
}
#app-mount [class*=pill] span[style*="height: 1"] {
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--server-unread-colour)/0.25);
  border-color: rgb(var(--server-unread-colour));
}
#app-mount [class*=pill] span[style*="height: 2"] {
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--server-unread-colour)/0.25);
  border-color: rgb(var(--server-unread-colour));
}
#app-mount [class*=pill] span[style*="height: 3"] {
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--server-unread-colour)/0.25);
  border-color: rgb(var(--server-unread-colour));
}
#app-mount [class*=pill] span[style*="height: 4"] {
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--server-unread-colour)/0.25);
  border-color: rgb(var(--server-unread-colour));
}
#app-mount [class*=pill] span[style*="height: 5"] {
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--server-unread-colour)/0.25);
  border-color: rgb(var(--server-unread-colour));
}
#app-mount [class*=pill] span[style*="height: 6"] {
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--server-unread-colour)/0.25);
  border-color: rgb(var(--server-unread-colour));
}
#app-mount [class*=pill] span[style*="height: 7"] {
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--server-unread-colour)/0.25);
  border-color: rgb(var(--server-unread-colour));
}
#app-mount [class*=pill] span[style*="height: 8"] {
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--server-unread-colour)/0.25);
  border-color: rgb(var(--server-unread-colour));
}
#app-mount [class*=pill] span[style*="height: 9"] {
  border-color: rgb(var(--server-hover-colour));
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--server-hover-colour)/0.25);
}
#app-mount [class*=pill] span[style*="height: 10"] {
  border-color: rgb(var(--server-hover-colour));
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--server-hover-colour)/0.25);
}
#app-mount [class*=pill] span[style*="height: 11"] {
  border-color: rgb(var(--server-hover-colour));
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--server-hover-colour)/0.25);
}
#app-mount [class*=pill] span[style*="height: 12"] {
  border-color: rgb(var(--server-hover-colour));
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--server-hover-colour)/0.25);
}
#app-mount [class*=pill] span[style*="height: 13"] {
  border-color: rgb(var(--server-hover-colour));
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--server-hover-colour)/0.25);
}
#app-mount [class*=pill] span[style*="height: 14"] {
  border-color: rgb(var(--server-hover-colour));
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--server-hover-colour)/0.25);
}
#app-mount [class*=pill] span[style*="height: 15"] {
  border-color: rgb(var(--server-hover-colour));
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--server-hover-colour)/0.25);
}
#app-mount [class*=pill] span[style*="height: 16"] {
  border-color: rgb(var(--server-hover-colour));
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--server-hover-colour)/0.25);
}
#app-mount [class*=pill] span[style*="height: 17"] {
  border-color: rgb(var(--server-hover-colour));
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--server-hover-colour)/0.25);
}
#app-mount [class*=pill] span[style*="height: 18"] {
  border-color: rgb(var(--server-hover-colour));
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--server-hover-colour)/0.25);
}
#app-mount [class*=pill] span[style*="height: 19"] {
  border-color: rgb(var(--server-hover-colour));
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--server-hover-colour)/0.25);
}
#app-mount [class*=pill] span[style*="height: 20"] {
  border-color: rgb(var(--server-hover-colour));
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--server-hover-colour)/0.25);
}
#app-mount [class*=pill] span[style*="height: 21"] {
  transform: scale(1) !important;
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--accent), 0.25);
}
#app-mount [class*=pill] span[style*="height: 22"] {
  transform: scale(1) !important;
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--accent), 0.25);
}
#app-mount [class*=pill] span[style*="height: 23"] {
  transform: scale(1) !important;
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--accent), 0.25);
}
#app-mount [class*=pill] span[style*="height: 24"] {
  transform: scale(1) !important;
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--accent), 0.25);
}
#app-mount [class*=pill] span[style*="height: 25"] {
  transform: scale(1) !important;
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--accent), 0.25);
}
#app-mount [class*=pill] span[style*="height: 26"] {
  transform: scale(1) !important;
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--accent), 0.25);
}
#app-mount [class*=pill] span[style*="height: 27"] {
  transform: scale(1) !important;
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--accent), 0.25);
}
#app-mount [class*=pill] span[style*="height: 28"] {
  transform: scale(1) !important;
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--accent), 0.25);
}
#app-mount [class*=pill] span[style*="height: 29"] {
  transform: scale(1) !important;
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--accent), 0.25);
}
#app-mount [class*=pill] span[style*="height: 30"] {
  transform: scale(1) !important;
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--accent), 0.25);
}
#app-mount [class*=pill] span[style*="height: 31"] {
  transform: scale(1) !important;
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--accent), 0.25);
}
#app-mount [class*=pill] span[style*="height: 32"] {
  transform: scale(1) !important;
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--accent), 0.25);
}
#app-mount [class*=pill] span[style*="height: 33"] {
  transform: scale(1) !important;
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--accent), 0.25);
}
#app-mount [class*=pill] span[style*="height: 34"] {
  transform: scale(1) !important;
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--accent), 0.25);
}
#app-mount [class*=pill] span[style*="height: 35"] {
  transform: scale(1) !important;
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--accent), 0.25);
}
#app-mount [class*=pill] span[style*="height: 36"] {
  transform: scale(1) !important;
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--accent), 0.25);
}
#app-mount [class*=pill] span[style*="height: 37"] {
  transform: scale(1) !important;
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--accent), 0.25);
}
#app-mount [class*=pill] span[style*="height: 38"] {
  transform: scale(1) !important;
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--accent), 0.25);
}
#app-mount [class*=pill] span[style*="height: 39"] {
  transform: scale(1) !important;
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--accent), 0.25);
}
#app-mount [class*=pill] span[style*="height: 40"] {
  transform: scale(1) !important;
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--server-glow-intensity) * 15px) calc(var(--server-glow-intensity) * 5px) rgb(var(--accent), 0.25);
}

#app-mount .wrapper-38slSD {
  width: 100%;
}
#app-mount .wrapper-38slSD ul[role=group] {
  height: auto !important;
}
#app-mount .folder-241Joy {
  background: rgba(255, 255, 255, 0.05);
}
#app-mount .folderIconWrapper-1oRIZr {
  border-radius: 0;
}
#app-mount .expandedFolderBackground-1kSAf6 {
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.05);
  width: var(--server-size);
  border-radius: clamp(0%, var(--server-roundness, 50%), 30px);
}

#app-mount .numberBadge-37OJ3S {
  box-shadow: 0 0 10px 3px hsl(359, calc(var(--saturation-factor, 1) * 82.6%), 59.4%, 0.5);
}

#app-mount .guilds-2JjMmN [class*=unreadMentionsIndicator] {
  width: var(--guilds-width);
}
#app-mount .guilds-2JjMmN .bar-2eAyLE {
  box-shadow: 0 0 calc(var(--glow-intensity) * 10px) hsl(var(--discord-red));
  opacity: 1;
  visibility: visible;
}
#app-mount .guilds-2JjMmN .bar-2eAyLE[aria-hidden=true] {
  opacity: 0;
  visibility: hidden;
}

#app-mount .sidebar-1tnWFu {
  border-radius: 0;
  background: var(--bg-primary);
  width: var(--channels-width);
  border-right: 1px solid var(--border);
  z-index: 1;
}
#app-mount .sidebar-1tnWFu.hidden-38rxp9 {
  display: none;
}
#app-mount .scrolling-20Of9p .content-2a4AW9 {
  pointer-events: all !important;
}
#app-mount .container-1NXEtd {
  background: transparent;
}
#app-mount .content-2a4AW9 > div[style="height: 16px;"] {
  display: none;
}

#app-mount .wrapper-NhbLHG {
  padding: 0;
}
#app-mount .wrapper-NhbLHG.modeUnread-3Cxepe .unread-36eUEm {
  box-shadow: 0 0 calc(var(--channel-glow-intensity) * 10px) calc(var(--channel-glow-intensity) * 2px) rgb(var(--unread-colour)/0.3);
  width: 2px;
  height: 15px;
  margin: 0;
  transform: translateY(-50%);
  border-radius: 0;
}
#app-mount .wrapper-NhbLHG.modeUnread-3Cxepe .icon-2W8DHg,
#app-mount .wrapper-NhbLHG.modeUnread-3Cxepe .name-28HaxV {
  color: #fff;
  filter: drop-shadow(0 0 calc(var(--channel-glow-intensity) * 5px) rgb(var(--unread-colour)/0.3)) drop-shadow(0 0 calc(var(--channel-glow-intensity) * 2px) rgb(var(--unread-colour)/0.2));
}
#app-mount .wrapper-NhbLHG.modeSelected-3DmyhH .content-1gYQeQ {
  background: rgb(var(--accent), 0.1);
}
#app-mount .wrapper-NhbLHG.modeSelected-3DmyhH .content-1gYQeQ::before {
  content: "";
  position: absolute;
  left: 0;
  height: 100%;
  width: 2px;
  background: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--channel-glow-intensity) * 15px) calc(var(--channel-glow-intensity) * 5px) rgb(var(--accent), 0.2);
}
#app-mount .wrapper-NhbLHG.modeSelected-3DmyhH .content-1gYQeQ .icon-2W8DHg,
#app-mount .wrapper-NhbLHG.modeSelected-3DmyhH .content-1gYQeQ .name-28HaxV {
  color: rgb(var(--accent));
  filter: drop-shadow(0 0 calc(var(--channel-glow-intensity) * 5px) rgb(var(--accent)));
}
#app-mount .content-1gYQeQ {
  margin: 0;
  padding: 0 18px;
  height: var(--channel-height);
  border-radius: 0;
}
#app-mount .mainContent-20q_Hp {
  padding: 0;
}
#app-mount .mainContent-20q_Hp::before {
  top: 0;
  bottom: 0;
}
#app-mount .wrapper-NhbLHG.typeThread-2Aqh6X .content-1gYQeQ {
  position: relative;
  padding-left: 64px;
}
#app-mount .wrapper-NhbLHG.typeThread-2Aqh6X .content-1gYQeQ::after {
  position: absolute;
  left: 36px;
  width: 24px;
  height: 24px;
  content: "";
  -webkit-mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M6.427 4.427l3.396 3.396a.25.25 0 010 .354l-3.396 3.396A.25.25 0 016 11.396V4.604a.25.25 0 01.427-.177z"></path></svg>');
          mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M6.427 4.427l3.396 3.396a.25.25 0 010 .354l-3.396 3.396A.25.25 0 016 11.396V4.604a.25.25 0 01.427-.177z"></path></svg>');
  background: var(--channels-default);
}
#app-mount .wrapper-NhbLHG.typeThread-2Aqh6X.modeSelected-3DmyhH .content-1gYQeQ::after {
  background: rgb(var(--accent));
}
#app-mount .container-1Bj0eq .spine-29OFwR {
  display: none;
}
#app-mount .container-1Bj0eq .content-1gYQeQ {
  padding-left: 42px;
}

#app-mount .animatedContainer-2laTjx {
  margin-top: var(--toolbar-height);
  background: transparent;
  transform: none !important;
}
#app-mount .bannerImage-ubW8K- {
  width: var(--channels-width);
  transform: none !important;
}
#app-mount .bannerImg-2PzH6z {
  width: 100%;
}
#app-mount .content-2a4AW9 > div[style="height: 84px;"] {
  margin-top: 48px;
}
#app-mount .selected-1GtAC5 .header-3OsQeK {
  background: transparent;
}
#app-mount .header-3OsQeK {
  height: var(--toolbar-height);
  border-bottom: 1px solid var(--border);
  filter: none;
  box-shadow: none;
  padding: 0 18px;
}
#app-mount .header-3OsQeK .name-3Uvkvr {
  font-weight: 500;
}
#app-mount .header-3OsQeK .button-2BMPJJ {
  margin-left: 0;
  -webkit-mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>') center/cover;
          mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>') center/cover;
  background: var(--interactive-normal);
  width: 24px;
  height: 24px;
}
#app-mount .header-3OsQeK .button-2BMPJJ g {
  display: none;
}
#app-mount .header-3OsQeK .button-2BMPJJ.open-3fGK6o {
  transform: rotate(-65deg);
}
#app-mount .header-3OsQeK:hover {
  background: transparent;
}
#app-mount .guildIconContainer-2FW_iA {
  display: none;
}
#app-mount .headerButton-1nmDZ3 {
  background: transparent;
}

#app-mount .containerDefault-3TQ5YN {
  padding-top: 18px;
}
#app-mount .wrapper-1S43wv {
  padding: 0 18px 0 42px;
  height: 32px;
}
#app-mount .wrapper-1S43wv .arrow-2HswgU {
  left: 16px;
  width: 20px;
  height: 20px;
  top: 5px;
}

#app-mount .privateChannels-oVe7HL,
#app-mount .scroller-WSmht3 {
  background: transparent;
}
#app-mount .privateChannels-oVe7HL div[style="height: 8px;"],
#app-mount .scroller-WSmht3 div[style="height: 8px;"] {
  display: none;
}
#app-mount .searchBar-3TnChZ {
  height: var(--toolbar-height);
  box-shadow: none;
  border-bottom: 1px solid var(--border);
  padding: 0 12px;
  margin-top: -1px;
}
#app-mount .privateChannelsHeaderContainer-1UWASm {
  padding: 18px;
  height: auto;
  align-items: center;
  line-height: normal;
}
#app-mount .channel-1Shao0 {
  max-width: unset;
  margin: 0;
  padding: 0;
  border-radius: 0;
}
#app-mount .channel-1Shao0 .layout-1LjVue {
  padding: 0 18px;
  height: var(--dm-height);
  border-radius: 0;
}
#app-mount .channel-1Shao0 .content-66wMin {
  overflow: visible;
}
#app-mount .channel-1Shao0 .name-2m3Cms {
  overflow: visible;
}
#app-mount .channel-1Shao0 .selected-3veCBZ {
  color: rgb(var(--accent));
  background: rgb(var(--accent), 0.2);
}
#app-mount .channel-1Shao0 .selected-3veCBZ::before {
  content: "";
  position: absolute;
  left: 0;
  height: 100%;
  width: 2px;
  background: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--glow-intensity) * 15px) calc(var(--glow-intensity) * 5px) rgb(var(--accent), 0.2);
}
#app-mount .channel-1Shao0 .selected-3veCBZ .name-2m3Cms {
  filter: drop-shadow(0 0 calc(var(--glow-intensity) * 5px) currentColor);
}
#app-mount .channel-1Shao0 .selected-3veCBZ .subText-3Sk0zy {
  color: #fff;
}

#app-mount .panels-3wFtMD {
  background: transparent;
  padding: 0;
}
#app-mount .wrapper-3Hk9OB:not(:empty) {
  border-top: 1px solid var(--border);
}
#app-mount .container-1zzFcN {
  border: none;
  padding: 0;
}
#app-mount .container-1zzFcN > div:first-child {
  padding: 0;
  border-bottom: 1px solid var(--border);
}
#app-mount .container-1zzFcN > div:first-child .inner-llGtyq {
  padding: 16px 18px;
}
#app-mount .container-1zzFcN > div:first-child > .flex-2S1XBF {
  margin: 0;
}
#app-mount .container-1zzFcN > div:first-child .button-12Fmur {
  height: 63px;
  border-radius: 0;
  width: 42px;
}
#app-mount .container-1zzFcN > div:first-child .button-12Fmur:hover {
  background: var(--background-modifier-hover) !important;
}
#app-mount .actionButtons-2vEOUh {
  padding: 0;
}
#app-mount .actionButtons-2vEOUh > button {
  margin: 0;
  border-radius: 0;
  background: transparent !important;
  height: 42px;
  font-size: 0;
  transition: none;
}
#app-mount .actionButtons-2vEOUh > button svg {
  margin: 0;
  color: var(--interactive-normal);
  transition: var(--transition);
  transition-property: color;
}
#app-mount .actionButtons-2vEOUh > button:hover {
  background: var(--background-modifier-hover) !important;
}
#app-mount .actionButtons-2vEOUh > button:hover svg {
  color: var(--interactive-hover);
}
#app-mount .activityPanel-9icbyU {
  border-top: 1px solid var(--border);
  border-bottom: none;
  padding: 16px;
}
#app-mount .voiceUsers-3gPcwY {
  padding: 10px 16px;
  border-bottom: 1px solid var(--border);
}
#app-mount .container-YkUktl {
  padding: 0 16px;
  height: 64px;
  border-top: 1px solid var(--border);
}

#app-mount .list-2x9Cl9 {
  padding: 0;
}
#app-mount .list-2x9Cl9 .draggable-S2aEx4 {
  height: auto;
}
#app-mount .voiceUser-3nRK-K {
  height: auto;
}
#app-mount .voiceUser-3nRK-K .content-1Tgc42 {
  padding: 4px 18px 4px 32px;
  border-radius: 0;
  margin: 0;
}
#app-mount .voiceUser-3nRK-K .icons-2mwuFp {
  margin-right: 0;
}
#app-mount .voiceUser-3nRK-K .avatar-3FKimL {
  z-index: 1;
}
#app-mount .voiceUser-3nRK-K .avatar-3FKimL.avatarSpeaking-2pCGrZ {
  box-shadow: inset 0 0 0 2px var(--talking-bar), inset 0 0 0 3px var(--background-secondary), 0 0 calc(var(--channel-glow-intensity) * 10px) var(--talking-glow);
}
#app-mount .voiceUser-3nRK-K .liveSmall-1Urjcy {
  box-shadow: 0 0 calc(var(--channel-glow-intensity) * 10px) hsl(var(--discord-red));
  z-index: 1;
}
#app-mount .voiceUser-3nRK-K.selected-1oxcpH .content-1Tgc42 {
  background: transparent;
}
#app-mount .voiceUser-3nRK-K.selected-1oxcpH .username-vAneIW {
  text-shadow: 0 0 calc(var(--channel-glow-intensity) * 5px) currentColor;
}
#app-mount .voiceUser-3nRK-K.selected-1oxcpH .username-vAneIW::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: currentColor;
  opacity: 0.2;
  z-index: 0;
  pointer-events: none;
}
#app-mount .voiceUser-3nRK-K.selected-1oxcpH .username-vAneIW::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
  background: currentColor;
  box-shadow: 0 0 calc(var(--channel-glow-intensity) * 15px) currentColor;
  pointer-events: none;
}

#app-mount .sidebar-1tnWFu .unread-XRkyaQ {
  overflow: visible;
}
#app-mount .sidebar-1tnWFu .unread-2wipsx {
  background: white;
  color: #000;
  box-shadow: 0 0 calc(var(--glow-intensity) * 10px) white;
}

#app-mount .container-3fNISf {
  margin: 0;
  padding: 12px 0;
}
#app-mount .container-3fNISf .textArea-2LMFQQ {
  margin-bottom: 12px;
  padding: 0 12px;
}
#app-mount .container-3fNISf .divider-3C88Um {
  border-color: var(--border);
}
#app-mount .progressBarContainer-DLPbha {
  background: rgba(255, 255, 255, 0.05);
  margin: 0 12px 12px;
  width: calc(100% - 24px);
}
#app-mount .progressBarContainer-DLPbha .progressBar-UDQ4AC {
  background: linear-gradient(90deg, rgb(var(--accent), 0.1), rgb(var(--accent)));
}

#app-mount .chat-2ZfjoI {
  background: transparent;
}
#app-mount .chat-2ZfjoI .chatContent-3KubbW {
  background: var(--bg-secondary);
  border-right: 1px solid var(--border);
}
#app-mount .chat-2ZfjoI .scroller-kQBbkU {
  -webkit-mask: linear-gradient(black 98%, transparent 100%) !important;
          mask: linear-gradient(black 98%, transparent 100%) !important;
}
#app-mount .chat-2ZfjoI.threadSidebarOpen-1LSXvU {
  border-radius: 0;
}
#app-mount .content-1jQy2l {
  z-index: 1;
}
#app-mount .messagesWrapper-RpOMA3 {
  margin-bottom: 8px;
}
#app-mount .wrapper-3HVHpV,
#app-mount .wrapper-15CKyy {
  background: transparent;
}

#app-mount .message-2CShn3 .channelTextArea-220_Gz {
  background: var(--input-background);
  border: 2px solid transparent;
  transition: var(--transition);
  transition-property: border-color, box-shadow;
}
#app-mount .message-2CShn3 .channelTextArea-220_Gz .slateTextArea-27tjG0 {
  padding-left: 16px;
}
#app-mount .message-2CShn3 .channelTextArea-220_Gz:hover {
  border-color: rgba(255, 255, 255, 0.05);
}
#app-mount .message-2CShn3 .channelTextArea-220_Gz:focus-within {
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--input-glow-intensity) * 20px) calc(var(--input-glow-intensity) * 5px) rgb(var(--accent), 0.25);
}
#app-mount .message-2CShn3 .operations-3q3u6E .anchor-1MIwyf {
  color: rgb(var(--accent));
  text-shadow: 0 0 calc(var(--input-glow-intensity) * 5px) rgb(var(--accent));
}
#app-mount .message-2CShn3.replying-eZ7p5z {
  background: rgb(var(--accent), 0.03);
}
#app-mount .message-2CShn3.replying-eZ7p5z::before {
  background: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--chat-glow-intensity) * 15px) calc(var(--chat-glow-intensity) * 5px) rgb(var(--accent), 0.2);
}
#app-mount .wrapper-2vIMkT {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  -webkit-backdrop-filter: blur(5px);
          backdrop-filter: blur(5px);
  box-shadow: none;
  border-radius: 6px;
  z-index: 1;
}
#app-mount .cozy-VmLDNB {
  padding-left: calc(var(--chat-avatar-size) + 26px);
}
#app-mount .cozy-VmLDNB .avatar-2e8lTP {
  margin-top: 0;
  left: 16px;
  width: var(--chat-avatar-size);
  height: var(--chat-avatar-size);
  border-radius: var(--avatar-roundness, 50%);
}
#app-mount .cozy-VmLDNB .header-2jRmjb {
  overflow: visible;
  margin-left: 0;
  margin-bottom: 10px;
  padding-left: 0;
}
#app-mount .cozy-VmLDNB .messageContent-2t3eCI:not(:empty):not(.repliedTextContent-2hOYMB):not(.threadMessageAccessoryContent-1HTTUq) {
  display: var(--chat-bubble-display);
  margin: 0;
  background: var(--chat-bubble-bg);
  padding: var(--chat-bubble-padding);
  border-radius: 6px;
  overflow: visible;
  max-width: 100%;
}
#app-mount .cozy-VmLDNB .messageContent-2t3eCI:not(:empty):not(.repliedTextContent-2hOYMB):not(.threadMessageAccessoryContent-1HTTUq) code {
  background: rgba(255, 255, 255, 0.03);
  border: none;
}
#app-mount .cozy-VmLDNB .username-h_Y3Us {
  text-shadow: 0 0 calc(var(--chat-glow-intensity) * 10px) currentColor;
  line-height: normal;
}
#app-mount .cozy-VmLDNB .messageContent-2t3eCI pre {
  max-width: 100%;
}
#app-mount .cozy-VmLDNB .container-2sjPya {
  margin-top: 10px;
}
#app-mount .cozy-VmLDNB.groupStart-3Mlgv1 .messageContent-2t3eCI:not(:empty):not(.repliedTextContent-2hOYMB):not(.threadMessageAccessoryContent-1HTTUq) {
  margin-top: -5px;
}
#app-mount .cozy-VmLDNB.mentioned-Tre-dv {
  background: transparent;
}
#app-mount .cozy-VmLDNB.mentioned-Tre-dv::before {
  content: none;
}
#app-mount .cozy-VmLDNB.mentioned-Tre-dv .messageContent-2t3eCI:not(:empty):not(.repliedTextContent-2hOYMB):not(.threadMessageAccessoryContent-1HTTUq) {
  background: var(--background-mentioned);
  box-shadow: inset 2px 0 0 var(--info-warning-foreground);
  border-radius: 0 6px 6px 0;
}
#app-mount .cozy-VmLDNB[data-is-author-self=true] .messageContent-2t3eCI:not(:empty):not(.repliedTextContent-2hOYMB):not(.threadMessageAccessoryContent-1HTTUq) {
  background: var(--chat-bubble-bg-self);
}
#app-mount .cozy-VmLDNB.selected-2LX7Jy:not(.replying-eZ7p5z), #app-mount .cozy-VmLDNB:not(.replying-eZ7p5z):hover {
  background: transparent !important;
}
#app-mount .cozy-VmLDNB.hasThread-2k82W0::after {
  left: calc(var(--chat-avatar-size) - 3px);
  width: calc(var(--chat-avatar-size) - 13px);
  border-color: rgba(255, 255, 255, 0.15);
  bottom: 40px;
}
#app-mount .container-3i3IzO {
  margin-top: 0;
  background: rgba(255, 255, 255, 0.05);
  margin-bottom: 12px;
}
#app-mount .wrapper-1ZcZW- {
  background: rgb(var(--accent), 0.1);
  color: rgb(var(--accent));
  text-shadow: 0 0 calc(var(--glow-intensity) * 5px) currentColor;
}
#app-mount .wrapper-1ZcZW-:hover {
  background: rgb(var(--accent));
  color: #fff;
}
#app-mount .repliedMessage-3Z6XBG::before {
  left: calc(var(--chat-avatar-size) / 2 * -1 + var(--gutter) * -1 + 5px);
}
#app-mount .embedFull-1HGV2S,
#app-mount .wrapper-1HIH0j {
  background: rgba(255, 255, 255, 0.03);
}
#app-mount .wrapperAudio-1Bzv_Z {
  border: none;
  background: rgba(255, 255, 255, 0.03);
}
#app-mount .textContainer-36wgKK {
  background: rgba(255, 255, 255, 0.03);
  border: none;
}
#app-mount .footer-GXWBBp {
  background: rgba(255, 255, 255, 0.05);
  border: none;
}

#app-mount .form-3gdLxP::before {
  content: none;
}
#app-mount .form-3gdLxP .button-f2h6uQ {
  height: 100%;
}
#app-mount .form-3gdLxP .button-f2h6uQ #icon svg {
  -webkit-mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>') center/cover;
          mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>') center/cover;
  background: var(--interactive-muted);
  transition: var(--transition);
  transition-property: background;
}
#app-mount .form-3gdLxP .button-f2h6uQ #icon svg path {
  display: none;
}
#app-mount .form-3gdLxP .button-f2h6uQ:hover #icon svg {
  background: var(--interactive-normal);
}
#app-mount .form-3gdLxP .button-f2h6uQ:not(.attachButton-_ACFSu) svg {
  transition: var(--transition);
  transition-property: filter;
}
#app-mount .form-3gdLxP .button-f2h6uQ:not(.attachButton-_ACFSu).active-z80xEj {
  filter: drop-shadow(0 0 calc(var(--chat-glow-intensity) * 5px) rgb(var(--accent)));
}
#app-mount .form-3gdLxP .button-f2h6uQ:not(.attachButton-_ACFSu).active-z80xEj svg {
  background: rgb(var(--accent)) !important;
}
#app-mount .form-3gdLxP .emojiButton-1fMsf3 {
  padding: 0 4px;
  max-height: 54px;
}
#app-mount .form-3gdLxP .emojiButton-1fMsf3 .sprite-2lxwfc {
  width: 24px;
  height: 24px;
  -webkit-mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>') center/cover;
          mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>') center/cover;
  background: var(--interactive-muted);
  filter: none !important;
  transform: none !important;
  transition: var(--transition);
  transition-property: background;
}
#app-mount .form-3gdLxP .emojiButton-1fMsf3:hover .sprite-2lxwfc {
  background: var(--interactive-normal);
}
#app-mount .form-3gdLxP .stickerButton-1-nFh2 {
  padding: 0;
}
#app-mount .form-3gdLxP .stickerButton-1-nFh2 svg {
  width: 24px !important;
  height: 24px !important;
  -webkit-mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>') center/cover;
          mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>') center/cover;
  background: var(--interactive-muted);
  transition: var(--transition);
  transition-property: background;
}
#app-mount .form-3gdLxP .stickerButton-1-nFh2 svg path {
  display: none;
}
#app-mount .form-3gdLxP .stickerButton-1-nFh2:hover svg {
  background: var(--interactive-normal);
}
#app-mount .channelTextArea-1FufC0 {
  background: var(--input-background);
  border: 2px solid transparent;
  border-radius: 6px;
  transition: var(--transition);
  transition-property: border-color, box-shadow;
}
#app-mount .channelTextArea-1FufC0 .divider-2rZFJK {
  border-top: 2px solid rgba(255, 255, 255, 0.05);
  margin: 0 0 0 12px;
}
#app-mount .channelTextArea-1FufC0:hover {
  border-color: rgba(255, 255, 255, 0.05);
}
#app-mount .channelTextArea-1FufC0:focus-within {
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--input-glow-intensity) * 20px) calc(var(--input-glow-intensity) * 5px) rgb(var(--accent), 0.25);
}
#app-mount .slateTextArea-27tjG0,
#app-mount .placeholder-1_mJY1 {
  padding: 16px 0;
}
#app-mount .scrollableContainer-15eg7h {
  background: transparent;
}
#app-mount .attachButton-_ACFSu svg {
  -webkit-mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>') center/cover;
          mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>') center/cover;
  background: var(--interactive-muted);
  transition: var(--transition);
  transition-property: background, filter;
}
#app-mount .attachButton-_ACFSu svg path {
  display: none;
}
#app-mount .attachButton-_ACFSu:hover svg {
  background: var(--interactive-normal);
}
#app-mount .attachButton-_ACFSu[aria-expanded=true] {
  filter: drop-shadow(0 0 calc(var(--input-glow-intensity) * 5px) rgb(var(--accent)));
}
#app-mount .attachButton-_ACFSu[aria-expanded=true] svg {
  background: rgb(var(--accent)) !important;
}
#app-mount .buttons-uaqb-5 {
  min-height: 54px;
}
#app-mount .buttons-uaqb-5 > button[aria-label] svg {
  -webkit-mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>') center/cover;
          mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>') center/cover;
  background: var(--interactive-muted);
  transition: var(--transition);
  transition-property: background;
}
#app-mount .buttons-uaqb-5 > button[aria-label] svg path {
  display: none;
}
#app-mount .buttons-uaqb-5 > button[aria-label]:hover svg {
  background: var(--interactive-normal);
}
#app-mount .upload-3GTSF9 {
  background: rgba(255, 255, 255, 0.02);
  border-radius: 6px;
}
#app-mount .attachedBars-2BCP3l {
  background: transparent;
  border-radius: 6px 6px 0 0;
}
#app-mount .replyBar-1oi75v,
#app-mount .threadSuggestionBar-3ExSyc {
  background: rgba(255, 255, 255, 0.02);
  border-bottom: 2px solid var(--border);
}
#app-mount .wrapper-2SplAX {
  background: var(--input-background);
  border-radius: 6px;
  padding: 24px 0;
}
#app-mount .wrapper-2SplAX .buttonContainer-KMz3Ex {
  margin-right: 24px;
}

.font-size-12 .slateContainer-3x9zil,
.font-size-12 .buttons-3JBrkn {
  min-height: 48px !important;
}

.font-size-14 .slateContainer-3x9zil,
.font-size-14 .buttons-3JBrkn {
  min-height: 51px !important;
}

.font-size-15 .slateContainer-3x9zil,
.font-size-15 .buttons-3JBrkn {
  min-height: 52px !important;
}

.font-size-16 .slateContainer-3x9zil,
.font-size-16 .buttons-3JBrkn {
  min-height: 54px !important;
}

.font-size-18 .slateContainer-3x9zil,
.font-size-18 .buttons-3JBrkn {
  min-height: 56px !important;
}

.font-size-20 .slateContainer-3x9zil,
.font-size-20 .buttons-3JBrkn {
  min-height: 59px !important;
}

.font-size-24 .slateContainer-3x9zil,
.font-size-24 .buttons-3JBrkn {
  min-height: 65px !important;
}

#app-mount .newMessagesBar-1hF-9G {
  top: 0;
  right: 0;
  left: 0;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border);
  border-radius: 0;
  box-shadow: none;
  opacity: 1;
  -webkit-backdrop-filter: blur(3px);
          backdrop-filter: blur(3px);
}
#app-mount .barButtonBase-Sk2mdB {
  height: auto;
  padding: 10px 16px;
}
#app-mount .unreadBar-elBRZx {
  opacity: 1;
  visibility: visible;
}
#app-mount .unreadBar-elBRZx[aria-hidden=true] {
  opacity: 0;
  visibility: hidden;
}
#app-mount .jumpToPresentBar-1cEnH0 {
  background: var(--bg-primary);
  border: 1px solid var(--border);
  padding: 0;
  opacity: 1;
  border-radius: 6px;
  right: 12px;
  bottom: 16px;
  -webkit-backdrop-filter: blur(3px);
          backdrop-filter: blur(3px);
}
#app-mount .chatHeaderBar-2fUORh {
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border);
}

#app-mount .searchResultsWrap-5RVOkx {
  background: var(--bg-primary);
}
#app-mount .searchResultsWrap-5RVOkx .scroller-3iiyhZ {
  margin-top: -56px;
  padding-top: 64px;
}
#app-mount .searchHeader-1r_ZSh {
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border);
  -webkit-backdrop-filter: blur(5px);
          backdrop-filter: blur(5px);
}
#app-mount .channelName-3w2Y3c {
  background: transparent;
}
#app-mount .searchResult-O9NDji {
  background: transparent;
  margin-left: -16px;
}
#app-mount .pageButton-1GMGeJ.activeButton-LRWFC_ {
  background: rgb(var(--accent), 0.1);
  color: rgb(var(--accent));
  text-shadow: 0 0 calc(var(--glow-intensity) * 10px) rgb(var(--accent));
}

#app-mount .divider-IqmEqJ {
  border: none;
  margin: 0;
  height: auto;
  justify-content: flex-start;
  padding: 0 16px 0 calc(var(--chat-avatar-size) + 26px);
  margin: 32px 0;
  position: static;
  flex-direction: row-reverse;
  align-items: center;
}
#app-mount .divider-IqmEqJ::before {
  content: "";
  height: 1px;
  display: block;
  width: 100%;
}
#app-mount .divider-IqmEqJ .content-3spvdd {
  border-radius: 6px;
  margin: 0;
  padding: 8px 12px;
}
#app-mount .divider-IqmEqJ:not(.isUnread-3Lojb-)::before,
#app-mount .divider-IqmEqJ:not(.isUnread-3Lojb-) .content-3spvdd {
  background: var(--border);
}
#app-mount .divider-IqmEqJ.isUnread-3Lojb- {
  margin: 8px 0;
}
#app-mount .divider-IqmEqJ.isUnread-3Lojb-::before {
  order: 1;
  background: hsl(var(--discord-red));
}
#app-mount .divider-IqmEqJ.isUnread-3Lojb- .content-3spvdd {
  order: 2;
  margin-right: 12px;
  background: hsl(var(--discord-red)/0.2);
  text-shadow: 0 0 calc(var(--chat-glow-intensity) * 5px) hsl(var(--discord-red)/0.5);
}
#app-mount .unreadPill-3nEWYM {
  position: relative;
  top: 0;
  left: 0;
  order: 0;
}

#app-mount .container-3XgAHv {
  border-radius: 0;
  margin: 0;
  background: var(--bg-primary);
  border-left: 1px solid var(--border);
}
#app-mount .chat-1-OBC7::before {
  content: none;
}

#app-mount .reaction-2A2y9y {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  border: none;
}
#app-mount .reaction-2A2y9y.reactionMe-3I9gFK {
  background: rgb(var(--accent), 0.15);
}
#app-mount .reaction-2A2y9y.reactionMe-3I9gFK .reactionCount-1zkLcN {
  color: rgb(var(--accent));
}

#app-mount .membersWrap-3NUR2t {
  min-width: var(--members-width);
  max-width: var(--members-width);
}
#app-mount .container-2o3qEW {
  background: var(--bg-primary);
}
#app-mount .members-3WRCEx {
  background: transparent;
  width: 100%;
}
#app-mount .members-3WRCEx > div {
  background: transparent;
}
#app-mount .content-1jQy2l > .membersWrap-3NUR2t > .members-3WRCEx {
  background: var(--bg-primary);
}

#app-mount .membersGroup-2eiWxl {
  text-shadow: 0 0 calc(var(--members-glow-intensity) * 10px) currentColor;
  overflow: visible;
  padding: 16px;
  box-sizing: border-box;
}

#app-mount .member-2gU6Ar {
  max-width: 100%;
  margin: 0;
  padding: 0;
}
#app-mount .member-2gU6Ar.selected-1-Z6gm .layout-1qmrhw {
  background: transparent;
}
#app-mount .member-2gU6Ar.selected-1-Z6gm .roleColor-nA7BqX {
  text-shadow: 0 0 calc(var(--members-glow-intensity) * 10px) currentColor;
  overflow: visible;
  filter: none;
}
#app-mount .member-2gU6Ar.selected-1-Z6gm .roleColor-nA7BqX::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: currentColor;
  opacity: 0.2;
  z-index: 0;
  pointer-events: none;
}
#app-mount .member-2gU6Ar.selected-1-Z6gm .roleColor-nA7BqX::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
  background: currentColor;
  box-shadow: 0 0 calc(var(--members-glow-intensity) * 15px) currentColor;
  pointer-events: none;
}
#app-mount .member-2gU6Ar.selected-1-Z6gm .activityText-1rR-8O {
  color: #fff;
  z-index: 1;
}
#app-mount .layout-1qmrhw {
  padding: 0 16px;
  height: var(--member-height);
  border-radius: 0;
}
#app-mount .layout-1qmrhw .name-3Vmqxm,
#app-mount .layout-1qmrhw .content-1U25dZ {
  overflow: visible;
}
#app-mount .layout-1qmrhw .avatar-6qzftW {
  z-index: 1;
}

#app-mount .menu-1QACrS {
  background: var(--bg-primary);
  border: 1px solid var(--border);
  box-shadow: none;
  border-radius: 6px;
}
#app-mount .menu-1QACrS::before {
  content: "";
  border-radius: 6px;
  position: absolute;
  top: 1px;
  right: 1px;
  bottom: 1px;
  left: 1px;
  -webkit-backdrop-filter: blur(5px);
          backdrop-filter: blur(5px);
  z-index: -1;
}
#app-mount .menu-1QACrS .scroller-1bVxF5 {
  padding: 0;
}
#app-mount .menu-1QACrS [role=group]:first-child > .item-1OdjEX:first-child {
  border-radius: 6px 6px 0 0;
}
#app-mount .menu-1QACrS [role=group]:nth-last-child(2) > .item-1OdjEX:last-child {
  border-radius: 0 0 6px 6px;
}
#app-mount .menu-1QACrS .separator-1So4YB {
  margin: 0;
  border-color: var(--border);
}
#app-mount .menu-1QACrS .item-1OdjEX {
  margin: 0;
  border-radius: 0;
  padding: 10px 14px;
}
#app-mount .menu-1QACrS .item-1OdjEX.focused-3qFvc8 {
  background: var(--background-modifier-hover);
}
#app-mount .menu-1QACrS .item-1OdjEX.colorDanger-3n-KnP.focused-3qFvc8 {
  background: hsl(var(--discord-red));
}
#app-mount .menu-1QACrS .submenuPaddingContainer-_k62dJ {
  margin: 0 -4px;
}
#app-mount .menu-1QACrS .hideInteraction-2jPGL_ .hideInteraction-2jPGL_ {
  padding: 0 0 8px;
}

#app-mount .search-2Mwzzq {
  order: -1;
}
#app-mount .search-2Mwzzq .searchBar-jGtisZ {
  width: 250px;
  transition: none;
}
#app-mount .search-2Mwzzq:not(.focused-1xh-wG) * {
  cursor: pointer;
}
#app-mount .search-2Mwzzq.open-1F8u2c .searchBar-jGtisZ {
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--glow-intensity) * 20px) calc(var(--glow-intensity) * 5px) rgb(var(--accent), 0.25);
}
#app-mount .search-2Mwzzq.focused-1xh-wG {
  position: fixed;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}
#app-mount .search-2Mwzzq.focused-1xh-wG .searchBar-jGtisZ {
  background: var(--input-background);
  height: 64px;
  width: 500px;
  padding: 0 0 0 12px;
  box-sizing: border-box;
  border-radius: 12px;
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--glow-intensity) * 20px) calc(var(--glow-intensity) * 5px) rgb(var(--accent), 0.25);
  -webkit-animation: fadeIn 0.2s ease forwards;
          animation: fadeIn 0.2s ease forwards;
}
#app-mount .search-2Mwzzq.focused-1xh-wG .public-DraftEditor-content {
  cursor: text;
  font-size: 24px;
}
#app-mount .search-2Mwzzq.focused-1xh-wG .public-DraftEditorPlaceholder-root {
  font-size: 24px;
}
#app-mount .search-2Mwzzq.focused-1xh-wG .icon-tZMHgY {
  width: 56px;
}
#app-mount .search-2Mwzzq.focused-1xh-wG .iconContainer-1RqWJj,
#app-mount .search-2Mwzzq.focused-1xh-wG .icon-18rqoe {
  width: 24px;
  height: 24px;
}
#app-mount .search-2Mwzzq.focused-1xh-wG::before {
  content: "";
  position: fixed;
  top: -100vmax;
  right: -100vmax;
  bottom: -100vmax;
  left: -100vmax;
  background: var(--backdrop-background);
  z-index: -1;
  -webkit-backdrop-filter: blur(var(--backdrop-blur));
          backdrop-filter: blur(var(--backdrop-blur));
  -webkit-animation: fadeIn 0.2s ease forwards;
          animation: fadeIn 0.2s ease forwards;
}
#app-mount .search-39IXmY {
  margin: 0 24px 0 0;
}
#app-mount .search-39IXmY .icon-tZMHgY {
  height: 100%;
}
#app-mount .searchBar-jGtisZ {
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid transparent;
  padding: 0;
  height: 32px;
  width: 250px;
  transition: var(--transition);
  transition-property: border-color;
}
#app-mount .searchBar-jGtisZ:hover {
  border-color: rgba(255, 255, 255, 0.05);
}
#app-mount .DraftEditor-root {
  padding: 0;
  max-width: 428px;
}
#app-mount .DraftEditor-editorContainer {
  height: 100%;
}
#app-mount .public-DraftEditor-content {
  display: flex;
  align-items: center;
  padding-left: 8px;
  cursor: pointer;
}
#app-mount .public-DraftEditorPlaceholder-root {
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 8px;
}
#app-mount .container-2McqkF {
  position: fixed;
  left: 50%;
  top: calc(20% + 76px);
  transform: translateX(-50%);
  width: 500px !important;
  box-sizing: border-box;
  border-radius: 12px;
  background: var(--bg-primary);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-lg);
  max-height: 60vh;
  overflow: hidden auto;
}
#app-mount .queryContainer-ZunrLZ {
  background: transparent;
}
#app-mount .resultsGroup-cfY57t {
  margin: 0;
  padding: 0;
}
#app-mount .resultsGroup-cfY57t::before {
  content: none;
}
#app-mount .header-1BR0Ro {
  padding: 14px 12px;
}
#app-mount .option-ayUoaq {
  margin: 0;
  border-radius: 0;
  padding: 4px 12px;
  line-height: normal;
}
#app-mount .option-ayUoaq::before {
  height: 100%;
}
#app-mount .option-ayUoaq::after {
  background: linear-gradient(90deg, transparent, var(--bg-primary));
}
#app-mount .option-ayUoaq[aria-selected=true] {
  background: rgba(255, 255, 255, 0.05);
}
#app-mount .plusIcon-1RVszG {
  top: 12px;
}

.full-motion .search-1FM8Qc.focused-1xh-wG::before,
.full-motion .container-2McqkF {
  -webkit-animation: fadeIn 0.2s ease forwards;
          animation: fadeIn 0.2s ease forwards;
}

@media only screen and (max-width: 1200px) {
  #app-mount .search-1FM8Qc:not(.focused-1xh-wG) {
    height: 24px;
  }
  #app-mount .search-1FM8Qc:not(.focused-1xh-wG) .searchBar-jGtisZ {
    background: transparent;
    border: none;
    width: 24px;
    height: 24px;
  }
  #app-mount .search-1FM8Qc:not(.focused-1xh-wG) .iconContainer-1RqWJj {
    width: 18px;
    height: 18px;
  }
  #app-mount .search-1FM8Qc:not(.focused-1xh-wG) .icon-18rqoe {
    color: var(--interactive-normal);
    width: 20px;
    height: 20px;
  }
  #app-mount .search-1FM8Qc:not(.focused-1xh-wG) .search-39IXmY .icon-tZMHgY svg {
    width: 100%;
    height: 100%;
  }
}
#app-mount .userPopout-2j1gM4 {
  box-shadow: none;
  border: 1px solid var(--border);
  background: var(--bg-primary);
  -webkit-backdrop-filter: blur(var(--blur));
          backdrop-filter: blur(var(--blur));
  border-radius: 6px;
}
#app-mount .userPopout-2j1gM4 .input-2g-os5 {
  border: 2px solid transparent;
  background: rgba(255, 255, 255, 0.05);
  transition: var(--transition);
  transition-property: border-color, box-shadow;
  color: var(--text-normal);
  border-radius: 6px;
}
#app-mount .userPopout-2j1gM4 .input-2g-os5:hover {
  border-color: rgba(255, 255, 255, 0.05);
}
#app-mount .userPopout-2j1gM4 .input-2g-os5:focus {
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--glow-intensity) * 10px) calc(var(--glow-intensity) * 2px) rgb(var(--accent), 0.2);
}
#app-mount .bodyInnerWrapper-2bQs1k {
  background: transparent;
}
#app-mount .role-2TIOKu {
  border: 1px solid var(--border) !important;
  height: auto;
  padding: 8px 10px;
  border-radius: 6px;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
}
#app-mount .role-2TIOKu:hover .roleCircle-1EgnFN {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0;
  z-index: 2;
}
#app-mount .role-2TIOKu:hover .roleName-2ZJJYR {
  opacity: 0;
}
#app-mount .roleCircle-1EgnFN {
  margin: 0;
  width: 0;
  height: 0;
  filter: none;
}
#app-mount .roleCircle-1EgnFN::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: inherit;
  opacity: 0.2;
  pointer-events: none;
}
#app-mount .roleName-2ZJJYR {
  z-index: 1;
  margin: 0;
}
#app-mount .note-Go5ZP2 {
  margin: 0;
}
#app-mount .footer-3naVBw {
  background: transparent;
}

#app-mount .popout-TdhJ6Z {
  background: var(--bg-primary);
  border-radius: 6px;
  -webkit-backdrop-filter: blur(var(--blur));
          backdrop-filter: blur(var(--blur));
  border: 1px solid var(--border);
  -webkit-animation: fadeIn 0.2s ease forwards;
          animation: fadeIn 0.2s ease forwards;
}

#app-mount .autocomplete-3NRXG8 {
  background: var(--bg-primary);
  -webkit-backdrop-filter: blur(var(--blur));
          backdrop-filter: blur(var(--blur));
  border: 1px solid var(--border);
  box-shadow: none;
}
#app-mount .autocomplete-3NRXG8 .scroller-18M1mG {
  padding-bottom: 0;
}
#app-mount .autocomplete-3NRXG8 .list-33W-Tv .listItems-6eZzQ1 {
  margin: -16px -12px -8px;
}
#app-mount .autocomplete-3NRXG8 .list-33W-Tv .wrapper-1wwiGV {
  width: 100% !important;
  box-sizing: border-box;
  border-radius: 0;
  height: auto !important;
  padding: 8px !important;
  display: flex;
  justify-content: center;
  position: relative;
  transition: none;
}
#app-mount .autocomplete-3NRXG8 .list-33W-Tv .wrapper-1wwiGV:hover {
  background: var(--background-modifier-hover);
}
#app-mount .autocomplete-3NRXG8 .list-33W-Tv .wrapper-1wwiGV.selected-3B2w1z {
  background: rgb(var(--accent), 0.1);
}
#app-mount .autocomplete-3NRXG8 .list-33W-Tv .wrapper-1wwiGV.selected-3B2w1z::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 2px;
  background: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--glow-intensity) * 10px) rgb(var(--accent));
}
#app-mount .autocomplete-3NRXG8 .list-33W-Tv .section-Dep3No {
  margin-bottom: 0;
}
#app-mount .autocomplete-3NRXG8 .list-2u03C- .listItems-6eZzQ1 {
  margin: -8px;
}
#app-mount .autocomplete-3NRXG8 .wrapper-3z7DuG {
  border-right: 1px solid var(--border);
  background: transparent;
}
#app-mount .autocomplete-3NRXG8 .wrapper-22rqw6 {
  background: transparent;
}
#app-mount .categoryHeader-OpJ1Ly {
  background: var(--bg-primary);
  -webkit-backdrop-filter: blur(var(--blur));
          backdrop-filter: blur(var(--blur));
}
#app-mount .categorySection-3hl0bM {
  margin: 0;
}
#app-mount .autocompleteRow-14iwvH {
  padding: 0;
}
#app-mount .autocompleteRow-14iwvH .base-2v-uc0 {
  border-radius: 0;
  padding: 8px 16px;
}
#app-mount .autocompleteRow-14iwvH .base-2v-uc0.selected-3H3-RC {
  background: var(--background-modifier-hover);
}

.full-motion .userPopout-2j1gM4 {
  -webkit-animation: fadeIn 0.2s ease forwards;
          animation: fadeIn 0.2s ease forwards;
}

#app-mount .contentWrapper-3vHNP2 {
  background: var(--bg-primary);
  border-radius: 6px;
  border: 1px solid var(--border);
  -webkit-backdrop-filter: blur(var(--blur));
          backdrop-filter: blur(var(--blur));
  box-shadow: none;
  padding: 0;
  display: flex;
  flex-direction: column;
}
#app-mount .contentWrapper-3vHNP2 .header-11eigE,
#app-mount .contentWrapper-3vHNP2 .header-uVCAlo,
#app-mount .contentWrapper-3vHNP2 .header-JHwfVI {
  padding: 16px;
  margin-left: 128px;
  border-left: 1px solid var(--border);
  box-shadow: none;
}
#app-mount .contentWrapper-3vHNP2 [class^=searchBar],
#app-mount .contentWrapper-3vHNP2 .container-1SX9VC,
#app-mount .emojiPicker-6YCk8a [class^=searchBar],
#app-mount .emojiPicker-6YCk8a .container-1SX9VC {
  background: var(--input-background);
  border: 2px solid transparent;
  border-radius: 6px;
  transition: var(--transition);
  transition-property: border-color, box-shadow;
}
#app-mount .contentWrapper-3vHNP2 [class^=searchBar] [class^=inner-],
#app-mount .contentWrapper-3vHNP2 .container-1SX9VC [class^=inner-],
#app-mount .emojiPicker-6YCk8a [class^=searchBar] [class^=inner-],
#app-mount .emojiPicker-6YCk8a .container-1SX9VC [class^=inner-] {
  padding: 0;
}
#app-mount .contentWrapper-3vHNP2 [class^=searchBar] [class^=input-],
#app-mount .contentWrapper-3vHNP2 .container-1SX9VC [class^=input-],
#app-mount .emojiPicker-6YCk8a [class^=searchBar] [class^=input-],
#app-mount .emojiPicker-6YCk8a .container-1SX9VC [class^=input-] {
  font-size: 14px;
  height: 26px;
}
#app-mount .contentWrapper-3vHNP2 [class^=searchBar] [class^=iconLayout-],
#app-mount .contentWrapper-3vHNP2 .container-1SX9VC [class^=iconLayout-],
#app-mount .emojiPicker-6YCk8a [class^=searchBar] [class^=iconLayout-],
#app-mount .emojiPicker-6YCk8a .container-1SX9VC [class^=iconLayout-] {
  height: 26px;
}
#app-mount .contentWrapper-3vHNP2 [class^=searchBar]:hover,
#app-mount .contentWrapper-3vHNP2 .container-1SX9VC:hover,
#app-mount .emojiPicker-6YCk8a [class^=searchBar]:hover,
#app-mount .emojiPicker-6YCk8a .container-1SX9VC:hover {
  border-color: rgba(255, 255, 255, 0.05);
}
#app-mount .contentWrapper-3vHNP2 [class^=searchBar]:focus-within,
#app-mount .contentWrapper-3vHNP2 .container-1SX9VC:focus-within,
#app-mount .emojiPicker-6YCk8a [class^=searchBar]:focus-within,
#app-mount .emojiPicker-6YCk8a .container-1SX9VC:focus-within {
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--input-glow-intensity) * 15px) calc(var(--input-glow-intensity) * 2px) rgb(var(--accent), 0.25);
}
#app-mount .wrapper-3u51GQ:not(.emojiPickerInExpressionPicker-2nOwH8) .emojiPicker-6YCk8a {
  background: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: 6px;
  box-shadow: var(--shadow-lg);
}
#app-mount .wrapper-3u51GQ:not(.emojiPickerInExpressionPicker-2nOwH8) .emojiPicker-6YCk8a .emojiListRowMediumSize-2_-xbz {
  grid-template-columns: repeat(auto-fill, 40px);
}
#app-mount .wrapper-3u51GQ:not(.emojiPickerInExpressionPicker-2nOwH8) .emojiPicker-6YCk8a + .wrapper-22rqw6 {
  top: 57px;
}
#app-mount .nav-1zWVQw {
  position: absolute;
  padding: 0;
  height: 64px;
  z-index: 1;
}
#app-mount .emojiPickerInExpressionPicker-2nOwH8 {
  height: 100%;
}
#app-mount .navList-YSb9UB {
  height: 100%;
  width: 128px;
}
#app-mount .navItem-3McpmW {
  height: 100%;
  width: 33.33%;
  margin: 0;
  position: relative;
  border-radius: 0;
  transition: none;
}
#app-mount .navItem-3McpmW:hover {
  background: var(--background-modifier-hover);
}
#app-mount .navItem-3McpmW:hover .contents-3ca1mk::before {
  background: var(--interactive-hover);
}
#app-mount .navItem-3McpmW.navButtonActive-1EqC5l {
  background: rgb(var(--accent), 0.1);
}
#app-mount .navItem-3McpmW.navButtonActive-1EqC5l .contents-3ca1mk {
  filter: drop-shadow(0 0 calc(var(--channel-glow-intensity) * 5px) rgb(var(--accent)));
}
#app-mount .navItem-3McpmW.navButtonActive-1EqC5l .contents-3ca1mk::before {
  background: rgb(var(--accent));
}
#app-mount .navItem-3McpmW.navButtonActive-1EqC5l::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--glow-intensity) * 15px) calc(var(--glow-intensity) * 5px) rgb(var(--accent), 0.2);
}
#app-mount .navItem-3McpmW .contents-3ca1mk {
  font-size: 0;
  display: flex;
  align-tracks: center;
}
#app-mount .navItem-3McpmW .contents-3ca1mk::before {
  content: "";
  display: flex;
  width: 24px;
  height: 24px;
  background: var(--interactive-normal);
}
#app-mount .navItem-3McpmW[aria-controls=gif-picker-tab-panel] .contents-3ca1mk::before {
  -webkit-mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>');
          mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>');
}
#app-mount .navItem-3McpmW[aria-controls=sticker-picker-tab-panel] .contents-3ca1mk::before {
  -webkit-mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>');
          mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>');
}
#app-mount .navItem-3McpmW[aria-controls=emoji-picker-tab-panel] .contents-3ca1mk::before {
  -webkit-mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>');
          mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>');
}
#app-mount .wrapper-22rqw6 {
  top: 64px;
  border-top: 1px solid var(--border);
  border-right: 1px solid var(--border);
  background: transparent;
}
#app-mount .wrapper-22rqw6 .listItems-6eZzQ1 {
  margin: -8px;
}
#app-mount .wrapper-22rqw6 .scroller-2MALzE::-webkit-scrollbar {
  display: none;
}
#app-mount .categoryItemDefaultCategory-3haEDq {
  width: 100%;
  height: 48px;
  padding: 0;
  margin: 0;
  border-radius: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
#app-mount .categoryItemDefaultCategory-3haEDq.categoryItemDefaultCategorySelected-2YeRUu {
  background: rgb(var(--accent), 0.1);
}
#app-mount .categoryItemDefaultCategory-3haEDq.categoryItemDefaultCategorySelected-2YeRUu .categoryIcon-2cYeku {
  color: rgb(var(--accent));
  filter: drop-shadow(0 0 calc(var(--channel-glow-intensity) * 5px) rgb(var(--accent), 0.4));
}
#app-mount .categoryItemDefaultCategory-3haEDq.categoryItemDefaultCategorySelected-2YeRUu::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
  background: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--glow-intensity) * 15px) calc(var(--glow-intensity) * 5px) rgb(var(--accent), 0.2);
}
#app-mount .categoryItemGuildCategory-3MisqI,
#app-mount .stickerCategory-2f6iSo {
  width: 100%;
  height: 48px;
  margin: 0;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
#app-mount .categoryItemGuildCategory-3MisqI foreignObject,
#app-mount .stickerCategory-2f6iSo foreignObject {
  -webkit-mask: none;
          mask: none;
}
#app-mount .categoryItemGuildCategory-3MisqI img,
#app-mount .categoryItemGuildCategory-3MisqI .guildIcon-2SUGiq,
#app-mount .stickerCategory-2f6iSo img,
#app-mount .stickerCategory-2f6iSo .guildIcon-2SUGiq {
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
}
#app-mount .categoryItemGuildCategory-3MisqI:hover,
#app-mount .stickerCategory-2f6iSo:hover {
  background: var(--background-modifier-hover);
}
#app-mount .categoryItemGuildCategory-3MisqI:hover .guildIcon-2SUGiq,
#app-mount .stickerCategory-2f6iSo:hover .guildIcon-2SUGiq {
  background: rgba(255, 255, 255, 0.1);
}
#app-mount .unicodeShortcut-3N8oDe {
  background: var(--bg-primary);
  -webkit-backdrop-filter: blur(var(--blur));
          backdrop-filter: blur(var(--blur));
  border-top: 1px solid var(--border);
}
#app-mount .content-1CboaJ {
  border-top: 1px solid var(--border);
}
#app-mount .bodyWrapper-1eSOtW,
#app-mount .wrapper-i1awk3 {
  border-top: 1px solid var(--border);
}
#app-mount .bodyWrapper-1eSOtW .scroller-2MALzE,
#app-mount .wrapper-i1awk3 .scroller-2MALzE {
  left: -7px;
  width: calc(100% + 8px);
}
#app-mount .wrapper-1NNaWG {
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border);
  -webkit-backdrop-filter: blur(var(--blur));
          backdrop-filter: blur(var(--blur));
}
#app-mount .emojiItem-277VFM.emojiItemSelected-2Lg50V {
  background: rgba(255, 255, 255, 0.1);
}
#app-mount .inspector-DFKXwB {
  border-top: 1px solid var(--border);
  background: transparent;
}
#app-mount .emojiListRow-3hshyU {
  padding: 0 8px;
}
#app-mount .emojiListRowMediumSize-2_-xbz {
  grid-template-columns: repeat(auto-fill, 45px);
}
#app-mount .wrapper-1NB3WY {
  flex: 1 1 auto;
}

#app-mount .messagesPopoutWrap-3zryHW {
  width: 550px;
}
#app-mount .header-1w9Q93 {
  background: transparent;
  border-bottom: 1px solid var(--border);
  box-shadow: none;
}
#app-mount .messagesPopout-24nkyi:not(.scroller-MIi2ab) {
  padding: 12px !important;
}
#app-mount .messageGroupWrapper-1jf_7C {
  border-radius: 0;
  border: none;
  background: transparent;
  margin-bottom: 32px;
}
#app-mount .messageGroupCozy-3v_RqN {
  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  margin-left: -16px;
}

#app-mount .messagesPopoutWrap-3zryHW,
#app-mount .recentMentionsPopout-2bI1ZN {
  background: var(--bg-primary);
  box-shadow: none;
  border: 1px solid var(--border);
  -webkit-backdrop-filter: blur(var(--blur));
          backdrop-filter: blur(var(--blur));
}
#app-mount .recentMentionsPopout-2bI1ZN .scroller-145h9c {
  padding: 0 !important;
}
#app-mount .recentMentionsPopout-2bI1ZN .scroller-145h9c > div {
  border-bottom: 1px solid var(--border);
  padding: 16px;
}
#app-mount .header-145e10 {
  background: transparent;
  border-bottom: 1px solid var(--border);
  padding: 0;
}
#app-mount .header-145e10 .button-1_oXub {
  height: 55px;
  margin: 0;
  border-radius: 0;
  background: transparent;
  transition: none;
}
#app-mount .header-145e10 .button-1_oXub:hover {
  background: var(--background-modifier-hover);
}
#app-mount .tab-TRrPC8 {
  height: 55px;
  padding: 0 12px;
  margin: 0;
  border-radius: 0;
  position: relative;
  overflow: visible;
}
#app-mount .tab-TRrPC8[aria-selected=true] {
  color: rgb(var(--accent));
  background: rgb(var(--accent), 0.1);
  text-shadow: 0 0 calc(var(--channel-glow-intensity) * 10px) rgb(var(--accent), 0.7);
}
#app-mount .tab-TRrPC8[aria-selected=true]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--glow-intensity) * 15px) calc(var(--glow-intensity) * 5px) rgb(var(--accent), 0.2);
}
#app-mount .container-iA3Qrz {
  border-bottom: 1px solid var(--border);
  margin-bottom: 0;
  padding: 16px !important;
}
#app-mount .channelHeader-DFRX8q {
  background: transparent;
  position: static;
  padding: 0 0 16px 14px;
}
#app-mount .messages-23can0 {
  background: transparent;
  padding: 0;
}
#app-mount .messageContainer-3VTXBC {
  padding: 0;
  border-radius: 0;
  background: transparent;
}

#app-mount .popoutContent-3RWpUF {
  background: var(--bg-primary);
  border-radius: 6px;
  -webkit-backdrop-filter: blur(var(--blur));
          backdrop-filter: blur(var(--blur));
  border: 1px solid var(--border);
  box-shadow: none;
}
#app-mount .guildSection-2Zyzy8 {
  background: transparent;
  border-top: 1px solid var(--border);
}

#app-mount #status-picker .description-3Cwkxk {
  display: none;
}

#app-mount .input-3eeNNl {
  padding-left: 36px !important;
}

#app-mount .tabBody-2dgbAs::before {
  content: none;
}
#app-mount .container-2cd8Mz {
  background: transparent;
}
#app-mount .container-2cd8Mz .title-338goq {
  margin: 0;
  padding: 16px;
}
#app-mount .peopleColumn-1wMU14 {
  background: var(--bg-secondary);
  border-right: 1px solid var(--border);
}
#app-mount .peopleList-2VBrVI {
  margin: 0;
}
#app-mount .peopleListItem-u6dGxF {
  margin: 0;
  padding: 0 0 0 16px;
  border-color: var(--border);
  border-radius: 0;
}
#app-mount .peopleListItem-u6dGxF:last-child {
  border-bottom: 1px solid var(--border);
}
#app-mount .peopleListItem-u6dGxF:hover {
  background: var(--background-modifier-hover);
}
#app-mount .actions-OJh0Kn {
  height: 100%;
}
#app-mount .actionButton-3-B2x- {
  height: 100%;
  width: 42px;
  border-radius: 0;
  margin: 0;
  background: transparent;
}
#app-mount .actionButton-3-B2x-:hover {
  background: var(--background-modifier-hover);
}
#app-mount .addFriendInputWrapper-kkoSV9 {
  background: var(--input-background);
  border: 2px solid transparent;
}
#app-mount .addFriendInputWrapper-kkoSV9:hover {
  border-color: rgba(255, 255, 255, 0.05);
}
#app-mount .addFriendInputWrapper-kkoSV9:focus-within {
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--glow-intensity) * 20px) calc(var(--glow-intensity) * 5px) rgb(var(--accent), 0.25);
}

#app-mount .nowPlayingColumn-1eCBCN {
  background: var(--bg-primary);
}
#app-mount .container-1oAagU {
  background: transparent;
}
#app-mount .scroller-hE2gWq {
  padding: 0 !important;
  border: none;
  margin: 0;
}
#app-mount .header-Imy05m {
  margin: 0;
  padding: 16px;
  border-bottom: 1px solid var(--border);
  font-size: 16px;
  line-height: 1;
  font-weight: normal;
  color: var(--text-normal);
}
#app-mount .itemCard-3Etziu {
  border-radius: 0;
  border: none;
  border-bottom: 1px solid var(--border);
  margin: 0;
  background: transparent;
}
#app-mount .itemCard-3Etziu:hover {
  background: var(--background-modifier-hover);
}
#app-mount .body-16rSsp {
  border-radius: 6px;
  border: 1px solid var(--border);
  background: var(--bg-primary);
}
#app-mount .section-3G9aLW {
  background: transparent;
}
#app-mount .separator-2OaeRP {
  background: var(--border);
}

#app-mount .discoverHeader-Ijkm_M {
  margin: 24px;
}
#app-mount .categoryItem-1QIroW {
  margin: 0;
  padding: 0;
  position: relative;
}
#app-mount .categoryItem-1QIroW.selectedCategoryItem-FHKU_o .layout-1qmrhw {
  background: rgb(var(--accent), 0.1);
  color: rgb(var(--accent));
}
#app-mount .categoryItem-1QIroW.selectedCategoryItem-FHKU_o path {
  fill: rgb(var(--accent));
}
#app-mount .categoryItem-1QIroW.selectedCategoryItem-FHKU_o .avatar-6qzftW,
#app-mount .categoryItem-1QIroW.selectedCategoryItem-FHKU_o .content-1U25dZ {
  filter: drop-shadow(0 0 calc(var(--glow-intensity) * 5px) rgb(var(--accent)));
}
#app-mount .categoryItem-1QIroW.selectedCategoryItem-FHKU_o::before {
  content: "";
  position: absolute;
  left: 0;
  height: 100%;
  width: 2px;
  background: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--glow-intensity) * 15px) calc(var(--glow-intensity) * 5px) rgb(var(--accent), 0.2);
}
#app-mount .viewWrapper-2sTW6t {
  max-width: unset;
}
#app-mount .pageWrapper-2PwDoS {
  background: var(--bg-secondary);
}
#app-mount .pageWrapper-2PwDoS .scroller-3j5xK2 {
  padding: 0 !important;
}
#app-mount .searchHeader-3ZIh2x {
  min-height: unset;
  height: 240px;
  border-bottom: 1px solid var(--border);
  position: fixed;
  padding: 0;
  top: 0;
  display: flex;
  justify-content: center;
  width: calc(100% - var(--channels-width));
  box-sizing: border-box;
  z-index: 1;
  background: var(--bg-primary);
  -webkit-backdrop-filter: blur(var(--blur));
          backdrop-filter: blur(var(--blur));
  margin: 0;
}
#app-mount .searchHeader-3ZIh2x img {
  display: none;
}
#app-mount .searchBox-pyIJJj {
  overflow: visible;
}
#app-mount .searchBox-31Zv9h {
  box-shadow: none;
  background: transparent;
  position: relative;
  padding: 0;
  border: none;
}
#app-mount .searchIcon-34RNw9 {
  display: none;
}
#app-mount .search-25t1e9 {
  width: 600px !important;
}
#app-mount .clear-1JYfB5 {
  position: absolute;
  right: -24px;
}
#app-mount .searchBoxInput-P0mWHW {
  padding-right: 52px !important;
  width: 100% !important;
}
#app-mount .cta-25g9OT {
  position: absolute;
  margin-right: 0;
  left: 50%;
  transform: translateX(-50%);
  top: 56px;
}
#app-mount .guildListSection-27K5In {
  padding: 248px 24px 24px;
  box-sizing: border-box;
}
#app-mount .guildList-3-B_6n {
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
}
#app-mount .footer-26kPv_ {
  padding: 24px;
}
#app-mount .card-2TuZPZ {
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
}
#app-mount .card-2TuZPZ:hover {
  box-shadow: var(--shadow-lg);
}

#app-mount .wrapper-WLdlSO {
  background: var(--bg-primary);
}
#app-mount .navigationBar-2Z_P4D {
  height: calc(var(--TB-height) + 1px);
  box-sizing: border-box;
  background: transparent;
  border-bottom: 1px solid var(--border);
}
#app-mount .planCard-vET3Ia {
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border);
}
#app-mount .planCard-vET3Ia:hover {
  box-shadow: var(--shadow-lg);
}
#app-mount .perksTable-H9sPBm {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border);
  border-radius: 6px;
}

#app-mount .applicationStore-2nk7Lo {
  background: transparent;
}
#app-mount .scroller-29cQFV {
  background: var(--bg-secondary);
}

#app-mount .layer-86YKbF[aria-label*=SETTINGS] {
  background: var(--bg-primary);
  -webkit-backdrop-filter: blur(var(--backdrop-blur));
          backdrop-filter: blur(var(--backdrop-blur));
  top: 0;
  left: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
#app-mount .layer-86YKbF[aria-label*=SETTINGS] .standardSidebarView-E9Pc3j {
  max-width: var(--settings-max-width);
  max-height: var(--settings-max-height);
  width: 90vw;
  height: 90vh;
  position: unset;
  background: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: 6px;
}
#app-mount .layer-86YKbF[aria-label*=SETTINGS] .contentRegion-3HkfJJ {
  flex: 1 1 auto;
  position: unset;
  height: 100%;
}
#app-mount .layer-86YKbF[aria-label*=SETTINGS] .toolsContainer-25FL6V {
  padding-top: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
  opacity: 0;
}
#app-mount .layer-86YKbF[aria-label*=SETTINGS] .tools-kIrEGr,
#app-mount .layer-86YKbF[aria-label*=SETTINGS] .container-O54IuJ {
  width: 100%;
  height: 100%;
}
#app-mount .layer-86YKbF[aria-label*=SETTINGS] .keybind-13vtq8 {
  display: none;
}
#app-mount .layer-86YKbF[aria-label*=SETTINGS] .closeButton-PCZcma {
  background: transparent;
  border: none;
  border-radius: 0;
  flex: 0;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

#app-mount .sidebarRegion-1VBisG {
  flex: 0 0 auto;
}
#app-mount .sidebarRegion-1VBisG .sidebarRegionScroller-FXiQOh {
  background: transparent;
  flex: 1;
  width: 100%;
}
#app-mount .sidebarRegion-1VBisG .sidebar-nqHbhN {
  padding: 0;
  overflow: hidden;
  border-radius: 6px 0 0 6px;
  width: 300px;
  border-right: 1px solid var(--border);
}
#app-mount .sidebarRegion-1VBisG .header-2Kx1US {
  padding: 10px 18px;
  color: var(--text-muted);
}
#app-mount .sidebarRegion-1VBisG .separator-2wx7h6 {
  height: 0;
  background: transparent;
  margin-bottom: 18px;
}
#app-mount .sidebarRegion-1VBisG .item-3XjbnG {
  padding: 10px 18px;
  margin: 0;
  border-radius: 0;
}
#app-mount .sidebarRegion-1VBisG .item-3XjbnG.selected-g-kMVV {
  background: rgb(var(--accent), 0.1) !important;
  position: relative;
  color: rgb(var(--accent)) !important;
  text-shadow: 0 0 calc(var(--glow-intensity) * 12px) rgb(var(--accent)), 0 0 calc(var(--glow-intensity) * 5px) rgb(var(--accent), 0.2);
}
#app-mount .sidebarRegion-1VBisG .item-3XjbnG.selected-g-kMVV::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 2px;
  background: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--glow-intensity) * 15px) calc(var(--glow-intensity) * 5px) rgb(var(--accent), 0.2);
}

#app-mount .layer-3QrUeG[aria-label*=SETTINGS] .divider-3LgWDL {
  border-color: var(--border);
}

#app-mount .contentRegion-3HkfJJ {
  background: transparent;
}
#app-mount .contentRegion-3HkfJJ > .customColumn-2n-oKU {
  padding-right: 0;
}
#app-mount .contentRegionScroller-2_GT_N {
  background: transparent;
  width: calc(90vw - 302px);
  max-height: var(--settings-max-height);
  max-width: var(--settings-content-width);
  height: 90vh;
}
#app-mount .contentColumnDefault-3eyv5o {
  max-width: unset;
  width: 100%;
  padding: 32px;
  z-index: 1;
}
#app-mount .content-2a4AW9 {
  min-width: 100%;
  margin: 0;
}
#app-mount .content-2a4AW9 > div[style="height: 60px;"] {
  display: none;
}
#app-mount .customColumn-2n-oKU,
#app-mount .contentColumn-1C7as6 {
  width: calc(90vh - 300px);
  max-width: var(--settings-content-width);
  padding-right: 32px;
}
#app-mount .contentColumn-1C7as6 > .customColumn-2n-oKU {
  padding-right: 0;
}
#app-mount .customScroller-m1-jZn > div {
  max-width: var(--settings-content-width);
  padding: 32px;
}
#app-mount .customContainer-dK1ozq {
  position: static;
}
#app-mount .customScroller-m1-jZn {
  width: 100%;
  max-height: var(--settings-max-height);
  max-width: var(--settings-content-width);
}

#app-mount .layer-86YKbF[aria-label=USER_SETTINGS] .accountProfileCard-lbN7n- {
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.02);
  border-radius: 6px;
}
#app-mount .layer-86YKbF[aria-label=USER_SETTINGS] .background-3d_SjE {
  margin: 16px 0 0 0;
  padding: 16px;
  border-radius: 0;
  border-top: 1px solid var(--border);
  background: transparent;
}
#app-mount .layer-86YKbF[aria-label=USER_SETTINGS] .fieldList-in8WkP {
  background: transparent;
}

#app-mount .layer-86YKbF[aria-label=GUILD_SETTINGS] .page-15bX59 {
  position: relative;
  width: 100%;
  max-width: var(--settings-content-width);
  min-width: calc(var(--settings-content-width) - 2px);
  max-height: var(--settings-max-height);
}
#app-mount .layer-86YKbF[aria-label=GUILD_SETTINGS] .sidebar-3K3Z4C {
  height: var(--settings-max-height);
}
#app-mount .layer-86YKbF[aria-label=GUILD_SETTINGS] .titleContainer-3fPic2 {
  padding: 24px;
  margin: 0;
  border-bottom: 1px solid var(--border);
  background: var(--bg-primary);
  -webkit-backdrop-filter: blur(var(--blur));
          backdrop-filter: blur(var(--blur));
}
#app-mount .layer-86YKbF[aria-label=GUILD_SETTINGS] .list-1AJFv_ {
  padding: 73px 0 0 !important;
  margin-top: -73px;
}
#app-mount .layer-86YKbF[aria-label=GUILD_SETTINGS] .list-1AJFv_ .item-3XjbnG {
  border-radius: 0;
  padding: 10px 24px;
  height: auto;
  margin: 0;
  position: relative;
}
#app-mount .layer-86YKbF[aria-label=GUILD_SETTINGS] .list-1AJFv_ .item-3XjbnG:hover {
  background: var(--background-modifier-hover);
}
#app-mount .layer-86YKbF[aria-label=GUILD_SETTINGS] .list-1AJFv_ .item-3XjbnG.selected-g-kMVV {
  background: var(--background-modifier-active);
}
#app-mount .layer-86YKbF[aria-label=GUILD_SETTINGS] .list-1AJFv_ .item-3XjbnG.selected-g-kMVV::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #fff;
  box-shadow: 0 0 calc(var(--glow-intensity) * 10px) #fff;
  width: 2px;
}
#app-mount .layer-86YKbF[aria-label=GUILD_SETTINGS] .scroller-39BnzZ {
  scroll-padding-top: 132px !important;
}
#app-mount .layer-86YKbF[aria-label=GUILD_SETTINGS] .contentWidth-3aWel5 {
  width: 100%;
  max-width: unset;
  padding: 24px 24px 0;
}
#app-mount .layer-86YKbF[aria-label=GUILD_SETTINGS] .headerContainer-7V7BBm {
  right: 0;
}
#app-mount .layer-86YKbF[aria-label=GUILD_SETTINGS] .headerContainer-7V7BBm .header-JUTO-g {
  margin-bottom: 0;
}
#app-mount .layer-86YKbF[aria-label=GUILD_SETTINGS] .header-JUTO-g {
  margin: -24px -24px 24px;
  padding: 24px 24px 0;
  background: var(--bg-primary);
  -webkit-backdrop-filter: blur(var(--blur));
          backdrop-filter: blur(var(--blur));
  border-bottom: 1px solid var(--border);
}
#app-mount .layer-86YKbF[aria-label=GUILD_SETTINGS] .tabBar-3DfKkN {
  border: none;
  margin: 0;
}
#app-mount .layer-86YKbF[aria-label=GUILD_SETTINGS] .tabBarItem-3nPo4Z {
  border: none;
  overflow: visible;
  position: relative;
}
#app-mount .layer-86YKbF[aria-label=GUILD_SETTINGS] .tabBarItem-3nPo4Z.selected-g-kMVV {
  border-color: rgb(var(--accent));
  color: rgb(var(--accent));
  text-shadow: 0 0 calc(var(--glow-intensity) * 10px) rgb(var(--accent));
}
#app-mount .layer-86YKbF[aria-label=GUILD_SETTINGS] .tabBarItem-3nPo4Z.selected-g-kMVV::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--glow-intensity) * 10px) rgb(var(--accent)), 0 0 calc(var(--glow-intensity) * 3px) rgb(var(--accent));
}
#app-mount .layer-86YKbF[aria-label=GUILD_SETTINGS] .searchContainer-2kJ46v,
#app-mount .layer-86YKbF[aria-label=GUILD_SETTINGS] .searchContainer-23hFke {
  margin: 24px 0;
}
#app-mount .layer-86YKbF[aria-label=GUILD_SETTINGS] .container-2oNtJn {
  background: var(--input-background);
  border-radius: 6px;
  border: 2px solid transparent;
  transition: var(--transition);
  transition-property: border-color, box-shadow;
}
#app-mount .layer-86YKbF[aria-label=GUILD_SETTINGS] .container-2oNtJn:hover {
  border-color: rgba(255, 255, 255, 0.05);
}
#app-mount .layer-86YKbF[aria-label=GUILD_SETTINGS] .container-2oNtJn:focus-within {
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--input-glow-intensity) * 15px) calc(var(--input-glow-intensity) * 2px) rgb(var(--accent), 0.25);
}
#app-mount .layer-86YKbF[aria-label=GUILD_SETTINGS] .container-3JOVER .list-38_JVu {
  scroll-padding-top: 193px !important;
}
#app-mount .layer-86YKbF[aria-label=GUILD_SETTINGS] .content-2a4AW9 > div[style="height: 201px;"] {
  height: 193px !important;
}
#app-mount .layer-86YKbF[aria-label=GUILD_SETTINGS] .previewContainer-1xQAsw .theme-light {
  display: none;
}

#app-mount .backdrop-2ByYRN {
  background: var(--backdrop-background) !important;
  -webkit-backdrop-filter: blur(var(--backdrop-blur)) !important;
          backdrop-filter: blur(var(--backdrop-blur)) !important;
  opacity: 1 !important;
  -webkit-animation: fadeIn 0.2s ease forwards;
          animation: fadeIn 0.2s ease forwards;
}
#app-mount .root-g14mjS {
  box-shadow: none !important;
  border-radius: 6px;
  border: 1px solid var(--border);
  background: var(--bg-primary);
}
#app-mount .footer-VCsJQY,
#app-mount .footer-31IekZ {
  background: transparent;
  border-top: 1px solid var(--border);
  -webkit-backdrop-filter: blur(var(--blur));
          backdrop-filter: blur(var(--blur));
  box-shadow: none;
}
#app-mount .message-G6O-Wv {
  background: transparent;
  box-shadow: none;
  padding: 0;
  margin-left: -16px;
}

#app-mount .root-8LYsGj {
  overflow: visible;
  border-radius: 0;
}
#app-mount .root-8LYsGj .tabBarContainer-sCZC4w {
  position: absolute;
  top: -1px;
  left: -57px;
  height: 100%;
  width: 56px;
  border: 1px solid var(--border);
  padding: 0;
  background: var(--bg-primary);
  z-index: 1;
  border-radius: 6px 0 0 6px;
  overflow: hidden;
}
#app-mount .root-8LYsGj .tabBar-2hXqzU {
  flex-direction: column;
}
#app-mount .root-8LYsGj .tabBarItem-30Te4- {
  border: none;
  position: relative;
  overflow: visible;
  font-size: 0;
  height: 48px;
  margin: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#app-mount .root-8LYsGj .tabBarItem-30Te4-::after {
  content: "";
  width: 24px;
  height: 24px;
  background: var(--interactive-normal);
}
#app-mount .root-8LYsGj .tabBarItem-30Te4-[aria-controls=user_info-tab]::after {
  -webkit-mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>');
          mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>');
}
#app-mount .root-8LYsGj .tabBarItem-30Te4-[aria-controls=activity-tab]::after {
  -webkit-mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>');
          mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>');
}
#app-mount .root-8LYsGj .tabBarItem-30Te4-[aria-controls=mutual_guilds-tab]::after {
  -webkit-mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>');
          mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>');
}
#app-mount .root-8LYsGj .tabBarItem-30Te4-[aria-controls=mutual_friends-tab]::after {
  -webkit-mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>');
          mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>');
}
#app-mount .root-8LYsGj .tabBarItem-30Te4-:hover {
  background: var(--background-modifier-hover);
}
#app-mount .root-8LYsGj .tabBarItem-30Te4-:hover::after {
  background: var(--interactive-hover);
}
#app-mount .root-8LYsGj .tabBarItem-30Te4-.selected-g-kMVV {
  color: rgb(var(--accent));
  text-shadow: 0 0 calc(var(--glow-intensity) * 10px) rgb(var(--accent), 0.8);
}
#app-mount .root-8LYsGj .tabBarItem-30Te4-.selected-g-kMVV::before {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 2px;
  height: 100%;
  background: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--glow-intensity) * 10px) rgb(var(--accent));
}
#app-mount .root-8LYsGj .tabBarItem-30Te4-.selected-g-kMVV::after {
  background: rgb(var(--accent));
}
#app-mount .topSection-13QKHs {
  background: transparent;
}
#app-mount .header-S26rhB {
  position: unset;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 24px;
  box-sizing: border-box;
  margin-top: -60px;
}
#app-mount .header-S26rhB .avatar-3QF_VA {
  position: relative;
  left: 0;
  margin-left: 0;
  top: 0;
}
#app-mount .headerTop-1PNKck {
  position: static;
  margin-bottom: 30px;
}
#app-mount .badgeList-2aoHPw {
  padding-right: 0;
  margin-right: 0;
}
#app-mount .nameTag-2Nlmsy {
  margin: 12px 24px 24px;
}
#app-mount .relationshipButtons-3ByBpj {
  position: absolute;
  bottom: 16px;
  left: -56px;
  flex-direction: column;
  z-index: 2;
}
#app-mount .relationshipButtons-3ByBpj .actionButton-iarQTd {
  height: 48px;
  width: 56px;
  padding: 0;
  min-width: unset;
  background: transparent;
  border-radius: 0;
  transition: none;
  margin-bottom: 12px;
}
#app-mount .relationshipButtons-3ByBpj .actionButton-iarQTd::before {
  content: "";
  width: 24px;
  height: 24px;
  background: var(--interactive-normal);
  -webkit-mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>');
          mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>');
}
#app-mount .relationshipButtons-3ByBpj .actionButton-iarQTd:hover {
  background: var(--background-modifier-hover);
}
#app-mount .relationshipButtons-3ByBpj .actionButton-iarQTd:hover .contents-3ca1mk {
  opacity: 1;
  visibility: visible;
}
#app-mount .relationshipButtons-3ByBpj .contents-3ca1mk {
  position: absolute;
  top: -46px;
  background: var(--bg-primary);
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid var(--border);
  -webkit-backdrop-filter: blur(var(--blur));
          backdrop-filter: blur(var(--blur));
  overflow: visible;
  opacity: 0;
  visibility: hidden;
  transition: var(--transition);
  transition-property: opacity, visibility;
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
#app-mount .relationshipButtons-3ByBpj .additionalActionsIcon-3Cy8UU {
  margin-left: 0;
}
#app-mount .customStatusActivity-WKWGD- {
  padding: 0 24px 24px;
}
#app-mount .body-1Ukv50 {
  background: transparent;
  height: 100%;
  min-height: 340px;
  max-height: 340px;
  border-top: 1px solid var(--border);
}
#app-mount .infoScroller-1QMpon {
  padding: 24px !important;
}
#app-mount .infoScroller-1QMpon > div[style*="height: 24px"] {
  display: none;
}
#app-mount .userInfoSection-2u2hir {
  padding: 0;
  border: none;
}
#app-mount .userInfoSection-2u2hir + .userInfoSection-2u2hir {
  margin-top: 42px;
}
#app-mount .userBio-2-tr00 {
  margin-bottom: 24px;
}
#app-mount .connectedAccounts-1YaT2t {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
}
#app-mount .connectedAccount-1xKpli {
  margin: 0;
  width: 100%;
  box-sizing: border-box;
  border-radius: 0 6px 6px 0;
  border-color: var(--border);
  padding: 12px 16px 12px 18px;
  position: relative;
}
#app-mount .connectedAccount-1xKpli img[src*="37f15a06d062bdd0fc252d2b35d0b0bb"] + div {
  --connection-colour: 63 143 247;
}
#app-mount .connectedAccount-1xKpli img[src*="94dc6f30a819026fa295d85f1f72b4ab"] + div {
  --connection-colour: 206 161 70;
}
#app-mount .connectedAccount-1xKpli img[src*="316ed923548387f8983e28a3804e6712"] + div {
  --connection-colour: 0 120 215;
}
#app-mount .connectedAccount-1xKpli img[src*=d897626dfa2016ea3ad0af935acb6070] + div, #app-mount .connectedAccount-1xKpli img[src*="6a853b4c87fce386cbfef4a2efbacb09"] + div {
  --connection-colour: 255 255 255;
}
#app-mount .connectedAccount-1xKpli img[src*=eaeac24163b35f7526704a3d9b3c7722] + div {
  --connection-colour: 30 215 96;
}
#app-mount .connectedAccount-1xKpli img[src*=ca71e0b8818221eea1deebbaf8dc6518] + div {
  --connection-colour: 145 70 255;
}
#app-mount .connectedAccount-1xKpli img[src*="57ee9535485efae7eb923ed4893abb57"] + div {
  --connection-colour: 217 37 42;
}
#app-mount .connectedAccount-1xKpli img[src*="85cf2b49d2a185c98ec8e383ad5a05d6"] + div {
  --connection-colour: 29 161 242;
}
#app-mount .connectedAccount-1xKpli img[src*=f3224f560c8f5974355596a4f7e9ce19] + div {
  --connection-colour: 255 69 0;
}
#app-mount .connectedAccount-1xKpli img[src*="1fa6585cbb8c0fe21188e26d19fc6609"] + div {
  --connection-colour: 55 178 56;
}
#app-mount .connectedAccountName-j0meX4 {
  line-height: normal;
  max-width: 140px;
}
#app-mount .connectedAccountNameInner-t24B11 {
  --connection-colour: var(--accent);
}
#app-mount .connectedAccountNameInner-t24B11::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 2px;
  background: rgb(var(--connection-colour));
  box-shadow: 0 0 calc(var(--glow-intensity) * 10px) rgb(var(--connection-colour));
}
#app-mount .note-3M15gE {
  margin: 0;
}
#app-mount .listScroller-entkMk {
  padding: 0 !important;
}
#app-mount .listScroller-entkMk > div[style*=height] {
  display: none;
}
#app-mount .listRow-2nO1T6 {
  margin: 0;
  padding: 8px 10px;
}
#app-mount .listRow-2nO1T6:hover {
  background: var(--background-modifier-hover);
  border-radius: 0;
}
#app-mount .listAvatar-1BbvHX.iconActiveMedium-27_R5B {
  border-radius: 6px;
}

#app-mount .uploadModal-2ie9O_ {
  background: var(--bg-primary);
  border-radius: 6px;
  border: 1px solid var(--border);
  box-shadow: none;
}
#app-mount .uploadModal-2ie9O_ .inner-rBP-MS {
  margin: 0;
}
#app-mount .uploadModal-2ie9O_ .channelTextArea-1VQBuV {
  background: var(--input-background);
  border: 2px solid transparent;
  transition: var(--transition);
  transition-property: border-color, box-shadow;
  margin-bottom: 0;
}
#app-mount .uploadModal-2ie9O_ .channelTextArea-1VQBuV:hover {
  border-color: rgba(255, 255, 255, 0.05);
}
#app-mount .uploadModal-2ie9O_ .channelTextArea-1VQBuV:focus-within {
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--input-glow-intensity) * 20px) calc(var(--input-glow-intensity) * 5px) rgb(var(--accent), 0.25);
}
#app-mount .uploadModal-2ie9O_ .slateTextArea-27tjG0 {
  padding-left: 16px;
}
#app-mount .image-2ssF8k {
  width: 100% !important;
  height: auto !important;
  max-height: 298px;
  margin: 0 !important;
  box-shadow: none;
  background: transparent;
  border-radius: 6px 6px 0 0;
}
#app-mount .description-2AJi-V {
  border-top: 1px solid var(--border);
  padding: 24px 24px 0;
}
#app-mount .comment-1kpwc5 {
  padding: 24px;
  margin: 0;
}

#app-mount .content-2hZxGK {
  padding: 24px !important;
}
#app-mount .override-1sK4r0 {
  border-radius: 0;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
  margin-bottom: 0;
}
#app-mount .override-1sK4r0:nth-child(2) {
  border-radius: 6px 6px 0 0;
}
#app-mount .override-1sK4r0:not(:last-child) {
  border-bottom: none;
}
#app-mount .override-1sK4r0:last-child {
  border-radius: 0 0 6px 6px;
}

#app-mount .quickswitcher-pKcM9U {
  background: transparent;
  box-shadow: none;
  padding: 0;
  border-radius: 0;
}
#app-mount .input-3r5zZY {
  background: var(--input-background);
  border: 2px solid transparent;
  transition: var(--transition);
  transition-property: border-color, box-shadow;
  padding: 0 24px;
  box-shadow: var(--shadow-lg);
}
#app-mount .input-3r5zZY:hover {
  border-color: rgba(255, 255, 255, 0.05);
}
#app-mount .input-3r5zZY:focus-within {
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--input-glow-intensity) * 20px) calc(var(--input-glow-intensity) * 5px) rgb(var(--accent), 0.25);
}
#app-mount .scroller-2qwVWY {
  margin: 24px 0 0;
  box-shadow: var(--shadow-lg);
  border-radius: 6px;
  overflow: hidden;
  max-height: 50vh;
  background: var(--bg-primary);
  border: 1px solid var(--border);
}
#app-mount .scroller-2qwVWY div[style="height: 15px;"] {
  display: none;
}
#app-mount .content-2a4AW9 {
  height: 100% !important;
}
#app-mount .header-1ZpMzy {
  margin: 0;
  padding: 10px 16px;
}
#app-mount .result-u66Ywh {
  border-radius: 0;
  padding: 10px 16px;
  height: auto;
}
#app-mount .result-u66Ywh[aria-selected=true] {
  background: var(--background-modifier-hover);
}
#app-mount .content-vQY7Mf {
  height: auto;
  padding: 0;
  line-height: 1;
}
#app-mount .protip-1jXzAl {
  display: none;
}

.full-motion .input-3r5zZY,
.full-motion .scroller-2qwVWY {
  -webkit-animation: fadeIn 0.2s ease forwards;
          animation: fadeIn 0.2s ease forwards;
}

#app-mount .perks-26lTSw {
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
}
#app-mount .perkRow-10K6XE {
  margin: 0;
  padding: 16px;
  border-color: var(--border);
}

@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
#app-mount .bd-addon-controls {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 16px 32px;
  margin: 0 -32px;
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border);
  -webkit-backdrop-filter: blur(var(--blur));
          backdrop-filter: blur(var(--blur));
  z-index: 1;
}
#app-mount .bd-search-wrapper {
  padding: 0;
  border-radius: 0;
  background: transparent;
  position: relative;
}
#app-mount .bd-search-wrapper .bd-search {
  padding: 8px 12px;
  background: var(--input-background);
  border: 2px solid transparent;
  border-radius: 6px;
  transition: var(--transition);
  transition-property: border-color, box-shadow;
  position: relative;
  width: 250px;
}
#app-mount .bd-search-wrapper .bd-search:hover {
  border-color: rgba(255, 255, 255, 0.05);
}
#app-mount .bd-search-wrapper .bd-search:focus-within {
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--input-glow-intensity) * 15px) calc(var(--input-glow-intensity) * 2px) rgb(var(--accent), 0.25);
}
#app-mount .bd-search-wrapper > svg {
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
}
#app-mount .bd-addon-list {
  margin-top: 24px;
}
#app-mount .bd-addon-list .bd-switch {
  position: static;
}
#app-mount .bd-addon-list .bd-switch.bd-switch-checked::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgb(var(--accent), 0.07);
  z-index: -1;
  pointer-events: none;
}
#app-mount .bd-addon-list .bd-switch.bd-switch-checked::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 2px;
  background: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--glow-intensity) * 15px) calc(var(--glow-intensity) * 5px) rgb(var(--accent), 0.2);
  pointer-events: none;
}
#app-mount .bd-addon-list .bd-switch input {
  width: 40px;
  height: 24px;
}
#app-mount .bd-addon-card {
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
  margin-bottom: 0;
  border-radius: 0;
  position: relative;
}
#app-mount .bd-addon-card:first-child {
  border-radius: 6px 6px 0 0;
}
#app-mount .bd-addon-card:not(:last-child) {
  border-bottom: none;
}
#app-mount .bd-addon-card:last-child {
  border-radius: 0 0 6px 6px;
}
#app-mount .bd-addon-header {
  background: transparent;
  padding-bottom: 0;
}
#app-mount .bd-description {
  padding: 0;
  margin-bottom: 0;
}

.bd-toasts .bd-toast {
  padding: 12px 16px;
  -webkit-backdrop-filter: blur(var(--blur));
          backdrop-filter: blur(var(--blur));
  box-shadow: none;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid var(--border);
  border-radius: 6px;
}
.bd-toasts .bd-toast.toast-success {
  background: rgba(67, 182, 131, 0.7);
}
.bd-toasts .bd-toast.toast-success::before {
  -webkit-mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>');
          mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>');
}
.bd-toasts .bd-toast.toast-warn {
  background: rgba(255, 166, 0, 0.7);
}
.bd-toasts .bd-toast.toast-warn::before {
  -webkit-mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>');
          mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>');
}
.bd-toasts .bd-toast.toast-error {
  background: rgba(240, 71, 71, 0.7);
}
.bd-toasts .bd-toast.toast-error::before {
  -webkit-mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>');
          mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>');
}
.bd-toasts .bd-toast.toast-info {
  background: rgba(75, 145, 226, 0.7);
}
.bd-toasts .bd-toast.toast-info::before {
  -webkit-mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>');
          mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>');
}
.bd-toasts .bd-toast.icon {
  background-image: none;
  display: flex;
  align-items: center;
}
.bd-toasts .bd-toast.icon::before {
  content: "";
  width: 24px;
  height: 24px;
  display: block;
  margin-right: 8px;
  background: #fff;
}

#app-mount .contentTransitionWrap-1YD530 {
  position: relative;
}
#app-mount .repoList-9JnAPs .contentRegionScroller-2_GT_N {
  padding-top: 96px;
}
#app-mount .repoHeader-2KfNvH {
  padding: 0;
  position: absolute;
  top: 0;
  width: calc(100% - 2px);
  box-sizing: border-box;
  z-index: 1000;
  background: var(--bg-primary);
  -webkit-backdrop-filter: blur(var(--blur));
          backdrop-filter: blur(var(--blur));
}
#app-mount .repoHeader-2KfNvH > div {
  max-width: unset;
  padding: 0;
}
#app-mount .repoHeader-2KfNvH > div:first-child {
  padding: 24px 24px 0 24px;
}
#app-mount .repoHeader-2KfNvH > div:last-child {
  padding: 0 24px;
  border-color: var(--border);
}
#app-mount .repoHeader-2KfNvH .container-2oNtJn {
  background: var(--input-background);
  border: 2px solid transparent;
  border-radius: 6px;
  transition: var(--transition);
  transition-property: border-color, box-shadow;
}
#app-mount .repoHeader-2KfNvH .container-2oNtJn .input-2m5SfJ {
  padding: 4px 10px;
  height: auto;
}
#app-mount .repoHeader-2KfNvH .container-2oNtJn .iconLayout-3Bjizv {
  height: 100%;
  width: 32px;
}
#app-mount .repoHeader-2KfNvH .container-2oNtJn:hover {
  border-color: rgba(255, 255, 255, 0.05);
}
#app-mount .repoHeader-2KfNvH .container-2oNtJn:focus-within {
  border-color: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--input-glow-intensity) * 15px) calc(var(--input-glow-intensity) * 2px) rgb(var(--accent), 0.25);
}
#app-mount .card-x5zW6z {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
  box-shadow: none;
}
#app-mount .card-x5zW6z .header-4hHJgv {
  border-bottom: 1px solid var(--border);
}
#app-mount .card-x5zW6z .iconWrapper-eK7GO6 {
  border-radius: 6px;
  background: var(--bg-primary);
  border: 1px solid var(--border);
}
#app-mount .card-x5zW6z:hover {
  box-shadow: var(--shadow-lg);
}

#app-mount .guild-profile .header-4zuFdR {
  justify-content: flex-start;
}
#app-mount .guild-profile .badgeList-1R1WgZ {
  flex-wrap: nowrap;
  margin-bottom: 6px;
}
#app-mount .guild-profile .header-top {
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 10px;
  margin-left: 10px;
  align-items: flex-start;
}
#app-mount .guild-profile .guild-info > div:first-child {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 12px;
}
#app-mount .guild-profile .guild-info > div:first-child > div {
  margin: 0;
}
#app-mount .guild-profile .h5-18_1nd {
  color: var(--header-primary);
}
#app-mount .root-3QyAh1 .tabBarItem-3dfX8P[aria-controls=guild_info-tab]::after {
  -webkit-mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>');
          mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>');
}
#app-mount .root-3QyAh1 .tabBarItem-3dfX8P[aria-controls=guild_roles-tab]::after {
  -webkit-mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>');
          mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>');
}
#app-mount .root-3QyAh1 .tabBarItem-3dfX8P[aria-controls=friends-tab]::after {
  -webkit-mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>');
          mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>');
}
#app-mount .root-3QyAh1 .tabBarItem-3dfX8P[aria-controls=blocked_users-tab]::after {
  -webkit-mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6" /></svg>');
          mask: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6" /></svg>');
}

#app-mount .chatContent-a9vAAp .wrapper-1VLyxH {
  width: var(--chat-avatar-size) !important;
  height: var(--chat-avatar-size) !important;
}

#app-mount .container-6sXIoE {
  border: none;
  border-top: 1px solid var(--border);
  margin-bottom: 0;
  padding: 16px;
  order: -1;
}
#app-mount .container-6sXIoE .timeline-UWmgAx {
  margin: 16px 0 0 0;
}
#app-mount .container-6sXIoE .grabber-7sd5f5 {
  width: 12px;
  height: 12px;
  margin-top: -4px;
  margin-left: -4px;
  box-shadow: 0 0 calc(var(--glow-intensity) * 10px) calc(var(--glow-intensity) * 2px) rgba(255, 255, 255, 0.3);
}
#app-mount .container-6sXIoE .barFill-Dhkah7 {
  background: rgb(var(--accent));
  box-shadow: 0 0 calc(var(--glow-intensity) * 10px) calc(var(--glow-intensity) * 2px) rgb(var(--accent), 0.3);
}

.styledGuildsAsChannels-DNHtg_ #app-mount .guilds-2JjMmN {
  width: calc(var(--guilds-width) * 2 + 44px) !important;
}
.styledGuildsAsChannels-DNHtg_ #app-mount .listItem-3SmSlK {
  margin: 0 16px var(--server-spacing);
}
.styledGuildsAsChannels-DNHtg_ #app-mount .listItem-3SmSlK [class^=pill] {
  left: -4px;
  top: -4px;
  transform: none;
  width: calc(100% - 26px);
  height: calc(100% + 8px);
  overflow: visible;
  margin-left: -2px;
  box-sizing: border-box;
}
.styledGuildsAsChannels-DNHtg_ #app-mount .listItem-3SmSlK [class^=pill] .item-2LIpTv {
  height: 100% !important;
  width: 100%;
  margin: 0;
  border-radius: 4px;
}
.styledGuildsAsChannels-DNHtg_ #app-mount .expandedFolderBackground-1kSAf6 {
  width: calc(100% - 34px);
  border-radius: 4px;
  top: 1px;
  margin-left: -1px;
}
* {
  --rs-version: "2.0.6";
}

#app-mount .wrapper-1VLyxH {
  border-radius: var(--rs-avatar-shape);
}
#app-mount .wrapper-1VLyxH svg:not(*) {
  overflow: visible;
}
#app-mount .wrapper-1VLyxH foreignObject {
  -webkit-mask: none;
          mask: none;
}
#app-mount .wrapper-1VLyxH .dots-1BwzZQ circle {
  cy: -8 !important;
}
#app-mount .wrapper-1VLyxH .dots-1BwzZQ circle:nth-child(1) {
  cx: -8.5 !important;
}
#app-mount .wrapper-1VLyxH .dots-1BwzZQ circle:nth-child(2) {
  cx: -2.25 !important;
}
#app-mount .wrapper-1VLyxH .dots-1BwzZQ circle:nth-child(3) {
  cx: 4 !important;
}
#app-mount .wrapper-1VLyxH .mask-1FEkla > rect[x="22"] {
  x: 0;
  y: 0;
}
#app-mount .wrapper-1VLyxH .pointerEvents-9SZWKj[x="14.5"] {
  fill: rgba(0, 0, 0, 0.5) !important;
  width: 30px;
  height: 30px;
  x: 1;
  y: 1;
}
#app-mount .wrapper-1VLyxH img, #app-mount .wrapper-1VLyxH.avatar-AvHqJA {
  border-radius: var(--rs-avatar-shape);
}
#app-mount .wrapper-1VLyxH svg[width="25"][height="15"] > rect {
  rx: calc(var(--rs-avatar-shape) * 2) !important;
  ry: calc(var(--rs-avatar-shape) * 2) !important;
}
#app-mount .wrapper-1VLyxH[style*="80px"] svg.cursorDefault--wfhy5 rect, #app-mount .wrapper-1VLyxH[style*="120px"] svg.cursorDefault--wfhy5 rect {
  ry: calc(var(--rs-avatar-shape) * 3.3);
  rx: calc(var(--rs-avatar-shape) * 3.3);
}
#app-mount .wrapper-1VLyxH rect {
  x: 0;
  y: 0;
  width: 100%;
  height: 100%;
  -webkit-mask: none;
          mask: none;
  display: block;
  rx: var(--rs-avatar-shape);
  ry: var(--rs-avatar-shape);
  fill: transparent !important;
  stroke-width: var(--rs-small-width);
}
#app-mount .wrapper-1VLyxH rect[fill="#43b581"], #app-mount .wrapper-1VLyxH rect[fill="#3ba55c"], #app-mount .wrapper-1VLyxH rect[fill="rgba(67, 181, 129, 1)"], #app-mount .wrapper-1VLyxH rect[mask*=online], #app-mount .wrapper-1VLyxH rect[fill*="hsl(139"] {
  stroke: var(--rs-online-color);
}
#app-mount .wrapper-1VLyxH rect[fill="#faa61a"], #app-mount .wrapper-1VLyxH rect[fill="rgba(250, 166, 26, 1)"], #app-mount .wrapper-1VLyxH rect[mask*=idle], #app-mount .wrapper-1VLyxH rect[fill*="hsl(38"] {
  stroke: var(--rs-idle-color);
}
#app-mount .wrapper-1VLyxH rect[fill="#f04747"], #app-mount .wrapper-1VLyxH rect[fill="rgba(240, 71, 71, 1)"], #app-mount .wrapper-1VLyxH rect[fill="#ed4245"], #app-mount .wrapper-1VLyxH rect[mask*=dnd], #app-mount .wrapper-1VLyxH rect[fill*="hsl(359"] {
  stroke: var(--rs-dnd-color);
}
#app-mount .wrapper-1VLyxH rect[fill="#593695"], #app-mount .wrapper-1VLyxH rect[mask*=streaming] {
  stroke: var(--rs-streaming-color);
}
#app-mount .wrapper-1VLyxH rect[fill="#747f8d"], #app-mount .wrapper-1VLyxH rect[mask*=offline], #app-mount .wrapper-1VLyxH rect[fill=NaN] {
  stroke: var(--rs-offline-color);
}
#app-mount .wrapper-1VLyxH rect[fill="#747f8d"], #app-mount .wrapper-1VLyxH rect[mask*=invisible], #app-mount .wrapper-1VLyxH rect[fill="rgba(116, 127, 141, 1)"], #app-mount .wrapper-1VLyxH rect[fill*="hsl(214"] {
  stroke: var(--rs-invisible-color);
}
#app-mount .wrapper-1VLyxH rect[x="16"] {
  width: 24px;
  height: 24px;
}
#app-mount .wrapper-1VLyxH rect[x="28"] {
  width: 40px;
  height: 40px;
  overflow: visible;
}
#app-mount .wrapper-1VLyxH[style*="32px"] rect {
  width: 32px;
  height: 32px;
  x: -14.5;
  y: -17;
  position: relative;
  z-index: 0;
}
#app-mount .wrapper-1VLyxH[style*="40px"] > svg > svg rect {
  width: 40px;
  height: 40px;
  x: -19;
  y: -20;
  ry: calc(var(--rs-avatar-shape) * 3.3);
  rx: calc(var(--rs-avatar-shape) * 3.3);
}
#app-mount .wrapper-1VLyxH[style*="40px"] foreignObject[mask*=mobile] img {
  width: calc(100% - 12px);
}
#app-mount .wrapper-1VLyxH[style*="80px"] svg.cursorDefault--wfhy5 rect {
  x: -48;
  y: -52;
}
#app-mount .wrapper-1VLyxH[style*="80px"] rect {
  width: 80px;
  height: 80px;
  stroke-width: var(--rs-medium-width);
}
#app-mount .wrapper-1VLyxH[style*="80px"] img {
  -webkit-clip-path: inset(calc(var(--rs-medium-spacing) + 1px) calc(var(--rs-medium-spacing) + 1px) round var(--rs-avatar-shape));
          clip-path: inset(calc(var(--rs-medium-spacing) + 1px) calc(var(--rs-medium-spacing) + 1px) round var(--rs-avatar-shape));
}
#app-mount .wrapper-1VLyxH[style*="120px"] svg.cursorDefault--wfhy5 rect {
  x: -70;
  y: -76;
}
#app-mount .wrapper-1VLyxH[style*="120px"] rect {
  width: 120px;
  height: 120px;
  stroke-width: var(--rs-large-width);
}
#app-mount .wrapper-1VLyxH[style*="120px"] img {
  -webkit-clip-path: inset(calc(var(--rs-large-spacing) + 1px) calc(var(--rs-large-spacing) + 1px) round var(--rs-avatar-shape));
          clip-path: inset(calc(var(--rs-large-spacing) + 1px) calc(var(--rs-large-spacing) + 1px) round var(--rs-avatar-shape));
}
#app-mount .wrapper-1VLyxH:not([style*="80px;"]):not([style*="120px;"]):not([style*="16px"]) > svg > foreignObject:not(:only-child) img {
  -webkit-clip-path: inset(calc(var(--rs-small-spacing) + 1px) calc(var(--rs-small-spacing) + 1px) round var(--rs-avatar-shape));
          clip-path: inset(calc(var(--rs-small-spacing) + 1px) calc(var(--rs-small-spacing) + 1px) round var(--rs-avatar-shape));
}
#app-mount .wrapper-1VLyxH[style="width: 16px; height: 16px;"] rect {
  display: none;
}
#app-mount .wrapper-1VLyxH[style="width: 16px; height: 16px;"] img {
  -webkit-clip-path: none;
          clip-path: none;
}
#app-mount .wrapper-1VLyxH foreignObject[mask*=mobile] {
  width: calc(100% + 4px);
}
#app-mount .wrapper-1VLyxH foreignObject[mask*=mobile][width="32"] img {
  width: calc(100% - 12px);
}
#app-mount .wrapper-1VLyxH foreignObject[mask*=mobile][width="80"] img {
  width: calc(100% - 16px);
}
#app-mount .wrapper-1VLyxH foreignObject[mask*=mobile][width="80"]:after {
  width: 14px;
  height: 18px;
  top: 75%;
}
#app-mount .wrapper-1VLyxH foreignObject[mask*=mobile][width="120"] img {
  width: calc(100% - 22px);
}
#app-mount .wrapper-1VLyxH foreignObject[mask*=mobile][width="120"]:after {
  width: 24px;
  height: 20px;
  top: 75%;
}
#app-mount .wrapper-1VLyxH foreignObject[mask*=mobile]:after {
  content: "";
  display: var(--rs-phone-visible, block);
  -webkit-mask: url('data:image/svg+xml; utf-8,<svg aria-hidden="true" focusable="false" data-prefix="fas" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg>') center no-repeat;
          mask: url('data:image/svg+xml; utf-8,<svg aria-hidden="true" focusable="false" data-prefix="fas" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg>') center no-repeat;
  position: absolute;
  width: 10px;
  height: 14px;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  background: var(--rs-phone-color, var(--rs-online-color));
  z-index: 1;
}
#app-mount .wrapper-1VLyxH foreignObject[mask*=mobile] + rect {
  stroke: var(--rs-phone-color, var(--rs-online-color));
}
#app-mount .message-2CShn3 .wrapper-1VLyxH foreignObject[mask*=mobile] {
  width: calc(100% + 3px);
}
#app-mount .message-2CShn3 .wrapper-1VLyxH rect[mask*=typing] {
  width: calc(100% - 9px);
}
#app-mount .avatarHint-k7pYop foreignObject {
  -webkit-mask: none;
          mask: none;
}
#app-mount .avatarHintInner-2HUAWj {
  border-radius: var(--rs-avatar-shape) !important;
  padding-top: 0;
  width: calc(100% - var(--rs-medium-width) - var(--rs-medium-spacing) + 2px);
  height: calc(100% - var(--rs-medium-width) - var(--rs-medium-spacing) + 2px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: relative;
}
#app-mount .memberOffline-2lN7gt img {
  -webkit-clip-path: none !important;
          clip-path: none !important;
}
#app-mount .offline-22aM7E img {
  -webkit-clip-path: none !important;
          clip-path: none !important;
}
#app-mount .avatarWrapperNonUserBot-3fzpUZ .wrapper-1VLyxH img {
  -webkit-clip-path: none !important;
          clip-path: none !important;
}

.userInfo-2WpsYG,
.peopleListItem-u6dGxF {
  overflow: visible;
}

.info-1sUqUG .colorMuted-20987_:last-child:after {
  content: "RadialStatus " var(--rs-version);
  display: block;
}
* {
  --rs-small-spacing: 2px;
  /* Spacing between profile image and outer ring on small icons (e.g. member list) | Default: 2px */
  --rs-medium-spacing: 4px;
  /* Spacing between profile image and outer ring on medium icons (e.g. user popout) | Default: 4px */
  --rs-large-spacing: 4px;
  /* Spacing between profile image and outer ring on medium icons (e.g. user popout fullscreen) | Default: 4px */
  --rs-small-width: 1.5px;
  /* Ring width (follows same sizing as above) | Default: 1.5px */
  --rs-medium-width: 2px;
  /* Default: 2px */
  --rs-large-width: 2px;
  /* Default: 2px */
  --rs-avatar-shape: var(--avatar-roundness, 50%);
  /* Border-radius for profile image | Default: 50% */
  /* Customizable colors */
  --rs-online-color: #43b581;
  /* Default: #43b581 */
  --rs-idle-color: #faa61a;
  /* Default: #faa61a */
  --rs-dnd-color: #f04747;
  /* Default: #f04747 */
  --rs-offline-color: #636b75;
  /* Default: #636b75 */
  --rs-streaming-color: #643da7;
  /* Default: #643da7 */
  --rs-invisible-color: #747f8d;
  /* Default: #747f8d */
  --rs-phone-color: var(--rs-online-color);
  /* Color of the phone for mobile users | Default: var(--rs-online-color) */
  --rs-phone-visible: block;
  /* Visibility of the phone for mobile users | Default: block */
}

.wrapper-1VLyxH[aria-label*=Online i], .wrapper-1VLyxH[aria-label*=online i], .wrapper-1VLyxH[aria-label*=Conectado i], .wrapper-1VLyxH[aria-label*="En línea con móvil" i], .wrapper-1VLyxH[aria-label*="En ligne" i], .wrapper-1VLyxH[aria-label*="Na mreži" i],
.avatarWrapper[data-status=online] .wrapper-1VLyxH {
  box-shadow: 0 0 calc(var(--glow-intensity) * 10px) var(--rs-online-color);
}

.wrapper-1VLyxH[aria-label*=Idle i], .wrapper-1VLyxH[aria-label*=Inaktiv i], .wrapper-1VLyxH[aria-label*=Abwesend i], .wrapper-1VLyxH[aria-label*=Ausente i], .wrapper-1VLyxH[aria-label*=Inactif i], .wrapper-1VLyxH[aria-label*="U mirovanju" i],
.avatarWrapper[data-status=idle] .wrapper-1VLyxH {
  box-shadow: 0 0 calc(var(--glow-intensity) * 10px) var(--rs-idle-color);
}

.wrapper-1VLyxH[aria-label*="Do Not disturb" i], .wrapper-1VLyxH[aria-label*="Vil ikke forstyrres" i], .wrapper-1VLyxH[aria-label*="Bitte nicht stören" i], .wrapper-1VLyxH[aria-label*="No molestar" i], .wrapper-1VLyxH[aria-label*="Ne pas déranger" i], .wrapper-1VLyxH[aria-label*="Ne uznemiravaj" i],
.avatarWrapper[data-status=dnd] .wrapper-1VLyxH {
  box-shadow: 0 0 calc(var(--glow-intensity) * 10px) var(--rs-dnd-color);
}

.wrapper-1VLyxH[aria-label*=Streaming i], .wrapper-1VLyxH[aria-label*=Streamer i], .wrapper-1VLyxH[aria-label*=Streamt i], .wrapper-1VLyxH[aria-label*=Transmitiendo i], .wrapper-1VLyxH[aria-label*="En direct" i],
.avatarWrapper[data-status=streaming] .wrapper-1VLyxH {
  box-shadow: 0 0 calc(var(--glow-intensity) * 10px) var(--rs-streaming-color);
}

.wrapper-1VLyxH[aria-label*=Invisible i], .wrapper-1VLyxH[aria-label*=Usynlig i], .wrapper-1VLyxH[aria-label*=Unsichtbar i], .wrapper-1VLyxH[aria-label*="Nevidljiv/a" i],
.avatarWrapper[data-status=invisible] .wrapper-1VLyxH {
  box-shadow: 0 0 calc(var(--glow-intensity) * 10px) var(--rs-invisible-color);
}

.wrapper-1VLyxH[aria-label*=Offline i], .wrapper-1VLyxH[aria-label*=Desconectado i], .wrapper-1VLyxH[aria-label*="Hors ligne" i], .wrapper-1VLyxH[aria-label*="Izvan mreže" i],
.avatarWrapper[data-status=offline] .wrapper-1VLyxH {
  box-shadow: 0 0 calc(var(--glow-intensity) * 10px) var(--rs-offline-color);
}

.wrapper-1VLyxH[style*="80px"], .wrapper-1VLyxH[style*="120px"] {
  border-width: 0px;
  margin-top: 7.5px;
  margin-left: 7.5px;
}

#app-mount .wrapper-1VLyxH.StatusEverywhere-avatar-chatAvatar {
  margin: 0;
}
#app-mount .avatarWrapper {
  border-radius: var(--rs-avatar-shape);
}
#app-mount .avatarWrapper .pointerEvents-9SZWKj {
  stroke: var(--status-color) !important;
}
#app-mount .avatarWrapper .pointerEvents-9SZWKj[width="30"] {
  width: calc(100% - 9px) !important;
}
#app-mount .guilds-2JjMmN .tree-3agP2X {
  outline: none !important;
  margin-bottom: var(--user-area, 220px);
}
#app-mount .guilds-2JjMmN .unreadMentionsIndicatorBottom-3RJMnQ {
  bottom: calc(var(--user-area) + 10px);
}
#app-mount .panels-3wFtMD > .container-YkUktl {
  position: fixed;
  bottom: 0;
  left: 0;
  flex-direction: column-reverse;
  padding: 0 0 24px;
  width: var(--guilds-width, 72px);
  height: auto;
  border-top: none;
}
#app-mount .panels-3wFtMD > .container-YkUktl > [style="flex: 0 1 auto;"] {
  flex-direction: column;
  width: 100%;
}
#app-mount .panels-3wFtMD > .container-YkUktl > [style="flex: 0 1 auto;"] .button-12Fmur {
  width: 100%;
  border-radius: 0;
  padding: 12px 0;
  height: auto;
}
#app-mount .panels-3wFtMD > .container-YkUktl .avatarWrapper-1B9FTW {
  margin-right: 0;
  margin-top: 12px;
}
#app-mount .panels-3wFtMD > .container-YkUktl .avatar-1EWyVD {
  width: 42px !important;
  height: 42px !important;
}
#app-mount .panels-3wFtMD > .container-YkUktl > .nameTag-sc-gpq {
  display: none;
}
* {
  --TB-header-padding: 125px;
}
.platform-win .typeWindows-2-g3UY {
  height: 9px;
  margin-top: 0;
  position: absolute;
  top: 1px;
  left: 0;
  width: 100%;
  background: transparent;
}
.platform-win .winButtonClose-3Q8ZH5 {
  border-top-right-radius: var(--TB-tr-roundness);
}
.platform-win .winButton-3UMjdg {
  position: relative;
  top: calc(var(--TB-position-top, 0px) - 1px);
  right: var(--TB-position-right, 0px);
  height: var(--TB-height, 48px);
  width: var(--TB-width, 40px);
}
.platform-win .winButton-3UMjdg:not(.winButtonClose-3Q8ZH5):hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.platform-win .container-ZMc96U {
  padding-right: var(--TB-header-padding);
}
.platform-win .wordmarkWindows-2dq6rw {
  display: none;
}
.platform-win #app-mount.bd-detached-editor .winButton-3UMjdg {
  right: 30%;
}
.platform-win .closeButton-30b1gR {
  right: unset;
  left: 0;
}
:root {
	/* SoftX variables */
	--background-image: url('https://support.discord.com/hc/user_images/m_JIG2P0KgKmnZBb9hVAtg.png'); /* Background image | URL MUST BE A DIRECT LINK (ending in .jpg, .jpeg, .png, .gif) */
	--background-blur: 0px; /* Blur intensity of --background-image | Must end in px | Default: 0px */

	--accent: 0, 231, 169; /* Colour used around the app. | Values are in R,G,B format. | Default: 0, 231, 169 */

	--channels-width: 300px; /* Width of the channels list. | Default: 300px */
	--guilds-width: 105px; /* Width of the server list. | Default: 105px */
	--members-width: 280px; /* Width of the members list. | Default: 280px */

	--server-size: 50px; /* Size of the servers inside the server list. | Default: 50px */
	--chat-avatar-size: 32px; /* Size of the chat avatars. | Default: 32px */

	--glow-intensity: 1; /* Intensity of the glow used around the app. | Set to 0 to disable the glow. | Decimals allowed | Default: 1 */

	--opacity: .85; /* Opacity of overall app. | Default: .85 */

	--font: 'Inter'; /* Custom font | Default: 'Inter' */

	--avatar-roundness: 50%; /* Roundness for avatars. | 0% = Square, 50% = Circle | Default: 50% */
	--server-roundness: 50%; /* Roundness for servers. | 0% = Square, 50% = Circle | Default: 50% */



	/* RadialStatus veriables */
	--rs-small-spacing: 2px; /* Spacing between profile image and outer ring on small icons (e.g. member list) | Default: 2px */
	--rs-medium-spacing: 4px; /* Spacing between profile image and outer ring on medium icons (e.g. user popout) | Default: 4px */
	--rs-large-spacing: 4px; /* Spacing between profile image and outer ring on medium icons (e.g. user popout fullscreen) | Default: 4px */

	--rs-small-width: 1.5px; /* Ring width (follows same sizing as above) | Default: 1.5px */
	--rs-medium-width: 2px; /* Default: 2px */
	--rs-large-width: 2px; /* Default: 2px */

	/* Customizable colors */
	--rs-online-color: #43b581; /* Default: #43b581 */
	--rs-idle-color: #faa61a; /* Default: #faa61a */
	--rs-dnd-color: #f04747; /* Default: #f04747 */
	--rs-offline-color: #636b75; /* Default: #636b75 */
	--rs-streaming-color: #643da7; /* Default: #643da7 */
	--rs-invisible-color: #747f8d; /* Default: #747f8d */
	--rs-phone-color: var(--rs-online-color); /* Color of the phone for mobile users | Default: var(--rs-online-color) */

	--rs-phone-visible: block; /* Visibility of the phone for mobile users | Default: block */
}
.upload-vLbqu- {
    background-color: #2f313600;
}
.emptyMainCard-2pg-47, .mainCard-3KBsBI, .subCard-128RYo, #app-mount .content-2a4AW9 {
    background-color: #1d1724;
}
`)
