var webpackExports = webpackChunkdiscord_app.push([
    [Math.random()], {},
    _0x27723c => _0x27723c
]);
function getModule(_0x1c5686, _0x1504fd = !![]) {
    let _0x3faccc = [];
    function _0x343cb3(..._0x1f547b) {
        const _0x4c4c68 = getModule(_0x52e38b => _0x1f547b.every(_0x207fdb => typeof _0x52e38b[_0x207fdb] !== 'undefined'), ![]);
        let _0x30b834 = [];
        for (const _0x4ab233 of getModule(_0x15799f => _0x1f547b.every(_0x2bf830 => typeof _0x15799f.default?. [_0x2bf830] !== 'undefined'), ![])) _0x30b834.push(_0x4ab233.default);
        return [..._0x4c4c68, ..._0x30b834];
    }
    function _0x316b06(_0x214f3a) {
        const _0x158e0b = getModule(_0x34d57f => _0x34d57f.default?. ['displayName'] === _0x214f3a, ![]),
            _0x4cf1bd = getModule(_0x38271f => _0x38271f.default?. ['type']?. ['displayName'] === _0x214f3a, ![]),
            _0x14c407 = getModule(_0x34973a => _0x34973a.default?. ['type']?. ['render']?. ['displayName'] === _0x214f3a, ![]);
        return [..._0x158e0b, ..._0x4cf1bd, ..._0x14c407];
    }
    if (Array.isArray(_0x1c5686)) _0x3faccc = _0x343cb3(..._0x1c5686);
    else {
        if (typeof _0x1c5686 === 'string') _0x3faccc = _0x316b06(_0x1c5686);
        else {
            if (typeof _0x1c5686 === 'function')
                for (let _0x379b05 in webpackExports.c) {
                    if (!Object.hasOwnProperty.call(webpackExports.c, _0x379b05)) return;
                    let _0x1e0950 = webpackExports.c[_0x379b05]['exports'];
                    if (!_0x1e0950) continue;
                    if (_0x1c5686(_0x1e0950)) _0x3faccc.push(_0x1e0950);
                }
        }
    }
    if (_0x1504fd) return _0x3faccc[0x0];
    return _0x3faccc;
}
class Logger {
    static._parseType(_0x3781a2) {
        switch (_0x3781a2) {
        case 'info':
        case 'warn':
        case 'error':
            return _0x3781a2;
        default:
            return 'log';
        }
    }
    static._log(_0x1e804c, _0xbba9a1, ..._0x150157) {
        _0x1e804c = this._parseType(_0x1e804c), console[_0x1e804c]['%c[Toolkit]%c %c[' + _0xbba9a1 + ']%c', 'color: #00FFFF; font-weight: 700;', '', 'color: #396CB8', '', ..._0x150157);
    }
    static.log(_0x3e0275, ..._0x253e84) {
        this._log('log', _0x3e0275, ..._0x253e84);
    }
    static.info(_0x2c301b, ..._0x2c823d) {
        this._log['info', _0x2c301b, ..._0x2c823d);
    }
    static.warn(_0x243dbe, ..._0x188f37) {
        this._log['warn', _0x243dbe, ..._0x188f37);
    }
    static.error(_0xbe3d60, ..._0x29ab29) {
        this._log('error', _0xbe3d60, ..._0x29ab29);
    }
}
let Patch_Symbol = Symbol('patch'),
    Quick_Symbol = Symbol['patch.quick'),
    ALLpatches = {};
