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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/3G/index.html","d584a03031a8b3adeb9c40545eee6e82"],["E:/qinhao/hexo/public/5G网络优化/index.html","a9de7008bb51bde379ffdfa68be24198"],["E:/qinhao/hexo/public/Algorithm_1/index.html","75daf8540f49cce7b632b7f1f0002bd7"],["E:/qinhao/hexo/public/Base/index.html","57cf61ecf979347f71a8113afc159943"],["E:/qinhao/hexo/public/ByteDanceVerify.html","45b406147ec6f33e8207c84e10e8c812"],["E:/qinhao/hexo/public/CPU_Register/index.html","1f942415d31e65fd31be1ec2e88b206e"],["E:/qinhao/hexo/public/C_Programming_1/index.html","0af272d83dba60916f88ac8e90e32469"],["E:/qinhao/hexo/public/Design_patterns_1/index.html","fbf46dfbc9a11cc85e0fa73a00fbd45b"],["E:/qinhao/hexo/public/FileDownload/index.html","331b1ccba6a5bf349f71e45cfcb5eed4"],["E:/qinhao/hexo/public/Files_and_directories/index.html","85e8eab401dcfa60b404c9cac65677f9"],["E:/qinhao/hexo/public/FixedTools/index.html","49fc95bd77f6623c0168e4c07b022a64"],["E:/qinhao/hexo/public/GRE-VPN/index.html","0eb2cbfed01e27ef24cab7cbfbbcba7d"],["E:/qinhao/hexo/public/GRE-over-IPSec/index.html","9bbfe21642260004cad2dab04dc02dc5"],["E:/qinhao/hexo/public/GSM/index.html","2c0c3060dc0b3995993376534af881c7"],["E:/qinhao/hexo/public/ICIC/index.html","44dd9ed3d23664073f426a38167745e4"],["E:/qinhao/hexo/public/IPSec_VPN/index.html","43456b0814f85056a087ca41bd8a088c"],["E:/qinhao/hexo/public/IP_Bearer_Network_basic/index.html","f824fdf05c1d8dffdda9018e03b51b4b"],["E:/qinhao/hexo/public/JDBC/index.html","0b1df83fe23c6f6231aa1fdb95ed0e81"],["E:/qinhao/hexo/public/JDBCTemplate/index.html","9c1216857da2490f281886d10f039634"],["E:/qinhao/hexo/public/JDBC_SQL_injection/index.html","10f65e153b3550b3beae84cb40acfe44"],["E:/qinhao/hexo/public/LTE/index.html","01ddeb47e2f282c8bed161b87756b3b6"],["E:/qinhao/hexo/public/Layer/index.html","56e8fe4c552f7317ef8d4cf8ddc3f2cb"],["E:/qinhao/hexo/public/Linux_often_use/index.html","d54ea2a73a046904c522d0bddc74d11d"],["E:/qinhao/hexo/public/MIMO/index.html","687b44aa692870777512e2b93ef1f7d0"],["E:/qinhao/hexo/public/MySQL/index.html","01a562e016c6d74a84992a771c79d301"],["E:/qinhao/hexo/public/MySQL8_basics/index.html","a7fe12164a7e068a01bd43577837b825"],["E:/qinhao/hexo/public/MySQL_constraint/index.html","448ac62271739b896eb764e1614d7020"],["E:/qinhao/hexo/public/MySQL_transaction/index.html","5e7ae833655cc8bc4f5140b2db9a5c31"],["E:/qinhao/hexo/public/NB-IoT/index.html","0ba2c07f32478c40eda4146457b95430"],["E:/qinhao/hexo/public/Network_Access/index.html","981f8b14e75bcb98ee6e7c487e503194"],["E:/qinhao/hexo/public/No-module-named-pip/index.html","40250f6b95b5333a4da8bf8bb4da4a17"],["E:/qinhao/hexo/public/OFDMA/index.html","99630a023cad4a417c7fc51317ef9af1"],["E:/qinhao/hexo/public/OLT_command/index.html","5d3dd0a10533475ac39a042af46be86a"],["E:/qinhao/hexo/public/OverLoad_1/index.html","4d2bbc58b56e335c90f7c0a8d162a82e"],["E:/qinhao/hexo/public/Python-3/index.html","1342ef0ccd2173e435f76dbab79928b0"],["E:/qinhao/hexo/public/Python-4/index.html","6cffec08edac1787ef35bf14df82d900"],["E:/qinhao/hexo/public/Python-5/index.html","fbeba8ce99f8920fa1d4d676b9b6a188"],["E:/qinhao/hexo/public/PythonUdp/index.html","22da818ca467bed04b418d7e4b0d0aef"],["E:/qinhao/hexo/public/Python_basic/index.html","da988999917ba201f1d53e182150b6a2"],["E:/qinhao/hexo/public/Python_cards_manage/index.html","7e7973f6373028e36e6d5a2fe2af22e0"],["E:/qinhao/hexo/public/Python_variable/index.html","e9959bc9ba6164e969d3f3ad0aaa4beb"],["E:/qinhao/hexo/public/RedHat_setup_script/index.html","0e0af4215830065ad3ac43a29734aab0"],["E:/qinhao/hexo/public/TCP/index.html","af177711f85dbc52febeb91c8ef5c3b3"],["E:/qinhao/hexo/public/TCP_client/index.html","da0a202be4231379a58c140cc7c7b1fe"],["E:/qinhao/hexo/public/TCP_server/index.html","c25ca38834887344895a890b4d049fab"],["E:/qinhao/hexo/public/TD-LTE-System/index.html","57441d483e5d4e4afc6a4a326de0b795"],["E:/qinhao/hexo/public/Web_site_SSL/index.html","7d204228356d2b9a961ac3b5b02e0e49"],["E:/qinhao/hexo/public/Windows_Web_build_environment/index.html","2150ef3f0db09db1cc0165a8f854bd15"],["E:/qinhao/hexo/public/Windows_Web_build_website/index.html","4a2ae5a2fb38e5f78019853321e2eac5"],["E:/qinhao/hexo/public/Windows_Web_often_use/index.html","3daaaa6665bd387fe3443e2267e8171c"],["E:/qinhao/hexo/public/a_server_build_many_webs/index.html","0d0e46aa8bbc0214ebeb9d92b3c1ad01"],["E:/qinhao/hexo/public/about/index.html","bc12d52f1d15bec43eae245294bd5a7d"],["E:/qinhao/hexo/public/acl/index.html","4c3b12a0e8ec55228fbb83f675de1150"],["E:/qinhao/hexo/public/archives/2020/01/index.html","d69130499a125fedee80ffdee6f39f18"],["E:/qinhao/hexo/public/archives/2020/02/index.html","c4f981daea0025d4e16b095d66c976f8"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","d536b67013edecd6daf25afc801ed828"],["E:/qinhao/hexo/public/archives/2020/03/index.html","f3b837a4dcbe9b6f2764c1ac6cf7c6f8"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","96416f072dd165094289bfa36f181fdc"],["E:/qinhao/hexo/public/archives/2020/04/index.html","e1d3b5bcac532495d483e0c1d1645475"],["E:/qinhao/hexo/public/archives/2020/05/index.html","8746064d9132452226b91124070db368"],["E:/qinhao/hexo/public/archives/2020/06/index.html","8a3dfed6ee989d5ffbb5293409b017e9"],["E:/qinhao/hexo/public/archives/2020/07/index.html","e3a0f3e6736425358533ec7f1d673435"],["E:/qinhao/hexo/public/archives/2020/08/index.html","3f130910a09adfe4c81cd54257a0e7cf"],["E:/qinhao/hexo/public/archives/2020/10/index.html","ed6c695d37984e37192a3a2575bfdf2f"],["E:/qinhao/hexo/public/archives/2020/11/index.html","acc4be0680207029924d1e2c531848a8"],["E:/qinhao/hexo/public/archives/2020/index.html","c6958a1d4f0f2493eab5c9d106e7bdc9"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","6e093956173b1b01cc3a73149f3572b5"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","d674bcbbddff9d0b3215fb9a73fb72bc"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","996917739656d23d50b9c218d56fa09e"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","64579b1deeeace6d4d5e543a29138e7a"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","5527e4cbc1d3236537f44dbf32e872c8"],["E:/qinhao/hexo/public/archives/2021/03/index.html","68fd60cb2fa0a120736e012b449da72f"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","eaec9d72db53ea7c665d8a955eefb649"],["E:/qinhao/hexo/public/archives/2021/04/index.html","d2ab7e433396feca1d395f120f99b0de"],["E:/qinhao/hexo/public/archives/2021/05/index.html","333d331467c2c26a95998732708c8060"],["E:/qinhao/hexo/public/archives/2021/06/index.html","1a871acc01c63fb26124880a70e9bab7"],["E:/qinhao/hexo/public/archives/2021/07/index.html","5940dd317b9b1003c7ae1ff464563f62"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","d5ec865782cbd9bace12e9398a4d6afa"],["E:/qinhao/hexo/public/archives/2021/08/index.html","725da10bfbbacb28495216ebd2750e8d"],["E:/qinhao/hexo/public/archives/2021/09/index.html","27d5b45333bd7e40ffa09f73df560cb2"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","5a860968be828bb827a975a954cb8f93"],["E:/qinhao/hexo/public/archives/2021/10/index.html","418a0e489a4aceda7d921e94d27d60cb"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","ab10c04065d10f4fb4a65a28050a9a30"],["E:/qinhao/hexo/public/archives/2021/index.html","c41b30e18a19ec5de3710fe107ff4435"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","8a4102bc71285f9d3f5b71633eab83b2"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","ea584b9625842e499bc448e7d90bff45"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","d6c0fa59525fff6b2c300e1222bffaa0"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","fe514607df4dad02960759f6e6e5f129"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","71ac59210ddd5a483f9e76b4cc17298f"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","c41ce1d92816b8bf29e16f16080e4a70"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","18a6e66b31b2b09ff57190af44d7a02c"],["E:/qinhao/hexo/public/archives/index.html","cd7eda175fc39d98645386079444b055"],["E:/qinhao/hexo/public/archives/page/10/index.html","47a9edc7277b34abb1a06b884e12660d"],["E:/qinhao/hexo/public/archives/page/11/index.html","47a9edc7277b34abb1a06b884e12660d"],["E:/qinhao/hexo/public/archives/page/12/index.html","11e34f45486f44c8b1c83f7944415cb8"],["E:/qinhao/hexo/public/archives/page/13/index.html","11e34f45486f44c8b1c83f7944415cb8"],["E:/qinhao/hexo/public/archives/page/2/index.html","cd7eda175fc39d98645386079444b055"],["E:/qinhao/hexo/public/archives/page/3/index.html","3403a27544986178dafe9b6de1054f04"],["E:/qinhao/hexo/public/archives/page/4/index.html","3403a27544986178dafe9b6de1054f04"],["E:/qinhao/hexo/public/archives/page/5/index.html","3403a27544986178dafe9b6de1054f04"],["E:/qinhao/hexo/public/archives/page/6/index.html","3403a27544986178dafe9b6de1054f04"],["E:/qinhao/hexo/public/archives/page/7/index.html","3403a27544986178dafe9b6de1054f04"],["E:/qinhao/hexo/public/archives/page/8/index.html","47a9edc7277b34abb1a06b884e12660d"],["E:/qinhao/hexo/public/archives/page/9/index.html","47a9edc7277b34abb1a06b884e12660d"],["E:/qinhao/hexo/public/artitalk/index.html","084931c970164cb9e0062092ad98f66c"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/bangumis/index.html","fafe742a61fc7c12d59ebdd94076a1eb"],["E:/qinhao/hexo/public/bitwarden/index.html","79a3dd0caf722eb33252bf32ff18d487"],["E:/qinhao/hexo/public/build-MAN-idea/index.html","3377965ec55e971492d62241d90430e5"],["E:/qinhao/hexo/public/c-11/index.html","33d993556ab453c24968c0e2af9f0346"],["E:/qinhao/hexo/public/c_1/index.html","d7bf3e5823c91ee26fdeba8d1b7d02bb"],["E:/qinhao/hexo/public/c_10/index.html","34dde31d9c6d8ae8017c7e31b6f811c4"],["E:/qinhao/hexo/public/c_2/index.html","434a948bb724688ccec6eba4df277b33"],["E:/qinhao/hexo/public/c_3/index.html","8edcd49e78357fa5d18ed271f676a66d"],["E:/qinhao/hexo/public/c_4/index.html","02d71170bac025fad6488fdcbef6b837"],["E:/qinhao/hexo/public/c_5/index.html","9d53454b69766a52d3d0919289055c6f"],["E:/qinhao/hexo/public/c_6/index.html","1a1638d22597e173adf3660d8b90e2ff"],["E:/qinhao/hexo/public/c_7/index.html","55ecb02608964ee8e3878d300d397718"],["E:/qinhao/hexo/public/c_8/index.html","40bf468f918ceca49360e73a9d22a707"],["E:/qinhao/hexo/public/c_9/index.html","261d780f7264b55c029fafb4b09ae6db"],["E:/qinhao/hexo/public/categories/C语言/index.html","f8964ba5259a6b620b4a0130b42028c9"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","39e2178bfb09234239ee53906eb6d583"],["E:/qinhao/hexo/public/categories/Java/index.html","e020135006350b80e077e9919be65172"],["E:/qinhao/hexo/public/categories/Linux/index.html","82b2b7eb5b0559736ff960cc7ef09247"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","46dc801fffe5cd881ae87b12c679fefa"],["E:/qinhao/hexo/public/categories/Python/index.html","3fa34d7d5c305e51561bf198e8dea2d6"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","d5ad9cbfac70fa473c76916240a1b036"],["E:/qinhao/hexo/public/categories/交换机/index.html","a5c66843b0c74664c57e77536547c24d"],["E:/qinhao/hexo/public/categories/前端学习/index.html","1a5a838309728566736d213e511176cc"],["E:/qinhao/hexo/public/categories/华为认证/index.html","a63e8cec525aae1f1d2e093504a084e0"],["E:/qinhao/hexo/public/categories/小技巧/index.html","e553083bd0d985390c59c05b3ffb2d7c"],["E:/qinhao/hexo/public/categories/操作系统/index.html","a6f7f58608f7850a8f9f73d3b3a2833b"],["E:/qinhao/hexo/public/categories/操作系统/page/2/index.html","d8b9b8a93bcf04b91899aaf1c8807eba"],["E:/qinhao/hexo/public/categories/数据库/index.html","9e2a8c716db3843865f9d56fe3fbc97c"],["E:/qinhao/hexo/public/categories/数据结构/index.html","b815f02a7c1c39ca6469e88e569a20bc"],["E:/qinhao/hexo/public/categories/服务器/index.html","17c445ffc9871a86db5e9a88003eae1f"],["E:/qinhao/hexo/public/categories/算法基础/index.html","505564ee7239d3cc345a71535c08a4cf"],["E:/qinhao/hexo/public/categories/网络安全/index.html","ab13b1e5ac5213a1e1c09912fdfd1d5a"],["E:/qinhao/hexo/public/categories/股票知识/index.html","432c66d496638c42c6ca725474f251b1"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","d116c44629cfb4d2f1c2f527769a7ab8"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","154f34f0f43eb0a13d44943d3addbe17"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","2977bfe3f2967f840cf227cfaa93ca65"],["E:/qinhao/hexo/public/categories/软件破解/index.html","df300bff9622407afabcc49942cdadb0"],["E:/qinhao/hexo/public/categories/通信技术/index.html","aecc4f3f67237425b9b723ea85aef7bc"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","efba825ae6df782dcb2fcdc29ca5ca55"],["E:/qinhao/hexo/public/category/index.html","c41887678e4f8b80abae6c294027eb94"],["E:/qinhao/hexo/public/cinemas/index.html","0cb1b4f3fbeb891ca38c42492b234694"],["E:/qinhao/hexo/public/color/index.html","7d3a8c4c9e0c7089a094055ac2776f82"],["E:/qinhao/hexo/public/computer_Internet_1/index.html","9633dbd08598beda898967d062a23266"],["E:/qinhao/hexo/public/computer_network_basics/index.html","ad99a6d313d6e4788036116cf7f255ff"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","32f249f072182a7088a0f7a2c5b6dc9d"],["E:/qinhao/hexo/public/css_clear/index.html","a8e86a40aaa6dc9f470f86128bf34010"],["E:/qinhao/hexo/public/dataStructure-1/index.html","5ff692250afcce1562239e66a44a3ffc"],["E:/qinhao/hexo/public/dataStructure-2/index.html","9e455f650dec0d6a69f467ae2979a5b6"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","e2c9a14305bd9e3b7e5c0225b68af954"],["E:/qinhao/hexo/public/free-get-189vip/index.html","2272180e4dbbf11a774110cd9ab28a09"],["E:/qinhao/hexo/public/friends/index.html","aeed5bd3885c08209525c5b86d95dc10"],["E:/qinhao/hexo/public/gallery/index.html","1ec3665ef9d87414dd7694914020fae7"],["E:/qinhao/hexo/public/gallery/reset/index.html","35b2d6cc7d87e4ce0bdfe7d368d703d8"],["E:/qinhao/hexo/public/gallery/白敬亭/index.html","51c4b84bdadb4e137cf591c987f7a837"],["E:/qinhao/hexo/public/gallery/赵今麦/index.html","9c459e1ccd16af41248e596797dd3b81"],["E:/qinhao/hexo/public/gcc/index.html","62005adbbc8287d3e0b6856d2b9fab2f"],["E:/qinhao/hexo/public/huawei-PCManager/index.html","3d3727516889a28d4ce943c84c9d18cb"],["E:/qinhao/hexo/public/huawei-exam-application/index.html","b45aa3585a04b4ad9388146c52faa3da"],["E:/qinhao/hexo/public/image/png/circle.png","5d85080e43c457b35b23f4ad8ceaa6c5"],["E:/qinhao/hexo/public/image/png/icp.png","37975a3be8087f62933f7aa3e7e80d12"],["E:/qinhao/hexo/public/image/png/left_ptr.png","b893704c321e35374e4bc97adb72048d"],["E:/qinhao/hexo/public/image/png/openhand.png","b040b0a64d22b7f40388391ac744949d"],["E:/qinhao/hexo/public/image/png/pointer.png","14c9f722890f733da3ae7fb15013a81a"],["E:/qinhao/hexo/public/image/png/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["E:/qinhao/hexo/public/image/png/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["E:/qinhao/hexo/public/image/png/safari.png","5e83f8d5772a61cd7036bd7bf3f84563"],["E:/qinhao/hexo/public/image/png/text.png","80d9f4da0a0c20b02898f23b035b17c8"],["E:/qinhao/hexo/public/image/png/weibo.png","2af288384e8aee34e94adae792942d2c"],["E:/qinhao/hexo/public/image/png/zoom-in.png","bf6da71dce828553d50a1ce3fd65163a"],["E:/qinhao/hexo/public/image/png/zoom-out.png","d5da599e9fd8344973c64b8ca109958b"],["E:/qinhao/hexo/public/image/svg/1f37b.svg","5e2ea03aa4963cda5e91d395c2587e6b"],["E:/qinhao/hexo/public/image/svg/1f389.svg","b052a4bef57c1aa73cd7cff5bc4fb61d"],["E:/qinhao/hexo/public/image/svg/1f4cc.svg","09204f6a96455580e749454b7449aa82"],["E:/qinhao/hexo/public/image/svg/1f4f0.svg","51cd8436fb99a6f12257db34780fb7a7"],["E:/qinhao/hexo/public/image/svg/1f516.svg","2424297076c0d1c8499820fc4f9d9f57"],["E:/qinhao/hexo/public/image/svg/1f5c3.svg","b542a360ed4cdceeac3bca73b455ebc6"],["E:/qinhao/hexo/public/index.html","c62de1b56fc791c979003a63ba90f478"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/lanzous/index.html","03abc15103e5849a1e23d9fa6e2c23cd"],["E:/qinhao/hexo/public/linux/index.html","095c2824fae80750fb1103d9b088e821"],["E:/qinhao/hexo/public/login_demo/index.html","02b0b5c694032a7f7f8d2bb035ef76e6"],["E:/qinhao/hexo/public/manage-MAN-skill/index.html","617a965f1928097c5de557aa6fd853ca"],["E:/qinhao/hexo/public/memory_save_number/index.html","86178438ff9263e86f78369b5814d987"],["E:/qinhao/hexo/public/mobile_communication/index.html","fc2bb03ea242cfc1acede185a7cef341"],["E:/qinhao/hexo/public/movies/index.html","cb7687bedcd1a81f58d3678da889b39b"],["E:/qinhao/hexo/public/mylist/index.html","d9e988f35023e9986785f547e354533f"],["E:/qinhao/hexo/public/myphotos/index.html","5afdde64c58311acff008fe46225f71d"],["E:/qinhao/hexo/public/mysql-install/index.html","03f124ef85aea2c83ad56fa22dfba4bc"],["E:/qinhao/hexo/public/mysql_dql_1/index.html","010456e61a213df9d0c11f7410672eb5"],["E:/qinhao/hexo/public/mysql_forget_root_password/index.html","0cc9e5fdd24091a2fbb62c97380473c9"],["E:/qinhao/hexo/public/mysql_question_1/index.html","af62511c40a40afa13c6074fff6ed2d2"],["E:/qinhao/hexo/public/network_security_comprehensive/index.html","f90bb211ed3eca7f516a881e08c3ac50"],["E:/qinhao/hexo/public/not-allow-F12/index.html","ce1098ebe23840751c03d349dee18b0d"],["E:/qinhao/hexo/public/optical_transport_network_basic/index.html","31119d22bca15a10eb0d4990020d1336"],["E:/qinhao/hexo/public/page/10/index.html","4651d034c4c0d4ff97962ed34200ebf0"],["E:/qinhao/hexo/public/page/11/index.html","6958412cf2a87360f8576f4c1a5447e1"],["E:/qinhao/hexo/public/page/12/index.html","3181a2d79b4b419bf205578e1683d284"],["E:/qinhao/hexo/public/page/13/index.html","bc8aa2b4d9fd05690df36d10143f0c44"],["E:/qinhao/hexo/public/page/2/index.html","81847f63b60480d30400f8fc3ab50d88"],["E:/qinhao/hexo/public/page/3/index.html","25ee4c3f387498519b7a0896f29b366d"],["E:/qinhao/hexo/public/page/4/index.html","ecbee2d4ae474078928174a8d63863cc"],["E:/qinhao/hexo/public/page/5/index.html","cfd4a8e9da11072355a76fc0d0c3981b"],["E:/qinhao/hexo/public/page/6/index.html","a3fabfe1034f590fd940fe9efb27bfcf"],["E:/qinhao/hexo/public/page/7/index.html","b9271f80dc7edbb75c5d0d039fac7582"],["E:/qinhao/hexo/public/page/8/index.html","16e122f8dc949e4913c2e691513c5f14"],["E:/qinhao/hexo/public/page/9/index.html","39b30009a6a6713e885cb6b625ecc451"],["E:/qinhao/hexo/public/python-2/index.html","45900012242fe5a4e3354e0f6a97916b"],["E:/qinhao/hexo/public/ssh/index.html","e55b2fff42c1e1438e1e9cf90fa3edfe"],["E:/qinhao/hexo/public/stock_1/index.html","381105da0aee7ae829306b3f6cda34fa"],["E:/qinhao/hexo/public/stock_10/index.html","b1e68a9d5fa4678b34b90df16ccf856b"],["E:/qinhao/hexo/public/stock_11/index.html","6965fcfa3ca62a04104e20f98d90db7a"],["E:/qinhao/hexo/public/stock_12/index.html","a85ca1756b3a12145defc6f2fd37084b"],["E:/qinhao/hexo/public/stock_13/index.html","4af7b4285e7e5188574d0658a817fbfd"],["E:/qinhao/hexo/public/stock_14/index.html","af004483a6c6d4365876346b1cc36a27"],["E:/qinhao/hexo/public/stock_15/index.html","ae623aa40c0754d511d93e5c1e7bcc12"],["E:/qinhao/hexo/public/stock_2/index.html","74057aeb56688cefd9c601d4c5b34c2e"],["E:/qinhao/hexo/public/stock_3/index.html","85a7e59832927d3c82f50382b8151c74"],["E:/qinhao/hexo/public/stock_4/index.html","e5d62e9c589a792e06d9fbd5baf06974"],["E:/qinhao/hexo/public/stock_5/index.html","6ba2a1a31eba1e88f752d6d5448a7602"],["E:/qinhao/hexo/public/stock_6/index.html","e6c28ff31ca4a01b9333b06fed779190"],["E:/qinhao/hexo/public/stock_7/index.html","1af436c824c8a63091302d55ced98002"],["E:/qinhao/hexo/public/stock_8/index.html","88f4138b9572e5daf0cd8f64f145c504"],["E:/qinhao/hexo/public/stock_9/index.html","de8f00ef051906f6b37457cfaa972ea9"],["E:/qinhao/hexo/public/structure-of-MAN/index.html","1e36975bffa90f3c1178ff881433f0a5"],["E:/qinhao/hexo/public/sw-register.js","b9f54d0880c4e06e823b99a4cb528f85"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/switchport-security/index.html","1fbedbe405c2737116838caf5421892d"],["E:/qinhao/hexo/public/system1/index.html","009fd129cf0e04c938ab82824d440705"],["E:/qinhao/hexo/public/system10/index.html","afbce15c92b161b76cbee58b2fc0bcc3"],["E:/qinhao/hexo/public/system11/index.html","00dabdc31f159e7b2554b06251d51b6d"],["E:/qinhao/hexo/public/system12/index.html","6eecbc28c1bd4172776f1840576190f7"],["E:/qinhao/hexo/public/system2/index.html","118759d5145f5b9c351ab5e7a382ec2e"],["E:/qinhao/hexo/public/system3/index.html","6d08f4ada934f0521c4950c4fae6ecb8"],["E:/qinhao/hexo/public/system4/index.html","c8987080a310f922704bcd7f5fb8e584"],["E:/qinhao/hexo/public/system5/index.html","cb4dc86426fb42b93647b32fd2cf08a3"],["E:/qinhao/hexo/public/system6/index.html","b5e13bfb7a27619953750548f7ba1e41"],["E:/qinhao/hexo/public/system7/index.html","88639547f730055b0ec1ef87ff2ad6b3"],["E:/qinhao/hexo/public/system8/index.html","0f92e2bb5d92ae5fb9c6bcd432103022"],["E:/qinhao/hexo/public/system9/index.html","44bff4c05bb91c430f5c12a10e8ddc01"],["E:/qinhao/hexo/public/system_info/index.html","dd4f091c092a5b46e3aec1c8cf20c0c3"],["E:/qinhao/hexo/public/tags/index.html","a41eddc8ac1553d63e8cc8f20b128efb"],["E:/qinhao/hexo/public/utils/css/all.min.css","84d8ad2b4fcdc0f0c58247e778133b3a"],["E:/qinhao/hexo/public/utils/css/font-awesome-animation.min.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/qinhao/hexo/public/utils/css/solarized-light.min.css","769d25bae36c449b6612b98809d01041"],["E:/qinhao/hexo/public/utils/css/waves.min.css","ad8ce7fc1d688135eedeedee534aa9a2"],["E:/qinhao/hexo/public/utils/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/js/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["E:/qinhao/hexo/public/utils/js/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["E:/qinhao/hexo/public/utils/js/artitalk.js","d94fe7817fad4ecae5681cbde76a4acc"],["E:/qinhao/hexo/public/utils/js/av-min.js","bcaf9b004ff4f49349bb6201fe3b9a5d"],["E:/qinhao/hexo/public/utils/js/bbtalk.min.js","a1ab1de2ae261228a7532e855f6980a5"],["E:/qinhao/hexo/public/utils/js/click_show_text.js","dd15584997caf652403aa3d5e9e1c543"],["E:/qinhao/hexo/public/utils/js/clipboard.min.js","27784b7376dd992368c71b6c5559f358"],["E:/qinhao/hexo/public/utils/js/comment_typing.js","ab7b34f055a2bf8e036daec67e968d1a"],["E:/qinhao/hexo/public/utils/js/flying-pages.min.js","c20e3f49966e71df80be9a6af59449dd"],["E:/qinhao/hexo/public/utils/js/highlight.min.js","a370252e88fa5c6611ab5005c7b87b96"],["E:/qinhao/hexo/public/utils/js/instant_page.js","1a3be845085b8d94a2997a3a472feb42"],["E:/qinhao/hexo/public/utils/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["E:/qinhao/hexo/public/utils/js/jquery.min.js","dc5e7f18c8d36ac1d3d4753a87c98d0a"],["E:/qinhao/hexo/public/utils/js/lazyload.min.js","0fcd5822c9e8af807a14d3985faf91c8"],["E:/qinhao/hexo/public/utils/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["E:/qinhao/hexo/public/utils/js/scrollreveal.min.js","f7d329c68b849d6685a7462c22f47ea2"],["E:/qinhao/hexo/public/utils/js/waves.min.js","9a5b3dfca09d9e3005dc697162d4bc65"],["E:/qinhao/hexo/public/utils/ttf/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["E:/qinhao/hexo/public/utils/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.ttf","ede4ff54ccb46fe67622dbcffeb90fdf"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.woff","07fa0741d97758debce36520d5a12d5b"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.ttf","04842b94683f70c18aeb76b5a27cd221"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.woff","f48a8829bec665258b9c85b23ecbf3c0"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.ttf","5f2f8485a00387b7a1d89e793555991f"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.woff","42d66a3eb75eac2b4fc0ee58e9846497"],["E:/qinhao/hexo/public/wireless_framework/index.html","e12dae411bb3dd405b09c0516037aa86"],["E:/qinhao/hexo/public/wireless_radio/index.html","ece1ab695f0a7145f4154261aa4a0975"],["E:/qinhao/hexo/public/wireless_word/index.html","b4524139ecedd2cdf74238e0996b5b6e"],["E:/qinhao/hexo/public/xml/index.html","f9569c718cd59ea732e71847ed7f9076"]];
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







