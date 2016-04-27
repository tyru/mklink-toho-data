
var SAVEDATA_DIR = '%USERPROFILE%\\Dropbox\\config\\東方';
var ENUM_KEYS = ["replay", "score", "config", "bestshot", "datadir"];

var PROGRAM_FILES = 'C:\\Program Files';
var PROGRAM_FILES_x86 = 'C:\\Program Files (x86)';

var PROG_INFO = {
    '東方紅魔郷': {
        // 紅魔郷は64bitだろうがおかまいなしに
        // 「C:\Program Files」にインストールされる。
        'dir': PROGRAM_FILES + '\\東方紅魔郷'
        , 'replay': {
            'type': 'dir'
            , 'name': 'replay'
        }
        , 'score': {
            'type': 'file'
            , 'name': 'score.dat'
        }
        , 'config': {
            'type': 'file'
            , 'name': '東方紅魔郷.cfg'
        }
    }
    , '東方妖々夢': {
        'dir': PROGRAM_FILES_x86 + '\\東方妖々夢'
        , 'replay': {
            'type': 'dir'
            , 'name': 'replay'
        }
        , 'score': {
            'type': 'file'
            , 'name': 'score.dat'
        }
        , 'config': {
            'type': 'file'
            , 'name': 'th07.cfg'
        }
    }
    , '東方永夜抄': {
        'dir': PROGRAM_FILES_x86 + '\\東方永夜抄'
        , 'replay': {
            'type': 'dir'
            , 'name': 'replay'
        }
        , 'score': {
            'type': 'file'
            , 'name': 'score.dat'
        }
        , 'config': {
            'type': 'file'
            , 'name': 'th08.cfg'
        }
    }
    , '東方花映塚': {
        'dir': PROGRAM_FILES_x86 + '\\東方花映塚'
        , 'replay': {
            'type': 'dir'
            , 'name': 'replay'
        }
        , 'score': {
            'type': 'file'
            , 'name': 'score.dat'
        }
        , 'config': {
            'type': 'file'
            , 'name': 'th09.cfg'
        }
    }
    , '東方文花帖': {
        'dir': PROGRAM_FILES_x86 + '\\東方文花帖'
        , 'replay': {
            'type': 'dir'
            , 'name': 'replay'
        }
        , 'score': {
            'type': 'file'
            , 'name': 'scoreth095.dat'
        }
        , 'config': {
            'type': 'file'
            , 'name': 'th095.cfg'
        }
        , 'bestshot': {
            'type': 'dir'
            , 'name': 'bestshot'
        }
    }
    , '東方風神録': {
        'dir': PROGRAM_FILES_x86 + '\\上海アリス幻樂団\\東方風神録'
        , 'replay': {
            'type': 'dir'
            , 'name': 'replay'
        }
        , 'score': {
            'type': 'file'
            , 'name': 'scoreth10.dat'
        }
        , 'config': {
            'type': 'file'
            , 'name': 'th10.cfg'
        }
    }
    , '東方地霊殿': {
        'dir': PROGRAM_FILES_x86 + '\\上海アリス幻樂団\\東方地霊殿'
        , 'replay': {
            'type': 'dir'
            , 'name': 'replay'
        }
        , 'score': {
            'type': 'file'
            , 'name': 'scoreth11.dat'
        }
        , 'config': {
            'type': 'file'
            , 'name': 'th11.cfg'
        }
    }
    , '東方星蓮船': {
        'dir': PROGRAM_FILES_x86 + '\\上海アリス幻樂団\\東方星蓮船'
        , 'replay': {
            'type': 'dir'
            , 'name': 'replay'
        }
        , 'score': {
            'type': 'file'
            , 'name': 'scoreth12.dat'
        }
        , 'config': {
            'type': 'file'
            , 'name': 'th12.cfg'
        }
    }
    , 'ダブルスポイラー': {
        'dir': PROGRAM_FILES_x86 + '\\上海アリス幻樂団\\ダブルスポイラー'
        , 'datadir': {
            'type': 'dir'
            , 'name': '%APPDATA%\\ShanghaiAlice\\th125'
        }
    }
    , '妖精大戦争': {
        'dir': PROGRAM_FILES_x86 + '\\上海アリス幻樂団\\妖精大戦争'
        , 'datadir': {
            'type': 'dir'
            , 'name': '%APPDATA%\\ShanghaiAlice\\th128'
        }
    }
    , '東方神霊廟': {
        'dir': PROGRAM_FILES_x86 + '\\上海アリス幻樂団\\東方神霊廟'
        , 'datadir': {
            'type': 'dir'
            , 'name': '%APPDATA%\\ShanghaiAlice\\th13'
        }
    }
    , '東方輝針城': {
        'dir': PROGRAM_FILES_x86 + '\\上海アリス幻樂団\\東方輝針城'
        , 'datadir': {
            'type': 'dir'
            , 'name': '%APPDATA%\\ShanghaiAlice\\th14'
        }
    }
};
