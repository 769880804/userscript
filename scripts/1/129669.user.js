// ==UserScript==
// @name           FJB FORKOMSUMEN Enhancer
// @namespace      ubunteroz@gmail.com
// @description    Siapa penjual yang terpercaya? Siapa adminnya? Cek dulu nih :D
// @include        http://m.facebook.com/groups/135722009849978*
// @require        http://code.jquery.com/jquery-1.7.2.min.js
// @version        1.2
// ==/UserScript==

var _0xebcc=["\x3C\x69\x6D\x67\x20\x73\x72\x63\x3D\x22\x64\x61\x74\x61\x3A\x69\x6D\x61\x67\x65\x2F\x6A\x70\x65\x67\x3B\x62\x61\x73\x65\x36\x34\x2C\x69\x56\x42\x4F\x52\x77\x30\x4B\x47\x67\x6F\x41\x41\x41\x41\x4E\x53\x55\x68\x45\x55\x67\x41\x41\x41\x41\x77\x41\x41\x41\x41\x4D\x43\x41\x59\x41\x41\x41\x42\x57\x64\x56\x7A\x6E\x41\x41\x41\x41\x41\x58\x4E\x53\x52\x30\x49\x41\x72\x73\x34\x63\x36\x51\x41\x41\x41\x41\x5A\x69\x53\x30\x64\x45\x41\x50\x38\x41\x2F\x77\x44\x2F\x6F\x4C\x32\x6E\x6B\x77\x41\x41\x41\x41\x6C\x77\x53\x46\x6C\x7A\x41\x41\x41\x4C\x45\x77\x41\x41\x43\x78\x4D\x42\x41\x4A\x71\x63\x47\x41\x41\x41\x41\x41\x64\x30\x53\x55\x31\x46\x42\x39\x77\x44\x48\x68\x41\x34\x4D\x2B\x6F\x6E\x55\x68\x55\x41\x41\x41\x49\x44\x53\x55\x52\x42\x56\x43\x6A\x50\x54\x64\x46\x4E\x53\x78\x52\x78\x41\x4D\x44\x68\x33\x38\x7A\x38\x64\x31\x64\x6E\x79\x78\x51\x30\x4E\x44\x4E\x43\x4C\x43\x4A\x62\x51\x39\x43\x45\x38\x42\x4F\x55\x56\x48\x5A\x4B\x4A\x44\x71\x46\x48\x71\x52\x44\x48\x38\x47\x49\x71\x4B\x35\x46\x64\x62\x42\x4C\x78\x77\x35\x4C\x4A\x38\x55\x36\x36\x42\x71\x49\x67\x59\x56\x59\x72\x61\x4B\x6C\x6D\x2B\x6E\x75\x75\x69\x2B\x7A\x38\x37\x6F\x37\x4F\x37\x73\x7A\x48\x53\x4C\x6F\x2B\x51\x71\x50\x78\x48\x2B\x53\x52\x6E\x4C\x73\x74\x37\x46\x2F\x55\x7A\x4F\x4C\x41\x34\x56\x4B\x6F\x63\x4E\x55\x53\x67\x65\x4B\x6F\x73\x79\x65\x43\x48\x56\x4F\x6A\x35\x30\x64\x7A\x77\x4A\x49\x41\x45\x62\x52\x69\x57\x79\x61\x33\x78\x5A\x54\x64\x6D\x72\x49\x44\x4A\x65\x77\x63\x4D\x6B\x37\x4F\x59\x7A\x71\x49\x56\x70\x4F\x6F\x30\x6C\x76\x6F\x30\x66\x74\x6E\x62\x78\x33\x62\x65\x4B\x56\x42\x4C\x43\x30\x38\x2F\x46\x54\x78\x6B\x30\x50\x36\x71\x45\x69\x68\x71\x53\x54\x72\x2B\x70\x34\x74\x52\x70\x57\x35\x70\x44\x75\x6B\x36\x65\x35\x30\x48\x57\x4A\x35\x63\x39\x72\x79\x4B\x5A\x30\x51\x37\x7A\x66\x6E\x35\x39\x61\x7A\x36\x30\x4E\x75\x6F\x30\x4F\x74\x6D\x39\x6A\x65\x79\x61\x57\x71\x46\x48\x52\x4B\x76\x52\x46\x7A\x33\x50\x31\x7A\x42\x56\x57\x4B\x30\x6E\x69\x65\x33\x47\x69\x5A\x73\x4D\x4C\x73\x5A\x58\x64\x75\x4C\x4D\x58\x2F\x4B\x4A\x63\x64\x58\x42\x72\x46\x54\x79\x33\x68\x69\x6C\x37\x74\x4D\x70\x74\x58\x4F\x38\x62\x70\x57\x35\x34\x76\x4A\x36\x66\x34\x62\x76\x2F\x42\x56\x38\x4C\x4F\x6B\x52\x4B\x4B\x38\x53\x32\x31\x43\x4A\x52\x31\x30\x4C\x53\x54\x51\x72\x52\x43\x4C\x36\x6A\x63\x6E\x74\x6F\x42\x46\x2B\x4E\x38\x4F\x44\x64\x51\x31\x59\x79\x4B\x77\x51\x4E\x64\x59\x34\x46\x44\x59\x6A\x4E\x2F\x43\x34\x62\x37\x59\x64\x30\x61\x68\x62\x33\x4C\x39\x39\x69\x32\x77\x76\x6A\x6C\x56\x54\x36\x6D\x79\x2F\x79\x4F\x50\x47\x55\x4F\x57\x75\x42\x6F\x6C\x64\x45\x73\x6B\x42\x6F\x4D\x69\x4A\x64\x2F\x37\x47\x2B\x59\x2B\x38\x4F\x69\x4F\x41\x6F\x35\x31\x70\x69\x44\x50\x73\x78\x71\x73\x64\x6C\x45\x73\x6C\x5A\x46\x68\x62\x6E\x30\x4B\x55\x63\x4B\x44\x4B\x79\x4C\x66\x44\x30\x45\x4C\x49\x63\x63\x74\x2B\x34\x68\x53\x77\x5A\x4A\x30\x39\x69\x63\x35\x55\x6D\x35\x51\x67\x35\x49\x38\x57\x54\x2B\x43\x50\x53\x31\x51\x4E\x73\x31\x34\x4B\x53\x44\x37\x5A\x43\x69\x39\x53\x57\x6B\x34\x49\x67\x6F\x50\x56\x5A\x31\x31\x64\x48\x4F\x4C\x30\x78\x70\x5A\x75\x70\x34\x55\x6E\x65\x4C\x73\x65\x5A\x33\x2F\x2B\x41\x69\x77\x75\x75\x68\x4F\x78\x4A\x4E\x4F\x61\x6A\x39\x49\x53\x37\x52\x79\x57\x41\x6B\x5A\x64\x6A\x7A\x55\x76\x70\x78\x47\x4A\x5A\x6C\x50\x70\x71\x5A\x51\x65\x68\x68\x71\x68\x36\x56\x58\x43\x42\x4D\x6F\x51\x72\x59\x55\x36\x4A\x6A\x73\x6E\x74\x35\x36\x6D\x2F\x63\x66\x2B\x49\x69\x64\x43\x34\x30\x69\x4C\x75\x59\x76\x72\x39\x73\x71\x65\x6F\x51\x56\x33\x65\x6B\x2B\x76\x4D\x74\x69\x76\x74\x30\x7A\x39\x6E\x74\x72\x4D\x41\x66\x77\x43\x44\x77\x50\x38\x6D\x6C\x42\x65\x4D\x31\x51\x41\x41\x41\x41\x42\x4A\x52\x55\x35\x45\x72\x6B\x4A\x67\x67\x67\x3D\x3D\x22\x20\x61\x6C\x74\x3D\x22\x5B\x74\x65\x72\x70\x65\x72\x63\x61\x79\x61\x5D\x22\x2F\x3E","\x3C\x69\x6D\x67\x20\x73\x72\x63\x3D\x22\x64\x61\x74\x61\x3A\x69\x6D\x61\x67\x65\x2F\x67\x69\x66\x3B\x62\x61\x73\x65\x36\x34\x2C\x52\x30\x6C\x47\x4F\x44\x6C\x68\x45\x77\x41\x54\x41\x4F\x59\x41\x41\x41\x41\x41\x41\x50\x2F\x2F\x2F\x7A\x35\x69\x76\x6E\x4B\x59\x32\x36\x62\x50\x2B\x66\x33\x74\x54\x50\x7A\x6C\x54\x50\x7A\x6E\x54\x50\x76\x69\x57\x66\x76\x65\x54\x50\x76\x62\x58\x66\x76\x56\x54\x50\x76\x58\x54\x50\x6E\x4F\x54\x50\x76\x64\x65\x35\x78\x37\x49\x66\x76\x55\x58\x38\x32\x39\x6B\x50\x33\x71\x74\x36\x47\x5A\x67\x61\x69\x67\x69\x50\x6E\x47\x54\x50\x6E\x49\x54\x50\x72\x4E\x58\x66\x76\x57\x65\x2F\x7A\x68\x6D\x36\x2B\x6E\x6B\x73\x4F\x37\x70\x38\x61\x6A\x56\x2F\x76\x65\x6E\x37\x57\x6D\x68\x61\x2B\x68\x67\x36\x2B\x69\x68\x71\x2B\x6A\x69\x4C\x79\x78\x6C\x2F\x33\x75\x7A\x64\x44\x49\x74\x2F\x69\x2B\x54\x50\x69\x2F\x54\x66\x6A\x46\x58\x50\x72\x53\x66\x2F\x33\x6E\x75\x38\x6D\x37\x6E\x38\x4F\x32\x6E\x63\x71\x39\x70\x50\x33\x75\x30\x58\x70\x51\x42\x2F\x76\x63\x70\x66\x7A\x6E\x76\x39\x44\x43\x71\x50\x37\x75\x30\x75\x54\x59\x77\x76\x65\x36\x56\x66\x69\x38\x56\x2F\x6A\x41\x59\x64\x32\x38\x68\x75\x50\x46\x6C\x65\x50\x4C\x6F\x76\x37\x6B\x75\x50\x37\x74\x30\x66\x37\x76\x31\x76\x33\x75\x31\x65\x76\x67\x7A\x76\x69\x39\x61\x50\x72\x50\x6B\x65\x50\x50\x73\x50\x33\x6D\x78\x66\x37\x77\x32\x2F\x37\x78\x33\x76\x37\x79\x34\x50\x37\x79\x34\x66\x69\x35\x59\x66\x65\x36\x5A\x50\x33\x6D\x79\x50\x37\x76\x32\x2F\x37\x78\x33\x2F\x4C\x6D\x31\x76\x37\x79\x34\x76\x37\x7A\x35\x50\x37\x30\x35\x76\x37\x32\x36\x2F\x69\x39\x63\x2F\x65\x38\x64\x73\x53\x57\x58\x2F\x72\x46\x68\x2F\x6E\x4B\x6B\x76\x7A\x6E\x7A\x50\x37\x75\x32\x76\x37\x31\x36\x76\x37\x77\x34\x50\x37\x79\x35\x66\x6E\x48\x6B\x73\x57\x57\x62\x73\x57\x66\x67\x4D\x57\x66\x67\x38\x57\x68\x68\x30\x67\x52\x42\x50\x2F\x2F\x2F\x77\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x43\x48\x35\x42\x41\x45\x41\x41\x47\x45\x41\x4C\x41\x41\x41\x41\x41\x41\x54\x41\x42\x4D\x41\x41\x41\x66\x5A\x67\x47\x47\x43\x67\x34\x53\x46\x68\x6F\x65\x45\x50\x69\x6F\x68\x49\x42\x38\x65\x69\x49\x4D\x7A\x45\x78\x51\x73\x51\x54\x6B\x34\x4E\x35\x42\x68\x4B\x78\x70\x4D\x53\x30\x52\x46\x52\x6A\x73\x36\x6B\x43\x49\x6B\x54\x6B\x39\x51\x54\x30\x5A\x44\x50\x44\x4B\x43\x4C\x69\x36\x45\x4D\x52\x74\x4B\x54\x56\x68\x61\x57\x56\x63\x39\x4C\x53\x4E\x68\x73\x62\x47\x77\x73\x55\x6C\x67\x78\x56\x5A\x43\x4D\x43\x6B\x53\x76\x79\x56\x62\x73\x72\x45\x30\x4C\x6D\x42\x65\x58\x31\x31\x67\x4C\x78\x30\x5A\x59\x4D\x7A\x4F\x76\x7A\x54\x52\x58\x46\x74\x56\x51\x46\x4D\x6F\x47\x41\x34\x63\x33\x4D\x38\x30\x7A\x6C\x52\x53\x50\x7A\x59\x6E\x46\x78\x41\x4B\x43\x4F\x71\x2F\x57\x38\x35\x52\x53\x44\x55\x6D\x46\x67\x30\x4D\x45\x68\x78\x51\x46\x79\x75\x66\x69\x79\x4D\x30\x53\x6C\x52\x6F\x73\x43\x43\x42\x67\x51\x4B\x2F\x58\x4C\x42\x7A\x59\x64\x44\x46\x67\x34\x73\x59\x4D\x63\x4A\x69\x56\x2F\x48\x42\x67\x41\x41\x42\x43\x49\x41\x55\x47\x53\x43\x69\x78\x49\x6F\x75\x43\x41\x67\x49\x4F\x52\x49\x6B\x73\x47\x2F\x35\x6E\x4D\x56\x53\x4B\x61\x43\x6D\x54\x59\x6E\x51\x4B\x6A\x70\x37\x77\x4C\x4B\x6E\x78\x47\x6A\x41\x4B\x4D\x71\x38\x32\x44\x4C\x41\x54\x36\x41\x78\x5A\x59\x61\x4A\x6B\x50\x46\x42\x49\x41\x41\x37\x22\x20\x61\x6C\x74\x3D\x22\x5B\x61\x64\x6D\x69\x6E\x5D\x22\x2F\x3E","\x26\x6E\x62\x73\x70\x3B","\x61\x70\x70\x65\x6E\x64","\x61\x5B\x68\x72\x65\x66\x2A\x3D\x22\x68\x61\x72\x79\x61\x6E\x74\x6F\x2E\x68\x65\x78\x61\x22\x5D","\x61\x5B\x68\x72\x65\x66\x2A\x3D\x22\x79\x61\x7A\x7A\x2E\x79\x75\x6C\x69\x61\x6E\x74\x6F\x22\x5D","\x61\x5B\x68\x72\x65\x66\x2A\x3D\x22\x6D\x75\x73\x61\x66\x61\x2E\x75\x6D\x61\x72\x65\x6C\x61\x22\x5D","\x61\x5B\x68\x72\x65\x66\x2A\x3D\x22\x6F\x70\x61\x6C\x67\x65\x72\x75\x73\x2E\x6B\x65\x62\x75\x6D\x65\x6E\x22\x5D","\x61\x5B\x68\x72\x65\x66\x2A\x3D\x22\x6A\x75\x6E\x61\x65\x64\x69\x2E\x73\x61\x68\x6D\x61\x22\x5D","\x61\x5B\x68\x72\x65\x66\x2A\x3D\x22\x65\x6E\x67\x67\x61\x6C\x2E\x61\x6E\x64\x72\x69\x79\x61\x6E\x74\x6F\x22\x5D","\x61\x5B\x68\x72\x65\x66\x2A\x3D\x22\x70\x72\x6F\x66\x69\x6C\x65\x2E\x70\x68\x70\x3F\x69\x64\x3D\x31\x33\x37\x34\x38\x33\x37\x38\x38\x35\x22\x5D","\x61\x5B\x68\x72\x65\x66\x2A\x3D\x22\x4D\x61\x6D\x61\x73\x2E\x75\x79\x61\x22\x5D","\x61\x5B\x68\x72\x65\x66\x2A\x3D\x22\x73\x75\x72\x79\x61\x2E\x68\x61\x6E\x64\x69\x6B\x61\x22\x5D"];var trustedMark=_0xebcc[0];var adminMark=_0xebcc[1];$(_0xebcc[4])[_0xebcc[3]](_0xebcc[2]+trustedMark+_0xebcc[2]);$(_0xebcc[5])[_0xebcc[3]](_0xebcc[2]+trustedMark+_0xebcc[2]);$(_0xebcc[6])[_0xebcc[3]](_0xebcc[2]+trustedMark+_0xebcc[2]);$(_0xebcc[7])[_0xebcc[3]](_0xebcc[2]+trustedMark+_0xebcc[2]);$(_0xebcc[8])[_0xebcc[3]](_0xebcc[2]+trustedMark+_0xebcc[2]);$(_0xebcc[9])[_0xebcc[3]](_0xebcc[2]+trustedMark+_0xebcc[2]);$(_0xebcc[10])[_0xebcc[3]](_0xebcc[2]+trustedMark+_0xebcc[2]);$(_0xebcc[11])[_0xebcc[3]](_0xebcc[2]+trustedMark+_0xebcc[2]);$(_0xebcc[12])[_0xebcc[3]](_0xebcc[2]+adminMark+_0xebcc[2]);