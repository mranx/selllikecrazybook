function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function _createClass(e, t, i) {
    return t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), e
}

function pad(e, t) {
    return (e = e.toString()).length < t ? pad("0" + e, t) : e
}

function appendChildren(e, t) {
    t.forEach(function(t) {
        e.appendChild(t)
    })
}! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).MicroModal = t()
}(void 0, function() {
    function e(e) {
        return function(e) {
            if (Array.isArray(e)) return t(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || function(e, i) {
            if (e) {
                if ("string" == typeof e) return t(e, i);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? t(e, i) : void 0
            }
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function t(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n
    }
    var i, n, o, a, s, r = (i = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'], n = function() {
        function t(i) {
            var n = i.targetModal,
                o = i.triggers,
                a = void 0 === o ? [] : o,
                s = i.onShow,
                r = void 0 === s ? function() {} : s,
                l = i.onClose,
                c = void 0 === l ? function() {} : l,
                d = i.openTrigger,
                u = void 0 === d ? "data-micromodal-trigger" : d,
                h = i.closeTrigger,
                m = void 0 === h ? "data-micromodal-close" : h,
                f = i.openClass,
                p = void 0 === f ? "is-open" : f,
                v = i.disableScroll,
                y = void 0 !== v && v,
                g = i.disableFocus,
                b = void 0 !== g && g,
                _ = i.awaitCloseAnimation,
                w = void 0 !== _ && _,
                k = i.awaitOpenAnimation,
                C = void 0 !== k && k,
                S = i.debugMode,
                E = void 0 !== S && S;
            ! function(e, i) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this), this.modal = document.getElementById(n), this.config = {
                debugMode: E,
                disableScroll: y,
                openTrigger: u,
                closeTrigger: m,
                openClass: p,
                onShow: r,
                onClose: c,
                awaitCloseAnimation: w,
                awaitOpenAnimation: C,
                disableFocus: b
            }, a.length > 0 && this.registerTriggers.apply(this, e(a)), this.onClick = this.onClick.bind(this), this.onKeydown = this.onKeydown.bind(this)
        }
        var n;
        return (n = [{
            key: "registerTriggers",
            value: function() {
                for (var e = this, t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                i.filter(Boolean).forEach(function(t) {
                    t.addEventListener("click", function(t) {
                        return e.showModal(t)
                    })
                })
            }
        }, {
            key: "showModal",
            value: function() {
                if (!this.modal || null == this.modal) return !0;
                var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (this.activeElement = document.activeElement, this.modal.setAttribute("aria-hidden", "false"), this.modal.classList.add(this.config.openClass), this.scrollBehaviour("disable"), this.addEventListeners(), this.config.awaitOpenAnimation) {
                    this.modal.addEventListener("animationend", function t() {
                        e.modal.removeEventListener("animationend", t, !1), e.setFocusToFirstNode()
                    }, !1)
                } else this.setFocusToFirstNode();
                this.config.onShow(this.modal, this.activeElement, t)
            }
        }, {
            key: "closeModal",
            value: function() {
                if (!this.modal || null == this.modal) return !0;
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = this.modal;
                if (this.modal && this.modal.setAttribute("aria-hidden", "true"), this.removeEventListeners(), this.scrollBehaviour("enable"), this.activeElement && this.activeElement.focus && this.activeElement.focus(), this.config.onClose(this.modal, this.activeElement, e), this.config.awaitCloseAnimation) {
                    var i = this.config.openClass;
                    this.modal.addEventListener("animationend", function e() {
                        t.classList.remove(i), t.removeEventListener("animationend", e, !1)
                    }, !1)
                } else t.classList.remove(this.config.openClass)
            }
        }, {
            key: "closeModalById",
            value: function(e) {
                this.modal = document.getElementById(e), this.modal && this.closeModal()
            }
        }, {
            key: "scrollBehaviour",
            value: function(e) {
                if (this.config.disableScroll) {
                    var t = document.querySelector("body");
                    switch (e) {
                        case "enable":
                            Object.assign(t.style, {
                                overflow: ""
                            });
                            break;
                        case "disable":
                            Object.assign(t.style, {
                                overflow: "hidden"
                            })
                    }
                }
            }
        }, {
            key: "addEventListeners",
            value: function() {
                if (!this.modal || null == this.modal) return !0;
                this.modal.addEventListener("touchstart", this.onClick), this.modal.addEventListener("click", this.onClick), document.addEventListener("keydown", this.onKeydown)
            }
        }, {
            key: "removeEventListeners",
            value: function() {
                if (!this.modal || null == this.modal) return !0;
                this.modal.removeEventListener("touchstart", this.onClick), this.modal.removeEventListener("click", this.onClick), document.removeEventListener("keydown", this.onKeydown)
            }
        }, {
            key: "onClick",
            value: function(e) {
                e.target.hasAttribute(this.config.closeTrigger) && this.closeModal(e)
            }
        }, {
            key: "onKeydown",
            value: function(e) {
                27 === e.keyCode && this.closeModal(e), 9 === e.keyCode && this.retainFocus(e)
            }
        }, {
            key: "getFocusableNodes",
            value: function() {
                var t = this.modal.querySelectorAll(i);
                return Array.apply(void 0, e(t))
            }
        }, {
            key: "setFocusToFirstNode",
            value: function() {
                var e = this;
                if (!this.config.disableFocus) {
                    var t = this.getFocusableNodes();
                    if (0 !== t.length) {
                        var i = t.filter(function(t) {
                            return !t.hasAttribute(e.config.closeTrigger)
                        });
                        i.length > 0 && i[0].focus(), 0 === i.length && t[0].focus()
                    }
                }
            }
        }, {
            key: "retainFocus",
            value: function(e) {
                var t = this.getFocusableNodes();
                if (0 !== t.length)
                    if (t = t.filter(function(e) {
                            return null !== e.offsetParent
                        }), this.modal.contains(document.activeElement)) {
                        var i = t.indexOf(document.activeElement);
                        e.shiftKey && 0 === i && (t[t.length - 1].focus(), e.preventDefault()), !e.shiftKey && t.length > 0 && i === t.length - 1 && (t[0].focus(), e.preventDefault())
                    } else t[0].focus()
            }
        }]) && function(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }(t.prototype, n), t
    }(), o = null, a = function(e) {
        if (!document.getElementById(e)) return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(e, "'"), "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "ID somewhere in your code. Refer example below to resolve it."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<div class="modal" id="'.concat(e, '"></div>')), !1
    }, s = function(e, t) {
        if (function(e) {
                e.length <= 0 && (console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "data attribute."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<a href="#" data-micromodal-trigger="my-modal"></a>'))
            }(e), !t) return !0;
        for (var i in t) a(i);
        return !0
    }, {
        init: function(t) {
            var i = Object.assign({}, {
                    openTrigger: "data-micromodal-trigger"
                }, t),
                a = e(document.querySelectorAll("[".concat(i.openTrigger, "]"))),
                r = function(e, t) {
                    var i = [];
                    return e.forEach(function(e) {
                        var n = e.attributes[t].value;
                        void 0 === i[n] && (i[n] = []), i[n].push(e)
                    }), i
                }(a, i.openTrigger);
            if (!0 !== i.debugMode || !1 !== s(a, r))
                for (var l in r) {
                    var c = r[l];
                    i.targetModal = l, i.triggers = e(c), o = new n(i)
                }
        },
        show: function(e, t) {
            var i = t || {};
            i.targetModal = e, !0 === i.debugMode && !1 === a(e) || (o && o.removeEventListeners(), (o = new n(i)).showModal())
        },
        close: function(e) {
            e ? o.closeModalById(e) : o.closeModal()
        }
    });
    return window.MicroModal = r, r
}),
function(e) {
    "object" == typeof module && module.exports ? module.exports = e() : window.intlTelInput = e()
}(function(e) {
    return function() {
        function t(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? Object(arguments[t]) : {},
                    o = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && o.push.apply(o, Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                })), o.forEach(function(t) {
                    i(e, t, n[t])
                })
            }
            return e
        }

        function i(e, t, i) {
            return (t = o(t)) in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e
        }

        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, o(n.key), n)
            }
        }

        function o(e) {
            var t = a(e, "string");
            return "symbol" == typeof t ? t : String(t)
        }

        function a(t, i) {
            if ("object" != typeof t || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (n !== e) {
                var o = n.call(t, i || "default");
                if ("object" != typeof o) return o;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === i ? String : Number)(t)
        }
        for (var s = [
                ["Afghanistan (‫افغانستان‬‎)", "af", "93"],
                ["Albania (Shqipëri)", "al", "355"],
                ["Algeria (‫الجزائر‬‎)", "dz", "213"],
                ["American Samoa", "as", "1", 5, ["684"]],
                ["Andorra", "ad", "376"],
                ["Angola", "ao", "244"],
                ["Anguilla", "ai", "1", 6, ["264"]],
                ["Antigua and Barbuda", "ag", "1", 7, ["268"]],
                ["Argentina", "ar", "54"],
                ["Armenia (Հայաստան)", "am", "374"],
                ["Aruba", "aw", "297"],
                ["Ascension Island", "ac", "247"],
                ["Australia", "au", "61", 0],
                ["Austria (Österreich)", "at", "43"],
                ["Azerbaijan (Azərbaycan)", "az", "994"],
                ["Bahamas", "bs", "1", 8, ["242"]],
                ["Bahrain (‫البحرين‬‎)", "bh", "973"],
                ["Bangladesh (বাংলাদেশ)", "bd", "880"],
                ["Barbados", "bb", "1", 9, ["246"]],
                ["Belarus (Беларусь)", "by", "375"],
                ["Belgium (België)", "be", "32"],
                ["Belize", "bz", "501"],
                ["Benin (Bénin)", "bj", "229"],
                ["Bermuda", "bm", "1", 10, ["441"]],
                ["Bhutan (འབྲུག)", "bt", "975"],
                ["Bolivia", "bo", "591"],
                ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"],
                ["Botswana", "bw", "267"],
                ["Brazil (Brasil)", "br", "55"],
                ["British Indian Ocean Territory", "io", "246"],
                ["British Virgin Islands", "vg", "1", 11, ["284"]],
                ["Brunei", "bn", "673"],
                ["Bulgaria (България)", "bg", "359"],
                ["Burkina Faso", "bf", "226"],
                ["Burundi (Uburundi)", "bi", "257"],
                ["Cambodia (កម្ពុជា)", "kh", "855"],
                ["Cameroon (Cameroun)", "cm", "237"],
                ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "263", "289", "306", "343", "354", "365", "367", "368", "382", "387", "403", "416", "418", "428", "431", "437", "438", "450", "584", "468", "474", "506", "514", "519", "548", "579", "581", "584", "587", "604", "613", "639", "647", "672", "683", "705", "709", "742", "753", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]],
                ["Cape Verde (Kabu Verdi)", "cv", "238"],
                ["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]],
                ["Cayman Islands", "ky", "1", 12, ["345"]],
                ["Central African Republic (République centrafricaine)", "cf", "236"],
                ["Chad (Tchad)", "td", "235"],
                ["Chile", "cl", "56"],
                ["China (中国)", "cn", "86"],
                ["Christmas Island", "cx", "61", 2, ["89164"]],
                ["Cocos (Keeling) Islands", "cc", "61", 1, ["89162"]],
                ["Colombia", "co", "57"],
                ["Comoros (‫جزر القمر‬‎)", "km", "269"],
                ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"],
                ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
                ["Cook Islands", "ck", "682"],
                ["Costa Rica", "cr", "506"],
                ["Côte d’Ivoire", "ci", "225"],
                ["Croatia (Hrvatska)", "hr", "385"],
                ["Cuba", "cu", "53"],
                ["Curaçao", "cw", "599", 0],
                ["Cyprus (Κύπρος)", "cy", "357"],
                ["Czech Republic (Česká republika)", "cz", "420"],
                ["Denmark (Danmark)", "dk", "45"],
                ["Djibouti", "dj", "253"],
                ["Dominica", "dm", "1", 13, ["767"]],
                ["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]],
                ["Ecuador", "ec", "593"],
                ["Egypt (‫مصر‬‎)", "eg", "20"],
                ["El Salvador", "sv", "503"],
                ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
                ["Eritrea", "er", "291"],
                ["Estonia (Eesti)", "ee", "372"],
                ["Eswatini", "sz", "268"],
                ["Ethiopia", "et", "251"],
                ["Falkland Islands (Islas Malvinas)", "fk", "500"],
                ["Faroe Islands (Føroyar)", "fo", "298"],
                ["Fiji", "fj", "679"],
                ["Finland (Suomi)", "fi", "358", 0],
                ["France", "fr", "33"],
                ["French Guiana (Guyane française)", "gf", "594"],
                ["French Polynesia (Polynésie française)", "pf", "689"],
                ["Gabon", "ga", "241"],
                ["Gambia", "gm", "220"],
                ["Georgia (საქართველო)", "ge", "995"],
                ["Germany (Deutschland)", "de", "49"],
                ["Ghana (Gaana)", "gh", "233"],
                ["Gibraltar", "gi", "350"],
                ["Greece (Ελλάδα)", "gr", "30"],
                ["Greenland (Kalaallit Nunaat)", "gl", "299"],
                ["Grenada", "gd", "1", 14, ["473"]],
                ["Guadeloupe", "gp", "590", 0],
                ["Guam", "gu", "1", 15, ["671"]],
                ["Guatemala", "gt", "502"],
                ["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]],
                ["Guinea (Guinée)", "gn", "224"],
                ["Guinea-Bissau (Guiné Bissau)", "gw", "245"],
                ["Guyana", "gy", "592"],
                ["Haiti", "ht", "509"],
                ["Honduras", "hn", "504"],
                ["Hong Kong (香港)", "hk", "852"],
                ["Hungary (Magyarország)", "hu", "36"],
                ["Iceland (Ísland)", "is", "354"],
                ["India (भारत)", "in", "91"],
                ["Indonesia", "id", "62"],
                ["Iran (‫ایران‬‎)", "ir", "98"],
                ["Iraq (‫العراق‬‎)", "iq", "964"],
                ["Ireland", "ie", "353"],
                ["Isle of Man", "im", "44", 2, ["1624", "74576", "7524", "7924", "7624"]],
                ["Israel (‫ישראל‬‎)", "il", "972"],
                ["Italy (Italia)", "it", "39", 0],
                ["Jamaica", "jm", "1", 4, ["876", "658"]],
                ["Japan (日本)", "jp", "81"],
                ["Jersey", "je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"]],
                ["Jordan (‫الأردن‬‎)", "jo", "962"],
                ["Kazakhstan (Казахстан)", "kz", "7", 1, ["33", "7"]],
                ["Kenya", "ke", "254"],
                ["Kiribati", "ki", "686"],
                ["Kosovo", "xk", "383"],
                ["Kuwait (‫الكويت‬‎)", "kw", "965"],
                ["Kyrgyzstan (Кыргызстан)", "kg", "996"],
                ["Laos (ລາວ)", "la", "856"],
                ["Latvia (Latvija)", "lv", "371"],
                ["Lebanon (‫لبنان‬‎)", "lb", "961"],
                ["Lesotho", "ls", "266"],
                ["Liberia", "lr", "231"],
                ["Libya (‫ليبيا‬‎)", "ly", "218"],
                ["Liechtenstein", "li", "423"],
                ["Lithuania (Lietuva)", "lt", "370"],
                ["Luxembourg", "lu", "352"],
                ["Macau (澳門)", "mo", "853"],
                ["Madagascar (Madagasikara)", "mg", "261"],
                ["Malawi", "mw", "265"],
                ["Malaysia", "my", "60"],
                ["Maldives", "mv", "960"],
                ["Mali", "ml", "223"],
                ["Malta", "mt", "356"],
                ["Marshall Islands", "mh", "692"],
                ["Martinique", "mq", "596"],
                ["Mauritania (‫موريتانيا‬‎)", "mr", "222"],
                ["Mauritius (Moris)", "mu", "230"],
                ["Mayotte", "yt", "262", 1, ["269", "639"]],
                ["Mexico (México)", "mx", "52"],
                ["Micronesia", "fm", "691"],
                ["Moldova (Republica Moldova)", "md", "373"],
                ["Monaco", "mc", "377"],
                ["Mongolia (Монгол)", "mn", "976"],
                ["Montenegro (Crna Gora)", "me", "382"],
                ["Montserrat", "ms", "1", 16, ["664"]],
                ["Morocco (‫المغرب‬‎)", "ma", "212", 0],
                ["Mozambique (Moçambique)", "mz", "258"],
                ["Myanmar (Burma) (မြန်မာ)", "mm", "95"],
                ["Namibia (Namibië)", "na", "264"],
                ["Nauru", "nr", "674"],
                ["Nepal (नेपाल)", "np", "977"],
                ["Netherlands (Nederland)", "nl", "31"],
                ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"],
                ["New Zealand", "nz", "64"],
                ["Nicaragua", "ni", "505"],
                ["Niger (Nijar)", "ne", "227"],
                ["Nigeria", "ng", "234"],
                ["Niue", "nu", "683"],
                ["Norfolk Island", "nf", "672"],
                ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"],
                ["North Macedonia (Северна Македонија)", "mk", "389"],
                ["Northern Mariana Islands", "mp", "1", 17, ["670"]],
                ["Norway (Norge)", "no", "47", 0],
                ["Oman (‫عُمان‬‎)", "om", "968"],
                ["Pakistan (‫پاکستان‬‎)", "pk", "92"],
                ["Palau", "pw", "680"],
                ["Palestine (‫فلسطين‬‎)", "ps", "970"],
                ["Panama (Panamá)", "pa", "507"],
                ["Papua New Guinea", "pg", "675"],
                ["Paraguay", "py", "595"],
                ["Peru (Perú)", "pe", "51"],
                ["Philippines", "ph", "63"],
                ["Poland (Polska)", "pl", "48"],
                ["Portugal", "pt", "351"],
                ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
                ["Qatar (‫قطر‬‎)", "qa", "974"],
                ["Réunion (La Réunion)", "re", "262", 0],
                ["Romania (România)", "ro", "40"],
                ["Russia (Россия)", "ru", "7", 0],
                ["Rwanda", "rw", "250"],
                ["Saint Barthélemy", "bl", "590", 1],
                ["Saint Helena", "sh", "290"],
                ["Saint Kitts and Nevis", "kn", "1", 18, ["869"]],
                ["Saint Lucia", "lc", "1", 19, ["758"]],
                ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2],
                ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"],
                ["Saint Vincent and the Grenadines", "vc", "1", 20, ["784"]],
                ["Samoa", "ws", "685"],
                ["San Marino", "sm", "378"],
                ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"],
                ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"],
                ["Senegal (Sénégal)", "sn", "221"],
                ["Serbia (Србија)", "rs", "381"],
                ["Seychelles", "sc", "248"],
                ["Sierra Leone", "sl", "232"],
                ["Singapore", "sg", "65"],
                ["Sint Maarten", "sx", "1", 21, ["721"]],
                ["Slovakia (Slovensko)", "sk", "421"],
                ["Slovenia (Slovenija)", "si", "386"],
                ["Solomon Islands", "sb", "677"],
                ["Somalia (Soomaaliya)", "so", "252"],
                ["South Africa", "za", "27"],
                ["South Korea (대한민국)", "kr", "82"],
                ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"],
                ["Spain (España)", "es", "34"],
                ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"],
                ["Sudan (‫السودان‬‎)", "sd", "249"],
                ["Suriname", "sr", "597"],
                ["Svalbard and Jan Mayen", "sj", "47", 1, ["79"]],
                ["Sweden (Sverige)", "se", "46"],
                ["Switzerland (Schweiz)", "ch", "41"],
                ["Syria (‫سوريا‬‎)", "sy", "963"],
                ["Taiwan (台灣)", "tw", "886"],
                ["Tajikistan", "tj", "992"],
                ["Tanzania", "tz", "255"],
                ["Thailand (ไทย)", "th", "66"],
                ["Timor-Leste", "tl", "670"],
                ["Togo", "tg", "228"],
                ["Tokelau", "tk", "690"],
                ["Tonga", "to", "676"],
                ["Trinidad and Tobago", "tt", "1", 22, ["868"]],
                ["Tunisia (‫تونس‬‎)", "tn", "216"],
                ["Turkey (Türkiye)", "tr", "90"],
                ["Turkmenistan", "tm", "993"],
                ["Turks and Caicos Islands", "tc", "1", 23, ["649"]],
                ["Tuvalu", "tv", "688"],
                ["U.S. Virgin Islands", "vi", "1", 24, ["340"]],
                ["Uganda", "ug", "256"],
                ["Ukraine (Україна)", "ua", "380"],
                ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"],
                ["United Kingdom", "gb", "44", 0],
                ["United States", "us", "1", 0],
                ["Uruguay", "uy", "598"],
                ["Uzbekistan (Oʻzbekiston)", "uz", "998"],
                ["Vanuatu", "vu", "678"],
                ["Vatican City (Città del Vaticano)", "va", "39", 1, ["06698"]],
                ["Venezuela", "ve", "58"],
                ["Vietnam (Việt Nam)", "vn", "84"],
                ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"],
                ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1, ["5288", "5289"]],
                ["Yemen (‫اليمن‬‎)", "ye", "967"],
                ["Zambia", "zm", "260"],
                ["Zimbabwe", "zw", "263"],
                ["Åland Islands", "ax", "358", 1, ["18"]]
            ], r = 0; r < s.length; r++) {
            var l = s[r];
            s[r] = {
                name: l[0],
                iso2: l[1],
                dialCode: l[2],
                priority: l[3] || 0,
                areaCodes: l[4] || null
            }
        }
        var c = {
            getInstance: function(e) {
                var t = e.getAttribute("data-intl-tel-input-id");
                return window.intlTelInputGlobals.instances[t]
            },
            instances: {},
            documentReady: function() {
                return "complete" === document.readyState
            }
        };
        "object" == typeof window && (window.intlTelInputGlobals = c);
        var d = 0,
            u = {
                allowDropdown: !0,
                autoInsertDialCode: !1,
                autoPlaceholder: "polite",
                customContainer: "",
                customPlaceholder: null,
                dropdownContainer: null,
                excludeCountries: [],
                formatOnDisplay: !0,
                geoIpLookup: null,
                hiddenInput: "",
                initialCountry: "",
                localizedCountries: null,
                nationalMode: !0,
                onlyCountries: [],
                placeholderNumberType: "MOBILE",
                preferredCountries: ["us", "gb"],
                separateDialCode: !1,
                showFlags: !0,
                utilsScript: ""
            },
            h = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"],
            m = function(e, t) {
                for (var i = Object.keys(e), n = 0; n < i.length; n++) t(i[n], e[i[n]])
            },
            f = function(e) {
                m(window.intlTelInputGlobals.instances, function(t) {
                    window.intlTelInputGlobals.instances[t][e]()
                })
            },
            p = function() {
                function i(e, t) {
                    var n = this;
                    (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    })(this, i), this.id = d++, this.a = e, this.b = null, this.c = null;
                    var o = t || {};
                    this.d = {}, m(u, function(e, t) {
                        n.d[e] = o.hasOwnProperty(e) ? o[e] : t
                    }), this.e = Boolean(e.getAttribute("placeholder"))
                }
                return function(e, t, i) {
                    t && n(e.prototype, t), i && n(e, i), Object.defineProperty(e, "prototype", {
                        writable: !1
                    })
                }(i, [{
                    key: "_init",
                    value: function() {
                        var e = this;
                        this.d.nationalMode && (this.d.autoInsertDialCode = !1), this.d.separateDialCode && (this.d.autoInsertDialCode = !1);
                        var t = this.d.allowDropdown && !this.d.separateDialCode;
                        if (!this.d.showFlags && t && (this.d.showFlags = !0), this.g = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), this.g && (document.body.classList.add("iti-mobile"), this.d.dropdownContainer || (this.d.dropdownContainer = document.body)), this.isRTL = !!this.a.closest("[dir=rtl]"), "undefined" != typeof Promise) {
                            var i = new Promise(function(t, i) {
                                    e.h = t, e.i = i
                                }),
                                n = new Promise(function(t, i) {
                                    e.i0 = t, e.i1 = i
                                });
                            this.promise = Promise.all([i, n])
                        } else this.h = this.i = function() {}, this.i0 = this.i1 = function() {};
                        this.s = {}, this._b(), this._f(), this._h(), this._i(), this._i3()
                    }
                }, {
                    key: "_b",
                    value: function() {
                        this._d(), this._d2(), this._e(), this.d.localizedCountries && this._d0(), (this.d.onlyCountries.length || this.d.localizedCountries) && this.p.sort(this._d1)
                    }
                }, {
                    key: "_c",
                    value: function(t, i, n) {
                        i.length > this.countryCodeMaxLen && (this.countryCodeMaxLen = i.length), this.q.hasOwnProperty(i) || (this.q[i] = []);
                        for (var o = 0; o < this.q[i].length; o++)
                            if (this.q[i][o] === t) return;
                        var a = n !== e ? n : this.q[i].length;
                        this.q[i][a] = t
                    }
                }, {
                    key: "_d",
                    value: function() {
                        if (this.d.onlyCountries.length) {
                            var e = this.d.onlyCountries.map(function(e) {
                                return e.toLowerCase()
                            });
                            this.p = s.filter(function(t) {
                                return e.indexOf(t.iso2) > -1
                            })
                        } else if (this.d.excludeCountries.length) {
                            var t = this.d.excludeCountries.map(function(e) {
                                return e.toLowerCase()
                            });
                            this.p = s.filter(function(e) {
                                return -1 === t.indexOf(e.iso2)
                            })
                        } else this.p = s
                    }
                }, {
                    key: "_d0",
                    value: function() {
                        for (var e = 0; e < this.p.length; e++) {
                            var t = this.p[e].iso2.toLowerCase();
                            this.d.localizedCountries.hasOwnProperty(t) && (this.p[e].name = this.d.localizedCountries[t])
                        }
                    }
                }, {
                    key: "_d1",
                    value: function(e, t) {
                        return e.name < t.name ? -1 : e.name > t.name ? 1 : 0
                    }
                }, {
                    key: "_d2",
                    value: function() {
                        this.countryCodeMaxLen = 0, this.dialCodes = {}, this.q = {};
                        for (var e = 0; e < this.p.length; e++) {
                            var t = this.p[e];
                            this.dialCodes[t.dialCode] || (this.dialCodes[t.dialCode] = !0), this._c(t.iso2, t.dialCode, t.priority)
                        }
                        for (var i = 0; i < this.p.length; i++) {
                            var n = this.p[i];
                            if (n.areaCodes)
                                for (var o = this.q[n.dialCode][0], a = 0; a < n.areaCodes.length; a++) {
                                    for (var s = n.areaCodes[a], r = 1; r < s.length; r++) {
                                        var l = n.dialCode + s.substr(0, r);
                                        this._c(o, l), this._c(n.iso2, l)
                                    }
                                    this._c(n.iso2, n.dialCode + s)
                                }
                        }
                    }
                }, {
                    key: "_e",
                    value: function() {
                        this.preferredCountries = [];
                        for (var e = 0; e < this.d.preferredCountries.length; e++) {
                            var t = this.d.preferredCountries[e].toLowerCase(),
                                i = this._y(t, !1, !0);
                            i && this.preferredCountries.push(i)
                        }
                    }
                }, {
                    key: "_e2",
                    value: function(e, t, i) {
                        var n = document.createElement(e);
                        return t && m(t, function(e, t) {
                            return n.setAttribute(e, t)
                        }), i && i.appendChild(n), n
                    }
                }, {
                    key: "_f",
                    value: function() {
                        this.a.hasAttribute("autocomplete") || this.a.form && this.a.form.hasAttribute("autocomplete") || this.a.setAttribute("autocomplete", "off");
                        var e = this.d,
                            i = e.allowDropdown,
                            n = e.separateDialCode,
                            o = e.showFlags,
                            a = e.customContainer,
                            s = e.hiddenInput,
                            r = e.dropdownContainer,
                            l = "iti";
                        i && (l += " iti--allow-dropdown"), n && (l += " iti--separate-dial-code"), o && (l += " iti--show-flags"), a && (l += " ".concat(a));
                        var c = this._e2("div", {
                            class: l
                        });
                        this.a.parentNode.insertBefore(c, this.a);
                        var d = i || o || n;
                        if (d && (this.k = this._e2("div", {
                                class: "iti__flag-container"
                            }, c)), c.appendChild(this.a), d && (this.selectedFlag = this._e2("div", t({
                                class: "iti__selected-flag"
                            }, i && {
                                role: "combobox",
                                "aria-haspopup": "listbox",
                                "aria-controls": "iti-".concat(this.id, "__country-listbox"),
                                "aria-expanded": "false",
                                "aria-label": "Telephone country code"
                            }), this.k)), o && (this.l = this._e2("div", {
                                class: "iti__flag"
                            }, this.selectedFlag)), this.selectedFlag && this.a.disabled && this.selectedFlag.setAttribute("aria-disabled", "true"), n && (this.t = this._e2("div", {
                                class: "iti__selected-dial-code"
                            }, this.selectedFlag)), i && (this.a.disabled || this.selectedFlag.setAttribute("tabindex", "0"), this.u = this._e2("div", {
                                class: "iti__arrow"
                            }, this.selectedFlag), this.m = this._e2("ul", {
                                class: "iti__country-list iti__hide",
                                id: "iti-".concat(this.id, "__country-listbox"),
                                role: "listbox",
                                "aria-label": "List of countries"
                            }), this.preferredCountries.length && (this._g(this.preferredCountries, "iti__preferred", !0), this._e2("li", {
                                class: "iti__divider",
                                role: "separator",
                                "aria-disabled": "true"
                            }, this.m)), this._g(this.p, "iti__standard"), r ? (this.dropdown = this._e2("div", {
                                class: "iti iti--container"
                            }), this.dropdown.appendChild(this.m)) : this.k.appendChild(this.m)), s) {
                            var u = s,
                                h = this.a.getAttribute("name");
                            if (h) {
                                var m = h.lastIndexOf("["); - 1 !== m && (u = "".concat(h.substr(0, m), "[").concat(u, "]"))
                            }
                            this.hiddenInput = this._e2("input", {
                                type: "hidden",
                                name: u
                            }), c.appendChild(this.hiddenInput)
                        }
                    }
                }, {
                    key: "_g",
                    value: function(e, t, i) {
                        for (var n = "", o = 0; o < e.length; o++) {
                            var a = e[o],
                                s = i ? "-preferred" : "";
                            n += "<li class='iti__country ".concat(t, "' tabIndex='-1' id='iti-").concat(this.id, "__item-").concat(a.iso2).concat(s, "' role='option' data-dial-code='").concat(a.dialCode, "' data-country-code='").concat(a.iso2, "' aria-selected='false'>"), this.d.showFlags && (n += "<div class='iti__flag-box'><div class='iti__flag iti__".concat(a.iso2, "'></div></div>")), n += "<span class='iti__country-name'>".concat(a.name, "</span>"), n += "<span class='iti__dial-code'>+".concat(a.dialCode, "</span>"), n += "</li>"
                        }
                        this.m.insertAdjacentHTML("beforeend", n)
                    }
                }, {
                    key: "_h",
                    value: function() {
                        var e = this.a.getAttribute("value"),
                            t = this.a.value,
                            i = e && "+" === e.charAt(0) && (!t || "+" !== t.charAt(0)) ? e : t,
                            n = this._5(i),
                            o = this._w(i),
                            a = this.d,
                            s = a.initialCountry,
                            r = a.autoInsertDialCode;
                        n && !o ? this._v(i) : "auto" !== s && (s ? this._z(s.toLowerCase()) : n && o ? this._z("us") : (this.j = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.p[0].iso2, i || this._z(this.j)), !i && r && (this.a.value = "+".concat(this.s.dialCode))), i && this._u(i)
                    }
                }, {
                    key: "_i",
                    value: function() {
                        this._j(), this.d.autoInsertDialCode && this._l(), this.d.allowDropdown && this._i2(), this.hiddenInput && this._i0()
                    }
                }, {
                    key: "_i0",
                    value: function() {
                        var e = this;
                        this._a14 = function() {
                            e.hiddenInput.value = e.getNumber()
                        }, this.a.form && this.a.form.addEventListener("submit", this._a14)
                    }
                }, {
                    key: "_i1",
                    value: function() {
                        for (var e = this.a; e && "LABEL" !== e.tagName;) e = e.parentNode;
                        return e
                    }
                }, {
                    key: "_i2",
                    value: function() {
                        var e = this;
                        this._a9 = function(t) {
                            e.m.classList.contains("iti__hide") ? e.a.focus() : t.preventDefault()
                        };
                        var t = this._i1();
                        t && t.addEventListener("click", this._a9), this._a10 = function() {
                            !e.m.classList.contains("iti__hide") || e.a.disabled || e.a.readOnly || e._n()
                        }, this.selectedFlag.addEventListener("click", this._a10), this._a11 = function(t) {
                            e.m.classList.contains("iti__hide") && -1 !== ["ArrowUp", "Up", "ArrowDown", "Down", " ", "Enter"].indexOf(t.key) && (t.preventDefault(), t.stopPropagation(), e._n()), "Tab" === t.key && e._2()
                        }, this.k.addEventListener("keydown", this._a11)
                    }
                }, {
                    key: "_i3",
                    value: function() {
                        var e = this;
                        this.d.utilsScript && !window.intlTelInputUtils ? window.intlTelInputGlobals.documentReady() ? window.intlTelInputGlobals.loadUtils(this.d.utilsScript) : window.addEventListener("load", function() {
                            window.intlTelInputGlobals.loadUtils(e.d.utilsScript)
                        }) : this.i0(), "auto" === this.d.initialCountry ? this._i4() : this.h()
                    }
                }, {
                    key: "_i4",
                    value: function() {
                        window.intlTelInputGlobals.autoCountry ? this.handleAutoCountry() : window.intlTelInputGlobals.startedLoadingAutoCountry || (window.intlTelInputGlobals.startedLoadingAutoCountry = !0, "function" == typeof this.d.geoIpLookup && this.d.geoIpLookup(function(e) {
                            window.intlTelInputGlobals.autoCountry = e.toLowerCase(), setTimeout(function() {
                                return f("handleAutoCountry")
                            })
                        }, function() {
                            return f("rejectAutoCountryPromise")
                        }))
                    }
                }, {
                    key: "_j",
                    value: function() {
                        var e = this;
                        this._a12 = function() {
                            e._v(e.a.value) && e._m2CountryChange()
                        }, this.a.addEventListener("keyup", this._a12), this._a13 = function() {
                            setTimeout(e._a12)
                        }, this.a.addEventListener("cut", this._a13), this.a.addEventListener("paste", this._a13)
                    }
                }, {
                    key: "_j2",
                    value: function(e) {
                        var t = this.a.getAttribute("maxlength");
                        return t && e.length > t ? e.substr(0, t) : e
                    }
                }, {
                    key: "_l",
                    value: function() {
                        var e = this;
                        this._a8 = function() {
                            e._l2()
                        }, this.a.form && this.a.form.addEventListener("submit", this._a8), this.a.addEventListener("blur", this._a8)
                    }
                }, {
                    key: "_l2",
                    value: function() {
                        if ("+" === this.a.value.charAt(0)) {
                            var e = this._m(this.a.value);
                            e && this.s.dialCode !== e || (this.a.value = "")
                        }
                    }
                }, {
                    key: "_m",
                    value: function(e) {
                        return e.replace(/\D/g, "")
                    }
                }, {
                    key: "_m2",
                    value: function(e) {
                        var t = document.createEvent("Event");
                        t.initEvent(e, !0, !0), this.a.dispatchEvent(t)
                    }
                }, {
                    key: "_n",
                    value: function() {
                        this.m.classList.remove("iti__hide"), this.selectedFlag.setAttribute("aria-expanded", "true"), this._o(), this.b && (this._x(this.b, !1), this._3(this.b, !0)), this._p(), this.u.classList.add("iti__arrow--up"), this._m2("open:countrydropdown")
                    }
                }, {
                    key: "_n2",
                    value: function(e, t, i) {
                        i && !e.classList.contains(t) ? e.classList.add(t) : !i && e.classList.contains(t) && e.classList.remove(t)
                    }
                }, {
                    key: "_o",
                    value: function() {
                        var e = this;
                        if (this.d.dropdownContainer && this.d.dropdownContainer.appendChild(this.dropdown), !this.g) {
                            var t = this.a.getBoundingClientRect(),
                                i = window.pageYOffset || document.documentElement.scrollTop,
                                n = t.top + i,
                                o = this.m.offsetHeight,
                                a = n + this.a.offsetHeight + o < i + window.innerHeight,
                                s = n - o > i;
                            if (this._n2(this.m, "iti__country-list--dropup", !a && s), this.d.dropdownContainer) {
                                var r = !a && s ? 0 : this.a.offsetHeight;
                                this.dropdown.style.top = "".concat(n + r, "px"), this.dropdown.style.left = "".concat(t.left + document.body.scrollLeft, "px"), this._a4 = function() {
                                    return e._2()
                                }, window.addEventListener("scroll", this._a4)
                            }
                        }
                    }
                }, {
                    key: "_o2",
                    value: function(e) {
                        for (var t = e; t && t !== this.m && !t.classList.contains("iti__country");) t = t.parentNode;
                        return t === this.m ? null : t
                    }
                }, {
                    key: "_p",
                    value: function() {
                        var e = this;
                        this._a0 = function(t) {
                            var i = e._o2(t.target);
                            i && e._x(i, !1)
                        }, this.m.addEventListener("mouseover", this._a0), this._a1 = function(t) {
                            var i = e._o2(t.target);
                            i && e._1(i)
                        }, this.m.addEventListener("click", this._a1);
                        var t = !0;
                        this._a2 = function() {
                            t || e._2(), t = !1
                        }, document.documentElement.addEventListener("click", this._a2);
                        var i = "",
                            n = null;
                        this._a3 = function(t) {
                            t.preventDefault(), "ArrowUp" === t.key || "Up" === t.key || "ArrowDown" === t.key || "Down" === t.key ? e._q(t.key) : "Enter" === t.key ? e._r() : "Escape" === t.key ? e._2() : /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(t.key) && (n && clearTimeout(n), i += t.key.toLowerCase(), e._s(i), n = setTimeout(function() {
                                i = ""
                            }, 1e3))
                        }, document.addEventListener("keydown", this._a3)
                    }
                }, {
                    key: "_q",
                    value: function(e) {
                        var t = "ArrowUp" === e || "Up" === e ? this.c.previousElementSibling : this.c.nextElementSibling;
                        t && (t.classList.contains("iti__divider") && (t = "ArrowUp" === e || "Up" === e ? t.previousElementSibling : t.nextElementSibling), this._x(t, !0))
                    }
                }, {
                    key: "_r",
                    value: function() {
                        this.c && this._1(this.c)
                    }
                }, {
                    key: "_s",
                    value: function(e) {
                        for (var t = 0; t < this.p.length; t++)
                            if (this._t(this.p[t].name, e)) {
                                var i = this.m.querySelector("#iti-".concat(this.id, "__item-").concat(this.p[t].iso2));
                                this._x(i, !1), this._3(i, !0);
                                break
                            }
                    }
                }, {
                    key: "_t",
                    value: function(e, t) {
                        return e.substr(0, t.length).toLowerCase() === t
                    }
                }, {
                    key: "_u",
                    value: function(e) {
                        var t = e;
                        if (this.d.formatOnDisplay && window.intlTelInputUtils && this.s) {
                            var i = this.d.nationalMode || "+" !== t.charAt(0) && !this.d.separateDialCode,
                                n = intlTelInputUtils.numberFormat,
                                o = n.NATIONAL,
                                a = n.INTERNATIONAL,
                                s = i ? o : a;
                            t = intlTelInputUtils.formatNumber(t, this.s.iso2, s)
                        }
                        t = this._7(t), this.a.value = t
                    }
                }, {
                    key: "_v",
                    value: function(e) {
                        var t = e,
                            i = this.s.dialCode;
                        t && "1" === i && "+" !== t.charAt(0) && ("1" !== t.charAt(0) && (t = "1".concat(t)), t = "+".concat(t)), this.d.separateDialCode && i && "+" !== t.charAt(0) && (t = "+".concat(i).concat(t));
                        var n = this._5(t, !0),
                            o = this._m(t),
                            a = null;
                        if (n) {
                            var s = this.q[this._m(n)],
                                r = -1 !== s.indexOf(this.s.iso2) && o.length <= n.length - 1;
                            if (!("1" === i && this._w(o) || r))
                                for (var l = 0; l < s.length; l++)
                                    if (s[l]) {
                                        a = s[l];
                                        break
                                    }
                        } else "+" === t.charAt(0) && o.length ? a = "" : t && "+" !== t || (a = this.j);
                        return null !== a && this._z(a)
                    }
                }, {
                    key: "_w",
                    value: function(e) {
                        var t = this._m(e);
                        if ("1" === t.charAt(0)) {
                            var i = t.substr(1, 3);
                            return -1 !== h.indexOf(i)
                        }
                        return !1
                    }
                }, {
                    key: "_x",
                    value: function(e, t) {
                        var i = this.c;
                        i && i.classList.remove("iti__highlight"), this.c = e, this.c.classList.add("iti__highlight"), this.selectedFlag.setAttribute("aria-activedescendant", e.getAttribute("id")), t && this.c.focus()
                    }
                }, {
                    key: "_y",
                    value: function(e, t, i) {
                        for (var n = t ? s : this.p, o = 0; o < n.length; o++)
                            if (n[o].iso2 === e) return n[o];
                        if (i) return null;
                        throw new Error("No country data for '".concat(e, "'"))
                    }
                }, {
                    key: "_z",
                    value: function(e) {
                        var t = this.d,
                            i = t.allowDropdown,
                            n = t.separateDialCode,
                            o = t.showFlags,
                            a = this.s.iso2 ? this.s : {};
                        if (this.s = e ? this._y(e, !1, !1) : {}, this.s.iso2 && (this.j = this.s.iso2), o && this.l.setAttribute("class", "iti__flag iti__".concat(e)), this._setSelectedCountryFlagTitleAttribute(e, n), n) {
                            var s = this.s.dialCode ? "+".concat(this.s.dialCode) : "";
                            this.t.innerHTML = s;
                            var r = this.selectedFlag.offsetWidth || this._z2();
                            this.isRTL ? this.a.style.paddingRight = "".concat(r + 6, "px") : this.a.style.paddingLeft = "".concat(r + 6, "px")
                        }
                        if (this._0(), i) {
                            var l = this.b;
                            if (l && (l.classList.remove("iti__active"), l.setAttribute("aria-selected", "false")), e) {
                                var c = this.m.querySelector("#iti-".concat(this.id, "__item-").concat(e, "-preferred")) || this.m.querySelector("#iti-".concat(this.id, "__item-").concat(e));
                                c.setAttribute("aria-selected", "true"), c.classList.add("iti__active"), this.b = c
                            }
                        }
                        return a.iso2 !== e
                    }
                }, {
                    key: "_setSelectedCountryFlagTitleAttribute",
                    value: function(e, t) {
                        var i;
                        this.selectedFlag && (i = e && !t ? "".concat(this.s.name, ": +").concat(this.s.dialCode) : e ? this.s.name : "Unknown", this.selectedFlag.setAttribute("title", i))
                    }
                }, {
                    key: "_z2",
                    value: function() {
                        var e = this.a.parentNode.cloneNode();
                        e.style.visibility = "hidden", document.body.appendChild(e);
                        var t = this.k.cloneNode();
                        e.appendChild(t);
                        var i = this.selectedFlag.cloneNode(!0);
                        t.appendChild(i);
                        var n = i.offsetWidth;
                        return e.parentNode.removeChild(e), n
                    }
                }, {
                    key: "_0",
                    value: function() {
                        var e = "aggressive" === this.d.autoPlaceholder || !this.e && "polite" === this.d.autoPlaceholder;
                        if (window.intlTelInputUtils && e) {
                            var t = intlTelInputUtils.numberType[this.d.placeholderNumberType],
                                i = this.s.iso2 ? intlTelInputUtils.getExampleNumber(this.s.iso2, this.d.nationalMode, t) : "";
                            i = this._7(i), "function" == typeof this.d.customPlaceholder && (i = this.d.customPlaceholder(i, this.s)), this.a.setAttribute("placeholder", i)
                        }
                    }
                }, {
                    key: "_1",
                    value: function(e) {
                        var t = this._z(e.getAttribute("data-country-code"));
                        this._2(), this._4(e.getAttribute("data-dial-code")), this.a.focus();
                        var i = this.a.value.length;
                        this.a.setSelectionRange(i, i), t && this._m2CountryChange()
                    }
                }, {
                    key: "_2",
                    value: function() {
                        this.m.classList.add("iti__hide"), this.selectedFlag.setAttribute("aria-expanded", "false"), this.selectedFlag.removeAttribute("aria-activedescendant"), this.u.classList.remove("iti__arrow--up"), document.removeEventListener("keydown", this._a3), document.documentElement.removeEventListener("click", this._a2), this.m.removeEventListener("mouseover", this._a0), this.m.removeEventListener("click", this._a1), this.d.dropdownContainer && (this.g || window.removeEventListener("scroll", this._a4), this.dropdown.parentNode && this.dropdown.parentNode.removeChild(this.dropdown)), this._m2("close:countrydropdown")
                    }
                }, {
                    key: "_3",
                    value: function(e, t) {
                        var i = this.m,
                            n = window.pageYOffset || document.documentElement.scrollTop,
                            o = i.offsetHeight,
                            a = i.getBoundingClientRect().top + n,
                            s = a + o,
                            r = e.offsetHeight,
                            l = e.getBoundingClientRect().top + n,
                            c = l + r,
                            d = l - a + i.scrollTop,
                            u = o / 2 - r / 2;
                        if (l < a) t && (d -= u), i.scrollTop = d;
                        else if (c > s) {
                            t && (d += u);
                            var h = o - r;
                            i.scrollTop = d - h
                        }
                    }
                }, {
                    key: "_4",
                    value: function(e) {
                        var t, i = this.a.value,
                            n = "+".concat(e);
                        if ("+" === i.charAt(0)) {
                            var o = this._5(i);
                            t = o ? i.replace(o, n) : n, this.a.value = t
                        } else this.d.autoInsertDialCode && (t = i ? n + i : n, this.a.value = t)
                    }
                }, {
                    key: "_5",
                    value: function(e, t) {
                        var i = "";
                        if ("+" === e.charAt(0))
                            for (var n = "", o = 0; o < e.length; o++) {
                                var a = e.charAt(o);
                                if (!isNaN(parseInt(a, 10))) {
                                    if (n += a, t) this.q[n] && (i = e.substr(0, o + 1));
                                    else if (this.dialCodes[n]) {
                                        i = e.substr(0, o + 1);
                                        break
                                    }
                                    if (n.length === this.countryCodeMaxLen) break
                                }
                            }
                        return i
                    }
                }, {
                    key: "_6",
                    value: function() {
                        var e = this.a.value.trim(),
                            t = this.s.dialCode,
                            i = this._m(e);
                        return (this.d.separateDialCode && "+" !== e.charAt(0) && t && i ? "+".concat(t) : "") + e
                    }
                }, {
                    key: "_7",
                    value: function(e) {
                        var t = e;
                        if (this.d.separateDialCode) {
                            var i = this._5(t);
                            if (i) {
                                var n = " " === t[(i = "+".concat(this.s.dialCode)).length] || "-" === t[i.length] ? i.length + 1 : i.length;
                                t = t.substr(n)
                            }
                        }
                        return this._j2(t)
                    }
                }, {
                    key: "_m2CountryChange",
                    value: function() {
                        this._m2("countrychange")
                    }
                }, {
                    key: "handleAutoCountry",
                    value: function() {
                        "auto" === this.d.initialCountry && (this.j = window.intlTelInputGlobals.autoCountry, this.a.value || this.setCountry(this.j), this.h())
                    }
                }, {
                    key: "handleUtils",
                    value: function() {
                        window.intlTelInputUtils && (this.a.value && this._u(this.a.value), this._0()), this.i0()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var e = this.a.form;
                        if (this.d.allowDropdown) {
                            this._2(), this.selectedFlag.removeEventListener("click", this._a10), this.k.removeEventListener("keydown", this._a11);
                            var t = this._i1();
                            t && t.removeEventListener("click", this._a9)
                        }
                        this.hiddenInput && e && e.removeEventListener("submit", this._a14), this.d.autoInsertDialCode && (e && e.removeEventListener("submit", this._a8), this.a.removeEventListener("blur", this._a8)), this.a.removeEventListener("keyup", this._a12), this.a.removeEventListener("cut", this._a13), this.a.removeEventListener("paste", this._a13), this.a.removeAttribute("data-intl-tel-input-id");
                        var i = this.a.parentNode;
                        i.parentNode.insertBefore(this.a, i), i.parentNode.removeChild(i), delete window.intlTelInputGlobals.instances[this.id]
                    }
                }, {
                    key: "getExtension",
                    value: function() {
                        return window.intlTelInputUtils ? intlTelInputUtils.getExtension(this._6(), this.s.iso2) : ""
                    }
                }, {
                    key: "getNumber",
                    value: function(e) {
                        if (window.intlTelInputUtils) {
                            var t = this.s.iso2;
                            return intlTelInputUtils.formatNumber(this._6(), t, e)
                        }
                        return ""
                    }
                }, {
                    key: "getNumberType",
                    value: function() {
                        return window.intlTelInputUtils ? intlTelInputUtils.getNumberType(this._6(), this.s.iso2) : -99
                    }
                }, {
                    key: "getSelectedCountryData",
                    value: function() {
                        return this.s
                    }
                }, {
                    key: "getValidationError",
                    value: function() {
                        if (window.intlTelInputUtils) {
                            var e = this.s.iso2;
                            return intlTelInputUtils.getValidationError(this._6(), e)
                        }
                        return -99
                    }
                }, {
                    key: "isValidNumber",
                    value: function() {
                        var e = this._6().trim();
                        return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(e, this.s.iso2) : null
                    }
                }, {
                    key: "isPossibleNumber",
                    value: function() {
                        var e = this._6().trim();
                        return window.intlTelInputUtils ? intlTelInputUtils.isPossibleNumber(e, this.s.iso2) : null
                    }
                }, {
                    key: "setCountry",
                    value: function(e) {
                        var t = e.toLowerCase();
                        this.s.iso2 !== t && (this._z(t), this._4(this.s.dialCode), this._m2CountryChange())
                    }
                }, {
                    key: "setNumber",
                    value: function(e) {
                        var t = this._v(e);
                        this._u(e), t && this._m2CountryChange()
                    }
                }, {
                    key: "setPlaceholderNumberType",
                    value: function(e) {
                        this.d.placeholderNumberType = e, this._0()
                    }
                }]), i
            }();
        c.getCountryData = function() {
            return s
        };
        var v = function(e, t, i) {
            var n = document.createElement("script");
            n.onload = function() {
                f("handleUtils"), t && t()
            }, n.onerror = function() {
                f("rejectUtilsScriptPromise"), i && i()
            }, n.className = "iti-load-utils", n.async = !0, n.src = e, document.body.appendChild(n)
        };
        return c.loadUtils = function(e) {
                if (!window.intlTelInputUtils && !window.intlTelInputGlobals.startedLoadingUtilsScript) {
                    if (window.intlTelInputGlobals.startedLoadingUtilsScript = !0, "undefined" != typeof Promise) return new Promise(function(t, i) {
                        return v(e, t, i)
                    });
                    v(e)
                }
                return null
            }, c.defaults = u, c.version = "18.2.1",
            function(e, t) {
                var i = new p(e, t);
                return i._init(), e.setAttribute("data-intl-tel-input-id", i.id), window.intlTelInputGlobals.instances[i.id] = i, i
            }
    }()
}), window.FlipDown = function() {
        function e(t) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "flipdown",
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (_classCallCheck(this, e), "number" != typeof t) throw new Error("FlipDown: Constructor expected unix timestamp, got ".concat(_typeof(t), " instead."));
            "object" === _typeof(i) && (n = i, i = "flipdown"), this.version = "0.2.2", this.initialised = !1, this.now = this._getTime(), this.epoch = t, this.countdownEnded = !1, this.hasEndedCallback = null, this.element = document.getElementById(i), this.rotors = [], this.rotorLeafFront = [], this.rotorLeafRear = [], this.rotorTops = [], this.rotorBottoms = [], this.countdown = null, this.daysRemaining = 0, this.clockValues = {}, this.clockStrings = {}, this.clockValuesAsString = [], this.prevClockValuesAsString = [], this.opts = this._parseOptions(n), this._setOptions(), console.log("FlipDown ".concat(this.version, " (Theme: ").concat(this.opts.theme, ")"))
        }
        return _createClass(e, [{
            key: "start",
            value: function() {
                return this.initialised || this._init(), this.countdown = setInterval(this._tick.bind(this), 1e3), this
            }
        }, {
            key: "ifEnded",
            value: function(e) {
                return this.hasEndedCallback = function() {
                    e(), this.hasEndedCallback = null
                }, this
            }
        }, {
            key: "_getTime",
            value: function() {
                return (new Date).getTime() / 1e3
            }
        }, {
            key: "_hasCountdownEnded",
            value: function() {
                return this.epoch - this.now < 0 ? (this.countdownEnded = !0, null != this.hasEndedCallback && (this.hasEndedCallback(), this.hasEndedCallback = null), !0) : (this.countdownEnded = !1, !1)
            }
        }, {
            key: "_parseOptions",
            value: function(e) {
                return {
                    theme: e.hasOwnProperty("theme") ? e.theme : "dark"
                }
            }
        }, {
            key: "_setOptions",
            value: function() {
                this.element.classList.add("flipdown__theme-".concat(this.opts.theme))
            }
        }, {
            key: "_init",
            value: function() {
                this.initialised = !0, this._hasCountdownEnded() ? this.daysremaining = 0 : this.daysremaining = Math.floor((this.epoch - this.now) / 86400).toString().length;
                for (var e = this.daysremaining <= 2 ? 2 : this.daysremaining, t = 0; t < e + 6; t++) this.rotors.push(this._createRotor(0));
                var i = [];
                for (t = 0; t < e; t++) i.push(this.rotors[t]);
                this.element.appendChild(this._createRotorGroup(i));
                var n = e;
                for (t = 0; t < 3; t++) {
                    for (var o = [], a = 0; a < 2; a++) o.push(this.rotors[n]), n++;
                    this.element.appendChild(this._createRotorGroup(o))
                }
                return this.rotorLeafFront = Array.prototype.slice.call(this.element.getElementsByClassName("rotor-leaf-front")), this.rotorLeafRear = Array.prototype.slice.call(this.element.getElementsByClassName("rotor-leaf-rear")), this.rotorTop = Array.prototype.slice.call(this.element.getElementsByClassName("rotor-top")), this.rotorBottom = Array.prototype.slice.call(this.element.getElementsByClassName("rotor-bottom")), this._tick(), this._updateClockValues(!0), this
            }
        }, {
            key: "_createRotorGroup",
            value: function(e) {
                var t = document.createElement("div");
                t.className = "rotor-group";
                var i = document.createElement("div");
                return i.className = "rotor-group-heading", t.appendChild(i), appendChildren(t, e), t
            }
        }, {
            key: "_createRotor",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = document.createElement("div"),
                    i = document.createElement("div"),
                    n = document.createElement("figure"),
                    o = document.createElement("figure"),
                    a = document.createElement("div"),
                    s = document.createElement("div");
                return t.className = "rotor", i.className = "rotor-leaf", n.className = "rotor-leaf-rear", o.className = "rotor-leaf-front", a.className = "rotor-top", s.className = "rotor-bottom", n.textContent = e, a.textContent = e, s.textContent = e, appendChildren(t, [i, a, s]), appendChildren(i, [n, o]), t
            }
        }, {
            key: "_tick",
            value: function() {
                this.now = this._getTime();
                var e = this.epoch - this.now <= 0 ? 0 : this.epoch - this.now;
                this.clockValues.d = Math.floor(e / 86400), e -= 86400 * this.clockValues.d, this.clockValues.h = Math.floor(e / 3600), e -= 3600 * this.clockValues.h, this.clockValues.m = Math.floor(e / 60), e -= 60 * this.clockValues.m, this.clockValues.s = Math.floor(e), this._updateClockValues(), this._hasCountdownEnded()
            }
        }, {
            key: "_updateClockValues",
            value: function() {
                var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];

                function i() {
                    var e = this;
                    this.rotorTop.forEach(function(t, i) {
                        t.textContent != e.clockValuesAsString[i] && (t.textContent = e.clockValuesAsString[i])
                    })
                }

                function n() {
                    var e = this;
                    this.rotorLeafRear.forEach(function(t, i) {
                        if (t.textContent != e.clockValuesAsString[i]) {
                            t.textContent = e.clockValuesAsString[i], t.parentElement.classList.add("flipped");
                            var n = setInterval(function() {
                                t.parentElement.classList.remove("flipped"), clearInterval(n)
                            }.bind(e), 500)
                        }
                    })
                }
                this.clockStrings.d = pad(this.clockValues.d, 2), this.clockStrings.h = pad(this.clockValues.h, 2), this.clockStrings.m = pad(this.clockValues.m, 2), this.clockStrings.s = pad(this.clockValues.s, 2), this.clockValuesAsString = (this.clockStrings.d + this.clockStrings.h + this.clockStrings.m + this.clockStrings.s).split(""), this.rotorLeafFront.forEach(function(t, i) {
                    t.textContent = e.prevClockValuesAsString[i]
                }), this.rotorBottom.forEach(function(t, i) {
                    t.textContent = e.prevClockValuesAsString[i]
                }), t ? (i.call(this), n.call(this)) : (setTimeout(i.bind(this), 500), setTimeout(n.bind(this), 500)), this.prevClockValuesAsString = this.clockValuesAsString
            }
        }]), e
    }(), window._countryflags = {
        AD: "🇦🇩",
        AF: "🇦🇫",
        AG: "🇦🇬",
        AI: "🇦🇮",
        AL: "🇦🇱",
        AM: "🇦🇲",
        AO: "🇦🇴",
        AQ: "🇦🇶",
        AR: "🇦🇷",
        AS: "🇦🇸",
        AT: "🇦🇹",
        AU: "🇦🇺",
        AW: "🇦🇼",
        AX: "🇦🇽",
        AZ: "🇦🇿",
        BA: "🇧🇦",
        BB: "🇧🇧",
        BD: "🇧🇩",
        BE: "🇧🇪",
        BF: "🇧🇫",
        BG: "🇧🇬",
        BH: "🇧🇭",
        BI: "🇧🇮",
        BJ: "🇧🇯",
        BL: "🇧🇱",
        BM: "🇧🇲",
        BN: "🇧🇳",
        BO: "🇧🇴",
        BQ: "🇧🇶",
        BR: "🇧🇷",
        BT: "🇧🇹",
        BV: "🇧🇻",
        BW: "🇧🇼",
        BY: "🇧🇾",
        BZ: "🇧🇿",
        CA: "🇨🇦",
        CH: "🇨🇭",
        CI: "🇨🇮",
        CL: "🇨🇱",
        CM: "🇨🇲",
        CN: "🇨🇳",
        CO: "🇨🇴",
        CR: "🇨🇷",
        CU: "🇨🇺",
        CV: "🇨🇻",
        CW: "🇨🇼",
        CX: "🇨🇽",
        CY: "🇨🇾",
        DE: "🇩🇪",
        DJ: "🇩🇯",
        DK: "🇩🇰",
        DM: "🇩🇲",
        DZ: "🇩🇿",
        EC: "🇪🇨",
        EE: "🇪🇪",
        EG: "🇪🇬",
        EH: "🇪🇭",
        ER: "🇪🇷",
        ES: "🇪🇸",
        ET: "🇪🇹",
        FI: "🇫🇮",
        FJ: "🇫🇯",
        FM: "🇫🇲",
        FR: "🇫🇷",
        GA: "🇬🇦",
        GD: "🇬🇩",
        GE: "🇬🇪",
        GF: "🇬🇫",
        GG: "🇬🇬",
        GH: "🇬🇭",
        GI: "🇬🇮",
        GL: "🇬🇱",
        GN: "🇬🇳",
        GP: "🇬🇵",
        GQ: "🇬🇶",
        GR: "🇬🇷",
        GS: "🇬🇸",
        GT: "🇬🇹",
        GU: "🇬🇺",
        GW: "🇬🇼",
        GY: "🇬🇾",
        HK: "🇭🇰",
        HN: "🇭🇳",
        HR: "🇭🇷",
        HT: "🇭🇹",
        HU: "🇭🇺",
        ID: "🇮🇩",
        IE: "🇮🇪",
        IL: "🇮🇱",
        IM: "🇮🇲",
        IN: "🇮🇳",
        IQ: "🇮🇶",
        IR: "🇮🇷",
        IS: "🇮🇸",
        IT: "🇮🇹",
        JE: "🇯🇪",
        JM: "🇯🇲",
        JO: "🇯🇴",
        JP: "🇯🇵",
        KE: "🇰🇪",
        KG: "🇰🇬",
        KH: "🇰🇭",
        KP: "🇰🇵",
        KR: "🇰🇷",
        KI: "🇰🇮",
        KN: "🇰🇳",
        KW: "🇰🇼",
        KZ: "🇰🇿",
        LB: "🇱🇧",
        LC: "🇱🇨",
        LI: "🇱🇮",
        LK: "🇱🇰",
        LR: "🇱🇷",
        LS: "🇱🇸",
        LT: "🇱🇹",
        LU: "🇱🇺",
        LV: "🇱🇻",
        LY: "🇱🇾",
        MA: "🇲🇦",
        MC: "🇲🇨",
        ME: "🇲🇪",
        MF: "🇲🇫",
        MG: "🇲🇬",
        ML: "🇲🇱",
        MM: "🇲🇲",
        MN: "🇲🇳",
        MO: "🇲🇴",
        MQ: "🇲🇶",
        MR: "🇲🇷",
        MS: "🇲🇸",
        MT: "🇲🇹",
        MU: "🇲🇺",
        MV: "🇲🇻",
        MW: "🇲🇼",
        MX: "🇲🇽",
        MY: "🇲🇾",
        MZ: "🇲🇿",
        NA: "🇳🇦",
        NC: "🇳🇨",
        NF: "🇳🇫",
        NG: "🇳🇬",
        NI: "🇳🇮",
        NO: "🇳🇴",
        NP: "🇳🇵",
        NR: "🇳🇷",
        NU: "🇳🇺",
        NZ: "🇳🇿",
        OM: "🇴🇲",
        PA: "🇵🇦",
        PE: "🇵🇪",
        PF: "🇵🇫",
        PG: "🇵🇬",
        PK: "🇵🇰",
        PL: "🇵🇱",
        PM: "🇵🇲",
        PN: "🇵🇳",
        PR: "🇵🇷",
        PS: "🇵🇸",
        PT: "🇵🇹",
        PW: "🇵🇼",
        PY: "🇵🇾",
        QA: "🇶🇦",
        RE: "🇷🇪",
        RO: "🇷🇴",
        RS: "🇷🇸",
        RU: "🇷🇺",
        RW: "🇷🇼",
        SA: "🇸🇦",
        SB: "🇸🇧",
        SC: "🇸🇨",
        SE: "🇸🇪",
        SG: "🇸🇬",
        SH: "🇸🇭",
        SI: "🇸🇮",
        SJ: "🇸🇯",
        SK: "🇸🇰",
        SL: "🇸🇱",
        SM: "🇸🇲",
        SN: "🇸🇳",
        SO: "🇸🇴",
        SR: "🇸🇷",
        SS: "🇸🇸",
        ST: "🇸🇹",
        SV: "🇸🇻",
        SX: "🇸🇽",
        SY: "🇸🇾",
        TD: "🇹🇩",
        TG: "🇹🇬",
        TH: "🇹🇭",
        TJ: "🇹🇯",
        TK: "🇹🇰",
        TL: "🇹🇱",
        TM: "🇹🇲",
        TN: "🇹🇳",
        TO: "🇹🇴",
        TR: "🇹🇷",
        TT: "🇹🇹",
        TV: "🇹🇻",
        TZ: "🇹🇿",
        UA: "🇺🇦",
        UG: "🇺🇬",
        US: "🇺🇸",
        UY: "🇺🇾",
        UZ: "🇺🇿",
        VC: "🇻🇨",
        VE: "🇻🇪",
        VG: "🇻🇬",
        VI: "🇻🇮",
        VN: "🇻🇳",
        VU: "🇻🇺",
        WF: "🇼🇫",
        WS: "🇼🇸",
        YE: "🇾🇪",
        YT: "🇾🇹",
        ZA: "🇿🇦",
        ZM: "🇿🇲",
        ZW: "🇿🇼",
        SZ: "🇸🇿",
        MK: "🇲🇰",
        PH: "🇵🇭",
        NL: "🇳🇱",
        AE: "🇦🇪",
        MD: "🇲🇩",
        GM: "🇬🇲",
        DO: "🇩🇴",
        SD: "🇸🇩",
        LA: "🇱🇦",
        TW: "🇹🇼",
        CG: "🇨🇬",
        CZ: "🇨🇿",
        GB: "🇬🇧",
        NE: "🇳🇪",
        CD: "🇨🇩",
        BS: "🇧🇸",
        CC: "🇨🇨",
        CF: "🇨🇫",
        CK: "🇨🇰",
        FK: "🇫🇰",
        FO: "🇫🇴",
        HM: "🇭🇲",
        IO: "🇮🇴",
        KM: "🇰🇲",
        KY: "🇰🇾",
        MH: "🇲🇭",
        MP: "🇲🇵",
        TC: "🇹🇨",
        TF: "🇹🇫",
        UM: "🇺🇲",
        VA: "🇻🇦"
    }, "undefined" != typeof _allStates && window.addEventListener("kk_country_updated", function(e) {
        let t = document.querySelector("#billing_state_field .woocommerce-input-wrapper"),
            i = e.detail,
            n = "";
        t && (void 0 !== _allStates[i] && Object.keys(_allStates[i]).length > 0 ? (n = '<select name="billing_state" id="billing_state" class="state_select" required>', n += '<option selected value="">Select your state/province</option>', Object.keys(_allStates[i]).forEach(function(e) {
            var t = _allStates[i][e];
            n += '<option value="' + e + '">' + t + "</option>"
        }), n += "</select>") : n = '<input type="text" name="billing_state" id="billing_state" placeholder="Enter your state/province" required/>', t.innerHTML = n)
    }),
    function() {
        var e = window.location.pathname;
        "NodeList" in window && !NodeList.prototype.forEach && (console.info("polyfill for IE11"), NodeList.prototype.forEach = function(e, t) {
                t = t || window;
                for (var i = 0; i < this.length; i++) e.call(t, this[i], i, this)
            }),
            function() {
                var e = document.createElement("script");
                e.type = "text/javascript", e.async = !0, e.src = "//staticw2.yotpo.com/X99N8pXTDsTYkPB6LYArsjaP3dfRYUViVhojWe6O/widget.js";
                var t = document.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(e, t)
            }(),
            function(t) {
                if (document.querySelector(".offer-checkout")) {
                    function i(e) {
                        "function" == typeof jQuery && e instanceof jQuery && (e = e[0]);
                        var t = e.getBoundingClientRect();
                        return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
                    }
                    t(document).on("scroll", function() {
                        t(document).scrollTop() >= 1e3 && !i(s) ? t(".mobile-button").removeClass("offscreen") : t(".mobile-button").addClass("offscreen")
                    }), t("body").on({
                        touchmove: function(e) {
                            console.log(t(document).scrollTop()), t(document).scrollTop() >= 1e3 && !i(s) ? t(".mobile-button").removeClass("offscreen") : t(".mobile-button").addClass("offscreen")
                        }
                    });
                    const s = document.querySelector("form.woocommerce-checkout");
                    var n = 471522;
                    switch (e) {
                        case "/ebook/":
                            n = 144181;
                            break;
                        case "/free-mega-discount/":
                            n = 471522;
                            break;
                        case "/free-discount/":
                            n = 471534;
                            break;
                        default:
                            n = 471522
                    }
                    var o = document.querySelector("form.woocommerce-checkout");
                    o.querySelector('[name="custom_book_id"]') || (o.innerHTML += '<input name="custom_book_id" type="hidden" value="' + n + '"/>'), t(document).on("click", "#next-step", function(i) {
                        i.preventDefault();
                        var n = "",
                            a = !1;

                        function s() {
                            if (!n) {
                                gtag("event", "generate_lead", {
                                    form_name: "Opt In"
                                }), gtag("event", "conversion", {
                                    send_to: "AW-873348775/XgkfCN-aydMBEKf9uKAD"
                                }), "/offer/" == e || "/ebook/" == e ? fbq("track", "eBook Lead") : fbq("track", "Book Lead");
                                var t = document.querySelector("#billing_first_name").value;
                                return localStorage.setItem("slc_cust_name", t), void o.submit()
                            }
                            console.log("Missing a field")
                        }
                        t.each(t(".woocommerce-billing-fields__field-wrapper .form-row:not(.place-order)"), function(e, i) {
                            var o;
                            if (i.className.includes("validate-required") && (t(i).removeClass("woocommerce-invalid"), t(i).find("input").length > 0 && !t(i).find("input").val() && t(i).addClass("woocommerce-invalid"), t(i).find("input[type=email]").length > 0 && 0 == (o = t(i).find("input[type=email]").val(), /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(o).toLowerCase())) && t(i).addClass("woocommerce-invalid"), t(i).find("textarea").length > 0 && !t(i).find("textarea").val() && t(i).addClass("woocommerce-invalid"), t(i).find("select").length > 0 && !t(i).find("select").val() && t(i).addClass("woocommerce-invalid")), !i.className.includes("woocommerce-invalid") && i.className.includes("validate-phone") && document.querySelector("#billing_phone")) {
                                function r() {
                                    d(), n = !0, t(i).addClass("woocommerce-invalid"), i.insertAdjacentHTML("beforeend", '<p class="twilio-invalid">Phone number appears to be invalid, please double check and try again.</p>')
                                }

                                function l() {
                                    c(), s()
                                }

                                function c() {
                                    var e = i.querySelector(".twilio-status");
                                    e && e.remove()
                                }

                                function d() {
                                    var e = i.querySelector(".twilio-invalid");
                                    e && e.remove()
                                }
                                d(), c(), i.insertAdjacentHTML("beforeend", '<p class="twilio-status">Verifying Phone...</p>'), a = !0, "" === document.querySelector('[name="billing_phone"]').value ? (r(), l()) : _kk_phone_validation_api(document.querySelector('[name="billing_phone"]').value, function(e) {
                                    var n = document.querySelector('[name="billing_phone"]');
                                    n && (n.value = e), t(i).removeClass("woocommerce-invalid"), d()
                                }, r, l)
                            }
                            i.className.includes("woocommerce-invalid") && (n = !0)
                        }), a || s()
                    }), a()
                }

                function a() {
                    MicroModal.init();
                    var e = 0;
                    setTimeout(() => {
                        document.addEventListener("mouseout", i => {
                            if (!t("html").hasClass("loader-open")) {
                                var n = !1;
                                if (i.target && (!i.target.nodeName || "INPUT" != i.target.nodeName && "SELECT" != i.target.nodeName || (n = !0), Element.prototype.closest && i.target.closest(".woocommerce-billing-fields") && (n = !0)), !n && !i.toElement && !i.relatedTarget && e < 1) {
                                    var o = document.querySelector("#billing_first_name").value,
                                        a = document.querySelector("#nameHolder");
                                    o && a && (a.innerText = " " + o), document.querySelector(".modal .c-progress__bar").classList.add("loading"), MicroModal.show("modal-1"), e = 1, document.querySelector(".modal .btn").addEventListener("click", e => {
                                        MicroModal.close("modal-1")
                                    })
                                }
                            }
                        })
                    }, 5e3)
                }
                if (document.body.classList.contains("page-template-sfb-page") || document.body.classList.contains("page-template-sfb-page-297") || document.body.classList.contains("page-template-sfb-page-short-vsl") || document.body.classList.contains("page-template-sfb-page-2022-vsl")) {
                    MicroModal.init({
                        onShow(e) {
                            t("body").addClass("hideOverflow"), e.querySelector(".modal__container").scrollTo(0, 0)
                        },
                        onClose(e) {
                            t("body").removeClass("hideOverflow")
                        },
                        disableScroll: !0
                    }), MicroModal.init(), setTimeout(() => {
                        document.addEventListener("mouseout", e => {
                            var t = document.querySelector("#modal-decline").classList.contains("is-open"),
                                i = document.querySelector("#modal-sfb").classList.contains("is-open");
                            if (!e.toElement && !e.relatedTarget && 0 == t && 0 == i) {
                                var n = localStorage.getItem("slc_cust_name");
                                n && (document.querySelector("#nameHolder").innerText = n), document.querySelector(".modal .c-progress__bar").classList.add("loading"), MicroModal.show("modal-exit"), document.querySelector(".modal .btn").addEventListener("click", e => {
                                    MicroModal.close("modal-exit")
                                })
                            }
                        })
                    }, 5e3), document.querySelectorAll("[data-kkmicromodal-close]").forEach(function(e, t) {
                        e.addEventListener("click", function() {
                            var e = this.getAttribute("data-kkmicromodal-close");
                            MicroModal.close(e), document.body.classList.remove("hideOverflow"), document.body.style = ""
                        })
                    }), document.querySelectorAll("[data-kkmicromodal-trigger]").forEach(function(e, t) {
                        e.addEventListener("click", function() {
                            var e = this.getAttribute("data-kkmicromodal-trigger");
                            MicroModal.show(e), document.body.classList.add("hideOverflow"), document.body.style.overflow = "hidden"
                        })
                    }), canvas = document.getElementById("confetticanvas"), ctx = canvas.getContext("2d"), canvas.width = window.innerWidth, canvas.height = window.innerHeight, cx = ctx.canvas.width / 2, cy = ctx.canvas.height / 2;
                    let e = [];
                    const i = 300,
                        n = .6,
                        o = 5,
                        a = .075,
                        h = [{
                            front: "#ffbe0b",
                            back: "#fb5607"
                        }, {
                            front: "#ff006e",
                            back: "#8338ec"
                        }, {
                            front: "#3a86ff",
                            back: "#5390d9"
                        }];
                    resizeCanvas = (() => {
                        canvas.width = window.innerWidth, canvas.height = window.innerHeight, cx = ctx.canvas.width / 2, cy = ctx.canvas.height / 2
                    }), randomRange = ((e, t) => Math.random() * (t - e) + e), initConfetti = (() => {
                        for (let t = 0; t < i; t++) e.push({
                            color: h[Math.floor(randomRange(0, h.length))],
                            dimensions: {
                                x: randomRange(10, 20),
                                y: randomRange(10, 30)
                            },
                            position: {
                                x: randomRange(0, canvas.width),
                                y: canvas.height - 1
                            },
                            rotation: randomRange(0, 2 * Math.PI),
                            scale: {
                                x: 1,
                                y: 1
                            },
                            velocity: {
                                x: randomRange(-25, 25),
                                y: randomRange(0, -50)
                            }
                        })
                    }), render = (() => {
                        ctx.clearRect(0, 0, canvas.width, canvas.height), e.forEach((t, i) => {
                            let s = t.dimensions.x * t.scale.x,
                                r = t.dimensions.y * t.scale.y;
                            ctx.translate(t.position.x, t.position.y), ctx.rotate(t.rotation), t.velocity.x -= t.velocity.x * a, t.velocity.y = Math.min(t.velocity.y + n, o), t.velocity.x += Math.random() > .5 ? Math.random() : -Math.random(), t.position.x += t.velocity.x, t.position.y += t.velocity.y, t.position.y >= canvas.height && e.splice(i, 1), t.position.x > canvas.width && (t.position.x = 0), t.position.x < 0 && (t.position.x = canvas.width), t.scale.y = Math.cos(.1 * t.position.y), ctx.fillStyle = t.scale.y > 0 ? t.color.front : t.color.back, ctx.fillRect(-s / 2, -r / 2, s, r), ctx.setTransform(1, 0, 0, 1, 0, 0)
                        }), window.requestAnimationFrame(render)
                    }), window.addEventListener("resize", function() {
                        resizeCanvas()
                    });
                    var s = document.querySelectorAll(".hero .col-lg-12")[1],
                        r = s.querySelector(".buy-button");
                    s.removeChild(r);
                    var l = document.querySelectorAll("section");
                    l.forEach(function(e, t) {
                        t > 0 && document.body.removeChild(e)
                    }), document.querySelector(".copyright-info").style.display = "none";
                    var d = !1;

                    function u(e, t) {
                        window._wq = window._wq || [], _wq.push({
                            id: e,
                            onReady: function(i) {
                                "icb321d2lf" == e && setTimeout(function() {
                                    initConfetti(), render()
                                }, 600);
                                var n = !1;
                                i.bind("secondchange", function(i) {
                                    1 == i && "icb321d2lf" != e && setTimeout(function() {
                                        initConfetti(), render()
                                    }, 100), i >= t && 0 == n && !d && (! function() {
                                        d = !0, l.forEach(function(e, t) {
                                            e.style.display = "block"
                                        }), s.appendChild(r), l.forEach(function(e, t) {
                                            t > 0 && document.body.appendChild(e)
                                        });
                                        var e = document.querySelector("footer");
                                        document.body.removeChild(e), document.body.appendChild(e), document.querySelector(".copyright-info").style.display = "block", document.querySelector("p.do-this-text").style.display = "none";
                                        var t = document.createElement("script");
                                        t.src = "https://cdn.useproof.com/proof.js?acc=309xDAZtW9gu0mYAlDlmr5vweCf1", document.head.appendChild(t), c()
                                    }(), function(e) {
                                        document.querySelectorAll(".skip_offer").forEach(function(t, i) {
                                            t.addEventListener("click", function() {
                                                Wistia.api(e).pause()
                                            })
                                        })
                                    }(e), n = !0)
                                })
                            }
                        })
                    }
                    u("ep57499v1t", 1572), u("co6fcnhqug", 1572), u("w234u382qe", 1232), u("icb321d2lf", 1359)
                }
                if ("/checkout/" == e) {
                    var h = document.querySelectorAll('[for="kkupsellinput"] input, [for*="product"] input'),
                        m = document.querySelector("#upsell-add"),
                        f = document.querySelector("#upsell-add span"),
                        p = document.querySelector("#place_order_2");
                    document.querySelector(".woocommerce");
                    var v = !1;
                    if (!m) return;

                    function y(e) {
                        v = !0;
                        var t = document.querySelector(".wfob_bump input.wfob_bump_product");
                        h.forEach(function(t, i) {
                            t.checked = e, "product-2" == t.id && (1 == e ? t.parentNode.classList.add("active") : t.parentNode.classList.remove("active"))
                        }), p.disabled = !0, f.textContent = 1 == e ? "Added!" : "Yes, Add To My Order", t && (t.checked && 0 == e || !t.checked && 1 == e) && t.click()
                    }
                    m.addEventListener("click", function() {
                        var e = document.querySelector("#kkupsellinput");
                        v || e.checked || (e.checked = !0, y(!0))
                    }), h.forEach(function(e, t) {
                        e.readonly || (e.checked = !1), e.addEventListener("change", function() {
                            v ? e.checked = !e.checked : this.checked ? y(!0) : y(!1)
                        })
                    }), t(document.body).on("updated_checkout", function() {
                        p.disabled = !1, v = !1
                    });
                    var g = "";
                    t(document).on("blur change keyup", ".input-text:not(#billing_phone), select, input:checkbox", function(e) {
                        g = "";
                        var i = t(this).closest(".form-row");
                        i.hasClass("woocommerce-invalid") ? (g = "email" == t(this).attr("type") ? "Please enter a valid email address." : "SELECT" == t(this)[0].nodeName ? "Please select an option." : "tel" == t(this).attr("type") ? "Please enter a valid phone number." : "This field is required.", t(".kk-error", i).length || t("label", i).append('<p class="kk-error">' + g + "</p>")) : t(".kk-error", i).remove()
                    }), t(document).on("blur", "#billing_phone", function(e) {
                        var i = t(this).closest(".form-row");
                        e.target.hasAttribute("id") && "billing_phone" === e.target.id && (window.iti.isValidNumber() ? i.removeClass("woocommerce-invalid").addClass("woocommerce-validated") : i.removeClass("woocommerce-validated").addClass("woocommerce-invalid woocommerce-invalid-required-field")), i.hasClass("woocommerce-invalid") ? (g = "Please enter a valid phone number.", t(".kk-error", i).length || t("label", i).append('<p class="kk-error">' + g + "</p>")) : t(".kk-error", i).remove()
                    }), t(document).on("click", ".kk-cvc.kk-tooltip__container", function() {
                        t(this).toggleClass("tt-active")
                    }), t(document).on("click focus", "body, input, textarea, select", function() {
                        t(".kk-tooltip__container.tt-active:not(.kk-cvc)").removeClass("tt-active").addClass("force-closed")
                    });
                    var b = document.querySelectorAll(".kk-tooltip__container:not(.kk-cvc)"),
                        _ = 0;
                    if (b && window.addEventListener("scroll", function() {
                            _ = window.scrollY + window.innerHeight / 1.5, window.matchMedia("(max-width:767px)").matches && b.forEach(function(e, t) {
                                e.offsetTop < _ && (e.classList.contains("tt-active") || e.classList.contains("force-closed") || e.classList.add("tt-active"), e.offsetTop < _ - 400 && (e.classList.remove("tt-active"), e.classList.add("force-closed")))
                            })
                        }), t(".submission-loader").hasClass("start")) {
                        var w = 0;

                        function k() {
                            5 == w ? (t("html").removeClass("loader-open"), t(".submission-loader").removeClass("start")) : (t(".submission-loader").removeClass("stage-" + w), w++, t(".submission-loader").addClass("stage-" + w))
                        }
                        t("html").addClass("loader-open"), setTimeout(k, 0), setTimeout(k, 4e3), setTimeout(k, 8e3), setTimeout(k, 12e3), setTimeout(k, 16e3), setTimeout(k, 19500)
                    }
                    var C = document.querySelector("#billing_address_1");
                    if (C) {
                        var S = document.querySelector("form.woocommerce-checkout");
                        t(S).on("checkout_place_order", function() {
                            return C.value.length <= 5 ? (C.parentNode.parentNode.classList.remove("woocommerce-validated"), C.parentNode.parentNode.classList.add("woocommerce-invalid"), C.parentNode.parentNode.classList.add("invalid-minchars"), !1) : (C.parentNode.parentNode.classList.remove("woocommerce-invalid"), C.parentNode.parentNode.classList.remove("invalid-minchars"), !document.querySelector(".woocommerce-invalid") && void 0)
                        })
                    }
                    a()
                }
                sessionStorage.setItem("countryCode", "US");
                var E = "🇺🇸";
                "undefined" != typeof _postCountry && void 0 !== _countryflags[_postCountry] && (E = _countryflags[_postCountry]), t(".your-country-flag").text(E),
                    function() {
                        t("input#phone-input").on("change keydown paste input", function() {
                            t("#billing_phone_field").removeClass("woocommerce-invalid"), "/checkout/" == e && "" == t(this).val() && t("#billing_phone_field").addClass("woocommerce-invalid")
                        });
                        for (var i = document.querySelectorAll('[name="billing_phone"]'), n = i[0].value, o = 0; o < i.length; o++) i[o].name = i[o].name + "_short", window.iti = intlTelInput(i[o], {
                            preferredCountries: [],
                            initialCountry: "US",
                            hiddenInput: "billing_phone",
                            autoPlaceholder: "aggressive",
                            separateDialCode: !0,
                            customPlaceholder: function() {
                                return "Phone number (for book updates)"
                            },
                            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/js/utils.min.js"
                        }), document.querySelector('[name="billing_phone"]') && (document.querySelector('[name="billing_phone"]').value = n), i[o].addEventListener("countrychange", function() {
                            T(), document.querySelector('[name="billing_phone"]').value = window.iti.getNumber();
                            let e = window.iti.getSelectedCountryData().iso2;
                            const t = new CustomEvent("kk_country_updated", {
                                detail: e.toUpperCase()
                            });
                            window.dispatchEvent(t)
                        }), i[o].addEventListener("keyup", function() {
                            document.querySelector('[name="billing_phone"]').value = window.iti.getNumber()
                        })
                    }(), t.getJSON("https://pro.ip-api.com/json/?fields=status,countryCode,country&key=aM3qNyuQeQg7p0t", function(i) {
                        if ("success" == i.status) {
                            var n = i.countryCode,
                                o = n.toLowerCase(),
                                a = i.country;
                            window.iti && document.querySelector('[name="billing_phone"]') && (document.querySelector('[name="billing_phone"]').value || window.iti.setCountry(o)), T(), sessionStorage.setItem("countryCode", i.countryCode), t('#billing_country option[value="' + n + '"]').length && (t("#billing_country").val(n), t("#billing_country").change(), t(document.body).trigger("update_checkout")), "/checkout/" == e ? (t(".header-banner__country").html('Exclusive Offer For: <span class="iti__flag iti__' + o + '" style="display: inline-block;"></span>'), t(".header-banner__phone").append('<span class="iti__flag iti__' + o + '" style="display: inline-block;"></span>'), "au" == o && (t(".header-banner__phone a").attr("href", "tel:+611300487609"), t(".header-banner__phone a span").text("1300 487 609")), "US" != n && "UK" != n || (a = "The " + a), t(".your-country").text("in " + a), void 0 !== _countryflags[n] && (E = _countryflags[n]), t(".your-country-flag").text(E)) : t(".amazon-bestseller .col-lg-12").prepend(t('<p>Exclusive Offer For: <span class="iti__flag iti__' + o + '" style="display: inline-block;"></span></p>'))
                        }
                    });
                var L = document.getElementById("billing_country");
                L && L.querySelectorAll("option").forEach(function(e, t) {
                    void 0 !== _countryflags[e.value] && (e.textContent = _countryflags[e.value] + " " + e.textContent)
                });

                function T() {
                    var e = document.querySelector("input#user-country"),
                        t = document.querySelector("#phone-country-select");
                    if (e && window.iti) {
                        var i = window.iti.getSelectedCountryData().name.match(/\b[a-zA-Z\s]+\b/);
                        i[0] && (e.value = i[0])
                    }
                    t && window.iti && (t.value = window.iti.getSelectedCountryData().iso2)
                }
                if (window.location.href.indexOf("/my-account/") > -1) {
                    var A = document.querySelector("#myaccount-nav"),
                        M = A.querySelectorAll("option"),
                        I = window.location.pathname;
                    A.addEventListener("change", function() {
                        window.location.href = A.value
                    }), M.forEach(function(e, t) {
                        e.value.indexOf(I) > -1 ? e.setAttribute("selected", !0) : e.removeAttribute("selected")
                    })
                }
                var x = new Date,
                    N = String(x.getDate()).padStart(2, "0");
                x = String(x.getMonth() + 1).padStart(2, "0") + "/" + N + "/" + x.getFullYear().toString().substr(-2);
                var q = document.querySelector("span.todays-date");
                q && (q.innerText = x), t(document).ready(function() {
                    var e = document.createElement("script");
                    e.src = "//widget.wickedreports.com/v2/3178/wr-1c31075838609bee0fee01e53afbee12.js", e.defer = 1, document.body.appendChild(e)
                })
            }(jQuery);
        var t = new Date,
            i = t.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric"
            }),
            n = t.toLocaleDateString("en-US", {
                month: "long"
            });
        if (document.querySelectorAll(".today").forEach(function(e, t) {
                e.innerText = i
            }), document.querySelectorAll(".this-month").forEach(function(e, t) {
                e.innerText = n
            }), document.body.classList.contains("page-template-course-page") || document.body.classList.contains("page-template-course-downsell")) {
            function o() {
                var e = (new Date).getTime() / 1e3,
                    t = e + 3600,
                    i = localStorage.getItem("slcCountdownExpiry");
                i && i + 86400 < e ? (t = Number(i), localStorage.setItem("slcCountdownExpiry", t)) : i ? t = Number(i) : localStorage.setItem("slcCountdownExpiry", t), new window.FlipDown(t, "flipdown", {
                    theme: "dark"
                }).start().ifEnded(function() {
                    window.location.replace("https://selllikecrazybook.com/course-offer-expired/")
                }), new window.FlipDown(t, "flipdown-2", {
                    theme: "dark"
                }).start().ifEnded(function() {
                    window.location.replace("https://selllikecrazybook.com/course-offer-expired/")
                })
            }
            "loading" !== document.readyState ? o() : document.addEventListener("DOMContentLoaded", function() {
                o()
            })
        }
        var a, s = document.querySelectorAll('[rel*="icon"]');
        s.length && s[0] && (a = s[0].getAttribute("href")), document.addEventListener("visibilitychange", function() {
            var e = "";
            e = "visible" === document.visibilityState ? a : "/wp-content/themes/sell-like-crazy/assets/prod/images/favicon-inactive.png", s.forEach(function(t, i) {
                t.setAttribute("href", e)
            })
        });
        const r = document.querySelectorAll(".accordion"),
            l = e => {
                const t = e.querySelector(".accordion__content");
                e.classList.remove("accordion__active"), t.style.maxHeight = null
            };

        function c() {
            "undefined" == typeof wfocu_vars && document.querySelectorAll(".wfocu_upsell, .wfocu_skip_offer").forEach(function(e, t) {
                e.addEventListener("click", function() {
                    MicroModal.show("modal--focuexpired")
                })
            })
        }
        r.forEach(e => {
                const t = e.querySelector(".accordion__intro"),
                    i = e.querySelector(".accordion__content");
                t.onclick = (() => {
                    i.style.maxHeight ? l(e) : (r.forEach(e => l(e)), (e => {
                        const t = e.querySelector(".accordion__content");
                        e.classList.add("accordion__active"), t.style.maxHeight = t.scrollHeight + "px"
                    })(e))
                })
            }), c(),
            function() {
                new URLSearchParams(window.location.search).forEach(function(e, t) {
                    t.includes("utm_") && sessionStorage.setItem(t, e)
                });
                let e = document.querySelectorAll('input[name*="utm_"]');
                e.length && e.forEach(function(e, t) {
                    sessionStorage.getItem(e.getAttribute("name")) && (e.value = sessionStorage.getItem(e.getAttribute("name")))
                })
            }()
    }(), window._kk_phone_validation_api = function(e, t, i, n) {
        var o = _kkajaxurl + "?action=kk_twilio_verify&phone=" + encodeURIComponent(e),
            a = new XMLHttpRequest;
        a.onreadystatechange = function() {
            if (4 === this.readyState) {
                if (200 === this.status && this.responseText) {
                    var e = JSON.parse(this.responseText);
                    e.valid && !1 !== e.number ? t(e.number) : i()
                } else t();
                n()
            }
        }, a.open("GET", o), a.send()
    };