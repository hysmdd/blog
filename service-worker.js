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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/3G/index.html","fe739d82f8de584f90adba32dbf529a1"],["E:/qinhao/hexo/public/404.html","449566d63d31bad401ad6da8328b1207"],["E:/qinhao/hexo/public/404/assets/css/bootstrap.min.css","6f6a19862483166ac73fcc2645006bca"],["E:/qinhao/hexo/public/404/assets/css/style.css","132ed6b14aa0e3d83eb3657a486042d5"],["E:/qinhao/hexo/public/404/assets/js/gsap.min.js","00e4b3172efa7bc9f131940a997bc067"],["E:/qinhao/hexo/public/404/assets/js/script.js","0540d3f1469bf028b5373ab4ca32e271"],["E:/qinhao/hexo/public/5G网络优化/index.html","4877a2a1972ad34cd9eb3564add01eb7"],["E:/qinhao/hexo/public/Algorithm_1/index.html","4c8e6e03be3d12d368e01308827f5166"],["E:/qinhao/hexo/public/Base/index.html","4e6f5b54f7093dec9a8a397f69c29362"],["E:/qinhao/hexo/public/ByteDanceVerify.html","10338959f03c11d313708ec9489274cd"],["E:/qinhao/hexo/public/CPU_Register/index.html","e050ee43ca683012548ddc3e625ca213"],["E:/qinhao/hexo/public/C_Programming_1/index.html","c5c50c1ceb9603c7c6610f13603e651a"],["E:/qinhao/hexo/public/Design_patterns_1/index.html","8bcf5e148e1d6af1a5ef4eeaf46f646e"],["E:/qinhao/hexo/public/FileDownload/index.html","9a69e3629e62e3962a0f155c5aef3724"],["E:/qinhao/hexo/public/Files_and_directories/index.html","6d9c486b8ad9a4c1abebc36636cb7394"],["E:/qinhao/hexo/public/FixedTools/index.html","a584d4b33a6743ea545d9f6878866ef9"],["E:/qinhao/hexo/public/GRE-VPN/index.html","39aac021e25319376db9fc99df20b98e"],["E:/qinhao/hexo/public/GRE-over-IPSec/index.html","f43153b75ac792507309cede6af62a5c"],["E:/qinhao/hexo/public/GSM/index.html","0471f841867489fb748b499e03655b95"],["E:/qinhao/hexo/public/ICIC/index.html","d1050011310781ca42c3d8088d1ebe29"],["E:/qinhao/hexo/public/IPSec_VPN/index.html","b7b50dc0dde015439dac3f2810f89969"],["E:/qinhao/hexo/public/IP_Bearer_Network_basic/index.html","9fd6134c0d8557be9f72982d0743f7fb"],["E:/qinhao/hexo/public/JDBC/index.html","97a6b5120b582cf3c88a3eb88c8f469b"],["E:/qinhao/hexo/public/JDBCTemplate/index.html","e6581893b248b77248d0c772a16ce66b"],["E:/qinhao/hexo/public/JDBC_SQL_injection/index.html","f0e208d20fb3cdaf16600a006c05c522"],["E:/qinhao/hexo/public/LTE/index.html","d5676c0a7436d322afc43e1e0cb5841a"],["E:/qinhao/hexo/public/Layer/index.html","68ef25c5c12199d24532805d24dc9099"],["E:/qinhao/hexo/public/Linux_often_use/index.html","c5d08a10a597dcb3763f80219b3702d4"],["E:/qinhao/hexo/public/MIMO/index.html","1f3bde2f5e7ad258baad3b2f1808936a"],["E:/qinhao/hexo/public/MySQL/index.html","2a05436bc70e5dd681e9371f551d4a1d"],["E:/qinhao/hexo/public/MySQL8_basics/index.html","ece5b68daf8cede2b3654abf5291bf7a"],["E:/qinhao/hexo/public/MySQL_constraint/index.html","2edce16a9735a45148f226843f54cd5d"],["E:/qinhao/hexo/public/MySQL_transaction/index.html","e05db2bf1e4e26a2f1df65fbc3d98479"],["E:/qinhao/hexo/public/NB-IoT/index.html","9c3a9cd7c7f11afa6ac1f7f1fd1be0ac"],["E:/qinhao/hexo/public/Network_Access/index.html","0df02ec0fedee39abf67adc0da78146f"],["E:/qinhao/hexo/public/No-module-named-pip/index.html","f7900367e84afbbb99d361aeb44f27e0"],["E:/qinhao/hexo/public/OFDMA/index.html","37d72105739e32e65be31f60a6352657"],["E:/qinhao/hexo/public/OLT_command/index.html","18f511f290e1a78d7e5d9d318f194379"],["E:/qinhao/hexo/public/OverLoad_1/index.html","23782b8638fff0f77de9de942d5ab70a"],["E:/qinhao/hexo/public/Python-3/index.html","c167b2baf2012772955ff50ae5ae3957"],["E:/qinhao/hexo/public/Python-4/index.html","81280b6374d3524424bcf1f299569599"],["E:/qinhao/hexo/public/Python-5/index.html","2f31183609f7e22b4d962c727a1db9b9"],["E:/qinhao/hexo/public/PythonUdp/index.html","e9e6c9ae9a756d119f0a523b74728b2b"],["E:/qinhao/hexo/public/Python_basic/index.html","408681f412aa514dbabf384643d4fd45"],["E:/qinhao/hexo/public/Python_cards_manage/index.html","76240415271499ae56f66805f34900c7"],["E:/qinhao/hexo/public/Python_variable/index.html","f5898fb71182c0804d59c259b69d6ed7"],["E:/qinhao/hexo/public/RedHat_setup_script/index.html","82250b967851319b590227bd1f67589e"],["E:/qinhao/hexo/public/TCP/index.html","d387c0a670bc0a11f4761ef67fcd378c"],["E:/qinhao/hexo/public/TCP_client/index.html","6629cb2c69290fedad19bf5a9293035d"],["E:/qinhao/hexo/public/TCP_server/index.html","13a3a068e553909ed0fc2d40aa957a5d"],["E:/qinhao/hexo/public/TD-LTE-System/index.html","1659653ab7829c90b6a1d3a90d3b1ffd"],["E:/qinhao/hexo/public/Web_site_SSL/index.html","ab24ee674a8c8a2ae4386bced2bdbb41"],["E:/qinhao/hexo/public/Windows_Web_build_environment/index.html","b36c7ce34e8274451e1c2e275605775b"],["E:/qinhao/hexo/public/Windows_Web_build_website/index.html","4cc76dbb2ff3ac70c84d8b05b61869ee"],["E:/qinhao/hexo/public/Windows_Web_often_use/index.html","9fc47e7e14aad7564f779a58ef733661"],["E:/qinhao/hexo/public/a_server_build_many_webs/index.html","d0af474d6648e574dcba8af18779c604"],["E:/qinhao/hexo/public/about/index.html","d349d74b50468749731d8e41c3a72c3d"],["E:/qinhao/hexo/public/acl/index.html","86895a8a3e3fba4be4ca0baa822ebeaa"],["E:/qinhao/hexo/public/archives/2020/01/index.html","b22fee3bc0f362f6efb31b41c2168cd4"],["E:/qinhao/hexo/public/archives/2020/02/index.html","7e73ca795373837acca8c0e3d2504f12"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","733dfb2b2334a2bfb47b44c783b7e4f2"],["E:/qinhao/hexo/public/archives/2020/03/index.html","53d2d82ec210a0a236507f66450e75f0"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","47ad1a8ab7cf7178158da6c69bd6c3c3"],["E:/qinhao/hexo/public/archives/2020/04/index.html","73e84e6b7826869432acae4562376232"],["E:/qinhao/hexo/public/archives/2020/05/index.html","b6d10771a952478b8732fb7bcc1ab55f"],["E:/qinhao/hexo/public/archives/2020/06/index.html","ea128affaa00815d1f9fb70973897efc"],["E:/qinhao/hexo/public/archives/2020/07/index.html","add2dfb78209ad3638bb5c2f94c0c075"],["E:/qinhao/hexo/public/archives/2020/08/index.html","1684538a1fe223d6668b95beb314086a"],["E:/qinhao/hexo/public/archives/2020/10/index.html","84e921984b557758c122fab6bbb9f2af"],["E:/qinhao/hexo/public/archives/2020/11/index.html","7ca8d8298db075bb9a81b1fde5a0f556"],["E:/qinhao/hexo/public/archives/2020/index.html","65a2bdc2f919822e1eb3dea325930c3c"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","3bd11263523ac052775f400b99e49b00"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","a1e7a0cfa59bac481699017782f02cfa"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","a41d544610ea4eb4f57dd39dbd9bee1c"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","063d505c1fc5f7fc739869f4664f91cd"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","fbe77b1858d4a6b5ae4221ec23e83b92"],["E:/qinhao/hexo/public/archives/2021/03/index.html","474f0c6dba3be32afcd9cf4b677bb00b"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","7d0b0448c24f0b80e12f31ad5389c95a"],["E:/qinhao/hexo/public/archives/2021/04/index.html","60a6c6b53fafbac96ba3dee4cce45899"],["E:/qinhao/hexo/public/archives/2021/05/index.html","b8e94e022bec0bd31e2dde9fb551d606"],["E:/qinhao/hexo/public/archives/2021/06/index.html","dd6ec302c65d64ac98bfbada22385aa5"],["E:/qinhao/hexo/public/archives/2021/07/index.html","8e123710a90e8634b1d02320167342fc"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","bc4a94f9abd13318bfface6cf2480e66"],["E:/qinhao/hexo/public/archives/2021/08/index.html","f45ae2627761406c9c5e5ff9f20fc15d"],["E:/qinhao/hexo/public/archives/2021/09/index.html","76c4f7f625102ef9ea59b34ac0676c7b"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","92245d1458df16c1330b309ac1c78774"],["E:/qinhao/hexo/public/archives/2021/10/index.html","8670323108f1155e21feb7597163d05d"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","c1a4459bfa9f71cb059e29a303c38865"],["E:/qinhao/hexo/public/archives/2021/index.html","f6a66596e1349f5084d566354b3ac661"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","f000acec13d1b7a95487abd48244fa1d"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","6fabdba98ad1b8109c2a7c4cea6c7314"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","39736c99d05a3515925ab1a1415928fa"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","7a44bc446d5403e92b635a37ab2727e3"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","ac61473c6dbfdb0799daec725553084e"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","5e7899c352e074e4b61127d5f27665e3"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","d9c033020fc0b167ceaa71f8045dc796"],["E:/qinhao/hexo/public/archives/index.html","b43f5bfc43f1757f07a1a02621fc904d"],["E:/qinhao/hexo/public/archives/page/10/index.html","7fa00792205a2aeafb5530dcf4cc5afd"],["E:/qinhao/hexo/public/archives/page/11/index.html","7fa00792205a2aeafb5530dcf4cc5afd"],["E:/qinhao/hexo/public/archives/page/12/index.html","7fa00792205a2aeafb5530dcf4cc5afd"],["E:/qinhao/hexo/public/archives/page/13/index.html","359f05dd1c5dd26475f18bbbc4fb2876"],["E:/qinhao/hexo/public/archives/page/2/index.html","b43f5bfc43f1757f07a1a02621fc904d"],["E:/qinhao/hexo/public/archives/page/3/index.html","b43f5bfc43f1757f07a1a02621fc904d"],["E:/qinhao/hexo/public/archives/page/4/index.html","b43f5bfc43f1757f07a1a02621fc904d"],["E:/qinhao/hexo/public/archives/page/5/index.html","3122a321c114900c09741ebdd632dde7"],["E:/qinhao/hexo/public/archives/page/6/index.html","3122a321c114900c09741ebdd632dde7"],["E:/qinhao/hexo/public/archives/page/7/index.html","3122a321c114900c09741ebdd632dde7"],["E:/qinhao/hexo/public/archives/page/8/index.html","3122a321c114900c09741ebdd632dde7"],["E:/qinhao/hexo/public/archives/page/9/index.html","7fa00792205a2aeafb5530dcf4cc5afd"],["E:/qinhao/hexo/public/artitalk/index.html","0867b4f92bbc993955aec98b722e7317"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/bangumis/index.html","ddf5093b37b3a4d7e64d4ce705ae91e1"],["E:/qinhao/hexo/public/bitwarden/index.html","bd894339fe9397521a144031cee7a388"],["E:/qinhao/hexo/public/build-MAN-idea/index.html","d1def717c046fd0acc262e46de26de00"],["E:/qinhao/hexo/public/c-11/index.html","fdf7222f5e5e04a0239d0ace5962570a"],["E:/qinhao/hexo/public/c_1/index.html","723ca9b801f64b05805839ef092dafac"],["E:/qinhao/hexo/public/c_10/index.html","326f9ad778bad3f1e23012ab346a4a3d"],["E:/qinhao/hexo/public/c_2/index.html","6862969f5d6f26713aa8f462b63afecb"],["E:/qinhao/hexo/public/c_3/index.html","bdda1d7baee2ffee26c5843fd58a0fcb"],["E:/qinhao/hexo/public/c_4/index.html","5b6a84b7bb1a6671977e1a1153be378d"],["E:/qinhao/hexo/public/c_5/index.html","9212465cb98e653a3ec5324f05f0e87b"],["E:/qinhao/hexo/public/c_6/index.html","36e18089a8d29fa703c0a7252629d2f2"],["E:/qinhao/hexo/public/c_7/index.html","678f309836fb0191aeed4a6c216abbd9"],["E:/qinhao/hexo/public/c_8/index.html","8ff1e1299633753ca6b610514bd3c26c"],["E:/qinhao/hexo/public/c_9/index.html","be445e40009186b279ff40c753568dbc"],["E:/qinhao/hexo/public/categories/C语言/index.html","808f42d95103322e81387296bf881dce"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","2ea3b1e35b8c8a9276d2c3d542da742b"],["E:/qinhao/hexo/public/categories/Java/index.html","46124156b12a77fe6f85261dc07d161c"],["E:/qinhao/hexo/public/categories/Linux/index.html","ed42bfc5447a1a9bf99c12b2f36d89fe"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","322fae80335eec47712c48cc20ee4a64"],["E:/qinhao/hexo/public/categories/Python/index.html","e691dfbb94b6847f99ae1f957c7b67e8"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","cfee050a418fbe92c0a65d241fdc6142"],["E:/qinhao/hexo/public/categories/交换机/index.html","7d9a2b4b904c3b04e3ad6e23d70d1a9a"],["E:/qinhao/hexo/public/categories/前端学习/index.html","997b3dec40ba57e35735f368474835d1"],["E:/qinhao/hexo/public/categories/华为认证/index.html","b8e25d016540669a5db1771790d36882"],["E:/qinhao/hexo/public/categories/小技巧/index.html","591adde36be35474d9d4c4e07252c249"],["E:/qinhao/hexo/public/categories/操作系统/index.html","a698ea18340155f1883902c4d515c980"],["E:/qinhao/hexo/public/categories/操作系统/page/2/index.html","40a78f1ac4394146d93c2dda6fa524ce"],["E:/qinhao/hexo/public/categories/数据库/index.html","de6ec6e6bb4206fc6cc750712d8a8765"],["E:/qinhao/hexo/public/categories/数据结构/index.html","d286f3be29246bdd7a0efdc9cf98c99d"],["E:/qinhao/hexo/public/categories/服务器/index.html","36821493f79187548fd0e80377a908b0"],["E:/qinhao/hexo/public/categories/算法基础/index.html","95a21a69f312b9e008a1fed6792a9de0"],["E:/qinhao/hexo/public/categories/网络安全/index.html","4136be95bf2ab672e9a126d6fa08149c"],["E:/qinhao/hexo/public/categories/股票知识/index.html","55c797fe1a9fe0a4e55b151e11e93936"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","f74a1431c95701f5a3f90d904bb488e1"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","333e1e7c2a28d6ae90e2be463994ad8b"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","ad9b72ceb4d2b42c3a55dae02e71325d"],["E:/qinhao/hexo/public/categories/软件破解/index.html","82196c4d96a204e21242dc880cc5713c"],["E:/qinhao/hexo/public/categories/通信技术/index.html","cd3f458f2c94a0195b9c30d202e4f031"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","131bb859bcc7afd3b05df14ef84534c8"],["E:/qinhao/hexo/public/category/index.html","3943c5cedd64894a28508a51873c3b46"],["E:/qinhao/hexo/public/cinemas/index.html","ece0e7238d56a3770c03203fddcde0d0"],["E:/qinhao/hexo/public/color/index.html","c6b870b73626df5bb413e8a8aa011510"],["E:/qinhao/hexo/public/computer_Internet_1/index.html","60182024fb122686721eb1e82ffa60a1"],["E:/qinhao/hexo/public/computer_network_basics/index.html","c776f5920a2eb4d8f46e217b00e13f54"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","32f249f072182a7088a0f7a2c5b6dc9d"],["E:/qinhao/hexo/public/css_clear/index.html","fafa6c17bbca918fae08cd688bcca177"],["E:/qinhao/hexo/public/dataStructure-1/index.html","bfde75827d8cceac23c7e25f13b0f375"],["E:/qinhao/hexo/public/dataStructure-2/index.html","7d19d1525df3735b6244bf0faf9398bd"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","0dd8c02dbe3f0d582b1a52a1a00ed8af"],["E:/qinhao/hexo/public/donate/drinks/script.js","516bc286d1c162bf09c806066fda4171"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","12257cdd87244e6f517e5283e50f6c14"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","e2c9a14305bd9e3b7e5c0225b68af954"],["E:/qinhao/hexo/public/free-get-189vip/index.html","6a340d9d211a0df6f9949ec4a43e2666"],["E:/qinhao/hexo/public/friends/index.html","e73c1c876adbd85b162e0de0b5c179bf"],["E:/qinhao/hexo/public/gallery/index.html","8d50fbb618069b1ba298a474e247bb7d"],["E:/qinhao/hexo/public/gallery/reset/index.html","95a9f0afbed05c5a1561979a6fc8c43b"],["E:/qinhao/hexo/public/gallery/白敬亭/index.html","8f87c55b475b3873256aa9f5a2a4a436"],["E:/qinhao/hexo/public/gallery/赵今麦/index.html","83ad44443585447da249b4a097b34bc5"],["E:/qinhao/hexo/public/gcc/index.html","8b7812d744a345e12d7263d25cc08b87"],["E:/qinhao/hexo/public/huawei-PCManager/index.html","44e671a1847eeca5d23caef3b4e7900a"],["E:/qinhao/hexo/public/huawei-exam-application/index.html","d9dcced83fa96482bfb4d7d692db3b38"],["E:/qinhao/hexo/public/image/png/circle.png","5d85080e43c457b35b23f4ad8ceaa6c5"],["E:/qinhao/hexo/public/image/png/icp.png","37975a3be8087f62933f7aa3e7e80d12"],["E:/qinhao/hexo/public/image/png/left_ptr.png","b893704c321e35374e4bc97adb72048d"],["E:/qinhao/hexo/public/image/png/openhand.png","b040b0a64d22b7f40388391ac744949d"],["E:/qinhao/hexo/public/image/png/pointer.png","14c9f722890f733da3ae7fb15013a81a"],["E:/qinhao/hexo/public/image/png/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["E:/qinhao/hexo/public/image/png/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["E:/qinhao/hexo/public/image/png/safari.png","5e83f8d5772a61cd7036bd7bf3f84563"],["E:/qinhao/hexo/public/image/png/text.png","80d9f4da0a0c20b02898f23b035b17c8"],["E:/qinhao/hexo/public/image/png/weibo.png","2af288384e8aee34e94adae792942d2c"],["E:/qinhao/hexo/public/image/png/zoom-in.png","bf6da71dce828553d50a1ce3fd65163a"],["E:/qinhao/hexo/public/image/png/zoom-out.png","d5da599e9fd8344973c64b8ca109958b"],["E:/qinhao/hexo/public/image/svg/1f37b.svg","5e2ea03aa4963cda5e91d395c2587e6b"],["E:/qinhao/hexo/public/image/svg/1f389.svg","b052a4bef57c1aa73cd7cff5bc4fb61d"],["E:/qinhao/hexo/public/image/svg/1f4cc.svg","09204f6a96455580e749454b7449aa82"],["E:/qinhao/hexo/public/image/svg/1f4f0.svg","51cd8436fb99a6f12257db34780fb7a7"],["E:/qinhao/hexo/public/image/svg/1f516.svg","2424297076c0d1c8499820fc4f9d9f57"],["E:/qinhao/hexo/public/image/svg/1f5c3.svg","b542a360ed4cdceeac3bca73b455ebc6"],["E:/qinhao/hexo/public/index.html","3193ee18d09fff857ea06c874d0c5546"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/lanzous/index.html","d1185fdf7dabb98faccb939beb4e8955"],["E:/qinhao/hexo/public/linux/index.html","02e6a35fcd27073ed2e019f270616721"],["E:/qinhao/hexo/public/login_demo/index.html","4a15d7ce0934016ae82ab939cfdeb96b"],["E:/qinhao/hexo/public/manage-MAN-skill/index.html","85b124e4772ec2a6f876f9674546102f"],["E:/qinhao/hexo/public/memory_save_number/index.html","10fd8fae742937d27649201c1a8a013f"],["E:/qinhao/hexo/public/mobile_communication/index.html","c538b57460d12e001a5aa70d87396b11"],["E:/qinhao/hexo/public/movies/index.html","2f33d1df7ebb9a1972da48b7f5fffde4"],["E:/qinhao/hexo/public/mylist/index.html","b21431b3f792086039ce84db13da27fe"],["E:/qinhao/hexo/public/myphotos/index.html","d72b00fff80cfe1dbe155d7a479bf5f2"],["E:/qinhao/hexo/public/mysql-install/index.html","60ec20d666a82274ae20f2cb76d6eb9a"],["E:/qinhao/hexo/public/mysql_dql_1/index.html","d85004b6cf30e0da0f356d13350c3188"],["E:/qinhao/hexo/public/mysql_forget_root_password/index.html","b760199f36ddc0dcaf7f3a0cedbe7946"],["E:/qinhao/hexo/public/mysql_question_1/index.html","a0af0387f3707d60d62c530ab818ac9d"],["E:/qinhao/hexo/public/network_security_comprehensive/index.html","9928149fced04cf8e118da214b7c2745"],["E:/qinhao/hexo/public/not-allow-F12/index.html","61be50a8c041724873a68fa3a6e043c2"],["E:/qinhao/hexo/public/optical_transport_network_basic/index.html","ac8f1d3d885fc6459ab62a4349beca43"],["E:/qinhao/hexo/public/page/10/index.html","0f4ac57bdd4745cc928c4e2995c127b1"],["E:/qinhao/hexo/public/page/11/index.html","424ba7b58fdf5c20ebbd6034f6b5ac54"],["E:/qinhao/hexo/public/page/12/index.html","e18233f181287657630052b34dd21dba"],["E:/qinhao/hexo/public/page/13/index.html","b3595699b2578cc2331a3860385f8140"],["E:/qinhao/hexo/public/page/2/index.html","7317ff7abfe0391c16ca3977baa67954"],["E:/qinhao/hexo/public/page/3/index.html","38ea8720b74ae4991532fda79070285b"],["E:/qinhao/hexo/public/page/4/index.html","3bbc3d80991e44e0e2ba9b6e71c4ca0b"],["E:/qinhao/hexo/public/page/5/index.html","b7f87f2b7d4180fb7e303acce183601e"],["E:/qinhao/hexo/public/page/6/index.html","95137f375264cc5231682360f19299e0"],["E:/qinhao/hexo/public/page/7/index.html","5f037cc0324e223d25855ab4091c2e71"],["E:/qinhao/hexo/public/page/8/index.html","f8e3283a4b304b8c4262ec544a9e0859"],["E:/qinhao/hexo/public/page/9/index.html","00ddde2db25a2d0fbc8ebd274892a7c6"],["E:/qinhao/hexo/public/python-2/index.html","c09528065ba0b64f80d3812bf27deb61"],["E:/qinhao/hexo/public/ssh/index.html","d9aa6e01ed24b2f79f7e58fc82ca8bff"],["E:/qinhao/hexo/public/stock_1/index.html","96766a30e05f3ef109f45593ada1b5cd"],["E:/qinhao/hexo/public/stock_10/index.html","b41b297ba18cf5b3f0a09ce3fae5e54f"],["E:/qinhao/hexo/public/stock_11/index.html","1b339f66b7e856b731657a9b0f21ca13"],["E:/qinhao/hexo/public/stock_12/index.html","0e98a608d8051e9ddffe653488ea6298"],["E:/qinhao/hexo/public/stock_13/index.html","fbd1a57c586b992c4599bbe418b2eac7"],["E:/qinhao/hexo/public/stock_14/index.html","88fc2ff32d46ac02bb178778f610e6ba"],["E:/qinhao/hexo/public/stock_15/index.html","f5999a4b08510ec8cb3b2402203b5d11"],["E:/qinhao/hexo/public/stock_2/index.html","d9524bf763d8ef880375c2283c31ed04"],["E:/qinhao/hexo/public/stock_3/index.html","2a6091f2f33a85ff81a59703751b7b4c"],["E:/qinhao/hexo/public/stock_4/index.html","1020dd21f71527ffc66ba688b4f5e37a"],["E:/qinhao/hexo/public/stock_5/index.html","8be16f38038252222289580ce6faf801"],["E:/qinhao/hexo/public/stock_6/index.html","0fa01621a91a0daf4c47d753c27ae889"],["E:/qinhao/hexo/public/stock_7/index.html","83092f144c98a9931f4243e0eeea04d5"],["E:/qinhao/hexo/public/stock_8/index.html","cbc330dd807096626b7a77a73786de8a"],["E:/qinhao/hexo/public/stock_9/index.html","a822ca9c15c6360c581e004139398938"],["E:/qinhao/hexo/public/structure-of-MAN/index.html","bd0fda2a651e503f2576f4e2266b9b85"],["E:/qinhao/hexo/public/sw-register.js","96953590d20b0313d852df0bf5f0055a"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/switchport-security/index.html","492abaace6b7b41f6598435144a2ca87"],["E:/qinhao/hexo/public/system1/index.html","b97fb3c91334a5822451ef3459a3d23b"],["E:/qinhao/hexo/public/system10/index.html","45b50e032e3c8dcea634c75023019e98"],["E:/qinhao/hexo/public/system11/index.html","3ee936ec176b9f25652b6bea0b7d0ba9"],["E:/qinhao/hexo/public/system12/index.html","e5e64b71cab945d76509f1dee9d263dc"],["E:/qinhao/hexo/public/system2/index.html","6f3df9f66f5025e1994e0c3ce23bb5fc"],["E:/qinhao/hexo/public/system3/index.html","fd8daf5c0d6e1b102a376a1e15a65a0e"],["E:/qinhao/hexo/public/system4/index.html","9bc480cb2d59ab4a353fa101fb00bf47"],["E:/qinhao/hexo/public/system5/index.html","c27f34adc392506bb3597e4c2aea0485"],["E:/qinhao/hexo/public/system6/index.html","bad569203d6d6e8f63f0e493fc9f1e3f"],["E:/qinhao/hexo/public/system7/index.html","884eeba4e2b00579a78b1107ec4e4a32"],["E:/qinhao/hexo/public/system8/index.html","f8ab18b7e15c0ac4cf66777467fc72b3"],["E:/qinhao/hexo/public/system9/index.html","9f899bb41056dee44eb87c2f1db01270"],["E:/qinhao/hexo/public/system_info/index.html","a5c65394a7d5b7cc9fe8e1413ed29c8e"],["E:/qinhao/hexo/public/tags/index.html","ae8ae3b39f3e5ad253485ae303879962"],["E:/qinhao/hexo/public/utils/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/utils/css/all.min.css","84d8ad2b4fcdc0f0c58247e778133b3a"],["E:/qinhao/hexo/public/utils/css/font-awesome-animation.min.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/qinhao/hexo/public/utils/css/solarized-light.min.css","769d25bae36c449b6612b98809d01041"],["E:/qinhao/hexo/public/utils/css/waves.min.css","ad8ce7fc1d688135eedeedee534aa9a2"],["E:/qinhao/hexo/public/utils/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/js/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["E:/qinhao/hexo/public/utils/js/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["E:/qinhao/hexo/public/utils/js/artitalk.js","d94fe7817fad4ecae5681cbde76a4acc"],["E:/qinhao/hexo/public/utils/js/av-min.js","bcaf9b004ff4f49349bb6201fe3b9a5d"],["E:/qinhao/hexo/public/utils/js/bbtalk.min.js","a1ab1de2ae261228a7532e855f6980a5"],["E:/qinhao/hexo/public/utils/js/clipboard.min.js","27784b7376dd992368c71b6c5559f358"],["E:/qinhao/hexo/public/utils/js/comment_typing.js","ab7b34f055a2bf8e036daec67e968d1a"],["E:/qinhao/hexo/public/utils/js/flying-pages.min.js","c20e3f49966e71df80be9a6af59449dd"],["E:/qinhao/hexo/public/utils/js/highlight.min.js","a370252e88fa5c6611ab5005c7b87b96"],["E:/qinhao/hexo/public/utils/js/instant_page.js","1a3be845085b8d94a2997a3a472feb42"],["E:/qinhao/hexo/public/utils/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["E:/qinhao/hexo/public/utils/js/jquery.min.js","dc5e7f18c8d36ac1d3d4753a87c98d0a"],["E:/qinhao/hexo/public/utils/js/lazyload.min.js","0fcd5822c9e8af807a14d3985faf91c8"],["E:/qinhao/hexo/public/utils/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["E:/qinhao/hexo/public/utils/js/scrollreveal.min.js","f7d329c68b849d6685a7462c22f47ea2"],["E:/qinhao/hexo/public/utils/js/waves.min.js","9a5b3dfca09d9e3005dc697162d4bc65"],["E:/qinhao/hexo/public/utils/ttf/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["E:/qinhao/hexo/public/utils/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.ttf","ede4ff54ccb46fe67622dbcffeb90fdf"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.woff","07fa0741d97758debce36520d5a12d5b"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.ttf","04842b94683f70c18aeb76b5a27cd221"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.woff","f48a8829bec665258b9c85b23ecbf3c0"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.ttf","5f2f8485a00387b7a1d89e793555991f"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.woff","42d66a3eb75eac2b4fc0ee58e9846497"],["E:/qinhao/hexo/public/wireless_framework/index.html","aab286f65d07a5e80136f3fa208f40fb"],["E:/qinhao/hexo/public/wireless_radio/index.html","17670e31694c4c6df13f8af29052a307"],["E:/qinhao/hexo/public/wireless_word/index.html","3e090c17fff10f18a7c298ea640ec42a"],["E:/qinhao/hexo/public/xml/index.html","972ebae125337a4c51a3053c87e48f5e"]];
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







