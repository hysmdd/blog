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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","a4308cd524a8dcc4a8b1966c6291bcb8"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","e7b9bc028c38edab914e0185951467a7"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","118493c8d115574d0951d1e25dc15f42"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","81340c655f1843a4b25b456f5508c841"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","450ec60d60e43f5600c791e029c1ada4"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","ede725dfa6c8379fee8db6ef5065d47a"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","94045c0b533c01945bf736b0f01e3e9e"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","2f58eed54eb10afc952a6c703fef8215"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","08102fcdef5376b351065a5a6acc6e9f"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","b901bbddcb7d6682e4051fb7e69c4400"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","49c916f7d86864d9fdc0565393e71d05"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","e0d0b46647a2ee73548a367544b2fc1e"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","c47c3610bd7232c760953d22f966540a"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","8fc6f7551ab2c5449581aadd7ce30a4c"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","0fce983eb6cf551d356e71035c6023db"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","f00f7c3f00743fa388eccbdd733fe155"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","8aeccce840bfc2fd988c2011e5f26eaf"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","32b95b57e01a411dea87da6953c1af23"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","e68a81b5a3b5551f3355df6e43f96d2a"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","c064e4945e64d78e782a939ea6f7ff5b"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","8434c12c872d032370bbfa01121db106"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","87e8991f4f9c3edd75959306e7bfe5a0"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","4ae1598d72d9f4927240d98958c3d4f1"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","3c1f46189297acd84c048555649e6ab6"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","4b65a25f783bb396574ac474f9c6fae1"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","3a98d41f352cfc2818c9fed5b47d3c75"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","1bf0db0ec7dd40395fa48ef26a3d62d8"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","db9ff0f7815050f736ef727b0ebf51a2"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","172cb8dea78e174eae30482d693000e5"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","05a475b81245523f821899b838c4e078"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","f776cd6663d7699c399204425f1594cd"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","45aaa3edfc25f095d1f2743652dbd003"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","4df55986aff152ec148382f969f80cfe"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","97adb1d01eade809455ab30c62f31fc9"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","4e8a3b9d3cefbaa8a728519f4c50c1c3"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","64ecee82a370b048428670a1774a9671"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","a98cf1082be280575f59bea585f83ee9"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","1211b199f527c2b70e293a72aaf4ad07"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","c9f86dbfe89933ebac31d16afd0e97f0"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","00a93091b19b4a0d3754d91606891340"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","09705534e8d4fb799b753aa73844ae24"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","66381e5ff450ea34c50d983ddd351c47"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","af9b93d55b0cc5067fa31894865884b3"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","ef390a5942184ca1b2ff62ed520aefd3"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","535a73b66c109f8ee0552682e3827441"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","6839b43374d37fc7761da22968f68c1e"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","ebb9c1bf0d738b3730f1824491cd13ba"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","71c83b0dd17ee7edcdd528030386a116"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","6f14c62f1638205e6cc9a38be71eed83"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","4f7ef3c47be3dc108b3eb3d04ca8451b"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","09a8eb5762396ffeab9041298e5a679d"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","1e169f1cf9063f3b36ea9148ec07bd7c"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","3d63d81cf0344f858ab734dabdebd23c"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","9de7df1ad8001feee182213a01ec3305"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","98387dd2b38a0d678e75fd963bd148f2"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","1403f1b8d1fef61f1f34dea0eca0477b"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","a281b3ba9e6f01438f7d354ef4666e2f"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","a346f54a593ff27b1278411d01c38164"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","4cf7c5029c8514ede4f6fca990a5df07"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","73d00f6cbf119c86664f788eb86b6afb"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","83a6b8b7543762d02d408c8f2e613d8c"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","00b900d5154f9138da8d65c90aa16652"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","940c4ac5ef22aa74d1993c3d33b6a41a"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","47ced39d0b17d237c6f7dc8800f75a03"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","43da7d8995ed3c170ee770e3dce8edc3"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","216d8d396e6a1c439110d954aac17993"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","92bf161ba9a885fd30d98ae967d7f985"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","b1f3c051dd1a8476b33a5015060e46ed"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","d582f750c66d0103d738c13cac110c23"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","374105c2d9fd769d956ed86622c1584f"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","6c31cc119f91e36416c7d0655b0061be"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","6b96fde10e13df3e960079437b84c392"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","6a7c71bb7fd42c5ff8ee956f27c3a023"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","7e547e693940c3e798f3205fff65c08a"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","5939ffee26bbf9dadb8712fdc3a11514"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","4d467913ce13b8f52268e45db7fb1bce"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","98e30f13b3bfa815c574056dd7041f9e"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","16ad63af2c296a73c166d1111ce64c6b"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","5c8b4482fc15c31e8b34b84ae7a058c9"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","1978b7be8de39c64eebd072b86aee36f"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","3994330723e99e2dbaa4df608f355e5f"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","887aab4d19a19b123646e006b42d0770"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","9727b4ff01e85dd81910afea1e0a1260"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","e5d076b676db6ad84745969d50c0b410"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","9ab1f2f9d9d900b33bfca06ee5a532a4"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","6bab861e9d8555209c376a0e8809213e"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","a48128e7ca89de3065c5a7c986b9e764"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","369c40e6f72cdb119532c1c5f705f064"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","2c8efd4b8d2e893cd01bc2a02f6c82f3"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","ca2578f2cc8e5c219a9714f1fe4eb7cb"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","99704cdd3a8b5d0c8c3acc304b9fa2ae"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","3898f5e372c8615d4bc22c527487beb3"],["E:/qinhao/hexo/public/2021/07/21/login_demo/index.html","2bd788af15e40a24b1a0c88b80d80900"],["E:/qinhao/hexo/public/2021/08/01/dataStructure-1/index.html","a8faf1e5d0496abeff887667a2d5eab5"],["E:/qinhao/hexo/public/ByteDanceVerify.html","b7ccefcd3483ba9b11e541d4a39bc137"],["E:/qinhao/hexo/public/about/index.html","53d4211b58f1927ca05dad919fcd0969"],["E:/qinhao/hexo/public/archives/2020/02/index.html","6f7406ce7a69b153c72313312364760b"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","94202d0a539269b43be370016528d076"],["E:/qinhao/hexo/public/archives/2020/03/index.html","ce11748a019b1d2bb64d8f08e76669ea"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","d9270f5e62fee1e7e882ad6b0742cbac"],["E:/qinhao/hexo/public/archives/2020/04/index.html","d80d12c61fe98800d48b4ee134cc05e4"],["E:/qinhao/hexo/public/archives/2020/05/index.html","28131b5f8281529d18d18b80009d006c"],["E:/qinhao/hexo/public/archives/2020/06/index.html","93f292a23ec7502e584f2c8b166b933b"],["E:/qinhao/hexo/public/archives/2020/07/index.html","0bec4e4fea1bd7ac1ae65c79a3bab070"],["E:/qinhao/hexo/public/archives/2020/08/index.html","63088d637f1e253edfaf961acda3778b"],["E:/qinhao/hexo/public/archives/2020/10/index.html","e561079f6defae880927b0bcd71c133f"],["E:/qinhao/hexo/public/archives/2020/11/index.html","73f74d6dea278dba8991f5f391ad115b"],["E:/qinhao/hexo/public/archives/2020/index.html","2dd9ef849241d26b420058fe691f8f78"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","2fa2684935d961b6f8923dbb2f59e546"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","b1f22764956eade8fc8f0ec05a779359"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","0b7b0c3abf1c161f0791a33ddf4d24b0"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","2a863ec58a5b4bd87173d1969af62550"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","c3ffee29d45797e45a44ccb5fb8263a7"],["E:/qinhao/hexo/public/archives/2021/03/index.html","cbab5d27407f222f985886659fef6464"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","a33f7062d53f7e88034b1a9dc7c38bba"],["E:/qinhao/hexo/public/archives/2021/04/index.html","a7440cd61d55fd90e04a45fd52096512"],["E:/qinhao/hexo/public/archives/2021/05/index.html","88bbf9741db9601cae7c6bd584e31085"],["E:/qinhao/hexo/public/archives/2021/06/index.html","c06c2deccd473769aeb996737da0367e"],["E:/qinhao/hexo/public/archives/2021/07/index.html","b3f60141bb08aba8667b34ff389510c7"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","9dc68007f83b9da7f9ffc4959f78fdf6"],["E:/qinhao/hexo/public/archives/2021/08/index.html","bbc33313d28a7c874eaad60286e59cde"],["E:/qinhao/hexo/public/archives/2021/index.html","a417d0ebbebc521a43344ad383982f74"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","73228d325e48367b04af64a6a5d5e08f"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","5169ead23393f97c181ef01ee6969edb"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","c8fed6109e9055ce92fc56b50e0588eb"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","108aa9aa667db55db2dcd3f518233e90"],["E:/qinhao/hexo/public/archives/index.html","63285dc9ed9dd597625475b52842032f"],["E:/qinhao/hexo/public/archives/page/10/index.html","794d1afe4b7f4edee0c1d52af2cbcd78"],["E:/qinhao/hexo/public/archives/page/2/index.html","39ced3eb7dfdc47c5641d96b5d7ac701"],["E:/qinhao/hexo/public/archives/page/3/index.html","39ced3eb7dfdc47c5641d96b5d7ac701"],["E:/qinhao/hexo/public/archives/page/4/index.html","39ced3eb7dfdc47c5641d96b5d7ac701"],["E:/qinhao/hexo/public/archives/page/5/index.html","39ced3eb7dfdc47c5641d96b5d7ac701"],["E:/qinhao/hexo/public/archives/page/6/index.html","a7bb1ef34c5ca932347e251618dc4056"],["E:/qinhao/hexo/public/archives/page/7/index.html","a7bb1ef34c5ca932347e251618dc4056"],["E:/qinhao/hexo/public/archives/page/8/index.html","794d1afe4b7f4edee0c1d52af2cbcd78"],["E:/qinhao/hexo/public/archives/page/9/index.html","794d1afe4b7f4edee0c1d52af2cbcd78"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","40573cb80dfd069fd75c9796c4014f9b"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","c4c232c85adeba524a2ca16fa4e87fbd"],["E:/qinhao/hexo/public/categories/Java/index.html","2fb989a83a2db1b0de3dc9fde1406618"],["E:/qinhao/hexo/public/categories/Linux/index.html","ec9338da667c80aebbd33a5d343de66e"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","09e7ca6aa00b2b156ae528fc2a703db6"],["E:/qinhao/hexo/public/categories/Python/index.html","82d8ffb915f48d12ae5588eccbb14389"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","e4b970c33412badb1429fc7bba038273"],["E:/qinhao/hexo/public/categories/交换机/index.html","eab34bdc37ebe8056d046f452f3d4a00"],["E:/qinhao/hexo/public/categories/华为认证/index.html","af8df6cef58c02fae1b7701bc0eec5fb"],["E:/qinhao/hexo/public/categories/小技巧/index.html","4db8a9cd5b556cc8ef1b584cf9a4aa99"],["E:/qinhao/hexo/public/categories/数据库/index.html","f5797a2687077c6ca7e2ac4da9b04aca"],["E:/qinhao/hexo/public/categories/数据结构/index.html","b43efa8b895d87f670fd504aa6f87391"],["E:/qinhao/hexo/public/categories/服务器/index.html","77c38a5bc3ee464883f7404854e9255e"],["E:/qinhao/hexo/public/categories/算法基础/index.html","de8c78fa85ffa7936555cd268ebf4eb1"],["E:/qinhao/hexo/public/categories/网络安全/index.html","5e3a30c9d444fc5cb90fdc57372d0a76"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","9ed168b8d8994ea4d6eb0d515d86d06d"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","c8f0ab4b816966610b6e6358acc13c9b"],["E:/qinhao/hexo/public/categories/软件破解/index.html","79e9e7a4a9a36b808e547b23ac748793"],["E:/qinhao/hexo/public/categories/通信技术/index.html","1db15caba8d0525932013207a637497b"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","e4bdb7d3dce4641e4152a937ba998809"],["E:/qinhao/hexo/public/category/index.html","d3d7d9ed33c44e26e806b14cab4e9b1a"],["E:/qinhao/hexo/public/css/style.css","69bbc27a8094ac09453486ddd0820200"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","bc8cd6bd55ebfb7d2b42d045f617d982"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","1b08f3b53904a5d400ed8df9a093f93e"],["E:/qinhao/hexo/public/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["E:/qinhao/hexo/public/js/app.js","60b11cc8c0c85ca294cd3ff2e82096ad"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","42e2e1b6bf76a7a03a00e65fbbba293d"],["E:/qinhao/hexo/public/page/10/index.html","3c88f437425a54af7111923ca27d0724"],["E:/qinhao/hexo/public/page/2/index.html","d3f2d3d54930b638e7c3da97970cf0d1"],["E:/qinhao/hexo/public/page/3/index.html","ea0475ec321470612574159748377340"],["E:/qinhao/hexo/public/page/4/index.html","777d40154c0a0b6aa4466762f396de71"],["E:/qinhao/hexo/public/page/5/index.html","8f7599b9f6e809eeaff8113d458f77d7"],["E:/qinhao/hexo/public/page/6/index.html","e9ee6ed33455c4e21a6654986810a17e"],["E:/qinhao/hexo/public/page/7/index.html","3e68877091e48f5760201c3786370e97"],["E:/qinhao/hexo/public/page/8/index.html","8eacf578d3d4738551f029639b525b54"],["E:/qinhao/hexo/public/page/9/index.html","3bcd073d0037539010df5f2c8b868ced"],["E:/qinhao/hexo/public/style.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/sw-register.js","0f77c174b68ffa337008f6ba79f6bb9d"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","733f822f4c33d4a0bbe926bdac96a661"]];
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







