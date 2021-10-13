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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/01/01/css_clear/index.html","de32a7ce25cb905370cf99c5d1ff84f9"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","e9138a45bf77d052cac867fe45955f4d"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","2a52ff266536cf3639a18c1aeebc7486"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","eae13cc9ae254592230a2d35c4550019"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","e4bc0068f5e36d0368d93bb2d0addace"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","eccca0fdc23367e3b0e4c3e67b18c154"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","0f0f69cde1e6692e628e6f7a19422e64"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","984f2b6365749a698922ec734efa3e77"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","ff8baff424a02dca8dce95e02fcbf8c1"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","e1877d5c64bee3ce614d1b5fa3c2e7de"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","266617b4fec63f36af82e64bbb8eae4a"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","761114097b57eca3c5393bb71a84a0a2"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","35c4b3c9c7fa28352339f914714452f8"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","1998c502442658bba1b06b3b8a01c7dc"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","11769b363d96878d7feba93d5d2797cc"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","bbeeb6d817f6d6a576149d604d4b88fa"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","77e108b3b74b710e60746718920e7b5f"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","27b5b0d3b0072e7a115c1542bf638789"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","618bc1d5fb7a9cd9d13e9302a28a92de"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","2811549cb746fc9cf2495f699275ddb3"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","6bd961a0203057c3fe7e4cc2d8c12ba3"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","32ec6310bcbf5eced723e6f18d2ecb4c"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","57cfda8970b6a8930d4a6e287c5da379"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","4584c4e3030bc3f757c6bba43f2ab909"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","f5d3161604ab0513546a618002f72023"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","ab0fd81bf334a6f1a026b3eeb88299e1"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","a04b29eea354af43dc243761e6303251"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","0487bc722420ae4e74bbe26547451d56"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","a5bbadaede4dfb9a89c5439add99dd23"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","e5b26db58c71707eeabe38017854b244"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","913658a5c165e4e56ff566da16260cdd"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","854a6717f529ea6cd2cab6f4c1308d46"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","f155f8572a50c3e4a421c0beaf8201bd"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","4f5b0a5d1e0fa662b861f573cd18901e"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","f24a3296c0f214c5f3c8324e0ee44a7d"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","566a83510781df61ab1b67ad7e665d69"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","d4b5e2f627431578d7ad1ffc7225b6e2"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","806acd1b05c07bc40c3aec5b84a7fe90"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","7a2dd3c6f4a23ea54edb128714ac9779"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","6d9778c66b9b35cc55426170f59be942"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","6a2dede07e598d6a61a14f7b40809b92"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","e473509651bfab994018cc4010a02e89"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","b8b79cda38b0074b17f8bedc7b22a3c1"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","efbcf0d4229e8068aafbf626198349a0"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","2182bd942fddacfd5fcad6a71c897642"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","c8af7f4767467f394d72c4644307f1e1"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","12289efe27650b4a5ca5463b65711ae4"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","9e24b6f784c98e2800773614a24557ec"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","e7970223dbea637aff2a8350a7ec40df"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","a1a98c54497162d947e37971545d1619"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","3822e33c1d7e1157bcc19a56650446e4"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","042757e39c7875f0812b9ea6b6700e3f"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","607ecf96127e4c7ee98c6d1ffd6b0ec2"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","f7d3c6302debb6e32fb8f782ed65d35e"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","a186b6922c1c31978016b7956bcb4c84"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","c71c3f24ff79a2b092f9d5d66b9a7996"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","bdc5cdec8e53381e719089bca5488bf4"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","03756e2b7c9cc7b36f172af91a1badbc"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","389c2581fb77ef259f6950214a80263e"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","76dd18c418e70fb18b4d6359ef19ad92"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","5718b830508b345f4b84a5c04fc5786a"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","a56fdd356aaf3d614b4e632c03e48ea4"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","05edb0b7252c9ee2654f21c9592fe021"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","b80310e8eaa35728792c997a8483718b"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","4b811fbbc0049cb7cf7129a02e812eb1"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","8accb12a33a900e13f727cbc231fc824"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","f028b62ab68e6212337932698f90c092"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","ed656d02b73056e0dc4de7ca9c21922e"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","c76305c47ca00a9dab2a2a93bbea2acf"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","81f496bd6d0d01495070fef340b1fef0"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","95872b52f4dae6e93552bee398eedb44"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","040403d484ce8995f13ef674ed723565"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","ec7898aeaddf867b04abedd4ec516de8"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","dffd104df5b5bbffa7972934e23ec3fc"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","c11e1d796a47ecc322c0d57f5ccc4409"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","225688d26b01099b6567e6f7af8f9e33"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","ad43deb431f8703e174992c548cfa4c3"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","07a3c7d4a8a6fb1656ab6ec023d6200d"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","5a4b7623048884322719dd73fa1fdf05"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","62a4ba47d347c891e135fde8f345065d"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","dcca9beb70a5955229e9ad0754fb162b"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","544490cb8d312993bc6ef22329cc0a49"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","3d16624c989fecf64b0f7884fedfcf79"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","c8ffec4768abe31aa3b5f2a2b913f1fc"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","5920b84b61670b3ae27f7298a51c580f"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","227b51bf6489c6de12002860b772de37"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","f467b4775837762634f365dc90880ec2"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","f886c879bce5a5419157127171fc08e4"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","8711e7182ce42ace93b9777edbc6fa13"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","7cef6b92dca641794176ced634b21fca"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","c93e4f8ec643ae2ea9746b67fb817aff"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","6e570825dafde0988a20881edc2badcf"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","8a6faacfa9b9ad13d061bc1767b3b471"],["E:/qinhao/hexo/public/2021/07/21/login_demo/index.html","38cf562fc3d76a8ab86c3c61c971cd70"],["E:/qinhao/hexo/public/2021/08/01/dataStructure-1/index.html","a245be4631f5f85f69a94dea090d7e76"],["E:/qinhao/hexo/public/2021/08/02/dataStructure-2/index.html","866ce4cd5baa2dbadc3cc12a4c773b2e"],["E:/qinhao/hexo/public/2021/09/01/stock_1/index.html","411158967023cfe6d6ebe4f01e122f5f"],["E:/qinhao/hexo/public/2021/09/02/stock_2/index.html","3045f9cc4fd5e4cd2648e31a298761c5"],["E:/qinhao/hexo/public/2021/09/03/stock_3/index.html","0ddb80e1f3c5365c267643a4b0547382"],["E:/qinhao/hexo/public/2021/09/04/stock_4/index.html","ab5392021b5af9f3f2989229a6b6a7de"],["E:/qinhao/hexo/public/2021/09/05/stock_5/index.html","3e3f62aa3ce86dd11dbea1d78872edef"],["E:/qinhao/hexo/public/2021/09/06/stock_6/index.html","acab54e179087172b9103aee21f5f170"],["E:/qinhao/hexo/public/2021/09/07/stock_7/index.html","2df961e6927f62a11bc8037bef461c79"],["E:/qinhao/hexo/public/2021/09/08/stock_8/index.html","ba65a39b3233d99f63f9eed29661ba43"],["E:/qinhao/hexo/public/2021/09/09/stock_9/index.html","e8577d96455bf3001134937f318db1ff"],["E:/qinhao/hexo/public/2021/09/10/stock_10/index.html","60bbd04725d80bbc5f758d2f08711150"],["E:/qinhao/hexo/public/2021/09/11/stock_11/index.html","86f48a19bf2865845528307aa3fd91e4"],["E:/qinhao/hexo/public/2021/09/12/stock_12/index.html","857750a925b3fcb5fd6ed3cbf66deaab"],["E:/qinhao/hexo/public/2021/09/13/stock_13/index.html","87404c3b4f0dfce53858bef5de73dd65"],["E:/qinhao/hexo/public/2021/09/14/stock_14/index.html","fb8cb84348e8b32c50a3d33a51438ce9"],["E:/qinhao/hexo/public/2021/09/15/stock_15/index.html","27ea5df34adf73b7c082f219494a7147"],["E:/qinhao/hexo/public/2021/10/01/system1/index.html","59f018a8d8e56449059161f591694fc4"],["E:/qinhao/hexo/public/2021/10/02/system2/index.html","4a412b23be3c6506e05b61028dd95a3e"],["E:/qinhao/hexo/public/2021/10/03/system3/index.html","93ce53ea154272fd54ad0c2cef443291"],["E:/qinhao/hexo/public/2021/10/04/system4/index.html","7809eb957a4a453513f4017555757367"],["E:/qinhao/hexo/public/2021/10/05/system5/index.html","238dd75c6b93dd7055629f28a0b3285e"],["E:/qinhao/hexo/public/2021/10/06/system6/index.html","95ca16fa8cb43f2a8529636b1918a820"],["E:/qinhao/hexo/public/2021/10/07/system7/index.html","ee074ca333337f74db766152cec95ae3"],["E:/qinhao/hexo/public/2021/10/08/system8/index.html","26778d1e852d97b9df4fd8ae22a4d3c7"],["E:/qinhao/hexo/public/ByteDanceVerify.html","2af43fa18c2b54fa7fc9d2a21fa76992"],["E:/qinhao/hexo/public/about/index.html","6b56ff1042b857eff32953b8a39b1dbf"],["E:/qinhao/hexo/public/archives/2020/01/index.html","6d677cc32141125984edbbcf685b42d6"],["E:/qinhao/hexo/public/archives/2020/02/index.html","f8dc3e27726eb11fa2ec2856fb150d55"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","c720abe6420de8fc2dc73b5480bf2b69"],["E:/qinhao/hexo/public/archives/2020/03/index.html","030e20b7f0356a027c357d3c429abd88"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","773563cecb16e61e8cca5da14670da5a"],["E:/qinhao/hexo/public/archives/2020/04/index.html","d2a7b90ea50d0c39c4bd6e7be5a52902"],["E:/qinhao/hexo/public/archives/2020/05/index.html","3e9d5b4959616606970cce2b166888af"],["E:/qinhao/hexo/public/archives/2020/06/index.html","8024689503df370510b033ac0ea65ee4"],["E:/qinhao/hexo/public/archives/2020/07/index.html","42e532bc656f75388bf50f9d38861976"],["E:/qinhao/hexo/public/archives/2020/08/index.html","79f338b6dafacc916dc17ec1f311279c"],["E:/qinhao/hexo/public/archives/2020/10/index.html","b0aa9baa83f661f3a76b8a4fb4392894"],["E:/qinhao/hexo/public/archives/2020/11/index.html","f1d54ce757b23854afb9ace16d48876b"],["E:/qinhao/hexo/public/archives/2020/index.html","4f80924681055a2bce0b05a66c6c98cd"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","5ddf1f7355469416eac15551f50e9f73"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","546b44a4cd7f362b10d0f5dae7c395bf"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","f5ec680a5090309a59d468f2d2fd6aa1"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","08843b8515dd5ce05096b1326fbac205"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","8be78dc68ba6ca9f77d6e03625e1d9db"],["E:/qinhao/hexo/public/archives/2021/03/index.html","638225eefee2ae5ffd751b0bd1b8736d"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","f3db9fabd13315ce3e5ccb63e67670b4"],["E:/qinhao/hexo/public/archives/2021/04/index.html","94c33e68ffe0ea4b0efbc9826a2b7ac7"],["E:/qinhao/hexo/public/archives/2021/05/index.html","82cb8c96e22341b2f8140d083c4d7bd6"],["E:/qinhao/hexo/public/archives/2021/06/index.html","5f269de74d0c2497d4e74c80d9477f66"],["E:/qinhao/hexo/public/archives/2021/07/index.html","555c57e11fd316e2077126708916a9e5"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","f5616f081d878ce0e7e0696cfc1f577b"],["E:/qinhao/hexo/public/archives/2021/08/index.html","c1c95e2f143184941743276a267c729b"],["E:/qinhao/hexo/public/archives/2021/09/index.html","25f585b8a8660045691c67d5baea4349"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","716611e6b0e94e68ccb3e686a106cce5"],["E:/qinhao/hexo/public/archives/2021/10/index.html","f85febb9df52b579c9ac3f7d1f9d79e1"],["E:/qinhao/hexo/public/archives/2021/index.html","4b7564798f1c4b56c27969315dddfceb"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","fb438e4af2c2bc5ffcc5c909425ae83f"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","96708521259b74f4b9b9fd1f9d8e66d8"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","29e313e1385fc89154c4431fa3affe34"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","ad5318713b66569ef1025c1994928b5d"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","1b14e4dd71005286bdfe7c9bb4f56e47"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","c215c8da5a91d8c9c8283bd48b9cabfd"],["E:/qinhao/hexo/public/archives/index.html","9a205c1100d5a601d83fb85e4efdd06d"],["E:/qinhao/hexo/public/archives/page/10/index.html","49a0914e82d45ef855d4dd8d1ddd71b8"],["E:/qinhao/hexo/public/archives/page/11/index.html","3308007ad4d19a5edea74cd6eed72acc"],["E:/qinhao/hexo/public/archives/page/12/index.html","3308007ad4d19a5edea74cd6eed72acc"],["E:/qinhao/hexo/public/archives/page/2/index.html","9a205c1100d5a601d83fb85e4efdd06d"],["E:/qinhao/hexo/public/archives/page/3/index.html","9a205c1100d5a601d83fb85e4efdd06d"],["E:/qinhao/hexo/public/archives/page/4/index.html","9a205c1100d5a601d83fb85e4efdd06d"],["E:/qinhao/hexo/public/archives/page/5/index.html","49a0914e82d45ef855d4dd8d1ddd71b8"],["E:/qinhao/hexo/public/archives/page/6/index.html","49a0914e82d45ef855d4dd8d1ddd71b8"],["E:/qinhao/hexo/public/archives/page/7/index.html","49a0914e82d45ef855d4dd8d1ddd71b8"],["E:/qinhao/hexo/public/archives/page/8/index.html","49a0914e82d45ef855d4dd8d1ddd71b8"],["E:/qinhao/hexo/public/archives/page/9/index.html","49a0914e82d45ef855d4dd8d1ddd71b8"],["E:/qinhao/hexo/public/artitalk/index.html","930d665e3ddea7f8ec8f844db3745f56"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","e233542badf7abd232516921aeaf11f5"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","c97445e5fc3deb9dbcdfe272a12079e5"],["E:/qinhao/hexo/public/categories/Java/index.html","b1123b67dfb8200aa8a36438bf8553f6"],["E:/qinhao/hexo/public/categories/Linux/index.html","7281f32118abe8701cfa2707818c86f4"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","9500e991222a3bb26ab8dc9bd46861b6"],["E:/qinhao/hexo/public/categories/Python/index.html","e089fccfdb454ecbc1b4780c9c91ca4b"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","db0e312c34d23d667a2e4c4cbfad85c0"],["E:/qinhao/hexo/public/categories/交换机/index.html","84b515001abe509a6f0179c21de5edbb"],["E:/qinhao/hexo/public/categories/前端学习/index.html","986c428c28b9805d1db60780f2914768"],["E:/qinhao/hexo/public/categories/华为认证/index.html","00119d53d87eefd7fe47ebf88194d548"],["E:/qinhao/hexo/public/categories/小技巧/index.html","1d0941d8be7d364dd62635aa2caec2fe"],["E:/qinhao/hexo/public/categories/操作系统/index.html","3b3f3f280c212f7ec5779fb083ac5e04"],["E:/qinhao/hexo/public/categories/数据库/index.html","4e3142f712e2d839b01d53090e34603f"],["E:/qinhao/hexo/public/categories/数据结构/index.html","f285cb45957a0795dbaadd1c5da2dd2b"],["E:/qinhao/hexo/public/categories/服务器/index.html","d67c808d9f5e857aeaddf58089291444"],["E:/qinhao/hexo/public/categories/算法基础/index.html","8ff9c35c870799881873925304626be9"],["E:/qinhao/hexo/public/categories/网络安全/index.html","aa39c84b9274d379d5f032db40c11b85"],["E:/qinhao/hexo/public/categories/股票知识/index.html","47d2c5b596d45cc4e56c92e1b888770e"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","74f3cfa22a0ef5f50f01c9c45811ecb7"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","9164d3edf9b46af224924c8286a3c35a"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","3f7d4d07bfcb432c9130753605c45553"],["E:/qinhao/hexo/public/categories/软件破解/index.html","c15076b74e5a105d235cb18552377595"],["E:/qinhao/hexo/public/categories/通信技术/index.html","7958652ab15660dc19664807d04bc96f"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","fc104618522105ea9b7ab6097c2c9622"],["E:/qinhao/hexo/public/category/index.html","3b4142d288d2c4d8d2941aabdba09f76"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","db2788d117d886186083c79c07acb905"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","db94a9f0bfb29bd0b5073c23c086a90f"],["E:/qinhao/hexo/public/index.html","c12a2a27db9a9c828b11a0840b30f263"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/mylist/index.html","d619706e2a0b595b4dff68d2ff746281"],["E:/qinhao/hexo/public/page/10/index.html","9faff601628df90587196434afe4c729"],["E:/qinhao/hexo/public/page/11/index.html","208dcd5f2ab93227af3f2f661a62f0f8"],["E:/qinhao/hexo/public/page/12/index.html","1a9c6743282df61ad41552c7167bc9d3"],["E:/qinhao/hexo/public/page/2/index.html","bec1e849f1a6a8513fee16bf12243de3"],["E:/qinhao/hexo/public/page/3/index.html","f65a72e5ce99473f396afd26bc3fecea"],["E:/qinhao/hexo/public/page/4/index.html","5aef091c30abe26876e038ff3012ade6"],["E:/qinhao/hexo/public/page/5/index.html","f9257e04f6125fc916706a7370f53d28"],["E:/qinhao/hexo/public/page/6/index.html","02ff0a241327a7516df097e13470aa3d"],["E:/qinhao/hexo/public/page/7/index.html","0a5f35f2c29fd261fc1b4d55fab5ed97"],["E:/qinhao/hexo/public/page/8/index.html","20159aba794bb4f4d6b91ef6fdc7d3fc"],["E:/qinhao/hexo/public/page/9/index.html","4a268e266dad3742e1c0c84ca14b0a00"],["E:/qinhao/hexo/public/sw-register.js","1d743a03480a87351f634b783c112175"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","6a7d0772ae457b7811f2e7333b03e4ef"]];
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







