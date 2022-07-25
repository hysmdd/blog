/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/3G/index.html","598a1ec846d488dae0b8fec63847de0b"],["E:/qinhao/hexo/public/404.html","449566d63d31bad401ad6da8328b1207"],["E:/qinhao/hexo/public/404/assets/css/bootstrap.min.css","6f6a19862483166ac73fcc2645006bca"],["E:/qinhao/hexo/public/404/assets/css/style.css","132ed6b14aa0e3d83eb3657a486042d5"],["E:/qinhao/hexo/public/404/assets/js/gsap.min.js","00e4b3172efa7bc9f131940a997bc067"],["E:/qinhao/hexo/public/404/assets/js/script.js","0540d3f1469bf028b5373ab4ca32e271"],["E:/qinhao/hexo/public/5G网络优化/index.html","dcabe5a2107d2a98f7b44afb0540b3ea"],["E:/qinhao/hexo/public/AOP_1/index.html","8f1a71711f179a36f08846ec394a6eab"],["E:/qinhao/hexo/public/AOP_2/index.html","2b9e9e7140830d5cebfa632c879860d3"],["E:/qinhao/hexo/public/AOP_3/index.html","1dfefe0b142275490b1860f0007f52a1"],["E:/qinhao/hexo/public/Algorithm_1/index.html","0e0848765b0cb136fd923255fdc2ce5f"],["E:/qinhao/hexo/public/Base/index.html","a1fe909c7a8e7121812ad9721de81626"],["E:/qinhao/hexo/public/ByteDanceVerify.html","e6717cfb0481955d95d20ecf47bbf69e"],["E:/qinhao/hexo/public/CPU_Register/index.html","ab4ca73d32f940c60c6936c29f8ab146"],["E:/qinhao/hexo/public/C_Programming_1/index.html","707afc5a86df2663fdad91489cfc9ce4"],["E:/qinhao/hexo/public/Design_patterns_1/index.html","c8d75de177b593f2b713509c2d320967"],["E:/qinhao/hexo/public/FileDownload/index.html","6b6e5f2dcc015ddefffbc6236b68fea7"],["E:/qinhao/hexo/public/Files_and_directories/index.html","33c729220330d63f7ee5b32d0bcb9f2c"],["E:/qinhao/hexo/public/FixedTools/index.html","95b0698951bcfc06c44dba1f400a9355"],["E:/qinhao/hexo/public/GRE-VPN/index.html","7e83fb01eb2a4e1da9df092b145bcb74"],["E:/qinhao/hexo/public/GRE-over-IPSec/index.html","4d35ccf1b099ba694da8f59847f311cd"],["E:/qinhao/hexo/public/GSM/index.html","c160c1fbc79527ae592843f381c1a849"],["E:/qinhao/hexo/public/ICIC/index.html","d6fbf8e6ef7bc75b12f8f574a2f9172a"],["E:/qinhao/hexo/public/IPSec_VPN/index.html","26b6883c8cb14eca3e93eccb08b70617"],["E:/qinhao/hexo/public/IP_Bearer_Network_basic/index.html","4f9b94d64cc90519a0d204dcf7830bdb"],["E:/qinhao/hexo/public/JDBC/index.html","fcab3116c68c7d064e3dd4dafcc2a32c"],["E:/qinhao/hexo/public/JDBCTemplate/index.html","df782ca30e53583139e84dbc72e3ca9a"],["E:/qinhao/hexo/public/JDBC_SQL_injection/index.html","60849c19bebb27413418d2508456a065"],["E:/qinhao/hexo/public/LTE/index.html","79fde5b23bbc9cf88d92b910a48491b4"],["E:/qinhao/hexo/public/Layer/index.html","daeb6d5a356dfde30762b2715729dc2c"],["E:/qinhao/hexo/public/Linux_often_use/index.html","0d90dc97780cb7c9d3cd8f36511dce9c"],["E:/qinhao/hexo/public/MIMO/index.html","2cfc2d6bb69339f456c564477d677c55"],["E:/qinhao/hexo/public/MySQL/index.html","0a6e34fb40c31f1d77f58ee91ae01fc7"],["E:/qinhao/hexo/public/MySQL8_basics/index.html","d4f3839611a5fb60a075e6b11d749fa1"],["E:/qinhao/hexo/public/MySQL_constraint/index.html","8f5abc6dd3030a1de0bd6be1bbe8b719"],["E:/qinhao/hexo/public/MySQL_transaction/index.html","cb87c2c70529f58b8d0d88209cc7021d"],["E:/qinhao/hexo/public/NB-IoT/index.html","a85d0f0f2262c883ca6388b3de036dac"],["E:/qinhao/hexo/public/Network_Access/index.html","4837feb154dea56a67ae663bd062c6bb"],["E:/qinhao/hexo/public/No-module-named-pip/index.html","e5a39b8f7c2315279bdada49995c4a7a"],["E:/qinhao/hexo/public/OFDMA/index.html","17a9bde0c90e6d9b1d0c0a5d930c21b8"],["E:/qinhao/hexo/public/OLT_command/index.html","4350c591b59250aa8455090eeaf196ea"],["E:/qinhao/hexo/public/OverLoad_1/index.html","166751f09c63dd9df6dea364b2f77f45"],["E:/qinhao/hexo/public/PlatformTransactionManager/index.html","13cff9a269c315329dc97d6eb84c0b38"],["E:/qinhao/hexo/public/Python-3/index.html","7672f94350ffbe1e80d5a47098c571fd"],["E:/qinhao/hexo/public/Python-4/index.html","e53d4591fc67cb63de49c8efe240f781"],["E:/qinhao/hexo/public/Python-5/index.html","d148b8198aa90c66bc7e692c476f4e75"],["E:/qinhao/hexo/public/PythonUdp/index.html","d6d6691d46623071ea5bb7131d02951e"],["E:/qinhao/hexo/public/Python_basic/index.html","9f468cf465150905f1ed0132fcd42d38"],["E:/qinhao/hexo/public/Python_cards_manage/index.html","820130d7c1798adb2f23c99c41342001"],["E:/qinhao/hexo/public/Python_variable/index.html","aa1e4536de0d5ba431e3c2bf9fd7d411"],["E:/qinhao/hexo/public/RedHat_setup_script/index.html","a502fc25d95193663b68ccf832ad1c97"],["E:/qinhao/hexo/public/TCP/index.html","c70a492f1629eaedd48afdd487595098"],["E:/qinhao/hexo/public/TCP_client/index.html","e6eed128086af628b78c51dfc221cfa8"],["E:/qinhao/hexo/public/TCP_server/index.html","31c545b4668f807fb16a800e57348c91"],["E:/qinhao/hexo/public/TD-LTE-System/index.html","74cb0712b3ceba8617e0b6ba4a490891"],["E:/qinhao/hexo/public/Web_site_SSL/index.html","7bab8f8315dbbf4a2a1b9bce579438a4"],["E:/qinhao/hexo/public/Windows_Web_build_environment/index.html","bb85a629ba66d41231c980b99213aae6"],["E:/qinhao/hexo/public/Windows_Web_build_website/index.html","c4c47f64dfdb60661ee1265f1ef486f0"],["E:/qinhao/hexo/public/Windows_Web_often_use/index.html","b38b690e1ab240d602a9ba8f74273c71"],["E:/qinhao/hexo/public/a_server_build_many_webs/index.html","e6c45205016f1f2d64b15e615e26166e"],["E:/qinhao/hexo/public/about/index.html","3b1da9a98a8bf8751f8ef7f397d4d09f"],["E:/qinhao/hexo/public/acl/index.html","80ca5739a93cf13937002f57b5f5c8c3"],["E:/qinhao/hexo/public/archives/2020/01/index.html","875364fb985cef9d03aee7d91cb1f730"],["E:/qinhao/hexo/public/archives/2020/02/index.html","26948d179f73fac69b3e947e686040f7"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","52c1ca41c6b33cf529586052e7aae94a"],["E:/qinhao/hexo/public/archives/2020/03/index.html","2fd0a3394c1fb393dd8b6fbad02dff44"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","9b84c93c59882622a46309baccb0ab9c"],["E:/qinhao/hexo/public/archives/2020/04/index.html","a84af7105b19ab1cfa27f4de62c1ff59"],["E:/qinhao/hexo/public/archives/2020/05/index.html","045161cc9b8e5dd44264c6467623c15b"],["E:/qinhao/hexo/public/archives/2020/06/index.html","fdaf9d1daa61f1f422d8dabe3b0acbf3"],["E:/qinhao/hexo/public/archives/2020/07/index.html","b9202a5070df44d73e64011ef627f570"],["E:/qinhao/hexo/public/archives/2020/08/index.html","fab9eb876fe210f0d8b4ded6a14b7bf6"],["E:/qinhao/hexo/public/archives/2020/10/index.html","c7effd2d7aff855ead031ca89da61596"],["E:/qinhao/hexo/public/archives/2020/11/index.html","01aba46fc5d3e31af6017cc1e3492d5e"],["E:/qinhao/hexo/public/archives/2020/index.html","16d9678269ee755dd984b550125ec83a"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","c217c010b19379c00b3ab6544f79363b"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","9a08de41429bb9656afe5fdd5b11c61f"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","35ea3d7e980b5dc80ed527e51e3641a9"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","07dc3fdcdac217494c018ce348c03792"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","d45ad2be47f57083efd2bb776287495c"],["E:/qinhao/hexo/public/archives/2021/03/index.html","b6f8d07370e11d201746113a92d989af"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","0d688d3f9c7fdbf212ab68be0c1477fe"],["E:/qinhao/hexo/public/archives/2021/04/index.html","8922835c8dff8a69cda24ec3ba5028f7"],["E:/qinhao/hexo/public/archives/2021/05/index.html","de13877f8ee9b6e63995632bda7148fd"],["E:/qinhao/hexo/public/archives/2021/06/index.html","f01edd2d9fcd1d02c1acdeae24a62017"],["E:/qinhao/hexo/public/archives/2021/07/index.html","eb7be9b6b41849b8b6329a9614d24a09"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","fccb95da2dab2b49aeec68d72fc5a100"],["E:/qinhao/hexo/public/archives/2021/08/index.html","4ec5a359a61244be178b43bfa096cf7b"],["E:/qinhao/hexo/public/archives/2021/09/index.html","75c222c38e078745f373c1c3c3bd6232"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","74abc3f0250ad6ea4924aea9b03525b8"],["E:/qinhao/hexo/public/archives/2021/10/index.html","792df10c3dbf290c28d34f758a41541c"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","f96268ec45f5d267e3abfa59d97db7b7"],["E:/qinhao/hexo/public/archives/2021/index.html","a203aea22aa4feeb18a4933e42899c08"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","9e4a1622c957e014eeb7729ec63af1eb"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","60408bb847667b1eacaafe8f12714bbd"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","c14030561c215cb959cb86b8238c2b76"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","0412df2f21f0d6fa7cc6da5050ccde8b"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","2c1d748461f7149eedc67c7002bc66d6"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","baaac13f386e035330e555df109317dc"],["E:/qinhao/hexo/public/archives/2022/01/index.html","d5ecf3381464a6d61143e632cdbe1f42"],["E:/qinhao/hexo/public/archives/2022/index.html","8f6fc8c0e9d4a1442832ea3972e40d80"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","10bdabb1a7443f6fa5cc235c3885796d"],["E:/qinhao/hexo/public/archives/index.html","edbf846a3a327b7013c97e5c095fb8a5"],["E:/qinhao/hexo/public/archives/page/10/index.html","04f376f0921cd3bb26543db3b074ab88"],["E:/qinhao/hexo/public/archives/page/11/index.html","04f376f0921cd3bb26543db3b074ab88"],["E:/qinhao/hexo/public/archives/page/12/index.html","04f376f0921cd3bb26543db3b074ab88"],["E:/qinhao/hexo/public/archives/page/13/index.html","04f376f0921cd3bb26543db3b074ab88"],["E:/qinhao/hexo/public/archives/page/2/index.html","edbf846a3a327b7013c97e5c095fb8a5"],["E:/qinhao/hexo/public/archives/page/3/index.html","edbf846a3a327b7013c97e5c095fb8a5"],["E:/qinhao/hexo/public/archives/page/4/index.html","edbf846a3a327b7013c97e5c095fb8a5"],["E:/qinhao/hexo/public/archives/page/5/index.html","7f833075d4783edf4868a5ed054cdcf5"],["E:/qinhao/hexo/public/archives/page/6/index.html","7f833075d4783edf4868a5ed054cdcf5"],["E:/qinhao/hexo/public/archives/page/7/index.html","7f833075d4783edf4868a5ed054cdcf5"],["E:/qinhao/hexo/public/archives/page/8/index.html","7f833075d4783edf4868a5ed054cdcf5"],["E:/qinhao/hexo/public/archives/page/9/index.html","04f376f0921cd3bb26543db3b074ab88"],["E:/qinhao/hexo/public/artitalk/index.html","87e2a2ccf8540a86b982405413c8bcf5"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/bangumis/index.html","94f9f993d5978afb1ea433b88e1ce979"],["E:/qinhao/hexo/public/bitwarden/index.html","3743f2cd80631364081963bf1ea83361"],["E:/qinhao/hexo/public/build-MAN-idea/index.html","f92b6701f52a752f4416de5bd22e5825"],["E:/qinhao/hexo/public/c-11/index.html","408af004bf2a233b9937b59fcb0dd7f7"],["E:/qinhao/hexo/public/c_1/index.html","df27efdf242635d137c1a8f4de81e1e3"],["E:/qinhao/hexo/public/c_10/index.html","aee92ec994c2785c1f6453b2f27abb8a"],["E:/qinhao/hexo/public/c_2/index.html","89e559c28819f3a3f592d867ad39a6ef"],["E:/qinhao/hexo/public/c_3/index.html","f9d8cef1b418a80e429b1b38bfb73cdb"],["E:/qinhao/hexo/public/c_4/index.html","e45b521a7ce4bb804480ed4b877d59d8"],["E:/qinhao/hexo/public/c_5/index.html","136c5a7c4c2fe16da98e25c531360885"],["E:/qinhao/hexo/public/c_6/index.html","dd7b72885a51d39fd9275de9101c9673"],["E:/qinhao/hexo/public/c_7/index.html","b16ab8a7fb152402077c1a6f7e6b0509"],["E:/qinhao/hexo/public/c_8/index.html","3f44bdf9d89d459f7b83018a8ce41e07"],["E:/qinhao/hexo/public/c_9/index.html","29422fa00dd0233131cec7df4e942549"],["E:/qinhao/hexo/public/categories/C语言/index.html","05d1f52b02760adf2459fc367fc0913e"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","290da15fd4353f297ede62c218de30e5"],["E:/qinhao/hexo/public/categories/Java/index.html","2f04092d5514201f749a272e98582d6b"],["E:/qinhao/hexo/public/categories/Java/page/2/index.html","69a3541e39e35410f67d975be44a5475"],["E:/qinhao/hexo/public/categories/Linux/index.html","a19eee92444a7139ff927e1ff59b9d66"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","ef5e2ebabb90946d1e4947a22f8f0e52"],["E:/qinhao/hexo/public/categories/Python/index.html","7c91971c41f9136005a436b6f4fefdff"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","9aabac9d7be268e91c72ef9519a760e0"],["E:/qinhao/hexo/public/categories/交换机/index.html","9123b9dbfec431e5df1001b96941372e"],["E:/qinhao/hexo/public/categories/前端学习/index.html","e2baee7189a4d977e397d2305008df8f"],["E:/qinhao/hexo/public/categories/华为认证/index.html","2635bd2bb35dd7d81012299a3916569f"],["E:/qinhao/hexo/public/categories/小技巧/index.html","5d3e730c3cfda91170b68c0223524961"],["E:/qinhao/hexo/public/categories/操作系统/index.html","f4950821ed5576d7b680f398e7667067"],["E:/qinhao/hexo/public/categories/操作系统/page/2/index.html","574fb7e7d62948d58d09fc4c279434e1"],["E:/qinhao/hexo/public/categories/数据库/index.html","69c6998eb803185a397e16ca345118c3"],["E:/qinhao/hexo/public/categories/数据结构/index.html","000961fd4a42b9bb892438cb9965f0d1"],["E:/qinhao/hexo/public/categories/服务器/index.html","9660e958956f5f6b6be3957c724c770e"],["E:/qinhao/hexo/public/categories/算法基础/index.html","5cd0ee35d4eabe25b5ce6b43db9b2790"],["E:/qinhao/hexo/public/categories/网络安全/index.html","bb29f9d47cd8b0a735caacd2d142f8d1"],["E:/qinhao/hexo/public/categories/股票知识/index.html","9132964305565099f373ae3073fb32c3"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","2cb0a004a9b2f5fff2887642c1adc907"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","a53b93ae5d7968269f146c6d7fbc15fc"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","06619a6e9ce145a491c7654f8bf5dac8"],["E:/qinhao/hexo/public/categories/软件破解/index.html","e6e4baa2364222e58387bc557db2c3fb"],["E:/qinhao/hexo/public/categories/通信技术/index.html","4b6f6f7c85bf06efd93745877cb98bb7"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","4baadb2c541205530b92e4463f257025"],["E:/qinhao/hexo/public/category/index.html","0e79d17f80c4b3baedb6a62cab3b17c1"],["E:/qinhao/hexo/public/cinemas/index.html","36b429db45b93b962b981127bd8640e9"],["E:/qinhao/hexo/public/color/index.html","0b5d024621006d2f72c2db44100e5136"],["E:/qinhao/hexo/public/computer_Internet_1/index.html","8be059f4e8e70316bde4b77567958858"],["E:/qinhao/hexo/public/computer_network_basics/index.html","80e64a695445c403fba6d4ada3d4fcc8"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","32f249f072182a7088a0f7a2c5b6dc9d"],["E:/qinhao/hexo/public/css_clear/index.html","fc354b66c652e2fba76427660672d719"],["E:/qinhao/hexo/public/dataStructure-1/index.html","b1b9bd39c16d0d530126c77ff47248ff"],["E:/qinhao/hexo/public/dataStructure-2/index.html","07fdd5ea5ae4e0e590b4d36b4562722d"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","0dd8c02dbe3f0d582b1a52a1a00ed8af"],["E:/qinhao/hexo/public/donate/drinks/script.js","516bc286d1c162bf09c806066fda4171"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","12257cdd87244e6f517e5283e50f6c14"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","e2c9a14305bd9e3b7e5c0225b68af954"],["E:/qinhao/hexo/public/free-get-189vip/index.html","f5f0ee42af10ac824adada5ef1885f8f"],["E:/qinhao/hexo/public/friends/index.html","d7f8f3f17e6067b8e60b88ab9f6ae350"],["E:/qinhao/hexo/public/gcc/index.html","c503a961fd9a13eee3c6fa4710fa324f"],["E:/qinhao/hexo/public/huawei-PCManager/index.html","9d7737336b1a204790939d7aa6a6ba27"],["E:/qinhao/hexo/public/huawei-exam-application/index.html","ff19b95c248fa9a98873c603c402cfd0"],["E:/qinhao/hexo/public/image/png/circle.png","5d85080e43c457b35b23f4ad8ceaa6c5"],["E:/qinhao/hexo/public/image/png/icp.png","37975a3be8087f62933f7aa3e7e80d12"],["E:/qinhao/hexo/public/image/png/left_ptr.png","b893704c321e35374e4bc97adb72048d"],["E:/qinhao/hexo/public/image/png/openhand.png","b040b0a64d22b7f40388391ac744949d"],["E:/qinhao/hexo/public/image/png/pointer.png","14c9f722890f733da3ae7fb15013a81a"],["E:/qinhao/hexo/public/image/png/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["E:/qinhao/hexo/public/image/png/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["E:/qinhao/hexo/public/image/png/safari.png","5e83f8d5772a61cd7036bd7bf3f84563"],["E:/qinhao/hexo/public/image/png/text.png","80d9f4da0a0c20b02898f23b035b17c8"],["E:/qinhao/hexo/public/image/png/weibo.png","2af288384e8aee34e94adae792942d2c"],["E:/qinhao/hexo/public/image/png/zoom-in.png","bf6da71dce828553d50a1ce3fd65163a"],["E:/qinhao/hexo/public/image/png/zoom-out.png","d5da599e9fd8344973c64b8ca109958b"],["E:/qinhao/hexo/public/image/svg/1f37b.svg","5e2ea03aa4963cda5e91d395c2587e6b"],["E:/qinhao/hexo/public/image/svg/1f389.svg","b052a4bef57c1aa73cd7cff5bc4fb61d"],["E:/qinhao/hexo/public/image/svg/1f4cc.svg","09204f6a96455580e749454b7449aa82"],["E:/qinhao/hexo/public/image/svg/1f4f0.svg","51cd8436fb99a6f12257db34780fb7a7"],["E:/qinhao/hexo/public/image/svg/1f516.svg","2424297076c0d1c8499820fc4f9d9f57"],["E:/qinhao/hexo/public/image/svg/1f5c3.svg","b542a360ed4cdceeac3bca73b455ebc6"],["E:/qinhao/hexo/public/index.html","fae4a3b47278dce11c0d378d98481917"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/lanzous/index.html","11c037255b76d14269e1810313529c46"],["E:/qinhao/hexo/public/linux/index.html","afa95526d8f676b0926c6a3c52ce28d8"],["E:/qinhao/hexo/public/login_demo/index.html","a468017e9b09de87a6e12d15c144bc77"],["E:/qinhao/hexo/public/manage-MAN-skill/index.html","ff7e84d47dd186853d3523cdab8775e3"],["E:/qinhao/hexo/public/memory_save_number/index.html","618a0df9288884d85e5941026fc4c583"],["E:/qinhao/hexo/public/mobile_communication/index.html","b91951203dcc70b86c1413c9550df4b9"],["E:/qinhao/hexo/public/movies/index.html","7a83523f0805ecfc6008d3e7ebbde8b5"],["E:/qinhao/hexo/public/mylist/index.html","b8269c5ebbd7085f9287e5acdb0586cc"],["E:/qinhao/hexo/public/myphotos/index.html","8ee301296619f3a5fded2c993ba0182b"],["E:/qinhao/hexo/public/mysql-install/index.html","0ebe7eff1bafe3331917914d3fcfd45e"],["E:/qinhao/hexo/public/mysql_dql_1/index.html","ad227f475c2032d43e8911e639a75401"],["E:/qinhao/hexo/public/mysql_forget_root_password/index.html","5038d07fecf094d53edbb4c703d0e956"],["E:/qinhao/hexo/public/mysql_question_1/index.html","b674c9712c5bce70f2eac50cb541faf4"],["E:/qinhao/hexo/public/network_security_comprehensive/index.html","4b0c518df8fd09238ca612b63625ae61"],["E:/qinhao/hexo/public/not-allow-F12/index.html","ac95668dead2929b188a5e17c26bff01"],["E:/qinhao/hexo/public/optical_transport_network_basic/index.html","2438ff9b2cedfe7346652a9f9d3728f5"],["E:/qinhao/hexo/public/page/10/index.html","1cd226bb753f371af33c3e8a6d0f116d"],["E:/qinhao/hexo/public/page/11/index.html","e9bc5667b70a36c3c8d6c9e571da7ddb"],["E:/qinhao/hexo/public/page/12/index.html","0db9094e0ec02709d1ad6b452b42bacf"],["E:/qinhao/hexo/public/page/13/index.html","e25021f5db2eabab821d4ffe16dcbe24"],["E:/qinhao/hexo/public/page/2/index.html","7f0f01a2ebd29d9fc5ea6f2adc323399"],["E:/qinhao/hexo/public/page/3/index.html","6b35132b81e48c35702dc40fe3b021e5"],["E:/qinhao/hexo/public/page/4/index.html","0a1d633fdbf1e68ea4cac694dffe5da5"],["E:/qinhao/hexo/public/page/5/index.html","aa9c6879936275da16fa2d1ecdff7d5b"],["E:/qinhao/hexo/public/page/6/index.html","d8152e6833112b26f1ba9321b52b3a81"],["E:/qinhao/hexo/public/page/7/index.html","503cedf525c33283e5473307c4dc15f3"],["E:/qinhao/hexo/public/page/8/index.html","b5a37b23d106e43695f20a1e1cc0f5f3"],["E:/qinhao/hexo/public/page/9/index.html","968f1cbe87a694b27a998e7bb157b8c4"],["E:/qinhao/hexo/public/python-2/index.html","9f563bbfef9c24e911fd212e640e0dcf"],["E:/qinhao/hexo/public/ssh/index.html","6f3344395fc222ba39a4e1224560699d"],["E:/qinhao/hexo/public/stock_1/index.html","9f15b4f33215c7c87f63899b8a0e86e6"],["E:/qinhao/hexo/public/stock_10/index.html","20fdcca2ce78c856dcb992604d054b17"],["E:/qinhao/hexo/public/stock_11/index.html","f5555229190985ebb5adfd476165fddf"],["E:/qinhao/hexo/public/stock_12/index.html","4b1b7b51891ba081d311ea0d356c8eb8"],["E:/qinhao/hexo/public/stock_13/index.html","b2470c931420965001d26972d2e6d538"],["E:/qinhao/hexo/public/stock_14/index.html","9c7b12687549f7ea1ce6e7d9f83803a5"],["E:/qinhao/hexo/public/stock_15/index.html","2164e194dd8e4b8a6eb5d68e6426deaf"],["E:/qinhao/hexo/public/stock_2/index.html","334bcffd9788f4d1f1d1444f8275241a"],["E:/qinhao/hexo/public/stock_3/index.html","6d3ebe8e04a714fd77d05fc1031e3bff"],["E:/qinhao/hexo/public/stock_4/index.html","e312e433dc7c9e3c9509718565429e7e"],["E:/qinhao/hexo/public/stock_5/index.html","03e4c37225837cdf29fddbf3dfa38142"],["E:/qinhao/hexo/public/stock_6/index.html","528e5e37425a70a04f95a3ab8a3bb36b"],["E:/qinhao/hexo/public/stock_7/index.html","af7febe0a42291d76257921293d0b659"],["E:/qinhao/hexo/public/stock_8/index.html","bc7d32a1353d640bd4a2de223250fe09"],["E:/qinhao/hexo/public/stock_9/index.html","bcb664ab82f78a664b6b7c6ef39cfb53"],["E:/qinhao/hexo/public/structure-of-MAN/index.html","80251b2200213db660111e67754b9d97"],["E:/qinhao/hexo/public/sw-register.js","53a7a42c6772f57e8b7b70d5861449c0"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/switchport-security/index.html","0287752ba92a971e3074eab7e2594268"],["E:/qinhao/hexo/public/system1/index.html","ea3592b5278ca3dfc1517f8d4b91006b"],["E:/qinhao/hexo/public/system10/index.html","217d11115364a24699528f8f9ea7fc24"],["E:/qinhao/hexo/public/system11/index.html","80597eb788dbc51cced0d43310be936d"],["E:/qinhao/hexo/public/system12/index.html","d4a0b6b42fcac2fd0655c85a5b6cb1d0"],["E:/qinhao/hexo/public/system2/index.html","21886b72d0f97cd1e8ca9b53f29315b5"],["E:/qinhao/hexo/public/system3/index.html","0f9d0d36bc22780a712bbd9444078a2b"],["E:/qinhao/hexo/public/system4/index.html","20cf3e23f9ca5168bb3ee65a86498521"],["E:/qinhao/hexo/public/system5/index.html","d31f14a688f0691ade094d3eb4f2c601"],["E:/qinhao/hexo/public/system6/index.html","fe530dd96c14c6e0bd44f451d9553b93"],["E:/qinhao/hexo/public/system7/index.html","f7d5a2f040966b7590bb151ebf02fe25"],["E:/qinhao/hexo/public/system8/index.html","1cd5a4e760d0b50e3d14e65a6a117682"],["E:/qinhao/hexo/public/system9/index.html","de360d87af36bc63d2fa759aa86f9b02"],["E:/qinhao/hexo/public/system_info/index.html","3b1ed4a9361306594ea54ca59c6d81e6"],["E:/qinhao/hexo/public/tags/index.html","c88ca1c8b5ae077a1894bce4d6f2ae12"],["E:/qinhao/hexo/public/transactionManager/index.html","1540fad63ee2da0159d4cf7b4a08b81e"],["E:/qinhao/hexo/public/utils/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/utils/css/all.min.css","84d8ad2b4fcdc0f0c58247e778133b3a"],["E:/qinhao/hexo/public/utils/css/font-awesome-animation.min.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/qinhao/hexo/public/utils/css/solarized-light.min.css","769d25bae36c449b6612b98809d01041"],["E:/qinhao/hexo/public/utils/css/waves.min.css","ad8ce7fc1d688135eedeedee534aa9a2"],["E:/qinhao/hexo/public/utils/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/js/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["E:/qinhao/hexo/public/utils/js/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["E:/qinhao/hexo/public/utils/js/artitalk.js","d94fe7817fad4ecae5681cbde76a4acc"],["E:/qinhao/hexo/public/utils/js/av-min.js","bcaf9b004ff4f49349bb6201fe3b9a5d"],["E:/qinhao/hexo/public/utils/js/bbtalk.min.js","a1ab1de2ae261228a7532e855f6980a5"],["E:/qinhao/hexo/public/utils/js/clipboard.min.js","27784b7376dd992368c71b6c5559f358"],["E:/qinhao/hexo/public/utils/js/comment_typing.js","ab7b34f055a2bf8e036daec67e968d1a"],["E:/qinhao/hexo/public/utils/js/flying-pages.min.js","c20e3f49966e71df80be9a6af59449dd"],["E:/qinhao/hexo/public/utils/js/highlight.min.js","a370252e88fa5c6611ab5005c7b87b96"],["E:/qinhao/hexo/public/utils/js/instant_page.js","1a3be845085b8d94a2997a3a472feb42"],["E:/qinhao/hexo/public/utils/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["E:/qinhao/hexo/public/utils/js/jquery.min.js","dc5e7f18c8d36ac1d3d4753a87c98d0a"],["E:/qinhao/hexo/public/utils/js/lazyload.min.js","0fcd5822c9e8af807a14d3985faf91c8"],["E:/qinhao/hexo/public/utils/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["E:/qinhao/hexo/public/utils/js/scrollreveal.min.js","f7d329c68b849d6685a7462c22f47ea2"],["E:/qinhao/hexo/public/utils/js/waves.min.js","9a5b3dfca09d9e3005dc697162d4bc65"],["E:/qinhao/hexo/public/utils/ttf/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["E:/qinhao/hexo/public/utils/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.ttf","ede4ff54ccb46fe67622dbcffeb90fdf"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.woff","07fa0741d97758debce36520d5a12d5b"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.ttf","04842b94683f70c18aeb76b5a27cd221"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.woff","f48a8829bec665258b9c85b23ecbf3c0"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.ttf","5f2f8485a00387b7a1d89e793555991f"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.woff","42d66a3eb75eac2b4fc0ee58e9846497"],["E:/qinhao/hexo/public/wireless_framework/index.html","34a111e14995dd077f9f66be4866f50a"],["E:/qinhao/hexo/public/wireless_radio/index.html","f4f2ad99d59abb5c79a51a0f7aa6e3ba"],["E:/qinhao/hexo/public/wireless_word/index.html","787cf3217222e4e5449f5cd56cb95bb6"],["E:/qinhao/hexo/public/xml/index.html","c6fd3146d3fb66492efe1b60c19af688"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







