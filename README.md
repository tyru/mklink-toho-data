mklink-toho-data
================

Make links to local dir, or backup existing data to local dir.


config.js
---------

Edit config.js if existing config doesn't fit your environment.


mklink-toho-data.wsf
--------------------

Make links(file:hardlink, dir:junction) in installed Toho data
to `SAVEDATA_DIR`.<br />
This also backs up existing data, if they exist.


**Please start cmd.exe as Administrator privileges to write to `C:\Program Files (x86)`.**

1. Open start menu by Win key.
2. Type "cmd".
3. Ctrl+Shift+Enter to start as Administrator privileges.


backup-toho-data.wsf
--------------------

This backs up existing data, if they exist.