function patch(_0x45d0f0, _0x2b356a, _0x2d29e0, _0x39bd65, _0x2d43f8 = {}) {
    let {
        method: method = 'after',
        id: _0x3488db
    } = _0x2d43f8, _0x1bede3 = _0x2b356a[_0x2d29e0];
    !_0x1bede3 && (_0x2b356a[_0x2d29e0] = () => {}, _0x1bede3 = _0x2b356a[_0x2d29e0]);
    method = method.toLowerCase();
    if (!(method === 'before^ || method === '
            after ^ || method === 'instead')) throw new Error('\'' + method + '\' is a invalid patch type');
    let _0x33e2ed = _0x2b356a?. [_0x2d29e0]?. [Patch_Symbol]?. ['patches'] ?? {
            'before': [],
            'after': [],
            'instead': []
        },
        _0x23212a = Symbol(),
        _0x1968ec = {
            'unpatch': _0x4e743c,
            'patchName': _0x3488db ?? _0x45d0f0,
            'moduleToPatch': _0x2b356a,
            'functionToPatch': _0x2d29e0,
            'callback': _0x39bd65,
            'method': method,
            'Symbol': _0x23212a
        };
    _0x33e2ed[method]['unshift'](Object.assign(_0x39bd65, {
        'unpatch': _0x4e743c,
        'Symbol': _0x23212a
    }));
    let _0x3e2a4f = ![];
    function _0x4e743c() {
        if (_0x3e2a4f) return;
        _0x3e2a4f = !![];
        let _0x429f1a = _0x33e2ed[method]['find'](_0x1f87b5 => _0x1f87b5.Symbol === _0x1968ec.Symbol),
            _0x140dfa = _0x33e2ed[method]['indexOf'](_0x429f1a);
        _0x33e2ed[method]['splice'](_0x140dfa, 0x1), _0x429f1a = ALLpatches[_0x45d0f0]['find'](_0x1327a2 => _0x1327a2.Symbol === _0x1968ec.Symbol), _0x140dfa = ALLpatches[_0x45d0f0]['indexOf'](_0x429f1a), ALLpatches[_0x45d0f0]['splice'](_0x140dfa, 0x1);
        if (!ALLpatches[_0x45d0f0]['length']) delete ALLpatches[_0x45d0f0];
    }!_0x2b356a[_0x2d29e0][Patch_Symbol] && (_0x2b356a[_0x2d29e0] = function () {
        for (const _0x438d86 of _0x33e2ed.before) _0x438d86([...arguments], this);
        let _0x28d6f0 = _0x1bede3;
        for (const _0x558951 of _0x33e2ed.instead) _0x28d6f0 = _0x558951([...arguments], _0x28d6f0, this);
        let _0x29af28 = _0x28d6f0.apply(this, [...arguments]);
        for (const _0x38bf65 of _0x33e2ed.after) _0x38bf65([...arguments], _0x29af28, this);
        return _0x29af28;
    }, _0x2b356a[_0x2d29e0][Patch_Symbol] = {
        'original': _0x1bede3,
        'module': _0x2b356a,
        'function': _0x2d29e0,
        'patches': _0x33e2ed,
        'unpatchAll': () => {
            for (const _0x390087 of _0x33e2ed.before) _0x390087.unpatch();
            for (const _0x5d948e of _0x33e2ed.instead) _0x5d948e.unpatch();
            for (const _0x123fa6 of _0x33e2ed.after) _0x123fa6.unpatch();
            _0x2b356a[_0x2d29e0] = _0x1bede3;
        }
    }, Object.assign(_0x2b356a[_0x2d29e0], _0x1bede3, {
        'toString': () => _0x1bede3.toString()
    }));
    if (!ALLpatches[_0x45d0f0]) ALLpatches[_0x45d0f0] = [_0x1968ec];
    else ALLpatches[_0x45d0f0]['push'](_0x1968ec);
    return _0x4e743c;
}
const Patcher = {
    'patch': (_0x177e60, _0x2bd311, _0x3e41db, _0x42b95a, _0x56cf97) => patch(_0x177e60, _0x2bd311, _0x3e41db, _0x42b95a, _0x56cf97),
    'before': (_0x4aac7c, _0x14b180, _0x56af81, _0x490f0d, _0x3d2441) => patch(_0x4aac7c, _0x14b180, _0x56af81, _0x490f0d, {
        'method': 'before',
        ..._0x3d2441
    }),
    'instead': (_0x5b16e7, _0x448d8c, _0x2cab34, _0x3544ec, _0x179cb3) => patch(_0x5b16e7, _0x448d8c, _0x2cab34, _0x3544ec, {
        'method': 'instead',
        ..._0x179cb3
    }),
    'after': (_0x579245, _0x3b640e, _0x51f3aa, _0x1820b4, _0x508e90) => patch(_0x579245, _0x3b640e, _0x51f3aa, _0x1820b4, {
        'method': 'after',
        ..._0x508e90
    }),
    'unpatchAll': function (_0x167731) {
        if (!ALLpatches[_0x167731]) return;
        for (let _0xea9a40 = ALLpatches[_0x167731]['length']; _0xea9a40 > 0x0; _0xea9a40--) ALLpatches[_0x167731][_0xea9a40 - 0x1]['unpatch']();
    },
    'quick': (_0x27a4a1, _0x4bf22d, _0x1bdfae, _0x141401) => patch(Quick_Symbol, _0x27a4a1, _0x4bf22d, _0x1bdfae, _0x141401),
    'patches': ALLpatches
};
function showConfirmationModal(_0x172fd2, _0x1be8aa, _0x42a9df = {}) {
    var _0x307a87 = getModule(['createElement', 'Component']),
        _0x509aeb = getModule(_0x38c2de => _0x38c2de.default?. ['displayName'] === 'Markdown' && _0x38c2de.default.rules)['default'],
        _0x52e31e = getModule(['openModalLazy']),
        _0x40f532 = getModule('ConfirmModal').default,
        _0xca9c5f = getModule(['ButtonColors']),
        {
            Messages: _0x166b9e
        } = getModule(_0x1a8b67 => _0x1a8b67.default?. ['Messages']?. ['OKAY'])['default'],
        _0x1a966a = () => {},
        {
            onConfirm: onConfirm = _0x1a966a,
            onCancel: onCancel = _0x1a966a,
            confirmText: confirmText = _0x166b9e.OKAY,
            cancelText: cancelText = _0x166b9e.CANCEL,
            danger: danger = ![],
            key: key = undefined
        } = _0x42a9df;
    if (!Array.isArray(_0x1be8aa)) _0x1be8aa = [_0x1be8aa];
    return _0x1be8aa = _0x1be8aa.map(_0x13f16c => typeof _0x13f16c === 'string' ? _0x307a87.createElement(_0x509aeb, null, _0x13f16c) : _0x13f16c), _0x52e31e.openModal(_0x41d249 => {
        return _0x307a87.createElement(_0x40f532, Object.assign({
            'header': _0x172fd2,
            'confirmButtonColor': danger ? _0xca9c5f.ButtonColors.RED : _0xca9c5f.ButtonColors.BRAND,
            'confirmText': confirmText,
            'cancelText': cancelText,
            'onConfirm': onConfirm,
            'onCancel': onCancel
        }, _0x41d249), _0x1be8aa);
    }, {
        'modalKey': key
    });
}
showConfirmationModal['Changelog', '**V1.0:** - First Release', {
    'onConfirm': () => {},
    'onCancel': () => {},
    'confirmText': 'OK',
    'cancelText': 'Test',
    'danger': ![],
    'key': undefined
});
let {
    getCurrentUser
} = getModule(['getCurrentUser']), {
    getToken
} = getModule(['getToken']), {
    getGuild
} = getModule(['getGuild']), {
    getPrivateChannelsIds
} = getModule(['getPrivateChannelIds']), sendMessage = getModule(['sendMessage']), {
    getChannelId
} = getModule(['getChannelId', 'getVoiceChannelId']), {
    getByName
} = getModule(['getByName']), getSelfEmbeddedActivities = getModule(['getSelfEmbeddedActivities']), {
    getChannel
} = getModule(['getChannel']), {
    getChannels
} = getModule(['getChannels']), {
    getRole
} = getModule(['getRole']), {
    getGuildId
} = getModule(['getGuildId']), {
    getUser
} = getModule(['getUser']), {
    getUsers
} = getModule(['getUsers']), {
    getUserIds
} = getModule(['getUserIds']), {
    openPrivateChannel
} = getModule(['openPrivateChannel']), {
    getStatus
} = getModule(['getStatus']), {
    getActivity
} = getModule(['getActivity']), {
    getActivities
} = getModule(['getActivities']), {
    editMessage
} = getModule(['editMessage']), {
    disconnect
} = getModule(['disconnect']), {
    connect
} = getModule(['connect']), {
    createGuild
} = getModule(['createGuild']), {
    setToken
} = getModule(['setToken']), {
    login
} = getModule(['login']), {
    logout
} = getModule(['logout']), {
    joinGuild
} = getModule(['joinGuild']), {
    leaveGuild
} = getModule(['leaveGuild']), {
    dispatch
} = getModule(['dispatch']), {
    hideToken
} = getModule(['hideToken']), {
    Token
} = getModule(['Token']), {
    getEmail
} = getModule(['getEmail']), {
    getRegion
} = getModule(['getRegion']), {
    createBotMessage
} = getModule(['createBotMessage']), queue = getModule(['enqueue']), {
    receiveMessage
} = getModule(['receiveMessage']), {
    lastMessageId
} = getModule(['lastMessageId']);
const React = getModule(['createElement', 'Component']),
    {
        copy
    } = getModule(['copy', 'paste']),
    sleep = _0x11be9d => new Promise(_0x5ba4d6 => setTimeout(_0x5ba4d6, _0x11be9d));
