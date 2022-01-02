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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/01/01/css_clear/index.html","9061b1d214e7ef1125ced9da81dc1577"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","d6bdee2b4628dca5e3dcb773214beb81"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","150c2694916521491180964b80b28fd1"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","8e596e0f8d7ec102a052e62abce52dc5"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","73e266632b1fb2f58bd3ddba8a429182"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","9d00b606bdba3133fd2b6a6c309cf040"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","9a3a21102260a90c114e573507fc2b67"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","c68b71accdd9be8e03dc7713c6e15445"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","16d5c59905833ed511a1079198b1463e"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","3ce70cd791152919281754372c4c7de8"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","9ceb00109407c96d303457c77647f7fd"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","20974beb12091416e3555e7b2a436c99"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","25d22e4ab639470d1d1610e5078b18e9"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","14a6eb98e3085cf164c17aec1f44d099"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","086156f5eec61b3ca30f27918be69897"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","59f06040fdeb0d27dad38c70882e8aa8"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","31613fb43e8b686606b8c51d3bd23949"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","0a7d735aa899a9861428633318a37f3a"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","deb0179eee3c02ad06d63ad9117891de"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","f6b79a954ca41c4f35e3b0f7492117d4"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","2601ebc2126b3f58bd6cef39e2da3a2c"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","673a9a18cd511303b6a6648a2e9cb2ee"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","00c1b853a23b659add2ccdc914beccbf"],["E:/qinhao/hexo/public/2020/03/11/Python_basic/index.html","ccada62c0197e18823bf8f2b875f1cd1"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","9f288d2c9c2eab34ec674dc92aaf5f6d"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","47b934860a691f23653ee012cf619fe7"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","d106b8d174dfccec0ea8bc4440d61dbf"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","3fc2339a5ccd62f3db9ce9a6da5f543f"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","2e91962275f29d41e00daff7fe6edfd7"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","40318b9f607cc96fef7ce742aac4863b"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","9928c2aa295ccf07e896828710f9c2f4"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","427abbbc0aa8ddb470329d0120556930"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","fbe72d77d8790c5d5333a51ee88af0de"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","08a3b5d94c362eae2372b90916afdbc1"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","6dc977efdfd708feec93a30eb036cb37"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","f421ba263fd4dcddb360d2713423056c"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","cda2baa406e9b388df15911906414744"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","c3407dc10caed911efee04ef44998b07"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","7343ac16dad97f893a233c411e5c2dad"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","409f3ef4ae4fdb47a73c9409e2abf92e"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","d9a48b7c014d377454febcb05119e274"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","cf5cc08af47bbf3e9beec723ca97829c"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","e8a4a929da39de1ca0b70c036553887a"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","e6a0180d387e61b457651c5c9b7eff75"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","406faa0785d3aa4729b461ee1186c2a4"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","32f56cd6b865b4ec71ec31d3aa74f45b"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","b0172c53484ff8fff1212d2352f4c0eb"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","232942aa9871b07d79aeb61ee53b40e6"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","3feb26d10fd91af952613fb9d5b5f3be"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","fbd389ef55b580700cd24bd9031260b0"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","dfda0c9218dab18446955d2cdeff41f8"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","2dc08575467db1a56c82c5b4d289b274"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","0ed029841003fec39fcd62226fcfa058"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","a5e7f4ddebe3ccf16bfec87955ec1b76"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","27d29ad9a82bef5b4d6efd3c6ed07815"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","478fd25f83d79f7ae54f4ace7b46ae94"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","bab3307454329acf0f1e718763858ffb"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","75877d9760b89f10d52403e0b64123ad"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","47276174a95e97623b63441dfc9c4d5d"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","05fd0140868d9919d8090f2a4ae3878d"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","d0434311d9dfc24aee74966d430d12db"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","00cda583433b8ab22528a1756e1ae111"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","825d2ca91b7e335e1cafc78fe9f1a499"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","e1cc5a2266c424153dc783ef7e624e45"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","5101c9da2c53a6418ae3db8fbeccbab8"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","186f7cbf60df6c9af8dcd598b46cc2ed"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","bb079806ee4a6e8eb6ff51e9affdd015"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","ee076ac7d6986f850183049a75281e5f"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","4c3e739997f9b79939b569ba104df422"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","3385e22bc606f56dbe781e21e98723c6"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","df85b33fb1f3213b2d4f8a4bce40276e"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","29795cffd2cd964c0362973db7883134"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","675a9b1c27cc6b8789bab7113e33ad2c"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","defefc77fff22a3cedababc2113bdeb1"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","ebde15cedd09ba2d7d46d72c2f8a45c1"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","436dfc90e30da12464785e1f46ea9084"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","ee76297a1fb4e6a65f53b72fec7b5520"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","aed9e12992a759b57d4955418898137a"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","88a465e18b3ee7d370acd6c314e9807b"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","965d5d5fa5f189e4e41cea5e6ecf02c3"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","84811ad578167381402f2acf77b5ef67"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","de18e0905cc1aaadb75a8c7752181d89"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","0082c5874f51e5a8457ccb3275e3817e"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","22dd7e0f030f39d4377829d0120d0582"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","304c3fe873bdd5f6f257331f878ed111"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","c60ff0f603cf56d12e721c2f42160de4"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","ccfdce1052f9d5389b467f2ead48de42"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","8d1a0e674b4630bbcdaadfd53c085a69"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","a974219ecffc823e17c3451ff846765f"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","f845221c921e410d8f7d0e3ba5a1f47f"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","13f41b7b0e85eb8bb42522f3ec5ab18c"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","b1fde94d8eeb7ae023a3dda213349ff7"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","e71c3cc2694f6eaa9aa391090186b76a"],["E:/qinhao/hexo/public/2021/07/21/login_demo/index.html","54345b1515b61632f6fa5707e46dec99"],["E:/qinhao/hexo/public/2021/08/01/dataStructure-1/index.html","e97869fb1f069f22aab6d7ee10e96211"],["E:/qinhao/hexo/public/2021/08/02/dataStructure-2/index.html","efe94a6094ced01d3a0d2f6b7207c125"],["E:/qinhao/hexo/public/2021/09/01/stock_1/index.html","1ac29515bcbf442a012562cd5b78223b"],["E:/qinhao/hexo/public/2021/09/02/stock_2/index.html","5042bcf7c589e9979e44467541c312b9"],["E:/qinhao/hexo/public/2021/09/03/stock_3/index.html","ccbba6a1156fab274d2a2eaeea63ab56"],["E:/qinhao/hexo/public/2021/09/04/stock_4/index.html","67696bad23eebd6bba6683ec9c829dd0"],["E:/qinhao/hexo/public/2021/09/05/stock_5/index.html","6f019e060587c381168c05afe7a8c9b9"],["E:/qinhao/hexo/public/2021/09/06/stock_6/index.html","ab0fef87f9f583e6820f35b521c60a61"],["E:/qinhao/hexo/public/2021/09/07/stock_7/index.html","2060183ffbcf58e7b2f331e7af995984"],["E:/qinhao/hexo/public/2021/09/08/stock_8/index.html","6c3d8a2402382508a57e307c3e526ce4"],["E:/qinhao/hexo/public/2021/09/09/stock_9/index.html","958690b2217b51fa2f137f6ceb022caf"],["E:/qinhao/hexo/public/2021/09/10/stock_10/index.html","dfdba9c1a785b9a3c91c33adba654e63"],["E:/qinhao/hexo/public/2021/09/11/stock_11/index.html","765a3d2af42d17734c703e2e3f23299d"],["E:/qinhao/hexo/public/2021/09/12/stock_12/index.html","7dc8c812811eb625ae2544d1d7d4c7cb"],["E:/qinhao/hexo/public/2021/09/13/stock_13/index.html","77058260a3306081efd968f35c6b5566"],["E:/qinhao/hexo/public/2021/09/14/stock_14/index.html","a506314a7fe6119a1bbc88c2f9632f76"],["E:/qinhao/hexo/public/2021/09/15/stock_15/index.html","dae3e08aca97bf75355f307ab2f4ee3c"],["E:/qinhao/hexo/public/2021/10/01/system1/index.html","a228c30bdf67b33abffc86eab9c0305f"],["E:/qinhao/hexo/public/2021/10/02/system2/index.html","2d1dccedf16b8e8d1ea8aaacd5478d47"],["E:/qinhao/hexo/public/2021/10/03/system3/index.html","1316a38a4e06db92848b3e32ffaadcd1"],["E:/qinhao/hexo/public/2021/10/04/system4/index.html","57d718f8aa30389070b20adac45cf574"],["E:/qinhao/hexo/public/2021/10/05/system5/index.html","6bd1b01a7fb0f22f3860697138ac9c74"],["E:/qinhao/hexo/public/2021/10/06/system6/index.html","e481b72b846f0717fc7797aa6a360fe9"],["E:/qinhao/hexo/public/2021/10/07/system7/index.html","bf7d92b952d1f81b093b194414274b23"],["E:/qinhao/hexo/public/2021/10/08/system8/index.html","46515108c4842be1e80d5def085b25a4"],["E:/qinhao/hexo/public/2021/10/09/system9/index.html","b1f34948776cd27a8d4a25a1dfc889d4"],["E:/qinhao/hexo/public/2021/10/10/system10/index.html","c933f6e6c5d8fffde7c2348da1f7bd3b"],["E:/qinhao/hexo/public/2021/10/11/system11/index.html","8051e99bd8f65f3f1730723d7fb60b00"],["E:/qinhao/hexo/public/2021/10/12/system12/index.html","e5b33907cea7010dca74a4f60a5dfdb8"],["E:/qinhao/hexo/public/ByteDanceVerify.html","88c167018d94f8400ad71bd05e38b53e"],["E:/qinhao/hexo/public/about/index.html","48f07828cb0fa7ffe7873192e4515034"],["E:/qinhao/hexo/public/archives/2020/01/index.html","8d8ef99a19332fdd94e388f8a7895cde"],["E:/qinhao/hexo/public/archives/2020/02/index.html","3846eedc68212161d4453570d064854e"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","2d68484a087521a9d33d2d1198bed387"],["E:/qinhao/hexo/public/archives/2020/03/index.html","1e2765133c795319a03750516e986586"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","ccecf471ad904a2220fa0196cdcff0a9"],["E:/qinhao/hexo/public/archives/2020/04/index.html","69f8e126f9b009e44d5bc10a9229f042"],["E:/qinhao/hexo/public/archives/2020/05/index.html","a4675978a69e74a26639fb2ba3ffda33"],["E:/qinhao/hexo/public/archives/2020/06/index.html","64952f4255f9fbb3bded6967963daa77"],["E:/qinhao/hexo/public/archives/2020/07/index.html","4791188c94474035c603369002db6771"],["E:/qinhao/hexo/public/archives/2020/08/index.html","01e22f0180e11b025da9466b20e2a412"],["E:/qinhao/hexo/public/archives/2020/10/index.html","52585a0a65d5235e8a98bfe8612fa74b"],["E:/qinhao/hexo/public/archives/2020/11/index.html","2eddf569900e5d402d3bcf4a02283e87"],["E:/qinhao/hexo/public/archives/2020/index.html","9007c9b028ff8364c36b89789f31f0fa"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","a9a5656b9e04ac38c7766d555a8ab180"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","3e13e9e3af888bf279f76e158b67b1cc"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","7f609bd7b72c3607df9f87c9b4884a6c"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","e1465860affd067462512b8ec6352101"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","cd7d2d7661ab9488336dc2b5e289f589"],["E:/qinhao/hexo/public/archives/2021/03/index.html","4c39c9631e63f5ed1d44273f9de233e0"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","ba65f799f3249c3560d02b1a55ea02fd"],["E:/qinhao/hexo/public/archives/2021/04/index.html","8c8138c9e5afd1165453204b7f31feb0"],["E:/qinhao/hexo/public/archives/2021/05/index.html","d6ba846a680de54c58edd0863d9f68d7"],["E:/qinhao/hexo/public/archives/2021/06/index.html","fa07c1763ef7c923b44bfda968508907"],["E:/qinhao/hexo/public/archives/2021/07/index.html","8fef43af085dca796f6ccb975e3e8a18"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","5e6709eb61a2f8175d8fabf307bd39b4"],["E:/qinhao/hexo/public/archives/2021/08/index.html","6a69657148b2a6e94f020c48581ea83a"],["E:/qinhao/hexo/public/archives/2021/09/index.html","271918d87de2f157257637fe629c48ac"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","b88cb86844962aebacfaece967655b58"],["E:/qinhao/hexo/public/archives/2021/10/index.html","f5c909f25d94c5f10a423caf4ccf7085"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","5f46f8c015e84533f78d65f3779c2080"],["E:/qinhao/hexo/public/archives/2021/index.html","0b0080ba863554feb6e3101a424be654"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","28bee10af760eecce11f34dce20fe176"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","f5e944aee3e3072b0b365979fbf0b5f1"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","ad0e6ef3baf2e00a354ef64e13838b1f"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","6fd0db060bfcf74cf92af1db79831f51"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","707c8ab8e12e628ad4c264c85113c276"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","6931a7cbe045eef8ac4673ed1beb02f4"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","6d0a18465a08bc318a946bb5153a5da4"],["E:/qinhao/hexo/public/archives/index.html","87100cef4c7fcacf032ea1c43907d256"],["E:/qinhao/hexo/public/archives/page/10/index.html","e306cc901843881839e7b529772a87d7"],["E:/qinhao/hexo/public/archives/page/11/index.html","e306cc901843881839e7b529772a87d7"],["E:/qinhao/hexo/public/archives/page/12/index.html","e306cc901843881839e7b529772a87d7"],["E:/qinhao/hexo/public/archives/page/13/index.html","3623ce612a990caa8342b13bdf609cf8"],["E:/qinhao/hexo/public/archives/page/2/index.html","87100cef4c7fcacf032ea1c43907d256"],["E:/qinhao/hexo/public/archives/page/3/index.html","74d5a09b9940fb50315a4d19ba042e75"],["E:/qinhao/hexo/public/archives/page/4/index.html","74d5a09b9940fb50315a4d19ba042e75"],["E:/qinhao/hexo/public/archives/page/5/index.html","74d5a09b9940fb50315a4d19ba042e75"],["E:/qinhao/hexo/public/archives/page/6/index.html","74d5a09b9940fb50315a4d19ba042e75"],["E:/qinhao/hexo/public/archives/page/7/index.html","74d5a09b9940fb50315a4d19ba042e75"],["E:/qinhao/hexo/public/archives/page/8/index.html","e306cc901843881839e7b529772a87d7"],["E:/qinhao/hexo/public/archives/page/9/index.html","e306cc901843881839e7b529772a87d7"],["E:/qinhao/hexo/public/artitalk/index.html","8797763dd71acfe85cb84a09868d0ea7"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","3e8f5449bef2da7dffdd38bd2dbf65f4"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","1e8bce5036aa9be08a839b530981e75a"],["E:/qinhao/hexo/public/categories/Java/index.html","51947a5fb79500f1680a0d4e129bf20a"],["E:/qinhao/hexo/public/categories/Linux/index.html","70845edc59902977dc396fb4b7a2658f"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","bc57e3f8b28b31db0b526225f7cf9836"],["E:/qinhao/hexo/public/categories/Python/index.html","8d81c33d8140b2538673ea67feb758d4"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","78c9d7a57ffe20af9f6124095f79a4ab"],["E:/qinhao/hexo/public/categories/交换机/index.html","0ae4e877c19ae909ce0906647af29b65"],["E:/qinhao/hexo/public/categories/前端学习/index.html","f28c0b1ef093287d7b7dbf23d8530ba7"],["E:/qinhao/hexo/public/categories/华为认证/index.html","cb41328d46edbb6ac0cf21fb757069ce"],["E:/qinhao/hexo/public/categories/小技巧/index.html","f01a63647065ea51fbd0ac4965ca2d5a"],["E:/qinhao/hexo/public/categories/操作系统/index.html","979860829fcf560541acb7b1ff8e065c"],["E:/qinhao/hexo/public/categories/操作系统/page/2/index.html","5277f0939adead2e1fcb7fb2a8d70ab6"],["E:/qinhao/hexo/public/categories/数据库/index.html","aacddad1ba16a6d5fbffec5c97847519"],["E:/qinhao/hexo/public/categories/数据结构/index.html","3d080ac110a3cee0e3b01216e6b8409d"],["E:/qinhao/hexo/public/categories/服务器/index.html","b9a53c9981ce29ed83e1082f915ccfbd"],["E:/qinhao/hexo/public/categories/算法基础/index.html","18150dfbe163578bba21081cb82d09e6"],["E:/qinhao/hexo/public/categories/网络安全/index.html","475fc227e6e8bc66d8a466ca5c717161"],["E:/qinhao/hexo/public/categories/股票知识/index.html","1711ddd63c13af9aa9a22857462be0a3"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","500eab5dcd2cc4ce92de07660b066196"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","7fdb4b6a1c690b4897acccc35f9be579"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","62c1e404cc08b100c6e40d6d2f4da7d3"],["E:/qinhao/hexo/public/categories/软件破解/index.html","eb51a41099df058a01a431d79799cc28"],["E:/qinhao/hexo/public/categories/通信技术/index.html","d5462bfc3ef8f7f023532e4319244088"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","fa2e8db59ce73f5c3b7818ac251e5fd3"],["E:/qinhao/hexo/public/category/index.html","566a160b2fa3f9e57dcc020b5a8f256e"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","36488b9ba6c7b685a641aac8b607a82c"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","9e53d477ae3bf37b4b592eb692ae16c3"],["E:/qinhao/hexo/public/image/png/circle.png","5d85080e43c457b35b23f4ad8ceaa6c5"],["E:/qinhao/hexo/public/image/png/left_ptr.png","b893704c321e35374e4bc97adb72048d"],["E:/qinhao/hexo/public/image/png/openhand.png","b040b0a64d22b7f40388391ac744949d"],["E:/qinhao/hexo/public/image/png/pointer.png","14c9f722890f733da3ae7fb15013a81a"],["E:/qinhao/hexo/public/image/png/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["E:/qinhao/hexo/public/image/png/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["E:/qinhao/hexo/public/image/png/safari.png","5e83f8d5772a61cd7036bd7bf3f84563"],["E:/qinhao/hexo/public/image/png/text.png","80d9f4da0a0c20b02898f23b035b17c8"],["E:/qinhao/hexo/public/image/png/weibo.png","2af288384e8aee34e94adae792942d2c"],["E:/qinhao/hexo/public/image/png/zoom-in.png","bf6da71dce828553d50a1ce3fd65163a"],["E:/qinhao/hexo/public/image/png/zoom-out.png","d5da599e9fd8344973c64b8ca109958b"],["E:/qinhao/hexo/public/image/svg/1f37b.svg","5e2ea03aa4963cda5e91d395c2587e6b"],["E:/qinhao/hexo/public/image/svg/1f389.svg","b052a4bef57c1aa73cd7cff5bc4fb61d"],["E:/qinhao/hexo/public/image/svg/1f4cc.svg","09204f6a96455580e749454b7449aa82"],["E:/qinhao/hexo/public/image/svg/1f4f0.svg","51cd8436fb99a6f12257db34780fb7a7"],["E:/qinhao/hexo/public/image/svg/1f516.svg","2424297076c0d1c8499820fc4f9d9f57"],["E:/qinhao/hexo/public/image/svg/1f5c3.svg","b542a360ed4cdceeac3bca73b455ebc6"],["E:/qinhao/hexo/public/index.html","567412e7b300d259beee7358b5251363"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/mylist/index.html","aef71b9871410ef80c46200571244e0f"],["E:/qinhao/hexo/public/page/10/index.html","ff74c574907d2693acc5017291e7b6a3"],["E:/qinhao/hexo/public/page/11/index.html","2d3a7201e448274eb2fe5e670e0e92fd"],["E:/qinhao/hexo/public/page/12/index.html","f9f18aaff78569730b360c150554534a"],["E:/qinhao/hexo/public/page/13/index.html","970ba0743ae32ae91b94ed7ee0fd24c1"],["E:/qinhao/hexo/public/page/2/index.html","b4dc5225e43692d8ccf24b8d40728bd2"],["E:/qinhao/hexo/public/page/3/index.html","310bd478e804f4ab5913179c8ebc94cf"],["E:/qinhao/hexo/public/page/4/index.html","650f740fa7c8bdc5a91bfaea9f35e432"],["E:/qinhao/hexo/public/page/5/index.html","28eae9f29ca7971eb1d0900ef1c90b88"],["E:/qinhao/hexo/public/page/6/index.html","adb7f905a390ea3e6ddb1dae4062eae0"],["E:/qinhao/hexo/public/page/7/index.html","f78742f8fc10b1e01b10ae5cf4bfaab6"],["E:/qinhao/hexo/public/page/8/index.html","c68dbbe12b49e50611db421c5c9b75ca"],["E:/qinhao/hexo/public/page/9/index.html","df386cdf7a1c03ea1714f2439e568274"],["E:/qinhao/hexo/public/sw-register.js","07d2e3e918d81a457353bd5565c7ac1a"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","d3df0f15774dfaabcd88d309c1beb719"],["E:/qinhao/hexo/public/utils/css/all.min.css","84d8ad2b4fcdc0f0c58247e778133b3a"],["E:/qinhao/hexo/public/utils/css/font-awesome-animation.min.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/qinhao/hexo/public/utils/css/solarized-light.min.css","769d25bae36c449b6612b98809d01041"],["E:/qinhao/hexo/public/utils/css/waves.min.css","ad8ce7fc1d688135eedeedee534aa9a2"],["E:/qinhao/hexo/public/utils/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/js/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["E:/qinhao/hexo/public/utils/js/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["E:/qinhao/hexo/public/utils/js/artitalk.js","d94fe7817fad4ecae5681cbde76a4acc"],["E:/qinhao/hexo/public/utils/js/bbtalk.min.js","a1ab1de2ae261228a7532e855f6980a5"],["E:/qinhao/hexo/public/utils/js/clipboard.min.js","27784b7376dd992368c71b6c5559f358"],["E:/qinhao/hexo/public/utils/js/comment_typing.js","ab7b34f055a2bf8e036daec67e968d1a"],["E:/qinhao/hexo/public/utils/js/flying-pages.min.js","c20e3f49966e71df80be9a6af59449dd"],["E:/qinhao/hexo/public/utils/js/highlight.min.js","a370252e88fa5c6611ab5005c7b87b96"],["E:/qinhao/hexo/public/utils/js/instant_page.js","1a3be845085b8d94a2997a3a472feb42"],["E:/qinhao/hexo/public/utils/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["E:/qinhao/hexo/public/utils/js/jquery.min.js","dc5e7f18c8d36ac1d3d4753a87c98d0a"],["E:/qinhao/hexo/public/utils/js/lazyload.min.js","0fcd5822c9e8af807a14d3985faf91c8"],["E:/qinhao/hexo/public/utils/js/scrollreveal.min.js","f7d329c68b849d6685a7462c22f47ea2"],["E:/qinhao/hexo/public/utils/js/waves.min.js","9a5b3dfca09d9e3005dc697162d4bc65"],["E:/qinhao/hexo/public/utils/ttf/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["E:/qinhao/hexo/public/utils/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.ttf","ede4ff54ccb46fe67622dbcffeb90fdf"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.woff","07fa0741d97758debce36520d5a12d5b"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.ttf","04842b94683f70c18aeb76b5a27cd221"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.woff","f48a8829bec665258b9c85b23ecbf3c0"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.ttf","5f2f8485a00387b7a1d89e793555991f"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.woff","42d66a3eb75eac2b4fc0ee58e9846497"]];
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







