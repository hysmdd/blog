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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/01/01/css_clear/index.html","c2c242d3e9aefa46a974f42e431e9a4d"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","f00ac70d80ae8a3a0b7738421d3fc5d3"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","20068438c6ee21f16b0009317e5ff42d"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","bb00a19314310f19930e8d0bd8a26cff"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","ba127bde77423847ea49d861ec7a13e7"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","e34f944ae9eb77a5236fc42c7e1ab383"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","8d886467297de5c96ac735a4f8e709ca"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","5c105fc3a1f22bad208f8213e581b1fe"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","eaeae45f18d7eefd2c8515d542102337"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","628383af2d3e0e8ebe55cbc6015866ee"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","dcede85ca8e85907839f313a9dbbebf1"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","e866ec3f95ab4610b64ef059e63aefe0"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","4326c62aa4ec268606e69e704c357ae6"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","0fdd9bc795ee26b49003485c0ff00cdc"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","755290054b7cbc9bb44488697d5fd3f0"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","7e71394afbd5e6e71731dfcb86435072"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","7ba0e29260dc502c918a4a5f4323dcd4"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","596196a2861e1e230d61532d3cd8bbec"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","dc181fb2e4c38c49e3103220ea8a635a"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","abf56c0a6a4042b7db7a49dcf739a238"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","80829e7aad72c07583cfad38c43fb863"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","bd67a70b58885be23c286705bc70d149"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","9d2cdeb07f743179f8c64ccd53b71806"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","ecd3228efcfad0d9eeee76b70980c49d"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","6230ede42496e80e7312391be5824854"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","6bcbb02991db39f7895a6417dc55d97d"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","64f29d8fa397eaa79b56fb85f07c43c0"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","69ef35e7720e20f914959ac0a9de3457"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","8eb1ada79c7695b7ac053609113829e6"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","7d74d7ffda4af78a2d3e6346ca59c027"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","1a4a59c18e5f7e93e2e54eaa475f8025"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","a2817ab587aa88462b5c84e61078ae1a"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","ee0f0627acef2c5094b1ee0046be628d"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","14337e8fa933f24cd1b79d79bd3f828f"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","4419aed2673eaa9514abb66bcd94e13c"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","8666e3a7029d82d5c55ac613a9efa83f"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","1db70523b85a27582f3b0df769215e3e"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","6f9c5c7b8c86bdc8c616527fce3a4d69"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","c4f87053574bf93048875867fe100df8"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","da639b7a02b03f52d41628a4e39f8978"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","a0c2cf8261c00f9add97e87c49716a6a"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","5d1488c4fe9c489442e9a2f0e80d70e1"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","a7a1fdcd0129258c9934ff23563b7ff3"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","4143fee15e7426c1cb59f1e687ed1e80"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","ac7a59c2629afb12cfb7ff3470dfcd83"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","83d9524339a947db9c8eb3304bf1ebc2"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","31aeaa3ad1d91f7037361a8aa7655c4d"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","22567542be8ac09c6dac3f04ff7626f7"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","2b84433e26accba86ad069032db66853"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","69088f17b1e793a49d48dcec6f813fb3"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","862b5ef858ae99dff584c73ba06db7b8"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","45999c69963744055981aa2e2a9cc92f"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","a237b5e37c94b53e85b5621df29a72f4"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","0881e145c1d66fa8f1322ef0dcd63a69"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","3843d0f8dde4298e65e2867466f7ee30"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","57c65d3f4aebad82fc38097051d4ca6e"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","33ead5435d93d14f69c308fb1258b4c2"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","991d148832a286d5a2f1f7e956271e64"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","a9300ce0da3b462e2cae73f4f93602c5"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","046561429f8464e3833509f08a2e1471"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","f66535722931c744cc894ce12554d877"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","b88946037b44b9d20474cc9c5fcb9eba"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","6f49c89b390f9b43a33717c9b9c8fd5a"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","ad33604c555e294c39137f33adf32636"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","29ce236f521e545d5d915bed7926d255"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","e8fdcfbc0ac33d64bfc0c17e642263e5"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","52a213cda53a9cd5f2e9365ab7f9c393"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","b742c40b12233eae26af8e007f2b0ccc"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","3cfe656035ca61d8640896454495cc75"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","d3ca77ec87a9ac261ef315a79205b2b2"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","d6e78f00db88c2d0ad48765dcf44e50b"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","e37542f87043b34857bebfc2db9841d1"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","061856cb79ef443d560ef462b7671d1f"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","067e90244b3527a7fdb1fe34ae4225e4"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","65fca52033501348d53771c881803bf3"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","f3cb8944cd5e0a78130ddc265747ba9a"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","c6ca9f0c97441d191e8c2c9400abcaa7"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","72741230caa3ce4f3a09347615b02026"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","99514af9c80fae2b31fc4d9ba2359802"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","c71d44efc89d24fe908bffcff5351995"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","c0a57781250013d77bd3d52fd9a48240"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","c64bfe619335f06693228292da22a25b"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","7b3c573ccf9962d12fc64fdacdfa314d"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","767595602a7233aca7d5e1cc17815dc1"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","685f1c52813787ca9a5d415d4290e6cb"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","991ef6901f464b48f9f064fbf9deaf44"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","f2aeb714704d4aa0bc99ba57c851ceaa"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","622d37aef8a8992cad38f170b0ddb531"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","708d1eee5c03f2cd7b034de1c0f4219b"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","8b050ffb5cb1a2f3617f7a06a3e75e1c"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","5fea69a3080c05015a1e8a01153242c0"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","3bb1edf10f7acc489817d1e4334f44cd"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","add9704b961e21ea3493dce440cf4a36"],["E:/qinhao/hexo/public/2021/07/21/login_demo/index.html","145911da19cfb5a57af4b78b9b4a2b3a"],["E:/qinhao/hexo/public/2021/08/01/dataStructure-1/index.html","a3fa39ef4d72503db7c51b188397393d"],["E:/qinhao/hexo/public/2021/08/02/dataStructure-2/index.html","7135e90f45f725bf33a7d46d6e445c30"],["E:/qinhao/hexo/public/2021/09/01/stock_1/index.html","b051518b955013943f7bd29824a54805"],["E:/qinhao/hexo/public/2021/09/02/stock_2/index.html","c456392181e949ff2c7fe61e1f2b852c"],["E:/qinhao/hexo/public/2021/09/03/stock_3/index.html","44a186a0e35c208bb272b468821ce2eb"],["E:/qinhao/hexo/public/2021/09/04/stock_4/index.html","051e0af797ee4db09d3284dd2359e861"],["E:/qinhao/hexo/public/2021/09/05/stock_5/index.html","8c2e6a9a1d15835e56a466585f96ab7c"],["E:/qinhao/hexo/public/2021/09/06/stock_6/index.html","bc1f0d0c620de82f0a1a953749c61034"],["E:/qinhao/hexo/public/2021/09/07/stock_7/index.html","51d6ef222ec69fd6ad227efc72ccfc72"],["E:/qinhao/hexo/public/2021/09/08/stock_8/index.html","a5652a2326fb92a52839b692314c7168"],["E:/qinhao/hexo/public/2021/09/09/stock_9/index.html","4d8002cba1976ab13233b0a7cf1e1c3c"],["E:/qinhao/hexo/public/2021/09/10/stock_10/index.html","e7719ff22b0cbebded439893735d7015"],["E:/qinhao/hexo/public/2021/09/11/stock_11/index.html","e84f77d80e254f0e438ead397dc1aefc"],["E:/qinhao/hexo/public/2021/09/12/stock_12/index.html","ffeb9fe50bd1f9869e5aca48ef6ec62c"],["E:/qinhao/hexo/public/2021/09/13/stock_13/index.html","fa92097795926b3907b647f4cab93334"],["E:/qinhao/hexo/public/2021/09/14/stock_14/index.html","6a461cb42cfb8df0f3b3d5f47d60d83e"],["E:/qinhao/hexo/public/2021/09/15/stock_15/index.html","fbc3f7a0e92e0b02e1c9cc82db5d9a41"],["E:/qinhao/hexo/public/2021/10/01/system1/index.html","f35d42c79a7bb64f1592ed4bcb249fab"],["E:/qinhao/hexo/public/2021/10/02/system2/index.html","1f91c36f2497a15fe7173214c26ba69c"],["E:/qinhao/hexo/public/2021/10/03/system3/index.html","01ba500dfc86efe41866baf41c6f009e"],["E:/qinhao/hexo/public/2021/10/04/system4/index.html","9a7ba4708a32359bb1ef8fc2023baa3b"],["E:/qinhao/hexo/public/2021/10/05/system5/index.html","8f8a4a2b842f988e45e316ddd3ef2af4"],["E:/qinhao/hexo/public/2021/10/06/system6/index.html","2c420dfbe442a44d3774b926ed728993"],["E:/qinhao/hexo/public/2021/10/07/system7/index.html","d818bae5c88590079330f1cbbc8c91e1"],["E:/qinhao/hexo/public/2021/10/08/system8/index.html","cf46d94e5c79100855327d709df7fc8f"],["E:/qinhao/hexo/public/2021/10/09/system9/index.html","3c8897db099b1d75fbe6871d257f7698"],["E:/qinhao/hexo/public/2021/10/10/system10/index.html","f2c79449637882cbac89566cfc8febe9"],["E:/qinhao/hexo/public/ByteDanceVerify.html","f0b54aac7f473c10a0c2f445d430a65e"],["E:/qinhao/hexo/public/about/index.html","d5bbe11aa539a8c885877e1038660b01"],["E:/qinhao/hexo/public/archives/2020/01/index.html","170995565ded3ebd97d649b99c474ad8"],["E:/qinhao/hexo/public/archives/2020/02/index.html","48c67a7e1b477a5aca963117e34c5a3f"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","e8ee9be3847b1c9a34221bc689695475"],["E:/qinhao/hexo/public/archives/2020/03/index.html","be46a3c9c3593e12a67fa6fd5098c795"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","7ead650bca8ecc333afba877dec1fcf0"],["E:/qinhao/hexo/public/archives/2020/04/index.html","1dc8eb4cc7c4caa804fa8c37225e4def"],["E:/qinhao/hexo/public/archives/2020/05/index.html","6e4a927ea6b19b73f49a31bade15f962"],["E:/qinhao/hexo/public/archives/2020/06/index.html","940640bc64c3feb81a6c08cc377510e0"],["E:/qinhao/hexo/public/archives/2020/07/index.html","d4dccc82e88566400cb7e68edf0b52b5"],["E:/qinhao/hexo/public/archives/2020/08/index.html","4e8950e733e75f7bcc5440e5e5674598"],["E:/qinhao/hexo/public/archives/2020/10/index.html","52e11fde89fcb5ddad46d67cde371a2d"],["E:/qinhao/hexo/public/archives/2020/11/index.html","e708d711e4b58f1fbf2c59e80548f3e6"],["E:/qinhao/hexo/public/archives/2020/index.html","8976919df3d2d021855b8e385708c748"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","ef8ca8986c3e46deb2f049c187cc984f"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","42edaf2d54a58e5ac73cdccf48d90649"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","ce3adfa691e9fa833486de512e580f18"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","28dbc8d2bba7fffc7af187be44a37080"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","8f34ae1ad5ed39819b2dabfbaec570cc"],["E:/qinhao/hexo/public/archives/2021/03/index.html","9f3e1dd20226aa5cb9ebc1e11e90fbc2"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","2d5600a124060323c2c29748f402f340"],["E:/qinhao/hexo/public/archives/2021/04/index.html","a0d9ee021657d64386191842883cfc34"],["E:/qinhao/hexo/public/archives/2021/05/index.html","3c9017ee11d6f388def4f5269a444ed6"],["E:/qinhao/hexo/public/archives/2021/06/index.html","63c2d3f03f7d03556d74ceaf5ca24d6e"],["E:/qinhao/hexo/public/archives/2021/07/index.html","fde64a70bebdd5e92ce322f4f94a2af2"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","d7e90ebcbfa11c4ec2e878e087bedfc6"],["E:/qinhao/hexo/public/archives/2021/08/index.html","232d43559bed76c62b08c7dfdad646ed"],["E:/qinhao/hexo/public/archives/2021/09/index.html","902dca33a0f237c4af0c81ad21393f89"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","b227faa630e53e86dfdef24ace64448f"],["E:/qinhao/hexo/public/archives/2021/10/index.html","60bcfdce1389b4cffa31ab2e90b73e96"],["E:/qinhao/hexo/public/archives/2021/index.html","c37af53eb5d108258a741b306243f719"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","47a138c31bd8ed29c3987633637ac496"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","224ef2dd5f7d2662887949da409a2604"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","3a519070945af528728c2b791697cf94"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","4270f67af2a11b9b4fe9e1d5f5cd1307"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","6e6f06a033cb2c92dc6a5aa2b1de7f6b"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","e6906d5008c6eebecf3b67b8fd57b09a"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","37fa6de7e707b4673cc8af49584ed440"],["E:/qinhao/hexo/public/archives/index.html","967353bfff4e8cf75066096cf51fdfd8"],["E:/qinhao/hexo/public/archives/page/10/index.html","47704a8ddf9b4f51935828f67110d166"],["E:/qinhao/hexo/public/archives/page/11/index.html","47704a8ddf9b4f51935828f67110d166"],["E:/qinhao/hexo/public/archives/page/12/index.html","47704a8ddf9b4f51935828f67110d166"],["E:/qinhao/hexo/public/archives/page/13/index.html","47704a8ddf9b4f51935828f67110d166"],["E:/qinhao/hexo/public/archives/page/2/index.html","967353bfff4e8cf75066096cf51fdfd8"],["E:/qinhao/hexo/public/archives/page/3/index.html","967353bfff4e8cf75066096cf51fdfd8"],["E:/qinhao/hexo/public/archives/page/4/index.html","967353bfff4e8cf75066096cf51fdfd8"],["E:/qinhao/hexo/public/archives/page/5/index.html","604d93417a1577f1f6b19f86e8417fb9"],["E:/qinhao/hexo/public/archives/page/6/index.html","604d93417a1577f1f6b19f86e8417fb9"],["E:/qinhao/hexo/public/archives/page/7/index.html","604d93417a1577f1f6b19f86e8417fb9"],["E:/qinhao/hexo/public/archives/page/8/index.html","604d93417a1577f1f6b19f86e8417fb9"],["E:/qinhao/hexo/public/archives/page/9/index.html","604d93417a1577f1f6b19f86e8417fb9"],["E:/qinhao/hexo/public/artitalk/index.html","6cc8f634d19ab02a956c3f6cc11d6520"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","49a1efc02c482141756f6f389aa43a70"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","b680e6e12df01af97dea23f508b8a685"],["E:/qinhao/hexo/public/categories/Java/index.html","a9994f4ab26997f41fbaf131154e3a00"],["E:/qinhao/hexo/public/categories/Linux/index.html","eb621bf13b1af8692df80541d2ac215c"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","1916cb3c0ddadd8b86f928778c2b8c27"],["E:/qinhao/hexo/public/categories/Python/index.html","9fa45d9d7f6f74f7a1de81c38d615c3e"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","4462cb90244f874ccff8eb4c08dd360d"],["E:/qinhao/hexo/public/categories/交换机/index.html","abc7314da1bcb74ecf2849f77cd310bb"],["E:/qinhao/hexo/public/categories/前端学习/index.html","71392c2a9852db41eb3f68e9fe47cf97"],["E:/qinhao/hexo/public/categories/华为认证/index.html","fff71a79491eb240f41bd73f7f989908"],["E:/qinhao/hexo/public/categories/小技巧/index.html","537d32f96f68979b47018cc1c060344b"],["E:/qinhao/hexo/public/categories/操作系统/index.html","5558024c1f47be0d9a7898be05f5c1b0"],["E:/qinhao/hexo/public/categories/数据库/index.html","b3b2d73a216e519e916ae46f8095665d"],["E:/qinhao/hexo/public/categories/数据结构/index.html","50fb081025fe644131cba0ba8c6ea366"],["E:/qinhao/hexo/public/categories/服务器/index.html","5b03b1d4e89e6783f5296d5be4a3a7a7"],["E:/qinhao/hexo/public/categories/算法基础/index.html","7779e805d3a472915f720abf78ebd171"],["E:/qinhao/hexo/public/categories/网络安全/index.html","df34ccb8bea0a0a8c0f2e610ce032303"],["E:/qinhao/hexo/public/categories/股票知识/index.html","d3edd049d02727534d677ce34371b753"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","ccd6a9b38e135350096b66ffef499a09"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","807938be3f70be69a0211fa7bb9f1f9d"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","f5bb70408e8c02fb34d60bdaa1bc5872"],["E:/qinhao/hexo/public/categories/软件破解/index.html","03f65c20d500cd69e9a009f4a54b19e4"],["E:/qinhao/hexo/public/categories/通信技术/index.html","4d46b710be4274ce4dc8df50649c6616"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","574b95a3724433ea9b3c5e976b542653"],["E:/qinhao/hexo/public/category/index.html","eb6f79f813199ec84815562cc0d81b14"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","36488b9ba6c7b685a641aac8b607a82c"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","f4097046d4d1456978193b1133c2d8cd"],["E:/qinhao/hexo/public/index.html","5cb93a44963d0102e4acba948228aade"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/mylist/index.html","1377055d2ae49a3af6bc2bcecba22108"],["E:/qinhao/hexo/public/page/10/index.html","c8dbe3ee3a056b40d13e076e4f766d61"],["E:/qinhao/hexo/public/page/11/index.html","d74ad379b739fed61182304154406896"],["E:/qinhao/hexo/public/page/12/index.html","56b1f759ab9548c7659f99b8c41c2679"],["E:/qinhao/hexo/public/page/13/index.html","b8801e7f5071e6d98af0284367e600da"],["E:/qinhao/hexo/public/page/2/index.html","9979ec99439b01f11a275c9e33ee8af8"],["E:/qinhao/hexo/public/page/3/index.html","8c16c77c6c98dfc1813cc074c5385639"],["E:/qinhao/hexo/public/page/4/index.html","b566cf49782945129b43012b27e5d3ef"],["E:/qinhao/hexo/public/page/5/index.html","65a6fc2ac25f6783264b1e609c4f7d34"],["E:/qinhao/hexo/public/page/6/index.html","25a4bb7cf7cb1b482ef2262cb4d54fc1"],["E:/qinhao/hexo/public/page/7/index.html","c46ff013b5f47004c91bcdacd4557d37"],["E:/qinhao/hexo/public/page/8/index.html","969d6e7eec78745936e4b9c40e5e329b"],["E:/qinhao/hexo/public/page/9/index.html","8ac88fb2e660a8131443d062db5387a1"],["E:/qinhao/hexo/public/sw-register.js","c32386d051752fa62d53e0ba7cc3ac20"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","584cd759e4707e77fab457b18d6ba811"]];
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







