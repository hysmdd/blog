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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/3G/index.html","063891fadf9cdca6dbf4f846e79b3786"],["E:/qinhao/hexo/public/404.html","449566d63d31bad401ad6da8328b1207"],["E:/qinhao/hexo/public/404/assets/css/bootstrap.min.css","6f6a19862483166ac73fcc2645006bca"],["E:/qinhao/hexo/public/404/assets/css/style.css","132ed6b14aa0e3d83eb3657a486042d5"],["E:/qinhao/hexo/public/404/assets/js/gsap.min.js","00e4b3172efa7bc9f131940a997bc067"],["E:/qinhao/hexo/public/404/assets/js/script.js","0540d3f1469bf028b5373ab4ca32e271"],["E:/qinhao/hexo/public/5G网络优化/index.html","de7b2b407eb8b17e2b89ec1753bd1b4c"],["E:/qinhao/hexo/public/Algorithm_1/index.html","57a7e4236248de5beb50290b80d6946b"],["E:/qinhao/hexo/public/Base/index.html","466ba84c8f92415e3ded057e7b948dde"],["E:/qinhao/hexo/public/ByteDanceVerify.html","f919d2db91a8c2828ae96bad05615829"],["E:/qinhao/hexo/public/CPU_Register/index.html","4448ab6b570109721906b3a57304af37"],["E:/qinhao/hexo/public/C_Programming_1/index.html","877dec0469f96c4a4bfcdedffb348986"],["E:/qinhao/hexo/public/Design_patterns_1/index.html","61a0984b2cdc309026173a4ca5b73aa8"],["E:/qinhao/hexo/public/FileDownload/index.html","84af5cefbe763506b2b93c4c9569cfe1"],["E:/qinhao/hexo/public/Files_and_directories/index.html","3f1d0846fad8b3201e6b5c1386ac4f40"],["E:/qinhao/hexo/public/FixedTools/index.html","2697375e57510502ef05d753c2901eb2"],["E:/qinhao/hexo/public/GRE-VPN/index.html","5a7abbb352a55fda2a673bc793c28cea"],["E:/qinhao/hexo/public/GRE-over-IPSec/index.html","3abb5e791680238f1c1eed461f3e12ec"],["E:/qinhao/hexo/public/GSM/index.html","910c631e349999ff8b4228e90bccd2e3"],["E:/qinhao/hexo/public/ICIC/index.html","40f601c21e4fd2f9ac93f324985dc8de"],["E:/qinhao/hexo/public/IPSec_VPN/index.html","0023be64367b5c10c3d48eb7e1209dbb"],["E:/qinhao/hexo/public/IP_Bearer_Network_basic/index.html","35adb7eaca3793b307ac90a085a20563"],["E:/qinhao/hexo/public/JDBC/index.html","3e222a664c1db9f713880b44ba20d213"],["E:/qinhao/hexo/public/JDBCTemplate/index.html","2417dcc7bdeb8456e3393305023aa805"],["E:/qinhao/hexo/public/JDBC_SQL_injection/index.html","6c93286bea0f14938cc3192a31bc5d19"],["E:/qinhao/hexo/public/LTE/index.html","58dfbbdc7f32efbcd58a22653e317d56"],["E:/qinhao/hexo/public/Layer/index.html","3bc71c3663824463d97d327fd8f2daf5"],["E:/qinhao/hexo/public/Linux_often_use/index.html","376f408017a9830a6de20071ab56e1f3"],["E:/qinhao/hexo/public/MIMO/index.html","a229086bdf9bd76313228501637fdae9"],["E:/qinhao/hexo/public/MySQL/index.html","d22015a88af1fd8f3513135f64d61a1c"],["E:/qinhao/hexo/public/MySQL8_basics/index.html","372652bc203ba0239094b663265c02f6"],["E:/qinhao/hexo/public/MySQL_constraint/index.html","c2ca64e13f272a530e09a91a6dcdc4d8"],["E:/qinhao/hexo/public/MySQL_transaction/index.html","dbb374fa1a73657277466c0ecf346570"],["E:/qinhao/hexo/public/NB-IoT/index.html","c77dd6fb3be06457b386da83b9826202"],["E:/qinhao/hexo/public/Network_Access/index.html","963f15e6546dd7e2a538c98f5d1f5e1a"],["E:/qinhao/hexo/public/No-module-named-pip/index.html","dfca4cdbc4b9a6c9139dd62ef33b26cb"],["E:/qinhao/hexo/public/OFDMA/index.html","c7884314b031aece51453281598fa1cc"],["E:/qinhao/hexo/public/OLT_command/index.html","e533798530f072854e8a3964f024e61d"],["E:/qinhao/hexo/public/OverLoad_1/index.html","78b0b215999c836f2f44b1a73ce31edd"],["E:/qinhao/hexo/public/Python-3/index.html","24ebc770e27ee48295052aa7e13746c2"],["E:/qinhao/hexo/public/Python-4/index.html","86a365a333099bd165c8be8ce8329fb4"],["E:/qinhao/hexo/public/Python-5/index.html","99e1555996135736e22f35eb5df5bc8a"],["E:/qinhao/hexo/public/PythonUdp/index.html","ff62cb053cb8da6ec9e121627afe91b1"],["E:/qinhao/hexo/public/Python_basic/index.html","186e21434746360df703c784e892d657"],["E:/qinhao/hexo/public/Python_cards_manage/index.html","71c54f83ff2b67986a78aaad57953c31"],["E:/qinhao/hexo/public/Python_variable/index.html","8a6862c5399eca0470009baecd980661"],["E:/qinhao/hexo/public/RedHat_setup_script/index.html","689087f37d198f06b08aa143988afae4"],["E:/qinhao/hexo/public/TCP/index.html","2453dd9c2757cf3ce2b565b24f6223e7"],["E:/qinhao/hexo/public/TCP_client/index.html","68d360daef26edbd4fb7e2d1f0f075da"],["E:/qinhao/hexo/public/TCP_server/index.html","70fa17d3f11b9d9146207c96c3df8d01"],["E:/qinhao/hexo/public/TD-LTE-System/index.html","ee9330fa1a048540ba034b512262e72b"],["E:/qinhao/hexo/public/Web_site_SSL/index.html","126471cc6d56af651615c8afb0630ff5"],["E:/qinhao/hexo/public/Windows_Web_build_environment/index.html","c45607efb43354429de3c870c1a66319"],["E:/qinhao/hexo/public/Windows_Web_build_website/index.html","6f01d5025e3979f79e604e41dc451d5c"],["E:/qinhao/hexo/public/Windows_Web_often_use/index.html","436339493a45590147d205600d2c7299"],["E:/qinhao/hexo/public/a_server_build_many_webs/index.html","14193f2debeb11ff95d922b78678e751"],["E:/qinhao/hexo/public/about/index.html","dbff3ba413e258775f61b3611e603623"],["E:/qinhao/hexo/public/acl/index.html","7f28a97c1243911ba8ae70d6976dc796"],["E:/qinhao/hexo/public/archives/2020/01/index.html","7dd621799023535c14e1b4e070c7ed43"],["E:/qinhao/hexo/public/archives/2020/02/index.html","0c46b7be1910ec9935614d9aa10ba1c1"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","07d032a4f6b3d856f5e74b322fb59a36"],["E:/qinhao/hexo/public/archives/2020/03/index.html","5511a7b7575fcc16e7ae02b3da72f685"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","17f99d38c1704eb624993b8aa05a3b78"],["E:/qinhao/hexo/public/archives/2020/04/index.html","492722353ec9c7a37a1c34a9377c57b9"],["E:/qinhao/hexo/public/archives/2020/05/index.html","bb0fc8b419434d845269560a73c11307"],["E:/qinhao/hexo/public/archives/2020/06/index.html","fb3ab93708d1db9d1edf9caa0a7f31b7"],["E:/qinhao/hexo/public/archives/2020/07/index.html","e2bf6cf0f0e54aa3ea63d9a9f060e677"],["E:/qinhao/hexo/public/archives/2020/08/index.html","a2a20169ddb6a6c56ad2f162fea4da5d"],["E:/qinhao/hexo/public/archives/2020/10/index.html","05d46252137a90f824b0f64ee0e41ae6"],["E:/qinhao/hexo/public/archives/2020/11/index.html","5569b353480d90ae364653b3850504be"],["E:/qinhao/hexo/public/archives/2020/index.html","511f6f20a6fd3e2a2cf1e7238e2eac0c"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","436ce5c176880824164fe6647118acc7"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","c95a97fe7ee003e579bb660c46cc800d"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","f1157b78527f3ce441857ed34f2dcaf1"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","b019da5ce801af727f83e069740d4271"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","aaf119b2b1e0b0f1049d6f29253ea544"],["E:/qinhao/hexo/public/archives/2021/03/index.html","5115c78919d514bc78ce07ef01a947e2"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","d982a14147acac5d1811e863ddb871d5"],["E:/qinhao/hexo/public/archives/2021/04/index.html","da7e74bbd904c08c84c6e84ab264d792"],["E:/qinhao/hexo/public/archives/2021/05/index.html","056e1450f8f6424ff687756ffbdffd16"],["E:/qinhao/hexo/public/archives/2021/06/index.html","87e40b82d8fcd5927aeaa6445d8388c4"],["E:/qinhao/hexo/public/archives/2021/07/index.html","833c2e1b5f95135cfa6002cbadc35fd6"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","74dc8b9adac701dccafad0577147e555"],["E:/qinhao/hexo/public/archives/2021/08/index.html","ef5b2f5b17eb27be93582fbff5595b66"],["E:/qinhao/hexo/public/archives/2021/09/index.html","dcb4b02bb4987c9951efcbc3e6f65a43"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","8fbb1f6d1849b4df9810977cc842c761"],["E:/qinhao/hexo/public/archives/2021/10/index.html","41538aa038567398632a27ea49a9fa54"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","8f7dc5d7e4ae3b3def2d36479f6f4c3d"],["E:/qinhao/hexo/public/archives/2021/index.html","5d447861fa12aaf0d1095c5685c07471"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","c0f4342b952d675ad760775f23cb06cb"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","ba359d7d96907d42bbf3da6810aabbf7"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","a19d07d5090717eb8a907c274e19284b"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","f3274a1247a0e5292839b8252bb0322c"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","de85626b0ce4be33deb56c3e73f4e743"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","7a335e0037a5f1d1a5ed1d55e812cf5a"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","d22cd19203296e6008dcac9cd05b95c2"],["E:/qinhao/hexo/public/archives/index.html","e05210ea3c497df9fbca30d839dc4fc9"],["E:/qinhao/hexo/public/archives/page/10/index.html","d3c02c015b7b8239737a3aec7e6a40e0"],["E:/qinhao/hexo/public/archives/page/11/index.html","057d89647ec6f56a68484b5a4dec5563"],["E:/qinhao/hexo/public/archives/page/12/index.html","057d89647ec6f56a68484b5a4dec5563"],["E:/qinhao/hexo/public/archives/page/13/index.html","057d89647ec6f56a68484b5a4dec5563"],["E:/qinhao/hexo/public/archives/page/2/index.html","d478f6c65df151bd084a5cbf48bd2857"],["E:/qinhao/hexo/public/archives/page/3/index.html","d478f6c65df151bd084a5cbf48bd2857"],["E:/qinhao/hexo/public/archives/page/4/index.html","d478f6c65df151bd084a5cbf48bd2857"],["E:/qinhao/hexo/public/archives/page/5/index.html","d478f6c65df151bd084a5cbf48bd2857"],["E:/qinhao/hexo/public/archives/page/6/index.html","d478f6c65df151bd084a5cbf48bd2857"],["E:/qinhao/hexo/public/archives/page/7/index.html","d3c02c015b7b8239737a3aec7e6a40e0"],["E:/qinhao/hexo/public/archives/page/8/index.html","d3c02c015b7b8239737a3aec7e6a40e0"],["E:/qinhao/hexo/public/archives/page/9/index.html","d3c02c015b7b8239737a3aec7e6a40e0"],["E:/qinhao/hexo/public/artitalk/index.html","83dad5c2519d94bd895353d76fef72cb"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/bangumis/index.html","78cacec9e62fa96de11bf6cf06925c18"],["E:/qinhao/hexo/public/bitwarden/index.html","2ec47d1a6ac12b603fdd5a3b0017ec32"],["E:/qinhao/hexo/public/build-MAN-idea/index.html","bb9ea1c7700351fea2a13168e7382f16"],["E:/qinhao/hexo/public/c-11/index.html","e5c2bd914d1ea6b2bd3993900ef77c74"],["E:/qinhao/hexo/public/c_1/index.html","7b6923cbd2f543557a182628def327cb"],["E:/qinhao/hexo/public/c_10/index.html","89aa6307e85a472843fcebe8fde79a1d"],["E:/qinhao/hexo/public/c_2/index.html","2a98b9256606d0ba5ee6a7126c746129"],["E:/qinhao/hexo/public/c_3/index.html","9a640b83d15752f756ef9b44a8433b3b"],["E:/qinhao/hexo/public/c_4/index.html","6ed5a1013809f362b6ffcb8965fe5c6d"],["E:/qinhao/hexo/public/c_5/index.html","c9bbe82d6a0feea616e980a774b86436"],["E:/qinhao/hexo/public/c_6/index.html","71ac6fdd43bc0425559cdbfdba437cbf"],["E:/qinhao/hexo/public/c_7/index.html","79694b77ffaf42f95a23f93d6e7ff4c4"],["E:/qinhao/hexo/public/c_8/index.html","719052b9557a99ece21a59c3dd95ecd9"],["E:/qinhao/hexo/public/c_9/index.html","2f6a4ea25f26d38b99c62ceb9c3f6c31"],["E:/qinhao/hexo/public/categories/C语言/index.html","b51c99bc4e60b272b5d7d68cde76a1f9"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","af432b9397b56400835572cbede12aa9"],["E:/qinhao/hexo/public/categories/Java/index.html","89e5720a2c979e91d86ca6fbc3fa2c09"],["E:/qinhao/hexo/public/categories/Linux/index.html","1bcc3897801b7f31eb37ca9bf10fb9a2"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","22b8a63765ea04ec0bf8b722edb58b65"],["E:/qinhao/hexo/public/categories/Python/index.html","6561eacd7b8ed894e3514e891c0bf125"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","d614962d7996b368c095703a7a8fd875"],["E:/qinhao/hexo/public/categories/交换机/index.html","29acc3d8fd8113b3d34ab1e9ff547dd6"],["E:/qinhao/hexo/public/categories/前端学习/index.html","b2a75ad0edc368b798803117bdde0c4c"],["E:/qinhao/hexo/public/categories/华为认证/index.html","cea726076d010c2f7fb86d0bdb4c403d"],["E:/qinhao/hexo/public/categories/小技巧/index.html","5097cb94eddd6e6215a426427163d7c7"],["E:/qinhao/hexo/public/categories/操作系统/index.html","feb38d8a81e02d2f5af821433f720e50"],["E:/qinhao/hexo/public/categories/操作系统/page/2/index.html","c1d295f3581d403153c353e4ac5841a3"],["E:/qinhao/hexo/public/categories/数据库/index.html","71e857b57925165695e1678a313e8c10"],["E:/qinhao/hexo/public/categories/数据结构/index.html","5bb9a5297c929cb431c95f7b2af4ee24"],["E:/qinhao/hexo/public/categories/服务器/index.html","81cb9e0d81bf4b075446579d66b0c17b"],["E:/qinhao/hexo/public/categories/算法基础/index.html","8a31c41c800c97dfb5b99d37a78d32b4"],["E:/qinhao/hexo/public/categories/网络安全/index.html","af473c93848745e9429a4c21cde9c77a"],["E:/qinhao/hexo/public/categories/股票知识/index.html","9e14d0c42be866b8b85bc7c5c12618d6"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","89359d55b7e1418fcff3255aab42fd55"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","8cbdf9da19c293c57604c0767c2aee92"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","4b4dd43e74ead1bbf542d03207780d8d"],["E:/qinhao/hexo/public/categories/软件破解/index.html","3398515c67ef274b8e68149142522a88"],["E:/qinhao/hexo/public/categories/通信技术/index.html","63acbd3783a5d4721441f2f3ce97f7ca"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","1ead958cc484f640a0c5eef4cd6fd404"],["E:/qinhao/hexo/public/category/index.html","38642d855a993cee6d77d8e9a5876cb5"],["E:/qinhao/hexo/public/cinemas/index.html","c9d18cb9994d2bffdb3e869058987fcb"],["E:/qinhao/hexo/public/color/index.html","1fd73298f2a8648f8a3d85de78c61d45"],["E:/qinhao/hexo/public/computer_Internet_1/index.html","cb9e3303f4106a5f0d30b81a5d399dfa"],["E:/qinhao/hexo/public/computer_network_basics/index.html","32d31fbdc07e356deb3863515273a418"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","32f249f072182a7088a0f7a2c5b6dc9d"],["E:/qinhao/hexo/public/css_clear/index.html","332614d3e5387f77f0b6d0d000d6dce9"],["E:/qinhao/hexo/public/dataStructure-1/index.html","959470ad9af96a9c66723291e75eeb23"],["E:/qinhao/hexo/public/dataStructure-2/index.html","cddcdc7eba5bab74637c9546f25eb4b6"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","e2c9a14305bd9e3b7e5c0225b68af954"],["E:/qinhao/hexo/public/free-get-189vip/index.html","7fe42ab59002e26d3c83a2622dc5564d"],["E:/qinhao/hexo/public/friends/index.html","e39908f40abfc61ad5ef9bc8532957aa"],["E:/qinhao/hexo/public/gallery/index.html","f7e2bb3b669b3e6c174cf90aaa464fbe"],["E:/qinhao/hexo/public/gallery/reset/index.html","62a9ee119fc6a1c1ea3842cde91f1040"],["E:/qinhao/hexo/public/gallery/白敬亭/index.html","cd3208ecbe2acd0649043778184180cb"],["E:/qinhao/hexo/public/gallery/赵今麦/index.html","e2fc7c41b465945a69c4c40a615f0c82"],["E:/qinhao/hexo/public/gcc/index.html","ecce1640a3d14a00573faf29ef5c5055"],["E:/qinhao/hexo/public/huawei-PCManager/index.html","8995311d970d0cd605919d6e7338d29a"],["E:/qinhao/hexo/public/huawei-exam-application/index.html","160eac876de3ef254ff7f58226eaed8b"],["E:/qinhao/hexo/public/image/png/circle.png","5d85080e43c457b35b23f4ad8ceaa6c5"],["E:/qinhao/hexo/public/image/png/icp.png","37975a3be8087f62933f7aa3e7e80d12"],["E:/qinhao/hexo/public/image/png/left_ptr.png","b893704c321e35374e4bc97adb72048d"],["E:/qinhao/hexo/public/image/png/openhand.png","b040b0a64d22b7f40388391ac744949d"],["E:/qinhao/hexo/public/image/png/pointer.png","14c9f722890f733da3ae7fb15013a81a"],["E:/qinhao/hexo/public/image/png/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["E:/qinhao/hexo/public/image/png/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["E:/qinhao/hexo/public/image/png/safari.png","5e83f8d5772a61cd7036bd7bf3f84563"],["E:/qinhao/hexo/public/image/png/text.png","80d9f4da0a0c20b02898f23b035b17c8"],["E:/qinhao/hexo/public/image/png/weibo.png","2af288384e8aee34e94adae792942d2c"],["E:/qinhao/hexo/public/image/png/zoom-in.png","bf6da71dce828553d50a1ce3fd65163a"],["E:/qinhao/hexo/public/image/png/zoom-out.png","d5da599e9fd8344973c64b8ca109958b"],["E:/qinhao/hexo/public/image/svg/1f37b.svg","5e2ea03aa4963cda5e91d395c2587e6b"],["E:/qinhao/hexo/public/image/svg/1f389.svg","b052a4bef57c1aa73cd7cff5bc4fb61d"],["E:/qinhao/hexo/public/image/svg/1f4cc.svg","09204f6a96455580e749454b7449aa82"],["E:/qinhao/hexo/public/image/svg/1f4f0.svg","51cd8436fb99a6f12257db34780fb7a7"],["E:/qinhao/hexo/public/image/svg/1f516.svg","2424297076c0d1c8499820fc4f9d9f57"],["E:/qinhao/hexo/public/image/svg/1f5c3.svg","b542a360ed4cdceeac3bca73b455ebc6"],["E:/qinhao/hexo/public/index.html","3fd9d87efc0e2e50052bcbaf01207181"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/lanzous/index.html","50cd058a457fc4c1eadb0b6cb4192444"],["E:/qinhao/hexo/public/linux/index.html","6d2fbaa723f6daca387b65d1718e04ce"],["E:/qinhao/hexo/public/login_demo/index.html","78dc3ef97cce1b5201191e57eaa4edaf"],["E:/qinhao/hexo/public/manage-MAN-skill/index.html","b2711cda493d0b81bafa4e3192f91f3f"],["E:/qinhao/hexo/public/memory_save_number/index.html","4949339398e2d14d037ee3fe8e0d90aa"],["E:/qinhao/hexo/public/mobile_communication/index.html","b322d2196e6daa3ba822ddf90c88fd9e"],["E:/qinhao/hexo/public/movies/index.html","01272d3395f48be38bd305b136bc59ec"],["E:/qinhao/hexo/public/mylist/index.html","172b649fed316efa8d1f3c147f352de6"],["E:/qinhao/hexo/public/myphotos/index.html","369289fac9bb4068890c2a7082e88e53"],["E:/qinhao/hexo/public/mysql-install/index.html","cd48f99e92de237b3dbe33620c00b869"],["E:/qinhao/hexo/public/mysql_dql_1/index.html","c6c1016008202e71bd88c5dd38d56020"],["E:/qinhao/hexo/public/mysql_forget_root_password/index.html","762b30f09d0ca235eac011346625eb03"],["E:/qinhao/hexo/public/mysql_question_1/index.html","8cf72b61d469f265ce243ce91c8cd9ce"],["E:/qinhao/hexo/public/network_security_comprehensive/index.html","76908f49163c58cd76f88833340b2288"],["E:/qinhao/hexo/public/not-allow-F12/index.html","18bac553ecf3cf1d6721e56f9f030903"],["E:/qinhao/hexo/public/optical_transport_network_basic/index.html","91a596200046acce2b7c6d814607d151"],["E:/qinhao/hexo/public/page/10/index.html","1bc9f481b3fd34e3bfe086c2a58680bf"],["E:/qinhao/hexo/public/page/11/index.html","b8df6989f9f21e828273f29c7fbed47f"],["E:/qinhao/hexo/public/page/12/index.html","095601d8613e32d1b154fed683f4744a"],["E:/qinhao/hexo/public/page/13/index.html","6cb922a771d284a2c419757861cfa68f"],["E:/qinhao/hexo/public/page/2/index.html","acf0f2d972006ecd0e7b7b60763369bc"],["E:/qinhao/hexo/public/page/3/index.html","32e1f3cda47f1ef03aa2dbeda12792a2"],["E:/qinhao/hexo/public/page/4/index.html","b0889c6173f17c2b1ade4e913ae729a7"],["E:/qinhao/hexo/public/page/5/index.html","085ca21fed7eecb87545cf092e02c438"],["E:/qinhao/hexo/public/page/6/index.html","989f3ef3f44ca0d408940860b714e1a3"],["E:/qinhao/hexo/public/page/7/index.html","0210c41c5f968ef79921ab69bf83df48"],["E:/qinhao/hexo/public/page/8/index.html","d02cb6c93d05a007373bb27f3ae7747f"],["E:/qinhao/hexo/public/page/9/index.html","873405326a8b5a43cdc64e18a696b4d5"],["E:/qinhao/hexo/public/python-2/index.html","b72fe3b30298bb298512dc070bb5c672"],["E:/qinhao/hexo/public/ssh/index.html","0f27d834d8293fcb378d7c6ac9d3e9e8"],["E:/qinhao/hexo/public/stock_1/index.html","a80580d684127588872e741ee13ad96d"],["E:/qinhao/hexo/public/stock_10/index.html","9d6800498ccc7dc085a2c0ce217a9951"],["E:/qinhao/hexo/public/stock_11/index.html","37162ce570341003f805782e7c46625c"],["E:/qinhao/hexo/public/stock_12/index.html","3e102c6e1421377eaed1ec2bc320490e"],["E:/qinhao/hexo/public/stock_13/index.html","c587eff5780fb3110ba50eb4089ccbfb"],["E:/qinhao/hexo/public/stock_14/index.html","2b4b522e453276815658159182577c3d"],["E:/qinhao/hexo/public/stock_15/index.html","2d1750da86486dbe78620496812e7ca6"],["E:/qinhao/hexo/public/stock_2/index.html","9cab0055d84af5fdea3a658f86b4e6f7"],["E:/qinhao/hexo/public/stock_3/index.html","ea7ed406065037ec1e531fdfff7cc2fb"],["E:/qinhao/hexo/public/stock_4/index.html","8d38448b68424950d435d9a618a8e097"],["E:/qinhao/hexo/public/stock_5/index.html","0f974872ef37d71e8775443adc2acf5c"],["E:/qinhao/hexo/public/stock_6/index.html","1871634e9113c531682e702873ae1ca4"],["E:/qinhao/hexo/public/stock_7/index.html","d7e98ea049622a3da3c7a9372b6f1d37"],["E:/qinhao/hexo/public/stock_8/index.html","851827d2dbdfe1aa80b21f76deb1c6d4"],["E:/qinhao/hexo/public/stock_9/index.html","6e970439033fa80f3a4ed1e10e4c6773"],["E:/qinhao/hexo/public/structure-of-MAN/index.html","70269a39c0cc24751b3b1fe01ec15992"],["E:/qinhao/hexo/public/sw-register.js","059966be1085c485bf5deb3a6290c053"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/switchport-security/index.html","c06c053cfde94bc0062ca6b13602e225"],["E:/qinhao/hexo/public/system1/index.html","b1db9f24d014c2cff886d8a72c2cd497"],["E:/qinhao/hexo/public/system10/index.html","a78adbc11bbaa2af028572bd2035d549"],["E:/qinhao/hexo/public/system11/index.html","e5ac3bcc8d7bc4e80e2f980d25606a66"],["E:/qinhao/hexo/public/system12/index.html","61cd1869ec6b827ebce40490a723aa09"],["E:/qinhao/hexo/public/system2/index.html","851159148c8ba60026d65974780c8e73"],["E:/qinhao/hexo/public/system3/index.html","464e39839065db5d71ff86fea6713a79"],["E:/qinhao/hexo/public/system4/index.html","8e3a89e662158be1c646fb2551719b45"],["E:/qinhao/hexo/public/system5/index.html","78e141cd641050033f9d8ad785521344"],["E:/qinhao/hexo/public/system6/index.html","764ad61139f2f18353c73dbbac52975f"],["E:/qinhao/hexo/public/system7/index.html","d2edc665c66a6474a9a49ae49b4dd0f0"],["E:/qinhao/hexo/public/system8/index.html","d3647201b121bc6b9550284c0fe1ce37"],["E:/qinhao/hexo/public/system9/index.html","76d028a43b18730b6580d4122d978bed"],["E:/qinhao/hexo/public/system_info/index.html","3b69b83f60ccd6016db10cfbd8844b04"],["E:/qinhao/hexo/public/tags/index.html","06d4eafe3fa50781f052ff5f33bdeff5"],["E:/qinhao/hexo/public/utils/css/all.min.css","84d8ad2b4fcdc0f0c58247e778133b3a"],["E:/qinhao/hexo/public/utils/css/font-awesome-animation.min.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/qinhao/hexo/public/utils/css/solarized-light.min.css","769d25bae36c449b6612b98809d01041"],["E:/qinhao/hexo/public/utils/css/waves.min.css","ad8ce7fc1d688135eedeedee534aa9a2"],["E:/qinhao/hexo/public/utils/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/js/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["E:/qinhao/hexo/public/utils/js/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["E:/qinhao/hexo/public/utils/js/artitalk.js","d94fe7817fad4ecae5681cbde76a4acc"],["E:/qinhao/hexo/public/utils/js/av-min.js","bcaf9b004ff4f49349bb6201fe3b9a5d"],["E:/qinhao/hexo/public/utils/js/bbtalk.min.js","a1ab1de2ae261228a7532e855f6980a5"],["E:/qinhao/hexo/public/utils/js/clipboard.min.js","27784b7376dd992368c71b6c5559f358"],["E:/qinhao/hexo/public/utils/js/comment_typing.js","ab7b34f055a2bf8e036daec67e968d1a"],["E:/qinhao/hexo/public/utils/js/flying-pages.min.js","c20e3f49966e71df80be9a6af59449dd"],["E:/qinhao/hexo/public/utils/js/highlight.min.js","a370252e88fa5c6611ab5005c7b87b96"],["E:/qinhao/hexo/public/utils/js/instant_page.js","1a3be845085b8d94a2997a3a472feb42"],["E:/qinhao/hexo/public/utils/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["E:/qinhao/hexo/public/utils/js/jquery.min.js","dc5e7f18c8d36ac1d3d4753a87c98d0a"],["E:/qinhao/hexo/public/utils/js/lazyload.min.js","0fcd5822c9e8af807a14d3985faf91c8"],["E:/qinhao/hexo/public/utils/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["E:/qinhao/hexo/public/utils/js/scrollreveal.min.js","f7d329c68b849d6685a7462c22f47ea2"],["E:/qinhao/hexo/public/utils/js/waves.min.js","9a5b3dfca09d9e3005dc697162d4bc65"],["E:/qinhao/hexo/public/utils/ttf/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["E:/qinhao/hexo/public/utils/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.ttf","ede4ff54ccb46fe67622dbcffeb90fdf"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.woff","07fa0741d97758debce36520d5a12d5b"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.ttf","04842b94683f70c18aeb76b5a27cd221"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.woff","f48a8829bec665258b9c85b23ecbf3c0"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.ttf","5f2f8485a00387b7a1d89e793555991f"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.woff","42d66a3eb75eac2b4fc0ee58e9846497"],["E:/qinhao/hexo/public/wireless_framework/index.html","3fc525743f5c2e6c1f1206ec707f4d5d"],["E:/qinhao/hexo/public/wireless_radio/index.html","dd7fc6bf84435096de4ea5662d183c83"],["E:/qinhao/hexo/public/wireless_word/index.html","7f854728310c0a721d216d03ed675fb2"],["E:/qinhao/hexo/public/xml/index.html","1f3430ded488e6d77d6a0a4a935ebe32"]];
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







