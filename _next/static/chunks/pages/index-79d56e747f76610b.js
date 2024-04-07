(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5557: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return s(3164);
        },
      ]);
    },
    3164: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return eh;
          },
        });
      var i = s(5893),
        a = s(4924),
        r = s(7294),
        n = function (e) {
          return (0, i.jsxs)("div", {
            style:
              e.visible || e.isShutDown ? { zIndex: "100" } : { zIndex: "-20" },
            className:
              (e.visible || e.isShutDown
                ? " visible opacity-100"
                : " invisible opacity-0 ") +
              " absolute duration-500 select-none flex flex-col justify-around items-center top-0 right-0 overflow-hidden m-0 p-0 h-screen w-screen bg-black",
            children: [
              (0, i.jsx)("img", {
                width: "400px",
                height: "400px",
                className: "md:w-1/4 w-1/2",
                src: "./themes/Yaru/status/cof_orange_hex.svg",
                alt: "Ubuntu Logo",
              }),
              (0, i.jsx)("div", {
                className:
                  "w-10 h-10 flex justify-center items-center rounded-full outline-none cursor-pointer",
                onClick: e.turnOn,
                children: e.isShutDown
                  ? (0, i.jsx)("div", {
                      className:
                        "bg-white rounded-full flex justify-center items-center w-10 h-10 hover:bg-gray-300",
                      children: (0, i.jsx)("img", {
                        width: "32px",
                        height: "32px",
                        className: "w-8",
                        src: "./themes/Yaru/status/power-button.svg",
                        alt: "Power Button",
                      }),
                    })
                  : (0, i.jsx)("img", {
                      width: "40px",
                      height: "40px",
                      className: " w-10 " + (e.visible ? " animate-spin " : ""),
                      src: "./themes/Yaru/status/process-working-symbolic.svg",
                      alt: "Ubuntu Process Symbol",
                    }),
              }),
              (0, i.jsx)("img", {
                width: "200px",
                height: "100px",
                className: "md:w-1/5 w-1/2",
                src: "./themes/Yaru/status/ubuntu_white_hex.svg",
                alt: "Ubuntu Name",
              }),
              (0, i.jsxs)("div", {
                className: "text-white mb-4",
                children: [
                  (0, i.jsx)("a", {
                    className: "underline",
                    href: "https://www.linkedin.com/in/dawidolko/",
                    rel: "noreferrer noopener",
                    target: "_blank",
                    children: "linkedin",
                  }),
                  (0, i.jsx)("span", {
                    className: "font-bold mx-1",
                    children: "|",
                  }),
                  (0, i.jsx)("a", {
                    href: "https://github.com/dawidolko/dawidolko.github.io",
                    rel: "noreferrer noopener",
                    target: "_blank",
                    className: "underline",
                    children: "github",
                  }),
                ],
              }),
            ],
          });
        };
      function o(e) {
        return (0, i.jsx)("div", {
          style: {
            backgroundImage: "url(".concat(
              {
                "wall-1": "./images/wallpapers/wall-1.webp",
                "wall-2": "./images/wallpapers/wall-2.webp",
                "wall-3": "./images/wallpapers/wall-3.webp",
                "wall-4": "./images/wallpapers/wall-4.webp",
                "wall-5": "./images/wallpapers/wall-5.webp",
                "wall-6": "./images/wallpapers/wall-6.webp",
                "wall-7": "./images/wallpapers/wall-7.webp",
                "wall-8": "./images/wallpapers/wall-8.webp",
              }[e.img],
              ")"
            ),
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "center",
          },
          className:
            "bg-ubuntu-img absolute -z-10 top-0 right-0 overflow-hidden h-full w-full",
        });
      }
      class l extends r.Component {
        componentDidMount() {
          this.id = this.props.id;
        }
        render() {
          return (0, i.jsxs)("div", {
            tabIndex: "0",
            onClick: this.openApp,
            onMouseEnter: () => {
              this.setState({ showTitle: !0 });
            },
            onMouseLeave: () => {
              this.setState({ showTitle: !1 });
            },
            className:
              (!1 === this.props.isClose[this.id] && this.props.isFocus[this.id]
                ? "bg-white bg-opacity-10 "
                : "") +
              " w-auto p-2 outline-none relative transition hover:bg-white hover:bg-opacity-10 rounded m-1",
            id: "sidebar-" + this.props.id,
            children: [
              (0, i.jsx)("img", {
                width: "28px",
                height: "28px",
                className: "w-7",
                src: this.props.icon,
                alt: "Ubuntu App Icon",
              }),
              (0, i.jsx)("img", {
                className:
                  (this.state.scaleImage ? " scale " : "") +
                  " scalable-app-icon w-7 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                src: this.props.icon,
                alt: "",
              }),
              !1 === this.props.isClose[this.id]
                ? (0, i.jsx)("div", {
                    className:
                      " w-1 h-1 absolute left-0 top-1/2 bg-ub-orange rounded-sm",
                  })
                : null,
              (0, i.jsx)("div", {
                className:
                  (this.state.showTitle ? " visible " : " invisible ") +
                  " w-max py-0.5 px-1.5 absolute top-1.5 left-full ml-3 m-1 text-ubt-grey text-opacity-90 text-sm bg-ub-grey bg-opacity-70 border-gray-400 border border-opacity-40 rounded-md",
                children: this.props.title,
              }),
            ],
          });
        }
        constructor() {
          super(),
            (0, a.Z)(this, "scaleImage", () => {
              setTimeout(() => {
                this.setState({ scaleImage: !1 });
              }, 1e3),
                this.setState({ scaleImage: !0 });
            }),
            (0, a.Z)(this, "openApp", () => {
              !this.props.isMinimized[this.id] &&
                this.props.isClose[this.id] &&
                this.scaleImage(),
                this.props.openApp(this.id),
                this.setState({ showTitle: !1 });
            }),
            (this.id = null),
            (this.state = { showTitle: !1, scaleImage: !1 });
        }
      }
      let c = (e) => {
        let t = [];
        return (
          e.apps.forEach((s, a) => {
            !1 !== e.favourite_apps[s.id] &&
              t.push(
                (0, i.jsx)(
                  l,
                  {
                    id: s.id,
                    title: s.title,
                    icon: s.icon,
                    isClose: e.closed_windows,
                    isFocus: e.focused_windows,
                    openApp: e.openAppByAppId,
                    isMinimized: e.isMinimized,
                    openFromMinimised: e.openFromMinimised,
                  },
                  a
                )
              );
          }),
          t
        );
      };
      function d(e) {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)("div", {
              className:
                (e.hide ? " -translate-x-full " : "") +
                " absolute transform duration-300 select-none z-40 left-0 top-0 h-full pt-7 w-auto flex flex-col justify-start items-center border-black border-opacity-60 bg-black bg-opacity-50",
              children: [
                0 !== Object.keys(e.closed_windows).length ? c(e) : null,
                (0, i.jsx)(m, { showApps: e.showAllApps }),
              ],
            }),
            (0, i.jsx)("div", {
              onMouseEnter: function () {
                e.hideSideBar(null, !1);
              },
              onMouseLeave: function () {
                setTimeout(() => {
                  e.hideSideBar(null, !0);
                }, 2e3);
              },
              className: "w-1 h-full absolute top-0 left-0 bg-transparent z-50",
            }),
          ],
        });
      }
      function m(e) {
        let [t, s] = (0, r.useState)(!1);
        return (0, i.jsx)("div", {
          className:
            "w-10 h-10 rounded m-1 hover:bg-white hover:bg-opacity-10 flex items-center justify-center",
          style: { marginTop: "auto" },
          onMouseEnter: () => {
            s(!0);
          },
          onMouseLeave: () => {
            s(!1);
          },
          onClick: e.showApps,
          children: (0, i.jsxs)("div", {
            className: "relative",
            children: [
              (0, i.jsx)("img", {
                width: "28px",
                height: "28px",
                className: "w-7",
                src: "./themes/Yaru/system/view-app-grid-symbolic.svg",
                alt: "Ubuntu view app",
              }),
              (0, i.jsx)("div", {
                className:
                  (t ? " visible " : " invisible ") +
                  " w-max py-0.5 px-1.5 absolute top-1 left-full ml-5 text-ubt-grey text-opacity-90 text-sm bg-ub-grey bg-opacity-70 border-gray-400 border border-opacity-40 rounded-md",
                children: "Show Applications",
              }),
            ],
          }),
        });
      }
      var h = s(9755),
        u = s.n(h),
        p = s(9089);
      class g extends r.Component {
        componentDidMount() {
          this.reStartTerminal();
        }
        componentDidUpdate() {
          clearInterval(this.cursor), this.startCursor(this.terminal_rows - 2);
        }
        componentWillUnmount() {
          clearInterval(this.cursor);
        }
        xss(e) {
          if (e)
            return e
              .split("")
              .map((e) => {
                switch (e) {
                  case "&":
                    return "&amp";
                  case "<":
                    return "&lt";
                  case ">":
                    return "&gt";
                  case '"':
                    return "&quot";
                  case "'":
                    return "&#x27";
                  case "/":
                    return "&#x2F";
                  default:
                    return e;
                }
              })
              .join("");
        }
        render() {
          return (0, i.jsx)("div", {
            className:
              "h-full w-full bg-ub-drk-abrgn text-white text-sm font-bold",
            id: "terminal-body",
            children: this.state.terminal,
          });
        }
        constructor() {
          super(),
            (0, a.Z)(this, "reStartTerminal", () => {
              clearInterval(this.cursor),
                u()("#terminal-body").empty(),
                this.appendTerminalRow();
            }),
            (0, a.Z)(this, "appendTerminalRow", () => {
              let e = this.state.terminal;
              e.push(this.terminalRow(this.terminal_rows)),
                this.setState({ terminal: e }),
                (this.terminal_rows += 2);
            }),
            (0, a.Z)(this, "terminalRow", (e) =>
              (0, i.jsxs)(
                r.Fragment,
                {
                  children: [
                    (0, i.jsxs)("div", {
                      className: "flex w-full h-5",
                      children: [
                        (0, i.jsxs)("div", {
                          className: "flex",
                          children: [
                            (0, i.jsx)("div", {
                              className: " text-ubt-green",
                              children: "dawidolko@Dell",
                            }),
                            (0, i.jsx)("div", {
                              className: "text-white mx-px font-medium",
                              children: ":",
                            }),
                            (0, i.jsx)("div", {
                              className: " text-ubt-blue",
                              children: this.current_directory,
                            }),
                            (0, i.jsx)("div", {
                              className: "text-white mx-px font-medium mr-1",
                              children: "$",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          id: "cmd",
                          onClick: this.focusCursor,
                          className:
                            " bg-transperent relative flex-1 overflow-hidden",
                          children: [
                            (0, i.jsx)("span", {
                              id: "show-".concat(e),
                              className:
                                " float-left whitespace-pre pb-1 opacity-100 font-normal tracking-wider",
                            }),
                            (0, i.jsx)("div", {
                              id: "cursor-".concat(e),
                              className:
                                " float-left mt-1 w-1.5 h-3.5 bg-white",
                            }),
                            (0, i.jsx)("input", {
                              id: "terminal-input-".concat(e),
                              "data-row-id": e,
                              onKeyDown: this.checkKey,
                              onBlur: this.unFocusCursor,
                              className:
                                " absolute top-0 left-0 w-full opacity-0 outline-none bg-transparent",
                              spellCheck: !1,
                              autoFocus: !0,
                              autoComplete: "off",
                              type: "text",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      id: "row-result-".concat(e),
                      className: "my-2 font-normal",
                    }),
                  ],
                },
                e
              )
            ),
            (0, a.Z)(this, "focusCursor", (e) => {
              clearInterval(this.cursor),
                this.startCursor(u()(e.target).data("row-id"));
            }),
            (0, a.Z)(this, "unFocusCursor", (e) => {
              this.stopCursor(u()(e.target).data("row-id"));
            }),
            (0, a.Z)(this, "startCursor", (e) => {
              clearInterval(this.cursor),
                u()("input#terminal-input-".concat(e)).trigger("focus"),
                u()("input#terminal-input-".concat(e)).on("input", function () {
                  u()("#cmd span#show-".concat(e)).text(u()(this).val());
                }),
                (this.cursor = window.setInterval(function () {
                  "visible" === u()("#cursor-".concat(e)).css("visibility")
                    ? u()("#cursor-".concat(e)).css({ visibility: "hidden" })
                    : u()("#cursor-".concat(e)).css({ visibility: "visible" });
                }, 500));
            }),
            (0, a.Z)(this, "stopCursor", (e) => {
              clearInterval(this.cursor),
                u()("#cursor-".concat(e)).css({ visibility: "visible" });
            }),
            (0, a.Z)(this, "removeCursor", (e) => {
              this.stopCursor(e),
                u()("#cursor-".concat(e)).css({ display: "none" });
            }),
            (0, a.Z)(this, "clearInput", (e) => {
              u()("input#terminal-input-".concat(e)).trigger("blur");
            }),
            (0, a.Z)(this, "checkKey", (e) => {
              if ("Enter" === e.key) {
                let t = u()(e.target).data("row-id"),
                  s = u()("input#terminal-input-".concat(t)).val().trim();
                0 !== s.length &&
                  (this.removeCursor(t),
                  this.handleCommands(s, t),
                  this.prev_commands.push(s),
                  (this.commands_index = this.prev_commands.length - 1),
                  this.clearInput(t));
              } else if ("ArrowUp" === e.key) {
                let i;
                i =
                  this.commands_index <= -1
                    ? ""
                    : this.prev_commands[this.commands_index];
                let a = u()(e.target).data("row-id");
                u()("input#terminal-input-".concat(a)).val(i),
                  u()("#show-".concat(a)).text(i),
                  this.commands_index--;
              } else if ("ArrowDown" === e.key) {
                let r;
                if (this.commands_index >= this.prev_commands.length) return;
                this.commands_index <= -1 && (this.commands_index = 0),
                  (r =
                    this.commands_index === this.prev_commands.length
                      ? ""
                      : this.prev_commands[this.commands_index]);
                let n = u()(e.target).data("row-id");
                u()("input#terminal-input-".concat(n)).val(r),
                  u()("#show-".concat(n)).text(r),
                  this.commands_index++;
              }
            }),
            (0, a.Z)(this, "childDirectories", (e) => {
              let t = [];
              return (
                t.push('<div class="flex justify-start flex-wrap">'),
                this.child_directories[e].forEach((e) => {
                  t.push(
                    '<span class="font-bold mr-2 text-ubt-blue">\''.concat(
                      e,
                      "'</span>"
                    )
                  );
                }),
                t.push("</div>"),
                t
              );
            }),
            (0, a.Z)(this, "closeTerminal", () => {
              u()("#close-terminal").trigger("click");
            }),
            (0, a.Z)(this, "handleCommands", (e, t) => {
              let s = e.split(" ").filter(Boolean),
                i = s[0];
              s.shift();
              let a = "",
                r = s.join(" ");
              switch (((r = r.trim()), i)) {
                case "cd":
                  if (0 === s.length || "" === r) {
                    (this.current_directory = "~"),
                      (this.curr_dir_name = "root");
                    break;
                  }
                  if (s.length > 1) {
                    a = "too many arguments, arguments must be <1.";
                    break;
                  }
                  if ("personal-documents" === r) {
                    a = "bash /".concat(
                      this.curr_dir_name,
                      " : Permission denied \uD83D\uDE0F"
                    );
                    break;
                  }
                  this.child_directories[this.curr_dir_name].includes(r)
                    ? ((this.current_directory += "/" + r),
                      (this.curr_dir_name = r))
                    : (a =
                        "." === r || ".." === r || "../" === r
                          ? "Type 'cd' to go back \uD83D\uDE05"
                          : "bash: cd: ".concat(
                              s,
                              ": No such file or directory"
                            ));
                  break;
                case "ls":
                  let n = s[0];
                  if (
                    (("" === n || null == n) && (n = this.curr_dir_name),
                    s.length > 1)
                  ) {
                    a = "too many arguments, arguments must be <1.";
                    break;
                  }
                  a =
                    n in this.child_directories
                      ? this.childDirectories(n).join("")
                      : "personal-documents" === n
                      ? "Nope! \uD83D\uDE43"
                      : "ls: cannot access '".concat(
                          s,
                          "': No such file or directory                    "
                        );
                  break;
                case "mkdir":
                  void 0 !== s[0] && "" !== s[0]
                    ? (this.props.addFolder(s[0]), (a = ""))
                    : (a = "mkdir: missing operand");
                  break;
                case "pwd":
                  a = this.current_directory.replace("~", "/home/dawidolko");
                  break;
                case "code":
                  "." === s[0] || 0 === s.length
                    ? this.props.openApp("vscode")
                    : (a =
                        "Command '" +
                        i +
                        "' not found, or not yet implemented.<br>Available Commands:[ cd, ls, pwd, echo, clear, exit, mkdir, code, spotify, chrome, about-dawidolko, todoist, trash, settings, sendmsg]");
                  break;
                case "echo":
                  a = this.xss(s.join(" "));
                  break;
                case "spotify":
                  "." === s[0] || 0 === s.length
                    ? this.props.openApp("spotify")
                    : (a =
                        "Command '" +
                        i +
                        "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, echo, clear, exit, mkdir, code, spotify, chrome, about-dawidolko, todoist, trash, settings, sendmsg ]");
                  break;
                case "chrome":
                  "." === s[0] || 0 === s.length
                    ? this.props.openApp("chrome")
                    : (a =
                        "Command '" +
                        i +
                        "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, echo, clear, exit, mkdir, code, spotify, chrome, about-dawidolko, todoist, trash, settings, sendmsg ]");
                  break;
                case "todoist":
                  "." === s[0] || 0 === s.length
                    ? this.props.openApp("todo-ist")
                    : (a =
                        "Command '" +
                        i +
                        "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, echo, clear, exit, mkdir, code, spotify, chrome, about-dawidolko, todoist, trash, settings, sendmsg ]");
                  break;
                case "trash":
                  "." === s[0] || 0 === s.length
                    ? this.props.openApp("trash")
                    : (a =
                        "Command '" +
                        i +
                        "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, echo, clear, exit, mkdir, code, spotify, chrome, about-dawidolko, todoist, trash, settings, sendmsg ]");
                  break;
                case "about-dawidolko":
                  "." === s[0] || 0 === s.length
                    ? this.props.openApp("about-dawidolko")
                    : (a =
                        "Command '" +
                        i +
                        "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, echo, clear, exit, mkdir, code, spotify, chrome, about-dawidolko, todoist, trash, settings, sendmsg ]");
                  break;
                case "terminal":
                  "." === s[0] || 0 === s.length
                    ? this.props.openApp("terminal")
                    : (a =
                        "Command '" +
                        i +
                        "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, echo, clear, exit, mkdir, code, spotify, chrome, about-dawidolko, todoist, trash, settings, sendmsg ]");
                  break;
                case "settings":
                  "." === s[0] || 0 === s.length
                    ? this.props.openApp("settings")
                    : (a =
                        "Command '" +
                        i +
                        "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, echo, clear, exit, mkdir, code, spotify, chrome, about-dawidolko, todoist, trash, settings, sendmsg ]");
                  break;
                case "sendmsg":
                  "." === s[0] || 0 === s.length
                    ? this.props.openApp("gedit")
                    : (a =
                        "Command '" +
                        i +
                        "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, echo, clear, exit, mkdir, code, spotify, chrome, about-dawidolko, todoist, trash, settings, sendmsg ]");
                  break;
                case "clear":
                  this.reStartTerminal();
                  return;
                case "exit":
                  this.closeTerminal();
                  return;
                case "sudo":
                  p.ZP.event({ category: "Sudo Access", action: "lol" }),
                    (a =
                      "<img class=' w-2/5' src='./images/memes/used-sudo-command.webp' />");
                  break;
                default:
                  a =
                    "Command '" +
                    i +
                    "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, echo, clear, exit, mkdir, code, spotify, chrome, about-dawidolko, todoist, trash, settings, sendmsg ]";
              }
              (document.getElementById("row-result-".concat(t)).innerHTML = a),
                this.appendTerminalRow();
            }),
            (this.cursor = ""),
            (this.terminal_rows = 1),
            (this.current_directory = "~"),
            (this.curr_dir_name = "root"),
            (this.prev_commands = []),
            (this.commands_index = -1),
            (this.child_directories = {
              root: [
                "books",
                "projects",
                "personal-documents",
                "skills",
                "languages",
                "PDPU",
                "interests",
              ],
              PDPU: ["Sem-6"],
              books: [
                "Eric-Jorgenson_The-Almanack-of-Naval-Ravikant.pdf",
                "Elon Musk: How the Billionaire CEO of SpaceX.pdf",
                "The $100 Startup_CHRIS_GUILLEBEAU.pdf",
                "The_Magic_of_Thinking_Big.pdf",
              ],
              skills: [
                "Front-end development",
                "React.js",
                "jQuery",
                "Flutter",
                "Express.js",
                "SQL",
                "Firebase",
              ],
              interests: [
                "Software Engineering",
                "Deep Learning",
                "Computer Vision",
              ],
              languages: ["Javascript", "C++", "Java", "Dart"],
            }),
            (this.state = { terminal: [] });
        }
      }
      let x = (e, t) =>
        (0, i.jsx)(g, { addFolder: e, openApp: t, children: " " });
      function b(e) {
        let t = {
            "wall-1": "./images/wallpapers/wall-1.webp",
            "wall-2": "./images/wallpapers/wall-2.webp",
            "wall-3": "./images/wallpapers/wall-3.webp",
            "wall-4": "./images/wallpapers/wall-4.webp",
            "wall-5": "./images/wallpapers/wall-5.webp",
            "wall-6": "./images/wallpapers/wall-6.webp",
            "wall-7": "./images/wallpapers/wall-7.webp",
            "wall-8": "./images/wallpapers/wall-8.webp",
          },
          s = (t) => {
            e.changeBackgroundImage(u()(t.target).data("path"));
          };
        return (0, i.jsxs)("div", {
          className:
            "w-full flex-col flex-grow z-20 max-h-full overflow-y-auto windowMainScreen select-none bg-ub-cool-grey",
          children: [
            (0, i.jsx)("div", {
              className: " md:w-2/5 w-2/3 h-1/3 m-auto my-4",
              style: {
                backgroundImage: "url(".concat(t[e.currBgImgName], ")"),
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              },
            }),
            (0, i.jsx)("div", {
              className:
                "flex flex-wrap justify-center items-center border-t border-gray-900",
              children: Object.keys(t).map((a, r) =>
                (0, i.jsx)(
                  "div",
                  {
                    tabIndex: "1",
                    onFocus: s,
                    "data-path": a,
                    className:
                      (a === e.currBgImgName
                        ? " border-yellow-700 "
                        : " border-transparent ") +
                      " md:px-28 md:py-20 md:m-4 m-2 px-14 py-10 outline-none border-4 border-opacity-80",
                    style: {
                      backgroundImage: "url(".concat(t[a], ")"),
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                    },
                  },
                  r
                )
              ),
            }),
          ],
        });
      }
      let f = () => (0, i.jsx)(b, { children: " " });
      class w extends r.Component {
        componentDidMount() {
          let e = localStorage.getItem("chrome-url"),
            t = localStorage.getItem("chrome-display-url");
          null != e &&
            this.setState({ url: e, display_url: t }, this.refreshChrome);
        }
        render() {
          return (0, i.jsxs)("div", {
            className: "h-full w-full flex flex-col bg-ub-cool-grey",
            children: [
              this.displayUrlBar(),
              (0, i.jsx)("iframe", {
                src: this.state.url,
                className: "flex-grow",
                id: "chrome-screen",
                frameBorder: "0",
                title: "Ubuntu Chrome Url",
              }),
            ],
          });
        }
        constructor() {
          super(),
            (0, a.Z)(this, "storeVisitedUrl", (e, t) => {
              localStorage.setItem("chrome-url", e),
                localStorage.setItem("chrome-display-url", t);
            }),
            (0, a.Z)(this, "refreshChrome", () => {
              document.getElementById("chrome-screen").src += "";
            }),
            (0, a.Z)(this, "goToHome", () => {
              this.setState({
                url: this.home_url,
                display_url: "https://www.google.com",
              }),
                this.refreshChrome();
            }),
            (0, a.Z)(this, "checkKey", (e) => {
              if ("Enter" === e.key) {
                let t = e.target.value,
                  s = "";
                0 !== (t = t.trim()).length &&
                  (0 !== t.indexOf("http://") &&
                    0 !== t.indexOf("https://") &&
                    (t = "https://" + t),
                  (s = t = encodeURI(t)),
                  t.includes("google.com") &&
                    ((t = "https://www.google.com/webhp?igu=1"),
                    (s = "https://www.google.com")),
                  this.setState({ url: t, display_url: t }),
                  this.storeVisitedUrl(t, s),
                  document.getElementById("chrome-url-bar").blur());
              }
            }),
            (0, a.Z)(this, "handleDisplayUrl", (e) => {
              this.setState({ display_url: e.target.value });
            }),
            (0, a.Z)(this, "displayUrlBar", () =>
              (0, i.jsxs)("div", {
                className:
                  "w-full pt-0.5 pb-1 flex justify-start items-center text-white text-sm border-b border-gray-900",
                children: [
                  (0, i.jsx)("div", {
                    onClick: this.refreshChrome,
                    className:
                      " ml-2 mr-1 flex justify-center items-center rounded-full bg-gray-50 bg-opacity-0 hover:bg-opacity-10",
                    children: (0, i.jsx)("img", {
                      className: "w-5",
                      src: "./themes/Yaru/status/chrome_refresh.svg",
                      alt: "Ubuntu Chrome Refresh",
                    }),
                  }),
                  (0, i.jsx)("div", {
                    onClick: this.goToHome,
                    className:
                      " mr-2 ml-1 flex justify-center items-center rounded-full bg-gray-50 bg-opacity-0 hover:bg-opacity-10",
                    children: (0, i.jsx)("img", {
                      className: "w-5",
                      src: "./themes/Yaru/status/chrome_home.svg",
                      alt: "Ubuntu Chrome Home",
                    }),
                  }),
                  (0, i.jsx)("input", {
                    onKeyDown: this.checkKey,
                    onChange: this.handleDisplayUrl,
                    value: this.state.display_url,
                    id: "chrome-url-bar",
                    className:
                      "outline-none bg-ub-grey rounded-full pl-3 py-0.5 mr-3 w-5/6 text-gray-300 focus:text-white",
                    type: "url",
                    spellCheck: !1,
                    autoComplete: "off",
                  }),
                ],
              })
            ),
            (this.home_url = "https://www.google.com/webhp?igu=1"),
            (this.state = {
              url: "https://www.google.com/webhp?igu=1",
              display_url: "https://www.google.com",
            });
        }
      }
      let v = () => (0, i.jsx)(w, { children: " " });
      class y extends r.Component {
        componentDidMount() {
          let e = localStorage.getItem("trash-empty");
          null != e && "true" === e && this.setState({ empty: !0 });
        }
        render() {
          return (0, i.jsxs)("div", {
            className:
              "w-full h-full flex flex-col bg-ub-cool-grey text-white select-none",
            children: [
              (0, i.jsxs)("div", {
                className:
                  "flex items-center justify-between w-full bg-ub-warm-grey bg-opacity-40 text-sm",
                children: [
                  (0, i.jsx)("span", {
                    className: "font-bold ml-2",
                    children: "Trash",
                  }),
                  (0, i.jsxs)("div", {
                    className: "flex",
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "border border-black bg-black bg-opacity-50 px-3 py-1 my-1 mx-1 rounded text-gray-300",
                        children: "Restore",
                      }),
                      (0, i.jsx)("div", {
                        onClick: this.emptyTrash,
                        className:
                          "border border-black bg-black bg-opacity-50 px-3 py-1 my-1 mx-1 rounded hover:bg-opacity-80",
                        children: "Empty",
                      }),
                    ],
                  }),
                ],
              }),
              this.state.empty ? this.emptyScreen() : this.showTrashItems(),
            ],
          });
        }
        constructor() {
          super(),
            (0, a.Z)(this, "focusFile", (e) => {
              u()(e.target).children().get(0).classList.toggle("opacity-60"),
                u()(e.target)
                  .children()
                  .get(1)
                  .classList.toggle("bg-ub-orange");
            }),
            (0, a.Z)(this, "emptyTrash", () => {
              this.setState({ empty: !0 }),
                localStorage.setItem("trash-empty", !0);
            }),
            (0, a.Z)(this, "emptyScreen", () =>
              (0, i.jsxs)("div", {
                className:
                  "flex-grow flex flex-col justify-center items-center",
                children: [
                  (0, i.jsx)("img", {
                    className: " w-24",
                    src: "./themes/Yaru/status/user-trash-symbolic.svg",
                    alt: "Ubuntu Trash",
                  }),
                  (0, i.jsx)("span", {
                    className: "font-bold mt-4 text-xl px-1 text-gray-400",
                    children: "Trash is Empty",
                  }),
                ],
              })
            ),
            (0, a.Z)(this, "showTrashItems", () =>
              (0, i.jsx)("div", {
                className:
                  "flex-grow ml-4 flex flex-wrap items-start content-start justify-start overflow-y-auto windowMainScreen",
                children: this.trashItems.map((e, t) =>
                  (0, i.jsxs)(
                    "div",
                    {
                      tabIndex: "1",
                      onFocus: this.focusFile,
                      onBlur: this.focusFile,
                      className:
                        "flex flex-col items-center text-sm outline-none w-16 my-2 mx-4",
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "w-16 h-16 flex items-center justify-center",
                          children: (0, i.jsx)("img", {
                            src: e.icon,
                            alt: "Ubuntu File Icons",
                          }),
                        }),
                        (0, i.jsx)("span", {
                          className: "text-center rounded px-0.5",
                          children: e.name,
                        }),
                      ],
                    },
                    t
                  )
                ),
              })
            ),
            (this.trashItems = [
              { name: "php", icon: "./themes/filetypes/php.png" },
              { name: "Angular.js", icon: "./themes/filetypes/js.png" },
              { name: "node_modules", icon: "./themes/Yaru/system/folder.png" },
              {
                name: "abandoned project",
                icon: "./themes/Yaru/system/folder.png",
              },
              {
                name: "18BCP127 assignment name.zip",
                icon: "./themes/filetypes/zip.png",
              },
              {
                name: "project final",
                icon: "./themes/Yaru/system/folder.png",
              },
              {
                name: "project ultra-final",
                icon: "./themes/Yaru/system/folder.png",
              },
            ]),
            (this.state = { empty: !1 });
        }
      }
      let j = () => (0, i.jsx)(y, { children: " " });
      var k = s(5247);
      class N extends r.Component {
        componentDidMount() {
          k.ZP.init("user_Do31sKneP4eYfn5n1nLTD");
        }
        render() {
          return (0, i.jsxs)("div", {
            className:
              "w-full h-full relative flex flex-col bg-ub-cool-grey text-white select-none",
            children: [
              (0, i.jsxs)("div", {
                className:
                  "flex items-center justify-between w-full bg-ub-gedit-light bg-opacity-60 border-b border-t border-blue-400 text-sm",
                children: [
                  (0, i.jsx)("span", {
                    className: "font-bold ml-2",
                    children: "Send a Message to Me",
                  }),
                  (0, i.jsx)("div", {
                    className: "flex",
                    children: (0, i.jsx)("div", {
                      onClick: this.sendMessage,
                      className:
                        "border border-black bg-black bg-opacity-50 px-3 py-0.5 my-1 mx-1 rounded hover:bg-opacity-80",
                      children: "Send",
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className:
                  "relative flex-grow flex flex-col bg-ub-gedit-dark font-normal windowMainScreen",
                children: [
                  (0, i.jsx)("div", {
                    className:
                      "absolute left-0 top-0 h-full px-2 bg-ub-gedit-darker",
                  }),
                  (0, i.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, i.jsx)("input", {
                        id: "sender-name",
                        className:
                          " w-full text-ubt-gedit-orange focus:bg-ub-gedit-light outline-none font-medium text-sm pl-6 py-0.5 bg-transparent",
                        placeholder: "Your Email / Name :",
                        spellCheck: "false",
                        autoComplete: "off",
                        type: "text",
                      }),
                      (0, i.jsx)("span", {
                        className:
                          "absolute left-1 top-1/2 transform -translate-y-1/2 font-bold light text-sm text-ubt-gedit-blue",
                        children: "1",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, i.jsx)("input", {
                        id: "sender-subject",
                        className:
                          " w-full my-1 text-ubt-gedit-blue focus:bg-ub-gedit-light gedit-subject outline-none text-sm font-normal pl-6 py-0.5 bg-transparent",
                        placeholder:
                          "subject (may be a feedback for this website!)",
                        spellCheck: "false",
                        autoComplete: "off",
                        type: "text",
                      }),
                      (0, i.jsx)("span", {
                        className:
                          "absolute left-1 top-1/2 transform -translate-y-1/2 font-bold text-sm text-ubt-gedit-blue",
                        children: "2",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "relative flex-grow",
                    children: [
                      (0, i.jsx)("textarea", {
                        id: "sender-message",
                        className:
                          " w-full gedit-message font-light text-sm resize-none h-full windowMainScreen outline-none tracking-wider pl-6 py-1 bg-transparent",
                        placeholder: "Message",
                        spellCheck: "false",
                        autoComplete: "none",
                        type: "text",
                      }),
                      (0, i.jsx)("span", {
                        className:
                          "absolute left-1 top-1 font-bold text-sm text-ubt-gedit-blue",
                        children: "3",
                      }),
                    ],
                  }),
                ],
              }),
              this.state.sending
                ? (0, i.jsx)("div", {
                    className:
                      "flex justify-center items-center animate-pulse h-full w-full bg-gray-400 bg-opacity-30 absolute top-0 left-0",
                    children: (0, i.jsx)("img", {
                      className: " w-8 absolute animate-spin",
                      src: "./themes/Yaru/status/process-working-symbolic.svg",
                      alt: "Ubuntu Process Symbol",
                    }),
                  })
                : null,
            ],
          });
        }
        constructor() {
          super(),
            (0, a.Z)(this, "sendMessage", async () => {
              let e = u()("#sender-name").val(),
                t = u()("#sender-subject").val(),
                s = u()("#sender-message").val();
              (e = e.trim()), (t = t.trim()), (s = s.trim());
              let i = !1;
              if (
                (0 === e.length &&
                  (u()("#sender-name").val(""),
                  u()("#sender-name").attr(
                    "placeholder",
                    "Name must not be Empty!"
                  ),
                  (i = !0)),
                0 === s.length &&
                  (u()("#sender-message").val(""),
                  u()("#sender-message").attr(
                    "placeholder",
                    "Message must not be Empty!"
                  ),
                  (i = !0)),
                i)
              )
                return;
              this.setState({ sending: !0 });
              let a = { name: e, subject: t, message: s };
              k.ZP.send("service_qt4ryip", "template_2ni69n8", a)
                .then(() => {
                  this.setState({ sending: !1 }),
                    u()("#close-gedit").trigger("click");
                })
                .catch(() => {
                  this.setState({ sending: !1 }),
                    u()("#close-gedit").trigger("click");
                }),
                p.ZP.event({
                  category: "Send Message",
                  action: "".concat(e, ", ").concat(t, ", ").concat(s),
                });
            }),
            (this.state = { sending: !1 });
        }
      }
      let S = () => (0, i.jsx)(N, { children: " " });
      class _ extends r.Component {
        componentDidMount() {
          this.screens = {
            about: (0, i.jsx)(A, {}),
            education: (0, i.jsx)(I, {}),
            skills: (0, i.jsx)(D, {}),
            projects: (0, i.jsx)(P, {}),
            resume: (0, i.jsx)(B, {}),
          };
          let e = localStorage.getItem("about-section");
          null == e && (e = "about"),
            this.changeScreen(document.getElementById(e));
        }
        render() {
          return (0, i.jsxs)("div", {
            className:
              "w-full h-full flex bg-ub-cool-grey text-white select-none relative",
            children: [
              (0, i.jsx)("div", {
                className:
                  "md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black",
                children: this.renderNavLinks(),
              }),
              (0, i.jsxs)("div", {
                onClick: this.showNavBar,
                className:
                  "md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1",
                children: [
                  (0, i.jsx)("div", {
                    className: " w-3.5 border-t border-white",
                  }),
                  (0, i.jsx)("div", {
                    className: " w-3.5 border-t border-white",
                    style: { marginTop: "2pt", marginBottom: "2pt" },
                  }),
                  (0, i.jsx)("div", {
                    className: " w-3.5 border-t border-white",
                  }),
                  (0, i.jsx)("div", {
                    className:
                      (this.state.navbar
                        ? " visible animateShow z-30 "
                        : " invisible ") +
                      " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20",
                    children: this.renderNavLinks(),
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className:
                  "flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen",
                children: this.state.screen,
              }),
            ],
          });
        }
        constructor() {
          super(),
            (0, a.Z)(this, "changeScreen", (e) => {
              let t = e.id || e.target.id;
              localStorage.setItem("about-section", t),
                p.ZP.send({
                  hitType: "pageview",
                  page: "/".concat(t),
                  title: "Custom Title",
                }),
                this.setState({ screen: this.screens[t], active_screen: t });
            }),
            (0, a.Z)(this, "showNavBar", () => {
              this.setState({ navbar: !this.state.navbar });
            }),
            (0, a.Z)(this, "renderNavLinks", () =>
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsxs)("div", {
                    id: "about",
                    tabIndex: "0",
                    onFocus: this.changeScreen,
                    className:
                      ("about" === this.state.active_screen
                        ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
                        : " hover:bg-gray-50 hover:bg-opacity-5 ") +
                      " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5",
                    children: [
                      (0, i.jsx)("img", {
                        className: " w-3 md:w-4",
                        alt: "about dawidolko",
                        src: "./themes/Yaru/status/about.svg",
                      }),
                      (0, i.jsx)("span", {
                        className: " ml-1 md:ml-2 text-gray-50 ",
                        children: "About Me",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    id: "education",
                    tabIndex: "0",
                    onFocus: this.changeScreen,
                    className:
                      ("education" === this.state.active_screen
                        ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
                        : " hover:bg-gray-50 hover:bg-opacity-5 ") +
                      " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5",
                    children: [
                      (0, i.jsx)("img", {
                        className: " w-3 md:w-4",
                        alt: "dawidolko' education",
                        src: "./themes/Yaru/status/education.svg",
                      }),
                      (0, i.jsx)("span", {
                        className: " ml-1 md:ml-2 text-gray-50 ",
                        children: "Education",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    id: "skills",
                    tabIndex: "0",
                    onFocus: this.changeScreen,
                    className:
                      ("skills" === this.state.active_screen
                        ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
                        : " hover:bg-gray-50 hover:bg-opacity-5 ") +
                      " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5",
                    children: [
                      (0, i.jsx)("img", {
                        className: " w-3 md:w-4",
                        alt: "dawidolko' skills",
                        src: "./themes/Yaru/status/skills.svg",
                      }),
                      (0, i.jsx)("span", {
                        className: " ml-1 md:ml-2 text-gray-50 ",
                        children: "Skills",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    id: "projects",
                    tabIndex: "0",
                    onFocus: this.changeScreen,
                    className:
                      ("projects" === this.state.active_screen
                        ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
                        : " hover:bg-gray-50 hover:bg-opacity-5 ") +
                      " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5",
                    children: [
                      (0, i.jsx)("img", {
                        className: " w-3 md:w-4",
                        alt: "dawidolko' projects",
                        src: "./themes/Yaru/status/projects.svg",
                      }),
                      (0, i.jsx)("span", {
                        className: " ml-1 md:ml-2 text-gray-50 ",
                        children: "Sponsors",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    id: "resume",
                    tabIndex: "0",
                    onFocus: this.changeScreen,
                    className:
                      ("resume" === this.state.active_screen
                        ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
                        : " hover:bg-gray-50 hover:bg-opacity-5 ") +
                      " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5",
                    children: [
                      (0, i.jsx)("img", {
                        className: " w-3 md:w-4",
                        alt: "dawidolko's resume",
                        src: "./themes/Yaru/status/download.svg",
                      }),
                      (0, i.jsx)("span", {
                        className: " ml-1 md:ml-2 text-gray-50 ",
                        children: "Resume",
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "my-0.5 w-28 md:w-full h-8 px-2 md:px-2.5 flex",
                    children: (0, i.jsx)("iframe", {
                      src: "https://github.com/sponsors/dawidolko/button",
                      title: "Sponsor dawidolko",
                      width: "100%",
                      height: "100%",
                    }),
                  }),
                ],
              })
            ),
            (this.screens = {}),
            (this.state = {
              screen: () => {},
              active_screen: "about",
              navbar: !1,
            });
        }
      }
      let C = () => (0, i.jsx)(_, {});
      function A() {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("div", {
              className: "w-20 md:w-28 my-4 bg-white rounded-full",
              children: (0, i.jsx)("img", {
                className: "w-full",
                src: "./images/logos/bitmoji.JPG",
                alt: "dawidolko Patel Logo",
              }),
            }),
            (0, i.jsxs)("div", {
              className: " mt-4 md:mt-8 text-lg md:text-2xl text-center px-1",
              children: [
                (0, i.jsxs)("div", {
                  children: [
                    "my name is ",
                    (0, i.jsx)("span", {
                      className: "font-bold",
                      children: "dawidolko Patel",
                    }),
                    " ,",
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "font-normal ml-1",
                  children: [
                    "I'm a ",
                    (0, i.jsx)("span", {
                      className: "text-pink-600 font-bold",
                      children: "Frontend Engineer!",
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: " mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48",
              children: [
                (0, i.jsx)("div", {
                  className:
                    "bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0",
                }),
                (0, i.jsx)("div", {
                  className:
                    "bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0",
                }),
              ],
            }),
            (0, i.jsxs)("ul", {
              className:
                " mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list",
              children: [
                (0, i.jsxs)("li", {
                  className: " list-pc",
                  children: [
                    "I'm a ",
                    (0, i.jsx)("span", {
                      className: " font-medium",
                      children: "Graduate Student",
                    }),
                    " currently pursuing Computer Science. I've completed my 2 month PL intern at ",
                    (0, i.jsxs)("u", {
                      className: " cursor-pointer ",
                      children: [
                        " ",
                        (0, i.jsx)("a", {
                          href: "https://en.wikipedia.org/wiki/HackerRank",
                          target: "_blank",
                          children: "HackerRank",
                        }),
                        " ",
                      ],
                    }),
                    ", and now I'm looking for full-time frontend engineer roles! ( Hit me up ",
                    (0, i.jsx)("a", {
                      className: "text-underline",
                      href: "mailto:poczta@dawidolko.pl",
                      children: (0, i.jsx)("u", {
                        children: "@poczta@dawidolko.pl",
                      }),
                    }),
                    " :) )",
                  ],
                }),
                (0, i.jsx)("li", {
                  className: " mt-3 list-building",
                  children:
                    " I enjoy building awesome softwares that solve practical problems.",
                }),
                (0, i.jsxs)("li", {
                  className: " mt-3 list-time",
                  children: [
                    " When I am not coding my next project, I like to spend my time reading books, playing minecraft or watching ",
                    (0, i.jsx)("a", {
                      href: "https://www.youtube.com/channel/UCBa659QWEk1AI4Tg--mrJ2A",
                      target: "_blank",
                      rel: "noreferrer",
                      children: " tom scott's videos.",
                    }),
                  ],
                }),
                (0, i.jsx)("li", {
                  className: " mt-3 list-star",
                  children:
                    " And I also have interest in Deep Learning & Computer Vision!",
                }),
              ],
            }),
          ],
        });
      }
      function I() {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)("div", {
              className: " font-medium relative text-2xl mt-2 md:mt-4 mb-4",
              children: [
                "Education",
                (0, i.jsxs)("div", {
                  className: "absolute pt-px bg-white mt-px top-full w-full",
                  children: [
                    (0, i.jsx)("div", {
                      className:
                        "bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full",
                    }),
                    (0, i.jsx)("div", {
                      className:
                        "bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full",
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsxs)("ul", {
              className: " w-10/12 mt-4 ml-4 px-0 md:px-1",
              children: [
                (0, i.jsxs)("li", {
                  className: "list-disc",
                  children: [
                    (0, i.jsx)("div", {
                      className:
                        " text-lg md:text-xl text-left font-bold leading-tight",
                      children: "University of Rzeszów",
                    }),
                    (0, i.jsx)("div", {
                      className: " text-sm text-gray-400 mt-0.5",
                      children: "2022 - 2024",
                    }),
                    (0, i.jsx)("div", {
                      className: " text-sm md:text-base",
                      children: "Computer Science",
                    }),
                    (0, i.jsx)("div", {
                      className: "text-sm text-gray-300 font-bold mt-1",
                      children: "GPA \xa0 5.0/5.0",
                    }),
                  ],
                }),
                (0, i.jsxs)("li", {
                  className: "list-disc",
                  children: [
                    (0, i.jsx)("div", {
                      className:
                        " text-lg md:text-xl text-left font-bold leading-tight",
                      children: "Electrical engineering school in Nisko",
                    }),
                    (0, i.jsx)("div", {
                      className: " text-sm text-gray-400 mt-0.5",
                      children: "2018 - 2022",
                    }),
                    (0, i.jsx)("div", {
                      className: " text-sm md:text-base",
                      children: "Electrical technician",
                    }),
                    (0, i.jsx)("div", {
                      className: "text-sm text-gray-300 font-bold mt-1",
                      children: "CGPA \xa0 8.0/10",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function D() {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)("div", {
              className: " font-medium relative text-2xl mt-2 md:mt-4 mb-4",
              children: [
                "Technical Skills",
                (0, i.jsxs)("div", {
                  className: "absolute pt-px bg-white mt-px top-full w-full",
                  children: [
                    (0, i.jsx)("div", {
                      className:
                        "bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full",
                    }),
                    (0, i.jsx)("div", {
                      className:
                        "bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full",
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsxs)("ul", {
              className:
                " tracking-tight text-sm md:text-base w-10/12 emoji-list",
              children: [
                (0, i.jsx)("li", {
                  className:
                    " list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight",
                  children:
                    "I've worked with a wide variety of programming languages & frameworks.",
                }),
                (0, i.jsx)("li", {
                  className:
                    " list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight",
                  children: (0, i.jsxs)("div", {
                    children: [
                      " My areas of expertise are ",
                      (0, i.jsx)("strong", {
                        className: "text-ubt-gedit-orange",
                        children:
                          "front-end development, React.js & javascript!",
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)("li", {
                  className:
                    " list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight",
                  children: (0, i.jsx)("div", {
                    children: "Here are my most frequently used",
                  }),
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: "w-full md:w-10/12 flex mt-4",
              children: [
                (0, i.jsx)("div", {
                  className:
                    " text-sm text-center md:text-base w-1/2 font-bold",
                  children: "Languages & Tools",
                }),
                (0, i.jsx)("div", {
                  className:
                    " text-sm text-center md:text-base w-1/2 font-bold",
                  children: "Frameworks & Libraries",
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className:
                "w-full md:w-10/12 flex justify-center items-start font-bold text-center",
              children: [
                (0, i.jsx)("div", {
                  className: "px-2 w-1/2",
                  children: (0, i.jsxs)("div", {
                    className:
                      "flex flex-wrap justify-center items-start w-full mt-2",
                    children: [
                      (0, i.jsx)("img", {
                        className: "m-1",
                        src: "https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A",
                        alt: "dawidolko javascript",
                      }),
                      (0, i.jsx)("img", {
                        className: "m-1",
                        src: "https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white",
                        alt: "dawidolko c++",
                      }),
                      (0, i.jsx)("img", {
                        className: "m-1",
                        src: "http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff",
                        alt: "dawidolko python",
                      }),
                      (0, i.jsx)("img", {
                        className: "m-1",
                        src: "https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white",
                        alt: "dawidolko dart",
                      }),
                      (0, i.jsx)("a", {
                        href: "https://www.google.com/search?q=is+html+a+language%3F",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, i.jsx)("img", {
                          title: "yes it's a language!",
                          className: "m-1",
                          src: "https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff",
                          alt: "dawidolko HTML",
                        }),
                      }),
                      (0, i.jsx)("img", {
                        src: "https://img.shields.io/badge/-Sass-%23CC6699?style=flat&logo=sass&logoColor=ffffff",
                        alt: "dawidolko SASS",
                        className: "m-1",
                      }),
                      (0, i.jsx)("img", {
                        src: "https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff",
                        alt: "dawidolko git",
                        className: "m-1",
                      }),
                      (0, i.jsx)("img", {
                        src: "https://img.shields.io/badge/-Firebase-FFCA28?style=flat&logo=firebase&logoColor=ffffff",
                        alt: "dawidolko firebase",
                        className: "m-1",
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)("div", {
                  className: "px-2 flex flex-wrap items-start w-1/2",
                  children: (0, i.jsxs)("div", {
                    className:
                      "flex flex-wrap justify-center items-start w-full mt-2",
                    children: [
                      (0, i.jsx)("img", {
                        className: " m-1",
                        src: "https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=ffffff",
                        alt: "dawidolko next",
                      }),
                      (0, i.jsx)("img", {
                        className: " m-1",
                        src: "https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff",
                        alt: "dawidolko react",
                      }),
                      (0, i.jsx)("img", {
                        className: "m-1",
                        src: "https://img.shields.io/badge/Flutter-02569B?style=flat&logo=flutter&logoColor=white",
                        alt: "dawidolko flutter",
                      }),
                      (0, i.jsx)("img", {
                        className: "m-1",
                        src: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white",
                        alt: "dawidolko tailwind css",
                      }),
                      (0, i.jsx)("img", {
                        src: "https://img.shields.io/badge/-Nodejs-339933?style=flat&logo=Node.js&logoColor=ffffff",
                        alt: "dawidolko node.js",
                        className: "m-1",
                      }),
                      (0, i.jsx)("img", {
                        src: "https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white",
                        alt: "dawidolko jquery",
                        className: "m-1",
                      }),
                      (0, i.jsx)("img", {
                        className: "m-1",
                        src: "https://img.shields.io/badge/Redux-593D88?style=flat&logo=redux&logoColor=white",
                        alt: "dawidolko redux",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, i.jsx)("ul", {
              className:
                " tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4",
              children: (0, i.jsxs)("li", {
                className:
                  " list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight",
                children: [
                  (0, i.jsx)("span", { children: " And of course," }),
                  " ",
                  (0, i.jsx)("img", {
                    className: " inline ml-1",
                    src: "http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff",
                    alt: "dawidolko linux",
                  }),
                  " ",
                  (0, i.jsx)("span", { children: "!" }),
                ],
              }),
            }),
          ],
        });
      }
      function P() {
        let e = {
          javascript: "yellow-300",
          firebase: "red-600",
          firestore: "red-500",
          "firebase auth": "red-400",
          "chrome-extension": "yellow-400",
          flutter: "blue-400",
          dart: "blue-500",
          "react-native": "purple-500",
          html5: "pink-600",
          sass: "pink-400",
          tensorflow: "yellow-600",
          django: "green-600",
          python: "green-200",
          "codeforces-api": "gray-300",
          tailwindcss: "blue-300",
          "next.js": "purple-600",
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)("div", {
              className: " font-medium relative text-2xl mt-2 md:mt-4 mb-4",
              children: [
                "Sponsors",
                (0, i.jsxs)("div", {
                  className: "absolute pt-px bg-white mt-px top-full w-full",
                  children: [
                    (0, i.jsx)("div", {
                      className:
                        "bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full",
                    }),
                    (0, i.jsx)("div", {
                      className:
                        "bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full",
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsx)("iframe", {
              src: "https://github.com/sponsors/dawidolko/card",
              title: "Sponsor dawidolko",
              className: "my-4 w-5/6 md:w-3/4",
            }),
            [].map((t, s) => {
              let a = t.link.split("/"),
                r = a[a.length - 1];
              return (0, i.jsx)(
                "a",
                {
                  href: t.link,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "flex w-full flex-col px-4",
                  children: (0, i.jsxs)("div", {
                    className:
                      "w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer",
                    children: [
                      (0, i.jsxs)("div", {
                        className:
                          "flex flex-wrap justify-between items-center",
                        children: [
                          (0, i.jsxs)("div", {
                            className: "flex justify-center items-center",
                            children: [
                              (0, i.jsx)("div", {
                                className: " text-base md:text-lg mr-2",
                                children: t.name.toLowerCase(),
                              }),
                              (0, i.jsx)("iframe", {
                                src: "https://ghbtns.com/github-btn.html?user=dawidolko&repo=".concat(
                                  r,
                                  "&type=star&count=true"
                                ),
                                frameBorder: "0",
                                scrolling: "0",
                                width: "150",
                                height: "20",
                                title: t.name.toLowerCase() + "-star",
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className: "text-gray-300 font-light text-sm",
                            children: t.date,
                          }),
                        ],
                      }),
                      (0, i.jsx)("ul", {
                        className:
                          " tracking-normal leading-tight text-sm font-light ml-4 mt-1",
                        children: t.description.map((e, t) =>
                          (0, i.jsx)(
                            "li",
                            {
                              className: "list-disc mt-1 text-gray-100",
                              children: e,
                            },
                            t
                          )
                        ),
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "flex flex-wrap items-start justify-start text-xs py-2",
                        children: t.domains
                          ? t.domains.map((t, s) => {
                              let a = "border-".concat(e[t]),
                                r = "text-".concat(e[t]);
                              return (0, i.jsx)(
                                "span",
                                {
                                  className: "px-1.5 py-0.5 w-max border "
                                    .concat(a, " ")
                                    .concat(r, " m-1 rounded-full"),
                                  children: t,
                                },
                                s
                              );
                            })
                          : null,
                      }),
                    ],
                  }),
                },
                s
              );
            }),
          ],
        });
      }
      function B() {
        return (0, i.jsx)("iframe", {
          className: "h-full w-full",
          src: "./files/cv_ver1.pdf",
          title: "Dawid Olko resume",
          frameBorder: "0",
        });
      }
      let T = s(6217)._b,
        Z = new T({
          operators: {
            add: !0,
            concatenate: !0,
            conditional: !0,
            divide: !0,
            factorial: !0,
            multiply: !0,
            power: !0,
            remainder: !0,
            subtract: !0,
            logical: !1,
            comparison: !1,
            in: !1,
            assignment: !0,
          },
        });
      class E extends r.Component {
        componentDidMount() {
          this.reStartTerminal();
        }
        componentDidUpdate() {
          clearInterval(this.cursor), this.startCursor(this.terminal_rows - 2);
        }
        componentWillUnmount() {
          clearInterval(this.cursor);
        }
        xss(e) {
          if (e)
            return e
              .split("")
              .map((e) => {
                switch (e) {
                  case "&":
                    return "&amp";
                  case "<":
                    return "&lt";
                  case ">":
                    return "&gt";
                  case '"':
                    return "&quot";
                  case "'":
                    return "&#x27";
                  case "/":
                    return "&#x2F";
                  default:
                    return e;
                }
              })
              .join("");
        }
        render() {
          return (0, i.jsxs)("div", {
            className:
              "h-full w-full bg-ub-drk-abrgn text-ubt-grey opacity-100 p-1 float-left font-normal",
            children: [
              (0, i.jsx)("div", {
                children:
                  "C-style arbitary precision calculator (version 2.12.7.2)",
              }),
              (0, i.jsx)("div", { children: "Calc is open software." }),
              (0, i.jsx)("div", {
                children:
                  '[ type "exit" to exit, "clear" to clear, "help" for help.]',
              }),
              (0, i.jsx)("div", {
                className: "text-white text-sm font-bold bg-ub-drk-abrgn",
                id: "calculator-body",
                children: this.state.terminal,
              }),
            ],
          });
        }
        constructor() {
          super(),
            (0, a.Z)(this, "reStartTerminal", () => {
              clearInterval(this.cursor),
                u()("#calculator-body").empty(),
                this.appendTerminalRow();
            }),
            (0, a.Z)(this, "appendTerminalRow", () => {
              let e = this.state.terminal;
              e.push(this.terminalRow(this.terminal_rows)),
                this.setState({ terminal: e }),
                (this.terminal_rows += 2);
            }),
            (0, a.Z)(this, "terminalRow", (e) =>
              (0, i.jsxs)(
                r.Fragment,
                {
                  children: [
                    (0, i.jsx)("div", {
                      className:
                        " flex p-2 text-ubt-grey opacity-100 mt-1 float-left font-normal ",
                    }),
                    (0, i.jsxs)("div", {
                      className: "flex w-full h-5",
                      children: [
                        (0, i.jsxs)("div", {
                          className: " flex text-ubt-green h-1 mr-2",
                          children: [" ", ";", " "],
                        }),
                        (0, i.jsxs)("div", {
                          id: "cmd",
                          onClick: this.focusCursor,
                          className:
                            " bg-transperent relative flex-1 overflow-hidden",
                          children: [
                            (0, i.jsx)("span", {
                              id: "show-calculator-".concat(e),
                              className:
                                " float-left whitespace-pre pb-1 opacity-100 font-normal tracking-wider",
                            }),
                            (0, i.jsx)("div", {
                              id: "cursor-".concat(e),
                              className:
                                " float-left mt-1 w-1.5 h-3.5 bg-white",
                            }),
                            (0, i.jsx)("input", {
                              id: "calculator-input-".concat(e),
                              "data-row-id": e,
                              onKeyDown: this.checkKey,
                              onBlur: this.unFocusCursor,
                              className:
                                " absolute top-0 left-0 w-full opacity-0 outline-none bg-transparent",
                              spellCheck: !1,
                              autoFocus: !0,
                              autoComplete: "off",
                              type: "text",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      id: "row-calculator-result-".concat(e),
                      className: "my-2 font-normal",
                    }),
                  ],
                },
                e
              )
            ),
            (0, a.Z)(this, "focusCursor", (e) => {
              clearInterval(this.cursor),
                this.startCursor(u()(e.target).data("row-id"));
            }),
            (0, a.Z)(this, "unFocusCursor", (e) => {
              this.stopCursor(u()(e.target).data("row-id"));
            }),
            (0, a.Z)(this, "startCursor", (e) => {
              clearInterval(this.cursor),
                u()("input#calculator-input-".concat(e)).trigger("focus"),
                u()("input#calculator-input-".concat(e)).on(
                  "input",
                  function () {
                    u()("#cmd span#show-calculator-".concat(e)).text(
                      u()(this).val()
                    );
                  }
                ),
                (this.cursor = window.setInterval(function () {
                  "visible" === u()("#cursor-".concat(e)).css("visibility")
                    ? u()("#cursor-".concat(e)).css({ visibility: "hidden" })
                    : u()("#cursor-".concat(e)).css({ visibility: "visible" });
                }, 500));
            }),
            (0, a.Z)(this, "stopCursor", (e) => {
              clearInterval(this.cursor),
                u()("#cursor-".concat(e)).css({ visibility: "visible" });
            }),
            (0, a.Z)(this, "removeCursor", (e) => {
              this.stopCursor(e),
                u()("#cursor-".concat(e)).css({ display: "none" });
            }),
            (0, a.Z)(this, "clearInput", (e) => {
              u()("input#calculator-input-".concat(e)).trigger("blur");
            }),
            (0, a.Z)(this, "checkKey", (e) => {
              if ("Enter" === e.key) {
                let t = u()(e.target).data("row-id"),
                  s = u()("input#calculator-input-".concat(t)).val().trim();
                0 !== s.length &&
                  (this.removeCursor(t),
                  this.handleCommands(s, t),
                  this.prev_commands.push(s),
                  (this.commands_index = this.prev_commands.length - 1),
                  this.clearInput(t));
              } else if ("ArrowUp" === e.key) {
                let i;
                i =
                  this.commands_index <= -1
                    ? ""
                    : this.prev_commands[this.commands_index];
                let a = u()(e.target).data("row-id");
                u()("input#calculator-input-".concat(a)).val(i),
                  u()("#show-calculator-".concat(a)).text(i),
                  this.commands_index--;
              } else if ("ArrowDown" === e.key) {
                let r;
                if (this.commands_index >= this.prev_commands.length) return;
                this.commands_index <= -1 && (this.commands_index = 0),
                  (r =
                    this.commands_index === this.prev_commands.length
                      ? ""
                      : this.prev_commands[this.commands_index]);
                let n = u()(e.target).data("row-id");
                u()("input#calculator-input-".concat(n)).val(r),
                  u()("#show-calculator-".concat(n)).text(r),
                  this.commands_index++;
              }
            }),
            (0, a.Z)(this, "closeTerminal", () => {
              u()("#close-calc").trigger("click");
            }),
            (0, a.Z)(this, "handleCommands", (e, t) => {
              let s = e.split(" ").filter(Boolean)[0],
                i = "";
              switch (s) {
                case "clear":
                  this.reStartTerminal();
                  return;
                case "exit":
                  this.closeTerminal();
                  return;
                case "help":
                  i =
                    'Available Commands: <br/>Operators:<br/> addition ( + ), subtraction ( - ),<br/>multiplication ( * ), division ( / ),<br/>modulo ( % )exponentiation. ( ^ )<br/><br/>Mathematical functions:<br/>abs[x] : Absolute value (magnitude) of x<br/>acos[x] : Arc cosine of x (in radians)<br/>acosh[x] : Hyperbolic arc cosine of x (in radians)<br/>asin[x] : Arc sine of x (in radians)<br/>asinh[x] : Hyperbolic arc sine of x (in radians)<br/>atan[x] : Arc tangent of x (in radians)<br/>atanh[x] : Hyperbolic arc tangent of x (in radians)<br/>cbrt[x] : Cube root of x<br/>ceil[x] : Ceiling of x — the smallest integer that’s >= x<br/>cos[x] : Cosine of x (x is in radians)<br/>cosh[x] : Hyperbolic cosine of x (x is in radians)<br/>exp[x] : e^x (exponential/antilogarithm function with base e)<br/>floor[x] : Floor of x — the largest integer that’s <= x<br/>ln[x] : Natural logarithm of x<br/>log[x] : Natural logarithm of x (synonym for ln, not base-10)<br/>log10[x] :	Base-10 logarithm of x<br/>log2[x] : Base-2 logarithm of x<br/>round[x] :	X, rounded to the nearest integer<br/>sign[x] : Sign of x (-1, 0, or 1 for negative, zero, or positive respectively)<br/>sin[x] : Sine of x (x is in radians)<br/>sinh[x] : Hyperbolic sine of x (x is in radians)<br/>sqrt[x] : Square root of x. Result is NaN (Not a Number) if x is negative.<br/>tan[x] : Tangent of x (x is in radians)<br/>tanh[x] : Hyperbolic tangent of x (x is in radians)<br/> <br/><br/>Pre-defined functions:<br/>random(n) : Get a random number in the range [0, n). If n is zero, or not provided, it defaults to 1.<br/>fac(n)	n! : (factorial of n: "n * (n-1) * (n-2) * … * 2 * 1") Deprecated. Use the ! operator instead.<br/>min(a,b,…) : Get the smallest (minimum) number in the list.<br/>max(a,b,…) : Get the largest (maximum) number in the list.<br/>hypot(a,b) : Hypotenuse, i.e. the square root of the sum of squares of its arguments.<br/>pyt(a, b) : Alias for hypot.<br/>pow(x, y) : Equivalent to x^y.<br/>roundTo(x, n) : Rounds x to n places after the decimal point.<br/><br/>Constants: <br/>E : The value of Math.E from your JavaScript runtime.<br/>PI : The value of Math.PI from your JavaScript runtime.<br/><br/>Variable assignments : <br/>declare variable and assign a value: x=1  declared variable can be used in further calculation x+2.<br/><br/>clear command for clearing calculator app.<br/><br/>exit command for exit from calculator app. ';
                  break;
                default:
                  i = this.evaluteExp(e);
              }
              (document.getElementById(
                "row-calculator-result-".concat(t)
              ).innerHTML = i),
                this.appendTerminalRow();
            }),
            (0, a.Z)(this, "evaluteExp", (e) => {
              let t,
                s = "";
              try {
                t = Z.parse(e);
                try {
                  (s = Z.evaluate(e, this.variables)),
                    2 === t.tokens.length &&
                      "IOP2" === t.tokens[2].type &&
                      (this.variables[t.variables()[0]] = s);
                } catch (i) {
                  s = i.message;
                }
              } catch (a) {
                s = "Invalid Expression";
              }
              return s;
            }),
            (this.cursor = ""),
            (this.terminal_rows = 2),
            (this.prev_commands = []),
            (this.commands_index = -1),
            (this.variables = {}),
            (this.state = { terminal: [] });
        }
      }
      let F = (e, t) =>
        (0, i.jsx)(E, { addFolder: e, openApp: t, children: " " });
      var M = [
          {
            id: "chrome",
            title: "Google Chrome",
            icon: "./themes/Yaru/apps/chrome.png",
            disabled: !1,
            favourite: !0,
            desktop_shortcut: !0,
            screen: v,
          },
          {
            id: "calc",
            title: "Calc",
            icon: "./themes/Yaru/apps/calc.png",
            disabled: !1,
            favourite: !0,
            desktop_shortcut: !1,
            screen: F,
          },
          {
            id: "about-dawidolko",
            title: "About dawidolko",
            icon: "./themes/Yaru/system/user-home.png",
            disabled: !1,
            favourite: !0,
            desktop_shortcut: !0,
            screen: C,
          },
          {
            id: "vscode",
            title: "Visual Studio Code",
            icon: "./themes/Yaru/apps/vscode.png",
            disabled: !1,
            favourite: !0,
            desktop_shortcut: !1,
            screen: function () {
              return (0, i.jsx)("iframe", {
                src: "https://github1s.com/dawidolko/Simulaing-Ubuntu-System-GUI/tree/main",
                frameBorder: "0",
                title: "VsCode",
                className: "h-full w-full bg-ub-cool-grey",
              });
            },
          },
          {
            id: "terminal",
            title: "Terminal",
            icon: "./themes/Yaru/apps/bash.png",
            disabled: !1,
            favourite: !0,
            desktop_shortcut: !1,
            screen: x,
          },
          {
            id: "spotify",
            title: "Spotify",
            icon: "./themes/Yaru/apps/spotify.png",
            disabled: !1,
            favourite: !0,
            desktop_shortcut: !1,
            screen: function () {
              return (0, i.jsx)("iframe", {
                src: "https://open.spotify.com/embed/playlist/37i9dQZEVXbLZ52XmnySJg",
                frameBorder: "0",
                title: "Spotify",
                className: "h-full w-full bg-ub-cool-grey",
              });
            },
          },
          {
            id: "settings",
            title: "Settings",
            icon: "./themes/Yaru/apps/gnome-control-center.png",
            disabled: !1,
            favourite: !0,
            desktop_shortcut: !1,
            screen: f,
          },
          {
            id: "trash",
            title: "Trash",
            icon: "./themes/Yaru/system/user-trash-full.png",
            disabled: !1,
            favourite: !1,
            desktop_shortcut: !0,
            screen: j,
          },
          {
            id: "gedit",
            title: "Contact Me",
            icon: "./themes/Yaru/apps/gedit.png",
            disabled: !1,
            favourite: !1,
            desktop_shortcut: !0,
            screen: S,
          },
        ],
        z = s(1193),
        L = s.n(z);
      class U extends r.Component {
        componentDidMount() {
          (this.id = this.props.id),
            this.setDefaultWindowDimenstion(),
            p.ZP.send({
              hitType: "pageview",
              page: "/".concat(this.id),
              title: "Custom Title",
            }),
            window.addEventListener("resize", this.resizeBoundries);
        }
        componentWillUnmount() {
          p.ZP.send({
            hitType: "pageview",
            page: "/desktop",
            title: "Custom Title",
          }),
            window.removeEventListener("resize", this.resizeBoundries);
        }
        render() {
          return (0, i.jsx)(L(), {
            axis: "both",
            handle: ".bg-ub-window-title",
            grid: [1, 1],
            scale: 1,
            onStart: this.changeCursorToMove,
            onStop: this.changeCursorToDefault,
            onDrag: this.checkOverlap,
            allowAnyClick: !1,
            defaultPosition: { x: this.startX, y: this.startY },
            bounds: {
              left: 0,
              top: 0,
              right: this.state.parentSize.width,
              bottom: this.state.parentSize.height,
            },
            children: (0, i.jsxs)("div", {
              style: {
                width: "".concat(this.state.width, "%"),
                height: "".concat(this.state.height, "%"),
              },
              className:
                this.state.cursorType +
                " " +
                (this.state.closed ? " closed-window " : "") +
                (this.state.maximized
                  ? " duration-300 rounded-none"
                  : " rounded-lg rounded-b-none") +
                (this.props.minimized
                  ? " opacity-0 invisible duration-200 "
                  : "") +
                (this.props.isFocused ? " z-30 " : " z-20 notFocused") +
                " opened-window overflow-hidden min-w-1/4 min-h-1/4 main-window absolute window-shadow border-black border-opacity-40 border border-t-0 flex flex-col",
              id: this.id,
              children: [
                (0, i.jsx)(Y, { resize: this.handleHorizontalResize }),
                (0, i.jsx)(O, { resize: this.handleVerticleResize }),
                (0, i.jsx)(R, { title: this.props.title }),
                (0, i.jsx)(W, {
                  minimize: this.minimizeWindow,
                  maximize: this.maximizeWindow,
                  isMaximised: this.state.maximized,
                  close: this.closeWindow,
                  id: this.id,
                }),
                "settings" === this.id
                  ? (0, i.jsx)(b, {
                      changeBackgroundImage: this.props.changeBackgroundImage,
                      currBgImgName: this.props.bg_image_name,
                    })
                  : (0, i.jsx)(V, {
                      screen: this.props.screen,
                      title: this.props.title,
                      addFolder:
                        "terminal" === this.props.id
                          ? this.props.addFolder
                          : null,
                      openApp: this.props.openApp,
                    }),
              ],
            }),
          });
        }
        constructor() {
          super(),
            (0, a.Z)(this, "setDefaultWindowDimenstion", () => {
              window.innerWidth < 640
                ? this.setState({ height: 60, width: 85 }, this.resizeBoundries)
                : this.setState(
                    { height: 85, width: 60 },
                    this.resizeBoundries
                  );
            }),
            (0, a.Z)(this, "resizeBoundries", () => {
              this.setState({
                parentSize: {
                  height:
                    window.innerHeight -
                    window.innerHeight * (this.state.height / 100) -
                    28,
                  width:
                    window.innerWidth -
                    window.innerWidth * (this.state.width / 100),
                },
              });
            }),
            (0, a.Z)(this, "changeCursorToMove", () => {
              this.focusWindow(),
                this.state.maximized && this.restoreWindow(),
                this.setState({ cursorType: "cursor-move" });
            }),
            (0, a.Z)(this, "changeCursorToDefault", () => {
              this.setState({ cursorType: "cursor-default" });
            }),
            (0, a.Z)(this, "handleVerticleResize", () => {
              this.setState(
                { height: this.state.height + 0.1 },
                this.resizeBoundries
              );
            }),
            (0, a.Z)(this, "handleHorizontalResize", () => {
              this.setState(
                { width: this.state.width + 0.1 },
                this.resizeBoundries
              );
            }),
            (0, a.Z)(this, "setWinowsPosition", () => {
              var e = document.querySelector("#" + this.id),
                t = e.getBoundingClientRect();
              e.style.setProperty(
                "--window-transform-x",
                t.x.toFixed(1).toString() + "px"
              ),
                e.style.setProperty(
                  "--window-transform-y",
                  (t.y.toFixed(1) - 32).toString() + "px"
                );
            }),
            (0, a.Z)(this, "checkOverlap", () => {
              50 >
              document
                .querySelector("#" + this.id)
                .getBoundingClientRect()
                .x.toFixed(1)
                ? this.props.hideSideBar(this.id, !0)
                : this.props.hideSideBar(this.id, !1);
            }),
            (0, a.Z)(this, "focusWindow", () => {
              this.props.focus(this.id);
            }),
            (0, a.Z)(this, "minimizeWindow", () => {
              let e = -310;
              this.state.maximized && (e = -510), this.setWinowsPosition();
              var t = document.querySelector("#sidebar-" + this.id),
                s = t.getBoundingClientRect();
              ((t = document.querySelector("#" + this.id)).style.transform =
                "translate("
                  .concat(e, "px,")
                  .concat(s.y.toFixed(1) - 240, "px) scale(0.2)")),
                this.props.hasMinimised(this.id);
            }),
            (0, a.Z)(this, "restoreWindow", () => {
              var e = document.querySelector("#" + this.id);
              this.setDefaultWindowDimenstion();
              let t = e.style.getPropertyValue("--window-transform-x"),
                s = e.style.getPropertyValue("--window-transform-y");
              (e.style.transform = "translate(".concat(t, ",").concat(s, ")")),
                setTimeout(() => {
                  this.setState({ maximized: !1 }), this.checkOverlap();
                }, 300);
            }),
            (0, a.Z)(this, "maximizeWindow", () => {
              if (this.state.maximized) this.restoreWindow();
              else {
                this.focusWindow();
                var e = document.querySelector("#" + this.id);
                this.setWinowsPosition(),
                  (e.style.transform = "translate(-1pt,-2pt)"),
                  this.setState({ maximized: !0, height: 96.3, width: 100.2 }),
                  this.props.hideSideBar(this.id, !0);
              }
            }),
            (0, a.Z)(this, "closeWindow", () => {
              this.setWinowsPosition(),
                this.setState({ closed: !0 }, () => {
                  this.props.hideSideBar(this.id, !1),
                    setTimeout(() => {
                      this.props.closed(this.id);
                    }, 300);
                });
            }),
            (this.id = null),
            (this.startX = 60),
            (this.startY = 10),
            (this.state = {
              cursorType: "cursor-default",
              width: 60,
              height: 85,
              closed: !1,
              maximized: !1,
              parentSize: { height: 100, width: 100 },
            });
        }
      }
      function R(e) {
        return (0, i.jsx)("div", {
          className:
            " relative bg-ub-window-title border-t-2 border-white border-opacity-5 py-1.5 px-3 text-white w-full select-none rounded-b-none",
          children: (0, i.jsx)("div", {
            className: "flex justify-center text-sm font-bold",
            children: e.title,
          }),
        });
      }
      class Y extends r.Component {
        componentDidMount() {
          (this.trpImg = new Image(0, 0)),
            (this.trpImg.src =
              "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),
            (this.trpImg.style.opacity = 0);
        }
        render() {
          return (0, i.jsx)("div", {
            className:
              " window-y-border border-transparent border-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
            onDragStart: (e) => {
              e.dataTransfer.setDragImage(this.trpImg, 0, 0);
            },
            onDrag: this.props.resize,
          });
        }
      }
      class O extends r.Component {
        componentDidMount() {
          (this.trpImg = new Image(0, 0)),
            (this.trpImg.src =
              "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),
            (this.trpImg.style.opacity = 0);
        }
        render() {
          return (0, i.jsx)("div", {
            className:
              " window-x-border border-transparent border-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
            onDragStart: (e) => {
              e.dataTransfer.setDragImage(this.trpImg, 0, 0);
            },
            onDrag: this.props.resize,
          });
        }
      }
      function W(e) {
        return (0, i.jsxs)("div", {
          className:
            "absolute select-none right-0 top-0 mt-1 mr-1 flex justify-center items-center",
          children: [
            (0, i.jsx)("span", {
              className:
                "mx-1.5 bg-white bg-opacity-0 hover:bg-opacity-10 rounded-full flex justify-center mt-1 h-5 w-5 items-center",
              onClick: e.minimize,
              children: (0, i.jsx)("img", {
                src: "./themes/Yaru/window/window-minimize-symbolic.svg",
                alt: "ubuntu window minimize",
                className: "h-5 w-5 inline",
              }),
            }),
            e.isMaximised
              ? (0, i.jsx)("span", {
                  className:
                    "mx-2 bg-white bg-opacity-0 hover:bg-opacity-10 rounded-full flex justify-center mt-1 h-5 w-5 items-center",
                  onClick: e.maximize,
                  children: (0, i.jsx)("img", {
                    src: "./themes/Yaru/window/window-restore-symbolic.svg",
                    alt: "ubuntu window restore",
                    className: "h-5 w-5 inline",
                  }),
                })
              : (0, i.jsx)("span", {
                  className:
                    "mx-2 bg-white bg-opacity-0 hover:bg-opacity-10 rounded-full flex justify-center mt-1 h-5 w-5 items-center",
                  onClick: e.maximize,
                  children: (0, i.jsx)("img", {
                    src: "./themes/Yaru/window/window-maximize-symbolic.svg",
                    alt: "ubuntu window maximize",
                    className: "h-5 w-5 inline",
                  }),
                }),
            (0, i.jsx)("button", {
              tabIndex: "-1",
              id: "close-".concat(e.id),
              className:
                "mx-1.5 focus:outline-none cursor-default bg-ub-orange bg-opacity-90 hover:bg-opacity-100 rounded-full flex justify-center mt-1 h-5 w-5 items-center",
              onClick: e.close,
              children: (0, i.jsx)("img", {
                src: "./themes/Yaru/window/window-close-symbolic.svg",
                alt: "ubuntu window close",
                className: "h-5 w-5 inline",
              }),
            }),
          ],
        });
      }
      class V extends r.Component {
        componentDidMount() {
          setTimeout(() => {
            this.setState({ setDarkBg: !0 });
          }, 3e3);
        }
        render() {
          return (0, i.jsx)("div", {
            className:
              "w-full flex-grow z-20 max-h-full overflow-y-auto windowMainScreen" +
              (this.state.setDarkBg ? " bg-ub-drk-abrgn " : " bg-ub-cool-grey"),
            children: this.props.addFolder
              ? x(this.props.addFolder, this.props.openApp)
              : this.props.screen(),
          });
        }
        constructor() {
          super(), (this.state = { setDarkBg: !1 });
        }
      }
      class q extends r.Component {
        render() {
          return (0, i.jsxs)("div", {
            className:
              "p-1 m-px z-10 bg-white bg-opacity-0 hover:bg-opacity-20 focus:bg-ub-orange focus:bg-opacity-50 focus:border-yellow-700 focus:border-opacity-100 border border-transparent outline-none rounded select-none w-24 h-20 flex flex-col justify-start items-center text-center text-xs font-normal text-white ",
            id: "app-" + this.props.id,
            onDoubleClick: this.openApp,
            tabIndex: 0,
            children: [
              (0, i.jsx)("img", {
                width: "40px",
                height: "40px",
                className: "mb-1 w-10",
                src: this.props.icon,
                alt: "Ubuntu " + this.props.name,
              }),
              this.props.name,
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (0, a.Z)(this, "openApp", () => {
              this.props.openApp(this.props.id);
            });
        }
      }
      class H extends r.Component {
        componentDidMount() {
          this.setState({ apps: this.props.apps });
        }
        render() {
          return (0, i.jsxs)("div", {
            className:
              "absolute h-full top-7 w-full z-20 pl-12 justify-center md:pl-20 border-black border-opacity-60 bg-black bg-opacity-70",
            children: [
              (0, i.jsx)("div", {
                className: "flex md:pr-20 pt-5 align-center justify-center",
                children: (0, i.jsxs)("div", {
                  className:
                    "flex w-2/3 h-full items-center pl-2 pr-2 bg-white border-black border-width-2 rounded-xl overflow-hidden md:w-1/3 ",
                  children: [
                    (0, i.jsx)("img", {
                      className: "w-5 h-5",
                      alt: "search icon",
                      src: "./images/logos/search.png",
                    }),
                    (0, i.jsx)("input", {
                      className: "w-3/4 p-1 bg-transparent focus:outline-none",
                      placeholder: "Type to Search ",
                      value: this.state.query,
                      onChange: this.handleChange,
                    }),
                  ],
                }),
              }),
              (0, i.jsx)("div", {
                className:
                  "grid md:grid-cols-6 md:grid-rows-3 grid-cols-3 grid-rows-6 md:gap-4 gap-1 md:px-20 px-5 pt-10 justify-center",
                children: this.renderApps(),
              }),
              (0, i.jsxs)("div", {
                className:
                  "flex align-center justify-center w-full fixed bottom-0 mb-15 pr-20  md:pr-20 ",
                children: [
                  (0, i.jsxs)("div", {
                    className:
                      "w-1/4 text-center group text-white bg-transparent cursor-pointer items-center",
                    onClick: this.handleSwitch.bind(this, 1),
                    children: [
                      (0, i.jsx)("h4", { children: "Frequent" }),
                      1 === this.state.category
                        ? (0, i.jsx)("div", {
                            className: "h-1 mt-1 bg-ub-orange self-center",
                          })
                        : (0, i.jsx)("div", {
                            className:
                              "h-1 mt-1 bg-transparent group-hover:bg-white ",
                          }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "w-1/4 text-center group text-white bg-transparent cursor-pointer items-center",
                    onClick: this.handleSwitch.bind(this, 0),
                    children: [
                      (0, i.jsx)("h4", { children: "All" }),
                      0 === this.state.category
                        ? (0, i.jsx)("div", {
                            className: "h-1 mt-1 bg-ub-orange self-center",
                          })
                        : (0, i.jsx)("div", {
                            className:
                              "h-1 mt-1 bg-transparent group-hover:bg-white",
                          }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        constructor() {
          super(),
            (0, a.Z)(this, "handleChange", (e) => {
              this.setState({
                query: e.target.value,
                apps:
                  "" === e.target.value || null === e.target.value
                    ? this.props.apps
                    : this.state.apps.filter((t) =>
                        t.title
                          .toLowerCase()
                          .includes(e.target.value.toLowerCase())
                      ),
              });
            }),
            (0, a.Z)(this, "renderApps", () => {
              let e = [],
                t = JSON.parse(localStorage.getItem("frequentApps"));
              return (
                (0 === this.state.category
                  ? [...this.state.apps]
                  : (() => {
                      let e = [];
                      return (
                        t &&
                          t.forEach((t) => {
                            let s = this.props.apps.find((e) => e.id === t.id);
                            s && e.push(s);
                          }),
                        e
                      );
                    })()
                ).forEach((t, s) => {
                  let a = {
                    name: t.title,
                    id: t.id,
                    icon: t.icon,
                    openApp: this.props.openApp,
                  };
                  e.push((0, i.jsx)(q, { ...a }, s));
                }),
                e
              );
            }),
            (0, a.Z)(this, "handleSwitch", (e) => {
              e !== this.state.category && this.setState({ category: e });
            }),
            (this.state = { query: "", apps: [], category: 0 });
        }
      }
      function J() {
        return (0, i.jsx)("div", {
          className: "flex justify-center w-full",
          children: (0, i.jsx)("div", {
            className: " border-t border-gray-900 py-1 w-2/5",
          }),
        });
      }
      var G = function (e) {
        let [t, s] = (0, r.useState)(!1);
        (0, r.useEffect)(
          () => (
            document.addEventListener("fullscreenchange", o),
            () => {
              document.removeEventListener("fullscreenchange", o);
            }
          ),
          []
        );
        let a = () => {
            e.openApp("terminal");
          },
          n = () => {
            e.openApp("settings");
          },
          o = () => {
            document.fullscreenElement ? s(!0) : s(!1);
          },
          l = () => {
            try {
              document.fullscreenElement
                ? document.exitFullscreen()
                : document.documentElement.requestFullscreen();
            } catch (e) {
              console.log(e);
            }
          };
        return (0, i.jsxs)("div", {
          id: "desktop-menu",
          className:
            (e.active ? " block " : " hidden ") +
            " cursor-default w-52 context-menu-bg border text-left font-light border-gray-900 rounded text-white py-4 absolute z-50 text-sm",
          children: [
            (0, i.jsx)("div", {
              onClick: e.addNewFolder,
              className:
                "w-full py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5",
              children: (0, i.jsx)("span", {
                className: "ml-5",
                children: "New Folder",
              }),
            }),
            (0, i.jsx)(J, {}),
            (0, i.jsx)("div", {
              className:
                "w-full py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5 text-gray-400",
              children: (0, i.jsx)("span", {
                className: "ml-5",
                children: "Paste",
              }),
            }),
            (0, i.jsx)(J, {}),
            (0, i.jsx)("div", {
              className:
                "w-full py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5 text-gray-400",
              children: (0, i.jsx)("span", {
                className: "ml-5",
                children: "Show Desktop in Files",
              }),
            }),
            (0, i.jsx)("div", {
              onClick: a,
              className:
                "w-full py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5",
              children: (0, i.jsx)("span", {
                className: "ml-5",
                children: "Open in Terminal",
              }),
            }),
            (0, i.jsx)(J, {}),
            (0, i.jsx)("div", {
              onClick: n,
              className:
                "w-full py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5",
              children: (0, i.jsx)("span", {
                className: "ml-5",
                children: "Change Background...",
              }),
            }),
            (0, i.jsx)(J, {}),
            (0, i.jsx)("div", {
              className:
                "w-full py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5 text-gray-400",
              children: (0, i.jsx)("span", {
                className: "ml-5",
                children: "Display Settings",
              }),
            }),
            (0, i.jsx)("div", {
              onClick: n,
              className:
                "w-full py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5",
              children: (0, i.jsx)("span", {
                className: "ml-5",
                children: "Settings",
              }),
            }),
            (0, i.jsx)(J, {}),
            (0, i.jsx)("div", {
              onClick: l,
              className:
                "w-full py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5",
              children: (0, i.jsxs)("span", {
                className: "ml-5",
                children: [t ? "Exit" : "Enter", " Full Screen"],
              }),
            }),
          ],
        });
      };
      function X() {
        return (0, i.jsx)("div", {
          className: "flex justify-center w-full",
          children: (0, i.jsx)("div", {
            className: " border-t border-gray-900 py-1 w-2/5",
          }),
        });
      }
      var K = function (e) {
        return (0, i.jsxs)("div", {
          id: "default-menu",
          className:
            (e.active ? " block " : " hidden ") +
            " cursor-default w-52 context-menu-bg border text-left border-gray-900 rounded text-white py-4 absolute z-50 text-sm",
          children: [
            (0, i.jsxs)("a", {
              rel: "noreferrer noopener",
              href: "https://github.com/dawidolko/Simulaing-Ubuntu-System-GUI",
              target: "_blank",
              className:
                "w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5",
              children: [
                (0, i.jsx)("span", {
                  className: "ml-5",
                  children: "\uD83C\uDF1F",
                }),
                " ",
                (0, i.jsx)("span", {
                  className: "ml-2",
                  children: "Star this Project",
                }),
              ],
            }),
            (0, i.jsxs)("a", {
              rel: "noreferrer noopener",
              href: "https://github.com/dawidolko/Simulaing-Ubuntu-System-GUI/issues",
              target: "_blank",
              className:
                "w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5",
              children: [
                (0, i.jsx)("span", { className: "ml-5", children: "❗" }),
                " ",
                (0, i.jsx)("span", {
                  className: "ml-2",
                  children: "Report bugs",
                }),
              ],
            }),
            (0, i.jsx)(X, {}),
            (0, i.jsxs)("a", {
              rel: "noreferrer noopener",
              href: "https://www.linkedin.com/in/dawidolko/",
              target: "_blank",
              className:
                "w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5",
              children: [
                (0, i.jsx)("span", {
                  className: "ml-5",
                  children: "\uD83D\uDE4B‍♂️",
                }),
                " ",
                (0, i.jsxs)("span", {
                  className: "ml-2",
                  children: [
                    "Follow on ",
                    (0, i.jsx)("strong", { children: "Linkedin" }),
                  ],
                }),
              ],
            }),
            (0, i.jsxs)("a", {
              rel: "noreferrer noopener",
              href: "https://github.com/dawidolko",
              target: "_blank",
              className:
                "w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5",
              children: [
                (0, i.jsx)("span", {
                  className: "ml-5",
                  children: "\uD83E\uDD1D",
                }),
                " ",
                (0, i.jsxs)("span", {
                  className: "ml-2",
                  children: [
                    "Follow on ",
                    (0, i.jsx)("strong", { children: "Github" }),
                  ],
                }),
              ],
            }),
            (0, i.jsxs)("a", {
              rel: "noreferrer noopener",
              href: "mailto:poczta@dawidolko.pl",
              target: "_blank",
              className:
                "w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5",
              children: [
                (0, i.jsx)("span", {
                  className: "ml-5",
                  children: "\uD83D\uDCE5",
                }),
                " ",
                (0, i.jsx)("span", {
                  className: "ml-2",
                  children: "Contact Me",
                }),
              ],
            }),
            (0, i.jsx)(X, {}),
            (0, i.jsxs)("div", {
              onClick: () => {
                localStorage.clear(), window.location.reload();
              },
              className:
                "w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5",
              children: [
                (0, i.jsx)("span", {
                  className: "ml-5",
                  children: "\uD83E\uDDF9",
                }),
                " ",
                (0, i.jsx)("span", {
                  className: "ml-2",
                  children: "Reset Ubuntu",
                }),
              ],
            }),
          ],
        });
      };
      class Q extends r.Component {
        componentDidMount() {
          p.ZP.send({
            hitType: "pageview",
            page: "/desktop",
            title: "Custom Title",
          }),
            this.fetchAppsData(),
            this.setContextListeners(),
            this.setEventListeners(),
            this.checkForNewFolders();
        }
        componentWillUnmount() {
          this.removeContextListeners();
        }
        render() {
          return (0, i.jsxs)("div", {
            className:
              " h-full w-full flex flex-col items-end justify-start content-start flex-wrap-reverse pt-8 bg-transparent relative overflow-hidden overscroll-none window-parent",
            children: [
              (0, i.jsx)("div", {
                className: "absolute h-full w-full bg-transparent",
                "data-context": "desktop-area",
                children: this.renderWindows(),
              }),
              (0, i.jsx)(o, { img: this.props.bg_image_name }),
              (0, i.jsx)(d, {
                apps: M,
                hide: this.state.hideSideBar,
                hideSideBar: this.hideSideBar,
                favourite_apps: this.state.favourite_apps,
                showAllApps: this.showAllApps,
                allAppsView: this.state.allAppsView,
                closed_windows: this.state.closed_windows,
                focused_windows: this.state.focused_windows,
                isMinimized: this.state.minimized_windows,
                openAppByAppId: this.openApp,
              }),
              this.renderDesktopApps(),
              (0, i.jsx)(G, {
                active: this.state.context_menus.desktop,
                openApp: this.openApp,
                addNewFolder: this.addNewFolder,
              }),
              (0, i.jsx)(K, { active: this.state.context_menus.default }),
              this.state.showNameBar ? this.renderNameBar() : null,
              this.state.allAppsView
                ? (0, i.jsx)(H, {
                    apps: M,
                    recentApps: this.app_stack,
                    openApp: this.openApp,
                  })
                : null,
            ],
          });
        }
        constructor() {
          super(),
            (0, a.Z)(this, "checkForNewFolders", () => {
              var e = localStorage.getItem("new_folders");
              null === e && void 0 !== e
                ? localStorage.setItem("new_folders", JSON.stringify([]))
                : ((e = JSON.parse(e)).forEach((e) => {
                    M.push({
                      id: "new-folder-".concat(e.id),
                      title: e.name,
                      icon: "./themes/Yaru/system/folder.png",
                      disabled: !0,
                      favourite: !1,
                      desktop_shortcut: !0,
                      screen: () => {},
                    });
                  }),
                  this.updateAppsData());
            }),
            (0, a.Z)(this, "setEventListeners", () => {
              document
                .getElementById("open-settings")
                .addEventListener("click", () => {
                  this.openApp("settings");
                });
            }),
            (0, a.Z)(this, "setContextListeners", () => {
              document.addEventListener("contextmenu", this.checkContextMenu),
                document.addEventListener("click", this.hideAllContextMenu);
            }),
            (0, a.Z)(this, "removeContextListeners", () => {
              document.removeEventListener(
                "contextmenu",
                this.checkContextMenu
              ),
                document.removeEventListener("click", this.hideAllContextMenu);
            }),
            (0, a.Z)(this, "checkContextMenu", (e) => {
              (e.preventDefault(),
              this.hideAllContextMenu(),
              "desktop-area" === e.target.dataset.context)
                ? (p.ZP.event({
                    category: "Context Menu",
                    action: "Opened Desktop Context Menu",
                  }),
                  this.showContextMenu(e, "desktop"))
                : (p.ZP.event({
                    category: "Context Menu",
                    action: "Opened Default Context Menu",
                  }),
                  this.showContextMenu(e, "default"));
            }),
            (0, a.Z)(this, "showContextMenu", (e, t) => {
              let { posx: s, posy: i } = this.getMenuPosition(e),
                a = document.getElementById("".concat(t, "-menu"));
              s + u()(a).width() > window.innerWidth && (s -= u()(a).width()),
                i + u()(a).height() > window.innerHeight &&
                  (i -= u()(a).height()),
                (s = s.toString() + "px"),
                (i = i.toString() + "px"),
                (a.style.left = s),
                (a.style.top = i),
                this.setState({
                  context_menus: { ...this.state.context_menus, [t]: !0 },
                });
            }),
            (0, a.Z)(this, "hideAllContextMenu", () => {
              let e = this.state.context_menus;
              Object.keys(e).forEach((t) => {
                e[t] = !1;
              }),
                this.setState({ context_menus: e });
            }),
            (0, a.Z)(this, "getMenuPosition", (e) => {
              var t = 0,
                s = 0;
              return (
                e || (e = window.event),
                e.pageX || e.pageY
                  ? ((t = e.pageX), (s = e.pageY))
                  : (e.clientX || e.clientY) &&
                    ((t =
                      e.clientX +
                      document.body.scrollLeft +
                      document.documentElement.scrollLeft),
                    (s =
                      e.clientY +
                      document.body.scrollTop +
                      document.documentElement.scrollTop)),
                { posx: t, posy: s }
              );
            }),
            (0, a.Z)(this, "fetchAppsData", () => {
              let e = {},
                t = {},
                s = {},
                i = {},
                a = {},
                r = {},
                n = [];
              M.forEach((o) => {
                (e = { ...e, [o.id]: !1 }),
                  (t = { ...t, [o.id]: !0 }),
                  (s = { ...s, [o.id]: o.disabled }),
                  (i = { ...i, [o.id]: o.favourite }),
                  (a = { ...a, [o.id]: !1 }),
                  (r = { ...r, [o.id]: !1 }),
                  o.desktop_shortcut && n.push(o.id);
              }),
                this.setState({
                  focused_windows: e,
                  closed_windows: t,
                  disabled_apps: s,
                  favourite_apps: i,
                  overlapped_windows: a,
                  minimized_windows: r,
                  desktop_apps: n,
                }),
                (this.initFavourite = { ...i });
            }),
            (0, a.Z)(this, "updateAppsData", () => {
              let e = {},
                t = {},
                s = {},
                i = {},
                a = {},
                r = [];
              M.forEach((n) => {
                (e = {
                  ...e,
                  [n.id]:
                    (void 0 !== this.state.focused_windows[n.id] ||
                      null !== this.state.focused_windows[n.id]) &&
                    this.state.focused_windows[n.id],
                }),
                  (i = {
                    ...i,
                    [n.id]:
                      (void 0 !== this.state.minimized_windows[n.id] ||
                        null !== this.state.minimized_windows[n.id]) &&
                      this.state.minimized_windows[n.id],
                  }),
                  (a = { ...a, [n.id]: n.disabled }),
                  (t = {
                    ...t,
                    [n.id]:
                      (void 0 === this.state.closed_windows[n.id] &&
                        null === this.state.closed_windows[n.id]) ||
                      this.state.closed_windows[n.id],
                  }),
                  (s = { ...s, [n.id]: n.favourite }),
                  n.desktop_shortcut && r.push(n.id);
              }),
                this.setState({
                  focused_windows: e,
                  closed_windows: t,
                  disabled_apps: a,
                  minimized_windows: i,
                  favourite_apps: s,
                  desktop_apps: r,
                }),
                (this.initFavourite = { ...s });
            }),
            (0, a.Z)(this, "renderDesktopApps", () => {
              if (0 === Object.keys(this.state.closed_windows).length) return;
              let e = [];
              return (
                M.forEach((t, s) => {
                  if (this.state.desktop_apps.includes(t.id)) {
                    let a = {
                      name: t.title,
                      id: t.id,
                      icon: t.icon,
                      openApp: this.openApp,
                    };
                    e.push((0, i.jsx)(q, { ...a }, s));
                  }
                }),
                e
              );
            }),
            (0, a.Z)(this, "renderWindows", () => {
              let e = [];
              return (
                M.forEach((t, s) => {
                  if (!1 === this.state.closed_windows[t.id]) {
                    let a = {
                      title: t.title,
                      id: t.id,
                      screen: t.screen,
                      addFolder: this.addToDesktop,
                      closed: this.closeApp,
                      openApp: this.openApp,
                      focus: this.focus,
                      isFocused: this.state.focused_windows[t.id],
                      hideSideBar: this.hideSideBar,
                      hasMinimised: this.hasMinimised,
                      minimized: this.state.minimized_windows[t.id],
                      changeBackgroundImage: this.props.changeBackgroundImage,
                      bg_image_name: this.props.bg_image_name,
                    };
                    e.push((0, i.jsx)(U, { ...a }, s));
                  }
                }),
                e
              );
            }),
            (0, a.Z)(this, "hideSideBar", (e, t) => {
              if (t === this.state.hideSideBar) return;
              if (null === e) {
                if (!1 === t) this.setState({ hideSideBar: !1 });
                else
                  for (let s in this.state.overlapped_windows)
                    if (this.state.overlapped_windows[s]) {
                      this.setState({ hideSideBar: !0 });
                      break;
                    }
                return;
              }
              if (!1 === t) {
                for (let i in this.state.overlapped_windows)
                  if (this.state.overlapped_windows[i] && i !== e) return;
              }
              let a = this.state.overlapped_windows;
              (a[e] = t),
                this.setState({ hideSideBar: t, overlapped_windows: a });
            }),
            (0, a.Z)(this, "hasMinimised", (e) => {
              let t = this.state.minimized_windows;
              var s = this.state.focused_windows;
              (t[e] = !0),
                (s[e] = !1),
                this.setState({ minimized_windows: t, focused_windows: s }),
                this.hideSideBar(null, !1),
                this.giveFocusToLastApp();
            }),
            (0, a.Z)(this, "giveFocusToLastApp", () => {
              if (!this.checkAllMinimised()) {
                for (let e in this.app_stack)
                  if (!this.state.minimized_windows[this.app_stack[e]]) {
                    this.focus(this.app_stack[e]);
                    break;
                  }
              }
            }),
            (0, a.Z)(this, "checkAllMinimised", () => {
              let e = !0;
              for (let t in this.state.minimized_windows)
                this.state.closed_windows[t] ||
                  (e &= this.state.minimized_windows[t]);
              return e;
            }),
            (0, a.Z)(this, "openApp", (e) => {
              if (
                (p.ZP.event({
                  category: "Open App",
                  action: "Opened ".concat(e, " window"),
                }),
                !this.state.disabled_apps[e])
              ) {
                if (this.state.minimized_windows[e]) {
                  this.focus(e);
                  var t = document.querySelector("#" + e);
                  t.style.transform = "translate("
                    .concat(
                      t.style.getPropertyValue("--window-transform-x"),
                      ","
                    )
                    .concat(
                      t.style.getPropertyValue("--window-transform-y"),
                      ") scale(1)"
                    );
                  let s = this.state.minimized_windows;
                  (s[e] = !1), this.setState({ minimized_windows: s });
                  return;
                }
                if (this.app_stack.includes(e)) this.focus(e);
                else {
                  let i = this.state.closed_windows,
                    a = this.state.favourite_apps;
                  var r = localStorage.getItem("frequentApps")
                      ? JSON.parse(localStorage.getItem("frequentApps"))
                      : [],
                    n = r.find((t) => t.id === e);
                  n
                    ? r.forEach((e) => {
                        e.id === n.id && (e.frequency += 1);
                      })
                    : r.push({ id: e, frequency: 1 }),
                    r.sort((e, t) =>
                      e.frequency < t.frequency
                        ? 1
                        : e.frequency > t.frequency
                        ? -1
                        : 0
                    ),
                    localStorage.setItem("frequentApps", JSON.stringify(r)),
                    setTimeout(() => {
                      (a[e] = !0),
                        (i[e] = !1),
                        this.setState(
                          {
                            closed_windows: i,
                            favourite_apps: a,
                            allAppsView: !1,
                          },
                          this.focus(e)
                        ),
                        this.app_stack.push(e);
                    }, 200);
                }
              }
            }),
            (0, a.Z)(this, "closeApp", (e) => {
              this.app_stack.splice(this.app_stack.indexOf(e), 1),
                this.giveFocusToLastApp(),
                this.hideSideBar(null, !1);
              let t = this.state.closed_windows,
                s = this.state.favourite_apps;
              !1 === this.initFavourite[e] && (s[e] = !1),
                (t[e] = !0),
                this.setState({ closed_windows: t, favourite_apps: s });
            }),
            (0, a.Z)(this, "focus", (e) => {
              var t = this.state.focused_windows;
              for (let s in ((t[e] = !0), t))
                t.hasOwnProperty(s) && s !== e && (t[s] = !1);
              this.setState({ focused_windows: t });
            }),
            (0, a.Z)(this, "addNewFolder", () => {
              this.setState({ showNameBar: !0 });
            }),
            (0, a.Z)(this, "addToDesktop", (e) => {
              let t = (e = e.trim()).replace(/\s+/g, "-").toLowerCase();
              M.push({
                id: "new-folder-".concat(t),
                title: e,
                icon: "./themes/Yaru/system/folder.png",
                disabled: !0,
                favourite: !1,
                desktop_shortcut: !0,
                screen: () => {},
              });
              var s = JSON.parse(localStorage.getItem("new_folders"));
              s.push({ id: "new-folder-".concat(t), name: e }),
                localStorage.setItem("new_folders", JSON.stringify(s)),
                this.setState({ showNameBar: !1 }, this.updateAppsData);
            }),
            (0, a.Z)(this, "showAllApps", () => {
              this.setState({ allAppsView: !this.state.allAppsView });
            }),
            (0, a.Z)(this, "renderNameBar", () => {
              let e = () => {
                  let e = document.getElementById("folder-name-input").value;
                  this.addToDesktop(e);
                },
                t = () => {
                  this.setState({ showNameBar: !1 });
                };
              return (0, i.jsxs)("div", {
                className:
                  "absolute rounded-md top-1/2 left-1/2 text-center text-white font-light text-sm bg-ub-cool-grey transform -translate-y-1/2 -translate-x-1/2 sm:w-96 w-3/4 z-50",
                children: [
                  (0, i.jsxs)("div", {
                    className:
                      "w-full flex flex-col justify-around items-start pl-6 pb-8 pt-6",
                    children: [
                      (0, i.jsx)("span", { children: "New folder name" }),
                      (0, i.jsx)("input", {
                        className:
                          "outline-none mt-5 px-1 w-10/12 context-menu-bg border-2 border-yellow-700 rounded py-0.5",
                        id: "folder-name-input",
                        type: "text",
                        autoComplete: "off",
                        spellCheck: "false",
                        autoFocus: !0,
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "flex",
                    children: [
                      (0, i.jsx)("div", {
                        onClick: e,
                        className:
                          "w-1/2 px-4 py-2 border border-gray-900 border-opacity-50 border-r-0 hover:bg-ub-warm-grey hover:bg-opacity-10 hover:border-opacity-50",
                        children: "Create",
                      }),
                      (0, i.jsx)("div", {
                        onClick: t,
                        className:
                          "w-1/2 px-4 py-2 border border-gray-900 border-opacity-50 hover:bg-ub-warm-grey hover:bg-opacity-10 hover:border-opacity-50",
                        children: "Cancel",
                      }),
                    ],
                  }),
                ],
              });
            }),
            (this.app_stack = []),
            (this.initFavourite = {}),
            (this.allWindowClosed = !1),
            (this.state = {
              focused_windows: {},
              closed_windows: {},
              allAppsView: !1,
              overlapped_windows: {},
              disabled_apps: {},
              favourite_apps: {},
              hideSideBar: !1,
              minimized_windows: {},
              desktop_apps: [],
              context_menus: { desktop: !1, default: !1 },
              showNameBar: !1,
            });
        }
      }
      class $ extends r.Component {
        componentDidMount() {
          this.update_time = setInterval(() => {
            this.setState({ current_time: new Date() });
          }, 1e4);
        }
        componentWillUnmount() {
          clearInterval(this.update_time);
        }
        render() {
          let e;
          let { current_time: t } = this.state,
            s = this.day_list[t.getDay()],
            a = t.getHours(),
            r = t.getMinutes(),
            n = this.month_list[t.getMonth()],
            o = t.getDate().toLocaleString(),
            l = a < 12 ? "AM" : "PM";
          return (
            1 === r.toLocaleString().length && (r = "0" + r),
            this.state.hour_12 && a > 12 && (a -= 12),
            (e = this.props.onlyTime
              ? a + ":" + r + " " + l
              : this.props.onlyDay
              ? s + " " + n + " " + o
              : s + " " + n + " " + o + " " + a + ":" + r + " " + l),
            (0, i.jsx)("span", { children: e })
          );
        }
        constructor() {
          super(),
            (this.month_list = [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ]),
            (this.day_list = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]),
            (this.state = { hour_12: !0, current_time: new Date() });
        }
      }
      function ee(e) {
        return (
          e.isLocked &&
            (window.addEventListener("click", e.unLockScreen),
            window.addEventListener("keypress", e.unLockScreen)),
          (0, i.jsxs)("div", {
            id: "ubuntu-lock-screen",
            style: { zIndex: "100" },
            className:
              (e.isLocked
                ? " visible translate-y-0 "
                : " invisible -translate-y-full ") +
              " absolute outline-none bg-black bg-opacity-90 transform duration-500 select-none top-0 right-0 overflow-hidden m-0 p-0 h-screen w-screen",
            children: [
              (0, i.jsx)("div", {
                style: {
                  backgroundImage: "url(".concat(
                    {
                      "wall-1": "./images/wallpapers/wall-1.webp",
                      "wall-2": "./images/wallpapers/wall-2.webp",
                      "wall-3": "./images/wallpapers/wall-3.webp",
                      "wall-4": "./images/wallpapers/wall-4.webp",
                      "wall-5": "./images/wallpapers/wall-5.webp",
                      "wall-6": "./images/wallpapers/wall-6.webp",
                      "wall-7": "./images/wallpapers/wall-7.webp",
                      "wall-8": "./images/wallpapers/wall-8.webp",
                    }[e.bgImgName],
                    ")"
                  ),
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionX: "center",
                },
                className:
                  "absolute top-0 left-0 w-full h-full transform z-20 blur-md ",
              }),
              (0, i.jsxs)("div", {
                className:
                  "w-full h-full z-50 overflow-hidden relative flex flex-col justify-center items-center text-white",
                children: [
                  (0, i.jsx)("div", {
                    className: " text-7xl",
                    children: (0, i.jsx)($, { onlyTime: !0 }),
                  }),
                  (0, i.jsx)("div", {
                    className: "mt-4 text-xl font-medium",
                    children: (0, i.jsx)($, { onlyDay: !0 }),
                  }),
                  (0, i.jsx)("div", {
                    className: " mt-16 text-base",
                    children: "Click or Press a key to unlock",
                  }),
                ],
              }),
            ],
          })
        );
      }
      function et(e) {
        let t = e.angle ? e.angle : "up";
        return (0, i.jsx)("div", { className: " arrow-custom-" + t });
      }
      function es() {
        return (0, i.jsxs)("div", {
          className: "flex justify-center items-center",
          children: [
            (0, i.jsx)("span", {
              className: "mx-1.5",
              children: (0, i.jsx)("img", {
                width: "16px",
                height: "16px",
                src: "./themes/Yaru/status/network-wireless-signal-good-symbolic.svg",
                alt: "ubuntu wifi",
                className: "inline status-symbol w-4 h-4",
              }),
            }),
            (0, i.jsx)("span", {
              className: "mx-1.5",
              children: (0, i.jsx)("img", {
                width: "16px",
                height: "16px",
                src: "./themes/Yaru/status/audio-volume-medium-symbolic.svg",
                alt: "ubuntu sound",
                className: "inline status-symbol w-4 h-4",
              }),
            }),
            (0, i.jsx)("span", {
              className: "mx-1.5",
              children: (0, i.jsx)("img", {
                width: "16px",
                height: "16px",
                src: "./themes/Yaru/status/battery-good-symbolic.svg",
                alt: "ubuntu battry",
                className: "inline status-symbol w-4 h-4",
              }),
            }),
            (0, i.jsx)("span", {
              className: "mx-1",
              children: (0, i.jsx)(et, {
                angle: "down",
                className: " status-symbol",
              }),
            }),
          ],
        });
      }
      var ei = s(8949);
      class ea extends r.Component {
        render() {
          return (0, i.jsx)("input", {
            type: "range",
            onChange: this.props.onChange,
            className: this.props.className,
            name: this.props.name,
            min: "0",
            max: "100",
            value: this.props.value,
            step: "1",
          });
        }
      }
      class er extends r.Component {
        componentDidMount() {
          this.setState(
            {
              sound_level: localStorage.getItem("sound-level") || 75,
              brightness_level: localStorage.getItem("brightness-level") || 100,
            },
            () => {
              document.getElementById("monitor-screen").style.filter =
                "brightness(".concat(
                  (3 / 400) * this.state.brightness_level + 0.25,
                  ")"
                );
            }
          );
        }
        render() {
          return (0, i.jsxs)("div", {
            ref: this.wrapperRef,
            className:
              "absolute bg-ub-cool-grey rounded-md py-4 top-9 right-3 shadow border-black border border-opacity-20 status-card" +
              (this.props.visible ? " visible animateShow" : " invisible"),
            children: [
              " ",
              (0, i.jsx)("div", {
                className: "absolute w-0 h-0 -top-1 right-6 top-arrow-up",
              }),
              (0, i.jsxs)("div", {
                className:
                  "w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20",
                children: [
                  (0, i.jsx)("div", {
                    className: "w-8",
                    children: (0, i.jsx)("img", {
                      width: "16px",
                      height: "16px",
                      src: "./themes/Yaru/status/audio-headphones-symbolic.svg",
                      alt: "ubuntu headphone",
                    }),
                  }),
                  (0, i.jsx)(ea, {
                    onChange: this.handleSound,
                    className: "ubuntu-slider w-2/3",
                    value: this.state.sound_level,
                    name: "headphone_range",
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className:
                  "w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20",
                children: [
                  (0, i.jsx)("div", {
                    className: "w-8",
                    children: (0, i.jsx)("img", {
                      width: "16px",
                      height: "16px",
                      src: "./themes/Yaru/status/display-brightness-symbolic.svg",
                      alt: "ubuntu brightness",
                    }),
                  }),
                  (0, i.jsx)(ea, {
                    onChange: this.handleBrightness,
                    className: "ubuntu-slider w-2/3",
                    name: "brightness_range",
                    value: this.state.brightness_level,
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "w-64 flex content-center justify-center",
                children: (0, i.jsx)("div", {
                  className:
                    "w-2/4 border-black border-opacity-50 border-b my-2 border-solid",
                }),
              }),
              (0, i.jsxs)("div", {
                className:
                  "w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20",
                children: [
                  (0, i.jsx)("div", {
                    className: "w-8",
                    children: (0, i.jsx)("img", {
                      width: "16px",
                      height: "16px",
                      src: "./themes/Yaru/status/network-wireless-signal-good-symbolic.svg",
                      alt: "ubuntu wifi",
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "w-2/3 flex items-center justify-between text-gray-400",
                    children: [
                      (0, i.jsx)("span", { children: "OnePlus 8 Pro" }),
                      (0, i.jsx)(et, { angle: "right" }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className:
                  "w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20",
                children: [
                  (0, i.jsx)("div", {
                    className: "w-8",
                    children: (0, i.jsx)("img", {
                      width: "16px",
                      height: "16px",
                      src: "./themes/Yaru/status/bluetooth-symbolic.svg",
                      alt: "ubuntu bluetooth",
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "w-2/3 flex items-center justify-between text-gray-400",
                    children: [
                      (0, i.jsx)("span", { children: "Off" }),
                      (0, i.jsx)(et, { angle: "right" }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className:
                  "w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20",
                children: [
                  (0, i.jsx)("div", {
                    className: "w-8",
                    children: (0, i.jsx)("img", {
                      width: "16px",
                      height: "16px",
                      src: "./themes/Yaru/status/battery-good-symbolic.svg",
                      alt: "ubuntu battery",
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "w-2/3 flex items-center justify-between text-gray-400",
                    children: [
                      (0, i.jsx)("span", { children: "2:40 Remaining (75%)" }),
                      (0, i.jsx)(et, { angle: "right" }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "w-64 flex content-center justify-center",
                children: (0, i.jsx)("div", {
                  className:
                    "w-2/4 border-black border-opacity-50 border-b my-2 border-solid",
                }),
              }),
              (0, i.jsxs)("div", {
                id: "open-settings",
                className:
                  "w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20",
                children: [
                  (0, i.jsx)("div", {
                    className: "w-8",
                    children: (0, i.jsx)("img", {
                      width: "16px",
                      height: "16px",
                      src: "./themes/Yaru/status/emblem-system-symbolic.svg",
                      alt: "ubuntu settings",
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "w-2/3 flex items-center justify-between",
                    children: (0, i.jsx)("span", { children: "Settings" }),
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                onClick: this.props.lockScreen,
                className:
                  "w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20",
                children: [
                  (0, i.jsx)("div", {
                    className: "w-8",
                    children: (0, i.jsx)("img", {
                      width: "16px",
                      height: "16px",
                      src: "./themes/Yaru/status/changes-prevent-symbolic.svg",
                      alt: "ubuntu lock",
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "w-2/3 flex items-center justify-between",
                    children: (0, i.jsx)("span", { children: "Lock" }),
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                onClick: this.props.shutDown,
                className:
                  "w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20",
                children: [
                  (0, i.jsx)("div", {
                    className: "w-8",
                    children: (0, i.jsx)("img", {
                      width: "16px",
                      height: "16px",
                      src: "./themes/Yaru/status/system-shutdown-symbolic.svg",
                      alt: "ubuntu power",
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className: "w-2/3 flex items-center justify-between",
                    children: [
                      (0, i.jsx)("span", { children: "Power Off / Log Out" }),
                      (0, i.jsx)(et, { angle: "right" }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        constructor() {
          super(),
            (0, a.Z)(this, "handleClickOutside", () => {
              this.props.toggleVisible();
            }),
            (0, a.Z)(this, "handleBrightness", (e) => {
              this.setState({ brightness_level: e.target.value }),
                localStorage.setItem("brightness-level", e.target.value),
                (document.getElementById("monitor-screen").style.filter =
                  "brightness(".concat((3 / 400) * e.target.value + 0.25, ")"));
            }),
            (0, a.Z)(this, "handleSound", (e) => {
              this.setState({ sound_level: e.target.value }),
                localStorage.setItem("sound-level", e.target.value);
            }),
            (this.wrapperRef = r.createRef()),
            (this.state = { sound_level: 75, brightness_level: 100 });
        }
      }
      var en = (0, ei.Z)(er);
      class eo extends r.Component {
        render() {
          return (0, i.jsxs)("div", {
            className:
              "main-navbar-vp absolute top-0 right-0 w-screen shadow-md flex flex-nowrap justify-between items-center bg-ub-grey text-ubt-grey text-sm select-none z-50",
            children: [
              (0, i.jsx)("div", {
                tabIndex: "0",
                className:
                  "pl-3 pr-3 outline-none transition duration-100 ease-in-out border-b-2 border-transparent focus:border-ubb-orange py-1 ",
                children: "Activities",
              }),
              (0, i.jsx)("div", {
                tabIndex: "0",
                className:
                  "pl-2 pr-2 text-xs md:text-sm outline-none transition duration-100 ease-in-out border-b-2 border-transparent focus:border-ubb-orange py-1",
                children: (0, i.jsx)($, {}),
              }),
              (0, i.jsxs)("div", {
                id: "status-bar",
                tabIndex: "0",
                onFocus: () => {
                  this.setState({ status_card: !0 });
                },
                className:
                  "relative pr-3 pl-3 outline-none transition duration-100 ease-in-out border-b-2 border-transparent focus:border-ubb-orange py-1 ",
                children: [
                  (0, i.jsx)(es, {}),
                  (0, i.jsx)(en, {
                    shutDown: this.props.shutDown,
                    lockScreen: this.props.lockScreen,
                    visible: this.state.status_card,
                    toggleVisible: () => {
                      this.setState({ status_card: !1 });
                    },
                  }),
                ],
              }),
            ],
          });
        }
        constructor() {
          super(), (this.state = { status_card: !1 });
        }
      }
      class el extends r.Component {
        componentDidMount() {
          this.getLocalData();
        }
        render() {
          return (0, i.jsxs)("div", {
            className: "w-screen h-screen overflow-hidden",
            id: "monitor-screen",
            children: [
              (0, i.jsx)(ee, {
                isLocked: this.state.screen_locked,
                bgImgName: this.state.bg_image_name,
                unLockScreen: this.unLockScreen,
              }),
              (0, i.jsx)(n, {
                visible: this.state.booting_screen,
                isShutDown: this.state.shutDownScreen,
                turnOn: this.turnOn,
              }),
              (0, i.jsx)(eo, {
                lockScreen: this.lockScreen,
                shutDown: this.shutDown,
              }),
              (0, i.jsx)(Q, {
                bg_image_name: this.state.bg_image_name,
                changeBackgroundImage: this.changeBackgroundImage,
              }),
            ],
          });
        }
        constructor() {
          super(),
            (0, a.Z)(this, "setTimeOutBootScreen", () => {
              setTimeout(() => {
                this.setState({ booting_screen: !1 });
              }, 2e3);
            }),
            (0, a.Z)(this, "getLocalData", () => {
              let e = localStorage.getItem("bg-image");
              null != e && this.setState({ bg_image_name: e }),
                null != localStorage.getItem("booting_screen")
                  ? this.setState({ booting_screen: !1 })
                  : (localStorage.setItem("booting_screen", !1),
                    this.setTimeOutBootScreen());
              let t = localStorage.getItem("shut-down");
              if (null != t && "true" === t) this.shutDown();
              else {
                let s = localStorage.getItem("screen-locked");
                null != s && this.setState({ screen_locked: "true" === s });
              }
            }),
            (0, a.Z)(this, "lockScreen", () => {
              p.ZP.send({
                hitType: "pageview",
                page: "/lock-screen",
                title: "Lock Screen",
              }),
                p.ZP.event({
                  category: "Screen Change",
                  action: "Set Screen to Locked",
                }),
                document.getElementById("status-bar").blur(),
                setTimeout(() => {
                  this.setState({ screen_locked: !0 });
                }, 100),
                localStorage.setItem("screen-locked", !0);
            }),
            (0, a.Z)(this, "unLockScreen", () => {
              p.ZP.send({
                hitType: "pageview",
                page: "/desktop",
                title: "Custom Title",
              }),
                window.removeEventListener("click", this.unLockScreen),
                window.removeEventListener("keypress", this.unLockScreen),
                this.setState({ screen_locked: !1 }),
                localStorage.setItem("screen-locked", !1);
            }),
            (0, a.Z)(this, "changeBackgroundImage", (e) => {
              this.setState({ bg_image_name: e }),
                localStorage.setItem("bg-image", e);
            }),
            (0, a.Z)(this, "shutDown", () => {
              p.ZP.send({
                hitType: "pageview",
                page: "/switch-off",
                title: "Custom Title",
              }),
                p.ZP.event({
                  category: "Screen Change",
                  action: "Switched off the Ubuntu",
                }),
                document.getElementById("status-bar").blur(),
                this.setState({ shutDownScreen: !0 }),
                localStorage.setItem("shut-down", !0);
            }),
            (0, a.Z)(this, "turnOn", () => {
              p.ZP.send({
                hitType: "pageview",
                page: "/desktop",
                title: "Custom Title",
              }),
                this.setState({ shutDownScreen: !1, booting_screen: !0 }),
                this.setTimeOutBootScreen(),
                localStorage.setItem("shut-down", !1);
            }),
            (this.state = {
              screen_locked: !1,
              bg_image_name: "wall-2",
              booting_screen: !0,
              shutDownScreen: !1,
            });
        }
      }
      var ec = s(9008),
        ed = s.n(ec);
      function em() {
        return (0, i.jsxs)(ed(), {
          children: [
            "/* Primary Meta Tags */",
            (0, i.jsx)("title", {
              children: "Dawid Olko Portfolio - Computer Engineering Student",
            }),
            (0, i.jsx)("meta", { charSet: "utf-8" }),
            (0, i.jsx)("meta", {
              name: "title",
              content: "Dawid Olko Portfolio - Computer Engineering Student",
            }),
            (0, i.jsx)("meta", {
              name: "description",
              content:
                "Dawid Olko's (dawidolko) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS.",
            }),
            (0, i.jsx)("meta", {
              name: "author",
              content: "Dawid Olko (dawidolko)",
            }),
            (0, i.jsx)("meta", {
              name: "keywords",
              content:
                "dawidolko, dawidolko's portfolio, dawidolko linux, ubuntu portfolio, Dawid Olko protfolio,Dawid Olko computer, Dawid Olko, Dawid Olko ubuntu, Dawid Olko ubuntu portfolio",
            }),
            (0, i.jsx)("meta", { name: "robots", content: "index, follow" }),
            (0, i.jsx)("meta", {
              httpEquiv: "Content-Type",
              content: "text/html; charset=utf-8",
            }),
            (0, i.jsx)("meta", { name: "language", content: "English" }),
            (0, i.jsx)("meta", {
              name: "viewport",
              content: "width=device-width, initial-scale=1",
            }),
            (0, i.jsx)("meta", { name: "theme-color", content: "#E95420" }),
            "/* Search Engine */",
            (0, i.jsx)("meta", {
              name: "image",
              content: "images/logos/fevicon.png",
            }),
            "/* Schema.org for Google */",
            (0, i.jsx)("meta", {
              itemProp: "name",
              content: "Dawid Olko Portfolio - Computer Engineering Student",
            }),
            (0, i.jsx)("meta", {
              itemProp: "description",
              content:
                "Dawid Olko's (dawidolko) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS.",
            }),
            (0, i.jsx)("meta", {
              itemProp: "image",
              content: "images/logos/fevicon.png",
            }),
            "/* Twitter */",
            (0, i.jsx)("meta", { name: "twitter:card", content: "summary" }),
            (0, i.jsx)("meta", {
              name: "twitter:title",
              content: "Dawid Olko Portfolio - Computer Engineering Student",
            }),
            (0, i.jsx)("meta", {
              name: "twitter:description",
              content:
                "Dawid Olko's (dawidolko) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS.",
            }),
            (0, i.jsx)("meta", {
              name: "twitter:site",
              content: "dawidolko",
            }),
            (0, i.jsx)("meta", {
              name: "twitter:creator",
              content: "dawidolko",
            }),
            (0, i.jsx)("meta", {
              name: "twitter:image:src",
              content: "images/logos/logo_1024.png",
            }),
            "/* Open Graph general (Facebook, Pinterest & Google+) */",
            (0, i.jsx)("meta", {
              name: "og:title",
              content: "Dawid Olko Portfolio - Computer Engineering Student",
            }),
            (0, i.jsx)("meta", {
              name: "og:description",
              content:
                "Dawid Olko's (dawidolko) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS.",
            }),
            (0, i.jsx)("meta", {
              name: "og:image",
              content: "images/logos/logo_1200.png",
            }),
            (0, i.jsx)("meta", {
              name: "og:url",
              content: "http://ubuntu.dawidolko.pl/",
            }),
            (0, i.jsx)("meta", {
              name: "og:site_name",
              content: "Dawid Olko Personal Portfolio",
            }),
            (0, i.jsx)("meta", { name: "og:locale", content: "en_IN" }),
            (0, i.jsx)("meta", { name: "og:type", content: "website" }),
            (0, i.jsx)("link", {
              rel: "icon",
              href: "images/logos/fevicon.svg",
            }),
            (0, i.jsx)("link", {
              rel: "apple-touch-icon",
              href: "images/logos/logo.png",
            }),
            (0, i.jsx)("link", {
              rel: "preload",
              href: "https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap",
              as: "style",
            }),
            (0, i.jsx)("link", {
              href: "https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap",
              rel: "stylesheet",
            }),
          ],
        });
      }
      p.ZP.initialize("G-8FBXBFXC10");
      var eh = function () {
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(em, {}), (0, i.jsx)(el, {})],
        });
      };
    },
  },
  function (e) {
    e.O(0, [571, 269, 774, 888, 179], function () {
      return e((e.s = 5557));
    }),
      (_N_E = e.O());
  },
]);
