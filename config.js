

var SAVEDATA_DIR = "%USERPROFILE%\\Dropbox\\����savedata"

var PROGRAM_FILES = 'C:\\Program Files'
var oFSO = new ActiveXObject("Scripting.FileSystemObject");
// �uC:\Program Files (x86)�v�t�H���_�����݂���΂�������Q��(�������g����������)�B
if (oFSO.folderExists(PROGRAM_FILES + " (x86)")) {
    PROGRAM_FILES += " (x86)";
}

var PROG_INFO = {
    '�����g����': {
        // �g������64bit���낤�������܂��Ȃ���
        // �uC:\Program Files�v�ɃC���X�g�[�������B
        'dir': 'C:\\Program Files\\�����g����'
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
            , 'name': '�����g����.cfg'
        }
    }
    , '�����d�X��': {
        'dir': PROGRAM_FILES + '\\�����d�X��'
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
    , '�����i�鏴': {
        'dir': PROGRAM_FILES + '\\�����i�鏴'
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
    , '�����ԉf��': {
        'dir': PROGRAM_FILES + '\\�����ԉf��'
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
    , '�������Ԓ�': {
        'dir': PROGRAM_FILES + '\\�������Ԓ�'
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
    , '�������_�^': {
        'dir': PROGRAM_FILES + '\\��C�A���X���ْc\\�������_�^'
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
    , '�����n��a': {
        'dir': PROGRAM_FILES + '\\��C�A���X���ْc\\�����n��a'
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
    , '�������@�D': {
        'dir': PROGRAM_FILES + '\\��C�A���X���ْc\\�������@�D'
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
    , '�_�u���X�|�C���[': {
        'dir': PROGRAM_FILES + '\\��C�A���X���ْc\\�_�u���X�|�C���['
        , 'datadir': {
            'type': 'dir'
            , 'name': '%APPDATA%\\ShanghaiAlice\\th125'
        }
    }
    , '�d����푈': {
        'dir': PROGRAM_FILES + '\\��C�A���X���ْc\\�d����푈'
        , 'datadir': {
            'type': 'dir'
            , 'name': '%APPDATA%\\ShanghaiAlice\\th128'
        }
    }
    , '�����_��_': {
        'dir': PROGRAM_FILES + '\\��C�A���X���ْc\\�����_��_'
        , 'datadir': {
            'type': 'dir'
            , 'name': '%APPDATA%\\ShanghaiAlice\\th13'
        }
    }
    , '�����P�j��': {
        'dir': PROGRAM_FILES + '\\��C�A���X���ْc\\�����P�j��'
        , 'datadir': {
            'type': 'dir'
            , 'name': '%APPDATA%\\ShanghaiAlice\\th14'
        }
    }
};
var ENUM_KEYS = ["replay", "score", "config", "bestshot", "datadir"];
