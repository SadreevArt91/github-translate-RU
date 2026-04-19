# -*- coding: utf-8 -*-
import os, json, io, re

DICT_DIR = "/sessions/clever-affectionate-brown/mnt/Гитхаб русик/src/dictionary"

STR = r"'((?:\\.|[^'\\])*)'|\"((?:\\.|[^\"\\])*)\""
pair_re = re.compile(r"(?:" + STR + r")\s*:")

def unescape(raw):
    out = []
    i = 0
    mapping = {"n":"\n","t":"\t","r":"\r",'"':'"',"'":"'","\\":"\\","/":"/"}
    while i < len(raw):
        ch = raw[i]
        if ch == "\\" and i + 1 < len(raw):
            nxt = raw[i+1]
            if nxt == "u" and i + 5 < len(raw):
                try:
                    out.append(chr(int(raw[i+2:i+6], 16)))
                    i += 6
                    continue
                except Exception:
                    pass
            out.append(mapping.get(nxt, nxt))
            i += 2
        else:
            out.append(ch)
            i += 1
    return "".join(out)

keys = set()
for fn in sorted(os.listdir(DICT_DIR)):
    if not fn.endswith(".js"):
        continue
    with io.open(os.path.join(DICT_DIR, fn), "r", encoding="utf-8") as f:
        js = f.read()
    for m in pair_re.finditer(js):
        raw = m.group(1) if m.group(1) is not None else m.group(2)
        keys.add(unescape(raw))

print("unique keys:", len(keys))
with io.open("/sessions/clever-affectionate-brown/mnt/outputs/dict_keys.json", "w", encoding="utf-8") as f:
    json.dump(sorted(keys), f, ensure_ascii=False)
print("saved")
