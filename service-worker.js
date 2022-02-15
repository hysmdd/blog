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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/01/01/css_clear/index.html","3c75d1fba5ea14e1330dcb5b7ac0008b"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","9a64f39bb76da65bf652957744dfb8be"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","c0a02fa62e260252b68e357968929ed7"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","dafee2162cf6148530e6e4da8c58e5c8"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","670599653094d62fd66acbc1d2f33b85"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","b2fb0a2266a1d39f6b21a84a5ccbbf4e"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","ada34b323aa09552f180c937a9a56561"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","4987772e727ee33398222d95b8288780"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","7f121285e1ca18df47c64b58814707fd"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","59c8731ad018ce67731c1893bb88baf0"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","4a7a00a9b9efa2b3fb4a3d6bc3e1c100"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","004a15f1fc6ee8dc68745bf6c221527a"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","519be6e76225866338f93daa7894ced1"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","06066579c64383a31a5447e3a57faf2f"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","2af0ddda970f41b15c99e832c3cff8f6"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","08cf4e1fa51aedbc150f731f4041adfc"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","32b8d7052cf05e2d675a10274db725fb"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","f0c8326dd2980df023cff238442427ec"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","001020acdc3f2a4ebc092d363e912cd7"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","dea1a9115fb6fc0a9cec8cd8f26a7526"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","3edb878beef9539e5d883d360735b7c1"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","e33d94850e6bbdd233a69e7f1cccb09e"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","731848b8f30de08786c6c0982a6c77d7"],["E:/qinhao/hexo/public/2020/03/11/Python_basic/index.html","944079789a9f8353089e7f85f5c3f4c8"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","a4869d270fc1ba0c333ceb5dcd47285f"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","50716749134d9e5e02b52141ecf22cf8"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","01a250af7750af40e9c84866660703f4"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","79c3a1c964b9ab7f6a05c69d3a618a3f"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","3f9d8be6284e95721ed1e58dc4f94050"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","cdde822384adb36295b88394d800adf2"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","2baec01ce4d42bacc9304204991ac447"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","66792852e3a7344c4132e51df21b87bb"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","b0b7195b7fedb78ce8257d3ff3a2870c"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","8b679d5efdca6a1d73c71cc40ef80796"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","84488be7d769c3825f7c06115ea216c8"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","09f585112fb258aea72ec543d541e1c8"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","5780321f323c0c33f999c45b6a105afa"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","004a9c2cf65abb1677592fde31f36c29"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","1f40becebdcd61a8b3193e642b4b890c"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","8a248ebec3e2379aedda6efb148f3ced"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","6efc21524d4d175fe3f9502e4353becb"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","d63a4d40ddbf287117555c61271197f9"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","4a9b4b74bfbfad3b4d79343196b4a116"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","082d37a586b5bec748c91902d19af884"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","e374a0bb27a88a76a68829d6c2f4a3f4"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","9ee6852c40076dd3eab4527644c51391"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","c9250b012e4f8f75788a5507b1d0fa03"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","3a40de8a61c971ea2ae1c47ae9a7aaa4"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","989cae8b941bb771db1dc9b54f885e9e"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","14bae692365dbdf9b69c967a177f0be8"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","4cfb0b41bccfbaedc2121b7f25446c7a"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","3ea56408e3eab15c9c09b4c4dbb0be91"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","f06b3062ba6f354a7467ea652e7bc59a"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","c3d4e6b4d5f853834dfbd261f214b36a"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","e0414b74899db7ba98bb83eec31800ac"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","4de846c7e8e0d403710a0ba7f66da623"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","50e46c2d7fcd893268cd40ee4f62dee3"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","09c2599a7cba435e231cca83b9a2e192"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","502aa814bc7e5dfb5371e6d957752d20"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","7c9ad8e5dc51124eab3d1bf1279fac2b"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","6bb4e900aa4373f6d61edf01ceb03df2"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","cdb2d80df16350bb7cb2c5c9921eb12e"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","e0dcd63a48ec0171177e2c9af90916f7"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","5409c1016b079991a290337a68650e07"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","f4e8edb85fb32bbcf53bae471fdf747e"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","dbb5ee06309628eab2ac7ad9b9466956"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","2a465ca1e5a2568d4088e416acb463fe"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","62c2a58b0ea23d3f011261b0255f51d7"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","26faf48c95edfedd8a311e0bbccfdd30"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","216e3892722904a5edb89f449241dcb0"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","5a6e0013291bf12e76a10f4bd65bcc6d"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","802a1b4132e478c8ea9a03393809a26f"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","9df52180d8fa4a350823fe91357354b9"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","aa5b343dc72948bc293a5b48d7c28f37"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","6c93fb3986a9035170fc0da1560c440b"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","2f05e16a2f10ed082ef78a33f770e840"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","0bf5463cb016df1597166fd27ad03ae9"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","4a7e4c6c4c1e959d7dfb19d573fda250"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","2df2360c082d3982c7c80bbdc879a078"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","95d09d65cae8a49bc574fa1e3b079666"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","dca2e7bc65edabb17982831ac3dc360f"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","168a27c27a3a129f9ee9c9c387bcd171"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","ce70d4a21ce8c6335505696d07e94601"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","99ba3f9f83f55217e17d3d03c645ccb4"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","c1be196130d0816ebcc0b7b21f8dce39"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","5ed2f531210300ba781a584da4974b54"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","f69adef26e93a7c678fecdae0af9ca01"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","eb0fececf6f45d9d4a214e721d7afd65"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","d2cae892eeeb426bf3e8df38220b21ea"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","b0d70b1f330440d3597d032a41334f70"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","a0a90f21d70525714ac26d2e5c6e4f07"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","838bab784a2b8b0d3ba1fa374c727e8e"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","7aca2621246a5872283a0aa6f90e2d26"],["E:/qinhao/hexo/public/2021/07/21/login_demo/index.html","3cb2ea427f71ea0b434eba404dbdb79f"],["E:/qinhao/hexo/public/2021/08/01/dataStructure-1/index.html","2964d2609a9369f46a78662d403810bc"],["E:/qinhao/hexo/public/2021/08/02/dataStructure-2/index.html","ceb605fdb0e3edff55e62a773c8c7632"],["E:/qinhao/hexo/public/2021/09/01/stock_1/index.html","7e773c9d942b40061c59caab9dfde2dd"],["E:/qinhao/hexo/public/2021/09/02/stock_2/index.html","ad78bfa49b281ad13d1b6e943517c64b"],["E:/qinhao/hexo/public/2021/09/03/stock_3/index.html","8706735a8ec960276f3097071e7446b9"],["E:/qinhao/hexo/public/2021/09/04/stock_4/index.html","72f4e017bc34e62ed7ed1b10547c74d0"],["E:/qinhao/hexo/public/2021/09/05/stock_5/index.html","ad1276c29c71631b2439c525a5d50df3"],["E:/qinhao/hexo/public/2021/09/06/stock_6/index.html","b1223f39b002c3379c3790308746e2f6"],["E:/qinhao/hexo/public/2021/09/07/stock_7/index.html","45f2c6d620ce76627de3950ed449bea6"],["E:/qinhao/hexo/public/2021/09/08/stock_8/index.html","a7891fcb9d29e2672aa3f98a75f191c5"],["E:/qinhao/hexo/public/2021/09/09/stock_9/index.html","1c0be8a3673a7ef93f69ac01315368b7"],["E:/qinhao/hexo/public/2021/09/10/stock_10/index.html","264f28aaadee290fad8e4417394bcc89"],["E:/qinhao/hexo/public/2021/09/11/stock_11/index.html","2bf003e9c405b2b0fe779bf44590ed07"],["E:/qinhao/hexo/public/2021/09/12/stock_12/index.html","3285f392037e1eb09a001eb127be0099"],["E:/qinhao/hexo/public/2021/09/13/stock_13/index.html","3c7a40c47955d6827bd509768ce7e989"],["E:/qinhao/hexo/public/2021/09/14/stock_14/index.html","491c5bc4171f653b3ee591d47fb3d04f"],["E:/qinhao/hexo/public/2021/09/15/stock_15/index.html","fffa2c727b8c095c7730efeebaa7d5a2"],["E:/qinhao/hexo/public/2021/10/01/system1/index.html","9b5325d8a49cb7c6069c7afc77ad9265"],["E:/qinhao/hexo/public/2021/10/02/system2/index.html","6f419681dbcb80da4fc75d55bcebe481"],["E:/qinhao/hexo/public/2021/10/03/system3/index.html","29fa08529e903124c8e110e41645d998"],["E:/qinhao/hexo/public/2021/10/04/system4/index.html","8cd82ab656c6fb8c01039bcf78c0de5a"],["E:/qinhao/hexo/public/2021/10/05/system5/index.html","0e58c30bf6dd6a8639f499346629fda4"],["E:/qinhao/hexo/public/2021/10/06/system6/index.html","3415405d676b21b4469acbf1c363d19c"],["E:/qinhao/hexo/public/2021/10/07/system7/index.html","418d8c722f6927c38cd877eec3d97b18"],["E:/qinhao/hexo/public/2021/10/08/system8/index.html","c4cab40cfab7d76ca0106585dc03a8fb"],["E:/qinhao/hexo/public/2021/10/09/system9/index.html","2e4e1624d69cb3215c178a31fa43aa3e"],["E:/qinhao/hexo/public/2021/10/10/system10/index.html","c1918aa121f2208f2b6ea9d4f3a4214e"],["E:/qinhao/hexo/public/2021/10/11/system11/index.html","7c3aded0665a7ed4ba12a6979cfcb8a7"],["E:/qinhao/hexo/public/2021/10/12/system12/index.html","1bef13e2eb72593834a20939ee3d3bab"],["E:/qinhao/hexo/public/ByteDanceVerify.html","6cf9d40f4f43bfa43656c80fffba3a46"],["E:/qinhao/hexo/public/about/index.html","d857104499099b66db5b1ec8d793b50a"],["E:/qinhao/hexo/public/archives/2020/01/index.html","9744bfb23bcf3a1a38acff276f5df11e"],["E:/qinhao/hexo/public/archives/2020/02/index.html","cc7ad7d96da65f0167db00dc330e1be9"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","a3b571491bd596ea8fbb9b16039dbd3d"],["E:/qinhao/hexo/public/archives/2020/03/index.html","b37d2cb619bac45b02996054a123fb47"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","e96fcf4a2f5c50e8796b2019c040f53a"],["E:/qinhao/hexo/public/archives/2020/04/index.html","96c52669d1e0d967e3624fd7b81be01b"],["E:/qinhao/hexo/public/archives/2020/05/index.html","8bfa9aa6f58b765941d5fd036c2316f0"],["E:/qinhao/hexo/public/archives/2020/06/index.html","a7b5cc709c5a9df710ea9951f1592b2c"],["E:/qinhao/hexo/public/archives/2020/07/index.html","ed40f199fe09ff702a260da8a257d38c"],["E:/qinhao/hexo/public/archives/2020/08/index.html","fb3cbf5e7de44692c35e18e830ae1965"],["E:/qinhao/hexo/public/archives/2020/10/index.html","d8d3da78175d20f2446bbc2b7894ea73"],["E:/qinhao/hexo/public/archives/2020/11/index.html","164caeb337a776cd11317497ad9f7f19"],["E:/qinhao/hexo/public/archives/2020/index.html","96fe880d4e022dc66da882dee0cb9fc5"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","24420a78997244239869b3b008d85b1a"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","25d7c36d8f7e8770f2e5ca514f58e578"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","6dc1132eeca5ebd15c88a6566cd0c1e4"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","c2978c8a00dea97f43fea53da71c8e45"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","e8c6e364b8c11d7f0dba9d620ebb3809"],["E:/qinhao/hexo/public/archives/2021/03/index.html","3d26e9983d3169d9c8e72696929e0ef0"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","ba58ae7baa611023094c15d26f96ca9b"],["E:/qinhao/hexo/public/archives/2021/04/index.html","5c87428449c82594a0d4de51493056fa"],["E:/qinhao/hexo/public/archives/2021/05/index.html","bc964ec2c9625b191f77d18c71771422"],["E:/qinhao/hexo/public/archives/2021/06/index.html","cb4a7e69496904a27c928c991afbc024"],["E:/qinhao/hexo/public/archives/2021/07/index.html","a59113bd72572005338862b5bbda76e6"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","70917d11d57f2ea7d430f422793ed3f1"],["E:/qinhao/hexo/public/archives/2021/08/index.html","35237d094db15d2864e90b71414e9daa"],["E:/qinhao/hexo/public/archives/2021/09/index.html","14f23cd76be3f249210218c4eb620a43"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","1f43400b67aeff98a49ac64a494f0f57"],["E:/qinhao/hexo/public/archives/2021/10/index.html","bbe0c3c47bb9846d23ab3dfc458b4d5b"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","8b17d911f0150c4612c23e9ff1b8c94c"],["E:/qinhao/hexo/public/archives/2021/index.html","1c6601d709a06c00f0a3455735891270"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","85cbbed593d5c4572e940691584ea93d"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","25d0c1e906436e3136f9a50b7b96db8d"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","f105d2afa55fa4d035cf9fe030d955d4"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","eb8133c33b8cb532361f72720508f73a"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","409ea5699e1e061095ca336d84a3da7b"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","3114bed8831f17404bf671e61d469807"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","aaf6cd3d9b7e3b6acd38d179f31b238f"],["E:/qinhao/hexo/public/archives/index.html","2a02dade9f9ea3fab4a5263ee7c467d1"],["E:/qinhao/hexo/public/archives/page/10/index.html","bd1f9b93a27d26ea90c133057c23eb96"],["E:/qinhao/hexo/public/archives/page/11/index.html","a0784389577d000a6a72315fa30b29fb"],["E:/qinhao/hexo/public/archives/page/12/index.html","a0784389577d000a6a72315fa30b29fb"],["E:/qinhao/hexo/public/archives/page/13/index.html","a0784389577d000a6a72315fa30b29fb"],["E:/qinhao/hexo/public/archives/page/2/index.html","2a02dade9f9ea3fab4a5263ee7c467d1"],["E:/qinhao/hexo/public/archives/page/3/index.html","2a02dade9f9ea3fab4a5263ee7c467d1"],["E:/qinhao/hexo/public/archives/page/4/index.html","bd1f9b93a27d26ea90c133057c23eb96"],["E:/qinhao/hexo/public/archives/page/5/index.html","bd1f9b93a27d26ea90c133057c23eb96"],["E:/qinhao/hexo/public/archives/page/6/index.html","ae38aab04b53bb7751cefdafbdfd8fe8"],["E:/qinhao/hexo/public/archives/page/7/index.html","bd1f9b93a27d26ea90c133057c23eb96"],["E:/qinhao/hexo/public/archives/page/8/index.html","a0784389577d000a6a72315fa30b29fb"],["E:/qinhao/hexo/public/archives/page/9/index.html","bd1f9b93a27d26ea90c133057c23eb96"],["E:/qinhao/hexo/public/artitalk/index.html","2e5176fb9037feb1b0e5c47ba5857860"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","8f5b72d8121df767c845b38b63158155"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","12346809afec964ece6a10533a094455"],["E:/qinhao/hexo/public/categories/Java/index.html","e5505a301f15e0be4721b72238996632"],["E:/qinhao/hexo/public/categories/Linux/index.html","d873bd32adcd55bb89a351a129d8491b"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","6c484dae8249b8a8302d8cb4402b52cc"],["E:/qinhao/hexo/public/categories/Python/index.html","b6cbb201be9dde7f66d5007d3bbefeef"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","2b82870304fda23ec51777883e677b39"],["E:/qinhao/hexo/public/categories/交换机/index.html","4dfd9829a8dd939235383ed4fb00d32a"],["E:/qinhao/hexo/public/categories/前端学习/index.html","94f483bb2dffbd4bc7a0829a6c6a8f7b"],["E:/qinhao/hexo/public/categories/华为认证/index.html","98a08d24ff343c982291ecaa57041386"],["E:/qinhao/hexo/public/categories/小技巧/index.html","240054d6a91ae11e4a5cb47e549411ae"],["E:/qinhao/hexo/public/categories/操作系统/index.html","30d57871264702c5fb0c64531a550196"],["E:/qinhao/hexo/public/categories/操作系统/page/2/index.html","942540b02ff790f12ccc03dfcb2477cf"],["E:/qinhao/hexo/public/categories/数据库/index.html","97ecdd14c5c6af1931973cd6550935c1"],["E:/qinhao/hexo/public/categories/数据结构/index.html","4c882779a5482251da059dc12c4e3b32"],["E:/qinhao/hexo/public/categories/服务器/index.html","fc67e7e826b53853e6f8c1a8c1fcc467"],["E:/qinhao/hexo/public/categories/算法基础/index.html","f80f94751b8a4ccdcb795fe792fc615b"],["E:/qinhao/hexo/public/categories/网络安全/index.html","e158880bc23e1d8735c8e4279e1d81f8"],["E:/qinhao/hexo/public/categories/股票知识/index.html","978206028511378a00eb08b38ac9b238"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","742134243aade22e54e939116b788b7e"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","a149ada244c64357735ba9e898afa9d7"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","8717cc3703a2e7370479b285dc6fe3ed"],["E:/qinhao/hexo/public/categories/软件破解/index.html","7cb3064826f8885dfbff298908e9e12e"],["E:/qinhao/hexo/public/categories/通信技术/index.html","3dc6e7cc1ee0ec819373bf34289993e3"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","78007ba61dedabaf46bc4328029ded31"],["E:/qinhao/hexo/public/category/index.html","f5fce411a190abff86eaf65875747088"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","36488b9ba6c7b685a641aac8b607a82c"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","b59f4e93109415fb8682faecb849a49e"],["E:/qinhao/hexo/public/friends/index.html","44e999198151e0428d8985ea9b9bf95e"],["E:/qinhao/hexo/public/image/png/circle.png","5d85080e43c457b35b23f4ad8ceaa6c5"],["E:/qinhao/hexo/public/image/png/icp.png","37975a3be8087f62933f7aa3e7e80d12"],["E:/qinhao/hexo/public/image/png/left_ptr.png","b893704c321e35374e4bc97adb72048d"],["E:/qinhao/hexo/public/image/png/openhand.png","b040b0a64d22b7f40388391ac744949d"],["E:/qinhao/hexo/public/image/png/pointer.png","14c9f722890f733da3ae7fb15013a81a"],["E:/qinhao/hexo/public/image/png/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["E:/qinhao/hexo/public/image/png/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["E:/qinhao/hexo/public/image/png/safari.png","5e83f8d5772a61cd7036bd7bf3f84563"],["E:/qinhao/hexo/public/image/png/text.png","80d9f4da0a0c20b02898f23b035b17c8"],["E:/qinhao/hexo/public/image/png/weibo.png","2af288384e8aee34e94adae792942d2c"],["E:/qinhao/hexo/public/image/png/zoom-in.png","bf6da71dce828553d50a1ce3fd65163a"],["E:/qinhao/hexo/public/image/png/zoom-out.png","d5da599e9fd8344973c64b8ca109958b"],["E:/qinhao/hexo/public/image/svg/1f37b.svg","5e2ea03aa4963cda5e91d395c2587e6b"],["E:/qinhao/hexo/public/image/svg/1f389.svg","b052a4bef57c1aa73cd7cff5bc4fb61d"],["E:/qinhao/hexo/public/image/svg/1f4cc.svg","09204f6a96455580e749454b7449aa82"],["E:/qinhao/hexo/public/image/svg/1f4f0.svg","51cd8436fb99a6f12257db34780fb7a7"],["E:/qinhao/hexo/public/image/svg/1f516.svg","2424297076c0d1c8499820fc4f9d9f57"],["E:/qinhao/hexo/public/image/svg/1f5c3.svg","b542a360ed4cdceeac3bca73b455ebc6"],["E:/qinhao/hexo/public/index.html","652f6a481c650d77775422d906abf0ab"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/mylist/index.html","efd663b993b0b6b67aa4355dfc0bba98"],["E:/qinhao/hexo/public/page/10/index.html","d0bac75940aa4a4b1039b5f0995f3761"],["E:/qinhao/hexo/public/page/11/index.html","3c8ae937c4335f1ee4368a76a7a5d154"],["E:/qinhao/hexo/public/page/12/index.html","dbe6ea688061c0401e4d968e558fe57c"],["E:/qinhao/hexo/public/page/13/index.html","424d3742340f006e8872e0ff0d27fac9"],["E:/qinhao/hexo/public/page/2/index.html","2a215f162b67aadf215925fff38dbf80"],["E:/qinhao/hexo/public/page/3/index.html","5f02c0c7206c2313cdf897f749ca997f"],["E:/qinhao/hexo/public/page/4/index.html","a2c346440bf002b8d14039934feeb1de"],["E:/qinhao/hexo/public/page/5/index.html","cf1ddd84191d86da37996d02ac99f9c3"],["E:/qinhao/hexo/public/page/6/index.html","5d7115961ae7a93ef2112ffa93e0f021"],["E:/qinhao/hexo/public/page/7/index.html","5fa7be13aa0bf387cc9d5f61256577c2"],["E:/qinhao/hexo/public/page/8/index.html","578fad301405b42b459487a089f78ae0"],["E:/qinhao/hexo/public/page/9/index.html","43580ad8afe14d4aa27c42350aa5981c"],["E:/qinhao/hexo/public/sw-register.js","47dd06c1d8b46c208be1789877dafae8"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","099d49c153c0da5dd9c98000047b81a4"],["E:/qinhao/hexo/public/utils/css/all.min.css","84d8ad2b4fcdc0f0c58247e778133b3a"],["E:/qinhao/hexo/public/utils/css/font-awesome-animation.min.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/qinhao/hexo/public/utils/css/solarized-light.min.css","769d25bae36c449b6612b98809d01041"],["E:/qinhao/hexo/public/utils/css/waves.min.css","ad8ce7fc1d688135eedeedee534aa9a2"],["E:/qinhao/hexo/public/utils/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/js/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["E:/qinhao/hexo/public/utils/js/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["E:/qinhao/hexo/public/utils/js/artitalk.js","d94fe7817fad4ecae5681cbde76a4acc"],["E:/qinhao/hexo/public/utils/js/bbtalk.min.js","a1ab1de2ae261228a7532e855f6980a5"],["E:/qinhao/hexo/public/utils/js/clipboard.min.js","27784b7376dd992368c71b6c5559f358"],["E:/qinhao/hexo/public/utils/js/comment_typing.js","ab7b34f055a2bf8e036daec67e968d1a"],["E:/qinhao/hexo/public/utils/js/flying-pages.min.js","c20e3f49966e71df80be9a6af59449dd"],["E:/qinhao/hexo/public/utils/js/highlight.min.js","a370252e88fa5c6611ab5005c7b87b96"],["E:/qinhao/hexo/public/utils/js/instant_page.js","1a3be845085b8d94a2997a3a472feb42"],["E:/qinhao/hexo/public/utils/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["E:/qinhao/hexo/public/utils/js/jquery.min.js","dc5e7f18c8d36ac1d3d4753a87c98d0a"],["E:/qinhao/hexo/public/utils/js/lazyload.min.js","0fcd5822c9e8af807a14d3985faf91c8"],["E:/qinhao/hexo/public/utils/js/scrollreveal.min.js","f7d329c68b849d6685a7462c22f47ea2"],["E:/qinhao/hexo/public/utils/js/waves.min.js","9a5b3dfca09d9e3005dc697162d4bc65"],["E:/qinhao/hexo/public/utils/ttf/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["E:/qinhao/hexo/public/utils/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.ttf","ede4ff54ccb46fe67622dbcffeb90fdf"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.woff","07fa0741d97758debce36520d5a12d5b"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.ttf","04842b94683f70c18aeb76b5a27cd221"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.woff","f48a8829bec665258b9c85b23ecbf3c0"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.ttf","5f2f8485a00387b7a1d89e793555991f"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.woff","42d66a3eb75eac2b4fc0ee58e9846497"]];
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







