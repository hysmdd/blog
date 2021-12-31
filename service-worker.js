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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/01/01/css_clear/index.html","dc6a2946e50d1a6acd0d02813cfc0ddb"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","95484a1315a2b89873118aa42d69b3c6"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","823f593e2f84e4b2eaa2b5b236c6a648"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","6dfc7ec9ba46b92584b25e4f3b5da077"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","2f0d42ac5f38976583d624326407cb91"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","058c57f077e33ac09278211196a8d3be"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","6fdd02fd4760dba50dbbd86472e8a80c"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","a8a431969d2d13a5d4ff28292333d605"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","dc75c22bce56ccd2f9162f24d1273600"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","00862854de8056f3bb3baf0da3056fa6"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","502b78dc547aba96f0f0eda608b1c618"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","adde036d9f1decda3159f9b64f3ad977"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","5015f893d0a9ef4a101b0273888f7859"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","9a0dd0e345674c80927bd4207d791ae9"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","4d030ee3f1ced198317b1ee9780c4633"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","f5472eed0a9fc25ddda44b6af815e9f6"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","b20a8b0cc7f209b8a1e6d03a402ae5b8"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","d24f04840a5334b4ae17245d7138294f"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","974981565fa28e2e50740c11b6649d65"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","c5603ea76dd88222d82c62ebf686f57d"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","fafbe9a6f6bf7237c9fbee9c7a65da8a"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","66d108cfd760a6e20b430be4d35d8f07"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","06eb3505e597d435a0e9b4ffaf20d569"],["E:/qinhao/hexo/public/2020/03/11/Python_basic/index.html","28ff06b50384951118a59fe3a6cc5a22"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","550c95733fb8afca64502cbb96c773d8"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","5af6c8155fc618bea83961df78ade26d"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","2a9cfdcbb15350a465ae5aeeec5f4d8d"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","faa9e2ed02069b182868ca15451530af"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","3edb03414cbe34a28e4ed9e892099bda"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","f178e83856566af71ff0f58c60296c1a"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","1c8ae8e5b6ab29b66917c1a563d03507"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","4e8bb952d2944f6c24d5fd58914c3ff9"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","d16f443fc08cafe3fea6922ba3356167"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","fb5917f4af0ae975adb444c0441797be"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","0238848b311fb071c8bcb6b4db31321d"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","63bcc4e6f1c83759482fde59de0bf250"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","4eb6ac2e5cd25d7efb43e821b44b9be3"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","2f8b245528e80bff0afe2e7ae1a5b63b"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","25a331ca238381788c92846d68964518"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","8a93683c700e15cfbd94fb62b5bb7039"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","c95d2a625cb793977462f3010825e2ed"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","a70cea15522974fa770cb508bb4b0834"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","f334dd06cc0e172ac72035ec9ab2fddf"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","55c828a296d12d9bc3edf4d6fa4b2b5a"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","6e6dc8a25d00497a03a12434b05426ad"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","2acef25e652e7b9053eb7bfb68c8becc"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","4bf2b3354e63ba88b0dc40ba5473ba68"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","1f9d2a0b2aa765c0aaa8e5e99e769bbb"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","b59fdae27157e4bf9edec0c3738d2daa"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","c810a7f7c84b8b0ffb71f5e7142ef01a"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","7c187f9a6e7e189d8f4795fd87ccc489"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","7ec9c7d2f03c9ca104c76b59474e3b95"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","06779758ad23ee6a203abb85cbb9d747"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","f8af32db93c2c659668ea7da593e9dc9"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","7b6768f70c08eb68dbd83d0ee02eb801"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","4163ed017669bb8fba0b6a17be355355"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","8300d9c46989397d3596b62344e9d10f"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","6f74c00b84cd8e1daec65216657a2b97"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","e997313eb46e8727b03fa267bef82713"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","db2aa11b4f4a816110aeb96ef0e19c50"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","5f014f6dcd4505b5eb07e06819887380"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","6882e6e6fce057f9c974032f78516662"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","9bbedd15f0360c208e1af54481fab87d"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","3f1519cfd0ddf7c3cb3be273e5ef4c70"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","56c6f0b80feb3575bf53e37727ec2f04"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","1c897e499a3ffe71c73fb6c72767135c"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","403d58658e4f8dabc573c55caa8da33a"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","e7d5f3f6eafe98b4f8429bcf5ac691a5"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","ceea7dcb068c87ff0d95c67b76d35841"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","10c33187087013bd7c592b49814b28ad"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","cad6cf7640144a1adbf356640dcbb9ca"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","9f8358afaa99fd9167e7b08bef94d597"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","e4b12407d23a98ca7f975e48ce1da207"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","7fa19c8c0e5b1979ae182a5d65b1eec9"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","f49f79972d6e9065c1725d5e6f5b5568"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","222c09ddbb3605700664ed9aecdfc140"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","be8bee82bdd67fd3fe18c64fff8bd4c0"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","c0418acf04f435eb250d18777c655d4c"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","05db618c2a01701a2254841bcd831790"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","efb3032ba1a616ee76dab50446034a79"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","6a52cf3837680195ab753845ba6f6401"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","cc764999ebec52e6128de857923b92ce"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","d1969c744b8e3a9ce623fb53515c8e1b"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","0cc685ab1f78137f2141c83d4d1291c8"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","ffddf8fe43e4850a02879d2ff17df817"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","28d621b735b5ebee6e23fb12f911aa48"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","206c862f9abc97aa110a9b554b788d2a"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","6d7567b90167e02d04a2f4cc69af68c0"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","46727b38fb789dd9131f64b918aaace2"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","f8a8298f489ff6855f268844092ecff3"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","ca4828e852e13766dc9a6e4a14eaeb8c"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","7d18cbbfc18bda1fc9537a6b4f4f6bdb"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","8aeada41a950e85c0107cab14cc78c67"],["E:/qinhao/hexo/public/2021/07/21/login_demo/index.html","b8b99d67c520f8671a93bc97e4b486d0"],["E:/qinhao/hexo/public/2021/08/01/dataStructure-1/index.html","73bcfecb2182c8a7fefd49ae31d7087c"],["E:/qinhao/hexo/public/2021/08/02/dataStructure-2/index.html","c2afd8270fb4a032c4e7619dfeebc54e"],["E:/qinhao/hexo/public/2021/09/01/stock_1/index.html","5c0bce38f3dc7431f6d9b2c937cf9b07"],["E:/qinhao/hexo/public/2021/09/02/stock_2/index.html","41d644d4f40f1285ec1d463c8daf1bb4"],["E:/qinhao/hexo/public/2021/09/03/stock_3/index.html","4c41791f520176246742df5be0776a52"],["E:/qinhao/hexo/public/2021/09/04/stock_4/index.html","fdfff8d36f1c6b1b6facbad7f8979b6b"],["E:/qinhao/hexo/public/2021/09/05/stock_5/index.html","11973c946fa4e5e95539fc0143ac5435"],["E:/qinhao/hexo/public/2021/09/06/stock_6/index.html","66a0c5a5257ba793ac979d0453d978a8"],["E:/qinhao/hexo/public/2021/09/07/stock_7/index.html","3296dc23cf7c4f1c1ec20b822a27d83d"],["E:/qinhao/hexo/public/2021/09/08/stock_8/index.html","fef17db6d3364910da66daaedca8b6b7"],["E:/qinhao/hexo/public/2021/09/09/stock_9/index.html","e7f31c36acdb219466d15d50e2349d8f"],["E:/qinhao/hexo/public/2021/09/10/stock_10/index.html","db87b00071cb1b5975a90c46813904a2"],["E:/qinhao/hexo/public/2021/09/11/stock_11/index.html","d50ebf22a6ffdb01a0f84aefd0fdf145"],["E:/qinhao/hexo/public/2021/09/12/stock_12/index.html","8d1330efdf22c6496ebbc669d7e5b218"],["E:/qinhao/hexo/public/2021/09/13/stock_13/index.html","2d8cc5ddcf8e67031bda2cf2e4184bf2"],["E:/qinhao/hexo/public/2021/09/14/stock_14/index.html","77da1379d6656be93274106227478fc3"],["E:/qinhao/hexo/public/2021/09/15/stock_15/index.html","b91ca280861b69e26abcc934856e66f5"],["E:/qinhao/hexo/public/2021/10/01/system1/index.html","d25d9ffcfbe5ec97ea62e4eae00b3f24"],["E:/qinhao/hexo/public/2021/10/02/system2/index.html","0ccd2dfc0b318f71da8fea7ca8fd0771"],["E:/qinhao/hexo/public/2021/10/03/system3/index.html","96397127427ce199d2d25f9b39df0bff"],["E:/qinhao/hexo/public/2021/10/04/system4/index.html","74abbfe2637de78a8a4d515a6c7b6346"],["E:/qinhao/hexo/public/2021/10/05/system5/index.html","5fdefc574149d0d48752153c57742701"],["E:/qinhao/hexo/public/2021/10/06/system6/index.html","231ac576649774858faf31d743541447"],["E:/qinhao/hexo/public/2021/10/07/system7/index.html","a3a2e60c3634fa8bc64246f5d492c233"],["E:/qinhao/hexo/public/2021/10/08/system8/index.html","70cb698b2f7a3d284a2e6e1575f06824"],["E:/qinhao/hexo/public/2021/10/09/system9/index.html","67d6a9ca83e30dde2adf40d967d688cb"],["E:/qinhao/hexo/public/2021/10/10/system10/index.html","c4fa98b8326c6484c3b859790c5f100c"],["E:/qinhao/hexo/public/2021/10/11/system11/index.html","737e091681a20e3312f7c65cb3f6fc0f"],["E:/qinhao/hexo/public/2021/10/12/system12/index.html","411027c83f2ff74b22d9b4233b9aa89c"],["E:/qinhao/hexo/public/ByteDanceVerify.html","f41aa8167e7d3550069a073e49f5cf5e"],["E:/qinhao/hexo/public/about/index.html","eee4e2a1b2c187971d76e85417d61fbb"],["E:/qinhao/hexo/public/archives/2020/01/index.html","5ecbe3c12e2e79943e98c2b462900466"],["E:/qinhao/hexo/public/archives/2020/02/index.html","317dc45a417ec7f1ed30bd3fa5f6cc80"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","3ecf1e10de667a94da7417ba35278a0c"],["E:/qinhao/hexo/public/archives/2020/03/index.html","76cdff701db11f7ca4fd70b00aa0e4be"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","747739b5d3f148f369e829783995c2bf"],["E:/qinhao/hexo/public/archives/2020/04/index.html","a174bab6268d9f04cd94c15cf85e8b12"],["E:/qinhao/hexo/public/archives/2020/05/index.html","327e0f920e18077ee389c79ab076ab0e"],["E:/qinhao/hexo/public/archives/2020/06/index.html","c4423e793c41cc7cb72a44953852cd2e"],["E:/qinhao/hexo/public/archives/2020/07/index.html","2fe8de55f10052b757d706be967832ae"],["E:/qinhao/hexo/public/archives/2020/08/index.html","bfc7b9df4a22885e29dadba9f0385054"],["E:/qinhao/hexo/public/archives/2020/10/index.html","616249f3ad4eeede8badcd99b7ef912d"],["E:/qinhao/hexo/public/archives/2020/11/index.html","d76ae2ce889e7b37a559de4414ea78d4"],["E:/qinhao/hexo/public/archives/2020/index.html","276bf36ce5d54922c46f4bd1b3e5b6d3"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","d9d2ec1fc4ea77292a70ee161336c709"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","d94d94dac16b73d523fa68ab44670c92"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","fe75bfac5dc2b04a44eba539bc9a52e2"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","4d3a5703f44120a85fd1a9714ae4e675"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","394783afc15313debe40b52a88371318"],["E:/qinhao/hexo/public/archives/2021/03/index.html","4fb9733410a30c0635f8b7262d09fb69"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","e68926916108c5374fce765f9e9bdc34"],["E:/qinhao/hexo/public/archives/2021/04/index.html","dd8644f1159ab5fba599e6dbb0f1efda"],["E:/qinhao/hexo/public/archives/2021/05/index.html","75b3314d3c74a59d55054f2bb40fe384"],["E:/qinhao/hexo/public/archives/2021/06/index.html","d87b953f0db586bf2f74ba7b3420d371"],["E:/qinhao/hexo/public/archives/2021/07/index.html","58258983ec2432310b3e8e7f5e1ea6f6"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","15ca4bd45e1ca4e96eb35e528c549409"],["E:/qinhao/hexo/public/archives/2021/08/index.html","747e9ccbeff46d516766b3dc29f2f9a9"],["E:/qinhao/hexo/public/archives/2021/09/index.html","cf47dab4d622ad5e6c35a75b5749b307"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","659702eb845cc9a535429afa2a5c5c13"],["E:/qinhao/hexo/public/archives/2021/10/index.html","2e6ae97ff2e06d5eb9cbf015adfb9610"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","305da6c7315e2bfd86ce0e4e80183417"],["E:/qinhao/hexo/public/archives/2021/index.html","65174dd4e73c9e4f25b3067bd7eb53ba"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","8c54d130e11713be97d2464ad4861f34"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","df1912fd55a9fb10f6bc652bcfa1452a"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","b27fa56dc677107b1ed5aa0fed8edc5a"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","8787300279e7de9e2c2c189393b9411f"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","a869db472e22bd1da00152f5df6247c5"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","7e616b62c5b8c41a983e81a9d9ee8592"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","bcc189482d2064e5b63690efd51250f5"],["E:/qinhao/hexo/public/archives/index.html","e186e9d9b8479910acefd11b446698cb"],["E:/qinhao/hexo/public/archives/page/10/index.html","82720791c8a07bbe9ed77c9495c7c7e0"],["E:/qinhao/hexo/public/archives/page/11/index.html","82720791c8a07bbe9ed77c9495c7c7e0"],["E:/qinhao/hexo/public/archives/page/12/index.html","a57bc04962a7c0981cb5a2a148458f3c"],["E:/qinhao/hexo/public/archives/page/13/index.html","a57bc04962a7c0981cb5a2a148458f3c"],["E:/qinhao/hexo/public/archives/page/2/index.html","e186e9d9b8479910acefd11b446698cb"],["E:/qinhao/hexo/public/archives/page/3/index.html","e186e9d9b8479910acefd11b446698cb"],["E:/qinhao/hexo/public/archives/page/4/index.html","e186e9d9b8479910acefd11b446698cb"],["E:/qinhao/hexo/public/archives/page/5/index.html","e186e9d9b8479910acefd11b446698cb"],["E:/qinhao/hexo/public/archives/page/6/index.html","e186e9d9b8479910acefd11b446698cb"],["E:/qinhao/hexo/public/archives/page/7/index.html","82720791c8a07bbe9ed77c9495c7c7e0"],["E:/qinhao/hexo/public/archives/page/8/index.html","82720791c8a07bbe9ed77c9495c7c7e0"],["E:/qinhao/hexo/public/archives/page/9/index.html","82720791c8a07bbe9ed77c9495c7c7e0"],["E:/qinhao/hexo/public/artitalk/index.html","fcef60015c310d87df4fed1e71c5d826"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","9136f74d24a4113256a1864efae032ee"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","aaf1ea0330b84f85ea8dbfb9bc02a70e"],["E:/qinhao/hexo/public/categories/Java/index.html","f62b908fed64766abd3322e1cd4c5822"],["E:/qinhao/hexo/public/categories/Linux/index.html","41fe8028c61a998ff06c290a968fa3af"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","12e0aa665c60947e45d949d5dfc3a946"],["E:/qinhao/hexo/public/categories/Python/index.html","f98dec4e77e506fe1d0af57b9db3f934"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","cbd71ba1d90de6a9f1d49c61f92b1671"],["E:/qinhao/hexo/public/categories/交换机/index.html","aeca672e04b8e6d22b684815ade9a103"],["E:/qinhao/hexo/public/categories/前端学习/index.html","864fe09c982ae082635be47e2c3edb42"],["E:/qinhao/hexo/public/categories/华为认证/index.html","328ad6875ffcfde77a6f61d745e2cca7"],["E:/qinhao/hexo/public/categories/小技巧/index.html","615400a4476aedca2f4a579eac9976a0"],["E:/qinhao/hexo/public/categories/操作系统/index.html","03882557d9ae44151abb3f4cb8afc7d6"],["E:/qinhao/hexo/public/categories/操作系统/page/2/index.html","6285a9d06389181b0eccb90879f6f6ea"],["E:/qinhao/hexo/public/categories/数据库/index.html","5b3d28c6d979a03e5cf43bdddc7ee7ad"],["E:/qinhao/hexo/public/categories/数据结构/index.html","fe2684dd14921071cba406c4e909cf66"],["E:/qinhao/hexo/public/categories/服务器/index.html","eea2a63529b135e014d7d72886a5816a"],["E:/qinhao/hexo/public/categories/算法基础/index.html","53fa8bfc08496edbaef436dbdf06fedf"],["E:/qinhao/hexo/public/categories/网络安全/index.html","b2981561f396c52b7c87ae04890c016e"],["E:/qinhao/hexo/public/categories/股票知识/index.html","4a5001dee5583109cc35929a7f7cb409"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","fdde51e7efc6a1eeb958fa9c2cc831c1"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","8f77c8957a99a5ca5ab651c13555c2c3"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","b89503d0728aadfd16642b14d208064d"],["E:/qinhao/hexo/public/categories/软件破解/index.html","4d7adbad6533a9662faaa8656c5f11ec"],["E:/qinhao/hexo/public/categories/通信技术/index.html","c34ce3df8774723c1fdfd006cb2b8df7"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","2b29f51b1493dfc8633a811360d17fe4"],["E:/qinhao/hexo/public/category/index.html","f4472f44cce247e605652986a22ab0e0"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","36488b9ba6c7b685a641aac8b607a82c"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","01b5d34e432b2c6d10084daa52c8acd7"],["E:/qinhao/hexo/public/image/png/circle.png","5d85080e43c457b35b23f4ad8ceaa6c5"],["E:/qinhao/hexo/public/image/png/left_ptr.png","b893704c321e35374e4bc97adb72048d"],["E:/qinhao/hexo/public/image/png/openhand.png","b040b0a64d22b7f40388391ac744949d"],["E:/qinhao/hexo/public/image/png/pointer.png","14c9f722890f733da3ae7fb15013a81a"],["E:/qinhao/hexo/public/image/png/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["E:/qinhao/hexo/public/image/png/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["E:/qinhao/hexo/public/image/png/safari.png","5e83f8d5772a61cd7036bd7bf3f84563"],["E:/qinhao/hexo/public/image/png/text.png","80d9f4da0a0c20b02898f23b035b17c8"],["E:/qinhao/hexo/public/image/png/weibo.png","2af288384e8aee34e94adae792942d2c"],["E:/qinhao/hexo/public/image/png/zoom-in.png","bf6da71dce828553d50a1ce3fd65163a"],["E:/qinhao/hexo/public/image/png/zoom-out.png","d5da599e9fd8344973c64b8ca109958b"],["E:/qinhao/hexo/public/image/svg/1f37b.svg","5e2ea03aa4963cda5e91d395c2587e6b"],["E:/qinhao/hexo/public/image/svg/1f389.svg","b052a4bef57c1aa73cd7cff5bc4fb61d"],["E:/qinhao/hexo/public/image/svg/1f4cc.svg","09204f6a96455580e749454b7449aa82"],["E:/qinhao/hexo/public/image/svg/1f4f0.svg","51cd8436fb99a6f12257db34780fb7a7"],["E:/qinhao/hexo/public/image/svg/1f516.svg","2424297076c0d1c8499820fc4f9d9f57"],["E:/qinhao/hexo/public/image/svg/1f5c3.svg","b542a360ed4cdceeac3bca73b455ebc6"],["E:/qinhao/hexo/public/index.html","56b7278774d1fb8425b4eb08fee0dc95"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/mylist/index.html","73b96f74cb19967a90dc610ffe937850"],["E:/qinhao/hexo/public/page/10/index.html","60f6dbbcdcbf2c5d6744c6c88ebc0ba3"],["E:/qinhao/hexo/public/page/11/index.html","405dd41541af0c16e9d6a8698d93c480"],["E:/qinhao/hexo/public/page/12/index.html","1b39a6445e0e8b6f5f27b9b83b65ad04"],["E:/qinhao/hexo/public/page/13/index.html","a2dd0f9e2d3470111def787efbc91d48"],["E:/qinhao/hexo/public/page/2/index.html","8d729ccf9b498c83c69b9fa1a9b3128f"],["E:/qinhao/hexo/public/page/3/index.html","08db6e32ac68d288e488b1f9210770da"],["E:/qinhao/hexo/public/page/4/index.html","2dc42dc157cfb85ee74798869b4464df"],["E:/qinhao/hexo/public/page/5/index.html","3b300c2ecccd764371bdc75797b47c12"],["E:/qinhao/hexo/public/page/6/index.html","321c88ea49a7b7bee6c04e27c6bfd00e"],["E:/qinhao/hexo/public/page/7/index.html","f8b60d451e6cb78ff38bc4abc5b1e49d"],["E:/qinhao/hexo/public/page/8/index.html","37ff98fc23ddb8dd49ae2ca38b18ed6b"],["E:/qinhao/hexo/public/page/9/index.html","f8f7a2d6560aa40e1c96547f0134010d"],["E:/qinhao/hexo/public/sw-register.js","ad0238a2255647e1d70f95c4eb8d5d5a"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","388705dee15fc0f35e0346edf28b0c90"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/demo/demo.js","223e33f402060414794932ab28b606e2"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/demo/index.html","3482e0f5771fcdc0306a15f19989d213"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/docs/config.js","b61814e8d15ba82c9d0b0bc98474dbac"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/docs/index.html","8acbdcbfd35a5cd25c79fd56ee252378"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/docs/landing.html","de9cd5add96d86d27c964ee2bcd1af4b"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/src/assets/loading.svg","00b49be9696564adabcfbf56b47adf37"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/src/assets/loop-all.svg","4c2f57b4bdf30576d8f1459faa2d1b86"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/src/assets/loop-none.svg","5d256b811354a3496146bd66ee396507"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/src/assets/loop-one.svg","0497af0811f7ed8d9942b3c0661da31e"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/src/assets/lrc.svg","34959915602620f1487045787dcd07af"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/src/assets/menu.svg","f0c4c0760fe294c81f0ef3d50733bd09"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/src/assets/order-list.svg","76fc3618f1c795f71f30881fd4511bf1"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/src/assets/order-random.svg","044f27e66ef1358309563bce9e620b1a"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/src/assets/pause.svg","f9284404b03c28fa4d82afa5fa3e01d1"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/src/assets/play.svg","b67ed7c1a38ba75a3318e64be375910e"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/src/assets/right.svg","7e4ed454ee81d36988a8e60eb911ffe3"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/src/assets/skip.svg","9dd79492f5708fbccb3f1e8f6d94b38e"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/src/assets/volume-down.svg","26b7f500da1a106d644a2c0fae06eac3"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/src/assets/volume-off.svg","fb4a583b2d471877375b360337e4c9fe"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/src/assets/volume-up.svg","64b34d9a52e90779b480770c8deb9458"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/src/js/bar.js","b37a61dbdbf0220510510e1720e6e081"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/src/js/controller.js","4a2d72f945544cd2abe4d040299b0f0a"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/src/js/events.js","f5b0a65df306c41c28ec56d5832c3f82"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/src/js/icons.js","65a0fe2cba96d19772c2b836a3bc29d3"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/src/js/index.js","1f20eca996391aff56e012c5467553b6"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/src/js/list.js","1fcced8c00d18583a21ea83dab5258cb"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/src/js/lrc.js","39d10cec60cd8911036c12ca7e13b8c5"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/src/js/options.js","e5d58b35648ad234d0a8670bfee7fda1"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/src/js/player.js","66406a4fb961cf9490b3544b8c1b1417"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/src/js/storage.js","aec0a72e30cc921f1ee9cad5e3a4fd7a"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/src/js/template.js","392458c8cff52b3d0000f5d72508cccc"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/src/js/timer.js","c044fd74a9e93c31373cd0d7df9a1736"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/src/js/utils.js","996fe1ab6d870636e679b9f17642c7d6"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/webpack/dev.config.js","85c77ccc5310390f004c556db777e9d6"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/webpack/postcss.config.js","23b4f7b70d4e9e8e91527f41c81213c9"],["E:/qinhao/hexo/public/utils/APlayer-1.10.1/webpack/prod.config.js","9919c3132744924225fe6968a9c345cc"],["E:/qinhao/hexo/public/utils/css/all.min.css","84d8ad2b4fcdc0f0c58247e778133b3a"],["E:/qinhao/hexo/public/utils/css/font-awesome-animation.min.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/qinhao/hexo/public/utils/css/solarized-light.min.css","769d25bae36c449b6612b98809d01041"],["E:/qinhao/hexo/public/utils/css/waves.min.css","ad8ce7fc1d688135eedeedee534aa9a2"],["E:/qinhao/hexo/public/utils/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/js/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["E:/qinhao/hexo/public/utils/js/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["E:/qinhao/hexo/public/utils/js/bbtalk.min.js","a1ab1de2ae261228a7532e855f6980a5"],["E:/qinhao/hexo/public/utils/js/clipboard.min.js","27784b7376dd992368c71b6c5559f358"],["E:/qinhao/hexo/public/utils/js/comment_typing.js","ab7b34f055a2bf8e036daec67e968d1a"],["E:/qinhao/hexo/public/utils/js/flying-pages.min.js","c20e3f49966e71df80be9a6af59449dd"],["E:/qinhao/hexo/public/utils/js/highlight.min.js","a370252e88fa5c6611ab5005c7b87b96"],["E:/qinhao/hexo/public/utils/js/instant_page.js","1a3be845085b8d94a2997a3a472feb42"],["E:/qinhao/hexo/public/utils/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["E:/qinhao/hexo/public/utils/js/jquery.min.js","dc5e7f18c8d36ac1d3d4753a87c98d0a"],["E:/qinhao/hexo/public/utils/js/lazyload.min.js","0fcd5822c9e8af807a14d3985faf91c8"],["E:/qinhao/hexo/public/utils/js/scrollreveal.min.js","f7d329c68b849d6685a7462c22f47ea2"],["E:/qinhao/hexo/public/utils/js/waves.min.js","9a5b3dfca09d9e3005dc697162d4bc65"],["E:/qinhao/hexo/public/utils/ttf/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["E:/qinhao/hexo/public/utils/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.ttf","ede4ff54ccb46fe67622dbcffeb90fdf"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.woff","07fa0741d97758debce36520d5a12d5b"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.ttf","04842b94683f70c18aeb76b5a27cd221"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.woff","f48a8829bec665258b9c85b23ecbf3c0"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.ttf","5f2f8485a00387b7a1d89e793555991f"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.woff","42d66a3eb75eac2b4fc0ee58e9846497"]];
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







