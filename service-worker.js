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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/3G/index.html","20f1b41e9d75820cbb4c7303652cfc2b"],["E:/qinhao/hexo/public/404.html","449566d63d31bad401ad6da8328b1207"],["E:/qinhao/hexo/public/404/assets/css/bootstrap.min.css","6f6a19862483166ac73fcc2645006bca"],["E:/qinhao/hexo/public/404/assets/css/style.css","132ed6b14aa0e3d83eb3657a486042d5"],["E:/qinhao/hexo/public/404/assets/js/gsap.min.js","00e4b3172efa7bc9f131940a997bc067"],["E:/qinhao/hexo/public/404/assets/js/script.js","0540d3f1469bf028b5373ab4ca32e271"],["E:/qinhao/hexo/public/5G网络优化/index.html","269b3c09eb8595b4ef31fb00c9d0f23a"],["E:/qinhao/hexo/public/Algorithm_1/index.html","3087c89c735b1e8d562eea2ff48bbec7"],["E:/qinhao/hexo/public/Base/index.html","96e77376d02ee995099a6550747e71ff"],["E:/qinhao/hexo/public/ByteDanceVerify.html","49dcabe7a29ea52b67fc774777320c3e"],["E:/qinhao/hexo/public/CPU_Register/index.html","3ac6b2ce2be0af908569626355daa14a"],["E:/qinhao/hexo/public/C_Programming_1/index.html","d5f549c30e25c59bca57a791030d9587"],["E:/qinhao/hexo/public/Design_patterns_1/index.html","1acf7100d46f4e2b43740b25214b5309"],["E:/qinhao/hexo/public/FileDownload/index.html","4a7319718768dbf50e520690444bf4c1"],["E:/qinhao/hexo/public/Files_and_directories/index.html","7339ea0d988174da43ab24195f0bab21"],["E:/qinhao/hexo/public/FixedTools/index.html","83c0526f4a21c56039e4ab569b38d6f0"],["E:/qinhao/hexo/public/GRE-VPN/index.html","467b28e311f43af5fe6e33b976c612ae"],["E:/qinhao/hexo/public/GRE-over-IPSec/index.html","28f14d06a72680ad716955f5c0ee14b9"],["E:/qinhao/hexo/public/GSM/index.html","c00b083083f0c2fe08ebe59665a5bca4"],["E:/qinhao/hexo/public/ICIC/index.html","ede77efcc5499c21a853001108abde50"],["E:/qinhao/hexo/public/IPSec_VPN/index.html","b7c495cb486f0929d86a4dac9f185e20"],["E:/qinhao/hexo/public/IP_Bearer_Network_basic/index.html","30275dd3ba3a7fa69d6884de3cdb2b1a"],["E:/qinhao/hexo/public/JDBC/index.html","bd980b25d00539d5b15c461fafa62ce9"],["E:/qinhao/hexo/public/JDBCTemplate/index.html","2c9803628e78f277b6e248f00497a183"],["E:/qinhao/hexo/public/JDBC_SQL_injection/index.html","7f551ccbdeea137ae2018e17c4feb6ab"],["E:/qinhao/hexo/public/LTE/index.html","c2dc15fdc7b2158099d5c81aebef8e84"],["E:/qinhao/hexo/public/Layer/index.html","1316913f4481b267f83e426e94ef1140"],["E:/qinhao/hexo/public/Linux_often_use/index.html","dc9525bbfba45d1e08e2f72844da5017"],["E:/qinhao/hexo/public/MIMO/index.html","05f50c55788947258afd00d7a5469854"],["E:/qinhao/hexo/public/MySQL/index.html","c3aefd405b1e9ef82bde5da91c71656c"],["E:/qinhao/hexo/public/MySQL8_basics/index.html","14e70d1eb53db86abab834ebdfe3ced8"],["E:/qinhao/hexo/public/MySQL_constraint/index.html","04002c70fc4e0e3914d38808457f3a23"],["E:/qinhao/hexo/public/MySQL_transaction/index.html","fcc0212e5c16f661e91d7ea1847e5981"],["E:/qinhao/hexo/public/NB-IoT/index.html","6f27fc1c8bd6d4c909b1cf0af71a4585"],["E:/qinhao/hexo/public/Network_Access/index.html","1a56440e642f2a66da4c0fb714dfc131"],["E:/qinhao/hexo/public/No-module-named-pip/index.html","3e6818d640d21f737bb80b9104ed4d85"],["E:/qinhao/hexo/public/OFDMA/index.html","9540b1d0d0eb216694fcf49ef5a464c1"],["E:/qinhao/hexo/public/OLT_command/index.html","ce0533f73ed96014f5f28331d05f3dc1"],["E:/qinhao/hexo/public/OverLoad_1/index.html","910786726b6132abf1c82ad5d8ff0f53"],["E:/qinhao/hexo/public/Python-3/index.html","42d1c860c6a8e1039259a894517c97a6"],["E:/qinhao/hexo/public/Python-4/index.html","ac1a93d3fedecbc1be466f661d101e5b"],["E:/qinhao/hexo/public/Python-5/index.html","0de17534bb389003f92dcfb4c0dd2389"],["E:/qinhao/hexo/public/PythonUdp/index.html","792bf6c9f9a4e816dc882356a224ae71"],["E:/qinhao/hexo/public/Python_basic/index.html","2879472d5a50b1172e16581f99c32069"],["E:/qinhao/hexo/public/Python_cards_manage/index.html","20ea80274fe13fd110d5183a369739cd"],["E:/qinhao/hexo/public/Python_variable/index.html","fc75a8196cef21db0db968b54bb6effa"],["E:/qinhao/hexo/public/RedHat_setup_script/index.html","c81011bc6c57939b59e42c2f598625f2"],["E:/qinhao/hexo/public/TCP/index.html","d52bd9df419b1ba84435197bdb691b8a"],["E:/qinhao/hexo/public/TCP_client/index.html","b23ac90b0b53dfbae3515c08e1688f1f"],["E:/qinhao/hexo/public/TCP_server/index.html","d1939bbdfe99abbf6939702527c8c13a"],["E:/qinhao/hexo/public/TD-LTE-System/index.html","b0521826d200368f90decf5d2647c14d"],["E:/qinhao/hexo/public/Web_site_SSL/index.html","5128ef92b56db0dec9eb5386741c1cd8"],["E:/qinhao/hexo/public/Windows_Web_build_environment/index.html","d05b738f0617116e3799fa008a713c42"],["E:/qinhao/hexo/public/Windows_Web_build_website/index.html","a91f4cc7367531acebf92fe40de77510"],["E:/qinhao/hexo/public/Windows_Web_often_use/index.html","827e61e20a180796d79fd1310e155363"],["E:/qinhao/hexo/public/a_server_build_many_webs/index.html","b328f8df747ce6effd9fc8c97f449e4f"],["E:/qinhao/hexo/public/about/index.html","58fc3ac542f3ff2aaf22429302ed1dc0"],["E:/qinhao/hexo/public/acl/index.html","17e89f76d3f382cd753f4f0967463fd8"],["E:/qinhao/hexo/public/archives/2020/01/index.html","a21f1435a762512f9ce35a72d6688355"],["E:/qinhao/hexo/public/archives/2020/02/index.html","16c17d4452549493f5fd63c6558c047d"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","c87078fb244bf24c0536d3653901de3c"],["E:/qinhao/hexo/public/archives/2020/03/index.html","04cb50d191ac5fd1c55747ec63499b7a"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","db34936ae69f1611544c0dfeccf81a50"],["E:/qinhao/hexo/public/archives/2020/04/index.html","240fed72a036721ebe018a73f4eb2edb"],["E:/qinhao/hexo/public/archives/2020/05/index.html","7ac8f72bbc168aeaf4a747b7ccafc26f"],["E:/qinhao/hexo/public/archives/2020/06/index.html","091fae1a5ecab9e73e4ffdd7b3087f66"],["E:/qinhao/hexo/public/archives/2020/07/index.html","1558c5555e98e9d83852f7681fd09850"],["E:/qinhao/hexo/public/archives/2020/08/index.html","0c0b1873863ef412e37c4eb1a519eb78"],["E:/qinhao/hexo/public/archives/2020/10/index.html","b9fda5f29410e372915df53eee237479"],["E:/qinhao/hexo/public/archives/2020/11/index.html","6084f49de20d56b961b5e23415c81e67"],["E:/qinhao/hexo/public/archives/2020/index.html","754b922dfac9a596548c76a53cd4c3ff"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","ce52df25e56e5e780be8ce7ad7ca5a8b"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","1231cdac18336598a34235e5e21ec105"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","0013f4706d565327eb4c20101a4d5630"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","f43951a88c8275c03612ac4b970afc28"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","f95f75f077b8d41f9f6631d5d70acf9e"],["E:/qinhao/hexo/public/archives/2021/03/index.html","4fb0c0b1beb78dbd346913519d8257a8"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","03f3d5300d7522bd0227433840ef7289"],["E:/qinhao/hexo/public/archives/2021/04/index.html","cda86bbcfea2077a5661f53291b32a60"],["E:/qinhao/hexo/public/archives/2021/05/index.html","d335c7880b92c983fe6649f20caceb9c"],["E:/qinhao/hexo/public/archives/2021/06/index.html","614566bfdaf37f8cee9970e35ed28f3b"],["E:/qinhao/hexo/public/archives/2021/07/index.html","c5126de843e2677504be2e136fdf30eb"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","0e373443eee76a8da17ce1c6c9d63750"],["E:/qinhao/hexo/public/archives/2021/08/index.html","0762bfe1991f38e4f345a03f4ad0c69a"],["E:/qinhao/hexo/public/archives/2021/09/index.html","7d4ea5b86c213655cb37588dce713601"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","1b8fd4d5e3c9f6afadf1d1862c2a9176"],["E:/qinhao/hexo/public/archives/2021/10/index.html","a149e2b0d599747604a3e7328d54d7d7"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","766647913f030e9e23df58d88481a428"],["E:/qinhao/hexo/public/archives/2021/index.html","ddf471904f9895fb2d3388abb5e72010"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","eb66baaa429408acedaf4308a9407778"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","8b0f114eebdb0d8c33c1d260ba573d4d"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","be6cac2e21ba4e8921debb0cd90aff7b"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","4d21b15272c3d7cf72acd189ecc5de31"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","91fe3114d9638071e309a49b4072abd1"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","1217a19111285c40579daf5387349bbb"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","c02d8162c78c9453bf949a53213fc6f3"],["E:/qinhao/hexo/public/archives/index.html","a837fb517fe7e499afd8a08928b0fb39"],["E:/qinhao/hexo/public/archives/page/10/index.html","24490e2c38393868902d8e3ace427a58"],["E:/qinhao/hexo/public/archives/page/11/index.html","1815534668866cc4c16b3a3976447426"],["E:/qinhao/hexo/public/archives/page/12/index.html","1815534668866cc4c16b3a3976447426"],["E:/qinhao/hexo/public/archives/page/13/index.html","1815534668866cc4c16b3a3976447426"],["E:/qinhao/hexo/public/archives/page/2/index.html","8e11166fbb2c1c00478d11713b11b77e"],["E:/qinhao/hexo/public/archives/page/3/index.html","8e11166fbb2c1c00478d11713b11b77e"],["E:/qinhao/hexo/public/archives/page/4/index.html","8e11166fbb2c1c00478d11713b11b77e"],["E:/qinhao/hexo/public/archives/page/5/index.html","8e11166fbb2c1c00478d11713b11b77e"],["E:/qinhao/hexo/public/archives/page/6/index.html","8e11166fbb2c1c00478d11713b11b77e"],["E:/qinhao/hexo/public/archives/page/7/index.html","24490e2c38393868902d8e3ace427a58"],["E:/qinhao/hexo/public/archives/page/8/index.html","24490e2c38393868902d8e3ace427a58"],["E:/qinhao/hexo/public/archives/page/9/index.html","24490e2c38393868902d8e3ace427a58"],["E:/qinhao/hexo/public/artitalk/index.html","2248adfcc811bda4d6efa2860b94244a"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/bangumis/index.html","f31657249f0639fe26b0356fd86946b9"],["E:/qinhao/hexo/public/bitwarden/index.html","cc378a773f8a9fbf866d9d15822666b5"],["E:/qinhao/hexo/public/build-MAN-idea/index.html","01d0742098e4630bb4e7d3ec2f8d3e0e"],["E:/qinhao/hexo/public/c-11/index.html","85adc9ba2b29571c3f027747c97ac6e5"],["E:/qinhao/hexo/public/c_1/index.html","c287b793425da4f7947cbff705c18c62"],["E:/qinhao/hexo/public/c_10/index.html","6f6709e9f4b12c86f3da0cd3cd11b35f"],["E:/qinhao/hexo/public/c_2/index.html","5d0a5ac71c3aa79a82d68aa853441bc8"],["E:/qinhao/hexo/public/c_3/index.html","9fba6312d1010b0d72150dfde167691b"],["E:/qinhao/hexo/public/c_4/index.html","bb3fab8f2d947d63b3bd59a502e2bbda"],["E:/qinhao/hexo/public/c_5/index.html","7d260c73931dba26ca78dd00d52ea462"],["E:/qinhao/hexo/public/c_6/index.html","77a4aa512d2eace241fa2653379ff416"],["E:/qinhao/hexo/public/c_7/index.html","f66dc0d5fcf158b2c321cd6c002f50ec"],["E:/qinhao/hexo/public/c_8/index.html","d0f71280368f5fec6fde75aae20c0d79"],["E:/qinhao/hexo/public/c_9/index.html","7e44b89b75ca938ba3d3686bbbedb06c"],["E:/qinhao/hexo/public/categories/C语言/index.html","12f40c1409340f1cc37844d24ad6baa9"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","ee28c5b1f925626f6f6d344603b6cab6"],["E:/qinhao/hexo/public/categories/Java/index.html","019935095c8e47b5695b727152b67404"],["E:/qinhao/hexo/public/categories/Linux/index.html","bbf6ce7a73418a97fdfe8c5ae5a879a4"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","7f740f99678d744f0cbaddc46ec6b00f"],["E:/qinhao/hexo/public/categories/Python/index.html","6d9d146b29316eb75f481a45a13cfd89"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","aaf243457f28b261ca424f9f9a688cac"],["E:/qinhao/hexo/public/categories/交换机/index.html","a764c08f40c6495168d9f0ac1bfa7bb5"],["E:/qinhao/hexo/public/categories/前端学习/index.html","31c884af99ce9e3ba799ca20b44ae2c4"],["E:/qinhao/hexo/public/categories/华为认证/index.html","1b60d4024b1533fb66790df281905f09"],["E:/qinhao/hexo/public/categories/小技巧/index.html","00403b53730855b41e09f5b1c004ca40"],["E:/qinhao/hexo/public/categories/操作系统/index.html","529969a9861e0d06d1902cb04aa8372c"],["E:/qinhao/hexo/public/categories/操作系统/page/2/index.html","7b2c561e961f373a744f146dc09360ea"],["E:/qinhao/hexo/public/categories/数据库/index.html","7dfe054bb279a7823608cd3a6cbd668c"],["E:/qinhao/hexo/public/categories/数据结构/index.html","2eb5b206ab244bde14d326f798e35c3a"],["E:/qinhao/hexo/public/categories/服务器/index.html","ccb108cd27b4ffaf48549ff93d776cdc"],["E:/qinhao/hexo/public/categories/算法基础/index.html","3d9f0c3027ef059ff3536c950c41fc48"],["E:/qinhao/hexo/public/categories/网络安全/index.html","a77e6bd8c2fb6fe20dbe5965c46bce7b"],["E:/qinhao/hexo/public/categories/股票知识/index.html","e50a9c5fc3643e100a1b010311a77bcc"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","ce83e1409940e7664be08dc80ae37411"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","78392e35ffd59f9f2ecdf38fa9c44e9c"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","66e0c48b4acb77393e843146ee61f475"],["E:/qinhao/hexo/public/categories/软件破解/index.html","3090c5016276f66ebed330c3a94147ab"],["E:/qinhao/hexo/public/categories/通信技术/index.html","8bdfba311c67e0395bb83dc21f9cd6c5"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","0f35ef19106602face6dee8b55b950af"],["E:/qinhao/hexo/public/category/index.html","18165e3ff309d9477a767d18fa80ee14"],["E:/qinhao/hexo/public/cinemas/index.html","d4d722e189acffff4786e6f743ba8be3"],["E:/qinhao/hexo/public/color/index.html","b19da9a2158fd84f2426cc9db4a55a76"],["E:/qinhao/hexo/public/computer_Internet_1/index.html","564f1ec6283bd4f22ed9ef69cf660a5a"],["E:/qinhao/hexo/public/computer_network_basics/index.html","501f6f58b6287365cc6d01d70a3b50cc"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","32f249f072182a7088a0f7a2c5b6dc9d"],["E:/qinhao/hexo/public/css_clear/index.html","d55370f2d393891c7061034c7f9434b3"],["E:/qinhao/hexo/public/dataStructure-1/index.html","fe1ca41f54705a946b96dc32268b01f3"],["E:/qinhao/hexo/public/dataStructure-2/index.html","84fcd73415f013261a1b795b290af451"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","e2c9a14305bd9e3b7e5c0225b68af954"],["E:/qinhao/hexo/public/free-get-189vip/index.html","4f71673d27ed4da2166166fe37eca878"],["E:/qinhao/hexo/public/friends/index.html","16c345fc504ae84efc0d082fabe9325a"],["E:/qinhao/hexo/public/gallery/index.html","4433be67d598c7aa62476a678a0e73ef"],["E:/qinhao/hexo/public/gallery/reset/index.html","58c56cdfd53348b37ca2b7b953f2952c"],["E:/qinhao/hexo/public/gallery/白敬亭/index.html","325c8b1f5517c91d6f52b333803f96a0"],["E:/qinhao/hexo/public/gallery/赵今麦/index.html","5415a5b24aecd5c7fced974ebd05455a"],["E:/qinhao/hexo/public/gcc/index.html","f1a91f93faadaf9db43f038a8a82a409"],["E:/qinhao/hexo/public/huawei-PCManager/index.html","6a374834af8606b0723139dd87cd247a"],["E:/qinhao/hexo/public/huawei-exam-application/index.html","a271b35449b106876a9aa8b514010227"],["E:/qinhao/hexo/public/image/png/circle.png","5d85080e43c457b35b23f4ad8ceaa6c5"],["E:/qinhao/hexo/public/image/png/icp.png","37975a3be8087f62933f7aa3e7e80d12"],["E:/qinhao/hexo/public/image/png/left_ptr.png","b893704c321e35374e4bc97adb72048d"],["E:/qinhao/hexo/public/image/png/openhand.png","b040b0a64d22b7f40388391ac744949d"],["E:/qinhao/hexo/public/image/png/pointer.png","14c9f722890f733da3ae7fb15013a81a"],["E:/qinhao/hexo/public/image/png/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["E:/qinhao/hexo/public/image/png/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["E:/qinhao/hexo/public/image/png/safari.png","5e83f8d5772a61cd7036bd7bf3f84563"],["E:/qinhao/hexo/public/image/png/text.png","80d9f4da0a0c20b02898f23b035b17c8"],["E:/qinhao/hexo/public/image/png/weibo.png","2af288384e8aee34e94adae792942d2c"],["E:/qinhao/hexo/public/image/png/zoom-in.png","bf6da71dce828553d50a1ce3fd65163a"],["E:/qinhao/hexo/public/image/png/zoom-out.png","d5da599e9fd8344973c64b8ca109958b"],["E:/qinhao/hexo/public/image/svg/1f37b.svg","5e2ea03aa4963cda5e91d395c2587e6b"],["E:/qinhao/hexo/public/image/svg/1f389.svg","b052a4bef57c1aa73cd7cff5bc4fb61d"],["E:/qinhao/hexo/public/image/svg/1f4cc.svg","09204f6a96455580e749454b7449aa82"],["E:/qinhao/hexo/public/image/svg/1f4f0.svg","51cd8436fb99a6f12257db34780fb7a7"],["E:/qinhao/hexo/public/image/svg/1f516.svg","2424297076c0d1c8499820fc4f9d9f57"],["E:/qinhao/hexo/public/image/svg/1f5c3.svg","b542a360ed4cdceeac3bca73b455ebc6"],["E:/qinhao/hexo/public/index.html","f5a74a341975782c18af4feae3ec93fd"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/lanzous/index.html","d4b36631b9680c7c104d638109cd122d"],["E:/qinhao/hexo/public/linux/index.html","3756cb5c7dd4e7664f8bf23e90b75cb4"],["E:/qinhao/hexo/public/login_demo/index.html","c17f19725e83932f3c130e96ed3b5bbf"],["E:/qinhao/hexo/public/manage-MAN-skill/index.html","8026322f77f6bc328ea22bb3a58a20ff"],["E:/qinhao/hexo/public/memory_save_number/index.html","982bbe8a2088647916d2e40c386b4aad"],["E:/qinhao/hexo/public/mobile_communication/index.html","5474bf02eb410511c3146820ef5cf010"],["E:/qinhao/hexo/public/movies/index.html","dba3b258e6c152b038b90a13a117d07f"],["E:/qinhao/hexo/public/mylist/index.html","9cb8eaaad13911f13d0835078e3599a0"],["E:/qinhao/hexo/public/myphotos/index.html","96a41eece0b064b49400d40095a0c496"],["E:/qinhao/hexo/public/mysql-install/index.html","7200f5cdd354ebbc2713f39bd3a32cd6"],["E:/qinhao/hexo/public/mysql_dql_1/index.html","f35b39d9faa5a1d1a6d83fd9c0324732"],["E:/qinhao/hexo/public/mysql_forget_root_password/index.html","5bd0e43a61b7b7fc3a88fbd7255a1919"],["E:/qinhao/hexo/public/mysql_question_1/index.html","81ce8228953b3b055d454e732f7d0041"],["E:/qinhao/hexo/public/network_security_comprehensive/index.html","a01e996f383efec7c72f91b145001f7d"],["E:/qinhao/hexo/public/not-allow-F12/index.html","80b26af0163a78a11c4a995e01989eb3"],["E:/qinhao/hexo/public/optical_transport_network_basic/index.html","ceaaf1863b8459de76f2d5b9df75485f"],["E:/qinhao/hexo/public/page/10/index.html","4629e74e02b20af8597d27b2b174149c"],["E:/qinhao/hexo/public/page/11/index.html","0789c8103a3ef43151e1c14dcf9dc8cf"],["E:/qinhao/hexo/public/page/12/index.html","ef3cf9cdef95679e7a755916d37ae24c"],["E:/qinhao/hexo/public/page/13/index.html","debfbcfc2ead6d05a2c9f86b9d64e789"],["E:/qinhao/hexo/public/page/2/index.html","eec7e7c1ddcac066182014cfea321b72"],["E:/qinhao/hexo/public/page/3/index.html","771b9a01fcdd46e955ba03fec533f50a"],["E:/qinhao/hexo/public/page/4/index.html","928e62644149ea9587a5d3c66b524fd7"],["E:/qinhao/hexo/public/page/5/index.html","4a4cd649fd8a3490fd8b1464143fa35e"],["E:/qinhao/hexo/public/page/6/index.html","1a5774da843678bd1be419609fed2fca"],["E:/qinhao/hexo/public/page/7/index.html","74f2d97b684c51bf2a04ec85b6b55c44"],["E:/qinhao/hexo/public/page/8/index.html","99abac4a5acc938fb2943865436995ae"],["E:/qinhao/hexo/public/page/9/index.html","5720c4aa22e57ad41437f0950d518996"],["E:/qinhao/hexo/public/python-2/index.html","5683c04dc95d5039a03f15a5528b7739"],["E:/qinhao/hexo/public/ssh/index.html","cc788864dadd0ef8bface671665b4042"],["E:/qinhao/hexo/public/stock_1/index.html","2b45bbfff5f0dba655b7f236cd7c41fd"],["E:/qinhao/hexo/public/stock_10/index.html","c7cae7af09e030cbc46f3b8418ca13ea"],["E:/qinhao/hexo/public/stock_11/index.html","2c6cdcc7da2e564997b835ad7eecfaac"],["E:/qinhao/hexo/public/stock_12/index.html","7e42352f5c73ced36785cf8f39b5a038"],["E:/qinhao/hexo/public/stock_13/index.html","11e6d6df81f0c1921b9fda9f48ce04a3"],["E:/qinhao/hexo/public/stock_14/index.html","c70b5aea05397c9c7fe24b669919be98"],["E:/qinhao/hexo/public/stock_15/index.html","0188965983d0dfbb4352d40cf972145f"],["E:/qinhao/hexo/public/stock_2/index.html","bd84b1d0775f1580870ace22119b4dbf"],["E:/qinhao/hexo/public/stock_3/index.html","e7bb3fe0f2979afe3f722fd2b5289029"],["E:/qinhao/hexo/public/stock_4/index.html","5f2485a3f63534eaddcc7f93088e04a0"],["E:/qinhao/hexo/public/stock_5/index.html","cc48312ecd626def7d842659c811321e"],["E:/qinhao/hexo/public/stock_6/index.html","8fa42151c88c9195f4efce4be99b9558"],["E:/qinhao/hexo/public/stock_7/index.html","817829099f38dcb59e4bb63f70355cd0"],["E:/qinhao/hexo/public/stock_8/index.html","f05f27aa38decb9ec915e5e8d9576a69"],["E:/qinhao/hexo/public/stock_9/index.html","eba6e66d604d93a1b104873f7e4afe41"],["E:/qinhao/hexo/public/structure-of-MAN/index.html","818104b6dc1538c1e05bf32e8e23f2bb"],["E:/qinhao/hexo/public/sw-register.js","17b70a9c810e5a774ceeb8e90441eab8"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/switchport-security/index.html","bb345e58c57288cfbbd9de1514a22478"],["E:/qinhao/hexo/public/system1/index.html","adeb518b55a36d127be294c4a5f05138"],["E:/qinhao/hexo/public/system10/index.html","fc10e985664260bfcf2772cc2de6da80"],["E:/qinhao/hexo/public/system11/index.html","990755ce6332fad302c5c544b5176c29"],["E:/qinhao/hexo/public/system12/index.html","379c5f88a800f918055555f4f71dc394"],["E:/qinhao/hexo/public/system2/index.html","dd4ac4e63bdbed0b5f4ed451f8521208"],["E:/qinhao/hexo/public/system3/index.html","ae9b672a84ad2a28fc4d868f33ddc1f0"],["E:/qinhao/hexo/public/system4/index.html","a222704c7c0d86fcbf6320b01b9a6e4a"],["E:/qinhao/hexo/public/system5/index.html","b11a35cf063ab8a2a3c58b0e7134b7fa"],["E:/qinhao/hexo/public/system6/index.html","1a0d185b92f1d9ec1bb4e50179c5a6a9"],["E:/qinhao/hexo/public/system7/index.html","13ac264086025d0ede9ebbd2f9d42786"],["E:/qinhao/hexo/public/system8/index.html","7eb8c0d359ed4cc9441869223ae5231d"],["E:/qinhao/hexo/public/system9/index.html","3e669f573423db9ee285ef83b0aca322"],["E:/qinhao/hexo/public/system_info/index.html","abc379a918c7c3f80538c404db588c8f"],["E:/qinhao/hexo/public/tags/index.html","b5df6589a3b1aae5ec32bbc7880aa93e"],["E:/qinhao/hexo/public/utils/css/all.min.css","84d8ad2b4fcdc0f0c58247e778133b3a"],["E:/qinhao/hexo/public/utils/css/font-awesome-animation.min.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/qinhao/hexo/public/utils/css/solarized-light.min.css","769d25bae36c449b6612b98809d01041"],["E:/qinhao/hexo/public/utils/css/waves.min.css","ad8ce7fc1d688135eedeedee534aa9a2"],["E:/qinhao/hexo/public/utils/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/js/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["E:/qinhao/hexo/public/utils/js/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["E:/qinhao/hexo/public/utils/js/artitalk.js","d94fe7817fad4ecae5681cbde76a4acc"],["E:/qinhao/hexo/public/utils/js/av-min.js","bcaf9b004ff4f49349bb6201fe3b9a5d"],["E:/qinhao/hexo/public/utils/js/bbtalk.min.js","a1ab1de2ae261228a7532e855f6980a5"],["E:/qinhao/hexo/public/utils/js/clipboard.min.js","27784b7376dd992368c71b6c5559f358"],["E:/qinhao/hexo/public/utils/js/comment_typing.js","ab7b34f055a2bf8e036daec67e968d1a"],["E:/qinhao/hexo/public/utils/js/flying-pages.min.js","c20e3f49966e71df80be9a6af59449dd"],["E:/qinhao/hexo/public/utils/js/highlight.min.js","a370252e88fa5c6611ab5005c7b87b96"],["E:/qinhao/hexo/public/utils/js/instant_page.js","1a3be845085b8d94a2997a3a472feb42"],["E:/qinhao/hexo/public/utils/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["E:/qinhao/hexo/public/utils/js/jquery.min.js","dc5e7f18c8d36ac1d3d4753a87c98d0a"],["E:/qinhao/hexo/public/utils/js/lazyload.min.js","0fcd5822c9e8af807a14d3985faf91c8"],["E:/qinhao/hexo/public/utils/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["E:/qinhao/hexo/public/utils/js/scrollreveal.min.js","f7d329c68b849d6685a7462c22f47ea2"],["E:/qinhao/hexo/public/utils/js/waves.min.js","9a5b3dfca09d9e3005dc697162d4bc65"],["E:/qinhao/hexo/public/utils/ttf/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["E:/qinhao/hexo/public/utils/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.ttf","ede4ff54ccb46fe67622dbcffeb90fdf"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.woff","07fa0741d97758debce36520d5a12d5b"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.ttf","04842b94683f70c18aeb76b5a27cd221"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.woff","f48a8829bec665258b9c85b23ecbf3c0"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.ttf","5f2f8485a00387b7a1d89e793555991f"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.woff","42d66a3eb75eac2b4fc0ee58e9846497"],["E:/qinhao/hexo/public/wireless_framework/index.html","9bc91552693982e7e1fbe51c67fffc65"],["E:/qinhao/hexo/public/wireless_radio/index.html","69ef65cc64be8ce30e21e6934b01e1f3"],["E:/qinhao/hexo/public/wireless_word/index.html","b721a3a5bc804da058c9aa0331cf7dab"],["E:/qinhao/hexo/public/xml/index.html","c3146573e8b43e67ae52ab16bb27a8a0"]];
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







