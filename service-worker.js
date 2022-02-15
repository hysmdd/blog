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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/01/01/css_clear/index.html","95e32f67ee950c0e1f823b7350664ea5"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","bdca53aec44346a26353376b15a1cdb7"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","41014a403e0b24c29be068360c80cbcb"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","5a2aeb3b089331c041d642bf5ca9d99f"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","091564dd0a085626700e19184542b464"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","914f29295586812272d7430a43f6e998"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","152db7432211b2a7d50359af59636e4f"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","9a5352d85b8caddb64690501bd69c538"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","2c6f4760baf750fcb06cecb0163a7844"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","f6fc911141977f0f237eef0b2a299fac"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","8d1f48d6b49d4ca398240056c7c382c6"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","393ebecbf47eb040babe2ddcecc98a36"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","b72b726807bb01d1d9a8c38b05045e13"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","7be77280a16e2bb25e83f1345509ca06"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","1a11fc0b2efcdb7b455e516d63ce6f75"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","ccbf23292d4d9b3b475938358d3e8316"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","e047d209a0071cd8284484a3172e3fab"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","be27347a51513c978a6b0c6f20f5ae38"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","1acbdb25378fbc350917d1fb85e7a469"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","1da5a03148167ed97f1ea93d71197074"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","9593a6f5223f1bb14b28ebd7c230b6b4"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","888de20a56c68dce4aec46fe64b4d867"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","d73af0c2adfde32559c06c5d99546b66"],["E:/qinhao/hexo/public/2020/03/11/Python_basic/index.html","fd69ab3c51acda8d658a5c2b04bbabd4"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","2cda3c10a91c2af729e67398c603370b"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","71f75d6c45bf705518476375d440293e"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","53b4c6a1abca3705fba28e96ff3c0d06"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","5544acc5d7c58f7869444f4ab7cf237d"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","407ba366e77b853fd9a22607414350cb"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","a3fdeaa03fa096910c9c27140c326eb2"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","0734567aa2056371f3718b455b249384"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","4d8e075d896d7a9b2ee5526ecb8eab23"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","95b329fce1d5ee33590b9b8517158b9d"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","f68fa3612df6e398888a8b81f0e07887"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","c96624dd86ed26c04589675fe439e472"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","c50fcea82659a1515e05b6b139b37aea"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","94120a029c7e4ce1a07c197e402e79d6"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","9bec0f4ed59e1ef50c17a2c6fb8c5cad"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","0f6448c76e43b7697faaea0ccf4604c4"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","4d4943584df384d7f3e85f0fa49cf03e"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","2da956a5d76b2d152a004b09515ae9e6"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","bf2f01bab9642655406ac2825d120dd9"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","a263520bc14028c7eef807cce2f55a1f"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","e7c6f53178589bdf63d9491b6aa0394c"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","d9c5259a6a2bce720d0f0ec5d9295a89"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","e86fa5eb1ee5919839ba3ee1753412a3"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","52dccdc9329bc60b3a761569fb200991"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","dbae77f5cd283cf753faa50be8251020"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","0aa947306021d40778192996eb4776ad"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","ebdb7c6ef2281f20be384a37db9618f4"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","cd5852661f46e87d0361b3c00f4006fd"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","19d82ae3d36c018b5d9d00e091dc24ae"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","0e6c8e8742dd4a5f748e1d9048c555c5"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","75354b4751e2ce18c93494f3ca4b004c"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","effdd342e6ae265839c5bcee00663077"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","a35ccfe50f59f91d8fe5e3f34f56c4cf"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","62406f77fe0d663cba6a9e71761bb7b4"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","6d7cdcbf94fa3626ece5250b71d96d99"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","07410b61e71960f452d5d0f5e691b270"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","de5873077c41f5144adaeb3a7c048779"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","e8bca5b49f263e0f8c8f1b0927827a31"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","10d99583255d4027ae2b8e4cac496ce1"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","0fe812a67e2beedc5b7d1cce3e3da766"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","c6710c8a885d4ed47ae9e09bea1ca1c8"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","d343ef6dece2c8e0848e3f9eee705711"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","8eaad3ffd5f3f1fefd3ca20fa1c237b1"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","65a543ff7e26c475c0e98dc81a4586f4"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","ff89efa6b663caa9f17f4d9292bd1051"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","4250227b84b288edb1952506fc6503a3"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","96438fcb4fbd5bddbefb78160fe7945b"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","b05c35d443a20fcf6d2b1db68c41454a"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","5c2ca7cdd70922c04827094a1a2cbc5d"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","4c107dd094d42decfbcfb94316560c1b"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","4312fab7106d0f199d60ec5928d1b983"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","0a74642e07a9ac7a6a36491fd202bb4a"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","c7d1ac2f5d31d356b35f1aef26551f46"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","4f47e2751f70121fb8986fb3c263dde2"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","d0ae3aafb9ff379c21e1c9d317ca02a6"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","6c5436747a93af9eb1632e13b603da60"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","6bedae73a53ebdd7a2068d23b61e4561"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","5af7399483d63d921a1d3a1a7346fd51"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","9515c1012e59d0925599b7f2dfdf17ed"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","ee2aac9d783469c2a82c10a7610515c6"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","180333e2a97f3e81eb525aefeb378241"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","adfcfad5ca04ccc1921022815621ef8a"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","d9f8d2bd64888c868738c7dd83a820af"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","10d81df1cf0248a9d16cf03ccfccd7da"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","96597e7a0eef495d5d76973da5f1a776"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","6b532f516d65a77b782a2bcd1f270012"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","a3b5db714b9856ff1e6fbef75525194f"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","fa203e0da0668ae1e9864872de659788"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","22262d970192545ad5ac3de8424e3c60"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","2b811ba6098687215a8a1f315b12234d"],["E:/qinhao/hexo/public/2021/07/21/login_demo/index.html","34b14c11e5d5230ed90b0f8e962dc39a"],["E:/qinhao/hexo/public/2021/08/01/dataStructure-1/index.html","deddf4f648953c99567f4e46a75fffc1"],["E:/qinhao/hexo/public/2021/08/02/dataStructure-2/index.html","97ccde0025954bdf5e61bcd3ebbc4326"],["E:/qinhao/hexo/public/2021/09/01/stock_1/index.html","0549344a645653407f8b257d24bb9ab1"],["E:/qinhao/hexo/public/2021/09/02/stock_2/index.html","e426e1be5bc78e4346c9b969ace9408f"],["E:/qinhao/hexo/public/2021/09/03/stock_3/index.html","352bd8e95fcafafa72e77203bb2c4bf8"],["E:/qinhao/hexo/public/2021/09/04/stock_4/index.html","dfacc991bedade6edacae90f060dd2c2"],["E:/qinhao/hexo/public/2021/09/05/stock_5/index.html","592d0153b6054803f5bba4f08a2fff90"],["E:/qinhao/hexo/public/2021/09/06/stock_6/index.html","20fc9b1bdeb428723a7ca613980f87a9"],["E:/qinhao/hexo/public/2021/09/07/stock_7/index.html","cd50be30be167f6feb07a82e27b0b79a"],["E:/qinhao/hexo/public/2021/09/08/stock_8/index.html","9f0eb80bea1863e040b05516bbb42a14"],["E:/qinhao/hexo/public/2021/09/09/stock_9/index.html","2a8a0899ae5033fcaa3149c0006cef56"],["E:/qinhao/hexo/public/2021/09/10/stock_10/index.html","381ee41f149ea78ea323a2112322a22d"],["E:/qinhao/hexo/public/2021/09/11/stock_11/index.html","6030cdba4c89d6ca4ff35e94bd6849a0"],["E:/qinhao/hexo/public/2021/09/12/stock_12/index.html","7d51c37febe28efce31d024c05653f2a"],["E:/qinhao/hexo/public/2021/09/13/stock_13/index.html","371a1dd4d8649bff2f6c20f779a2dace"],["E:/qinhao/hexo/public/2021/09/14/stock_14/index.html","f21273a18426217d586b8e113cb2635e"],["E:/qinhao/hexo/public/2021/09/15/stock_15/index.html","2aedf4ffc77e76d7cbc9d4f60ec9b686"],["E:/qinhao/hexo/public/2021/10/01/system1/index.html","33fcc2183761673d713520c0069f3a86"],["E:/qinhao/hexo/public/2021/10/02/system2/index.html","7f25172101d13e63ee0e8f0dbc9027f4"],["E:/qinhao/hexo/public/2021/10/03/system3/index.html","dc50a32b5c543045bdd2797b872de6f7"],["E:/qinhao/hexo/public/2021/10/04/system4/index.html","f1991b226dea5b39f86066757738809d"],["E:/qinhao/hexo/public/2021/10/05/system5/index.html","f7ca4f40fa2cd5b189bcba018f32886c"],["E:/qinhao/hexo/public/2021/10/06/system6/index.html","81b07b3b37496e435b91a7e6100a3d9a"],["E:/qinhao/hexo/public/2021/10/07/system7/index.html","54d8dea1b05e44a3d493f3237eff3c10"],["E:/qinhao/hexo/public/2021/10/08/system8/index.html","8a87759ac44e0b96573f451a116682ce"],["E:/qinhao/hexo/public/2021/10/09/system9/index.html","579bf5912fbfc84b7edb8a4da21da00d"],["E:/qinhao/hexo/public/2021/10/10/system10/index.html","30df666c1b3fdccbf1e9ee26c9ff373b"],["E:/qinhao/hexo/public/2021/10/11/system11/index.html","c8b039efcbce9123a053208816372573"],["E:/qinhao/hexo/public/2021/10/12/system12/index.html","2594818d506780cc8d44178d7776e107"],["E:/qinhao/hexo/public/ByteDanceVerify.html","a32f60f29da68381caf10df4b7be5dca"],["E:/qinhao/hexo/public/about/index.html","ab5e1e963bfccc8ce704d434859c2690"],["E:/qinhao/hexo/public/archives/2020/01/index.html","1fc2ce49a1db545af4f7ad303f24f7ec"],["E:/qinhao/hexo/public/archives/2020/02/index.html","5038026da9930106c44fbb7ae89a6ca4"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","9948adbd79751e436aee5e0ce8dc527b"],["E:/qinhao/hexo/public/archives/2020/03/index.html","a1fb350de07e2e7efd0a4f932ca362d6"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","257b1b91664061dd6bcff7d48afb7696"],["E:/qinhao/hexo/public/archives/2020/04/index.html","b4f816fdd79cb16fd6f533d360217fb8"],["E:/qinhao/hexo/public/archives/2020/05/index.html","d4311966ed592c59f5617cc80b56c903"],["E:/qinhao/hexo/public/archives/2020/06/index.html","554a401aeec0b9584616c6c4ea57c0f4"],["E:/qinhao/hexo/public/archives/2020/07/index.html","16a4fcadcfd92497b46b9270e8e97585"],["E:/qinhao/hexo/public/archives/2020/08/index.html","8c55afbe84a9092159648090080a4bfa"],["E:/qinhao/hexo/public/archives/2020/10/index.html","bc67c897b6dab726f5d443f5130d2c56"],["E:/qinhao/hexo/public/archives/2020/11/index.html","2711c04d72de209f266dfb652c81ab8c"],["E:/qinhao/hexo/public/archives/2020/index.html","eb5fa2ccc6e5da597da9291b771de25b"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","87262adf74b5bc509bb335ce8f3aa8f8"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","289aa77a83ef3b5cee3b28bc8946cc6e"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","a9b32bf8fb799425113674402a1eb9c1"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","b33a403179be8d7fb2caf808101367df"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","9ccd64d13e9da6d7107626e59167aa61"],["E:/qinhao/hexo/public/archives/2021/03/index.html","085b63221bd7aa6c11f56662efba18ec"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","fc6474f0f3721f76b0c4bea6ee0c4caa"],["E:/qinhao/hexo/public/archives/2021/04/index.html","32e849553be625c85185d28f4dd9d5d2"],["E:/qinhao/hexo/public/archives/2021/05/index.html","f1bce4870035a4049459f5d4730a0c7b"],["E:/qinhao/hexo/public/archives/2021/06/index.html","36aaf2e3b09a1419b89ba02436b6b934"],["E:/qinhao/hexo/public/archives/2021/07/index.html","b00390b2fc010aace8245a2ea795202e"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","8cd01b8280649fc754825b9b5e2511dc"],["E:/qinhao/hexo/public/archives/2021/08/index.html","b6b41e6d1522559219fff6e10cbb36bd"],["E:/qinhao/hexo/public/archives/2021/09/index.html","4393c3b1d9e9356bf17e0d415d6ac94f"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","43e8981d874f569620c4939d81078b02"],["E:/qinhao/hexo/public/archives/2021/10/index.html","aea453e612e0d0830a800f8ae8dfc7e8"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","77528a7ef0f6d2b650cfff560bb2130c"],["E:/qinhao/hexo/public/archives/2021/index.html","bf43daab15177ee751a08387c08706a4"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","68069a87064249d1892ee016a2d796db"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","95f0821e7b34855df6400d5532a3657b"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","2f764c2d82f8944b3125f898a736aaae"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","764fce4819b2196e3cf4927df8d4c9c0"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","c249026976d47a6ea90841143df931dd"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","c11b2b35efa3b08f8b97f9eab13bec74"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","2ee4cea5f28af8eb0ac2fe733fddc65d"],["E:/qinhao/hexo/public/archives/index.html","d99bc84821568492d8d36909cc03fa6d"],["E:/qinhao/hexo/public/archives/page/10/index.html","cca202a112053c4ad949733511940091"],["E:/qinhao/hexo/public/archives/page/11/index.html","cca202a112053c4ad949733511940091"],["E:/qinhao/hexo/public/archives/page/12/index.html","cca202a112053c4ad949733511940091"],["E:/qinhao/hexo/public/archives/page/13/index.html","48b61f935b55293635fb7868bd7ecfbf"],["E:/qinhao/hexo/public/archives/page/2/index.html","d99bc84821568492d8d36909cc03fa6d"],["E:/qinhao/hexo/public/archives/page/3/index.html","d99bc84821568492d8d36909cc03fa6d"],["E:/qinhao/hexo/public/archives/page/4/index.html","d99bc84821568492d8d36909cc03fa6d"],["E:/qinhao/hexo/public/archives/page/5/index.html","90c7c3dfb98ee296135d106569e21874"],["E:/qinhao/hexo/public/archives/page/6/index.html","90c7c3dfb98ee296135d106569e21874"],["E:/qinhao/hexo/public/archives/page/7/index.html","90c7c3dfb98ee296135d106569e21874"],["E:/qinhao/hexo/public/archives/page/8/index.html","90c7c3dfb98ee296135d106569e21874"],["E:/qinhao/hexo/public/archives/page/9/index.html","cca202a112053c4ad949733511940091"],["E:/qinhao/hexo/public/artitalk/index.html","0873ab0793d0f9ee57b060d629c2b8b7"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/books/index.html","cfa16e1cf595cc55e9a8636800c46f58"],["E:/qinhao/hexo/public/categories/C语言/index.html","03ac895f908b684b2cfa4f993c2f1a5d"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","4ae5b86177feb393cf733fa3dcebd166"],["E:/qinhao/hexo/public/categories/Java/index.html","a491902bc88af1a9bfa04f5726d8b85d"],["E:/qinhao/hexo/public/categories/Linux/index.html","18db7fc8fcfdb02389787458e4250928"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","9f4af384b8133ffa814aca4f66ed2917"],["E:/qinhao/hexo/public/categories/Python/index.html","d5cfe8f402e60be80147663c8a0bd99b"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","3c3e9a024649645e9bc6aa8482f38031"],["E:/qinhao/hexo/public/categories/交换机/index.html","e5efd08fb5ac3c10f6e49967aadfa8f2"],["E:/qinhao/hexo/public/categories/前端学习/index.html","87c7672f2ab48797b5a114ff8d3c4d4a"],["E:/qinhao/hexo/public/categories/华为认证/index.html","e11c5694dfe3760ba1f0e514c752a7ba"],["E:/qinhao/hexo/public/categories/小技巧/index.html","842259311e7fa1b4f3da32377923d9b9"],["E:/qinhao/hexo/public/categories/操作系统/index.html","d7d7d1b1d7b5e8eccd4f5c0f3dc92594"],["E:/qinhao/hexo/public/categories/操作系统/page/2/index.html","f92eddb33466dff529a54b490dd58e0f"],["E:/qinhao/hexo/public/categories/数据库/index.html","31e64c7aaf9e7a57a454fa90b7bcd803"],["E:/qinhao/hexo/public/categories/数据结构/index.html","8c830a5699f7a9f89027c4019c040b31"],["E:/qinhao/hexo/public/categories/服务器/index.html","7bc6ab61a459da583e1c48afffe41440"],["E:/qinhao/hexo/public/categories/算法基础/index.html","f0827a8c6cc3208edeee25a418a96f5c"],["E:/qinhao/hexo/public/categories/网络安全/index.html","c44c04f0fc5b025d8f8760008ebcf500"],["E:/qinhao/hexo/public/categories/股票知识/index.html","9e79d04dcdf02ea08ac1053ea4604b67"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","7125ce2a2d265d35214cf075113859b9"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","1656b83d10a715890f7bfabb7b4f0c10"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","0013ff3c6f9babcc407791072c1790cc"],["E:/qinhao/hexo/public/categories/软件破解/index.html","d9936beb2a8f4ffac62cc1cbebd32d14"],["E:/qinhao/hexo/public/categories/通信技术/index.html","373b8e28c332329d67f6b068197e0566"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","56c372644d458fda1cec4be068b0cb62"],["E:/qinhao/hexo/public/category/index.html","c77a08f2eb4a97f98c203be9e8038f11"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","36488b9ba6c7b685a641aac8b607a82c"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","b59f4e93109415fb8682faecb849a49e"],["E:/qinhao/hexo/public/friends/index.html","13ed89f28a7564efc594ff3dbdf978ec"],["E:/qinhao/hexo/public/gallery/index.html","1f85159533eeba5a50ec954433a6b005"],["E:/qinhao/hexo/public/gallery/reset/index.html","144fd3cc299415e97a3d8462fcfd5998"],["E:/qinhao/hexo/public/gallery/白敬亭/index.html","a5d95eb3fd8c627ef892a2a02b3ce4c5"],["E:/qinhao/hexo/public/gallery/赵今麦/index.html","e6f5191ddaf9ed082bd3452c368bda8d"],["E:/qinhao/hexo/public/games/index.html","7da829087058cf1953b5a0e01e509a6a"],["E:/qinhao/hexo/public/image/png/circle.png","5d85080e43c457b35b23f4ad8ceaa6c5"],["E:/qinhao/hexo/public/image/png/icp.png","37975a3be8087f62933f7aa3e7e80d12"],["E:/qinhao/hexo/public/image/png/left_ptr.png","b893704c321e35374e4bc97adb72048d"],["E:/qinhao/hexo/public/image/png/openhand.png","b040b0a64d22b7f40388391ac744949d"],["E:/qinhao/hexo/public/image/png/pointer.png","14c9f722890f733da3ae7fb15013a81a"],["E:/qinhao/hexo/public/image/png/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["E:/qinhao/hexo/public/image/png/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["E:/qinhao/hexo/public/image/png/safari.png","5e83f8d5772a61cd7036bd7bf3f84563"],["E:/qinhao/hexo/public/image/png/text.png","80d9f4da0a0c20b02898f23b035b17c8"],["E:/qinhao/hexo/public/image/png/weibo.png","2af288384e8aee34e94adae792942d2c"],["E:/qinhao/hexo/public/image/png/zoom-in.png","bf6da71dce828553d50a1ce3fd65163a"],["E:/qinhao/hexo/public/image/png/zoom-out.png","d5da599e9fd8344973c64b8ca109958b"],["E:/qinhao/hexo/public/image/svg/1f37b.svg","5e2ea03aa4963cda5e91d395c2587e6b"],["E:/qinhao/hexo/public/image/svg/1f389.svg","b052a4bef57c1aa73cd7cff5bc4fb61d"],["E:/qinhao/hexo/public/image/svg/1f4cc.svg","09204f6a96455580e749454b7449aa82"],["E:/qinhao/hexo/public/image/svg/1f4f0.svg","51cd8436fb99a6f12257db34780fb7a7"],["E:/qinhao/hexo/public/image/svg/1f516.svg","2424297076c0d1c8499820fc4f9d9f57"],["E:/qinhao/hexo/public/image/svg/1f5c3.svg","b542a360ed4cdceeac3bca73b455ebc6"],["E:/qinhao/hexo/public/index.html","15892d1dac2edd2e5b84c9b7bf24c48e"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/movies/index.html","4efae356e956f93cb6ea1e08d1a84a39"],["E:/qinhao/hexo/public/mylist/index.html","48e46dfd5297b5ed728df928db3ef505"],["E:/qinhao/hexo/public/myphotos/index.html","fcaceb21ac2c20136bf0b149d98e29e1"],["E:/qinhao/hexo/public/page/10/index.html","719deaa156559cb49b3ced1eea0684bc"],["E:/qinhao/hexo/public/page/11/index.html","ffb21b305b6874d652a294a01b3f6e94"],["E:/qinhao/hexo/public/page/12/index.html","2138cc005559b91a40d51d15229a69f7"],["E:/qinhao/hexo/public/page/13/index.html","884f23061bc17e93fa19c8089e9b7cc5"],["E:/qinhao/hexo/public/page/2/index.html","17576b7be590370c54425c16103c7da5"],["E:/qinhao/hexo/public/page/3/index.html","c4d2f27095c93bbeaef974ef3405073e"],["E:/qinhao/hexo/public/page/4/index.html","86f123fdc42970261f925a13d5cf21e4"],["E:/qinhao/hexo/public/page/5/index.html","0da656bdaafd24adca4b7d7856a3b176"],["E:/qinhao/hexo/public/page/6/index.html","681359a4f17bbcb97b5569175f2c527f"],["E:/qinhao/hexo/public/page/7/index.html","09881e089636080f4e6852f8dfdf4548"],["E:/qinhao/hexo/public/page/8/index.html","0d88e470575c9785c59f286d7a5f660a"],["E:/qinhao/hexo/public/page/9/index.html","299a86f81948f24a4a864528f83bd2f1"],["E:/qinhao/hexo/public/sw-register.js","79e2a9cbb541a3716d2b1e283ab3918e"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","222690b5b6f2b40a5febce92507842f5"],["E:/qinhao/hexo/public/utils/css/all.min.css","84d8ad2b4fcdc0f0c58247e778133b3a"],["E:/qinhao/hexo/public/utils/css/font-awesome-animation.min.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/qinhao/hexo/public/utils/css/solarized-light.min.css","769d25bae36c449b6612b98809d01041"],["E:/qinhao/hexo/public/utils/css/waves.min.css","ad8ce7fc1d688135eedeedee534aa9a2"],["E:/qinhao/hexo/public/utils/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/js/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["E:/qinhao/hexo/public/utils/js/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["E:/qinhao/hexo/public/utils/js/artitalk.js","d94fe7817fad4ecae5681cbde76a4acc"],["E:/qinhao/hexo/public/utils/js/bbtalk.min.js","a1ab1de2ae261228a7532e855f6980a5"],["E:/qinhao/hexo/public/utils/js/clipboard.min.js","27784b7376dd992368c71b6c5559f358"],["E:/qinhao/hexo/public/utils/js/comment_typing.js","ab7b34f055a2bf8e036daec67e968d1a"],["E:/qinhao/hexo/public/utils/js/flying-pages.min.js","c20e3f49966e71df80be9a6af59449dd"],["E:/qinhao/hexo/public/utils/js/highlight.min.js","a370252e88fa5c6611ab5005c7b87b96"],["E:/qinhao/hexo/public/utils/js/instant_page.js","1a3be845085b8d94a2997a3a472feb42"],["E:/qinhao/hexo/public/utils/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["E:/qinhao/hexo/public/utils/js/jquery.min.js","dc5e7f18c8d36ac1d3d4753a87c98d0a"],["E:/qinhao/hexo/public/utils/js/lazyload.min.js","0fcd5822c9e8af807a14d3985faf91c8"],["E:/qinhao/hexo/public/utils/js/scrollreveal.min.js","f7d329c68b849d6685a7462c22f47ea2"],["E:/qinhao/hexo/public/utils/js/waves.min.js","9a5b3dfca09d9e3005dc697162d4bc65"],["E:/qinhao/hexo/public/utils/ttf/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["E:/qinhao/hexo/public/utils/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.ttf","ede4ff54ccb46fe67622dbcffeb90fdf"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.woff","07fa0741d97758debce36520d5a12d5b"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.ttf","04842b94683f70c18aeb76b5a27cd221"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.woff","f48a8829bec665258b9c85b23ecbf3c0"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.ttf","5f2f8485a00387b7a1d89e793555991f"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.woff","42d66a3eb75eac2b4fc0ee58e9846497"]];
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







