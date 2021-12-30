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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/01/01/css_clear/index.html","c05dea308cdced4ed80ee7dfef7cb56b"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","8fbcbb3f0abcf885f89738e248eff17d"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","3cea7f0d06dfd963364b1943aca7d318"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","e2218af323e8ace1f71aa68e257e7c66"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","937d7d8baf159c8602d403eed3fe82a3"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","41bfa4021a03e189fe41dd44f9e1dc71"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","fc355ef2ae86b8822f27806d40b547b5"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","f955664384827e12e2fc52b60ce050ca"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","0df11ca1cad42c2e42afbf82536a5b77"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","254917c56c87d717ea7e3bf8c4ecbb07"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","745ab36d7a7c773af349851066d5cc12"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","bed48d5f52a08cd26a9b4ffcd64e1bdd"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","14b4d4a823b3ca30a9398a36971f95ec"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","39d53b79a6afe0565abbf583d651a054"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","82321d4732e07360915578f74d37321d"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","0d0323f11220fb2e3a6ab5fd791d1009"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","a9b8d793afc7ab7afba4ee2ae27301c6"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","8dbf0cf608674285cbb18b2420f9b9ac"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","8b612c2b6f8562dcbaac641e897b8593"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","b78f67b3fcda661d2ff340e1583cf3cc"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","c006452b3309b8eae25b246ef613238b"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","7fb33a4510e2dce85819fb07b62a0a55"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","aa2f6dd5e7afe2572c62503103280480"],["E:/qinhao/hexo/public/2020/03/11/Python_basic/index.html","52ed8137dee504add5fabd195dd7adc5"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","7045ed0718794880519bbaa33d9ed454"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","205afa02d8288a274be143822c3f669d"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","d611c67725af0cb87d82617f88125c8d"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","43328c8137af0aadadce0918f0333850"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","5d9765bfd66443f6381c1a76d9e291af"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","0ba8c3dedad4ee5a9e901c221bef3dcc"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","0cd85e4849712ab95bc977d2fd288fac"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","7f15aafc106ce2747d94869184ceec52"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","b077551f0a070d9e09cac15c0197be9a"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","1dc65a20f2370ff99abd5f8d6089949b"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","2bfa326b8824abf151ed490755149a45"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","6529e50c8d16ca0f3d5c7f0692355ace"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","1dd19efab41980f1184fee55b42340da"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","b775808cf374a9c0d44918502f81b8f9"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","71bdc0837bf173ba70fab42f7fdbfbbc"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","f23e06ff70648f2806581035f11bb64d"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","d576cc5a2058bc3fb8224bf25be75906"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","8252baf42980f97412697dc4f125654a"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","6bf1e72cdd1a77ba251fabc1d09c8c3a"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","6df988777956d41d5847c563212585db"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","e412a6eb3e721a359a23adc074c0a1f4"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","0f1e732e4954e345960c5cf635a7b939"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","4b013772aba6f4aa299abb66260abede"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","8e1ca67e311ddae4c36812658e91f2d5"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","d54520819b78a0169b52609ac52fdc8a"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","c263146a253bbb108fc227a4da98bee2"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","500b411e2c19d34de127f5eac6deb60f"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","36b2a0f840e69ddd03def81ea493f5c8"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","29880e6806657249cb6096f3b1d2daac"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","2a9c7cef636eb030016b1f5494718ea1"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","580b6a5779c3b0ccbd6efb18d91c940d"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","e7c25d4d22e97ef5389d06f86d06cd7f"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","4398e95d17445c95f660e0688683a36b"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","da3b1f2e3ce51ca49303b8d473f0ba1a"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","e70b59f7315d252aa36d19beee3d3d73"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","71b1954536ff6a0aecf9a80cdb6b1a01"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","190fe39a4a0037f507bcfc4eb5c936b9"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","d47f4807e0cda3b27d8ded73bbbe833c"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","5b59ce56a60d1350d953b08eb409515e"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","d2cc40f825c9c6e93b822902aa0a2469"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","6270f76b62c96485875cfceff788baac"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","1cbccadf386b516ae64b686791b1571f"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","535816bb34900fb323eed08e78d16f64"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","1abb2fd7e29bb8148bdc48fc2d74dfb0"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","9a5eda91f61847ce7c1f5aa3bdeb4c29"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","c5f9313b8d8654c534e6f72106702283"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","2a8a9227ecc592ad326d133a41decaf2"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","ef147f8609afa0d8a5c5a8e49da7ee89"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","bd9d54b416ab12bc4fd92433507c8836"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","634bfdc50157f7e1bcbe67f075174e36"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","089f28a0bff5d38048d9470f5998320c"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","054514eb55fb4aea523a2e5e248a06ff"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","a6f66b79486ee42a2da78d25259cdb31"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","7f5a79513383943dadf1e966759030b6"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","da665433e2258fe564c30725a3e14c5f"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","c8a4b777f331705b12edad428c5093a8"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","164837ca1287fa27249acd6c02477434"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","29ca42132c341ecfb292b06d1a66132e"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","cda0926cbf881d91e589c0c4ccb6013c"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","833461f6907940db3687796e7ac9e4e1"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","7970ec65b3ac2e40dc38a46afc1901ae"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","a9bb695527358a0e409bbf61b01e9cbb"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","d05de4b5e13452f1278ea7f0107d5ce9"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","b47312b0805c7005fac9f03047ee7c37"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","173f67c86097cef27145a5f984220352"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","2e5cf12f58871aa234251ab28543c634"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","40b1bcc35801e62ab2dc12151221932e"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","396411062de862f9911a0a84aed443ab"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","1f74623c40cd7fba87ad9ec84f45f323"],["E:/qinhao/hexo/public/2021/07/21/login_demo/index.html","0caa805395f1be966894f17f5820cad4"],["E:/qinhao/hexo/public/2021/08/01/dataStructure-1/index.html","f65e3b43ac0f809334d4b9539478ad33"],["E:/qinhao/hexo/public/2021/08/02/dataStructure-2/index.html","52a030206b443a36b955bac126591ac1"],["E:/qinhao/hexo/public/2021/09/01/stock_1/index.html","fe3db2d842f9ef77f0e48d0758ecea01"],["E:/qinhao/hexo/public/2021/09/02/stock_2/index.html","9f437c40790327dbd61b4edb25b28447"],["E:/qinhao/hexo/public/2021/09/03/stock_3/index.html","f60c76d63ea80cb84029f46cda1dfe5c"],["E:/qinhao/hexo/public/2021/09/04/stock_4/index.html","4ec07d47311ac23d27593956f532ccc9"],["E:/qinhao/hexo/public/2021/09/05/stock_5/index.html","4db73e1a6b14a3c491717e953b7afaec"],["E:/qinhao/hexo/public/2021/09/06/stock_6/index.html","96dba2cfce5bce66aab3f48660e58327"],["E:/qinhao/hexo/public/2021/09/07/stock_7/index.html","148996295800315ddcf58571904ed9f9"],["E:/qinhao/hexo/public/2021/09/08/stock_8/index.html","c019d225f6b64237a0205d0384fd7388"],["E:/qinhao/hexo/public/2021/09/09/stock_9/index.html","039833860b1a31f5b04f5e75185a2932"],["E:/qinhao/hexo/public/2021/09/10/stock_10/index.html","bd682e903d28df8a4f53d788e28d984d"],["E:/qinhao/hexo/public/2021/09/11/stock_11/index.html","69eeda769eb2baf631f964c3c6b8b6c3"],["E:/qinhao/hexo/public/2021/09/12/stock_12/index.html","aef7c731bd0175ec3ffcb1c6540900e6"],["E:/qinhao/hexo/public/2021/09/13/stock_13/index.html","2e4efa859f83e86230129fe6040c3530"],["E:/qinhao/hexo/public/2021/09/14/stock_14/index.html","3f68b6b6cd252b8333f8a456308f4faf"],["E:/qinhao/hexo/public/2021/09/15/stock_15/index.html","b33b5f6e32198323c2f29e791160e08b"],["E:/qinhao/hexo/public/2021/10/01/system1/index.html","0f10a75f68960db6451cad2f609c8c92"],["E:/qinhao/hexo/public/2021/10/02/system2/index.html","4c53f3245b801d23a3f9b22e448a8de8"],["E:/qinhao/hexo/public/2021/10/03/system3/index.html","a71ec7de9f6d1dcade164d5e8290e912"],["E:/qinhao/hexo/public/2021/10/04/system4/index.html","f457763a37162f35781cd6895e4cf497"],["E:/qinhao/hexo/public/2021/10/05/system5/index.html","7dd9e0f30f4008d101757a639dfc41a7"],["E:/qinhao/hexo/public/2021/10/06/system6/index.html","214f1cd0620b1de86dc8a6681bac7b81"],["E:/qinhao/hexo/public/2021/10/07/system7/index.html","ba2c05cbad75e1fb7072c99e708a1cf2"],["E:/qinhao/hexo/public/2021/10/08/system8/index.html","fd80afa220913dc2fd2f27af9acc4615"],["E:/qinhao/hexo/public/2021/10/09/system9/index.html","fac8b025c8f6f02ce30d9c9d06e04dde"],["E:/qinhao/hexo/public/2021/10/10/system10/index.html","6fde7ccab607ddd3f7b9f657fe4d2112"],["E:/qinhao/hexo/public/2021/10/11/system11/index.html","14b6947024f5e6e46d20b0394f2ec20b"],["E:/qinhao/hexo/public/2021/10/12/system12/index.html","6dedef14f0b1fb4862a8b519cd6b4371"],["E:/qinhao/hexo/public/ByteDanceVerify.html","580f9ed5dcdb9fbb902468769ce2c612"],["E:/qinhao/hexo/public/about/index.html","b90f6eeabf18b75cec138cb43739712d"],["E:/qinhao/hexo/public/archives/2020/01/index.html","4ab28f28eecfcc91394f20a91fd24edf"],["E:/qinhao/hexo/public/archives/2020/02/index.html","846b3232c7c1d7e31d6dd012ec80dce9"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","70983df9015922c6baca2b15959fb997"],["E:/qinhao/hexo/public/archives/2020/03/index.html","f67498a2585de71106185b301144633b"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","b643e7aa132ae67d829633016cd8c463"],["E:/qinhao/hexo/public/archives/2020/04/index.html","7257e516ae2384d3409d37964feceb88"],["E:/qinhao/hexo/public/archives/2020/05/index.html","9ec6572eebfdfd586bec6cf61fa2b100"],["E:/qinhao/hexo/public/archives/2020/06/index.html","c9746ed2e09c783e9219fd570494bab8"],["E:/qinhao/hexo/public/archives/2020/07/index.html","cfbf14951ca805104c4864c26a2e0c25"],["E:/qinhao/hexo/public/archives/2020/08/index.html","5b156d0c60cc88b7609a029b4ba066d0"],["E:/qinhao/hexo/public/archives/2020/10/index.html","5658f79859924e9667f35ef9b7034885"],["E:/qinhao/hexo/public/archives/2020/11/index.html","b3c00db5a0f9a76b1e0fc00fb768585d"],["E:/qinhao/hexo/public/archives/2020/index.html","fc41438e7b9c2fd1ffb1bfa30ca1cd36"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","1eedbd08f18685df8ef876ba048c2123"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","f01ce5abd9de8a3bd6a71c4f97b54727"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","affc42c5100b5aa14b48af1ade5f6b7e"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","6cbde019dc71bc1b0849cf2829071296"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","2cbe416be002665464e4b34aa7bbe568"],["E:/qinhao/hexo/public/archives/2021/03/index.html","8f7ccb6f9289585123844500f85ca73b"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","edfe230bf7d2310c9494de6a4938b753"],["E:/qinhao/hexo/public/archives/2021/04/index.html","413458d6020143153937420b335bf5e6"],["E:/qinhao/hexo/public/archives/2021/05/index.html","add6694ab51f6bbac3ee2723adfa9da1"],["E:/qinhao/hexo/public/archives/2021/06/index.html","1e97cc644d9c9c3fbc5d15124bd722b9"],["E:/qinhao/hexo/public/archives/2021/07/index.html","170a8bbb06f0820be793d29f6e3fba93"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","e9017bbc546d29ef63b73ad7c736207b"],["E:/qinhao/hexo/public/archives/2021/08/index.html","14e3e429f32cab9dbc031b42a03aa292"],["E:/qinhao/hexo/public/archives/2021/09/index.html","c5cc675e97a7516a072c4a8cca664b75"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","420769c6114616478dfbb73938d501be"],["E:/qinhao/hexo/public/archives/2021/10/index.html","85ea926bfe8cc041ef271ebfae2fb5df"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","a848b78e8d2d6912e379d60c2721168a"],["E:/qinhao/hexo/public/archives/2021/index.html","e84d4ddae2300af2beed189512ffd569"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","9d8303f0484cc7b6279dcb1dec68d0ad"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","25810b5dec297cf2f4daf9845b6d083d"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","0ec05b11dc16af1abc5ab7a4668fa4cf"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","71c3cbd99f4c0a2ccd9843fccebe83b7"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","38b4d69a1f6f6f6cafcc1fe6a82a6836"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","3e0f31a3f5b5aced19d54d078dca2069"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","5d77b3e4cf61d7710e3e976864042f59"],["E:/qinhao/hexo/public/archives/index.html","8c8499d0f16d7848b3a77c6a777f5638"],["E:/qinhao/hexo/public/archives/page/10/index.html","02dc49e5e95e38495b5e1dfdfe3f3224"],["E:/qinhao/hexo/public/archives/page/11/index.html","73d96e29fda40ed486d867905894cbec"],["E:/qinhao/hexo/public/archives/page/12/index.html","73d96e29fda40ed486d867905894cbec"],["E:/qinhao/hexo/public/archives/page/13/index.html","73d96e29fda40ed486d867905894cbec"],["E:/qinhao/hexo/public/archives/page/2/index.html","8c8499d0f16d7848b3a77c6a777f5638"],["E:/qinhao/hexo/public/archives/page/3/index.html","8c8499d0f16d7848b3a77c6a777f5638"],["E:/qinhao/hexo/public/archives/page/4/index.html","8c8499d0f16d7848b3a77c6a777f5638"],["E:/qinhao/hexo/public/archives/page/5/index.html","8c8499d0f16d7848b3a77c6a777f5638"],["E:/qinhao/hexo/public/archives/page/6/index.html","02dc49e5e95e38495b5e1dfdfe3f3224"],["E:/qinhao/hexo/public/archives/page/7/index.html","02dc49e5e95e38495b5e1dfdfe3f3224"],["E:/qinhao/hexo/public/archives/page/8/index.html","02dc49e5e95e38495b5e1dfdfe3f3224"],["E:/qinhao/hexo/public/archives/page/9/index.html","02dc49e5e95e38495b5e1dfdfe3f3224"],["E:/qinhao/hexo/public/artitalk/index.html","009c17734b02a2989e6495df280ab293"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","de3a4b8667187ee430ffc13ff6747d96"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","9ed69b111bc2683300a57e345c3fba97"],["E:/qinhao/hexo/public/categories/Java/index.html","c67a3491504b88e817a81f2eee0cb505"],["E:/qinhao/hexo/public/categories/Linux/index.html","1fa60d3ca65d8f923026a6abbd9f5b5b"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","45bff31616bdc21956613226fa7714f6"],["E:/qinhao/hexo/public/categories/Python/index.html","5ad9af444bce2767a162bc69cc5593bb"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","f61fb0ee63c1116a77e38e45fd4ef9e3"],["E:/qinhao/hexo/public/categories/交换机/index.html","035629c47e8d2292d1bf269a33405508"],["E:/qinhao/hexo/public/categories/前端学习/index.html","28641dbde667f9ca8d0ad3f63e9ada5e"],["E:/qinhao/hexo/public/categories/华为认证/index.html","e4780bc8df0a02e6d304f2a320f43fde"],["E:/qinhao/hexo/public/categories/小技巧/index.html","59a1440c6ef33bb7774ef1121473cfe7"],["E:/qinhao/hexo/public/categories/操作系统/index.html","b4c117238b6cc1f6def87a55962baeef"],["E:/qinhao/hexo/public/categories/操作系统/page/2/index.html","9554ff566a144df3536029610752498f"],["E:/qinhao/hexo/public/categories/数据库/index.html","b15c43e48ed2dbbed27711e5cef310e3"],["E:/qinhao/hexo/public/categories/数据结构/index.html","b6a9844b06bcd4eb81378b70aafd0770"],["E:/qinhao/hexo/public/categories/服务器/index.html","b1651ee17a2bd44a7f9e17a7cc602383"],["E:/qinhao/hexo/public/categories/算法基础/index.html","a85c3fd511e298daba7a91bfd07dd9e5"],["E:/qinhao/hexo/public/categories/网络安全/index.html","c275a1c6fabc771d445d987168f5549f"],["E:/qinhao/hexo/public/categories/股票知识/index.html","c17ed57a5ce2e1caa611f72a234e7f23"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","bea71b2a837c66dbad077f11395605b3"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","665c5aab91e79cc31a68dd17749347ef"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","c684dbc7ca3279ad7c6c5a957710ffe6"],["E:/qinhao/hexo/public/categories/软件破解/index.html","826e835c59355676439189e0c6939879"],["E:/qinhao/hexo/public/categories/通信技术/index.html","11eb6633886aec79adc39f72cd5707a7"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","2c4754107f02c2106d78f9cf61fa6dea"],["E:/qinhao/hexo/public/category/index.html","28a3e97adaa2f17a3e93c5f27375df52"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","36488b9ba6c7b685a641aac8b607a82c"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","c20dd2477b5ab10e92b8453af89d68cd"],["E:/qinhao/hexo/public/index.html","5110d081840c4b13d73cf3aa01eed635"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/mylist/index.html","b435b2095c5d432d264820250b183b31"],["E:/qinhao/hexo/public/page/10/index.html","7e1803716fe2ca4fd55d449b241186ec"],["E:/qinhao/hexo/public/page/11/index.html","ff804a02adb9c07a2fa3913bdc8568f8"],["E:/qinhao/hexo/public/page/12/index.html","3bba7a09b38241ae1904270eb4312375"],["E:/qinhao/hexo/public/page/13/index.html","05803a62b7bb4ce0265fe2a967149b7c"],["E:/qinhao/hexo/public/page/2/index.html","8d73966027d62ad61ea4faa86eacc5a1"],["E:/qinhao/hexo/public/page/3/index.html","32d41b45c1a3cdcd0dcf5d9b9fd7b09b"],["E:/qinhao/hexo/public/page/4/index.html","2e5b17eef1c381edc3bb65c10a82ab8b"],["E:/qinhao/hexo/public/page/5/index.html","d4ae32005768dab054f60281c5b125d1"],["E:/qinhao/hexo/public/page/6/index.html","0b547a257c584b06e95087dfd7f6a5ce"],["E:/qinhao/hexo/public/page/7/index.html","3dae711c80a45642042891f9ac2eb0b8"],["E:/qinhao/hexo/public/page/8/index.html","55e96df7c8071ed45c59ef5136e8cfa8"],["E:/qinhao/hexo/public/page/9/index.html","4f50f1d24e0877e34a24ace62bb19a78"],["E:/qinhao/hexo/public/sw-register.js","ceb114aa9b5cc8ef2cc6128e8beeac44"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","28cf336f6b7fdd7f3eb1725d4e883fca"]];
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







