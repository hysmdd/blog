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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/01/01/css_clear/index.html","483d518cccec43e6024b296ba01e9629"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","d54370d79f1d4d22e433fe32cb33f72a"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","6218345f19a370ab4ed4d8436da0c219"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","e247202f051567a1fae4a78ae737d514"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","e687afe86f92f1aeee13c84564f25bc0"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","5b32dbeed7ff9ee0a4cb62a22fd6e1c4"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","76495b77e02d1aef51d24395390029c3"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","799d96a72d172dcdeff2fe0234bf4d4e"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","a4d636ad18425365ee05513e8480aed6"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","404358cc0bcce9dca8c7371865281d9f"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","e1ed996936fa14994ecc9863033e54a9"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","86b5e336d0d93dfabbf24ce1cc45b734"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","d76850034baa758617c9ec75283f4fa1"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","28c610d6d041d4056c3db3c44e6713c3"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","2bfdf7c23460615a18e6fdcd77f086bb"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","652e61c07293fa6d87f3a8808fd336f1"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","fef2ff83c20a2fe6d318529fd6683158"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","0ea0bf6c1582ff9f58390c202b4d5c29"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","e45b5cb21a070503cc19bf38fe60be29"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","11c88e607a5d90128ea4669be8861d5e"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","91f431e7edbab5432e6cb1925e1414f4"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","26df37663e2d8ea62c82f81f2e5d3b12"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","d83d6b0ff2e2ad9dfcfc27fdd7d70341"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","12e36625eded79f3918ebbfde20f58a6"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","cdc1283c4c88373bb77e2802fe819ca3"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","2de439a2e97f0fd83fb433b440f2afb6"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","ab8fc299cc555577cfa57aaade6e9a48"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","7b31bf3288fde764f0ae4eca63777a53"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","719470462806b8aa0018a24a979ce703"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","35b30557cab7e005250ebcf49cc68665"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","be9143d51c6619e09b26d20c990d869b"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","8c39cca4a254e4019c92be1990daec77"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","ca3fa57f03402d9f5a86c8a1ae0ad7b5"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","3234c71a02a013a15a21e4adb8bb728a"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","bbd637ea0865a200c3c51a7844430c79"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","14d19cd8ef15cffc68f8f885944e1c57"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","18ce813efaa0c075cb37b3b7565276dc"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","fce38cd66a1692019ce695b0e0020795"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","56eab0b586d8519fe3232f27609122fc"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","e38ec11af3e5f7eef1d386bca8bd1d8f"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","cc874f77f3c62d6180c6a21168957cf7"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","cdb490034023a3df029f7a76fd41ae3a"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","4da4c51032d39961fdae97813d85d6d8"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","ba7f4dd2fbc81bb4c47039e23107b6ee"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","e75ac26265f0fb7fc8154ae4ca50339f"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","5a93fe0aa63dadf3e3885f15728047c2"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","438a9f6e9a136d6ee091298caf8afb91"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","280846aa1c391394ca0f132eb4d9b59c"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","0a71b8b3df821154d712dfc4ce62bd1a"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","928b42c65a2bc3a4d04d07b3b75edd9b"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","05c506def9bfc100f9ba69e031643cb6"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","b6e478cfb33dea631dbc7db494b64a3e"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","9695e8bf0870dbf1173859a4a68908c1"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","7ba57fb43ab5b12b78aea9b230870477"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","21a86de6df923b062b5a666fdb3237c1"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","105794565219f1f4af641a6d338b612f"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","a4b4ce53754ae16852eb44431963fd34"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","75173d8dec1b3252c54fb8b50e429d42"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","d5f81fa3f15fee2ef06856c6207b97bf"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","96212e5823a8d6a52f72bb3a7367657f"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","db22d1728a26a1e35dfee6f447753b71"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","5d697fbfd6077e4d1120248c6f4939a1"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","dd0396be0031a29037bbba9244642670"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","b909256f231290dd2a23eb6c1f48b4f1"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","bcd24349c201b94883c5440bc8006d94"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","50e2354cc0d3f80fe71517eaf366bdd7"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","19d477551d0bfc2900be536f11e3818c"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","bd3c19ef7aa4ec67b20f229709d6f1e0"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","591c0b9c54ad707e9cd67a3f3aa32275"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","88d4c60895997a196d7426783f6cb8c6"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","4ed7b415373296213ec833b3082d42ee"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","ce158f4ac087604a54bd4f456a7e336d"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","18603b9f17830e7b6222f33f16d1e1e2"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","3d03a2eaa32cae23c0aed56582cba36e"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","e6cf391f929be8783d2b0423797ac738"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","f8c30aeda9453408a143e8245faab84d"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","a1c40d5ef55d31310934fc0e3a0f2dc8"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","b42fd486e8567283eeb508d3ad04f969"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","a44c4200d2a4505d241216adff59d0d3"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","2aaa7d8fac9222b86d8a7b54fba133d3"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","85bb0b630da03c31e792241934bb966d"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","9e09fa1c21549b2677ab8612c8596bae"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","f621d7c45c2dc945052c0781dcfbe5b1"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","99b2a25dd887d8eb9b98c633c29d8926"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","83ed6db00792cb8566ebd6363c812c9e"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","7968663928643c373df3e39b30d1f666"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","3dccb64cc41ec0d328178a3738c49941"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","45f2f7d20f4acb61e528401dd8a45884"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","0a1a8ddda50f05ea9fc9e859f842975d"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","2e795ec4614521383a1d5b97d9efa990"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","ca69c7b1920429fd447221e528e2e6b1"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","5a1917d7cf7668f1cb3215e3784f4732"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","44abb1aa393f2458c1bcadd3e4a7f800"],["E:/qinhao/hexo/public/2021/07/21/login_demo/index.html","cfeb9e431fcd0b6f637655b290a046ae"],["E:/qinhao/hexo/public/2021/08/01/dataStructure-1/index.html","0546e01902d3bbfd3c233cd2ba6f8696"],["E:/qinhao/hexo/public/2021/08/02/dataStructure-2/index.html","5642fc14b1e5c37d6d81371fecb1e773"],["E:/qinhao/hexo/public/2021/09/01/stock_1/index.html","6a6f7c734c376b7514de4f2346573ef0"],["E:/qinhao/hexo/public/2021/09/02/stock_2/index.html","b633d39e26dd02da220f77b7f97989e9"],["E:/qinhao/hexo/public/2021/09/03/stock_3/index.html","d00bbba3bb6dbca7d6e78becd44ccb31"],["E:/qinhao/hexo/public/2021/09/04/stock_4/index.html","0fe789f7728fbefd2068aab9a05df737"],["E:/qinhao/hexo/public/2021/09/05/stock_5/index.html","98ca3de0e28a3560bb8b09c2cb87b382"],["E:/qinhao/hexo/public/2021/09/06/stock_6/index.html","983233d5f7518d85c670982e747dd788"],["E:/qinhao/hexo/public/2021/09/07/stock_7/index.html","ae1a4674c7ca829a4e3d82302c93acd3"],["E:/qinhao/hexo/public/2021/09/08/stock_8/index.html","a125eba1d6484f58f8eafca8acccc32e"],["E:/qinhao/hexo/public/2021/09/09/stock_9/index.html","2b949f98c04710c6dc8c33b3be54d46e"],["E:/qinhao/hexo/public/2021/09/10/stock_10/index.html","832655bb704b14ad3984c9aaad9a618f"],["E:/qinhao/hexo/public/2021/09/11/stock_11/index.html","8a43ed140e82f613bfa84dcb954dcb74"],["E:/qinhao/hexo/public/2021/09/12/stock_12/index.html","9df2e157a938e429b35a5f27bb6436c7"],["E:/qinhao/hexo/public/2021/09/13/stock_13/index.html","f4df6b646cdbd185ce20945480e99c69"],["E:/qinhao/hexo/public/2021/09/14/stock_14/index.html","23c8afeab7cb8be5f5f58bd59997537a"],["E:/qinhao/hexo/public/2021/09/15/stock_15/index.html","ecb1182d374da732c227a301eaaa3117"],["E:/qinhao/hexo/public/ByteDanceVerify.html","b9cdec6b6b664d7207c02df8bc354267"],["E:/qinhao/hexo/public/about/index.html","5fd335098789e89742b2f6021a3fd4ba"],["E:/qinhao/hexo/public/archives/2020/01/index.html","63be2da36027b598a5983dbcd7c234be"],["E:/qinhao/hexo/public/archives/2020/02/index.html","f6b55eaa9783e4874f9cae6dc0c669f3"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","2150a3f8cf529903c270f15a6c67ec8e"],["E:/qinhao/hexo/public/archives/2020/03/index.html","897884e772321583b38a650f8ab69c45"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","13a17b873d969aba5602b93fa5011680"],["E:/qinhao/hexo/public/archives/2020/04/index.html","5b983da507403e5eccda89a78168cbb8"],["E:/qinhao/hexo/public/archives/2020/05/index.html","bcb66782c3ed4adf7dd1fbcc5b80f793"],["E:/qinhao/hexo/public/archives/2020/06/index.html","1189e46858a04bc200dc0af708a36ee5"],["E:/qinhao/hexo/public/archives/2020/07/index.html","a069f3e5a1e0340585179057ec54a5bf"],["E:/qinhao/hexo/public/archives/2020/08/index.html","897a699297d2192aa70deb4030a267bb"],["E:/qinhao/hexo/public/archives/2020/10/index.html","97bd6e5229abe0b74ee07a93b2473e6d"],["E:/qinhao/hexo/public/archives/2020/11/index.html","fbb1b0c32ddf936755b2dbcedd790992"],["E:/qinhao/hexo/public/archives/2020/index.html","2c238208c8771c8d8dc7f89de08f5d28"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","69ec73d2e1ac9bc588ebd40fc2949513"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","0d53db9f3992084086c56f1c1b54d46d"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","a89d02978d2448f9f6ec3259fd55c006"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","0fb692a27ff184b662ca4fc83df05eb8"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","45e962fc0bbf352b07b0fac8f5bdaeb7"],["E:/qinhao/hexo/public/archives/2021/03/index.html","e809e0961c373d877754ed6aa1208116"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","3e3fd8cb2a96f166fb43a25a435ac2ae"],["E:/qinhao/hexo/public/archives/2021/04/index.html","22b5fdf85a74589b9d58ecbcc85d0a32"],["E:/qinhao/hexo/public/archives/2021/05/index.html","21801ee53086a8b0c9fc85f300111511"],["E:/qinhao/hexo/public/archives/2021/06/index.html","3bd7841927d32c93361fbee7d752ded8"],["E:/qinhao/hexo/public/archives/2021/07/index.html","12a790f20410faa7382fe6b670a3b0bf"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","bdb570c3c96b206804bc642d24feac75"],["E:/qinhao/hexo/public/archives/2021/08/index.html","1c8bfe14c94805ccd69976c43a520116"],["E:/qinhao/hexo/public/archives/2021/09/index.html","f0606dd5537e9dcec973e54f32de8ae5"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","512bb301b485e1d9f341f0f0830d2e48"],["E:/qinhao/hexo/public/archives/2021/index.html","a0308180e0c88bc5a71cc234f1ba229a"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","c9e2b7175c0ff284be6e10a376032703"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","f35984fc13b3918525d2628c016b07b7"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","f29131d5b6dd4a862eb324a3eb5b69a6"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","4028fb7d51361bfa39a57b1c20da7f48"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","cd19dd0e06833cfb494cc6a864cc1c12"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","e55bf14ea70ab3a77fa118a08740e364"],["E:/qinhao/hexo/public/archives/index.html","262454618e32ee22d61d0558950d1a9d"],["E:/qinhao/hexo/public/archives/page/10/index.html","8b11ffdf030a9463a7da0bc96241b371"],["E:/qinhao/hexo/public/archives/page/11/index.html","8b11ffdf030a9463a7da0bc96241b371"],["E:/qinhao/hexo/public/archives/page/12/index.html","8b11ffdf030a9463a7da0bc96241b371"],["E:/qinhao/hexo/public/archives/page/2/index.html","262454618e32ee22d61d0558950d1a9d"],["E:/qinhao/hexo/public/archives/page/3/index.html","262454618e32ee22d61d0558950d1a9d"],["E:/qinhao/hexo/public/archives/page/4/index.html","6114caf0bd85419ea0d5b495dfa6b661"],["E:/qinhao/hexo/public/archives/page/5/index.html","6114caf0bd85419ea0d5b495dfa6b661"],["E:/qinhao/hexo/public/archives/page/6/index.html","6114caf0bd85419ea0d5b495dfa6b661"],["E:/qinhao/hexo/public/archives/page/7/index.html","6114caf0bd85419ea0d5b495dfa6b661"],["E:/qinhao/hexo/public/archives/page/8/index.html","6114caf0bd85419ea0d5b495dfa6b661"],["E:/qinhao/hexo/public/archives/page/9/index.html","8b11ffdf030a9463a7da0bc96241b371"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","74444f331bac0a0b9dddbb6e79595052"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","dcad41024d2a82380f6d6a326cba08b9"],["E:/qinhao/hexo/public/categories/Java/index.html","50e678bdda82ecf76c7ed46574d64af1"],["E:/qinhao/hexo/public/categories/Linux/index.html","be2b0154154d0796713b15af91d9eae4"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","3bb55776165801414739082aeb2de3ef"],["E:/qinhao/hexo/public/categories/Python/index.html","e7e148e1302b554188db4b9a5d143592"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","f79dcf4d1fb70e6f5817bdf25af1be1e"],["E:/qinhao/hexo/public/categories/交换机/index.html","90638118750475551f3080657757433a"],["E:/qinhao/hexo/public/categories/前端学习/index.html","b10270adef31e966e8c78e03be03d09c"],["E:/qinhao/hexo/public/categories/华为认证/index.html","12d74e3c051853070609c002b2afe66a"],["E:/qinhao/hexo/public/categories/小技巧/index.html","1ce2567a5d5206bfd0ab008ee179f0fc"],["E:/qinhao/hexo/public/categories/数据库/index.html","6698ed13db24139fe3d278d8d1bb496e"],["E:/qinhao/hexo/public/categories/数据结构/index.html","1881e18acf335867bef1d34b02225bd5"],["E:/qinhao/hexo/public/categories/服务器/index.html","c9eb3eae6ec87da237b870bc08b55008"],["E:/qinhao/hexo/public/categories/算法基础/index.html","5bbdc7e30c962699547ed74db2ab572a"],["E:/qinhao/hexo/public/categories/网络安全/index.html","fedefd7d56ff56ac2e5e6d5597c9c9bb"],["E:/qinhao/hexo/public/categories/股票知识/index.html","933a36332c70e3f4181c991cf12599f6"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","4bc7683db5734a811d5aefbf4621e39f"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","71016610751e5b3f05089ee6be233cb8"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","353cefa34b85e805beee12e9e2b6d574"],["E:/qinhao/hexo/public/categories/软件破解/index.html","8b5ecacccba53bb4fa9dcb76fff46400"],["E:/qinhao/hexo/public/categories/通信技术/index.html","02a2afe5e6be7cccbc488a6a0ab514ab"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","f155e4f3f9764ea95233844e7fb4fdf6"],["E:/qinhao/hexo/public/category/index.html","7eb608fcfdbe2a0bdeb8e2b9b7a8b913"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","36488b9ba6c7b685a641aac8b607a82c"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","3c000a73f96ba5b69ea61766db0d66c9"],["E:/qinhao/hexo/public/index.html","891cd4373b55ddd5c3a0b114fc7195e8"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/mylist/index.html","92e998842978f5741b34b604dc940f30"],["E:/qinhao/hexo/public/page/10/index.html","9a775df182ee33bbaf590be88488c508"],["E:/qinhao/hexo/public/page/11/index.html","08217970dc29efc6a6fdace28ec14f12"],["E:/qinhao/hexo/public/page/12/index.html","e531c07fa38b7178c78877692395f33c"],["E:/qinhao/hexo/public/page/2/index.html","2f15ad2301f3aa1f3c6d2a60a3c1dd17"],["E:/qinhao/hexo/public/page/3/index.html","c0cfecc15c3e4407740b5d76a87fc42a"],["E:/qinhao/hexo/public/page/4/index.html","a87c09dab31766292342902fd82b364f"],["E:/qinhao/hexo/public/page/5/index.html","c78d16ff6a63755b1dc932fb6c1ef48d"],["E:/qinhao/hexo/public/page/6/index.html","f881ea86cec7fe5fb4aef7e01bd339bd"],["E:/qinhao/hexo/public/page/7/index.html","591ccedde54157953535d14d8d743f87"],["E:/qinhao/hexo/public/page/8/index.html","2ab26f7d8956361c8919eced340d7173"],["E:/qinhao/hexo/public/page/9/index.html","da7d1a506a686b75061df6cd34f8544c"],["E:/qinhao/hexo/public/shuoshuo/index.html","ff0ad07d1fb534c59e688fe1518beee0"],["E:/qinhao/hexo/public/sw-register.js","c404fe4e229b0703763e1022fde45916"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","4882dc7552b5f9acfd1124be72a3254a"]];
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







