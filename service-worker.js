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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","a4308cd524a8dcc4a8b1966c6291bcb8"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","e7b9bc028c38edab914e0185951467a7"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","118493c8d115574d0951d1e25dc15f42"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","81340c655f1843a4b25b456f5508c841"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","450ec60d60e43f5600c791e029c1ada4"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","ede725dfa6c8379fee8db6ef5065d47a"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","94045c0b533c01945bf736b0f01e3e9e"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","2f58eed54eb10afc952a6c703fef8215"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","08102fcdef5376b351065a5a6acc6e9f"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","b901bbddcb7d6682e4051fb7e69c4400"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","49c916f7d86864d9fdc0565393e71d05"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","e0d0b46647a2ee73548a367544b2fc1e"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","c47c3610bd7232c760953d22f966540a"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","8fc6f7551ab2c5449581aadd7ce30a4c"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","0fce983eb6cf551d356e71035c6023db"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","f00f7c3f00743fa388eccbdd733fe155"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","8aeccce840bfc2fd988c2011e5f26eaf"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","32b95b57e01a411dea87da6953c1af23"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","e68a81b5a3b5551f3355df6e43f96d2a"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","c064e4945e64d78e782a939ea6f7ff5b"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","8434c12c872d032370bbfa01121db106"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","87e8991f4f9c3edd75959306e7bfe5a0"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","4ae1598d72d9f4927240d98958c3d4f1"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","3c1f46189297acd84c048555649e6ab6"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","4b65a25f783bb396574ac474f9c6fae1"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","3a98d41f352cfc2818c9fed5b47d3c75"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","1bf0db0ec7dd40395fa48ef26a3d62d8"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","db9ff0f7815050f736ef727b0ebf51a2"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","172cb8dea78e174eae30482d693000e5"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","05a475b81245523f821899b838c4e078"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","f776cd6663d7699c399204425f1594cd"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","45aaa3edfc25f095d1f2743652dbd003"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","4df55986aff152ec148382f969f80cfe"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","97adb1d01eade809455ab30c62f31fc9"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","4e8a3b9d3cefbaa8a728519f4c50c1c3"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","64ecee82a370b048428670a1774a9671"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","a98cf1082be280575f59bea585f83ee9"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","1211b199f527c2b70e293a72aaf4ad07"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","c9f86dbfe89933ebac31d16afd0e97f0"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","00a93091b19b4a0d3754d91606891340"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","09705534e8d4fb799b753aa73844ae24"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","66381e5ff450ea34c50d983ddd351c47"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","af9b93d55b0cc5067fa31894865884b3"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","ef390a5942184ca1b2ff62ed520aefd3"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","535a73b66c109f8ee0552682e3827441"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","6839b43374d37fc7761da22968f68c1e"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","ebb9c1bf0d738b3730f1824491cd13ba"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","71c83b0dd17ee7edcdd528030386a116"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","6f14c62f1638205e6cc9a38be71eed83"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","4f7ef3c47be3dc108b3eb3d04ca8451b"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","09a8eb5762396ffeab9041298e5a679d"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","1e169f1cf9063f3b36ea9148ec07bd7c"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","3d63d81cf0344f858ab734dabdebd23c"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","9de7df1ad8001feee182213a01ec3305"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","98387dd2b38a0d678e75fd963bd148f2"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","1403f1b8d1fef61f1f34dea0eca0477b"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","a281b3ba9e6f01438f7d354ef4666e2f"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","a346f54a593ff27b1278411d01c38164"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","4cf7c5029c8514ede4f6fca990a5df07"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","73d00f6cbf119c86664f788eb86b6afb"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","83a6b8b7543762d02d408c8f2e613d8c"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","00b900d5154f9138da8d65c90aa16652"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","940c4ac5ef22aa74d1993c3d33b6a41a"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","47ced39d0b17d237c6f7dc8800f75a03"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","43da7d8995ed3c170ee770e3dce8edc3"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","216d8d396e6a1c439110d954aac17993"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","92bf161ba9a885fd30d98ae967d7f985"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","b1f3c051dd1a8476b33a5015060e46ed"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","d582f750c66d0103d738c13cac110c23"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","374105c2d9fd769d956ed86622c1584f"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","6c31cc119f91e36416c7d0655b0061be"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","6b96fde10e13df3e960079437b84c392"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","6a7c71bb7fd42c5ff8ee956f27c3a023"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","7e547e693940c3e798f3205fff65c08a"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","5939ffee26bbf9dadb8712fdc3a11514"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","4d467913ce13b8f52268e45db7fb1bce"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","98e30f13b3bfa815c574056dd7041f9e"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","16ad63af2c296a73c166d1111ce64c6b"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","5c8b4482fc15c31e8b34b84ae7a058c9"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","1978b7be8de39c64eebd072b86aee36f"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","3994330723e99e2dbaa4df608f355e5f"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","887aab4d19a19b123646e006b42d0770"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","9727b4ff01e85dd81910afea1e0a1260"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","e5d076b676db6ad84745969d50c0b410"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","9ab1f2f9d9d900b33bfca06ee5a532a4"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","6bab861e9d8555209c376a0e8809213e"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","a48128e7ca89de3065c5a7c986b9e764"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","369c40e6f72cdb119532c1c5f705f064"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","2c8efd4b8d2e893cd01bc2a02f6c82f3"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","ca2578f2cc8e5c219a9714f1fe4eb7cb"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","99704cdd3a8b5d0c8c3acc304b9fa2ae"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","3898f5e372c8615d4bc22c527487beb3"],["E:/qinhao/hexo/public/2021/07/21/login_demo/index.html","2bd788af15e40a24b1a0c88b80d80900"],["E:/qinhao/hexo/public/2021/08/01/dataStructure-1/index.html","3727c216c7bcb8ab50317ff5f1bb20bf"],["E:/qinhao/hexo/public/2021/09/01/stock_1/index.html","61f9c727a8e50f03784c43c13c96e2e1"],["E:/qinhao/hexo/public/2021/09/02/stock_2/index.html","7570135aad24ffedd7791cb0a317c9da"],["E:/qinhao/hexo/public/2021/09/03/stock_3/index.html","73d2e4ea6e85f0a1c142e15b8210ff39"],["E:/qinhao/hexo/public/ByteDanceVerify.html","b7ccefcd3483ba9b11e541d4a39bc137"],["E:/qinhao/hexo/public/about/index.html","53d4211b58f1927ca05dad919fcd0969"],["E:/qinhao/hexo/public/archives/2020/02/index.html","3e1d81a2fa6e36571350de9a433f91c4"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","9118e7828a29c9d3f36a164c012c11c3"],["E:/qinhao/hexo/public/archives/2020/03/index.html","9e89231378cf045530eca2b87a7f98c4"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","e9769208d8d39f7f66a26d5ace00fd6c"],["E:/qinhao/hexo/public/archives/2020/04/index.html","030c824e2050ca8ed4d9d9779b4f321c"],["E:/qinhao/hexo/public/archives/2020/05/index.html","b24c8f6e9ceeac68e583efc718344a09"],["E:/qinhao/hexo/public/archives/2020/06/index.html","a4710e44fdb24fcbb08887976823da1d"],["E:/qinhao/hexo/public/archives/2020/07/index.html","59ae970c33b73f7d43763f149aa0c397"],["E:/qinhao/hexo/public/archives/2020/08/index.html","7aa3984932090192ee2c292e3feac72a"],["E:/qinhao/hexo/public/archives/2020/10/index.html","d60d7d4160dcd982369ffd14e784b0ff"],["E:/qinhao/hexo/public/archives/2020/11/index.html","bc198e3ee88d02a70ea922602f3d2446"],["E:/qinhao/hexo/public/archives/2020/index.html","27c5d9ede2927ad4051af8968f3c2639"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","9dc243c9e25d30ff6a5ffee1f4e7e538"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","248f3bfbec737548be34e23eacbf9263"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","e8302dac6c70880ede86511c20729a9e"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","2dfe95354a59bf9fd0557224d20f1970"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","81d5509fdacd14e96e347875c34b6031"],["E:/qinhao/hexo/public/archives/2021/03/index.html","0fee20784af1556d5be0d701bd6d713e"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","b087e1e39beeda5f64f842e4ddcd0482"],["E:/qinhao/hexo/public/archives/2021/04/index.html","3c9ed947528a74be40a21ef46e3cbb98"],["E:/qinhao/hexo/public/archives/2021/05/index.html","9f346f16c5efb53a82fce67b1df40855"],["E:/qinhao/hexo/public/archives/2021/06/index.html","01234ef59c3605940bb0ae898c31185d"],["E:/qinhao/hexo/public/archives/2021/07/index.html","4f3bb06ba66d7a6925d3b5a6d94c8a18"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","cecce506881151c1534d6a2bef19c224"],["E:/qinhao/hexo/public/archives/2021/08/index.html","b5dd36af8e208508861bd4982c9a9142"],["E:/qinhao/hexo/public/archives/2021/09/index.html","32ecf9fc3d73c193fe2016cf1dca306f"],["E:/qinhao/hexo/public/archives/2021/index.html","deb9f26ce882b5d3d85d651ac2b25b5c"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","1137a821c3ec1c3fd3c922bf85278b89"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","b64d9e32e89fef7f5072778a3a62c951"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","af785f1aed36832d48e42ef2628d8b0a"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","108aa9aa667db55db2dcd3f518233e90"],["E:/qinhao/hexo/public/archives/index.html","c7c87b02732d30e8e358f9e25c97fe0b"],["E:/qinhao/hexo/public/archives/page/10/index.html","f71bee2b25e79302b5abbb774e9c725d"],["E:/qinhao/hexo/public/archives/page/2/index.html","b54165ef7b176655e1f89a47fcf5f05e"],["E:/qinhao/hexo/public/archives/page/3/index.html","b54165ef7b176655e1f89a47fcf5f05e"],["E:/qinhao/hexo/public/archives/page/4/index.html","b54165ef7b176655e1f89a47fcf5f05e"],["E:/qinhao/hexo/public/archives/page/5/index.html","b54165ef7b176655e1f89a47fcf5f05e"],["E:/qinhao/hexo/public/archives/page/6/index.html","6c2167b7da7fa90f833a942dd374cc40"],["E:/qinhao/hexo/public/archives/page/7/index.html","6c2167b7da7fa90f833a942dd374cc40"],["E:/qinhao/hexo/public/archives/page/8/index.html","c7c87b02732d30e8e358f9e25c97fe0b"],["E:/qinhao/hexo/public/archives/page/9/index.html","f71bee2b25e79302b5abbb774e9c725d"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","f18aa50195d9e497fb5cb46bdfeaef0c"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","f1272f563f6ec12dbf736edc26a88af9"],["E:/qinhao/hexo/public/categories/Java/index.html","4dcca7fc5a3d30ac33af1bdc5225b2de"],["E:/qinhao/hexo/public/categories/Linux/index.html","159c5fb1579da6e675f5ecc6a16abcd6"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","2a21bd2f845c22b74b46db765ed05416"],["E:/qinhao/hexo/public/categories/Python/index.html","195e1a5d4d97436f06b92f678b21384c"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","8d06ba8fd7e860e5afdd99960f8ccd96"],["E:/qinhao/hexo/public/categories/交换机/index.html","8e7bfdfe871743ae61dd0054a5598bde"],["E:/qinhao/hexo/public/categories/华为认证/index.html","3d0f18ee453ab937ec72abcb259e0ad8"],["E:/qinhao/hexo/public/categories/小技巧/index.html","18381c908a2ef5b9d4253efb99ae2a1f"],["E:/qinhao/hexo/public/categories/数据库/index.html","08ec7995753a59744589777ffdc839ce"],["E:/qinhao/hexo/public/categories/数据结构/index.html","4940ee05ad7244b14eab2377d65e532f"],["E:/qinhao/hexo/public/categories/服务器/index.html","f03e1a0a6dd5b2afce77d854a601fe40"],["E:/qinhao/hexo/public/categories/算法基础/index.html","b0beb4209475e28e3c31ecf73e00d674"],["E:/qinhao/hexo/public/categories/网络安全/index.html","dbdf7bd2b5dfe7ffb1c1c5ef5779928c"],["E:/qinhao/hexo/public/categories/股票知识/index.html","a5a936175e1441be55dd14d4926f91dc"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","51f6555caa1c30903bd23f27d2aeb047"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","4af7ecbe6377dbeb92bc0139d6b2bb14"],["E:/qinhao/hexo/public/categories/软件破解/index.html","d83d509c1ccd01b31d631ff1af7a9f9e"],["E:/qinhao/hexo/public/categories/通信技术/index.html","94f2ac8018aa23d59e682b691bcca798"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","af782c9f7b187ed11b3dc8d9c40333b6"],["E:/qinhao/hexo/public/category/index.html","cf2e03a2ad6c492e5e5655843f11e162"],["E:/qinhao/hexo/public/css/style.css","69bbc27a8094ac09453486ddd0820200"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","bc8cd6bd55ebfb7d2b42d045f617d982"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","d62f074be9f87240c0ab2a429c6c73f8"],["E:/qinhao/hexo/public/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["E:/qinhao/hexo/public/js/app.js","60b11cc8c0c85ca294cd3ff2e82096ad"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","b0ab788a4404c2bc953d4cc76efa61e1"],["E:/qinhao/hexo/public/page/10/index.html","f3dd47e45caa32c5d54faf0c8c000c7c"],["E:/qinhao/hexo/public/page/2/index.html","d938ee930bb8df7f8387d6adf5b884e5"],["E:/qinhao/hexo/public/page/3/index.html","94c64a4a7d90f94148d0ba01f44d367f"],["E:/qinhao/hexo/public/page/4/index.html","00834e63a4d67ac736ef425d4afc5176"],["E:/qinhao/hexo/public/page/5/index.html","630ca1c0349dd3390fc545c65c89d9e6"],["E:/qinhao/hexo/public/page/6/index.html","b4621866a307839e63ef258d2e1a2dcc"],["E:/qinhao/hexo/public/page/7/index.html","f49a13831b672e84772e5a0f9277879b"],["E:/qinhao/hexo/public/page/8/index.html","14d01b15dbe4e684cdf779cbae480ab1"],["E:/qinhao/hexo/public/page/9/index.html","2bbaf79ca8d67d39d3f7e9c703fa533a"],["E:/qinhao/hexo/public/style.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/sw-register.js","e0b8913e7e918786a6a182c3cdf5c9c3"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","733f822f4c33d4a0bbe926bdac96a661"]];
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







