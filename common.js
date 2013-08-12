

function runBuiltinCmd(args) {
    return runCmd(['cmd', '/q', '/c'].concat(args));
}

function runCmd(args) {
    var cmdline = '';
    for (var i in args) {
        if (cmdline !== '') cmdline += ' ';
        cmdline += shellEscape(args[i]);
    }
    var WS_NOTVISIVLE = 0;    // ウインドウ非表示
    var wait = true;          // 実行が終わるまで待つ
    // WScript.Echo(cmdline);
    return oShell.run(cmdline, WS_NOTVISIVLE, wait);
}

function pathExists(path) {
    return oFSO.fileExists(path) || oFSO.folderExists(path)
}

function shellEscape(arg) {
    if (arg.indexOf(' ') != -1) {
        arg = '"' + arg + '"';
    }
    return arg;
}

function showMsg(results, titleMsg, msgBuilder) {
    var msg = '';
    for (var i in results) {
        if (msg === '') {
            msg = titleMsg;
        }
        msg = msgBuilder(msg, results[i]);
    }
    if (msg !== '') {
        WScript.Echo(msg);
    }
}

function userIsAdministrators() {
    return !runBuiltinCmd("net user %USERNAME% | findstr Administrators");
}

function shallowCopy(obj) {
    var copy = {};
    for (var k in obj) {
        copy[k] = obj[k];
    }
    return copy;
}