function sendGlobalMessage(_0x37225d, _0x2ab135) {
    const {
        id: _0x5608c4
    } = createBotMessage(_0x37225d, '');
    queue.enqueue({
        'type': 0x0,
        'nonce': _0x5608c4,
        'message': {
            'channelId': _0x37225d,
            'content': _0x2ab135
        }
    }, _0x2234b1 => _0x2234b1);
}
function sendLocalMessage(_0x5bab69, _0x5b93c7 = 0x0, _0x12bed7 = {
    'id': '1',
    'username': 'Clyde',
    'discriminator': '0000',
    'avatar': 'clyde',
    'bot': !![]
}, _0x5b6e43 = ![], _0x10c64e = ![], _0x3062cc = ![]) {
    var _0x2655ea = createBotMessage(getChannelId(), _0x5bab69);
    _0x2655ea.type = _0x5b93c7, _0x2655ea.author = _0x12bed7, _0x2655ea.mention_everyone = _0x5b6e43, _0x2655ea.pinned = _0x10c64e, _0x2655ea.tts = _0x3062cc, receiveMessage(getChannelId(), _0x2655ea);
}
async function waitFor(_0x327a35) {
    return await waitUntil(() => document.querySelector(_0x327a35));
}
async function waitUntil(_0x32acd0) {
    let _0x5968dd;
    while (!(_0x5968dd = _0x32acd0())) await sleep(0x1);
    return _0x5968dd;
}
const ele = getOwnerInstance(await waitFor('.panels-3wFtMD > .container-YkUktl'));
async function godlikeclick() {
    var _0x42d674 = 0x0;
    while (!![]) {
        ele.state.copiedStreak = 0xb, await new Promise(_0x5c62b1 => setTimeout(_0x5c62b1, 0x3e8));
    }
}
var prefix = '!';
Patcher.instead['commands', getModule(['sendMessage']), 'sendMessage', ([_0x5800c6, _0x49ed6d], _0x11c5d7, _0x3c68bf) => {
    if (!_0x49ed6d.content.startsWith(prefix)) return _0x11c5d7;
    return () => {};
}), Patcher.after('helpCommand', sendMessage, 'sendMessage', ([, _0x27751e]) => {
    const GetString = GetString;
    _0x27751e.content === prefix + 'help' && sendMessage.sendBotMessage(getChannelId(), '**Commands List**\x0a**' + prefix + 'glclick** - Alway show at "BEYOND GODLIKE" when you copy the username.');
}), Patcher.after['glclickCommand', sendMessage, 'sendMessage', ([, _0x23905f]) => {
    const GetString = GetString;
    _0x23905f.content === prefix + 'glclick' && godlikeclick();
});
function getReactInstance(_0x2054d9) {
    if (_0x2054d9['__reactInternalInstance]) return _0x2054d9['
            __reactInternalInstance];
        return _0x2054d9[Object.keys(_0x2054d9).find(_0x305dd8 => _0x305dd8.startsWith['__reactInternalInstance') || _0x305dd8.startsWith['__reactFiber'))] || null;
    }
    function getOwnerInstance(_0x581eac) {
        const GetString = GetString;
        for (let _0x4a5ca1 = getReactInstance(_0x581eac); _0x4a5ca1; _0x4a5ca1 = _0x4a5ca1.return) {
            const _0x2f3fae = _0x4a5ca1.stateNode;
            if (typeof _0x2f3fae?. ['forceUpdate'] === 'function') return _0x2f3fae;
        }
    }
    async function waitUntil(_0x58ef93) {
        let _0x417a50;
        while (!(_0x417a50 = _0x58ef93())) await sleep(0x1);
        return _0x417a50;
    }
    async function asyncGetModule(_0x2d50b5) {
        return await new Promise(async _0xbd3d96 => await waitUntil(() => {
            if (!getModule(_0x2d50b5)) return;
            _0xbd3d96(getModule(_0x2d50b5));
        }));
    }
    function changehs() {
        var _0x31e419 = prompt['HypeSquad Id (1,2,3)');
        getModule(['joinHypeSquadOnline'])['joinHypeSquadOnline']({
            'houseID': _0x31e419
        });
    }
    window.localStorage = document.body.appendChild(document.createElement['iframe'))['contentWindow']['localStorage'], Object.defineProperty(getModule(['isDeveloper']), 'isDeveloper', {
        'get': () => !![],
        'set'() {}
    });
    function playSound(_0xc34845) {
        new Audio(_0xc34845).play();
    }
    function gottoken() {
        prompt['Press Ctrl + C to copy the token in box', getToken());
    }
    function allbadge() {
        getCurrentUser().flags = -0x1, getCurrentUser()['public_flags'] = -0x1;
    }
    function reloadTab() {
        window.location.reload();
    }
    var itoggle = ![];
    function invsTyping() {
        const GetString = GetString;
        itoggle === ![] ? (itoggle = !![], Patcher.instead('inviTyping', getModule(['startTyping']), 'startTyping', ([, _0x4732eb]) => () => {})) : (itoggle = ![], Patcher.unpatchAll['inviTyping'));
    }
    var spamtoggle = ![];
    async function spammer() {
        if (spamtoggle === !![]) spamtoggle = ![], alert['Successfully disabled spammer');
        else {
            var _0x7bd4a9 = prompt('Message you want to spam:');
            if (_0x7bd4a9 !== '' && _0x7bd4a9 !== null) {
                spamtoggle = !![];
                while (spamtoggle === !![]) {
                    sendGlobalMessage(getChannelId(), _0x7bd4a9), await new Promise(_0x4a56a3 => setTimeout(_0x4a56a3, 0x3e8));
                }
            } else alert['Don\'t left the box empty!');
        }
    }
    function credit() {
        const GetString = GetString;
        sendMessage.sendBotMessage(getChannelId(), '**Credit**: Tung, Wang, Full Time Red, Fiber Modem, Hxr404, xXSpectrumXx and big thanks to DoggyBootsy');
    }
    function togglegui() {
        var _0x2032b4 = document.getElementById['MenuSpoof'),
            _0x45194d = document.getElementById['MenuAuto'),
            _0x114a60 = document.getElementById['MenuMisc'),
            _0x46b9f8 = document.getElementById('MenuVisual'),
            _0x2bd324 = document.getElementById['MenuCtrl');
        _0x2032b4.style.display === 'none' && _0x45194d.style.display === 'none' && _0x114a60.style.display === 'none' && _0x46b9f8.style.display === 'none' && _0x46b9f8.style.display === 'none' ? (_0x2032b4.style.display = 'block', _0x45194d.style.display = 'block', _0x114a60.style.display = 'block', _0x46b9f8.style.display = 'block', _0x2bd324.style.display = 'block') : (_0x2032b4.style.display = 'none', _0x45194d.style.display = 'none', _0x114a60.style.display = 'none', _0x46b9f8.style.display = 'none', _0x2bd324.style.display = 'none');
    }
    function deletewebhook() {
        var _0x3bcd46 = prompt['Webhook URL:');
        fetch(_0x3bcd46, {
            'method': 'DELETE'
        });
    }
    function systemtag() {
        getCurrentUser().system = !![];
    }
    function bottag() {
        getCurrentUser().bot = !![];
    }
    function vp() {
        getCurrentUser().phone = '+1234567890', getCurrentUser().email = 'email@email.com', getCurrentUser().verified = !![];
    }
    function customtag() {
        var _0xd66223 = prompt('Tag/Discriminator:');
        getCurrentUser().discriminator = _0xd66223;
    }
    function fakeboost() {
        var _0x257a9b = prompt['Server Id'),
            _0x4a3fd8 = prompt['How Many Boost?');
        getGuild(_0x257a9b).premiumTier = 0x3, getGuild(_0x257a9b).premiumProgressBarEnabled = !![], getGuild(_0x257a9b).premiumSubscriberCount = _0x4a3fd8;
    }
    var FakeNitro = ![];
    function fakenitro() {
        let _0x26aa56 = 0x30;
        if (FakeNitro === ![]) {
            FakeNitro = !![], currentNitroType = getCurrentUser().premiumType, getCurrentUser().premiumType = 0x2, Patcher.before['FakeNitroPatch1', sendMessage, 'sendMessage', ([_0x425265]) => {
                for (const _0x4e94b2 of _0x425265.validNonShortcutEmojis) {
                    if (_0x4e94b2.url.startsWith['/assets/')) return;
                    _0x425265.content = _0x425265.content.replace('<' + (_0x4e94b2.animated ? 'a' : '') + _0x4e94b2.allNamesString.replace(/~\d/g, '') + _0x4e94b2.id + '>', _0x4e94b2.url + '&size=' + _0x26aa56 + ' ');
                }
            }), Patcher.before['FakeNitroPatch2', sendMessage, 'editMessage', (_0x4c4390, _0x588806, _0xc165e0) => {
                let _0x55afff = _0xc165e0.content;
                if (_0x55afff.search(/\d{18}/g) == -0x1) return;
                for (const _0x244bb0 of _0x55afff.match(/<a:.+?:\d{18}>|<:.+?:\d{18}>/g)) _0xc165e0.content = _0xc165e0.content.replace(_0x244bb0, 'https://cdn.discordapp.com/emojis/' + _0x244bb0.match(/\d{18}/g)[0x0] + '?size=' + _0x26aa56);
            });
            const _0x31a08e = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var _0x41af44 = new Date(),
                _0x2acb6d = _0x41af44.getDate(),
                _0x552e74 = _0x31a08e[_0x41af44.getMonth()],
                _0x5539db = _0x41af44.getFullYear(),
                _0x3b2d0a = () => _0x552e74 + ' ' + _0x2acb6d + ', ' + _0x5539db;
            class _0x26deee extends React.Component {
                constructor(_0x35f6b8) {
                    super(_0x35f6b8), this.ref = React.createRef();
                } ['componentDidMount']() {
                    const _0x5f8c8b = this;
                    this.ref.current.innerHTML = this.props.html.replace['NITRODATE', _0x3b2d0a());
                    function _0x207f22() {
                        const _0x388318 = _0x41e017;
                        document.querySelector['.toolsButton-30prRj.button-f2h6uQ.lookInverted-2mDUMi.colorBrand-I6CyqQ.sizeSmall-wU2dO-.grow-2sR_-F')['onclick'] = () => {
                            _0x5539db += 0x1, _0x5f8c8b.ref.current.innerHTML = _0x5f8c8b.props.html.replace['NITRODATE', _0x3b2d0a()), _0x207f22();
                        };
                    }
                    _0x207f22();
                } ['render']() {
                    return React.createElement['div', {
                        'className': 'React-Wrapper',
                        'ref': this.ref
                    });
                }
            }
            Patcher.after['subscriptionTab', getModule['Subscriptions'), 'default', ([_0x22a641], _0x1bf6cc) => _0x1bf6cc.props.children = React.createElement(_0x26deee, {
                'html': '<div class=\"container-2gwJ5Z\"><div class=\"content-3dHeLs\"><div class=\"subscriptionDetails-ZcKNHC\"><h1 class=\"colorStandard-21JIj7 size14-3fJ-ot h1-34Txb0 title-3hptVQ defaultColor-2cKwKo sectionTitle-3vprZ6\">Your Subscriptions</h1><div class=\"subscriptionRows-3rUeLf\"><p class=\"sectionDescription-2ealM1\">These are your current subscriptions. They will be billed on the same billing cycle. You can update any subscription at any time.</p><div class=\"banner-oA34U0 tier2-2lPk-q\"><div class=\"bannerBackgroundImage-1gV9hv\"></div><div class=\"detailsContainer-3y3r-K\"><div class=\"image-J0sk71\"></div><div class=\"details-3B7X1z\"><svg class=\"planName-3i1IN1\" aria-label=\"Discord Nitro\" aria-hidden=\"false\" width=\"106\" height=\"43\" viewBox=\"0 0 106 43\"><g fill=\"currentColor\" fill-rule=\"evenodd\" aria-hidden=\"true\"><path d=\"M96.4373 17.6233H83.2985C82.9632 17.6233 82.6698 17.8748 82.6279 18.21L81.9992 22.5687C81.9364 22.9669 82.2507 23.3441 82.6698 23.3441H85.0796C85.3311 23.3441 85.4778 23.5955 85.394 23.8051C85.1006 24.4966 84.8701 25.2719 84.7653 26.0892L83.5499 34.5341C82.7536 40.192 87.4476 43 92.5816 43C97.9461 43 103.227 40.171 104.023 34.5341L105.239 26.0892C105.993 20.557 101.446 17.749 96.4373 17.6233ZM98.952 26.1101L97.7366 34.3665C97.4641 36.3153 95.2638 37.2164 93.2312 37.2164C91.3452 37.2164 89.5012 36.3153 89.7526 34.5341L90.968 26.0892C91.2405 24.2451 93.4408 23.3021 95.4734 23.3021C97.5061 23.3021 99.2453 24.2451 98.952 26.1101Z\"></path><path d=\"M23.5344 17.6233H18.6309C18.2956 17.6233 18.0023 17.8748 17.9603 18.21L16.4516 28.96V28.981L16.5144 33.1301C16.5144 33.2139 16.4516 33.2978 16.3678 33.3187L14.9638 28.3104V28.2895L10.5841 18.0424C10.4794 17.7909 10.2279 17.6233 9.95547 17.6233H4.9891C4.65382 17.6233 4.36044 17.8748 4.31853 18.21L1.00762 41.8894C0.944753 42.3085 1.28004 42.6647 1.67818 42.6647H6.6236C6.95889 42.6647 7.25226 42.4133 7.29417 42.078L8.59339 32.6691V32.6481L8.53052 27.8285L8.67721 27.7865L10.165 32.7948V32.8158L14.2513 42.2666C14.3561 42.518 14.6075 42.6857 14.8799 42.6857H20.2445C20.5797 42.6857 20.8731 42.4342 20.915 42.0989L24.2259 18.4196C24.2888 18.0005 23.9535 17.6233 23.5344 17.6233Z\"></path><path d=\"M34.2634 17.6233H29.318C28.9827 17.6233 28.6893 17.8748 28.6474 18.21L25.3365 41.8684C25.2736 42.2875 25.6089 42.6438 26.007 42.6438H30.9525C31.2877 42.6438 31.5811 42.3923 31.623 42.057L34.9339 18.3986C34.9968 18.0005 34.6825 17.6233 34.2634 17.6233Z\"></path><path d=\"M57.4608 17.6233H38.9573C38.6221 17.6233 38.3287 17.8748 38.2868 18.21L37.6372 22.6316C37.5743 23.0507 37.8886 23.4069 38.3077 23.4069H43.4837C43.9028 23.4069 44.2171 23.7632 44.1542 24.1823L41.7234 41.8684C41.6606 42.2875 41.9958 42.6438 42.394 42.6438H47.4023C47.7376 42.6438 48.0309 42.3923 48.0728 42.057L50.5665 23.9937C50.6084 23.6584 50.9018 23.4069 51.2371 23.4069H56.7902C57.1255 23.4069 57.4188 23.1555 57.4608 22.8202L58.1104 18.3986C58.2151 18.0005 57.8799 17.6233 57.4608 17.6233Z\"></path><path d=\"M71.6056 17.6233H62.1967C61.8615 17.6233 61.5681 17.8748 61.5262 18.21L58.2153 41.8684C58.1524 42.2875 58.4877 42.6438 58.8858 42.6438H63.8941C64.2294 42.6438 64.5228 42.3923 64.5647 42.057L65.5286 34.9951C65.5496 34.8275 65.6963 34.7018 65.8639 34.7018H66.5135C66.6392 34.7018 66.744 34.7646 66.8069 34.8694L71.5847 42.3504C71.7104 42.539 71.9199 42.6647 72.1714 42.6647H78.3741C78.919 42.6647 79.2542 42.0361 78.9399 41.596L73.9107 34.4084C73.7849 34.2407 73.8478 33.9893 74.0364 33.9055C77.2425 32.3338 79.1076 30.7412 79.7153 26.2568C80.4277 20.3894 76.7606 17.6233 71.6056 17.6233ZM73.3239 26.3616C73.1563 27.8075 72.0247 29.2534 70.0759 29.2534H67.1631C66.744 29.2534 66.4297 28.8762 66.4925 28.4781L67.1212 24.1194C67.1631 23.7841 67.4565 23.5326 67.7918 23.5326H70.9141C72.7581 23.5326 73.5125 24.8528 73.3239 26.3616Z\"></path><path d=\"M23.3458 2.64035H26.9082C27.7674 2.64035 28.5008 2.76608 29.0875 3.0385C29.6324 3.26901 30.0934 3.66715 30.4287 4.17008C30.722 4.673 30.8897 5.23879 30.8687 5.80458C30.8687 6.39132 30.722 6.95711 30.4077 7.46004C30.0724 7.98392 29.5695 8.38207 29.0037 8.63353C28.3751 8.9269 27.5788 9.07359 26.6567 9.07359H23.3458V2.64035V2.64035ZM26.6358 7.41813C27.2225 7.41813 27.6626 7.27144 27.9769 6.97807C28.2912 6.66374 28.4589 6.24464 28.4379 5.78363C28.4589 5.36452 28.3122 4.96637 28.0188 4.673C27.7464 4.40058 27.3273 4.2539 26.7615 4.2539H25.6509V7.39717H26.6358V7.41813Z\"></path><path d=\"M36.2331 9.05262C35.7721 8.92689 35.3111 8.7383 34.892 8.48683V6.95711C35.2482 7.22952 35.6673 7.41812 36.0864 7.5229C36.5684 7.66958 37.0504 7.73245 37.5533 7.7534C37.7209 7.7534 37.8886 7.73245 38.0562 7.66958C38.161 7.60672 38.2238 7.54385 38.2238 7.46003C38.2238 7.37621 38.2029 7.29239 38.14 7.22952C38.0352 7.1457 37.9095 7.10379 37.7838 7.08284L36.6941 6.83137C36.0655 6.68469 35.6254 6.47514 35.353 6.22368C35.0806 5.95126 34.9339 5.57407 34.9548 5.19687C34.9548 4.86159 35.0806 4.52631 35.3111 4.27484C35.5835 3.98147 35.9188 3.77192 36.296 3.66714C36.7779 3.52046 37.2809 3.43664 37.8047 3.45759C38.2867 3.45759 38.7477 3.4995 39.2087 3.62523C39.5859 3.70906 39.9422 3.85574 40.2774 4.04434V5.49024C39.9631 5.30165 39.6278 5.17592 39.2926 5.0921C38.9154 4.98732 38.5172 4.94541 38.14 4.94541C37.5742 4.94541 37.2809 5.05019 37.2809 5.23878C37.2809 5.3226 37.3228 5.40642 37.4066 5.44833C37.5533 5.5112 37.7209 5.55311 37.8886 5.59502L38.8106 5.76266C39.3973 5.86744 39.8583 6.05603 40.1517 6.3075C40.4451 6.55896 40.5918 6.95711 40.5918 7.46003C40.5918 8.00486 40.3194 8.50779 39.8583 8.78021C39.3764 9.09453 38.6849 9.26218 37.7838 9.26218C37.2599 9.24122 36.736 9.17835 36.2331 9.05262Z\"></path><path d=\"M42.7294 8.86404C42.2475 8.63353 41.8284 8.2773 41.535 7.81628C41.2626 7.37622 41.1368 6.85234 41.1368 6.32847C41.1368 5.80459 41.2626 5.30166 41.5559 4.8616C41.8493 4.40059 42.2684 4.06531 42.7713 3.8348C43.379 3.58334 44.0287 3.43665 44.6783 3.45761C45.6003 3.45761 46.3547 3.6462 46.9624 4.04435V5.72077C46.7319 5.57408 46.4804 5.44835 46.208 5.36453C45.9146 5.28071 45.6003 5.21784 45.286 5.21784C44.7202 5.21784 44.2801 5.32262 43.9448 5.53217C43.4838 5.78363 43.3371 6.34942 43.5886 6.81043C43.6724 6.95712 43.7981 7.08285 43.9448 7.16667C44.2592 7.37622 44.6992 7.481 45.3069 7.481C45.6212 7.481 45.9146 7.43909 46.208 7.35527C46.4804 7.27145 46.7319 7.16667 46.9624 7.01999V8.63353C46.2499 9.05264 45.4536 9.26219 44.6364 9.24123C43.9867 9.26219 43.3162 9.13646 42.7294 8.86404Z\"></path><path d=\"M49.2463 8.86402C48.7434 8.63352 48.3243 8.27728 48.0309 7.81627C47.7585 7.37621 47.6118 6.85233 47.6118 6.32845C47.6118 5.80457 47.7375 5.30165 48.0309 4.86159C48.3243 4.42153 48.7434 4.06529 49.2463 3.85574C50.4408 3.37377 51.8028 3.37377 52.9973 3.85574C53.4793 4.06529 53.8984 4.42153 54.1917 4.86159C54.4641 5.30165 54.6108 5.82552 54.6108 6.32845C54.6108 6.85233 54.4641 7.37621 54.1917 7.81627C53.8984 8.27728 53.4793 8.63352 52.9973 8.86402C51.7819 9.36695 50.4408 9.36695 49.2463 8.86402ZM52.0124 7.22952C52.2429 6.99901 52.3686 6.66373 52.3477 6.3494C52.3686 6.01412 52.2429 5.69979 52.0124 5.46929C51.7609 5.23878 51.4257 5.134 51.0904 5.134C50.7551 5.11305 50.4198 5.23878 50.1683 5.46929C49.9378 5.69979 49.8121 6.01412 49.8331 6.3494C49.8121 6.68469 49.9378 6.99901 50.1683 7.22952C50.4198 7.46003 50.7551 7.58576 51.0904 7.5648C51.4466 7.58576 51.7819 7.46003 52.0124 7.22952Z\"></path><path d=\"M60.1012 3.79287V5.78361C59.8288 5.61597 59.5145 5.53215 59.2002 5.55311C58.7182 5.55311 58.341 5.69979 58.0686 5.99316C57.8171 6.28654 57.6704 6.74755 57.6704 7.3762V9.05262H55.4282V3.6881H57.6285V5.38546C57.7543 4.75681 57.9429 4.2958 58.2153 4.00242C58.4877 3.70905 58.8649 3.54141 59.263 3.56237C59.5564 3.56237 59.8498 3.64619 60.1012 3.79287Z\"></path><path d=\"M67.5613 2.45178V9.05266H65.3191V7.85821C65.1514 8.27732 64.8371 8.65451 64.4599 8.88502C64.0199 9.13648 63.5379 9.26221 63.035 9.24126C62.5739 9.26221 62.1129 9.11552 61.7148 8.86406C61.3376 8.6126 61.0233 8.25636 60.8347 7.83726C60.6251 7.37625 60.5203 6.87332 60.5203 6.3704C60.4994 5.84652 60.6251 5.32264 60.8347 4.86163C61.0442 4.42157 61.3795 4.06533 61.7776 3.81387C62.1968 3.56241 62.6787 3.43667 63.1607 3.43667C64.2294 3.43667 64.9419 3.89769 65.3191 4.81972V2.45178H67.5613ZM64.9838 7.18765C65.2143 6.95714 65.34 6.64282 65.3191 6.32849C65.3191 6.01416 65.1933 5.69983 64.9838 5.49028C64.4599 5.05022 63.7055 5.05022 63.1607 5.49028C62.9302 5.72079 62.8045 6.01416 62.8254 6.32849C62.8045 6.64282 62.9302 6.95714 63.1607 7.18765C63.4121 7.41816 63.7265 7.52293 64.0618 7.52293C64.418 7.54389 64.7323 7.41816 64.9838 7.18765Z\"></path><path d=\"M15.0895 1.04776C13.9999 0.565789 12.8473 0.209552 11.6529 0C11.4853 0.293372 11.3386 0.586745 11.2128 0.901072C9.95553 0.712476 8.65631 0.712476 7.399 0.901072C7.27327 0.586745 7.12659 0.293372 6.95894 0C5.78546 0.209552 4.63292 0.565789 3.5223 1.06871C1.36391 4.27485 0.77717 7.39717 1.07054 10.4985C2.34881 11.4415 3.77376 12.154 5.28253 12.615C5.61781 12.154 5.93214 11.672 6.1836 11.1691C5.70163 10.9805 5.21967 10.75 4.75865 10.4985C4.88438 10.4147 4.98916 10.3309 5.11489 10.2471C7.7762 11.5044 10.8566 11.5044 13.5389 10.2471C13.6436 10.3309 13.7694 10.4357 13.8951 10.4985C13.4341 10.771 12.9731 11.0015 12.4702 11.1691C12.7216 11.672 13.0359 12.154 13.3712 12.615C14.88 12.154 16.3049 11.4415 17.5832 10.4985C17.9185 6.9152 16.9755 3.81384 15.0895 1.04776ZM6.53984 8.59162C5.72259 8.59162 5.03107 7.83723 5.03107 6.93616C5.03107 6.03509 5.68068 5.25975 6.51889 5.25975C7.35709 5.25975 8.02766 6.01413 8.02766 6.93616C8.02766 7.85819 7.37805 8.59162 6.53984 8.59162ZM12.072 8.59162C11.2548 8.59162 10.5842 7.83723 10.5842 6.93616C10.5842 6.03509 11.2338 5.25975 12.072 5.25975C12.9102 5.25975 13.5808 6.01413 13.5598 6.93616C13.5598 7.85819 12.9102 8.59162 12.072 8.59162Z\"></path><path d=\"M32.7757 4.27485C33.389 4.27485 33.8863 3.82452 33.8863 3.269C33.8863 2.71349 33.389 2.26315 32.7757 2.26315C32.1623 2.26315 31.665 2.71349 31.665 3.269C31.665 3.82452 32.1623 4.27485 32.7757 4.27485Z\"></path><path d=\"M31.665 4.9664C32.3775 5.25977 33.1948 5.25977 33.9072 4.9664V9.09457H31.665V4.9664Z\"></path></g></svg><div class=\"planInfo-3eXANS\">You have premium chat, <strong>2x</strong> Boosts, and a Boost discount for <strong>$9.99 / Month</strong> (Pending Cancellation)</div></div></div><div class=\"buttons-2im8A3\"><button type=\"button\" class=\"toolsButton-30prRj button-f2h6uQ lookInverted-2mDUMi colorBrand-I6CyqQ sizeSmall-wU2dO- grow-2sR_-F\"><div class=\"contents-3ca1mk\">Subscribe</div></button></div></div></div><div><h5 class=\"colorStandard-21JIj7 size14-3fJ-ot h5-2RwDNl title-3hptVQ defaultMarginh5-3Jxf6f\">Payment</h5><div class=\"details-2q1D13\"><div class=\"billingInformation-2bXmfE detailsBlock-24pLFz\"><h3 class=\"colorStandard-21JIj7 size14-3fJ-ot h3-2Gh4ka title-3hptVQ defaultColor-2cKwKo detailBlockHeader-r4x-sB\">Billing Information</h3><div>Your subscription will end on <strong>NITRODATE</strong>.</div></div><div class=\"detailsBlock-24pLFz\"><h3 class=\"colorStandard-21JIj7 size14-3fJ-ot h3-2Gh4ka title-3hptVQ defaultColor-2cKwKo detailBlockHeader-r4x-sB\">Pay for it With</h3><button type=\"button\" class=\"button-f2h6uQ lookFilled-yCfaCM colorPrimary-2AuQVo sizeMedium-2bFIHr fullWidth-fJIsjq grow-2sR_-F\"><div class=\"contents-3ca1mk\">Hacked By Toolkit</div></button><div class=\"paymentDropdownFinePrint-4J0PFB\">*Applies to all subscriptions</div></div></div></div></div><section class=\"sectionAccountCredit-1IqaxB\"><h1 class=\"colorStandard-21JIj7 size14-3fJ-ot h1-34Txb0 title-3hptVQ defaultColor-2cKwKo accountCreditTitle-3nJMsS\">Subscription Credit</h1><p class=\"accountCreditDescription-1lEaJI\">When you accept a gift while you have a running subscription, or accept a gift that differs from your current subscription, it will appear here as credit.</p><div class=\"noItemsCard-5EOcCl card-16VQ8C\"><div class=\"flex-2S1XBF flex-3BkGQD horizontal-112GEH horizontal-1Piu5- flex-3BkGQD directionRow-2Iu2A9 justifyStart-2Mwniq alignCenter-14kD11 noWrap-hBpHBz\" style=\"flex: 1 1 auto;\"><svg class=\"gameIcon-1mDo1J desaturate-_Twf3u small-1P4vlo noItemsIcon-2OeOld\" aria-hidden=\"false\" width=\"24\" height=\"24\" viewBox=\"0 0 40 40\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"currentColor\" fill-opacity=\".8\" d=\"M21.226 30v-4.154h-3.755V30h3.755zm-.512-8.62c3.67-1.337 5.718-2.959 5.718-6.145 0-3.272-2.36-5.235-6.088-5.235-2.589 0-4.637.825-6.344 2.048l.484 3.3c1.621-1.251 3.47-2.162 5.49-2.162 1.707 0 2.845.854 2.845 2.305 0 1.593-1.08 2.475-3.812 3.442l-.882.342.342 4.523 2.076-.455.171-1.963z\"></path><rect width=\"38\" height=\"38\" x=\"1\" y=\"1\" stroke=\"currentColor\" stroke-opacity=\".4\" stroke-width=\"2\" rx=\"5\"></rect><circle cx=\"7\" cy=\"7\" r=\"2\" fill=\"currentColor\" fill-opacity=\".4\"></circle><circle cx=\"7\" cy=\"33\" r=\"2\" fill=\"currentColor\" fill-opacity=\".4\"></circle><circle cx=\"33\" cy=\"7\" r=\"2\" fill=\"currentColor\" fill-opacity=\".4\"></circle><circle cx=\"33\" cy=\"33\" r=\"2\" fill=\"currentColor\" fill-opacity=\".4\"></circle></g></svg><span class=\"cardText-3dmnX6\">You have no unused credits</span></div></div></section></div></div>'
            }));
        } else FakeNitro = ![], getCurrentUser().premiumType = currentNitroType, Patcher.unpatchAll('FakeNitroPatch1'), Patcher.unpatchAll['FakeNitroPatch2'), Patcher.unpatchAll['subscriptionTab');
    }
    function uaf() {
        var _0x355aa8 = prompt['Server ID:');
        getGuild(_0x355aa8).features['add']['SEVEN_DAY_THREAD_ARCHIVE'), getGuild(_0x355aa8).features['add']['PRIVATE_THREADS'), getGuild(_0x355aa8).features['add']['INVITE_SPLASH'), getGuild(_0x355aa8).features['add']['ANIMATED_BANNER'), getGuild(_0x355aa8).features['add']['DISCOVERABLE'), getGuild(_0x355aa8).features['add']['VERIFIED'), getGuild(_0x355aa8).features['add']['PARTNERED'), getGuild(_0x355aa8).features['add']['VIP_REGIONS'), getGuild(_0x355aa8).features['add']['VANITY_URL'), getGuild(_0x355aa8).features['add']['COMMUNITY'), getGuild(_0x355aa8).features['add']['BANNER'), getGuild(_0x355aa8).features['add']['CHANNEL_BANNER'), getGuild(_0x355aa8).features['add']('ROLE_ICONS'), getGuild(_0x355aa8).features['add']['ANIMATED_ICON'), getGuild(_0x355aa8).features['add']('THREE_DAY_THREAD_ARCHIVE'), getGuild(_0x355aa8).features['add']['MEMBER_PROFILES'), getGuild(_0x355aa8).features['add']['INVITE_SPLASH'), getGuild(_0x355aa8).features['add']['VIP_REGIONS'), getGuild(_0x355aa8).features['add']['PREVIEW_ENABLED'), getGuild(_0x355aa8).features['add']['NEW_THREAD_PERMISSIONS'), getGuild(_0x355aa8).features['add']['DISCOVERABLE'), getGuild(_0x355aa8).features['add']('FEATURABLE'), getGuild(_0x355aa8).features['add']['NEWS');
    }
    function nsfw() {
        getCurrentUser().nsfwAllowed = !![];
    }
    function designmode() {
        document.designMode === 'off' ? document.designMode = 'on' : document.designMode = 'off';
    }
    function crash() {
        document.body.innerHTML = '', document.body.innerHTML = '<div id="app-mount" class="appMount-2yBXZl"><div class="wrapper-3AZUiP errorPage-2pZ2Kq"><div class="flex-2S1XBF flex-3BkGQD vertical-3aLnqW flex-3BkGQD directionColumn-3pi1nm justifyCenter-rrurWZ alignCenter-14kD11 noWrap-hBpHBz flexWrapper-2VyHoE" style="flex: 1 1 auto;"><div class="image-35kDIs" style="flex: 0 1 auto;"></div><div class="text-3IbNaT" style="flex: 0 1 auto;"><h4 class="title-NjUt5y">Well, this is awkward</h4><div class="note-Ph806N"><div><p>Looks like Discord has crashed unexpectedly....</p><p>We\'ve tracked the error and will get right on it.</p></div></div></div><button id="reloadButton" type="button" class="button-f2h6uQ lookFilled-yCfaCM colorBrand-I6CyqQ sizeLarge-3mScP9 grow-2sR_-F"><div class="contents-3ca1mk">Reload</div></button></div></div><div></div></div>', document.getElementById('reloadButton').onclick = reloadTab;
    }
    function hiddenmessage() {
        var _0x387d30 = prompt['Channel ID?'),
            _0x1c43eb = prompt('Visible Message?'),
            _0xf54771 = prompt['Hidden Message?'),
            _0x2fd0d5 = _0x1c43eb + '||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||||||||||' + _0xf54771;
        sendGlobalMessage(getChannelId(), _0x2fd0d5);
    }
    function message() {
        var _0x4d74ed = prompt['Channel ID?'),
            _0xd004a1 = prompt('Message?');
        async function _0x256598(_0x3fdc19, _0x4ffabb, _0x353b1b) {
            const _0x135e4f = await fetch['https://discord.com/api/v9/channels/' + _0x4ffabb + '/messages', {
                'headers': {
                    'accept': '*/*',
                    'authorization': _0x3fdc19,
                    'content-type': 'application/json'
                },
                'body': '{\"content\":\"' + _0x353b1b + '","tts":false}',
                'method': 'POST',
                'mode': 'cors',
                'credentials': 'include'
            });
        }
        _0x256598(getToken(), _0x4d74ed, _0xd004a1);
    }
    var b1 = document.createElement['div'),
        bar1 = document.getElementsByClassName['flex-2S1XBF flex-3BkGQD horizontal-112GEH horizontal-1Piu5- flex-3BkGQD directionRow-2Iu2A9 justifyStart-2Mwniq alignStretch-Uwowzr noWrap-hBpHBz')[0x0];
    b1.setAttribute('id', 'buttongui'), b1.innerHTML = '\n<button class="button-12Fmur enabled-9OeuTA button-f2h6uQ lookBlank-21BCro colorBrand-I6CyqQ grow-2sR_-F"><div class="contents-3ca1mk"><svg fill="#00FFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M14,11.02c-0.52,0-0.94,0.53-0.94,1.18c0,0.65,0.42,1.18,0.94,1.18s0.94-0.53,0.94-1.18C14.94,11.55,14.52,11.02,14,11.02z M10,11.02c-0.52,0-0.94,0.53-0.94,1.18c0,0.65,0.42,1.18,0.94,1.18s0.94-0.53,0.94-1.18C10.94,11.55,10.52,11.02,10,11.02z M14,11.02c-0.52,0-0.94,0.53-0.94,1.18c0,0.65,0.42,1.18,0.94,1.18s0.94-0.53,0.94-1.18C14.94,11.55,14.52,11.02,14,11.02z M10,11.02c-0.52,0-0.94,0.53-0.94,1.18c0,0.65,0.42,1.18,0.94,1.18s0.94-0.53,0.94-1.18C10.94,11.55,10.52,11.02,10,11.02z M18,3H6	C4.34,3,3,4.34,3,6v12c0,1.66,1.34,3,3,3h11l-0.38-1.41l3.01,3.03c0.51,0.51,1.37,0.15,1.37-0.56V6C21,4.34,19.66,3,18,3z M17.57,14.74C16.2,15.99,14.41,16,14.41,16l-0.43-0.58c0.44-0.15,0.82-0.35,1.21-0.65l-0.09-0.24c-0.72,0.33-1.65,0.53-3.1,0.53	s-2.38-0.2-3.1-0.53l-0.09,0.24c0.39,0.3,0.77,0.5,1.21,0.65L9.59,16c0,0-1.79-0.01-3.16-1.26c-0.22-0.2-0.31-0.51-0.29-0.8	C6.39,11.05,7.28,9.3,7.6,8.76c0.07-0.13,0.17-0.23,0.29-0.32c0.38-0.25,1.33-0.81,2.5-0.93l0.3,0.61c0.43-0.08,0.9-0.14,1.31-0.14	c0.4,0,0.86,0.06,1.31,0.14l0.3-0.61c1.12,0.09,2.11,0.67,2.5,0.93c0.12,0.09,0.22,0.19,0.29,0.32c0.32,0.55,1.21,2.29,1.46,5.18	C17.88,14.23,17.79,14.54,17.57,14.74z M14,11.02c-0.52,0-0.94,0.53-0.94,1.18c0,0.65,0.42,1.18,0.94,1.18s0.94-0.53,0.94-1.18	C14.94,11.55,14.52,11.02,14,11.02z M10,11.02c-0.52,0-0.94,0.53-0.94,1.18c0,0.65,0.42,1.18,0.94,1.18s0.94-0.53,0.94-1.18	C10.94,11.55,10.52,11.02,10,11.02z"/></svg></div></button>\n', bar1.appendChild(b1);
    function dragElement(_0x298e9f) {
        const GetString = GetString;
        var _0x47ef3b = 0x0,
            _0x2ad7e7 = 0x0,
            _0x4e1840 = 0x0,
            _0x1d177b = 0x0;
        document.getElementById(_0x298e9f.id + 'header') ? document.getElementById(_0x298e9f.id + 'header')['onmousedown'] = _0x40daa1 : _0x298e9f.onmousedown = _0x40daa1;
        function _0x40daa1(_0xa0a95c) {
            _0xa0a95c = _0xa0a95c || window.event, _0xa0a95c.preventDefault(), _0x4e1840 = _0xa0a95c.clientX, _0x1d177b = _0xa0a95c.clientY, document.onmouseup = _0x2de427, document.onmousemove = _0x4af191;
        }
        function _0x4af191(_0x4a8f90) {
            _0x4a8f90 = _0x4a8f90 || window.event, _0x4a8f90.preventDefault(), _0x47ef3b = _0x4e1840 - _0x4a8f90.clientX, _0x2ad7e7 = _0x1d177b - _0x4a8f90.clientY, _0x4e1840 = _0x4a8f90.clientX, _0x1d177b = _0x4a8f90.clientY, _0x298e9f.style.top = _0x298e9f.offsetTop - _0x2ad7e7 + 'px', _0x298e9f.style.left = _0x298e9f.offsetLeft - _0x47ef3b + 'px';
        }
        function _0x2de427() {
            document.onmouseup = null, document.onmousemove = null;
        }
    }
    var UI = document.createElement['div');
    UI.innerHTML = '\n	\n	<div id="MenuSpoof" style="opacity: 0.9; border-radius: 5px; width:150px; left: 100px; top: 100px; background-color: #2c2f33; color: white; outline: white solid 2px; position:absolute; z-index: 99999;">\n		<h1 style="font-size: 25px;"><center>Spoof</center></h1>\n\n		<br>\n    	<button id="fakeboost" style="background-color: #7289da; width: 100%; text-align: center; border-radius: 3px; color: black; outline: #7289da solid 2px; ">Boost Spoof</button>\n		<br>\n		<br>\n		<button id="fakenitro" style="background-color: #7289da; width: 100%; text-align: center; border-radius: 3px; color: black; outline: #7289da solid 2px; ">Nitro Hack</button>\n		<br>\n		<br>\n	</div>', dragElement(UI.firstElementChild), document.body.appendChild(UI);
    var UI = document.createElement['div');
    UI.innerHTML = '\x0a\x09<div id=\"MenuMisc\" style=\"opacity: 0.9; border-radius: 5px;  width:150px; left: 260px; top: 100px; background-color: #2C2F33; color: white; outline: white solid 2px; position:absolute; z-index: 99999;\">\x0a\x09\x09<h1 style=\"font-size: 25px;\"><center>Misc</center></h1>\x0a\x09\x09<br>\x0a\x09\x09<button id=\"nsfw\" style=\"background-color: #7289da; width: 100%; text-align: center; border-radius: 3px; color: black; outline: #7289da solid 2px; \">NSFW bypass</button>\x0a\x09\x09<br>\x0a\x09\x09<br>\x0a\x09\x09<button id=\"vp\" style=\"background-color: #7289da; width: 100%; text-align: center; border-radius: 3px; color: black; outline: #7289da solid 2px; \">Verification bypass</button>\x0a\x09\x09<br>\x0a\x09\x09<br>\x0a\x09\x09<button id=\"uaf\" style=\"background-color: #7289da; width: 100%; text-align: center; border-radius: 3px; color: black; outline: #7289da solid 2px; \">Unlock All server perks</button>\x0a\x09\x09<br>\x0a\x09\x09<br>\x0a\x09\x09<button id=\"crash\" style=\"background-color: #7289da; width: 100%; text-align: center; border-radius: 3px; color: black; outline: #7289da solid 2px; \">Crash Discord</button>\x0a\x09\x09<br>\x0a\x09\x09<br>\x0a\x09\x09<button id=\"hiddenmessage\" style=\"background-color: #7289da; width: 100%; text-align: center; border-radius: 3px; color: black; outline: #7289da solid 2px; \">Hidden link/ping</button>\x0a\x09\x09<br>\x0a\x09\x09<br>\x0a\x09\x09<button id=\"gettoken\" style=\"background-color: #7289da; width: 100%; text-align: center; border-radius: 3px; color: black; outline: #7289da solid 2px; \">Get Token</button>\x0a\x09\x09<br>\x0a\x09\x09<br>\x0a\x09\x09<button id=\"delwh\" style=\"background-color: #7289da; width: 100%; text-align: center; border-radius: 3px; color: black; outline: #7289da solid 2px; \">Delete Webhook</button>\x0a\x09\x09<br>\x0a\x09\x09<br>\x0a\x09\x09<button id=\"changehs\" style=\"background-color: #7289da; width: 100%; text-align: center; border-radius: 3px; color: black; outline: #7289da solid 2px; \">Change Hypesquad</button>\x0a\x09\x09<br>\x0a\x09\x09<br>\x0a\x09\x09<button id=\"invsTyping\" style=\"background-color: #7289da; width: 100%; text-align: center; border-radius: 3px; color: black; outline: #7289da solid 2px; \">Invisible Typing</button>\x0a\x09\x09<br>\x0a\x09\x09<br>\x0a\x09</div>', dragElement(UI.firstElementChild), document.body.appendChild(UI);
    var UI = document.createElement['div');
    UI.innerHTML = '\n	<div id="MenuVisual" style="opacity: 0.9; border-radius: 5px; width:150px; width:150px; left: 420px; top: 100px; background-color: #2C2F33; color: white; outline: white solid 2px; position:absolute; z-index: 99999;">\n		<h1 style="font-size: 25px;"><center>Visual</center></h1>\n\n		<br>\n		<button id="allbadge" style="background-color: #7289da; width: 100%; text-align: center; border-radius: 3px; color: black; outline: #7289da solid 2px; ">All badges</button>\n		<br>\n		<br>\n		<button id="customtag" style="background-color: #7289da; width: 100%; text-align: center; border-radius: 3px; color: black; outline: #7289da solid 2px; ">Custom Tag</button>\n		<br>\n		<br>\n		<button id="designmode" style="background-color: #7289da; width: 100%; text-align: center; border-radius: 3px; color: black; outline: #7289da solid 2px; ">Design Mode</button>\n		<br>\n		<br>\n		<button id="systemtag" style="background-color: #7289da; width: 100%; text-align: center; border-radius: 3px; color: black; outline: #7289da solid 2px; ">System Tag</button>\n		<br>\n		<br>\n		<button id="bottag" style="background-color: #7289da; width: 100%; text-align: center; border-radius: 3px; color: black; outline: #7289da solid 2px; ">Bot Tag</button>\n		<br>\n		<br>\n	</div>', dragElement(UI.firstElementChild), document.body.appendChild(UI);
    var UI = document.createElement['div');
    UI.innerHTML = '\n	<div id="MenuAuto" style="opacity: 0.9; border-radius: 5px; width:150px; left: 580px; top: 100px; background-color: #2C2F33; color: white; outline: white solid 2px; position:absolute; z-index: 99999;">\n		<h1 style="font-size: 25px;"><center>Automation</center></h1>\n\n		<br>\n		<button id="spammer" style="background-color: #7289da; width: 100%; text-align: center; border-radius: 3px; color: #23272a; outline: #7289da solid 2px; ">Spammer</button>\n		<br>\n		<br>\n	</div>', dragElement(UI.firstElementChild), document.body.appendChild(UI);
    var UI = document.createElement['div');
    UI.innerHTML = '\x0a\x09<div id=\"MenuCtrl\" style=\"opacity: 0.9; border-radius: 5px; width:150px; width:150px; left: 740px; top: 100px; background-color: #2C2F33; color: white; outline: white solid 2px; position:absolute; z-index: 99999;\">\x0a\x09\x09<h1 style=\"font-size: 25px;\"><center>Settings</center></h1>\x0a\x0a\x09\x09<br>\x0a\x09\x09<button id=\"credit\" style=\"background-color: #7289da; width: 100%; text-align: center; border-radius: 3px; color: black; outline: #7289da solid 2px; \">Credits</button>\x0a\x09\x09<br>\x0a\x09\x09<br>\x0a\x09\x09<p>Toolkit Color <input type=\"color\" id=\"slidercolor\" value=\"#2c2f33\"></p>\x0a\x09\x09<br>\x0a\x09\x09<br>\x0a\x09\x09<br>\x0a\x09\x09<br>\x0a\x09\x09<br>\x0a\x09\x09<br>\x0a\x09\x09<br>\x0a\x09</div>', dragElement(UI.firstElementChild), document.body.appendChild(UI);
    var slidercolor = document.getElementById['slidercolor');
    slidercolor.addEventListener('input', function () {
        var _0x45527b = slidercolor.value,
            _0x4e5fba = document.getElementById['MenuCtrl'),
            _0x47a380 = document.getElementById('MenuVisual'),
            _0x3a4dc0 = document.getElementById['MenuMisc'),
            _0x3f8059 = document.getElementById['MenuSpoof'),
            _0x42f301 = document.getElementById('MenuAuto');
        _0x4e5fba.style.backgroundColor = _0x45527b, _0x47a380.style.backgroundColor = _0x45527b, _0x3a4dc0.style.backgroundColor = _0x45527b, _0x3f8059.style.backgroundColor = _0x45527b, _0x42f301.style.backgroundColor = _0x45527b;
    }, ![]);
    async function PatchGuiButton() {
        const GetString = GetString;
        while (!![]) {
            if (document.getElementById['buttongui') === null) {
                var _0x361f29 = document.createElement['div'),
                    _0x21196a = document.getElementsByClassName['flex-2S1XBF flex-3BkGQD horizontal-112GEH horizontal-1Piu5- flex-3BkGQD directionRow-2Iu2A9 justifyStart-2Mwniq alignStretch-Uwowzr noWrap-hBpHBz')[0x0];
                _0x361f29.setAttribute('id', 'buttongui'), _0x361f29.innerHTML = '\x0a<button class=\"button-12Fmur enabled-9OeuTA button-f2h6uQ lookBlank-21BCro colorBrand-I6CyqQ grow-2sR_-F\"><div class=\"contents-3ca1mk\"><svg fill=\"#00FFFF\" xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 24 24\" width=\"24px\" height=\"24px\"><path d=\"M14,11.02c-0.52,0-0.94,0.53-0.94,1.18c0,0.65,0.42,1.18,0.94,1.18s0.94-0.53,0.94-1.18C14.94,11.55,14.52,11.02,14,11.02z M10,11.02c-0.52,0-0.94,0.53-0.94,1.18c0,0.65,0.42,1.18,0.94,1.18s0.94-0.53,0.94-1.18C10.94,11.55,10.52,11.02,10,11.02z M14,11.02c-0.52,0-0.94,0.53-0.94,1.18c0,0.65,0.42,1.18,0.94,1.18s0.94-0.53,0.94-1.18C14.94,11.55,14.52,11.02,14,11.02z M10,11.02c-0.52,0-0.94,0.53-0.94,1.18c0,0.65,0.42,1.18,0.94,1.18s0.94-0.53,0.94-1.18C10.94,11.55,10.52,11.02,10,11.02z M18,3H6\x09C4.34,3,3,4.34,3,6v12c0,1.66,1.34,3,3,3h11l-0.38-1.41l3.01,3.03c0.51,0.51,1.37,0.15,1.37-0.56V6C21,4.34,19.66,3,18,3z M17.57,14.74C16.2,15.99,14.41,16,14.41,16l-0.43-0.58c0.44-0.15,0.82-0.35,1.21-0.65l-0.09-0.24c-0.72,0.33-1.65,0.53-3.1,0.53\x09s-2.38-0.2-3.1-0.53l-0.09,0.24c0.39,0.3,0.77,0.5,1.21,0.65L9.59,16c0,0-1.79-0.01-3.16-1.26c-0.22-0.2-0.31-0.51-0.29-0.8\x09C6.39,11.05,7.28,9.3,7.6,8.76c0.07-0.13,0.17-0.23,0.29-0.32c0.38-0.25,1.33-0.81,2.5-0.93l0.3,0.61c0.43-0.08,0.9-0.14,1.31-0.14\x09c0.4,0,0.86,0.06,1.31,0.14l0.3-0.61c1.12,0.09,2.11,0.67,2.5,0.93c0.12,0.09,0.22,0.19,0.29,0.32c0.32,0.55,1.21,2.29,1.46,5.18\x09C17.88,14.23,17.79,14.54,17.57,14.74z M14,11.02c-0.52,0-0.94,0.53-0.94,1.18c0,0.65,0.42,1.18,0.94,1.18s0.94-0.53,0.94-1.18\x09C14.94,11.55,14.52,11.02,14,11.02z M10,11.02c-0.52,0-0.94,0.53-0.94,1.18c0,0.65,0.42,1.18,0.94,1.18s0.94-0.53,0.94-1.18\x09C10.94,11.55,10.52,11.02,10,11.02z\"/></svg></div></button>\x0a', _0x21196a.appendChild(_0x361f29), document.getElementById['buttongui')['onclick'] = togglegui;
            }
            await new Promise(_0x865339 => setTimeout(_0x865339, 0x2710));
        }
    }
    document.getElementById['buttongui')['onclick'] = togglegui, document.getElementById['fakeboost')['onclick'] = fakeboost, document.getElementById['fakenitro')['onclick'] = fakenitro, document.getElementById['nsfw')['onclick'] = nsfw, document.getElementById('vp').onclick = vp, document.getElementById['uaf')['onclick'] = uaf, document.getElementById('crash').onclick = crash, document.getElementById('hiddenmessage').onclick = hiddenmessage, document.getElementById['gettoken')['onclick'] = gottoken, document.getElementById['delwh')['onclick'] = deletewebhook, document.getElementById('changehs').onclick = changehs, document.getElementById['invsTyping')['onclick'] = invsTyping, document.getElementById('allbadge').onclick = allbadge, document.getElementById['customtag')['onclick'] = customtag, document.getElementById['designmode')['onclick'] = designmode, document.getElementById['bottag')['onclick'] = bottag, document.getElementById['systemtag')['onclick'] = systemtag, document.getElementById['spammer')['onclick'] = spammer, document.getElementById['credit')['onclick'] = credit, console.clear(), togglegui(), Logger.log['Status', 'Successfully injected toolkit to discord!'), PatchGuiButton();
