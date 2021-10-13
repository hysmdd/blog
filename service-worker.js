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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/01/01/css_clear/index.html","c87bc1360662c22bcdff94edaee64ecd"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","537f21cb3ee7b314ab7570e0e530bf57"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","d9547723febcda03ab9fa141164fec3a"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","fdaf1bc0bf90502dc2501527cd1767a5"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","5f015b353893b6eae13316ac909c01a9"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","04fc79c114d8971a796f1e730a552ca5"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","b1965ae058146a42a3b51546a14e2a3e"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","ed11490189d4e0f6a779f3787cf9e6e0"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","e68c36f2d65be3166a814f221b0e759e"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","7cd806766d016dea4586acccb1e253dd"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","7ebc0e67230048ceac4ccbf0599a951a"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","9a387baf29bf2a9aea94a13f684e1520"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","3e1f3a81f4bf1a9b40e2b4a7b88e401f"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","3a3980bd8321a2c6b44cabe09728d90e"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","0f1310d5ad95393ff37a7add4b28ec7d"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","553e495d809ccc1d3c09e8c23b45a411"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","6177de08301c6791c746315d3f882b88"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","74f8017c73b62423c0e4c5ee820ef908"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","4ef9272afe20565b78ecce6aeda75922"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","90c68d3e1ef9430a2a964ec39e6858aa"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","a83b912abffbd26f36b6ef5f98d03fbb"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","9207f1f5bcf00569d06eb90ff6dc782f"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","864b5885cd41a92762780b1fa33c5401"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","2697aa448eb7f7f8f356cd62b4f1f13a"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","3c77ba5cb535a1dd4ce7dad787bcd4cb"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","d834ee82ed97f0ab5c0e4a78fe073119"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","a77cc65fa0fd7bcb46abeb1a2972bddc"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","35eb5f4d1a2f0471ce23569085967dde"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","64ae9d666aae1768a21b2ef81e8fe0af"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","6092e85954faa9bb29246e07227cf791"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","c90afb6c65d7283e0542a41e1986b231"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","b7978c17c408d5e22f97b4ea4de7df5e"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","fde02657f567182ba7ee6a64fb7951dd"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","499983033975c0ff9409f777c9e53225"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","3409504cdc4405c7d5d973230b7c4f86"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","05a0cc9d7b3eb162267258705b43a7f3"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","b403c4ac842666bbe5850157a5a6376a"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","c7aa297fa1664bb534a5ba4e663c495d"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","e5a823189e8d5de503df8ff6b8981a7e"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","3c495decfcd6c7999ea2965d0c74886e"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","d008682e9033f13ad6711884ef937d83"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","e7e4fc6dab0e3150a6c65ef1a02b0772"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","416f2d17432d37a4f3dc1cc0d93ba66f"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","76998099920e7db600139d7253e92418"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","19d1ace7e0bb2527fc0136623a4fcdeb"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","752eb167d40bc82b81a1f74540143bf2"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","733cd9539a502614980a2bde5abb5dfd"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","3aac7ec81f9ef0136e039ac71e0f513e"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","c4321649e3702d7a05c4e730e7996304"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","c45aed3200ce2bcb1428c4f2865fb668"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","f382a26003fa00c19a014bc224462165"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","cc37920f13077baf8e9ae029b6b828da"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","e151ad42e0fd86c615e81ebb0956584f"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","eab5f1b6d3224c2ccad038e97a6a7a27"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","ea5d5495f6a2e680d92a62775c0c37fa"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","58a7f76eaeeba71e694083827747ecb1"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","5effffaaf35839e457612793e2543548"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","c5b4c7c1ca81d76b5c6385bc267d83ec"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","6d8e9d17e483869c2a95c5dccdb55466"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","5260b4261bb9f99ccf1df5e3fdb3a8cc"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","577da16610bac6025f2d0441b4dc7d40"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","2c6b489e5fbcb6e3501f86767caded70"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","b7a4ded7289f2125ad5b7bda0181db56"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","5e120c13a5907a8cce1a6580e1aff1d9"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","66d44dd4a9d32a696e3f16be5436def8"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","ca0994db3cae67e9409f087b61d90e6c"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","c4e2ef4f6f0b246af4d489177f267b1f"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","f4ceaa821f486cad75d13feb22ea1925"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","832d7e2b4c7e8e4d3ff96b379796ebd6"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","69fbf280b0c5d4d92c3346bcabec5b11"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","3af0599701078bbf2b18db8fe4759ab8"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","5d8d61edd968ae4d71c22a9826ba9704"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","9fe08e61a121bea58a032294ce16db1e"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","f3361c7e174af28fa06123a0482ff9f7"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","03ded214ec6f54562f819d348b81da86"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","d46c082e2bd6d6cff7ebbf9b576a7124"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","1c1ad9b892496736bbddf0ae59bfb812"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","46f69565f1c7f0a798fddd33407ddd45"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","a69b2b86a878671a040cfd0080e89431"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","7f0a46f45a33e15511b6425dfe79b5d9"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","c6215cd3b072b9cdea541d676da8ffaf"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","52dac664b80ef8547048fbfc250c7b54"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","df44bf66bb8dcebc23e1f5e6fa7637ec"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","132a9464d66891c51f97bb59561b0ab1"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","ecb95e5e4b04bd25752dda16495a4831"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","018b5fe81bb94704b2313890599a15cb"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","549103bc34cb7ac6456f21f2d4255b4b"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","1baa5fdba76539e119cecfd4b03b61b7"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","c8c764083881c505e7b6605ee21dcfb8"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","1f6eb54ea268d9f5a23d88f7e59b8316"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","fae5b39230f9c3cd7ca17824dc8e775b"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","8bb4acda21a9606c16722219a1b09b70"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","331293144317d6151c87cc7e87f4099f"],["E:/qinhao/hexo/public/2021/07/21/login_demo/index.html","61dd2a232bc8c6c6ea6f89770a314b74"],["E:/qinhao/hexo/public/2021/08/01/dataStructure-1/index.html","159b4b4a77c095123d6e3fbac1ac0ee1"],["E:/qinhao/hexo/public/2021/08/02/dataStructure-2/index.html","16583ee6659014cc591540e046082cd0"],["E:/qinhao/hexo/public/2021/09/01/stock_1/index.html","fe4038b450c7b71d90b18a7e421b6694"],["E:/qinhao/hexo/public/2021/09/02/stock_2/index.html","0a75d530643c358a11c565762fda9431"],["E:/qinhao/hexo/public/2021/09/03/stock_3/index.html","58441011e7e154be833d0613dfc69cf3"],["E:/qinhao/hexo/public/2021/09/04/stock_4/index.html","db2648e22456503ed6eba8ca3df0cb00"],["E:/qinhao/hexo/public/2021/09/05/stock_5/index.html","48585ed0e7a38f5082b3bec2f7059c56"],["E:/qinhao/hexo/public/2021/09/06/stock_6/index.html","06059ceb1ac40e7c3a9a8a9ec50ec08c"],["E:/qinhao/hexo/public/2021/09/07/stock_7/index.html","b2fb94e5bc3a8a7ac554367b5b374252"],["E:/qinhao/hexo/public/2021/09/08/stock_8/index.html","f95f52f3a73492b6c6b09cfbaccbeedc"],["E:/qinhao/hexo/public/2021/09/09/stock_9/index.html","fa5097b21c1f6a6a0fcf5797e4f3c74b"],["E:/qinhao/hexo/public/2021/09/10/stock_10/index.html","eec3aa1c6499564273ebee122baadd84"],["E:/qinhao/hexo/public/2021/09/11/stock_11/index.html","7641551b6f232bc56fdf45e008f022bc"],["E:/qinhao/hexo/public/2021/09/12/stock_12/index.html","e0befa88d597f8f11a51131d7d20b934"],["E:/qinhao/hexo/public/2021/09/13/stock_13/index.html","f0145f9aa1232a99aead7a6c7f271c31"],["E:/qinhao/hexo/public/2021/09/14/stock_14/index.html","4c9b72d7e6c25113b9918be9feb5c61e"],["E:/qinhao/hexo/public/2021/09/15/stock_15/index.html","8dffd43db75b55fff2355b48a6105292"],["E:/qinhao/hexo/public/2021/10/01/system1/index.html","994423d122aa2d95bc6ead9709fd36be"],["E:/qinhao/hexo/public/2021/10/02/system2/index.html","8d27a8d467e51edfd3f3a28ff391f4da"],["E:/qinhao/hexo/public/2021/10/03/system3/index.html","7157131036d2c1fecbef3a0a5f4d536d"],["E:/qinhao/hexo/public/2021/10/04/system4/index.html","ad764974bd9e7abe1fdde54a9751fe0b"],["E:/qinhao/hexo/public/2021/10/05/system5/index.html","8715358c3b80f7fa4d8dfc0f65cef788"],["E:/qinhao/hexo/public/2021/10/06/system6/index.html","396f32f10873fa584468f9c96393235c"],["E:/qinhao/hexo/public/2021/10/07/system7/index.html","4dfe810b0bf3b033242c7be8921a49c3"],["E:/qinhao/hexo/public/ByteDanceVerify.html","35ec79829e266faa41c0e90b4bc4abb4"],["E:/qinhao/hexo/public/about/index.html","165ed5f2942e263805e88eeaacd4b6e9"],["E:/qinhao/hexo/public/archives/2020/01/index.html","388d83a884ea18cb64068d33a40335e8"],["E:/qinhao/hexo/public/archives/2020/02/index.html","62f098f23f36064a476330379152cb75"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","97f8db2894e15281c23407550fd58f05"],["E:/qinhao/hexo/public/archives/2020/03/index.html","23a26dc6109548fd344720e5829ce277"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","b7f551a5dc8fa869374973580c7d8fb7"],["E:/qinhao/hexo/public/archives/2020/04/index.html","f47d6d64ca0a5c79787d5d2f22080373"],["E:/qinhao/hexo/public/archives/2020/05/index.html","a2ae6eeabbef692ca159014044081c63"],["E:/qinhao/hexo/public/archives/2020/06/index.html","9268bd3d6ed1456623fb42c4ed8f8956"],["E:/qinhao/hexo/public/archives/2020/07/index.html","ef1df0b83626ba7352e957e75573210e"],["E:/qinhao/hexo/public/archives/2020/08/index.html","d8f797608161c32ac49ec46631435001"],["E:/qinhao/hexo/public/archives/2020/10/index.html","e8973c41baace3fb2e3b3113994acb0c"],["E:/qinhao/hexo/public/archives/2020/11/index.html","a3fb551aa01652190bf87b59f6f3e752"],["E:/qinhao/hexo/public/archives/2020/index.html","2e629e1d7356405701226a0a9239205d"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","115e844692e8aa7e86cc0fd7b424effa"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","84708eb8ccc843f2ed681d226884436a"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","c0122f567f8cb4aa41d734248f933eb9"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","ed75d0b85cc5fcaba50b109a5d01de4a"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","df74bf44776478eda8f41a65c639c80e"],["E:/qinhao/hexo/public/archives/2021/03/index.html","e1b3d3d31e7b86ddd19bbd6b22aac4b5"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","85974c983fa7766eb16bd02970e7308c"],["E:/qinhao/hexo/public/archives/2021/04/index.html","b3b205dcadace9a9834041a3c5a55072"],["E:/qinhao/hexo/public/archives/2021/05/index.html","33bd465c163eae8ec1ff1210f833e5b2"],["E:/qinhao/hexo/public/archives/2021/06/index.html","200b24f09e10f08f8141268c8a26f50a"],["E:/qinhao/hexo/public/archives/2021/07/index.html","e88ffa32e60fe72d5020044bce00c042"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","cbd2c11f608ba7afc2e14afb60134a61"],["E:/qinhao/hexo/public/archives/2021/08/index.html","32dc71652449897933eeaeb2ac242c46"],["E:/qinhao/hexo/public/archives/2021/09/index.html","aa191a205f20be88df866e684b5cec41"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","d817cb66c90cecbbff02b3cd82f7f8f3"],["E:/qinhao/hexo/public/archives/2021/10/index.html","58f40a0c7f86698fac1147922278bd26"],["E:/qinhao/hexo/public/archives/2021/index.html","cf4102334a77ccc745550b46d0b7bcef"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","5d24eaa342c6614fb8bc702263e0c82c"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","146b669972b10c4ee6faabf27daa78cf"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","61e713a622ae0660b0b9223a39d3b6bc"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","ef335e174bb2367d8b15c9e8afba92c9"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","8668f45ba57fcaa2f5a31483f6690e44"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","d75b1d2d3d5ba71dd54f663f2d5f62c2"],["E:/qinhao/hexo/public/archives/index.html","3a765a6c813a8d0f19194575d43d9d5e"],["E:/qinhao/hexo/public/archives/page/10/index.html","69ef70723e427e718a5f5c8961995424"],["E:/qinhao/hexo/public/archives/page/11/index.html","cb31d208b3092704928e14e328378730"],["E:/qinhao/hexo/public/archives/page/12/index.html","cb31d208b3092704928e14e328378730"],["E:/qinhao/hexo/public/archives/page/2/index.html","3a765a6c813a8d0f19194575d43d9d5e"],["E:/qinhao/hexo/public/archives/page/3/index.html","3a765a6c813a8d0f19194575d43d9d5e"],["E:/qinhao/hexo/public/archives/page/4/index.html","3a765a6c813a8d0f19194575d43d9d5e"],["E:/qinhao/hexo/public/archives/page/5/index.html","3a765a6c813a8d0f19194575d43d9d5e"],["E:/qinhao/hexo/public/archives/page/6/index.html","69ef70723e427e718a5f5c8961995424"],["E:/qinhao/hexo/public/archives/page/7/index.html","69ef70723e427e718a5f5c8961995424"],["E:/qinhao/hexo/public/archives/page/8/index.html","69ef70723e427e718a5f5c8961995424"],["E:/qinhao/hexo/public/archives/page/9/index.html","69ef70723e427e718a5f5c8961995424"],["E:/qinhao/hexo/public/artitalk/index.html","9484842215f47afa9292f4755bacccf9"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","0b9120abf8294ff3fdf2c2b159fe96eb"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","a4276c462270002e89862a43499b9a7b"],["E:/qinhao/hexo/public/categories/Java/index.html","27e9861362a03453257d00ac3863ad70"],["E:/qinhao/hexo/public/categories/Linux/index.html","640c7f6ede5b4809ffa2c6634d6e1f93"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","88e1c3433837e8e307b54d9dae24fa41"],["E:/qinhao/hexo/public/categories/Python/index.html","66695995d34053caba69f51400e7610f"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","bece6d51b3bb6bc14969c63f645247d9"],["E:/qinhao/hexo/public/categories/交换机/index.html","a57b0a130b564ea7957cd9d37b193c68"],["E:/qinhao/hexo/public/categories/前端学习/index.html","e3c2ca9fd3cc4bc48bfe247ec593a05e"],["E:/qinhao/hexo/public/categories/华为认证/index.html","ab37347f603869fa8a7527fb0c5714aa"],["E:/qinhao/hexo/public/categories/小技巧/index.html","5fa48d2cb61338d6dd6f22789dd0d612"],["E:/qinhao/hexo/public/categories/操作系统/index.html","94250543feb2d38130fbe09e34717293"],["E:/qinhao/hexo/public/categories/数据库/index.html","a834b58ca81f96b5a4e3770f60d706d8"],["E:/qinhao/hexo/public/categories/数据结构/index.html","47d22a9f9de1b1cb788550db6311dc2a"],["E:/qinhao/hexo/public/categories/服务器/index.html","335e2e11abad0706b8997135c3e4b4ad"],["E:/qinhao/hexo/public/categories/算法基础/index.html","b8a512d041ff4a872565a8a1ee6d406a"],["E:/qinhao/hexo/public/categories/网络安全/index.html","60ccf2e0d473bbb0d63f8b23e788ec70"],["E:/qinhao/hexo/public/categories/股票知识/index.html","ba0962b3222edbe35d0603538a29a1fb"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","2deb77d074c47b003251b7c103c67cd1"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","ee708db67b73ad2060fad63ebe993172"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","559faeb015856c9fced5cb107bfaf3d9"],["E:/qinhao/hexo/public/categories/软件破解/index.html","ca0cfded5ab6265340904571bcac42ac"],["E:/qinhao/hexo/public/categories/通信技术/index.html","95d826abd68426473cd437d111addc85"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","3eb29b6c7510af3b071dc460c31b54e9"],["E:/qinhao/hexo/public/category/index.html","26a880a658416b03ae950bbdc787c2b7"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","36488b9ba6c7b685a641aac8b607a82c"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","93ddea263f328374fadae0249a6c4c52"],["E:/qinhao/hexo/public/index.html","0d37db9b5ff01e0f138d4e0cf8de3dac"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/mylist/index.html","ce3c33a390c11e680426f6d88ee0a574"],["E:/qinhao/hexo/public/page/10/index.html","0912198ff6ac8fd5033c651a4d55cd48"],["E:/qinhao/hexo/public/page/11/index.html","3278305c45fe569d7026abacf7499724"],["E:/qinhao/hexo/public/page/12/index.html","e5ea17b692d047143e3c7a7e9387b090"],["E:/qinhao/hexo/public/page/2/index.html","34b12f4a68869becead615cae9f65916"],["E:/qinhao/hexo/public/page/3/index.html","c944b19a73352f452a1f7194f6455471"],["E:/qinhao/hexo/public/page/4/index.html","14cfe7c63f8b3fb46db42baad22f86be"],["E:/qinhao/hexo/public/page/5/index.html","fcd1993365a9f7588dd2bd364369bac2"],["E:/qinhao/hexo/public/page/6/index.html","06b858128eeba4577bfe7d22b0ee9e5f"],["E:/qinhao/hexo/public/page/7/index.html","6211d952ebce846ef0ec2a87ded0cc09"],["E:/qinhao/hexo/public/page/8/index.html","d80673cff81016368b072c7c6e9a5b45"],["E:/qinhao/hexo/public/page/9/index.html","31af4c36417f06187486d1b9c1b014c7"],["E:/qinhao/hexo/public/sw-register.js","7de1537a72a84c132623bef2e839c711"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","1c35f686764931aed60d0151985a833d"]];
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







