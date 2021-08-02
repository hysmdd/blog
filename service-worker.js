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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","72027881619e4f25903fa0d406f07930"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","3eab69afb8618c59d2568449ee5f373a"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","a38f9c2006230c09f31327f6d4949ecd"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","df778c476233df38023df4c27af927f7"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","dc7a23f0f1d69b2ff5cf6822b942d884"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","6e01e7f762d2f15fd15fd97ea86bc71c"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","f0d560d1aed2437c89119bf6ff9f780f"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","a44ca7f9ad6b00bbfa5c1b58bf7fbeae"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","6176d3d20404f25da37491f601677603"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","339f2442673dae3c62f5e732831bb82c"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","2f993e77fb86465ddfb88d50931faf81"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","38fe6efdf54c65fe292d3ac3819d5659"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","0002bfee647a2d814038575b017cdb6b"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","c978fcc9430f8d09886341e5e92d6da4"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","e2cb04a8ed459b5eba669f1127686ab4"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","901e14f59755acbce5cbb7f63e9cac67"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","c4dbb398ea031a51aef845021b1a47ee"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","045ed82f620e8cd5252f6cdc152af586"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","2fae474a0f35446474a60931faca96cb"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","7ea996ae7a06e92a8b55724b3ca318b5"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","f6fbb1d37e8ea3d5fb3dbd663ac9a8df"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","c95dd06153d96ba4f046645f9727d302"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","3bb5c8bf95ddadac132d187ae122a24c"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","891bbbbc397f7261a478a42f74e2cbe4"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","c103dd0ef868942313e080602a213ab4"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","0da7fc53b93d4b6adb88268efdcf6c7b"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","cdadf0e37c7853dcb54163aff2e70938"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","9895d24f90b2a44c928d368bb9dc1e7f"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","4ef962ab651a52d42ce3c9a80ec6d2f9"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","439762d37d9398f5a3749bc1079e269d"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","0ade8a0c89019cec9c99f356df7d2600"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","e9abf119082614c07a4bb92f0aec90d9"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","8fb60ced73de709a647d6d9deb479b59"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","90bedefcbf257289470cab847ffe55d3"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","6e620fb18ab6f27d6aa9a8205bdcc5ef"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","8aa3aa8179016b02c5e2d5c244df5e01"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","9341cd1add82219da2915a569a56f750"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","293529bddd5f868f59ca8ea2cd45f0f1"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","0f2f68ddfe7237c719ee5e452c96f500"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","9f0517da4e47c97cfd3bb6c56511de02"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","b70c1affa365bb95b0ceef905e383500"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","f1d74d9b01b2c910e4f9a0ec0d73da35"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","6f22ca92fca1f1abf0a88532b623df85"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","68f6c1a4737b3532440c3d1d5047e59b"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","d2c1f9e28cc4a92f3925f3a48ad28027"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","fe53101f9bf9f4e891b086cfe8c98e3a"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","ba17fc9b85e87a19a23a2f21cc44012f"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","a9b7d946049eaef8d3fc774266dd4556"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","d495a1df84e2d29c67730534ea79c8c9"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","214fa48ed969b24de6fada483b552f99"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","d513a0b8ae9f76b159448bc3342ba3d7"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","2f40a5e1ad7f08a7bf7ba9d97854c029"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","bc647e0ed8e4f869c0110becca3eeb59"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","dfe18bde244a5791884059b9da8809b0"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","3456dbc7611856598564f036fd11fd9a"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","db23d9a066d6bc1e34e70ee2d2ea58a5"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","251c775a15ce4feebab7bb637698def7"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","f9b46dc91483acd036043ce5b61317e8"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","c78cde072f7c14034a93012e629fac52"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","46c190bfd78f98e32830cd5e43c91805"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","539decf1d6db21f444c7df09edcb184b"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","c069048e234483360c43ddf3ddc5ad2f"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","1c8a8f8902e7d08b037b30ebbe24555c"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","c8985406af9660fc3dca592dd14bd7eb"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","eb0b6f2461db53cfc38d2fcb315c777f"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","08d435f9d171cb85e6f549e0c83bb1c8"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","b7c612ed70fe2fef451dd3263482205f"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","6f6e9c8d2caa2f0fc3a7a03b73799f6f"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","024260e781d426adeae11c91bb4c054a"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","fc362002b266984bab360e66616b1c59"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","3853b0a3193dcd887c0520f00c0b45a5"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","1cea1278a549a8f911f6c377b14c8891"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","4960a1e103da8a29da964e7375351789"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","d26760dad33ffa9a8c285b738f8c4f63"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","f23baea4edb4f88992d3f3c687e8c9b5"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","617d8be687fab0f1e72cb296dff6ddb5"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","a61e345dfd16f0403030088a57ecf336"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","6867061a81f20f5b72a4b82c02001eaa"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","9a903b1c7e5c90da64c8b92edb9a8918"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","e9ce488b855c4110065f3478a4ff0976"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","09ca0ca62b2b4c812b8ef72c8a4fe23d"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","09213741d9c324a1ce7b50241288a468"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","c771cf40d6f6dbb17b32e0f9708c5e97"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","63cc5dded1eabfd2ae45aad817993ff7"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","0363d0f5fe3d0396ff7ba8fcc5340bfe"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","58eede2073510c24f1f1b1cd8432076c"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","b16e62c87d15c2ca4c6a68a2dc90e393"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","03b267856b27b82e1e74b2abb644ee48"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","df1d8a752519bbc8606f428d9df281fe"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","dcc3d0b45f4bab0b9eb20bcc1657930c"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","8f35ff55694bbbca912582e6fbf8576e"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","3919be585bfa5bf2f60085796e1be167"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","b3923024f4e9b219b5ca1c73fa655b66"],["E:/qinhao/hexo/public/2021/07/21/login_demo/index.html","7d8daa2dce05cea737633ed5d8795eec"],["E:/qinhao/hexo/public/ByteDanceVerify.html","81cbd5b23abb902d419746daa2f71112"],["E:/qinhao/hexo/public/about/index.html","61340d954139dfcd233efd0e980cc70c"],["E:/qinhao/hexo/public/archives/2020/02/index.html","280f7b37583a7362674116b61152e88f"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","33b6a0c2b0b97357180259d88facc8b4"],["E:/qinhao/hexo/public/archives/2020/03/index.html","4033cc9dec25d1bc8eebd1e27d6b83ac"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","be4768269652c630ea54f8a5c7899452"],["E:/qinhao/hexo/public/archives/2020/04/index.html","bb722532b13d440bac89816ab023bf48"],["E:/qinhao/hexo/public/archives/2020/05/index.html","931282d6d0779b8b0c9d4b865262291d"],["E:/qinhao/hexo/public/archives/2020/06/index.html","d0a49df8d5bb1a61562dee17e9b4b2ca"],["E:/qinhao/hexo/public/archives/2020/07/index.html","2521c5a30e37a904f96b53132777c4a4"],["E:/qinhao/hexo/public/archives/2020/08/index.html","d7cccafb9f42f9327caba3f66bf4f181"],["E:/qinhao/hexo/public/archives/2020/10/index.html","12a3be4116abb68ab12424bdbf314b8e"],["E:/qinhao/hexo/public/archives/2020/11/index.html","60d6f1424eafe4815263247421dfe314"],["E:/qinhao/hexo/public/archives/2020/index.html","8a1730511507cc8eda5824646673d3ad"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","5b99252da118d27b80644f8f48bb0930"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","47f9e3043f772a2c1b1168dab8fda7ef"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","26b1bb447922e1aa30486cb11fb0cece"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","791034493bb950e0fc2f043a57ee9d3d"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","e46b6b29e91fcc7793ba7d531f7ee3af"],["E:/qinhao/hexo/public/archives/2021/03/index.html","80dec85521e7c2b7bf897a2873ecdbe0"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","2b72bd646063fbc99f03999462e1e2c4"],["E:/qinhao/hexo/public/archives/2021/04/index.html","bd329899815ce255c3e5a530f92581e6"],["E:/qinhao/hexo/public/archives/2021/05/index.html","6586b6408fc839a0e6bf9369bd8500bf"],["E:/qinhao/hexo/public/archives/2021/06/index.html","40a9361796fde07470884713a6cf7fbf"],["E:/qinhao/hexo/public/archives/2021/07/index.html","01cde0b19102afe42d7b504727ec1c52"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","7bda219530f3efdb8949c038b7d42b99"],["E:/qinhao/hexo/public/archives/2021/index.html","af93af165d8093c0ab4750df80f700df"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","a74fb90afbb491f4e066bbae4a7766dc"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","6ffb3068bf288ef15f593faaa0d3ebf6"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","9910407388780f9bc8ea0011f68fc8a4"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","7ed74e2ddf457d5769e4abcb48452c46"],["E:/qinhao/hexo/public/archives/index.html","bb59bbae0689c8fff6673d8507ebcd78"],["E:/qinhao/hexo/public/archives/page/10/index.html","1951ec5911aecdd3fa16feb8dcd5bc02"],["E:/qinhao/hexo/public/archives/page/2/index.html","0ba9972be4c9da57d872fadce8ed1baf"],["E:/qinhao/hexo/public/archives/page/3/index.html","0ba9972be4c9da57d872fadce8ed1baf"],["E:/qinhao/hexo/public/archives/page/4/index.html","ccb685983d6fb751f859f6acf18ec8b0"],["E:/qinhao/hexo/public/archives/page/5/index.html","ccb685983d6fb751f859f6acf18ec8b0"],["E:/qinhao/hexo/public/archives/page/6/index.html","ccb685983d6fb751f859f6acf18ec8b0"],["E:/qinhao/hexo/public/archives/page/7/index.html","d556812b9c3baeee8d2398b9a668581f"],["E:/qinhao/hexo/public/archives/page/8/index.html","d556812b9c3baeee8d2398b9a668581f"],["E:/qinhao/hexo/public/archives/page/9/index.html","d556812b9c3baeee8d2398b9a668581f"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","e963d63addf14f1075c13a273e312612"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","78c680600fc733a99df54abcf8b952e5"],["E:/qinhao/hexo/public/categories/Java/index.html","c18059d4ab3e47b45f2423fe3e05a05d"],["E:/qinhao/hexo/public/categories/Linux/index.html","89c59376897a0b86c827240e9bb337c9"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","f7a841961511dadc1e7facf9bfaf73aa"],["E:/qinhao/hexo/public/categories/Python/index.html","48ecd3987f017fa0a3d66ddc8614ecc7"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","9ad8409b1782250e6509cfb3a70440f4"],["E:/qinhao/hexo/public/categories/交换机/index.html","89f02e4c9b0e823c43469097ae343bdf"],["E:/qinhao/hexo/public/categories/华为认证/index.html","fa6a26710c684b079e2e247221d508b8"],["E:/qinhao/hexo/public/categories/小技巧/index.html","5e5cb8c59018f05a2f47e09e72e42cdb"],["E:/qinhao/hexo/public/categories/数据库/index.html","3186beeedaaa4347ca5602bbb3d7d5c9"],["E:/qinhao/hexo/public/categories/服务器/index.html","5d88593cdc96f1b61e610ece1f319d12"],["E:/qinhao/hexo/public/categories/算法基础/index.html","c3f604891a3183b4cb688e3e3ba64fe4"],["E:/qinhao/hexo/public/categories/网络安全/index.html","45339330566d3aa10c2f0dd5e3ac2ece"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","05159e60aa0e54ad993048c9331798b1"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","8ce180967e608109b027bf2ef5b0174b"],["E:/qinhao/hexo/public/categories/软件破解/index.html","eafcbbbe780e939ae65e845b95a9352a"],["E:/qinhao/hexo/public/categories/通信技术/index.html","aae46783d326f7e89221dd586bac1cc4"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","922abb1f05067188b0361c2a93e89457"],["E:/qinhao/hexo/public/category/index.html","8babaf68fb21b245082d4cdaa322889b"],["E:/qinhao/hexo/public/css/style.css","69bbc27a8094ac09453486ddd0820200"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","bf87464f17e70fda82d9bdd29acf3e84"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","cca8ec400811d24b0072f4672399a4a1"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","74c37d8fc4a4ad3ae3b59cd99b4bed02"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","4a94275b6a6673b46ef0fa64349f2a2d"],["E:/qinhao/hexo/public/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["E:/qinhao/hexo/public/js/app.js","60b11cc8c0c85ca294cd3ff2e82096ad"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","68ce197c944a8046070500cc4d85cf5e"],["E:/qinhao/hexo/public/page/10/index.html","42ebcdc21329f192f2179d4ca27a8bf6"],["E:/qinhao/hexo/public/page/2/index.html","51b8b04b620d32cf739676b3ef28f79a"],["E:/qinhao/hexo/public/page/3/index.html","75d7f53d227202c8cb072c3191fafe4d"],["E:/qinhao/hexo/public/page/4/index.html","6c72b06f33717c301c916f815d7d2700"],["E:/qinhao/hexo/public/page/5/index.html","e816f3a2cf131cf1a9f3aa90e7735cbb"],["E:/qinhao/hexo/public/page/6/index.html","0c0853057eb4aa468f1131e24dfd12df"],["E:/qinhao/hexo/public/page/7/index.html","1446d5d07887f0c8a1b350596caa8aa9"],["E:/qinhao/hexo/public/page/8/index.html","4f2204b023ac86a22a262c87d8ac7122"],["E:/qinhao/hexo/public/page/9/index.html","6e59a6fc3ce1822cb07c6152f87e179c"],["E:/qinhao/hexo/public/style.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/sw-register.js","e74f22da3ddd952e1d9d312fd8a2620d"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","a678f72771b09fa48b1799c3800ecfc7"]];
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







